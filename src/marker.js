Whiteboard.Marker = (function () {
	'use strict';

	var Marker = function (cfg) {
		this.cfg = cfg || this.Defaults;
		return this.init();
	};

	Marker.prototype.Defaults = {
		color: '#000',
		radius: 10
	};

	Marker.prototype.init = function () {
		this.context = this.cfg.context;
	};

	Marker.prototype.draw = function (x, y) {
		this.context.beginPath();
		this.context.arc(
			x - this.cfg.radius,
			y - this.cfg.radius,
			this.cfg.radius,
			0, Math.PI * 2,
			false
		);
		this.context.closePath();
		this.context.fillStyle = this.cfg.color;
		this.context.fill();
	};

	Marker.prototype.erase = function (x, y) {
		var r = this.cfg.radius;
		var d = r * 2;
		this.context.clearRect(x - r, y - r, d, d);
	};

	return Marker;
}());