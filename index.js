function betResult(userBets) {
  if (userBets.length === 0) return "Why,enter something";
  if (userBets.length > 6) return "Too many numbers";
  let betNumbers = pickRandom();
  let counter1 = {};
  let counter2 = {};

  for (let value of userBets) {
    if (counter1[value] > 0) {
      counter1[value]++;
    } else {
      counter1[value] = 1;
    }
  }
  for (let value of betNumbers) {
    if (counter2[value] > 0) {
      counter2[value]++;
    } else {
      counter2[value] = 1;
    }
  }

  for (let key in counter1) {
    if (!(key in counter2)) {
      return "Ops";
    }
    if (counter2[key] !== counter1[key]) {
      return "Ops";
    }
  }
  return "You won!!";
}

function pickRandom() {
  let arr = [];
  let numbers = upTo100();

  for (let i = 0; i < 6; i++) {
    let ran = numbers[Math.floor(Math.random() * numbers.length)];
    arr.push(ran);
  }
  return arr;
}

function upTo100() {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(i);
  }
  return array;
}

function addToList() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("userInput").value;
  let array = [].push(inputValue);
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("userInput").value = "";
  return array;
}

console.log(addToList());
