var SortWords = /** @class */ (function () {
    function SortWords() {
        this.alphabetsMap = new Map([
            ['A', 1],
            ['B', 2],
            ['P', 16],
        ]);
    }
    SortWords.prototype.sortWords = function (words) {
        var _this = this;
        var wordPair = new Array();
        words.forEach(function (word) {
            var i = 0;
            var num = '';
            while (i < word.length) {
                num += _this.alphabetsMap.get(word.charAt(i++).toUpperCase());
            }
            wordPair.push({ key: parseInt(num), value: word });
        });
        var sortedPair = new Array();
        for (var i = 0; i < wordPair.length; i++) {
            for (var j = i; j < wordPair.length; j++) {
                if (wordPair[i].key > wordPair[j].key) {
                    var temp = wordPair[j];
                    wordPair[j] = wordPair[i];
                    wordPair[i] = temp;
                }
            }
        }
        var result = [];
        wordPair.forEach(function (obj) { return result.push(obj.value); });
        return result;
    };
    return SortWords;
}());
var test = new SortWords();
console.log(test.sortWords(['abp', 'ap', 'ap', 'ab']));
