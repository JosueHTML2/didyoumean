var didUmean = require("./lib/didUMean");

didYouMean.equal = (a, b) => a == b;

didYouMean.assertions = {
    'should return the word if it is in the dictionary': function (word, dictionary) {
        var result = didYouMean(word, dictionary);
        return this.equal(result, word);
    }
}

module.exports = didYouMean;