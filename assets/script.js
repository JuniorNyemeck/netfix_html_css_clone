/* const a5 = document.querySelector('.a5'); */

const d1 = document.querySelector('.d1');

const d2 = document.querySelector('.d2');




d1.addEventListener('click', () => {

    d1.style.backgroundColor = 'red';

});





d1.addEventListener('dblclick', () => {

    d1.style.backgroundColor = 'blue';

});


d1.addEventListener('mousedown', () => {

    d1.style.backgroundColor = 'green';

});


d1.addEventListener('mouseup', () => {

    d1.style.backgroundColor = 'yellow';

});


d1.addEventListener('mousemove', () => {

    d1.style.backgroundColor = 'purple';

});

d1.addEventListener('mouseover', () => {

    d1.style.backgroundColor = 'orange';

});

d1.addEventListener('mouseout', () => {

    d1.style.backgroundColor = 'pink';

});

d1.addEventListener('contextmenu', () => {

    d1.style.backgroundColor = 'cyan';

});






/* d1.addEventListener('keydown', () => {

    console.log('Key pressed in d1');
    d1.style.backgroundColor = 'brown';

});

d2.addEventListener('keydown', () => {

    console.log("Key pressed in d2");
    d1.style.backgroundColor = 'brown';

});




d1.addEventListener('keyup', () => {

    console.log('Key released in d1');
    d1.style.backgroundColor = 'gray';

});


d2.addEventListener('keyup', () => {

    console.log('Key released in d2');
    d1.style.backgroundColor = 'lightgray';

});
 */


d1.querySelector('input').addEventListener('focus', () => {
    console.log('d1 focused');
    d1.style.backgroundColor = 'lime';

});