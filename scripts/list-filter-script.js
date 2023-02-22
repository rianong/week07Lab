function makeList() {
    let listData = ["sugar", "salt", "flour", "baking soda", "milk", "eggs", "cheese", "chicken", "pork", "beef"];
    let listContainer = document.createElement('div');
    let listElement = document.createElement('ul');
    let listItem = document.createElement('li');
    document.body.appendChild(listContainer);
    listContainer.appendChild(listElement);
    let numberOfListItems = listData.length;

    for (let i = 0; i < numberOfListItems; ++i) {
        listItem.textContent = listData[i];
        listElement.appendChild(listItem);
        listItem = document.createElement('li');
    }
}
makeList();

function searchProducts() {    
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementsByTagName("ul");
    lis = document.getElementsByTagName("li");
    for (i = 0; i < lis.length; i++) {
        li = lis[i];
        txtValue = li.textContent || li.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            lis[i].style.display = "";
        } else {
            lis[i].style.display = "none";
        }
    }
};