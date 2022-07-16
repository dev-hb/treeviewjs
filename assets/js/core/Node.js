import TreeViewException from "./TreeViewException.js";

export default class Node {

    static INDENT = 50;

    constructor(value, level) {
        if(level == undefined) throw new TreeViewException("No level attributed to the node "+value);
        this._level = level;
        this._value = value;
        if (value == undefined) throw new TreeViewException("Json is invalid");
        this._dom = this.build();
        this._token = this.createTokenFromValue(value);
        this._is_dragged = false;
    }

    build() {
        let elem = document.createElement('div');
        elem.setAttribute('class', 'treeviewjs-item');
        elem.setAttribute('id', 'treeviewjs-node-' + this._token);
        elem.style.marginLeft = Node.INDENT * this.level + 'px'
        elem.innerHTML = this.value;
        elem.onmousedown = () => {
            elem.classList.add("dragged");
            this._is_dragged = true;
        }
        elem.onmouseup = () => {
            elem.classList.remove("dragged");
            this._is_dragged = false;
        }
        elem.onmousemove = (e) => {
            if(this._is_dragged) {
                elem.style.marginLeft = e.clientX - 100 + 'px';
                //elem.style.marginTop = e.clientY - 150 + 'px';
                console.log(elem.style.marginTop);
            }
        }
        return elem;
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get token() {
        return this._token;
    }

    createTokenFromValue(value) {
        return this.value.toLowerCase();
    }
}