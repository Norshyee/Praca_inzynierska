function loadContent(fragmentUrl) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = xhr.responseText
            applyCSS(contentArea);
        }
    };
    xhr.open('GET', fragmentUrl, true);
    xhr.send();
}

function applyCSS(contentArea) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/css/style.css';
    document.head.appendChild(link);
}

function randomInputs() {
    if (document.getElementById("a")) document.getElementById("a").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("b")) document.getElementById("b").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("c")) document.getElementById("c").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("d")) document.getElementById("d").value = (Math.random() >= 0.5) ? 1 : 0;

    if (document.getElementById("a1")) document.getElementById("a1").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("a2")) document.getElementById("a2").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("a3")) document.getElementById("a3").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("a4")) document.getElementById("a4").value = (Math.random() >= 0.5) ? 1 : 0;

    if (document.getElementById("b1")) document.getElementById("b1").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("b2")) document.getElementById("b2").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("b3")) document.getElementById("b3").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("b4")) document.getElementById("b4").value = (Math.random() >= 0.5) ? 1 : 0;

    if (document.getElementById("c1")) document.getElementById("c1").value = (Math.random() >= 0.5) ? 1 : 0;
}