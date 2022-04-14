/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { resolvers as systemResolvers } from "./../domains/system/graphql/";

const defaultResolver = {
  Query: {
    time: () => {
      return { data: new Date().toISOString() };
    },
  },
  Mutation: {
    ping: () => {
      return { data: "pong" };
    },
  },
};

export default [defaultResolver, systemResolvers];
