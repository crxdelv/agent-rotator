## Installation

agent-rotator supports both server-side and client-side. For server-side, a built-in test script is provided.

### Server Side

For server-side, install agent-rotator with npm:

```
npm install agent-rotator
```

Before starting, it is highly recommended to run the **test** script to detect errors and incompatibilities.

```
cd node_modules/agent-rotator
npm test
```

Alternatively, you can directly use node.

```
node node_modules/agent-rotator/test/test.js
```

### Client Side

For client-side, import agent-rotator with jsdelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/creuserr/agent-rotator/dist/agent-rotator.min.js" integrity="sha384-AGeCYy4n/KPnE+hqfXxHOlUG5Yg3CD/e7XCgoqqw6EJXdGwGuKHrGBfd4Yctx6pi" crossorigin="anonymous"></script>
<!-- Minified Version -->
```

If you prefer the original file, use this script instead:

```html
<script src="https://cdn.jsdelivr.net/gh/creuserr/agent-rotator/dist/agent-rotator.js" integrity="sha384-kXwFioL2VwxOSIASZtvtwph5C/e2Fm5b224pCZHgQq5JHveEeQGQjvJ3Zmh7TaFE" crossorigin="anonymous"></script>
```

## Importation

If the installation (and optionally, test) is successful, you can start using agent-rotator by importing it with `require`.

```javascript
const AgentRotator = require("agent-rotator");
```

For client-side, it is already imported with the name of `AgentRotator`.

```javascript
window.AgentRotator
```

Great! You can now use agent-rotator!

## What's next?

To understand how to use agent-rotator and its structure, go ahead and read [Getting Started](getting-started.md).

```javascript
const agent = new AgentRotator.mobiles.Android();

// Forcibly set the mozilla
// version to 5.0
agent.setMozilla("5.0");

console.log(agent.toString());
```