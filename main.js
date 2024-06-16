DecreaseOpacity = (elem) => {
  var pos = 100;
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.opacity = pos + "%";
    }
  }
}

IncreaseOpacity = (elem) => {
  var pos = 0;
  id = setInterval(frame, 1);
  elem.style.opacity = 0
  function frame() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.opacity = pos/2 + "%";
    }
  }
  if (elem.style.display == "none") {
    elem.style.display = "block"
  }
}

setTimeout(() => {
  const elem = document.querySelector(".welcome")
  DecreaseOpacity(elem)
},1000)

setTimeout(() => {
  const elem = document.querySelector(".play")
  IncreaseOpacity(elem)
  const elem2 = document.querySelector(".welcome");
  elem2.parentNode.removeChild(elem2);
}, 3000);


user_result = (elem) => {
  const elem2 = document.getElementById("user_img")
  elem2.src = elem
}

cpu_result = (elem) => {
  const elem2 = document.getElementById("cpu_img")
  setTimeout(() => {
    elem2.src = elem
    IncreaseOpacity(elem2)
  }, 500);
}

winning = (user, cpu) => {
  const result = document.querySelector(".result")
  result.innerHTML = "Loading..."
  if((user == "r" && cpu == "r") || (user == "p" && cpu == "p") || (user == "s" && cpu == "s")){
    var winner = "Match Draw"
  }
  else if((user == 'r' && cpu == 'p') || (user == 'p' && cpu == 's') || (user == 's' && cpu == 'r') )
  {
    var winner = "You lost"
  }
  else{
    var winner = "You won"
  }
  setTimeout(() => {
    result.innerHTML = winner
  }, 2000);
  setTimeout(() => {
    result.innerHTML = "Play again"
  }, 5000);
}

cpuselector = () =>{
  const str = 'rps'
  let s = str[Math.floor(Math.random() * str.length)]
  if(s=='r'){
    var elem = o1
  }
  else if(s=='p'){
    var elem = o2
  }
  else{
    var elem = o3
  }
  cpu_result(elem)
  return s
}

MyFunction = (elem, symbol) => {
  user_result(elem)
  winning(symbol, cpuselector())
}

var o1 = document.getElementById("option1").src
var o2 = document.getElementById("option2").src
var o3 = document.getElementById("option3").src

document.getElementById("option1").onclick = function() {MyFunction(o1, 'r')};
document.getElementById("option2").onclick = function() {MyFunction(o2, 'p')};
document.getElementById("option3").onclick = function() {MyFunction(o3, 's')};

