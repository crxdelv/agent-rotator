## agent-rotator
A diverse, customizable, and extensible user-agent generator with over 20+ user-agents from different devices, written in javascript. :balance_scale:

![v1.0.0](https://img.shields.io/badge/package-v1.0.0-coral?logo=npm&logoColor=white)
![v1.0.x](https://img.shields.io/badge/Version-v1.0.x-blue)

**Total of 23 devices**
1. Mobiles (6)
2. Desktops (3)
3. Tablets (2)
4. Consoles (3)
5. Browsers (4)
6. Bots (3)
7. Miscellaneous (2)

## Installation

Install agent-rotator on your terminal with npm:

```
npm i agent-rotator
```

[View package](https://npmjs.com/agent-rotator) &vert; [View on JSDelivr](https://www.jsdelivr.com/package/npm/agent-rotator)

For browser-based installation, import agent-rotator using html script tag:

```html
<script src="https://cdn.jsdelivr.net/gh/creuserr/agent-rotator/dist/agent-rotator.min.js" integrity="sha384-AGeCYy4n/KPnE+hqfXxHOlUG5Yg3CD/e7XCgoqqw6EJXdGwGuKHrGBfd4Yctx6pi" crossorigin="anonymous"></script>
```

<details>
<summary>SRI Signatures (SHA-384)</summary><br>

Minified (v1.0.0)
```yaml
integrity: sha384-AGeCYy4n/KPnE+hqfXxHOlUG5Yg3CD/e7XCgoqqw6EJXdGwGuKHrGBfd4Yctx6pi
cross-origin: anonymous
```

Original (v1.0.0)
```yaml
integrity: sha384-kXwFioL2VwxOSIASZtvtwph5C/e2Fm5b224pCZHgQq5JHveEeQGQjvJ3Zmh7TaFE
cross-origin: anonymous
```
```html
<script src="https://cdn.jsdelivr.net/gh/creuserr/agent-rotator/dist/agent-rotator.js" integrity="sha384-kXwFioL2VwxOSIASZtvtwph5C/e2Fm5b224pCZHgQq5JHveEeQGQjvJ3Zmh7TaFE" crossorigin="anonymous"></script>
```

</details>

## agent-rotator vs. rotation

Here is a comparison table of [rotation](https://github.com/creuserr/rotation) and agent-rotator:

| Feature | agent-rotator | rotation |
|:------|:-----:|:-----:|
| Customizable | :ballot_box_with_check: | :ballot_box_with_check: |
| Extensible | :ballot_box_with_check: | :negative_squared_cross_mark: |
| Node support | :ballot_box_with_check: | :negative_squared_cross_mark: |
| Documented | :ballot_box_with_check: | :negative_squared_cross_mark: |
| Clean source code | :ballot_box_with_check: | :negative_squared_cross_mark: |
| Error-free templates | :ballot_box_with_check: | :negative_squared_cross_mark: |
| Usage of Crypto API | :ballot_box_with_check: | :negative_squared_cross_mark: |

**What's new?**

1. Fixed inconsistency and errors on agent templates.
2. Moved from functions to extensible classes.
3. Added Crypto API &ndash; You can select whether to use Crypto API or Math API.
4. Added JSDoc to every classes.
5. Improved environment support &ndash; Browser-based, AMD (e.g. RequireJS), NodeJS and CommonJS.
6. Added more tools.
7. Added support for extension.
8. Published on NPM.

## Contribution
I accept contributions in form of issues and pull requests.

For pull request contributions, please read [CONTRIBUTION.md](CONTRIBUTION.md) for conditions and guidelines.

## License

```
MIT License
Copyright (c) 2024 si delv
```
