let billInputDiv = document.getElementById('billTotalInput');
let tipInputDiv = document.getElementById('tipInput');
let perPersonTotalDiv = document.getElementById('perPersonTotal');
let numberOfPeopleDiv = document.getElementById('numberOfPeople');

// Get number of people from number of people div

let numberOfPeople = Number(numberOfPeopleDiv.innerText);
// let perPersonTotal = Number(perPersonTotalDiv.value);


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    const billInput = Number(billInputDiv.value);
      
    // get the tip from user & convert it into a percentage (divide by 100)
    const tipInput = Number(tipInputDiv.value) /100;
    
    // get the total tip amount
    const tipAmount = billInput * tipInput;
    
  
    // calculate the total (tip amount + bill)
    const totalBill = billInput + tipAmount;
  
    // calculate the per person total (total divided by number of people)
    const totalBillperPerson = totalBill / numberOfPeople;
    
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${totalBillperPerson.toLocaleString('en-us')}`;
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople+=1;
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople;
  
    // calculate the bill based on the new number of people
    calculateBill();
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(numberOfPeople<=1){
        alert("you can't decrease the number of people to 0 or negative!");
    }
    else{

        // decrement the amount of people
        numberOfPeople -= 1;
      
        // update the DOM with the new number of people
        numberOfPeopleDiv.innerText = numberOfPeople;
      
        // calculate the bill based on the new number of people
        calculateBill();
    }
  
  }