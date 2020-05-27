function countOfAllNumbersSmallerThanTarget(nums, target)
{
    return nums.reduce((count, item) =>
    {
        item < target ? count++ : count;
        return count;
    }, 0);
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;