class SortWords {
  alphabetsMap = new Map<string, number>([
    ['A', 1],
    ['B', 2],
    ['P', 16],
  ]);

  sortWords(words: string[]) {
    let wordPair = new Array<{ key: number; value: string }>();
    words.forEach((word) => {
      let i: number = 0;
      let num: string = '';
      while (i < word.length) {
        num += this.alphabetsMap.get(word.charAt(i++).toUpperCase());
      }
      wordPair.push({ key: parseInt(num), value: word });
    });

    let sortedPair = new Array<{ key: number; value: string }>();
    for(let i = 0;i< wordPair.length;i++) {
        for(let j=i;j<wordPair.length;j++){
            if(wordPair[i].key>wordPair[j].key){
                let temp = wordPair[j];
                wordPair[j]= wordPair[i];
                wordPair[i]=temp;
            }
        }
    }
    let result:String[]=[];
    wordPair.forEach(obj=>result.push(obj.value));
    return result;
  }
}
let test = new SortWords();
console.log(test.sortWords(['abp','ap','ap', 'ab']));