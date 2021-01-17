import JQpugFactory from "./JQpugFactory";
import {JQpugOptionsBuilderOptions} from "./JQpugOptionsBuilder";


const jqpug = (pug: string, options?: JQpugOptionsBuilderOptions): JQuery => {
    return JQpugFactory.create(pug, options);
};

// @ts-ignore
window["jqpug"] = jqpug;

export default jqpug;
