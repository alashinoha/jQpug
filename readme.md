# JQpug

## これは何？

pug形式でstringを渡すと、その通りにjQueryオブジェクトにして返します。

※完全サポートじゃないです！

## 使うための準備

HTMLに普通に読み込む場合。
当然ですが、jQueryが必要です。
```html
<script src="./jquery.min.js"></script>
<script src="../dist/jqpug.min.js"></script>
```

npmでもはいります。
```bash
npm install --save-dev jquery @type/jquery jqpug
```

## 簡単なサンプル

一行のpugにだけ対応しています。

```javascript
// jQueryのみで書いた場合
jQuery("#target").append(
    jQuery("<span>").addClass("some_class").attr("title", "サンプル").text("こんいちわ")
);

// pugっぽいので書いたとき
jQuery("#target").append(
    jqpug("span.some_class(title=サンプル) こんにちわ")
);
```
短く書けますね！

## 他のサンプル

### 連続で作成する例

```javascript
jqpug("section", [
    jqpug("h4 Hello World!", jqpug("span.badge 4")),
    jqpug("p 吾輩はねこである"),
]);
```
上記のように書くと下記のようなものができます。
```html
<section>
    <h4>Hello World!
        <span class="badge">4</span>
    </h4>
    <p>吾輩はねこである</p>
</section>
```

### イベントなどをつける例

```javascript
jqpug("section", [
    jqpug("h4 Click Smple"),
    jqpug("a", {
        attr: {
            href: "http://google.co.jqpug",
            target: "_blank",
        },
        text: "jump to google site!",
    }),
    jqpug("button", {
        attr: {
            type: "button",
        },
        text: "click then console.log('hoge')",
        click: () => {
            console.log("hoge");
        },
    }),
]);
```
上記のように書くと下記のようなものができます。
button要素にはイベントがつきます。
```html
<section>
    <h4>Click Smple</h4>
    <a href="http://google.co.jqpug" target="_blank">jump to google site!</a>
    <button type="button">click then console.log('hoge')</button>
</section>
```

## 仕様

```typescript
const $obj = jqpug(pugString: string, options: string | number | JQuery | Array<JQuery> | JQpugOptions);
```

### pugString: string

現在のバージョンではワンライナーのPugの書き方のみに対応しています。
（いつかはヒアドキュメントに対応するかもしれません）

### options: string | number | JQuery | Array\<JQuery\> | JQpugOptions

#### string | number
第二要素にstring、もしくはnumberを設定した場合は生成したjQuery要素に対してテキストとして設定されます。pugのストリングに含めることでも同じことができます。

```javascript
var hoge1 = jqpug("p", "こんにちは"); // <p>こんにちは</p>
var hoge2 = jqpug("p こんにちは"); // <p>こんにちは</p>

var moge1 = jqpug("p", 100); // <p>100</p>
var moge2 = jqpug("p 100"); // <p>100</p>
```

#### JQuery | Array\<JQuery\>
第二要素にjQueryオブジェクト、もしくはjQueryオブジェクト配列を設定した場合は生成したjQuery要素に対して小要素として追加します。

#### JQpugOptions（オブジェクト型）

作成したjQueryオブジェクトに対して色々設定します。

sample
```javascript
var $obj = jqpug("div", {
    class: "panel panel-default",
    attr: {
        title: "panelです",
    },
    css: {
        border: "1px",
    },
    text: "こんにちわ",
    content: [
        jqpug("div.panel-title パネルのタイトルです"),
        jqpug("div.panel-body パネルのボディです"),
    ],
    click: ($self) => {
        console.log($self);
    },
});
```

__説明__

| KEY | VALUEの型 | 説明 |
| ---- | ---- | ---- |
| class | string/string[] | jQueryオブジェクトにclass属性を追加します。pugでも表現できますが、こちらで設定することもできます。 |
| attr | {[key: string]]: string/number} | jQueryオブジェクトに属性を追加します。jQueryのattrメソッドで設定します。 |
| css | {[key: string]]: string/number} | jQueryオブジェクトにCSSを追加します。jQueryのcssメソッドで設定します。 |
| text | string | jQueryオブジェクトにinnerTextを追加します。jQueryのtextメソッドで追加されます。pugでも表現できますが、こちらで設定することもできます。 |
| html | string | jQueryオブジェクトにinnerHtmlとして設定します。jQueryのhtmlメソッドで追加されます。 |
| content | jQuery/jQuery[] | jQueryオブジェクトに子要素として追加します。jQueryのappendメソッドで追加されます。 |
| click | ($self: jQuery) => void | jQueryオブジェクトにclickイベントを設定します。設定する第一引数はクリックされたjQueryオブジェクトを渡します。バブリングはキャンセルしてます。 |

以上です 🍺