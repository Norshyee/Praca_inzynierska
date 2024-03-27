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

    var q = ((a | b) & c) | (a & b);
    var s = (a ^ b) ^ c;

    document.getElementById("s").value = 'S: ' + s;
    document.getElementById("q").value = 'C(n+1): ' + q;
}
