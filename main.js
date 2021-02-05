const addButton = document.querySelector(".add_btn");
const inputName = document.querySelector("#input_name");
const inputAuthor = document.querySelector("#input_author");
const tableRef = document.querySelector("#table");
const categoryRef = document.querySelector("#category");
const priorityRef = document.querySelector("#priority");

const startTableRef = `<tr>
  <td>№</td>
  <td>Name</td>
  <td>Author</td>
  <td>Category</td>
  <td>Priority</td>
  <tr>`;

tableRef.innerHTML = startTableRef;

const library = [];

const removeBtn = (index) => {
  library.splice(index, 1);
  paintElem();
};

function paintElem() {
  tableRef.innerHTML = startTableRef;
  library.map((obj, index) => {
    tableRef.innerHTML += `
<td>${index + 1}</td>
<td>${obj.name}</td>
<td>${obj.author}</td>
<td>${obj.category}</td>
<td>${obj.priority}</td>

<td><button onclick='removeBtn(${index})'>delete</button></td>`;
  });
}

addButton.onclick = () => {
  let obj = {
    name: inputName.value,
    author: inputAuthor.value,
    category: categoryRef.value,
    priority: priorityRef.value,
  };

  library.push(obj);

  paintElem();

  inputName.value = "";
  inputAuthor.value = "";
};
