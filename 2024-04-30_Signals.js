function FirstToThreeStrongReads(ids, strenths) {
    //Loops through each id and adds it to a Map if the signal is strong
    const r = new Map();
    for(const [key, id] of ids.entries()) {
        if(!r.has(id) && strenths[key] >= 10) {
            r.set(id,1);
        } else if (r.has(id) && strenths[key] >= 10) {
            r.set(id, r.get(id) + 1);
            if (r.get(id) >= 3) {
                return id
            };
        };
    };
    return null
};

function testFirstToThreeStrongReads() {
    // Test cases
    const testCases = [
        { ids: [], strs: [], expected: null },
        { ids: ["a", "b", "c", "a", "a", "b", "c", "a", "b", "c", "b"], strs: [12, 19, 16, 11, 7, 12, 10, 1, 12, 11, 15], expected: "b" },
        { ids: ["a", "b", "c", "a", "a", "b", "c", "a", "b", "c", "b"], strs: [12, 9, 16, 11, 16, 12, 10, 9, 12, 11, 15], expected: "a" },
        { ids: ["d", "a", "b", "d", "c", "a", "a", "d", "b", "c", "a", "b", "c", "b"], strs: [11, 12, 9, 14, 16, 11, 7, 12, 12, 10, 9, 12, 11, 15], expected: "d" },
    ];

    // Run test cases
    testCases.forEach((testCase, index) => {
        const result = FirstToThreeStrongReads(testCase.ids, testCase.strs);
        const expectedResult = testCase.expected;

        console.log(`Test Case ${index + 1}:`);
        console.log("Input:", testCase.ids, testCase.strs);
        console.log("Expected Result:", expectedResult);
        console.log("Actual Result:", result);
        console.log("Test Result:", expectedResult === result ? "Passed" : "Failed");
        console.log("-----------------------------------------");
    });
}

testFirstToThreeStrongReads();


/* Request: You will recieve two arrays of equal length. The first array will be string IDs and the second array will be the signal strength associated with each read.
 So ids[0] will be the first scanned id and strength[0] will be that scans strength.
  A strong read(scan) will be a scan with a strength above 10 (x > 10) Your job is to return the id that is first to have 5 strong reads.
     *
     
Example: If ids = { "a", "b", "c", "a", "a", "b", "c", "a", "b", "c", "b" } and strength = { 12, 9, 16, 11, 7, 12, 10, 9, 12, 11, 15 }
Then you would return "b" because its the the first to have 3 strengths over 10.*/