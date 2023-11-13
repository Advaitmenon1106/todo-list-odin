import { todayPage } from "./today";

export function sidebarFunctions(){
    let dropdownPath = document.getElementById('dropdownPath');
    let taskHeader = document.getElementById('task-header');
    let stickyBoardHeader = document.getElementById('sticky-board');
    let taskList = document.getElementById('taskList');
    let display = document.getElementById('display');

    taskHeader.addEventListener('click', ()=>{
        display.innerHTML = '';
        todayPage();
        taskHeader.style.backgroundColor = 'rgb(220, 220, 220)';
        taskHeader.style.borderRadius = '5px';
        taskHeader.style.paddingBottom = '3%';
        if (taskList.className == 'task-list-hidden'){
            taskList.className = 'task-list-show';
            dropdownPath.setAttribute('d', 'M7,10L12,15L17,10H7Z');
        }
        else if (taskList.className == 'task-list-show'){
            taskList.className = 'task-list-hidden';
            dropdownPath.setAttribute('d', 'M10,17L15,12L10,7V17Z');
        }
    })

    stickyBoardHeader.addEventListener('click', ()=>{
        display.innerHTML = '';
        taskHeader.style.backgroundColor = 'rgb(238, 235, 235)';
        taskHeader.style.borderRadius = '0';
        taskHeader.style.paddingBottom = '0';
        taskList.className = 'task-list-hidden';
        dropdownPath.setAttribute('d', 'M10,17L15,12L10,7V17Z');
    })
}