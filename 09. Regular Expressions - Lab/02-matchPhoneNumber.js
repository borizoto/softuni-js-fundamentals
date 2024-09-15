function matchPhoneNumber(string) {
    const regex = /[+]359([- ])2\1(\d{3})\1(\d{4})\b/gm;
    const validNames = [];
    let validName = null;

    while ((validName = regex.exec(string)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(", "));
}