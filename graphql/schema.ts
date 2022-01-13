// /graphql/schema.ts
import { Kind } from 'graphql';
import { makeSchema, scalarType } from 'nexus'
import { join } from 'path'
import * as types from './types';

const DateScalar = scalarType({
  name: "dateTime",
  asNexusMethod: "dateTime",
  description: "Date custom scalar type",
  parseValue(value) {
    const date = new Date(value);
    return date.getTime();
  },
  serialize(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  },
});

export const schema = makeSchema({
  types: [types, DateScalar],
  outputs: {
    typegen: join(process.cwd(), 'node_modules', '@types', 'nexus-typegen', 'index.d.ts'),
    schema: join(process.cwd(), 'graphql', 'schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'graphql', 'context.ts'),
  },
})
