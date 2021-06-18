import firebase from 'firebase'	
import uniqid from 'uniqid' 
import {firebaseConfig} from '../config'

firebase.initializeApp(firebaseConfig);
var DB = firebase.database()

export const createChat = (name, description, author) => {
  const id = uniqid('chat-')
  const chat = {
    info : {
      author,name,description,
      created : Date.now(),
    },
    messages: { 0 : {
      text : `Chat created by ${author}`,
      author : author
    }}
  }

  return new Promise((res, rej) => DB.ref(`/chats/${id}`).set(chat, (e) => e ? rej(e) : res(chat)))
}

export const addMessage = (chatId, text, author) => {
  const message = {
    text, author,
  }

  return new Promise((res, rej) => DB.ref(`/chats/${chatId}/messages/${Date.now()}`).set(message, (e) => e ? rej(e) : res(message)))
}

export const getInfo = (chatId) => {
  DB.ref(`/chats/${chatId}/messages`).get().then((snapshot) => console.log('res :>> ', snapshot.val())) 
}

export const getMessages = (chatId) => {
  DB.ref(`/chats/${chatId}/messages`).get().then((snapshot) => console.log('res :>> ', snapshot.val())) 
}


export const sendMessage = (msg, author, chatId) => {
  
}