import inquirer from "inquirer"
 
let todos = [];
let condition= true;

while(condition)
{
   let addtask = await inquirer.prompt(
    [
        {
            name: 'todo',
            type: 'input',
            message: "what you want to add into todos"
         },
         {
            name: 'addmore',
            type: 'confirm',
            message: "do you really want to add more todos",
            default: "false"
         }
     ]
); 

todos.push(addtask.todo);
condition = addtask.addmore
console.log(todos)
}
