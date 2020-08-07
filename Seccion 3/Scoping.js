var a = 'Hello!';
first();

//scope chain

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

//ejemplo para mostrar la diferencia entre execution stack y scope chain

var a = 'Hello!';
first();

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!';
        third();
    }
}

function third(){
    var d = 'john';
    //console.log(c); //c is not defined
    console.log(a+d); // las dos unicas variables a las que tengo acceso desde 3
}
