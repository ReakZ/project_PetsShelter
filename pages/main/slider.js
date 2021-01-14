let datax = [
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



let sliderBtnLeft = document.getElementById("sliderBtnLeft");
let sliderBtnRight = document.getElementById("sliderBtnRight");

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
let currentItem = 1;


function deploy() {
  let width = window.screen.width;

  let a, b, c;
  if (currentItem == 0) {
    a = datax.length - 1;
    b = 0;
    c = 1;
  } else if (currentItem == datax.length - 1) {
    a = currentItem - 1;
    b = datax.length - 1;
    c = 0;
  } else {
    a = currentItem - 1;
    b = currentItem;
    c = currentItem + 1;
  }

  let inner;
  if (width >= 900) {
    inner = `            <div class="pet-card" data-pet="${datax[a].name}">
            <div class="pet-card__image-container"><img src="${datax[a].img}" alt="${datax[a].name}" /></div>

            <span class="pet-card__title">${datax[a].name}</span>
            <button class="button_secondary">Learn more</button>
            </div>`;
    inner += `            <div class="pet-card" data-pet="${datax[b].name}">
            <div class="pet-card__image-container"><img src="${datax[b].img}" alt="${datax[b].name}" /></div>

            <span class="pet-card__title">${datax[b].name}</span>
            <button class="button_secondary">Learn more</button>
            </div>`;
    inner += `            <div class="pet-card" data-pet="${datax[c].name}">
            <div class="pet-card__image-container"><img src="${datax[c].img}" alt="${datax[c].name}" /></div>

            <span class="pet-card__title">${datax[c].name}</span>
            <button class="button_secondary">Learn more</button>
            </div>`;
            document.querySelector(".pet-cards-d").children[0].remove()

            document.querySelector(".pet-cards-d").children[0].remove()


  }

  if (width >= 750 && width < 1200) {
    inner = `            <div class="pet-card" data-pet="${datax[a].name}">
    <div class="pet-card__image-container"><img src="${datax[a].img}" alt="${datax[a].name}" /></div>

    <span class="pet-card__title">${datax[a].name}</span>
    <button class="button_secondary">Learn more</button>
    </div>`;
    inner += `            <div class="pet-card" data-pet="${datax[b].name}">
    <div class="pet-card__image-container"><img src="${datax[b].img}" alt="${datax[b].name}" /></div>

    <span class="pet-card__title">${datax[b].name}</span>
    <button class="button_secondary">Learn more</button>
    </div>`;
    document.querySelector(".pet-cards-d").children[0].remove()


  }

  if (width >= 320 && width < 750) {
    inner = `            <div class="pet-card" data-pet="${datax[a].name}">
    <div class="pet-card__image-container"><img src="${datax[a].img}" alt="${datax[a].name}" /></div>
    <span class="pet-card__title">${datax[a].name}</span>
    <button class="button_secondary">Learn more</button>
    </div>`;
    console.log(width, currentItem, inner);

  }
  document.querySelector(".pet-cards-d").children[0].remove()
     document.querySelector(`.pet-cards-d`).innerHTML = document.querySelector(`.pet-cards-d`).innerHTML+inner;

    document.querySelector(".pet-cards-d").style.transform="translateX(0px)"


    // .animate([{
    //     transform:"translateX(0px)"},{transform:"translateX(-990px)"}
    // ],750)

//     document.querySelector(".pet-cards-2").animate([{
//       transform:"translateX(990px)"},{transform:"translateX(0px)"}
//   ],750)





}
shufleArray(datax);


function shiftRight() {
  if (currentItem == datax.length - 1) {
    currentItem = 0;
  } else {
    currentItem += 1;
  }

  deploy();
}

function shiftLeft() {
  if (currentItem == 0) {
    currentItem = datax.length;
  } else {
    currentItem -= 1;
  }
  deploy();
}
console.log("aga");
sliderBtnLeft.addEventListener("click", shiftLeft);
sliderBtnRight.addEventListener("click", shiftRight);


function firstDeploy(){
    let width = window.screen.width;

    let a, b, c;
    if (currentItem == 0) {
      a = datax.length - 1;
      b = 0;
      c = 1;
    } else if (currentItem == datax.length - 1) {
      a = currentItem - 1;
      b = datax.length - 1;
      c = 0;
    } else {
      a = currentItem - 1;
      b = currentItem;
      c = currentItem + 1;
    }

    let inner;
    if (width >= 900) {
        inner = `            <div class="pet-card" data-pet="${datax[a].name}">
                <div class="pet-card__image-container"><img src="${datax[a].img}" alt="${datax[a].name}" /></div>

                <span class="pet-card__title">${datax[a].name}</span>
                <button class="button_secondary">Learn more</button>
                </div>`;
        inner += `            <div class="pet-card" data-pet="${datax[b].name}">
                <div class="pet-card__image-container"><img src="${datax[b].img}" alt="${datax[b].name}" /></div>

                <span class="pet-card__title">${datax[b].name}</span>
                <button class="button_secondary">Learn more</button>
                </div>`;
        inner += `            <div class="pet-card" data-pet="${datax[c].name}">
                <div class="pet-card__image-container"><img src="${datax[c].img}" alt="${datax[c].name}" /></div>

                <span class="pet-card__title">${datax[c].name}</span>
                <button class="button_secondary">Learn more</button>
                </div>`;
                document.querySelector(".pet-cards-d").children[0].remove()

                document.querySelector(".pet-cards-d").children[0].remove()


      }

      if (width >= 750 && width < 1200) {
        inner = `            <div class="pet-card" data-pet="${datax[a].name}">
        <div class="pet-card__image-container"><img src="${datax[a].img}" alt="${datax[a].name}" /></div>

        <span class="pet-card__title">${datax[a].name}</span>
        <button class="button_secondary">Learn more</button>
        </div>`;
        inner += `            <div class="pet-card" data-pet="${datax[b].name}">
        <div class="pet-card__image-container"><img src="${datax[b].img}" alt="${datax[b].name}" /></div>

        <span class="pet-card__title">${datax[b].name}</span>
        <button class="button_secondary">Learn more</button>
        </div>`;
        document.querySelector(".pet-cards-d").children[0].remove()


      }

      if (width >= 320 && width < 750) {
        inner = `            <div class="pet-card" data-pet="${datax[a].name}">
        <div class="pet-card__image-container"><img src="${datax[a].img}" alt="${datax[a].name}" /></div>
        <span class="pet-card__title">${datax[a].name}</span>
        <button class="button_secondary">Learn more</button>
        </div>`;
        console.log(width, currentItem, inner);

      }
    document.querySelector(`.pet-cards-d`).innerHTML = inner;
}
firstDeploy()