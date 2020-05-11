function root (value: number) {
    if (value < 0) {
        return -1
    } else if (value < 1) {
        upper = 1
        lower = value
    } else {
        upper = value
        lower = 1
    }
    for (let index = 0; index < 1000; index++) {
        sample = upper - lower
        sample = sample / 2
        sample = lower + sample
        square = sample * sample
        if (square == value) {
            break;
        } else if (square < value) {
            lower = sample
        } else {
            upper = sample
        }
    }
    return sample
}
let square = 0
let sample = 0
let lower = 0
let upper = 0
basic.showNumber(root(9))
basic.forever(function () {
	
})
