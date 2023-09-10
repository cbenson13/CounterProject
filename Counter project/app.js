const addCount = document.querySelector('.add-count');
const lowerCount = document.querySelector('.lower-count');
const result = document.querySelector('.box p');
let i = 0;

// let increaseCount = function () {
//   return ++i; //pre increament (it first increase value by 1 then return it and vice versa to i++)
// };

let changeColor = function () {
  if (result.textContent > 0) {
    result.style.color = 'green';
  } else if (result.textContent < 0) {
    result.style.color = 'red';
  } else {
    result.style.color = 'grey';
  }
};

addCount.addEventListener('click', () => {
  // let value1 = increaseCount();
  // result.textContent = value1;
  result.textContent++;
  result.style.color = 'green';
  changeColor();
});

// let decreaseCount = function (i) {
//   return --i;
// };

lowerCount.addEventListener('click', () => {
  result.textContent--;
  changeColor();
});
