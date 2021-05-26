let item = document.querySelector(".todolist")

item.addEventListener("dblclick", function(e){
    e.target.remove() ;
})