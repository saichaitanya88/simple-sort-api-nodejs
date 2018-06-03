## How to run the application: 

> npm install

### Start the server
> npm start

### Run tests
> npm run test:watch

### Run test with coverage
> npm run test

or 
> npm run coverage

```
-----------------|----------|----------|----------|----------|-------------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |      100 |    95.45 |      100 |      100 |                   |
 src             |      100 |      100 |      100 |      100 |                   |
  apiHandlers.js |      100 |      100 |      100 |      100 |                   |
 src/utils       |      100 |    94.44 |      100 |      100 |                   |
  bubbleSort.js  |      100 |      100 |      100 |      100 |                   |
  mergeSort.js   |      100 |    91.67 |      100 |      100 |             36,39 |
-----------------|----------|----------|----------|----------|-------------------|


```


### Edge cases considered: 
Both `BubbleSort` and `MergeSort` covered edge cases with:
1. null inputs
2. ZERO length array inputs
3. even length array inputs
4. repeated elements in the input array

These edge cases are covered using tests. 

### Notes regarding code coverage
Although there is 100% coverage on the lines. `MergeSort` code coverage shows that not all branches are considered for lines 36 and 39. If I was strict regarding code coverage, I would spend more time covering scenarios that lead to a `false` condition for lines 36, and 39. In reality, this is not possible, and not necessary because arrays with length of ZERO are not processed by the `mergeSortImpl()`, as they are handled in `mergeSort()`.

### Project structure

```
conf
├── jest.config.js
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
src
├── apiHandlers.js
├── index.js
├── index.test.js
└── utils
    ├── bubbleSort.js
    ├── bubbleSort.test.js
    ├── mergeSort.js
    └── mergeSort.test.js
.babelrc
.eslintrc
package.json
README.md
webpack.config.js
```

#### index.js
This is the entry point for the application which contains references to two methods in the `apiHandler.js`; one for each sort method. 

#### apiHandler.js 
The two methods in this file handle the input provided through the REST api. It verifies that the expected input property `unsortedNumbers` is present in the request body before calling the actual sort functions listed in `utils`. 

#### `utils/bubbleSort.js` & `utils/mergeSort.js`
The two files contain methods that sort the the input array. Other edge cases like null input, 0 length array etc. are also validated in the sort methods. 
`MergeSort` is preferred as it has a worst case time complexity of O(n log n) and space complexity of O(n); while `BubbleSort` has a worst case time complexity of O(n^2) and space complexity of 1 due to the swap variable.
Another limitation to consider is that since the input numbers are provided through the POST request body; we might be limited by the maximum request body size. 

#### Error Handling:
Error handing tries to adhere to the Separation of Concerns principle and fails fast. Error handing related to the inputs provided through the REST api is handled in `apiHandlers.js` methods. Implementation of the sort methods handle further errors if necessary. 