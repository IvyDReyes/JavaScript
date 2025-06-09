/** Exercise 4:
 * Write a JavaScript program to get the current date. 
 * Expected output: mm-dd-yyyy, mm/dd/yyy or dd-mm-yyyy, dd/mm/yyyy 
 */ 

const formatDate = (date = new Date()) => {
    const days = date.getDate() + 1;
    const months = date.getMonth();
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatDate());
// Output: 20/10/2023