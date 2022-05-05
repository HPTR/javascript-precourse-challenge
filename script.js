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
