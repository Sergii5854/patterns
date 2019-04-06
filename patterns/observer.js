// Observable

function Observable() {
    var observers = [];
    this.sendMessage = function( msg ) {
        for (var i = 0, len = observers.length; i < len; i++) {
            observers[i].notify( msg );
        }
    }
    this.addObserver = function( observer ) {
        observers.push( observer )
    }
}

// Observer

function Observer( behavior ) {
    this.notify = function( msg ) {
        behavior(msg)
    }
}

var observable = new Observable()

var basketObs = new Observer(function(id) {

    $(".basket__product-lis").append(
        $("<li></li>").addClass("basket__product").text("item" + id)
    )
})

var modalObs = new Observer(function(id) {
    var msg = "Item " + id + " added to basket";
    $(".buy-modal__message").text(msg)
    $(".buy-modal").removeClass("buy-modal_hide")
    setTimeout(function () {
        $(".buy-modal").addClass("buy-modal_hide")
    }, 2000)
})

var serverObs = new Observer(function (id) {
    console.log("id:" + id);
})


observable.addObserver(basketObs);
observable.addObserver(modalObs);
observable.addObserver(serverObs);

$('.product').click( function () {
    var id = $(this).attr("data-id");
    console.log(id);
    observable.sendMessage( id )
})
