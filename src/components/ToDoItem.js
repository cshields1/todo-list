export default createToDo = (data) => {

const newToDo = {

    title: data.title,
    description: data.description,
    dueDate: data.dueDate,
    priority: data.priority,
    notes: data.notes,
    checklist: data.checklist,
    project: data.project || 'default'
    
}



}