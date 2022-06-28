"use strict";

Object.defineProperty(module.exports, '__esModule', { value: true });

/**
 * 
 * @param {string} word 
 * @param {string[]} dictionary 
 * @returns 
 */
function didYouMean(wordl, dictionary) {
    wordl = wordl.toLowerCase();
    var dictionaryLow = dictionary.map(word => word.toLowerCase());
    var index = dictionaryLow.indexOf(wordl);

    if (index == -1) {
        var firtChar = wordl.charAt(0),
            secondChar = wordl.charAt(1),
            thirdChar = wordl.charAt(2);

        var words = dictionaryLow.map(word => {
            if (word.charAt(0) == firtChar && word.charAt(1) == secondChar) {
                return word;
            }
            else {
                for (let index = 0; index < word.length; index++) {
                    for (let ondex = 0; index < word.length; index++) {
                        if (wordl.charAt(index) == word.charAt(0)) {
                            return word;
                        }
                    }
                    
                }
            }
        });

        return { words: words.filter(word => word != undefined), word: words[0] };
    } else {
        return dictionary[index];
    }
}

//# sourceMappingURL=didUMean.js.map

