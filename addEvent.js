/**
 * @desc 为对象添加事件对象
 * @param {Object} obj
 * @param {String} event
 * @param {Function} fn
 * @return {Function|Boolean}
 */
function addEvent(obj, event, fn) {
  if (obj.attachEvent) {
    obj.attachEvent('on' + event, fn);
  } else if (obj.addEventListener) {
    obj.addEventListener(event, fn, false);
  } else {
    console.error('add event failed!!');
    return false;
  }
  return fn;
}

modules.export = addEvent;