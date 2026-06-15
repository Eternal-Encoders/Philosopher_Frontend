import { afterEach, describe, expect, it, vi } from 'vitest';

import { getUniqId } from './getUniqId';

describe('getUniqId', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns id with expected prefix and hex part', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);

    expect(getUniqId()).toBe('id8');
  });

  it('returns different ids for different random values', () => {
    const randomSpy = vi.spyOn(Math, 'random');
    randomSpy.mockReturnValueOnce(0.5);
    randomSpy.mockReturnValueOnce(0.75);

    const firstId = getUniqId();
    const secondId = getUniqId();

    expect(firstId).toBe('id8');
    expect(secondId).toBe('idc');
    expect(firstId).not.toBe(secondId);
  });
});
