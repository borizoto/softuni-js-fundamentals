function modernTimesOfHashtag(string) {
    const arr = string.split(" ");
    for (const curWord of arr) {
        let isTrue = false;
        if (curWord.includes("#") && curWord.length > 1) {
            const curWordArr = Array.from(curWord);
            curWordArr.shift();
            for (let i = 0; i < curWordArr.length; i++) {
                if (curWordArr[i] >= "a" && curWordArr[i] <= "z" || curWordArr[i] >= "A" && curWordArr[i] <= "Z") {
                    isTrue = true;
                } else {
                    isTrue = false;
                    break;
                }
            }

            if (isTrue) {
                console.log(curWordArr.join(""));
            }
        }
    }
}