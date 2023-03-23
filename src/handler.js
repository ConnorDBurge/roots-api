import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";

import { server } from "./server.mjs";

export const handler = startServerAndCreateLambdaHandler(
  server,
  // We will be using the Proxy V2 handler
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);

/**
 * @TODO Secure /graphql with Cognito user pool
 * @TODO Deploy with GitHub Actions
 */
