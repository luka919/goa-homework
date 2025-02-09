console.log(5 == 5);        
console.log('apple' != 'apple'); 
console.log(3 == 4);    
console.log([1, 2] > [1, 2]);  
console.log(10 != 9);
// alert -  ჩვენ გვაფრთხილებს 
// confirm - მომხმარებელს სთხოვს არჩევანის გაკეთებას ok ან cancel
// prompt - მომხმარებელს სთხოვს შემოიტანოს რიცხვი, წინადადება და ასეშემდეგ
let isAdult = confirm("Are you an adult?");
if (isAdult) {
    alert("You are adult");
} 
else {
    alert("You are kid");
}