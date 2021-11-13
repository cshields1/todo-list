export default addToDoItem = () => {

// to-do objects
// title, description, dueDate, priority, notes

    const newToDo = {

        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        priority: data.priority,
        notes: data.notes,
        project: data.project || 'default'
        
    }

    return { newToDo }

}