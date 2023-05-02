module.exports = {
  meta: {
    messages: {
      emptyCatch: 'Empty Catch block is not allowed.',
    },
  },
  create(context) {
    return {
      CatchClause(node) {
        if (node.body.body.length === 0) {
          context.report({node: node.body, messageId: 'emptyCatch'});
        }
      },
    };
  },
};
