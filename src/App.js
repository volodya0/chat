import { addMessage, createChat, getMessages } from "./firebase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <textarea>

        </textarea>

        <button onClick = {async() => {
          console.log('start :>> ')
          let res = await createChat('new chat', 'descr', 'volodya')
          console.log('res=',res)
        }
        }> Create </button>

        <button onClick = {async() => {
          console.log('start :>> ')
          let res = await addMessage('chat-kq2vliyn', 'sended', 'volodya')
          console.log('res=',res)
        }
        }> Send </button>

        <button onClick = {async() => {
          console.log('start :>> ')
          let res = await getMessages('chat-kq2vliyn')
          console.log('res=',res)
        }
        }> Get </button>
      </header>
    </div>
  );
}

export default App;
