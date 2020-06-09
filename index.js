var factors = {};

factors.getFactors = function (number){
    var factors = [];
    
    var possibleFactor = 1;
    var sqrt = Math.sqrt(number);
    while(possibleFactor <= sqrt){
        if(number % possibleFactor == 0){
            factors[factors.length] = possibleFactor;
            
            var otherPossibleFactor = number / possibleFactor;
            if(otherPossibleFactor > possibleFactor){
                factors[factors.length] = otherPossibleFactor;
            } 
        }
        possibleFactor++;
    }
    
    return factors;
};

var prime = {};

prime.isPrime = function(num){
    num = (num > 0) ? num : num * -1;
    return factors.getFactors(num).length <= 2;
};

var getNumberOfPrimes = function(a, b){
    var n = 0;
    var answer = 1;
    while(prime.isPrime(n*n + a * n + b)){
        n++;
    }
    
    return n;
};

console.log(getNumberOfPrimes(1, 41));
console.log(getNumberOfPrimes(-79, 1601));

var maxToTest = 1000;
var maxA = 0;
var maxB = 0;
var maxNumPrimes = 0;
for(var b = -maxToTest; b <= maxToTest ; b++){
    if(prime.isPrime(b)){
        for(var a = -maxToTest; a <= maxToTest; a++){
            var numPrimes = getNumberOfPrimes(a, b);
            if(numPrimes > maxNumPrimes){
                maxA = a;
                maxB = b;
                maxNumPrimes = numPrimes;
            }
        }
    }
}

console.log('a: ' + maxA );
console.log('b: ' + maxB );
console.log('a*b: ' + (maxA * maxB));
console.log('maxNumPrimes: ' + maxNumPrimes);
