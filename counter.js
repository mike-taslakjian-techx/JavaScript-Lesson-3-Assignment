// Variables

let count = 0;

// Increment the count variable

function incrementCount() {
    return ++count;
};

// Reset the count variable

function resetCount() {
    count = 0;
    return count;
};

export { incrementCount, resetCount };