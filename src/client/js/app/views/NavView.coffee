define [
	'templates'
	'viewmaster'
], (templates) ->

	class NavView extends Backbone.ViewMaster

		constructor: ->
			super

			@listenTo @collection, 'change:selected', @render

		context: ->
			navs: @collection.toJSON()
			sel:  @collection.select().id

		template: (context) -> 
			templates.nav context

