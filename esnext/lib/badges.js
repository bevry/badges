'use strict'

// ====================================
// Custom Badges

/**
Generate a HTML badge
@private
@method badge
@param {String} config.image The URL to the image
@param {String} [config.alt] The alt attribute for the image
@param {String} [config.url] The URL for the link
@param {String} [config.title] The title attribute for the link
@return {String} the result badge
*/
function badge ({image, alt, url, title}) {
	// Check
	if ( !image )  throw new Error('image is missing')

	// Create
	let result = alt ? `<img src="${image}" alt="${alt}" />` : `<img src="${image}" />`
	if ( url ) {
		result = (title ? `<a href="${url}" title="${title}">` : `<a href="${url}">`) + result + '</a>'
	}
	return result
}
badge.badgeCategory = 'custom'

/**
Shields Custom Badge
@method shields
@param {String} config.left The text for the left side of the badge
@param {String} config.right The text for the right side of the badge
@param {String} [config.color='yellow] The color for the badge
@param {String} [config.alt] The alt attribute for the image
@param {String} [config.url] The URL for the link
@param {String} [config.title] The title attribute for the link
@return {String} the result badge
*/
function shields ({left, right, color = 'yellow', alt, url, title}) {
	// Check
	if ( !left )  throw new Error('left is missing')
	if ( !right )  throw new Error('right is missing')

	// Create
	const image = `https://img.shields.io/badge/${left}-${right}-${color}.svg`
	return badge({image, alt, url, title})
}
shields.badgeCategory = 'custom'


// ====================================
// Development Badges

/**
NPM Version Badge
@method npmversion
@param {String} config.npmPackageName The repository slug (username/reponame)
@return {String} the result badge
*/
function npmversion ({npmPackageName}) {
	// Check
	if ( !npmPackageName )  throw new Error('npmPackageName is missing')

	// Create
	const image = `https://img.shields.io/npm/v/${npmPackageName}.svg`
	const url = `https://npmjs.org/package/${npmPackageName}`
	const alt = 'NPM version'
	const title = 'View this project on NPM'
	return badge({image, alt, url, title})
}
npmversion.badgeCategory = 'development'

/**
NPM Downloads Badge
@method npmdownloads
@param {String} config.npmPackageName The repository slug (username/reponame)
@return {String} the result badge
*/
function npmdownloads ({npmPackageName}) {
	// Check
	if ( !npmPackageName )  throw new Error('npmPackageName is missing')

	const image = `https://img.shields.io/npm/dm/${npmPackageName}.svg`
	const url = `https://npmjs.org/package/${npmPackageName}`
	const alt = 'NPM downloads'
	const title = 'View this project on NPM'
	return badge({image, alt, url, title})
}
npmdownloads.badgeCategory = 'development'

/**
David DM Dependencies Badge
@method daviddm
@param {String} config.githubSlug The github slug that the project lives at (e.g. bevry/badges)
@return {String} the result badge
*/
function daviddm ({githubSlug}) {
	// Check
	if ( !githubSlug )  throw new Error('githubSlug is missing')

	// Create
	const image = `https://img.shields.io/david/${githubSlug}.svg`
	const url = `https://david-dm.org/${githubSlug}`
	const alt = 'Dependency Status'
	const title = "View the status of this project's dependencies on DavidDM"
	return badge({image, alt, url, title})
}
daviddm.badgeCategory = 'development'

/**
David DM Dev Dependencies Badge
@method daviddmdev
@param {String} config.githubSlug The github slug that the project lives at (e.g. bevry/badges)
@return {String} the result badge
*/
function daviddmdev ({githubSlug}) {
	// Check
	if ( !githubSlug )  throw new Error('githubSlug is missing')

	// Create
	const image = `https://img.shields.io/david/dev/${githubSlug}.svg`
	const url = `https://david-dm.org/${githubSlug}#info=devDependencies`
	const alt = 'Dev Dependency Status'
	const title = "View the status of this project's development dependencies on DavidDM"
	return badge({image, alt, url, title})
}
daviddmdev.badgeCategory = 'development'


// ====================================
// Testing Badges

/**
Sauce Labs Browser Matrix Badge
@method saucelabsbm
@param {String} config.githubSlug The github slug that the project lives at (e.g. bevry/badges)
@return {String} the result badge
*/
function saucelabsbm ({saucelabsUsername, saucelabsAuthToken}) {
	// Check
	if ( !saucelabsUsername )  throw new Error('saucelabsUsername is missing')
	saucelabsAuthToken = saucelabsAuthToken || process.env.SAUCELABS_AUTH_TOKEN
	if ( !saucelabsAuthToken )  throw new Error('saucelabsAuthToken is missing')

	// Create
	const image = `https://saucelabs.com/browser-matrix/${saucelabsUsername}.svg?auth=${escape(saucelabsAuthToken)}`
	const url = `https://saucelabs.com/u/${saucelabsUsername}`
	const alt = 'Sauce Labs Browser Matrix'
	const title = "Check this project's browser tests on Sauce Labs"
	return badge({image, alt, url, title})
}
saucelabsbm.badgeCategory = 'testing'
saucelabsbm.badgeInline = false

/**
Sauce Labs Badge
@method saucelabsbm
@param {String} config.saucelabsUsername The saucelabs username
@param {String} config.saucelabsAuthToken The saucelabs authorisation token
@return {String} the result badge
*/
function saucelabs ({saucelabsUsername, saucelabsAuthToken}) {
	// Check
	if ( !saucelabsUsername )  throw new Error('saucelabsUsername is missing')
	saucelabsAuthToken = saucelabsAuthToken || process.env.SAUCELABS_AUTH_TOKEN
	if ( !saucelabsAuthToken )  throw new Error('saucelabsAuthToken is missing')

	// Create
	const image = `https://saucelabs.com/browser-matrix/${saucelabsUsername}.svg?auth=${escape(saucelabsAuthToken)}`
	const url = `https://saucelabs.com/u/${saucelabsUsername}`
	const alt = 'Sauce Labs Browser Matrix'
	const title = "Check this project's browser tests on Sauce Labs"
	return badge({image, alt, url, title})
}
saucelabs.badgeCategory = 'testing'

/**
Travis CI Badge
@method travisci
@param {String} config.githubSlug The github slug that the project lives at (e.g. bevry/badges)
@return {String} the result badge
*/
function travisci ({githubSlug}) {
	// Check
	if ( !githubSlug )  throw new Error('githubSlug is missing')

	// Create
	const image = `https://img.shields.io/travis/${githubSlug}/master.svg`
	const url = `http://travis-ci.org/${githubSlug}`
	const alt = 'Travis CI Build Status'
	const title = "Check this project's build status on TravisCI"
	return badge({image, alt, url, title})
}
travisci.badgeCategory = 'testing'

/**
Codeship Badge
@method codeship
@param {String} config.codeshipProjectUUID The UUID for a specific project, which is available on the General tab in your project settings
@param {String} config.codeshipProjectID The ID for a specific project, which is available via the URL for the codeship project page
@return {String} the result badge
*/
function codeship ({codeshipProjectUUID, codeshipProjectID}) {
	// Check
	if ( !codeshipProjectUUID )  throw new Error('codeshipProjectUUID is missing')
	if ( !codeshipProjectID )  throw new Error('codeshipProjectID is missing')

	// Create
	const image = `https://img.shields.io/codeship/${codeshipProjectUUID}/master.svg`
	const url = `https://www.codeship.io/projects/${codeshipProjectID}`
	const alt = 'Codeship Status'
	const title = "Check this project's status on Codeship"
	return badge({image, alt, url, title})
}
codeship.badgeCategory = 'testing'

/**
Coveralls Badge
@method coveralls
@param {String} config.githubSlug The github slug that the project lives at (e.g. bevry/badges)
@return {String} the result badge
*/
function coveralls ({githubSlug}) {
	// Check
	if ( !githubSlug )  throw new Error('githubSlug is missing')

	// Create
	const image = `https://img.shields.io/coveralls/${githubSlug}.svg`
	const url = `https://coveralls.io/r/${githubSlug}`
	const alt = 'Coverage Status'
	const title = "View this project's coverage on Coveralls"
	return badge({image, alt, url, title})
}
coveralls.badgeCategory = 'testing'

/**
Waffle Badge
@method waffle
@param {String} config.githubSlug The github slug that the project lives at (e.g. bevry/badges)
@return {String} the result badge
*/
function waffle ({githubSlug}) {
	// Check
	if ( !githubSlug )  throw new Error('githubSlug is missing')

	// Create
	const label = 'ready'
	const image = `https://badge.waffle.io/${githubSlug}.png?label=${escape(label)}`
	const url = `http://waffle.io/${githubSlug}`
	const alt = 'Stories in Ready'
	const title = "View this project's stories on Waffle.io"
	return badge({image, alt, url, title})
}
waffle.badgeCategory = 'testing'


// ====================================
// Funding Badges

/**
60devs Tips Badge
@method patreon
@param {String} config.sixtydevsUsername The 60devs username to donate to
@param {String} config.sixtydevstipsURL The url to the 60devs donate page
@return {String} the result badge
*/
function sixtydevstips ({sixtydevstipsID, sixtydevstipsURL}) {
	// Check
	if ( !sixtydevstipsURL ) {
		if ( !sixtydevstipsID )  throw new Error('sixtydevstipsID is missing')
		sixtydevstipsURL = `https://tips.60devs.com/tip/${sixtydevstipsID}`
	}

	// Create
	const image = `https://img.shields.io/badge/60devs-donate-yellow.svg`
	const url = sixtydevstipsURL
	const alt = '60devs tips donate button'
	const title = 'Donate to this project using 60devs tips'
	return badge({image, alt, url, title})
}
sixtydevstips.badgeCategory = 'funding'

/**
Patreon Badge
@method patreon
@param {String} config.patreonUsername The patreon username to donate to
@param {String} config.patreonURL The url to the patreon donate page
@return {String} the result badge
*/
function patreon ({patreonUsername, patreonURL}) {
	// Check
	if ( !patreonURL ) {
		if ( !patreonUsername )  throw new Error('patreonUsername is missing')
		patreonURL = `http://patreon.com/${patreonUsername}`
	}

	// Create
	const image = `https://img.shields.io/badge/patreon-donate-yellow.svg`
	const url = patreonURL
	const alt = 'Patreon donate button'
	const title = 'Donate to this project using Patreon'
	return badge({image, alt, url, title})
}
patreon.badgeCategory = 'funding'

/**
Gratipay Badge
@method gratipay
@param {String} config.gratipayUsername The gratipay username to donate to
@param {String} config.gratipayURL The url to the gratipay donate page
@return {String} the result badge
*/
function gratipay ({gratipayUsername, gratipayURL}) {
	// Check
	if ( !gratipayURL ) {
		if ( !gratipayUsername )  throw new Error('gratipayUsername is missing')
		gratipayURL = `https://www.gratipay.com/${gratipayUsername}`
	}

	// Create
	const image = `https://img.shields.io/badge/gratipay-donate-yellow.svg`
	const url = gratipayURL
	const alt = 'Gratipay donate button'
	const title = 'Donate weekly to this project using Gratipay'
	return badge({image, alt, url, title})
}
gratipay.badgeCategory = 'funding'

/**
Flattr Badge
@method flattr
@param {String} config.flattrCode The flattr code to donate to (e.g. 344188/balupton-on-Flattr)
@param {String} config.flattrUsername The flattr username to donate to (e.g. balupton)
@param {String} config.flattrURL The url to the flattr donate page
@return {String} the result badge
*/
function flattr ({flattrCode, flattrUsername, flattrURL}) {
	// Check
	if ( !flattrURL ) {
		if ( flattrUsername ) {
			flattrURL = `https://flattr.com/profile/${flattrUsername}`
		}
		else if ( flattrCode ) {
			flattrURL = `https://flattr.com/thing/${flattrCode}`
		}
		else {
			throw new Error('flattrUsername/flattrCode is missing')
		}
	}

	// Create
	const image = 'https://img.shields.io/badge/flattr-donate-yellow.svg'
	const url = flattrURL
	const alt = 'Flattr donate button'
	const title = 'Donate to this project using Flattr'
	return badge({image, alt, url, title})
}
flattr.badgeCategory = 'funding'

/**
Paypal Badge
@method paypal
@param {String} config.paypalURL The url to the paypal donate page
@param {String} config.paypalButtonID The paypal button id
@param {String} config.paypalUsername The paypal.me username
@return {String} the result badge
*/
function paypal ({paypalURL, paypalButtonID, paypalUsername}) {
	// Check
	if ( !paypalURL ) {
		if ( paypalButtonID ) {
			paypalURL = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=${escape(paypalButtonID)}`
		}
		else if ( paypalUsername ) {
			paypalURL = `https://paypal.me/${paypalUsername}`
		}
		else {
			throw new Error('paypalURL, paypalButtonID, or paypalUsername is missing, at least one must exist')
		}
	}

	// Create
	const image = `https://img.shields.io/badge/paypal-donate-yellow.svg`
	const url = paypalURL
	const alt = 'PayPal donate button'
	const title = 'Donate to this project using Paypal'
	return badge({image, alt, url, title})
}
paypal.badgeCategory = 'funding'

/**
Bitcoin Badge
@method bitcoin
@param {String} config.bitcoinURL The url to the bitcoin donation page
@return {String} the result badge
*/
function bitcoin ({bitcoinURL}) {
	// Check
	if ( !bitcoinURL )  throw new Error('bitcoinURL is missing')

	// Create
	const image = `https://img.shields.io/badge/bitcoin-donate-yellow.svg`
	const url = bitcoinURL
	const alt = 'Bitcoin donate button'
	const title = 'Donate once-off to this project using Bitcoin'
	return badge({image, alt, url, title})
}
bitcoin.badgeCategory = 'funding'

/**
Wishlist Badge
@method wishlist
@param {String} config.wishlistURL The url to the wishlist page
@return {String} the result badge
*/
function wishlist ({wishlistURL}) {
	// Check
	if ( !wishlistURL )  throw new Error('wishlistURL is missing')

	// Create
	const image = `https://img.shields.io/badge/wishlist-donate-yellow.svg`
	const url = wishlistURL
	const alt = 'Wishlist browse button'
	const title = 'Buy an item on our wishlist for us'
	return badge({image, alt, url, title})
}
wishlist.badgeCategory = 'funding'


// ====================================
// Social Badges

/**
Slackin Script Badge
@method slackinscript
@param {String} config.slackinURL The slackin url (e.g. https://slack.bevry.me)
@return {String} the result badge
*/
function slackinscript ({slackinURL}) {
	// Check
	if ( !slackinURL )  throw new Error('slackinURL is missing')

	// Create
	return `<script async defer src="${slackinURL}/slackin.js"></script>`
}
slackinscript.badgeCategory = 'social'
slackinscript.badgeScript = true

/**
Slackin Badge
@method slackin
@param {String} config.slackinURL The slackin url (e.g. https://slack.bevry.me)
@return {String} the result badge
*/
function slackin ({slackinURL}) {
	// Check
	if ( !slackinURL )  throw new Error('slackinURL is missing')

	// Create
	const image = `${slackinURL}/badge.svg`
	const url = slackinURL
	const alt = 'Slack community badge'
	const title = 'Join this project\'s slack community'
	return badge({image, alt, url, title})
}
slackin.badgeCategory = 'social'

/**
Google Analytics Beacon Badge
https://github.com/igrigorik/ga-beacon
@method gabeacon
@param {String} config.gaTrackingID The google analytics tracing id (e.g. UA-XXXXX-XX)
@param {String} config.githubSlug The github slug that the project lives at (e.g. bevry/badges)
@return {String} the result badge
*/
function gabeacon ({gaTrackingID, githubSlug}) {
	// Check
	if ( !gaTrackingID )  throw new Error('gaTrackingID is missing')
	if ( !githubSlug )  throw new Error('githubSlug is missing')

	// Create
	const image = `https://ga-beacon.appspot.com/${gaTrackingID}/${githubSlug}`
	const url = 'https://github.com/igrigorik/ga-beacon'
	const alt = 'Google Analytics beacon image'
	const title = 'Get Google Analytics for your project'
	return badge({image, alt, url, title})
}
gabeacon.badgeCategory = 'social'

/**
Google Plus One Button
@method googleplusone
@param {String} config.homepage The page url that the badge will be for
@return {String} the result badge
*/
function googleplusone ({homepage}) {
	// Check
	if ( !homepage )  throw new Error('homepage is missing')

	// Create
	return `<span class="g-plusone" data-size="medium" data-href="${homepage}"></span><script>(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = '//apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();</script>`
}
googleplusone.badgeCategory = 'social'
googleplusone.badgeScript = true

/**
Reddit Submit Button
@method redditsubmit
@param {String} config.homepage The page url that the badge will be for
@return {String} the result badge
*/
function redditsubmit ({homepage}) {
	// Check
	if ( !homepage )  throw new Error('homepage is missing')

	// Create
	return `<script>reddit_url="${homepage}"</script><script src="https://en.reddit.com/static/button/button1.js"></script>`
}
redditsubmit.badgeCategory = 'social'
redditsubmit.badgeScript = true

/**
Hacker News Submit Button
@method hackernewssubmit
@param {String} config.homepage The page url that the badge will be for
@return {String} the result badge
*/
function hackernewssubmit ({homepage}) {
	// Check
	if ( !homepage )  throw new Error('homepage is missing')

	// Create
	return `<a href="https://news.ycombinator.com/submit" class="hn-button" data-url="${homepage}" data-count="horizontal">Vote on Hacker News</a><script>var HN=[];HN.factory=function(e){return function(){HN.push([e].concat(Array.prototype.slice.call(arguments,0)))};},HN.on=HN.factory("on"),HN.once=HN.factory("once"),HN.off=HN.factory("off"),HN.emit=HN.factory("emit"),HN.load=function(){var e="hn-button.js";if(document.getElementById(e))return;var t=document.createElement("script");t.id=e,t.src="https://hn-button.herokuapp.com/hn-button.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)},HN.load();</script>`
}
hackernewssubmit.badgeCategory = 'social'
hackernewssubmit.badgeScript = true

/**
Facebook Like Button
@method facebooklike
@param {String} config.homepage The page url that the badge will be for
@param {String} config.facebookApplicationID The facebook application id that the badge is for
@return {String} the result badge
*/
function facebooklike ({homepage, facebookApplicationID}) {
	// Prepare
	if ( !homepage )  throw new Error('homepage is missing')
	facebookApplicationID = facebookApplicationID || process.env.FACEBOOK_APPLICATION_ID
	if ( !facebookApplicationID )  throw new Error('facebookApplicationID is missing')

	// Return
	return `<iframe src="https://www.facebook.com/plugins/like.php?href=${escape(homepage)}&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=21&amp;appId=${escape(facebookApplicationID)}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:21px;" allowTransparency="true"></iframe>`
}
facebooklike.badgeCategory = 'social'
facebooklike.badgeScript = true

/**
Facebook Follow Button
@method facebookfollow
@param {String} config.facebookUsername The facebook username to follow
@param {String} config.facebookApplicationID The facebook application id that the badge is for
@return {String} the result badge
*/
function facebookfollow ({facebookUsername, facebookApplicationID}) {
	// Prepare
	if ( !facebookUsername )  throw new Error('facebookUsername is missing')
	facebookApplicationID = facebookApplicationID || process.env.FACEBOOK_APPLICATION_ID
	if ( !facebookApplicationID )  throw new Error('facebookApplicationID is missing')

	// Return
	return `<iframe src="https://www.facebook.com/plugins/follow.php?href=https%3A%2F%2Fwww.facebook.com%2F${escape(facebookUsername)}&amp;layout=button_count&amp;show_faces=false&amp;colorscheme=light&amp;font&amp;width=450&amp;appId=${escape(facebookApplicationID)}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height: 20px;" allowTransparency="true"></iframe>`
}
facebookfollow.badgeCategory = 'social'
facebookfollow.badgeScript = true

/**
Twitter Tweet Button
@method twittertweet
@param {String} config.twitterUsername The twitter username to tweet at
@return {String} the result badge
*/
function twittertweet ({twitterUsername}) {
	// Prepare
	if ( !twitterUsername )  throw new Error('twitterUsername is missing')

	// Return
	return `<a href="https://twitter.com/share" class="twitter-share-button" data-via="${twitterUsername}" data-related="${twitterUsername}">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>`
}
twittertweet.badgeCategory = 'social'
twittertweet.badgeScript = true

/**
Twitter Follow Button
@method twitterfollow
@param {String} config.twitterUsername The twitter username to follow
@return {String} the result badge
*/
function twitterfollow ({twitterUsername}) {
	// Prepare
	if ( !twitterUsername )  throw new Error('twitterUsername is missing')

	// Return
	return `<a href="https://twitter.com/${escape(twitterUsername)}" class="twitter-follow-button" data-show-count="false">Follow @${twitterUsername}</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>`
}
twitterfollow.badgeCategory = 'social'
twitterfollow.badgeScript = true

/**
Github Follow Button
@method githubfollow
@param {String} config.githubUsername The github user to follow
@return {String} the result badge
*/
function githubfollow ({githubUsername}) {
	// Prepare
	if ( !githubUsername )  throw new Error('githubUsername is missing')

	// Return
	return `<iframe src="https://ghbtns.com/github-btn.html?user=${escape(githubUsername)}&amp;type=follow&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>`
}
githubfollow.badgeCategory = 'social'
githubfollow.badgeScript = true

/**
GitHub Star Button
@method githubstar
@param {String} config.githubSlug The github slug that the project lives at (e.g. bevry/badges)
@return {String} the result badge
*/
function githubstar ({githubSlug}) {
	// Prepare
	if ( !githubSlug )  throw new Error('githubSlug is missing')
	const split = githubSlug.split('/')
	const githubUsername = split[0]
	const githubRepository = split[1]
	if ( !githubUsername || !githubRepository )  throw new Error('githubSlug is invalid')

	// Return
	return `<iframe src="https://ghbtns.com/github-btn.html?user=${escape(githubUsername)}&amp;repo=${escape(githubRepository)}&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>`
}
githubstar.badgeCategory = 'social'
githubstar.badgeScript = true

/**
Quora Follow Button
@method quorafollow
@param {String} config.quoraUsername The quora user to follow
@param {String} [config.quoraRealname] The quora user's name
@param {String} [config.quoraCode] Some code
@return {String} the result badge
*/
function quorafollow ({quoraUsername, quoraRealname, quoraCode}) {
	// Prepare
	if ( !quoraUsername )  throw new Error('quoraUsername is missing')
	quoraRealname = quoraRealname || quoraUsername.replace(/-/g, ' ')
	quoraCode = quoraCode || '7N31XJs'

	// Return
	return `
		<span data-name="${quoraUsername}">
			Follow <a href="http://www.quora.com/${quoraUsername}">${quoraRealname}</a> on <a href="http://www.quora.com">Quora</a>
			<script src="https://www.quora.com/widgets/follow?embed_code=${escape(quoraCode)}"></script>
		</span>`.replace(/\n\s*/g, '')
}
quorafollow.badgeCategory = 'social'
quorafollow.badgeScript = true

// Export
module.exports = {
	badge,
	shields,
	npmversion,
	npmdownloads,
	daviddm,
	daviddmdev,
	saucelabsbm,
	saucelabs,
	travisci,
	codeship,
	coveralls,
	waffle,
	sixtydevstips,
	patreon,
	gratipay,
	flattr,
	paypal,
	bitcoin,
	wishlist,
	slackinscript,
	slackin,
	gabeacon,
	googleplusone,
	redditsubmit,
	hackernewssubmit,
	facebooklike,
	facebookfollow,
	twittertweet,
	twitterfollow,
	githubfollow,
	githubstar,
	quorafollow
}
