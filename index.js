var p = [2, 3];

function prime(max) {
    var n = 5;
    while (n <= max) {
        var f = 1;
        for (var i = 0; i < p.length; i++) {
            if (p[i] * p[i] > n) break;
            if (n % p[i] == 0) {
                f = 0;
                break;
            }
        }
        if (f) {
            p.push(n);
        }
        n = n + 2;
    }
}

function sub(n, i) {
    var a = 0;
    if (n == 0) return 1;
    if (i < 0) return 0;
    while (n >= 0) {
        a = a + sub(n, i - 1);
        n = n - p[i];
    }
    return a;
}

function main(num) {
    prime(num);
    var n = 2;
    var m = 0;
    for (;;) {
        while (p[m] < n) {
            m = m + 1;
        }
        var c = sub(n, m);
        if (c >= num) return n;
        n = n + 1;
    }
}

console.log('ANS: ' + main(5000));
