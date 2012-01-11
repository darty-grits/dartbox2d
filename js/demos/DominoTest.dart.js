//  ********** Library dart:core **************
//  ********** Natives dart:core **************
function $throw(e) {
  // If e is not a value, we can use V8's captureStackTrace utility method.
  // TODO(jmesserly): capture the stack trace on other JS engines.
  if (e && (typeof e == 'object') && Error.captureStackTrace) {
    // TODO(jmesserly): this will clobber the e.stack property
    Error.captureStackTrace(e, $throw);
  }
  throw e;
}
Object.prototype.$index = function(i) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$index = function(i) { return this[i]; }
  }
  return this[i];
}
Array.prototype.$index = function(i) { return this[i]; }
String.prototype.$index = function(i) { return this[i]; }
Object.prototype.$setindex = function(i, value) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$setindex = function(i, value) { return this[i] = value; }
  }
  return this[i] = value;
}
Array.prototype.$setindex = function(i, value) { return this[i] = value; }
function $wrap_call$0(fn) { return fn; }
function $wrap_call$1(fn) { return fn; }
function $eq(x, y) {
  if (x == null) return y == null;
  return (typeof(x) == 'number' && typeof(y) == 'number') ||
         (typeof(x) == 'boolean' && typeof(y) == 'boolean') ||
         (typeof(x) == 'string' && typeof(y) == 'string')
    ? x == y : x.$eq(y);
}
// TODO(jimhug): Should this or should it not match equals?
Object.prototype.$eq = function(other) { return this === other; }
function $ne(x, y) {
  if (x == null) return y != null;
  return (typeof(x) == 'number' && typeof(y) == 'number') ||
         (typeof(x) == 'boolean' && typeof(y) == 'boolean') ||
         (typeof(x) == 'string' && typeof(y) == 'string')
    ? x != y : !x.$eq(y);
}
Object.prototype.$typeNameOf = function() {
  if ((typeof(window) != 'undefined' && window.constructor.name == 'DOMWindow')
      || typeof(process) != 'undefined') { // fast-path for Chrome and Node
    return this.constructor.name;
  }
  var str = Object.prototype.toString.call(this);
  str = str.substring(8, str.length - 1);
  if (str == 'Window') {
    str = 'DOMWindow';
  } else if (str == 'Document') {
    str = 'HTMLDocument';
  }
  return str;
}
Object.prototype.get$typeName =  Object.prototype.$typeNameOf;
// ********** Code for Object **************
Object.prototype.noSuchMethod = function(name, args) {
  $throw(new NoSuchMethodException(this, name, args));
}
Object.prototype.addLocal$1 = function($0) {
  return this.noSuchMethod("addLocal", [$0]);
};
Object.prototype.compareTo$1 = function($0) {
  return this.noSuchMethod("compareTo", [$0]);
};
Object.prototype.drawSegment$3 = function($0, $1, $2) {
  return this.noSuchMethod("drawSegment", [$0, $1, $2]);
};
Object.prototype.hasNext$0 = function() {
  return this.noSuchMethod("hasNext", []);
};
Object.prototype.initVelocityConstraints$1 = function($0) {
  return this.noSuchMethod("initVelocityConstraints", [$0]);
};
Object.prototype.mulLocal$1 = function($0) {
  return this.noSuchMethod("mulLocal", [$0]);
};
Object.prototype.next$0 = function() {
  return this.noSuchMethod("next", []);
};
Object.prototype.setCoords$2 = function($0, $1) {
  return this.noSuchMethod("setCoords", [$0, $1]);
};
Object.prototype.setFrom$1 = function($0) {
  return this.noSuchMethod("setFrom", [$0]);
};
Object.prototype.setRange$3 = function($0, $1, $2) {
  return this.noSuchMethod("setRange", [$0, $1, $2]);
};
Object.prototype.solvePositionConstraints$1 = function($0) {
  return this.noSuchMethod("solvePositionConstraints", [$0]);
};
Object.prototype.solveVelocityConstraints$1 = function($0) {
  return this.noSuchMethod("solveVelocityConstraints", [$0]);
};
Object.prototype.subLocal$1 = function($0) {
  return this.noSuchMethod("subLocal", [$0]);
};
Object.prototype.toString$0 = function() {
  return this.toString();
};
Object.prototype.zero$0 = function() {
  return this.noSuchMethod("zero", []);
};
// ********** Code for IndexOutOfRangeException **************
function IndexOutOfRangeException(_index) {
  this._index = _index;
}
IndexOutOfRangeException.prototype.toString = function() {
  return ("IndexOutOfRangeException: " + this._index);
}
IndexOutOfRangeException.prototype.toString$0 = IndexOutOfRangeException.prototype.toString;
// ********** Code for NoSuchMethodException **************
function NoSuchMethodException(_receiver, _functionName, _arguments) {
  this._receiver = _receiver;
  this._functionName = _functionName;
  this._arguments = _arguments;
}
NoSuchMethodException.prototype.toString = function() {
  var sb = new StringBufferImpl("");
  for (var i = (0);
   i < this._arguments.get$length(); i++) {
    if (i > (0)) {
      sb.add(", ");
    }
    sb.add(this._arguments.$index(i));
  }
  sb.add("]");
  return ("NoSuchMethodException - receiver: '" + this._receiver + "' ") + ("function name: '" + this._functionName + "' arguments: [" + sb + "]");
}
NoSuchMethodException.prototype.toString$0 = NoSuchMethodException.prototype.toString;
// ********** Code for IllegalArgumentException **************
function IllegalArgumentException(args) {
  this._args = args;
}
IllegalArgumentException.prototype.toString = function() {
  return ("Illegal argument(s): " + this._args);
}
IllegalArgumentException.prototype.toString$0 = IllegalArgumentException.prototype.toString;
// ********** Code for BadNumberFormatException **************
function BadNumberFormatException(_s) {
  this._s = _s;
}
BadNumberFormatException.prototype.toString = function() {
  return ("BadNumberFormatException: '" + this._s + "'");
}
BadNumberFormatException.prototype.toString$0 = BadNumberFormatException.prototype.toString;
// ********** Code for NoMoreElementsException **************
function NoMoreElementsException() {

}
NoMoreElementsException.prototype.toString = function() {
  return "NoMoreElementsException";
}
NoMoreElementsException.prototype.toString$0 = NoMoreElementsException.prototype.toString;
// ********** Code for EmptyQueueException **************
function EmptyQueueException() {

}
EmptyQueueException.prototype.toString = function() {
  return "EmptyQueueException";
}
EmptyQueueException.prototype.toString$0 = EmptyQueueException.prototype.toString;
// ********** Code for NotImplementedException **************
function NotImplementedException() {

}
NotImplementedException.prototype.toString = function() {
  return "NotImplementedException";
}
NotImplementedException.prototype.toString$0 = NotImplementedException.prototype.toString;
// ********** Code for Expect **************
function Expect() {}
Expect.equals = function(expected, actual, reason) {
  if ($eq(expected, actual)) return;
  var msg = Expect._getMessage(reason);
  Expect._fail(("Expect.equals(expected: <" + expected + ">, actual: <" + actual + ">" + msg + ") fails."));
}
Expect._getMessage = function(reason) {
  return (reason == null) ? "" : (", '" + reason + "'");
}
Expect._fail = function(message) {
  $throw(new ExpectException(message));
}
// ********** Code for ExpectException **************
function ExpectException(message) {
  this.message = message;
}
ExpectException.prototype.toString = function() {
  return this.message;
}
ExpectException.prototype.toString$0 = ExpectException.prototype.toString;
// ********** Code for Math **************
Math.min = function(a, b) {
  if (a == b) return a;
    if (a < b) {
      if (isNaN(b)) return b;
      else return a;
    }
    if (isNaN(a)) return a;
    else return b;
}
Math.max = function(a, b) {
  return (a >= b) ? a : b;
}
// ********** Code for top level **************
//  ********** Library dart:coreimpl **************
// ********** Code for ListFactory **************
ListFactory = Array;
ListFactory.ListFactory$from$factory = function(other) {
  var list = [];
  for (var $$i = other.iterator(); $$i.hasNext$0(); ) {
    var e = $$i.next$0();
    list.add(e);
  }
  return list;
}
ListFactory.prototype.get$length = function() { return this.length; };
ListFactory.prototype.set$length = function(value) { return this.length = value; };
ListFactory.prototype.add = function(value) {
  this.push(value);
}
ListFactory.prototype.clear = function() {
  this.set$length((0));
}
ListFactory.prototype.getRange = function(start, length) {
  return this.slice(start, start + length);
}
ListFactory.prototype.setRange = function(start, length, from, startFrom) {
  if (length == (0)) return;
  if (length < (0)) $throw(new IllegalArgumentException("length is negative"));
  if (start < (0)) $throw(new IndexOutOfRangeException(start));
  var end = start + length;
  if (end > this.get$length()) $throw(new IndexOutOfRangeException(end));
  if (startFrom < (0)) $throw(new IndexOutOfRangeException(startFrom));
  var endFrom = startFrom + length;
  if (endFrom > from.get$length()) $throw(new IndexOutOfRangeException(endFrom));
  for (var i = (0);
   i < length; (i = i + (1))) this.$setindex(start + i, from.$index(startFrom + i));
}
ListFactory.prototype.iterator = function() {
  return new ListIterator(this);
}
ListFactory.prototype.setRange$3 = function($0, $1, $2) {
  return this.setRange($0, $1, $2, (0));
};
ListFactory_Body = ListFactory;
ListFactory_ClipVertex = ListFactory;
ListFactory_Contact = ListFactory;
ListFactory_ContactConstraint = ListFactory;
ListFactory_ContactConstraintPoint = ListFactory;
ListFactory_ContactRegister = ListFactory;
ListFactory_DynamicTreeNode = ListFactory;
ListFactory_E = ListFactory;
ListFactory_Joint = ListFactory;
ListFactory_List_ContactRegister = ListFactory;
ListFactory_ManifoldPoint = ListFactory;
ListFactory_Pair = ListFactory;
ListFactory_Position = ListFactory;
ListFactory_SimplexVertex = ListFactory;
ListFactory_dart_core_String = ListFactory;
ListFactory_TimeOfImpactConstraint = ListFactory;
ListFactory_Vector = ListFactory;
ListFactory_Velocity = ListFactory;
ListFactory_int = ListFactory;
ListFactory_num = ListFactory;
// ********** Code for ListIterator **************
function ListIterator(array) {
  this._array = array;
  this._pos = (0);
}
ListIterator.prototype.hasNext = function() {
  return this._array.get$length() > this._pos;
}
ListIterator.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$0001);
  }
  return this._array.$index(this._pos++);
}
ListIterator.prototype.hasNext$0 = ListIterator.prototype.hasNext;
ListIterator.prototype.next$0 = ListIterator.prototype.next;
// ********** Code for NumImplementation **************
NumImplementation = Number;
NumImplementation.prototype.isNaN = function() {
  'use strict'; return isNaN(this);
}
NumImplementation.prototype.isNegative = function() {
  'use strict'; return this == 0 ? (1 / this) < 0 : this < 0;
}
NumImplementation.prototype.abs = function() {
  'use strict'; return Math.abs(this);
}
NumImplementation.prototype.round = function() {
  'use strict'; return Math.round(this);
}
NumImplementation.prototype.floor = function() {
  'use strict'; return Math.floor(this);
}
NumImplementation.prototype.toInt = function() {
    'use strict';
    if (isNaN(this)) $throw(new BadNumberFormatException("NaN"));
    if ((this == Infinity) || (this == -Infinity)) {
      $throw(new BadNumberFormatException("Infinity"));
    }
    var truncated = (this < 0) ? Math.ceil(this) : Math.floor(this);
    if (truncated == -0.0) return 0;
    return truncated;
}
NumImplementation.prototype.toDouble = function() {
  'use strict'; return this + 0;
}
NumImplementation.prototype.toStringAsFixed = function(fractionDigits) {
  'use strict'; return this.toFixed(fractionDigits);
}
NumImplementation.prototype.toRadixString = function(radix) {
  'use strict'; return this.toString(radix)
}
NumImplementation.prototype.compareTo = function(other) {
  var thisValue = this.toDouble();
  if (thisValue < other) {
    return (-1);
  }
  else if (thisValue > other) {
    return (1);
  }
  else if (thisValue == other) {
    if (thisValue == (0)) {
      var thisIsNegative = this.isNegative();
      var otherIsNegative = other.isNegative();
      if ($eq(thisIsNegative, otherIsNegative)) return (0);
      if (thisIsNegative) return (-1);
      return (1);
    }
    return (0);
  }
  else if (this.isNaN()) {
    if (other.isNaN()) {
      return (0);
    }
    return (1);
  }
  else {
    return (-1);
  }
}
NumImplementation.prototype.compareTo$1 = NumImplementation.prototype.compareTo;
// ********** Code for DoubleLinkedQueueEntry **************
function DoubleLinkedQueueEntry(e) {
  this._element = e;
}
DoubleLinkedQueueEntry.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry.prototype.append = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this, this._next);
}
DoubleLinkedQueueEntry.prototype.remove = function() {
  this._previous._next = this._next;
  this._next._previous = this._previous;
  this._next = null;
  this._previous = null;
  return this._element;
}
DoubleLinkedQueueEntry.prototype.get$element = function() {
  return this._element;
}
// ********** Code for DoubleLinkedQueueEntry_E **************
/** Implements extends for Dart classes on JavaScript prototypes. */
function $inherits(child, parent) {
  if (child.prototype.__proto__) {
    child.prototype.__proto__ = parent.prototype;
  } else {
    function tmp() {};
    tmp.prototype = parent.prototype;
    child.prototype = new tmp();
    child.prototype.constructor = child;
  }
}
$inherits(DoubleLinkedQueueEntry_E, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_E(e) {
  this._element = e;
}
DoubleLinkedQueueEntry_E.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry_E.prototype.append = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this, this._next);
}
DoubleLinkedQueueEntry_E.prototype.remove = function() {
  this._previous._next = this._next;
  this._next._previous = this._previous;
  this._next = null;
  this._previous = null;
  return this._element;
}
// ********** Code for DoubleLinkedQueueEntry_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueueEntry_KeyValuePair_K$V, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_KeyValuePair_K$V() {}
// ********** Code for _DoubleLinkedQueueEntrySentinel **************
$inherits(_DoubleLinkedQueueEntrySentinel, DoubleLinkedQueueEntry_E);
function _DoubleLinkedQueueEntrySentinel() {
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
_DoubleLinkedQueueEntrySentinel.prototype.remove = function() {
  $throw(const$0000);
}
_DoubleLinkedQueueEntrySentinel.prototype.get$element = function() {
  $throw(const$0000);
}
// ********** Code for _DoubleLinkedQueueEntrySentinel_E **************
$inherits(_DoubleLinkedQueueEntrySentinel_E, _DoubleLinkedQueueEntrySentinel);
function _DoubleLinkedQueueEntrySentinel_E() {
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
// ********** Code for DoubleLinkedQueue **************
function DoubleLinkedQueue() {
  this._sentinel = new _DoubleLinkedQueueEntrySentinel_E();
}
DoubleLinkedQueue.prototype.addFirst = function(value) {
  this._sentinel.append(value);
}
DoubleLinkedQueue.prototype.removeFirst = function() {
  return this._sentinel._next.remove();
}
DoubleLinkedQueue.prototype.isEmpty = function() {
  return (this._sentinel._next == this._sentinel);
}
DoubleLinkedQueue.prototype.iterator = function() {
  return new _DoubleLinkedQueueIterator_E(this._sentinel);
}
// ********** Code for DoubleLinkedQueue_CircleContact **************
$inherits(DoubleLinkedQueue_CircleContact, DoubleLinkedQueue);
function DoubleLinkedQueue_CircleContact() {}
// ********** Code for DoubleLinkedQueue_DynamicTreeNode **************
$inherits(DoubleLinkedQueue_DynamicTreeNode, DoubleLinkedQueue);
function DoubleLinkedQueue_DynamicTreeNode() {}
// ********** Code for DoubleLinkedQueue_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueue_KeyValuePair_K$V, DoubleLinkedQueue);
function DoubleLinkedQueue_KeyValuePair_K$V() {}
// ********** Code for DoubleLinkedQueue_PolygonAndCircleContact **************
$inherits(DoubleLinkedQueue_PolygonAndCircleContact, DoubleLinkedQueue);
function DoubleLinkedQueue_PolygonAndCircleContact() {}
// ********** Code for DoubleLinkedQueue_PolygonContact **************
$inherits(DoubleLinkedQueue_PolygonContact, DoubleLinkedQueue);
function DoubleLinkedQueue_PolygonContact() {}
// ********** Code for _DoubleLinkedQueueIterator **************
function _DoubleLinkedQueueIterator(_sentinel) {
  this._sentinel = _sentinel;
  this._currentEntry = this._sentinel;
}
_DoubleLinkedQueueIterator.prototype.hasNext = function() {
  return this._currentEntry._next != this._sentinel;
}
_DoubleLinkedQueueIterator.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$0001);
  }
  this._currentEntry = this._currentEntry._next;
  return this._currentEntry.get$element();
}
_DoubleLinkedQueueIterator.prototype.hasNext$0 = _DoubleLinkedQueueIterator.prototype.hasNext;
_DoubleLinkedQueueIterator.prototype.next$0 = _DoubleLinkedQueueIterator.prototype.next;
// ********** Code for _DoubleLinkedQueueIterator_E **************
$inherits(_DoubleLinkedQueueIterator_E, _DoubleLinkedQueueIterator);
function _DoubleLinkedQueueIterator_E(_sentinel) {
  this._sentinel = _sentinel;
  this._currentEntry = this._sentinel;
}
// ********** Code for StringBufferImpl **************
function StringBufferImpl(content) {
  this.clear();
  this.add(content);
}
StringBufferImpl.prototype.add = function(obj) {
  var str = obj.toString();
  if (str == null || str.isEmpty()) return this;
  this._buffer.add(str);
  this._length += str.length;
  return this;
}
StringBufferImpl.prototype.clear = function() {
  this._buffer = new Array();
  this._length = (0);
  return this;
}
StringBufferImpl.prototype.toString = function() {
  if (this._buffer.get$length() == (0)) return "";
  if (this._buffer.get$length() == (1)) return this._buffer.$index((0));
  var result = StringBase.concatAll(this._buffer);
  this._buffer.clear();
  this._buffer.add(result);
  return result;
}
StringBufferImpl.prototype.toString$0 = StringBufferImpl.prototype.toString;
// ********** Code for StringBase **************
function StringBase() {}
StringBase.join = function(strings, separator) {
  if (strings.get$length() == (0)) return "";
  var s = strings.$index((0));
  for (var i = (1);
   i < strings.get$length(); i++) {
    s = s + separator + strings.$index(i);
  }
  return s;
}
StringBase.concatAll = function(strings) {
  return StringBase.join(strings, "");
}
// ********** Code for StringImplementation **************
StringImplementation = String;
StringImplementation.prototype.isEmpty = function() {
  return this.length == (0);
}
StringImplementation.prototype.compareTo = function(other) {
  'use strict'; return this == other ? 0 : this < other ? -1 : 1;
}
StringImplementation.prototype.compareTo$1 = StringImplementation.prototype.compareTo;
// ********** Code for _Worker **************
// ********** Code for top level **************
//  ********** Library dom **************
// ********** Code for dom_Window **************
// ********** Code for dom_AbstractWorker **************
// ********** Code for dom_ArrayBuffer **************
// ********** Code for dom_ArrayBufferView **************
// ********** Code for dom_Attr **************
// ********** Code for dom_AudioBuffer **************
// ********** Code for dom_AudioBufferSourceNode **************
// ********** Code for dom_AudioChannelMerger **************
// ********** Code for dom_AudioChannelSplitter **************
// ********** Code for dom_AudioContext **************
// ********** Code for dom_AudioDestinationNode **************
// ********** Code for dom_AudioGain **************
// ********** Code for dom_AudioGainNode **************
// ********** Code for dom_AudioListener **************
// ********** Code for dom_AudioNode **************
// ********** Code for dom_AudioPannerNode **************
// ********** Code for dom_AudioParam **************
// ********** Code for dom_AudioProcessingEvent **************
// ********** Code for dom_AudioSourceNode **************
// ********** Code for dom_BarInfo **************
// ********** Code for dom_BeforeLoadEvent **************
// ********** Code for dom_BiquadFilterNode **************
function $dynamic(name) {
  var f = Object.prototype[name];
  if (f && f.methods) return f.methods;

  var methods = {};
  if (f) methods.Object = f;
  function $dynamicBind() {
    // Find the target method
    var obj = this;
    var tag = obj.$typeNameOf();
    var method = methods[tag];
    if (!method) {
      var table = $dynamicMetadata;
      for (var i = 0; i < table.length; i++) {
        var entry = table[i];
        if (entry.map.hasOwnProperty(tag)) {
          method = methods[entry.tag];
          if (method) break;
        }
      }
    }
    method = method || methods.Object;
    // Patch the prototype, but don't overwrite an existing stub, like
    // the one on Object.prototype.
    var proto = Object.getPrototypeOf(obj);
    if (!proto.hasOwnProperty(name)) proto[name] = method;

    return method.apply(this, Array.prototype.slice.call(arguments));
  };
  $dynamicBind.methods = methods;
  Object.prototype[name] = $dynamicBind;
  return methods;
}
if (typeof $dynamicMetadata == 'undefined') $dynamicMetadata = [];

function $dynamicSetMetadata(inputTable) {
  // TODO: Deal with light isolates.
  var table = [];
  for (var i = 0; i < inputTable.length; i++) {
    var tag = inputTable[i][0];
    var tags = inputTable[i][1];
    var map = {};
    var tagNames = tags.split('|');
    for (var j = 0; j < tagNames.length; j++) {
      map[tagNames[j]] = true;
    }
    table.push({tag: tag, tags: tags, map: map});
  }
  $dynamicMetadata = table;
}
$dynamic("get$type").BiquadFilterNode = function() { return this.type; };
$dynamic("set$type").BiquadFilterNode = function(value) { return this.type = value; };
// ********** Code for dom_Blob **************
$dynamic("get$type").Blob = function() { return this.type; };
$dynamic("set$type").Blob = function(value) { return this.type = value; };
// ********** Code for dom_CDATASection **************
// ********** Code for dom_CSSCharsetRule **************
// ********** Code for dom_CSSFontFaceRule **************
// ********** Code for dom_CSSImportRule **************
// ********** Code for dom_CSSMediaRule **************
// ********** Code for dom_CSSPageRule **************
// ********** Code for dom_CSSPrimitiveValue **************
// ********** Code for dom_CSSRule **************
$dynamic("get$type").CSSRule = function() { return this.type; };
$dynamic("set$type").CSSRule = function(value) { return this.type = value; };
// ********** Code for dom_CSSRuleList **************
// ********** Code for dom_CSSStyleDeclaration **************
// ********** Code for dom_CSSStyleRule **************
// ********** Code for dom_CSSStyleSheet **************
// ********** Code for dom_CSSUnknownRule **************
// ********** Code for dom_CSSValue **************
// ********** Code for dom_CSSValueList **************
// ********** Code for dom_CanvasGradient **************
// ********** Code for dom_CanvasPattern **************
// ********** Code for dom_CanvasPixelArray **************
// ********** Code for dom_CanvasRenderingContext **************
// ********** Code for dom_CanvasRenderingContext2D **************
// ********** Code for dom_CharacterData **************
// ********** Code for dom_ClientRect **************
// ********** Code for dom_ClientRectList **************
// ********** Code for dom_Clipboard **************
// ********** Code for dom_CloseEvent **************
// ********** Code for dom_Comment **************
// ********** Code for dom_CompositionEvent **************
// ********** Code for Console **************
Console = (typeof console == 'undefined' ? {} : console);
// ********** Code for dom_ConvolverNode **************
// ********** Code for dom_Coordinates **************
// ********** Code for dom_Counter **************
// ********** Code for dom_Crypto **************
// ********** Code for dom_CustomEvent **************
// ********** Code for dom_DOMApplicationCache **************
// ********** Code for dom_DOMException **************
$dynamic("toString$0").DOMException = function() {
  return this.toString();
};
// ********** Code for dom_DOMFileSystem **************
// ********** Code for dom_DOMFileSystemSync **************
// ********** Code for dom_DOMFormData **************
// ********** Code for dom_DOMImplementation **************
// ********** Code for dom_DOMMimeType **************
$dynamic("get$type").DOMMimeType = function() { return this.type; };
$dynamic("set$type").DOMMimeType = function(value) { return this.type = value; };
// ********** Code for dom_DOMMimeTypeArray **************
// ********** Code for dom_DOMParser **************
// ********** Code for dom_DOMPlugin **************
// ********** Code for dom_DOMPluginArray **************
// ********** Code for dom_DOMSelection **************
$dynamic("get$type").DOMSelection = function() { return this.type; };
$dynamic("set$type").DOMSelection = function(value) { return this.type = value; };
$dynamic("toString$0").DOMSelection = function() {
  return this.toString();
};
// ********** Code for dom_DOMSettableTokenList **************
// ********** Code for dom_DOMTokenList **************
$dynamic("toString$0").DOMTokenList = function() {
  return this.toString();
};
// ********** Code for dom_DOMURL **************
// ********** Code for dom_DOMWindow **************
// ********** Code for dom_DataTransferItem **************
$dynamic("get$type").DataTransferItem = function() { return this.type; };
$dynamic("set$type").DataTransferItem = function(value) { return this.type = value; };
// ********** Code for dom_DataTransferItemList **************
// ********** Code for dom_DataView **************
// ********** Code for dom_Database **************
// ********** Code for dom_DatabaseSync **************
// ********** Code for dom_DedicatedWorkerContext **************
// ********** Code for dom_DelayNode **************
// ********** Code for dom_DeviceMotionEvent **************
// ********** Code for dom_DeviceOrientationEvent **************
// ********** Code for dom_DirectoryEntry **************
// ********** Code for dom_DirectoryEntrySync **************
// ********** Code for dom_DirectoryReader **************
// ********** Code for dom_DirectoryReaderSync **************
// ********** Code for dom_Document **************
// ********** Code for dom_DocumentFragment **************
// ********** Code for dom_DocumentType **************
// ********** Code for dom_DynamicsCompressorNode **************
// ********** Code for dom_Element **************
// ********** Code for dom_ElementTimeControl **************
// ********** Code for dom_ElementTraversal **************
// ********** Code for dom_Entity **************
// ********** Code for dom_EntityReference **************
// ********** Code for dom_Entry **************
// ********** Code for dom_EntryArray **************
// ********** Code for dom_EntryArraySync **************
// ********** Code for dom_EntrySync **************
// ********** Code for dom_ErrorEvent **************
// ********** Code for dom_Event **************
$dynamic("get$type").Event = function() { return this.type; };
$dynamic("set$type").Event = function(value) { return this.type = value; };
// ********** Code for dom_EventException **************
$dynamic("toString$0").EventException = function() {
  return this.toString();
};
// ********** Code for dom_EventSource **************
// ********** Code for dom_EventTarget **************
// ********** Code for dom_File **************
// ********** Code for dom_FileEntry **************
// ********** Code for dom_FileEntrySync **************
// ********** Code for dom_FileError **************
// ********** Code for dom_FileException **************
$dynamic("toString$0").FileException = function() {
  return this.toString();
};
// ********** Code for dom_FileList **************
// ********** Code for dom_FileReader **************
// ********** Code for dom_FileReaderSync **************
// ********** Code for dom_FileWriter **************
$dynamic("get$position").FileWriter = function() { return this.position; };
$dynamic("set$position").FileWriter = function(value) { return this.position = value; };
// ********** Code for dom_FileWriterSync **************
$dynamic("get$position").FileWriterSync = function() { return this.position; };
$dynamic("set$position").FileWriterSync = function(value) { return this.position = value; };
// ********** Code for dom_Float32Array **************
$dynamic("get$length").Float32Array = function() { return this.length; };
$dynamic("set$length").Float32Array = function(value) { return this.length = value; };
// ********** Code for dom_Float64Array **************
$dynamic("get$length").Float64Array = function() { return this.length; };
$dynamic("set$length").Float64Array = function(value) { return this.length = value; };
// ********** Code for dom_Geolocation **************
// ********** Code for dom_Geoposition **************
// ********** Code for dom_HTMLAllCollection **************
// ********** Code for dom_HTMLAnchorElement **************
$dynamic("get$type").HTMLAnchorElement = function() { return this.type; };
$dynamic("set$type").HTMLAnchorElement = function(value) { return this.type = value; };
$dynamic("toString$0").HTMLAnchorElement = function() {
  return this.toString();
};
// ********** Code for dom_HTMLAppletElement **************
// ********** Code for dom_HTMLAreaElement **************
// ********** Code for dom_HTMLAudioElement **************
// ********** Code for dom_HTMLBRElement **************
// ********** Code for dom_HTMLBaseElement **************
// ********** Code for dom_HTMLBaseFontElement **************
// ********** Code for dom_HTMLBodyElement **************
// ********** Code for dom_HTMLButtonElement **************
$dynamic("get$type").HTMLButtonElement = function() { return this.type; };
$dynamic("set$type").HTMLButtonElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLCanvasElement **************
// ********** Code for dom_HTMLCollection **************
// ********** Code for dom_HTMLDListElement **************
// ********** Code for dom_HTMLDataListElement **************
// ********** Code for dom_HTMLDetailsElement **************
// ********** Code for dom_HTMLDirectoryElement **************
// ********** Code for dom_HTMLDivElement **************
// ********** Code for dom_HTMLDocument **************
// ********** Code for dom_HTMLElement **************
$dynamic("get$id").HTMLElement = function() { return this.id; };
$dynamic("set$id").HTMLElement = function(value) { return this.id = value; };
// ********** Code for dom_HTMLEmbedElement **************
$dynamic("get$type").HTMLEmbedElement = function() { return this.type; };
$dynamic("set$type").HTMLEmbedElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLFieldSetElement **************
// ********** Code for dom_HTMLFontElement **************
// ********** Code for dom_HTMLFormElement **************
// ********** Code for dom_HTMLFrameElement **************
// ********** Code for dom_HTMLFrameSetElement **************
// ********** Code for dom_HTMLHRElement **************
// ********** Code for dom_HTMLHeadElement **************
// ********** Code for dom_HTMLHeadingElement **************
// ********** Code for dom_HTMLHtmlElement **************
// ********** Code for dom_HTMLIFrameElement **************
// ********** Code for dom_HTMLImageElement **************
$dynamic("get$x").HTMLImageElement = function() { return this.x; };
$dynamic("set$x").HTMLImageElement = function(value) { return this.x = value; };
$dynamic("get$y").HTMLImageElement = function() { return this.y; };
$dynamic("set$y").HTMLImageElement = function(value) { return this.y = value; };
// ********** Code for dom_HTMLInputElement **************
$dynamic("get$type").HTMLInputElement = function() { return this.type; };
$dynamic("set$type").HTMLInputElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLIsIndexElement **************
// ********** Code for dom_HTMLKeygenElement **************
$dynamic("get$type").HTMLKeygenElement = function() { return this.type; };
$dynamic("set$type").HTMLKeygenElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLLIElement **************
$dynamic("get$type").HTMLLIElement = function() { return this.type; };
$dynamic("set$type").HTMLLIElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLLabelElement **************
// ********** Code for dom_HTMLLegendElement **************
// ********** Code for dom_HTMLLinkElement **************
$dynamic("get$type").HTMLLinkElement = function() { return this.type; };
$dynamic("set$type").HTMLLinkElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLMapElement **************
// ********** Code for dom_HTMLMarqueeElement **************
// ********** Code for dom_HTMLMediaElement **************
// ********** Code for dom_HTMLMenuElement **************
// ********** Code for dom_HTMLMetaElement **************
// ********** Code for dom_HTMLMeterElement **************
// ********** Code for dom_HTMLModElement **************
// ********** Code for dom_HTMLOListElement **************
$dynamic("get$type").HTMLOListElement = function() { return this.type; };
$dynamic("set$type").HTMLOListElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLObjectElement **************
$dynamic("get$type").HTMLObjectElement = function() { return this.type; };
$dynamic("set$type").HTMLObjectElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLOptGroupElement **************
// ********** Code for dom_HTMLOptionElement **************
// ********** Code for dom_HTMLOptionsCollection **************
// ********** Code for dom_HTMLOutputElement **************
$dynamic("get$type").HTMLOutputElement = function() { return this.type; };
$dynamic("set$type").HTMLOutputElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLParagraphElement **************
// ********** Code for dom_HTMLParamElement **************
$dynamic("get$type").HTMLParamElement = function() { return this.type; };
$dynamic("set$type").HTMLParamElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLPreElement **************
// ********** Code for dom_HTMLProgressElement **************
$dynamic("get$position").HTMLProgressElement = function() { return this.position; };
$dynamic("set$position").HTMLProgressElement = function(value) { return this.position = value; };
// ********** Code for dom_HTMLPropertiesCollection **************
// ********** Code for dom_HTMLQuoteElement **************
// ********** Code for dom_HTMLScriptElement **************
$dynamic("get$type").HTMLScriptElement = function() { return this.type; };
$dynamic("set$type").HTMLScriptElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLSelectElement **************
$dynamic("get$type").HTMLSelectElement = function() { return this.type; };
$dynamic("set$type").HTMLSelectElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLSourceElement **************
$dynamic("get$type").HTMLSourceElement = function() { return this.type; };
$dynamic("set$type").HTMLSourceElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLSpanElement **************
// ********** Code for dom_HTMLStyleElement **************
$dynamic("get$type").HTMLStyleElement = function() { return this.type; };
$dynamic("set$type").HTMLStyleElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLTableCaptionElement **************
// ********** Code for dom_HTMLTableCellElement **************
// ********** Code for dom_HTMLTableColElement **************
// ********** Code for dom_HTMLTableElement **************
// ********** Code for dom_HTMLTableRowElement **************
// ********** Code for dom_HTMLTableSectionElement **************
// ********** Code for dom_HTMLTextAreaElement **************
$dynamic("get$type").HTMLTextAreaElement = function() { return this.type; };
$dynamic("set$type").HTMLTextAreaElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLTitleElement **************
// ********** Code for dom_HTMLTrackElement **************
// ********** Code for dom_HTMLUListElement **************
$dynamic("get$type").HTMLUListElement = function() { return this.type; };
$dynamic("set$type").HTMLUListElement = function(value) { return this.type = value; };
// ********** Code for dom_HTMLUnknownElement **************
// ********** Code for dom_HTMLVideoElement **************
// ********** Code for dom_HashChangeEvent **************
// ********** Code for dom_HighPass2FilterNode **************
// ********** Code for dom_History **************
// ********** Code for dom_IDBAny **************
// ********** Code for dom_IDBCursor **************
// ********** Code for dom_IDBCursorWithValue **************
// ********** Code for dom_IDBDatabase **************
// ********** Code for dom_IDBDatabaseError **************
// ********** Code for dom_IDBDatabaseException **************
$dynamic("toString$0").IDBDatabaseException = function() {
  return this.toString();
};
// ********** Code for dom_IDBFactory **************
// ********** Code for dom_IDBIndex **************
// ********** Code for dom_IDBKey **************
// ********** Code for dom_IDBKeyRange **************
// ********** Code for dom_IDBObjectStore **************
// ********** Code for dom_IDBRequest **************
// ********** Code for dom_IDBTransaction **************
// ********** Code for dom_IDBVersionChangeEvent **************
// ********** Code for dom_IDBVersionChangeRequest **************
// ********** Code for dom_ImageData **************
// ********** Code for dom_InjectedScriptHost **************
$dynamic("get$type").InjectedScriptHost = function() {
  return this.type.bind(this);
}
// ********** Code for dom_InspectorFrontendHost **************
// ********** Code for dom_Int16Array **************
$dynamic("get$length").Int16Array = function() { return this.length; };
$dynamic("set$length").Int16Array = function(value) { return this.length = value; };
// ********** Code for dom_Int32Array **************
$dynamic("get$length").Int32Array = function() { return this.length; };
$dynamic("set$length").Int32Array = function(value) { return this.length = value; };
// ********** Code for dom_Int8Array **************
$dynamic("get$length").Int8Array = function() { return this.length; };
$dynamic("set$length").Int8Array = function(value) { return this.length = value; };
// ********** Code for dom_JavaScriptAudioNode **************
// ********** Code for dom_JavaScriptCallFrame **************
$dynamic("get$type").JavaScriptCallFrame = function() { return this.type; };
$dynamic("set$type").JavaScriptCallFrame = function(value) { return this.type = value; };
// ********** Code for dom_KeyboardEvent **************
// ********** Code for dom_Location **************
$dynamic("toString$0").Location = function() {
  return this.toString();
};
// ********** Code for dom_LowPass2FilterNode **************
// ********** Code for dom_MediaController **************
// ********** Code for dom_MediaElementAudioSourceNode **************
// ********** Code for dom_MediaError **************
// ********** Code for dom_MediaList **************
// ********** Code for dom_MediaQueryList **************
// ********** Code for dom_MediaQueryListListener **************
// ********** Code for dom_MemoryInfo **************
// ********** Code for dom_MessageChannel **************
// ********** Code for dom_MessageEvent **************
// ********** Code for dom_MessagePort **************
// ********** Code for dom_Metadata **************
// ********** Code for dom_MouseEvent **************
$dynamic("get$x").MouseEvent = function() { return this.x; };
$dynamic("set$x").MouseEvent = function(value) { return this.x = value; };
$dynamic("get$y").MouseEvent = function() { return this.y; };
$dynamic("set$y").MouseEvent = function(value) { return this.y = value; };
// ********** Code for dom_MutationCallback **************
// ********** Code for dom_MutationEvent **************
// ********** Code for dom_MutationRecord **************
$dynamic("get$type").MutationRecord = function() { return this.type; };
$dynamic("set$type").MutationRecord = function(value) { return this.type = value; };
// ********** Code for dom_NamedNodeMap **************
// ********** Code for dom_Navigator **************
// ********** Code for dom_Node **************
// ********** Code for dom_NodeFilter **************
// ********** Code for dom_NodeIterator **************
// ********** Code for dom_NodeList **************
// ********** Code for dom_NodeSelector **************
// ********** Code for dom_Notation **************
// ********** Code for dom_Notification **************
// ********** Code for dom_NotificationCenter **************
// ********** Code for dom_OESStandardDerivatives **************
// ********** Code for dom_OESTextureFloat **************
// ********** Code for dom_OESVertexArrayObject **************
// ********** Code for dom_OfflineAudioCompletionEvent **************
// ********** Code for dom_OperationNotAllowedException **************
$dynamic("toString$0").OperationNotAllowedException = function() {
  return this.toString();
};
// ********** Code for dom_OverflowEvent **************
// ********** Code for dom_PageTransitionEvent **************
// ********** Code for dom_Performance **************
// ********** Code for dom_PerformanceNavigation **************
$dynamic("get$type").PerformanceNavigation = function() { return this.type; };
$dynamic("set$type").PerformanceNavigation = function(value) { return this.type = value; };
// ********** Code for dom_PerformanceTiming **************
// ********** Code for dom_PointerLock **************
// ********** Code for dom_PopStateEvent **************
// ********** Code for dom_PositionError **************
// ********** Code for dom_ProcessingInstruction **************
// ********** Code for dom_ProgressEvent **************
// ********** Code for dom_RGBColor **************
// ********** Code for dom_Range **************
$dynamic("toString$0").Range = function() {
  return this.toString();
};
// ********** Code for dom_RangeException **************
$dynamic("toString$0").RangeException = function() {
  return this.toString();
};
// ********** Code for dom_RealtimeAnalyserNode **************
// ********** Code for dom_Rect **************
// ********** Code for dom_SQLError **************
// ********** Code for dom_SQLException **************
// ********** Code for dom_SQLResultSet **************
// ********** Code for dom_SQLResultSetRowList **************
// ********** Code for dom_SQLTransaction **************
// ********** Code for dom_SQLTransactionSync **************
// ********** Code for dom_SVGAElement **************
// ********** Code for dom_SVGAltGlyphDefElement **************
// ********** Code for dom_SVGAltGlyphElement **************
// ********** Code for dom_SVGAltGlyphItemElement **************
// ********** Code for dom_SVGAngle **************
// ********** Code for dom_SVGAnimateColorElement **************
// ********** Code for dom_SVGAnimateElement **************
// ********** Code for dom_SVGAnimateMotionElement **************
// ********** Code for dom_SVGAnimateTransformElement **************
// ********** Code for dom_SVGAnimatedAngle **************
// ********** Code for dom_SVGAnimatedBoolean **************
// ********** Code for dom_SVGAnimatedEnumeration **************
// ********** Code for dom_SVGAnimatedInteger **************
// ********** Code for dom_SVGAnimatedLength **************
// ********** Code for dom_SVGAnimatedLengthList **************
// ********** Code for dom_SVGAnimatedNumber **************
// ********** Code for dom_SVGAnimatedNumberList **************
// ********** Code for dom_SVGAnimatedPreserveAspectRatio **************
// ********** Code for dom_SVGAnimatedRect **************
// ********** Code for dom_SVGAnimatedString **************
// ********** Code for dom_SVGAnimatedTransformList **************
// ********** Code for dom_SVGAnimationElement **************
// ********** Code for dom_SVGCircleElement **************
// ********** Code for dom_SVGClipPathElement **************
// ********** Code for dom_SVGColor **************
// ********** Code for dom_SVGComponentTransferFunctionElement **************
$dynamic("get$type").SVGComponentTransferFunctionElement = function() { return this.type; };
$dynamic("set$type").SVGComponentTransferFunctionElement = function(value) { return this.type = value; };
// ********** Code for dom_SVGCursorElement **************
$dynamic("get$x").SVGCursorElement = function() { return this.x; };
$dynamic("set$x").SVGCursorElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGCursorElement = function() { return this.y; };
$dynamic("set$y").SVGCursorElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGDefsElement **************
// ********** Code for dom_SVGDescElement **************
// ********** Code for dom_SVGDocument **************
// ********** Code for dom_SVGElement **************
$dynamic("get$id").SVGElement = function() { return this.id; };
$dynamic("set$id").SVGElement = function(value) { return this.id = value; };
// ********** Code for dom_SVGElementInstance **************
// ********** Code for dom_SVGElementInstanceList **************
// ********** Code for dom_SVGEllipseElement **************
// ********** Code for dom_SVGException **************
$dynamic("toString$0").SVGException = function() {
  return this.toString();
};
// ********** Code for dom_SVGExternalResourcesRequired **************
// ********** Code for dom_SVGFEBlendElement **************
$dynamic("get$x").SVGFEBlendElement = function() { return this.x; };
$dynamic("set$x").SVGFEBlendElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEBlendElement = function() { return this.y; };
$dynamic("set$y").SVGFEBlendElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEColorMatrixElement **************
$dynamic("get$type").SVGFEColorMatrixElement = function() { return this.type; };
$dynamic("set$type").SVGFEColorMatrixElement = function(value) { return this.type = value; };
$dynamic("get$x").SVGFEColorMatrixElement = function() { return this.x; };
$dynamic("set$x").SVGFEColorMatrixElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEColorMatrixElement = function() { return this.y; };
$dynamic("set$y").SVGFEColorMatrixElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEComponentTransferElement **************
$dynamic("get$x").SVGFEComponentTransferElement = function() { return this.x; };
$dynamic("set$x").SVGFEComponentTransferElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEComponentTransferElement = function() { return this.y; };
$dynamic("set$y").SVGFEComponentTransferElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFECompositeElement **************
$dynamic("get$x").SVGFECompositeElement = function() { return this.x; };
$dynamic("set$x").SVGFECompositeElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFECompositeElement = function() { return this.y; };
$dynamic("set$y").SVGFECompositeElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEConvolveMatrixElement **************
$dynamic("get$x").SVGFEConvolveMatrixElement = function() { return this.x; };
$dynamic("set$x").SVGFEConvolveMatrixElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEConvolveMatrixElement = function() { return this.y; };
$dynamic("set$y").SVGFEConvolveMatrixElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEDiffuseLightingElement **************
$dynamic("get$x").SVGFEDiffuseLightingElement = function() { return this.x; };
$dynamic("set$x").SVGFEDiffuseLightingElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEDiffuseLightingElement = function() { return this.y; };
$dynamic("set$y").SVGFEDiffuseLightingElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEDisplacementMapElement **************
$dynamic("get$x").SVGFEDisplacementMapElement = function() { return this.x; };
$dynamic("set$x").SVGFEDisplacementMapElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEDisplacementMapElement = function() { return this.y; };
$dynamic("set$y").SVGFEDisplacementMapElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEDistantLightElement **************
// ********** Code for dom_SVGFEDropShadowElement **************
$dynamic("get$x").SVGFEDropShadowElement = function() { return this.x; };
$dynamic("set$x").SVGFEDropShadowElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEDropShadowElement = function() { return this.y; };
$dynamic("set$y").SVGFEDropShadowElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEFloodElement **************
$dynamic("get$x").SVGFEFloodElement = function() { return this.x; };
$dynamic("set$x").SVGFEFloodElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEFloodElement = function() { return this.y; };
$dynamic("set$y").SVGFEFloodElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEFuncAElement **************
// ********** Code for dom_SVGFEFuncBElement **************
// ********** Code for dom_SVGFEFuncGElement **************
// ********** Code for dom_SVGFEFuncRElement **************
// ********** Code for dom_SVGFEGaussianBlurElement **************
$dynamic("get$x").SVGFEGaussianBlurElement = function() { return this.x; };
$dynamic("set$x").SVGFEGaussianBlurElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEGaussianBlurElement = function() { return this.y; };
$dynamic("set$y").SVGFEGaussianBlurElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEImageElement **************
$dynamic("get$x").SVGFEImageElement = function() { return this.x; };
$dynamic("set$x").SVGFEImageElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEImageElement = function() { return this.y; };
$dynamic("set$y").SVGFEImageElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEMergeElement **************
$dynamic("get$x").SVGFEMergeElement = function() { return this.x; };
$dynamic("set$x").SVGFEMergeElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEMergeElement = function() { return this.y; };
$dynamic("set$y").SVGFEMergeElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEMergeNodeElement **************
// ********** Code for dom_SVGFEMorphologyElement **************
$dynamic("get$x").SVGFEMorphologyElement = function() { return this.x; };
$dynamic("set$x").SVGFEMorphologyElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEMorphologyElement = function() { return this.y; };
$dynamic("set$y").SVGFEMorphologyElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEOffsetElement **************
$dynamic("get$x").SVGFEOffsetElement = function() { return this.x; };
$dynamic("set$x").SVGFEOffsetElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEOffsetElement = function() { return this.y; };
$dynamic("set$y").SVGFEOffsetElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFEPointLightElement **************
$dynamic("get$x").SVGFEPointLightElement = function() { return this.x; };
$dynamic("set$x").SVGFEPointLightElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFEPointLightElement = function() { return this.y; };
$dynamic("set$y").SVGFEPointLightElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFESpecularLightingElement **************
$dynamic("get$x").SVGFESpecularLightingElement = function() { return this.x; };
$dynamic("set$x").SVGFESpecularLightingElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFESpecularLightingElement = function() { return this.y; };
$dynamic("set$y").SVGFESpecularLightingElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFESpotLightElement **************
$dynamic("get$x").SVGFESpotLightElement = function() { return this.x; };
$dynamic("set$x").SVGFESpotLightElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFESpotLightElement = function() { return this.y; };
$dynamic("set$y").SVGFESpotLightElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFETileElement **************
$dynamic("get$x").SVGFETileElement = function() { return this.x; };
$dynamic("set$x").SVGFETileElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFETileElement = function() { return this.y; };
$dynamic("set$y").SVGFETileElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFETurbulenceElement **************
$dynamic("get$type").SVGFETurbulenceElement = function() { return this.type; };
$dynamic("set$type").SVGFETurbulenceElement = function(value) { return this.type = value; };
$dynamic("get$x").SVGFETurbulenceElement = function() { return this.x; };
$dynamic("set$x").SVGFETurbulenceElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFETurbulenceElement = function() { return this.y; };
$dynamic("set$y").SVGFETurbulenceElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFilterElement **************
$dynamic("get$x").SVGFilterElement = function() { return this.x; };
$dynamic("set$x").SVGFilterElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGFilterElement = function() { return this.y; };
$dynamic("set$y").SVGFilterElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGFilterPrimitiveStandardAttributes **************
$dynamic("get$x").SVGFilterPrimitiveStandardAttributes = function() { return this.x; };
$dynamic("set$x").SVGFilterPrimitiveStandardAttributes = function(value) { return this.x = value; };
$dynamic("get$y").SVGFilterPrimitiveStandardAttributes = function() { return this.y; };
$dynamic("set$y").SVGFilterPrimitiveStandardAttributes = function(value) { return this.y = value; };
// ********** Code for dom_SVGFitToViewBox **************
// ********** Code for dom_SVGFontElement **************
// ********** Code for dom_SVGFontFaceElement **************
// ********** Code for dom_SVGFontFaceFormatElement **************
// ********** Code for dom_SVGFontFaceNameElement **************
// ********** Code for dom_SVGFontFaceSrcElement **************
// ********** Code for dom_SVGFontFaceUriElement **************
// ********** Code for dom_SVGForeignObjectElement **************
$dynamic("get$x").SVGForeignObjectElement = function() { return this.x; };
$dynamic("set$x").SVGForeignObjectElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGForeignObjectElement = function() { return this.y; };
$dynamic("set$y").SVGForeignObjectElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGGElement **************
// ********** Code for dom_SVGGlyphElement **************
// ********** Code for dom_SVGGlyphRefElement **************
$dynamic("get$x").SVGGlyphRefElement = function() { return this.x; };
$dynamic("set$x").SVGGlyphRefElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGGlyphRefElement = function() { return this.y; };
$dynamic("set$y").SVGGlyphRefElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGGradientElement **************
// ********** Code for dom_SVGHKernElement **************
// ********** Code for dom_SVGImageElement **************
$dynamic("get$x").SVGImageElement = function() { return this.x; };
$dynamic("set$x").SVGImageElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGImageElement = function() { return this.y; };
$dynamic("set$y").SVGImageElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGLangSpace **************
// ********** Code for dom_SVGLength **************
// ********** Code for dom_SVGLengthList **************
// ********** Code for dom_SVGLineElement **************
// ********** Code for dom_SVGLinearGradientElement **************
// ********** Code for dom_SVGLocatable **************
// ********** Code for dom_SVGMPathElement **************
// ********** Code for dom_SVGMarkerElement **************
// ********** Code for dom_SVGMaskElement **************
$dynamic("get$x").SVGMaskElement = function() { return this.x; };
$dynamic("set$x").SVGMaskElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGMaskElement = function() { return this.y; };
$dynamic("set$y").SVGMaskElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGMatrix **************
// ********** Code for dom_SVGMetadataElement **************
// ********** Code for dom_SVGMissingGlyphElement **************
// ********** Code for dom_SVGNumber **************
// ********** Code for dom_SVGNumberList **************
// ********** Code for dom_SVGPaint **************
// ********** Code for dom_SVGPathElement **************
// ********** Code for dom_SVGPathSeg **************
// ********** Code for dom_SVGPathSegArcAbs **************
$dynamic("get$angle").SVGPathSegArcAbs = function() { return this.angle; };
$dynamic("set$angle").SVGPathSegArcAbs = function(value) { return this.angle = value; };
$dynamic("get$x").SVGPathSegArcAbs = function() { return this.x; };
$dynamic("set$x").SVGPathSegArcAbs = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegArcAbs = function() { return this.y; };
$dynamic("set$y").SVGPathSegArcAbs = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegArcRel **************
$dynamic("get$angle").SVGPathSegArcRel = function() { return this.angle; };
$dynamic("set$angle").SVGPathSegArcRel = function(value) { return this.angle = value; };
$dynamic("get$x").SVGPathSegArcRel = function() { return this.x; };
$dynamic("set$x").SVGPathSegArcRel = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegArcRel = function() { return this.y; };
$dynamic("set$y").SVGPathSegArcRel = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegClosePath **************
// ********** Code for dom_SVGPathSegCurvetoCubicAbs **************
$dynamic("get$x").SVGPathSegCurvetoCubicAbs = function() { return this.x; };
$dynamic("set$x").SVGPathSegCurvetoCubicAbs = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegCurvetoCubicAbs = function() { return this.y; };
$dynamic("set$y").SVGPathSegCurvetoCubicAbs = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegCurvetoCubicRel **************
$dynamic("get$x").SVGPathSegCurvetoCubicRel = function() { return this.x; };
$dynamic("set$x").SVGPathSegCurvetoCubicRel = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegCurvetoCubicRel = function() { return this.y; };
$dynamic("set$y").SVGPathSegCurvetoCubicRel = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegCurvetoCubicSmoothAbs **************
$dynamic("get$x").SVGPathSegCurvetoCubicSmoothAbs = function() { return this.x; };
$dynamic("set$x").SVGPathSegCurvetoCubicSmoothAbs = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegCurvetoCubicSmoothAbs = function() { return this.y; };
$dynamic("set$y").SVGPathSegCurvetoCubicSmoothAbs = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegCurvetoCubicSmoothRel **************
$dynamic("get$x").SVGPathSegCurvetoCubicSmoothRel = function() { return this.x; };
$dynamic("set$x").SVGPathSegCurvetoCubicSmoothRel = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegCurvetoCubicSmoothRel = function() { return this.y; };
$dynamic("set$y").SVGPathSegCurvetoCubicSmoothRel = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegCurvetoQuadraticAbs **************
$dynamic("get$x").SVGPathSegCurvetoQuadraticAbs = function() { return this.x; };
$dynamic("set$x").SVGPathSegCurvetoQuadraticAbs = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegCurvetoQuadraticAbs = function() { return this.y; };
$dynamic("set$y").SVGPathSegCurvetoQuadraticAbs = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegCurvetoQuadraticRel **************
$dynamic("get$x").SVGPathSegCurvetoQuadraticRel = function() { return this.x; };
$dynamic("set$x").SVGPathSegCurvetoQuadraticRel = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegCurvetoQuadraticRel = function() { return this.y; };
$dynamic("set$y").SVGPathSegCurvetoQuadraticRel = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegCurvetoQuadraticSmoothAbs **************
$dynamic("get$x").SVGPathSegCurvetoQuadraticSmoothAbs = function() { return this.x; };
$dynamic("set$x").SVGPathSegCurvetoQuadraticSmoothAbs = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegCurvetoQuadraticSmoothAbs = function() { return this.y; };
$dynamic("set$y").SVGPathSegCurvetoQuadraticSmoothAbs = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegCurvetoQuadraticSmoothRel **************
$dynamic("get$x").SVGPathSegCurvetoQuadraticSmoothRel = function() { return this.x; };
$dynamic("set$x").SVGPathSegCurvetoQuadraticSmoothRel = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegCurvetoQuadraticSmoothRel = function() { return this.y; };
$dynamic("set$y").SVGPathSegCurvetoQuadraticSmoothRel = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegLinetoAbs **************
$dynamic("get$x").SVGPathSegLinetoAbs = function() { return this.x; };
$dynamic("set$x").SVGPathSegLinetoAbs = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegLinetoAbs = function() { return this.y; };
$dynamic("set$y").SVGPathSegLinetoAbs = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegLinetoHorizontalAbs **************
$dynamic("get$x").SVGPathSegLinetoHorizontalAbs = function() { return this.x; };
$dynamic("set$x").SVGPathSegLinetoHorizontalAbs = function(value) { return this.x = value; };
// ********** Code for dom_SVGPathSegLinetoHorizontalRel **************
$dynamic("get$x").SVGPathSegLinetoHorizontalRel = function() { return this.x; };
$dynamic("set$x").SVGPathSegLinetoHorizontalRel = function(value) { return this.x = value; };
// ********** Code for dom_SVGPathSegLinetoRel **************
$dynamic("get$x").SVGPathSegLinetoRel = function() { return this.x; };
$dynamic("set$x").SVGPathSegLinetoRel = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegLinetoRel = function() { return this.y; };
$dynamic("set$y").SVGPathSegLinetoRel = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegLinetoVerticalAbs **************
$dynamic("get$y").SVGPathSegLinetoVerticalAbs = function() { return this.y; };
$dynamic("set$y").SVGPathSegLinetoVerticalAbs = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegLinetoVerticalRel **************
$dynamic("get$y").SVGPathSegLinetoVerticalRel = function() { return this.y; };
$dynamic("set$y").SVGPathSegLinetoVerticalRel = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegList **************
// ********** Code for dom_SVGPathSegMovetoAbs **************
$dynamic("get$x").SVGPathSegMovetoAbs = function() { return this.x; };
$dynamic("set$x").SVGPathSegMovetoAbs = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegMovetoAbs = function() { return this.y; };
$dynamic("set$y").SVGPathSegMovetoAbs = function(value) { return this.y = value; };
// ********** Code for dom_SVGPathSegMovetoRel **************
$dynamic("get$x").SVGPathSegMovetoRel = function() { return this.x; };
$dynamic("set$x").SVGPathSegMovetoRel = function(value) { return this.x = value; };
$dynamic("get$y").SVGPathSegMovetoRel = function() { return this.y; };
$dynamic("set$y").SVGPathSegMovetoRel = function(value) { return this.y = value; };
// ********** Code for dom_SVGPatternElement **************
$dynamic("get$x").SVGPatternElement = function() { return this.x; };
$dynamic("set$x").SVGPatternElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGPatternElement = function() { return this.y; };
$dynamic("set$y").SVGPatternElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGPoint **************
$dynamic("get$x").SVGPoint = function() { return this.x; };
$dynamic("set$x").SVGPoint = function(value) { return this.x = value; };
$dynamic("get$y").SVGPoint = function() { return this.y; };
$dynamic("set$y").SVGPoint = function(value) { return this.y = value; };
// ********** Code for dom_SVGPointList **************
// ********** Code for dom_SVGPolygonElement **************
// ********** Code for dom_SVGPolylineElement **************
// ********** Code for dom_SVGPreserveAspectRatio **************
// ********** Code for dom_SVGRadialGradientElement **************
// ********** Code for dom_SVGRect **************
$dynamic("get$x").SVGRect = function() { return this.x; };
$dynamic("set$x").SVGRect = function(value) { return this.x = value; };
$dynamic("get$y").SVGRect = function() { return this.y; };
$dynamic("set$y").SVGRect = function(value) { return this.y = value; };
// ********** Code for dom_SVGRectElement **************
$dynamic("get$x").SVGRectElement = function() { return this.x; };
$dynamic("set$x").SVGRectElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGRectElement = function() { return this.y; };
$dynamic("set$y").SVGRectElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGRenderingIntent **************
// ********** Code for dom_SVGSVGElement **************
$dynamic("get$x").SVGSVGElement = function() { return this.x; };
$dynamic("set$x").SVGSVGElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGSVGElement = function() { return this.y; };
$dynamic("set$y").SVGSVGElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGScriptElement **************
$dynamic("get$type").SVGScriptElement = function() { return this.type; };
$dynamic("set$type").SVGScriptElement = function(value) { return this.type = value; };
// ********** Code for dom_SVGSetElement **************
// ********** Code for dom_SVGStopElement **************
// ********** Code for dom_SVGStringList **************
// ********** Code for dom_SVGStylable **************
// ********** Code for dom_SVGStyleElement **************
$dynamic("get$type").SVGStyleElement = function() { return this.type; };
$dynamic("set$type").SVGStyleElement = function(value) { return this.type = value; };
// ********** Code for dom_SVGSwitchElement **************
// ********** Code for dom_SVGSymbolElement **************
// ********** Code for dom_SVGTRefElement **************
// ********** Code for dom_SVGTSpanElement **************
// ********** Code for dom_SVGTests **************
// ********** Code for dom_SVGTextContentElement **************
// ********** Code for dom_SVGTextElement **************
// ********** Code for dom_SVGTextPathElement **************
// ********** Code for dom_SVGTextPositioningElement **************
$dynamic("get$x").SVGTextPositioningElement = function() { return this.x; };
$dynamic("set$x").SVGTextPositioningElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGTextPositioningElement = function() { return this.y; };
$dynamic("set$y").SVGTextPositioningElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGTitleElement **************
// ********** Code for dom_SVGTransform **************
$dynamic("get$angle").SVGTransform = function() { return this.angle; };
$dynamic("set$angle").SVGTransform = function(value) { return this.angle = value; };
$dynamic("get$type").SVGTransform = function() { return this.type; };
$dynamic("set$type").SVGTransform = function(value) { return this.type = value; };
// ********** Code for dom_SVGTransformList **************
// ********** Code for dom_SVGTransformable **************
// ********** Code for dom_SVGURIReference **************
// ********** Code for dom_SVGUnitTypes **************
// ********** Code for dom_SVGUseElement **************
$dynamic("get$x").SVGUseElement = function() { return this.x; };
$dynamic("set$x").SVGUseElement = function(value) { return this.x = value; };
$dynamic("get$y").SVGUseElement = function() { return this.y; };
$dynamic("set$y").SVGUseElement = function(value) { return this.y = value; };
// ********** Code for dom_SVGVKernElement **************
// ********** Code for dom_SVGViewElement **************
// ********** Code for dom_SVGViewSpec **************
// ********** Code for dom_SVGZoomAndPan **************
// ********** Code for dom_SVGZoomEvent **************
// ********** Code for dom_Screen **************
// ********** Code for dom_ScriptProfile **************
// ********** Code for dom_ScriptProfileNode **************
// ********** Code for dom_SharedWorker **************
// ********** Code for dom_SharedWorkercontext **************
// ********** Code for dom_SpeechInputEvent **************
// ********** Code for dom_SpeechInputResult **************
// ********** Code for dom_SpeechInputResultList **************
// ********** Code for dom_Storage **************
// ********** Code for dom_StorageEvent **************
// ********** Code for dom_StorageInfo **************
// ********** Code for dom_StyleMedia **************
$dynamic("get$type").StyleMedia = function() { return this.type; };
$dynamic("set$type").StyleMedia = function(value) { return this.type = value; };
// ********** Code for dom_StyleSheet **************
$dynamic("get$type").StyleSheet = function() { return this.type; };
$dynamic("set$type").StyleSheet = function(value) { return this.type = value; };
// ********** Code for dom_StyleSheetList **************
// ********** Code for dom_Text **************
// ********** Code for dom_TextEvent **************
// ********** Code for dom_TextMetrics **************
// ********** Code for dom_TextTrack **************
// ********** Code for dom_TextTrackCue **************
$dynamic("get$id").TextTrackCue = function() { return this.id; };
$dynamic("set$id").TextTrackCue = function(value) { return this.id = value; };
// ********** Code for dom_TextTrackCueList **************
// ********** Code for dom_TextTrackList **************
// ********** Code for dom_TimeRanges **************
// ********** Code for dom_Touch **************
// ********** Code for dom_TouchEvent **************
// ********** Code for dom_TouchList **************
// ********** Code for dom_TrackEvent **************
// ********** Code for dom_TreeWalker **************
// ********** Code for dom_UIEvent **************
// ********** Code for dom_Uint16Array **************
$dynamic("get$length").Uint16Array = function() { return this.length; };
$dynamic("set$length").Uint16Array = function(value) { return this.length = value; };
// ********** Code for dom_Uint32Array **************
$dynamic("get$length").Uint32Array = function() { return this.length; };
$dynamic("set$length").Uint32Array = function(value) { return this.length = value; };
// ********** Code for dom_Uint8Array **************
$dynamic("get$length").Uint8Array = function() { return this.length; };
$dynamic("set$length").Uint8Array = function(value) { return this.length = value; };
// ********** Code for dom_ValidityState **************
// ********** Code for dom_WaveShaperNode **************
// ********** Code for dom_WebGLActiveInfo **************
$dynamic("get$type").WebGLActiveInfo = function() { return this.type; };
$dynamic("set$type").WebGLActiveInfo = function(value) { return this.type = value; };
// ********** Code for dom_WebGLBuffer **************
// ********** Code for dom_WebGLCompressedTextures **************
// ********** Code for dom_WebGLContextAttributes **************
// ********** Code for dom_WebGLContextEvent **************
// ********** Code for dom_WebGLDebugRendererInfo **************
// ********** Code for dom_WebGLDebugShaders **************
// ********** Code for dom_WebGLFramebuffer **************
// ********** Code for dom_WebGLLoseContext **************
// ********** Code for dom_WebGLProgram **************
// ********** Code for dom_WebGLRenderbuffer **************
// ********** Code for dom_WebGLRenderingContext **************
// ********** Code for dom_WebGLShader **************
// ********** Code for dom_WebGLTexture **************
// ********** Code for dom_WebGLUniformLocation **************
// ********** Code for dom_WebGLVertexArrayObjectOES **************
// ********** Code for dom_WebKitAnimation **************
// ********** Code for dom_WebKitAnimationEvent **************
// ********** Code for dom_WebKitAnimationList **************
// ********** Code for dom_WebKitBlobBuilder **************
// ********** Code for dom_WebKitCSSFilterValue **************
// ********** Code for dom_WebKitCSSKeyframeRule **************
// ********** Code for dom_WebKitCSSKeyframesRule **************
// ********** Code for dom_WebKitCSSMatrix **************
$dynamic("toString$0").WebKitCSSMatrix = function() {
  return this.toString();
};
// ********** Code for dom_WebKitCSSTransformValue **************
// ********** Code for dom_WebKitFlags **************
// ********** Code for dom_WebKitMutationObserver **************
// ********** Code for dom_WebKitNamedFlow **************
// ********** Code for dom_WebKitPoint **************
$dynamic("get$x").WebKitPoint = function() { return this.x; };
$dynamic("set$x").WebKitPoint = function(value) { return this.x = value; };
$dynamic("get$y").WebKitPoint = function() { return this.y; };
$dynamic("set$y").WebKitPoint = function(value) { return this.y = value; };
// ********** Code for dom_WebKitTransitionEvent **************
// ********** Code for dom_WebSocket **************
// ********** Code for dom_WheelEvent **************
$dynamic("get$x").WheelEvent = function() { return this.x; };
$dynamic("set$x").WheelEvent = function(value) { return this.x = value; };
$dynamic("get$y").WheelEvent = function() { return this.y; };
$dynamic("set$y").WheelEvent = function(value) { return this.y = value; };
// ********** Code for Worker **************
// ********** Code for dom_WorkerContext **************
// ********** Code for dom_WorkerLocation **************
$dynamic("toString$0").WorkerLocation = function() {
  return this.toString();
};
// ********** Code for dom_WorkerNavigator **************
// ********** Code for dom_XMLHttpRequest **************
// ********** Code for dom_XMLHttpRequestException **************
$dynamic("toString$0").XMLHttpRequestException = function() {
  return this.toString();
};
// ********** Code for dom_XMLHttpRequestProgressEvent **************
$dynamic("get$position").XMLHttpRequestProgressEvent = function() { return this.position; };
$dynamic("set$position").XMLHttpRequestProgressEvent = function(value) { return this.position = value; };
// ********** Code for dom_XMLHttpRequestUpload **************
// ********** Code for dom_XMLSerializer **************
// ********** Code for dom_XPathEvaluator **************
// ********** Code for dom_XPathException **************
$dynamic("toString$0").XPathException = function() {
  return this.toString();
};
// ********** Code for dom_XPathExpression **************
// ********** Code for dom_XPathNSResolver **************
// ********** Code for dom_XPathResult **************
// ********** Code for dom_XSLTProcessor **************
// ********** Code for _Collections **************
function _Collections() {}
// ********** Code for _VariableSizeListIterator_T **************
$inherits(_VariableSizeListIterator_T, _VariableSizeListIterator);
function _VariableSizeListIterator_T() {}
// ********** Code for _FixedSizeListIterator **************
$inherits(_FixedSizeListIterator, _VariableSizeListIterator_T);
function _FixedSizeListIterator() {}
_FixedSizeListIterator.prototype.hasNext$0 = _FixedSizeListIterator.prototype.hasNext;
// ********** Code for _VariableSizeListIterator **************
function _VariableSizeListIterator() {}
_VariableSizeListIterator.prototype.hasNext$0 = _VariableSizeListIterator.prototype.hasNext;
_VariableSizeListIterator.prototype.next$0 = _VariableSizeListIterator.prototype.next;
// ********** Code for _Lists **************
function _Lists() {}
// ********** Code for top level **************
function get$window() {
  return window;
}
function get$document() {
  return window.document;
}
//  ********** Library box2d **************
// ********** Code for AxisAlignedBox **************
function AxisAlignedBox(lowerBound, upperBound) {
  this.lowerBound = lowerBound;
  this.upperBound = upperBound;
  if (this.lowerBound == null) {
    this.lowerBound = new Vector((0), (0));
  }
  if (this.upperBound == null) {
    this.upperBound = new Vector((0), (0));
  }
}
AxisAlignedBox.prototype.setFromCombination = function(boxOne, boxTwo) {
  this.lowerBound.x = Math.min(boxOne.lowerBound.x, boxTwo.lowerBound.x);
  this.lowerBound.y = Math.min(boxOne.lowerBound.y, boxTwo.lowerBound.y);
  this.upperBound.x = Math.max(boxOne.upperBound.x, boxTwo.upperBound.x);
  this.upperBound.y = Math.max(boxOne.upperBound.y, boxTwo.upperBound.y);
}
AxisAlignedBox.testOverlap = function(a, b) {
  if (b.lowerBound.x > a.upperBound.x || b.lowerBound.y > a.upperBound.y) {
    return false;
  }
  if (a.lowerBound.x > b.upperBound.x || a.lowerBound.y > b.upperBound.y) {
    return false;
  }
  return true;
}
AxisAlignedBox.prototype.get$center = function() {
  var c = new Vector.copy$ctor(this.lowerBound);
  c.addLocal(this.upperBound);
  c.mulLocal((0.5));
  return c;
}
AxisAlignedBox.prototype.contains = function(aabb) {
  return this.lowerBound.x > aabb.lowerBound.x && this.lowerBound.y > aabb.lowerBound.y && this.upperBound.y < aabb.upperBound.y && this.upperBound.x < aabb.upperBound.x;
}
AxisAlignedBox.prototype.setFrom = function(other) {
  this.lowerBound.setFrom(other.lowerBound);
  this.upperBound.setFrom(other.upperBound);
}
AxisAlignedBox.prototype.toString = function() {
  return this.lowerBound.toString() + ", " + this.upperBound.toString();
}
AxisAlignedBox.prototype.setFrom$1 = AxisAlignedBox.prototype.setFrom;
AxisAlignedBox.prototype.toString$0 = AxisAlignedBox.prototype.toString;
// ********** Code for Collision **************
function Collision() {}
Collision._construct$ctor = function(pool) {
  this.normal1 = new Vector((0), (0));
  this.localTangent = new Vector((0), (0));
  this.normal = new Vector((0), (0));
  this.results2 = new EdgeResults();
  this.incidentEdge = new Array((2));
  this.results1 = new EdgeResults();
  this.planePoint = new Vector((0), (0));
  this.localNormal = new Vector((0), (0));
  this._pool = pool;
  this.clipPoints1 = new Array((2));
  this.cache = new SimplexCache();
  this.v12 = new Vector((0), (0));
  this.clipPoints2 = new Array((2));
  this.v11 = new Vector((0), (0));
  this.input = new DistanceInput();
  this.tangent = new Vector((0), (0));
  this.output = new DistanceOutput();
  this.incidentEdge.$setindex((0), new ClipVertex());
  this.incidentEdge.$setindex((1), new ClipVertex());
  this.clipPoints1.$setindex((0), new ClipVertex());
  this.clipPoints1.$setindex((1), new ClipVertex());
  this.clipPoints2.$setindex((0), new ClipVertex());
  this.clipPoints2.$setindex((1), new ClipVertex());
}
Collision._construct$ctor.prototype = Collision.prototype;
Collision.prototype.get$incidentEdge = function() { return this.incidentEdge; };
Collision.prototype.testOverlap = function(shapeA, shapeB, transformA, transformB) {
  this.input.proxyA.setFromShape(shapeA);
  this.input.proxyB.setFromShape(shapeB);
  this.input.transformA.setFrom(transformA);
  this.input.transformB.setFrom(transformB);
  this.input.useRadii = true;
  this.cache.count = (0);
  this._pool.distance.distance(this.output, this.cache, this.input);
  return this.output.distance < (0.000001192);
}
Collision.clipSegmentToLine = function(vOut, vIn, norm, offset) {
  var numOut = (0);
  var distance0 = Vector.dot(norm, vIn.$index((0)).get$v()) - offset;
  var distance1 = Vector.dot(norm, vIn.$index((1)).get$v()) - offset;
  if (distance0 <= (0)) {
    vOut.$index(numOut++).setFrom$1(vIn.$index((0)));
  }
  if (distance1 <= (0)) {
    vOut.$index(numOut++).setFrom$1(vIn.$index((1)));
  }
  if (distance0 * distance1 < (0)) {
    var interp = distance0 / (distance0 - distance1);
    vOut.$index(numOut).get$v().setFrom$1(vIn.$index((1)).get$v()).subLocal$1(vIn.$index((0)).get$v()).mulLocal$1(interp).addLocal$1(vIn.$index((0)).get$v());
    if (distance0 > (0)) {
      vOut.$index(numOut).get$id().setFrom$1(vIn.$index((0)).get$id());
    }
    else {
      vOut.$index(numOut).get$id().setFrom$1(vIn.$index((1)).get$id());
    }
    ++numOut;
  }
  return numOut;
}
Collision.prototype.collideCircles = function(manifold, circle1, xfA, circle2, xfB) {
  manifold.pointCount = (0);
  var v = circle1.position;
  var pAy = xfA.position.y + xfA.rotation.col1.y * v.x + xfA.rotation.col2.y * v.y;
  var pAx = xfA.position.x + xfA.rotation.col1.x * v.x + xfA.rotation.col2.x * v.y;
  var v1 = circle2.position;
  var pBy = xfB.position.y + xfB.rotation.col1.y * v1.x + xfB.rotation.col2.y * v1.y;
  var pBx = xfB.position.x + xfB.rotation.col1.x * v1.x + xfB.rotation.col2.x * v1.y;
  var dx = pBx - pAx;
  var dy = pBy - pAy;
  var distSqr = dx * dx + dy * dy;
  var radius = circle1.radius + circle2.radius;
  if (distSqr > radius * radius) {
    return;
  }
  manifold.type = (0);
  manifold.localPoint.setFrom(circle1.position);
  manifold.localNormal.setZero();
  manifold.pointCount = (1);
  manifold.points.$index((0)).get$localPoint().setFrom$1(circle2.position);
  manifold.points.$index((0)).get$id().zero$0();
}
Collision.prototype.collidePolygonAndCircle = function(manifold, polygon, xfA, circle, xfB) {
  manifold.pointCount = (0);
  var v = circle.position;
  var cy = xfB.position.y + xfB.rotation.col1.y * v.x + xfB.rotation.col2.y * v.y;
  var cx = xfB.position.x + xfB.rotation.col1.x * v.x + xfB.rotation.col2.x * v.y;
  var v1x = cx - xfA.position.x;
  var v1y = cy - xfA.position.y;
  var b = xfA.rotation.col1;
  var b1 = xfA.rotation.col2;
  var cLocaly = v1x * b1.x + v1y * b1.y;
  var cLocalx = v1x * b.x + v1y * b.y;
  var normalIndex = (0);
  var separation = (1e-12);
  var radius = polygon.radius + circle.radius;
  var vertexCount = polygon.vertexCount;
  var vertices = polygon.vertices;
  var normals = polygon.normals;
  for (var i = (0);
   i < vertexCount; i++) {
    var vertex = vertices.$index(i);
    var tempx = cLocalx - vertex.x;
    var tempy = cLocaly - vertex.y;
    var norm = normals.$index(i);
    var s = norm.x * tempx + norm.y * tempy;
    if (s > radius) {
      return;
    }
    if (s > separation) {
      separation = s;
      normalIndex = i;
    }
  }
  var vertIndex1 = normalIndex;
  var vertIndex2 = vertIndex1 + (1) < vertexCount ? vertIndex1 + (1) : (0);
  var v1 = vertices.$index(vertIndex1);
  var v2 = vertices.$index(vertIndex2);
  if (separation < (1.192e-7)) {
    manifold.pointCount = (1);
    manifold.type = (1);
    var norm = normals.$index(normalIndex);
    manifold.localNormal.x = norm.x;
    manifold.localNormal.y = norm.y;
    manifold.localPoint.x = (v1.x + v2.x) * (0.5);
    manifold.localPoint.y = (v1.y + v2.y) * (0.5);
    var mpoint = manifold.points.$index((0));
    mpoint.localPoint.x = circle.position.x;
    mpoint.localPoint.y = circle.position.y;
    mpoint.id.zero();
    return;
  }
  var tempX = cLocalx - v1.x;
  var tempY = cLocaly - v1.y;
  var temp2X = v2.x - v1.x;
  var temp2Y = v2.y - v1.y;
  var u1 = tempX * temp2X + tempY * temp2Y;
  var temp3X = cLocalx - v2.x;
  var temp3Y = cLocaly - v2.y;
  var temp4X = v1.x - v2.x;
  var temp4Y = v1.y - v2.y;
  var u2 = temp3X * temp4X + temp3Y * temp4Y;
  if (u1 <= (0)) {
    var dx = cLocalx - v1.x;
    var dy = cLocaly - v1.y;
    if (dx * dx + dy * dy > radius * radius) {
      return;
    }
    manifold.pointCount = (1);
    manifold.type = (1);
    manifold.localNormal.x = cLocalx - v1.x;
    manifold.localNormal.y = cLocaly - v1.y;
    manifold.localNormal.normalize();
    manifold.localPoint.setFrom(v1);
    manifold.points.$index((0)).get$localPoint().setFrom$1(circle.position);
    manifold.points.$index((0)).get$id().zero$0();
  }
  else if (u2 <= (0)) {
    var dx = cLocalx - v2.x;
    var dy = cLocaly - v2.y;
    if (dx * dx + dy * dy > radius * radius) {
      return;
    }
    manifold.pointCount = (1);
    manifold.type = (1);
    manifold.localNormal.x = cLocalx - v2.x;
    manifold.localNormal.y = cLocaly - v2.y;
    manifold.localNormal.normalize();
    manifold.localPoint.setFrom(v2);
    manifold.points.$index((0)).get$localPoint().setFrom$1(circle.position);
    manifold.points.$index((0)).get$id().zero$0();
  }
  else {
    var fcx = (v1.x + v2.x) * (0.5);
    var fcy = (v1.y + v2.y) * (0.5);
    var tx = cLocalx - fcx;
    var ty = cLocaly - fcy;
    var norm = normals.$index(vertIndex1);
    separation = tx * norm.x + ty * norm.y;
    if (separation > radius) {
      return;
    }
    manifold.pointCount = (1);
    manifold.type = (1);
    manifold.localNormal.setFrom(normals.$index(vertIndex1));
    manifold.localPoint.x = fcx;
    manifold.localPoint.y = fcy;
    manifold.points.$index((0)).get$localPoint().setFrom$1(circle.position);
    manifold.points.$index((0)).get$id().zero$0();
  }
}
Collision.prototype.edgeSeparation = function(poly1, xf1, edge1, poly2, xf2) {
  var count1 = poly1.vertexCount;
  var vertices1 = poly1.vertices;
  var normals1 = poly1.normals;
  var count2 = poly2.vertexCount;
  var vertices2 = poly2.vertices;
  var R = xf1.rotation;
  var v = normals1.$index(edge1);
  var normal1Worldy = R.col1.y * v.x + R.col2.y * v.y;
  var normal1Worldx = R.col1.x * v.x + R.col2.x * v.y;
  var R1 = xf2.rotation;
  var normal1x = normal1Worldx * R1.col1.x + normal1Worldy * R1.col1.y;
  var normal1y = normal1Worldx * R1.col2.x + normal1Worldy * R1.col2.y;
  var index = (0);
  var minDot = (99999999999999);
  for (var i = (0);
   i < count2; ++i) {
    var a = vertices2.$index(i);
    var dot = a.x * normal1x + a.y * normal1y;
    if (dot < minDot) {
      minDot = dot;
      index = i;
    }
  }
  var v3 = vertices1.$index(edge1);
  var v1y = xf1.position.y + R.col1.y * v3.x + R.col2.y * v3.y;
  var v1x = xf1.position.x + R.col1.x * v3.x + R.col2.x * v3.y;
  var v4 = vertices2.$index(index);
  var v2y = xf2.position.y + R1.col1.y * v4.x + R1.col2.y * v4.y - v1y;
  var v2x = xf2.position.x + R1.col1.x * v4.x + R1.col2.x * v4.y - v1x;
  return v2x * normal1Worldx + v2y * normal1Worldy;
}
Collision.prototype.findMaxSeparation = function(results, poly1, xf1, poly2, xf2) {
  var count1 = poly1.vertexCount;
  var normals1 = poly1.normals;
  var v = poly2.centroid;
  var predy = xf2.position.y + xf2.rotation.col1.y * v.x + xf2.rotation.col2.y * v.y;
  var predx = xf2.position.x + xf2.rotation.col1.x * v.x + xf2.rotation.col2.x * v.y;
  var v1 = poly1.centroid;
  var tempy = xf1.position.y + xf1.rotation.col1.y * v1.x + xf1.rotation.col2.y * v1.y;
  var tempx = xf1.position.x + xf1.rotation.col1.x * v1.x + xf1.rotation.col2.x * v1.y;
  var dx = predx - tempx;
  var dy = predy - tempy;
  var R = xf1.rotation;
  var dLocal1x = dx * R.col1.x + dy * R.col1.y;
  var dLocal1y = dx * R.col2.x + dy * R.col2.y;
  var edge = (0);
  var dot;
  var maxDot = (1e-12);
  for (var i = (0);
   i < count1; i++) {
    var norm = normals1.$index(i);
    dot = norm.x * dLocal1x + norm.y * dLocal1y;
    if (dot > maxDot) {
      maxDot = dot;
      edge = i;
    }
  }
  var s = this.edgeSeparation(poly1, xf1, edge, poly2, xf2);
  var prevEdge = edge - (1) >= (0) ? edge - (1) : count1 - (1);
  var sPrev = this.edgeSeparation(poly1, xf1, prevEdge, poly2, xf2);
  var nextEdge = edge + (1) < count1 ? edge + (1) : (0);
  var sNext = this.edgeSeparation(poly1, xf1, nextEdge, poly2, xf2);
  var bestEdge;
  var bestSeparation;
  var increment;
  if (sPrev > s && sPrev > sNext) {
    increment = (-1);
    bestEdge = prevEdge;
    bestSeparation = sPrev;
  }
  else if (sNext > s) {
    increment = (1);
    bestEdge = nextEdge;
    bestSeparation = sNext;
  }
  else {
    results.edgeIndex = edge;
    results.separation = s;
    return;
  }
  while (true) {
    if (increment == (-1)) {
      edge = bestEdge - (1) >= (0) ? bestEdge - (1) : count1 - (1);
    }
    else {
      edge = bestEdge + (1) < count1 ? bestEdge + (1) : (0);
    }
    s = this.edgeSeparation(poly1, xf1, edge, poly2, xf2);
    if (s > bestSeparation) {
      bestEdge = edge;
      bestSeparation = s;
    }
    else {
      break;
    }
  }
  results.edgeIndex = bestEdge;
  results.separation = bestSeparation;
}
Collision.prototype.findIncidentEdge = function(c, poly1, xf1, edge1, poly2, xf2) {
  var count1 = poly1.vertexCount;
  var normals1 = poly1.normals;
  var count2 = poly2.vertexCount;
  var vertices2 = poly2.vertices;
  var normals2 = poly2.normals;
  Matrix22.mulMatrixAndVectorToOut(xf1.rotation, normals1.$index(edge1), this.normal1);
  Matrix22.mulTransMatrixAndVectorToOut(xf2.rotation, this.normal1, this.normal1);
  var index = (0);
  var minDot = (99999999999999);
  for (var i = (0);
   i < count2; ++i) {
    var dot = Vector.dot(this.normal1, normals2.$index(i));
    if (dot < minDot) {
      minDot = dot;
      index = i;
    }
  }
  var i1 = index;
  var i2 = i1 + (1) < count2 ? i1 + (1) : (0);
  Transform.mulToOut(xf2, vertices2.$index(i1), c.$index((0)).get$v());
  c.$index((0)).get$id().get$features().set$referenceEdge(edge1);
  c.$index((0)).get$id().get$features().set$incidentEdge(i1);
  c.$index((0)).get$id().get$features().set$incidentVertex((0));
  Transform.mulToOut(xf2, vertices2.$index(i2), c.$index((1)).get$v());
  c.$index((1)).get$id().get$features().set$referenceEdge(edge1);
  c.$index((1)).get$id().get$features().set$incidentEdge(i2);
  c.$index((1)).get$id().get$features().set$incidentVertex((1));
}
Collision.prototype.collidePolygons = function(manifold, polyA, xfA, polyB, xfB) {
  manifold.pointCount = (0);
  var totalRadius = polyA.radius + polyB.radius;
  this.findMaxSeparation(this.results1, polyA, xfA, polyB, xfB);
  if (this.results1.separation > totalRadius) {
    return;
  }
  this.findMaxSeparation(this.results2, polyB, xfB, polyA, xfA);
  if (this.results2.separation > totalRadius) {
    return;
  }
  var poly1;
  var poly2;
  var xf1, xf2;
  var edge1;
  var flip;
  var k_relativeTol = (0.98);
  var k_absoluteTol = (0.001);
  if (this.results2.separation > k_relativeTol * this.results1.separation + k_absoluteTol) {
    poly1 = polyB;
    poly2 = polyA;
    xf1 = xfB;
    xf2 = xfA;
    edge1 = this.results2.edgeIndex;
    manifold.type = (2);
    flip = (1);
  }
  else {
    poly1 = polyA;
    poly2 = polyB;
    xf1 = xfA;
    xf2 = xfB;
    edge1 = this.results1.edgeIndex;
    manifold.type = (1);
    flip = (0);
  }
  this.findIncidentEdge(this.incidentEdge, poly1, xf1, edge1, poly2, xf2);
  var count1 = poly1.vertexCount;
  var vertices1 = poly1.vertices;
  this.v11.setFrom(vertices1.$index(edge1));
  this.v12.setFrom(edge1 + (1) < count1 ? vertices1.$index(edge1 + (1)) : vertices1.$index((0)));
  this.localTangent.setFrom(this.v12).subLocal(this.v11);
  this.localTangent.normalize();
  Vector.crossVectorAndNumToOut(this.localTangent, (1), this.localNormal);
  this.planePoint.setFrom(this.v11).addLocal(this.v12).mulLocal((0.5));
  Matrix22.mulMatrixAndVectorToOut(xf1.rotation, this.localTangent, this.tangent);
  Vector.crossVectorAndNumToOut(this.tangent, (1), this.normal);
  Transform.mulToOut(xf1, this.v11, this.v11);
  Transform.mulToOut(xf1, this.v12, this.v12);
  var frontOffset = Vector.dot(this.normal, this.v11);
  var sideOffset1 = -Vector.dot(this.tangent, this.v11) + totalRadius;
  var sideOffset2 = Vector.dot(this.tangent, this.v12) + totalRadius;
  var np;
  this.tangent.negateLocal();
  np = Collision.clipSegmentToLine(this.clipPoints1, this.incidentEdge, this.tangent, sideOffset1);
  this.tangent.negateLocal();
  if (np < (2)) {
    return;
  }
  np = Collision.clipSegmentToLine(this.clipPoints2, this.clipPoints1, this.tangent, sideOffset2);
  if (np < (2)) {
    return;
  }
  manifold.localNormal.setFrom(this.localNormal);
  manifold.localPoint.setFrom(this.planePoint);
  var pointCount = (0);
  for (var i = (0);
   i < (2); ++i) {
    var separation = Vector.dot(this.normal, this.clipPoints2.$index(i).get$v()) - frontOffset;
    if (separation <= totalRadius) {
      var cp = manifold.points.$index(pointCount);
      Transform.mulTransToOut(xf2, this.clipPoints2.$index(i).get$v(), cp.localPoint);
      cp.id.setFrom(this.clipPoints2.$index(i).get$id());
      cp.id.features.flip = flip;
      ++pointCount;
    }
  }
  manifold.pointCount = pointCount;
}
// ********** Code for ClipVertex **************
function ClipVertex() {
  this.v = new Vector((0), (0));
  this.id = new ContactID();
}
ClipVertex.prototype.get$v = function() { return this.v; };
ClipVertex.prototype.set$v = function(value) { return this.v = value; };
ClipVertex.prototype.get$id = function() { return this.id; };
ClipVertex.prototype.set$id = function(value) { return this.id = value; };
ClipVertex.prototype.setFrom = function(cv) {
  this.v.setFrom(cv.v);
  this.id.setFrom(cv.id);
}
ClipVertex.prototype.setFrom$1 = ClipVertex.prototype.setFrom;
// ********** Code for EdgeResults **************
function EdgeResults() {
  this.separation = (0);
  this.edgeIndex = (0);
}
// ********** Code for ContactID **************
function ContactID() {
  this.features = new Features();
}
ContactID.prototype.get$features = function() { return this.features; };
ContactID.prototype.$eq = function(other) {
  return $eq(other.get$features(), this.features);
}
ContactID.prototype.setFrom = function(other) {
  this.features.setFrom(other.features);
}
ContactID.prototype.isEqual = function(other) {
  return $eq(other.features, this.features);
}
ContactID.prototype.zero = function() {
  this.features.zero();
}
ContactID.prototype.setFrom$1 = ContactID.prototype.setFrom;
ContactID.prototype.zero$0 = ContactID.prototype.zero;
// ********** Code for Distance **************
function Distance() {}
Distance._construct$ctor = function() {
  this.closestPoint = new Vector((0), (0));
  this.normal = new Vector((0), (0));
  this.iters = (0);
  this.maxIters = (20);
  this.simplex = new Simplex();
  this.searchDirection = new Vector((0), (0));
  this.temp = new Vector((0), (0));
  this.calls = (0);
  this.saveB = new Array((3));
  this.saveA = new Array((3));
}
Distance._construct$ctor.prototype = Distance.prototype;
Distance.prototype.distance = function(output, cache, input) {
  this.calls++;
  var proxyA = input.proxyA;
  var proxyB = input.proxyB;
  var transformA = input.transformA;
  var transformB = input.transformB;
  this.simplex.readCache(cache, proxyA, transformA, proxyB, transformB);
  var vertices = this.simplex.vertices;
  var saveCount = (0);
  this.simplex.getClosestPoint(this.closestPoint);
  var distanceSqr1 = this.closestPoint.get$lengthSquared();
  var distanceSqr2 = distanceSqr1;
  var iter = (0);
  while (iter < this.maxIters) {
    saveCount = this.simplex.count;
    for (var i = (0);
     i < saveCount; i++) {
      this.saveA.$setindex(i, vertices.$index(i).get$indexA());
      this.saveB.$setindex(i, vertices.$index(i).get$indexB());
    }
    switch (this.simplex.count) {
      case (1):

        break;

      case (2):

        this.simplex.solve2();
        break;

      case (3):

        this.simplex.solve3();
        break;

      default:


    }
    if (this.simplex.count == (3)) {
      break;
    }
    this.simplex.getClosestPoint(this.closestPoint);
    distanceSqr2 = this.closestPoint.get$lengthSquared();
    if (distanceSqr2 >= distanceSqr1) {
    }
    distanceSqr1 = distanceSqr2;
    this.simplex.getSearchDirection(this.searchDirection);
    if (this.searchDirection.get$lengthSquared() < (1.4208639999999999e-14)) {
      break;
    }
    var vertex = vertices.$index(this.simplex.count);
    Matrix22.mulTransMatrixAndVectorToOut(transformA.rotation, this.searchDirection.negateLocal(), this.temp);
    vertex.indexA = proxyA.getSupport(this.temp);
    Transform.mulToOut(transformA, proxyA.vertices.$index(vertex.indexA), vertex.wA);
    Matrix22.mulTransMatrixAndVectorToOut(transformB.rotation, this.searchDirection.negateLocal(), this.temp);
    vertex.indexB = proxyB.getSupport(this.temp);
    Transform.mulToOut(transformB, proxyB.vertices.$index(vertex.indexB), vertex.wB);
    vertex.w.setFrom(vertex.wB).subLocal(vertex.wA);
    ++iter;
    ++this.iters;
    var duplicate = false;
    for (var i = (0);
     i < saveCount; ++i) {
      if (vertex.indexA == this.saveA.$index(i) && vertex.indexB == this.saveB.$index(i)) {
        duplicate = true;
        break;
      }
    }
    if (duplicate) {
      break;
    }
    ++this.simplex.count;
  }
  this.maxIters = Math.max(this.maxIters, iter);
  this.simplex.getWitnessPoints(output.pointA, output.pointB);
  output.distance = MathBox.distance(output.pointA, output.pointB);
  output.iterations = iter;
  this.simplex.writeCache(cache);
  if (input.useRadii) {
    var rA = proxyA.radius;
    var rB = proxyB.radius;
    if (output.distance > rA + rB && output.distance > (1.192e-7)) {
      output.distance = output.distance - (rA + rB);
      this.normal.setFrom(output.pointB).subLocal(output.pointA);
      this.normal.normalize();
      this.temp.setFrom(this.normal).mulLocal(rA);
      output.pointA.addLocal(this.temp);
      this.temp.setFrom(this.normal).mulLocal(rB);
      output.pointB.subLocal(this.temp);
    }
    else {
      output.pointA.addLocal(output.pointB).mulLocal((0.5));
      output.pointB.setFrom(output.pointA);
      output.distance = (0);
    }
  }
}
// ********** Code for DistanceInput **************
function DistanceInput() {
  this.transformB = new Transform();
  this.transformA = new Transform();
  this.proxyA = new DistanceProxy();
  this.proxyB = new DistanceProxy();
  this.useRadii = false;
}
DistanceInput.prototype.get$proxyA = function() { return this.proxyA; };
DistanceInput.prototype.set$proxyA = function(value) { return this.proxyA = value; };
DistanceInput.prototype.get$proxyB = function() { return this.proxyB; };
DistanceInput.prototype.set$proxyB = function(value) { return this.proxyB = value; };
// ********** Code for DistanceOutput **************
function DistanceOutput() {
  this.pointB = new Vector((0), (0));
  this.pointA = new Vector((0), (0));
}
// ********** Code for DistanceProxy **************
function DistanceProxy() {
  this.vertices = new Array((8));
  this.radius = (0);
  this.count = (0);
  for (var i = (0);
   i < this.vertices.get$length(); i++) {
    this.vertices.$setindex(i, new Vector((0), (0)));
  }
}
DistanceProxy.prototype.get$vertices = function() { return this.vertices; };
DistanceProxy.prototype.get$radius = function() { return this.radius; };
DistanceProxy.prototype.set$radius = function(value) { return this.radius = value; };
DistanceProxy.prototype.setFromShape = function(shape) {
  if ($eq(shape.get$type(), (0))) {
    this.vertices.$index((0)).setFrom$1(shape.get$position());
    this.count = (1);
    this.radius = shape.get$radius();
  }
  else if ($eq(shape.get$type(), (1))) {
    this.count = shape.get$vertexCount();
    this.radius = shape.get$radius();
    for (var i = (0);
     i < this.count; i++) {
      this.vertices.$index(i).setFrom$1(shape.get$vertices().$index(i));
    }
  }
  else {
  }
}
DistanceProxy.prototype.getSupport = function(direction) {
  var bestIndex = (0);
  var bestValue = Vector.dot(this.vertices.$index((0)), direction);
  for (var i = (1);
   i < this.count; i++) {
    var value = Vector.dot(this.vertices.$index(i), direction);
    if (value > bestValue) {
      bestIndex = i;
      bestValue = value;
    }
  }
  return bestIndex;
}
// ********** Code for Features **************
function Features() {
  this.referenceEdge = (0);
  this.incidentVertex = (0);
  this.incidentEdge = (0);
  this.flip = (0);
}
Features.prototype.get$referenceEdge = function() { return this.referenceEdge; };
Features.prototype.set$referenceEdge = function(value) { return this.referenceEdge = value; };
Features.prototype.get$incidentEdge = function() { return this.incidentEdge; };
Features.prototype.set$incidentEdge = function(value) { return this.incidentEdge = value; };
Features.prototype.get$incidentVertex = function() { return this.incidentVertex; };
Features.prototype.set$incidentVertex = function(value) { return this.incidentVertex = value; };
Features.prototype.get$flip = function() { return this.flip; };
Features.prototype.set$flip = function(value) { return this.flip = value; };
Features.prototype.setFrom = function(f) {
  this.referenceEdge = f.referenceEdge;
  this.incidentEdge = f.incidentEdge;
  this.incidentVertex = f.incidentVertex;
  this.flip = f.flip;
}
Features.prototype.$eq = function(other) {
  return this.referenceEdge == other.get$referenceEdge() && this.incidentEdge == other.get$incidentEdge() && this.incidentVertex == other.get$incidentVertex() && this.flip == other.get$flip();
}
Features.prototype.toString = function() {
  var s = "Features: (" + this.flip + " ," + this.incidentEdge + " ," + this.incidentVertex + " ," + this.referenceEdge + ")";
  return s;
}
Features.prototype.zero = function() {
  this.referenceEdge = (0);
  this.incidentEdge = (0);
  this.incidentVertex = (0);
  this.flip = (0);
}
Features.prototype.setFrom$1 = Features.prototype.setFrom;
Features.prototype.toString$0 = Features.prototype.toString;
Features.prototype.zero$0 = Features.prototype.zero;
// ********** Code for Manifold **************
function Manifold() {
  this.pointCount = (0);
  this.localPoint = new Vector((0), (0));
  this.points = new Array((2));
  this.localNormal = new Vector((0), (0));
  for (var i = (0);
   i < (2); i++) {
    this.points.$setindex(i, new ManifoldPoint());
  }
}
Manifold.prototype.get$localPoint = function() { return this.localPoint; };
Manifold.prototype.get$type = function() { return this.type; };
Manifold.prototype.set$type = function(value) { return this.type = value; };
Manifold.prototype.setFrom = function(other) {
  for (var i = (0);
   i < other.pointCount; i++) {
    this.points.$index(i).setFrom$1(other.points.$index(i));
  }
  this.type = other.type;
  this.localNormal.setFrom(other.localNormal);
  this.localPoint.setFrom(other.localPoint);
  this.pointCount = other.pointCount;
}
Manifold.prototype.setFrom$1 = Manifold.prototype.setFrom;
// ********** Code for ManifoldPoint **************
function ManifoldPoint() {
  this.tangentImpulse = (0);
  this.id = new ContactID();
  this.localPoint = new Vector((0), (0));
  this.normalImpulse = (0);
}
ManifoldPoint.prototype.get$localPoint = function() { return this.localPoint; };
ManifoldPoint.prototype.get$normalImpulse = function() { return this.normalImpulse; };
ManifoldPoint.prototype.set$normalImpulse = function(value) { return this.normalImpulse = value; };
ManifoldPoint.prototype.get$tangentImpulse = function() { return this.tangentImpulse; };
ManifoldPoint.prototype.set$tangentImpulse = function(value) { return this.tangentImpulse = value; };
ManifoldPoint.prototype.get$id = function() { return this.id; };
ManifoldPoint.prototype.setFrom = function(other) {
  this.localPoint.setFrom(other.localPoint);
  this.normalImpulse = other.normalImpulse;
  this.tangentImpulse = other.tangentImpulse;
  this.id.setFrom(other.id);
}
ManifoldPoint.prototype.setFrom$1 = ManifoldPoint.prototype.setFrom;
// ********** Code for ManifoldType **************
function ManifoldType() {}
// ********** Code for Simplex **************
function Simplex() {
  this.v3 = new SimplexVertex();
  this.v1 = new SimplexVertex();
  this.v2 = new SimplexVertex();
  this.e23 = new Vector((0), (0));
  this.case22 = new Vector((0), (0));
  this.vertices = new Array((3));
  this.e13 = new Vector((0), (0));
  this.case3 = new Vector((0), (0));
  this.case2 = new Vector((0), (0));
  this.e12 = new Vector((0), (0));
  this.case33 = new Vector((0), (0));
  this.count = (0);
  this.vertices.$setindex((0), this.v1);
  this.vertices.$setindex((1), this.v2);
  this.vertices.$setindex((2), this.v3);
}
Simplex.prototype.get$vertices = function() { return this.vertices; };
Simplex.prototype.readCache = function(cache, proxyA, transformA, proxyB, transformB) {
  this.count = cache.count;
  for (var i = (0);
   i < this.count; ++i) {
    var v = this.vertices.$index(i);
    v.indexA = cache.indexA.$index(i);
    v.indexB = cache.indexB.$index(i);
    var wALocal = proxyA.vertices.$index(v.indexA);
    var wBLocal = proxyB.vertices.$index(v.indexB);
    Transform.mulToOut(transformA, wALocal, v.wA);
    Transform.mulToOut(transformB, wBLocal, v.wB);
    v.w.setFrom(v.wB).subLocal(v.wA);
    v.a = (0);
  }
  if (this.count > (1)) {
    var metric1 = cache.metric;
    var metric2 = this.getMetric();
    if (metric2 < (0.5) * metric1 || (2) * metric1 < metric2 || metric2 < (1.192e-7)) {
      this.count = (0);
    }
  }
  if (this.count == (0)) {
    var v = this.vertices.$index((0));
    v.indexA = (0);
    v.indexB = (0);
    var wALocal = proxyA.vertices.$index((0));
    var wBLocal = proxyB.vertices.$index((0));
    Transform.mulToOut(transformA, wALocal, v.wA);
    Transform.mulToOut(transformB, wBLocal, v.wB);
    v.w.setFrom(v.wB).subLocal(v.wA);
    this.count = (1);
  }
}
Simplex.prototype.writeCache = function(cache) {
  cache.metric = this.getMetric();
  cache.count = this.count;
  for (var i = (0);
   i < this.count; ++i) {
    cache.indexA.$setindex(i, (this.vertices.$index(i).get$indexA()));
    cache.indexB.$setindex(i, (this.vertices.$index(i).get$indexB()));
  }
}
Simplex.prototype.getSearchDirection = function(out) {
  switch (this.count) {
    case (1):

      out.setFrom(this.v1.w).negateLocal();
      return;

    case (2):

      this.e12.setFrom(this.v2.w).subLocal(this.v1.w);
      out.setFrom(this.v1.w).negateLocal();
      var sgn = Vector.crossVectors(this.e12, out);
      if (sgn > (0)) {
        Vector.crossNumAndVectorToOut((1), this.e12, out);
        return;
      }
      else {
        Vector.crossVectorAndNumToOut(this.e12, (1), out);
        return;
      }

    default:

      out.setZero();
      return;

  }
}
Simplex.prototype.getClosestPoint = function(out) {
  switch (this.count) {
    case (0):

      out.setZero();
      return;

    case (1):

      out.setFrom(this.v1.w);
      return;

    case (2):

      this.case22.setFrom(this.v2.w).mulLocal(this.v2.a);
      this.case2.setFrom(this.v1.w).mulLocal(this.v1.a).addLocal(this.case22);
      out.setFrom(this.case2);
      return;

    case (3):

      out.setZero();
      return;

    default:

      out.setZero();
      return;

  }
}
Simplex.prototype.getWitnessPoints = function(pA, pB) {
  switch (this.count) {
    case (0):

      break;

    case (1):

      pA.setFrom(this.v1.wA);
      pB.setFrom(this.v1.wB);
      break;

    case (2):

      this.case2.setFrom(this.v1.wA).mulLocal(this.v1.a);
      pA.setFrom(this.v2.wA).mulLocal(this.v2.a).addLocal(this.case2);
      this.case2.setFrom(this.v1.wB).mulLocal(this.v1.a);
      pB.setFrom(this.v2.wB).mulLocal(this.v2.a).addLocal(this.case2);
      break;

    case (3):

      pA.setFrom(this.v1.wA).mulLocal(this.v1.a);
      this.case3.setFrom(this.v2.wA).mulLocal(this.v2.a);
      this.case33.setFrom(this.v3.wA).mulLocal(this.v3.a);
      pA.addLocal(this.case3).addLocal(this.case33);
      pB.setFrom(pA);
      break;

    default:

      break;

  }
}
Simplex.prototype.getMetric = function() {
  switch (this.count) {
    case (0):

      return (0);

    case (1):

      return (0);

    case (2):

      return MathBox.distance(this.v1.w, this.v2.w);

    case (3):

      this.case3.setFrom(this.v2.w).subLocal(this.v1.w);
      this.case33.setFrom(this.v3.w).subLocal(this.v1.w);
      return Vector.crossVectors(this.case3, this.case33);

    default:

      return (0);

  }
}
Simplex.prototype.solve2 = function() {
  var w1 = this.v1.w;
  var w2 = this.v2.w;
  this.e12.setFrom(w2).subLocal(w1);
  var d12_2 = -Vector.dot(w1, this.e12);
  if (d12_2 <= (0)) {
    this.v1.a = (1);
    this.count = (1);
    return;
  }
  var d12_1 = Vector.dot(w2, this.e12);
  if (d12_1 <= (0)) {
    this.v2.a = (1);
    this.count = (1);
    this.v1.setFrom(this.v2);
    return;
  }
  var inv_d12 = (1) / (d12_1 + d12_2);
  this.v1.a = d12_1 * inv_d12;
  this.v2.a = d12_2 * inv_d12;
  this.count = (2);
}
Simplex.prototype.solve3 = function() {
  var w1 = this.v1.w;
  var w2 = this.v2.w;
  var w3 = this.v3.w;
  this.e12.setFrom(w2).subLocal(w1);
  var w1e12 = Vector.dot(w1, this.e12);
  var w2e12 = Vector.dot(w2, this.e12);
  var d12_1 = w2e12;
  var d12_2 = -w1e12;
  this.e13.setFrom(w3).subLocal(w1);
  var w1e13 = Vector.dot(w1, this.e13);
  var w3e13 = Vector.dot(w3, this.e13);
  var d13_1 = w3e13;
  var d13_2 = -w1e13;
  this.e23.setFrom(w3).subLocal(w2);
  var w2e23 = Vector.dot(w2, this.e23);
  var w3e23 = Vector.dot(w3, this.e23);
  var d23_1 = w3e23;
  var d23_2 = -w2e23;
  var n123 = Vector.crossVectors(this.e12, this.e13);
  var d123_1 = n123 * Vector.crossVectors(w2, w3);
  var d123_2 = n123 * Vector.crossVectors(w3, w1);
  var d123_3 = n123 * Vector.crossVectors(w1, w2);
  if (d12_2 <= (0) && d13_2 <= (0)) {
    this.v1.a = (1);
    this.count = (1);
    return;
  }
  if (d12_1 > (0) && d12_2 > (0) && d123_3 <= (0)) {
    var inv_d12 = (1) / (d12_1 + d12_2);
    this.v1.a = d12_1 * inv_d12;
    this.v2.a = d12_2 * inv_d12;
    this.count = (2);
    return;
  }
  if (d13_1 > (0) && d13_2 > (0) && d123_2 <= (0)) {
    var inv_d13 = (1) / (d13_1 + d13_2);
    this.v1.a = d13_1 * inv_d13;
    this.v3.a = d13_2 * inv_d13;
    this.count = (2);
    this.v2.setFrom(this.v3);
    return;
  }
  if (d12_1 <= (0) && d23_2 <= (0)) {
    this.v2.a = (1);
    this.count = (1);
    this.v1.setFrom(this.v2);
    return;
  }
  if (d13_1 <= (0) && d23_1 <= (0)) {
    this.v3.a = (1);
    this.count = (1);
    this.v1.setFrom(this.v3);
    return;
  }
  if (d23_1 > (0) && d23_2 > (0) && d123_1 <= (0)) {
    var inv_d23 = (1) / (d23_1 + d23_2);
    this.v2.a = d23_1 * inv_d23;
    this.v3.a = d23_2 * inv_d23;
    this.count = (2);
    this.v1.setFrom(this.v3);
    return;
  }
  var inv_d123 = (1) / (d123_1 + d123_2 + d123_3);
  this.v1.a = d123_1 * inv_d123;
  this.v2.a = d123_2 * inv_d123;
  this.v3.a = d123_3 * inv_d123;
  this.count = (3);
}
// ********** Code for SimplexCache **************
function SimplexCache() {
  this.indexA = new Array((3));
  this.metric = (0);
  this.indexB = new Array((3));
  this.count = (0);
  for (var i = (0);
   i < (3); i++) {
    this.indexA.$setindex(i, (2147483647));
    this.indexB.$setindex(i, (2147483647));
  }
}
SimplexCache.prototype.get$indexA = function() { return this.indexA; };
SimplexCache.prototype.get$indexB = function() { return this.indexB; };
SimplexCache.prototype.setFrom = function(sc) {
  this.indexA.setRange$3((0), this.indexA.get$length(), sc.indexA);
  this.indexB.setRange$3((0), this.indexB.get$length(), sc.indexB);
  this.metric = sc.metric;
  this.count = sc.count;
}
SimplexCache.prototype.setFrom$1 = SimplexCache.prototype.setFrom;
// ********** Code for SimplexVertex **************
function SimplexVertex() {
  this.w = new Vector((0), (0));
  this.a = (0);
  this.wB = new Vector((0), (0));
  this.indexB = (0);
  this.wA = new Vector((0), (0));
  this.indexA = (0);
}
SimplexVertex.prototype.get$indexA = function() { return this.indexA; };
SimplexVertex.prototype.set$indexA = function(value) { return this.indexA = value; };
SimplexVertex.prototype.get$indexB = function() { return this.indexB; };
SimplexVertex.prototype.set$indexB = function(value) { return this.indexB = value; };
SimplexVertex.prototype.setFrom = function(sv) {
  this.wA.setFrom(sv.wA);
  this.wB.setFrom(sv.wB);
  this.w.setFrom(sv.w);
  this.a = sv.a;
  this.indexA = sv.indexA;
  this.indexB = sv.indexB;
}
SimplexVertex.prototype.toString = function() {
  return "wA: " + this.wA.toString() + " wB: " + this.wB.toString() + " w: " + this.w.toString();
}
SimplexVertex.prototype.setFrom$1 = SimplexVertex.prototype.setFrom;
SimplexVertex.prototype.toString$0 = SimplexVertex.prototype.toString;
// ********** Code for TimeOfImpact **************
function TimeOfImpact() {}
TimeOfImpact._construct$ctor = function(argPool) {
  this.fcn = new SeparationFunction();
  this.xfB = new Transform();
  this.indexes = new Array((2));
  this.xfA = new Transform();
  this.distanceInput = new DistanceInput();
  this.distanceOutput = new DistanceOutput();
  this.sweepA = new Sweep();
  this.cache = new SimplexCache();
  this.pool = argPool;
  this.sweepB = new Sweep();
  this.indexes.$setindex((0), (0));
  this.indexes.$setindex((1), (0));
  $globals.TimeOfImpact_toiCalls = (0);
  $globals.TimeOfImpact_toiIters = (0);
  $globals.TimeOfImpact_toiMaxIters = (0);
  $globals.TimeOfImpact_toiRootIters = (0);
  $globals.TimeOfImpact_toiMaxRootIters = (0);
}
TimeOfImpact._construct$ctor.prototype = TimeOfImpact.prototype;
TimeOfImpact.prototype.timeOfImpact = function(output, input) {
  ++$globals.TimeOfImpact_toiCalls;
  output.state = (0);
  output.t = input.tMax;
  var proxyA = input.proxyA;
  var proxyB = input.proxyB;
  this.sweepA.setFrom(input.sweepA);
  this.sweepB.setFrom(input.sweepB);
  this.sweepA.normalize();
  this.sweepB.normalize();
  var tMax = input.tMax;
  var totalRadius = proxyA.radius + proxyB.radius;
  var target = Math.max((0.005), totalRadius - (0.015));
  var tolerance = (0.00125);
  var t1 = (0);
  var iter = (0);
  this.cache.count = (0);
  this.distanceInput.proxyA = input.proxyA;
  this.distanceInput.proxyB = input.proxyB;
  this.distanceInput.useRadii = false;
  while (true) {
    this.sweepA.getTransform(this.xfA, t1);
    this.sweepB.getTransform(this.xfB, t1);
    this.distanceInput.transformA = this.xfA;
    this.distanceInput.transformB = this.xfB;
    this.pool.distance.distance(this.distanceOutput, this.cache, this.distanceInput);
    if (this.distanceOutput.distance <= (0)) {
      output.state = (2);
      output.t = (0);
      break;
    }
    if (this.distanceOutput.distance < target + tolerance) {
      output.state = (3);
      output.t = t1;
      break;
    }
    this.fcn.initialize(this.cache, proxyA, this.sweepA, proxyB, this.sweepB, t1);
    var done = false;
    var t2 = tMax;
    var pushBackIter = (0);
    while (true) {
      var s2 = this.fcn.findMinSeparation(this.indexes, t2);
      if (s2 > target + tolerance) {
        output.state = (4);
        output.t = tMax;
        done = true;
        break;
      }
      if (s2 > target - tolerance) {
        t1 = t2;
        break;
      }
      var s1 = this.fcn.evaluate(this.indexes.$index((0)), this.indexes.$index((1)), t1);
      if (s1 < target - tolerance) {
        output.state = (1);
        output.t = t1;
        done = true;
        break;
      }
      if (s1 <= target + tolerance) {
        output.state = (3);
        output.t = t1;
        done = true;
        break;
      }
      var rootIterCount = (0);
      var a1 = t1, a2 = t2;
      while (true) {
        var t = null;
        if ((rootIterCount & (1)) == (1)) {
          t = a1 + (target - s1) * (a2 - a1) / (s2 - s1);
        }
        else {
          t = (0.5) * (a1 + a2);
        }
        var s = this.fcn.evaluate(this.indexes.$index((0)), this.indexes.$index((1)), t);
        if ((s - target).abs() < tolerance) {
          t2 = t;
          break;
        }
        if (s > target) {
          a1 = t;
          s1 = s;
        }
        else {
          a2 = t;
          s2 = s;
        }
        ++rootIterCount;
        ++$globals.TimeOfImpact_toiRootIters;
        if (rootIterCount == (50)) {
          break;
        }
      }
      $globals.TimeOfImpact_toiMaxRootIters = Math.max($globals.TimeOfImpact_toiMaxRootIters, rootIterCount);
      ++pushBackIter;
      if (pushBackIter == (8)) {
        break;
      }
    }
    ++iter;
    ++$globals.TimeOfImpact_toiIters;
    if (done) {
      break;
    }
    if (iter == (1000)) {
      output.state = (1);
      output.t = t1;
      break;
    }
  }
  $globals.TimeOfImpact_toiMaxIters = Math.max($globals.TimeOfImpact_toiMaxIters, iter);
}
// ********** Code for SeparationFunction **************
function SeparationFunction() {
  this.temp = new Vector((0), (0));
  this.normal = new Vector((0), (0));
  this.axis = new Vector((0), (0));
  this.localPointA1 = new Vector((0), (0));
  this.sweepB = new Sweep();
  this.proxyA = new DistanceProxy();
  this.proxyB = new DistanceProxy();
  this.sweepA = new Sweep();
  this.pointA = new Vector((0), (0));
  this.pointB = new Vector((0), (0));
  this.localPointA2 = new Vector((0), (0));
  this.localPointA = new Vector((0), (0));
  this.localPointB = new Vector((0), (0));
  this.xfb = new Transform();
  this.xfa = new Transform();
  this.localPoint = new Vector((0), (0));
  this.localPointB2 = new Vector((0), (0));
  this.localPointB1 = new Vector((0), (0));
  this.axisB = new Vector((0), (0));
  this.type = (0);
  this.axisA = new Vector((0), (0));
}
SeparationFunction.prototype.get$proxyA = function() { return this.proxyA; };
SeparationFunction.prototype.set$proxyA = function(value) { return this.proxyA = value; };
SeparationFunction.prototype.get$proxyB = function() { return this.proxyB; };
SeparationFunction.prototype.set$proxyB = function(value) { return this.proxyB = value; };
SeparationFunction.prototype.get$type = function() { return this.type; };
SeparationFunction.prototype.set$type = function(value) { return this.type = value; };
SeparationFunction.prototype.get$localPoint = function() { return this.localPoint; };
SeparationFunction.prototype.initialize = function(cache, argProxyA, argSweepA, argProxyB, argSweepB, t1) {
  this.proxyA = argProxyA;
  this.proxyB = argProxyB;
  var count = cache.count;
  this.sweepA = argSweepA;
  this.sweepB = argSweepB;
  this.sweepA.getTransform(this.xfa, t1);
  this.sweepB.getTransform(this.xfb, t1);
  if (count == (1)) {
    this.type = (0);
    this.localPointA.setFrom(this.proxyA.vertices.$index(cache.indexA.$index((0))));
    this.localPointB.setFrom(this.proxyB.vertices.$index(cache.indexB.$index((0))));
    Transform.mulToOut(this.xfa, this.localPointA, this.pointA);
    Transform.mulToOut(this.xfb, this.localPointB, this.pointB);
    this.axis.setFrom(this.pointB).subLocal(this.pointA);
    var s = this.axis.normalize();
    return s;
  }
  else if ($eq(cache.indexA.$index((0)), cache.indexA.$index((1)))) {
    this.type = (2);
    this.localPointB1.setFrom(this.proxyB.vertices.$index(cache.indexB.$index((0))));
    this.localPointB2.setFrom(this.proxyB.vertices.$index(cache.indexB.$index((1))));
    this.temp.setFrom(this.localPointB2).subLocal(this.localPointB1);
    Vector.crossVectorAndNumToOut(this.temp, (1), this.axis);
    this.axis.normalize();
    Matrix22.mulMatrixAndVectorToOut(this.xfb.rotation, this.axis, this.normal);
    this.localPoint.setFrom(this.localPointB1);
    this.localPoint.addLocal(this.localPointB2);
    this.localPoint.mulLocal((0.5));
    Transform.mulToOut(this.xfb, this.localPoint, this.pointB);
    this.localPointA.setFrom(this.proxyA.vertices.$index(cache.indexA.$index((0))));
    Transform.mulToOut(this.xfa, this.localPointA, this.pointA);
    this.temp.setFrom(this.pointA);
    this.temp.subLocal(this.pointB);
    var s = Vector.dot(this.temp, this.normal);
    if (s < (0)) {
      this.axis.negateLocal();
      s = -s;
    }
    return s;
  }
  else {
    this.type = (1);
    this.localPointA1.setFrom(this.proxyA.vertices.$index(cache.indexA.$index((0))));
    this.localPointA2.setFrom(this.proxyA.vertices.$index(cache.indexA.$index((1))));
    this.temp.setFrom(this.localPointA2);
    this.temp.subLocal(this.localPointA1);
    Vector.crossVectorAndNumToOut(this.temp, (1), this.axis);
    this.axis.normalize();
    Matrix22.mulMatrixAndVectorToOut(this.xfa.rotation, this.axis, this.normal);
    this.localPoint.setFrom(this.localPointA1);
    this.localPoint.addLocal(this.localPointA2);
    this.localPoint.mulLocal((0.5));
    Transform.mulToOut(this.xfa, this.localPoint, this.pointA);
    this.localPointB.setFrom(this.proxyB.vertices.$index(cache.indexB.$index((0))));
    Transform.mulToOut(this.xfb, this.localPointB, this.pointB);
    this.temp.setFrom(this.pointB);
    this.temp.subLocal(this.pointA);
    var s = Vector.dot(this.temp, this.normal);
    if (s < (0)) {
      this.axis.negateLocal();
      s = -s;
    }
    return s;
  }
}
SeparationFunction.prototype.findMinSeparation = function(indexes, t) {
  this.sweepA.getTransform(this.xfa, t);
  this.sweepB.getTransform(this.xfb, t);
  switch (this.type) {
    case (0):

      Matrix22.mulTransMatrixAndVectorToOut(this.xfa.rotation, this.axis, this.axisA);
      Matrix22.mulTransMatrixAndVectorToOut(this.xfb.rotation, this.axis.negateLocal(), this.axisB);
      this.axis.negateLocal();
      indexes.$setindex((0), this.proxyA.getSupport(this.axisA));
      indexes.$setindex((1), this.proxyB.getSupport(this.axisB));
      this.localPointA.setFrom(this.proxyA.vertices.$index(indexes.$index((0))));
      this.localPointB.setFrom(this.proxyB.vertices.$index(indexes.$index((1))));
      Transform.mulToOut(this.xfa, this.localPointA, this.pointA);
      Transform.mulToOut(this.xfb, this.localPointB, this.pointB);
      var separation = Vector.dot(this.pointB.subLocal(this.pointA), this.axis);
      return separation;

    case (1):

      Matrix22.mulMatrixAndVectorToOut(this.xfa.rotation, this.axis, this.normal);
      Transform.mulToOut(this.xfa, this.localPoint, this.pointA);
      this.normal.negateLocal();
      Matrix22.mulTransMatrixAndVectorToOut(this.xfb.rotation, this.normal, this.axisB);
      this.normal.negateLocal();
      indexes.$setindex((0), (-1));
      indexes.$setindex((1), this.proxyB.getSupport(this.axisB));
      this.localPointB.setFrom(this.proxyB.vertices.$index(indexes.$index((1))));
      Transform.mulToOut(this.xfb, this.localPointB, this.pointB);
      var separation = Vector.dot(this.pointB.subLocal(this.pointA), this.normal);
      return separation;

    case (2):

      Matrix22.mulMatrixAndVectorToOut(this.xfb.rotation, this.axis, this.normal);
      Transform.mulToOut(this.xfb, this.localPoint, this.pointB);
      Matrix22.mulTransMatrixAndVectorToOut(this.xfa.rotation, this.normal.negateLocal(), this.axisA);
      this.normal.negateLocal();
      indexes.$setindex((1), (-1));
      indexes.$setindex((0), this.proxyA.getSupport(this.axisA));
      this.localPointA.setFrom(this.proxyA.vertices.$index(indexes.$index((0))));
      Transform.mulToOut(this.xfa, this.localPointA, this.pointA);
      var separation = Vector.dot(this.pointA.subLocal(this.pointB), this.normal);
      return separation;

    default:

      indexes.$setindex((0), (-1));
      indexes.$setindex((1), (-1));
      return (0);

  }
}
SeparationFunction.prototype.evaluate = function(indexA, indexB, t) {
  this.sweepA.getTransform(this.xfa, t);
  this.sweepB.getTransform(this.xfb, t);
  switch (this.type) {
    case (0):

      Matrix22.mulTransMatrixAndVectorToOut(this.xfa.rotation, this.axis, this.axisA);
      Matrix22.mulTransMatrixAndVectorToOut(this.xfb.rotation, this.axis.negateLocal(), this.axisB);
      this.axis.negateLocal();
      this.localPointA.setFrom(this.proxyA.vertices.$index(indexA));
      this.localPointB.setFrom(this.proxyB.vertices.$index(indexB));
      Transform.mulToOut(this.xfa, this.localPointA, this.pointA);
      Transform.mulToOut(this.xfb, this.localPointB, this.pointB);
      var separation = Vector.dot(this.pointB.subLocal(this.pointA), this.axis);
      return separation;

    case (1):

      Matrix22.mulMatrixAndVectorToOut(this.xfa.rotation, this.axis, this.normal);
      Transform.mulToOut(this.xfa, this.localPoint, this.pointA);
      this.normal.negateLocal();
      Matrix22.mulTransMatrixAndVectorToOut(this.xfb.rotation, this.normal, this.axisB);
      this.normal.negateLocal();
      this.localPointB.setFrom(this.proxyB.vertices.$index(indexB));
      Transform.mulToOut(this.xfb, this.localPointB, this.pointB);
      var separation = Vector.dot(this.pointB.subLocal(this.pointA), this.normal);
      return separation;

    case (2):

      Matrix22.mulMatrixAndVectorToOut(this.xfb.rotation, this.axis, this.normal);
      Transform.mulToOut(this.xfb, this.localPoint, this.pointB);
      Matrix22.mulTransMatrixAndVectorToOut(this.xfa.rotation, this.normal.negateLocal(), this.axisA);
      this.normal.negateLocal();
      this.localPointA.setFrom(this.proxyA.vertices.$index(indexA));
      Transform.mulToOut(this.xfa, this.localPointA, this.pointA);
      var separation = Vector.dot(this.pointA.subLocal(this.pointB), this.normal);
      return separation;

    default:

      return (0);

  }
}
// ********** Code for TimeOfImpactInput **************
function TimeOfImpactInput() {
  this.tMax = (0);
  this.sweepB = new Sweep();
  this.proxyA = new DistanceProxy();
  this.proxyB = new DistanceProxy();
  this.sweepA = new Sweep();
}
TimeOfImpactInput.prototype.get$proxyA = function() { return this.proxyA; };
TimeOfImpactInput.prototype.get$proxyB = function() { return this.proxyB; };
// ********** Code for TimeOfImpactOutputState **************
function TimeOfImpactOutputState() {}
// ********** Code for TimeOfImpactOutput **************
function TimeOfImpactOutput() {
  this.state = (0);
  this.t = (0);
}
// ********** Code for Type **************
function Type() {}
// ********** Code for WorldManifold **************
function WorldManifold() {
  this.pool3 = new Vector((0), (0));
  this.normal = new Vector((0), (0));
  this.points = new Array((2));
  this.pool4 = new Vector((0), (0));
  for (var i = (0);
   i < (2); i++) {
    this.points.$setindex(i, new Vector((0), (0)));
  }
}
WorldManifold.prototype.initialize = function(manifold, xfA, radiusA, xfB, radiusB) {
  switch (manifold.type) {
    case (0):

      var pointA = this.pool3;
      var pointB = this.pool4;
      this.normal.x = (1);
      this.normal.y = (0);
      pointA.x = xfA.position.x + xfA.rotation.col1.x * manifold.localPoint.x + xfA.rotation.col2.x * manifold.localPoint.y;
      pointA.y = xfA.position.y + xfA.rotation.col1.y * manifold.localPoint.x + xfA.rotation.col2.y * manifold.localPoint.y;
      pointB.x = xfB.position.x + xfB.rotation.col1.x * manifold.points.$index((0)).get$localPoint().get$x() + xfB.rotation.col2.x * manifold.points.$index((0)).get$localPoint().get$y();
      pointB.y = xfB.position.y + xfB.rotation.col1.y * manifold.points.$index((0)).get$localPoint().get$x() + xfB.rotation.col2.y * manifold.points.$index((0)).get$localPoint().get$y();
      if (MathBox.distanceSquared(pointA, pointB) > (1.4208639999999999e-14)) {
        this.normal.x = pointB.x - pointA.x;
        this.normal.y = pointB.y - pointA.y;
        this.normal.normalize();
      }
      var cAx = this.normal.x * radiusA + pointA.x;
      var cAy = this.normal.y * radiusA + pointA.y;
      var cBx = -this.normal.x * radiusB + pointB.x;
      var cBy = -this.normal.y * radiusB + pointB.y;
      this.points.$index((0)).set$x((cAx + cBx) * (0.5));
      this.points.$index((0)).set$y((cAy + cBy) * (0.5));
      return;

    case (1):

      var planePoint = this.pool3;
      this.normal.x = xfA.rotation.col1.x * manifold.localNormal.x + xfA.rotation.col2.x * manifold.localNormal.y;
      this.normal.y = xfA.rotation.col1.y * manifold.localNormal.x + xfA.rotation.col2.y * manifold.localNormal.y;
      planePoint.x = xfA.position.x + xfA.rotation.col1.x * manifold.localPoint.x + xfA.rotation.col2.x * manifold.localPoint.y;
      planePoint.y = xfA.position.y + xfA.rotation.col1.y * manifold.localPoint.x + xfA.rotation.col2.y * manifold.localPoint.y;
      var clipPoint = this.pool4;
      for (var i = (0);
       i < manifold.pointCount; i++) {
        clipPoint.x = xfB.position.x + xfB.rotation.col1.x * manifold.points.$index(i).get$localPoint().get$x() + xfB.rotation.col2.x * manifold.points.$index(i).get$localPoint().get$y();
        clipPoint.y = xfB.position.y + xfB.rotation.col1.y * manifold.points.$index(i).get$localPoint().get$x() + xfB.rotation.col2.y * manifold.points.$index(i).get$localPoint().get$y();
        var scalar = radiusA - ((clipPoint.x - planePoint.x) * this.normal.x + (clipPoint.y - planePoint.y) * this.normal.y);
        var cAx = this.normal.x * scalar + clipPoint.x;
        var cAy = this.normal.y * scalar + clipPoint.y;
        var cBx = -this.normal.x * radiusB + clipPoint.x;
        var cBy = -this.normal.y * radiusB + clipPoint.y;
        this.points.$index(i).set$x((cAx + cBx) * (0.5));
        this.points.$index(i).set$y((cAy + cBy) * (0.5));
      }
      return;

    case (2):

      var planePoint = this.pool3;
      var R = xfB.rotation;
      this.normal.x = R.col1.x * manifold.localNormal.x + R.col2.x * manifold.localNormal.y;
      this.normal.y = R.col1.y * manifold.localNormal.x + R.col2.y * manifold.localNormal.y;
      var v = manifold.localPoint;
      planePoint.x = xfB.position.x + xfB.rotation.col1.x * v.x + xfB.rotation.col2.x * v.y;
      planePoint.y = xfB.position.y + xfB.rotation.col1.y * v.x + xfB.rotation.col2.y * v.y;
      var clipPoint = this.pool4;
      for (var i = (0);
       i < manifold.pointCount; i++) {
        clipPoint.x = xfA.position.x + xfA.rotation.col1.x * manifold.points.$index(i).get$localPoint().get$x() + xfA.rotation.col2.x * manifold.points.$index(i).get$localPoint().get$y();
        clipPoint.y = xfA.position.y + xfA.rotation.col1.y * manifold.points.$index(i).get$localPoint().get$x() + xfA.rotation.col2.y * manifold.points.$index(i).get$localPoint().get$y();
        var scalar = radiusB - ((clipPoint.x - planePoint.x) * this.normal.x + (clipPoint.y - planePoint.y) * this.normal.y);
        var cBx = this.normal.x * scalar + clipPoint.x;
        var cBy = this.normal.y * scalar + clipPoint.y;
        var cAx = -this.normal.x * radiusA + clipPoint.x;
        var cAy = -this.normal.y * radiusA + clipPoint.y;
        this.points.$index(i).set$x((cAx + cBx) * (0.5));
        this.points.$index(i).set$y((cAy + cBy) * (0.5));
      }
      this.normal.x = -this.normal.x;
      this.normal.y = -this.normal.y;
      break;

  }
}
// ********** Code for BroadPhase **************
function BroadPhase() {
  this._pairCapacity = (16);
  this._moveCapacity = (16);
  this._pairCount = (0);
  this.proxyCount = (0);
  this._tree = new DynamicTree();
  this._moveCount = (0);
  this.queryProxy = null;
  this.moveBuffer = new Array(this._moveCapacity);
  this._pairBuffer = new Array(this._pairCapacity);
  for (var i = (0);
   i < this._pairCapacity; i++) {
    this._pairBuffer.$setindex(i, new Pair());
  }
}
BroadPhase.prototype.createProxy = function(box, userData) {
  var node = this._tree.createProxy(box, userData);
  this.proxyCount++;
  this._bufferMove(node);
  return node;
}
BroadPhase.prototype.moveProxy = function(proxy, box, displacement) {
  var buffer = this._tree.moveProxy(proxy, box, displacement);
  if (buffer) {
    this._bufferMove(proxy);
  }
}
BroadPhase.prototype.testOverlap = function(proxyA, proxyB) {
  var a = proxyA.box;
  var b = proxyB.box;
  if (b.lowerBound.x - a.upperBound.x > (0) || b.lowerBound.y - a.upperBound.y > (0)) {
    return false;
  }
  if (a.lowerBound.x - b.upperBound.x > (0) || a.lowerBound.y - b.upperBound.y > (0)) {
    return false;
  }
  return true;
}
BroadPhase.prototype.updatePairs = function(callback) {
  this._pairCount = (0);
  for (var i = (0);
   i < this._moveCount; ++i) {
    this.queryProxy = this.moveBuffer.$index(i);
    if (this.queryProxy == null) {
      continue;
    }
    this._tree.query(this, this.queryProxy.box);
  }
  this._moveCount = (0);
  var pairBuffer = ListFactory.ListFactory$from$factory(this._pairBuffer.getRange((0), this._pairCount));
  pairBuffer.sort((function (a, b) {
    return a.compareTo$1(b);
  })
  );
  this._pairBuffer.setRange$3((0), this._pairCount, pairBuffer);
  var i = (0);
  while (i < this._pairCount) {
    var primaryPair = this._pairBuffer.$index(i);
    var userDataA = primaryPair.proxyA.userData;
    var userDataB = primaryPair.proxyB.userData;
    callback.addPair(userDataA, userDataB);
    i++;
    while (i < this._pairCount) {
      var pair = this._pairBuffer.$index(i);
      if (pair.proxyA != primaryPair.proxyA || pair.proxyB != primaryPair.proxyB) {
        break;
      }
      i++;
    }
  }
  this._tree.rebalance((4));
}
BroadPhase.prototype.treeCallback = function(proxy) {
  if ($eq(proxy, this.queryProxy)) {
    return true;
  }
  if (this._pairCount == this._pairCapacity) {
    var oldBuffer = this._pairBuffer;
    this._pairCapacity *= (2);
    this._pairBuffer = new Array(this._pairCapacity);
    for (var i = (0);
     i < oldBuffer.get$length(); i++) {
      this._pairBuffer.$setindex(i, oldBuffer.$index(i));
    }
    for (var i = oldBuffer.get$length();
     i < this._pairCapacity; i++) {
      this._pairBuffer.$setindex(i, new Pair());
    }
  }
  if (proxy.key < this.queryProxy.key) {
    this._pairBuffer.$index(this._pairCount).set$proxyA(proxy);
    this._pairBuffer.$index(this._pairCount).set$proxyB(this.queryProxy);
  }
  else {
    this._pairBuffer.$index(this._pairCount).set$proxyA(this.queryProxy);
    this._pairBuffer.$index(this._pairCount).set$proxyB(proxy);
  }
  this._pairCount++;
  return true;
}
BroadPhase.prototype._bufferMove = function(node) {
  if (this._moveCount == this._moveCapacity) {
    var old = this.moveBuffer;
    this._moveCapacity *= (2);
    this.moveBuffer = new Array(this._moveCapacity);
    for (var i = (0);
     i < old.get$length(); i++) {
      this.moveBuffer.$setindex(i, old.$index(i));
    }
  }
  this.moveBuffer.$setindex(this._moveCount, node);
  ++this._moveCount;
}
// ********** Code for DynamicTree **************
function DynamicTree() {
  this._path = (0);
  this.deltaOne = new Vector((0), (0));
  this._nodeCount = (0);
  this._lastLeaf = null;
  this._drawVectors = new Array((4));
  this.center = new Vector((0), (0));
  this._tempVector = new Vector((0), (0));
  this._nodeStack = new DoubleLinkedQueue();
  this._root = null;
  this._insertionCount = (0);
  this._tempBox = new AxisAlignedBox();
  this.deltaTwo = new Vector((0), (0));
  this._nodeCounter = (0);
  for (var i = (0);
   i < this._drawVectors.get$length(); i++) {
    this._drawVectors.$setindex(i, new Vector((0), (0)));
  }
}
DynamicTree.prototype.get$center = function() { return this.center; };
DynamicTree.prototype.createProxy = function(box, userData) {
  var proxy = this._allocateNode();
  proxy.box.lowerBound.x = box.lowerBound.x - (0.1);
  proxy.box.lowerBound.y = box.lowerBound.y - (0.1);
  proxy.box.upperBound.x = box.upperBound.x + (0.1);
  proxy.box.upperBound.y = box.upperBound.y + (0.1);
  proxy.userData = userData;
  this._insertLeaf(proxy);
  var iterationCount = this._nodeCount >> (4);
  var tryCount = (0);
  var height = this.computeHeightFromRoot();
  while (height > (64) && tryCount < (10)) {
    this.rebalance(iterationCount);
    height = this.computeHeightFromRoot();
    tryCount++;
  }
  return proxy;
}
DynamicTree.prototype.moveProxy = function(argProxy, argBox, displacement) {
  var $0;
  if (argProxy.box.contains(argBox)) {
    return false;
  }
  this._removeLeaf(argProxy);
  ($0 = argBox.lowerBound).x = $0.x - (0.1);
  ($0 = argBox.lowerBound).y = $0.y - (0.1);
  ($0 = argBox.upperBound).x = $0.x + (0.1);
  ($0 = argBox.upperBound).y = $0.y + (0.1);
  this._tempVector.setFrom(displacement);
  this._tempVector.mulLocal((2));
  if (this._tempVector.x < (0)) {
    ($0 = argBox.lowerBound).x = $0.x + this._tempVector.x;
  }
  else {
    ($0 = argBox.upperBound).x = $0.x + this._tempVector.x;
  }
  if (this._tempVector.y < (0)) {
    ($0 = argBox.lowerBound).y = $0.y + this._tempVector.y;
  }
  else {
    ($0 = argBox.upperBound).y = $0.y + this._tempVector.y;
  }
  argProxy.box.setFrom(argBox);
  this._insertLeaf(argProxy);
  return true;
}
DynamicTree.prototype._allocateNode = function() {
  if (this._nodeStack.isEmpty()) {
    for (var i = (0);
     i < (6); i++) {
      this._nodeStack.addFirst(new DynamicTreeNode._construct$ctor());
    }
  }
  var node = this._nodeStack.removeFirst();
  node.parent = null;
  node.childOne = null;
  node.childTwo = null;
  node.userData = null;
  node.key = this._nodeCounter;
  this._nodeCounter++;
  this._nodeCount++;
  return node;
}
DynamicTree.prototype.query = function(callback, argBox) {
  this._query(callback, argBox, this._root, (1));
}
DynamicTree.prototype._query = function(callback, argBox, node, count) {
  if (node == null) {
    return true;
  }
  if (AxisAlignedBox.testOverlap(argBox, node.box)) {
    if (node.get$isLeaf()) {
      var proceed = callback.treeCallback(node);
      if (!proceed) {
        return false;
      }
    }
    else {
      if (count < (64)) {
        count++;
        var proceed = this._query(callback, argBox, node.childOne, count);
        if (!proceed) {
          return false;
        }
      }
      if (count < (64)) {
        count++;
        var proceed = this._query(callback, argBox, node.childTwo, count);
        if (!proceed) {
          return false;
        }
      }
    }
  }
  return true;
}
DynamicTree.prototype._insertLeaf = function(node) {
  this._insertionCount++;
  if (this._root == null) {
    this._root = node;
    node.parent = null;
    return;
  }
  this.center.setFrom(node.box.get$center());
  var sibling = this._root;
  var childOne, childTwo;
  if (!sibling.get$isLeaf()) {
    do {
      childOne = sibling.childOne;
      childTwo = sibling.childTwo;
      this.deltaOne.setFrom(childOne.box.get$center());
      this.deltaTwo.setFrom(childTwo.box.get$center());
      this.deltaOne.subLocal(this.center).absLocal();
      this.deltaTwo.subLocal(this.center).absLocal();
      var normOne = this.deltaOne.x + this.deltaOne.y;
      var normTwo = this.deltaTwo.x + this.deltaTwo.y;
      if (normOne < normTwo) {
        sibling = childOne;
      }
      else {
        sibling = childTwo;
      }
    }
    while ($eq(sibling.get$isLeaf(), false))
  }
  var node1 = sibling.parent;
  var node2 = this._allocateNode();
  node2.parent = node1;
  node2.userData = null;
  node2.box.setFromCombination(node.box, sibling.box);
  if (node1 != null) {
    if (sibling.parent.childOne == sibling) {
      node1.childOne = node2;
    }
    else {
      node1.childTwo = node2;
    }
    node2.childOne = sibling;
    node2.childTwo = node;
    sibling.parent = node2;
    node.parent = node2;
    do {
      if (node1.box.contains(node2.box)) {
        break;
      }
      node1.box.setFromCombination(node1.childOne.box, node1.childTwo.box);
      node2 = node1;
      node1 = node1.parent;
    }
    while (node1 != null)
  }
  else {
    node2.childOne = sibling;
    node2.childTwo = node;
    sibling.parent = node2;
    node.parent = node2;
    this._root = node2;
  }
}
DynamicTree.prototype._removeLeaf = function(argNode) {
  if (argNode == this._root) {
    this._root = null;
    if (this._lastLeaf == argNode) {
      this._lastLeaf = null;
    }
    return;
  }
  var node2 = argNode.parent;
  var node1 = node2.parent;
  var sibling;
  if (node2.childOne == argNode) {
    sibling = node2.childTwo;
  }
  else {
    sibling = node2.childOne;
  }
  if (node1 != null) {
    if (node1.childOne == node2) {
      node1.childOne = sibling;
    }
    else {
      node1.childTwo = sibling;
    }
    sibling.parent = node1;
    this._freeNode(node2);
    while (node1 != null) {
      this._tempBox.setFrom(node1.box);
      node1.box.setFromCombination(node1.childOne.box, node1.childTwo.box);
      if (this._tempBox.contains(node1.box)) {
        break;
      }
      node1 = node1.parent;
    }
  }
  else {
    this._root = sibling;
    sibling.parent = null;
    this._freeNode(node2);
  }
  if (this._lastLeaf == argNode) {
    this._lastLeaf = this._root;
  }
}
DynamicTree.prototype.computeHeightFromRoot = function() {
  return this._computeHeight(this._root);
}
DynamicTree.prototype._computeHeight = function(node) {
  if (node == null) {
    return (0);
  }
  var heightOne = this._computeHeight(node.childOne);
  var heightTwo = this._computeHeight(node.childTwo);
  return (1) + Math.max(heightOne, heightTwo);
}
DynamicTree.prototype.rebalance = function(iterations) {
  if (this._root == null) {
    return;
  }
  var current;
  for (var i = (0);
   i < iterations; i++) {
    current = this._root;
    var bit = (0);
    while (!current.get$isLeaf()) {
      var goLeft = (this._path >> bit) & (1);
      if (goLeft == (0)) {
        current = current.childOne;
      }
      else {
        current = current.childTwo;
      }
      bit = (bit + (1)) & (31);
    }
    this._path++;
    this._removeLeaf(current);
    this._insertLeaf(current);
  }
}
DynamicTree.prototype._freeNode = function(node) {
  this._nodeStack.addFirst(node);
  this._nodeCount--;
}
// ********** Code for DynamicTreeNode **************
function DynamicTreeNode() {}
DynamicTreeNode._construct$ctor = function() {
  this.childOne = null;
  this.next = null;
  this.parent = null;
  this.childTwo = null;
  this.box = new AxisAlignedBox();
}
DynamicTreeNode._construct$ctor.prototype = DynamicTreeNode.prototype;
DynamicTreeNode.prototype.get$isLeaf = function() {
  return this.childOne == null;
}
DynamicTreeNode.prototype.toString = function() {
  return this.box.toString();
}
DynamicTreeNode.prototype.next$0 = function() {
  return this.next();
};
DynamicTreeNode.prototype.toString$0 = DynamicTreeNode.prototype.toString;
// ********** Code for Pair **************
function Pair() {
  this.proxyA = null;
  this.proxyB = null;
}
Pair.prototype.get$proxyA = function() { return this.proxyA; };
Pair.prototype.set$proxyA = function(value) { return this.proxyA = value; };
Pair.prototype.get$proxyB = function() { return this.proxyB; };
Pair.prototype.set$proxyB = function(value) { return this.proxyB = value; };
Pair.prototype.compareTo = function(pair2) {
  if (this.proxyA.key < pair2.proxyA.key) {
    return (-1);
  }
  if (this.proxyA.key == pair2.proxyA.key) {
    if (this.proxyB.key < pair2.proxyB.key) {
      return (-1);
    }
    else {
      if (this.proxyB.key == pair2.proxyB.key) {
        return (0);
      }
      else {
        return (1);
      }
    }
  }
  return (1);
}
Pair.prototype.compareTo$1 = Pair.prototype.compareTo;
// ********** Code for MassData **************
function MassData() {
  this.center = new Vector((0), (0));
  this.mass = (0);
  this.inertia = (0);
}
MassData.prototype.get$center = function() { return this.center; };
MassData.prototype.set$center = function(value) { return this.center = value; };
MassData.prototype.setFrom = function(md) {
  this.mass = md.mass;
  this.inertia = md.inertia;
  this.center.setFrom(md.center);
}
MassData.prototype.setFrom$1 = MassData.prototype.setFrom;
// ********** Code for Shape **************
function Shape(type, radius) {
  this.type = type;
  this.radius = radius;
}
Shape.prototype.get$type = function() { return this.type; };
Shape.prototype.set$type = function(value) { return this.type = value; };
Shape.prototype.get$radius = function() { return this.radius; };
Shape.prototype.set$radius = function(value) { return this.radius = value; };
// ********** Code for PolygonShape **************
$inherits(PolygonShape, Shape);
function PolygonShape() {
  this.centroid = new Vector((0), (0));
  this.poolTransform = new Transform();
  this.vertices = new Array((8));
  this.vectorPool = new Array((6));
  this.vertexCount = (0);
  this.normals = new Array((8));
  Shape.call(this, (1), (0.01));
  for (var i = (0);
   i < (6); i++) {
    this.vectorPool.$setindex(i, new Vector((0), (0)));
  }
  for (var i = (0);
   i < this.vertices.get$length(); i++) {
    this.vertices.$setindex(i, new Vector((0), (0)));
  }
  for (var i = (0);
   i < this.normals.get$length(); i++) {
    this.normals.$setindex(i, new Vector((0), (0)));
  }
}
PolygonShape.copy$ctor = function(other) {
  this.centroid = new Vector.copy$ctor(other.centroid);
  this.poolTransform = new Transform();
  this.vertices = new Array((8));
  this.vectorPool = new Array((6));
  this.vertexCount = other.vertexCount;
  this.normals = new Array((8));
  Shape.call(this, (1), other.radius);
  for (var i = (0);
   i < (6); i++) {
    this.vectorPool.$setindex(i, new Vector((0), (0)));
  }
  for (var i = (0);
   i < other.vertices.get$length(); i++) {
    this.vertices.$setindex(i, new Vector.copy$ctor(other.vertices.$index(i)));
  }
  for (var i = (0);
   i < other.normals.get$length(); i++) {
    this.normals.$setindex(i, new Vector.copy$ctor(other.normals.$index(i)));
  }
}
PolygonShape.copy$ctor.prototype = PolygonShape.prototype;
PolygonShape.prototype.get$vertices = function() { return this.vertices; };
PolygonShape.prototype.get$vertexCount = function() { return this.vertexCount; };
PolygonShape.prototype.set$vertexCount = function(value) { return this.vertexCount = value; };
PolygonShape.prototype.clone = function() {
  return new PolygonShape.copy$ctor(this);
}
PolygonShape.prototype.setAsBox = function(hx, hy) {
  this.vertexCount = (4);
  this.vertices.$index((0)).setCoords$2(-hx, -hy);
  this.vertices.$index((1)).setCoords$2(hx, -hy);
  this.vertices.$index((2)).setCoords$2(hx, hy);
  this.vertices.$index((3)).setCoords$2(-hx, hy);
  this.normals.$index((0)).setCoords$2((0), (-1));
  this.normals.$index((1)).setCoords$2((1), (0));
  this.normals.$index((2)).setCoords$2((0), (1));
  this.normals.$index((3)).setCoords$2((-1), (0));
  this.centroid.setZero();
}
PolygonShape.prototype.computeAxisAlignedBox = function(argAabb, argXf) {
  var lower = this.vectorPool.$index((0));
  var upper = this.vectorPool.$index((1));
  var v = this.vectorPool.$index((2));
  Transform.mulToOut(argXf, this.vertices.$index((0)), lower);
  upper.setFrom(lower);
  for (var i = (1);
   i < this.vertexCount; ++i) {
    Transform.mulToOut(argXf, this.vertices.$index(i), v);
    Vector.minToOut(lower, v, lower);
    Vector.maxToOut(upper, v, upper);
  }
  argAabb.lowerBound.x = lower.x - this.radius;
  argAabb.lowerBound.y = lower.y - this.radius;
  argAabb.upperBound.x = upper.x + this.radius;
  argAabb.upperBound.y = upper.y + this.radius;
}
PolygonShape.prototype.computeMass = function(massData, density) {
  if (this.vertexCount == (2)) {
    massData.center.setFrom(this.vertices.$index((0))).addLocal(this.vertices.$index((1))).mulLocal((0.5));
    massData.mass = (0);
    massData.inertia = (0);
    return;
  }
  var center = this.vectorPool.$index((0));
  center.setZero();
  var area = (0);
  var I = (0);
  var pRef = this.vectorPool.$index((1));
  pRef.setZero();
  var k_inv3 = (0.3333333333333333);
  var e1 = this.vectorPool.$index((2));
  var e2 = this.vectorPool.$index((3));
  for (var i = (0);
   i < this.vertexCount; ++i) {
    var p1 = pRef;
    var p2 = this.vertices.$index(i);
    var p3 = i + (1) < this.vertexCount ? this.vertices.$index(i + (1)) : this.vertices.$index((0));
    e1.setFrom(p2);
    e1.subLocal(p1);
    e2.setFrom(p3);
    e2.subLocal(p1);
    var D = Vector.crossVectors(e1, e2);
    var triangleArea = (0.5) * D;
    area += triangleArea;
    center.x = center.x + (triangleArea * k_inv3 * (p1.x + p2.x + p3.x));
    center.y = center.y + (triangleArea * k_inv3 * (p1.y + p2.y + p3.y));
    var px = p1.x;
    var py = p1.y;
    var ex1 = e1.x;
    var ey1 = e1.y;
    var ex2 = e2.x;
    var ey2 = e2.y;
    var intx2 = k_inv3 * ((0.25) * (ex1 * ex1 + ex2 * ex1 + ex2 * ex2) + (px * ex1 + px * ex2)) + (0.5) * px * px;
    var inty2 = k_inv3 * ((0.25) * (ey1 * ey1 + ey2 * ey1 + ey2 * ey2) + (py * ey1 + py * ey2)) + (0.5) * py * py;
    I += (D * (intx2 + inty2));
  }
  massData.mass = density * area;
  center.mulLocal((1) / area);
  massData.center.setFrom(center);
  massData.inertia = I * density;
}
// ********** Code for ShapeType **************
function ShapeType() {}
// ********** Code for DebugDraw **************
function DebugDraw(viewport) {
  this.viewportTransform = viewport;
  this.drawFlags = (1);
}
DebugDraw.prototype.drawPolygon = function(vertices, vertexCount, color) {
  if (vertexCount == (1)) {
    this.drawSegment(vertices.$index((0)), vertices.$index((0)), color);
    return;
  }
  for (var i = (0);
   i < vertexCount - (1); i += (1)) {
    this.drawSegment(vertices.$index(i), vertices.$index(i + (1)), color);
  }
  if (vertexCount > (2)) {
    this.drawSegment(vertices.$index(vertexCount - (1)), vertices.$index((0)), color);
  }
}
DebugDraw.prototype.getWorldToScreenToOut = function(argWorld, argScreen) {
  this.viewportTransform.getWorldToScreen(argWorld, argScreen);
}
DebugDraw.prototype.drawSegment$3 = DebugDraw.prototype.drawSegment;
// ********** Code for CanvasDraw **************
$inherits(CanvasDraw, DebugDraw);
function CanvasDraw(viewport, ctx) {
  this.ctx = ctx;
  DebugDraw.call(this, viewport);
}
CanvasDraw.prototype.drawPolygon = function(vertices, vertexCount, color) {
  if (vertexCount == (1)) {
    this.drawSegment(vertices.$index((0)), vertices.$index((0)), color);
    return;
  }
  for (var i = (0);
   i < vertexCount - (1); i += (1)) {
    this.drawSegment(vertices.$index(i), vertices.$index(i + (1)), color);
  }
  if (vertexCount > (2)) {
    this.drawSegment(vertices.$index(vertexCount - (1)), vertices.$index((0)), color);
  }
}
CanvasDraw.prototype.drawSolidPolygon = function(vertices, vertexCount, color) {
  this.set$_color(color);
  for (var i = (0);
   i < vertexCount; i++) {
    this.getWorldToScreenToOut(vertices.$index(i), vertices.$index(i));
  }
  this.ctx.beginPath();
  this.ctx.moveTo(vertices.$index((0)).get$x(), vertices.$index((0)).get$y());
  for (var i = (1);
   i < vertexCount; i++) {
    this.ctx.lineTo(vertices.$index(i).get$x(), vertices.$index(i).get$y());
  }
  this.ctx.lineTo(vertices.$index((0)).get$x(), vertices.$index((0)).get$y());
  this.ctx.closePath();
  this.ctx.fill();
}
CanvasDraw.prototype.drawSolidCircle = function(center, radius, axis, color) {
  this.set$_color(color);
  this.getWorldToScreenToOut(center, center);
  radius *= this.viewportTransform.scale;
  this.ctx.beginPath();
  this.ctx.arc(center.x, center.y, radius, (0), (6.283185307179586), true);
  this.ctx.closePath();
  this.ctx.fill();
}
CanvasDraw.prototype.drawSegment = function(p1, p2, color) {
  this.set$_color(color);
  this.getWorldToScreenToOut(p1, p1);
  this.getWorldToScreenToOut(p2, p2);
  this.ctx.beginPath();
  this.ctx.moveTo(p1.x, p1.y);
  this.ctx.lineTo(p2.x, p2.y);
  this.ctx.closePath();
  this.ctx.stroke();
}
CanvasDraw.prototype.drawTransform = function(xf) {
  $throw(new NotImplementedException());
}
CanvasDraw.prototype.set$_color = function(color) {
  var red = (color.x * (255)).round().toInt();
  var green = (color.y * (255)).round().toInt();
  var blue = (color.z * (255)).round().toInt();
  var colorString = new StringBufferImpl("#");
  var redString = red.toRadixString((16));
  var greenString = green.toRadixString((16));
  var blueString = blue.toRadixString((16));
  colorString.add(redString);
  colorString.add(greenString);
  colorString.add(blueString);
  this.ctx.setStrokeColor(colorString.toString());
  this.ctx.setFillColor(colorString.toString());
}
CanvasDraw.prototype.drawSegment$3 = CanvasDraw.prototype.drawSegment;
// ********** Code for ContactFilter **************
function ContactFilter() {

}
ContactFilter.prototype.shouldCollide = function(fixtureA, fixtureB) {
  var filterA = fixtureA.filter;
  var filterB = fixtureB.filter;
  if (filterA.groupIndex == filterB.groupIndex && filterA.groupIndex != (0)) {
    return filterA.groupIndex > (0);
  }
  var collide = (filterA.maskBits & filterB.categoryBits) != (0) && (filterA.categoryBits & filterB.maskBits) != (0);
  return collide;
}
// ********** Code for ContactImpulse **************
function ContactImpulse() {
  this.tangentImpulses = new Array((2));
  this.normalImpulses = new Array((2));
}
// ********** Code for Body **************
function Body(bd, world) {
  this._angularVelocity = (0);
  this.prev = null;
  this._force = new Vector((0), (0));
  this._linearVelocity = new Vector.copy$ctor(bd.linearVelocity);
  this._torque = (0);
  this._inertia = (0);
  this.sweep = new Sweep();
  this.oldCenter = new Vector((0), (0));
  this.fixtureCount = (0);
  this._pmd = new MassData();
  this.originTransform = new Transform();
  this.invInertia = (0);
  this.flags = (0);
  this.userData = bd.userData;
  this.sleepTime = (0);
  this.world = world;
  this.fixtureList = null;
  this.jointList = null;
  this.tempCenter = new Vector((0), (0));
  this._fixDef = new FixtureDef();
  this.next = null;
  this._pxf = new Transform();
  this.contactList = null;
  this._type = bd.type;
  this.angularDamping = bd.angularDamping;
  this.linearDamping = bd.linearDamping;
  if (bd.bullet) {
    this.flags |= (8);
  }
  if (bd.fixedRotation) {
    this.flags |= (16);
  }
  if (bd.allowSleep) {
    this.flags |= (4);
  }
  if (bd.awake) {
    this.flags |= (2);
  }
  if (bd.active) {
    this.flags |= (32);
  }
  this.originTransform.position.setFrom(bd.position);
  this.originTransform.rotation.setAngle(bd.angle);
  this.sweep.localCenter.setZero();
  Transform.mulToOut(this.originTransform, this.sweep.localCenter, this.sweep.centerZero);
  this.sweep.center.setFrom(this.sweep.centerZero);
  this.sweep.angle = bd.angle;
  this.sweep.angleZero = bd.angle;
  if (this._type == (2)) {
    this.mass = (1);
    this.invMass = (1);
  }
  else {
    this.mass = (0);
    this.invMass = (0);
  }
}
Body.prototype.createFixture = function(def) {
  var $0;
  var fixture = new Fixture();
  fixture.create(this, def);
  if ((this.flags & (32)) == (32)) {
    var broadPhase = this.world._contactManager.broadPhase;
    fixture.createProxy(broadPhase, this.originTransform);
  }
  fixture.next = this.fixtureList;
  this.fixtureList = fixture;
  ++this.fixtureCount;
  fixture.body = this;
  if (fixture.density > (0)) {
    this.resetMassData();
  }
  ($0 = this.world)._flags = $0._flags | (1);
  return fixture;
}
Body.prototype.get$position = function() {
  return this.originTransform.position;
}
Body.prototype.get$angle = function() {
  return this.sweep.angle;
}
Body.prototype.get$worldCenter = function() {
  return this.sweep.center;
}
Body.prototype.get$localCenter = function() {
  return this.sweep.localCenter;
}
Body.prototype.get$linearVelocity = function() {
  return this._linearVelocity;
}
Body.prototype.get$angularVelocity = function() {
  return this._angularVelocity;
}
Body.prototype.set$angularVelocity = function(w) {
  if (this._type != (0)) {
    if (w * w > (0)) {
      this.set$awake(true);
    }
    this._angularVelocity = w;
  }
}
Body.prototype.resetMassData = function() {
  this.mass = (0);
  this.invMass = (0);
  this._inertia = (0);
  this.invInertia = (0);
  this.sweep.localCenter.setZero();
  if (this._type == (0) || this._type == (1)) {
    this.sweep.center.setFrom(this.originTransform.position);
    this.sweep.centerZero.setFrom(this.originTransform.position);
    return;
  }
  this.tempCenter.setZero();
  var massData = this._pmd;
  for (var f = this.fixtureList;
   f != null; f = f.next) {
    if (f.density == (0)) {
      continue;
    }
    f.getMassData(massData);
    this.mass += massData.mass;
    var temp = new Vector.copy$ctor(massData.center);
    temp.mulLocal(massData.mass);
    this.tempCenter.addLocal(temp);
    this._inertia += massData.inertia;
  }
  if (this.mass > (0)) {
    this.invMass = (1) / this.mass;
    this.tempCenter.mulLocal(this.invMass);
  }
  else {
    this.mass = (1);
    this.invMass = (1);
  }
  if (this._inertia > (0) && (this.flags & (16)) == (0)) {
    this._inertia -= (this.mass * Vector.dot(this.tempCenter, this.tempCenter));
    this.invInertia = (1) / this._inertia;
  }
  else {
    this._inertia = (0);
    this.invInertia = (0);
  }
  this.oldCenter.setFrom(this.sweep.center);
  this.sweep.localCenter.setFrom(this.tempCenter);
  Transform.mulToOut(this.originTransform, this.sweep.localCenter, this.sweep.centerZero);
  this.sweep.center.setFrom(this.sweep.centerZero);
  var temp = new Vector.copy$ctor(this.sweep.center);
  temp.subLocal(this.oldCenter);
  Vector.crossNumAndVectorToOut(this._angularVelocity, temp, temp);
  this._linearVelocity.addLocal(temp);
}
Body.prototype.getWorldPoint = function(localPoint) {
  var v = new Vector((0), (0));
  this.getWorldPointToOut(localPoint, v);
  return v;
}
Body.prototype.getWorldPointToOut = function(localPoint, out) {
  Transform.mulToOut(this.originTransform, localPoint, out);
}
Body.prototype.getWorldVector = function(localVector) {
  var out = new Vector((0), (0));
  this.getWorldVectorToOut(localVector, out);
  return out;
}
Body.prototype.getWorldVectorToOut = function(localVector, out) {
  Matrix22.mulMatrixAndVectorToOut(this.originTransform.rotation, localVector, out);
}
Body.prototype.get$type = function() {
  return this._type;
}
Body.prototype.get$bullet = function() {
  return (this.flags & (8)) == (8);
}
Body.prototype.get$awake = function() {
  return (this.flags & (2)) == (2);
}
Body.prototype.set$awake = function(flag) {
  if (flag) {
    if ((this.flags & (2)) == (0)) {
      this.flags |= (2);
      this.sleepTime = (0);
    }
  }
  else {
    this.flags &= (-3);
    this.sleepTime = (0);
    this._linearVelocity.setZero();
    this._angularVelocity = (0);
    this._force.setZero();
    this._torque = (0);
  }
}
Body.prototype.get$active = function() {
  return (this.flags & (32)) == (32);
}
Body.prototype.synchronizeFixtures = function() {
  var xf1 = this._pxf;
  xf1.rotation.setAngle(this.sweep.angleZero);
  Matrix22.mulMatrixAndVectorToOut(xf1.rotation, this.sweep.localCenter, xf1.position);
  xf1.position.mulLocal((-1));
  xf1.position.addLocal(this.sweep.centerZero);
  var broadPhase = this.world._contactManager.broadPhase;
  for (var f = this.fixtureList;
   f != null; f = f.next) {
    f.synchronize(broadPhase, xf1, this.originTransform);
  }
}
Body.prototype.synchronizeTransform = function() {
  var $0;
  var c = Math.cos(this.sweep.angle);
  var s = Math.sin(this.sweep.angle);
  this.originTransform.rotation.col1.x = c;
  this.originTransform.rotation.col2.x = -s;
  this.originTransform.rotation.col1.y = s;
  this.originTransform.rotation.col2.y = c;
  this.originTransform.position.x = this.originTransform.rotation.col1.x * this.sweep.localCenter.x + this.originTransform.rotation.col2.x * this.sweep.localCenter.y;
  this.originTransform.position.y = this.originTransform.rotation.col1.y * this.sweep.localCenter.x + this.originTransform.rotation.col2.y * this.sweep.localCenter.y;
  ($0 = this.originTransform.position).x = $0.x * (-1);
  ($0 = this.originTransform.position).y = $0.y * (-1);
  ($0 = this.originTransform.position).x = $0.x + this.sweep.center.x;
  ($0 = this.originTransform.position).y = $0.y + this.sweep.center.y;
}
Body.prototype.shouldCollide = function(other) {
  if (this._type != (2) && other._type != (2)) {
    return false;
  }
  return true;
}
Body.prototype.advance = function(t) {
  this.sweep.advance(t);
  this.sweep.center.setFrom(this.sweep.centerZero);
  this.sweep.angle = this.sweep.angleZero;
  this.synchronizeTransform();
}
Body.prototype.next$0 = function() {
  return this.next();
};
// ********** Code for BodyDef **************
function BodyDef() {
  this.linearVelocity = new Vector((0), (0));
  this.bullet = false;
  this.allowSleep = true;
  this.active = true;
  this.angularVelocity = (0);
  this.angularDamping = (0);
  this.linearDamping = (0);
  this.userData = null;
  this.awake = true;
  this.angle = (0);
  this.position = new Vector((0), (0));
  this.fixedRotation = false;
  this.type = (0);
}
BodyDef.prototype.get$type = function() { return this.type; };
BodyDef.prototype.set$type = function(value) { return this.type = value; };
BodyDef.prototype.get$angle = function() { return this.angle; };
BodyDef.prototype.set$angle = function(value) { return this.angle = value; };
BodyDef.prototype.get$position = function() { return this.position; };
BodyDef.prototype.set$position = function(value) { return this.position = value; };
// ********** Code for BodyType **************
function BodyType() {}
// ********** Code for ContactManager **************
function ContactManager(argPool) {
  this.contactCount = (0);
  this.contactList = null;
  this.pool = argPool;
  this.broadPhase = new BroadPhase();
  this.contactFilter = new ContactFilter();
  this.contactListener = null;
}
ContactManager.prototype.addPair = function(fixtureA, fixtureB) {
  var bodyA = fixtureA.body;
  var bodyB = fixtureB.body;
  if (bodyA == bodyB) {
    return;
  }
  var edge = bodyB.contactList;
  while (edge != null) {
    if ($eq(edge.other, bodyA)) {
      var fA = edge.contact.fixtureA;
      var fB = edge.contact.fixtureB;
      if ($eq(fA, fixtureA) && $eq(fB, fixtureB)) {
        return;
      }
      if ($eq(fA, fixtureB) && $eq(fB, fixtureA)) {
        return;
      }
    }
    edge = edge.next;
  }
  if ($eq(bodyB.shouldCollide(bodyA), false)) {
    return;
  }
  if (this.contactFilter != null && $eq(this.contactFilter.shouldCollide(fixtureA, fixtureB), false)) {
    return;
  }
  var c = this.pool.popContact(fixtureA, fixtureB);
  fixtureA = c.fixtureA;
  fixtureB = c.fixtureB;
  bodyA = fixtureA.body;
  bodyB = fixtureB.body;
  c.prev = null;
  c.next = this.contactList;
  if (this.contactList != null) {
    this.contactList.prev = c;
  }
  this.contactList = c;
  c.edge1.contact = c;
  c.edge1.other = bodyB;
  c.edge1.prev = null;
  c.edge1.next = bodyA.contactList;
  if (bodyA.contactList != null) {
    bodyA.contactList.prev = c.edge1;
  }
  bodyA.contactList = c.edge1;
  c.edge2.contact = c;
  c.edge2.other = bodyA;
  c.edge2.prev = null;
  c.edge2.next = bodyB.contactList;
  if (bodyB.contactList != null) {
    bodyB.contactList.prev = c.edge2;
  }
  bodyB.contactList = c.edge2;
  ++this.contactCount;
}
ContactManager.prototype.findNewContacts = function() {
  this.broadPhase.updatePairs(this);
}
ContactManager.prototype.destroy = function(c) {
  var fixtureA = c.fixtureA;
  var fixtureB = c.fixtureB;
  var bodyA = fixtureA.body;
  var bodyB = fixtureB.body;
  if (this.contactListener != null && c.get$touching()) {
    this.contactListener.endContact(c);
  }
  if (c.prev != null) {
    c.prev.next = c.next;
  }
  if (c.next != null) {
    c.next.prev = c.prev;
  }
  if ($eq(c, this.contactList)) {
    this.contactList = c.next;
  }
  if (c.edge1.prev != null) {
    c.edge1.prev.next = c.edge1.next;
  }
  if (c.edge1.next != null) {
    c.edge1.next.prev = c.edge1.prev;
  }
  if ($eq(c.edge1, bodyA.contactList)) {
    bodyA.contactList = c.edge1.next;
  }
  if (c.edge2.prev != null) {
    c.edge2.prev.next = c.edge2.next;
  }
  if (c.edge2.next != null) {
    c.edge2.next.prev = c.edge2.prev;
  }
  if ($eq(c.edge2, bodyB.contactList)) {
    bodyB.contactList = c.edge2.next;
  }
  this.pool.pushContact(c);
  --this.contactCount;
}
ContactManager.prototype.collide = function() {
  var c = this.contactList;
  while (c != null) {
    var fixtureA = c.fixtureA;
    var fixtureB = c.fixtureB;
    var bodyA = fixtureA.body;
    var bodyB = fixtureB.body;
    if ($eq(bodyA.get$awake(), false) && $eq(bodyB.get$awake(), false)) {
      c = c.next;
      continue;
    }
    if ((c.flags & (8)) == (8)) {
      if ($eq(bodyB.shouldCollide(bodyA), false)) {
        var cNuke = c;
        c = cNuke.next;
        this.destroy(cNuke);
        continue;
      }
      if (this.contactFilter != null && $eq(this.contactFilter.shouldCollide(fixtureA, fixtureB), false)) {
        var cNuke = c;
        c = cNuke.next;
        this.destroy(cNuke);
        continue;
      }
      c.flags = c.flags & (-9);
    }
    var proxyIdA = fixtureA.proxy;
    var proxyIdB = fixtureB.proxy;
    var overlap = this.broadPhase.testOverlap(proxyIdA, proxyIdB);
    if ($eq(overlap, false)) {
      var cNuke = c;
      c = cNuke.next;
      this.destroy(cNuke);
      continue;
    }
    c.update(this.contactListener);
    c = c.next;
  }
}
// ********** Code for Filter **************
function Filter() {
  this.maskBits = (0);
  this.groupIndex = (0);
  this.categoryBits = (0);
}
Filter.prototype.setFrom = function(other) {
  this.categoryBits = other.categoryBits;
  this.maskBits = other.maskBits;
  this.groupIndex = other.groupIndex;
}
Filter.prototype.setFrom$1 = Filter.prototype.setFrom;
// ********** Code for Fixture **************
function Fixture() {
  this.shape = null;
  this.filter = new Filter();
  this._poolTwo = new AxisAlignedBox();
  this.box = new AxisAlignedBox();
  this.next = null;
  this.proxy = null;
  this.body = null;
  this._poolOne = new AxisAlignedBox();
}
Fixture.prototype.create = function(b, def) {
  this.userData = def.userData;
  this.friction = def.friction;
  this.restitution = def.restitution;
  this.body = b;
  this.next = null;
  this.filter.setFrom(def.filter);
  this.isSensor = def.isSensor;
  this.shape = def.shape.clone();
  this.density = def.density;
}
Fixture.prototype.createProxy = function(broadPhase, xf) {
  this.shape.computeAxisAlignedBox(this.box, xf);
  this.proxy = broadPhase.createProxy(this.box, this);
}
Fixture.prototype.synchronize = function(broadPhase, transformOne, transformTwo) {
  if (this.proxy == null) {
    return;
  }
  this.shape.computeAxisAlignedBox(this._poolOne, transformOne);
  this.shape.computeAxisAlignedBox(this._poolTwo, transformTwo);
  this.box.lowerBound.x = this._poolOne.lowerBound.x < this._poolTwo.lowerBound.x ? this._poolOne.lowerBound.x : this._poolTwo.lowerBound.x;
  this.box.lowerBound.y = this._poolOne.lowerBound.y < this._poolTwo.lowerBound.y ? this._poolOne.lowerBound.y : this._poolTwo.lowerBound.y;
  this.box.upperBound.x = this._poolOne.upperBound.x > this._poolTwo.upperBound.x ? this._poolOne.upperBound.x : this._poolTwo.upperBound.x;
  this.box.upperBound.y = this._poolOne.upperBound.y > this._poolTwo.upperBound.y ? this._poolOne.upperBound.y : this._poolTwo.upperBound.y;
  var disp = this._poolOne.lowerBound;
  disp.x = transformTwo.position.x - transformOne.position.x;
  disp.y = transformTwo.position.y - transformOne.position.y;
  broadPhase.moveProxy(this.proxy, this.box, disp);
}
Fixture.prototype.getMassData = function(massData) {
  this.shape.computeMass(massData, this.density);
}
Fixture.prototype.get$type = function() {
  return this.shape.type;
}
Fixture.prototype.next$0 = function() {
  return this.next();
};
// ********** Code for FixtureDef **************
function FixtureDef() {
  this.shape = null;
  this.friction = (0.2);
  this.restitution = (0);
  this.density = (0);
  this.isSensor = false;
  this.filter = new Filter();
  this.userData = null;
  this.filter.categoryBits = (1);
  this.filter.maskBits = (65535);
  this.filter.groupIndex = (0);
}
// ********** Code for Island **************
function Island() {
  this._translation = new Vector((0), (0));
  this.impulse = new ContactImpulse();
  this._contactSolver = new ContactSolver();
}
Island.prototype.init = function(argBodyCapacity, argContactCapacity, argJointCapacity, argListener) {
  this.bodyCapacity = argBodyCapacity;
  this.contactCapacity = argContactCapacity;
  this.jointCapacity = argJointCapacity;
  this.bodyCount = (0);
  this.contactCount = (0);
  this.listener = argListener;
  if (this.bodies == null || this.bodyCapacity > this.bodies.get$length()) {
    this.bodies = new Array(this.bodyCapacity);
  }
  if (this.contacts == null || this.contactCapacity > this.contacts.get$length()) {
    this.contacts = new Array(this.contactCapacity);
  }
  if (this.joints == null || this.jointCapacity > this.joints.get$length()) {
    this.joints = new Array(this.jointCapacity);
  }
  if (this.velocities == null || this.bodyCapacity > this.velocities.get$length()) {
    var old = this.velocities == null ? new Array((0)) : this.velocities;
    this.velocities = new Array(this.bodyCapacity);
    this.velocities.setRange$3((0), old.get$length(), old);
    for (var i = old.get$length();
     i < this.velocities.get$length(); i++) {
      this.velocities.$setindex(i, new Velocity());
    }
  }
  if (this.positions == null || this.bodyCapacity > this.positions.get$length()) {
    var old = this.positions == null ? new Array((0)) : this.positions;
    this.positions = new Array(this.bodyCapacity);
    this.positions.setRange$3((0), old.get$length(), old);
    for (var i = old.get$length();
     i < this.positions.get$length(); i++) {
      this.positions.$setindex(i, new Position());
    }
  }
}
Island.prototype.clear = function() {
  this.bodyCount = (0);
  this.contactCount = (0);
  this.jointCount = (0);
}
Island.prototype.solve = function(step, gravity, allowSleep) {
  var $0;
  for (var i = (0);
   i < this.bodyCount; ++i) {
    var b = this.bodies.$index(i);
    if (b.get$type() != (2)) {
      continue;
    }
    var velocityDelta = new Vector((b._force.x * b.invMass + gravity.x) * step.dt, (b._force.y * b.invMass + gravity.y) * step.dt);
    b.get$linearVelocity().addLocal(velocityDelta);
    var newAngularVelocity = b.get$angularVelocity() + (step.dt * b.invInertia * b._torque);
    b.set$angularVelocity(newAngularVelocity);
    var a = ((1) - step.dt * b.linearDamping);
    var a1 = ((0) > (a < (1) ? a : (1)) ? (0) : (a < (1) ? a : (1)));
    b.get$linearVelocity().mulLocal(a1);
    var a2 = ((1) - step.dt * b.angularDamping);
    var b1 = (a2 < (1) ? a2 : (1));
    b.set$angularVelocity(b.get$angularVelocity() * ((0) > b1 ? (0) : b1));
  }
  var i1 = (-1);
  for (var i2 = (0);
   i2 < this.contactCount; ++i2) {
    var fixtureA = this.contacts.$index(i2).get$fixtureA();
    var fixtureB = this.contacts.$index(i2).get$fixtureB();
    var bodyA = fixtureA.body;
    var bodyB = fixtureB.body;
    var nonStatic = bodyA.get$type() != (0) && bodyB.get$type() != (0);
    if (nonStatic) {
      ++i1;
      var temp = this.contacts.$index(i1);
      this.contacts.$setindex(i1, this.contacts.$index(i2));
      this.contacts.$setindex(i2, temp);
    }
  }
  this._contactSolver.init(this.contacts, this.contactCount, step.dtRatio);
  this._contactSolver.warmStart();
  for (var i = (0);
   i < this.jointCount; ++i) {
    this.joints.$index(i).initVelocityConstraints$1(step);
  }
  for (var i = (0);
   i < step.velocityIterations; ++i) {
    for (var j = (0);
     j < this.jointCount; ++j) {
      this.joints.$index(j).solveVelocityConstraints$1(step);
    }
    this._contactSolver.solveVelocityConstraints();
  }
  this._contactSolver.storeImpulses();
  var temp = new Vector((0), (0));
  for (var i = (0);
   i < this.bodyCount; ++i) {
    var b = this.bodies.$index(i);
    if (b.get$type() == (0)) {
      continue;
    }
    this._translation.setFrom(b.get$linearVelocity());
    this._translation.mulLocal(step.dt);
    if (Vector.dot(this._translation, this._translation) > (4)) {
      var ratio = (2) / this._translation.get$length();
      b.get$linearVelocity().mulLocal(ratio);
    }
    var rotation = step.dt * b.get$angularVelocity();
    if (rotation * rotation > (2.4674011002723395)) {
      var ratio = (1.5707963267948966) / rotation.abs();
      b.set$angularVelocity(b.get$angularVelocity() * ratio);
    }
    b.sweep.centerZero.setFrom(b.sweep.center);
    b.sweep.angleZero = b.sweep.angle;
    temp.setFrom(b.get$linearVelocity());
    temp.mulLocal(step.dt);
    b.sweep.center.addLocal(temp);
    ($0 = b.sweep).angle = $0.angle + (step.dt * b.get$angularVelocity());
    b.synchronizeTransform();
  }
  for (var i = (0);
   i < step.positionIterations; ++i) {
    var contactsOkay = this._contactSolver.solvePositionConstraints((0.2));
    var jointsOkay = true;
    for (var j = (0);
     j < this.jointCount; ++j) {
      var jointOkay = this.joints.$index(j).solvePositionConstraints$1((0.2));
      jointsOkay = jointsOkay && jointOkay;
    }
    if (contactsOkay && jointsOkay) {
      break;
    }
  }
  this.report(this._contactSolver.constraints);
  if (allowSleep) {
    var minSleepTime = (99999999999999);
    var linTolSqr = (0.0001);
    var angTolSqr = (0.0012184696791468343);
    for (var i = (0);
     i < this.bodyCount; ++i) {
      var b = this.bodies.$index(i);
      if (b.get$type() == (0)) {
        continue;
      }
      if ((b.flags & (4)) == (0)) {
        b.sleepTime = (0);
        minSleepTime = (0);
      }
      if ((b.flags & (4)) == (0) || b.get$angularVelocity() * b.get$angularVelocity() > angTolSqr || Vector.dot(b.get$linearVelocity(), b.get$linearVelocity()) > linTolSqr) {
        b.sleepTime = (0);
        minSleepTime = (0);
      }
      else {
        b.sleepTime = b.sleepTime + step.dt;
        minSleepTime = Math.min(minSleepTime, b.sleepTime);
      }
    }
    if (minSleepTime >= (0.5)) {
      for (var i = (0);
       i < this.bodyCount; ++i) {
        var b = this.bodies.$index(i);
        b.set$awake(false);
      }
    }
  }
}
Island.prototype.addBody = function(body) {
  body.islandIndex = this.bodyCount;
  this.bodies.$setindex(this.bodyCount++, body);
}
Island.prototype.addContact = function(contact) {
  this.contacts.$setindex(this.contactCount++, contact);
}
Island.prototype.addJoint = function(joint) {
  this.joints.$setindex(this.jointCount++, joint);
}
Island.prototype.report = function(constraints) {
  if (this.listener == null) {
    return;
  }
  for (var i = (0);
   i < this.contactCount; ++i) {
    var c = this.contacts.$index(i);
    var cc = constraints.$index(i);
    for (var j = (0);
     j < cc.pointCount; ++j) {
      this.impulse.normalImpulses.$setindex(j, cc.points.$index(j).get$normalImpulse());
      this.impulse.tangentImpulses.$setindex(j, cc.points.$index(j).get$tangentImpulse());
    }
    this.listener.postSolve(c, this.impulse);
  }
}
// ********** Code for Position **************
function Position() {
  this.x = new Vector((0), (0));
  this.a = (0);
}
Position.prototype.get$x = function() { return this.x; };
Position.prototype.set$x = function(value) { return this.x = value; };
// ********** Code for Velocity **************
function Velocity() {
  this.v = new Vector((0), (0));
  this.a = (0);
}
Velocity.prototype.get$v = function() { return this.v; };
Velocity.prototype.set$v = function(value) { return this.v = value; };
// ********** Code for TimeStep **************
function TimeStep() {
  this.dtRatio = (0);
  this.dt = (0);
  this.velocityIterations = (0);
  this.inv_dt = (0);
  this.warmStarting = true;
  this.positionIterations = (0);
}
// ********** Code for World **************
function World(gravity, doSleep, argPool) {
  this._bodyList = null;
  this._bodyCount = (0);
  this.toiSolver = new TimeOfImpactSolver();
  this.toiOutput = new TimeOfImpactOutput();
  this._jointCount = (0);
  this._warmStarting = true;
  this._flags = (4);
  this.axis = new Vector((0), (0));
  this.backup = new Sweep();
  this.island = new Island();
  this.cB = new Vector((0), (0));
  this._fixtureDestructionListener = null;
  this.stack = new Array((10));
  this.center = new Vector((0), (0));
  this.timestep = new TimeStep();
  this._allowSleep = doSleep;
  this._gravity = gravity;
  this._continuousPhysics = true;
  this.wqwrapper = new WorldQueryWrapper();
  this.cA = new Vector((0), (0));
  this._jointDestructionListener = null;
  this._inverseTimestep = (0);
  this.toiInput = new TimeOfImpactInput();
  this._pool = argPool;
  this._contactStacks = new Array((2));
  this.contacts = new Array((32));
  this._jointList = null;
  this._debugDraw = null;
  this._contactManager = new ContactManager(this);
  for (var i = (0);
   i < this._contactStacks.get$length(); i++) {
    this._contactStacks.$setindex(i, new Array((2)));
  }
  this._initializeRegisters();
}
World.prototype.get$center = function() { return this.center; };
World.prototype._addType = function(creatorStack, type1, type2) {
  var register = new ContactRegister();
  register.creator = creatorStack;
  register.primary = true;
  this._contactStacks.$index(type1).$setindex(type2, register);
  if (type1 != type2) {
    var register2 = new ContactRegister();
    register2.creator = creatorStack;
    register2.primary = false;
    this._contactStacks.$index(type2).$setindex(type1, register2);
  }
}
World.prototype._initializeRegisters = function() {
  this._addType(this._pool.getCircleContactStack(), (0), (0));
  this._addType(this._pool.getPolyCircleContactStack(), (1), (0));
  this._addType(this._pool.getPolyContactStack(), (1), (1));
}
World.prototype.popContact = function(fixtureA, fixtureB) {
  var type1 = fixtureA.get$type();
  var type2 = fixtureB.get$type();
  var reg = this._contactStacks.$index(type1).$index(type2);
  var creator = reg.creator;
  if (creator != null) {
    if (creator.isEmpty()) {
      creator = this._getFreshContactStack(type1, type2);
    }
    if (reg.primary) {
      var c = creator.removeFirst();
      c.init(fixtureA, fixtureB);
      return c;
    }
    else {
      var c = creator.removeFirst();
      c.init(fixtureB, fixtureA);
      return c;
    }
  }
  else {
    return null;
  }
}
World.prototype._getFreshContactStack = function(type1, type2) {
  if (type1 == (0) && type2 == (0)) {
    return this._pool.getCircleContactStack();
  }
  else if (type1 == (1) && type2 == (1)) {
    return this._pool.getPolyContactStack();
  }
  else {
    return this._pool.getPolyCircleContactStack();
  }
}
World.prototype.pushContact = function(contact) {
  if (contact.manifold.pointCount > (0)) {
    contact.fixtureA.body.set$awake(true);
    contact.fixtureB.body.set$awake(true);
  }
  var type1 = contact.fixtureA.get$type();
  var type2 = contact.fixtureB.get$type();
  var creator = this._contactStacks.$index(type1).$index(type2).get$creator();
  creator.addFirst(contact);
}
World.prototype.createBody = function(def) {
  if (this.get$locked()) {
    return null;
  }
  var b = new Body(def, this);
  b.prev = null;
  b.next = this._bodyList;
  if (this._bodyList != null) {
    this._bodyList.prev = b;
  }
  this._bodyList = b;
  ++this._bodyCount;
  return b;
}
World.prototype.step = function(dt, velocityIterations, positionIterations) {
  if ((this._flags & (1)) == (1)) {
    this._contactManager.findNewContacts();
    this._flags &= (-2);
  }
  this._flags |= (2);
  this.timestep.dt = dt;
  this.timestep.velocityIterations = velocityIterations;
  this.timestep.positionIterations = positionIterations;
  if (dt > (0)) {
    this.timestep.inv_dt = (1) / dt;
  }
  else {
    this.timestep.inv_dt = (0);
  }
  this.timestep.dtRatio = this._inverseTimestep * dt;
  this.timestep.warmStarting = this._warmStarting;
  this._contactManager.collide();
  if (this.timestep.dt > (0)) {
    this.solve(this.timestep);
  }
  if (this._continuousPhysics && this.timestep.dt > (0)) {
    this.solveTimeOfImpact();
  }
  if (this.timestep.dt > (0)) {
    this._inverseTimestep = this.timestep.inv_dt;
  }
  if ((this._flags & (4)) == (4)) {
    this.clearForces();
  }
  this._flags &= (-3);
}
World.prototype.clearForces = function() {
  for (var body = this._bodyList;
   body != null; body = body.next) {
    body._force.setZero();
    body._torque = (0);
  }
}
World.prototype.drawDebugData = function() {
  if (this._debugDraw == null) {
    return;
  }
  var drawFlags = this._debugDraw.drawFlags;
  if ((drawFlags & (1)) == (1)) {
    var xf = new Transform();
    var color = new Color3();
    for (var b = this._bodyList;
     b != null; b = b.next) {
      xf.setFrom(b.originTransform);
      for (var f = b.fixtureList;
       f != null; f = f.next) {
        if ($eq(b.get$active(), false)) {
          color.setFromRGB((0.5), (0.5), (0.3));
          this.drawShape(f, xf, color);
        }
        else if (b.get$type() == (0)) {
          color.setFromRGB((0.5), (0.9), (0.3));
          this.drawShape(f, xf, color);
        }
        else if (b.get$type() == (1)) {
          color.setFromRGB((0.5), (0.5), (0.9));
          this.drawShape(f, xf, color);
        }
        else if ($eq(b.get$awake(), false)) {
          color.setFromRGB((0.9), (0.9), (0.9));
          this.drawShape(f, xf, color);
        }
        else {
          color.setFromRGB((0.9), (0.7), (0.7));
          this.drawShape(f, xf, color);
        }
      }
    }
  }
  if ((drawFlags & (2)) == (2)) {
    for (var j = this._jointList;
     j != null; j = j._next) this.drawJoint(j);
  }
  if ((drawFlags & (8)) == (8)) {
    var color = new Color3.fromRGB$ctor((0.3), (0.9), (0.9));
    for (var c = this._contactManager.contactList;
     c != null; c = c.next) {
      var fixtureA = c.fixtureA;
      var fixtureB = c.fixtureB;
      this.cA.setFrom(fixtureA.box.get$center());
      this.cB.setFrom(fixtureB.box.get$center());
      this._debugDraw.drawSegment(this.cA, this.cB, color);
    }
  }
  if ((drawFlags & (4)) == (4)) {
    var color = new Color3.fromRGB$ctor((0.9), (0.3), (0.9));
    for (var b = this._bodyList;
     b != null; b = b.next) {
      if ($eq(b.get$active(), false)) {
        continue;
      }
      for (var f = b.fixtureList;
       f != null; f = f.next) {
        var aabb = f.proxy.box;
        var vs = new Array((4));
        for (var i = (0);
         i < vs.get$length(); i++) {
          vs.$setindex(i, new Vector((0), (0)));
        }
        vs.$index((0)).setCoords$2(aabb.lowerBound.x, aabb.lowerBound.y);
        vs.$index((1)).setCoords$2(aabb.upperBound.x, aabb.lowerBound.y);
        vs.$index((2)).setCoords$2(aabb.upperBound.x, aabb.upperBound.y);
        vs.$index((3)).setCoords$2(aabb.lowerBound.x, aabb.upperBound.y);
        this._debugDraw.drawPolygon(vs, (4), color);
      }
    }
  }
  if ((drawFlags & (16)) == (16)) {
    var xf = new Transform();
    for (var b = this._bodyList;
     b != null; b = b.next) {
      xf.setFrom(b.originTransform);
      xf.position.setFrom(b.get$worldCenter());
      this._debugDraw.drawTransform(xf);
    }
  }
}
World.prototype.get$locked = function() {
  return (this._flags & (2)) == (2);
}
World.prototype.get$jointList = function() {
  return this._jointList;
}
World.prototype.solve = function(timeStep) {
  this.island.init(this._bodyCount, this._contactManager.contactCount, this._jointCount, this._contactManager.contactListener);
  for (var b = this._bodyList;
   b != null; b = b.next) {
    b.flags = b.flags & (-2);
  }
  for (var c = this._contactManager.contactList;
   c != null; c = c.next) {
    c.flags = c.flags & (-2);
  }
  for (var j = this.get$jointList();
   j != null; j = j._next) {
    j.islandFlag = false;
  }
  var stackSize = this._bodyCount;
  if (this.stack.get$length() < stackSize) {
    this.stack = new Array(stackSize);
  }
  for (var seed = this._bodyList;
   seed != null; seed = seed.next) {
    if ((seed.flags & (1)) == (1)) {
      continue;
    }
    if ($eq(seed.get$awake(), false) || $eq(seed.get$active(), false)) {
      continue;
    }
    if (seed.get$type() == (0)) {
      continue;
    }
    this.island.clear();
    var stackCount = (0);
    this.stack.$setindex(stackCount++, seed);
    seed.flags = seed.flags | (1);
    while (stackCount > (0)) {
      var b = this.stack.$index(--stackCount);
      this.island.addBody(b);
      b.set$awake(true);
      if (b.get$type() == (0)) {
        continue;
      }
      for (var ce = b.contactList;
       ce != null; ce = ce.next) {
        var contact = ce.contact;
        if ((contact.flags & (1)) == (1)) {
          continue;
        }
        if ($eq(contact.get$enabled(), false) || $eq(contact.get$touching(), false)) {
          continue;
        }
        var sensorA = contact.fixtureA.isSensor;
        var sensorB = contact.fixtureB.isSensor;
        if (sensorA || sensorB) {
          continue;
        }
        this.island.addContact(contact);
        contact.flags = contact.flags | (1);
        var other = ce.other;
        if ((other.flags & (1)) == (1)) {
          continue;
        }
        this.stack.$setindex(stackCount++, other);
        other.flags = other.flags | (1);
      }
      for (var je = b.jointList;
       je != null; je = je.next) {
        if ($eq(je.joint.islandFlag, true)) {
          continue;
        }
        var other = je.other;
        if ($eq(other.get$active(), false)) {
          continue;
        }
        this.island.addJoint(je.joint);
        je.joint.islandFlag = true;
        if (((other.flags & (1)) == (1))) {
          continue;
        }
        this.stack.$setindex(stackCount++, other);
        other.flags = other.flags | (1);
      }
    }
    this.island.solve(timeStep, this._gravity, this._allowSleep);
    for (var i = (0);
     i < this.island.bodyCount; ++i) {
      var b = this.island.bodies.$index(i);
      if (b.get$type() == (0)) {
        b.flags = b.flags & (-2);
      }
    }
  }
  for (var b = this._bodyList;
   b != null; b = b.next) {
    if ((b.flags & (1)) == (0)) {
      continue;
    }
    if (b.get$type() == (0)) {
      continue;
    }
    b.synchronizeFixtures();
  }
  this._contactManager.findNewContacts();
}
World.prototype.solveTimeOfImpact = function() {
  for (var c = this._contactManager.contactList;
   c != null; c = c.next) {
    c.flags = c.flags | (4);
    c.toiCount = (0);
  }
  for (var body = this._bodyList;
   body != null; body = body.next) {
    if ((body.flags & (1)) == (0) || body.get$type() == (1) || body.get$type() == (0)) {
      body.flags = body.flags | (64);
    }
    else {
      body.flags = body.flags & (-65);
    }
  }
  for (var body = this._bodyList;
   body != null; body = body.next) {
    if ((body.flags & (64)) == (64)) {
      continue;
    }
    if ($eq(body.get$bullet(), true)) {
      continue;
    }
    this.solveTimeOfImpactGivenBody(body);
    body.flags = body.flags | (64);
  }
  for (var body = this._bodyList;
   body != null; body = body.next) {
    if ((body.flags & (64)) == (64)) {
      continue;
    }
    if ($eq(body.get$bullet(), false)) {
      continue;
    }
    this.solveTimeOfImpactGivenBody(body);
    body.flags = body.flags | (64);
  }
}
World.prototype.solveTimeOfImpactGivenBody = function(body) {
  var toiContact = null;
  var toi = (1);
  var toiOther = null;
  var found;
  var count;
  var iter = (0);
  var bullet = body.get$bullet();
  do {
    count = (0);
    found = false;
    for (var ce = body.contactList;
     ce != null; ce = ce.next) {
      if ($eq(ce.contact, toiContact)) {
        continue;
      }
      var other = ce.other;
      var type = other.get$type();
      if ($eq(bullet, true)) {
        if ((other.flags & (64)) == (0)) {
          continue;
        }
        if (type != (0) && (ce.contact.flags & (16)) != (0)) {
          continue;
        }
      }
      else if (type == (2)) {
        continue;
      }
      var contact = ce.contact;
      if ($eq(contact.get$enabled(), false)) {
        continue;
      }
      if (contact.toiCount > (10)) {
        continue;
      }
      var fixtureA = contact.fixtureA;
      var fixtureB = contact.fixtureB;
      if (fixtureA.isSensor || fixtureB.isSensor) {
        continue;
      }
      var bodyA = fixtureA.body;
      var bodyB = fixtureB.body;
      this.toiInput.proxyA.setFromShape(fixtureA.shape);
      this.toiInput.proxyB.setFromShape(fixtureB.shape);
      this.toiInput.sweepA.setFrom(bodyA.sweep);
      this.toiInput.sweepB.setFrom(bodyB.sweep);
      this.toiInput.tMax = toi;
      this._pool.timeOfImpact.timeOfImpact(this.toiOutput, this.toiInput);
      if (this.toiOutput.state == (3) && this.toiOutput.t < toi) {
        toiContact = contact;
        toi = this.toiOutput.t;
        toiOther = other;
        found = true;
      }
      ++count;
    }
    ++iter;
  }
  while (found && count > (1) && iter < (50))
  if (toiContact == null) {
    body.advance((1));
    return;
  }
  this.backup.setFrom(body.sweep);
  body.advance(toi);
  toiContact.update(this._contactManager.contactListener);
  if ($eq(toiContact.get$enabled(), false)) {
    body.sweep.setFrom(this.backup);
    this.solveTimeOfImpactGivenBody(body);
  }
  ++toiContact.toiCount;
  if (this.contacts == null || this.contacts.get$length() < (32)) {
    this.contacts = new Array((32));
  }
  count = (0);
  for (var ce = body.contactList;
   ce != null && count < (32); ce = ce.next) {
    var other = ce.other;
    var type = other.get$type();
    if (type == (2)) {
      continue;
    }
    var contact = ce.contact;
    if ($eq(contact.get$enabled(), false)) {
      continue;
    }
    var fixtureA = contact.fixtureA;
    var fixtureB = contact.fixtureB;
    if (fixtureA.isSensor || fixtureB.isSensor) {
      continue;
    }
    if ($ne(contact, toiContact)) {
      contact.update(this._contactManager.contactListener);
    }
    if ($eq(contact.get$enabled(), false)) {
      continue;
    }
    if ($eq(contact.get$touching(), false)) {
      continue;
    }
    this.contacts.$setindex(count, contact);
    ++count;
  }
  this.toiSolver.initialize(this.contacts, count, body);
  var k_toiBaumgarte = (0.75);
  for (var i = (0);
   i < (20); ++i) {
    var contactsOkay = this.toiSolver.solve(k_toiBaumgarte);
    if (contactsOkay) {
      break;
    }
  }
  if (toiOther.get$type() != (0)) {
    toiContact.flags = toiContact.flags | (16);
  }
}
World.prototype.drawShape = function(fixture, xf, color) {
  switch (fixture.get$type()) {
    case (0):

      var circle = fixture.shape;
      Transform.mulToOut(xf, circle.get$position(), this.center);
      var radius = circle.get$radius();
      this.axis.setFrom(xf.rotation.col1);
      this._debugDraw.drawSolidCircle(this.center, radius, this.axis, color);
      break;

    case (1):

      var poly = fixture.shape;
      var vertexCount = poly.get$vertexCount();
      var vertices = new Array(vertexCount);
      for (var i = (0);
       i < vertexCount; i++) {
        vertices.$setindex(i, new Vector((0), (0)));
      }
      for (var i = (0);
       i < vertexCount; ++i) {
        Transform.mulToOut(xf, poly.get$vertices().$index(i), vertices.$index(i));
      }
      this._debugDraw.drawSolidPolygon(vertices, vertexCount, color);

  }
}
World.prototype.drawJoint = function(joint) {
  var bodyA = joint.bodyA;
  var bodyB = joint.bodyB;
  var xf1 = bodyA.originTransform;
  var xf2 = bodyB.originTransform;
  var x1 = xf1.position;
  var x2 = xf2.position;
  var p1 = new Vector((0), (0));
  var p2 = new Vector((0), (0));
  joint.getAnchorA(p1);
  joint.getAnchorB(p2);
  var color = new Color3.fromRGB$ctor((0.5), (0.8), (0.8));
  switch (joint.type) {
    case (3):

      this.noSuchMethod("get:debugDraw", []).drawSegment$3(p1, p2, color);
      break;

    case (4):

      $throw(new NotImplementedException());

    case (10):
    case (5):

      break;

    default:

      this.noSuchMethod("get:debugDraw", []).drawSegment$3(x1, p1, color);
      this.noSuchMethod("get:debugDraw", []).drawSegment$3(p1, p2, color);
      this.noSuchMethod("get:debugDraw", []).drawSegment$3(x2, p2, color);

  }
}
World.prototype.set$debugDraw = function(debugDraw) {
  this._debugDraw = debugDraw;
}
// ********** Code for WorldQueryWrapper **************
function WorldQueryWrapper() {

}
WorldQueryWrapper.prototype.treeCallback = function(node) {
  var fixture = node.userData;
  return this.callback.reportFixture(fixture);
}
// ********** Code for Contact **************
function Contact(pool) {
  this.manifold = new Manifold();
  this.edge1 = new ContactEdge();
  this._oldManifold = new Manifold();
  this.fixtureA = null;
  this.fixtureB = null;
  this.pool = pool;
  this.edge2 = new ContactEdge();
}
Contact.prototype.get$fixtureA = function() { return this.fixtureA; };
Contact.prototype.set$fixtureA = function(value) { return this.fixtureA = value; };
Contact.prototype.get$fixtureB = function() { return this.fixtureB; };
Contact.prototype.set$fixtureB = function(value) { return this.fixtureB = value; };
Contact.prototype.init = function(fixA, fixB) {
  this.flags = (0);
  this.fixtureA = fixA;
  this.fixtureB = fixB;
  this.manifold.pointCount = (0);
  this.prev = null;
  this.next = null;
  this.edge1.contact = null;
  this.edge1.prev = null;
  this.edge1.next = null;
  this.edge1.other = null;
  this.edge2.contact = null;
  this.edge2.prev = null;
  this.edge2.next = null;
  this.edge2.other = null;
  this.toiCount = (0);
}
Contact.prototype.get$touching = function() {
  return (this.flags & (2)) == (2);
}
Contact.prototype.get$enabled = function() {
  return (this.flags & (4)) == (4);
}
Contact.prototype.update = function(listener) {
  this._oldManifold.setFrom(this.manifold);
  this.flags |= (4);
  var touching = false;
  var wasTouching = (this.flags & (2)) == (2);
  var sensorA = this.fixtureA.isSensor;
  var sensorB = this.fixtureB.isSensor;
  var sensor = sensorA || sensorB;
  var bodyA = this.fixtureA.body;
  var bodyB = this.fixtureB.body;
  var xfA = bodyA.originTransform;
  var xfB = bodyB.originTransform;
  if (sensor) {
    var shapeA = this.fixtureA.shape;
    var shapeB = this.fixtureB.shape;
    touching = this.pool.collision.testOverlap(shapeA, shapeB, xfA, xfB);
    this.manifold.pointCount = (0);
  }
  else {
    this.evaluate(this.manifold, xfA, xfB);
    touching = this.manifold.pointCount > (0);
    for (var i = (0);
     i < this.manifold.pointCount; ++i) {
      var mp2 = this.manifold.points.$index(i);
      mp2.normalImpulse = (0);
      mp2.tangentImpulse = (0);
      var id2 = mp2.id;
      for (var j = (0);
       j < this._oldManifold.pointCount; ++j) {
        var mp1 = this._oldManifold.points.$index(j);
        if (mp1.id.isEqual(id2)) {
          mp2.normalImpulse = mp1.normalImpulse;
          mp2.tangentImpulse = mp1.tangentImpulse;
          break;
        }
      }
    }
    if ($ne(touching, wasTouching)) {
      bodyA.set$awake(true);
      bodyB.set$awake(true);
    }
  }
  if (touching) {
    this.flags |= (2);
  }
  else {
    this.flags &= (-3);
  }
  if (listener == null) {
    return;
  }
  if ($eq(wasTouching, false) && $eq(touching, true)) {
    listener.beginContact(this);
  }
  if ($eq(wasTouching, true) && $eq(touching, false)) {
    listener.endContact(this);
  }
  if ($eq(sensor, false) && touching) {
    listener.preSolve(this, this._oldManifold);
  }
}
Contact.prototype.next$0 = function() {
  return this.next();
};
// ********** Code for ContactConstraint **************
function ContactConstraint() {
  this.localPoint = new Vector((0), (0));
  this.points = new Array((2));
  this.normalMass = new Matrix22();
  this.localNormal = new Vector((0), (0));
  this.manifold = null;
  this.normal = new Vector((0), (0));
  this.pointCount = (0);
  this.K = new Matrix22();
  for (var i = (0);
   i < (2); i++) {
    this.points.$setindex(i, new ContactConstraintPoint());
  }
}
ContactConstraint.prototype.get$localPoint = function() { return this.localPoint; };
ContactConstraint.prototype.get$type = function() { return this.type; };
ContactConstraint.prototype.set$type = function(value) { return this.type = value; };
ContactConstraint.prototype.get$radius = function() { return this.radius; };
ContactConstraint.prototype.set$radius = function(value) { return this.radius = value; };
ContactConstraint.prototype.setFrom = function(cp) {
  this.pointCount = cp.pointCount;
  this.localNormal.setFrom(cp.localNormal);
  this.localPoint.setFrom(cp.localPoint);
  this.normal.setFrom(cp.normal);
  this.normalMass.setFrom(cp.normalMass);
  this.K.setFrom(cp.K);
  this.bodyA = cp.bodyA;
  this.bodyB = cp.bodyB;
  this.type = cp.type;
  this.radius = cp.radius;
  this.friction = cp.friction;
  this.restitution = cp.restitution;
  this.manifold = cp.manifold;
  for (var i = (0);
   i < cp.pointCount; i++) {
    this.points.$index(i).setFrom$1(cp.points.$index(i));
  }
}
ContactConstraint.prototype.toString = function() {
  var result = ("localNormal: \"" + this.localNormal + "\", localPoint: \"" + this.localPoint + "\" ") + ("normal: \"" + this.normal + "\", radius: \"" + this.radius + "\" friction: \"" + this.friction + "\" ") + ("restitution: \"" + this.restitution + "\", pointCount: \"" + this.pointCount + "\"");
  return result;
}
ContactConstraint.prototype.setFrom$1 = ContactConstraint.prototype.setFrom;
ContactConstraint.prototype.toString$0 = ContactConstraint.prototype.toString;
// ********** Code for ContactConstraintPoint **************
function ContactConstraintPoint() {
  this.tangentMass = (0);
  this.rB = new Vector((0), (0));
  this.localPoint = new Vector((0), (0));
  this.velocityBias = (0);
  this.rA = new Vector((0), (0));
  this.tangentImpulse = (0);
  this.normalMass = (0);
  this.normalImpulse = (0);
}
ContactConstraintPoint.prototype.get$localPoint = function() { return this.localPoint; };
ContactConstraintPoint.prototype.get$normalImpulse = function() { return this.normalImpulse; };
ContactConstraintPoint.prototype.set$normalImpulse = function(value) { return this.normalImpulse = value; };
ContactConstraintPoint.prototype.get$tangentImpulse = function() { return this.tangentImpulse; };
ContactConstraintPoint.prototype.set$tangentImpulse = function(value) { return this.tangentImpulse = value; };
ContactConstraintPoint.prototype.setFrom = function(cp) {
  this.localPoint.setFrom(cp.localPoint);
  this.rA.setFrom(cp.rA);
  this.rB.setFrom(cp.rB);
  this.normalImpulse = cp.normalImpulse;
  this.tangentImpulse = cp.tangentImpulse;
  this.normalMass = cp.normalMass;
  this.tangentMass = cp.tangentMass;
  this.velocityBias = cp.velocityBias;
}
ContactConstraintPoint.prototype.toString = function() {
  return "normal impulse: " + this.normalImpulse + ", tangentImpulse: " + this.tangentImpulse + ", normalMass: " + this.normalMass + ", tangentMass: " + this.tangentMass + ", velocityBias: " + this.velocityBias + ", localPoint " + this.localPoint + ", rA: " + this.rA + ", rB: " + this.rB;
}
ContactConstraintPoint.prototype.setFrom$1 = ContactConstraintPoint.prototype.setFrom;
ContactConstraintPoint.prototype.toString$0 = ContactConstraintPoint.prototype.toString;
// ********** Code for ContactEdge **************
function ContactEdge() {
  this.other = null;
  this.contact = null;
  this.prev = null;
  this.next = null;
}
ContactEdge.prototype.next$0 = function() {
  return this.next();
};
// ********** Code for CircleContact **************
$inherits(CircleContact, Contact);
function CircleContact(argPool) {
  Contact.call(this, argPool);
}
CircleContact.prototype.init = function(fA, fB) {
  Expect.equals((0), fA.get$type());
  Expect.equals((0), fB.get$type());
  Contact.prototype.init.call(this, fA, fB);
}
CircleContact.prototype.evaluate = function(argManifold, xfA, xfB) {
  this.pool.collision.collideCircles(argManifold, this.fixtureA.shape, xfA, this.fixtureB.shape, xfB);
}
// ********** Code for ContactRegister **************
function ContactRegister() {
  this.primary = false;
  this.creator = null;
}
ContactRegister.prototype.get$creator = function() { return this.creator; };
ContactRegister.prototype.set$creator = function(value) { return this.creator = value; };
// ********** Code for ContactSolver **************
function ContactSolver() {
  this.P2 = new Vector((0), (0));
  this.x = new Vector((0), (0));
  this.d = new Vector((0), (0));
  this.P1 = new Vector((0), (0));
  this.rB = new Vector((0), (0));
  this.temp1 = new Vector((0), (0));
  this.dv1 = new Vector((0), (0));
  this.P = new Vector((0), (0));
  this.constraints = new Array((256));
  this.temp2 = new Vector((0), (0));
  this.dv = new Vector((0), (0));
  this.rA = new Vector((0), (0));
  this.psolver = new PositionSolverManifold();
  this.worldManifold = new WorldManifold();
  this.tangent = new Vector((0), (0));
  this.dv2 = new Vector((0), (0));
  for (var i = (0);
   i < this.constraints.get$length(); i++) {
    this.constraints.$setindex(i, new ContactConstraint());
  }
}
ContactSolver.prototype.get$x = function() { return this.x; };
ContactSolver.prototype.init = function(contacts, contactCount, impulseRatio) {
  this.constraintCount = contactCount;
  if (this.constraints.get$length() < contactCount) {
    var old = this.constraints;
    var newLen = Math.max(old.get$length() * (2), this.constraintCount);
    this.constraints = new Array(newLen);
    this.constraints.setRange$3((0), old.get$length(), old);
    for (var i = old.get$length();
     i < this.constraints.get$length(); i++) {
      this.constraints.$setindex(i, new ContactConstraint());
    }
  }
  for (var i = (0);
   i < this.constraintCount; ++i) {
    var contact = contacts.$index(i);
    var fixtureA = contact.fixtureA;
    var fixtureB = contact.fixtureB;
    var shapeA = fixtureA.shape;
    var shapeB = fixtureB.shape;
    var radiusA = shapeA.radius;
    var radiusB = shapeB.radius;
    var bodyA = fixtureA.body;
    var bodyB = fixtureB.body;
    var manifold = contact.manifold;
    var friction = Settings.mixFriction(fixtureA.friction, fixtureB.friction);
    var restitution = Settings.mixRestitution(fixtureA.restitution, fixtureB.restitution);
    var vA = bodyA.get$linearVelocity();
    var vB = bodyB.get$linearVelocity();
    var wA = bodyA.get$angularVelocity();
    var wB = bodyB.get$angularVelocity();
    this.worldManifold.initialize(manifold, bodyA.originTransform, radiusA, bodyB.originTransform, radiusB);
    var cc = this.constraints.$index(i);
    cc.bodyA = bodyA;
    cc.bodyB = bodyB;
    cc.manifold = manifold;
    cc.normal.x = this.worldManifold.normal.x;
    cc.normal.y = this.worldManifold.normal.y;
    cc.pointCount = manifold.pointCount;
    cc.friction = friction;
    cc.restitution = restitution;
    cc.localNormal.x = manifold.localNormal.x;
    cc.localNormal.y = manifold.localNormal.y;
    cc.localPoint.x = manifold.localPoint.x;
    cc.localPoint.y = manifold.localPoint.y;
    cc.radius = radiusA + radiusB;
    cc.type = manifold.type;
    for (var j = (0);
     j < cc.pointCount; ++j) {
      var cp = manifold.points.$index(j);
      var ccp = cc.points.$index(j);
      ccp.normalImpulse = impulseRatio * cp.normalImpulse;
      ccp.tangentImpulse = impulseRatio * cp.tangentImpulse;
      ccp.localPoint.x = cp.localPoint.x;
      ccp.localPoint.y = cp.localPoint.y;
      ccp.rA.x = this.worldManifold.points.$index(j).get$x() - bodyA.sweep.center.x;
      ccp.rA.y = this.worldManifold.points.$index(j).get$y() - bodyA.sweep.center.y;
      ccp.rB.x = this.worldManifold.points.$index(j).get$x() - bodyB.sweep.center.x;
      ccp.rB.y = this.worldManifold.points.$index(j).get$y() - bodyB.sweep.center.y;
      var rnA = ccp.rA.x * cc.normal.y - ccp.rA.y * cc.normal.x;
      var rnB = ccp.rB.x * cc.normal.y - ccp.rB.y * cc.normal.x;
      rnA *= rnA;
      rnB *= rnB;
      var kNormal = bodyA.invMass + bodyB.invMass + bodyA.invInertia * rnA + bodyB.invInertia * rnB;
      ccp.normalMass = (1) / kNormal;
      this.tangent.x = (1) * cc.normal.y;
      this.tangent.y = (-1) * cc.normal.x;
      var rtA = ccp.rA.x * this.tangent.y - ccp.rA.y * this.tangent.x;
      var rtB = ccp.rB.x * this.tangent.y - ccp.rB.y * this.tangent.x;
      rtA *= rtA;
      rtB *= rtB;
      var kTangent = bodyA.invMass + bodyB.invMass + bodyA.invInertia * rtA + bodyB.invInertia * rtB;
      ccp.tangentMass = (1) / kTangent;
      ccp.velocityBias = (0);
      this.temp2.x = -wA * ccp.rA.y;
      this.temp2.y = wA * ccp.rA.x;
      this.temp1.x = -wB * ccp.rB.y + vB.x - vA.x - this.temp2.x;
      this.temp1.y = wB * ccp.rB.x + vB.y - vA.y - this.temp2.y;
      var a = cc.normal;
      var vRel = a.x * this.temp1.x + a.y * this.temp1.y;
      if (vRel < (-1)) {
        ccp.velocityBias = -restitution * vRel;
      }
    }
    if (cc.pointCount == (2)) {
      var ccp1 = cc.points.$index((0));
      var ccp2 = cc.points.$index((1));
      var invMassA = bodyA.invMass;
      var invIA = bodyA.invInertia;
      var invMassB = bodyB.invMass;
      var invIB = bodyB.invInertia;
      var rn1A = Vector.crossVectors(ccp1.rA, cc.normal);
      var rn1B = Vector.crossVectors(ccp1.rB, cc.normal);
      var rn2A = Vector.crossVectors(ccp2.rA, cc.normal);
      var rn2B = Vector.crossVectors(ccp2.rB, cc.normal);
      var k11 = invMassA + invMassB + invIA * rn1A * rn1A + invIB * rn1B * rn1B;
      var k22 = invMassA + invMassB + invIA * rn2A * rn2A + invIB * rn2B * rn2B;
      var k12 = invMassA + invMassB + invIA * rn1A * rn2A + invIB * rn1B * rn2B;
      if (k11 * k11 < (100) * (k11 * k22 - k12 * k12)) {
        cc.K.col1.x = k11;
        cc.K.col1.y = k12;
        cc.K.col2.x = k12;
        cc.K.col2.y = k22;
        cc.normalMass.col1.x = cc.K.col1.x;
        cc.normalMass.col1.y = cc.K.col1.y;
        cc.normalMass.col2.x = cc.K.col2.x;
        cc.normalMass.col2.y = cc.K.col2.y;
        cc.normalMass.invertLocal();
      }
      else {
        cc.pointCount = (1);
      }
    }
  }
}
ContactSolver.prototype.warmStart = function() {
  var $0;
  for (var i = (0);
   i < this.constraintCount; ++i) {
    var c = this.constraints.$index(i);
    var bodyA = c.bodyA;
    var bodyB = c.bodyB;
    var invMassA = bodyA.invMass;
    var invIA = bodyA.invInertia;
    var invMassB = bodyB.invMass;
    var invIB = bodyB.invInertia;
    var normal = c.normal;
    Vector.crossVectorAndNumToOut(normal, (1), this.tangent);
    for (var j = (0);
     j < c.pointCount; ++j) {
      var ccp = c.points.$index(j);
      var Px = ccp.normalImpulse * normal.x + ccp.tangentImpulse * this.tangent.x;
      var Py = ccp.normalImpulse * normal.y + ccp.tangentImpulse * this.tangent.y;
      bodyA.set$angularVelocity(bodyA.get$angularVelocity() - (invIA * (ccp.rA.x * Py - ccp.rA.y * Px)));
      ($0 = bodyA.get$linearVelocity()).x = $0.x - (Px * invMassA);
      ($0 = bodyA.get$linearVelocity()).y = $0.y - (Py * invMassA);
      bodyB.set$angularVelocity(bodyB.get$angularVelocity() + (invIB * (ccp.rB.x * Py - ccp.rB.y * Px)));
      ($0 = bodyB.get$linearVelocity()).x = $0.x + (Px * invMassB);
      ($0 = bodyB.get$linearVelocity()).y = $0.y + (Py * invMassB);
    }
  }
}
ContactSolver.prototype.solveVelocityConstraints = function() {
  for (var i = (0);
   i < this.constraintCount; ++i) {
    var c = this.constraints.$index(i);
    var bodyA = c.bodyA;
    var bodyB = c.bodyB;
    var wA = bodyA.get$angularVelocity();
    var wB = bodyB.get$angularVelocity();
    var vA = bodyA.get$linearVelocity();
    var vB = bodyB.get$linearVelocity();
    var invMassA = bodyA.invMass;
    var invIA = bodyA.invInertia;
    var invMassB = bodyB.invMass;
    var invIB = bodyB.invInertia;
    this.tangent.x = (1) * c.normal.y;
    this.tangent.y = (-1) * c.normal.x;
    var friction = c.friction;
    for (var j = (0);
     j < c.pointCount; ++j) {
      var ccp = c.points.$index(j);
      var a = ccp.rA;
      this.dv.x = -wB * ccp.rB.y + vB.x - vA.x + wA * a.y;
      this.dv.y = wB * ccp.rB.x + vB.y - vA.y - wA * a.x;
      var vt = this.dv.x * this.tangent.x + this.dv.y * this.tangent.y;
      var lambda = ccp.tangentMass * (-vt);
      var maxFriction = friction * ccp.normalImpulse;
      var newImpulse = MathBox.clamp(ccp.tangentImpulse + lambda, -maxFriction, maxFriction);
      lambda = newImpulse - ccp.tangentImpulse;
      var Px = this.tangent.x * lambda;
      var Py = this.tangent.y * lambda;
      vA.x = vA.x - (Px * invMassA);
      vA.y = vA.y - (Py * invMassA);
      wA -= (invIA * (ccp.rA.x * Py - ccp.rA.y * Px));
      vB.x = vB.x + (Px * invMassB);
      vB.y = vB.y + (Py * invMassB);
      wB += (invIB * (ccp.rB.x * Py - ccp.rB.y * Px));
      ccp.tangentImpulse = newImpulse;
    }
    if (c.pointCount == (1)) {
      var ccp = c.points.$index((0));
      var a1 = ccp.rA;
      this.dv.x = -wB * ccp.rB.y + vB.x - vA.x + wA * a1.y;
      this.dv.y = wB * ccp.rB.x + vB.y - vA.y - wA * a1.x;
      var b = c.normal;
      var vn = this.dv.x * b.x + this.dv.y * b.y;
      var lambda = -ccp.normalMass * (vn - ccp.velocityBias);
      var a = ccp.normalImpulse + lambda;
      var newImpulse = (a > (0) ? a : (0));
      lambda = newImpulse - ccp.normalImpulse;
      var Px = c.normal.x * lambda;
      var Py = c.normal.y * lambda;
      vA.x = vA.x - (Px * invMassA);
      vA.y = vA.y - (Py * invMassA);
      wA -= (invIA * (ccp.rA.x * Py - ccp.rA.y * Px));
      vB.x = vB.x + (Px * invMassB);
      vB.y = vB.y + (Py * invMassB);
      wB += (invIB * (ccp.rB.x * Py - ccp.rB.y * Px));
      ccp.normalImpulse = newImpulse;
    }
    else {
      var cp1 = c.points.$index((0));
      var cp2 = c.points.$index((1));
      var a = new Vector(cp1.normalImpulse, cp2.normalImpulse);
      this.dv1.x = -wB * cp1.rB.y + vB.x - vA.x + wA * cp1.rA.y;
      this.dv1.y = wB * cp1.rB.x + vB.y - vA.y - wA * cp1.rA.x;
      this.dv2.x = -wB * cp2.rB.y + vB.x - vA.x + wA * cp2.rA.y;
      this.dv2.y = wB * cp2.rB.x + vB.y - vA.y - wA * cp2.rA.x;
      var vn1 = this.dv1.x * c.normal.x + this.dv1.y * c.normal.y;
      var vn2 = this.dv2.x * c.normal.x + this.dv2.y * c.normal.y;
      var b = new Vector(vn1 - cp1.velocityBias, vn2 - cp2.velocityBias);
      this.temp2.x = c.K.col1.x * a.x + c.K.col2.x * a.y;
      this.temp2.y = c.K.col1.y * a.x + c.K.col2.y * a.y;
      b.x = b.x - this.temp2.x;
      b.y = b.y - this.temp2.y;
      while (true) {
        Matrix22.mulMatrixAndVectorToOut(c.normalMass, b, this.x);
        this.x.mulLocal((-1));
        if (this.x.x >= (0) && this.x.y >= (0)) {
          this.d.setFrom(this.x).subLocal(a);
          this.P1.setFrom(c.normal).mulLocal(this.d.x);
          this.P2.setFrom(c.normal).mulLocal(this.d.y);
          this.temp1.setFrom(this.P1).addLocal(this.P2);
          this.temp2.setFrom(this.temp1).mulLocal(invMassA);
          vA.subLocal(this.temp2);
          this.temp2.setFrom(this.temp1).mulLocal(invMassB);
          vB.addLocal(this.temp2);
          wA -= (invIA * (Vector.crossVectors(cp1.rA, this.P1) + Vector.crossVectors(cp2.rA, this.P2)));
          wB += (invIB * (Vector.crossVectors(cp1.rB, this.P1) + Vector.crossVectors(cp2.rB, this.P2)));
          cp1.normalImpulse = this.x.x;
          cp2.normalImpulse = this.x.y;
          break;
        }
        this.x.x = -cp1.normalMass * b.x;
        this.x.y = (0);
        vn1 = (0);
        vn2 = c.K.col1.y * this.x.x + b.y;
        if (this.x.x >= (0) && vn2 >= (0)) {
          this.d.setFrom(this.x).subLocal(a);
          this.P1.setFrom(c.normal).mulLocal(this.d.x);
          this.P2.setFrom(c.normal).mulLocal(this.d.y);
          this.temp1.setFrom(this.P1).addLocal(this.P2);
          this.temp2.setFrom(this.temp1).mulLocal(invMassA);
          vA.subLocal(this.temp2);
          this.temp2.setFrom(this.temp1).mulLocal(invMassB);
          vB.addLocal(this.temp2);
          wA -= (invIA * (Vector.crossVectors(cp1.rA, this.P1) + Vector.crossVectors(cp2.rA, this.P2)));
          wB += (invIB * (Vector.crossVectors(cp1.rB, this.P1) + Vector.crossVectors(cp2.rB, this.P2)));
          cp1.normalImpulse = this.x.x;
          cp2.normalImpulse = this.x.y;
          break;
        }
        this.x.x = (0);
        this.x.y = -cp2.normalMass * b.y;
        vn1 = c.K.col2.x * this.x.y + b.x;
        vn2 = (0);
        if (this.x.y >= (0) && vn1 >= (0)) {
          this.d.setFrom(this.x).subLocal(a);
          this.P1.setFrom(c.normal).mulLocal(this.d.x);
          this.P2.setFrom(c.normal).mulLocal(this.d.y);
          this.temp1.setFrom(this.P1).addLocal(this.P2);
          this.temp2.setFrom(this.temp1).mulLocal(invMassA);
          vA.subLocal(this.temp2);
          this.temp2.setFrom(this.temp1).mulLocal(invMassB);
          vB.addLocal(this.temp2);
          wA -= (invIA * (Vector.crossVectors(cp1.rA, this.P1) + Vector.crossVectors(cp2.rA, this.P2)));
          wB += (invIB * (Vector.crossVectors(cp1.rB, this.P1) + Vector.crossVectors(cp2.rB, this.P2)));
          cp1.normalImpulse = this.x.x;
          cp2.normalImpulse = this.x.y;
          break;
        }
        this.x.x = (0);
        this.x.y = (0);
        vn1 = b.x;
        vn2 = b.y;
        if (vn1 >= (0) && vn2 >= (0)) {
          this.d.setFrom(this.x).subLocal(a);
          this.P1.setFrom(c.normal).mulLocal(this.d.x);
          this.P2.setFrom(c.normal).mulLocal(this.d.y);
          this.temp1.setFrom(this.P1).addLocal(this.P2);
          this.temp2.setFrom(this.temp1).mulLocal(invMassA);
          vA.subLocal(this.temp2);
          this.temp2.setFrom(this.temp1).mulLocal(invMassB);
          vB.addLocal(this.temp2);
          wA -= (invIA * (Vector.crossVectors(cp1.rA, this.P1) + Vector.crossVectors(cp2.rA, this.P2)));
          wB += (invIB * (Vector.crossVectors(cp1.rB, this.P1) + Vector.crossVectors(cp2.rB, this.P2)));
          cp1.normalImpulse = this.x.x;
          cp2.normalImpulse = this.x.y;
          break;
        }
        break;
      }
    }
    bodyA.get$linearVelocity().setFrom(vA);
    bodyA.set$angularVelocity(wA);
    bodyB.get$linearVelocity().setFrom(vB);
    bodyB.set$angularVelocity(wB);
  }
}
ContactSolver.prototype.storeImpulses = function() {
  for (var i = (0);
   i < this.constraintCount; i++) {
    var c = this.constraints.$index(i);
    var m = c.manifold;
    for (var j = (0);
     j < c.pointCount; j++) {
      m.points.$index(j).set$normalImpulse(c.points.$index(j).get$normalImpulse());
      m.points.$index(j).set$tangentImpulse(c.points.$index(j).get$tangentImpulse());
    }
  }
}
ContactSolver.prototype.solvePositionConstraints = function(baumgarte) {
  var $0;
  var minSeparation = (0);
  for (var i = (0);
   i < this.constraintCount; ++i) {
    var c = this.constraints.$index(i);
    var bodyA = c.bodyA;
    var bodyB = c.bodyB;
    var invMassA = bodyA.mass * bodyA.invMass;
    var invIA = bodyA.mass * bodyA.invInertia;
    var invMassB = bodyB.mass * bodyB.invMass;
    var invIB = bodyB.mass * bodyB.invInertia;
    for (var j = (0);
     j < c.pointCount; ++j) {
      var psm = this.psolver;
      psm.initialize(c, j);
      var normal = psm.normal;
      var point = psm.point;
      var separation = psm.separation;
      this.rA.setFrom(point).subLocal(bodyA.sweep.center);
      this.rB.setFrom(point).subLocal(bodyB.sweep.center);
      minSeparation = Math.min(minSeparation, separation);
      var C = MathBox.clamp(baumgarte * (separation + (0.005)), (-0.2), (0));
      var rnA = Vector.crossVectors(this.rA, normal);
      var rnB = Vector.crossVectors(this.rB, normal);
      var K = invMassA + invMassB + invIA * rnA * rnA + invIB * rnB * rnB;
      var impulse = K > (0) ? -C / K : (0);
      this.P.setFrom(normal).mulLocal(impulse);
      this.temp1.setFrom(this.P).mulLocal(invMassA);
      bodyA.sweep.center.subLocal(this.temp1);
      ;
      ($0 = bodyA.sweep).angle = $0.angle - (invIA * Vector.crossVectors(this.rA, this.P));
      bodyA.synchronizeTransform();
      this.temp1.setFrom(this.P).mulLocal(invMassB);
      bodyB.sweep.center.addLocal(this.temp1);
      ($0 = bodyB.sweep).angle = $0.angle + (invIB * Vector.crossVectors(this.rB, this.P));
      bodyB.synchronizeTransform();
    }
  }
  return minSeparation >= (-0.0075);
}
ContactSolver.prototype.solvePositionConstraints$1 = ContactSolver.prototype.solvePositionConstraints;
// ********** Code for PositionSolverManifold **************
function PositionSolverManifold() {
  this.normal = new Vector((0), (0));
  this.point = new Vector((0), (0));
  this.planePoint = new Vector((0), (0));
  this.pointB = new Vector((0), (0));
  this.temp = new Vector((0), (0));
  this.separation = (0);
  this.clipPoint = new Vector((0), (0));
  this.pointA = new Vector((0), (0));
}
PositionSolverManifold.prototype.initialize = function(cc, index) {
  switch (cc.type) {
    case (0):

      cc.bodyA.getWorldPointToOut(cc.localPoint, this.pointA);
      cc.bodyB.getWorldPointToOut(cc.points.$index((0)).get$localPoint(), this.pointB);
      if (MathBox.distanceSquared(this.pointA, this.pointB) > (1.4208639999999999e-14)) {
        this.normal.setFrom(this.pointB).subLocal(this.pointA);
        this.normal.normalize();
      }
      else {
        this.normal.setCoords((1), (0));
      }
      this.point.setFrom(this.pointA).addLocal(this.pointB).mulLocal((0.5));
      this.temp.setFrom(this.pointB).subLocal(this.pointA);
      this.separation = Vector.dot(this.temp, this.normal) - cc.radius;
      break;

    case (1):

      cc.bodyA.getWorldVectorToOut(cc.localNormal, this.normal);
      cc.bodyA.getWorldPointToOut(cc.localPoint, this.planePoint);
      cc.bodyB.getWorldPointToOut(cc.points.$index(index).get$localPoint(), this.clipPoint);
      this.temp.setFrom(this.clipPoint).subLocal(this.planePoint);
      this.separation = Vector.dot(this.temp, this.normal) - cc.radius;
      this.point.setFrom(this.clipPoint);
      break;

    case (2):

      cc.bodyB.getWorldVectorToOut(cc.localNormal, this.normal);
      cc.bodyB.getWorldPointToOut(cc.localPoint, this.planePoint);
      cc.bodyA.getWorldPointToOut(cc.points.$index(index).get$localPoint(), this.clipPoint);
      this.temp.setFrom(this.clipPoint).subLocal(this.planePoint);
      this.separation = Vector.dot(this.temp, this.normal) - cc.radius;
      this.point.setFrom(this.clipPoint);
      this.normal.negateLocal();

  }
}
// ********** Code for PolygonAndCircleContact **************
$inherits(PolygonAndCircleContact, Contact);
function PolygonAndCircleContact(argPool) {
  Contact.call(this, argPool);
}
PolygonAndCircleContact.prototype.init = function(fA, fB) {
  Expect.equals((1), fA.get$type());
  Expect.equals((0), fB.get$type());
  Contact.prototype.init.call(this, fA, fB);
}
PolygonAndCircleContact.prototype.evaluate = function(argManifold, xfA, xfB) {
  this.pool.collision.collidePolygonAndCircle(argManifold, this.fixtureA.shape, xfA, this.fixtureB.shape, xfB);
}
// ********** Code for PolygonContact **************
$inherits(PolygonContact, Contact);
function PolygonContact(argPool) {
  Contact.call(this, argPool);
}
PolygonContact.prototype.init = function(fA, fB) {
  Expect.equals((1), fA.get$type());
  Expect.equals((1), fB.get$type());
  Contact.prototype.init.call(this, fA, fB);
}
PolygonContact.prototype.evaluate = function(argManifold, xfA, xfB) {
  this.pool.collision.collidePolygons(argManifold, this.fixtureA.shape, xfA, this.fixtureB.shape, xfB);
}
// ********** Code for TimeOfImpactSolver **************
function TimeOfImpactSolver() {
  this.psm = new TimeOfImpactSolverManifold();
  this.constraints = new Array((4));
  this.rB = new Vector((0), (0));
  this.toiBody = null;
  this.P = new Vector((0), (0));
  this.rA = new Vector((0), (0));
  this.temp = new Vector((0), (0));
  this.count = (0);
  for (var i = (0);
   i < this.constraints.get$length(); i++) {
    this.constraints.$setindex(i, new TimeOfImpactConstraint());
  }
}
TimeOfImpactSolver.prototype.initialize = function(contacts, argCount, argToiBody) {
  this.count = argCount;
  this.toiBody = argToiBody;
  if (this.count >= this.constraints.get$length()) {
    var old = this.constraints;
    var newLen = Math.max(this.count, old.get$length() * (2));
    this.constraints = new Array(newLen);
    this.constraints.setRange$3((0), old.get$length(), old);
    for (var i = old.get$length();
     i < this.constraints.get$length(); i++) {
      this.constraints.$setindex(i, new TimeOfImpactConstraint());
    }
  }
  for (var i = (0);
   i < this.count; i++) {
    var contact = contacts.$index(i);
    var fixtureA = contact.fixtureA;
    var fixtureB = contact.fixtureB;
    var shapeA = fixtureA.shape;
    var shapeB = fixtureB.shape;
    var radiusA = shapeA.radius;
    var radiusB = shapeB.radius;
    var bodyA = fixtureA.body;
    var bodyB = fixtureB.body;
    var manifold = contact.manifold;
    var constraint = this.constraints.$index(i);
    constraint.bodyA = bodyA;
    constraint.bodyB = bodyB;
    constraint.localNormal.setFrom(manifold.localNormal);
    constraint.localPoint.setFrom(manifold.localPoint);
    constraint.type = manifold.type;
    constraint.pointCount = manifold.pointCount;
    constraint.radius = radiusA + radiusB;
    for (var j = (0);
     j < constraint.pointCount; ++j) {
      var cp = manifold.points.$index(j);
      constraint.localPoints.$setindex(j, cp.localPoint);
    }
  }
}
TimeOfImpactSolver.prototype.solve = function(baumgarte) {
  var $0;
  var minSeparation = (0);
  for (var i = (0);
   i < this.count; ++i) {
    var c = this.constraints.$index(i);
    var bodyA = c.bodyA;
    var bodyB = c.bodyB;
    var massA = bodyA.mass;
    var massB = bodyB.mass;
    if ($eq(bodyA, this.toiBody)) {
      massB = (0);
    }
    else {
      massA = (0);
    }
    var invMassA = massA * bodyA.invMass;
    var invIA = massA * bodyA.invInertia;
    var invMassB = massB * bodyB.invMass;
    var invIB = massB * bodyB.invInertia;
    for (var j = (0);
     j < c.pointCount; ++j) {
      this.psm.initialize(c, j);
      var normal = this.psm.normal;
      var point = this.psm.point;
      var separation = this.psm.separation;
      this.rA.setFrom(point).subLocal(bodyA.sweep.center);
      this.rB.setFrom(point).subLocal(bodyB.sweep.center);
      minSeparation = Math.min(minSeparation, separation);
      var C = MathBox.clamp(baumgarte * (separation + (0.005)), (-0.2), (0));
      var rnA = Vector.crossVectors(this.rA, normal);
      var rnB = Vector.crossVectors(this.rB, normal);
      var K = invMassA + invMassB + invIA * rnA * rnA + invIB * rnB * rnB;
      var impulse = K > (0) ? -C / K : (0);
      this.P.setFrom(normal).mulLocal(impulse);
      this.temp.setFrom(this.P).mulLocal(invMassA);
      bodyA.sweep.center.subLocal(this.temp);
      ($0 = bodyA.sweep).angle = $0.angle - (invIA * Vector.crossVectors(this.rA, this.P));
      bodyA.synchronizeTransform();
      this.temp.setFrom(this.P).mulLocal(invMassB);
      bodyB.sweep.center.addLocal(this.temp);
      ($0 = bodyB.sweep).angle = $0.angle + (invIB * Vector.crossVectors(this.rB, this.P));
      bodyB.synchronizeTransform();
    }
  }
  return minSeparation >= (-0.0075);
}
// ********** Code for TimeOfImpactSolverManifold **************
function TimeOfImpactSolverManifold() {
  this.normal = new Vector((0), (0));
  this.point = new Vector((0), (0));
  this.planePoint = new Vector((0), (0));
  this.pointB = new Vector((0), (0));
  this.temp = new Vector((0), (0));
  this.separation = (0);
  this.clipPoint = new Vector((0), (0));
  this.pointA = new Vector((0), (0));
}
TimeOfImpactSolverManifold.prototype.initialize = function(cc, index) {
  switch (cc.type) {
    case (0):

      this.pointA.setFrom(cc.bodyA.getWorldPoint(cc.localPoint));
      this.pointB.setFrom(cc.bodyB.getWorldPoint(cc.localPoints.$index((0))));
      if (MathBox.distanceSquared(this.pointA, this.pointB) > (1.4208639999999999e-14)) {
        this.normal.setFrom(this.pointB).subLocal(this.pointA);
        this.normal.normalize();
      }
      else {
        this.normal.setCoords((1), (0));
      }
      this.point.setFrom(this.pointA).addLocal(this.pointB).mulLocal((0.5));
      this.temp.setFrom(this.pointB).subLocal(this.pointA);
      this.separation = Vector.dot(this.temp, this.normal) - cc.radius;
      break;

    case (1):

      this.normal.setFrom(cc.bodyA.getWorldVector(cc.localNormal));
      this.planePoint.setFrom(cc.bodyA.getWorldPoint(cc.localPoint));
      this.clipPoint.setFrom(cc.bodyB.getWorldPoint(cc.localPoints.$index(index)));
      this.temp.setFrom(this.clipPoint).subLocal(this.planePoint);
      this.separation = Vector.dot(this.temp, this.normal) - cc.radius;
      this.point.setFrom(this.clipPoint);
      break;

    case (2):

      this.normal.setFrom(cc.bodyB.getWorldVector(cc.localNormal));
      this.planePoint.setFrom(cc.bodyB.getWorldPoint(cc.localPoint));
      this.clipPoint.setFrom(cc.bodyA.getWorldPoint(cc.localPoints.$index(index)));
      this.temp.setFrom(this.clipPoint).subLocal(this.planePoint);
      this.separation = Vector.dot(this.temp, this.normal) - cc.radius;
      this.point.setFrom(this.clipPoint);
      this.normal.negateLocal();
      break;

  }
}
// ********** Code for TimeOfImpactConstraint **************
function TimeOfImpactConstraint() {
  this.bodyB = null;
  this.pointCount = (0);
  this.localPoints = new Array((2));
  this.radius = (0);
  this.localPoint = new Vector((0), (0));
  this.bodyA = null;
  this.type = (0);
  this.localNormal = new Vector((0), (0));
  for (var i = (0);
   i < this.localPoints.get$length(); i++) {
    this.localPoints.$setindex(i, new Vector((0), (0)));
  }
}
TimeOfImpactConstraint.prototype.get$localPoint = function() { return this.localPoint; };
TimeOfImpactConstraint.prototype.get$type = function() { return this.type; };
TimeOfImpactConstraint.prototype.set$type = function(value) { return this.type = value; };
TimeOfImpactConstraint.prototype.get$radius = function() { return this.radius; };
TimeOfImpactConstraint.prototype.set$radius = function(value) { return this.radius = value; };
TimeOfImpactConstraint.prototype.setFrom = function(argOther) {
  for (var i = (0);
   i < this.localPoints.get$length(); i++) {
    this.localPoints.$index(i).setFrom$1(argOther.localPoints.$index(i));
  }
  this.localNormal.setFrom(argOther.localNormal);
  this.localPoint.setFrom(argOther.localPoint);
  this.type = argOther.type;
  this.radius = argOther.radius;
  this.pointCount = argOther.pointCount;
  this.bodyA = argOther.bodyA;
  this.bodyB = argOther.bodyB;
}
TimeOfImpactConstraint.prototype.setFrom$1 = TimeOfImpactConstraint.prototype.setFrom;
// ********** Code for JointType **************
function JointType() {}
// ********** Code for DefaultWorldPool **************
function DefaultWorldPool() {
  this.distance = new Distance._construct$ctor();
  this.collision = new Collision._construct$ctor(this);
  this.timeOfImpact = new TimeOfImpact._construct$ctor(this);
}
DefaultWorldPool.prototype.getCircleContactStack = function() {
  var queue = new DoubleLinkedQueue();
  for (var i = (0);
   i < (10); i++) {
    queue.addFirst(new CircleContact(this));
  }
  return queue;
}
DefaultWorldPool.prototype.getPolyCircleContactStack = function() {
  var queue = new DoubleLinkedQueue();
  for (var i = (0);
   i < (10); i++) {
    queue.addFirst(new PolygonAndCircleContact(this));
  }
  return queue;
}
DefaultWorldPool.prototype.getPolyContactStack = function() {
  var queue = new DoubleLinkedQueue();
  for (var i = (0);
   i < (10); i++) {
    queue.addFirst(new PolygonContact(this));
  }
  return queue;
}
// ********** Code for Color3 **************
function Color3() {
  this.y = (0);
  this.x = (0);
  this.z = (0);
}
Color3.fromRGB$ctor = function(r, g, b) {
  this.y = g;
  this.x = r;
  this.z = b;
}
Color3.fromRGB$ctor.prototype = Color3.prototype;
Color3.prototype.get$x = function() { return this.x; };
Color3.prototype.set$x = function(value) { return this.x = value; };
Color3.prototype.get$y = function() { return this.y; };
Color3.prototype.set$y = function(value) { return this.y = value; };
Color3.prototype.setFromRGB = function(r, g, b) {
  this.x = r;
  this.y = g;
  this.z = b;
}
Color3.prototype.setFrom = function(argColor) {
  this.x = argColor.x;
  this.y = argColor.y;
  this.z = argColor.z;
}
Color3.prototype.setFrom$1 = Color3.prototype.setFrom;
// ********** Code for MathBox **************
function MathBox() {}
MathBox.distanceSquared = function(v1, v2) {
  var dx = (v1.x - v2.x);
  var dy = (v1.y - v2.y);
  return dx * dx + dy * dy;
}
MathBox.distance = function(v1, v2) {
  return Math.sqrt(MathBox.distanceSquared(v1, v2));
}
MathBox.clamp = function(a, low, high) {
  return Math.max(low, Math.min(a, high));
}
// ********** Code for CanvasViewportTransform **************
function CanvasViewportTransform(extents, center) {
  this.center = new Vector.copy$ctor(center);
  this.scale = (20);
  this.extents = new Vector.copy$ctor(extents);
}
CanvasViewportTransform.prototype.get$center = function() { return this.center; };
CanvasViewportTransform.prototype.set$center = function(value) { return this.center = value; };
CanvasViewportTransform.prototype.get$translation = function() {
  var result = new Vector.copy$ctor(this.extents);
  result.subLocal(this.center);
  return result;
}
CanvasViewportTransform.prototype.getWorldToScreen = function(argWorld, argScreen) {
  var gridCorrectedX = (argWorld.x * this.scale) + this.extents.x;
  var gridCorrectedY = this.extents.y - (argWorld.y * this.scale);
  argScreen.setCoords(gridCorrectedX + this.get$translation().x, gridCorrectedY + -this.get$translation().y);
}
// ********** Code for Matrix22 **************
function Matrix22(c1, c2) {
  if (c1 == null) {
    c1 = new Vector((0), (0));
  }
  if (c2 == null) {
    c2 = new Vector((0), (0));
  }
  this.col1 = c1;
  this.col2 = c2;
}
Matrix22.prototype.get$col1 = function() { return this.col1; };
Matrix22.prototype.set$col1 = function(value) { return this.col1 = value; };
Matrix22.prototype.get$col2 = function() { return this.col2; };
Matrix22.prototype.set$col2 = function(value) { return this.col2 = value; };
Matrix22.prototype.$eq = function(other) {
  if (other != null && (other instanceof Matrix22)) {
    return $eq(this.col1, other.get$col1()) && $eq(this.col2, other.get$col2());
  }
  else {
    return false;
  }
}
Matrix22.prototype.setAngle = function(angle) {
  var cosin = Math.cos(angle);
  var sin = Math.sin(angle);
  this.col1.setCoords(cosin, sin);
  this.col2.setCoords(-sin, cosin);
}
Matrix22.prototype.setFrom = function(matrix) {
  this.col1.setFrom(matrix.col1);
  this.col2.setFrom(matrix.col2);
}
Matrix22.mulTransMatrixAndVectorToOut = function(matrix, vector, out) {
  var outx = vector.x * matrix.col1.x + vector.y * matrix.col1.y;
  out.y = vector.x * matrix.col2.x + vector.y * matrix.col2.y;
  out.x = outx;
}
Matrix22.mulMatrixAndVectorToOut = function(matrix, vector, out) {
  var tempy = matrix.col1.y * vector.x + matrix.col2.y * vector.y;
  out.x = matrix.col1.x * vector.x + matrix.col2.x * vector.y;
  out.y = tempy;
}
Matrix22.prototype.invertLocal = function() {
  var a = this.col1.x, b = this.col2.x, c = this.col1.y, d = this.col2.y;
  var det = a * d - b * c;
  if (det != (0)) {
    det = (1) / det;
  }
  this.col1.x = det * d;
  this.col2.x = -det * b;
  this.col1.y = -det * c;
  this.col2.y = det * a;
  return this;
}
Matrix22.prototype.addLocal = function(other) {
  var $0;
  ($0 = this.col1).x = $0.x + other.col1.x;
  ($0 = this.col1).y = $0.y + other.col1.y;
  ($0 = this.col2).x = $0.x + other.col2.x;
  ($0 = this.col2).y = $0.y + other.col2.y;
  return this;
}
Matrix22.prototype.toString = function() {
  return this.col1.toString() + ", " + this.col2.toString();
}
Matrix22.prototype.addLocal$1 = Matrix22.prototype.addLocal;
Matrix22.prototype.setFrom$1 = Matrix22.prototype.setFrom;
Matrix22.prototype.toString$0 = Matrix22.prototype.toString;
// ********** Code for Settings **************
function Settings() {}
Settings.mixFriction = function(friction1, friction2) {
  return Math.sqrt(friction1 * friction2);
}
Settings.mixRestitution = function(restitution1, restitution2) {
  return restitution1 > restitution2 ? restitution1 : restitution2;
}
// ********** Code for Sweep **************
function Sweep() {
  this.angle = (0);
  this.angleZero = (0);
  this.centerZero = new Vector((0), (0));
  this.center = new Vector((0), (0));
  this.localCenter = new Vector((0), (0));
}
Sweep.prototype.get$localCenter = function() { return this.localCenter; };
Sweep.prototype.get$centerZero = function() { return this.centerZero; };
Sweep.prototype.get$center = function() { return this.center; };
Sweep.prototype.get$angleZero = function() { return this.angleZero; };
Sweep.prototype.set$angleZero = function(value) { return this.angleZero = value; };
Sweep.prototype.get$angle = function() { return this.angle; };
Sweep.prototype.set$angle = function(value) { return this.angle = value; };
Sweep.prototype.$eq = function(other) {
  return $eq(this.localCenter, other.get$localCenter()) && $eq(this.centerZero, other.get$centerZero()) && $eq(this.center, other.get$center()) && this.angleZero == other.get$angleZero() && this.angle == other.get$angle();
}
Sweep.prototype.setFrom = function(other) {
  this.localCenter.setFrom(other.localCenter);
  this.centerZero.setFrom(other.centerZero);
  this.center.setFrom(other.center);
  this.angleZero = other.angleZero;
  this.angle = other.angle;
}
Sweep.prototype.normalize = function() {
  var d = (6.283185307179586) * (this.angleZero / (6.283185307179586)).floor();
  this.angleZero -= d;
  this.angle -= d;
}
Sweep.prototype.getTransform = function(xf, alpha) {
  var $0;
  xf.position.x = ((1) - alpha) * this.centerZero.x + alpha * this.center.x;
  xf.position.y = ((1) - alpha) * this.centerZero.y + alpha * this.center.y;
  xf.rotation.setAngle(((1) - alpha) * this.angleZero + alpha * this.angle);
  ($0 = xf.position).x = $0.x - (xf.rotation.col1.x * this.localCenter.x + xf.rotation.col2.x * this.localCenter.y);
  ($0 = xf.position).y = $0.y - (xf.rotation.col1.y * this.localCenter.x + xf.rotation.col2.y * this.localCenter.y);
}
Sweep.prototype.advance = function(time) {
  this.centerZero.x = ((1) - time) * this.centerZero.x + time * this.center.x;
  this.centerZero.y = ((1) - time) * this.centerZero.y + time * this.center.y;
  this.angleZero = ((1) - time) * this.angleZero + time * this.angle;
}
Sweep.prototype.setFrom$1 = Sweep.prototype.setFrom;
// ********** Code for Transform **************
function Transform() {
  this.position = new Vector((0), (0));
  this.rotation = new Matrix22();
}
Transform.prototype.get$position = function() { return this.position; };
Transform.prototype.get$rotation = function() { return this.rotation; };
Transform.prototype.$eq = function(other) {
  if (other == null) {
    return false;
  }
  else {
    return $eq(this.position, other.get$position()) && $eq(this.rotation, other.get$rotation());
  }
}
Transform.prototype.setFrom = function(other) {
  this.position.setFrom(other.position);
  this.rotation.setFrom(other.rotation);
}
Transform.mulToOut = function(transform, vector, out) {
  var tempY = transform.position.y + transform.rotation.col1.y * vector.x + transform.rotation.col2.y * vector.y;
  out.x = transform.position.x + transform.rotation.col1.x * vector.x + transform.rotation.col2.x * vector.y;
  out.y = tempY;
}
Transform.mulTransToOut = function(T, v, out) {
  var v1x = v.x - T.position.x;
  var v1y = v.y - T.position.y;
  var b = T.rotation.col1;
  var b1 = T.rotation.col2;
  var tempy = v1x * b1.x + v1y * b1.y;
  out.x = v1x * b.x + v1y * b.y;
  out.y = tempy;
}
Transform.prototype.setFrom$1 = Transform.prototype.setFrom;
// ********** Code for Vector **************
function Vector(x, y) {
  this.y = y;
  this.x = x;
}
Vector.copy$ctor = function(other) {
  this.y = other.y;
  this.x = other.x;
}
Vector.copy$ctor.prototype = Vector.prototype;
Vector.prototype.get$x = function() { return this.x; };
Vector.prototype.set$x = function(value) { return this.x = value; };
Vector.prototype.get$y = function() { return this.y; };
Vector.prototype.set$y = function(value) { return this.y = value; };
Vector.prototype.$eq = function(other) {
  if (other == null) {
    return false;
  }
  else {
    return this.x == other.get$x() && this.y == other.get$y();
  }
}
Vector.prototype.addLocal = function(v) {
  this.x += v.x;
  this.y += v.y;
  return this;
}
Vector.prototype.subLocal = function(other) {
  this.x -= other.x;
  this.y -= other.y;
  return this;
}
Vector.prototype.setCoords = function(xCoord, yCoord) {
  this.x = xCoord;
  this.y = yCoord;
  return this;
}
Vector.crossVectors = function(v1, v2) {
  return (v1.x * v2.y - v1.y * v2.x);
}
Vector.dot = function(one, two) {
  return one.x * two.x + one.y * two.y;
}
Vector.crossNumAndVectorToOut = function(s, a, out) {
  var tempY = s * a.x;
  out.x = -s * a.y;
  out.y = tempY;
}
Vector.crossVectorAndNumToOut = function(a, s, out) {
  var tempy = -s * a.x;
  out.x = s * a.y;
  out.y = tempy;
}
Vector.prototype.setFrom = function(v) {
  this.setCoords(v.x, v.y);
  return this;
}
Vector.prototype.mulLocal = function(d) {
  this.x *= d;
  this.y *= d;
  return this;
}
Vector.prototype.setZero = function() {
  this.setCoords((0), (0));
  return this;
}
Vector.prototype.get$length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
Vector.minToOut = function(a, b, out) {
  out.x = a.x < b.x ? a.x : b.x;
  out.y = a.y < b.y ? a.y : b.y;
}
Vector.maxToOut = function(a, b, out) {
  out.x = a.x > b.x ? a.x : b.x;
  out.y = a.y > b.y ? a.y : b.y;
}
Vector.prototype.get$lengthSquared = function() {
  return this.x * this.x + this.y * this.y;
}
Vector.prototype.absLocal = function() {
  this.x = this.x.abs();
  this.y = this.y.abs();
}
Vector.prototype.normalize = function() {
  var len = this.get$length();
  if (len < (1.192e-7)) {
    return (0);
  }
  var invLength = (1) / len;
  this.x *= invLength;
  this.y *= invLength;
  return len;
}
Vector.prototype.negateLocal = function() {
  this.x = -this.x;
  this.y = -this.y;
  return this;
}
Vector.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
}
Vector.prototype.addLocal$1 = Vector.prototype.addLocal;
Vector.prototype.mulLocal$1 = Vector.prototype.mulLocal;
Vector.prototype.setCoords$2 = Vector.prototype.setCoords;
Vector.prototype.setFrom$1 = Vector.prototype.setFrom;
Vector.prototype.subLocal$1 = Vector.prototype.subLocal;
Vector.prototype.toString$0 = Vector.prototype.toString;
// ********** Code for top level **************
//  ********** Library DominoTest **************
// ********** Code for Demo **************
function Demo() {
  this.bodies = new Array();
  var gravity = new Vector((0), (-10));
  var doSleep = true;
  this.world = new World(gravity, doSleep, new DefaultWorldPool());
}
Demo.prototype.step = function(timestamp) {
  var $this = this; // closure support
  this.world.step((0.016666666666666666), (10), (10));
  this.ctx.clearRect((0), (0), (900), (600));
  this.world.drawDebugData();
  this.ctx.setFillColor("black");
  this.ctx.font = "18pt monospace";
  this.ctx.fillText(this.get$name(), (20), (20));
  if (this.fps != null) {
    this.ctx.setFillColor("red");
    this.ctx.font = "12pt monospace";
    this.ctx.fillText(("FPS: " + this.fps.toStringAsFixed((2))), (20), (40));
  }
  ++this.frameCount;
  get$window().webkitRequestAnimationFrame($wrap_call$1((function (time) {
    $this.step(time);
  })
  ), this.canvas);
}
Demo.prototype.initializeAnimation = function() {
  var $this = this; // closure support
  this.canvas = get$document().createElement("canvas");
  this.canvas.width = (900);
  this.canvas.height = (600);
  get$document().body.appendChild(this.canvas);
  this.ctx = this.canvas.getContext("2d");
  var extents = new Vector((450), (300));
  this.viewport = new CanvasViewportTransform(extents, extents);
  this.viewport.scale = (10);
  this.debugDraw = new CanvasDraw(this.viewport, this.ctx);
  this.world.set$debugDraw(this.debugDraw);
  this.frameCount = (0);
  get$window().setInterval($wrap_call$0((function () {
    $this.fps = $this.frameCount;
    $this.frameCount = (0);
  })
  ), (1000));
}
Demo.prototype.get$name = function() {
  return "No Demo Name";
}
Demo.prototype.runAnimation = function() {
  var $this = this; // closure support
  get$window().webkitRequestAnimationFrame($wrap_call$1((function (time) {
    $this.step(time);
  })
  ), this.canvas);
}
// ********** Code for DominoTest **************
$inherits(DominoTest, Demo);
function DominoTest() {
  Demo.call(this);
}
DominoTest.prototype.get$name = function() {
  return "Domino Platforms";
}
DominoTest.prototype.initialize = function() {
  var $0;
  {
    var fd = new FixtureDef();
    var sd = new PolygonShape();
    sd.setAsBox((50), (10));
    fd.shape = sd;
    var bd = new BodyDef();
    bd.position = new Vector((0), (-10));
    var body = this.world.createBody(bd);
    body.createFixture(fd);
    this.bodies.add(body);
  }
  {
    for (var i = (0);
     i < (4); i++) {
      var fd = new FixtureDef();
      var sd = new PolygonShape();
      sd.setAsBox((15), (0.125));
      fd.shape = sd;
      var bd = new BodyDef();
      bd.position = new Vector((0), (5) + (5) * i);
      var body = this.world.createBody(bd);
      body.createFixture(fd);
      this.bodies.add(body);
    }
  }
  {
    var fd = new FixtureDef();
    var sd = new PolygonShape();
    sd.setAsBox((0.125), (2));
    fd.shape = sd;
    fd.density = (25);
    var bd = new BodyDef();
    bd.type = (2);
    var friction = (0.5);
    var numPerRow = (25);
    for (var i = (0);
     i < (4); ++i) {
      for (var j = (0);
       j < numPerRow; j++) {
        fd.friction = friction;
        bd.position = new Vector((-14.75) + j * ((29.5) / (numPerRow - (1))), (7.3) + (5) * i);
        if (i == (2) && j == (0)) {
          bd.angle = (-0.1);
          ($0 = bd.position).x = $0.x + (0.1);
        }
        else if (i == (3) && j == numPerRow - (1)) {
          bd.angle = (0.1);
          ($0 = bd.position).x = $0.x - (0.1);
        }
        else {
          bd.angle = (0);
        }
        var myBody = this.world.createBody(bd);
        myBody.createFixture(fd);
        this.bodies.add(myBody);
      }
    }
  }
}
// ********** Code for top level **************
function main() {
  var domino = new DominoTest();
  domino.initialize();
  domino.initializeAnimation();
  domino.runAnimation();
}
// ********** Generic Type Inheritance **************
/** Implements extends for generic types. */
function $inheritsMembers(child, parent) {
  child = child.prototype;
  parent = parent.prototype;
  Object.getOwnPropertyNames(parent).forEach(function(name) {
    if (typeof(child[name]) == 'undefined') child[name] = parent[name];
  });
}
$inheritsMembers(_DoubleLinkedQueueEntrySentinel_E, DoubleLinkedQueueEntry_E);
// 119 dynamic types.
// 260 types
// 16 !leaf
(function(){
  var v0/*HTMLInputElement*/ = 'HTMLInputElement|HTMLIsIndexElement';
  var v1/*SVGComponentTransferFunctionElement*/ = 'SVGComponentTransferFunctionElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement';
  var v2/*SVGTextPositioningElement*/ = 'SVGTextPositioningElement|SVGAltGlyphElement|SVGTRefElement|SVGTSpanElement|SVGTextElement';
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['Blob', 'Blob|File'],
    ['CSSRule', 'CSSRule|CSSCharsetRule|CSSFontFaceRule|CSSImportRule|CSSMediaRule|CSSPageRule|CSSStyleRule|CSSUnknownRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule'],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList'],
    ['Event', 'Event|AudioProcessingEvent|BeforeLoadEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|HashChangeEvent|IDBVersionChangeEvent|MessageEvent|MutationEvent|OfflineAudioCompletionEvent|OverflowEvent|PageTransitionEvent|PopStateEvent|ProgressEvent|XMLHttpRequestProgressEvent|SpeechInputEvent|StorageEvent|TrackEvent|UIEvent|CompositionEvent|KeyboardEvent|MouseEvent|SVGZoomEvent|TextEvent|TouchEvent|WheelEvent|WebGLContextEvent|WebKitAnimationEvent|WebKitTransitionEvent'],
    ['HTMLInputElement', v0/*HTMLInputElement*/],
    ['HTMLElement', [v0/*HTMLInputElement*/,'HTMLElement|HTMLAnchorElement|HTMLAppletElement|HTMLAreaElement|HTMLBRElement|HTMLBaseElement|HTMLBaseFontElement|HTMLBodyElement|HTMLButtonElement|HTMLCanvasElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLAudioElement|HTMLVideoElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLSelectElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTextAreaElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement'].join('|')],
    ['SVGComponentTransferFunctionElement', v1/*SVGComponentTransferFunctionElement*/],
    ['SVGTextPositioningElement', v2/*SVGTextPositioningElement*/],
    ['SVGElement', [v1/*SVGComponentTransferFunctionElement*/,v2/*SVGTextPositioningElement*/,'SVGElement|SVGAElement|SVGAltGlyphDefElement|SVGAltGlyphItemElement|SVGAnimationElement|SVGAnimateColorElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGSetElement|SVGCircleElement|SVGClipPathElement|SVGCursorElement|SVGDefsElement|SVGDescElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGFontElement|SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement|SVGForeignObjectElement|SVGGElement|SVGGlyphElement|SVGGlyphRefElement|SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGHKernElement|SVGImageElement|SVGLineElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGMissingGlyphElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTextContentElement|SVGTextPathElement|SVGTitleElement|SVGUseElement|SVGVKernElement|SVGViewElement'].join('|')],
    ['StyleSheet', 'StyleSheet|CSSStyleSheet'],
  ];
  $dynamicSetMetadata(table);
})();
//  ********** Globals **************
function $static_init(){
}
var const$0000 = Object.create(EmptyQueueException.prototype, {});
var const$0001 = Object.create(NoMoreElementsException.prototype, {});
var $globals = {};
$static_init();
main();