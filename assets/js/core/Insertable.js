import Node from "./Node.js";

export default class Insertable {
    static REF = 'insertable';

    constructor(insert_id, level) {
        this._node = null;
        this._level = level;
        this._dom = this.build();
        this._token = 'insert-' + Node.createTokenFromValue(insert_id);
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
        document.addEventListener('mousemove', (e) => {
            console.log("paege ".e.clientX)

           if(e.clientX >= this.dom.offsetLeft && e.clientX <= this.dom.offsetLeft + 20 &&
           e.clientY >= this.dom.offsetTop && e.clientY <= this.dom.offsetTop + 10){
               this.dom.style.height = 40 + 'px';
           } else {

           }
        });
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