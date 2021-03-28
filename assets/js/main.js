window.onload = function () {
    const pages = ["1500", "1600", "1700", "1800", "1900", "2000"];
    pages.forEach(page => {
        fetch('.././texts/' + page + '.md')
        .then(data => data.text())
        .then(response => print(page, response))
    });
};

function print(id, text) {
    document.getElementById(id).innerHTML = text;
}