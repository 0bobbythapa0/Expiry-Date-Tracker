/* Sample data :
[
    {
        id : 1,
        productName : Chocolate Ice Cream,
        Expiry Date : 07/06/24
    }
]
*/
// This sample data is sent from the user through post method
// Store the data in the database
// You have all the details of the project with its expiry date                       
let sample = [
    {
        "id" : 1,
        "productName" : "Chocolate Ice Cream",
        "expiryDate" : "07/26/24"
    },
    {
        "id" : 2,
        "productName" : "Vanilla Ice Cream",
        "expiryDate" : "07/26/24"
    },
    {
        "id" : 3,
        "productName" : "Dark Chocolate Ice Cream",
        "expiryDate" : "07/27/24"
    },
    {
        "id" : 4,
        "productName" : "Chocolate Ice Cream",
        "expiryDate" : "07/28/24"
    }
]

// Classify all the products in two parts which is unexpired and expired
let unexp=[];
let exp=[];

// Create a new Date object for the current date
let date = new Date();

// Extract the month, day, and year
let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
let day = String(date.getDate()).padStart(2, '0');
let year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year

// Format the date as MM/DD/YY
let formattedDate = `${month}/${day}/${year}`;

console.log(formattedDate); // Output: e.g., "07/26/24"

let todayDate = new Date(formattedDate);

for(let i=0;i<sample.length;i++)
{
    let product = sample[i];
    let productId = product["id"];
    let productName = product["productName"];
    let productExpiry = new Date(product["expiryDate"]);

    if(todayDate.getTime() === productExpiry.getTime())
    {
        exp.push(product);
    }else{
        unexp.push(product);
    }
}

console.log(unexp);
console.log(exp);

// let date1 = new Date("07/26/24");
// let date2 = new Date("07/26/24");
// if (date1.getTime() === date2.getTime()) {
//     console.log("same date");
// } else {
//     console.log("different date");
// }
