const question = document.getElementById('question');
const side1 = document.getElementById('side1');
const side2 = document.getElementById('side2');
const side3 = document.getElementById('side3');
const side4 = document.getElementById('side4');
const side5 = document.getElementById('side5');
const side6 = document.getElementById('side6');

const result1 = () => {
    question.style.display = 'none';
    side1.style.display = 'grid';
    side2.style.display = 'none';
    side3.style.display = 'none';
    side4.style.display = 'none';
    side5.style.display = 'none';
    side6.style.display = 'none';
}

const result2 = () => {
    question.style.display = 'none';
    side1.style.display = 'none';
    side2.style.display = 'grid';
    side3.style.display = 'none';
    side4.style.display = 'none';
    side5.style.display = 'none';
    side6.style.display = 'none';
}

const result3 = () => {
    question.style.display = 'none';
    side1.style.display = 'none';
    side2.style.display = 'none';
    side3.style.display = 'grid';
    side4.style.display = 'none';
    side5.style.display = 'none';
    side6.style.display = 'none';
}

const result4 = () => {
    question.style.display = 'none';
    side1.style.display = 'none';
    side2.style.display = 'none';
    side3.style.display = 'none';
    side4.style.display = 'grid';
    side5.style.display = 'none';
    side6.style.display = 'none';
}

const result5 = () => {
    question.style.display = 'none';
    side1.style.display = 'none';
    side2.style.display = 'none';
    side3.style.display = 'none';
    side4.style.display = 'none';
    side5.style.display = 'grid';
    side6.style.display = 'none';
}

const result6 = () => {
    question.style.display = 'none';
    side1.style.display = 'none';
    side2.style.display = 'none';
    side3.style.display = 'none';
    side4.style.display = 'none';
    side5.style.display = 'none';
    side6.style.display = 'grid';
}

document.getElementById('dice-button').onclick = function(){
    let number = Math.ceil(Math.random() * 6);
    if (number === 1) {
        result1();
    } else if (number === 2) {
        result2();
    } else if (number === 3) {
        result3();
    } else if (number === 4) {
        result4();
    } else if (number === 5) {
        result5();
    } else if (number === 6) {
        result6();
    }
}