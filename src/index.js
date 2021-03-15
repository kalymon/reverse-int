module.exports = function reverse(n) {
    n = n + "";
    return Number(Math.abs(n).toString().split('').reverse().join(''));;
}
