import { config } from "dotenv";

config();

export default {
  port: process.env.PORT ? Number(process.env.PORT) : 7777,
  jwtKey: process.env.JWT_KEY,
};
