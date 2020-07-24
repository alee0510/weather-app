const FtoC = temp => Math.round((temp - 32) * (5 / 9))
console.log(FtoC(301.27))

const date = 1595736000

console.log(new Date(date * 1000).toDateString().split(' ')[0])