function revealWords(string, template) {
    const wordsToReplace = string.split(", ");
    const templateArr = template.split(" ");

    for (const curWord of templateArr) {
        if (curWord.includes("*")) {
            const curLength = curWord.length;

            wordsToReplace.forEach(element => {
                if (element.length === curLength) {
                    template = template.replace(curWord, element)
                }
            });
        }
    }
    console.log(template);
}