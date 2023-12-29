<!-- TITLE/ -->

# badges

<!-- /TITLE -->

<!-- BADGES/ -->

<span class="badge-githubworkflow"><a href="https://github.com/bevry/badges/actions?query=workflow%3Abevry" title="View the status of this project's GitHub Workflow: bevry"><img src="https://github.com/bevry/badges/workflows/bevry/badge.svg" alt="Status of the GitHub Workflow: bevry" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://img.shields.io/npm/v/badges.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/badges.svg" alt="NPM downloads" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<br class="badge-separator" />
<span class="badge-discord"><a href="https://discord.gg/nQuXddV7VP" title="Join this project's community on Discord"><img src="https://img.shields.io/discord/1147436445783560193?logo=discord&amp;label=discord" alt="Discord server badge" /></a></span>
<span class="badge-twitch"><a href="https://www.twitch.tv/balupton" title="Join this project's community on Twitch"><img src="https://img.shields.io/twitch/status/balupton?logo=twitch" alt="Twitch community badge" /></a></span>

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

## Install

### [npm](https://npmjs.com "npm is a package manager for javascript")

-   Install: `npm install --save badges`
-   Import: `import * as pkg from ('badges')`
-   Require: `const pkg = require('badges')`

### [Deno](https://deno.land "Deno is a secure runtime for JavaScript and TypeScript, it is an alternative for Node.js")

``` typescript
import * as pkg from 'https://unpkg.com/badges@^4.40.0/edition-deno/index.ts'
```
### [Skypack](https://www.skypack.dev "Skypack is a JavaScript Delivery Network for modern web apps")

``` html
<script type="module">
    import * as pkg from '//cdn.skypack.dev/badges@^4.40.0'
</script>
```
### [unpkg](https://unpkg.com "unpkg is a fast, global content delivery network for everything on npm")

``` html
<script type="module">
    import * as pkg from '//unpkg.com/badges@^4.40.0'
</script>
```
### [jspm](https://jspm.io "Native ES Modules CDN")

``` html
<script type="module">
    import * as pkg from '//dev.jspm.io/badges@4.40.0'
</script>
```
### [Editions](https://editions.bevry.me "Editions are the best way to produce and consume packages you care about.")

This package is published with the following editions:
-   `badges/source/index.ts` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") source code with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `badges/edition-browsers/index.js` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled against [ES2022](https://en.wikipedia.org/wiki/ES2022 "ECMAScript 2022") for web browsers with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `badges` aliases `badges/edition-es2022/index.js`
-   `badges/edition-es2022/index.js` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled against [ES2022](https://en.wikipedia.org/wiki/ES2022 "ECMAScript 2022") for [Node.js](https://nodejs.org "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine") 10 || 12 || 14 || 16 || 18 || 20 || 21 with [Require](https://nodejs.org/dist/latest-v5.x/docs/api/modules.html "Node/CJS Modules") for modules
-   `badges/edition-es2022-esm/index.js` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled against [ES2022](https://en.wikipedia.org/wiki/ES2022 "ECMAScript 2022") for [Node.js](https://nodejs.org "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine") 12 || 14 || 16 || 18 || 20 || 21 with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `badges/edition-types/index.d.ts` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled Types with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `badges/edition-deno/index.ts` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") source code made to be compatible with [Deno](https://deno.land "Deno is a secure runtime for JavaScript and TypeScript, it is an alternative to Node.js")

<!-- /INSTALL -->

<!-- HISTORY/ -->

## History

[Discover the release history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/badges/blob/HEAD/HISTORY.md#files)

<!-- /HISTORY -->


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

## Backers

### Code

[Discover how to contribute via the `CONTRIBUTING.md` file.](https://github.com/bevry/badges/blob/HEAD/CONTRIBUTING.md#files)

#### Authors

-   [Benjamin Lupton](https://balupton.com) — Accelerating collaborative wisdom.

#### Maintainers

-   [Benjamin Lupton](https://balupton.com) — Accelerating collaborative wisdom.

#### Contributors

-   [Benjamin Lupton](https://github.com/balupton) — [view contributions](https://github.com/bevry/badges/commits?author=balupton "View the GitHub contributions of Benjamin Lupton on repository bevry/badges")
-   [Richard Walker](https://github.com/digitalsadhu) — [view contributions](https://github.com/bevry/badges/commits?author=digitalsadhu "View the GitHub contributions of Richard Walker on repository bevry/badges")

### Finances

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

#### Sponsors

-   [Andrew Nesbitt](https://nesbitt.io) — Software engineer and researcher
-   [Balsa](https://balsa.com) — We're Balsa, and we're building tools for builders.
-   [Codecov](https://codecov.io) — Empower developers with tools to improve code quality and testing.
-   [Poonacha Medappa](https://poonachamedappa.com)
-   [Rob Morris](https://github.com/Rob-Morris)
-   [Sentry](https://sentry.io) — Real-time crash reporting for your web apps, mobile apps, and games.
-   [Syntax](https://syntax.fm) — Syntax Podcast

#### Donors

-   [Andrew Nesbitt](https://nesbitt.io)
-   [Armen Mkrtchian](https://mogoni.dev)
-   [Balsa](https://balsa.com)
-   [Chad](https://opencollective.com/chad8)
-   [Codecov](https://codecov.io)
-   [dr.dimitru](https://veliovgroup.com)
-   [Elliott Ditman](https://elliottditman.com)
-   [entroniq](https://gitlab.com/entroniq)
-   [GitHub](https://github.com/about)
-   [Hunter Beast](https://cryptoquick.com)
-   [Jean-Luc Geering](https://github.com/jlgeering)
-   [Michael Duane Mooring](https://mdm.cc)
-   [Michael Harry Scepaniak](https://michaelscepaniak.com)
-   [Mohammed Shah](https://github.com/smashah)
-   [Mr. Henry](https://mrhenry.be)
-   [Nermal](https://arjunaditya.vercel.app)
-   [Pleo](https://pleo.io)
-   [Poonacha Medappa](https://poonachamedappa.com)
-   [Rob Morris](https://github.com/Rob-Morris)
-   [Robert de Forest](https://github.com/rdeforest)
-   [Sentry](https://sentry.io)
-   [ServieJS](https://github.com/serviejs)
-   [Skunk Team](https://skunk.team)
-   [Syntax](https://syntax.fm)
-   [WriterJohnBuck](https://github.com/WriterJohnBuck)

<!-- /BACKERS -->

<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

-   Copyright &copy; [Benjamin Lupton](https://balupton.com)

and licensed under:

-   [Artistic License 2.0](http://spdx.org/licenses/Artistic-2.0.html)

<!-- /LICENSE -->
