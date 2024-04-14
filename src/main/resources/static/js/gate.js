function notGateOutput() {
    var a = document.getElementById("a").checked ? '1' : '0';
    var c = (a == 0) ? '1' : '0';
    var cCheck = (a == 0) ? true : false;

    document.getElementById("q").checked = cCheck;
    const checkbox = document.getElementById("q");
    const label = checkbox.closest('.checkbox-label');

    if(cCheck) {
        label.classList.remove('border-gray-400');
        label.classList.add('border-red-400');
    } else {
        label.classList.remove('border-red-400');
        label.classList.add('border-gray-400');
    }

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch (a) {
        case '0':
            tableRows.item(1).style.color = "red";
            break;

        case '1':
            tableRows.item(2).style.color = "red";
            break;
    }

    var svg = document.getElementById("not-gate").contentDocument;

    svg.getElementById("gA").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("gC").style.stroke = (c == 1 ? "red" : "black");
}

function andGateOutput() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var q = a & b;

    document.getElementById("q").value = q;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch (a) {
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

    var svg = document.getElementById("and-gate").contentDocument;

    svg.getElementById("gA").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("gB").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("gC").style.stroke = (q == 1 ? "red" : "black");
}

function nandGateOutput() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var q = (a & b) == 0 ? '1' : '0';

    document.getElementById("q").value = q;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch (a) {
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

    var svg = document.getElementById("nand-gate").contentDocument;

    svg.getElementById("gA").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("gB").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("gC").style.stroke = (q == 1 ? "red" : "black");
}

function orGateOutput() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var q = a | b;

    document.getElementById("q").value = q;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch (a) {
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

    var svg = document.getElementById("or-gate").contentDocument;

    svg.getElementById("gA").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("gB").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("gC").style.stroke = (q == 1 ? "red" : "black");
}

function norGateOutput() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var q = (a | b) == 0 ? '1' : '0';

    document.getElementById("q").value = q;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch (a) {
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

    var svg = document.getElementById("nor-gate").contentDocument;

    svg.getElementById("gA").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("gB").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("gC").style.stroke = (q == 1 ? "red" : "black");
}

function xorGateOutput() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var q = a ^ b;

    document.getElementById("q").value = q;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch (a) {
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

    var svg = document.getElementById("xor-gate").contentDocument;

    svg.getElementById("gA").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("gB").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("gC").style.stroke = (q == 1 ? "red" : "black");
}


