var name = 'hello';
console.log(name.toUpperCase());

var sentence = 'good afternoon, mr mike.';
String.prototype.firstUpperCase = function(){
    return this.replace(/\b(\w)(\w*)/g,function($0,$1,$2){
      return $1.toUpperCase() + $2.toLowerCase();
    })
}
var result = sentence.firstUpperCase();;
console.log(result); 


var money = '￥20';
console.log(money.substr(1));
