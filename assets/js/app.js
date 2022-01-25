  const form = document.querySelector("form")
  const todoInput = document.querySelector("#new-todo-input")
  const todoList = document.querySelector(".task-container")

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const newTask = todoInput.value

    if(!newTask) {
      alert("Please enter a task")
      return
    }

    const taskElement = document.createElement("div")
    taskElement.classList.add("tasks")
    taskElement.classList.add("task-active")

    const taskContent = document.createElement("div")
    taskContent.classList.add("task")

    taskElement.appendChild(taskContent)
    todoList.appendChild(taskElement)

    const taskInput = document.createElement("input")
    taskInput.type = "text"
    taskInput.classList.add("text")
    taskInput.value = newTask
    taskInput.setAttribute("readonly", "readonly")
    
    taskContent.appendChild(taskInput)

    const taskAction = document.createElement("div")
    taskAction.classList.add("actions")

    const taskEdit = document.createElement("button")
    taskEdit.classList.add("edit")
    taskEdit.innerText = "Edit"

    const taskDelete = document.createElement("button")
    taskDelete.classList.add("delete")
    taskDelete.innerText = "Delete"

    taskAction.appendChild(taskEdit)
    taskAction.appendChild(taskDelete)

    taskElement.appendChild(taskAction)

    taskEdit.addEventListener('click', () => {
      if(taskEdit.innerText.toLowerCase() == "edit"){
        taskInput.removeAttribute("readonly")
        taskInput.focus()
        taskInput.style.cursor = "text"
        taskEdit.innerText = "Save"
      } else {
        taskInput.setAttribute("readonly", "readonly")
        taskEdit.innerText = "Edit"
        taskInput.style.cursor = "pointer"
      }
    })

    taskDelete.addEventListener('click', () => {
      todoList.removeChild(taskElement)
      deleteTaskCounter()
      todoLength.innerHTML = `<p>${taskCount} items left</p>`
    })

    taskCounter()

    const todoLength = document.querySelector(".todo-length")
    todoLength.innerHTML = `<p>${taskCount} items left</p>`

    // Click to Complete
    taskInput.addEventListener('click', () => {
      taskElement.classList.toggle("task-active")
      taskElement.classList.toggle("task-complete")

      if(taskEdit.innerText.toLowerCase() == "edit") {
        taskInput.classList.toggle("todo-complete")
      }
    })

    // Click to Clear Completed
   const clearComplete = document.querySelector(".clear-complete-btn")
   clearComplete.addEventListener('click', () => {
     for(i=0; i<classComplete.length; i++) {
      classComplete[i].remove()
      deleteTaskCounter()
     }
     todoLength.innerHTML = `<p>${taskCount} items left</p>`
   })
  
  })

  let taskCount = 0

  function taskCounter() {
    taskCount += 1
    return taskCount
  }

  function deleteTaskCounter() {
    if(taskCount > 0) {
      taskCount -= 1
      return taskCount
    } else {
      taskCount = 0
      return taskCount
    }
  }

  // Filter Elements
  const taskElementList = document.getElementsByClassName("tasks")
  const filterButton = document.getElementsByClassName("filter-btn")
  const classComplete = document.getElementsByClassName("task-complete")
  const classActive = document.getElementsByClassName("task-active")
  const filterAll = document.querySelector(".bottom-bar-all")
  const filterActive = document.querySelector(".bottom-bar-active")
  const filterCompleted = document.querySelector(".bottom-bar-completed")
  
  

  filterAll.addEventListener('click', function() {
    for(i=0; i<filterButton.length; i++){
      filterButton[i].classList.remove("bar-active")
      this.classList.add("bar-active")
    }
    for(i=0; i<taskElementList.length; i++){
      taskElementList[i].classList.remove("display-none")
    }
  })

  filterActive.addEventListener('click', function() {
    for(i=0; i<filterButton.length; i++){
      filterButton[i].classList.remove("bar-active")
      this.classList.add("bar-active")
    }
    for(i=0; i<classComplete.length; i++){
      classComplete[i].classList.add("display-none")
    }
    for(i=0; i<classActive.length; i++){
      classActive[i].classList.remove("display-none")
    }
  })

  filterCompleted.addEventListener('click', function() {
    for(i=0; i<filterButton.length; i++){
      filterButton[i].classList.remove("bar-active")
      this.classList.add("bar-active")
    }
    for(i=0; i<classActive.length; i++){
      classActive[i].classList.add("display-none")
    }
    for(i=0; i<classComplete.length; i++){
      classComplete[i].classList.remove("display-none")
    }
  })

   