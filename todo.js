
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list  class
    // and set the text as the input from the todo-input field  id field todo-input

    var userInput=document.getElementById('todo-input').value;        //get user input value and store into variable
    var newToDoItem = document.createElement('li');              //create new line item to be used in todo-list-items class 
    newToDoItem.innerHTML=userInput;                          // Append the input text to <li>
    document.getElementsByClassName('todo-list-items')[0].appendChild(newToDoItem);   //Append <li> to <ul> with class=todo-list-items
  }



  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    var topToDoItem=document.getElementsByClassName('todo-list-items')[0].querySelector('li').innerHTML;  //grab text from first li
    document.getElementsByClassName('todo-list-items')[0].removeChild(document.getElementsByClassName('todo-list-items')[0].getElementsByTagName('li')[0]);
  
    var newDoneItem=document.createElement('li');  //create new li for Done list
    newDoneItem.innerHTML=topToDoItem; //append li text from to-do to done list
    document.getElementsByClassName('done-list-items')[0].appendChild(newDoneItem).classList.add('done'); //get done-list-items, append newdoneitem and add class of done for strikethrough style

  }
  
}

//DOM does not support removing an object directly. You have to go to its parent and remove it from there. 
//Javascript won't let an element commit suicide, but it does permit infanticide... lol


