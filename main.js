const addButton = document.querySelector(".add_btn");
const inputName = document.querySelector("#input_name");
const inputAuthor = document.querySelector("#input_author");
const tableRef = document.querySelector("#table");
const categoryRef = document.querySelector("#category");
const removeRef = document.querySelector(".remove_btn");
let priority = document.getElementsByName("priority");
let counter = 0;

addButton.onclick = () => {
    
  counter++;
  let newRow = document.createElement("tr");
  newRow.classList.add("js-newRow" + counter);
  let newNumber = document.createElement("td");

  let newColumnName = document.createElement("td");
  let newColumnAuthor = document.createElement("td");
  let newColumnCategory = document.createElement("td");
  let newColumnPriority = document.createElement("td");

  for (let i = 0; i < priority.length; i++) {
    if (priority[i].checked) {
      newColumnPriority.innerHTML = priority[i].value;
    }
  }

  newNumber.innerHTML = counter;
  newColumnName.innerHTML = inputName.value;
  newColumnAuthor.innerHTML = inputAuthor.value;
  newColumnCategory.innerHTML = categoryRef.value;

  newRow.appendChild(newNumber);
  newRow.appendChild(newColumnName);
  newRow.appendChild(newColumnAuthor);
  newRow.appendChild(newColumnCategory);
  newRow.appendChild(newColumnPriority);
  tableRef.appendChild(newRow);
};

removeRef.onclick = () => {
  let newRow = document.querySelector(".js-newRow" + counter);
  tableRef.removeChild(newRow);
  counter--;
};
