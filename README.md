# ts-datastructs-algos
Data structures, algorithms, and other functions written in TypeScript.

## Usage

### Example
```javascript
import { binarySearch } from 'ts-datastructs-algos'
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binarySearch(sortedArray, 5))
```

### Methods
- hasDuplicates
- binarySearch
- linearSearch
- bubbleSort
- swapArrayValues
- insertionSort
- selectionSort

## Development
Contributions are welcome!

### General Rules
1. This project is intended to be **readable** by developers of all levels. This is so to help developers contribute and learn concepts. Always avoid unnecessary shorthand code.  
2. Where possible, functions should be written in a immutable way and always return something.  
3. ESlint is provided for consistent styling. Do not modify the .eslintrc.yml file.  
4. Create a branch for your changes, create a pull request to 'development'. Pull requests on the 'main' branch are automatically built published to npm.

### Prerequisites
This project uses [bun.sh](https://bun.sh/).  
Install it first if you plan on developing for this project.  
  
### Packages
Install packages with:
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