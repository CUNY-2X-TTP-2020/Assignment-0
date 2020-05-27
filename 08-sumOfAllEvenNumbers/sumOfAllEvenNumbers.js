function sumOfAllEvenNumbers(nums)
{
    return nums.reduce((sum, item) =>
    {
        item % 2 === 0 ? sum++ : sum;
        return sum;
    }, 0);
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;