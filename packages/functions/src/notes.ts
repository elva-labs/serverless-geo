import { ApiHandler } from "sst/node/api";
import { Notes } from "@serverless-geo/core/src/notes";

export const create = ApiHandler(async (_evt) => {
  await Notes.create();

  return {
    statusCode: 200,
    body: "Note created",
  };
});

export const get = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: JSON.stringify(["TODO"]),
  };
});
