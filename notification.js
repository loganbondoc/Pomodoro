const { Notification } = require('electron')

const NOTIFICATION_TITLE = 'Basic Notification'
const NOTIFICATION_BODY = 'Notification from the Main process'

new Notification({
  title: NOTIFICATION_TITLE,
  body: NOTIFICATION_BODY
}).show()

function showNotification () {
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  }