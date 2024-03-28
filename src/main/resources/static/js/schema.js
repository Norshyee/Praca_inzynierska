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
