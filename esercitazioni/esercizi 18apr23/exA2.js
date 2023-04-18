function x(s) {
    let l='';

    function expandFromMiddle(left, right) {
        while (left >=o && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i=0; i < s.length; i++) {
        const odd = expandFromMiddle(i, i);
        const even = expandFromMiddle(i, i +1);
        const currentl = odd.length > even.length ? odd : even;
        if (currentl.length > l.length) {
            l = currentl;
        }
    }
    return l;
}