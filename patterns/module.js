var BasketModule = (function(){

    var sum = 0
    var goods = []

    return {
        addProduct: function( product ){
            sum += product.price;
            goods.push( product )
        },
        printProducts: function () {
            for( var i = 0; i < goods.length; i++){
                console.log( goods[i].name,  goods[i].price)
            }
        }
    }

}())

var salt = {
    name: "salt",
    price: "0.5"
}
var sugar = {
    name: "sugar",
    price: "1.5"
}
console.group("Module pattern ")
BasketModule.addProduct(salt)
BasketModule.addProduct(sugar)
BasketModule.printProducts()
console.groupEnd()
