<!-- TITLE/ -->

<h1>badges</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-githubworkflow"><a href="https://github.com/bevry/badges/actions?query=workflow%3Abevry" title="View the status of this project's GitHub Workflow: bevry"><img src="https://github.com/bevry/badges/workflows/bevry/badge.svg" alt="Status of the GitHub Workflow: bevry" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://img.shields.io/npm/v/badges.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/badges.svg" alt="NPM downloads" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

The definitive collection of badges for rendering

<!-- /DESCRIPTION -->


## Usage

[Complete API Documentation.](http://master.badges.bevry.surge.sh/docs/)

```javascript
import { renderBadges } from 'badges'

// Listing of badges to output
const list = [
    // Custom Badges
    ['badge', { image: 'image', alt: 'alt' }],
    ['badge', { image: 'image', alt: 'alt', url: 'url', title: 'title' }],
    [
        'shields',
        {
            left: 'left',
            right: 'right',
            alt: 'alt',
            url: 'url',
            title: 'title',
        },
    ],
    [
        'shields',
        {
            left: 'left',
            right: 'right',
            color: 'red',
            alt: 'alt',
            url: 'url',
            title: 'title',
        },
    ],
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
    'quorafollow',
]

// Configuration for the badges
const config = {
    npmPackageName: 'badges',

    saucelabsUsername: 'bevry',
    saucelabsAuthToken: '123',
    codeshipProjectUUID: '123',
    codeshipProjectID: '123',
    githubSlug: 'bevry/badges',
    nodeicoQueryString: { downloads: true, compact: true, height: 2 },

    sixtydevstipsID: 'd2dcf439c9759e88f3ccec1cef394c10',
    patreonUsername: 'bevry',
    opencollectiveUsername: 'bevry',
    gratipayUsername: 'bevry',
    flattrUsername: 'balupton',
    paypalURL: 'https://paypal.me/bevry',
    paypalButtonID: 'QB8GQPZAH84N6', // another option instead of paypalURL
    paypalUsername: 'bevry', // another option instead of paypalURL
    bitcoinURL: 'https://bevry.me/bitcoin',
    wishlistURL: 'https://bevry.me/wishlist',

    slackinURL: 'https://slack.bevry.me',
    gaTrackingID: 'UA-XXXXX-XX',
    homepage: 'https://bevry.me',
    facebookApplicationID: '123123',
    facebookUsername: 'balupton',
    twitterUsername: 'bevryme',
    githubUsername: 'balupton',
    quoraUsername: 'Benjamin-Lupton',
    quoraRealname: 'Benjamin Arthur Lupton', // optional, will extract from username
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
    filterScripts: false,
}

// Render the badges to a string
const result = renderBadges(list, config, options)

// Output the result
console.log(result)
```

If you want to render badges inside your own project's readme files, check out the meta builder [projectz](https://github.com/bevry/projectz) which uses this package for badge rendering.

[Not all the badges are showcased in the above example. Browse the Complete API Documentation instead.](http://master.badges.bevry.surge.sh/docs/)

<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save badges</code></li>
<li>Import: <code>import * as pkg from ('badges')</code></li>
<li>Require: <code>const pkg = require('badges')</code></li>
</ul>

<a href="https://www.skypack.dev" title="Skypack is a JavaScript Delivery Network for modern web apps"><h3>Skypack</h3></a>

``` html
<script type="module">
    import * as pkg from '//cdn.skypack.dev/badges@^4.28.0'
</script>
```

<a href="https://unpkg.com" title="unpkg is a fast, global content delivery network for everything on npm"><h3>unpkg</h3></a>

``` html
<script type="module">
    import * as pkg from '//unpkg.com/badges@^4.28.0'
</script>
```

<a href="https://jspm.io" title="Native ES Modules CDN"><h3>jspm</h3></a>

``` html
<script type="module">
    import * as pkg from '//dev.jspm.io/badges@4.28.0'
</script>
```

<h3><a href="https://editions.bevry.me" title="Editions are the best way to produce and consume packages you care about.">Editions</a></h3>

<p>This package is published with the following editions:</p>

<ul><li><code>badges/source/index.ts</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> source code with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li>
<li><code>badges/edition-browsers/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against ES2021 for web browsers with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li>
<li><code>badges</code> aliases <code>badges/edition-es2021/index.js</code></li>
<li><code>badges/edition-es2021/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against ES2021 for <a href="https://nodejs.org" title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine">Node.js</a> 10 || 12 || 14 || 16 || 18 || 19 with <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a> for modules</li>
<li><code>badges/edition-es2021-esm/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against ES2021 for <a href="https://nodejs.org" title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine">Node.js</a> 12 || 14 || 16 || 18 || 19 with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li></ul>

<!-- /INSTALL -->


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
1. [Also remember to export your badge](https://github.com/bevry/badges/blob/0b4aab710fc676f635e49e702960db0d151a12d5/source/badges.js#L667-L668)
1. [Add the badges test data to the test file `source/test.js`](https://github.com/bevry/badges/blob/master/source/test.js)
1. [Add the badge configuration information to this readme file `README.md`](https://github.com/bevry/badges/blob/master/README.md)
1. [Add the badge name to the `keyword` field of `package.json`](https://github.com/bevry/badges/blob/master/package.json)

These changes can be done in multiple commits or the same, it doesn't matter, as we will squash the commits on merge. We will also the changelog entry, so you don't need to do.

<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="https://github.com/balupton">Benjamin Lupton</a> — <a href="https://github.com/bevry/badges/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/badges">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="https://github.com/balupton">Benjamin Lupton</a> — <a href="https://github.com/bevry/badges/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/badges">view contributions</a></li>
<li><a href="https://github.com/digitalsadhu">Richard Walker</a> — <a href="https://github.com/bevry/badges/commits?author=digitalsadhu" title="View the GitHub contributions of Richard Walker on repository bevry/badges">view contributions</a></li></ul>

<a href="https://github.com/bevry/badges/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2015+ <a href="http://bevry.me">Bevry Pty Ltd</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/Artistic-2.0.html">Artistic License 2.0</a></li></ul>

<!-- /LICENSE -->
