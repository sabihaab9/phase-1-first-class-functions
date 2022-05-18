

function receivesAFunction (functionName) {
    return functionName();
}

function returnsANamedFunction(){

    const sum = (parameter1, parameter2) => parameter1 + parameter2;

    return sum;
}

function returnsAnAnonymousFunction(){

    return function() {
    
    }
}
