## Getting Started

agent-rotator is an object that consists of 9 categories:

1. `AgentRotator.mobiles`
2. `AgentRotator.desktops`
3. `AgentRotator.tablets`
4. `AgentRotator.bots`
5. `AgentRotator.consoles`
6. `AgentRotator.browsers`
7. `AgentRotator.others`
8. `AgentRotator.tools`
9. `AgentRotator.addons`

## Constructor

Every category consists of classes (excluding tools). For example, `AgentRotator.mobiles.Android`. Optionally, you can pass an object as an argument to configure the output.

```javascript
// Forcefully set the android
// version to 12
const agent = new AgentRotator.mobiles.Android({
  android: 12
});
```

### Properties
User agent classes has their own properties regarding the type of user agent it is.

```javascript
console.log(AgentRotator.mobiles.Android.info);
// {
//   category: "mobiles",
//   type: "android"
// }
```

In some cases, there are products that can't be dynamic like the language product. Those user agent that has a non-dynamic product has an object property named `constants`.

```javascript
// NOTE:
// Every classes also has their own constants

console.log(AgentRotator.mobiles.Iphone.constants)
// {
//   platforms: ["CriOS", "FxiOS"]
// }
```

## Methods

Alternatively, you can modify the configuration using methods.

```javascript
agent.setModel("K");
console.log(agent.getModel());
// "K"
```

> [!NOTE]
> Inputs will be converted to string, and the output will always be string. This is designed to prevent default value like `[object Object]`.

After all the configuration, you can now generate the user agent by using `toString`.

```
console.log(agent.toString());
// "Mozilla/5.0 (Linux; Android 12; K) AppleWebKit/536.634 (KHTML, like Gecko) Version/4.0 Chrome/501.680.450 Mobile Safari/684.124"
```

## More on AgentRotator

agent-rotator provides 4 methods and a bunch of properties for further use.

### Exporting an Addon

An addon is a custom user-agent class that can be found on `AgentRotator.addons`.

```javascript
class MyAgent extends AgentRotator.tools.AddonAgent {
  // ...
}

AgentRotator.Export("MyAgent", MyAgent);
```

You can learn more about it on [Addons](addons.md).

### Selecting a random user agent

You can use the method `Select` to randomly select a random constructor from the list called **flags**.

```javascript
const agent = AgentRotator.Select(AgentRotator.FLAGS_ALL);
console.log(agent.toString());
```

> [!NOTE]
> Using `Select` method returns a constructor (class) and not an instance. This allows you to know which user agent has been selected.

agent-rotator includes 9 flags:
1. `FLAGS_ALL`
2. `FLAGS_MOBILES`
3. `FLAGS_DESKTOPS`
4. `FLAGS_TABLETS`
5. `FLAGS_BOTS`
6. `FLAGS_CONSOLES`
7. `FLAGS_BROWSERS`
8. `FLAGS_OTHERS`
9. `FLAGS_ADDONS`

You can extend those flags by providing a list.

```javascript
const agent = AgentRotator.Select([
  AgentRotator.FLAGS_MOBILES,
  AgentRotator.FLAGS_BROWSERS
]);
console.log(agent.toString());
```

### Updating the addon flags

This method is essential for exporting addons. This method updates the `FLAGS_ADDONS` and should be called after the exportation.

```
AgentRotator.UpdateFlags();
```

### Configuring the randomizer

By default, agent-rotator uses Crypto API as a randomizer if available. Otherwise, Math API is used.

You can select whether the agent-rotator should use Crypto API or Math API.

```javascript
// Use Crypto API
AgentRotator.ConfigureRandomizer(AgentRotator.CONFIG_CRYPTO);

// Use Math API
AgentRotator.ConfigureRandomizer(AgentRotator.CONFIG_MATH);
```

> [!NOTE]
> Configuring the randomizer is not forceful. When using Crypto API but it doesn't exist, Math API will be used no matter what the configuration states.

## What's next?

You can browse through the categories to know what are the devices it includes.

- [Mobiles (6)](mobiles.md)
- [Desktops (3)](desktops.md)
- [Tablets (2)](desktops.md)
- [Bots (3)](bots.md)
- [Consoles (3)](consoles.md)
- [Browsers (4)](browsers.md)
- [Others (2)](others.md)