import JQpugFactory from "./JQpugFactory";
import {EnableContentType} from "./JQpugOptionsBuilder";


export const jpug = (pug: string, options: EnableContentType = undefined): JQuery => {
    return JQpugFactory.create(pug, options);
};

window["jp"] = jpug;
