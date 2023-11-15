export function renderExistingRecords(){
    let displayPane = document.getElementById('display');
    let existingRecords = JSON.parse(localStorage.getItem('todoArray'));
    let taskList = document.getElementById('taskList');


    for (let i = 0; i<existingRecords.length; i++){
        let obj = existingRecords[i];

        let todoDiv = document.createElement('div');
        let todoDisplayDiv = document.createElement('div');
        let todoDateDisplay = document.createElement('div');
    
        todoDiv.className = 'todo-div';
        todoDisplayDiv.style.flex = '2';

        if (obj.header.length!=0){
            todoDisplayDiv.innerHTML = obj.header;
        }
        else {
            todoDisplayDiv.innerHTML = '(Untitled)';
        }

        todoDateDisplay.innerHTML = obj.dateCreated;

        displayPane.appendChild(todoDiv);
        todoDiv.appendChild(todoDisplayDiv);
        todoDiv.appendChild(todoDateDisplay);

        let taskMenu = document.createElement('div');
            
        if (obj.header.length!=0){
            taskMenu.innerHTML = obj.header;
        }
        else {
            taskMenu.innerHTML = '(Untitled)';
        }
        
        taskMenu.className = 'taskMenu';
        taskList.appendChild(taskMenu);
        
    }
    
}