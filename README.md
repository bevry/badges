<!-- TITLE/ -->

<h1>badges</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/bevry/badges" title="Check this project's build status on TravisCI"><img src="https://badgen.net/travis/bevry/badges/master" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://badgen.net/npm/v/badges" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://badgen.net/npm/dm/badges" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/bevry/badges" title="View the status of this project's dependencies on DavidDM"><img src="https://badgen.net/david/dep/bevry/badges" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/bevry/badges#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://badgen.net/david/dev/bevry/badges" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://badgen.net/badge/patreon/donate/yellow" alt="Patreon donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://badgen.net/badge/open%20collective/donate/yellow" alt="Open Collective donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://badgen.net/badge/gratipay/donate/yellow" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://badgen.net/badge/flattr/donate/yellow" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://badgen.net/badge/paypal/donate/yellow" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://badgen.net/badge/bitcoin/donate/yellow" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://badgen.net/badge/wishlist/donate/yellow" alt="Wishlist browse button" /></a></span>
<br class="badge-separator" />
<span class="badge-slackin"><a href="https://slack.bevry.me" title="Join this project's slack community"><img src="https://slack.bevry.me/badge.svg" alt="Slack community badge" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

The definitive collection of badges for rendering

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>NPM</h3></a><ul>
<li>Install: <code>npm install --save badges</code></li>
<li>Module: <code>require('badges')</code></li></ul>

<a href="http://browserify.org" title="Browserify lets you require('modules') in the browser by bundling up all of your dependencies"><h3>Browserify</h3></a><ul>
<li>Install: <code>npm install --save badges</code></li>
<li>Module: <code>require('badges')</code></li>
<li>CDN URL: <code>//wzrd.in/bundle/badges@1.2.4</code></li></ul>

<a href="http://enderjs.com" title="Ender is a full featured package manager for your browser"><h3>Ender</h3></a><ul>
<li>Install: <code>ender add badges</code></li>
<li>Module: <code>require('badges')</code></li></ul>

<h3><a href="https://github.com/bevry/editions" title="Editions are the best way to produce and consume packages you care about.">Editions</a></h3>

<p>This package is published with the following editions:</p>

<ul><li><code>badges</code> aliases <code>badges/index.js</code> which uses <a href="https://github.com/bevry/editions" title="Editions are the best way to produce and consume packages you care about.">Editions</a> to automatically select the correct edition for the consumers environment</li>
<li><code>badges/source/index.js</code> is Source + <a href="https://babeljs.io/docs/learn-es2015/" title="ECMAScript Next">ESNext</a> + <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a></li>
<li><code>badges/es2015/index.js</code> is <a href="https://babeljs.io" title="The compiler for writing next generation JavaScript">Babel</a> Compiled + <a href="http://babeljs.io/docs/plugins/preset-es2015/" title="ECMAScript 2015">ES2015</a> + <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a></li></ul>

<p>Older environments may need <a href="https://babeljs.io/docs/usage/polyfill/" title="A polyfill that emulates missing ECMAScript environment features">Babel's Polyfill</a> or something similar.</p>

<!-- /INSTALL -->


## Usage

``` javascript
// Listing of the badges to output
const list = [
  // Custom Badges
  ['badge', {image: 'image', alt: 'alt'}],
  ['badge', {image: 'image', alt: 'alt', url: 'url', title: 'title'}],
  ['shields', {left: 'left', right: 'right', alt: 'alt', url: 'url', title: 'title'}],
  ['shields', {left: 'left', right: 'right', color: 'red', alt: 'alt', url: 'url', title: 'title'}],
  '---',
  // Development Badges
  'npmversion',
  'npmdownloads',
  'daviddm',
  'daviddmdev',
  'nodeico',
  '---',
  // Testing Badges
  'saucelabsbm',
  'saucelabs',
  'travisci',
  'codeship',
  'coveralls',
  'codeclimate',
  'bithound',
  'waffle',
  '---',
  // Funding Badges
  'sixtydevstips',
  'patreon',
  'opencollective',
  'gratipay',
  'flattr',
  'paypal',
  'bitcoin',
  'wishlist',
  '---',
  // Social Badges
  'slackinscript',
  'slackin',
  'gabeacon',
  'googleplusone',
  'redditsubmit',
  'hackernewssubmit',
  'facebooklike',
  'facebookfollow',
  'twittertweet',
  'twitterfollow',
  'githubfollow',
  'githubstar',
  'quorafollow'
]

// Configuration for the badges
const config = {
  npmPackageName: 'badges',

  saucelabsUsername: 'bevry',
  saucelabsAuthToken: '123',
  codeshipProjectUUID: '123',
  codeshipProjectID: '123',
  githubSlug: 'bevry/badges',
  nodeicoQueryString: {downloads: true, compact: true, height: 2},

  sixtydevstipsID: 'd2dcf439c9759e88f3ccec1cef394c10',
  patreonUsername: 'bevry',
  opencollectiveUsername: 'bevry',
  gratipayUsername: 'bevry',
  flattrUsername: 'balupton',
  paypalURL: 'https://paypal.me/bevry',
  paypalButtonID: 'QB8GQPZAH84N6',  // another option instead of paypalURL
  paypalUsername: 'bevry',  // another option instead of paypalURL
  bitcoinURL: 'https://bevry.me/bitcoin',
  wishlistURL: 'https://bevry.me/wishlist',

  slackinURL: 'https://slack.bevry.me',
  gaTrackingID: 'UA-XXXXX-XX',
  homepage: 'http://bevry.me',
  facebookApplicationID: '123123',
  facebookUsername: 'balupton',
  twitterUsername: 'bevryme',
  githubUsername: 'balupton',
  quoraUsername: 'Benjamin-Lupton',
  quoraRealname: 'Benjamin Arthur Lupton' // optional, will extract from username
}

// Options for rendering the badges
const options = {
	// Filter Category
	// When set to a string, will only render badges from the list that of the specified category
	// Values can be 'development', 'testing', 'funding', or 'social'
	// E.g. to render only funding badges, set to 'funding'
	filterCategory: false,

	// Filter Scripts
	// When true, do not render any badges from the list that are scripts
	filterScripts: false
}

// Render the badges to a string
const result = require('badges').renderBadges(list, config, options)

// Output the result
console.log(result)
```

If you want to render badges inside your own project's readme files, check out the meta builder [projectz](https://github.com/bevry/projectz) which uses this package for badge rendering.

[Complete badge configuration available to you can be found here.](http://master.badges.bevry.surge.sh/docs/)


<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/bevry/badges/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/bevry/badges/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


### Adding a badge

If you there is a badge that you believe will be common enough for others to benefit from, send in a pull request. Each pull request should:

1. [Add the badge rendering code to the appropriate category section inside `source/badges.js`](https://github.com/bevry/badges/blob/master/source/badges.js)
  1. If your badge requires a script to run, it should have `badgeScript = true` - see other badges for an example
  2. [Also remember to export your badge](https://github.com/bevry/badges/blob/0b4aab710fc676f635e49e702960db0d151a12d5/source/badges.js#L667-L668)
2. [Add the badges test data to the test file `source/test.js`](https://github.com/bevry/badges/blob/master/source/test.js)
3. [Add the badge configuration information to this readme file `README.md`](https://github.com/bevry/badges/blob/master/README.md)
4. [Add the badge name to the `keyword` field of `package.json`](https://github.com/bevry/badges/blob/master/package.json)

These changes can be done in multiple commits or the same, it doesn't matter, as we will squash the commits on merge. We will also the changelog entry, so you don't need to do.


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/badges/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/badges">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://badgen.net/badge/patreon/donate/yellow" alt="Patreon donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://badgen.net/badge/open%20collective/donate/yellow" alt="Open Collective donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://badgen.net/badge/gratipay/donate/yellow" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://badgen.net/badge/flattr/donate/yellow" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://badgen.net/badge/paypal/donate/yellow" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://badgen.net/badge/bitcoin/donate/yellow" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://badgen.net/badge/wishlist/donate/yellow" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/badges/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/badges">view contributions</a></li>
<li><a href="http://lovebeer.nz/">Richard Walker</a> — <a href="https://github.com/bevry/badges/commits?author=digitalsadhu" title="View the GitHub contributions of Richard Walker on repository bevry/badges">view contributions</a></li></ul>

<a href="https://github.com/bevry/badges/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2015+ <a href="http://bevry.me">Bevry Pty Ltd</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
