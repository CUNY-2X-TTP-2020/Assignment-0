function countOfAllBooleansAndStrings(arr)
{
    return arr.reduce((count, item) =>
    {
        (typeof item === "boolean" || typeof item === "string") ? count++ : count;
        return count;
    }, 0);
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;