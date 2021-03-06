# @arpinum/messaging [![Build Status](https://travis-ci.org/arpinum-oss/js-messaging.svg?branch=master)](https://travis-ci.org/arpinum-oss/js-messaging)

> Life is a little like a message in a bottle, to be carried by the winds and the tides.  
> <cite>Gene Tierney</cite>

_@arpinum/messaging_ contains a simple message bus.

## Installation

```
npm install @arpinum/messaging --save
```

## Example

```javascript
const { createMessageBus } = require("@arpinum/messaging");

const bus = createMessageBus();
bus.register("PrintText", (message) => console.log(message.payload));
bus.post({ type: "PrintText", payload: "Hello world" });

// Hello world
```

## Docs

- [API](docs/api.md)

## License

[MIT](LICENSE)
