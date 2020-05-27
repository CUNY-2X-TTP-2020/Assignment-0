function countOfAllBooleans(arr)
{
    return arr.reduce((count, item) =>
    {
        typeof item === "boolean" ? count++ : count;
        return count;
    }, 0);
}

// Do not edit this line;
module.exports = countOfAllBooleans;