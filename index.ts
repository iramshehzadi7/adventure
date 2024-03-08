import chalk from "chalk"
import inquirer from "inquirer"
//classes player & opponent
class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecreases(){
        let fuel = this.fuel - 25
    fuelIncreases(){
        let fuel = this.fuel = 100
        }
}}
class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecreases(){
        let fuel:number = 100
    }
}
//ask player name & select opponent
    let player = await inquirer.prompt({
        type:"input",
        name:"name",
        message:"please enter your name"
    })
    let opponent = await inquirer.prompt({
        type:"list",
        name:"select",
        message:"select your opponent",
        choices:["sceleton","assassin","zoombie"]
    })
    //gather data
    let p1 = new Player(Player.name);
    let o1 = new opponent(opponent.select);
do{

if (opponent.select == "skeleton")}{

    console.log(`$${chalk.bold.italic.green(p1.name)})VS ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"select your opponent",choices:["Attack","Drink portion","Run for your life"]
        
    });
    if (ask.opt == "Attack"){
        let num = Math.floor(Math.random()*2)
        if (num > 0){
            p1.fuelDecreases()
            console.log(chalk.bold.red(`${p1.name}fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name}fuel is ${o1.fuel }`))
        if (p1.fuel<=0){
            console.log(chalk.red.bold.italic('you loose,better luck next time'))
            process.exit()
        }
        if (num <= 0){          
            o1.fuelDecreases()
            console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`))
            console.log(chalk.bold.red(`${p1.name}fuel is ${p1.fuel }`))
            if(o1.fuel <= 0){
                console.log(chalk.red.bold.italic("you win"))
                process.exit()
            }
        }
            if(ask.opt == "Drink portion"){
                p1.fuelIncreases()
                console.log(chalk.bold.green.italic(`you drink health portion your fuel is ${p1.fuel}`))
            }
            if(ask.opt =="Run for your life"){
                console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"))
                process.exit()
            }    
        }
        }
        while(true)

        
    


    
    }






    