export function mergeSort(items) {
    if (items === undefined || items === null) {
        throw new Error("Items must be an valid array");
    }
    if (!Array.isArray(items)) {
        throw new Error("Items must be an valid array");
    }
    if (items.length == 0) {
        return items;
    }
    if (items.length == 1) {
        return items;
    }

    return mergeSortImpl(items);
}


// https://github.com/saichaitanya88/learning/blob/master/0005-MergeSort/mergesort.js
function mergeSortImpl(items) {
    if (items.length <= 1) {
        return items;
    }
    var left = [];
    var right = [];
    for (var i = 0; i < items.length; i++) {
        // array odd
        if (i % 2 == 1) {
            left.push(items[i]);
        }
        // array even
        if (i % 2 == 0) {
            right.push(items[i]);
        }
    }
    if (left.length > 0) {
        left = mergeSortImpl(left);
    }
    if (right.length > 0) {
        right = mergeSortImpl(right);
    }
    return merge(left, right);
}

function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left[0]);
            left.shift();
        }
        else {
            result.push(right[0]);
            right.shift();
        }
    }
    while (left.length > 0) {
        result.push(left[0]);
        left.shift();
    }
    while (right.length > 0) {
        result.push(right[0]);
        right.shift();
    }
    return result;
}