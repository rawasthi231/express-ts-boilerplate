import { EventEmitter } from "events";
import { User } from "../models/entities/users";

export const EVENT_TYPES = {
  USER_SIGNUP: "user.signup",
  USER_LOGIN: "user.login",
  USER_LOGOUT: "user.logout",
  USER_FORGOT_PASSWORD: "user.forgot-password",
  USER_OTP_VERIFICATION: "user.otp-verification",
} as const;

// Define a mapping from event types to data types
interface EventTypeMap {
  [EVENT_TYPES.USER_SIGNUP]: Partial<User>;
  [EVENT_TYPES.USER_LOGIN]: Partial<User>;
  [EVENT_TYPES.USER_LOGOUT]: Partial<User>;
  [EVENT_TYPES.USER_FORGOT_PASSWORD]: Partial<User>;
  [EVENT_TYPES.USER_OTP_VERIFICATION]: Partial<User>;
}

class TypedEventEmitter<Events> extends EventEmitter {
  /**
   * Emits an event with the specified name and data.
   *
   * If the event name is a valid string, it emits the event using the inherited `emit` method.
   * If the event name is not a valid string, it logs a warning and returns `false`.
   *
   * @param {K | string | symbol} eventName - The name of the event to emit.
   * @param {Events[K]} data - The data to pass with the event.
   *
   * @returns {boolean} - `true` if the event had listeners, `false` otherwise.
   */
  emit<K extends keyof Events>(
    eventName: K | string | symbol,
    data: Events[K]
  ): boolean {
    if (typeof eventName === "string") {
      return super.emit(eventName, data);
    }
    console.warn(`Event name ${String(eventName)} is not a valid event type.`);
    return false;
  }
  /**
   * Registers a listener for a specific event.
   *
   * If the event name is a valid string, it registers the listener using the inherited `on` method.
   * If the event name is not a valid string, it logs a warning and returns the current instance.
   *
   * @param {K | string | symbol} eventName - The name of the event to listen for.
   * @param {(data: Events[K]) => void} listener - The callback function to invoke when the event is emitted.
   *
   * @returns {this} - The current instance, allowing for method chaining.
   */
  on<K extends keyof Events>(
    eventName: K | string | symbol,
    listener: (data: Events[K]) => void
  ): this {
    if (typeof eventName === "string") {
      return super.on(eventName, listener);
    }
    console.warn(`Event name ${String(eventName)} is not a valid event type.`);
    return this;
  }
}

// Create a typed event emitter instance
export const eventEmitter = new TypedEventEmitter<EventTypeMap>();
