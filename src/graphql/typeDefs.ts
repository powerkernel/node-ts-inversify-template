/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */
import { gql } from "apollo-server-express";

import systemSchema from "../domains/system/graphql/typeDefs";

const linkSchema = gql`
  type Query {
    time: StringResponse
  }
  type Mutation {
    ping: StringResponse
  }
  type StringResponse {
    data: String
  }
`;

export default [linkSchema, systemSchema];
