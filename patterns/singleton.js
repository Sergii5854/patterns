var Singleton = (function(){
    var instance;
    var SERVER = 'localhost'

    function Singleton(){

        if( !instance ){
            instance = this;
        } else {
            return instance;
        }

    }

    Singleton.prototype.connect = function(){
        console.log('Connect ' + SERVER);
    }

    return Singleton

}() )

var s1 = new Singleton()
var s2 = new Singleton()
console.group("Singleton pattern");
    console.log( s1 === s2 );
    s1.connect();
console.groupEnd()
