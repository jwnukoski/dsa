# ts-datastructs-algos
Data structures, algorithms, and other useful functions written in TypeScript.  
This package is still in development.

## Usage
[Install the package from npmjs.com](https://www.npmjs.com/package/ts-datastructs-algos).
```bash
    npm install ts-datastructs-algos
```
```bash
    bun add ts-datastructs-algos
```
```bash
    yarn add ts-datastructs-algos
```

### Example
```javascript
import { binarySearch } from 'ts-datastructs-algos'
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binarySearch(sortedArray, 5))
```

### Exports
#### Condition Checks
- hasDuplicates

#### Searches
- binarySearch
- linearSearch

#### Sorts
- bubbleSort
- insertionSort
- selectionSort

#### Structures
- SinglyLinkedList
- DoublyLinkedList
- Stack
- Queue

#### Other Utilities
- deepCopy
- swapArrayValues

## Development
Contributions are welcome!

### General Rules
1. This project is intended to be **readable** by developers of all levels. This is intended to help developers contribute and learn concepts. Always avoid unnecessary shorthand code.  
2. Where possible, functions should be written in a immutable way and always return something.  
3. Include type checking at the beginning of functions for when TypeScript is not used or a runtime issue occurs.  
4. ESlint is provided for consistent styling. Do not modify the .eslintrc.yml file.  
5. Create a branch for your changes, create a pull request to 'development'. Pull requests on the 'main' branch are automatically published to npm.  
6. Avoid additional dependencies at all costs.  

### Prerequisites
This project uses [bun.sh](https://bun.sh/).  
Install it first if you plan on developing for this project.  
  
### Packages
Install packages with:
Bun:
```bash
    bun install
```

### Tests
Run tests with:
```bash
    bun test
```

Test are located in the ./tests directory.

### Building
```bash
    bun run build
```
**Note:** ``bun build`` will not work.

Build files are outputed to the ./dist folder.