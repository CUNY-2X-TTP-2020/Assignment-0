function titleCaseEdit(title)
{
    return title.toLowerCase().split(" ")
        .map(x => x.charAt(0).toUpperCase().concat(x.slice(1)))
        .join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;