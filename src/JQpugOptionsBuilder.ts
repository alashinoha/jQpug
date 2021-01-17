export type JQpugOptions = {
    class?: string | string[];
    attr?: { [key: string]: string | number };
    css?: { [key: string]: string | number };
    text?: string | number;
    html?: string;
    content?: JQpugOptionContentType;
    click?: ($self: JQuery) => void;
};

export type JQpugOptionsBuilderOptions = string | number | JQpugOptions | JQuery | Array<JQuery>;

export type JQpugOptionContentType = JQuery | Array<JQuery>;

export class jQpugOptionsBuilderClass {

    build($elem: JQuery, options: JQpugOptionsBuilderOptions): void {
        if (options === undefined) return;
        if (typeof options === "string") {
            this.build($elem, {
                text: options,
            });
        } else if (typeof options === "number") {
            this.build($elem, {
                text: `${options}`,
            });
        } else if (options instanceof Array) {
            this.build($elem, {
                content: options,
            });
        } else if (options instanceof jQuery) {
            // @ts-ignore
            this.build($elem, {
                content: options,
            });
        } else {
            // @ts-ignore
            this.attachOptions($elem, options);
        }
    }

    protected attachOptions($elem: JQuery, options: JQpugOptions): void {
        if (options === undefined) return;
        this.addClass($elem, options.class);
        this.addAttr($elem, options.attr);
        this.addCss($elem, options.css);
        this.addText($elem, options.text);
        this.addHtml($elem, options.html);
        this.addContent($elem, options.content);
        this.addClick($elem, options.click);
    }

    protected addClass($elem: JQuery, className: string | string[] | undefined): void {
        if (className === undefined) return;
        if (className instanceof Array) {
            className.forEach((cn) => {
                $elem.addClass(cn);
            });
        } else {
            $elem.addClass(className);
        }
    }

    protected addAttr($elem: JQuery, attr: { [key: string]: string | number } | undefined): void {
        if (attr === undefined) return;
        $elem.attr(attr);
    }

    protected addCss($elem: JQuery, css: { [key: string]: string | number } | undefined): void {
        if (css === undefined) return;
        $elem.css(css);
    }

    protected addText($elem: JQuery, text: string | number | undefined): void {
        if (text === undefined) return;
        $elem.text(`${text}`);
    }

    protected addHtml($elem: JQuery, html: string | undefined): void {
        if (html === undefined) return;
        $elem.html(html);
    }

    protected addContent($elem: JQuery, content: JQpugOptionContentType | undefined): void {
        if (content === undefined) return;
        if (content instanceof Array) {
            content.forEach((elem) => {
                $elem.append(elem);
            });
        } else {
            $elem.append(content);
        }
    }

    protected addClick($elem: JQuery, clickFunction: undefined | (($self: JQuery) => void)): void {
        if (clickFunction === undefined || typeof clickFunction !== "function") return;
        $elem.on('click', (event) => {
            clickFunction(jQuery(event.currentTarget));
            return false;
        });
    }

}

const jQpugOptionsBuilder = new jQpugOptionsBuilderClass();

export default jQpugOptionsBuilder;
