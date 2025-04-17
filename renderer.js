const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }
  
  func()

// const { Notification } = require('electron')

// const NOTIFICATION_TITLE = 'Basic Notification'
// const NOTIFICATION_BODY = 'Notification from the Main process'

// new Notification({
//   title: NOTIFICATION_TITLE,
//   body: NOTIFICATION_BODY
// }).show()

// function showNotification() {
//   console.log("notification done");
//   new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
// }