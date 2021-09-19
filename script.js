"use strict";
const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "./pics/drink.jpg",
    text: "I'm Thirsty",
  },
  {
    image: "./pics/hungry.png",
    text: "I'm Hungry",
  },
  {
    image: "./pics/tired.jpg",
    text: "I'm Tired",
  },
  {
    image: "./pics/hurt.jpg",
    text: "I'm Hurt",
  },
  {
    image: "./pics/happy.jpg",
    text: "I'm Happy",
  },
  {
    image: "./pics/sad.jpg",
    text: "I'm Sad",
  },
  {
    image: "./pics/scared.jpg",
    text: "I'm scared",
  },
  {
    image: "./pics/school.jpg",
    text: "I want to go to school",
  },
  {
    image: "./pics/outside.jpg",
    text: "I'm Outside",
  },
  {
    image: "./pics/grandma.jpg",
    text: "I want to go to Grandmaa",
  },
  {
    image: "./pics/play.jpg",
    text: "I want to play with my friends",
  },
  {
    image: "./pics/student.jpg",
    text: "I will study now",
  },
  {
    image: "./pics/respect.jpg",
    text: "Always Respect Your teachers",
  },
  {
    image: "./pics/polite.jpg",
    text: "Be polite to others",
  },
  {
    image: "./pics/numbers.jfif",
    text: "one two three four five six seven eight nine ten",
  },
  {
    image: "./pics/alphabets.jfif",
    text: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
  },
  {
    image: "./pics/play.jpg",
    text: "Be friendly with everyone",
  },
  {
    image: "./pics/animal.jpg",
    text: "Be kind to animals",
  },
  {
    image: "./pics/kind.jpg",
    text: "Show sympathy to others",
  },
  {
    image: "./pics/parents.jfif",
    text: "Love your parents",
  },
];

data.forEach(createBox);
//create speech box
function createBox(item) {
  const box = document.createElement("div");

  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;
  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();
    //add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });
  //@to-do-speak event
  main.appendChild(box);
}
// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener("voiceschanged", getVoices);

// Toggle text box
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

// Close button
closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

// Change voice
voicesSelect.addEventListener("change", setVoice);

// Read text button
readBtn.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
