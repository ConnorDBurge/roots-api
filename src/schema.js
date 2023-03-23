export const typeDefs = `#graphql
  type Query {
    hello: String
    connor: Name 
  }

  type Name {
    name: String
    age: Int
  }
`;

export const resolvers = {
  Query: {
    hello: () => "Hello World",
    connor: () => ({ name: "Connor", age: 27 }),
  },
};
