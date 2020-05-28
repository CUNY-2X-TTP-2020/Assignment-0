function frequencyCounter(word)
{
    return word.split("").reduce((count, item) =>
    {
        count[item] = (count[item] || 0) + 1;
        return count;
    }, {});
}

// Do not edit this line;
module.exports = frequencyCounter;