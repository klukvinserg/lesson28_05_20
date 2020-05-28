// console.log(document.documentElement)  /// виводить весь НТМL

// function myFunction() {

//     let temp = document.documentElement.childNodes;

//     for (let i = 0; i < temp.length; i++) {

//         console.log(temp[i].childNodes)

//     }
// }

// function myFunction() {

//     console.log(document.documentElement.children)

//     let body = document.documentElement.childNodes[2];

//     let div = body.childNodes[1];

//     let p = div.childNodes[1];

//     for (let i = 0; i < p.childNodes.length; i++) {

//         console.log(p.childNodes[i])

//     }
// }

// function myFunction() {

//     let body = document.documentElement.children[1];

//     let div = body.children[0];

//     let p = div.children[0];

//     let span = p.lastElementChild

//     console.log(p.firstElementChild) // доступ до першої дитини
//     console.log(p.lastElementChild)  // доступ до останьої дитини
//     console.log(p.parentElement) /// доступ до батьківського елементу

//     console.log(p.nextElementSibling) /// доступ до сусіднього елементу

//     console.log(span)

//     span.style.color = "red"

// }

////////////////////////////////////

document.addEventListener("mousemove", inMoveDiv);
one.addEventListener("mousedown", moveDiv);
document.addEventListener("mouseup", upDiv);
two.addEventListener("mouseup", upDiv);

let d = false;

function moveDiv() {   /// відслідковує чи був зроблений клік над кольоровим ДІВОМ
  d = true;
}

function upDiv(event) {
  if (event.path[0].id === "two" && d === true) { /// якщо миша відпущена в межах пустого ДІВА - кольоровий ДІВ стане середину пустого
    event.path[0].appendChild(one);
    one.removeEventListener("mousedown", moveDiv, d = false);
  }

  one.style.top = 0 + "px";                             /// якщо миша була відпущена за межами пустого ДІВА - кольоровий ДІВ вернеться в початкове положення
  one.style.left = 0 + "px";

  d = false;
}

function inMoveDiv(event) {                             /// функція відслідковує переміщення миші і переміщає ДІВ
  if (d === true ) {
    one.style.top = event.pageY - 50 + "px";
    one.style.left = event.pageX - 50 + "px";
  }
}

///////////////////////////////////
