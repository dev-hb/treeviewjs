import Node from "./Node.js";

export default class Insertable {
    static REF = 'insertable';

    constructor(insert_id, level) {
        this._node = null;
        this._level = level;
        this._token = 'insert-' + Node.createTokenFromValue(insert_id);
        this._dom = this.build();
        this.handle();
    }

    build() {
        let elem = document.createElement('div');
        elem.setAttribute('class', 'insertable');
        elem.setAttribute('id', 'insert-treeviewjs-node-' + this._token);
        elem.style.marginLeft = Node.INDENT * this.level + 'px'
        return elem;
    }

    move() {
        console.log("Move to")
    }

    handle() {
        this._dom.addEventListener('mouseup', (e) => {
            e.preventDefault();
            alert(this._token);
        });
        this.dom.onclick = (e) => {
            console.log(this.dom.offsetTop);
        }
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get dom() {
        return this._dom;
    }
}