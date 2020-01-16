const sort = require('./sort');

// 1. Understanding merge sort
const numbers1 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
sort.mergeSort(numbers1);

/*
    * 21, 1, 26, 45
    * 16, 49, 39, 27, 43, 34, 46, 40
    * [21] and [1]
    * [1, 21, 26, 45] and [2, 9, 28, 29]
*/