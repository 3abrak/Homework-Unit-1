function reverse(str) {
    let reversStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversStr += str[i];
    }
    return reversStr;
}

process.stdin.on('data', (inputStr) => {
    inputStr = reverse(data).toString();
    console.log(reverse());
});

console.log(reverse('divan`s voisko'));
