import { ApolloServer } from "@apollo/server";

import { resolvers, typeDefs } from "./schema.mjs";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
