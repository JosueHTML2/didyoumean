# Did you mean, package. You can use it on the browser.


## Require

- **Asynchronous**

```js
    var didYouMean = require("./lib/didUMean");

    didYouMean("j2trappy", [
        "j2.trappy",
        "j3.trappy"
    ]).then(console.log); // j2.trappy
```

- **Synchronous**

```js
    console.log(didYouMean.sync("j2trappy", [
        "j2.trappy",
        "j3.trappy"
    ])); // j2.trappy
```

## Import

- **Asynchronous**

```js
    import didYouMean from "./lib/didUMean";

    didYouMean("j2trappy", [
        "j2.trappy",
        "j3.trappy"
    ]).then(console.log); // j2.trappy
```

- **Synchronous**

```js
    console.log(didYouMean.sync("j2trappy", [
        "j2.trappy",
        "j3.trappy"
    ])); // j2.trappy
```