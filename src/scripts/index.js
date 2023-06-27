import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/hero.css';
import '../styles/footer.css';
import '../styles/list.css';
import '../styles/header.css';
import '../styles/box.css';
console.log('Hello Coders! :)');

//toggle class active
const navbarHead = document.querySelector('.navbar-head');

//Ketika humburger di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarHead.classList.toggle('active');
};

// jika mengklik di luar sidebar maka akan menghilangkan menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarHead.contains(e.target)){
        navbarHead.classList.remove('active');
    }
});

import DATA from '../DATA.json';
console.log(DATA);


function getRestaurantInfo(data) {
    let restoInfo = '';

    data.restaurants.forEach((resto, i) => {
        restoInfo += `
      <article class="list-resto">
          <div class="thumbnail-list">
              <img class="resto-picture" src="${resto.pictureId}" alt="${resto.name}">
              <p class="resto-city">${resto.city}</p>
          </div>
          <div class="list-resto-content">
              <p class="resto-rate">Rating </p> 
              <p class="restaurant-rate"><i title="ratings" class="box-rating"></i> ${resto.rating}</p>
              
              <h2 class="resto-name"><a href="#">${resto.name}</a></h2>
              <p class="resto-description">${resto.description.slice(0, 150)}...</p>
          </div>
      </article>

      `;
    });

    document.getElementById('list-resto').innerHTML = restoInfo;
}

getRestaurantInfo(DATA);