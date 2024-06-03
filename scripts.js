const inputName = document.getElementById("name");
const inputMail = document.getElementById("mail");
const inputMsg = document.getElementById("message");
const userData = document.getElementById("userList");


if (!localStorage.userData) {
  localStorage.setItem("userData", JSON.stringify([]));
} else {
  let users = JSON.parse(localStorage.userList);
  users.forEach((element) => {
    addUserToDOM(element);
  });
}

// Boton de submit
document.getElementById("sendButton").addEventListener("click", addUserToLocal);

function addUserToLocal(event) {
  event.preventDefault();
  // Check all inputs
  if (!userName.value || !userMail.value || !userMessage.value) {
    errorMessage.innerHTML = "Falta un valor!";
    return;
  }

  errorMessage.innerHTML = "";

  let user = {
    userName: userName.value,
    userMail: userMail.value,
    userMessage: userMessage.value,
  };

  let users = JSON.parse(localStorage.userList);
  users.push(user);
  localStorage.userList = JSON.stringify(users);
  addUserToDOM(user);

  userName.value = "";
  userMail.value = "";
  userMessage.value = "";
}

function addUserToDOM(user) {
  let card = document.createElement("div");
  card.classList.add("user-card");

  card.innerHTML =
    `<p>Nombre: ${user.userName}</p>` +
    `<p>Correo: ${user.userMail}</p>` +
    `<p>Mensaje: ${user.userMsg}</p>`;

  userList.appendChild(card);
}

document.getElementById("deleteButton").addEventListener("click", emptyUserList);

function emptyUserList(event) {
  event.preventDefault();
  localStorage.setItem("userList", JSON.stringify([]));
  userList.innerHTML = "";
}







// Un solo usuario:
// function saveDataStorage(){
//     localStorage.setItem(
//         'userData', 
//         JSON.stringify({
//             userName: userName.value,
//             userMail: userMail.value,
//             userMsg: userMsg.value,
//         })
//     )
//    }  

// // Más de un usuario:
// function saveDataStorage(event){
//     event.preventDefault()

//     let guardarLista = JSON.parse((localStorage.userList) || [])
// }
// function saveDataStorage() {
//     localStorage.setItem(
//         'userList', 
//         JSON.stringify({
//             userName: userName.value,
//             userMail: userMail.value,
//             userMsg: userMsg.value,
//         })
//     )
// }

