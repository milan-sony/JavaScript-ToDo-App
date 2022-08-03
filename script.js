//* To load page fully and then display
window.addEventListener("load", () => {
  //* Select HTMl Elements

  let inputForm = document.getElementById("input-form");
  let textInput = document.getElementById("text-input");
  //let addBtn = document.getElementById("add-btn");
  let listItems = document.getElementById("list-items");

  inputForm.addEventListener("submit", (e) => {
    //! This will prevent the refresing the page and both the Enter key and Button will work with this

    e.preventDefault();
    let inputData = textInput.value;
    if (!inputData) {
      alert("Please Enter Some Values");
      return;
    }

    //! Created one li element with Bootstrap class names then created one span named spanEl1 for inserting inputData then created one more span named spanEl2 for inserting/listing all icons

    //* Create li element to list items

    let li = document.createElement("li");
    li.classList.add("list-group-item", "list-content");
    listItems.appendChild(li);
    textInput.value = "";
    textInput.focus();

    //* Create 1st span for inserting inputData

    let spanEl1 = document.createElement("span");
    li.appendChild(spanEl1);
    spanEl1.innerText = inputData;

    //* Create 2nd span for inserting all icons

    let spanEl2 = document.createElement("span");
    li.appendChild(spanEl2);

    //* CheckIcon Created

    let checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid", "fa-circle-check");
    spanEl2.appendChild(checkIcon);
    checkIcon.style.color = "#4d668b";

    //* Add Eventlistener to checkIcon
    checkIcon.addEventListener("click", function () {
      checkIcon.style.color = "green";
    });

    //? editIcon and its function will be created in furure

    // let editIcon = document.createElement("i");
    // editIcon.classList.add("fa-solid","fa-pen-to-square");
    // spanEl2.appendChild(editIcon);

    //* DeleteIcon Created

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");
    spanEl2.appendChild(deleteIcon);
    deleteIcon.style.color = "red";

    //* Add EventListener to deleteIcon

    deleteIcon.addEventListener("click", deleteContent);
    function deleteContent() {
      listItems.removeChild(li);
    }
  });
});
