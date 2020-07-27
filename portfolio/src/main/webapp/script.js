/*This set of functions add a caption to the photo when you mouse over it
* I adapted this function from w3schools: 
* https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
* I referenced their div col/row method for laying out the photos
* and then added my own JavaScript
 */
function showText(text){
    document.getElementById("text").innerHTML=text;
}

function hide(){
    document.getElementById("text").innerHTML="";
}

/* Function to fetch the int relating to login status from servlet
* then either displays the messages if you are logged in or 
* displays a link that redirects to my /login servlet
*/

// included for testing purposes are several alerts and what they indicate
function getLoginStatus() {
  fetch('/loginstatus').then(response => response.json()).then((loginDecision) => {
    // stats is an object, not a string, so we have to reference its fields to create HTML content

    if(loginDecision.intLoginResult == 1)
    {
        loadMessages();
        document.getElementById("login-stats-container").innerHTML="Good to see you, " +
         loginDecision.loginEmail +"!";
    }
  });
}

/* This function loads the messages from my /list-messages servlet */
function loadMessages() {
    fetch('/list-messages').then(response => response.json()).then((messages) => {
        const messageListElement = document.getElementById('message-list');
            messages.forEach((message) => {
                messageListElement.appendChild(createMessageElement(message)); 
            })
        });
}//loadMessages


/** Creates an element that represents a message */
function createMessageElement(message) {
  const messageElement = document.createElement('li');
  messageElement.className = 'message';

  const titleElement = document.createElement('span');
  //titleElement.innerText = message.title;
  titleElement.innerText ="\"" + message.title + "\"" + " :" + message.userEmail;

  messageElement.appendChild(titleElement);
  return messageElement;
}