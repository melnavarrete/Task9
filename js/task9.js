//Melanie Navarrete
//CSC 225

//Task 1 array backwards
console.log (he);
const he = ["H","e","l", "l", "o"];

for(let i=he.length-1; i >= 0; i--)
{
    system.out.print(he[i]);
}

//Task 2 takes the input string makes all lowercase
helloWorld = ["H", "e", "l", "l", "o","W","o","r","l","d"];
function swapCase(string){
    console.log(string);

        for(let i = 0; i < string.length; i++) {


            if(string [i] > 96 ){
            string[i] = string[i].toUpperCase;
            }
            else{
                string [i] = string[i].toLowerCase;
            }
        }        
    

    console.log(string);
};



//Task 3 converts from farenheit to celcius

function tempto(temp){
    newTemp = (temp+32)*(9/5);
    console.log (newTemp);
};

//Task 4 Takes an input array and returns booleans >=75 T or F
bool=tf;
const numbs = [20, 30, 50, 80, 90, 200]
//loop through then compare w if statements    
for(let i=0; i <= numbs.length; i++)
{

    if (nums >=75){

        bool=true;
        console.log ('T');
    }
    else{
        bool=false;
        console.log ('F');
    }

    return bool;
}

//write code that loops through the two variables and returns an array ['2 is zwei', '4 is vier', '5 is funf', '6 is sechs']
//array for each, array.map or a for loop
const numbers=['1', '2', '3', '4', '5'];
const german=["zwei", "drei", "vier", "funf", "sechs"];

const newNums = numbers.map(myfunction);

function myfunction(numbers,german){
    for(i=0; i<numbers.length; i++){
        numbers[i].append(german);
    }

system.out.print(numbers);
};



//Returns an array of only prime numbers

const nums = [2,3,5,7,11,13];
function primes(array){
for (let x=0; x<array.length; i++){
    while(x < array.length){
        const primenums=[];
        if(x % nums[i] != 0){
            primenums=append(nums);
        }
        x++;
    }

};
console.log(primenums);


//loops through console log and exact multiple of 3 "225 Rules!" no number 5  I love Javascript and 3 and 5 CSC225 rules I love JavaScript
function cscRules(){
for(i=1;i<=100; i++){
    if (i%3 && i % 5 === 0) {
        console.log('CSC225 Rules I love Javascript');
    }
    else if(i % 3 && i % 5 != 0){
        console.log('CSC 225 Rules');
     } else if( i % 5 === 0 && i % 3 != 0){
        console.log('I love JavaScript');
     }
     else{
        console.log(i);
     }    
    }
}
}