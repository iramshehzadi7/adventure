import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreases() {
        let fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreases() {
        let fuel = 100;
    }
}
//ask player name & select opponent
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter your name"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select your opponent",
    choices: ["sceleton", "assassin", "zoombie"]
});
//gather data
let p1 = new player(player.name);
let o1 = new player(player.name);
if (opponent.select == "skeleton") {
    console.log(`$${chalk.bold.green(p1.name)})VS ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "select your opponent", choices: ["Attack", "Drink portion", "Run for your life"]
    });
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecreases();
            console.log("");
        }
        if (ask.opt == "Drink portion") {
            console.log("drink");
        }
        if (ask.opt === "Run for your life") {
        }
    }
}
