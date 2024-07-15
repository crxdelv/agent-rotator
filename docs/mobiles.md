## Mobiles

Mobile category has 6 agents: Android, Samsung, Google Pixel, Motorola, Lumia, and Iphone.

### Android

```javascript
console.log(new AgentRotator.mobiles.Android().toString());
```

> Mozilla/4.0 (Linux; Android 13; YYY7951) AppleWebKit/49.69 (KHTML, like Gecko) Version/3.0 Chrome/56.169 Mobile Safari/351.77.351

### Samsung

```javascript
console.log(new AgentRotator.mobiles.Samsung().toString());
```

> Mozilla/4.0 (Linux; Android 13; SM-STR5717) AppleWebKit/563.678.556 (KHTML, like Gecko) Version/3.0 Chrome/201 Mobile Safari/344.481.556

### Google Pixel

```javascript
console.log(new AgentRotator.mobiles.GooglePixel().toString());
```

> Mozilla/3.0 (Linux; Android 10; Pixel 9 Pro) AppleWebKit/1.168 (KHTML, like Gecko) Version/4.0 Chrome/117 Mobile Safari/252.672.374

### Motorola

```javascript
console.log(new AgentRotator.mobiles.Motorola().toString());
```

> Mozilla/4.0 (Linux; Android 11; moto g pure) AppleWebKit/21.186.423 (KHTML, like Gecko) Version/3.0 Chrome/605 Mobile Safari/408

### Lumia

```javascript
console.log(new AgentRotator.mobiles.Lumia().toString());

// Additional configurations:
{ windows, edge }
```

> Mozilla/4.0 (Windows Phone 10.0; Android 14; Microsoft; BYV8646) AppleWebKit/86.666 (KHTML, like Gecko) Version/3.0 Chrome/357.663.101 Mobile Safari/642.139

### Iphone

```javascript
console.log(new AgentRotator.mobiles.Iphone().toString());

// Additional configurations:
{ iphone, platform, platformVerson }
```

> Mozilla/4.0 (iPhone 10; U; CPU iphone OS10_3 like Mac OS X) CriOS/338 AppleWebKit/243 (KHTML, like Gecko) Version/4.0 Chrome/376.689.523 Mobile Safari/34