let input = document.querySelector(".todo-input");
let list = document.querySelector(".todolist");
input.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        if(input.value!=""){
        let todo = input.value ; 
        let li = document.createElement("li") ;
        li.innerHTML = todo ; 
        list.append(li) ;
        input.value = "" ;
        }else{
            alert("Enter a todo!!") ;
        }
    }
})