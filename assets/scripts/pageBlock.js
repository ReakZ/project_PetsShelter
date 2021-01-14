let data = [
  {
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

let massiv = [];

let currentPage = 0;
let maxPage = 5;

//   elements
let petsBLock = document.querySelector(".pets__content__cards");

let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");
let currentPageBtn = document.getElementById("currentPage");
let startBtn = document.getElementById("startBtn");
let endBtn = document.getElementById("endBtn");

//handlers

leftBtn.addEventListener("click", leftSlide);
rightBtn.addEventListener("click", rightSlide);

startBtn.addEventListener("click", startSlide);
endBtn.addEventListener("click", endSlide);
//
let screenWidth = window.screen.width;

let chunk = 8;

firstDeploy();


// При 1280px <= width на странице одновременно показаны 8 питомцев, а самих страниц 6. Т.е. при нажатии >> открывается шестая страница.
// При 768px <= width < 1280px на странице одновременно показаны 6 питомцев, а самих страниц 8. Т.е. при нажатии >> открывается восьмая страница.
// При width < 768px на странице одновременно показаны 3 питомца, а самих страниц 16. Т.е. при нажатии >> открывается шестнадцатая страница.
function getWidth() {
  screenWidth = window.screen.width;
  if (screenWidth >= 1280) {
    chunk = 8;
    maxPage = 5;
  }
  if (screenWidth < 1280 && screenWidth >= 768) {
    chunk = 6;
    maxPage = 7;
  }
  if (screenWidth < 768) {
    chunk = 3;
    maxPage = 15;
  }
}
//
function shufleArray(arr) {
  let shufleArr = [...arr];

  for (let i = 1; i < shufleArr.length; i++) {
    Math.floor(Math.random() * (i + 1));
    let randomIndex = RandomNumber(0, i);
    let time = shufleArr[i];
    shufleArr[i] = shufleArr[randomIndex];
    shufleArr[randomIndex] = time;
  }
  return shufleArr;
}
function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//

function generateMassiv() {
  for (let index = 0; index < 6; index++) {
    if (screenWidth >= 768) {
      massiv = massiv.concat(shufleArray(data));
    } else {
      massiv = massiv.concat(data);
    }
  }
}

function firstDeploy() {
  getWidth();
  generateMassiv();
  deploy();
}

function deploy() {
  getWidth();
  currentPageBtn.innerText = currentPage + 1;

  if (currentPage == maxPage) {
    rightBtn.disabled = true;
    endBtn.disabled = true;
  } else {
    rightBtn.disabled = false;
    endBtn.disabled = false;
  }
  if (currentPage == 0) {
    leftBtn.disabled = true;
    startBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
    startBtn.disabled = false;
  }
  petsBLock.innerHTML = "";
  for (
    let index = currentPage * chunk;
    index <= (currentPage + 1) * chunk - 1;
    index++
  ) {
    createBlockPet(index);
  }

  placeHandlers();
}
firstDeploy();

function createBlockPet(n) {
  let block = document.createElement("div");
  block.classList.add("pet-card");
  block.dataset.pet = massiv[n].name;
  block.innerHTML = `<div class="pet-card__image-container">
  <img src="${massiv[n].img}" alt="${massiv[n].name}" /></div> <span class="pet-card__title">${massiv[n].name}</span>
<button class="button_secondary">Learn more</button>
</div>`;
  petsBLock.appendChild(block);
}

function rightSlide() {
  currentPage += 1;
  deploy();
}

function leftSlide() {
  currentPage -= 1;
  deploy();
}

function startSlide() {
  currentPage = 0;
  deploy();
}

function endSlide() {
  currentPage = maxPage;
  deploy();
}

let popUp = document.querySelector(".popup");

function placeHandlers() {
  let petCards = document.getElementsByClassName("pet-card");

  for (const iterator of petCards) {
    iterator.addEventListener("click", petActive);
  }
}

function petActive(e) {
  let name = this.dataset.pet;

  let our = data.filter((x) => x.name == name)[0];

  let par = document.querySelector(".b-popup-content");
  par.innerHTML = '<div class="popup-pet__textBlock"></div>';
  let image = document.createElement("img");

  image.src = our.img;
  image.alt = our.name;
  image.classList.add("popup-pet__imageBlock");
  par.appendChild(image);

  let nameBlock = document.createElement("h3");
  nameBlock.innerHTML = our.name;
  let parent = document.querySelector(".popup-pet__textBlock");
  nameBlock.classList.add("popup-pet__name");

  let nameType = document.createElement("h4");
  nameType.innerHTML = `${our.type} - ${our.breed}`;
  nameType.classList.add("popup-pet__type");
  parent.appendChild(nameType);

  let description = document.createElement("h5");
  description.innerHTML = our.description;
  description.classList.add("popup-pet__description");
  parent.appendChild(description);

  let properties = document.createElement("ul");

  properties.classList.add("popup-pet__properties");

  let list = ["age", "inoculations", "diseases", "parasites"];

  [our.age, our.inoculations, our.diseases, our.parasites].forEach((x, i) => {
    let item = document.createElement("li");
    item.innerHTML = `${list[i]}: ${x}`;
    item.classList.add("popup-pet__properties__item");
    properties.appendChild(item);
  });
  parent.appendChild(properties);
  popUp.classList.toggle("popup-active");
}



function hidez() {
  popUp.classList.remove("popup-active");
}

let clsBtn = document.querySelector(".popup-pet__closeBtn");
clsBtn.addEventListener("click", () => {
  popUp.classList.toggle("popup-active");
});

placeHandlers();
