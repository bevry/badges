// Import
const {equal} = require('assert-helpers')
const joe = require('joe')
const badges = require('../')

// Tests
joe.suite('badges', function (suite, test) {
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
		'waffle',
		'---',
		// Funding Badges
		'sixtydevstips',
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
	const config = {
		npmPackageName: 'getbadges',

		saucelabsUsername: 'bevry',
		saucelabsAuthToken: '123',
		codeshipProjectUUID: '123',
		codeshipProjectID: '123',
		githubSlug: 'bevry/getbadges',
		nodeicoQueryString: {downloads: true, compact: true, height: 2},

		sixtydevstipsID: 'd2dcf439c9759e88f3ccec1cef394c10',
		patreonUsername: 'bevry',
		gratipayUsername: 'bevry',
		flattrUsername: 'balupton',
		flattrCode: '344188/balupton-on-Flattr',  // an outdated option for flattrUsername
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
		quoraRealname: 'Benjamin Arthur Lupton', // optional, will extract from username
	}
	const opts = {
		filterCategory: false,
		filterScripts: false
	}

	/* eslint quotes:0 */
	const expectations = [
		`<span class="badge-badge"><img src="image" alt="alt" /></span>`,
		`<span class="badge-badge"><a href="url" title="title"><img src="image" alt="alt" /></a></span>`,
		`<span class="badge-shields"><a href="url" title="title"><img src="https://img.shields.io/badge/left-right-yellow.svg" alt="alt" /></a></span>`,
		`<span class="badge-shields"><a href="url" title="title"><img src="https://img.shields.io/badge/left-right-red.svg" alt="alt" /></a></span>`,
		`<br class="badge-separator" />`,
		`<span class="badge-npmversion"><a href="https://npmjs.org/package/getbadges" title="View this project on NPM"><img src="https://img.shields.io/npm/v/getbadges.svg" alt="NPM version" /></a></span>`,
		`<span class="badge-npmdownloads"><a href="https://npmjs.org/package/getbadges" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/getbadges.svg" alt="NPM downloads" /></a></span>`,
		`<span class="badge-daviddm"><a href="https://david-dm.org/bevry/getbadges" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/bevry/getbadges.svg" alt="Dependency Status" /></a></span>`,
		`<span class="badge-daviddmdev"><a href="https://david-dm.org/bevry/getbadges#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/bevry/getbadges.svg" alt="Dev Dependency Status" /></a></span>`,
		`<span class="badge-nodeico"><a href="https://www.npmjs.com/package/getbadges" title="Nodei.co badge"><img src="https://nodei.co/npm/getbadges.png?downloads=true&compact=true&height=2" alt="Nodei.co badge" /></a></span>`,
		`<br class="badge-separator" />`,
		`<div class="badge-saucelabsbm"><a href="https://saucelabs.com/u/bevry" title="Check this project's browser tests on Sauce Labs"><img src="https://saucelabs.com/browser-matrix/bevry.svg?auth=123" alt="Sauce Labs Browser Matrix" /></a></div>`,
		`<span class="badge-saucelabs"><a href="https://saucelabs.com/u/bevry" title="Check this project's browser tests on Sauce Labs"><img src="https://saucelabs.com/browser-matrix/bevry.svg?auth=123" alt="Sauce Labs Browser Matrix" /></a></span>`,
		`<span class="badge-travisci"><a href="http://travis-ci.org/bevry/getbadges" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/bevry/getbadges/master.svg" alt="Travis CI Build Status" /></a></span>`,
		`<span class="badge-codeship"><a href="https://www.codeship.io/projects/123" title="Check this project's status on Codeship"><img src="https://img.shields.io/codeship/123/master.svg" alt="Codeship Status" /></a></span>`,
		`<span class="badge-coveralls"><a href="https://coveralls.io/r/bevry/getbadges" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/bevry/getbadges.svg" alt="Coverage Status" /></a></span>`,
		`<span class="badge-waffle"><a href="http://waffle.io/bevry/getbadges" title="View this project's stories on Waffle.io"><img src="https://badge.waffle.io/bevry/getbadges.png?label=ready" alt="Stories in Ready" /></a></span>`,
		`<br class="badge-separator" />`,
		`<span class="badge-sixtydevstips"><a href="https://tips.60devs.com/tip/d2dcf439c9759e88f3ccec1cef394c10" title="Donate to this project using 60devs tips"><img src="https://img.shields.io/badge/60devs-donate-yellow.svg" alt="60devs tips donate button" /></a></span>`,
		`<span class="badge-patreon"><a href="http://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>`,
		`<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>`,
		`<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>`,
		`<span class="badge-paypal"><a href="https://paypal.me/bevry" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>`,
		`<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>`,
		`<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>`,
		`<br class="badge-separator" />`,
		`<span class="badge-slackinscript"><script async defer src="https://slack.bevry.me/slackin.js"></script></span>`,
		`<span class="badge-slackin"><a href="https://slack.bevry.me" title="Join this project's slack community"><img src="https://slack.bevry.me/badge.svg" alt="Slack community badge" /></a></span>`,
		`<span class="badge-gabeacon"><a href="https://github.com/igrigorik/ga-beacon" title="Get Google Analytics for your project"><img src="https://ga-beacon.appspot.com/UA-XXXXX-XX/bevry/getbadges" alt="Google Analytics beacon image" /></a></span>`,
		`<span class="badge-googleplusone"><span class="g-plusone" data-size="medium" data-href="http://bevry.me"></span><script>(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = '//apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();</script></span>`,
		`<span class="badge-redditsubmit"><script>reddit_url="http://bevry.me"</script><script src="https://en.reddit.com/static/button/button1.js"></script></span>`,
		`<span class="badge-hackernewssubmit"><a href="https://news.ycombinator.com/submit" class="hn-button" data-url="http://bevry.me" data-count="horizontal">Vote on Hacker News</a><script>var HN=[];HN.factory=function(e){return function(){HN.push([e].concat(Array.prototype.slice.call(arguments,0)))};},HN.on=HN.factory("on"),HN.once=HN.factory("once"),HN.off=HN.factory("off"),HN.emit=HN.factory("emit"),HN.load=function(){var e="hn-button.js";if(document.getElementById(e))return;var t=document.createElement("script");t.id=e,t.src="https://hn-button.herokuapp.com/hn-button.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)},HN.load();</script></span>`,
		`<span class="badge-facebooklike"><iframe src="https://www.facebook.com/plugins/like.php?href=http%3A//bevry.me&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=21&amp;appId=123123" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:21px;" allowTransparency="true"></iframe></span>`,
		`<span class="badge-facebookfollow"><iframe src="https://www.facebook.com/plugins/follow.php?href=https%3A%2F%2Fwww.facebook.com%2Fbalupton&amp;layout=button_count&amp;show_faces=false&amp;colorscheme=light&amp;font&amp;width=450&amp;appId=123123" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height: 20px;" allowTransparency="true"></iframe></span>`,
		`<span class="badge-twittertweet"><a href="https://twitter.com/share" class="twitter-share-button" data-via="bevryme" data-related="bevryme">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></span>`,
		`<span class="badge-twitterfollow"><a href="https://twitter.com/bevryme" class="twitter-follow-button" data-show-count="false">Follow @bevryme</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></span>`,
		`<span class="badge-githubfollow"><iframe src="https://ghbtns.com/github-btn.html?user=balupton&amp;type=follow&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe></span>`,
		`<span class="badge-githubstar"><iframe src="https://ghbtns.com/github-btn.html?user=bevry&amp;repo=getbadges&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe></span>`,
		`<span class="badge-quorafollow"><span data-name="Benjamin-Lupton">Follow <a href="http://www.quora.com/Benjamin-Lupton">Benjamin Arthur Lupton</a> on <a href="http://www.quora.com">Quora</a><script src="https://www.quora.com/widgets/follow?embed_code=7N31XJs"></script></span></span>`
	]

	list.forEach(function (badgeName, index) {
		let badgeConfig = config
		if ( Array.isArray(badgeName) ) {
			badgeConfig = badgeName[1]
			badgeName = badgeName[0]
		}
		test(badgeName, function () {
			const expected = expectations[index]
			const result = badges.renderBadge(badgeName, badgeConfig)
			equal(result, expected, 'result was as expected')
		})
	})

	test('combined', function () {
		const expected = expectations.join('\n')
		const result = badges.renderBadges(list, config, opts)
		equal(result, expected, 'result was as expected')
	})

})
