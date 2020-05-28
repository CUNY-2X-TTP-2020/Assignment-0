function productOfAnyAmountOfNumbers(...args)
{
    return args.reduce((product, item) =>
    {
        product *= item;
        return product;
    });
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;