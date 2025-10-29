function isDequeue(arr1, arr2) {
    let arr3 = [];

    while (arr2.length > 0) {
        let front = arr2[0];

        if (arr1.length > 0 && arr1[0] === front) {
            // Dequeue from input
            arr1.shift();
            arr2.shift();
        } else if (arr3.length > 0 && arr3[arr3.length - 1] === front) {
            // Pop from arr3
            arr3.pop();
            arr2.shift();
        } else if (arr1.length > 0) {
            // Enqueue to arr3
            arr3.push(arr1.shift());
        } else {
            // Not possible
            return false;
        }
    }

    return true;
}

const arr1 = [8, 6, 4, 2, 9]; // Input queue
const arr2 = [2, 6, 9, 4, 8]; // Output queue

const result = isDequeue(arr1, arr2);
const result1 = isDequeue(arr1, arr2);

if (result) {
    console.log("Output: TRUE");
} else {
    console.log("Output: FALSE");
}
