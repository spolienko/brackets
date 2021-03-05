module.exports = function check(str, bracketsConfig) {
    const openers = bracketsConfig.map(x => x[0]);
    const closers = bracketsConfig.map(x => x[1]);
    const stack = [];
    for (let chr of str) {
        let closerIndex = closers.findIndex(el => el === chr);
        let openerIndex = openers.findIndex(el => el === chr);
        if (closerIndex === openerIndex) {
            if (stack.filter(x => x == chr).length % 2 !== 0) { 
                openerIndex = -1;
            }
        }
        if (openerIndex !== -1) {
            stack.push(chr);
        } else {
            let lastOpener = stack.pop();
            let trueOpener = openers[closerIndex];
            if (lastOpener !== trueOpener) return false;
        }
    }
    return stack.length === 0;
}
