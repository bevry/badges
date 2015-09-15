
<!-- TITLE/ -->

# badges

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/bevry/badges/master.svg)](http://travis-ci.org/bevry/badges "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/badges.svg)](https://npmjs.org/package/badges "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/badges.svg)](https://npmjs.org/package/badges "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/bevry/badges.svg)](https://david-dm.org/bevry/badges)
[![Dev Dependency Status](https://img.shields.io/david/dev/bevry/badges.svg)](https://david-dm.org/bevry/badges#info=devDependencies)<br/>


<!-- /BADGES -->


<!-- DESCRIPTION/ -->

The definitive collection of badges for rendering

<!-- /DESCRIPTION -->


## Usage

``` javascript
// Listing of the badges to output
const list = [
	// Custom Badges
	// Instead of using the global badge configuration, here we use an array in the format of [name, config]
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
	'---',
	// Testing Badges
	'saucelabsbm',
	'saucelabs',
	'travisci',
	'coveralls',
	'waffle',
	'---',
	// Funding Badges
	'patreon',
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
	npmPackageName: 'getbadges',

	saucelabsUsername: 'bevry',
	saucelabsAuthToken: '123',
	repoSlug: 'bevry/getbadges',

	patreonUsername: 'bevry',
	gratipayUsername: 'bevry',
	flattrCode: '344188/balupton-on-Flattr',
	paypalURL: 'https://paypal.me/bevry',
	paypalButtonID: 'QB8GQPZAH84N6',  // another option instead of paypalURL
	paypalUsername: 'bevry',  // another option instead of paypalURL
	bitcoinURL: 'https://bevry.me/bitcoin',
	wishlistURL: 'https://bevry.me/wishlist',

	slackinURL: 'https://slack.bevry.me',
	gaTrackingID: 'UA-XXXXX-XX',
	homepage: 'http://bevry.me',
	facebookApplicationId: '123123',
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
	filterCategory: false

	// Filter Scripts
	// When true, do not render any badges from the list that are scripts
	filterScripts: false
}

// Render the badges
const result = require('badges').renderBadges(list, config, options)

// Output the result
console.log(result)
```


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/badges/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/badges/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?



### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/bevry/badges/commits?author=balupton)

[Become a contributor!](https://github.com/bevry/badges/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

- Copyright &copy; 2015+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

and licensed under:

- The incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://opensource.org/licenses/mit-license.php)

<!-- /LICENSE -->


