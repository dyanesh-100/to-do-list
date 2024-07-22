
const newTask = (userInput) => {
  return `<div class="task_sub_container" >
    <input class="checkbox" type="checkbox">
    <p>${userInput}</p>
    
    <button class="dustbin_button"><i class="dus_icon fa-solid fa-trash"></i></button> 
</div>`
}

const handleSubmit = () => {
    
    userInputField = document.getElementById("input");
    const userInput = userInputField.value;
    console.log(userInput)
    
    if(userInput!==""){

    const insertion = document.getElementById("insert")
        insertion.insertAdjacentHTML("beforeend",newTask(userInput))
        alert("Task added successfully")
        userInputField.value = ""
    }
    else{
        alert("Enter the content");
    }
}