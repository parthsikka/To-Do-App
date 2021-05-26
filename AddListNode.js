let input = document.querySelector(".todo-input");
let list = document.querySelector(".todolist");

input.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        if(input.value!=""){
        let todo = input.value ; 
        let li = document.createElement("li") ;
        li.classList.add("listItem") ;
        li.innerHTML = todo ; 
        list.append(li) ;
        li.addEventListener("dblclick", handleDeleteNode) ;
        input.value = "" ;
        }else{
            alert("Enter a todo!!") ;
        }
    }
})

function handleDeleteNode(event){
    event.target.remove() ;
}