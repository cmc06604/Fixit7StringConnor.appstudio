
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

let upperCaseString = quoteString.toUpperCase()

console.log("Upper Case string is: " + upperCaseString)

let authorString = "- Henry Ford"

let completeString = (quoteString + " " + authorString)

console.log("The string in quoteString is: " +  completeString)

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

let lowerCaseString = secondQuote.toLowerCase()

console.log(lowerCaseString)
let thirdPosition = secondQuote.charAt(2);

console.log("The charachter at location 3 is: " + thirdPosition)


let findString = secondQuote.replace("What separates the talented individual from the successful one is a lot of hard work.","")
console.log(findString)
      




