//* To load page fully and then display 
window.addEventListener("load", () =>{
  
  //* Select HTMl Elements
  
  let inputForm = document.getElementById("input-form");
  let textInput = document.getElementById("text-input");
  let addBtn = document.getElementById("add-btn");
  let listItems = document.getElementById("list-items");

  inputForm.addEventListener("submit", (e) => {
    //! This will prevent the refresing the page and both the Enter key and Button will work

    e.preventDefault();
    let inputData = textInput.value;
    if(!inputData){
      alert("Please Enter Some Values");
      return;
    }

    //* Create li element to list items

  
    //! Method 1
    let li = document.createElement("li");
    li.innerText = inputData;
    listItems.appendChild(li);

    let span = document.createElement("span");
    li.appendChild(span);

    let checkBtn = document.createElement("i");
    checkBtn.classList.add("fa-solid","fa-circle-check");
    span.appendChild(checkBtn);


    let editBtn = document.createElement("i");
    editBtn.classList.add("fa-solid","fa-pen-to-square");
    span.appendChild(editBtn);


    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid","fa-trash-can");
    span.appendChild(deleteBtn);


  })

})
