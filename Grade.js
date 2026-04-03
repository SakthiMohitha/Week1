let mark = 80

function gradetype (mark){
    switch(true){
        case(mark<=40):
        console.log ("Garde F")
        break
        case(mark>40 && mark<=60):
        console.log ("Garde C")
        break
        case(mark>=95):
        console.log ("Garde A")
        break
        default:
        console.log ("Garde B")
        break
    }
}
gradetype(55)
gradetype(78.5)
gradetype(40)
gradetype(98)