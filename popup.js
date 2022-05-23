const date = new Date()
const sec = date.getSeconds()
const min = date.getMinutes()
const hours = date.getHours()

// const second = document.getElementById("second")
// const minute = document.getElementById("minute")
// second.innerHTML = sec + ' Meconds'
// minute.innerHTML = hours + ' Hour'
const amPm = document.getElementById("time")
amPm.innerHTML = setAmPm(min, hours, sec)


function setAmPm(minutes, hours, sec) {
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ':' + sec + ' ' + ampm;
  return strTime;
}
