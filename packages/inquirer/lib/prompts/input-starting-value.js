/**
 * `input starting value` type prompt
 */

import Input from './input.js';

/**
 * Extention of the Input prompt to add a starting value.
 */

export default class InputStartingVal extends Input {
  constructor(question, rl, answers) {
    super(question, rl, answers);
    this.startingVal = question.initialValue || '';
  }

  initStartingVal() {
    this.rl.line += this.startingVal;
    this.rl.cursor += this.startingVal.length;
  }

  run() {
    this.initStartingVal();

    return new Promise((resolve, reject) => {
      this._run(
        (value) => resolve(value),
        (error) => reject(error)
      );
    });
  }
}
