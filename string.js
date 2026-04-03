let userName = "mom"
let lengthOfString = userName.length
let rev = ""


for (let i=lengthOfString-1; i>=0; i--){
    rev= rev+userName.charAt(i)
    console.log(rev)
}

if (userName==rev) 
    
console.log("mom is a palindrome")
