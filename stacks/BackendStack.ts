import { StackContext, Api, Table } from "sst/constructs";

export function Backend({ stack }: StackContext) {
  const table = new Table(stack, "notes", {
    fields: {
      "pk": "string",
      "sk": "string",
      "gsi1pk": "string",
      "gsi1sk": "string",
    },
    primaryIndex: {
      partitionKey: "pk",
      sortKey: "sk",
    },
    globalIndexes: {
      gsi1: {
        partitionKey: "gsi1pk",
        sortKey: "gsi1sk",
      },
    },
  });

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
