// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
const myForm = document.getElementById("create-task-form")
const selectDropdown = document.createElement("select")
myForm.children[1].insertAdjacentElement('afterend', selectDropdown)
const highOption = document.createElement("option")
highOption.innerText = "high"
selectDropdown.append(highOption)
const mediumOption = document.createElement("option")
mediumOption.innerText = "medium"
selectDropdown.append(mediumOption)
const lowOption = document.createElement("option")
lowOption.innerText = "low"
selectDropdown.append(lowOption)
// function to delete the task
function handleDelete(e){
    e.target.parentElement.remove()
}
function importanceColor(importance) {
    if (importance === "high") {
        return "red"
    } else if (importance === "medium") {
        return "orange"
    } else {
        return "green"
    }
}
function handleFormSubmit(e) {
    // prevent default from action
    e.preventDefault()
    // getting the parameters of what was submitted
    //save the user's input (task) as a variable
    const newTask = e.target["new-task-description"].value
    //save the importance value into the variable
    const importanceLvl = e.target.children[2].value
    //convert importance lvl into a color
    const taskColor = importanceColor(importanceLvl)
    //display the task on the DOM
    //select the UL of the page
    const taskUL = document.querySelector("#tasks")
    //create a dlt btn
    const deleteBtn = document.createElement("button")
    //make an inner text of the dlt btn as X
    deleteBtn.innerText = "X"
    //add event to the dlt btn
    deleteBtn.addEventListener("click", handleDelete)
    //create a new LI tag
    const LI = document.createElement("li")
    //colorize the task depending on importance lvl
    LI.style.color = taskColor
    //take the info from the user input and add that to the LI
    //first modify the LI to have text in it
    LI.textContent = newTask
    //add dlt btn to the task
    LI.append(deleteBtn)
    //then append as a child onto the taskUL
    taskUL.appendChild(LI)

    //clear the form
    e.target.reset()

}
 
myForm.addEventListener("submit", handleFormSubmit)