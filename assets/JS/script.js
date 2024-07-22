const newTask = (userInput) => {
    return `<div class="task_sub_container">
      <input class="checkbox" type="checkbox">
      <p>${userInput}</p>
      <button class="dustbin_button"><i class="dus_icon fa-solid fa-trash"></i></button> 
    </div>`;
  };
  
  const handleSubmit = () => {
    const userInputField = document.getElementById("input");
    const userInput = userInputField.value.trim(); // Trim to remove whitespace
    console.log(userInput);
  
    if (userInput !== "") {
      const insertion = document.getElementById("insert");
      insertion.insertAdjacentHTML("beforeend", newTask(userInput));
      alert("Task added successfully");
      userInputField.value = "";
  
      // Add event listener to the newly created delete button
      const deleteButtons = document.querySelectorAll(".dustbin_button");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
          button.parentElement.remove(); // Remove parent container of the button
        });
      });
    } else {
      alert("Enter the content");
    }
  };
  