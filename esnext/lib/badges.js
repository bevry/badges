# The badges were taken from:
# https://github.com/bevry/projectz/blob/master/src/lib/badge-util.coffee
#
# And from:
# https://github.com/docpad/docpad-plugin-services/blob/master/src/services.plugin.coffee#L103-L343

###
@TODO
1. Ensure that opts are consistent for all badges
	1. Badges that receive a "services" argument were taken from the docpad-plugin-services, and should be updated for the opts format
2. Convert markdown output to HTML input (this has been done for the travis badge)
3. Document all options and badges, inside the get badges example
4. Write tests for all badges
5. Write README documentation
###

###
Get Badges

require('badges')({
	username: 'bevry'
	name: 'docpad'
	repo: 'docpad/bevry'
	badges:
		travis: true  # the branch to apply, if `true` defaults to `master
		npm: true
		npmdownloads: false
		waffleio: true  # the filter to apply, if `true` defaults to `ready`
})
###
badges = module.exports = (opts) ->
	result = []
	
	unless opts.badges
		opts.badges = {}
		for own key,value of badges
			opts.badges[key] = true
	
	for own key,value of opts.badges
		if value
			badge = """
				<!-- #{key}/ -->
				#{badges[key]?(opts)}
				<!-- /#{key} -->
				"""
			result.push(badge)
	
	result = result.join('\n')
	return result


# ====================================
# Development Badges

# Get Travis CI Badge
module.exports.travis = (opts={}) ->
	# Check
	if !opts.repo
		return ''
	else
		branch = opts.badges.travis
		branch = 'master'  if branch is true
		image = "https://img.shields.io/travis/#{opts.repo}/#{branch}.svg"
		url = "http://travis-ci.org/#{opts.repo}"

	# Return
	return """
		<a href="#{url}" title="Check this project's build status on TravisCI"><img src="#{image}" alt="Build Status"></a>
		"""

# Get NPM Version Badge
module.exports.npm = (opts={}) ->
	# Check
	if !opts.name
		return ''
	else
		image = "https://img.shields.io/npm/v/#{opts.name}.svg"
		url = "https://npmjs.org/package/#{opts.name}"

	# Return
	return """
		[![NPM version](#{image})](#{url} "View this project on NPM")
		"""

# Get NPM Downloads Badge
module.exports.npmdownloads = (opts={}) ->
	# Check
	if !opts.name
		return ''
	else
		image = "https://img.shields.io/npm/dm/#{opts.name}.svg"
		url = "https://npmjs.org/package/#{opts.name}"

	# Return
	return """
		[![NPM downloads](#{image})](#{url} "View this project on NPM")
		"""

# Get Waffle.io Badge
module.exports.waffleio = (opts={}) ->
	# Check
	if !opts.repo
		return ''
	else
		label = opts.badges.waffleio
		label = 'ready'  if label is true
		image = "https://badge.waffle.io/#{opts.repo}.png?label=#{label}"
		url = "http://waffle.io/#{opts.repo}"

	# Return
	return """
		[![Stories in Ready](#{image})](#{url})
		"""

# Get Coveralls Badge
module.exports.coveralls = (opts={}) ->
	# Check
	if !opts.repo
		return ''

	image = "https://img.shields.io/coveralls/#{opts.repo}.svg"
	url = "https://coveralls.io/r/#{opts.repo}"
	label = opts.badges.coveralls
	label = 'Coverage Status'  if label is true

	# Return
	return """
		[![#{label}](#{image})](#{url})
		"""

# Get David DM Dependencies Badge
# @NOTE: Don't try and simplify this, it is already as simply as it can get
module.exports.david = (opts={}) ->
	# Check
	if !opts.badges.david
		return ''

	# Custom Value
	else if opts.badges.daviddev isnt true
		repo = opts.badges.david

	# Repo Value
	else if opts.repo
		repo = opts.repo

	# No Value
	else
		return ''

	# Assign
	image = "https://img.shields.io/david/#{repo}.svg"
	url = "https://david-dm.org/#{repo}"

	# Return
	return """
		[![Dependency Status](#{image})](#{url})
		"""

# Get David DM Dev Dependencies Badge
# @NOTE: Don't try and simplify this, it is already as simply as it can get
module.exports.daviddev = (opts={}) ->
	# Check
	if !opts.badges.daviddev
		return ''

	# Custom Value
	else if opts.badges.daviddev isnt true
		repo = opts.badges.daviddev

	# Repo Value
	else if opts.repo
		repo = opts.repo

	# No Value
	else
		return ''

	# Assign
	image = "https://img.shields.io/david/dev/#{repo}.svg"
	url = "https://david-dm.org/#{repo}#info=devDependencies"

	# Return
	return """
		[![Dev Dependency Status](#{image})](#{url})
		"""

# Get Sauce Labs Browser Matrix
module.exports.saucebm = (opts={}) ->
	# Check
	if !opts.badges.saucebm  # < @TODO things like this check are probably not necessary anymore, as they are now handled by our getBadges function
		return ''
	else
		image = "https://saucelabs.com/browser-matrix/#{opts.badges.saucebm}.svg"
		url = "https://saucelabs.com/u/#{opts.badges.saucebm}.svg"
	# Return
	return """
		[![Sauce Labs Browser Matrix](#{image})](#{url} "Check this project's browser tests on Sauce Labs")
		"""


# ====================================
# Donation Badges

# Get Gittip Badge
module.exports.gratipay = (opts={}) ->
	# Prepare
	name = (opts.badges.gratipay or opts.badges.gittip)

	# Check
	if !name
		return ''
	else
		image = "https://img.shields.io/gratipay/#{name}.svg"
		url = "https://www.gratipay.com/#{name}/"

	# Return
	return """
		[![Gratipay donate button](#{image})](#{url} "Donate weekly to this project using Gratipay")
		"""

# Get Flattr Badge
module.exports.flattr = (opts={}) ->
	# Check
	if !opts.badges.flattr
		return ''
	else
		image = "https://img.shields.io/badge/flattr-donate-yellow.svg"
		url = "http://flattr.com/thing/#{opts.badges.flattr}"

	# Return
	return """
		[![Flattr donate button](#{image})](#{url} "Donate monthly to this project using Flattr")
		"""

# Get Paypal Badge
module.exports.paypal = (opts={}) ->
	# Check
	if !opts.badges.paypal
		return ''
	else
		image = "https://img.shields.io/badge/paypal-donate-yellow.svg"
		url = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=#{opts.badges.paypal}"

	# Return
	return """
		[![PayPayl donate button](#{image})](#{url} "Donate once-off to this project using Paypal")
		"""

# Get Bitcoin Badge
module.exports.bitcoin = (opts={}) ->
	# Check
	if !opts.badges.bitcoin
		return ''
	else
		image = "https://img.shields.io/badge/bitcoin-donate-yellow.svg"
		url = opts.badges.bitcoin

	# Return
	return """
		[![BitCoin donate button](#{image})](#{url} "Donate once-off to this project using BitCoin")
		"""

# Get Wishlist
module.exports.wishlist = (opts={}) ->
	# Check
	if !opts.badges.wishlist
		return ''
	else
		image = "https://img.shields.io/badge/wishlist-donate-yellow.svg"
		url = opts.badges.wishlist

	# Return
	return """
		[![Wishlist browse button](#{image})](#{url} "Buy an item on our wishlist for us")
		"""


# ====================================
# Social Badges
# These need to be updated for the above style

# Get Google Plus One Button
module.exports.googleplusone = (services) ->
	# Prepare
	services ?= @getServices()
	return ''  if services.googlePlusOneButton is false
	pageUrl = @getPageUrl()

	# Return
	return """
		<div class="google-plus-one-button service-button">
			<div class="g-plusone" data-size="medium" data-href="#{pageUrl}"></div>
			<script>
				(function() {
					var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
					po.src = 'https://apis.google.com/js/plusone.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
				})();
			</script>
		</div>
		"""

# Get Reddit Submit Button
module.exports.redditsubmit = (services) ->
	# Prepare
	services ?= @getServices()
	return ''  if services.redditSubmitButton is false
	pageUrl = @getPageUrl()

	# Return
	return """
		<div class="reddit-submit-button service-button">
			<script>reddit_url="#{pageUrl}"</script>
			<script src="http://en.reddit.com/static/button/button1.js"></script>
		</div>
		"""

# Get Hacker News Submit Button
module.exports.hackernewssubmit = (services) ->
	# Prepare
	services ?= @getServices()
	return ''  if  services.hackerNewsSubmitButton is false
	#pageTitle = (@document.title or @document.name or @site.title)
	pageUrl = @getPageUrl()

	# Return
	return """
		<div class="hacker-news-submit-button service-button">
			<a href="https://news.ycombinator.com/submit" class="hn-button" data-url="#{pageUrl}" data-count="horizontal">Vote on Hacker News</a>
			<script>var HN=[];HN.factory=function(e){return function(){HN.push([e].concat(Array.prototype.slice.call(arguments,0)))};},HN.on=HN.factory("on"),HN.once=HN.factory("once"),HN.off=HN.factory("off"),HN.emit=HN.factory("emit"),HN.load=function(){var e="hn-button.js";if(document.getElementById(e))return;var t=document.createElement("script");t.id=e,t.src="//hn-button.herokuapp.com/hn-button.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)},HN.load();</script>
		</div>
		"""

# Get Facebook Like Button
module.exports.facebooklike = (services) ->
	# Prepare
	services ?= @getServices()
	facebookApplicationId = services.facebookLikeButton?.applicationId ? '266367676718271'
	return ''  unless facebookApplicationId
	pageUrl = @getPageUrl()

	# Return
	return """
		<div class="facebook-like-button service-button">
			<iframe src="//www.facebook.com/plugins/like.php?href=#{escape pageUrl}&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=21&amp;appId=#{escape facebookApplicationId}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:21px;" allowTransparency="true"></iframe>
		</div>
		"""

# Get Facebook Follow Button
module.exports.facebookfollow = (services) ->
	# Prepare
	services ?= @getServices()
	facebookApplicationId = services.facebookFollowButton?.applicationId ? '266367676718271'
	facebookUsername = services.facebookFollowButton?.username
	return ''  unless (facebookUsername and facebookApplicationId)

	# Return
	return """
		<div class="facebook-follow-button service-button">
			<iframe src="//www.facebook.com/plugins/follow.php?href=https%3A%2F%2Fwww.facebook.com%2F#{escape facebookUsername}&amp;layout=button_count&amp;show_faces=false&amp;colorscheme=light&amp;font&amp;width=450&amp;appId=#{escape facebookApplicationId}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height: 20px;" allowTransparency="true"></iframe>
		</div>
		"""


# Get Twitter Tweet Button
module.exports.twittertweet = (services) ->
	# Prepare
	services ?= @getServices()
	twitterUsername = services.twitterTweetButton
	return ''  unless twitterUsername

	# Return
	return """
		<div class="twitter-tweet-button service-button">
			<a href="https://twitter.com/share" class="twitter-share-button" data-via="#{twitterUsername}" data-related="#{twitterUsername}">Tweet</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
		</div>
		"""

# Get Twitter Follow Button
module.exports.twitterfollow = (services) ->
	# Prepare
	services ?= @getServices()
	twitterUsername = services.twitterFollowButton
	return ''  unless twitterUsername

	# Return
	return """
		<div class="twitter-follow-button service-button">
			<a href="https://twitter.com/#{twitterUsername}" class="twitter-follow-button" data-show-count="false">Follow @#{twitterUsername}</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
		</div>
		"""

# Get Github Follow Button
module.exports.githubfollow = (services) ->
	# Prepare
	services ?= @getServices()
	githubUsername = services.githubFollowButton
	return ''  unless githubUsername

	# Return
	return """
		<div class="github-follow-button service-button">
			<iframe src="//ghbtns.com/github-btn.html?user=#{githubUsername}&amp;type=follow&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>
		</div>
		"""

# Get GitHub Star Button
module.exports.githubstar = (services) ->
	# Prepare
	services ?= @getServices()
	parts = services.githubStarButton?.split('/')
	return ''  unless parts?.length is 2 and parts[0] and parts[1]
	githubUsername = parts[0]
	githubRepo = parts[1]

	# Return
	return """
		<div class="github-star-button service-button">
			<iframe src="//ghbtns.com/github-btn.html?user=#{githubUsername}&amp;repo=#{githubRepo}&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
		</div>
		"""

# Get Quora Follow Button
module.exports.quaorafollow = (services) ->
	# Prepare
	services ?= @getServices()
	quoraUsername = services.quoraFollowButton ? ''
	return ''  unless quoraUsername
	quoraRealname = quoraUsername.replace(/-/g,' ')
	quoraCode = '7N31XJs'

	# Return
	return """
		<div class="quora-follow-button service-button">
			<span class="quora-follow-button" data-name="#{quoraUsername}">
				Follow <a href="http://www.quora.com/#{quoraUsername}">#{quoraRealname}</a> on <a href="http://www.quora.com">Quora</a>
				<script src="//www.quora.com/widgets/follow?embed_code=#{quoraCode}"></script>
			</span>
		</div>
		"""
