export function bubbleSort(items) {
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

    // https://en.wikipedia.org/wiki/Bubble_sort#Pseudocode_implementation

    let swapped;
    do {
        swapped = false;
        for (var i = 0; i < items.length; i ++){
            if (items[i-1] > items[i]){
                // Swap
                let tmp = items[i-1];
                items[i-1] = items[i];
                items[i] = tmp;
                swapped = true;
            }
        }
    } while (swapped)

    return items;
}