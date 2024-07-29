let myDate = new Date();
let currentHour = myDate.getHours();
// console.log(currentHour);

if (currentHour >= 5 && currentHour < 12){
    document.querySelector('.greeting-message').innerHTML = 'Good Morning &#x1F607;';
} else if (currentHour >= 12 && currentHour < 16){
    document.querySelector('.greeting-message').innerHTML ='Good Afternoon &#x1F607;';
} else if (currentHour >= 16 && currentHour < 20){
    document.querySelector('.greeting-message').innerHTML ='Good Evening &#x1F607;';
} else {
    document.querySelector('.greeting-message').innerHTML ='Good Night &#x1F607;';
}