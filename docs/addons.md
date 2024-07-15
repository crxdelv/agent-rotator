## Addons

You can build an addon by creating an extended class of `AddonAgent` from the tools category.

```javascript
class MyAddon extends AgentRotator.tools.AddonAgent {
  // ...
}
```

### Adding informations

To add information about your addon, you can define an object called `info`.

```javascript
class MyAddon extends AgentRotator.tools.AddonAgent {
  info = {
    category: "addons",
    type: "my-addon"
  }
}
```

> [!TIP]
> Your addon name should be in a kebab case.

### Defining the products

To define the products that builds the user agent, you can define an object called `products`.

In the object `products`, add an object value where `name` and `version` should exist.

```javascript
class MyAddon extends AgentRotator.tools.AddonAgent {
  products = {
    mozilla: {
      name: "Mozilla",
      version() {
        return AgentRotator.tools.Random(3, 5) + ".0"
      }
    }
  }
}
```

Alternatively, you can add `content` function instead.

```javascript
class MyAddon extends AgentRotator.tools.AddonAgent {
  products = {
    system: {
      content() {
        return "(Android 14; ABC1234)"
      }
    }
  }
}
```

### Ordering the products

To add order for the products, you can define a string array called `order`, where it has the key names of the products.

```javascript
class MyAddon extends AgentRotator.tools.AddonAgent {
  order = ["mozilla", "system"]
}
```

### Exporting your addon

To export your addon, call these two functions:

```javascript
AgentRotator.Export("MyAddon", MyAddon);
AgentRotator.UpdateFlags();
```

### Using your addon

After exporting, your addon will be placed on `addons` category.

```javascript
console.log(new AgentRotator.addons.MyAddon().toString());

// Mozilla/5.0 (Android 14; ABC1234)
```

### Best practices

1. Add getter and setter methods for products.
2. Use `AgentRotator.Export` to prevent conflicts with other addons.
3. The system information product should be named `system`.