let point1 = 1
let point2 = 2
let point3 = 3
let resulth = 0
let resultg = 0

document.getElementById("result-home")
document.getElementById("result-guest")

let resulthEl = document.getElementById("result-home")
let resultgEl = document.getElementById("result-guest")


function add1h() {
    resulth += point1
    resulthEl.textContent = resulth
}

function add2h() {
    resulth += point2
    resulthEl.textContent = resulth
}

function add3h() {
    resulth += point3
    resulthEl.textContent = resulth
}

function add1g() {
    resultg += point1
    resultgEl.textContent = resultg
}

function add2g() {
    resultg += point2
    resultgEl.textContent = resultg
}

function add3g() {
    resultg += point3
    resultgEl.textContent = resultg
}

function newgame() {
    resulthEl.textContent = 0
    resultgEl.textContent = 0
    resulth = 0
    resultg = 0
}
