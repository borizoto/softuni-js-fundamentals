function factorialDivision(num1, num2) {
    function factoriel(x) {
        let result = 1;
        for (let i = 1; i <= x; i++) {
            result *= i;
        }
        return result;
    }
    console.log((factoriel(num1) / factoriel(num2)).toFixed(2));
}