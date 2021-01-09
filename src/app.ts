import inquirer from 'inquirer'

export const run = async () => {

    const answers = await inquirer.prompt([{
        type: "confirm",
        name: "questionOne",
        message: "Question One?"
    }])

}