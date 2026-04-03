let browserName = "Chrome"

if (browserName=="Chrome"){
    console.log ("launch browser")
}
else {
    console.log("Do not launch browser")
}

console.log("**************")

let runTest= "Sanity"

function testType(runTest){
    switch(runTest){
        case"Sanity":
        console.log("Sanity Test")
        break
        case"Regression":
        console.log("Regression Test")
        break
        default:
        console.log("Smoke Test")
        
    }
}
testType("Regression")
testType("Smoke")
testType("Sanity")