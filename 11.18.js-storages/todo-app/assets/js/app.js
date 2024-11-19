import { Todo } from "./class.js";
import { getDataFromLocaStorage, setDataToLocalStorage } from "./helpers.js";
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-todo");
const allTodosBtn = document.querySelector(".all-todos");
const completedTodosBtn = document.querySelector(".completed");
const pendingTodosBtn = document.querySelector(".pending");
const clearTodosBtn = document.querySelector(".clear");
const todoList = document.querySelector("ul.todo-list");
const errorMessage = document.querySelector(".error-message");

// const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
const allTodos = getDataFromLocaStorage("todos") || [];

renderTodos(allTodos);
addBtn.addEventListener("click", addTodo);

function addTodo() {
  //   const todo = {
  //     id: Date.now(),
  //     todoText: todoInput.value.trim(),
  //     isCompleted: false,
  //     createdAt: new Date().toLocaleString(),
  //   };

  if (validate()) {
    const todo = new Todo(todoInput.value.trim());
    allTodos.push(todo);

    // localStorage.setItem("todos", JSON.stringify(allTodos));

    setDataToLocalStorage("todos", allTodos);
    renderTodos(allTodos);
    todoInput.classList.remove("border-red");
    errorMessage.classList.replace("d-block", "d-none");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Todo added successfully!!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    todoInput.classList.add("border-red");
    errorMessage.classList.replace("d-none", "d-block");
  }

  resetInputField();
}

function renderTodos(todosArr) {
  todoList.innerHTML = "";
  todosArr.forEach((todo) => {
    const liElem = document.createElement("li");
    liElem.className =
      "list-group-item list-group-item-success mb-3 d-flex justify-content-between align-items-center";
    liElem.innerHTML = `
        <div class="d-flex align-items-center gap-2">
            <input class="form-check-input mt-0 completed-checkbox" type="checkbox" value="" data-id=${
              todo.id
            } ${todo.isCompleted ? "checked" : ""} />
            <p class=${todo.isCompleted ? "completed-todo" : ""} >${
      todo.todoText
    } <i>${todo.createdAt}</i></p>
          </div>
          <div class="actions">
            <button class="btn btn-success edit" data-id=${todo.id}>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-danger delete" data-id=${todo.id}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
    `;
    todoList.appendChild(liElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete");
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure to delete todo?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const todoId = this.getAttribute("data-id");
          deleteTodo(todoId);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });

  const allEditBtns = document.querySelectorAll(".edit");

  allEditBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const todoId = this.getAttribute("data-id");
      const editedTodo = allTodos.find((todo) => todo.id == todoId);
      console.log(editedTodo);

      Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Save",
      }).then((result) => {
        console.log(editInput);
        console.log(editedTodo);

        if (result.isConfirmed) {
          editedTodo.todoText = result.value;

          console.log(result);

          setDataToLocalStorage("todos", allTodos);
          renderTodos(allTodos);
          Swal.fire({
            title: `updated successfully!`,
          });
        }
      });

      const editInput = document.querySelector("#swal2-input");
      editInput.value = editedTodo.todoText;
    });
  });

  const allCompletedCheckboxs = document.querySelectorAll(
    ".completed-checkbox"
  );

  allCompletedCheckboxs.forEach((input) => {
    input.addEventListener("change", function () {
      const todoId = this.getAttribute("data-id");
      console.log(todoId);

      toggleCompleted(todoId);
    });
  });
}

//delete todo

function deleteTodo(id) {
  const idx = allTodos.findIndex((todo) => todo.id == id);
  allTodos.splice(idx, 1);
  setDataToLocalStorage("todos", allTodos);
  renderTodos(allTodos);
}

//toggle completed
function toggleCompleted(id) {
  const todo = allTodos.find((todo) => todo.id == id);

  console.log(todo);

  if (todo.isCompleted === true) {
    todo.isCompleted = false;
  } else {
    todo.isCompleted = true;
  }

  setDataToLocalStorage("todos", allTodos);
  renderTodos(allTodos);
}
// reset input field

function resetInputField() {
  todoInput.value = "";
}

//validate input field
function validate() {
  let isValidate = true;

  if (todoInput.value.trim() === "") {
    isValidate = false;
  }

  return isValidate;
}

todoInput.addEventListener("keyup", function (event) {
  if (event.target.value !== "") {
    todoInput.classList.remove("border-red");
    errorMessage.classList.replace("d-block", "d-none");
  } else {
    todoInput.classList.add("border-red");
    errorMessage.classList.replace("d-none", "d-block");
  }
});

window.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    addTodo();
  }
});

allTodosBtn.addEventListener("click", function () {
  renderTodos(allTodos);
});
completedTodosBtn.addEventListener("click", function () {
  const filteredTodos = allTodos.filter((todo) => todo.isCompleted);
  renderTodos(filteredTodos);
});
pendingTodosBtn.addEventListener("click", function () {
  const filteredTodos = allTodos.filter((todo) => !todo.isCompleted);
  renderTodos(filteredTodos);
});
clearTodosBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure to delete todo?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      allTodos.length = 0;
      renderTodos(allTodos);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
});
