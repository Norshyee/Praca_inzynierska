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
    ['a', 'b', 'c', 'd', 'a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4'].forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.checked = Math.random() >= 0.5;
            checkbox.dispatchEvent(new Event('change')); // Dispatch change event
        }
    });
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateAfterContent);
});

function updateAfterContent() {
    console.log("Checkbox state changed. Update UI accordingly.");
}

