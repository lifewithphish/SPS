// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*This function adds a caption to the photo when you mouse over it
* I adapted this function from w3schools: 
* https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
* I referenced their div col/row method for laying out the photos
* and then added my own JavaScript */

function showText(text){
    document.getElementById("text").innerHTML=text;
}

function hide(){
    document.getElementById("text").innerHTML="";
}


/** Fetches tasks from the server and adds them to the DOM. */
/* repurposed for messages! */
function loadMessages() {
  fetch('/list-messages').then(response => response.json()).then((messages) => {
    const messageListElement = document.getElementById('message-list');
    messages.forEach((message) => {
      messageListElement.appendChild(createMessageElement(message));
    })
  });
}

/** Creates an element that represents a message, including its delete button. */
function createMessageElement(message) {
  const messageElement = document.createElement('li');
  messageElement.className = 'message';

  const titleElement = document.createElement('span');
  titleElement.innerText = message.title;
/*
  const deleteButtonElement = document.createElement('button');
  deleteButtonElement.innerText = 'Delete';
  deleteButtonElement.addEventListener('click', () => {
    deleteMessage(message);

  });
*/
  messageElement.appendChild(titleElement);
  return messageElement;
}

