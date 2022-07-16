import TreeViewException from "./TreeViewException.js";
import Node from "./Node.js";

export default class TreeViewJS {

    constructor(element, data_json) {
        this._element = document.getElementById(element);
        this._nodes = []

        // Throw exception if root element is absent
        if(this._element == undefined) {
            throw new TreeViewException("Root element "+element+" not found");
        }

        // release the drag effect from a node on mouse up over all the page
        document.onmouseup = () => {
            this.nodes.map(node => {
                node._dom.classList.remove("dragged");
            });
        }

        // Read and parse Json to Nodes
        this.nodes = this.loadNodesFromJSON(data_json, 0);
        this.draw(); // Draw the tree with specific indentation structure
    }

    loadNodesFromJSON(data_json, level){
        let nodes = [];
        // For each element found on the json add them to nodes list
        // and set their level on the tree
        data_json.map(object => {
            nodes.push(new Node(object.text, level));
            if(object.children.length > 0) {
                nodes.push(... this.loadNodesFromJSON(object.children, level+1));
            }
        });
        return nodes;
    }

    draw(){
        // draw the HTML elements
        this.nodes.map(nodeOrArray => {
            this._element.appendChild(nodeOrArray._dom);
        });
    }

    get element() {
        return this._element;
    }

    get nodes() {
        return this._nodes;
    }

    set nodes(value) {
        this._nodes = value;
    }
}