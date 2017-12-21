const addEvent = (function() {
  if (window.addEventListener) {
    return function(obj, evt, fn, useCapture) {
      return obj.addEventListener(evt, fn, useCapture)
    }
  } else if (window.attachEvent) {
    return function(obj, evt, fn) {
      return obj.attachEvent('on' + evt, fn)
    }
  } else {
    return function(obj, evt, fn) {
      obj['on' + evt] = fn
    }
  }
})();

modules.export = addEvent;