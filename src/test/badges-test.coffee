# Import
{expect,assert} = require('chai')
joe = require('joe')
eachr = require('eachr')
badges = require('../../')


# =====================================
# Tests

joe.suite 'badges', (suite,test) ->
	
	opts =
		username: 'bevry'
		name: 'docpad'
		repo: 'bevry/docpad'
		badges:
			travis: [true, 'dev']  # the array isn't an official feature, that is our tests, used to test multiple options
			npm: true
			
	expectations =
		travis: [
			"""<a href="http://travis-ci.org/bevry/docpad" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/bevry/docpad/master.svg" alt="Build Status"></a>"""
			"""<a href="http://travis-ci.org/bevry/docpad" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/bevry/docpad/dev.svg" alt="Build Status"></a>"""
		]
		npm: "whatever the npm html output is"
	
	eachr badges, (value, key) ->
		suite "#{key} badge", (suite, test) ->
			inputValues = opts.badges[key]
			expectedValues = expectations[key]
			
			if !inputValues or !expectedValues
				test 'no test', ->
					return new Error('expected results does not exist for this test')
				
			else if Array.isArray(inputValues)
				inputValues = inputValues.slice()  # make a copy
				inputValues.forEach (value, index) ->
					test "test #{index}", ->
						opts.badges[key] = value
						expectedValue = expectedValues[index]
						resultValue = badges[key](opts)
						expect(resultValue).to.equal(expectedValue)
			
			else
				test 'single test', ->
					resultValue = badges[key](opts)
					expect(resultValue).to.equal(expectedValues)
			