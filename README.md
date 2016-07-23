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

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).
