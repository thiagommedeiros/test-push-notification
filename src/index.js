import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import io from 'socket.io-client'
let socket = io(`http://localhost:4000`)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

setTimeout(function() {

  navigator.serviceWorker.getRegistration().then(function(reg) {
    socket.on('message', function(msg){

      var options = {
        body: msg,
        icon: 'logo.svg',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      }

      reg.showNotification('Msg from server', options)
    })
  })

}, 4000)
