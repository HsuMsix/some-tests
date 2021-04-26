import containsDuplicate from '../containsDuplicate';

describe('Test containsDuplicate', () => {
    test('[2, 4, 6, 1, 74, 36, 6] contains duplicate number.', () => {
        expect(containsDuplicate([2, 4, 6, 1, 74, 36, 6])).toBe(true);
    });

    test('[2, 4, 6, 1, 74, 36] not contains duplicate number.', () => {
        expect(containsDuplicate([2, 4, 6, 1, 74, 36])).toBe(false);
    });
})