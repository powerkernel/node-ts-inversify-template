/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import config from 'config';
import http from 'http';
import fs from 'fs';

/* local imports */
import app from './express';

async function startApolloServer() {
  const typeDefs = gql(fs.readFileSync(`${__dirname}/schema.graphql`, { encoding: 'utf8' }));

  const resolvers = await import('./resolvers');

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });

  const port = config.get('port');
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  const environment = config.get('env');
  console.log(
    `🚀 Server ${environment} env is ready at http://localhost:${port}${server.graphqlPath}`
  );
}
export { startApolloServer };
