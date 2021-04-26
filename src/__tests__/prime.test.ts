import { isPrime, listPrime } from '../prime';

describe('Test isPrime', () => {
    test('5 is prime number', () => {
        expect(isPrime(5)).toBe(true);
    });

    test('4 is not prime number', () => {
        expect(isPrime(4)).toBe(false);
    });
})

describe('Test listPrime', () => {
    test('There are 4 prime numbers less than 9.,', () => {
        expect(listPrime(9)).toBe(4);
    });
})
