function semiSumatorOutput() {
    var a = document.getElementById("a").checked ? '1' : '0';
    var b = document.getElementById("b").checked ? '1' : '0';
    var s = a ^ b;
    var c = a & b;
    var sCheck = (s == 1) ? true : false;
    var qCheck = (c == 1) ? true : false;

    document.getElementById("q").checked = qCheck;
    document.getElementById("s").checked = sCheck;
    const qCheckbox = document.getElementById("q");
    const sCheckbox = document.getElementById("s");
    const qLabel = qCheckbox.closest('.checkbox-label');
    const sLabel = sCheckbox.closest('.checkbox-label');

    if(qCheck) {
        qLabel.classList.remove('border-gray-400');
        qLabel.classList.add('border-red-400');
    } else {
        qLabel.classList.remove('border-red-400');
        qLabel.classList.add('border-gray-400');
    }

    if(sCheck) {
        sLabel.classList.remove('border-gray-400');
        sLabel.classList.add('border-red-400');
    } else {
        sLabel.classList.remove('border-red-400');
        sLabel.classList.add('border-gray-400');
    }

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
    svg.getElementById("and-a-dot").style.fill = (a == 1 ? "red" : "black");
    svg.getElementById("and-b").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("and-b-dot").style.fill = (b == 1 ? "red" : "black");
    svg.getElementById("and-c").style.stroke = (c == 1 ? "red" : "black");
    svg.getElementById("xor-a").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("xor-b").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("xor-s").style.stroke = (s == 1 ? "red" : "black");

    var symbolSvg = document.getElementById("semi-summator-schema-symbol").contentDocument;
    symbolSvg.getElementById("aLine").style.stroke = (a == 1 ? "red" : "black");
    symbolSvg.getElementById("bLine").style.stroke = (b == 1 ? "red" : "black");
    symbolSvg.getElementById("sumLine").style.stroke = (s == 1 ? "red" : "black");
    symbolSvg.getElementById("carryLine").style.stroke = (c == 1 ? "red" : "black");
}

function oneBitSumatorOutput() {
    var a = document.getElementById("a").checked ? '1' : '0';
    var b = document.getElementById("b").checked ? '1' : '0';
    var c = document.getElementById("c").checked ? '1' : '0';

    var or1 = a | b;
    var and1 = a & b;
    var and2 = or1 & c;
    var xor1 = a ^ b;

    var q = and2 | and1;
    var s = xor1 ^ c;

    var qCheck = (q == 1) ? true : false;
    var sCheck = (s == 1) ? true : false;

    document.getElementById("q").checked = qCheck;
    document.getElementById("s").checked = sCheck;
    const qCheckbox = document.getElementById("q");
    const sCheckbox = document.getElementById("s");
    const qLabel = qCheckbox.closest('.checkbox-label');
    const sLabel = sCheckbox.closest('.checkbox-label');

    if(qCheck) {
        qLabel.classList.remove('border-gray-400');
        qLabel.classList.add('border-red-400');
    } else {
        qLabel.classList.remove('border-red-400');
        qLabel.classList.add('border-gray-400');
    }

    if(sCheck) {
        sLabel.classList.remove('border-gray-400');
        sLabel.classList.add('border-red-400');
    } else {
        sLabel.classList.remove('border-red-400');
        sLabel.classList.add('border-gray-400');
    }

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
    svg.getElementById("and1-dot").style.fill = (a == 1 ? "red" : "black");
    svg.getElementById("and1-b").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("and1-s").style.stroke = (and1 == 1 ? "red" : "black");
    svg.getElementById("and2-b").style.stroke = (c == 1 ? "red" : "black");
    svg.getElementById("and2-s").style.stroke = (and2 == 1 ? "red" : "black");
    svg.getElementById("xor1-a").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("xor1-dot").style.fill = (a == 1 ? "red" : "black");
    svg.getElementById("xor1-b").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("xor1-dot2").style.fill = (b == 1 ? "red" : "black");
    svg.getElementById("xor1-s").style.stroke = (xor1 == 1 ? "red" : "black");
    svg.getElementById("xor2-b").style.stroke = (c == 1 ? "red" : "black");
    svg.getElementById("xor2-dot").style.fill = (c == 1 ? "red" : "black");
    svg.getElementById("xor2-s").style.stroke = (s == 1 ? "red" : "black");

    var symbolSvg = document.getElementById("1-bit-summator-schema-symbol").contentDocument;
    symbolSvg.getElementById("aLine").style.stroke = (a == 1 ? "red" : "black");
    symbolSvg.getElementById("bLine").style.stroke = (b == 1 ? "red" : "black");
    symbolSvg.getElementById("cnInLine").style.stroke = (c == 1 ? "red" : "black");
    symbolSvg.getElementById("cnOutLine").style.stroke = (q == 1 ? "red" : "black");
    symbolSvg.getElementById("ps1SumLine").style.stroke = (and1 == 1 ? "red" : "black");
    symbolSvg.getElementById("ps1CarryLine").style.stroke = (xor1 == 1 ? "red" : "black");
    symbolSvg.getElementById("ps2SumLine").style.stroke = (s == 1 ? "red" : "black");
    symbolSvg.getElementById("ps2CarryLine").style.stroke = (and2 == 1 ? "red" : "black");
}

function fourBitSumatorOutput() {
    var a1 = document.getElementById("a1").checked ? '1' : '0';
    var a2 = document.getElementById("a2").checked ? '1' : '0';
    var a3 = document.getElementById("a3").checked ? '1' : '0';
    var a4 = document.getElementById("a4").checked ? '1' : '0';

    var b1 = document.getElementById("b1").checked ? '1' : '0';
    var b2 = document.getElementById("b2").checked ? '1' : '0';
    var b3 = document.getElementById("b3").checked ? '1' : '0';
    var b4 = document.getElementById("b4").checked ? '1' : '0';

    var c1 = document.getElementById("c1").checked ? '1' : '0';

    var firstAdder = oneBitAdder(a1,b1,c1);
    var secondAdder = oneBitAdder(a2,b2,firstAdder.carry);
    var thirdAdder = oneBitAdder(a3,b3,secondAdder.carry);
    var fourthAdder = oneBitAdder(a4,b4,thirdAdder.carry);

    document.getElementById("s1").checked = firstAdder.sum === 1;
    document.getElementById("cr2").checked = firstAdder.carry === 1;

    document.getElementById("s2").checked = secondAdder.sum === 1;
    document.getElementById("cr3").checked = secondAdder.carry === 1;

    document.getElementById("s3").checked = thirdAdder.sum === 1;
    document.getElementById("cr4").checked = thirdAdder.carry === 1;

    document.getElementById("s4").checked = fourthAdder.sum === 1;
    document.getElementById("cr5").checked = fourthAdder.carry === 1;

    resetInputs(['s1', 'cr2', 's2', 'cr3', 's3', 'cr4', 's4', 'cr5']);

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

const BaseSwitch = {
    running: false,
    requestId: null,
    currentPosition: 10,

    toggleAnimation: function() {
        const self = this; // reference to the current object for use in nested functions
        const svgSignalClock = document.getElementById("signal-clock").contentDocument;
        const line = svgSignalClock.getElementById('movingLine');
        const toggleBtn = document.getElementById("playButton");

        function moveLine() {
            if (!self.running) return;

            self.currentPosition += 0.4;
            if (self.currentPosition > 490) {
                self.currentPosition = 10;
            }

            line.setAttribute('x1', self.currentPosition);
            line.setAttribute('x2', self.currentPosition);

            self.processCurrentPosition();

            self.requestId = requestAnimationFrame(moveLine);
        }

        if (!this.running) {
            this.running = true;
            toggleBtn.textContent = 'Stop';
            toggleBtn.classList.remove('bg-green-500', 'hover:bg-green-700');
            toggleBtn.classList.add('bg-red-500', 'hover:bg-red-700');
            moveLine();
        } else {
            this.running = false;
            toggleBtn.textContent = 'Start';
            toggleBtn.classList.remove('bg-red-500', 'hover:bg-red-700');
            toggleBtn.classList.add('bg-green-500', 'hover:bg-green-700');
            cancelAnimationFrame(this.requestId);
        }
    },

    processCurrentPosition: function() {
        // This function should be overridden in child objects
        throw new Error("processCurrentPosition method must be implemented by the child object");
    }
};

const dTypeSwitch = Object.create(BaseSwitch);

dTypeSwitch.init = function() {
    this.nand1s = 0;
    this.nand2s = 0;
    this.nand3s = 0;
    this.nand4s = 0;
};

dTypeSwitch.processCurrentPosition = function() {
    const c = (this.currentPosition >= 10 && this.currentPosition <= 90) ||
              (this.currentPosition >= 170 && this.currentPosition <= 250) ||
              (this.currentPosition >= 330 && this.currentPosition <= 410) ? 1 : 0;

    var d = document.getElementById("d").checked ? '1' : '0';
    document.getElementById("clockBit").checked = (c === 1);

    var prevNand1s = this.nand1s;
    var prevNand2s = this.nand2s;
    var prevNand4s = this.nand4s;

    this.nand1s = (d & c) === 0 ? '1' : '0';
    this.nand2s = (this.nand1s & prevNand4s) === 0 ? '1' : '0';
    this.nand3s = (prevNand1s & c) === 0 ? '1' : '0';
    this.nand4s = (prevNand2s & this.nand3s) === 0 ? '1' : '0';

    document.getElementById("q").checked = (this.nand2s === '1');
    document.getElementById("q-neg").checked = (this.nand4s === '1');

    resetInputs(['clockBit', 'q', 'q-neg']);

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

    dTypeSwitch.getElementById("nand1-s").style.stroke = (this.nand1s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand1-s1").style.stroke = (this.nand1s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand1-s-dot").style.stroke = (this.nand1s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand1-s-dot").style.fill = (this.nand1s == 1 ? "red" : "black");

    dTypeSwitch.getElementById("nand2-s").style.stroke = (this.nand2s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand2-s1").style.stroke = (this.nand2s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand2-s-dot").style.stroke = (this.nand2s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand2-s-dot").style.fill = (this.nand2s == 1 ? "red" : "black");

    dTypeSwitch.getElementById("nand3-s").style.stroke = (this.nand3s == 1 ? "red" : "black");

    dTypeSwitch.getElementById("nand4-s").style.stroke = (this.nand4s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand4-s1").style.stroke = (this.nand4s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand4-s-dot").style.stroke = (this.nand4s == 1 ? "red" : "black");
    dTypeSwitch.getElementById("nand4-s-dot").style.fill = (this.nand4s == 1 ? "red" : "black");

    var dTypeSwitchSymbol = document.getElementById("d-type-switch-symbol").contentDocument;
    dTypeSwitchSymbol.getElementById("d").style.stroke = (d == 1 ? "red" : "black");
    dTypeSwitchSymbol.getElementById("c").style.stroke = (c == 1 ? "red" : "black");
    dTypeSwitchSymbol.getElementById("q").style.stroke = (this.nand2s == 1 ? "red" : "black");
    dTypeSwitchSymbol.getElementById("q-neg").style.stroke = (this.nand4s == 1 ? "red" : "black");
};

const rsTypeSynchronousSwitch = Object.create(BaseSwitch);

rsTypeSynchronousSwitch.init = function() {
    this.nand1s = 0;
    this.nand2s = 1;
    this.nand3s = 0;
    this.nand4s = 0;
};

rsTypeSynchronousSwitch.processCurrentPosition = function() {
    // Similar logic to DTypeSwitch but for the RS Synchronous Switch
    const c = (this.currentPosition >= 10 && this.currentPosition <= 90) ||
              (this.currentPosition >= 170 && this.currentPosition <= 250) ||
              (this.currentPosition >= 330 && this.currentPosition <= 410) ? 1 : 0;

    var s = document.getElementById("a").checked ? '1' : '0';
    var r = document.getElementById("b").checked ? '1' : '0';
    document.getElementById("clockBit").checked = (c === 1);

    var prevNand2s = this.nand2s;
    var prevNand4s = this.nand4s;

    this.nand1s = (s & c) === 0 ? '1' : '0';
    this.nand2s = (this.nand1s & prevNand4s) === 0 ? '1' : '0';
    this.nand3s = (r & c) === 0 ? '1' : '0';
    this.nand4s = (prevNand2s & this.nand3s) == 0 ? '1' : '0';

    document.getElementById("q").checked = (this.nand2s === '1');
    document.getElementById("q-neg").checked = (this.nand4s === '1');

    resetInputs(['clockBit', 'q', 'q-neg']);

    var tableRows = document.getElementById("boardOfTruth").rows;
    tableRows.item(7).style.fontWeight = "bold";
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch(c) {
        case 0:
            if (s === '1' && r === '1') {
                tableRows.item(6).style.color = "red";
                tableRows.item(7).style.color = "red";
                tableRows.item(7).style.fontWeight = "bold";
            } else if (s === '0' && r === '0') {
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
                    tableRows.item(7).style.color = "red";
                    tableRows.item(7).style.fontWeight = "bold";
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

    rsSynchronousSwitch.getElementById("nand1-s").style.stroke = (this.nand1s == 1 ? "red" : "black");

    rsSynchronousSwitch.getElementById("nand2-s").style.stroke = (this.nand2s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand2-s1").style.stroke = (this.nand2s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand2-s-dot").style.stroke = (this.nand2s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand2-s-dot").style.fill = (this.nand2s == 1 ? "red" : "black");

    rsSynchronousSwitch.getElementById("nand3-s").style.stroke = (this.nand3s == 1 ? "red" : "black");

    rsSynchronousSwitch.getElementById("nand4-s").style.stroke = (this.nand4s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand4-s1").style.stroke = (this.nand4s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand4-s-dot").style.stroke = (this.nand4s == 1 ? "red" : "black");
    rsSynchronousSwitch.getElementById("nand4-s-dot").style.fill = (this.nand4s == 1 ? "red" : "black");

    var rsSynchronousSwitchSymbol = document.getElementById("rs-synchronous-switch-symbol").contentDocument;
    rsSynchronousSwitchSymbol.getElementById("s").style.stroke = (s == 1 ? "red" : "black");
    rsSynchronousSwitchSymbol.getElementById("c").style.stroke = (c == 1 ? "red" : "black");
    rsSynchronousSwitchSymbol.getElementById("r").style.stroke = (r == 1 ? "red" : "black");
    rsSynchronousSwitchSymbol.getElementById("q").style.stroke = (this.nand2s == 1 ? "red" : "black");
    rsSynchronousSwitchSymbol.getElementById("q-neg").style.stroke = (this.nand4s == 1 ? "red" : "black");
};

const rsTypeAsynchronousSwitch = {
    nand1s: 1,
    nand2s: 0,
    nor1s: 1,
    nor2s: 0,

    switchOutput: function() {
        this.rsNandOutput();
        this.rsNorOutput();
        resetInputs(['q1', 'q2', 'q1-neg', 'q2-neg']);
    },

    rsNandOutput: function() {
        var s1 = document.getElementById("a1").checked ? '1' : '0';
        var r1 = document.getElementById("b1").checked ? '1' : '0';

        var rsAsynchronousNandSwitch = document.getElementById("rs-asynchronous-switch-nand-schema").contentDocument;
        var tableRowsNand = document.getElementById("boardOfTruth-nand").rows;
        var previousStateBoard = document.getElementById("previousStateNandBoard").rows;
        tableRowsNand.item(5).style.fontWeight = "normal";
        for (const row of tableRowsNand) {
            row.style.color = "black";
        }

        if (s1 == '0' && r1 == '1') {
            this.nand1s = '1';
            this.nand2s = (r1 & this.nand1s) == 0 ? '1' : '0';
        } else if (r1 == '0' && s1 == '1') {
            this.nand2s = '1';
            this.nand1s = (s1 & this.nand2s) == 0 ? '1' : '0';
        } else if (s1 == '0' && r1 == '0') {
            document.getElementById("q1").checked = false;
            document.getElementById("q1-neg").checked = false;

            tableRowsNand.item(1).style.color = "red";
            tableRowsNand.item(5).style.color = "red";
            tableRowsNand.item(5).style.fontWeight = "bold";
            previousStateBoard.item(1).cells[1].textContent = this.nand1s;
            previousStateBoard.item(2).cells[1].textContent = this.nand2s;

            return;
        }

        document.getElementById("q1").checked = (this.nand1s === '1');
        document.getElementById("q1-neg").checked = (this.nand2s === '1');
        previousStateBoard.item(1).cells[1].textContent = this.nand1s;
        previousStateBoard.item(2).cells[1].textContent = this.nand2s;

        switch(s1) {
            case '0':
                if (r1 === '0') {
                    tableRowsNand.item(1).style.color = "red";
                } else {
                    tableRowsNand.item(2).style.color = "red";
                }
            break;

            case '1':
                if (r1 === '0') {
                    tableRowsNand.item(3).style.color = "red";
                } else {
                    tableRowsNand.item(4).style.color = "red";
                }
            break;
        }

        rsAsynchronousNandSwitch.getElementById("s").style.stroke = (s1 == 1 ? "red" : "black");
        rsAsynchronousNandSwitch.getElementById("r").style.stroke = (r1 == 1 ? "red" : "black");

        rsAsynchronousNandSwitch.getElementById("nand1-s").style.stroke = (this.nand1s == 1 ? "red" : "black");
        rsAsynchronousNandSwitch.getElementById("nand1-s1").style.stroke = (this.nand1s == 1 ? "red" : "black");
        rsAsynchronousNandSwitch.getElementById("nand1-s-dot").style.stroke = (this.nand1s == 1 ? "red" : "black");
        rsAsynchronousNandSwitch.getElementById("nand1-s-dot").style.fill = (this.nand1s == 1 ? "red" : "black");

        rsAsynchronousNandSwitch.getElementById("nand2-s").style.stroke = (this.nand2s == 1 ? "red" : "black");
        rsAsynchronousNandSwitch.getElementById("nand2-s1").style.stroke = (this.nand2s == 1 ? "red" : "black");
        rsAsynchronousNandSwitch.getElementById("nand2-s-dot").style.stroke = (this.nand2s == 1 ? "red" : "black");
        rsAsynchronousNandSwitch.getElementById("nand2-s-dot").style.fill = (this.nand2s == 1 ? "red" : "black");
    },

    rsNorOutput: function() {
        var s2 = document.getElementById("a2").checked ? '1' : '0';
        var r2 = document.getElementById("b2").checked ? '1' : '0';

        var rsAsynchronousNorSwitch = document.getElementById("rs-asynchronous-switch-nor-schema").contentDocument;
        var tableRowsNor = document.getElementById("boardOfTruth-nor").rows;
        var previousStateBoard = document.getElementById("previousStateNorBoard").rows;
        tableRowsNor.item(5).style.fontWeight = "normal";
        for (const row of tableRowsNor) {
            row.style.color = "black";
        }

        if (s2 == '1' && r2 == '0') {
            this.nor1s = '0';
            this.nor2s = (r2 | this.nor1s) == 0 ? '1' : '0';
        } else if (r2 == '1' && s2 == '0') {
            this.nor2s = '0';
            this.nor1s = (s2 | this.nor2s) == 0 ? '1' : '0';
        } else if (s2 == '1' && r2 == '1') {
            document.getElementById("q2").checked = false;
            document.getElementById("q2-neg").checked = false;

            tableRowsNor.item(4).style.color = "red";
            tableRowsNor.item(5).style.color = "red";
            tableRowsNor.item(5).style.fontWeight = "bold";
            previousStateBoard.item(1).cells[1].textContent = this.nor1s;
            previousStateBoard.item(2).cells[1].textContent = this.nor2s;

            return;
        }

        document.getElementById("q2").checked = (this.nor1s === '1');
        document.getElementById("q2-neg").checked = (this.nor2s === '1');
        previousStateBoard.item(1).cells[1].textContent = this.nor1s;
        previousStateBoard.item(2).cells[1].textContent = this.nor2s;

        switch(r2) {
            case '0':
                if (s2 === '0') {
                    tableRowsNor.item(1).style.color = "red";
                } else {
                    tableRowsNor.item(2).style.color = "red";
                }
            break;

            case '1':
                if (s2 === '0') {
                    tableRowsNor.item(3).style.color = "red";
                } else {
                    tableRowsNor.item(4).style.color = "red";
                }
            break;
        }

        rsAsynchronousNorSwitch.getElementById("s").style.stroke = (s2 == 1 ? "red" : "black");
        rsAsynchronousNorSwitch.getElementById("r").style.stroke = (r2 == 1 ? "red" : "black");

        rsAsynchronousNorSwitch.getElementById("nor1-s").style.stroke = (this.nor1s == 1 ? "red" : "black");
        rsAsynchronousNorSwitch.getElementById("nor1-s1").style.stroke = (this.nor1s == 1 ? "red" : "black");
        rsAsynchronousNorSwitch.getElementById("nor1-s-dot").style.stroke = (this.nor1s == 1 ? "red" : "black");
        rsAsynchronousNorSwitch.getElementById("nor1-s-dot").style.fill = (this.nor1s == 1 ? "red" : "black");

        rsAsynchronousNorSwitch.getElementById("nor2-s").style.stroke = (this.nor2s == 1 ? "red" : "black");
        rsAsynchronousNorSwitch.getElementById("nor2-s1").style.stroke = (this.nor2s == 1 ? "red" : "black");
        rsAsynchronousNorSwitch.getElementById("nor2-s-dot").style.stroke = (this.nor2s == 1 ? "red" : "black");
        rsAsynchronousNorSwitch.getElementById("nor2-s-dot").style.fill = (this.nor2s == 1 ? "red" : "black");
    }
};

function resetInputs(checkboxes) {
    checkboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.offsetHeight; // Trigger reflow
            checkbox.dispatchEvent(new Event('change'));
        }
    });
}
