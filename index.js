function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code").value + "</style>";
    let javaScriptCode = document.querySelector(".editor #javascript-code").value;
    let output = document.querySelector(".editor #output");
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(javaScriptCode);
}

document.querySelector(".editor #run-button").addEventListener("click", run);

