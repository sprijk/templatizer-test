define [
	'templates'
	'viewmaster'
], (templates) ->

	class LinkView extends Backbone.ViewMaster

		initialize: (options) ->
			@linkId = options.linkId

		context: ->
			linkId: @linkId

		template: (context) -> templates.link context



