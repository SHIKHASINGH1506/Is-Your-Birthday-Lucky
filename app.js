const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check");

checkButton.addEventListener("click", checkBirthdate);

function checkBirthdate(){
    var sum=0, rem=0;
    var hiphenRemovedBirthDate = birthDate.value.replaceAll("-","");
    var newBirthDate = +hiphenRemovedBirthDate;
    console.log(newBirthDate);
    
    while(newBirthDate!=0){
        rem = Math.trunc(newBirthDate%10);
        newBirthDate = newBirthDate/10;
        sum +=rem;
    }
    console.log(sum);
    var newLuckyNumber = +luckyNumber.value;
    if(Math.trunc(sum%newLuckyNumber)===0 ){
        console.log("Your birthday is lucky");
    }
    else{
        console.log("Your birthday is not lucky");
    }
}
