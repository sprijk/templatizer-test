define [
	'./views/HomeView'
	'./views/LinkView'
], (HomeView, LinkView) ->

	class Router extends Backbone.Router
		routes:
			'':         'home'
			'home':     'home'
			'link/:id': 'link'

		initialize: (options) ->
			@base = options.base
			@navs = options.navs

		home: ->
			@navs.select @navs.get 'home'

			@base.setView '#content', new HomeView
			@base.refreshViews()

		link: (linkId) ->
			@navs.select @navs.get "link-#{linkId}"

			@base.setView '#content', new LinkView
				linkId: linkId
			@base.refreshViews()
