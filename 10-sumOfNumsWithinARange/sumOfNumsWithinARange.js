function sumOfNumsWithinARange(nums, start, end)
{
    return nums.reduce((sum, item) =>
    {
        (item >= start && item <= end) ? sum++ : sum;
        return sum;
    }, 0);
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;