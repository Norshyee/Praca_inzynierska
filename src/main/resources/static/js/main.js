function loadContent(fragmentUrl) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = xhr.responseText
            applyCSS(contentArea);

            if (fragmentUrl.includes('d_type_switch') && typeof dTypeSwitch.init === 'function') {
                dTypeSwitch.init();
            }

            if (fragmentUrl.includes('rs_type_synchronous') && typeof rsTypeSynchronousSwitch.init === 'function') {
                rsTypeSynchronousSwitch.init();
            }

            if (fragmentUrl.includes('rs_type_asynchronous') && typeof rsTypeAsynchronousSwitch.init === 'function') {
                rsTypeAsynchronousSwitch.init();
            }

            initCheckboxBehavior();
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

function initCheckboxBehavior() {
    const checkboxes = document.querySelectorAll('.checkbox-label input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const label = this.closest('.checkbox-label');
            if (this.checked) {
                label.classList.remove('border-gray-400');
                label.classList.add('border-red-400');
            } else {
                label.classList.remove('border-red-400');
                label.classList.add('border-gray-400');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Znajdź wszystkie przyciski, które mają przełączać listy
    document.querySelectorAll('[data-collapse-toggle]').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('aria-controls');
            const targetElement = document.getElementById(targetId);
            targetElement.classList.toggle('expanded');

            if (targetId === 'logo-sidebar') {
                const contentColl = document.getElementById('content-coll');
                contentColl.classList.toggle('collapsed');
            }
        });
    });
});

function randomInputs() {
//    if (document.getElementById("a")) document.getElementById("a").checked = (Math.random() >= 0.5) ? 1 : 0;
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
    if (document.getElementById("c2")) document.getElementById("c2").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("c3")) document.getElementById("c3").value = (Math.random() >= 0.5) ? 1 : 0;
    if (document.getElementById("c4")) document.getElementById("c4").value = (Math.random() >= 0.5) ? 1 : 0;
}