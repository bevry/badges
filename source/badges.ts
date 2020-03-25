// Import
import querystring from 'querystring'

// ====================================
// Custom Badges

interface twitterOptions {
	/**  The twitter username to tweet at */
	twitterUsername: string
}

interface homepageOptions {
	/** The page url that the badge will be for */
	homepage: string
}

interface githubUsernameOptions {
	/** The github username to use */
	githubUsername: string
}

interface githubSlugOptions {
	/** The github slug of the project (e.g. bevry/badges) */
	githubSlug: string
}

interface npmOptions {
	/** The npm package name */
	npmPackageName: string
}

interface badgeOptions {
	/** The URL to the image **/
	image?: string
	/** The alt attribute for the image */
	alt?: string
	/** The URL for the link */
	url?: string
	/** The title attribute for the link */
	title?: string
}

/** Generate a HTML badge */
export function badge({ image, alt, url, title }: badgeOptions): string {
	// Check
	if (!image) throw new Error('image is missing')

	// Create
	let result = alt
		? `<img src="${image}" alt="${alt}" />`
		: `<img src="${image}" />`
	if (url) {
		result =
			(title ? `<a href="${url}" title="${title}">` : `<a href="${url}">`) +
			result +
			'</a>'
	}
	return result
}
badge.badgeCategory = 'custom'

interface shieldsOptions {
	/** The text for the left side of the badge */
	left: string
	/** The text for the right side of the badge */
	right: string
	/** The color for the badge */
	color?: string
	/** The alt attribute for the image */
	alt?: string
	/** The URL for the link */
	url?: string
	/** The title attribute for the link */
	title?: string
}
/** Shields Custom Badge */
export function shields({
	left,
	right,
	color = 'yellow',
	alt,
	url,
	title,
}: shieldsOptions): string {
	// Check
	if (!left) throw new Error('left is missing')
	if (!right) throw new Error('right is missing')

	// Create
	const image = `https://img.shields.io/badge/${left}-${right}-${color}.svg`
	return badge({ image, alt, url, title })
}
shields.badgeCategory = 'custom'

// ====================================
// Development Badges

interface npmversionOptions {
	/** The repository slug (username/reponame) */
	npmPackageName: string
}
/** NPM Version Badge */
export function npmversion({ npmPackageName }: npmversionOptions): string {
	// Check
	if (!npmPackageName) throw new Error('npmPackageName is missing')

	// Create
	const image = `https://img.shields.io/npm/v/${npmPackageName}.svg`
	const url = `https://npmjs.org/package/${npmPackageName}`
	const alt = 'NPM version'
	const title = 'View this project on NPM'
	return badge({ image, alt, url, title })
}
npmversion.badgeCategory = 'development'

/** NPM Downloads Badge */
export function npmdownloads({ npmPackageName }: npmOptions): string {
	// Check
	if (!npmPackageName) throw new Error('npmPackageName is missing')

	const image = `https://img.shields.io/npm/dm/${npmPackageName}.svg`
	const url = `https://npmjs.org/package/${npmPackageName}`
	const alt = 'NPM downloads'
	const title = 'View this project on NPM'
	return badge({ image, alt, url, title })
}
npmdownloads.badgeCategory = 'development'

/** David DM Dependencies Badge */
export function daviddm({ githubSlug }: githubSlugOptions): string {
	// Check
	if (!githubSlug) throw new Error('githubSlug is missing')

	// Create
	const image = `https://img.shields.io/david/${githubSlug}.svg`
	const url = `https://david-dm.org/${githubSlug}`
	const alt = 'Dependency Status'
	const title = "View the status of this project's dependencies on DavidDM"
	return badge({ image, alt, url, title })
}
daviddm.badgeCategory = 'development'

/** David DM Dev Dependencies Badge */
export function daviddmdev({ githubSlug }: githubSlugOptions): string {
	// Check
	if (!githubSlug) throw new Error('githubSlug is missing')

	// Create
	const image = `https://img.shields.io/david/dev/${githubSlug}.svg`
	const url = `https://david-dm.org/${githubSlug}#info=devDependencies`
	const alt = 'Dev Dependency Status'
	const title =
		"View the status of this project's development dependencies on DavidDM"
	return badge({ image, alt, url, title })
}
daviddmdev.badgeCategory = 'development'

interface nodeicoOptions extends npmOptions {
	/** See https://nodei.co for options
	defined as either a string param1=&param2=
	or an object {param1: '', param2: ''} that will be serialized to param1=&param2= etc. */
	nodeicoQueryString?: string | { [index: string]: any }
}
/** Nodei.co Badge */
export function nodeico({
	npmPackageName,
	nodeicoQueryString,
}: nodeicoOptions): string {
	// Prepare
	if (!npmPackageName) throw new Error('npmPackageName is missing')
	if (
		nodeicoQueryString &&
		typeof nodeicoQueryString !== 'string' &&
		typeof nodeicoQueryString !== 'object'
	) {
		throw new Error('nodeicoQueryString must be a string or an object')
	}

	// Return
	const url = `https://www.npmjs.com/package/${npmPackageName}`
	const alt = 'Nodei.co badge'
	const title = 'Nodei.co badge'
	let image = `https://nodei.co/npm/${npmPackageName}.png`
	const query =
		typeof nodeicoQueryString === 'object'
			? querystring.stringify(nodeicoQueryString)
			: nodeicoQueryString
	if (query) image += `?${query}`
	return badge({ image, alt, url, title })
}
nodeico.badgeCategory = 'development'

// ====================================
// Testing Badges

interface saucelabsOptions {
	/** The username of the sauncelabs account to use */
	saucelabsUsername: string
	/** Falls back to the `SAUCELABS_AUTH_TOKEN` environment variable if it is set */
	saucelabsAuthToken?: string
}
/** Sauce Labs Browser Matrix Badge */
export function saucelabsbm({
	saucelabsUsername,
	saucelabsAuthToken,
}: saucelabsOptions): string {
	// Check
	if (!saucelabsUsername) throw new Error('saucelabsUsername is missing')
	saucelabsAuthToken = saucelabsAuthToken || process.env.SAUCELABS_AUTH_TOKEN
	if (!saucelabsAuthToken) throw new Error('saucelabsAuthToken is missing')

	// Create
	const image = `https://saucelabs.com/browser-matrix/${saucelabsUsername}.svg?auth=${escape(
		saucelabsAuthToken
	)}`
	const url = `https://saucelabs.com/u/${saucelabsUsername}`
	const alt = 'Sauce Labs Browser Matrix'
	const title = "Check this project's browser tests on Sauce Labs"
	return badge({ image, alt, url, title })
}
saucelabsbm.badgeCategory = 'testing'
saucelabsbm.badgeInline = false

/** Sauce Labs Badge */
export function saucelabs({
	saucelabsUsername,
	saucelabsAuthToken,
}: saucelabsOptions): string {
	// Check
	if (!saucelabsUsername) throw new Error('saucelabsUsername is missing')
	saucelabsAuthToken = saucelabsAuthToken || process.env.SAUCELABS_AUTH_TOKEN
	if (!saucelabsAuthToken) throw new Error('saucelabsAuthToken is missing')

	// Create
	const image = `https://saucelabs.com/browser-matrix/${saucelabsUsername}.svg?auth=${escape(
		saucelabsAuthToken
	)}`
	const url = `https://saucelabs.com/u/${saucelabsUsername}`
	const alt = 'Sauce Labs Browser Matrix'
	const title = "Check this project's browser tests on Sauce Labs"
	return badge({ image, alt, url, title })
}
saucelabs.badgeCategory = 'testing'

interface travisOptions extends githubSlugOptions {
	/** The TLD to use for travis, use "com" if you have moved to travis-ci.com instead of travis-ci.org */
	travisTLD?: string
}
/** Travis CI Badge */
export function travisci({
	githubSlug,
	travisTLD = 'org',
}: travisOptions): string {
	// Check
	if (!githubSlug) throw new Error('githubSlug is missing')

	// Create
	const image = [
		'https://img.shields.io/travis',
		travisTLD === 'com' ? 'com' : '',
		githubSlug,
		'master.svg',
	]
		.filter((i) => Boolean(i))
		.join('/')
	const url = `http://travis-ci.${travisTLD}/${githubSlug}`
	const alt = 'Travis CI Build Status'
	const title = "Check this project's build status on TravisCI"
	return badge({ image, alt, url, title })
}
travisci.badgeCategory = 'testing'

interface codeshipOptions {
	/** The UUID for a specific project, which is available on the General tab in your project settings */
	codeshipProjectUUID: string
	/** The ID for a specific project, which is available via the URL for the codeship project page */
	codeshipProjectID: string
}
/** Codeship Badge */
export function codeship({
	codeshipProjectUUID,
	codeshipProjectID,
}: codeshipOptions): string {
	// Check
	if (!codeshipProjectUUID) throw new Error('codeshipProjectUUID is missing')
	if (!codeshipProjectID) throw new Error('codeshipProjectID is missing')

	// Create
	const image = `https://img.shields.io/codeship/${codeshipProjectUUID}/master.svg`
	const url = `https://www.codeship.io/projects/${codeshipProjectID}`
	const alt = 'Codeship Status'
	const title = "Check this project's status on Codeship"
	return badge({ image, alt, url, title })
}
codeship.badgeCategory = 'testing'

/** Coveralls Badge */
export function coveralls({ githubSlug }: githubSlugOptions): string {
	// Check
	if (!githubSlug) throw new Error('githubSlug is missing')

	// Create
	const image = `https://img.shields.io/coveralls/${githubSlug}.svg`
	const url = `https://coveralls.io/r/${githubSlug}`
	const alt = 'Coveralls Coverage Status'
	const title = "View this project's coverage on Coveralls"
	return badge({ image, alt, url, title })
}
coveralls.badgeCategory = 'testing'

/** Code Climate Rating Badge */
export function codeclimate({ githubSlug }: githubSlugOptions): string {
	// Check
	if (!githubSlug) throw new Error('githubSlug is missing')

	// Create
	const image = `https://img.shields.io/codeclimate/github/${githubSlug}.svg`
	const url = `https://codeclimate.com/github/${githubSlug}`
	const alt = 'Code Climate Rating'
	const title = "View this project's rating on Code Climate"
	return badge({ image, alt, url, title })
}
codeclimate.badgeCategory = 'testing'

/** BitHound Score Badge */
export function bithound({ githubSlug }: githubSlugOptions) {
	// Check
	if (!githubSlug) throw new Error('githubSlug is missing')

	// Create
	const image = `https://bithound.io/github/${githubSlug}/badges/score.svg`
	const url = `https://bithound.io/github/${githubSlug}`
	const alt = 'BitHound Score'
	const title = "View this project's score on BitHound"
	return badge({ image, alt, url, title })
}
bithound.badgeCategory = 'testing'

/** Waffle Badge */
export function waffle({ githubSlug }: githubSlugOptions) {
	// Check
	if (!githubSlug) throw new Error('githubSlug is missing')

	// Create
	const label = 'ready'
	const image = `https://badge.waffle.io/${githubSlug}.png?label=${escape(
		label
	)}`
	const url = `http://waffle.io/${githubSlug}`
	const alt = 'Stories in Ready'
	const title = "View this project's stories on Waffle.io"
	return badge({ image, alt, url, title })
}
waffle.badgeCategory = 'testing'

// ====================================
// Funding Badges

/** At least one of the properties must be provided */
interface sixtydevOptions {
	/** The 60devs username to donate to */
	sixtydevstipsID?: string
	/** The url to the 60devs donate page */
	sixtydevstipsURL?: string
}

/** 60devs Tips Badge */
export function sixtydevstips({
	sixtydevstipsID,
	sixtydevstipsURL,
}: sixtydevOptions): string {
	// Check
	if (!sixtydevstipsURL) {
		if (!sixtydevstipsID) throw new Error('sixtydevstipsID is missing')
		sixtydevstipsURL = `https://tips.60devs.com/tip/${sixtydevstipsID}`
	}

	// Create
	const image = 'https://img.shields.io/badge/60devs-donate-yellow.svg'
	const url = sixtydevstipsURL
	const alt = '60devs tips donate button'
	const title = 'Donate to this project using 60devs tips'
	return badge({ image, alt, url, title })
}
sixtydevstips.badgeCategory = 'funding'

/** At least one of the properties must be provided */
interface githubsponsorsOptions {
	/** The url to the GitHub donate page */
	githubSponsorsURL?: string
	/** The GitHub username to donate to */
	githubSponsorsUsername?: string
	/** The GitHub username fallback to donate to */
	githubUsername?: string
}
/** Github Sponsors Badge */
export function githubsponsors({
	githubSponsorsURL,
	githubSponsorsUsername,
	githubUsername,
}: githubsponsorsOptions): string {
	if (!githubSponsorsURL) {
		if (!githubSponsorsUsername && !githubUsername)
			throw new Error('githubSponsorsUsername and githubUsername are missing')
		githubSponsorsURL = `https://github.com/sponsors/${
			githubSponsorsUsername || githubUsername
		}`
	}

	// Create
	const image = 'https://img.shields.io/badge/github-donate-yellow.svg'
	const url = githubSponsorsURL
	const alt = 'GitHub Sponsors donate button'
	const title = 'Donate to this project using GitHub Sponsors'
	return badge({ image, alt, url, title })
}
githubsponsors.badgeCategory = 'funding'

/** At least one of the properties must be provided */
interface patreonOptions {
	/** The Patreon username to donate to */
	patreonUsername?: string
	/** The url to the Patreon donate page */
	patreonURL?: string
}
/** Patreon Badge */
export function patreon({
	patreonUsername,
	patreonURL,
}: patreonOptions): string {
	// Check
	if (!patreonURL) {
		if (!patreonUsername) throw new Error('patreonUsername is missing')
		patreonURL = `https://patreon.com/${patreonUsername}`
	}

	// Create
	const image = 'https://img.shields.io/badge/patreon-donate-yellow.svg'
	const url = patreonURL
	const alt = 'Patreon donate button'
	const title = 'Donate to this project using Patreon'
	return badge({ image, alt, url, title })
}
patreon.badgeCategory = 'funding'

/** At least one of the properties must be provided */
interface opencollectiveOptions {
	/** The Open Collective username to donate to */
	opencollectiveUsername?: string
	/** The url to the Open Collective donate page */
	opencollectiveURL?: string
}
/** Open Collective Badge */
export function opencollective({
	opencollectiveUsername,
	opencollectiveURL,
}: opencollectiveOptions): string {
	// Check
	if (!opencollectiveURL) {
		if (!opencollectiveUsername)
			throw new Error('opencollectiveUsername is missing')
		opencollectiveURL = `https://opencollective.com/${opencollectiveUsername}`
	}

	// Create
	const image =
		'https://img.shields.io/badge/open%20collective-donate-yellow.svg'
	const url = opencollectiveURL
	const alt = 'Open Collective donate button'
	const title = 'Donate to this project using Open Collective'
	return badge({ image, alt, url, title })
}
opencollective.badgeCategory = 'funding'

/** At least one of the properties must be provided */
interface gratipayOptions {
	/** The Gratipay username to donate to */
	gratipayUsername?: string
	/** The url to the Gratipay donate page */
	gratipayURL?: string
}
/** Gratipay Badge */
export function gratipay({
	gratipayUsername,
	gratipayURL,
}: gratipayOptions): string {
	// Check
	if (!gratipayURL) {
		if (!gratipayUsername) throw new Error('gratipayUsername is missing')
		gratipayURL = `https://gratipay.com/${gratipayUsername}`
	}

	// Create
	const image = 'https://img.shields.io/badge/gratipay-donate-yellow.svg'
	const url = gratipayURL
	const alt = 'Gratipay donate button'
	const title = 'Donate weekly to this project using Gratipay'
	return badge({ image, alt, url, title })
}
gratipay.badgeCategory = 'funding'

/** At least one of the properties must be provided */
interface flattrOptions {
	/** The Flattr code to donate to (e.g. 344188/balupton-on-Flattr) */
	flattrCode?: string
	/** The Flattr username to donate to (e.g. balupton) */
	flattrUsername?: string
	/** The url to the flattr donate page */
	flattrURL?: string
}
/** Flattr Badge */
export function flattr({
	flattrCode,
	flattrUsername,
	flattrURL,
}: flattrOptions): string {
	// Check
	if (!flattrURL) {
		if (flattrUsername) {
			flattrURL = `https://flattr.com/profile/${flattrUsername}`
		} else if (flattrCode) {
			flattrURL = `https://flattr.com/thing/${flattrCode}`
		} else {
			throw new Error('flattrUsername/flattrCode is missing')
		}
	}

	// Create
	const image = 'https://img.shields.io/badge/flattr-donate-yellow.svg'
	const url = flattrURL
	const alt = 'Flattr donate button'
	const title = 'Donate to this project using Flattr'
	return badge({ image, alt, url, title })
}
flattr.badgeCategory = 'funding'

/** At least one of the properties must be provided */
interface paypalOptions {
	/**  The url to the paypal donate page */
	paypalURL?: string
	/**  The Paypal button id */
	paypalButtonID?: string
	/**  The Paypal.me username */
	paypalUsername?: string
}

/** Paypal Badge */
export function paypal({
	paypalURL,
	paypalButtonID,
	paypalUsername,
}: paypalOptions): string {
	// Check
	if (!paypalURL) {
		if (paypalButtonID) {
			paypalURL = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=${escape(
				paypalButtonID
			)}`
		} else if (paypalUsername) {
			paypalURL = `https://paypal.me/${paypalUsername}`
		} else {
			throw new Error(
				'paypalURL, paypalButtonID, or paypalUsername is missing, at least one must exist'
			)
		}
	}

	// Create
	const image = 'https://img.shields.io/badge/paypal-donate-yellow.svg'
	const url = paypalURL
	const alt = 'PayPal donate button'
	const title = 'Donate to this project using Paypal'
	return badge({ image, alt, url, title })
}
paypal.badgeCategory = 'funding'

interface cryptoOptions {
	/** The url to the crypto donation page */
	cryptoURL: string
	/** @deprecated */
	bitcoinURL?: string
}

/** Crypto Badge */
export function crypto({ cryptoURL, bitcoinURL }: cryptoOptions): string {
	// Check
	const url = cryptoURL || bitcoinURL
	if (!url) throw new Error('cryptoURL is missing')

	// Create
	const image = 'https://img.shields.io/badge/crypto-donate-yellow.svg'
	const alt = 'crypto donate button'
	const title = 'Donate to this project using Cryptocurrency'
	return badge({ image, alt, url, title })
}
crypto.badgeCategory = 'funding'

/** @deprecated */
export function bitcoin(opts: cryptoOptions): string {
	return crypto(opts)
}
bitcoin.badgeCategory = 'funding'

interface wishlistOptions {
	/** The url to the wishlist page */
	wishlistURL: string
}
/** Wishlist Badge */
export function wishlist({ wishlistURL }: wishlistOptions): string {
	// Check
	if (!wishlistURL) throw new Error('wishlistURL is missing')

	// Create
	const image = 'https://img.shields.io/badge/wishlist-donate-yellow.svg'
	const url = wishlistURL
	const alt = 'Wishlist browse button'
	const title = 'Buy an item on our wishlist for us'
	return badge({ image, alt, url, title })
}
wishlist.badgeCategory = 'funding'

/** At least one of the properties must be provided */
interface buymeacoffeeOptions {
	/**  The Buy Me A Coffee username to donate to */
	buymeacoffeeUsername?: string
	/**  The url to the Buy Me A Coffee donate page */
	buymeacoffeeURL?: string
}

/** Buy Me A Coffee Badge */
export function buymeacoffee({
	buymeacoffeeUsername,
	buymeacoffeeURL,
}: buymeacoffeeOptions): string {
	// Check
	if (!buymeacoffeeURL) {
		if (!buymeacoffeeUsername)
			throw new Error('buymeacoffeeUsername is missing')
		buymeacoffeeURL = `https://buymeacoffee.com/${buymeacoffeeUsername}`
	}

	// Create
	const image =
		'https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg'
	const url = buymeacoffeeURL
	const alt = 'Buy Me A Coffee donate button'
	const title = 'Donate to this project using Buy Me A Coffee'
	return badge({ image, alt, url, title })
}
buymeacoffee.badgeCategory = 'funding'

/** At least one of the properties must be provided */
interface liberapayOptions {
	/** The Liberapay username to donate to */
	liberapayUsername?: string
	/** The url to the Liberapay donate page */
	liberapayURL?: string
}

/** Liberapay Badge */
export function liberapay({
	liberapayUsername,
	liberapayURL,
}: liberapayOptions): string {
	// Check
	if (!liberapayURL) {
		if (!liberapayUsername) throw new Error('liberapayUsername is missing')
		liberapayURL = `https://liberapay.com/${liberapayUsername}`
	}

	// Create
	const image = 'https://img.shields.io/badge/liberapay-donate-yellow.svg'
	const url = liberapayURL
	const alt = 'Liberapay donate button'
	const title = 'Donate to this project using Liberapay'
	return badge({ image, alt, url, title })
}
liberapay.badgeCategory = 'funding'

/** At least one of the properties must be provided */
interface thanksappOptions {
	/** The repository slug (username/reponame) */
	npmPackageName?: string
	/** The github slug that the project lives at (e.g. bevry/badges) */
	githubSlug?: string
	/** The username for the Thanks App donate page */
	thanksappUsername?: string
	/** The url to the Thanks App donate page */
	thanksappURL?: string
}

/** Thanks App Badge */
export function thanksapp({
	npmPackageName,
	githubSlug,
	thanksappUsername,
	thanksappURL,
}: thanksappOptions): string {
	// Check
	if (!thanksappURL) {
		if (thanksappUsername) {
			thanksappURL = `https://givethanks.app/u/${thanksappUsername}`
		} else if (npmPackageName) {
			thanksappURL = `https://givethanks.app/donate/npm/${npmPackageName}`
		} else if (githubSlug) {
			thanksappURL = `https://givethanks.app/donate/github/${githubSlug}`
		} else {
			throw new Error(
				'at least one of these is required: thanksappUsername, npmPackageName, githubSlug'
			)
		}
	}

	// Create
	const image = 'https://img.shields.io/badge/thanksapp-donate-yellow.svg'
	const url = thanksappURL
	const alt = 'Thanks App donate button'
	const title = 'Donate to this project using Thanks App'
	return badge({ image, alt, url, title })
}
thanksapp.badgeCategory = 'funding'

/** Boost Lab Badge */
export function boostlab({ githubSlug }: githubSlugOptions): string {
	// Check
	if (!githubSlug) throw new Error('githubSlug is missing')

	// Create
	const image = 'https://img.shields.io/badge/boostlab-donate-yellow.svg'
	const url = `https://boost-lab.app/${githubSlug}`
	const alt = 'Boost Lab donate button'
	const title = 'Donate to this project using Boost Lab'
	return badge({ image, alt, url, title })
}
boostlab.badgeCategory = 'funding'

// ====================================
// Social Badges

interface slackinOptions {
	/** The slackin url (e.g. https://slack.bevry.me) */
	slackinURL: string
}
/** Slackin Script Badge */
export function slackinscript({ slackinURL }: slackinOptions): string {
	// Check
	if (!slackinURL) throw new Error('slackinURL is missing')

	// Create
	return `<script async defer src="${slackinURL}/slackin.js"></script>`
}
slackinscript.badgeCategory = 'social'
slackinscript.badgeScript = true

/** Slackin Badge */
export function slackin({ slackinURL }: slackinOptions): string {
	// Check
	if (!slackinURL) throw new Error('slackinURL is missing')

	// Create
	const image = `${slackinURL}/badge.svg`
	const url = slackinURL
	const alt = 'Slack community badge'
	const title = "Join this project's slack community"
	return badge({ image, alt, url, title })
}
slackin.badgeCategory = 'social'

interface gabeaconOptions {
	/**  The google analytics tracing id (e.g. UA-XXXXX-XX) */
	gaTrackingID: string
	/**  The github slug that the project lives at (e.g. bevry/badges) */
	githubSlug: string
}
/**
 * Google Analytics Beacon Badge
 * https://github.com/igrigorik/ga-beacon
 */
export function gabeacon({
	gaTrackingID,
	githubSlug,
}: gabeaconOptions): string {
	// Check
	if (!gaTrackingID) throw new Error('gaTrackingID is missing')
	if (!githubSlug) throw new Error('githubSlug is missing')

	// Create
	const image = `https://ga-beacon.appspot.com/${gaTrackingID}/${githubSlug}`
	const url = 'https://github.com/igrigorik/ga-beacon'
	const alt = 'Google Analytics beacon image'
	const title = 'Get Google Analytics for your project'
	return badge({ image, alt, url, title })
}
gabeacon.badgeCategory = 'social'

/** Google Plus One Button */
export function googleplusone({ homepage }: homepageOptions): string {
	// Check
	if (!homepage) throw new Error('homepage is missing')

	// Create
	return `<span class="g-plusone" data-size="medium" data-href="${homepage}"></span><script>(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = '//apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();</script>`
}
googleplusone.badgeCategory = 'social'
googleplusone.badgeScript = true

/** Reddit Submit Button */
export function redditsubmit({ homepage }: homepageOptions): string {
	// Check
	if (!homepage) throw new Error('homepage is missing')

	// Create
	return `<script>reddit_url="${homepage}"</script><script src="https://en.reddit.com/static/button/button1.js"></script>`
}
redditsubmit.badgeCategory = 'social'
redditsubmit.badgeScript = true

/** Hacker News Submit Button */
export function hackernewssubmit({ homepage }: homepageOptions): string {
	// Check
	if (!homepage) throw new Error('homepage is missing')

	// Create
	return `<a href="https://news.ycombinator.com/submit" class="hn-button" data-url="${homepage}" data-count="horizontal">Vote on Hacker News</a><script>var HN=[];HN.factory=function(e){return function(){HN.push([e].concat(Array.prototype.slice.call(arguments,0)))};},HN.on=HN.factory("on"),HN.once=HN.factory("once"),HN.off=HN.factory("off"),HN.emit=HN.factory("emit"),HN.load=function(){var e="hn-button.js";if(document.getElementById(e))return;var t=document.createElement("script");t.id=e,t.src="https://hn-button.herokuapp.com/hn-button.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)},HN.load();</script>`
}
hackernewssubmit.badgeCategory = 'social'
hackernewssubmit.badgeScript = true

interface facebooklikeOptions extends homepageOptions {
	/** The facebook application id that the badge is for, defaults to the environment variable `FACEBOOK_APPLICATION_ID` */
	facebookApplicationID?: string
}
/** Facebook Like Button */
export function facebooklike({
	homepage,
	facebookApplicationID,
}: facebooklikeOptions): string {
	// Prepare
	if (!homepage) throw new Error('homepage is missing')
	facebookApplicationID =
		facebookApplicationID || process.env.FACEBOOK_APPLICATION_ID
	if (!facebookApplicationID)
		throw new Error('facebookApplicationID is missing')

	// Return
	return `<iframe src="https://www.facebook.com/plugins/like.php?href=${escape(
		homepage
	)}&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=21&amp;appId=${escape(
		facebookApplicationID
	)}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:21px;" allowTransparency="true"></iframe>`
}
facebooklike.badgeCategory = 'social'
facebooklike.badgeScript = true

interface facebookfollowOptions {
	/** The facebook username to follow */
	facebookUsername: string
	/** The facebook application id that the badge is for, defaults to the environment variable `FACEBOOK_APPLICATION_ID` */
	facebookApplicationID?: string
}
/** Facebook Follow Button */
export function facebookfollow({
	facebookUsername,
	facebookApplicationID,
}: facebookfollowOptions): string {
	// Prepare
	if (!facebookUsername) throw new Error('facebookUsername is missing')
	facebookApplicationID =
		facebookApplicationID || process.env.FACEBOOK_APPLICATION_ID
	if (!facebookApplicationID)
		throw new Error('facebookApplicationID is missing')

	// Return
	return `<iframe src="https://www.facebook.com/plugins/follow.php?href=https%3A%2F%2Fwww.facebook.com%2F${escape(
		facebookUsername
	)}&amp;layout=button_count&amp;show_faces=false&amp;colorscheme=light&amp;font&amp;width=450&amp;appId=${escape(
		facebookApplicationID
	)}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height: 20px;" allowTransparency="true"></iframe>`
}
facebookfollow.badgeCategory = 'social'
facebookfollow.badgeScript = true

/** Twitter Tweet Button */
export function twittertweet({ twitterUsername }: twitterOptions): string {
	// Prepare
	if (!twitterUsername) throw new Error('twitterUsername is missing')

	// Return
	return `<a href="https://twitter.com/share" class="twitter-share-button" data-via="${twitterUsername}" data-related="${twitterUsername}">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>`
}
twittertweet.badgeCategory = 'social'
twittertweet.badgeScript = true

/** Twitter Follow Button */
export function twitterfollow({ twitterUsername }: twitterOptions): string {
	// Prepare
	if (!twitterUsername) throw new Error('twitterUsername is missing')

	// Return
	return `<a href="https://twitter.com/${escape(
		twitterUsername
	)}" class="twitter-follow-button" data-show-count="false">Follow @${twitterUsername}</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>`
}
twitterfollow.badgeCategory = 'social'
twitterfollow.badgeScript = true

/** Github Follow Button */
export function githubfollow({
	githubUsername,
}: githubUsernameOptions): string {
	// Prepare
	if (!githubUsername) throw new Error('githubUsername is missing')

	// Return
	return `<iframe src="https://ghbtns.com/github-btn.html?user=${escape(
		githubUsername
	)}&amp;type=follow&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>`
}
githubfollow.badgeCategory = 'social'
githubfollow.badgeScript = true

/** GitHub Star Button */
export function githubstar({ githubSlug }: githubSlugOptions): string {
	// Prepare
	if (!githubSlug) throw new Error('githubSlug is missing')
	const split = githubSlug.split('/')
	const githubUsername = split[0]
	const githubRepository = split[1]
	if (!githubUsername || !githubRepository)
		throw new Error('githubSlug is invalid')

	// Return
	return `<iframe src="https://ghbtns.com/github-btn.html?user=${escape(
		githubUsername
	)}&amp;repo=${escape(
		githubRepository
	)}&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>`
}
githubstar.badgeCategory = 'social'
githubstar.badgeScript = true

interface quoraOptions {
	/**  The quora user to follow */
	quoraUsername: string
	/**  The quora user's name */
	quoraRealname?: string
	/**  Some code */
	quoraCode?: string
}
/** Quora Follow Button */
export function quorafollow({
	quoraUsername,
	quoraRealname,
	quoraCode,
}: quoraOptions): string {
	// Prepare
	if (!quoraUsername) throw new Error('quoraUsername is missing')
	quoraRealname = quoraRealname || quoraUsername.replace(/-/g, ' ')
	quoraCode = quoraCode || '7N31XJs'

	// Return
	return `
		<span data-name="${quoraUsername}">
			Follow <a href="http://www.quora.com/${quoraUsername}">${quoraRealname}</a> on <a href="http://www.quora.com">Quora</a>
			<script src="https://www.quora.com/widgets/follow?embed_code=${escape(
				quoraCode
			)}"></script>
		</span>`.replace(/\n\s*/g, '')
}
quorafollow.badgeCategory = 'social'
quorafollow.badgeScript = true
