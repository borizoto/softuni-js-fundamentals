function login(input) {

    let tryCount = 0;
    let counter = 0;
    let username = input[counter];
    counter++;

    let rightPassword = "";

    for (let i = username.length - 1; i >= 0; i--) {
        rightPassword += username[i];
    }

    let passwordTry = input[counter];
    counter++;

    while (passwordTry !== rightPassword) {
        tryCount++;
        if (tryCount === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log(`Incorrect password. Try again.`);

        passwordTry = input[counter];
        counter++;
    }

    if (passwordTry === rightPassword) {
        console.log(`User ${username} logged in.`);
    }
}