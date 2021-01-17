"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jQpugOptionsBuilderClass = void 0;
var jQpugOptionsBuilderClass = /** @class */ (function () {
    function jQpugOptionsBuilderClass() {
    }
    jQpugOptionsBuilderClass.prototype.build = function ($elem, options) {
        if (options === undefined)
            return;
        if (typeof options === "string") {
            this.build($elem, {
                text: options,
            });
        }
        else if (typeof options === "number") {
            this.build($elem, {
                text: "" + options,
            });
        }
        else if (options instanceof Array) {
            this.build($elem, {
                content: options,
            });
        }
        else if (options instanceof jQuery) {
            // @ts-ignore
            this.build($elem, {
                content: options,
            });
        }
        else {
            // @ts-ignore
            this.attachOptions($elem, options);
        }
    };
    jQpugOptionsBuilderClass.prototype.attachOptions = function ($elem, options) {
        if (options === undefined)
            return;
        this.addClass($elem, options.class);
        this.addAttr($elem, options.attr);
        this.addCss($elem, options.css);
        this.addText($elem, options.text);
        this.addHtml($elem, options.html);
        this.addContent($elem, options.content);
        this.addClick($elem, options.click);
    };
    jQpugOptionsBuilderClass.prototype.addClass = function ($elem, className) {
        if (className === undefined)
            return;
        if (className instanceof Array) {
            className.forEach(function (cn) {
                $elem.addClass(cn);
            });
        }
        else {
            $elem.addClass(className);
        }
    };
    jQpugOptionsBuilderClass.prototype.addAttr = function ($elem, attr) {
        if (attr === undefined)
            return;
        $elem.attr(attr);
    };
    jQpugOptionsBuilderClass.prototype.addCss = function ($elem, css) {
        if (css === undefined)
            return;
        $elem.css(css);
    };
    jQpugOptionsBuilderClass.prototype.addText = function ($elem, text) {
        if (text === undefined)
            return;
        $elem.text("" + text);
    };
    jQpugOptionsBuilderClass.prototype.addHtml = function ($elem, html) {
        if (html === undefined)
            return;
        $elem.html(html);
    };
    jQpugOptionsBuilderClass.prototype.addContent = function ($elem, content) {
        if (content === undefined)
            return;
        if (content instanceof Array) {
            content.forEach(function (elem) {
                $elem.append(elem);
            });
        }
        else {
            $elem.append(content);
        }
    };
    jQpugOptionsBuilderClass.prototype.addClick = function ($elem, clickFunction) {
        if (clickFunction === undefined || typeof clickFunction !== "function")
            return;
        $elem.on('click', function (event) {
            clickFunction(jQuery(event.currentTarget));
            return false;
        });
    };
    return jQpugOptionsBuilderClass;
}());
exports.jQpugOptionsBuilderClass = jQpugOptionsBuilderClass;
var jQpugOptionsBuilder = new jQpugOptionsBuilderClass();
exports.default = jQpugOptionsBuilder;
//# sourceMappingURL=JQpugOptionsBuilder.js.map