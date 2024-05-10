const inputName = document.getElementById('userName')
const inputMail = document.getElementById('userMail')
const inputMessage = document.getElementById('userMsg')
const userData = document.getElementById('content')

const sendButton = document.getElementById('sendButton')



function onSubmit(event){
    event.preventDefault()
    saveDataStorage()
    const userDataStorage = JSON.parse(localStorage.getItem('userData'))
    userData.innerHTML= `<p>Hola ${userDataStorage.userName} tu email es: ${userDataStorage.userMail} y tu mensaje es: ${userDataStorage.userMsg}`
    console.log(userDataStorage)
}

// Un solo usuario:
function saveDataStorage(){
    localStorage.setItem(
        'userData', 
        JSON.stringify({
            userName: userName.value,
            userMail: userMail.value,
            userMsg: userMsg.value,
        })
    )
   }  

   sendButton.addEventListener('click',onSubmit)



// Más de un usuario:






