//Selectors
const form = document.querySelector("form");
let entries = [];
//Event listeners
form.addEventListener("submit", handleSubmit);

//Functions
function addNewEntry(newEntry) {
    const entriesWrapper = document.getElementById("entries");
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement("li");
    const listItemValue = document.createTextNode(newEntry);
    listItem.appendChild(listItemValue);
    entriesWrapper.appendChild(listItem);
}
function handleSubmit(e) {
    e.preventDefault();
    const entry = Number(document.getElementById("entry").value);
    if (!entry) return;
    form.reset();
    entries.push(entry);
    addNewEntry(entry);
}
