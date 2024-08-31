function dayOfWeek(number) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (days[number - 1] === undefined) {
        console.log("Invalid day!");
    } else {
        console.log(days[number - 1]);
    }
}