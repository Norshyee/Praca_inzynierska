function semiSumatorOutput() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var s = a ^ b;
    var c = a & b;

    document.getElementById("s").value = 'S: ' + s;
    document.getElementById("q").value = 'C: ' + c;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch(a) {
        case '0':
            if (b === '0')
                tableRows.item(1).style.color = "red";
            else
                tableRows.item(3).style.color = "red";
        break;

        case '1':
            if (b === '0')
                tableRows.item(2).style.color = "red";
            else
                tableRows.item(4).style.color = "red";
        break;
    }

    var svg = document.getElementById("semi-summator-schema").contentDocument;

    svg.getElementById("and-a").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("and-b").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("and-c").style.stroke = (c == 1 ? "red" : "black");
    svg.getElementById("xor-a").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("xor-b").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("xor-s").style.stroke = (s == 1 ? "red" : "black");
}

function oneBitSumatorOutput() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    var or1 = a | b;
    var and1 = a & b;
    var and2 = or1 & c;
    var xor1 = a ^ b;

    var q = and2 | and1;
    var s = xor1 ^ c;

    document.getElementById("s").value = 'S: ' + s;
    document.getElementById("q").value = 'C(n+1): ' + q;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch(a) {
        case '0':
            if (b === '0') {
                if (c === '0') {
                    tableRows.item(1).style.color = "red";
                } else {
                    tableRows.item(2).style.color = "red";
                }
            } else {
                if (c === '0') {
                    tableRows.item(3).style.color = "red";
                } else {
                    tableRows.item(4).style.color = "red";
                }
            }
        break;

        case '1':
            if (b === '0') {
                if (c === '0') {
                    tableRows.item(5).style.color = "red";
                } else {
                    tableRows.item(6).style.color = "red";
                }
            } else {
                if (c === '0') {
                    tableRows.item(7).style.color = "red";
                } else {
                    tableRows.item(8).style.color = "red";
                }
            }
        break;
    }

    var svg = document.getElementById("1-bit-summator-schema").contentDocument;

    svg.getElementById("or1-a").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("or1-b").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("or1-s").style.stroke = (or1 == 1 ? "red" : "black");
    svg.getElementById("or2-s").style.stroke = (q == 1 ? "red" : "black");
    svg.getElementById("and1-a").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("and1-dot").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("and1-b").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("and1-s").style.stroke = (and1 == 1 ? "red" : "black");
    svg.getElementById("and2-b").style.stroke = (c == 1 ? "red" : "black");
    svg.getElementById("and2-s").style.stroke = (and2 == 1 ? "red" : "black");
    svg.getElementById("xor1-a").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("xor1-dot").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("xor1-b").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("xor1-dot2").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("xor1-s").style.stroke = (xor1 == 1 ? "red" : "black");
    svg.getElementById("xor2-b").style.stroke = (c == 1 ? "red" : "black");
    svg.getElementById("xor2-dot").style.stroke = (c == 1 ? "red" : "black");
    svg.getElementById("xor2-s").style.stroke = (s == 1 ? "red" : "black");
}

function fourBitSumatorOutput() {
    var a1 = document.getElementById("a1").value;
    var a2 = document.getElementById("a2").value;
    var a3 = document.getElementById("a3").value;
    var a4 = document.getElementById("a4").value;

    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;

    var c1 = document.getElementById("c1").value;

    var firstAdder = oneBitAdder(a1,b1,c1);
    var secondAdder = oneBitAdder(a2,b2,firstAdder.carry);
    var thirdAdder = oneBitAdder(a3,b3,secondAdder.carry);
    var fourthAdder = oneBitAdder(a4,b4,thirdAdder.carry);

    document.getElementById("s1").value = firstAdder.sum;
    document.getElementById("c2").value = firstAdder.carry;

    document.getElementById("s2").value = secondAdder.sum;
    document.getElementById("c3").value = secondAdder.carry;

    document.getElementById("s3").value = thirdAdder.sum;
    document.getElementById("c4").value = thirdAdder.carry;

    document.getElementById("s4").value = fourthAdder.sum;
    document.getElementById("c5").value = fourthAdder.carry;

    var add1 = document.getElementById("4-bit-sumator-1").contentDocument;
    add1.getElementById("a").style.stroke = (a1 == 1 ? "red" : "black");
    add1.getElementById("b").style.stroke = (b1 == 1 ? "red" : "black");
    add1.getElementById("c-in").style.stroke = (c1 == 1 ? "red" : "black");
    add1.getElementById("c-out").style.stroke = (firstAdder.carry == 1 ? "red" : "black");
    add1.getElementById("sum").style.stroke = (firstAdder.sum == 1 ? "red" : "black");

    var add2 = document.getElementById("4-bit-sumator-2").contentDocument;
    add2.getElementById("a").style.stroke = (a2 == 1 ? "red" : "black");
    add2.getElementById("b").style.stroke = (b2 == 1 ? "red" : "black");
    add2.getElementById("c-in").style.stroke = (firstAdder.carry == 1 ? "red" : "black");
    add2.getElementById("c-out").style.stroke = (secondAdder.carry == 1 ? "red" : "black");
    add2.getElementById("sum").style.stroke = (secondAdder.sum == 1 ? "red" : "black");

    var add3 = document.getElementById("4-bit-sumator-3").contentDocument;
    add3.getElementById("a").style.stroke = (a3 == 1 ? "red" : "black");
    add3.getElementById("b").style.stroke = (b3 == 1 ? "red" : "black");
    add3.getElementById("c-in").style.stroke = (secondAdder.carry == 1 ? "red" : "black");
    add3.getElementById("c-out").style.stroke = (thirdAdder.carry == 1 ? "red" : "black");
    add3.getElementById("sum").style.stroke = (thirdAdder.sum == 1 ? "red" : "black");

    var add4 = document.getElementById("4-bit-sumator-4").contentDocument;
    add4.getElementById("a").style.stroke = (a4 == 1 ? "red" : "black");
    add4.getElementById("b").style.stroke = (b4 == 1 ? "red" : "black");
    add4.getElementById("c-in").style.stroke = (thirdAdder.carry == 1 ? "red" : "black");
    add4.getElementById("c-out").style.stroke = (fourthAdder.carry == 1 ? "red" : "black");
    add4.getElementById("sum").style.stroke = (fourthAdder.sum == 1 ? "red" : "black");
}

function oneBitAdder(a, b, c) {
    var sum = (a ^ b) ^ c;
    var carry = ((a | b) & c) | (a & b);

    return {sum, carry};
}

let running = false; // Flag to track if the animation is running
let requestId = null; // Variable to hold the requestAnimationFrame ID
let currentPosition = 10; // Starting position of the line

function toggleAnimation(schema) {
    var svgSignalClock = document.getElementById("signal-clock").contentDocument;
    var line = svgSignalClock.getElementById('movingLine'); // Select the line by ID
    var toggleBtn = document.getElementById("playButton");

    function moveLine() {
        if (!running) return; // Exit the function if animation is not running

        currentPosition += 0.4; // Move the line by 2 units; adjust for speed

        if (currentPosition > 490) {
            currentPosition = 10; // Reset position if it goes beyond the square wave path
        }

        line.setAttribute('x1', currentPosition);
        line.setAttribute('x2', currentPosition);

        if ((currentPosition >= 10 && currentPosition <= 90) || (currentPosition >= 170 && currentPosition <= 250) || (currentPosition >= 330 && currentPosition <= 410)) {
            switch(schema) {
                case 'd-type-switch':
                    dTypeSwitchOutput(1);
                break;

                case 'rs-synchronous-switch':
                    rsSynchronousSwitchOutput(1);
                break;
            }
        } else {
            switch(schema) {
                case 'd-type-switch':
                    dTypeSwitchOutput(0);
                break;

                case 'rs-synchronous-switch':
                    rsSynchronousSwitchOutput(0);
                break;
            }
        }

        requestId = requestAnimationFrame(moveLine); // Continue the animation
    }

    if (!running) {
        running = true; // Set the flag to indicate animation is running
        toggleBtn.textContent = 'Stop';
        toggleBtn.classList.remove('bg-green-500', 'hover:bg-green-700');
        toggleBtn.classList.add('bg-red-500', 'hover:bg-red-700');
        moveLine(); // Start the animation
    } else {
        running = false; // Set the flag to indicate animation is stopped
        toggleBtn.textContent = 'Start';
        toggleBtn.classList.remove('bg-red-500', 'hover:bg-red-700');
        toggleBtn.classList.add('bg-green-500', 'hover:bg-green-700');
        cancelAnimationFrame(requestId); // Stop the animation
    }
}

let nand1s = 0;
let nand2s = 0;
let nand3s = 0;
let nand4s = 0;

function dTypeSwitchOutput(c) {
    var d = document.getElementById("d").value;
    document.getElementById("clockBit").value= c;

    nand1s = (d & c) == 0 ? '1' : '0';
    nand2s = (nand1s & nand4s) == 0 ? '1' : '0';
    nand3s = (nand1s & c) == 0 ? '1' : '0';
    nand4s = (nand2s & nand3s) == 0 ? '1' : '0';

    document.getElementById("q").value = nand2s;
    document.getElementById("q-neg").value = nand4s;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch(c) {
        case 0:
            tableRows.item(1).style.color = "red";
        break;

        case 1:
            if (d === '0') {
                tableRows.item(2).style.color = "red";
            } else {
                tableRows.item(3).style.color = "red";
            }
        break;
    }

    var dTypeSwitch = document.getElementById("d-type-switch-schema").contentDocument;
    dTypeSwitch.getElementById("d").style.stroke = (d == 1 ? "red" : "black");

    dTypeSwitch.getElementById("c").style.stroke = (c == 1 ? "red" : "black");
    dTypeSwitch.getElementById("c1").style.stroke = (c == 1 ? "red" : "black");
    dTypeSwitch.getElementById("c-dot").style.stroke = (c == 1 ? "red" : "black");
    dTypeSwitch.getElementById("c-dot").style.fill = (c == 1 ? "red" : "black");

    dTypeSwitch.getElementById("nand1-s").style.stroke = (nand1s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand1-s1").style.stroke = (nand1s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand1-s-dot").style.stroke = (nand1s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand1-s-dot").style.fill = (nand1s == 1 ? "red" : "black");

    dTypeSwitch.getElementById("nand2-s").style.stroke = (nand2s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand2-s1").style.stroke = (nand2s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand2-s-dot").style.stroke = (nand2s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand2-s-dot").style.fill = (nand2s == 1 ? "red" : "black");

    dTypeSwitch.getElementById("nand3-s").style.stroke = (nand3s == 1 ? "red" : "black");

    dTypeSwitch.getElementById("nand4-s").style.stroke = (nand4s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand4-s1").style.stroke = (nand4s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand4-s-dot").style.stroke = (nand4s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand4-s-dot").style.fill = (nand4s == 1 ? "red" : "black");

    var dTypeSwitchSymbol = document.getElementById("d-type-switch-symbol").contentDocument;
    dTypeSwitchSymbol.getElementById("d").style.stroke = (d == 1 ? "red" : "black");
    dTypeSwitchSymbol.getElementById("c").style.stroke = (c == 1 ? "red" : "black");
    dTypeSwitchSymbol.getElementById("q").style.stroke = (nand2s == 1 ? "red" : "black");
    dTypeSwitchSymbol.getElementById("q-neg").style.stroke = (nand4s == 1 ? "red" : "black");
}

function rsSynchronousSwitchOutput(c) {
    var s = document.getElementById("a").value;
    var r = document.getElementById("b").value;
    document.getElementById("clockBit").value= c;

    nand1s = (s & c) == 0 ? '1' : '0';
    nand2s = (nand1s & nand4s) == 0 ? '1' : '0';
    nand3s = (r & c) == 0 ? '1' : '0';
    nand4s = (nand2s & nand3s) == 0 ? '1' : '0';

    document.getElementById("q").value = nand2s;
    document.getElementById("q-neg").value = nand4s;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch(c) {
        case 0:
            if (s === '0' && r === '0') {
                tableRows.item(2).style.color = "red";
            } else {
                tableRows.item(1).style.color = "red";
            }
        break;

        case 1:
            if (s === '0') {
                if (r === '0') {
                    tableRows.item(2).style.color = "red";
                } else {
                    tableRows.item(4).style.color = "red";
                }
            } else {
                if (r === '0') {
                    tableRows.item(3).style.color = "red";
                } else {
                    tableRows.item(5).style.color = "red";
                }
            }
        break;
    }

    var rsSynchronousSwitch = document.getElementById("rs-synchronous-switch-schema").contentDocument;
    rsSynchronousSwitch.getElementById("s").style.stroke = (s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("r").style.stroke = (r == 1 ? "red" : "black");

    rsSynchronousSwitch.getElementById("c").style.stroke = (c == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("c2").style.stroke = (c == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("c2-dot").style.stroke = (c == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("c2-dot").style.fill = (c == 1 ? "red" : "black");

    rsSynchronousSwitch.getElementById("nand1-s").style.stroke = (nand1s == 1 ? "red" : "black");

    rsSynchronousSwitch.getElementById("nand2-s").style.stroke = (nand2s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand2-s1").style.stroke = (nand2s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand2-s-dot").style.stroke = (nand2s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand2-s-dot").style.fill = (nand2s == 1 ? "red" : "black");

    rsSynchronousSwitch.getElementById("nand3-s").style.stroke = (nand3s == 1 ? "red" : "black");

    rsSynchronousSwitch.getElementById("nand4-s").style.stroke = (nand4s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand4-s1").style.stroke = (nand4s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand4-s-dot").style.stroke = (nand4s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand4-s-dot").style.fill = (nand4s == 1 ? "red" : "black");

    var rsSynchronousSwitchSymbol = document.getElementById("rs-synchronous-switch-symbol").contentDocument;
    rsSynchronousSwitchSymbol.getElementById("s").style.stroke = (s == 1 ? "red" : "black");
    rsSynchronousSwitchSymbol.getElementById("c").style.stroke = (c == 1 ? "red" : "black");
    rsSynchronousSwitchSymbol.getElementById("r").style.stroke = (r == 1 ? "red" : "black");
    rsSynchronousSwitchSymbol.getElementById("q").style.stroke = (nand2s == 1 ? "red" : "black");
    rsSynchronousSwitchSymbol.getElementById("q-neg").style.stroke = (nand4s == 1 ? "red" : "black");
}
