(function() {
  var Fluctuation, transitionutil, _transitionutil,
    _this = this;

  _transitionutil = this.transitionutil;

  this.transitionutil = transitionutil = {};

  transitionutil.noConflict = function() {
    _this.transitionutil = _transitionutil;
    return transitionutil;
  };

  transitionutil.Fluctuation = Fluctuation = (function() {
    Fluctuation.prototype.length = function() {
      return this._length;
    };

    Fluctuation.prototype.stepper = function() {
      return this._stepper;
    };

    Fluctuation.prototype.value = function() {
      return this._value;
    };

    function Fluctuation(options) {
      var i, v, _i, _ref;
      this._length = (options != null ? options.length : void 0) || 1;
      this._stepper = (options != null ? options.stepper : void 0) || function() {
        return 0.01 + Math.random() * 0.06;
      };
      this._radians = [];
      this._steps = [];
      this._value = 0;
      v = 0;
      for (i = _i = 0, _ref = this._length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        this._radians.push(Math.random() * Math.PI * 2);
        this._steps.push(this._stepper());
        v += (Math.cos(this._radians[i]) + 1) * 0.5;
      }
      this._value = v / this._length;
    }

    Fluctuation.prototype.update = function() {
      var i, v, _i, _ref;
      v = 0;
      for (i = _i = 0, _ref = this._length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        v += (Math.cos(this._radians[i] += this._steps[i]) + 1) * 0.5;
      }
      this._value = v / this._length;
      return this;
    };

    return Fluctuation;

  })();

}).call(this);
