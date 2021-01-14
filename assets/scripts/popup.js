

// let popUp = document.querySelector(".popup");






// function placeHandlers(){


//     let petCards= document.getElementsByClassName("pet-card")


//     for (const iterator of petCards) {
//         iterator.addEventListener('click',petActive)
//     }

// }

// placeHandlers()


// async function getPets() {
//     const url = `../../assets/pets.json`;
//     let res = await fetch(url);
//     data = await res.json();

//     // api have bad random generate , lets fix it
// console.log(data)
//   }

//   getPets()















// function petActive(e) {
//   let name = this.dataset.pet;

//   let our = data.filter((x) => x.name == name)[0];


//   let par = document.querySelector(".b-popup-content");
//   par.innerHTML = '<div class="popup-pet__textBlock"></div>';
//   let image = document.createElement("img");

//   image.src = our.img;
//   image.alt = our.name;
//   image.classList.add("popup-pet__imageBlock");
//   par.appendChild(image);

//   let nameBlock = document.createElement("h3");
//   nameBlock.innerHTML = our.name;
//   let parent = document.querySelector(".popup-pet__textBlock");
//   nameBlock.classList.add("popup-pet__name");

//   let nameType = document.createElement("h4");
//   nameType.innerHTML = `${our.type} - ${our.breed}`;
//   nameType.classList.add("popup-pet__type");
//   parent.appendChild(nameType);

//   let description = document.createElement("h5");
//   description.innerHTML = our.description;
//   description.classList.add("popup-pet__description");
//   parent.appendChild(description);

//   let properties = document.createElement("ul");

//   properties.classList.add("popup-pet__properties");

//   let list = ["age", "inoculations", "diseases", "parasites"];

//   [our.age, our.inoculations, our.diseases, our.parasites].forEach((x, i) => {
//     let item = document.createElement("li");
//     item.innerHTML = `${list[i]}: ${x}`;
//     item.classList.add("popup-pet__properties__item");
//     properties.appendChild(item);
//   });
//   parent.appendChild(properties);
//   popUp.classList.toggle("popup-active");


// }

// // backgroundPopUp.addEventListener("click",hidez)

// function hidez() {
//   popUp.classList.remove("popup-active");
// }

// let clsBtn=document.querySelector('.popup-pet__closeBtn')
// clsBtn.addEventListener('click',()=>{
//     popUp.classList.toggle('popup-active')
// })

// placeHandlers()