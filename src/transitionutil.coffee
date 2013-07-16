_transitionutil = @transitionutil
@transitionutil = transitionutil = {}

transitionutil.noConflict = =>
	@transitionutil = _transitionutil
	transitionutil

transitionutil.Fluctuation = class Fluctuation
	length: -> @_length

	stepper: -> @_stepper

	value: -> @_value

	constructor: (options) ->
		@_length = options?.length or 1
		@_stepper = options?.stepper or -> 0.01 + Math.random() * 0.06
		@_radians = []
		@_steps = []
		@_value = 0

		v = 0
		for i in [0...@_length]
			@_radians.push(Math.random() * Math.PI * 2)
			@_steps.push(@_stepper())
			v += (Math.cos(@_radians[i]) + 1) * 0.5
		@_value = v / @_length

	update: ->
		v = 0
		for i in [0...@_length]
			v += (Math.cos(@_radians[i] += @_steps[i]) + 1) * 0.5
		@_value = v / @_length
		@
