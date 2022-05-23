const date = new Date()
const sec = date.getSeconds()
const min = date.getMinutes()
const hours = date.getHours()

const today = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

// const second = document.getElementById("second")
// const minute = document.getElementById("minute")
// second.innerHTML = sec + ' Meconds'
// minute.innerHTML = hours + ' Hour'

// All months name
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Find out the current month name
const getMonth = months.find((m, index) => index == month)

const time = document.getElementById("time")
const d = document.getElementById("date")
time.innerHTML = setAmPm(min, hours, sec)
d.innerHTML = today + ' ' + getMonth + ' ' + year


function setAmPm(minutes, hours, sec) {
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
