import { ApolloServer } from "@apollo/server";

import { resolvers, typeDefs } from "./schema.js";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
