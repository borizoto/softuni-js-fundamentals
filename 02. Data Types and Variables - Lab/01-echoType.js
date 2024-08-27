function echoType(parameter) {
    const paramType = typeof(parameter);
    console.log(paramType);

    const output = paramType === "string" || paramType === "number" ? console.log(parameter) : console.log(`Parameter is not suitable for printing`);
}