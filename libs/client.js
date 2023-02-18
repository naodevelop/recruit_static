import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "opus-nm",
  apiKey: process.env.API_KEY,
});
