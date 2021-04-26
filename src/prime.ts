const isPrime = (num: number): boolean => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
};

const listPrime = (num: number): number => {
    let n = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) n++;
    }
    return n;
};

export { isPrime, listPrime };