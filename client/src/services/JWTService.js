import axios from "axios";

export const GenerateJWT = (header, claims, key, cb) => {
  // Send request to /api/GenerateJWT
};
export const DecodeJWT = (sJWS, cb) => {
  // Send request to /api/DecodeJWT
};
export const ValidateJWT = (header, token, key, cb) => {
  // Send request to /api/ValidateJWT
};
