document.addEventListener("DOMContentLoaded", () => {
    const enterTask = document.getElementById("enterTask");
    const taskItems = document.getElementById("taskItems");
    const addTask = document.getElementById("addTask");

    addTask.addEventListener("click", function(){
        const sentence = enterTask.value.trim();
        if(sentence === ""){
            alert("Enter your task!");
            return;
        }
        const listValue = document.createElement("li");
        listValue.textContent = sentence;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            taskItems.removeChild(listValue);
        });

        listValue.appendChild(deleteButton);
        taskItems.appendChild(listValue);
        
        enterTask.value = "";
    });
});
