'use strict'

const badges = require('./badges')

/**
Render a specified badge with the appropriate wrapping (div if block badge, span if inline badge)
@method renderBadge
@param {String} badgeName The name of the badge to render
@param {Object} config The configuration to pass to the badge render method
@return {String} The rendered badge
*/
function renderBadge (badgeName, config = {}) {
	if ( badgeName === '---' ) {
		return '<br class="badge-separator" />'
	}

	// Fetch
	const badgeMethod = badges[badgeName]

	// Send the badge value and options to the render method
	const badgeResult = badgeMethod(config).trim()
	if ( !badgeResult )  return ''

	// We have a result, so let's wrap it
	const elementName = badgeMethod.badgeInline === false ? 'div' : 'span'
	const wrappedResult = `<${elementName} class="badge-${badgeName}">${badgeResult}</${elementName}>`

	// Done
	return wrappedResult
}

/**
Render specified badges with wrapping
@method renderBadges
@param {Array} list The list of badge names to render
@param {Object} config The configuration to render the badge with
@param {Object} options An object that defaults to `{filterCategory: false, filterScripts: false}`
@return {String} The rendered badges
*/
function renderBadges (list, config = {}, options = {filterCategory: false, filterScripts: true}) {
	// Prepare
	const results = []

	// Render the badges
	list.forEach(function (badgeName) {
		let badgeConfig = config

		// Custom Config?
		if ( Array.isArray(badgeName) ) {
			badgeConfig = badgeName[1]
			badgeName = badgeName[0]
		}

		// Category?
		if ( options.filterCategory && (badgeName === '---' || options.filterCategory !== badges[badgeName].badgeCategory) )  return

		// Script?
		if ( options.filterScripts === true && badgeName !== '---' && badges[badgeName].badgeScript )  return

		// Render
		const badgeResult = renderBadge(badgeName, badgeConfig).trim()
		if ( !badgeResult )  return

		// Rendered successfully, add the result
		results.push(badgeResult)
	})

	// Return
	return results.join('\n')
}

// Export
module.exports = {
	badges,
	renderBadge,
	renderBadges
}
