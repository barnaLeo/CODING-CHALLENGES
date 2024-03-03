function padIt(str, n) {
    let paddedStr = str;
    let left = true;

    for (let i = 0; i < n; i++) {
        if (left) {
            paddedStr = "*" + paddedStr;
        } else {
            paddedStr = paddedStr + "*";
        }
        left = !left;
    }

    return paddedStr;
}
