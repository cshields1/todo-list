// projects - collections of to-do objects
// default project and able to create new ones
// app logic (create, mark complete, add/change note, change priority/dueDate)
// DOM logic
// interface: view all projects, view all to-dos in project (title/dueDate, priority indicator), expand single to-do to view/edit details, delete to-do
// use localStorage to save projects and to-dos

import getProjects from './components/getProjects'
import getToDoItems from './components/getToDoItems'
import addToDoItem from './components/newToDoItem'

const loadApp = (() => {

    const projects = [];

    const toDoItems = [];

    getProjects(projects);

    getToDoItems(toDoItems);

    const body = document.body;

    const toDoWindow = document.createElement('section');
    toDoWindow.classList.add('window');

    for (let proj of projects) {

        const project = document.createElement('div');
        project.classList.add('project', `${proj.title}` || 'default');
        toDoWindow.append(project);

    }

    for (let item of toDoItems) {

        const toDo = document.createElement('div');
        toDo.classList.add('toDo', `priority-${item.priority}`);

        const title = document.createElement('h3')
        title.textContent = item.title;

        const dueDate = document.createElement('p')
        dueDate.classList.add('dueDate');
        dueDate.textContent = `due by ${item.dueDate}`;

        const editButton = document.createElement('button');
        editButton.classList.add('button', 'editButton');
        editButton.textContent = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('button', 'deleteButton');
        deleteButton.textContent = 'Delete';

        toDo.append(title, dueDate, editButton, deleteButton);

        for (let project of projects) {

                if (project.title === item.project) {

                    project.append(item)

                }

            }

    }

    body.append(toDoWindow);

})();