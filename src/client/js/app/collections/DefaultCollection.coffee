define [
	'backbone'
], (Backbone) ->

	class DefaultCollection extends Backbone.Collection

		constructor: ->
			super 

			@attr     = {}
			@selected = null

		attr: (prop, value, noTrigger = false) ->
			if value
				@attr[prop] = value
				@trigger "change:#{prop}", value unless noTrigger
			else
				@attr[prop]

		select: (model, noTrigger = false) ->
			if model
				if not @selected or @selected.id isnt model.id
					@selected = model
					@trigger 'change:selected', model unless noTrigger
			else
				@selected