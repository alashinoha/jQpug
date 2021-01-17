/// <reference types="jquery" />
import { JQpugOptionsBuilderOptions } from "./JQpugOptionsBuilder";
declare class JQpugFactoryClass {
    create(pug: string, options?: JQpugOptionsBuilderOptions): JQuery;
}
declare const JQpugFactory: JQpugFactoryClass;
export default JQpugFactory;
