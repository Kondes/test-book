// const inputRef = document.querySelector(".input");
// const buttonRef = document.querySelector(".add-btn");
// const formRef = document.querySelector(".form");
// const todoListRef = document.querySelector(".todo-list");

// function createTodo(text) {
//   const liRef = document.createElement("li");
//   liRef.textContent = text;

//   function completeTodo() {
//     liRef.classList.toggle("complete");
//   }
//   liRef.addEventListener("click", completeTodo);
//   return liRef;
// }

// formRef.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const { value } = inputRef;
//   if (!value) return;

//   const todoRef = createTodo(value);
//   todoListRef.appendChild(todoRef);
//   inputRef.value = "";
// });
// ____________
// 

// 
const formRef = document.querySelector(".js-form");            


formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const formRef = event.target;
  const formData = new FormData(formRef);
  const submitedData = {};

  formData.forEach((value, key) => {
    submitedData[key] = value;
  });
  console.table(submitedData);
});
