Removes all spaces from a string.

## Install

```js
$ npm install @ch264/tiny
```

## Usage

```js
const tiny = require("@ch264/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```

## How to import components

```
import { Button } from 'ch264/tiny';

function App() {
   return (
     <div className="button">
   	<h3>This is my new project</h3>
   	<Button label="test" kind="primary"/>
     </div>
   );
}

export default App;
```

WIP - might have to add a declaration file and adding it in package.json with typings key. React npm packages are premised to be used with Typescript. 
