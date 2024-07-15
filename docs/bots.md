## Bots

Bot category has 3 agents: Google, Bing, and Baidu.

### Google

```javascript
console.log(new AgentRotator.bots.Google().toString());

// Additional configurations:
{ url }
```

> Mozilla/5.0 (compatible; Googlebot/147.116.276; +http://www.google.com/bot.html) AppleWebKit/544.143.25 (KHTML, like Gecko) Chrome/451.361 Mobile Safari/498

### Bing

```javascript
console.log(new AgentRotator.bots.Bing().toString());

// Additional configurations:
{ url }
```

> Mozilla/4.0 (compatible; Bingbot/642; +http://www.bing.com/bingbot.htm)

### Baidu

```javascript
console.log(new AgentRotator.bots.Baidu().toString());

// Additional configurations:
{ url }
```

> Mozilla/5.0 (compatible; Baiduspider-render/78.56; +http://www.baidu.com/search/spider.html)