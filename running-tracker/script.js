//Selectors
const form = document.querySelector("form");
let entries = [];

//Event listeners
form.addEventListener("submit", handleSubmit);

//Functions
function reducer(total, currentValue) {
    return total + currentValue;
}

function calcTotal(entries) {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById("total").innerHTML = totalValue;
    document.getElementById("progressTotal").innerText = totalValue;
    document.getElementById("average").innerText = (
        totalValue / entries.length
    ).toFixed(1);
}

function weeklyHigh(entries) {
    const high = Math.max(...entries).toFixed(1);
    document.getElementById("high").innerText = high;
}

function calcGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    let completedPercent = (totalValue / 25) * 100;
    const progressCircle = document.getElementById("progressCircle");
    if (completedPercent > 100) {
        completedPercent = 100;
    }
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
    console.log(progressCircle);
}

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
    calcTotal(entries);
    weeklyHigh(entries);
    calcGoal();
}
