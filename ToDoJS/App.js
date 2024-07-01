function addItem() {
    var inputBox = document.getElementById("inputBox");
    var listText = document.getElementById("listText");
    

    var task = inputBox.value.trim();
    

    if(task !== "") {
        var newItem = document.createElement("div");
        newItem.classList.add("task");
        newItem.innerHTML = `
            <input type="checkbox">
            <span>${task}</span>
            <button onclick="removeItem(this)">Remove</button>
        `;
        listText.appendChild(newItem);
        inputBox.value = "";
    }
}
function removeItem(item) {
    var parent = item.parentNode;
    parent.parentNode.removeChild(parent);
}
