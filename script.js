/*  const input=document.querySelectorAll("input");
const btn=document.querySelectorAll("button");
const todolist=document.querySelectorAll("ul");
 btn.addEventListener("click", () => {
    console.log(input.value);
    const todo =input.value
    const newtodo= document.createElement("li");
    newtodo.textContent =todo;
    todolist.appendChild(newtodo);
    input.value ="";
 });
    input.addEventListener("keypress", (e) => {
        if (e.keyCode === 13){
            btn.click();
        }
    });  */


    const input= document.getElementById("new-todo");
    const btn=document.getElementById("add-btn");
    const todolist=document.getElementById("todo-list");
    //function to add newtodo
    function addTodo(){
        const todo =input.value.trim(); 
        if(todo === "") return;

    const newTodo =document.createElement("li");
        newTodo.innerHTML=`
        <span>${todo}</span>
        <button class="delete-btn">x</button>
        `;
        console.log(newTodo);
        
        todolist.appendChild(newTodo);
        input.value ="";
        //add togg
     newTodo.addEventListener("click", () => {
        newTodo.classList.toggle("completed");
     });
    
     const deleteBtn = document.querySelector(".delete-btn");
     deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        todolist.removeChild(newTodo);
     });
    }

    btn.addEventListener("click",addTodo);

    input.addEventListener("keypress",(e) => {
       if  (e.key==="Enter"){
        addTodo();
       }
    });
