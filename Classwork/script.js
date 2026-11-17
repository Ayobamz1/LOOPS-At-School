let show = document.getElementById("display");

for (let i = 1; i <= 150; i++) {
  // show.innerHTML += `<p>${i}<p>`
  if (i % 3 == 0 && i % 5 == 0) {
    show.innerHTML += `<p style="color: blue">${i} This is Fizz-Buzz`;
  } else if (i % 3 == 0) {
    show.innerHTML += `<p style="color: purple;">${i} This is fizz`;
  } else if (i % 5 == 0) {
    show.innerHTML += `<p style="color: green;">${i} This is buzz `;
  } else {
    show.innerHTML += `<p style="color: yellow-green">${i} This is neither fizz nor buzz`;
  }
}
