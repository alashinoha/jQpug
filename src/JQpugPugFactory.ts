export class JQpugPugFactoryClass {

    create(pug: string): JQuery {
        const tagName = this.extractTagName(pug);
        // tag
        const $elem = jQuery(`<${tagName}>`);
        // classes
        this.extractClassNames(pug).forEach((className) => {
            $elem.addClass(className);
        });
        // attr
        const attr = this.extractAttr(pug);
        for (const key in attr) {
            if (!attr.hasOwnProperty(key)) continue;
            $elem.attr(key, attr[key]);
        }
        // html
        const html = this.extractHtml(pug);
        if (html !== "") $elem.html(html);
        // 終わり
        return $elem;
    }

    protected extractTagName(pug: string): string {
        let tagName = "div";
        const split = pug.split(/[. (]/);
        if (split.length > 0) {
            tagName = split[0];
        }
        return tagName;
    }

    protected extractClassNames(pug: string): string[] {
        let classes: string[] = [];
        const splitBySpace = pug.split(/[ (]/);
        if (splitBySpace.length > 0) {
            const tagAndClasses = splitBySpace[0];
            const splitByDot = tagAndClasses.split('.');
            if (splitByDot.length > 1) {
                splitByDot.shift();
                classes = classes.concat(splitByDot);
            }
        }
        return classes;
    }

    protected extractAttr(pug: string): { [key: string]: string } {
        let attr: { [key: string]: string } = {};
        const matched = pug.match(/\(.+?\)/);
        if (matched !== null) {
            matched.forEach((m) => {
                const striped = m.replace(/^\(/, "").replace(/\)$/, "");
                striped.split(",").forEach((s) => {
                    const cleanKeyAndValue = s.replace(/^ +/, "").replace(/ +$/, "");
                    const keyValue = cleanKeyAndValue.split("=");
                    if (keyValue.length > 1) {
                        const key = keyValue.shift();
                        const value = keyValue.join("=");
                        attr[key] = value;
                    }
                });
            });
        }
        return attr;
    }

    protected extractHtml(pug: string): string {
        let html = "";
        const split = pug.replace(/\(.+?\)/, "").split(" ");
        if (split.length > 1) {
            split.shift();
            html = split.join(" ");
        }
        return html;
    }

}

const JQpugPugFactory = new JQpugPugFactoryClass();

export default JQpugPugFactory;

