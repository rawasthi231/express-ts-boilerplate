import { QueryFailedError } from "typeorm";
import { EVENT_TYPES, eventEmitter } from "../helpers/events";

import Database from "../models/connection";

import { User } from "../models/entities/users";

export default class UserService {
  async signup(user: Partial<User>) {
    try {
      const userModel = await Database.getRepository(User);

      // Save user to database
      const data = await userModel.save(user);

      eventEmitter.emit(EVENT_TYPES.USER_SIGNUP, data);
      // ...
      return Promise.resolve(data);
    } catch (error) {
      console.log("Error in signup: ", error);

      if (error instanceof QueryFailedError) {
        return "An account already exist with this email";
      }
      return null;
    }
  }
}
