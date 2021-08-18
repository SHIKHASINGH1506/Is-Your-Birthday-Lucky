const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check");
const outputArea = document.querySelector("#output-area");

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
       outputArea.innerText = "Yay! Your birthday is lucky for you."
       outputArea.style.fontWeight = "bold";
       outputArea.style.fontSize= "larger";
    }
    else{
        outputArea.innerText="Sad :( Your birthday is not lucky."
        outputArea.style.fontWeight = "bold";
        outputArea.style.fontSize= "larger";
    }
}
