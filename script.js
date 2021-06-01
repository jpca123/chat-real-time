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
	renderizarChat(e)
}

function renderizarChat(e){
	let nuevoChat = document.createElement('p');
	nuevoChat.classList.add("msg-chat");
	if(e.type === "submit"){
		nuevoChat.innerHTML = mensaje.value;
		nuevoChat.classList.add('yo');
	}else{
		if(e.key === "mensajes"){
			let obj = JSON.parse(e.newValue);
			nuevoChat.innerHTML = obj[obj.length - 1].message;
			nuevoChat.classList.add('el');
		}else{
			return mensaje.value = "";
		}

	}	
	chat.appendChild(nuevoChat);
	mensaje.value = "";

}


window.addEventListener("storage", renderizarChat)
window.addEventListener("submit", enviarMensaje)
window.addEventListener("load", crearSesion);