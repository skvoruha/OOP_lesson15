// ФУНКЦИЯ КОНСТРУКТОР -- этто абсолютно любая функция которая используетя оператр new
//  va один раз опишем её, на её основе склко захотим стольок и вызовем раз
const DomElement = function (selector,height,width,bg,fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.addBlcok = function(){
      let div = document.createElement('div')
      if (this.selector[0] == '.') {
        div.className = this.selector.slice(1)
      }
      if (this.selector[0] == '#') {
        div.id = this.selector.slice(1)
      }
      div.style.cssText = 'height:'+ this.height +'; width:'+ this.width +'; background:'+ this.bg +'; font-size:' + this.fontSize + ';'
      // сохраняем элемент на станице
      div.textContent = 'Просто текст'
      document.body.childNodes[1].append(div)
 }
}
// созда1ём объект на основе класса DomElement
const newClasObj1 = new DomElement
const newClasObj2 = new DomElement
//
newClasObj1.selector = '.block'
newClasObj1.width = '100px'
newClasObj1.height = '150px'
newClasObj1.bg = 'blue'
newClasObj1.fontSize = '32px'

newClasObj2.selector = '#blog'
newClasObj2.width = '200px'
newClasObj2.height = '150px'
newClasObj2.bg = 'orange'
newClasObj2.fontSize = '16px'



newClasObj1.addBlcok()
newClasObj2.addBlcok()

console.log(newClasObj1);
console.log(newClasObj2);