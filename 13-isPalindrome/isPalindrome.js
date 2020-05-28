function isPalindrome(word)
{
    return word.split("").reduce((match, currentLetter, index) =>
    {
        return currentLetter === word[word.length - 1 - index];
    }, false);
}

// Do not edit this line;
module.exports = isPalindrome;