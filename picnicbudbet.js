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