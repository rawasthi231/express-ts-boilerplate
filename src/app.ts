import express from "express";

import { config } from "dotenv";

import router from "./api";

import "./subscribers";

class App {
  public app: express.Application;
  private port: number;
  private environment: string;

  constructor() {
    config();
    this.port = process.env.PORT ? parseInt(process.env.PORT) : 8000;
    this.environment = process.env.NODE_ENV || "dev";
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    // Add the router to the app
    this.app.use("/api", router);

    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    // Add a health check route
    this.app.get("/ping", (_: express.Request, res: express.Response) => {
      res.status(200).send("PONG 🏓");
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(
        `App is running on port ${this.port} ✅ in ${this.environment} environment 🚀`
      );
    });
  }
}

const app = new App();

app.listen();
