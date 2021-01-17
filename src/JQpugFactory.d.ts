/// <reference types="jquery" />
import { EnableContentType } from "./JQpugOptionsBuilder";
declare class JQpugFactoryClass {
    create(pug: string, options?: EnableContentType): JQuery;
}
declare const JQpugFactory: JQpugFactoryClass;
export default JQpugFactory;
