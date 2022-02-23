// ФУНКЦИЯ КОНСТРУКТОР -- этто абсолютно любая функция которая используетя оператр new
//  va один раз опишем её, на её основе склко захотим стольок и вызовем раз
const DomElement = function (selector,height,width,bg,fontSize) {
    const div = document.createElement('div')
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.addBlcok = function(){
    let div = document.createElement('div')

      if (this.selector[0] == '.') {
        div = document.createElement('div')
        div.className = this.selector.slice(1)
      }
      if (this.selector[0] == '#') {
        div = document.createElement('p')
        div.id = this.selector.slice(1)
      }
      div.style.cssText = 'height:'+ this.height +'; width:'+ this.width +
      '; background:'+ this.bg +'; font-size:' + this.fontSize + ';'
      // сохраняем элемент на станице
      div.textContent = 'Просто текст'
      document.body.append(div)
      }
    this.position = function(){
      div.style.position = 'absolute'
    }
}
// созда1ём объект на основе класса DomElement
const newClasObj1 = new DomElement

newClasObj1.selector = '.block'
newClasObj1.width = '100px'
newClasObj1.height = '100px'
newClasObj1.bg = 'blue'
newClasObj1.fontSize = '24px'

document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM готов!');
  newClasObj1.addBlcok()
  newClasObj1.position()

  let square = document.querySelector(".block");
  const step = 10
  square.tabIndex = 0;

  document.addEventListener("keydown", function (event) {
      if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
          event.code != "ArrowUp" && event.code != "ArrowDown") return;

      let rectElem = square.getBoundingClientRect();
      let x = rectElem.x + pageXOffset,
          y = rectElem.y + pageYOffset;
      console.log(square)
      if (event.code == "ArrowRight") x += step;
      if (event.code == "ArrowLeft")  x -= step;
      if (event.code == "ArrowUp")    y -= step;
      if (event.code == "ArrowDown")  y += step;

      square.style.position = "absolute";
      square.style.left = x + "px";
      square.style.top = y + "px";
  });

});
console.log('DOM не готов!');







