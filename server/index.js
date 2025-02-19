import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import http from "http";
import mergedResolver from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolver,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/",
  express.json(),
  cors(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ req }),
  })
)

await new Promise((resolve) =>

  httpServer.listen({ port: 4000 }, resolve),

);

console.log(`🚀 Server ready at http://localhost:4000/`);
