// abstract strategy

var module = (function(){
    var strategy = {};

    return {
        exec: function () {
            strategy.exec()
        },
        setStrategy: function (s) {
            strategy = s;
        }
    }

}());


function Strategy() {}
Strategy.prototype.exec = function () {}

function Strategy1() {}
Strategy1.prototype = Object.create(Strategy.prototype)
Strategy1.prototype.exec = function () {
    console.log("some behavior for Strategy ");
}


function Strategy2() {}
Strategy2.prototype = Object.create(Strategy.prototype)
Strategy2.prototype.exec = function () {
    console.log("some behavior for Strategy2 ");
}

console.group("Strategy")
module.setStrategy( new Strategy1() )
module.exec()
module.setStrategy( new Strategy2() )
module.exec()
console.groupEnd()

// abstract strategy end

function SortStrategy() {}
SortStrategy.prototype.sort = function () {}



function NameSourceStrategy() {} // NameSS
NameSourceStrategy.prototype = Object.create(SortStrategy.prototype)
NameSourceStrategy.prototype.sort = function ( data ) {
    console.log("some behavior for NameSourceStrategy ");
    data.sort( function (a,b) {
        return (a.name > b.name) ? 1 : -1;

    })
}

function PriceSourceStrategy() {} // PriceSS
PriceSourceStrategy.prototype = Object.create(SortStrategy.prototype)
PriceSourceStrategy.prototype.sort = function ( data ) {
    console.log("some behavior for PriceSourceStrategy ");
    data.sort( function (a,b) {
        return (a.price - b.price);

    })
}

function RatingSourceStrategy() {} // RatingSS
RatingSourceStrategy.prototype = Object.create(SortStrategy.prototype)
RatingSourceStrategy.prototype.sort = function ( data ) {
    console.log("some behavior for RatingSourceStrategy ");
    data.sort( function (a,b) {
        return (a.rating - b.rating);

    })
}



var Catalog = (function(){
    var strategy = {};
    var data = [
        {name:"Milk",price:20,rating:2},
        {name:"Water",price:8,rating:1},
        {name:"Juice",price:15,rating:3},
        {name:"Cola",price:25,rating:4}
    ]
    function printData() {
        $(".catalog__list").empty()
        data.forEach(function (product) {
            $(".catalog__list").append(
                $("<li></li>").text(product.name + ", " + product.price + ", " + product.rating)
            )

        })
    }
    printData()

    return {
        sort: function () {
            strategy.sort( data )
            printData()

        },
        setStrategy: function (s) {
            strategy = s;
        }
    }
}());

$(".catalog__sort-type").change(function (){
    var val = $(this).val()

    if(val === "name") Catalog.setStrategy( new NameSourceStrategy())
    else if(val === "price") Catalog.setStrategy( new PriceSourceStrategy())
    else if(val === "rating") Catalog.setStrategy( new RatingSourceStrategy())
    else console.log("some chit");
})

$(".catalog__exec-sort").click(function () {
    Catalog.sort()
})

