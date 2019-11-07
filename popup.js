'use strict';

function click(e) {
    var search = document.getElementById("search").value;
    var replace = document.getElementById("replace").value;
    chrome.tabs.executeScript(null, {
        code: "document.body.innerHTML = document.body.innerHTML.replace(/" + search + "/g, '" + replace + "');"
    });
}

document.addEventListener('DOMContentLoaded', function() {

    var button = document.getElementById('button');
    button.addEventListener('click', click);

});