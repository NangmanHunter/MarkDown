let script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
document.getElementsByTagName("body")[0].append(script);


script.onload = function() {
    let m; 
    fetch('test.md')
    .then(response => response.text()) 
    .then(d => {
        console.log(d);
        m = d;  
        m = marked.parse(m);
        document.getElementById('cnt').innerHTML = m;
    });

}

