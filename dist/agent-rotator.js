/**
 * Agent Rotator Library v1.0.0
 * https://github.com/creuserr/agent-rotator
 *
 * Released under the MIT license
 * https://github.com/creuserr/agent-rotator#license
 *
 * Date: 2024-07-11
 */

(function (global, factory) {
  if(typeof module === "object" && typeof module.exports === "object") {
    // For Node.js or CommonJS
    module.exports = factory();
  } else if(typeof define === "function" && define.amd) {
    // For AMD (Asynchronous Module Definition) like RequireJS
    define(factory);
  } else {
    // For browser global environment
    global.AgentRotator = factory();
  }
}(typeof window !== "undefined" ? window : this, function() {

const VERSION = [1, 0, 0];
const CHARSET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var CRYPTO, IsCryptoAvailable, UseMath;

/**
 * Initializes the global variables
 * regarding to Crypto API.
 *
 * @private
 */
function InitCrypto() {
  if(CRYPTO !== undefined) return;
  IsCryptoAvailable = false;
  if(typeof window !== "undefined" && typeof window.crypto === "object" && typeof window.crypto.getRandomValues === "function") {
    // In IE, crypto is defined as msCrypto
    CRYPTO = window.crypto || window.msCrypto;
    IsCryptoAvailable = true;
  } else {
    // If not browser-based,
    // import crypto with require
    CRYPTO = require("crypto");
    IsCryptoAvailable = true;
  }
}

/**
 * Generate a number using Crypto API.
 *
 * @private
 */
function CryptoRandom(min, max) {
  const buffer = CRYPTO.getRandomValues(new Uint32Array(1));
  const num = buffer[0] / (0xFFFFFFFF + 1);
  return Math.floor(num * (max - min + 1)) + min;
}

/**
 * Generate a number using Math.
 *
 * @private
 */
function MathRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a number using a
 * randomizer that is available.
 * Crypto by default. If not available,
 * use Math instead.
 *
 * @private
 */
function Random(min, max) {
  // Force use of Math.random
  if(UseMath) {
    return MathRandom(min, max);
  }
  InitCrypto();
  if(IsCryptoAvailable) {
    return CryptoRandom(min, max);
  } else {
    return MathRandom(min, max);
  }
}

/**
 * Generates a random character.
 *
 * @private
 */
function RandomChar(size=1) {
  let out = "";
  for(let i = 0; i < size; i++) {
    out += RandomChoice(CHARSET);
  }
  return out;
}

/**
 * Generate an array with random size.
 *
 * @private
 */
function RandomArray(size=1, mapper=(x)=>x) {
  return new Array(Random(1, size)).fill(0).map(mapper).join(".");
}

/**
 * Randomly choose an item from an array.
 *
 * @private
 */
function RandomChoice(list) {
  return list[Random(0, list.length - 1)];
}

/**
 * Generate a well-formed version.
 *
 * @private
 */
function CreateVersion() {
  return RandomArray(3, x => Random(0, 700));
}

/**
 * Generate a well-formed model name.
 *
 * @private
 */
function CreateModel() {
  return RandomChar(3) + Random(1000, 9999);
}

const AgentRotator = {
  version: VERSION,
  
  // Android
  // Lumia
  // Samsung
  // Motorola
  // GooglePixel
  // Iphone
  mobiles: {},
  
  // ChromeOS
  // Windows
  // Macintosh
  desktops: {},
  
  // Ipad
  // KindleFire
  tablets: {},
  
  // Baidu
  // Google
  // Bing
  bots: {},
  
  // Xbox
  // Nintendo
  // PlayStation
  consoles: {},
  
  // Chrome
  // Edge
  // Firefox
  // Opera
  browsers: {},
  
  // AppleWatch
  // AppleTV
  others: {},
  
  tools: {
    CreateVersion,
    CreateModel,
    Random,
    RandomChar,
    RandomArray,
    RandomChoice
  },
  addons: {}
}

/**
 * The standard agent block.
 *
 * @private
 */
class Agent {
  constructor({ mozilla, version, webkit, chrome, safari } = {}) {
    this.mozilla = mozilla || Random(3, 5);
    this.version = version || Random(3, 5);
    this.webkit = webkit || CreateVersion();
    this.chrome = chrome || CreateVersion();
    this.safari = safari || CreateVersion();
  }
  
  /**
   * Set the Mozilla.
   *
   * @function setMozilla
   * @param {(number|string)} val - Value.
   */
  setMozilla(val) {
    this.mozilla = val.toString();
    return this;
  }
  
  /**
   * Set the Version.
   *
   * @function setVersion
   * @param {(number|string)} val - Value.
   */
  setVersion(val) {
    this.version = val.toString();
    return this;
  }
  
  /**
   * Set the Apple Webkit.
   *
   * @function setWebkit
   * @param {(number|string)} val - Value.
   */
  setWebkit(val) {
    this.webkit = val.toString();
    return this;
  }
  
  /**
   * Set the Chromium version
   *
   * @function setChrome
   * @param {(number|string)} val - Value.
   */
  setChrome(val) {
    this.chrome = val.toString();
    return this;
  }
  
  /**
   * Set the Mobile Safari.
   *
   * @function setSafari
   * @param {(number|string)} val - Value.
   */
  setSafari(val) {
    this.safari = val.toString();
    return this;
  }
  
  /**
   * Get the Mozilla.
   *
   * @function getMozilla
   * @returns {string} Value.
   */
  getMozilla() {
    return this.mozilla.toString();
  }
  
  /**
   * Get the Version.
   *
   * @function getVersion
   * @returns {string} Value.
   */
  getVersion() {
    return this.version.toString();
  }
  
  /**
   * Get the Apple Webkit.
   *
   * @function getWebkit
   * @returns {string} Value.
   */
  getWebkit() {
    return this.webkit.toString();
  }
  
  /**
   * Get the Chromium version
   *
   * @function getChrome
   * @returns {string} Value.
   */
  getChrome() {
    return this.chrome.toString();
  }
  
  /**
   * Get the Mobile Safari.
   *
   * @function getSafari
   * @returns {string} Value.
   */
  getSafari() {
    return this.safari.toString();
  }
  
  /**
   * Compile the versions into a user agent.
   *
   * @function toString
   * @returns {string} Value.
   */
  toString() {
    // NOTE:
    // Every product (except Mozilla) should
    // have a single whitespace
    // at the front.
    // For Mozilla, the whitespace should
    // be at the back.
    
    // System information should be
    // above to allow product modifications.
    const extra = this._init ? this._init() : "()";
    
    const addons = this._addons ? " " + this._addons() : "";
    const mozilla = this.mozilla ? `Mozilla/${this.mozilla}.0 ` : "";
    const version = this.version ? ` Version/${this.version}.0` : "";
    const webkit = this.webkit ? ` AppleWebKit/${this.webkit} (KHTML, like Gecko)` : "";
    const safari = this.safari ? ` Mobile Safari/${this.safari}` : "";
    const chrome = this.chrome ? ` Chrome/${this.chrome}` : "";
    
    // In some cases, products can be undefined. Therefore, using whitespaces
    // as the seperator is not recommended.
    // That will result to an informality
    // like this:
    // Mozilla/5.0 undefined ...
    return [mozilla, extra, webkit, version, chrome, safari, addons].join("");
  }
}

/**
 * Agent block for Android devices
 *
 * @private
 */
class AndroidAgent extends Agent {
  constructor(config={}) {
    super(config);
    const { model, android } = config;
    this.model = model || CreateModel();
    this.android = android || Random(10, 14);
  }
  
  /**
   * Set the Model name.
   *
   * @function setModel
   * @param {(number|string)} val - Value.
   */
  setModel(val) {
    this.model = val.toString();
    return this;
  }
  
  /**
   * Set the Android version.
   *
   * @function setAndroid
   * @param {(number|string)} val - Value.
   */
  setAndroid(val) {
    this.android = val.toString();
    return this;
  }
  
  /**
   * Get the Model name.
   *
   * @function getModel
   * @returns {string} Value.
   */
  getModel() {
    return this.model.toString();
  }
  
  /**
   * Get the Android version.
   *
   * @function getAndroid
   * @returns {string} Value.
   */
  getAndroid() {
    return this.android.toString();
  }
  
  _init() {
    return `(Linux; Android ${this.android}; ${this.model})`;
  }
}

/**
 * Agent block for IOS devices
 *
 * @private
 */
class IOSAgent extends Agent {
  constructor(config={}) {
    super(config);
    const { os } = config;
    this.os = os || `${Random(10, 15)}_${Random(0, 9)}`;
  }
  
  /**
   * Set the OS version.
   *
   * @function setOS
   * @param {(number|string)} val - Value.
   */
  setOS(val) {
    this.os = val.toString();
    return this;
  }
  
  /**
   * Get the OS version.
   *
   * @function getOS
   * @returns {string} Value.
   */
  getOS() {
    return this.os.toString();
  }
  
  _init() {
    this.chrome = null;
    return `(Macintosh; Intel Mac OS X ${this.os})`;
  }
}

/**
 * Agent block for bots
 *
 * @private
 */
class BotAgent {
  constructor({ mozilla, webkit, chrome, safari } = {}) {
    this.mozilla = mozilla || Random(3, 5);
    this.webkit = webkit || CreateVersion();
    this.chrome = chrome || CreateVersion();
    this.safari = safari || CreateVersion();
    // URLs are defined by every
    // bot agents.
    // this.url = url;
  }
  
  /**
   * Set the Mozilla.
   *
   * @function setMozilla
   * @param {(number|string)} val - Value.
   */
  setMozilla(val) {
    this.mozilla = val.toString();
    return this;
  }
  
  /**
   * Set the URL.
   *
   * @function setURL
   * @param {string} val - Value.
   */
  setURL(val) {
    this.url = val.toString();
    return this;
  }
  
  /**
   * Set the Apple Webkit.
   *
   * @function setWebkit
   * @param {(number|string)} val - Value.
   */
  setWebkit(val) {
    this.webkit = val.toString();
    return this;
  }
  
  /**
   * Set the Chromium version
   *
   * @function setChrome
   * @param {(number|string)} val - Value.
   */
  setChrome(val) {
    this.chrome = val.toString();
    return this;
  }
  
  /**
   * Set the Mobile Safari.
   *
   * @function setSafari
   * @param {(number|string)} val - Value.
   */
  setSafari(val) {
    this.safari = val.toString();
    return this;
  }
  
  /**
   * Get the Mozilla.
   *
   * @function getMozilla
   * @returns {string} Value.
   */
  getMozilla() {
    return this.mozilla.toString();
  }
  
  /**
   * Get the URL.
   *
   * @function getURL
   * @returns {string} Value.
   */
  getURL() {
    return this.url.toString();
  }
  
  /**
   * Get the Apple Webkit.
   *
   * @function getWebkit
   * @returns {string} Value.
   */
  getWebkit() {
    return this.webkit.toString();
  }
  
  /**
   * Get the Chromium version
   *
   * @function getChrome
   * @returns {string} Value.
   */
  getChrome() {
    return this.chrome.toString();
  }
  
  /**
   * Get the Mobile Safari.
   *
   * @function getSafari
   * @returns {string} Value.
   */
  getSafari() {
    return this.safari.toString();
  }
  
  // Since BotAgent is not an extended
  // class of Agent, it needs its own
  // compiler.
  
  /**
   * Compile the versions into a user agent.
   *
   * @function toString
   * @returns {string} Value.
   */
  toString() {
    // NOTE:
    // Every product (except Mozilla) should
    // have a single whitespace
    // at the front.
    // For Mozilla, the whitespace should
    // be at the back.
    
    // System information should be
    // above to allow product modifications.
    const extra = this._init ? this._init() : "()";
    
    const mozilla = this.mozilla ? `Mozilla/${this.mozilla}.0 ` : "";
    // const version = this.version ? ` Version/${this.version}.0` : "";
    const webkit = this.webkit ? ` AppleWebKit/${this.webkit} (KHTML, like Gecko)` : "";
    const safari = this.safari ? ` Mobile Safari/${this.safari}` : "";
    const chrome = this.chrome ? ` Chrome/${this.chrome}` : "";
    
    // In some cases, products can be undefined. Therefore, using whitespaces
    // as the seperator is not recommended.
    // That will result to an informality
    // like this:
    // Mozilla/5.0 undefined ...
    return [mozilla, extra, webkit, chrome, safari].join("");
  }
  
  // NOTE:
  // _init method on BotAgent
  // is unnecessary since every bot
  // agents have their own system
  // informations.
}

/**
 * Specialized agent block for addons.
 * 
 * @function AddonAgent
 * @example
 * const agent = new AgentRotator.tools.AddonAgent();
 * 
 * // Change the agent name
 * agent.info.type = "hello-world";
 * 
 * // Change the system information content
 * agent.products.system.content = () => "(Hello; World)";
 * 
 * // Set the mozilla version to 5 (fixed)
 * agent.products.mozilla.version = () => "5.0";
 * 
 * console.log(agent.toString());
 * // Mozilla/5.0 (Hello; World) AppleWebKit/601.455.253 (KHTML, like Gecko) Chrome/469.384 Mobile Safari/472
 */
AgentRotator.tools.AddonAgent = class {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "addons",
    type: "my-addon"
  }
  /**
   * The products that builds half of the user agent. If "content" function
   * does not exist, name and
   * version will be used.
   * @type {Object}
   */
  products = {
    mozilla: {
      name: "Mozilla",
      version() { return Random(3, 5) + ".0" }
    },
    system: {
      content() { return "()" }
    },
    webkit: {
      name: "AppleWebKit",
      version() { return CreateVersion() + " (KHTML, like Gecko)" }
    },
    version: {
      name: "Version",
      version() { return Random(3, 5) + ".0" }
    },
    chrome: {
      name: "Chrome",
      version() { return CreateVersion() }
    },
    safari: {
      name: "Mobile Safari",
      version() { return CreateVersion() }
    }
  }
  order = ["mozilla", "system", "webkit", "chrome", "safari"];
  toString() {
    const products = this.products;
    return this.order.map(item => {
      const product = products[item];
      if(product.content) return product.content();
      return `${product.name}/${product.version()}`;
    }).join(" ");
  }
}

// ========== MOBILES ========== //

/**
 * Generate an Android user agent.
 * 
 * @function Android
 * @example
 * "Mozilla/4.0 (Linux; Android 13; YYY7951) AppleWebKit/49.69 (KHTML, like Gecko) Version/3.0 Chrome/56.169 Mobile Safari/351.77.351"
 */
AgentRotator.mobiles.Android = class extends AndroidAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "mobiles",
    type: "android"
  }
}

/**
 * Generate a Samsung user agent.
 * 
 * @function Samsung
 * @example
 * "Mozilla/4.0 (Linux; Android 13; SM-STR5717) AppleWebKit/563.678.556 (KHTML, like Gecko) Version/3.0 Chrome/201 Mobile Safari/344.481.556"
 */
AgentRotator.mobiles.Samsung = class extends AndroidAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "mobiles",
    type: "samsung"
  }
  constructor(config) {
    super(config);
    const { model } = config;
    this.model = model || "SM-" + CreateModel();
  }
}

/**
 * Generate a Google Pixel user agent.
 * 
 * @function GooglePixel
 * @example
 * "Mozilla/3.0 (Linux; Android 10; Pixel 9 Pro) AppleWebKit/1.168 (KHTML, like Gecko) Version/4.0 Chrome/117 Mobile Safari/252.672.374"
 */
AgentRotator.mobiles.GooglePixel = class extends AndroidAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "mobiles",
    type: "google-pixel"
  }
  constructor(config={}) {
    super(config);
    const { model } = config;
    this.model = model || `Pixel ${Random(5, 10)}` + (Random(0, 1) == 1 ? " Pro" : "");
  }
}

/**
 * Generate a Motorola user agent.
 * 
 * @function Motorola
 * @example
 * "Mozilla/4.0 (Linux; Android 11; moto g pure) AppleWebKit/21.186.423 (KHTML, like Gecko) Version/3.0 Chrome/605 Mobile Safari/408"
 */
AgentRotator.mobiles.Motorola = class extends AndroidAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "mobiles",
    type: "motorola"
  }
  constants = {
    // NOTE:
    // For update request regarding
    // the motorola models, please
    // open an issue or pull request
    // on github.
    
    /**
     * Motorola's models.
     * @type {Array.<string>}
     */
    models: ["moto g pure", "moto g stylus", "moto g stylus 5g", "moto g 5g", "moto g power"]
  }
  constructor(config={}) {
    super(config);
    const { model } = config;
    this.model = model || RandomChoice(this.constants.models);
  }
}

/**
 * Generate a Microsoft Lumia user agent.
 * 
 * @function Lumia
 * @example
 * "Mozilla/4.0 (Windows Phone 10.0; Android 14; Microsoft; BYV8646) AppleWebKit/86.666 (KHTML, like Gecko) Version/3.0 Chrome/357.663.101 Mobile Safari/642.139"
 */
AgentRotator.mobiles.Lumia = class extends AndroidAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "mobiles",
    type: "lumia"
  }
  constructor(config={}) {
    super(config);
    const { windows, edge } = config;
    this.windows = windows || Random(10, 15);
    this.edge = edge || CreateVersion();
  }
  _init() {
    return `(Windows Phone ${this.windows}.0; Android ${this.android}; Microsoft; ${this.model})`;
  }
}

/**
 * Generate an Iphone user agent.
 * 
 * @function Iphone
 * @example
 * "Mozilla/4.0 (iPhone 10; U; CPU iphone OS10_3 like Mac OS X) CriOS/338 AppleWebKit/243 (KHTML, like Gecko) Version/4.0 Chrome/376.689.523 Mobile Safari/34"
 */
AgentRotator.mobiles.Iphone = class extends IOSAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "mobiles",
    type: "iphone"
  }
  constants = {
    /**
     * Iphone's operating systems.
     * @type {Array.<string>}
     */
    platforms: ["CriOS", "FxiOS"]
  }
  constructor(config={}) {
    super(config);
    const { iphone, platform, platformVersion } = config;
    this.iphone = iphone || parseInt(this.os.split("_")[0]);
    this.platform = platform || RandomChoice(this.constants.platforms);
    this.platformVersion = platformVersion || CreateVersion();
  }
  _init() {
    return `(iPhone ${this.iphone}; U; CPU iphone OS${this.os} like Mac OS X) ${this.platform}/${this.platformVersion}`;
  }
}

// ========== DESKTOPS ========== //

/**
 * Generate a Macintosh user agent.
 * 
 * @function Macintosh
 * @example
 * "Mozilla/3.0 (Macintosh; Intel Mac OS X 14_8) AppleWebKit/673.42.93 (KHTML, like Gecko) Version/4.0 Chrome/683.220 Mobile Safari/591.408.643"
 */
AgentRotator.desktops.Macintosh = class extends IOSAgent {
  info = {
    category: "desktops",
    type: "macintosh"
  }
  
  // Apparently, Macintosh (desktop)
  // and Ipad (tablet) has the same
  // user agent format.
  constructor(config) {
    super(config);
  }
}

/**
 * Generate a Windows user agent.
 * 
 * @function Windows
 * @example
 * "Mozilla/4.0 (Windows NT 10.0; Win64; x64) AppleWebKit/401.78 (KHTML, like Gecko) Version/5.0 Chrome/334.125 Mobile Safari/21.517.141"
 */
AgentRotator.desktops.Windows = class extends Agent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "desktops",
    type: "windows"
  }
  constants = {
    /**
     * Windows API versions.
     * @type {Array.<string>}
     */
    api: ["Win32", "Win64"],
    
    /**
     * Architecture types.
     * @type {Array.<string>}
     */
    architectures: ["x32", "x64"]
  }
  constructor(config={}) {
    super(config);
    const { architecture, api, windows } = config;
    const build = Random(0, this.constants.api.length - 1);
    this.windows = windows || Random(7, 12);
    this.architecture = architecture || this.constants.architectures[build];
    this.api = api || this.constants.api[build];
  }
  
  /**
   * Set the Windows version.
   *
   * @function setWindows
   * @param {(number|string)} val - Value.
   */
  setWindows(val) {
    this.windows = windows.toString();
    return this;
  }
  
  /**
   * Set the Architecture type.
   *
   * @function setArchitecture
   * @param {string} val - Value.
   */
  setArchitecture(val) {
    this.architecture = windows.toString();
    return this;
  }
  
  /**
   * Set the Windows API.
   *
   * @function setAPI
   * @param {string} val - Value.
   */
  setAPI(val) {
    this.api = val.toString();
    return this;
  }
  
  /**
   * Get the Windows version.
   *
   * @function getWindows
   * @returns {string} Value.
   */
  getWindows() {
    return this.windows.toString();
  }
  
  /**
   * Get the Windows API.
   *
   * @function getAPI
   * @returns {string} Value.
   */
  getAPI() {
    return this.api.toString();
  }
  
  /**
   * Get the Architecture type.
   *
   * @function getArchitecture
   * @returns {string} Value.
   */
  getArchitecture() {
    return this.architecture.toString();
  }
  
  _init() {
    return `(Windows NT ${this.windows}.0; ${this.api}; ${this.architecture})`;
  }
}

/**
 * Generate a Chromebook user agent.
 * 
 * @function ChromeOS
 * @example
 * "Mozilla/3.0 (X11; CrOS x32; 307.121.286) AppleWebKit/352 (KHTML, like Gecko)  Chrome/294.72.628 Mobile Safari/300"
 */
AgentRotator.desktops.ChromeOS = class extends Agent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "desktops",
    type: "chrome-os"
  }
  constants = {
    /**
     * Architecture types.
     * @type {Array.<string>}
     */
    architectures: ["x32", "x64"]
  }
  constructor(config={}) {
    super(config);
    const { architecture, version } = config;
    this.architecture = architecture || RandomChoice(this.constants.architectures);
    this.version = version || CreateVersion();
  }
  
  /**
   * Set the Architecture type.
   *
   * @function setArchitecture
   * @param {string} val - Value.
   */
  setArchitecture(val) {
    this.architecture = windows.toString();
    return this;
  }
  
  /**
   * Get the Architecture type.
   *
   * @function getArchitecture
   * @returns {string} Value.
   */
  getArchitecture() {
    return this.architecture.toString();
  }
  
  _init() {
    const version = this.version;
    // Removing the version
    // will prevent the version product
    // (e.g. Version/5.0).
    // In ChromeOS, the version label
    // is inside the system informations.
    this.version = null;
    return `(X11; CrOS ${this.architecture}; ${version})`;
  }
}

// ========== TABLETS ========== //

/**
 * Generate an Ipad user agent.
 * 
 * @function Ipad
 * @example
 * "Mozilla/4.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/353 (KHTML, like Gecko) Version/5.0 Chrome/162.4 Mobile Safari/634"
 */
AgentRotator.tablets.Ipad = class extends IOSAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "tablets",
    type: "ipad"
  }
  
  // Apparently, Macintosh (desktop)
  // and Ipad (tablet) has the same
  // user agent format.
  constructor(config) {
    super(config);
  }
}

/**
 * Generate an Amazon Kindle Fire user agent.
 * 
 * @function KindleFire
 * @example
 * "Mozilla/5.0 (Linux; Android 14; KFIOJV) AppleWebKit/525.330 (KHTML, like Gecko) Version/4.0 Chrome/123.97 Mobile Safari/526"
 */
AgentRotator.tablets.KindleFire = class extends AndroidAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "tablets",
    type: "kindle-fire"
  }
  constructor(config={}) {
    super(config);
    const { model } = config;
    this.model = model || `KF${RandomChar(4)}`;
  }
}

// ========== BOTS ========== //

/**
 * Generate a Google Bot user agent.
 * 
 * @function Google
 * @example
 * "Mozilla/5.0 (compatible; Googlebot/147.116.276; +http://www.google.com/bot.html) AppleWebKit/544.143.25 (KHTML, like Gecko) Chrome/451.361 Mobile Safari/498"
 */
AgentRotator.bots.Google = class extends BotAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "bots",
    type: "google"
  }
  constructor(config={}) {
    super(config);
    const { version, url } = config;
    this.version = version || CreateVersion();
    this.url = url || "http://www.google.com/bot.html";
  }
  
  /**
   * Set the Bot version.
   *
   * @function setVersion
   * @param {(number|string)} val - Value.
   */
  setVersion(val) {
    this.version = val.toString();
    return this;
  }
  
  /**
   * Get the Bot version.
   *
   * @function getWindows
   * @returns {string} Value.
   */
  getVersion() {
    return this.version.toString();
  }
  
  _init() {
    return `(compatible; Googlebot/${this.version}; +${this.url})`;
  }
}

/**
 * Generate a Bing Bot user agent.
 * 
 * @function Bing
 * @example
 * "Mozilla/4.0 (compatible; Bingbot/642; +http://www.bing.com/bingbot.htm)"
 */
AgentRotator.bots.Bing = class extends BotAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "bots",
    type: "bing"
  }
  constructor(config={}) {
    super(config);
    const { version, url } = config;
    this.version = version || CreateVersion();
    this.url = url || "http://www.bing.com/bingbot.htm";
  }
  
  /**
   * Set the Bot version.
   *
   * @function setVersion
   * @param {string} val - Value.
   */
  setVersion(val) {
    this.version = val.toString();
    return this;
  }
  
  /**
   * Get the Bot version.
   *
   * @function getWindows
   * @returns {string} Value.
   */
  getVersion() {
    return this.version.toString();
  }
  
  _init() {
    this.webkit = null;
    this.chrome = null;
    this.safari = null;
    return `(compatible; Bingbot/${this.version}; +${this.url})`;
  }
}

/**
 * Generate an Baidu Spider user agent.
 * 
 * @function Baidu
 * @example
 * "Mozilla/5.0 (compatible; Baiduspider-render/78.56; +http://www.baidu.com/search/spider.html)"
 */
AgentRotator.bots.Baidu = class extends BotAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "bots",
    type: "baidu"
  }
  constructor(config={}) {
    super(config);
    const { version, url } = config;
    this.version = version || CreateVersion();
    this.url = url || "http://www.baidu.com/search/spider.html";
  }
  
  /**
   * Set the Bot version.
   *
   * @function setVersion
   * @param {string} val - Value.
   */
  setVersion(val) {
    this.version = val.toString();
    return this;
  }
  
  /**
   * Get the Bot version.
   *
   * @function getVersion
   * @returns {string} Value.
   */
  getVersion() {
    return this.version.toString();
  }
  
  _init() {
    this.webkit = null;
    this.chrome = null;
    this.safari = null;
    return `(compatible; Baiduspider-render/${this.version}; +${this.url})`;
  }
}

// ========== CONSOLES ========== //

/**
 * Generate an Xbox user agent.
 * 
 * @function Xbox
 * @example
 * "Mozilla/3.0 (Windows NT 7.0; Win64; Xbox; Xbox One) AppleWebKit/502 (KHTML, like Gecko) Chrome/647.215.643 Mobile Safari/59.197 Edge/431"
 */
AgentRotator.consoles.Xbox = class extends AgentRotator.desktops.Windows {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "consoles",
    type: "xbox"
  }
  constructor(config={}) {
    super(config);
    const { model, edge } = config;
    this.architecture = "Xbox; Xbox One";
    this.edge = edge || CreateVersion();
  }
  
  /**
   * Set the Edge browser version.
   *
   * @function setEdge
   * @param {(number|string)} val - Value.
   */
  setEdge(val) {
    this.edge = val.toString();
    return this;
  }
  
  /**
   * Get the Edge browser version.
   *
   * @function getEdge
   * @returns {string} Value.
   */
  getEdge() {
    return this.edge.toString();
  }
  
  _addons() {
    return `Edge/${this.edge}`;
  }
  _init() {
    this.version = null;
    return `(Windows NT ${this.windows}.0; ${this.api}; ${this.architecture})`;
  }
}

/**
 * Generate a PlayStation user agent.
 * 
 * @function PlayStation
 * @example
 * "Mozilla/4.0 (PlayStation; PlayStation 4/329.598) AppleWebKit/480 (KHTML, like Gecko) Version/4.0 Mobile Safari/405"
 */
AgentRotator.consoles.PlayStation = class extends Agent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "consoles",
    type: "playstation"
  }
  constructor(config={}) {
    super(config);
    const { playstation, playstationVersion } = config;
    this.playstation = playstation || Random(3, 5);
    this.playstationVersion = playstationVersion || CreateVersion();
  }
  
  /**
   * Set the PlayStation model.
   *
   * @function setPlayStation
   * @param {(number|string)} val - Value.
   */
  setPlayStation(val) {
    this.playstation = val.toString();
    return this;
  }
  
  /**
   * Set the PlayStation version.
   *
   * @function setPlayStationVersion
   * @param {(number|string)} val - Value.
   */
  setPlayStationVersion(val) {
    this.playstationVersion = val.toString();
    return this;
  }
  
  /**
   * Get the PlayStation model.
   *
   * @function getPlayStation
   * @returns {string} Value.
   */
  getPlayStation() {
    return this.playstation.toString();
  }
  
  /**
   * Get the PlayStation version.
   *
   * @function getPlayStationVersion
   * @returns {string} Value.
   */
  getPlayStationVersion() {
    return this.playstationVersion.toString();
  }
  
  _init() {
    this.chrome = null;
    return `(PlayStation; PlayStation ${this.playstation}/${this.playstationVersion})`;
  }
}

/**
 * Generate a Nintendo Switch user agent.
 * 
 * @function Nintendo
 * @example
 * "Mozilla/3.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/420 (KHTML, like Gecko) NF/119 NintendoBrowser/60"
 */
AgentRotator.consoles.Nintendo = class extends Agent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "consoles",
    type: "nintendo"
  }
  constructor(config={}) {
    super(config);
    const { framework, browser } = config;
    this.framework = framework || CreateVersion();
    this.browser = browser || CreateVersion();
  }
  
  /**
   * Set the Nintendo Browser version.
   *
   * @function setBrowser
   * @param {(number|string)} val - Value.
   */
  setBrowser(val) {
    this.browser = val.toString();
    return this;
  }
  
  /**
   * Set the Nintendo Framework browser.
   *
   * @function setFramework
   * @param {(number|string)} val - Value.
   */
  setFramework(val) {
    this.framework = val.toString();
    return this;
  }
  
  /**
   * Get the Nintendo Browser version.
   *
   * @function getBrowser
   * @returns {string} Value.
   */
  getBrowser() {
    return this.browser.toString();
  }
  
  /**
   * Get the Nintendo Framework version.
   *
   * @function getBrowser
   * @returns {string} Value.
   */
  getFramework() {
    return this.framework.toString();
  }
  
  _addons() {
    return `NF/${this.framework} NintendoBrowser/${this.browser}`;
  }
  _init() {
    this.chrome = null;
    this.safari = null;
    this.version = null;
    return `(Nintendo Switch; WifiWebAuthApplet)`;
  }
}

// ========== BROWSERS ========== //

/**
 * Generate an Android-based Chrome user agent.
 * 
 * @function Chrome
 * @example
 * "Mozilla/5.0 (Linux; Android 13; K) AppleWebKit/549 (KHTML, like Gecko) Version/5.0 Chrome/74.423 Mobile Safari/481"
 */
AgentRotator.browsers.Chrome = class extends AndroidAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "browsers",
    type: "chrome"
  }
  constructor(config) {
    super(config);
  }
  _init() {
    return `(Linux; Android 13; K)`;
  }
}

/**
 * Generate an Android-based Edge user agent.
 * 
 * @function Edge
 * @example
 * "Mozilla/5.0 (Linux; Android 12; ILR3201) AppleWebKit/142 (KHTML, like Gecko) Version/4.0 Chrome/492 Mobile Safari/273.311 Edge/547.292.116"
 */
AgentRotator.browsers.Edge = class extends AndroidAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "browsers",
    type: "edge"
  }
  constructor(config={}) {
    super(config);
    const { edge } = config;
    this.edge = edge || CreateVersion();
  }
  
  /**
   * Set the Edge browser version.
   *
   * @function setEdge
   * @param {(number|string)} val - Value.
   */
  setEdge(val) {
    this.edge = val.toString();
    return this;
  }
  
  /**
   * Get the Edge browser version.
   *
   * @function getEdge
   * @returns {string} Value.
   */
  getEdge() {
    return this.edge.toString();
  }
  
  _addons() {
    return `Edge/${this.edge}`;
  }
}

/**
 * Generate an Android-based Firefox user agent.
 * 
 * @function Firefox
 * @example
 * "Mozilla/5.0 (Android 12; Mobile; rv:20.0) Gecko/610.594 Firefox/328"
 */
AgentRotator.browsers.Firefox = class extends AndroidAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "browsers",
    type: "firefox"
  }
  constructor(config={}) {
    super(config);
    const { revision, gecko, firefox } = config;
    this.gecko = gecko || CreateVersion();
    this.firefox = firefox || CreateVersion();
    this.revision = revision || Random(10, 20);
  }
  
  /**
   * Set the Firefox browser version.
   *
   * @function setFirefox
   * @param {(number|string)} val - Value.
   */
  setFirefox(val) {
    this.firefox = val.toString();
    return this;
  }
  
  /**
   * Set the Gecko version.
   *
   * @function setGecko
   * @param {(number|string)} val - Value.
   */
  setGecko(val) {
    this.gecko = val.toString();
    return this;
  }
  
  /**
   * Set the Revision version.
   *
   * @function setRevision
   * @param {(number|string)} val - Value.
   */
  setRevision(val) {
    this.revision = val.toString();
    return this;
  }
  
  /**
   * Get the Firefox browser version.
   *
   * @function getFirefox
   * @returns {string} Value.
   */
  getFirefox() {
    return this.firefox.toString();
  }
  
  /**
   * Get the Gecko version.
   *
   * @function getGecko
   * @returns {string} Value.
   */
  getGecko() {
    return this.gecko.toString();
  }
  
  /**
   * Get the Revision version.
   *
   * @function getRevision
   * @returns {string} Value.
   */
  getRevision() {
    return this.revision.toString();
  }
  
  _addons() {
    return `Gecko/${this.gecko} Firefox/${this.firefox}`;
  }
  _init() {
    this.version = null;
    this.model = null;
    this.safari = null;
    this.chrome = null;
    this.webkit = null;
    return `(Android ${this.android}; Mobile; rv:${this.revision}.0)`;
  }
}

/**
 * Generate an Android-based Opera user agent.
 * 
 * @function Opera
 * @example
 * "Opera/351.116.504 (Android; Opera Mini/587.600; U; fr) Presto/189.140.236 Version/3"
 */
AgentRotator.browsers.Opera = class extends Agent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "browsers",
    type: "opera"
  }
  constants = {
    /**
     * ISO639-1 languages.
     * @type {Array.<string>}
     */
    languages: [
      "en", // United States of America
      "es", // Spain
      "fr", // France
      "de", // Germany
      "it", // Italy
      "pt", // Portuguese
      "ru", // Russia
      "zh", // Chinese (Simplified)
      "ja", // Japan
      "ko" // South Korea
    ]
  }
  constructor(config={}) {
    super(config);
    const { opera, presto, language, operaVersion } = config;
    this.opera = opera || CreateVersion();
    this.operaVersion = operaVersion || CreateVersion();
    this.presto = presto || CreateVersion();
    this.language = language || RandomChoice(this.constants.languages);
  }
  
  /**
   * Set the Opera model.
   *
   * @function setOpera
   * @param {(number|string)} val - Value.
   */
  setOpera(val) {
    this.opera = val.toString();
    return this;
  }
  
  /**
   * Set the Opera browser version.
   *
   * @function setOperaVersion
   * @param {(number|string)} val - Value.
   */
  setOperaVersion(val) {
    this.operaVersion = val.toString();
    return this;
  }
  
  /**
   * Set the Presto version.
   *
   * @function setPresto
   * @param {(number|string)} val - Value.
   */
  setPresto(val) {
    this.presto = val.toString();
    return this;
  }
  
  /**
   * Set the ISO639-1 language.
   *
   * @function setLanguage
   * @param {(number|string)} val - Value.
   */
  setLanguage(val) {
    this.language = val.toString();
    return this;
  }
  
  /**
   * Get the Opera model.
   *
   * @function getOpera
   * @returns {string} Value.
   */
  getOpera() {
    return this.opera.toString();
  }
  
  /**
   * Get the Opera browser version.
   *
   * @function getOperaVersion
   * @returns {string} Value.
   */
  getOperaVersion() {
    return this.operaVersion.toString();
  }
  
  /**
   * Get the Presto version.
   *
   * @function getPresto
   * @returns {string} Value.
   */
  getPresto() {
    return this.presto.toString();
  }
  
  /**
   * Get the ISO639-1 language.
   *
   * @function getLanguage
   * @returns {string} Value.
   */
  getLanguage() {
    return this.language.toString();
  }
  
  _addons() {
    // We need to place the
    // version product at the back
    // because it will appear on the
    // front due to the ordered
    // labeling.
    return `(Android; Opera Mini/${this.operaVersion}; U; ${this.language}) Presto/${this.presto} Version/${this._version}`;
  }
  _init() {
    this.mozilla = null;
    this.safari = null;
    this.chrome = null;
    this.webkit = null;
    
    // We need to move the version
    // to hide the version product
    this._version = this.version;
    this.version = null;
    
    // We need to change the Mozilla
    // to Opera. However,
    // since _addons are executed after _init,
    // we need to use _init as the _addons.
    // And vice versa, we need to use
    // _addons as _init.
    return `Opera/${this.opera}`;
  }
}

// ========== OTHERS ========== //

/**
 * Generate an Apple Watch user agent.
 * 
 * @function AppleWatch
 * @example
 * "Mozilla/5.0 (Apple Watch 3; CPU Apple Watch WatchOS like Mac OS X; WatchApp)"
 */
AgentRotator.others.AppleWatch = class extends Agent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "others",
    type: "apple-watch"
  }
  constructor(config={}) {
    super(config);
    const { version } = config;
    this.version = version || Random(3, 5);
  }
  _init() {
    // We need to move the version
    // to hide the version product
    const _version = this.version;
    this.version = null;
    
    this.safari = null;
    this.chrome = null;
    this.webkit = null;
    return `(Apple Watch ${_version}; CPU Apple Watch WatchOS like Mac OS X; WatchApp)`;
  }
}

/**
 * Generate an Apple TV user agent.
 * 
 * @function AppleTV
 * @example
 * "Mozilla/4.0 (AppleTV3; CPU OS 14_0 like Mac OS X; ja-JP)"
 */
AgentRotator.others.AppleTV = class extends IOSAgent {
  /**
   * The information about the user agent.
   * @type {Object}
   */
  info = {
    category: "others",
    type: "apple-tv"
  }
  constants = {
    /**
     * IETF BCP 47 languages.
     * @type {Array.<string>}
     */
    languages: [
      "en-US", // English (United States)
      "en-GB", // English (United Kingdom)
      "es-ES", // Spanish (Spain)
      "es-MX", // Spanish (Mexico)
      "fr-FR", // French (France)
      "fr-CA", // French (Canada)
      "de-DE", // German (Germany)
      "zh-CN", // Chinese (Simplified, China)
      "zh-TW", // Chinese (Traditional, Taiwan)
      "ja-JP", // Japanese (Japan)
      "ko-KR"  // Korean (South Korea)
    ]
  }
  
  constructor(config={}) {
    super(config);
    const { language } = config;
    this.language = language || RandomChoice(this.constants.languages);
  }
  
  /**
   * Set the IETF BCP 47 language.
   *
   * @function setLanguage
   * @param {(number|string)} val - Value.
   */
  setLanguage(val) {
    this.language = val.toString();
    return this;
  }
  
  /**
   * Get the IETF BCP 47 language.
   *
   * @function getLanguage
   * @returns {string} Value.
   */
  getLanguage() {
    return this.language.toString();
  }
  
  _init() {
    // We need to move the version
    // to hide the version product
    const _version = this.version;
    this.version = null;
    
    this.safari = null;
    this.webkit = null;
    this.chrome = null;
    return `(AppleTV${_version}; CPU OS ${this.os} like Mac OS X; ${this.language})`;
  }
}

// ========== TOOLS ========== //

/**
 * Randomly select a user agent
 * from the given flags. Flags are the
 * list of user agent classes.
 * 
 * @function Select
 * @param {Array} flags - List of user agent classes
 */
AgentRotator.Select = (flags=[]) => {
  // NOTE:
  // .Select returns the class
  // and not an instance of it.
  
  // Flatting the list allow
  // user to add multiple flags.
  return RandomChoice(flags.flat());
}

/**
 * All built-in user agents.
 * @type {Array}
 */
AgentRotator.FLAGS_ALL = [
  Object.values(AgentRotator.mobiles),
  Object.values(AgentRotator.desktops),
  Object.values(AgentRotator.browsers),
  Object.values(AgentRotator.tablets),
  Object.values(AgentRotator.others),
  Object.values(AgentRotator.consoles),
  Object.values(AgentRotator.bots)
].flat();

/**
 * All built-in mobile user agents.
 * @type {Array}
 */
AgentRotator.FLAGS_MOBILES = Object.values(AgentRotator.mobiles);

/**
 * All built-in desktop user agents.
 * @type {Array}
 */
AgentRotator.FLAGS_DESKTOPS = Object.values(AgentRotator.desktops);

/**
 * All built-in browser user agents.
 * @type {Array}
 */
AgentRotator.FLAGS_BROWSERS = Object.values(AgentRotator.browsers);

/**
 * All built-in browser user agents.
 * @type {Array}
 */
AgentRotator.FLAGS_TABLETS = Object.values(AgentRotator.tablets);

/**
 * All built-in other user agents.
 * @type {Array}
 */
AgentRotator.FLAGS_OTHERS = Object.values(AgentRotator.others);

/**
 * All built-in console user agents.
 * @type {Array}
 */
AgentRotator.FLAGS_CONSOLES = Object.values(AgentRotator.consoles);

/**
 * All built-in bot user agents.
 * @type {Array}
 */
AgentRotator.FLAGS_BOTS = Object.values(AgentRotator.bots);

/**
 * All user agents addons.
 * @type {Array}
 */
AgentRotator.FLAGS_ADDONS = Object.values(AgentRotator.addons);

/**
 * Update the flags for addons.
 * 
 * @function UpdateFlags
 */
AgentRotator.UpdateFlags = () => {
  AgentRotator.FLAGS_ADDONS = Object.values(AgentRotator.addons);
}

/**
 * Configuration for using Math API
 * as the randomizer.
 * @type {Array}
 */
AgentRotator.CONFIG_MATH = true;

/**
 * Configuration for using Crypto API
 * as the randomizer.
 * @type {Array}
 */
AgentRotator.CONFIG_CRYPTO = false;

/**
 * Change the randomizer configuration.
 * 
 * @function ConfigureRandomizer
 */
AgentRotator.ConfigureRandomizer = config => {
  UseMath = new Boolean(config);
}

/**
 * Export an addon.
 * 
 * @function Export
 * @param {string} name - Addon name.
 * @param {AddonAgent} implementation - Subclass of the addon.
 */
AgentRotator.Export = (name, implementation) => {
  if(name in AgentRotator.addons) {
    throw new Error(`Addon name "${name}" is already taken`);
  }
  AgentRotator.addons[name] = implementation;
}

return AgentRotator;

}));