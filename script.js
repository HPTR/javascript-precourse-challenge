function isNumberPositive() {
    const num = Number(document.getElementById('positveOrNegativeNumber').value);
    let posNeg;

    if (num >= 0) {
        posNeg = true;
    } else {
        posNeg = false;
    };

    document.getElementById('isPosAnswer').innerHTML = 'Done';

    return posNeg;
};

function convertDaysToAge() {
    const num = Number(document.getElementById('numberOfDays').value);
    let age = Math.round(num / 365);
    console.log(age);
    document.getElementById('daysToAgeAnswer').innerHTML = `${age}`;

    return
};