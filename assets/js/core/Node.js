import TreeViewException from "./TreeViewException";

export default class Node {

    constructor(value, level = 0) {
        this._level = level;
        this._value = value;
        if (value == undefined) throw new TreeViewException("Json is invalid");
        this._token = this.createTokenFromValue(value);
    }

    build() {
        let elem = document.createElement('div');
        elem.setAttribute('class', 'treeview-item');
        elem.setAttribute('id', 'treeview-node-' + this._token);
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
        return value.toLowerCase().replace(" ", "");
    }
}