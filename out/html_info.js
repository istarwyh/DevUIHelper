"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const html_source_1 = require("./html_source");
class Attribute {
    constructor(name, type, defaultValue, sortDescription, description, isNecessary, isEvent, valueSet = [], completionKind) {
        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
        this.sortDescription = sortDescription;
        this.description = description;
        this.isNecessary = isNecessary;
        this.isEvent = isEvent;
        this.valueSet = valueSet;
        this.completionKind = completionKind;
    }
    getName() {
        return this.name;
    }
    getSortDescription() {
        return this.sortDescription;
    }
    getDescription() { return this.description; }
    getcompletionKind() { return this.completionKind; }
    getValueType() { return this.type; }
    getDefaultValue() { return this.defaultValue; }
    getValueSet() { return this.valueSet; }
}
exports.Attribute = Attribute;
class Element {
    constructor(name, description = "", attritubes = []) {
        this.name = name;
        this.description = description;
        this.attritubes = attritubes;
        this.attributeMap = {};
    }
    ;
    getElement(s) {
        if (s === this.name) {
            return this;
        }
    }
    addAttritube(attribute) {
        this.attritubes.push(attribute);
        this.attributeMap[attribute.getName()] = attribute;
    }
    setDescription(description) {
        this.description = description;
    }
    getName() {
        return this.name;
    }
    getAttributes() {
        return this.attritubes;
    }
    getDescription() {
        return this.description;
    }
    getAttribute(attrname) {
        return this.attributeMap[attrname];
    }
    getcompletionKind() { return vscode_1.CompletionItemKind.Class; }
}
exports.Element = Element;
const EVENT = "event";
const BOOLEAN = "boolean";
const NUMBER = "number";
const STRING = "string";
const OBJECT = "object";
const FUNCTION = "function";
const TEMPLATE = "templateref";
class CParams {
    // result:Element[]=[];
    // elementSet:string[]=[];
    constructor() {
        this.schema = {};
        let _elementName;
        html_source_1.HTML_SCHEMA.forEach(elementInfo => {
            const parts = elementInfo.split("||");
            if (parts.length === 2) {
                _elementName = parts[0].toLocaleLowerCase();
                this.schema[_elementName.toLowerCase()] = new Element(_elementName, parts[1]);
                // console.log(_elementName);
            }
            else {
                // console.log(_elementName);
                const _element = this.schema[_elementName];
                if (_element.getAttribute(parts[0])) {
                    console.log(_element.getName());
                }
                if (_element) {
                    _element.addAttritube(new Attribute(parts[0].toLocaleLowerCase(), parts[1], parts[2], parts[3], parts[4], parts[5] == "true" ? true : false, parts[6] == "true" ? true : false, parts[7].substring(1, parts[7].length - 1).replace(" ", "").split(","), this.changeToCompletionKind(parts[1], parts[6])));
                    // console.log(_element.getAttributes()); 
                }
                else {
                    throw Error(`Something wrong with ${_elementName}`);
                }
            }
        });
    }
    findElement(elemenetName) {
        return this.schema[elemenetName.toLowerCase()];
    }
    changeToCompletionKind(type, isEvent) {
        type = type.toLowerCase();
        if (isEvent === "true") {
            return vscode_1.CompletionItemKind.Function;
        }
        if (type.includes("arrray") || type.includes("[]"))
            return vscode_1.CompletionItemKind.Enum;
        switch (type) {
            case STRING:
                return vscode_1.CompletionItemKind.Text;
            case TEMPLATE:
                return vscode_1.CompletionItemKind.Module;
            // case BOOLEAN:
            //     return CompletionItemKind.
            default:
                return vscode_1.CompletionItemKind.Variable;
        }
    }
}
exports.CParams = CParams;
exports.htmlSource = new CParams();
//# sourceMappingURL=html_info.js.map