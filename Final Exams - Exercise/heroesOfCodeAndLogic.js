function heroesOfCodeAndLogic(arr) {
    const heroesObj = {};
    const heroCounter = Number(arr.shift());
    for (let i = 0; i < heroCounter; i++) {
        const string = arr.shift();
        let [name, hp, mana] = string.split(" ");
        hp = Number(hp);
        mana = Number(mana);

        heroesObj[name] = { HP: hp, MP: mana };
    }

    let string = arr.shift();

    while (string !== "End") {
        const tokens = string.split(" - ");
        const command = tokens.shift();

        if (command === "CastSpell") {
            const name = tokens.shift();
            const manaNeeded = Number(tokens.shift());
            const spellName = tokens.shift();

            if (heroesObj[name].MP >= manaNeeded) {
                heroesObj[name].MP -= manaNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${heroesObj[name].MP} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command === "TakeDamage") {
            const name = tokens.shift();
            const damage = Number(tokens.shift());
            const attacker = tokens.shift();

            heroesObj[name].HP -= damage;

            if (heroesObj[name].HP > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[name].HP} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroesObj[name];
            }

        } else if (command === "Recharge") {
            const name = tokens.shift();
            const amount = Number(tokens.shift());
            let recharged = 0;
            const curMana = heroesObj[name].MP;

            heroesObj[name].MP += amount;

            if (heroesObj[name].MP >= 200) {
                heroesObj[name].MP = 200
                recharged = 200 - curMana;
            } else {
                recharged = amount;
            }

            console.log(`${name} recharged for ${recharged} MP!`);

        } else if (command === "Heal") {
            const name = tokens.shift();
            const amount = Number(tokens.shift());
            let healed = 0;
            const curHp = heroesObj[name].HP;

            heroesObj[name].HP += amount;

            if (heroesObj[name].HP >= 100) {
                heroesObj[name].HP = 100
                healed = 100 - curHp;
            } else {
                healed = amount;
            }

            console.log(`${name} healed for ${healed} HP!`);
        }

        string = arr.shift();
    }

    const entries = Object.entries(heroesObj);

    for (const [heroName, data] of entries) {
        console.log(heroName);
        console.log(`  HP: ${data.HP}`);
        console.log(`  MP: ${data.MP}`);
    }
}