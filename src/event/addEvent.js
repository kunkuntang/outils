function addEvent(obj, event, fn) {
    if(obj.attachEvent) {
        obj.attachEvent('on' + event, fn);
    } else if (obj.addEventListener) {
        obj.addEventListener(event, fn, false);
    } else {
        console.error('add event failed!!');
    }
}

modules.export = addEvent;