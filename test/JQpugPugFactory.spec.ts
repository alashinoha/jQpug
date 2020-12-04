import {JQpugPugFactoryClass} from "../src/JQpugPugFactory";

class PugFactoryClassImpl extends JQpugPugFactoryClass {

    extractTagName(pug: string): string {
        return super.extractTagName(pug);
    }

    extractClassNames(pug: string): string[] {
        return super.extractClassNames(pug);
    }

    extractAttr(pug: string): { [p: string]: string } {
        return super.extractAttr(pug);
    }

    extractHtml(pug: string): string {
        return super.extractHtml(pug);
    }
}

const PugFactoryImpl = new PugFactoryClassImpl();


//
// extractTagName
//
test('extractTagName1', () => {
    expect(PugFactoryImpl.extractTagName("span")).toBe("span");
});

test('extractTagName2', () => {
    expect(PugFactoryImpl.extractTagName("span.hoge.moge")).toBe("span");
});

test('extractTagName3', () => {
    expect(PugFactoryImpl.extractTagName("span こんにちわ")).toBe("span");
});

test('extractTagName4', () => {
    expect(PugFactoryImpl.extractTagName("span.hoge.moge こんにちわ")).toBe("span");
});

test('extractTagName5', () => {
    expect(PugFactoryImpl.extractTagName("span.hoge.moge(title=hoge, name=moge) こんにちわ")).toBe("span");
});

//
// extractClassNames
//
test('extractClassNames1', () => {
    expect(PugFactoryImpl.extractClassNames("span")).toStrictEqual([]);
});

test('extractClassNames2', () => {
    expect(PugFactoryImpl.extractClassNames("span.hoge.moge")).toStrictEqual(["hoge", "moge"]);
});

test('extractClassNames3', () => {
    expect(PugFactoryImpl.extractClassNames("span こんにちわ")).toStrictEqual([]);
});

test('extractClassNames4', () => {
    expect(PugFactoryImpl.extractClassNames("span.hoge.moge こんにちわ")).toStrictEqual(["hoge", "moge"]);
});

test('extractClassNames5', () => {
    expect(PugFactoryImpl.extractClassNames("span.hoge.moge(title=hoge, name=moge) こんにちわ")).toStrictEqual(["hoge", "moge"]);
});

//
// extractAttr
//
test('extractAttr1', () => {
    expect(PugFactoryImpl.extractAttr("span")).toStrictEqual({});
});

test('extractAttr2', () => {
    expect(PugFactoryImpl.extractAttr("span.hoge.moge")).toStrictEqual({});
});

test('extractAttr3', () => {
    expect(PugFactoryImpl.extractAttr("span こんにちわ")).toStrictEqual({});
});

test('extractAttr4', () => {
    expect(PugFactoryImpl.extractAttr("span.hoge.moge こんにちわ")).toStrictEqual({});
});

test('extractAttr5', () => {
    expect(PugFactoryImpl.extractAttr("span.hoge.moge(title=hoge, name=moge) こんにちわ")).toStrictEqual({title: "hoge", name: "moge"});
});

test('extractAttr6', () => {
    expect(PugFactoryImpl.extractAttr("span.hoge.moge(title=hoge, name=moge) (title=poge, name=puga)")).toStrictEqual({title: "hoge", name: "moge"});
});

//
// extractHtml
//
test('extractHtml1', () => {
    expect(PugFactoryImpl.extractHtml("span")).toStrictEqual("");
});

test('extractHtml2', () => {
    expect(PugFactoryImpl.extractHtml("span.hoge.moge")).toStrictEqual("");
});

test('extractHtml3', () => {
    expect(PugFactoryImpl.extractHtml("span こんにちわ")).toStrictEqual("こんにちわ");
});

test('extractHtml4', () => {
    expect(PugFactoryImpl.extractHtml("span.hoge.moge こんにちわ こんにちわ")).toStrictEqual("こんにちわ こんにちわ");
});

test('extractHtml5', () => {
    expect(PugFactoryImpl.extractHtml("span.hoge.moge(title=hoge, name=moge) こんにちわ")).toStrictEqual("こんにちわ");
});

test('extractHtml6', () => {
    expect(PugFactoryImpl.extractHtml("span.hoge.moge(title=hoge, name=moge) (title=poge, name=puga)")).toStrictEqual("(title=poge, name=puga)");
});

