import { useEffect } from "react";
import { Router } from "./router"
import Pusher from 'pusher-js';
import { useDispatch } from "react-redux";
import { AddMsgAction } from "./Services/action/action";




function App() {

  const dispatch = useDispatch()
  const Pushers = async () => {
    const pusher = new Pusher('e05c9a772fe87d08a535', {
      cluster: 'ap2',
    });
    var channel = pusher.subscribe('NewMessage');
    channel.bind('App\\Events\\NewMessage', function (data) {
      let id = localStorage.getItem('chat_id')
      // if (id == data.message.receiver_id && data.message.receiver_id != 1) {
      dispatch(AddMsgAction(data.message))
      // }
      // else {
      // dispatch(GetMyChatRoom({}, 1))
      // }
    });
  }


  useEffect(() => {
    Pushers()
  }, [])
  return <Router />
}

export default App
