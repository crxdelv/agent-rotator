## Tools

Tools is a special category that includes helpful utilities to generate user agents.

### Create Version

Create Version is used to generate a version label that follows the format `x.x.x ...`. For example, `351.116.504`.

```javascript
console.log(AgentRotator.tools.CreateVersion());
```

### Create Model

Create Model is used to generate a model name that follows the format `ABC1234`. For example, `YYY7951`.

```javascript
console.log(AgentRotator.tools.CreateModel());
```

### Random

Random is used to generate a random number in range. It follows the randomizer configuration (Crypto or Math API).

```javascript
console.log(AgentRotator.tools.Random(min, max));
```

### Random Char

Random Char is used to generate a random character (in range of alphabets in uppercase).

```javascript
console.log(AgentRotator.tools.RandomChar(length));
```

### Random Array

Random Array is used to generate an array in a random size. The fill value is `0`.

```javascript
console.log(AgentRotator.tools.RandomArray(length));
```

### Random Choice

Random Choice is used to randomly select an item from an array.

```javascript
console.log(AgentRotator.tools.RandomChoice(array));
```

### Addon Agent

Addon Agent is a class template for building addon.

Learn more at [Addons](addons.md).