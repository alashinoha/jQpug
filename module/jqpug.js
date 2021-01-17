"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JQpugFactory_1 = __importDefault(require("./JQpugFactory"));
var jqpug = function (pug, options) {
    return JQpugFactory_1.default.create(pug, options);
};
// @ts-ignore
window["jqpug"] = jqpug;
exports.default = jqpug;
//# sourceMappingURL=jqpug.js.map