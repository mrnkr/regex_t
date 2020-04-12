declare module '@mrnkr/regex_t' {
  export class regex_t {
    constructor(pattern: string);
    match(toMatch: string): Promise<boolean>;
  }
  export default regex_t;
}
