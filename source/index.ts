// Import
import * as badges from './badges.js'
export { badges }

/**
 * Render a specified badge with the appropriate wrapping (div if block badge, span if inline badge)
 * @method renderBadge
 * @param badgeName The name of the badge to render
 * @param config The configuration to pass to the badge render method
 * @return The rendered badge
 */
export function renderBadge(badgeName: string, config = {}): string {
	if (badgeName === '---') {
		return '<br class="badge-separator" />'
	}

	// Fetch
	// @ts-ignore
	const badgeMethod = badges[badgeName] as any

	// Send the badge value and options to the render method
	const badgeResult = badgeMethod(config).trim()
	if (!badgeResult) return ''

	// We have a result, so let's wrap it
	const elementName = badgeMethod.badgeInline === false ? 'div' : 'span'
	const wrappedResult = `<${elementName} class="badge-${badgeName}">${badgeResult}</${elementName}>`

	// Done
	return wrappedResult
}

export interface RenderOptions {
	/* Render only the badges that are part of this category */
	filterCategory?: false | string

	/* Render badges that include `<script>` elements */
	filterScripts?: boolean
}

export type BadgeEntry = string | [string, object]
export type BadgeEntries = BadgeEntry[]

/**
 * Render specified badges with wrapping
 * @param list The list of badge names to render
 * @param config The configuration to render the badge with
 * @param options An object that defaults to `{filterCategory: false, filterScripts: false}`
 * @return The rendered badges
 */
export function renderBadges(
	list: BadgeEntries,
	config: { [key: string]: any } = {},
	options: RenderOptions = { filterCategory: false, filterScripts: true }
): string {
	// Prepare
	const results: string[] = []

	// Render the badges
	list.forEach(function (badgeName) {
		let badgeConfig = config

		// Custom Config?
		if (Array.isArray(badgeName)) {
			badgeConfig = badgeName[1]
			badgeName = badgeName[0]
		}

		// Seperator?
		if (badgeName === '---') {
			// Do not render seperators if we only wanted a single category
			if (options.filterCategory) return
		}
		// Exists?
		else {
			// @ts-ignore
			const badge = badges[badgeName] as any
			if (badge) {
				// Category?
				if (
					options.filterCategory &&
					options.filterCategory !== badge.badgeCategory
				)
					return

				// Script?
				if (options.filterScripts && badge.badgeScript) return
			}
			// Doesn't exist
			else {
				throw new Error(`the badge ${badgeName} does not exist`)
			}
		}

		// Render
		const badgeResult = renderBadge(badgeName, badgeConfig).trim()
		if (!badgeResult) return

		// Rendered successfully, add the result
		results.push(badgeResult)
	})

	// Return
	return results.join('\n')
}
