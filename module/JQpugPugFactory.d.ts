/// <reference types="jquery" />
export declare class JQpugPugFactoryClass {
    create(pug: string): JQuery;
    protected extractTagName(pug: string): string;
    protected extractClassNames(pug: string): string[];
    protected extractAttr(pug: string): {
        [key: string]: string;
    };
    protected extractHtml(pug: string): string;
}
declare const JQpugPugFactory: JQpugPugFactoryClass;
export default JQpugPugFactory;
