// Compute the first 1000000 prime numbers

function startComputingPrimes() {
    setInterval(() => {
        for (var i = 0; i < 100000; i++) {
            isPrime(i);
        }

        function isPrime(n) {
            if (n < 2) {
                return false;
            }
            for (var i = 2; i < n; i++) {
                if (n % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }, 5000);
}
