import regex_t from '../src/index';

describe('matchRegex', () => {
  let regex;

  beforeAll(() => regex = new regex_t('^09[1-9]\\s[0-9]{3}\\s[0-9]{3}$'));

  test('should have a module', () => {
    expect(regex_t).toBeDefined();
  });

  test('should match', async () => {
    expect(await regex.match('099 158 578')).toBeTruthy();
  });

  test('should not match', async () => {
    expect(await regex.match('099158 578')).toBeFalsy();
  });

  test('should resolve', () => {
    return expect(new Promise(resolve => {
      regex.match('099 158 578').then(resolve);
    })).resolves
      .toBeTruthy();
  });
});
