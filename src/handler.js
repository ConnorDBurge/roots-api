import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";

import { server } from "./server.js";

const requestHandler = handlers.createAPIGatewayProxyEventV2RequestHandler();

// Middleware is an async function whose type is based on your request handler. Middleware
// can read and mutate the incoming event. Additionally, returning an async function from your
// middleware allows you to read and mutate the result before it's sent.
const middlewareFn = async (event) => {
  // read or update the event here
  // optionally return a callback to access the result
  console.log({ event });
  return async (result) => {
    // read or update the result here
    console.log({ result });
  };
};

export const handler = startServerAndCreateLambdaHandler(
  server,
  requestHandler,
  {
    middleware: [middlewareFn],
  }
);
