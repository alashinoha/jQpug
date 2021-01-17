/// <reference types="jquery" />
export declare type JQpugOptions = {
    class?: string | string[];
    attr?: {
        [key: string]: string | number;
    };
    css?: {
        [key: string]: string | number;
    };
    text?: string | number;
    html?: string;
    content?: JQpugOptionContentType;
    click?: ($self: JQuery) => void;
};
export declare type JQpugOptionsBuilderOptions = string | number | JQpugOptions | JQuery | Array<JQuery>;
export declare type JQpugOptionContentType = JQuery | Array<JQuery>;
export declare class jQpugOptionsBuilderClass {
    build($elem: JQuery, options: JQpugOptionsBuilderOptions): void;
    protected attachOptions($elem: JQuery, options: JQpugOptions): void;
    protected addClass($elem: JQuery, className: string | string[] | undefined): void;
    protected addAttr($elem: JQuery, attr: {
        [key: string]: string | number;
    } | undefined): void;
    protected addCss($elem: JQuery, css: {
        [key: string]: string | number;
    } | undefined): void;
    protected addText($elem: JQuery, text: string | number | undefined): void;
    protected addHtml($elem: JQuery, html: string | undefined): void;
    protected addContent($elem: JQuery, content: JQpugOptionContentType | undefined): void;
    protected addClick($elem: JQuery, clickFunction: undefined | (($self: JQuery) => void)): void;
}
declare const jQpugOptionsBuilder: jQpugOptionsBuilderClass;
export default jQpugOptionsBuilder;
