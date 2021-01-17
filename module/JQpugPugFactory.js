"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JQpugPugFactoryClass = void 0;
var JQpugPugFactoryClass = /** @class */ (function () {
    function JQpugPugFactoryClass() {
    }
    JQpugPugFactoryClass.prototype.create = function (pug) {
        var tagName = this.extractTagName(pug);
        // tag
        var $elem = jQuery("<" + tagName + ">");
        // classes
        this.extractClassNames(pug).forEach(function (className) {
            $elem.addClass(className);
        });
        // attr
        var attr = this.extractAttr(pug);
        for (var key in attr) {
            if (!attr.hasOwnProperty(key))
                continue;
            $elem.attr(key, attr[key]);
        }
        // html
        var html = this.extractHtml(pug);
        if (html !== "")
            $elem.html(html);
        // 終わり
        return $elem;
    };
    JQpugPugFactoryClass.prototype.extractTagName = function (pug) {
        var tagName = "div";
        var split = pug.split(/[. (]/);
        if (split.length > 0) {
            tagName = split[0];
        }
        return tagName;
    };
    JQpugPugFactoryClass.prototype.extractClassNames = function (pug) {
        var classes = [];
        var splitBySpace = pug.split(/[ (]/);
        if (splitBySpace.length > 0) {
            var tagAndClasses = splitBySpace[0];
            var splitByDot = tagAndClasses.split('.');
            if (splitByDot.length > 1) {
                splitByDot.shift();
                classes = classes.concat(splitByDot);
            }
        }
        return classes;
    };
    JQpugPugFactoryClass.prototype.extractAttr = function (pug) {
        var attr = {};
        var matched = pug.match(/\(.+?\)/);
        if (matched !== null) {
            matched.forEach(function (m) {
                var striped = m.replace(/^\(/, "").replace(/\)$/, "");
                striped.split(",").forEach(function (s) {
                    var cleanKeyAndValue = s.replace(/^ +/, "").replace(/ +$/, "");
                    var keyValue = cleanKeyAndValue.split("=");
                    if (keyValue.length > 1) {
                        var key = keyValue.shift();
                        var value = keyValue.join("=");
                        if (key !== undefined) {
                            attr[key] = value;
                        }
                    }
                });
            });
        }
        return attr;
    };
    JQpugPugFactoryClass.prototype.extractHtml = function (pug) {
        var html = "";
        var split = pug.replace(/\(.+?\)/, "").split(" ");
        if (split.length > 1) {
            split.shift();
            html = split.join(" ");
        }
        return html;
    };
    return JQpugPugFactoryClass;
}());
exports.JQpugPugFactoryClass = JQpugPugFactoryClass;
var JQpugPugFactory = new JQpugPugFactoryClass();
exports.default = JQpugPugFactory;
//# sourceMappingURL=JQpugPugFactory.js.map