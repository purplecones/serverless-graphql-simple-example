import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import {
  GraphQLLimitedString
} from 'graphql-custom-types';

const Query = new GraphQLObjectType({
  name: 'RootSchema',
  description: 'Root Schema',
  fields: () => ({
    id: {type: GraphQLString},
    name: {
      type: GraphQLString,
      resolve: function() {
        return 'test';
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query,
  // mutation: Mutuation
});

export default Schema;
