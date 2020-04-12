import Module from './a.out';

export class regex_t {
  constructor(pattern) {
    this.pattern = pattern;
    this.pending = [];
    Module.onRuntimeInitialized = () => {
      this._matchRegex = Module.cwrap('match_regex', 'number', ['string', 'string']);
      this.pending.forEach(({ resolve, toMatch }) => {
        resolve(this._matchRegex(this.pattern, toMatch));
      });
    };
  }

  match(toMatch) {
    return new Promise(resolve => {
      if (!this._matchRegex) {
        this.pending.push({ resolve, toMatch });
      } else {
        resolve(!!this._matchRegex(this.pattern, toMatch));
      }
    });
  }
}

export default regex_t;
