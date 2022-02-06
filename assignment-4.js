// Problem 1: ana to vori

 function anaToVori(ana){
    let totalVoris = ana / 16;
   
    return totalVoris;   
}
let vori = anaToVori(32);
console.log( vori);
 

// problem 2: pandaCost

 function pandaCost(Singara, Samucha, Jilapi ){

    var SingaraQuantity = 3 * Singara;
    var SamuchaQuantity = 5 * Samucha;
    var JilapiQuantity  = 3 * Jilapi;
    var totalCost = SingaraQuantity + SamuchaQuantity + JilapiQuantity ;
     return totalCost; 
}
   const result = pandaCost(7, 10, 15 );
   console.log(result); 


 // problem 3:picnicBudget

function picnicBudget( peopleQuantity ){
    if(  peopleQuantity <= 100) {
        let  fristPeople = peopleQuantity * 5000;
        return fristPeople;
    }
    else if( peopleQuantity <= 200){
      let fristPeople = peopleQuantity * 5000;
        let secondPeople = (peopleQuantity - 100)* 4000;
        let totalPeople = fristPeople + secondPeople;
        return totalPeople;

    }

     if ( peopleQuantity > 200 ) {
       let  fristPeople = peopleQuantity * 5000;
        let secondPeople = peopleQuantity * 4000;
        let remaining = (peopleQuantity - 200)* 3000;
        let  totalPeople = fristPeople + secondPeople + remaining;
        return totalPeople;

    }
}
 const picnic = picnicBudget(210);
    console.log(picnic);
  

   // problem 4:oddFriend
  
 function oddFriend(friendsName){
     
    let oddName = " " ;
    for ( let i = 0; i < friendsName.length; i++ ){
        const element = friendsName[i];
        if(element.length % 2 == 1){
           return element;
           
        }

    }
       
}
       
const namesOfFriends=['sabbir', 'ashik', 'rakibul', 'zakir', 'alim',' alif' ];
 let friendsNameRuselt = oddFriend(namesOfFriends);
 console.log(friendsNameRuselt); 


