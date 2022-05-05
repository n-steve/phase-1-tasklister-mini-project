document.addEventListener("DOMContentLoaded", () => {

  
const newForm = document.querySelector("form")
const newTasks = document.querySelector("#tasks")


newForm.addEventListener("submit",(event)=>{
  event.preventDefault()
 const result = e.target.task.value
 createToDo(result)
})



function createToDo(element){
  let p = document.createElement("p") //where we want out typed description to be located. 
  let button = document.createElement("button"); //this is delete button
  let priority = document.createElement('select');// this is the priority list
  let calander = document.createElement('tag'); //this is date assignment is due. 
 

  p.textContent = `${element}`
  button.textContent = " Finished ";
priority.innerHTML = `
<option>Priority</option>;
<option>High</option>;
<option>Medium</option>;
<option>Low</option>;`;
calander.innerHTML = `Date: <input type= "date">`;

  button.addEventListener("click",(e)=>removeToDo(e))
  

  tasks.appendChild(p)
  p.appendChild(priority)
  p.appendChild(calander)
  p.appendChild(button)
  

}
function removeToDo(event){
  event.target.parentNode.remove();
}

})