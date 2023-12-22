import jwt from "jsonwebtoken";
import config from "../config/index.js";

export function getToken(data) {
  return jwt.sign(data, config.jwtKey);
}

export function verifyToken(token) {
  return jwt.verify(token, config.jwtKey);
}
