"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JQpugPugFactory_1 = __importDefault(require("./JQpugPugFactory"));
var JQpugOptionsBuilder_1 = __importDefault(require("./JQpugOptionsBuilder"));
var JQpugFactoryClass = /** @class */ (function () {
    function JQpugFactoryClass() {
    }
    JQpugFactoryClass.prototype.create = function (pug, options) {
        var $elem = JQpugPugFactory_1.default.create(pug);
        if (options !== undefined) {
            JQpugOptionsBuilder_1.default.build($elem, options);
        }
        return $elem;
    };
    return JQpugFactoryClass;
}());
var JQpugFactory = new JQpugFactoryClass();
exports.default = JQpugFactory;
//# sourceMappingURL=JQpugFactory.js.map