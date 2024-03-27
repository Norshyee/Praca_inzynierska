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
    document.getElementById("a").value = (Math.random() >= 0.5) ? 1 : 0;
    document.getElementById("b").value = (Math.random() >= 0.5) ? 1 : 0;
    document.getElementById("c").value = (Math.random() >= 0.5) ? 1 : 0;
    document.getElementById("d").value = (Math.random() >= 0.5) ? 1 : 0;
}