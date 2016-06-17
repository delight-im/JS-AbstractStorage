# JS-AbstractStorage

Flexible data storage for JavaScript backed by the Web Storage API

## Installation

 * In the browser

   ```html
   <script type="text/javascript" src="dist/AbstractStorage.min.js"></script>
   ```

## Usage

 * Creating a new instance

   ```javascript
   var storage = new AbstractStorage();
   // or
   var storage = new AbstractStorage(window.localStorage);
   // or
   var storage = new AbstractStorage(window.sessionStorage);
   ```

 * Saving strings

   ```javascript
   storage.setString("name", "John Doe");
   ```

 * Saving objects

   ```javascript
   storage.setObject("people", [
       "Alice",
       "Bob",
       "Eve"
   ]);
   ```

 * Retrieving strings

   ```javascript
   var value = storage.getString("name");
   ```

 * Retrieving objects

   ```javascript
   var value = storage.getObject("people");
   ```

 * Counting elements in the storage

   ```javascript
   var numElements = storage.count();
   ```

 * Removing single elements by key

   ```javascript
   storage.remove("age");
   ```

 * Removing all elements

   ```javascript
   storage.clear();
   ```

## Contributing

All contributions are welcome! If you wish to contribute, please create an issue first so that your feature, problem or question can be discussed.

## License

```
Copyright (c) delight.im <info@delight.im>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
