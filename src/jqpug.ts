import JQpugFactory from "./JQpugFactory";
import {JQpugOptionsBuilderOptions} from "./JQpugOptionsBuilder";


const jqpug = (pug: string, options: JQpugOptionsBuilderOptions = undefined): JQuery => {
    return JQpugFactory.create(pug, options);
};

window["jqpug"] = jqpug;

export default jqpug;
