import { StackContext, Api, EventBus } from "sst/constructs";

export function Backend({ stack }: StackContext) {
  const api = new Api(stack, "rest-api", {
    routes: {
      "GET /notes": "packages/functions/src/notes.get",
      "POST /notes": "packages/functions/src/notes.create",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
