function LCNS(sum) {
    let array = [];
    let i = 1;
    while (array.reduce((a, b) => a + b, 0) != sum) {
        if (array.reduce((a, b) => a + b, 0) < sum) {
            array.push(i);
            i++;
        } else {
            array.shift();
        };
    };
    return array;
};

var result = JSON.stringify(LCNS(prompt('Longest Consecutive Number Sum')));
console.log(result);
document.getElementById('result').textContent = result;