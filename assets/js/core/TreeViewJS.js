import TreeViewException from "./TreeViewException.js";
import Node from "./Node.js";
import Insertable from "./Insertable.js";

export default class TreeViewJS {

    constructor(element, data_json) {
        this._element = document.getElementById(element);
        this._nodes = []

        // Throw exception if root element is absent
        if(this._element == undefined) {
            throw new TreeViewException("Root element "+element+" not found");
        }

        // release the drag effect from a node on mouse up over all the page
        document.onmouseup = (e) => {
            this.nodes.map(node => {
                node._dom.classList.remove("dragged");
            });
        }

            document.onmousemove = (e) => {
                e.preventDefault();
                [... document.getElementsByClassName('insertable')].map(insertable => {
                    if(e.clientY >= insertable.offsetTop - 10 && e.clientY <= insertable.offsetTop + 20){
                        insertable.classList.add('show');
                    }else{
                        insertable.classList.remove('show');
                    }
                });
            }

        // Read and parse Json to Nodes
        this.nodes = this.loadNodesFromJSON(data_json, 0);
        this.loadInsertableAreas(); // Load all insertable areas for each node
        this.draw(); // Draw the tree with specific indentation structure
    }

    loadNodesFromJSON(data_json, level){
        let nodes = [];
        // For each element found on the json add them to nodes list
        // and set their level on the tree
        data_json.map(object => {
            nodes.push(new Node(this._element, object.text, level));
            if(object.children.length > 0) {
                nodes.push(... this.loadNodesFromJSON(object.children, level+1));
            }
        });
        return nodes;
    }

    loadInsertableAreas() {
        let new_nodes = [];
        this.nodes.map((node, key) => {
            new_nodes.push(new Insertable('t-' + node.token, node.level));
            new_nodes.push(node);
            new_nodes.push(new Insertable('b-' + node.token, node.level));
        });
        this.nodes = new_nodes;
    }

    draw(){
        // draw the HTML elements
        this.nodes.map(nodeOrArray => {
            this._element.appendChild(nodeOrArray._dom);
        });
    }

    static reRender() {
        // For each node from DOM, re-adjust horizontal indentation
        [... document.getElementsByClassName('treeviewjs-item')].map(elem => {
           if(parseInt(elem.style.marginLeft) < 0) elem.style.marginLeft = '0px';
           else{
               elem.style.marginLeft = Math.floor(parseInt(elem.style.marginLeft) / Node.INDENT) * Node.INDENT + 'px';
           }
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