/**
 * wxxj ui inputbox by xuewen.yu@2015.12.14 version 0.0.1
 */
(function($) {
	"use strict";
	$.WXXJPrettyInput = function(elements, options) {
		// 修改继承
		var _options = {};
		$.extend(_options, $.WXXJPrettyInput.DEFAULTS, options);

		var _constants = $.WXXJPrettyInput.CONSTANTS;

		var _elements = $(elements);
		_elements
				.each(function(index, element) {
					var _element = $(element);
					var _parent = _element.parent();
					// 如果已经没有包裹了div.wxxj-pi-container
					// html中不建议包裹
					if (!_parent.hasClass(_constants.CONTAINER_CLASS)) {
						_element.wrap($("<div></div>"));
						_element.parent().addClass(_constants.CONTAINER_CLASS);
					}

					var _iconclass = _element.data(_constants.DATA_ICON_CLASS);
					if (_iconclass != undefined && _iconclass !== '') {
						var _icon = $("<span></span>").addClass(_constants.ICON_CLASS).addClass(_iconclass).css('line-height',
								_element.outerHeight() + "px");
						_element.after(_icon);
						_element.css("padding-left", _icon.outerWidth());
					}

					var _cantclear = _element.data(_constants.DATA_CANT_CLEAR);
					if (!(_cantclear == '' || _cantclear === 'true' || _cantclear)) {
						var _clearbutton = $("<span></span>").addClass(_constants.CLEAR_BUTTON_CLASS).addClass(_options.clearbutton_iconclass).css(
								'line-height', _element.outerHeight() + "px");
						_element.after(_clearbutton);
						_element.css('padding-right', _clearbutton.outerWidth());
						_clearbutton.click(function(e) {
							_element.val('');
							_clearbutton.hide();
							_element.focus();
						});

						if (_element.val() === '') {
							_clearbutton.hide();
						}

						_element.on("input propertychange change focus blur", function(e) {
							if ($(this).val() === '') {
								_clearbutton.hide();
							} else {
								_clearbutton.show();
							}
						});
					}
				});
	}

	$.fn.WXXJPrettyInput = function(options) {
		$.WXXJPrettyInput(this, options);
	}

	$.WXXJPrettyInput.CONSTANTS = {
		CONTAINER_CLASS : "wxxj-pi-container",
		ICON_CLASS : "wxxj-pi-icon",
		CLEAR_BUTTON_CLASS : "wxxj-pi-clearbutton",
		DATA_ICON_CLASS : "wxxj-pi-icon-class",
		DATA_CANT_CLEAR : "wxxj-pi-cant-clear",
		EL_SELECTOR : "input[type='text'],"//
				+ "input[type='password'],"//
				+ "input[type='email'],"//
				+ "input[type='url'],"//
				+ "input[type='search'],"//
				+ "input[type='tel'],"//
				+ "input[type='number'],"//
				+ "input[type='date'],"//
				+ "input[type='datetime']"//
	}

	$.WXXJPrettyInput.DEFAULTS = {
		clearbutton_iconclass : "fa fa-lg fa-times-circle"
	}

	$(window).on('load', function() {
		$.each($($.WXXJPrettyInput.CONSTANTS.EL_SELECTOR), function(index, element) {
			var _element = $(element);
			if (!_element.hasClass("wxxj-pi")) {
				return;
			}
			_element.WXXJPrettyInput();
		});
	});
})(jQuery);