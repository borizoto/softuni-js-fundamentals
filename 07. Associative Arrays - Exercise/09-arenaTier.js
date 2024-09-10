function arenaTier(arr) {
    const gladiatorPoll = {};
    const totalGladiatorPower = {};

    for (const string of arr) {
        if (string.includes("vs")) {
            const [duelist1, duelist2] = string.split(" vs ");
            if (gladiatorPoll.hasOwnProperty(duelist1) && gladiatorPoll.hasOwnProperty(duelist2)) { // if true, they can fight
                const duelist1Techniques = Object.keys(gladiatorPoll[duelist1]);
                const duelist2Techniques = Object.keys(gladiatorPoll[duelist2]);
                let willFight = false;

                for (const curTech of duelist1Techniques) {
                    if (duelist2Techniques.includes(curTech)) { // if true they have common techs and will fight
                        willFight = true;
                        break;
                    }
                }

                if (willFight) {
                    const duelist1Power = totalGladiatorPower[duelist1];
                    const duelist2Power = totalGladiatorPower[duelist2];

                    if (duelist1Power > duelist2Power) {
                        delete gladiatorPoll[duelist2];
                        delete totalGladiatorPower[duelist2];
                    } else if (duelist1Power < duelist2Power) {
                        delete gladiatorPoll[duelist1];
                        delete totalGladiatorPower[duelist1];
                    }
                }
            }
        } else if (string === "Ave Cesar") {
            break;
        } else {
            let [name, skill, curPower] = string.split(" -> ");
            curPower = Number(curPower);

            if (!gladiatorPoll.hasOwnProperty(name)) {
                gladiatorPoll[name] = {};
            }

            if (!gladiatorPoll[name].hasOwnProperty(skill)) {
                gladiatorPoll[name][skill] = curPower;
                if (!totalGladiatorPower.hasOwnProperty(name)) {
                    totalGladiatorPower[name] = curPower;
                } else if (totalGladiatorPower.hasOwnProperty(name)) {
                    totalGladiatorPower[name] += curPower;
                }
            }

            const lastPower = gladiatorPoll[name][skill];
            if (curPower > lastPower) {
                gladiatorPoll[name][skill] = curPower;
            }
        }
    }
    const totalPowerEntries = Object.entries(totalGladiatorPower);
    totalPowerEntries.sort((arr1, arr2) => arr2[1] - arr1[1] || arr1[0].localeCompare(arr2[0]));

    for (const [name, totalPower] of totalPowerEntries) {
        console.log(`${name}: ${totalPower} skill`);

        const entries = Object.entries(gladiatorPoll[name]);
        entries.sort((arr1, arr2) => arr2[1] - arr1[1] || arr1[0].localeCompare(arr2[0]));

        for (const [technique, skill] of entries) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}