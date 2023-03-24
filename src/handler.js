import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";

import { server } from "./server.js";

export const handler = startServerAndCreateLambdaHandler(server, {
  context: async ({ event, context }) => {
    return {
      lambdaEvent: event,
      lambdaContext: context,
    };
  },
});
