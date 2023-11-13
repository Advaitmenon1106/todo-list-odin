import { format } from "date-fns";
import { ToDo } from "./todo";

export function todayPage(){
    let displayPane = document.getElementById('display');
    displayPane.innerHTML = '';
    let all = document.getElementsByClassName('all')[0];
    let todoArray = [];

    let addNewTodo= document.createElement('div');
    let header = document.createElement('div');
    let editField = document.createElement('div');

    editField.id = 'editField';

    header.innerHTML = 'Tasks for today'
    addNewTodo.innerHTML = 'Add a new Task';


    header.style.cssText = 

    `
    font-size: 40px;
    font-weight: bold;
    `
    addNewTodo.style.cssText = 

    `
    font-size: 25px;
    border: 1px solid silver;
    padding: 1%;
    border-radius: 10px;
    width: fit-content;
    padding-right: 30%;
    padding-left: 2%;
    margin-left: 5%;
    margin-top: 3%;
    cursor: pointer;
    `

    addNewTodo.addEventListener('click', ()=>{

        editField.innerHTML = '';

        let titleEntryDiv = document.createElement('div');
        let contentDiv = document.createElement('div');
        let title = document.createElement('input');
        let content = document.createElement('textarea');
        let submit = document.createElement('button');

        titleEntryDiv.id = 'title-entry-div';
        title.id = 'title-field';
        content.id = 'content-field';

        title.placeholder = 'Enter a suitable title';
        content.placeholder = 'Contents of your To-Do List';
        submit.innerHTML = 'Save Changes';
        submit.id = 'submit-button';


        titleEntryDiv.appendChild(title);
        contentDiv.appendChild(content);
        editField.appendChild(titleEntryDiv);
        editField.appendChild(content);
        editField.appendChild(submit);

        all.appendChild(editField);

        submit.addEventListener('click', ()=>{
            let newToDo = new ToDo(title.value, format(new Date(), 'dd-MM-yyyy hh:mm'));

            todoArray.push(newToDo);
            editField.remove();

            let todoDiv = document.createElement('div');
            let todoDisplayDiv = document.createElement('div');
            let todoDateDisplay = document.createElement('div')

            todoDiv.className = 'todo-div';
            todoDisplayDiv.style.flex = '2';

            if (newToDo.header.length!=0){
                todoDisplayDiv.innerHTML = newToDo.header;
            }
            else {
                todoDisplayDiv.innerHTML = '(Untitled)';
            }
            
            todoDateDisplay.innerHTML = newToDo.dateCreated;

            displayPane.appendChild(todoDiv);
            todoDiv.appendChild(todoDisplayDiv);
            todoDiv.appendChild(todoDateDisplay);

            console.log(todoArray[0]);

        })
    })

    displayPane.appendChild(header);
    displayPane.appendChild(addNewTodo);

}