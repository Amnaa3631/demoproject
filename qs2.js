/*	Write an arrow function named arrayAverage that accepts an array of numbers and returns
// the average of those numbers.
*/
const arrayAverage  = numbers =>{
	const sum = numbers.reduce((a,b)=> a+b);
	return sum/numbers.length;
};

console.log(arrayAverage([1,2,3,4,5,6,7,8]));
