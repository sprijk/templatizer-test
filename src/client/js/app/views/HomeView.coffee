define [
	'templates'
	'viewmaster'
], (templates) ->

	class HomeView extends Backbone.ViewMaster

		template: (context) -> templates.home context



