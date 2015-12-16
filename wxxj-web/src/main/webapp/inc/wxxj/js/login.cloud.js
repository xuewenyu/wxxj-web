/**
 * 用于登录界面背景云飘动
 */
(function($) {
	"use strict";
	$.WXXJLoginCloud = function(options) {
		// 修改继承
		var _options = {};
		var _body = $("body");
		var _clouds;

		var _offset1 = 450;
		var _offset2 = 0;
		var _offsetbg = 0;

		$.extend(_options, $.WXXJLoginCloud.DEFAULTS, options);

		var _init = function() {
			_clouds = $(_options.cloudContainer).find(".cloud");
			if (_clouds.length != 2) {
				console.log("cloud count mast init two");
				return;
			}
			// 注册云定时事件
			setInterval(_cloudinterval, _options.cloudIntervalTime);

			// 注册body偏移事件
			setInterval(_bodyinterval, _options.bodyIntegervalTime);
		}

		var _cloudinterval = function() {
			if (_offset1 >= _body.outerWidth()) {
				_offset1 = -580;
			}

			if (_offset2 >= _body.outerWidth()) {
				_offset2 = -580;
			}

			_offset1 += 1.1;
			_offset2 += 1;
			$(_clouds).each(function(index, cloud) {
				if (index == 0) {
					$(cloud).css("background-position", _offset1 + "px 100px");
				}
				if (index == 1) {
					$(cloud).css("background-position", _offset2 + "px 460px");
				}
			});
		}

		var _bodyinterval = function() {
			if (_offsetbg >= _body.outerWidth()) {
				_offsetbg = -580;
			}

			_offsetbg += 0.9;
			_body.css("background-position", -_offsetbg + "px 0");
		}
		_init();
	}

	$.fn.WXXJLoginCloud = function(triggers, options) {
		$.WXXJLoginCloud(this, triggers, options);
	}

	$.WXXJLoginCloud.DEFAULTS = {
		cloudContainer : ".login-container",
		cloudIntervalTime : 70,
		bodyIntegervalTime : 90
	}
	$.WXXJLoginCloud();
})(jQuery);
