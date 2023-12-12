const arr = [1,2,3,4,5];

function mainFunction(callbackFunction)
{
    callbackFunction()
    {
        console.log(arr);
    }; 
}

function callbackFunction(){};

mainFunction(callbackFunction);