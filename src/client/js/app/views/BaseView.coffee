define [
	'./NavView'
	'templates'
	'viewmaster'
], (NavView, templates) ->

	class BaseView extends Backbone.ViewMaster

		el: '#app'
		
		template: (context) -> templates.base context

		constructor: (options) ->
			super

			@setView '#nav', new NavView collection: options.navs
			




