//#FEATURES
const carrossel = document.getElementById('carrossel');
const cards = document.querySelectorAll('div.card-feature');
const imgs = document.querySelectorAll('div.card-feature img');
const navBar = document.querySelectorAll('label.features__navigation__bar');

const clearCardSelected = (item) => {
  cards.forEach((card) => {
    card.classList.remove('card-select');
  });
};

const hidenRemove = () => {
  imgs.forEach((item) => {
    if (item.parentElement.parentElement.classList.contains('card-select')) {
      if (item.getAttribute('src').includes('select')) {
        item.classList.remove('icon-hiden');
      } else {
        item.classList.add('icon-hiden');
      }
    }
  });
};

const hidenAdd = () => {
  imgs.forEach((item) => {
    if (!item.parentElement.parentElement.classList.contains('card-select')) {
      if (item.getAttribute('src').includes('select')) {
        item.classList.add('icon-hiden');
      } else {
        item.classList.remove('icon-hiden');
      }
    }
  });
};

const clearNavSelected = () => {
  navBar.forEach((item) => {
    item.classList.remove('selected');
  });
};

const handleCardSelect = (item) => {
  clearCardSelected();
  item.classList.add('card-select');

  cards.forEach((card) => {
    if (item === card) {
      clearNavSelected();

      const position = Array.prototype.indexOf.call(cards, card);
      navBar[position].classList.add('selected');

      if (position === 0) {
        carrossel.scroll(0, 0);
      } else if (position === 1) {
        carrossel.scroll(340, 0);
      } else {
        carrossel.scroll(carrossel.scrollWidth, 0);
      }

      hidenAdd();
      hidenRemove();
    }
  });
};

//cards navigation-bar
const navHandleClick = (item) => {
  clearNavSelected();
  item.classList.add('selected');

  navBar.forEach((bar) => {
    if (item === bar) {
      clearCardSelected();
      const navPosition = Array.prototype.indexOf.call(navBar, bar);
      cards[navPosition].classList.add('card-select');
      if (navPosition === 0) {
        carrossel.scroll(0, 0);
      } else if (navPosition === 1) {
        carrossel.scroll(340, 0);
      } else {
        carrossel.scroll(carrossel.scrollWidth, 0);
      }
      hidenAdd();
      hidenRemove();
    }
  });
};

cards.forEach((item) => {
  item.addEventListener('click', () => handleCardSelect(item));
});
navBar.forEach((item) => {
  item.addEventListener('click', () => navHandleClick(item));
});
//#FIM FEATURES

const tables = document.querySelectorAll('.package__table');

tables[1].classList.add('package__table--dark');

function activeBlackMode(index) {
  tables.forEach((table) => {
    table.classList.remove('package__table--dark');
  });
  tables[index].classList.add('package__table--dark');
}

tables.forEach((item, index) => {
  item.addEventListener('mouseover', function () {
    activeBlackMode(index);
  });
});

/*-----------------------------------*\
  #FAQS
\*-----------------------------------*/

const allItems = document.querySelectorAll('.faqs__data');
const allPlusBalls = document.querySelectorAll('.faqs__data-plusball');
const allMinusBalls = document.querySelectorAll('.faqs__data-minusball');

console.log(allMinusBalls);

allItems.forEach((item) => {
  console.log(item);
  item.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
  });
});
