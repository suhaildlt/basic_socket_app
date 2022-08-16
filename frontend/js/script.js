import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const messageSubmitButton = document.getElementById("messageSubmitBtn");
const viewDiv = document.getElementById("view");

messageSubmitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let message = document.getElementById("message").value;
    if(message !==''){
        socket.emit("sentMessage",message);
        let sentHtml = `<p class="sent">${message}</p>`;
        viewDiv.insertAdjacentHTML("beforeend",sentHtml);
    }

})

socket.on("recievedMessage",message=>{
    let recievedHtml = `<p class="recieved">${message}</p>`;
    viewDiv.insertAdjacentHTML("beforeend",recievedHtml)
})
