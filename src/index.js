document.addEventListener("DOMContentLoaded", () => {
  const descriptionTask = document.getElementById("create-task-form")
  descriptionTask.addEventListener("submit",(e)=> {
    e.preventDefault();

  const descriptionBar = document.getElementById("new-task-description")

  const descriptionBarInput = descriptionBar.value

  const li = document.createElement("li")
  li.textContent = descriptionBarInput

  const taskList = document.getElementById("tasks")
  taskList.appendChild(li)
  console.log(taskList)

  
  const buttonElement = document.createElement('button');
  buttonElement.textContent = " X "
  li.appendChild(buttonElement)

  buttonElement.addEventListener("click", () => {
   taskList.removeChild (li)
  })


  

  

  


})
});


 

