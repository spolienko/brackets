module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.flat();
    const openBraket = brackets.filter((e, i) => !(i % 2));
    const closeBraket = brackets.filter((e, i) => !(i % 2 == 0));
    let flag = false;
    let bracketsIndex = [],
        closeIndex,
        openIndex;

    for (let i = 0; i < (str.length); i++) {
        openIndex = openBraket.indexOf(str[i]);
        if (openIndex !== -1) {
            if (str[i] === '|' && flag == false) {
                flag == true;
                bracketsIndex.push(openIndex);
            }
            else {
                bracketsIndex.push(openIndex);
            }
            continue;
        }
        closeIndex = closeBraket.indexOf(str[i]);
        if (closeIndex !== -1) {
            if (str[i] === '|' && flag == true) {
                flag == false;
                openIndex = bracketsIndex.pop();
            }
            else {
                openIndex = bracketsIndex.pop();
            }
            if (openIndex != closeIndex) {
                return false
            }
        }
    }
    if (bracketsIndex.length !== 0) {
        return false;
    }
    return true;
}
