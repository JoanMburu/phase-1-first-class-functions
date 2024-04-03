function receivesAFunction(spy){
 spy();
}

function returnsANamedFunction(){
   const fName = function(){
   };
   return fName;
}

function returnsAnAnonymousFunction(){
    return function(){}
}
