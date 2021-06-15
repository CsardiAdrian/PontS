let point = document.getElementById('point');
let currentPoint = document.getElementById('currentPoint');

// Aktuális pont érték kiírása
currentPoint.innerHTML = point.value;
point.oninput = function() {
    currentPoint.innerHTML = this.value;
}

// Default nézet
inquery()

// Onchange esemény vizsgálata
document.getElementById('point').onchange = () => {
    inquery();
}

// Vizsgálat
function inquery() {
    point = document.getElementById('point').value;
    if (point < 0 || point > 100) {
        document.getElementById('message').innerHTML = 'Helytelen pontszám';
    } else if (point < 25) {
        console.log('Elégtelen');
        removeAllClass();
        document.getElementById('currentPointBox').classList.add('red');
        document.getElementById('message').classList.add('elegtelen');
        document.getElementById('message').innerHTML = 'Elégtelen';
    } else if (point < 40) {
        console.log('Elégséges');
        removeAllClass();
        document.getElementById('currentPointBox').classList.add('orange');
        document.getElementById('message').classList.add('elegseges');
        document.getElementById('message').innerHTML = 'Elégséges';
    } else if (point < 60) {
        console.log('Közepes');
        removeAllClass();
        document.getElementById('currentPointBox').classList.add('yellow');
        document.getElementById('message').classList.add('kozepes');
        document.getElementById('message').innerHTML = 'Közepes';
    } else if (point < 80) {
        console.log('Jó');
        removeAllClass();
        document.getElementById('currentPointBox').classList.add('yellowGreen');
        document.getElementById('message').classList.add('jo');
        document.getElementById('message').innerHTML = 'Jó';
    } else {
        console.log('Jeles');
        removeAllClass();
        document.getElementById('currentPointBox').classList.add('green');
        document.getElementById('message').classList.add('jeles');
        document.getElementById('message').innerHTML = 'Jeles';
    }
}

// Minden osztály törlése az adott elemről
function removeAllClass() {
    document.getElementById('currentPointBox').className = '';
    document.getElementById('message').className = '';
}