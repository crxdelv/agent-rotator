## Desktops

Desktop category has 3 agents: Macintosh, Windows, and Chromebook (ChromeOS).

### Macintosh

```javascript
console.log(new AgentRotator.desktops.Macintosh().toString());

// FUN FACT:
// Ipad and Macintosh has the same
// user agent template.
```

> Mozilla/3.0 (Macintosh; Intel Mac OS X 14_8) AppleWebKit/673.42.93 (KHTML, like Gecko) Version/4.0 Chrome/683.220 Mobile Safari/591.408.643

### Windows

```javascript
console.log(new AgentRotator.desktops.Windows().toString());

// Additional configurations:
{ architecture, api, windows }
```

> Mozilla/4.0 (Windows NT 10.0; Win64; x64) AppleWebKit/401.78 (KHTML, like Gecko) Version/5.0 Chrome/334.125 Mobile Safari/21.517.141

### Chromebook (ChromeOS)

```javascript
console.log(new AgentRotator.desktops.ChromeOS().toString());

// Additional configurations:
{ architecture, version }
```

> Mozilla/3.0 (X11; CrOS x32; 307.121.286) AppleWebKit/352 (KHTML, like Gecko)  Chrome/294.72.628 Mobile Safari/300