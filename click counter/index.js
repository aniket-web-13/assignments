/* solution 1 */

let count = 0;
console.log(count);

let countlable = document.getElementById('countlable')
console.log(countlable);

/* use for adding to +1  */
let increase = document.getElementById('increasebtn')
increase.addEventListener('click', function () {
    count++ /* count += 1 */
    countlable.innerHTML = count;
})
console.log(increase);

/* use for reset to 0 */
let reset = document.getElementById('resetbtn')
reset.addEventListener('click', function () {
    count = 0
    countlable.innerHTML = count;
})
console.log(reset);


/* use for substract to -1 */
let decrease = document.getElementById('decreasebtn')
decrease.addEventListener('click', function () {
    count-- /* count -= 1 */
    countlable.innerHTML = count;
})
console.log(decrease);



