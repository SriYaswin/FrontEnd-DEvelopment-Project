const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
 function addTask(){
     if(inputBox.value === ''){
       alert("you must Add atleast one task!");
     }
     else{
         let li = document.createElement("li");
         li.innerHTML = inputBox.value;
         listcontainer.appendChild(li);
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
     }
     inputBox.value = "";
     saveData();
    }