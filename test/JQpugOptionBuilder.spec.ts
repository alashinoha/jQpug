import {
    EnableContentType,
    JQpugOptions,
    jQpugOptionsBuilderClass,
    JQpugOptionsBuilderOptions
} from "../src/JQpugOptionsBuilder";

class JQpugOptionsBuilderClassImpl extends jQpugOptionsBuilderClass {

    build($elem: JQuery, options: JQpugOptionsBuilderOptions) {
        return super.build($elem, options);
    }

    attachOptions($elem: JQuery, options: JQpugOptions): void {
        super.attachOptions($elem, options);
    }

    addClass($elem: JQuery, className: string | string[] | undefined): void {
        super.addClass($elem, className);
    }

    addAttr($elem: JQuery, attr: { [key: string]: string | number } | undefined): void {
        super.addAttr($elem, attr);
    }

    addCss($elem: JQuery, css: { [key: string]: string | number } | undefined): void {
        super.addCss($elem, css);
    }

    addText($elem: JQuery, text: string | number | undefined): void {
        super.addText($elem, text);
    }

    addHtml($elem: JQuery, html: string | undefined): void {
        super.addHtml($elem, html);
    }

    addContent($elem: JQuery, content: EnableContentType | undefined): void {
        super.addContent($elem, content);
    }

    addClick($elem: JQuery, clickFunction: undefined | (($self: JQuery) => void)): void {
        super.addClick($elem, clickFunction);
    }

}

const jQpugOptionsBuilderClassImpl = new JQpugOptionsBuilderClassImpl();

// jQueryをjestで使うのに必要っぽい
const JSDOM = require("jsdom").JSDOM;
const window = new JSDOM("").window;
const $ = require("jquery")(window);
global['$'] = global['jQuery'] = $;



//
// build
//
test('build 1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.build($elem, undefined);
    expect($elem.attr("class")).toBe(undefined);
});

test('build 2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.build($elem, "hoge");
    expect($elem.text()).toBe("hoge");
});

test('build 3', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.build($elem, 10000);
    expect($elem.text()).toBe("10000");
});

//
// attachOptions
//
test('attachOptions1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.attachOptions($elem, undefined);
    expect($elem.attr("class")).toBe(undefined);
});

test('attachOptions2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.attachOptions($elem, {});
    expect($elem.attr("class")).toBe(undefined);
});

test('attachOptions class 1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.attachOptions($elem, {
        class: "hoge moge",
    });
    expect($elem.attr("class")).toBe("hoge moge");
});

test('attachOptions class 2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.attachOptions($elem, {
        class: ["hoge", "moge"],
    });
    expect($elem.attr("class")).toBe("hoge moge");
});

test('attachOptions attr 1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.attachOptions($elem, {
        attr: {
            title: "titleだよ",
            placeholder: "placeholderだよ",
        },
    });
    expect($elem.attr("title")).toBe("titleだよ");
    expect($elem.attr("placeholder")).toBe("placeholderだよ");
});

test('attachOptions text 1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.attachOptions($elem, {
        text: "<><><>$lt;&gt;",
    });
    expect($elem.text()).toBe("<><><>$lt;&gt;");
});

test('attachOptions content 1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.attachOptions($elem, {
        content: jQuery("<span/>").text("hoge"),
    });
    expect($elem.find("span").text()).toBe("hoge");
});

test('attachOptions content 2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.attachOptions($elem, {
        content: [
            jQuery("<span/>").text("hoge"),
            jQuery("<span/>").text("hoge"),
            jQuery("<span/>").text("hoge"),
        ],
    });
    expect($elem.find("span").length).toBe(3);
});

//
// addClass
//
test('addClass1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addClass($elem, undefined);
    expect($elem.attr("class")).toBe(undefined);
});

test('addClass2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addClass($elem, "hoge");
    expect($elem.attr("class")).toBe("hoge");
});

test('addClass3', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addClass($elem, "hoge moge");
    expect($elem.attr("class")).toBe("hoge moge");
});

test('addClass4', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addClass($elem, ["hoge", "moge"]);
    expect($elem.attr("class")).toBe("hoge moge");
});

//
// addAttr
//
test('addAttr1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addAttr($elem, undefined);
    expect($elem.attr("")).toBe(undefined);
});

test('addAttr2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addAttr($elem, {
        title: "hoge",
        my_number: 100,
    });
    expect($elem.attr("title")).toBe("hoge");
    expect($elem.attr("my_number")).toBe("100");
});


//
// addCss
//
test('addCss1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addCss($elem, undefined);
    expect($elem.css("color")).toBe("");
});

test('addCss2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addCss($elem, {
        "color": "black",
        "z-index": 3,
    });
    expect($elem.css("color")).toBe("black");
    expect($elem.css("z-index")).toBe("3");
});

//
// addText
//
test('addText1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addText($elem, undefined);
    expect($elem.text()).toBe("");
});

test('addText2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addText($elem, "hoge moge");
    expect($elem.text()).toBe("hoge moge");
});

test('addText3', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addText($elem, 100);
    expect($elem.text()).toBe("100");
});

//
// addHtml
//
test('addHtml1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addHtml($elem, undefined);
    expect($elem.html()).toBe("");
});

test('addHtml2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addHtml($elem, "<span  class='text'>html</span>");
    expect($elem.html()).toBe("<span class=\"text\">html</span>");
});

test('addHtml3', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addHtml($elem, "&gt;&lt;");
    expect($elem.html()).toBe("&gt;&lt;");
    expect($elem.text()).toBe("><");
});

//
// addContent
//
test('addContent1', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addContent($elem, undefined);
    expect($elem.children().length).toBe(0);
});

test('addContent2', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addContent($elem, jQuery("<div/>"));
    expect($elem.children().length).toBe(1);
});

test('addContent3', () => {
    const $elem = jQuery("<div/>");
    jQpugOptionsBuilderClassImpl.addContent($elem, [jQuery("<div/>"), jQuery("<div/>"), jQuery("<div/>")]);
    expect($elem.children().length).toBe(3);
});

//
// addClick
//
test('addClick2', () => {
    const $elem = jQuery("<div/>");
    let a = 0;
    jQpugOptionsBuilderClassImpl.addClick($elem, () => {
        a = 100;
    });
    $elem.click();
    expect(a).toBe(100);
});

test('addClick3 bubbling', () => {
    const $elemA = jQuery("<div/>");
    const $elemB = jQuery("<div/>");
    let a = 0;
    jQpugOptionsBuilderClassImpl.addClick($elemA, () => {
        a = 100;
    });
    jQpugOptionsBuilderClassImpl.addClick($elemB, () => {
        a = 10000;
    });
    $elemA.append($elemB);
    $elemB.click();
    expect(a).toBe(10000);
});

