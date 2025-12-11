const add_input = document.getElementById("add_input");
let add_console = document.getElementById("add_console");
let submitadd = document.getElementById("submitadd");
let del = document.getElementById("del");
let shopping_list = JSON.parse(localStorage.getItem('shopping_list')) || [];

submitadd.onclick = function(){
    const add_input_value = add_input.value.trim();

    if(add_input_value === ""){
        add_console.style.color = "rgba(218, 75, 8, 1)";
        add_console.textContent = "Input cannot be empty..";
        return;
    }
    else if(shopping_list.includes(add_input_value)){
        add_console.style.color = "rgba(218, 75, 8, 1)";
        add_console.textContent = "Item already in the shopping list..";
        return;
    }
    else{
        add_console.style.color = "rgba(4, 122, 30, 1)";
        add_console.textContent = "Your item has been added..";

        shopping_list.push(add_input_value);
        localStorage.setItem('shopping_list', JSON.stringify(shopping_list));

        console.log("List:>  ", shopping_list);
        add_input.value = "";
    }
}

del.onclick = function(){
    shopping_list = [];
    localStorage.removeItem('shopping_list');
}