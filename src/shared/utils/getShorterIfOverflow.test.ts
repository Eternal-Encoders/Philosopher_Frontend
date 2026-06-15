import { describe, expect, it } from 'vitest';

import { getShorterIfOverflow } from './getShorterIfOverflow';

describe('getShorterIfOverflow', () => {
  it('returns string unchanged when shorter than limit', () => {
    expect(getShorterIfOverflow('hello', 10)).toBe('hello');
  });

  it('returns string unchanged when equal to limit', () => {
    expect(getShorterIfOverflow('philosophy', 10)).toBe('philosophy');
  });

  it('cuts string and appends ellipsis when longer than limit', () => {
    expect(getShorterIfOverflow('philosopher', 6)).toBe('philos...');
  });

  it('returns empty string for empty input with zero limit', () => {
    expect(getShorterIfOverflow('', 0)).toBe('');
  });

  it('returns only ellipsis when limit is zero and input is not empty', () => {
    expect(getShorterIfOverflow('abc', 0)).toBe('...');
  });
});
