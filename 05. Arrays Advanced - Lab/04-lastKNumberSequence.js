function lastKNumberSequence(n, k) {
    const arr = [1];
    for (let i = 1; i < n; i++) {
    
        let sum = 0;
        const curThreeElsArr = arr.slice(-k);
        for (const curNum of curThreeElsArr) {
            sum += curNum;
        }
        arr.push(sum);
    }
    console.log(arr.join(" "));
}