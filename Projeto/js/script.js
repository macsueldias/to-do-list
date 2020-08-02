class Todo {
    constructor() {
        this.totalTasks = document.querySelector('.task').length
    }
    addTask(taskText) {

        // clona template
        let template = document.querySelector('.task').cloneNode(true)

        // remove classe hide
        template.classList.remove('hide')

        // manipular texto
        let templateText = template.querySelector('.task-title')
        templateText.textContent = taskText

        let list = document.querySelector('#tasks-container')

        // inserir na lista
        list.appendChild(template)

        // adiciona evento as tasks
        this.addEvents()

        this.checkTasks('add')
    }
    
    removeTask(task) {
        // achar o elemento
        let parentE1 = task.parentElement

        // remover da lista
        parentE1.remove()

        this.checkTasks('remove')

    }

    completeTask(task) {

        // adiciona a classe de done
        task.classList.add('done')
    }

    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash')
        let removeBtn = removeBtns[removeBtns.length - 1]
        let doneBtns = document.querySelectorAll('.fa-check')
        let doneBtn = doneBtns[doneBtns.length - 1]

        // adicionar evento de remover
        removeBtn.addEventListener('click', function() {
            todo.removeTask(this)
        })

        // adicionar evento de completar tarefa
        doneBtn.addEventListener('click', function() {
            todo.completeTask(this)
        })
    }

    checkTasks(comand) {
        let msg = document.querySelector('#empty-tasks')

        // logica de adicionar ou remover tasks
        if(comand === 'add') {
            this.totalTasks += 1
        } else if(comand === 'remove') {
            this.totalTasks -= 1
        }

        // checa se tem mais de uma task e adiciona ou remove a classe
        if(this.totalTasks == 1) {
            msg.classList.remove('hide')
        } else {
            msg.classList.add('hide')
        }
    }

}

let todo = new Todo()

// events
let addBtn = document.querySelector('#add')

addBtn.addEventListener('click', function (e) {

    e.preventDefault()

    let taskText = document.querySelector('#task')

    if (taskText.value != '') {
        todo.addTask(taskText.value)
    }

    // limpa campo de texto
    taskText.value = ''
}) 