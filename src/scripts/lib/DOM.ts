HTMLElement.prototype.getChildren  = function (selector : string) { 
    return this?.querySelector(selector)
}


HTMLElement.prototype.getAllChildren  = function (selector : string) { 
    return this?.querySelectorAll(selector)
}


export default {}