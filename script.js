'use strict'

const btn = document.getElementById("btn"),
chat = document.querySelector(".chat"),
mensaje = document.getElementById("mensaje");
let listaMensajes = [];

function crearSesion(){

	if(localStorage.getItem("mensajes") == null){
		localStorage.setItem('mensajes', JSON.stringify([]));
		listaMensajes.push(...JSON.parse(localStorage.getItem('mensajes')));

	}else{
		listaMensajes = JSON.parse(localStorage.getItem('mensajes'));
	}

}

function enviarMensaje(e){
	e.preventDefault();
	let texto = mensaje.value;
	listaMensajes.push({
		message : texto
	})
	localStorage.setItem("mensajes", JSON.stringify(listaMensajes));
	listaMensajes = JSON.parse(localStorage.getItem("mensajes"));
	renderizarChat(e);
}

function renderizarChat(e){
	let contenedor = document.createElement('article');
	contenedor.classList.add('msg-container');
	let nuevoChat = document.createElement('p');
	nuevoChat.classList.add("msg-chat");
	if(e.type === "submit"){
		nuevoChat.innerHTML = mensaje.value;
		nuevoChat.classList.add('el');
	}else{
		if(e.key === "mensajes"){
			let obj = JSON.parse(e.newValue);
			nuevoChat.innerHTML = obj[obj.length - 1].message;
			nuevoChat.classList.add('yo');
		}else{
			return mensaje.value = "";
		}

	}	
	contenedor.appendChild(nuevoChat);
	chat.appendChild(contenedor);
	mensaje.value = "";
<<<<<<< HEAD
	console.log(chat.scorllTop)
	console.log(chat.scrollHeight)
	console.log(chat.clientHeight)
	chat.scrollTop = chat.scrollHeight + chat.clientHeight;
=======
	console.log(chat.offsetHeigth)
>>>>>>> acab1562b4fad14cb8b43a8aad717aea02e4a603

}



window.addEventListener("storage", renderizarChat)
window.addEventListener("submit", enviarMensaje)
window.addEventListener("load", crearSesion);