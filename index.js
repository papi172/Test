document.addEventListener('DOMContentLoaded', function() {
  const todoList = [];

  const addItemForm = document.getElementById('add-item-form');
  const itemInput = document.getElementById('item-input');
  const todoListDiv = document.getElementById('todo-list');

  addItemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the value of the input field
    const item = itemInput.value;

    // Add the item to the to-do list array
    todoList.push(item);

    // Clear the input field
    itemInput.value = '';

    // Display the to-do list items
    displayTodoList();
  });

  function displayTodoList() {
    // Clear the to-do list div
    todoListDiv.innerHTML = '';

    // Loop through the to-do list array
    for (let i = 0; i < todoList.length; i++) {
      // Create a div element for the to-do list item
      const itemDiv = document.createElement('div');
      itemDiv.textContent = todoList[i];
      itemDiv.classList.add("item-hover")

      // Create the delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add("delete-button")
      deleteButton.addEventListener('click', function() {
        // Remove the item from the to-do list array
        todoList.splice(i, 1);
        // Re-display the to-do list
        displayTodoList();
      });
      deleteButton.style.display = "none"
      // Append the delete button to the item div
      itemDiv.appendChild(deleteButton);

      // Append