import { SSTConfig } from "sst";
import {Backend } from "./stacks/BackendStack";

export default {
  config(_input) {
    return {
      name: "serverless-geo",
      region: "eu-north-1",
    };
  },
  stacks(app) {
    app.stack(Backend);
  }
} satisfies SSTConfig;
