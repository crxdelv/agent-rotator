## Browsers

Browser category has 4 agents: Chrome, Edge, Firefox, and Opera.

### Chrome

```javascript
console.log(new AgentRotator.browsers.Chrome().toString());
```

> Mozilla/5.0 (Linux; Android 13; K) AppleWebKit/549 (KHTML, like Gecko) Version/5.0 Chrome/74.423 Mobile Safari/481

### Edge

```javascript
console.log(new AgentRotator.browsers.Edge().toString());

// Additional configurations:
{ edge }
```

> Mozilla/5.0 (Linux; Android 12; ILR3201) AppleWebKit/142 (KHTML, like Gecko) Version/4.0 Chrome/492 Mobile Safari/273.311 Edge/547.292.116

### Firefox

```javascript
console.log(new AgentRotator.browsers.Firefox().toString());

// Additional configurations:
{ revision, gecko, firefox }
```

> Mozilla/5.0 (Android 12; Mobile; rv:20.0) Gecko/610.594 Firefox/328

### Opera

```javascript
console.log(new AgentRotator.browsers.Opera().toString());

// Additional configurations:
{ opera, operaVersion, presto, language }
```

> Opera/351.116.504 (Android; Opera Mini/587.600; U; fr) Presto/189.140.236 Version/3