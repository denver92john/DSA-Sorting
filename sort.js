// bubble sort
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

// merge sort
function merge(left, right, array) {
		console.log('merge ran');
		console.log(left);
		console.log(right);
		console.log(array);
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
				console.log('merge while ran');
        if (left[leftIndex] < right[rightIndex]) {
						console.log('merge while if ran');
            array[outputIndex++] = left[leftIndex++];
        }
        else {
						console.log('merge while else ran');
            array[outputIndex++] = right[rightIndex++];
						console.log(outputIndex);
						console.log(right);
						console.log(array);
        }
    }

		/* if the while else runs, then the for left loop will run */

    for (let i = leftIndex; i < left.length; i++) {
				console.log('merge for left ran');
        array[outputIndex++] = left[i];
				console.log(outputIndex);
				console.log(left);
				console.log(array);
    }

    for (let i = rightIndex; i < right.length; i++) {
				console.log('merge for right ran');
        array[outputIndex++] = right[i];
    }
		console.log('end of merge', array);
    return array;
};

function mergeSort(array) {
		console.log('mergeSort ran');
		console.log(array);
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
		//console.log(left, 'left array');
		//console.log(right, 'right array');

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

// quick sort and there reference to swap() in bubble sort section
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

module.exports = {
	swap,
	bubbleSort,
	merge,
	mergeSort,
	quickSort,
	partition
};