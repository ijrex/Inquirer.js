/**
 * Input prompt example
 */

import inquirer from '../lib/inquirer.js';
import InputStartingVal from '../lib/prompts/input-starting-value.js';

inquirer.registerPrompt('input-starting-value', InputStartingVal);

const questions = [
  {
    type: 'input-starting-value',
    name: 'package_name',
    message: "What's your package name",
    initialValue: '@bonnie-eilish/',
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default() {
      return 'Doe';
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
