const {RuleTester} = require('eslint');
const noEmptyCatchRule = require('./no-empty-catch.js');
const ruleTester = new RuleTester();
ruleTester.run('no-empty-catch', noEmptyCatchRule, {
  valid: [
    {
      code: 'try { foo() } catch (e) { bar() }',
    },
  ],
  invalid: [
    {
      code: 'try { foo() } catch (e) {}',
      // we can use messageId from the rule object
      errors: [{messageId: 'emptyCatch'}],
    },
  ],
});
