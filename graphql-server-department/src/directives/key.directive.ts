import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { GraphQLField } from 'graphql';

/**
 * This is a dummy implementation of the key directive for the normal mode
 */
export class FakeKeyDirective extends SchemaDirectiveVisitor {
  /**
   * Fake Key definition
   * @param _field Field of graphql
   */
  visitFieldDefinition(_field: GraphQLField<any, any>) {
    _field.args;
  }
}
