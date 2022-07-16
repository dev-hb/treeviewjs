export default class TreeViewException extends DOMException {

    constructor(message) {
        // Log out the errors when exception encountered
        super();
        this._message = message ? message : "Error has been encountered";
        console.error(this._message);
        this._message = message;
    }

    get message() {
        return this._message;
    }
}