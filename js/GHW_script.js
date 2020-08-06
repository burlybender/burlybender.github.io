//Your code goes here

//Solution below


function showTable(element) {
    var sport = document.getElementById(element.id.replace("btn", "sport"));
        if(element.checked) {
            sport.style.display = "table";
        }else{
            sport.style.display = "none";
        }

}