// // navbar burger
// const burgerIcon = document.querySelector('#burger');
// const navbarMenu = document.querySelector('#navMenu');

// burgerIcon.addEventListener('click', () => {
//     navbarMenu.classList.toggle('is-active');
// });

// // tabs
// const tabs = document.querySelectorAll('.tabs li');
// const tabContentBoxes = document.querySelectorAll('#tab-content > div');

// // add event listener to each of the tabs; remove is-active class to click on diff tabs
// tabs.forEach((tab) => {
//     tab.addEventListener('click' , () => {
//         tabs.forEach(item => item.classList.remove('is-active'))
//         tab.classList.add('is-active');

// // show hidden tabs - isnt working yet
//     const target = tab.dataset.target;
//     tabContentBoxes.forEach(box => {
//         if (box.getAttribute('id') === target) {
//             box.classList.remove('is-hidden');
//         } else {
//             box.classList.add('is-hidden');
//         }
//         });
//     })
//   }) 



