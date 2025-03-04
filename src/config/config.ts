import { registerAs } from "@nestjs/config";
import * as process from "node:process";
import { config } from "dotenv";
config();

export const ENV = "ENV";

export default registerAs(ENV, () => ({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
}));
