 const secondHand = document.querySelector('.second-hand');
 const minsHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand');

  function setDate(){
  const now = new Date()
 
  const second = now.getSeconds()
  const secDegree = ((second / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secDegree}deg)`

  const minute = now.getMinutes()
  const minDegree = ((minute / 60) * 360) + 90
  minsHand.style.transform = `rotate(${minDegree}deg)`

  const hour = now.getMinutes()
  const hourDegree = ((minute / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setDate,1000)

