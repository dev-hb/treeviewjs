import TreeViewException from "./TreeViewException.js";
import Node from "./Node.js";

export default class TreeView {

    constructor(element, data_json) {
        this._element = document.getElementById(element);
        this._nodes = []

        if(this._element == undefined) {
            throw new TreeViewException("Root element "+element+" not found");
        }

        self.nodes = this.loadNodesFromJSON(data_json);
    }

    loadNodesFromJSON(data_json){
        let nodes = [];
        data_json.map(object => {
            nodes.push(new Node(object.text));
        });
        return nodes;
    }

    get element() {
        return this._element;
    }

    get nodes() {
        return this._nodes;
    }
}