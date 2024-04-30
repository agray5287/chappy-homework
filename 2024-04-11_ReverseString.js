//COPY FROM HERE
/* original solution
function getReverseString(str)
{
    const arr = str.split(""); const arrLen = arr.length - 1; const arrRev = [];
    for (i = arrLen; i >= 0; i--) {
        arrRev.push(arr[i])
    };
    return arrRev.join("");
}

Second solution
function getReverseString(str)
{
    const arr = str.split("");
    return arr.reduce((result, current) => current + result);
}
*/

function getReverseString(str) {
    const arr = str.split("");
    let strMidIdx; arr.length % 2 == 0 ? strMidIdx = (arr.length / 2) : strMidIdx = (arr.length / 2) - 0.5
    for (i = 0; i <= strMidIdx - 1; i++) {
        const backIdx = arr.length - i - 1
        let front = arr[i]; let back = arr[backIdx];
        arr[i] = back; arr[backIdx] = front;  
    }
    return arr.join("")
}

var test1 = getReverseString("Reverse Me!")
console.log("Should return !eM esreveR: " + test1);
if (test1 === "!eM esreveR") console.log("Test 1 Passed"); else console.log("Test 1 Failed");

var test2 = getReverseString("This is just a test")
console.log("Should return tset a tsuj si sihT: " + test2);
if (test2 === "tset a tsuj si sihT") console.log("Test 2 Passed"); else console.log("Test 2 Failed");

var test3 = getReverseString("This is a really long one but dont worry the others should have it handled so no big deal if you got those this should be good too")
console.log("Should return oot doog eb dluohs siht esoht tog uoy fi laed gib on os deldnah ti evah dluohs srehto eht yrrow tnod tub eno gnol yllaer a si sihT: " + test3);
if (test3 === "oot doog eb dluohs siht esoht tog uoy fi laed gib on os deldnah ti evah dluohs srehto eht yrrow tnod tub eno gnol yllaer a si sihT") console.log("Test 3 Passed"); else console.log("Test 3 Failed");

function palindromeCheck(string)
{
    if (getReverseString(string) === string) {
        return true
    } else {
        return false;
    }
}

var pTest1 = palindromeCheck("racecar")
console.log("Should return true: " + pTest1);
if (pTest1) console.log("pTest 1 Passed"); else console.log("pTest 1 Failed");

var pTest2 = palindromeCheck("home")
console.log("Should return false: " + pTest2);
if (!pTest2) console.log("pTest 2 Passed"); else console.log("pTest 2 Failed");

var pTest3 = palindromeCheck("level")
console.log("Should return true: " + pTest3);
if (pTest3) console.log("pTest 3 Passed"); else console.log("pTest 3 Failed");
//COPY TO HERE