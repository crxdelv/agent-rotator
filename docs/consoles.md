## Consoles

Console category has 3 agents: Xbox One, PlayStation, and Nintendo Switch.

### Xbox One

```javascript
console.log(new AgentRotator.consoles.Xbox().toString());

// Additional configurations:
{ edge }
```

> Mozilla/3.0 (Windows NT 7.0; Win64; Xbox; Xbox One) AppleWebKit/502 (KHTML, like Gecko) Chrome/647.215.643 Mobile Safari/59.197 Edge/431

### PlayStation

```javascript
console.log(new AgentRotator.consoles.PlayStation().toString());

// Additional configurations:
{ playstation, playstationVersion }
```

> Mozilla/4.0 (PlayStation; PlayStation 4/329.598) AppleWebKit/480 (KHTML, like Gecko) Version/4.0 Mobile Safari/405

### Nintendo Switch

```javascript
console.log(new AgentRotator.consoles.Nintendo().toString());

// Additional configurations:
{ framework, browser }
```

> Mozilla/3.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/420 (KHTML, like Gecko) NF/119 NintendoBrowser/60