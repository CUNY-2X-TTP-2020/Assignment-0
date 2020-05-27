function countOfAllIndexMatchingNumbers(nums)
{
    return nums.reduce((count, item, index) =>
    {
        item === index ? count++ : count;
        return count;
    }, 0);
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;