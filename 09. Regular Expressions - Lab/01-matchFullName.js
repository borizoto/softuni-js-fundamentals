function solve(string) {
    const result = string.match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm)
    console.log(result.join(" "));
}