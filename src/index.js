document.addEventListener("DOMContentLoaded", () => {

  
const form = document.querySelector("form")
const tasks = document.querySelector("#tasks")


form.addEventListener("submit",(e)=>{
  e.preventDefault()
 const inputValue = e.target.task.value
 createToDo(inputValue)
})



function createToDo(element){
  let p = document.createElement("p")
  let button = document.createElement("button");
  let priority = document.createElement('select');
  let calander = document.createElement('tag');
 

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