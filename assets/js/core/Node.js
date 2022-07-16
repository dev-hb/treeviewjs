import TreeViewException from "./TreeViewException.js";
import TreeViewJS from "./TreeViewJS.js";

export default class Node {
    static REF = 'node';
    static INDENT = 50;
    static HEIGHT = 20;

    constructor(context, value, level) {
        if(level == undefined) throw new TreeViewException("No level attributed to the node "+value);
        this._level = level;
        this._value = value;
        if (value == undefined) throw new TreeViewException("Json is invalid");
        this._token = Node.createTokenFromValue(value+level);
        this._dom = this.build();
        this._is_dragged = false;
        this._context = context;
        this.offsets = {
            x : 0,
            y : 0
        };
    }

    build() {
        // Create the node DOM element with all attributes
        let elem = document.createElement('div');
        elem.setAttribute('class', 'treeviewjs-item');
        elem.setAttribute('id', 'treeviewjs-node-' + this._token);
        elem.style.marginLeft = Node.INDENT * this.level + 'px'
        elem.style.height = Node.HEIGHT + 'px';
        elem.innerHTML = this.value;
        // Create node Events for drag, drop and move
        elem.onmousedown = (e) => {
            elem.classList.add("dragged");
            this._is_dragged = true;
            this.offsets = {
                x: e.offsetX,
                y: e.offsetY
            };
            // [... document.getElementsByClassName('insertable')].map(insertable => {
            //     insertable.classList.add('show');
            // });
        }
        elem.onmouseup = () => {
            this._is_dragged = false;
            elem.classList.remove("dragged");
            [... document.getElementsByClassName('insertable')].map(insertable => {
                insertable.classList.remove('show');
            });
            // Force re-rendering DOM elements
            TreeViewJS.reRender();
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

    static createTokenFromValue(value) {
        // generated a hash token for each node
        return value.toLowerCase().replace(' ', '');
    }
}