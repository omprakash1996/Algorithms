// #Basics.-----------------------------

// #1.--------Select a <p> element by ID and change its text to "Hello World".-------------

/*
const para = document.getElementById('para');
para.textContent = 'Hello World om';   */

// #2.--------Change the background color of a <div> with class "box" to red.------------------

/*
const box = document.querySelector('.box');
box.style.backgroundColor = 'red';    */

// #3.------------Add a click event to a button that shows an alert "Button clicked!".--------------

/*
const btn = document.querySelector("#click");
btn.addEventListener("click", () => {
  alert("Button Clicked");
});  */

// ++++++++++++++++++ CRUD operation++++++++++++++++++++++++++++++++++

// #a.-----create---------

// #4.---------Create a new <li> element with text "Item 4" and append it to an existing <ul>.-----------------

/*
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
const list = document.getElementById("list");
list.appendChild(newItem);   */

// #b.-------Read--------------

/*
const items= document.querySelectorAll("#myList li");
items.forEach((li)=>console.log(li.textContent));     */

// #c.-------Update--------------
/*
const firstItem = document.querySelector('#myList li');
firstItem.textContent = "Updated Item 1";
firstItem.style.color='red';   */

// #d.---------Delete------------------------

/*
document.addEventListener("DOMContentLoaded", () => {
  const removeBtn = document.getElementById("removeBtn");
  removeBtn.addEventListener("click", () => {
    const lastItem = document.querySelector("#myList li:last-child");
    if (lastItem) {
      lastItem.remove();
    } else {
      alert("No items left to remove!");
    }
  });
});   */

// #5.------------how to create html all component dynamically.--------------

/*
const container = document.createElement("div");
container.id = "container";
const heading = document.createElement("h1");
heading.textContent = "Dynamic Page";
const paragraph = document.createElement("p");
paragraph.textContent = "This is dynamically added";
const list = document.createElement("ul");
const items = ["ltem 1", "ltem 2", "ltem 3", "ltem 4"];
items.forEach((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
});
const button = document.createElement("button");
button.textContent = "Click Me";
button.addEventListener("click", () => {
  alert("Button Clicked");
});
container.appendChild(heading);
container.appendChild(paragraph);
container.appendChild(list);
container.appendChild(button);

document.body.appendChild(container);   */

// #6.-----------Write code to toggle a "highlight" class on a <div> when clicked.---------------------

/*
const div = document.getElementById("myDiv");
div.addEventListener("click", () => {
  div.classList.toggle("highlight");
});    */

// #7.-----------Get the value entered in an <input type="text"> when a button is clicked and log it.---
/*
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#text");
  const btn = document.querySelector("#btn");
  const output = document.querySelector("#output");
  btn.addEventListener("click", () => {
    const value = input.value;
    output.textContent = value;
    input.value= "";
  });
}); */

// #7.-----------Get the value entered in an <input type="text"> when a button is clicked and log it,edit it update it.---

/*
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#text");
  const btn = document.querySelector("#btn");
  const output = document.querySelector("#output");
  // Add or update value from input into H1
  btn.addEventListener("click", () => {
    const value = input.value.trim();
    if (value !== "") {
      output.textContent = value;
      input.value = ""; // clear input
    }
  });

  // Allow editing by clicking on the H1 itself
  output.addEventListener("click", () => {
    // Put current H1 text back into input for editing
    input.value = output.textContent;
    input.focus();
  });
});    
*/

// #8.-----------add the value entered in an <input type="text"> when a button is clicked and log it,edit it update it,delete it.---
/*
    document.addEventListener("DOMContentLoaded", () => {
      const input = document.querySelector("#text");
      const btn = document.querySelector("#btn");
      const output = document.querySelector("#output");

      // CREATE: Add new item
      btn.addEventListener("click", () => {
        const value = input.value.trim();
        if (value !== "") {
          const container = document.createElement("div");

          // Create h1
          const h1 = document.createElement("h1");
          h1.textContent = value;

          // Edit button
          const editBtn = document.createElement("button");
          editBtn.textContent = "Edit";
          editBtn.className = "edit";
          editBtn.addEventListener("click", () => {
            const newText = prompt("Edit item:", h1.textContent);
            if (newText !== null && newText.trim() !== "") {
              h1.textContent = newText.trim();
            }
          });

          // Delete button
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.className = "delete";
          deleteBtn.addEventListener("click", () => {
            container.remove();
          });

          // Append everything
          container.appendChild(h1);
          container.appendChild(editBtn);
          container.appendChild(deleteBtn);
          output.appendChild(container);

          input.value = ""; // clear input
        }
      });
    });    */

 // #9.-----------Given an array of objects {id, name}, create a table dynamically and append it to the DOM.---
 
 /* 
 document.addEventListener("DOMContentLoaded", () => {
      // Array of objects
      const data = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }, { id: 4, name: "om" }
      ];

      // Create table
      const table = document.createElement("table");

      // Create header row
      const headerRow = document.createElement("tr");
      const idHeader = document.createElement("th");
      idHeader.textContent = "ID";
      const nameHeader = document.createElement("th");
      nameHeader.textContent = "Name";
      headerRow.appendChild(idHeader);
      headerRow.appendChild(nameHeader);
      table.appendChild(headerRow);

      // Loop through data and create rows
      data.forEach(item => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = item.id;

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        row.appendChild(idCell);
        row.appendChild(nameCell);
        table.appendChild(row);
      });

      // Append table to container
      document.getElementById("tableContainer").appendChild(table);
    }); */

// #10.-----On button click, change the src of an <img> tag to another image.-------------
/*
     document.addEventListener("DOMContentLoaded", () => {
      const img = document.getElementById("myImage");
      const btn = document.getElementById("swapBtn");

      btn.addEventListener("click", () => {
        // Check current src and swap
        if (img.src.includes("Image+1")) {
          img.src = "https://via.placeholder.com/200x150?text=Image+2";
        } else {
          img.src = "https://via.placeholder.com/200x150?text=Image+1";
        }
      });
    });  */

    