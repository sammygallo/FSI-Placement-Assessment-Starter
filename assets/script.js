// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = gb + cc + sugar
console.log("Grand total is " + total)

// Variables for the nodes that display the quantity of each cookie plus the grand total of all cookies
let gbQuantityDisplay = document.getElementById("qty-gb")
let ccQuantityDisplay = document.getElementById("qty-cc")
let sugarQuantityDisplay = document.getElementById("qty-sugar")
let grandTotalDisplay = document.getElementById("qty-total")


// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the plus and minus buttons
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sgrPlusBtn = document.querySelector('#add-sugar')
const sgrMinusBtn = document.querySelector('#minus-sugar')

// Event listeners for clicks on the "+" buttons
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1
    total = gb + cc + sugar
    gbQuantityDisplay.innerHTML = gb
    grandTotalDisplay.innerHTML = total
})
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    total = gb + cc + sugar
    ccQuantityDisplay.innerHTML = cc
    grandTotalDisplay.innerHTML = total
})
sgrPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    total = gb + cc + sugar
    sugarQuantityDisplay.innerHTML = sugar
    grandTotalDisplay.innerHTML = total
})

// Event listeners for clicks on the "-" buttons
gbMinusBtn.addEventListener('click', function() {
    if (gb >= 1) {
        gb = gb - 1
        total = gb + cc + sugar
        gbQuantityDisplay.innerHTML = gb
        grandTotalDisplay.innerHTML = total
    }
})
ccMinusBtn.addEventListener('click', function() {
    if (cc >= 1) {
        cc = cc - 1
        total = gb + cc + sugar
        ccQuantityDisplay.innerHTML = cc
        grandTotalDisplay.innerHTML = total
    }
})
sgrMinusBtn.addEventListener('click', function() {
    if (sugar >= 1) {
        sugar = sugar - 1
        total = gb + cc + sugar
        sugarQuantityDisplay.innerHTML = sugar
        grandTotalDisplay.innerHTML = total
    }
})

let yourName = "Sammy Gallo" // HINT: Replace this with your own name!

// Code to update name display
credit.textContent = `Created by ${yourName}`

// TODO: Hook up event listeners for the rest of the buttons