const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }
  
  func()

  const NOTIFICATION_TITLE = 'Basic Notification'
  const NOTIFICATION_BODY = 'Notification from the Render process'
  
  // function showNotification() {
  //   electronAPI.showNotification(NOTIFICATION_TITLE, NOTIFICATION_BODY)
  //   console.log("Notification sent!");
  // }
  
  // document.getElementById("notifyBtn").addEventListener("click", () => {
  //   console.log("notifyBtn clicked");
  //   showNotification(); // your notification function
  // });

  document.getElementById("notifyBtn").addEventListener("click", () => {
    console.log("Notification sent!");
    new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  });
