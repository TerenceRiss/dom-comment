// add a click event listener on the form submit button
const btn = document.getElementById('comment-submit');
console.log(btn)

// don't forget to "prevent" the form from being sent
let form = document.querySelector('#comment-form');
form.addEventListener('submit', newcom);


let information = document.getElementById('comment-username');
console.log(information)

let message = document.getElementById('comment-content');
console.log(message)


// create a new comment with the user name, the current date (french format: dd/mm/yyyy)

function newcom(event)
{
    let ul =document.querySelector('#comments-list');
    event.preventDefault();
    let userName = document.getElementById("comment-username").value;
    let messagerie = document.getElementById("comment-content").value;
    let date = new Date ();


    let addLi = document.createElement("li");
    let addUser = document.createElement("h5");
    addUser.textContent = userName;
    let addH6 = document.createElement("h6");
    let addMessage = document.createElement("p");
   
    addLi.append (addUser)
    addLi.append (addH6);
    addLi.append (addMessage)
    addH6.append (date.toLocaleDateString('fr-FR'));
    ul.append (addLi)
    console.log(addLi);
    
}

// new comments must have the same HTML structure as existing comments.