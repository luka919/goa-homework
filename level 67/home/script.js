// 1) 
function sumOfNumbers(numbers) {
  let sum = 0;  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];  
  }
  return sum;  
}



// 2)
function findMinMax(numbers) {
    let min = Math.min(numbers);  
    let max = Math.max(numbers);  
    return min, max;   
}
 


// 3)
function generateRandomArray(n) {
    let randomArray = new Array(n); 
    for (let i = 0; i < n; i++) {
      randomArray[i] = Math.floor(Math.random() * 100) + 1;  
    }
    return randomArray;  
}



// 4)
function squareNumbers(numbers) {
    let squaredArray = new Array()
    for (let i = 0; i < numbers.length; i++) {
      squaredArray[i] = numbers[i] * numbers[i];  
    }
    return squaredArray;  
}



// 5)
function roundNumber(number) {
    let floorValue = Math.floor(number);  
    let ceilValue = Math.ceil(number);    
    let roundValue = Math.round(number);  
  
    return {floor: floorValue , ceil: ceilValue , round: roundValue};
}