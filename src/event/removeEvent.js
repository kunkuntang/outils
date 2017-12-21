const removeEvent = (function() {
  if (window.removeEventListener) {
    return function(obj, evt, fn) {
      obj.removeEventListener(fn)
    }
  } else if (window.detachEvent) {
    return function(obj, evt, fn) {
      obj.detachEvent('on' + evt, fn)
    }
  } else {
    return function(obj, evt, fn) {
      obj['on' + evt] = null
    }
  }
})();

modules.export = removeEvent;