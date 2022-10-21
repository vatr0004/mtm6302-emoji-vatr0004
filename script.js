
const $squares =
    document.getElementById('squares')


const squares = []
for (let i = 2; i < 50; i++) {
    squares.push(/*html*/ `<p class= "emoji">
    <span>&#1294${i};</span><br>
    <code>1294${i}</code>
  </p>`)
}

console.log(squares)

$squares.innerHTML=squares.join('')