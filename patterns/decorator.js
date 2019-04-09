console.group("Decorator Example ")

function A(){
    this.get = function(){
        console.log("I am class A! ");
    }
};

function Decorator(obj){
    this._obj = obj;
}

Decorator.prototype = Object.create(A.prototype);
Decorator.prototype.constructor = Decorator;


function DecoratorB(obj){
    Decorator.call(this, obj)
    this.get = function(){
        this._obj.get();
        console.log("* update by B! ");
    }
}

DecoratorB.prototype = Object.create(Decorator.prototype);
DecoratorB.prototype.constructor = DecoratorB;

function DecoratorC(obj){
    Decorator.call(this, obj)
    this.get = function(){
        this._obj.get();
        console.log("* update by C! ");
    }
}

DecoratorC.prototype = Object.create(Decorator.prototype);
DecoratorC.prototype.constructor = DecoratorC;



var obj1 = new A();
var obj2 = new DecoratorB( new A() );
var obj3 = new DecoratorC( new A() );
var obj = new DecoratorB( new DecoratorC( new A() ) );


obj1.get();
console.log('_______');
obj2.get();
console.log('_______');
obj3.get();
console.log('_______');
obj.get();
console.log('_______');
console.log('_______');


console.groupEnd()

console.group("Decorator  ")

function Input(labelText){
    var $element = $("<div></div>").addClass("input").append(
        $('<span></span>').addClass("input__label").text(labelText),
        $('<input>').addClass("input__field")
    )
    this.get = function(){
       return $element;
    }
};

function Decorator(obj){
    this._obj = obj;
    this.get = function(){
        return this._obj.get();
    }
}

Decorator.prototype = Object.create(Input.prototype);
Decorator.prototype.constructor = Decorator;


function ClearDec(obj){

    Decorator.apply(this, arguments);
    this._obj.get().append(
        $("<span>x</span>").addClass("input__clear")
    );
    $(document.body).on("click", ".input__clear", function (e) {

        $(e.target).siblings('.input__field').val('');
    });
}

ClearDec.prototype = Object.create(Decorator.prototype);
ClearDec.prototype.constructor = ClearDec;


function ValidDec(obj){
    Decorator.apply(this, arguments);
    this._obj.get().children(".input__field").attr("data-validate", "")

    $(document.body).on("input", ".input__field[data-validate]",function (e) {
        $(e.target).siblings(".select__field").val('');

        if( /[0-9]/.test($(e.target).val()  )){
            $(e.target).parent().addClass("input__wrong");
        }else{
            $(e.target).parent().removeClass("input__wrong");
        }
    });

}

ValidDec.prototype = Object.create(Decorator.prototype);
ValidDec.prototype.constructor = ValidDec;



var input = new Input("Simple  Input");
var inputClear = new ClearDec( new Input("Clearing") );
var inputValid = new ValidDec( new Input("Checking") );
var inputBoth = new ValidDec( new ClearDec( new Input("Both") ) );


$(document.body).append(
    input.get(),
    inputClear.get(),
    inputValid.get(),
    inputBoth.get()
)



console.groupEnd()
