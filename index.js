
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _Fresheyeball$elm_tuple_extra$Tuple2$toList = function (_p0) {
	var _p1 = _p0;
	return {
		ctor: '::',
		_0: _p1._0,
		_1: {
			ctor: '::',
			_0: _p1._1,
			_1: {ctor: '[]'}
		}
	};
};
var _Fresheyeball$elm_tuple_extra$Tuple2$sortWith = F2(
	function (cmp, _p2) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(cmp, _p5, _p6);
		if (_p4.ctor === 'GT') {
			return {ctor: '_Tuple2', _0: _p6, _1: _p5};
		} else {
			return {ctor: '_Tuple2', _0: _p5, _1: _p6};
		}
	});
var _Fresheyeball$elm_tuple_extra$Tuple2$sortBy = F2(
	function (f, _p7) {
		var _p8 = _p7;
		var _p10 = _p8._1;
		var _p9 = _p8._0;
		return (_elm_lang$core$Native_Utils.cmp(
			f(_p9),
			f(_p10)) > 0) ? {ctor: '_Tuple2', _0: _p10, _1: _p9} : {ctor: '_Tuple2', _0: _p9, _1: _p10};
	});
var _Fresheyeball$elm_tuple_extra$Tuple2$sort = function (_p11) {
	var _p12 = _p11;
	var _p14 = _p12._1;
	var _p13 = _p12._0;
	return (_elm_lang$core$Native_Utils.cmp(_p13, _p14) > 0) ? {ctor: '_Tuple2', _0: _p14, _1: _p13} : {ctor: '_Tuple2', _0: _p13, _1: _p14};
};
var _Fresheyeball$elm_tuple_extra$Tuple2$swap = function (_p15) {
	var _p16 = _p15;
	return {ctor: '_Tuple2', _0: _p16._1, _1: _p16._0};
};
var _Fresheyeball$elm_tuple_extra$Tuple2$mapBoth = F2(
	function (f, _p17) {
		var _p18 = _p17;
		return {
			ctor: '_Tuple2',
			_0: f(_p18._0),
			_1: f(_p18._1)
		};
	});
var _Fresheyeball$elm_tuple_extra$Tuple2$mapEach = F3(
	function (f, f_, _p19) {
		var _p20 = _p19;
		return {
			ctor: '_Tuple2',
			_0: f(_p20._0),
			_1: f_(_p20._1)
		};
	});
var _Fresheyeball$elm_tuple_extra$Tuple2$mapSecond = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return {
			ctor: '_Tuple2',
			_0: _p22._0,
			_1: f(_p22._1)
		};
	});
var _Fresheyeball$elm_tuple_extra$Tuple2$map = _Fresheyeball$elm_tuple_extra$Tuple2$mapSecond;
var _Fresheyeball$elm_tuple_extra$Tuple2$mapFirst = F2(
	function (f, _p23) {
		var _p24 = _p23;
		return {
			ctor: '_Tuple2',
			_0: f(_p24._0),
			_1: _p24._1
		};
	});
var _Fresheyeball$elm_tuple_extra$Tuple2_ops = _Fresheyeball$elm_tuple_extra$Tuple2_ops || {};
_Fresheyeball$elm_tuple_extra$Tuple2_ops['=>'] = F2(
	function (a, b) {
		return {ctor: '_Tuple2', _0: a, _1: b};
	});

var _Fresheyeball$elm_tuple_extra$Tuple3$toList = function (_p0) {
	var _p1 = _p0;
	return {
		ctor: '::',
		_0: _p1._0,
		_1: {
			ctor: '::',
			_0: _p1._1,
			_1: {
				ctor: '::',
				_0: _p1._2,
				_1: {ctor: '[]'}
			}
		}
	};
};
var _Fresheyeball$elm_tuple_extra$Tuple3$swirll = function (_p2) {
	var _p3 = _p2;
	return {ctor: '_Tuple3', _0: _p3._2, _1: _p3._0, _2: _p3._1};
};
var _Fresheyeball$elm_tuple_extra$Tuple3$swirlr = function (_p4) {
	var _p5 = _p4;
	return {ctor: '_Tuple3', _0: _p5._1, _1: _p5._2, _2: _p5._0};
};
var _Fresheyeball$elm_tuple_extra$Tuple3$sortWith = F2(
	function (cmp, _p6) {
		var _p7 = _p6;
		var _p9 = _p7._2;
		var _p8 = A2(
			_Fresheyeball$elm_tuple_extra$Tuple2$sortWith,
			cmp,
			{ctor: '_Tuple2', _0: _p7._0, _1: _p7._1});
		var a_ = _p8._0;
		var b_ = _p8._1;
		var goesBefore = F2(
			function (x, y) {
				return !_elm_lang$core$Native_Utils.eq(
					A2(cmp, x, y),
					_elm_lang$core$Basics$GT);
			});
		return A2(goesBefore, _p9, a_) ? {ctor: '_Tuple3', _0: _p9, _1: a_, _2: b_} : (A2(goesBefore, _p9, b_) ? {ctor: '_Tuple3', _0: a_, _1: _p9, _2: b_} : {ctor: '_Tuple3', _0: a_, _1: b_, _2: _p9});
	});
var _Fresheyeball$elm_tuple_extra$Tuple3$sortBy = function (conv) {
	return _Fresheyeball$elm_tuple_extra$Tuple3$sortWith(
		F2(
			function (x, y) {
				return A2(
					_elm_lang$core$Basics$compare,
					conv(x),
					conv(y));
			}));
};
var _Fresheyeball$elm_tuple_extra$Tuple3$sort = _Fresheyeball$elm_tuple_extra$Tuple3$sortWith(_elm_lang$core$Basics$compare);
var _Fresheyeball$elm_tuple_extra$Tuple3$mapAll = F2(
	function (f, _p10) {
		var _p11 = _p10;
		return {
			ctor: '_Tuple3',
			_0: f(_p11._0),
			_1: f(_p11._1),
			_2: f(_p11._2)
		};
	});
var _Fresheyeball$elm_tuple_extra$Tuple3$mapEach = F4(
	function (f, f_, f__, _p12) {
		var _p13 = _p12;
		return {
			ctor: '_Tuple3',
			_0: f(_p13._0),
			_1: f_(_p13._1),
			_2: f__(_p13._2)
		};
	});
var _Fresheyeball$elm_tuple_extra$Tuple3$mapThird = F2(
	function (f, _p14) {
		var _p15 = _p14;
		return {
			ctor: '_Tuple3',
			_0: _p15._0,
			_1: _p15._1,
			_2: f(_p15._2)
		};
	});
var _Fresheyeball$elm_tuple_extra$Tuple3$map = _Fresheyeball$elm_tuple_extra$Tuple3$mapThird;
var _Fresheyeball$elm_tuple_extra$Tuple3$mapSecond = F2(
	function (f, _p16) {
		var _p17 = _p16;
		return {
			ctor: '_Tuple3',
			_0: _p17._0,
			_1: f(_p17._1),
			_2: _p17._2
		};
	});
var _Fresheyeball$elm_tuple_extra$Tuple3$mapFirst = F2(
	function (f, _p18) {
		var _p19 = _p18;
		return {
			ctor: '_Tuple3',
			_0: f(_p19._0),
			_1: _p19._1,
			_2: _p19._2
		};
	});
var _Fresheyeball$elm_tuple_extra$Tuple3$init = function (_p20) {
	var _p21 = _p20;
	return {ctor: '_Tuple2', _0: _p21._0, _1: _p21._1};
};
var _Fresheyeball$elm_tuple_extra$Tuple3$tail = function (_p22) {
	var _p23 = _p22;
	return {ctor: '_Tuple2', _0: _p23._1, _1: _p23._2};
};
var _Fresheyeball$elm_tuple_extra$Tuple3$third = function (_p24) {
	var _p25 = _p24;
	return _p25._2;
};
var _Fresheyeball$elm_tuple_extra$Tuple3$second = function (_p26) {
	var _p27 = _p26;
	return _p27._1;
};
var _Fresheyeball$elm_tuple_extra$Tuple3$first = function (_p28) {
	var _p29 = _p28;
	return _p29._0;
};

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

var _Skinney$murmur3$Murmur3$mur = F2(
	function (c, h) {
		return 4294967295 & (((h & 65535) * c) + ((65535 & ((h >>> 16) * c)) << 16));
	});
var _Skinney$murmur3$Murmur3$step = function (acc) {
	var h1 = A2(_Skinney$murmur3$Murmur3$mur, 5, (acc >>> 19) | (acc << 13));
	return ((h1 & 65535) + 27492) + ((65535 & ((h1 >>> 16) + 58964)) << 16);
};
var _Skinney$murmur3$Murmur3$mix = F2(
	function (h1, h2) {
		var k1 = A2(_Skinney$murmur3$Murmur3$mur, 3432918353, h2);
		return h1 ^ A2(_Skinney$murmur3$Murmur3$mur, 461845907, (k1 >>> 17) | (k1 << 15));
	});
var _Skinney$murmur3$Murmur3$finalize = F2(
	function (strLength, _p0) {
		var _p1 = _p0;
		var _p3 = _p1._1;
		var _p2 = _p1._2;
		var acc = (!_elm_lang$core$Native_Utils.eq(_p2, 0)) ? A2(_Skinney$murmur3$Murmur3$mix, _p3, _p2) : _p3;
		var h1 = acc ^ strLength;
		var h2 = A2(_Skinney$murmur3$Murmur3$mur, 2246822507, h1 ^ (h1 >>> 16));
		var h3 = A2(_Skinney$murmur3$Murmur3$mur, 3266489909, h2 ^ (h2 >>> 13));
		return (h3 ^ (h3 >>> 16)) >>> 0;
	});
var _Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, _p4) {
		var _p5 = _p4;
		var _p7 = _p5._0;
		var _p6 = _p5._1;
		var res = _p5._2 | ((255 & _elm_lang$core$Char$toCode(c)) << _p7);
		if (_elm_lang$core$Native_Utils.cmp(_p7, 24) > -1) {
			var newHash = _Skinney$murmur3$Murmur3$step(
				A2(_Skinney$murmur3$Murmur3$mix, _p6, res));
			return {ctor: '_Tuple3', _0: 0, _1: newHash, _2: 0};
		} else {
			return {ctor: '_Tuple3', _0: _p7 + 8, _1: _p6, _2: res};
		}
	});
var _Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return A2(
			_Skinney$murmur3$Murmur3$finalize,
			_elm_lang$core$String$length(str),
			A3(
				_elm_lang$core$String$foldl,
				_Skinney$murmur3$Murmur3$hashFold,
				{ctor: '_Tuple3', _0: 0, _1: seed, _2: 0},
				str));
	});

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _arturopala$elm_monocle$Monocle_Iso$modify = F2(
	function (iso, f) {
		return function (_p0) {
			return iso.reverseGet(
				f(
					iso.get(_p0)));
		};
	});
var _arturopala$elm_monocle$Monocle_Iso$Iso = F2(
	function (a, b) {
		return {get: a, reverseGet: b};
	});
var _arturopala$elm_monocle$Monocle_Iso$reverse = function (iso) {
	return A2(_arturopala$elm_monocle$Monocle_Iso$Iso, iso.reverseGet, iso.get);
};
var _arturopala$elm_monocle$Monocle_Iso$compose = F2(
	function (outer, inner) {
		return A2(
			_arturopala$elm_monocle$Monocle_Iso$Iso,
			function (_p1) {
				return inner.get(
					outer.get(_p1));
			},
			function (_p2) {
				return outer.reverseGet(
					inner.reverseGet(_p2));
			});
	});

var _arturopala$elm_monocle$Monocle_Lens$modifyAndMerge = F3(
	function (lens, fx, merge) {
		var mf = function (_p0) {
			var _p1 = _p0;
			var _p4 = _p1._0;
			return function (_p2) {
				var _p3 = _p2;
				return {
					ctor: '_Tuple2',
					_0: A2(lens.set, _p3._0, _p4),
					_1: A2(merge, _p1._1, _p3._1)
				};
			}(
				fx(
					lens.get(_p4)));
		};
		return mf;
	});
var _arturopala$elm_monocle$Monocle_Lens$modify3 = F4(
	function (lens1, lens2, lens3, fx) {
		var mf = function (_p5) {
			var _p6 = _p5;
			var _p11 = _p6._2;
			var _p10 = _p6._1;
			var _p9 = _p6._0;
			return function (_p7) {
				var _p8 = _p7;
				return {
					ctor: '_Tuple3',
					_0: A2(lens1.set, _p8._0, _p9),
					_1: A2(lens2.set, _p8._1, _p10),
					_2: A2(lens3.set, _p8._2, _p11)
				};
			}(
				fx(
					{
						ctor: '_Tuple3',
						_0: lens1.get(_p9),
						_1: lens2.get(_p10),
						_2: lens3.get(_p11)
					}));
		};
		return mf;
	});
var _arturopala$elm_monocle$Monocle_Lens$modify2 = F3(
	function (lens1, lens2, fx) {
		var mf = function (_p12) {
			var _p13 = _p12;
			var _p17 = _p13._1;
			var _p16 = _p13._0;
			return function (_p14) {
				var _p15 = _p14;
				return {
					ctor: '_Tuple2',
					_0: A2(lens1.set, _p15._0, _p16),
					_1: A2(lens2.set, _p15._1, _p17)
				};
			}(
				fx(
					{
						ctor: '_Tuple2',
						_0: lens1.get(_p16),
						_1: lens2.get(_p17)
					}));
		};
		return mf;
	});
var _arturopala$elm_monocle$Monocle_Lens$modify = F2(
	function (lens, f) {
		var mf = function (a) {
			return function (b) {
				return A2(lens.set, b, a);
			}(
				f(
					lens.get(a)));
		};
		return mf;
	});
var _arturopala$elm_monocle$Monocle_Lens$Lens = F2(
	function (a, b) {
		return {get: a, set: b};
	});
var _arturopala$elm_monocle$Monocle_Lens$compose = F2(
	function (outer, inner) {
		var set = F2(
			function (c, a) {
				return function (b) {
					return A2(outer.set, b, a);
				}(
					A2(
						inner.set,
						c,
						outer.get(a)));
			});
		return A2(
			_arturopala$elm_monocle$Monocle_Lens$Lens,
			function (_p18) {
				return inner.get(
					outer.get(_p18));
			},
			set);
	});
var _arturopala$elm_monocle$Monocle_Lens$fromIso = function (iso) {
	var set = F2(
		function (b, _p19) {
			return iso.reverseGet(b);
		});
	return A2(_arturopala$elm_monocle$Monocle_Lens$Lens, iso.get, set);
};
var _arturopala$elm_monocle$Monocle_Lens$zip = F2(
	function (left, right) {
		var set = F2(
			function (_p21, _p20) {
				var _p22 = _p21;
				var _p23 = _p20;
				return {
					ctor: '_Tuple2',
					_0: A2(left.set, _p22._0, _p23._0),
					_1: A2(right.set, _p22._1, _p23._1)
				};
			});
		var get = function (_p24) {
			var _p25 = _p24;
			return {
				ctor: '_Tuple2',
				_0: left.get(_p25._0),
				_1: right.get(_p25._1)
			};
		};
		return A2(_arturopala$elm_monocle$Monocle_Lens$Lens, get, set);
	});
var _arturopala$elm_monocle$Monocle_Lens$tuple = F2(
	function (left, right) {
		var set = F2(
			function (_p26, a) {
				var _p27 = _p26;
				return A2(
					right.set,
					_p27._1,
					A2(left.set, _p27._0, a));
			});
		var get = function (a) {
			return {
				ctor: '_Tuple2',
				_0: left.get(a),
				_1: right.get(a)
			};
		};
		return A2(_arturopala$elm_monocle$Monocle_Lens$Lens, get, set);
	});
var _arturopala$elm_monocle$Monocle_Lens$tuple3 = F3(
	function (first, second, third) {
		var set = F2(
			function (_p28, a) {
				var _p29 = _p28;
				return A2(
					third.set,
					_p29._2,
					A2(
						second.set,
						_p29._1,
						A2(first.set, _p29._0, a)));
			});
		var get = function (a) {
			return {
				ctor: '_Tuple3',
				_0: first.get(a),
				_1: second.get(a),
				_2: third.get(a)
			};
		};
		return A2(_arturopala$elm_monocle$Monocle_Lens$Lens, get, set);
	});

var _avh4$elm_fifo$Fifo$toList = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_p1._0,
		_elm_lang$core$List$reverse(_p1._1));
};
var _avh4$elm_fifo$Fifo$Fifo = F2(
	function (a, b) {
		return {ctor: 'Fifo', _0: a, _1: b};
	});
var _avh4$elm_fifo$Fifo$empty = A2(
	_avh4$elm_fifo$Fifo$Fifo,
	{ctor: '[]'},
	{ctor: '[]'});
var _avh4$elm_fifo$Fifo$insert = F2(
	function (a, _p2) {
		var _p3 = _p2;
		return A2(
			_avh4$elm_fifo$Fifo$Fifo,
			_p3._0,
			{ctor: '::', _0: a, _1: _p3._1});
	});
var _avh4$elm_fifo$Fifo$remove = function (fifo) {
	remove:
	while (true) {
		var _p4 = fifo;
		if (_p4._0.ctor === '[]') {
			if (_p4._1.ctor === '[]') {
				return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _avh4$elm_fifo$Fifo$empty};
			} else {
				var _v3 = A2(
					_avh4$elm_fifo$Fifo$Fifo,
					_elm_lang$core$List$reverse(_p4._1),
					{ctor: '[]'});
				fifo = _v3;
				continue remove;
			}
		} else {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Maybe$Just(_p4._0._0),
				_1: A2(_avh4$elm_fifo$Fifo$Fifo, _p4._0._1, _p4._1)
			};
		}
	}
};
var _avh4$elm_fifo$Fifo$fromList = function (list) {
	return A2(
		_avh4$elm_fifo$Fifo$Fifo,
		list,
		{ctor: '[]'});
};

var _elm_community$easing_functions$Ease$reverse = F2(
	function (easing, time) {
		return easing(1 - time);
	});
var _elm_community$easing_functions$Ease$flip = F2(
	function (easing, time) {
		return 1 - easing(1 - time);
	});
var _elm_community$easing_functions$Ease$retour = F2(
	function (easing, time) {
		return (_elm_lang$core$Native_Utils.cmp(time, 0.5) < 0) ? easing(time * 2) : A2(_elm_community$easing_functions$Ease$flip, easing, (time - 0.5) * 2);
	});
var _elm_community$easing_functions$Ease$inOut = F3(
	function (e1, e2, time) {
		return (_elm_lang$core$Native_Utils.cmp(time, 0.5) < 0) ? (e1(time * 2) / 2) : (0.5 + (e2((time - 0.5) * 2) / 2));
	});
var _elm_community$easing_functions$Ease$inElastic = function (time) {
	if (_elm_lang$core$Native_Utils.eq(time, 0.0)) {
		return 0.0;
	} else {
		var t = time - 1;
		var p = 0.3;
		var s = 7.5e-2;
		return 0 - (Math.pow(2, 10 * t) * _elm_lang$core$Basics$sin(((t - s) * (2 * _elm_lang$core$Basics$pi)) / p));
	}
};
var _elm_community$easing_functions$Ease$outElastic = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inElastic);
var _elm_community$easing_functions$Ease$inOutElastic = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inElastic, _elm_community$easing_functions$Ease$outElastic);
var _elm_community$easing_functions$Ease$outBounce = function (time) {
	var t4 = time - (2.625 / 2.75);
	var t3 = time - (2.25 / 2.75);
	var t2 = time - (1.5 / 2.75);
	var a = 7.5625;
	return (_elm_lang$core$Native_Utils.cmp(time, 1 / 2.75) < 0) ? ((a * time) * time) : ((_elm_lang$core$Native_Utils.cmp(time, 2 / 2.75) < 0) ? (((a * t2) * t2) + 0.75) : ((_elm_lang$core$Native_Utils.cmp(time, 2.5 / 2.75) < 0) ? (((a * t3) * t3) + 0.9375) : (((a * t4) * t4) + 0.984375)));
};
var _elm_community$easing_functions$Ease$inBounce = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$outBounce);
var _elm_community$easing_functions$Ease$inOutBounce = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inBounce, _elm_community$easing_functions$Ease$outBounce);
var _elm_community$easing_functions$Ease$inBack = function (time) {
	return (time * time) * ((2.70158 * time) - 1.70158);
};
var _elm_community$easing_functions$Ease$outBack = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inBack);
var _elm_community$easing_functions$Ease$inOutBack = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inBack, _elm_community$easing_functions$Ease$outBack);
var _elm_community$easing_functions$Ease$outCirc = function (time) {
	return _elm_lang$core$Basics$sqrt(
		1 - Math.pow(time - 1, 2));
};
var _elm_community$easing_functions$Ease$inCirc = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$outCirc);
var _elm_community$easing_functions$Ease$inOutCirc = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inCirc, _elm_community$easing_functions$Ease$outCirc);
var _elm_community$easing_functions$Ease$inExpo = function (time) {
	return _elm_lang$core$Native_Utils.eq(time, 0.0) ? 0.0 : Math.pow(2, 10 * (time - 1));
};
var _elm_community$easing_functions$Ease$outExpo = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inExpo);
var _elm_community$easing_functions$Ease$inOutExpo = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inExpo, _elm_community$easing_functions$Ease$outExpo);
var _elm_community$easing_functions$Ease$outSine = function (time) {
	return _elm_lang$core$Basics$sin(time * (_elm_lang$core$Basics$pi / 2));
};
var _elm_community$easing_functions$Ease$inSine = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$outSine);
var _elm_community$easing_functions$Ease$inOutSine = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inSine, _elm_community$easing_functions$Ease$outSine);
var _elm_community$easing_functions$Ease$inQuint = function (time) {
	return Math.pow(time, 5);
};
var _elm_community$easing_functions$Ease$outQuint = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inQuint);
var _elm_community$easing_functions$Ease$inOutQuint = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inQuint, _elm_community$easing_functions$Ease$outQuint);
var _elm_community$easing_functions$Ease$inQuart = function (time) {
	return Math.pow(time, 4);
};
var _elm_community$easing_functions$Ease$outQuart = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inQuart);
var _elm_community$easing_functions$Ease$inOutQuart = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inQuart, _elm_community$easing_functions$Ease$outQuart);
var _elm_community$easing_functions$Ease$inCubic = function (time) {
	return Math.pow(time, 3);
};
var _elm_community$easing_functions$Ease$outCubic = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inCubic);
var _elm_community$easing_functions$Ease$inOutCubic = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inCubic, _elm_community$easing_functions$Ease$outCubic);
var _elm_community$easing_functions$Ease$inQuad = function (time) {
	return Math.pow(time, 2);
};
var _elm_community$easing_functions$Ease$outQuad = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inQuad);
var _elm_community$easing_functions$Ease$inOutQuad = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inQuad, _elm_community$easing_functions$Ease$outQuad);
var _elm_community$easing_functions$Ease$bezier = F5(
	function (x1, y1, x2, y2, time) {
		var pair = F4(
			function (interpolate, _p1, _p0, v) {
				var _p2 = _p1;
				var _p3 = _p0;
				return {
					ctor: '_Tuple2',
					_0: A3(interpolate, _p2._0, _p3._0, v),
					_1: A3(interpolate, _p2._1, _p3._1, v)
				};
			});
		var lerp = F3(
			function (from, to, v) {
				return from + ((to - from) * v);
			});
		var casteljau = function (ps) {
			casteljau:
			while (true) {
				var _p4 = ps;
				if (((_p4.ctor === '::') && (_p4._0.ctor === '_Tuple2')) && (_p4._1.ctor === '[]')) {
					return _p4._0._1;
				} else {
					var _p5 = _p4;
					var _v3 = A3(
						_elm_lang$core$List$map2,
						F2(
							function (x, y) {
								return A4(pair, lerp, x, y, time);
							}),
						_p5,
						A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '[]'},
							_elm_lang$core$List$tail(_p5)));
					ps = _v3;
					continue casteljau;
				}
			}
		};
		return casteljau(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 0, _1: 0},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: x1, _1: y1},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: x2, _1: y2},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 1, _1: 1},
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _elm_community$easing_functions$Ease$linear = _elm_lang$core$Basics$identity;

var _elm_community$graph$Graph_Tree$pushMany = F2(
	function (vals, queue) {
		return A3(_elm_lang$core$List$foldl, _avh4$elm_fifo$Fifo$insert, queue, vals);
	});
var _elm_community$graph$Graph_Tree$listForTraversal = F2(
	function (traversal, tree) {
		var acc = _elm_lang$core$Basics$identity;
		var f = F3(
			function (label, children, rest) {
				return function (_p0) {
					return rest(
						A2(
							F2(
								function (x, y) {
									return {ctor: '::', _0: x, _1: y};
								}),
							label,
							_p0));
				};
			});
		return A4(
			traversal,
			f,
			acc,
			tree,
			{ctor: '[]'});
	});
var _elm_community$graph$Graph_Tree$size = function (tree) {
	var _p1 = tree;
	return _p1._0;
};
var _elm_community$graph$Graph_Tree$root = function (tree) {
	var _p2 = tree;
	return _p2._1;
};
var _elm_community$graph$Graph_Tree$height = function (tree) {
	var go = F2(
		function (h, t) {
			var _p3 = _elm_community$graph$Graph_Tree$root(t);
			if (_p3.ctor === 'Just') {
				return A3(
					_elm_lang$core$List$foldl,
					function (_p4) {
						return _elm_lang$core$Basics$max(
							A2(go, h + 1, _p4));
					},
					h + 1,
					_p3._0._1);
			} else {
				return h;
			}
		});
	return A2(go, 0, tree);
};
var _elm_community$graph$Graph_Tree$levelOrder = F3(
	function (visit, acc, tree) {
		var go = F2(
			function (acc, toVisit) {
				go:
				while (true) {
					var _p5 = _avh4$elm_fifo$Fifo$remove(toVisit);
					if (_p5._0.ctor === 'Nothing') {
						return acc;
					} else {
						var _p8 = _p5._1;
						var _p6 = _elm_community$graph$Graph_Tree$root(_p5._0._0);
						if (_p6.ctor === 'Nothing') {
							var _v5 = acc,
								_v6 = _p8;
							acc = _v5;
							toVisit = _v6;
							continue go;
						} else {
							var _p7 = _p6._0._1;
							var _v7 = A3(visit, _p6._0._0, _p7, acc),
								_v8 = A2(_elm_community$graph$Graph_Tree$pushMany, _p7, _p8);
							acc = _v7;
							toVisit = _v8;
							continue go;
						}
					}
				}
			});
		return A2(
			go,
			acc,
			A2(_avh4$elm_fifo$Fifo$insert, tree, _avh4$elm_fifo$Fifo$empty));
	});
var _elm_community$graph$Graph_Tree$levelOrderList = _elm_community$graph$Graph_Tree$listForTraversal(_elm_community$graph$Graph_Tree$levelOrder);
var _elm_community$graph$Graph_Tree$postOrder = F3(
	function (visit, acc, tree) {
		var folder = _elm_lang$core$Basics$flip(
			_elm_community$graph$Graph_Tree$postOrder(visit));
		var _p9 = _elm_community$graph$Graph_Tree$root(tree);
		if (_p9.ctor === 'Nothing') {
			return acc;
		} else {
			var _p10 = _p9._0._1;
			return A3(
				visit,
				_p9._0._0,
				_p10,
				A3(_elm_lang$core$List$foldl, folder, acc, _p10));
		}
	});
var _elm_community$graph$Graph_Tree$postOrderList = _elm_community$graph$Graph_Tree$listForTraversal(_elm_community$graph$Graph_Tree$postOrder);
var _elm_community$graph$Graph_Tree$preOrder = F3(
	function (visit, acc, tree) {
		var folder = _elm_lang$core$Basics$flip(
			_elm_community$graph$Graph_Tree$preOrder(visit));
		var _p11 = _elm_community$graph$Graph_Tree$root(tree);
		if (_p11.ctor === 'Nothing') {
			return acc;
		} else {
			var _p12 = _p11._0._1;
			return A3(
				_elm_lang$core$List$foldl,
				folder,
				A3(visit, _p11._0._0, _p12, acc),
				_p12);
		}
	});
var _elm_community$graph$Graph_Tree$preOrderList = _elm_community$graph$Graph_Tree$listForTraversal(_elm_community$graph$Graph_Tree$preOrder);
var _elm_community$graph$Graph_Tree$MkTree = F2(
	function (a, b) {
		return {ctor: 'MkTree', _0: a, _1: b};
	});
var _elm_community$graph$Graph_Tree$empty = A2(_elm_community$graph$Graph_Tree$MkTree, 0, _elm_lang$core$Maybe$Nothing);
var _elm_community$graph$Graph_Tree$isEmpty = function (tree) {
	return _elm_lang$core$Native_Utils.eq(tree, _elm_community$graph$Graph_Tree$empty);
};
var _elm_community$graph$Graph_Tree$inner = F2(
	function (label, children) {
		var nonEmptyChildren = A2(
			_elm_lang$core$List$filter,
			function (_p13) {
				return !_elm_community$graph$Graph_Tree$isEmpty(_p13);
			},
			children);
		var totalSize = A3(
			_elm_lang$core$List$foldl,
			function (_p14) {
				return F2(
					function (x, y) {
						return x + y;
					})(
					_elm_community$graph$Graph_Tree$size(_p14));
			},
			1,
			nonEmptyChildren);
		return A2(
			_elm_community$graph$Graph_Tree$MkTree,
			totalSize,
			_elm_lang$core$Maybe$Just(
				{ctor: '_Tuple2', _0: label, _1: nonEmptyChildren}));
	});
var _elm_community$graph$Graph_Tree$leaf = function (val) {
	return A2(
		_elm_community$graph$Graph_Tree$inner,
		val,
		{ctor: '[]'});
};
var _elm_community$graph$Graph_Tree$unfoldTree = F2(
	function (next, seed) {
		var _p15 = next(seed);
		var label = _p15._0;
		var seeds = _p15._1;
		return A2(
			_elm_community$graph$Graph_Tree$inner,
			label,
			A2(
				_elm_lang$core$List$map,
				_elm_community$graph$Graph_Tree$unfoldTree(next),
				seeds));
	});
var _elm_community$graph$Graph_Tree$unfoldForest = F2(
	function (next, seeds) {
		return A2(
			_elm_lang$core$List$map,
			_elm_community$graph$Graph_Tree$unfoldTree(next),
			seeds);
	});

var _elm_community$intdict$IntDict$combineBits = F3(
	function (a, b, mask) {
		return (a & (~mask)) | (b & mask);
	});
var _elm_community$intdict$IntDict$foldr = F3(
	function (f, acc, dict) {
		foldr:
		while (true) {
			var _p0 = dict;
			switch (_p0.ctor) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var _p1 = _p0._0;
					return A3(f, _p1.key, _p1.value, acc);
				default:
					var _p2 = _p0._0;
					var _v1 = f,
						_v2 = A3(_elm_community$intdict$IntDict$foldr, f, acc, _p2.right),
						_v3 = _p2.left;
					f = _v1;
					acc = _v2;
					dict = _v3;
					continue foldr;
			}
		}
	});
var _elm_community$intdict$IntDict$keys = function (dict) {
	return A3(
		_elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_community$intdict$IntDict$values = function (dict) {
	return A3(
		_elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_community$intdict$IntDict$toList = function (dict) {
	return A3(
		_elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_community$intdict$IntDict$toString = function (dict) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'IntDict.fromList ',
		_elm_lang$core$Basics$toString(
			_elm_community$intdict$IntDict$toList(dict)));
};
var _elm_community$intdict$IntDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p3 = dict;
			switch (_p3.ctor) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var _p4 = _p3._0;
					return A3(f, _p4.key, _p4.value, acc);
				default:
					var _p5 = _p3._0;
					var _v5 = f,
						_v6 = A3(_elm_community$intdict$IntDict$foldl, f, acc, _p5.left),
						_v7 = _p5.right;
					f = _v5;
					acc = _v6;
					dict = _v7;
					continue foldl;
			}
		}
	});
var _elm_community$intdict$IntDict$findMax = function (dict) {
	findMax:
	while (true) {
		var _p6 = dict;
		switch (_p6.ctor) {
			case 'Empty':
				return _elm_lang$core$Maybe$Nothing;
			case 'Leaf':
				var _p7 = _p6._0;
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: _p7.key, _1: _p7.value});
			default:
				var _v9 = _p6._0.right;
				dict = _v9;
				continue findMax;
		}
	}
};
var _elm_community$intdict$IntDict$findMin = function (dict) {
	findMin:
	while (true) {
		var _p8 = dict;
		switch (_p8.ctor) {
			case 'Empty':
				return _elm_lang$core$Maybe$Nothing;
			case 'Leaf':
				var _p9 = _p8._0;
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: _p9.key, _1: _p9.value});
			default:
				var _v11 = _p8._0.left;
				dict = _v11;
				continue findMin;
		}
	}
};
var _elm_community$intdict$IntDict$size = function (dict) {
	var _p10 = dict;
	switch (_p10.ctor) {
		case 'Empty':
			return 0;
		case 'Leaf':
			return 1;
		default:
			return _p10._0.size;
	}
};
var _elm_community$intdict$IntDict$isEmpty = function (dict) {
	var _p11 = dict;
	if (_p11.ctor === 'Empty') {
		return true;
	} else {
		return false;
	}
};
var _elm_community$intdict$IntDict$highestBitSet = function (n) {
	var shiftOr = F2(
		function (i, shift) {
			return i | (i >>> shift);
		});
	var n1 = A2(shiftOr, n, 1);
	var n2 = A2(shiftOr, n1, 2);
	var n3 = A2(shiftOr, n2, 4);
	var n4 = A2(shiftOr, n3, 8);
	var n5 = A2(shiftOr, n4, 16);
	return n5 & (~(n5 >>> 1));
};
var _elm_community$intdict$IntDict$signBit = _elm_community$intdict$IntDict$highestBitSet(-1);
var _elm_community$intdict$IntDict$isBranchingBitSet = function (p) {
	return function (_p12) {
		return A2(
			F2(
				function (x, y) {
					return !_elm_lang$core$Native_Utils.eq(x, y);
				}),
			0,
			p.branchingBit & (_elm_community$intdict$IntDict$signBit ^ _p12));
	};
};
var _elm_community$intdict$IntDict$higherBitMask = function (branchingBit) {
	return ~((branchingBit * 2) - 1);
};
var _elm_community$intdict$IntDict$prefixMatches = F2(
	function (p, n) {
		return _elm_lang$core$Native_Utils.eq(
			n & _elm_community$intdict$IntDict$higherBitMask(p.branchingBit),
			p.prefixBits);
	});
var _elm_community$intdict$IntDict$get = F2(
	function (key, dict) {
		get:
		while (true) {
			var _p13 = dict;
			switch (_p13.ctor) {
				case 'Empty':
					return _elm_lang$core$Maybe$Nothing;
				case 'Leaf':
					var _p14 = _p13._0;
					return _elm_lang$core$Native_Utils.eq(_p14.key, key) ? _elm_lang$core$Maybe$Just(_p14.value) : _elm_lang$core$Maybe$Nothing;
				default:
					var _p15 = _p13._0;
					if (!A2(_elm_community$intdict$IntDict$prefixMatches, _p15.prefix, key)) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						if (A2(_elm_community$intdict$IntDict$isBranchingBitSet, _p15.prefix, key)) {
							var _v15 = key,
								_v16 = _p15.right;
							key = _v15;
							dict = _v16;
							continue get;
						} else {
							var _v17 = key,
								_v18 = _p15.left;
							key = _v17;
							dict = _v18;
							continue get;
						}
					}
			}
		}
	});
var _elm_community$intdict$IntDict$member = F2(
	function (key, dict) {
		var _p16 = A2(_elm_community$intdict$IntDict$get, key, dict);
		if (_p16.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_community$intdict$IntDict$lcp = F2(
	function (x, y) {
		var diff = x ^ y;
		var branchingBit = _elm_community$intdict$IntDict$highestBitSet(diff);
		var mask = _elm_community$intdict$IntDict$higherBitMask(branchingBit);
		var prefixBits = x & mask;
		return {prefixBits: prefixBits, branchingBit: branchingBit};
	});
var _elm_community$intdict$IntDict$isValidKey = function (k) {
	return _elm_lang$core$Native_Utils.eq(k | 0, k);
};
var _elm_community$intdict$IntDict$KeyPrefix = F2(
	function (a, b) {
		return {prefixBits: a, branchingBit: b};
	});
var _elm_community$intdict$IntDict$InnerType = F4(
	function (a, b, c, d) {
		return {prefix: a, left: b, right: c, size: d};
	});
var _elm_community$intdict$IntDict$Inner = function (a) {
	return {ctor: 'Inner', _0: a};
};
var _elm_community$intdict$IntDict$inner = F3(
	function (p, l, r) {
		var _p17 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p17._0.ctor === 'Empty') {
			return r;
		} else {
			if (_p17._1.ctor === 'Empty') {
				return l;
			} else {
				return _elm_community$intdict$IntDict$Inner(
					{
						prefix: p,
						left: l,
						right: r,
						size: _elm_community$intdict$IntDict$size(l) + _elm_community$intdict$IntDict$size(r)
					});
			}
		}
	});
var _elm_community$intdict$IntDict$Leaf = function (a) {
	return {ctor: 'Leaf', _0: a};
};
var _elm_community$intdict$IntDict$leaf = F2(
	function (k, v) {
		return _elm_community$intdict$IntDict$Leaf(
			{key: k, value: v});
	});
var _elm_community$intdict$IntDict$singleton = F2(
	function (key, value) {
		return A2(_elm_community$intdict$IntDict$leaf, key, value);
	});
var _elm_community$intdict$IntDict$Empty = {ctor: 'Empty'};
var _elm_community$intdict$IntDict$empty = _elm_community$intdict$IntDict$Empty;
var _elm_community$intdict$IntDict$update = F3(
	function (key, alter, dict) {
		var join = F2(
			function (_p19, _p18) {
				var _p20 = _p19;
				var _p24 = _p20._1;
				var _p21 = _p18;
				var _p23 = _p21._1;
				var _p22 = _p21._0;
				var prefix = A2(_elm_community$intdict$IntDict$lcp, _p20._0, _p22);
				return A2(_elm_community$intdict$IntDict$isBranchingBitSet, prefix, _p22) ? A3(_elm_community$intdict$IntDict$inner, prefix, _p24, _p23) : A3(_elm_community$intdict$IntDict$inner, prefix, _p23, _p24);
			});
		var alteredNode = function (mv) {
			var _p25 = alter(mv);
			if (_p25.ctor === 'Just') {
				return A2(_elm_community$intdict$IntDict$leaf, key, _p25._0);
			} else {
				return _elm_community$intdict$IntDict$empty;
			}
		};
		var _p26 = dict;
		switch (_p26.ctor) {
			case 'Empty':
				return alteredNode(_elm_lang$core$Maybe$Nothing);
			case 'Leaf':
				var _p27 = _p26._0;
				return _elm_lang$core$Native_Utils.eq(_p27.key, key) ? alteredNode(
					_elm_lang$core$Maybe$Just(_p27.value)) : A2(
					join,
					{
						ctor: '_Tuple2',
						_0: key,
						_1: alteredNode(_elm_lang$core$Maybe$Nothing)
					},
					{ctor: '_Tuple2', _0: _p27.key, _1: dict});
			default:
				var _p28 = _p26._0;
				return A2(_elm_community$intdict$IntDict$prefixMatches, _p28.prefix, key) ? (A2(_elm_community$intdict$IntDict$isBranchingBitSet, _p28.prefix, key) ? A3(
					_elm_community$intdict$IntDict$inner,
					_p28.prefix,
					_p28.left,
					A3(_elm_community$intdict$IntDict$update, key, alter, _p28.right)) : A3(
					_elm_community$intdict$IntDict$inner,
					_p28.prefix,
					A3(_elm_community$intdict$IntDict$update, key, alter, _p28.left),
					_p28.right)) : A2(
					join,
					{
						ctor: '_Tuple2',
						_0: key,
						_1: alteredNode(_elm_lang$core$Maybe$Nothing)
					},
					{ctor: '_Tuple2', _0: _p28.prefix.prefixBits, _1: dict});
		}
	});
var _elm_community$intdict$IntDict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_community$intdict$IntDict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_community$intdict$IntDict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_community$intdict$IntDict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_community$intdict$IntDict$filter = F2(
	function (predicate, dict) {
		var add = F3(
			function (k, v, d) {
				return A2(predicate, k, v) ? A3(_elm_community$intdict$IntDict$insert, k, v, d) : d;
			});
		return A3(_elm_community$intdict$IntDict$foldl, add, _elm_community$intdict$IntDict$empty, dict);
	});
var _elm_community$intdict$IntDict$map = F2(
	function (f, dict) {
		var _p29 = dict;
		switch (_p29.ctor) {
			case 'Empty':
				return _elm_community$intdict$IntDict$empty;
			case 'Leaf':
				var _p30 = _p29._0;
				return A2(
					_elm_community$intdict$IntDict$leaf,
					_p30.key,
					A2(f, _p30.key, _p30.value));
			default:
				var _p31 = _p29._0;
				return A3(
					_elm_community$intdict$IntDict$inner,
					_p31.prefix,
					A2(_elm_community$intdict$IntDict$map, f, _p31.left),
					A2(_elm_community$intdict$IntDict$map, f, _p31.right));
		}
	});
var _elm_community$intdict$IntDict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p32) {
				var _p33 = _p32;
				var _p35 = _p33._1;
				var _p34 = _p33._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_community$intdict$IntDict$insert, key, value, _p34),
					_1: _p35
				} : {
					ctor: '_Tuple2',
					_0: _p34,
					_1: A3(_elm_community$intdict$IntDict$insert, key, value, _p35)
				};
			});
		return A3(
			_elm_community$intdict$IntDict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_community$intdict$IntDict$empty, _1: _elm_community$intdict$IntDict$empty},
			dict);
	});
var _elm_community$intdict$IntDict$fromList = function (pairs) {
	return A3(
		_elm_lang$core$List$foldl,
		_elm_lang$core$Basics$uncurry(_elm_community$intdict$IntDict$insert),
		_elm_community$intdict$IntDict$empty,
		pairs);
};
var _elm_community$intdict$IntDict$Right = {ctor: 'Right'};
var _elm_community$intdict$IntDict$Left = {ctor: 'Left'};
var _elm_community$intdict$IntDict$Disjunct = F2(
	function (a, b) {
		return {ctor: 'Disjunct', _0: a, _1: b};
	});
var _elm_community$intdict$IntDict$Parent = F2(
	function (a, b) {
		return {ctor: 'Parent', _0: a, _1: b};
	});
var _elm_community$intdict$IntDict$SamePrefix = {ctor: 'SamePrefix'};
var _elm_community$intdict$IntDict$determineBranchRelation = F2(
	function (l, r) {
		var childEdge = F2(
			function (prefix, c) {
				return A2(_elm_community$intdict$IntDict$isBranchingBitSet, prefix, c.prefix.prefixBits) ? _elm_community$intdict$IntDict$Right : _elm_community$intdict$IntDict$Left;
			});
		var rp = r.prefix;
		var lp = l.prefix;
		var mask = _elm_community$intdict$IntDict$highestBitSet(
			A2(_elm_lang$core$Basics$max, lp.branchingBit, rp.branchingBit));
		var modifiedRightPrefix = A3(_elm_community$intdict$IntDict$combineBits, rp.prefixBits, ~lp.prefixBits, mask);
		var prefix = A2(_elm_community$intdict$IntDict$lcp, lp.prefixBits, modifiedRightPrefix);
		return _elm_lang$core$Native_Utils.eq(lp, rp) ? _elm_community$intdict$IntDict$SamePrefix : (_elm_lang$core$Native_Utils.eq(prefix, lp) ? A2(
			_elm_community$intdict$IntDict$Parent,
			_elm_community$intdict$IntDict$Left,
			A2(childEdge, l.prefix, r)) : (_elm_lang$core$Native_Utils.eq(prefix, rp) ? A2(
			_elm_community$intdict$IntDict$Parent,
			_elm_community$intdict$IntDict$Right,
			A2(childEdge, r.prefix, l)) : A2(
			_elm_community$intdict$IntDict$Disjunct,
			prefix,
			A2(childEdge, prefix, l))));
	});
var _elm_community$intdict$IntDict$uniteWith = F3(
	function (merger, l, r) {
		var mergeWith = F3(
			function (key, left, right) {
				var _p36 = {ctor: '_Tuple2', _0: left, _1: right};
				if (_p36._0.ctor === 'Just') {
					if (_p36._1.ctor === 'Just') {
						return _elm_lang$core$Maybe$Just(
							A3(merger, key, _p36._0._0, _p36._1._0));
					} else {
						return left;
					}
				} else {
					if (_p36._1.ctor === 'Just') {
						return right;
					} else {
						return _elm_lang$core$Native_Utils.crashCase(
							'IntDict',
							{
								start: {line: 427, column: 7},
								end: {line: 432, column: 144}
							},
							_p36)('IntDict.uniteWith: mergeWith was called with 2 Nothings. This is a bug in the implementation, please file a bug report!');
					}
				}
			});
		var _p38 = {ctor: '_Tuple2', _0: l, _1: r};
		_v28_2:
		do {
			_v28_1:
			do {
				switch (_p38._0.ctor) {
					case 'Empty':
						return r;
					case 'Leaf':
						switch (_p38._1.ctor) {
							case 'Empty':
								break _v28_1;
							case 'Leaf':
								break _v28_2;
							default:
								break _v28_2;
						}
					default:
						switch (_p38._1.ctor) {
							case 'Empty':
								break _v28_1;
							case 'Leaf':
								var _p40 = _p38._1._0;
								return A3(
									_elm_community$intdict$IntDict$update,
									_p40.key,
									function (l_) {
										return A3(
											mergeWith,
											_p40.key,
											l_,
											_elm_lang$core$Maybe$Just(_p40.value));
									},
									l);
							default:
								var _p43 = _p38._1._0;
								var _p42 = _p38._0._0;
								var _p41 = A2(_elm_community$intdict$IntDict$determineBranchRelation, _p42, _p43);
								switch (_p41.ctor) {
									case 'SamePrefix':
										return A3(
											_elm_community$intdict$IntDict$inner,
											_p42.prefix,
											A3(_elm_community$intdict$IntDict$uniteWith, merger, _p42.left, _p43.left),
											A3(_elm_community$intdict$IntDict$uniteWith, merger, _p42.right, _p43.right));
									case 'Parent':
										if (_p41._0.ctor === 'Left') {
											if (_p41._1.ctor === 'Right') {
												return A3(
													_elm_community$intdict$IntDict$inner,
													_p42.prefix,
													_p42.left,
													A3(_elm_community$intdict$IntDict$uniteWith, merger, _p42.right, r));
											} else {
												return A3(
													_elm_community$intdict$IntDict$inner,
													_p42.prefix,
													A3(_elm_community$intdict$IntDict$uniteWith, merger, _p42.left, r),
													_p42.right);
											}
										} else {
											if (_p41._1.ctor === 'Right') {
												return A3(
													_elm_community$intdict$IntDict$inner,
													_p43.prefix,
													_p43.left,
													A3(_elm_community$intdict$IntDict$uniteWith, merger, l, _p43.right));
											} else {
												return A3(
													_elm_community$intdict$IntDict$inner,
													_p43.prefix,
													A3(_elm_community$intdict$IntDict$uniteWith, merger, l, _p43.left),
													_p43.right);
											}
										}
									default:
										if (_p41._1.ctor === 'Left') {
											return A3(_elm_community$intdict$IntDict$inner, _p41._0, l, r);
										} else {
											return A3(_elm_community$intdict$IntDict$inner, _p41._0, r, l);
										}
								}
						}
				}
			} while(false);
			return l;
		} while(false);
		var _p39 = _p38._0._0;
		return A3(
			_elm_community$intdict$IntDict$update,
			_p39.key,
			function (r_) {
				return A3(
					mergeWith,
					_p39.key,
					_elm_lang$core$Maybe$Just(_p39.value),
					r_);
			},
			r);
	});
var _elm_community$intdict$IntDict$union = _elm_community$intdict$IntDict$uniteWith(
	F3(
		function (key, old, $new) {
			return old;
		}));
var _elm_community$intdict$IntDict$intersect = F2(
	function (l, r) {
		intersect:
		while (true) {
			var _p44 = {ctor: '_Tuple2', _0: l, _1: r};
			_v30_2:
			do {
				_v30_1:
				do {
					switch (_p44._0.ctor) {
						case 'Empty':
							return _elm_community$intdict$IntDict$Empty;
						case 'Leaf':
							switch (_p44._1.ctor) {
								case 'Empty':
									break _v30_1;
								case 'Leaf':
									break _v30_2;
								default:
									break _v30_2;
							}
						default:
							switch (_p44._1.ctor) {
								case 'Empty':
									break _v30_1;
								case 'Leaf':
									var _p46 = _p44._1._0;
									var _p45 = A2(_elm_community$intdict$IntDict$get, _p46.key, l);
									if (_p45.ctor === 'Just') {
										return A2(_elm_community$intdict$IntDict$leaf, _p46.key, _p45._0);
									} else {
										return _elm_community$intdict$IntDict$Empty;
									}
								default:
									var _p49 = _p44._1._0;
									var _p48 = _p44._0._0;
									var _p47 = A2(_elm_community$intdict$IntDict$determineBranchRelation, _p48, _p49);
									switch (_p47.ctor) {
										case 'SamePrefix':
											return A3(
												_elm_community$intdict$IntDict$inner,
												_p48.prefix,
												A2(_elm_community$intdict$IntDict$intersect, _p48.left, _p49.left),
												A2(_elm_community$intdict$IntDict$intersect, _p48.right, _p49.right));
										case 'Parent':
											if (_p47._0.ctor === 'Left') {
												if (_p47._1.ctor === 'Right') {
													var _v33 = _p48.right,
														_v34 = r;
													l = _v33;
													r = _v34;
													continue intersect;
												} else {
													var _v35 = _p48.left,
														_v36 = r;
													l = _v35;
													r = _v36;
													continue intersect;
												}
											} else {
												if (_p47._1.ctor === 'Right') {
													var _v37 = l,
														_v38 = _p49.right;
													l = _v37;
													r = _v38;
													continue intersect;
												} else {
													var _v39 = l,
														_v40 = _p49.left;
													l = _v39;
													r = _v40;
													continue intersect;
												}
											}
										default:
											return _elm_community$intdict$IntDict$Empty;
									}
							}
					}
				} while(false);
				return _elm_community$intdict$IntDict$Empty;
			} while(false);
			return A2(_elm_community$intdict$IntDict$member, _p44._0._0.key, r) ? l : _elm_community$intdict$IntDict$Empty;
		}
	});
var _elm_community$intdict$IntDict$diff = F2(
	function (l, r) {
		diff:
		while (true) {
			var _p50 = {ctor: '_Tuple2', _0: l, _1: r};
			_v41_2:
			do {
				_v41_1:
				do {
					switch (_p50._0.ctor) {
						case 'Empty':
							return _elm_community$intdict$IntDict$Empty;
						case 'Leaf':
							switch (_p50._1.ctor) {
								case 'Empty':
									break _v41_1;
								case 'Leaf':
									break _v41_2;
								default:
									break _v41_2;
							}
						default:
							switch (_p50._1.ctor) {
								case 'Empty':
									break _v41_1;
								case 'Leaf':
									return A2(_elm_community$intdict$IntDict$remove, _p50._1._0.key, l);
								default:
									var _p53 = _p50._1._0;
									var _p52 = _p50._0._0;
									var _p51 = A2(_elm_community$intdict$IntDict$determineBranchRelation, _p52, _p53);
									switch (_p51.ctor) {
										case 'SamePrefix':
											return A3(
												_elm_community$intdict$IntDict$inner,
												_p52.prefix,
												A2(_elm_community$intdict$IntDict$diff, _p52.left, _p53.left),
												A2(_elm_community$intdict$IntDict$diff, _p52.right, _p53.right));
										case 'Parent':
											if (_p51._0.ctor === 'Left') {
												if (_p51._1.ctor === 'Left') {
													return A3(
														_elm_community$intdict$IntDict$inner,
														_p52.prefix,
														A2(_elm_community$intdict$IntDict$diff, _p52.left, r),
														_p52.right);
												} else {
													return A3(
														_elm_community$intdict$IntDict$inner,
														_p52.prefix,
														_p52.left,
														A2(_elm_community$intdict$IntDict$diff, _p52.right, r));
												}
											} else {
												if (_p51._1.ctor === 'Left') {
													var _v43 = l,
														_v44 = _p53.left;
													l = _v43;
													r = _v44;
													continue diff;
												} else {
													var _v45 = l,
														_v46 = _p53.right;
													l = _v45;
													r = _v46;
													continue diff;
												}
											}
										default:
											return l;
									}
							}
					}
				} while(false);
				return l;
			} while(false);
			return A2(_elm_community$intdict$IntDict$member, _p50._0._0.key, r) ? _elm_community$intdict$IntDict$Empty : l;
		}
	});
var _elm_community$intdict$IntDict$merge = F6(
	function (left, both, right, l, r, acc) {
		var m = A3(_elm_community$intdict$IntDict$merge, left, both, right);
		var _p54 = {ctor: '_Tuple2', _0: l, _1: r};
		_v47_2:
		do {
			_v47_1:
			do {
				switch (_p54._0.ctor) {
					case 'Empty':
						return A3(_elm_community$intdict$IntDict$foldl, right, acc, r);
					case 'Leaf':
						switch (_p54._1.ctor) {
							case 'Empty':
								break _v47_1;
							case 'Leaf':
								break _v47_2;
							default:
								break _v47_2;
						}
					default:
						switch (_p54._1.ctor) {
							case 'Empty':
								break _v47_1;
							case 'Leaf':
								var _p58 = _p54._1._0;
								var _p57 = A2(_elm_community$intdict$IntDict$get, _p58.key, l);
								if (_p57.ctor === 'Nothing') {
									return A3(
										m,
										l,
										_elm_community$intdict$IntDict$Empty,
										A3(right, _p58.key, _p58.value, acc));
								} else {
									return A3(
										m,
										A2(_elm_community$intdict$IntDict$remove, _p58.key, l),
										_elm_community$intdict$IntDict$Empty,
										A4(both, _p58.key, _p57._0, _p58.value, acc));
								}
							default:
								var _p61 = _p54._1._0;
								var _p60 = _p54._0._0;
								var _p59 = A2(_elm_community$intdict$IntDict$determineBranchRelation, _p60, _p61);
								switch (_p59.ctor) {
									case 'SamePrefix':
										return A3(
											m,
											_p60.right,
											_p61.right,
											A3(m, _p60.left, _p61.left, acc));
									case 'Parent':
										if (_p59._0.ctor === 'Left') {
											if (_p59._1.ctor === 'Left') {
												return A3(
													m,
													_p60.right,
													_elm_community$intdict$IntDict$Empty,
													A3(m, _p60.left, r, acc));
											} else {
												return A3(
													m,
													_p60.right,
													r,
													A3(m, _p60.left, _elm_community$intdict$IntDict$Empty, acc));
											}
										} else {
											if (_p59._1.ctor === 'Left') {
												return A3(
													m,
													_elm_community$intdict$IntDict$Empty,
													_p61.right,
													A3(m, l, _p61.left, acc));
											} else {
												return A3(
													m,
													l,
													_p61.right,
													A3(m, _elm_community$intdict$IntDict$Empty, _p61.left, acc));
											}
										}
									default:
										if (_p59._1.ctor === 'Left') {
											return A3(
												m,
												_elm_community$intdict$IntDict$Empty,
												r,
												A3(m, l, _elm_community$intdict$IntDict$Empty, acc));
										} else {
											return A3(
												m,
												l,
												_elm_community$intdict$IntDict$Empty,
												A3(m, _elm_community$intdict$IntDict$Empty, r, acc));
										}
								}
						}
				}
			} while(false);
			return A3(_elm_community$intdict$IntDict$foldl, left, acc, l);
		} while(false);
		var _p56 = _p54._0._0;
		var _p55 = A2(_elm_community$intdict$IntDict$get, _p56.key, r);
		if (_p55.ctor === 'Nothing') {
			return A3(
				m,
				_elm_community$intdict$IntDict$Empty,
				r,
				A3(left, _p56.key, _p56.value, acc));
		} else {
			return A3(
				m,
				_elm_community$intdict$IntDict$Empty,
				A2(_elm_community$intdict$IntDict$remove, _p56.key, r),
				A4(both, _p56.key, _p56.value, _p55._0, acc));
		}
	});

var _elm_community$graph$Graph$ignorePath = F4(
	function (visit, path, _p0, acc) {
		var _p1 = path;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Native_Utils.crashCase(
				'Graph',
				{
					start: {line: 1017, column: 5},
					end: {line: 1022, column: 26}
				},
				_p1)('Graph.ignorePath: No algorithm should ever pass an empty path into this BfsNodeVisitor.');
		} else {
			return A2(visit, _p1._0, acc);
		}
	});
var _elm_community$graph$Graph$onFinish = F3(
	function (visitor, ctx, acc) {
		return {
			ctor: '_Tuple2',
			_0: acc,
			_1: visitor(ctx)
		};
	});
var _elm_community$graph$Graph$onDiscovery = F3(
	function (visitor, ctx, acc) {
		return {
			ctor: '_Tuple2',
			_0: A2(visitor, ctx, acc),
			_1: _elm_lang$core$Basics$identity
		};
	});
var _elm_community$graph$Graph$alongIncomingEdges = function (ctx) {
	return _elm_community$intdict$IntDict$keys(ctx.incoming);
};
var _elm_community$graph$Graph$alongOutgoingEdges = function (ctx) {
	return _elm_community$intdict$IntDict$keys(ctx.outgoing);
};
var _elm_community$graph$Graph$applyEdgeDiff = F3(
	function (nodeId, diff, graphRep) {
		var updateOutgoingEdge = F2(
			function (upd, node) {
				return _elm_lang$core$Native_Utils.update(
					node,
					{
						outgoing: A3(_elm_community$intdict$IntDict$update, nodeId, upd, node.outgoing)
					});
			});
		var updateIncomingEdge = F2(
			function (upd, node) {
				return _elm_lang$core$Native_Utils.update(
					node,
					{
						incoming: A3(_elm_community$intdict$IntDict$update, nodeId, upd, node.incoming)
					});
			});
		var edgeUpdateToMaybe = function (edgeUpdate) {
			var _p3 = edgeUpdate;
			if (_p3.ctor === 'Insert') {
				return _elm_lang$core$Maybe$Just(_p3._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var updateAdjacency = F3(
			function (updateEdge, updatedId, edgeUpdate) {
				var updateLbl = updateEdge(
					_elm_lang$core$Basics$always(
						edgeUpdateToMaybe(edgeUpdate)));
				return A2(
					_elm_community$intdict$IntDict$update,
					updatedId,
					_elm_lang$core$Maybe$map(updateLbl));
			});
		var flippedFoldl = F3(
			function (f, dict, acc) {
				return A3(_elm_community$intdict$IntDict$foldl, f, acc, dict);
			});
		return A3(
			flippedFoldl,
			updateAdjacency(updateOutgoingEdge),
			diff.outgoing,
			A3(
				flippedFoldl,
				updateAdjacency(updateIncomingEdge),
				diff.incoming,
				graphRep));
	});
var _elm_community$graph$Graph$emptyDiff = {incoming: _elm_community$intdict$IntDict$empty, outgoing: _elm_community$intdict$IntDict$empty};
var _elm_community$graph$Graph$unGraph = function (graph) {
	var _p4 = graph;
	return _p4._0;
};
var _elm_community$graph$Graph$size = function (_p5) {
	return _elm_community$intdict$IntDict$size(
		_elm_community$graph$Graph$unGraph(_p5));
};
var _elm_community$graph$Graph$member = function (nodeId) {
	return function (_p6) {
		return A2(
			_elm_community$intdict$IntDict$member,
			nodeId,
			_elm_community$graph$Graph$unGraph(_p6));
	};
};
var _elm_community$graph$Graph$get = function (nodeId) {
	return function (_p7) {
		return A2(
			_elm_community$intdict$IntDict$get,
			nodeId,
			_elm_community$graph$Graph$unGraph(_p7));
	};
};
var _elm_community$graph$Graph$nodeIdRange = function (graph) {
	return A2(
		_elm_lang$core$Maybe$andThen,
		function (_p8) {
			var _p9 = _p8;
			return A2(
				_elm_lang$core$Maybe$andThen,
				function (_p10) {
					var _p11 = _p10;
					return _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p9._0, _1: _p11._0});
				},
				_elm_community$intdict$IntDict$findMax(
					_elm_community$graph$Graph$unGraph(graph)));
		},
		_elm_community$intdict$IntDict$findMin(
			_elm_community$graph$Graph$unGraph(graph)));
};
var _elm_community$graph$Graph$nodes = function (_p12) {
	return A2(
		_elm_lang$core$List$map,
		function (_) {
			return _.node;
		},
		_elm_community$intdict$IntDict$values(
			_elm_community$graph$Graph$unGraph(_p12)));
};
var _elm_community$graph$Graph$nodeIds = function (_p13) {
	return _elm_community$intdict$IntDict$keys(
		_elm_community$graph$Graph$unGraph(_p13));
};
var _elm_community$graph$Graph$edges = function (graph) {
	var flippedFoldl = F3(
		function (f, dict, list) {
			return A3(_elm_community$intdict$IntDict$foldl, f, list, dict);
		});
	var prependEdges = F2(
		function (node1, ctx) {
			return A2(
				flippedFoldl,
				F2(
					function (node2, e) {
						return F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(
							{to: node2, from: node1, label: e});
					}),
				ctx.outgoing);
		});
	return A3(
		flippedFoldl,
		prependEdges,
		_elm_community$graph$Graph$unGraph(graph),
		{ctor: '[]'});
};
var _elm_community$graph$Graph$toString = function (graph) {
	var edgeList = _elm_community$graph$Graph$edges(graph);
	var nodeList = _elm_community$graph$Graph$nodes(graph);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'Graph.fromNodesAndEdges ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(nodeList),
			A2(
				_elm_lang$core$Basics_ops['++'],
				' ',
				_elm_lang$core$Basics$toString(edgeList))));
};
var _elm_community$graph$Graph$Node = F2(
	function (a, b) {
		return {id: a, label: b};
	});
var _elm_community$graph$Graph$Edge = F3(
	function (a, b, c) {
		return {from: a, to: b, label: c};
	});
var _elm_community$graph$Graph$NodeContext = F3(
	function (a, b, c) {
		return {node: a, incoming: b, outgoing: c};
	});
var _elm_community$graph$Graph$EdgeDiff = F2(
	function (a, b) {
		return {incoming: a, outgoing: b};
	});
var _elm_community$graph$Graph$Graph = function (a) {
	return {ctor: 'Graph', _0: a};
};
var _elm_community$graph$Graph$empty = _elm_community$graph$Graph$Graph(_elm_community$intdict$IntDict$empty);
var _elm_community$graph$Graph$isEmpty = function (graph) {
	return _elm_lang$core$Native_Utils.eq(graph, _elm_community$graph$Graph$empty);
};
var _elm_community$graph$Graph$fromNodesAndEdges = F2(
	function (nodes, edges) {
		var addEdge = F2(
			function (edge, rep) {
				var updateIncoming = function (ctx) {
					return _elm_lang$core$Native_Utils.update(
						ctx,
						{
							incoming: A3(_elm_community$intdict$IntDict$insert, edge.from, edge.label, ctx.incoming)
						});
				};
				var updateOutgoing = function (ctx) {
					return _elm_lang$core$Native_Utils.update(
						ctx,
						{
							outgoing: A3(_elm_community$intdict$IntDict$insert, edge.to, edge.label, ctx.outgoing)
						});
				};
				return A3(
					_elm_community$intdict$IntDict$update,
					edge.to,
					_elm_lang$core$Maybe$map(updateIncoming),
					A3(
						_elm_community$intdict$IntDict$update,
						edge.from,
						_elm_lang$core$Maybe$map(updateOutgoing),
						rep));
			});
		var addEdgeIfValid = F2(
			function (edge, rep) {
				return (A2(_elm_community$intdict$IntDict$member, edge.from, rep) && A2(_elm_community$intdict$IntDict$member, edge.to, rep)) ? A2(addEdge, edge, rep) : rep;
			});
		var nodeRep = A3(
			_elm_lang$core$List$foldl,
			function (n) {
				return A2(
					_elm_community$intdict$IntDict$insert,
					n.id,
					A3(_elm_community$graph$Graph$NodeContext, n, _elm_community$intdict$IntDict$empty, _elm_community$intdict$IntDict$empty));
			},
			_elm_community$intdict$IntDict$empty,
			nodes);
		return _elm_community$graph$Graph$Graph(
			A3(_elm_lang$core$List$foldl, addEdgeIfValid, nodeRep, edges));
	});
var _elm_community$graph$Graph$fromNodeLabelsAndEdgePairs = F2(
	function (labels, edgePairs) {
		var edges = A2(
			_elm_lang$core$List$map,
			function (_p14) {
				var _p15 = _p14;
				return A3(
					_elm_community$graph$Graph$Edge,
					_p15._0,
					_p15._1,
					{ctor: '_Tuple0'});
			},
			edgePairs);
		var nodes = _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				F2(
					function (lbl, _p16) {
						var _p17 = _p16;
						var _p18 = _p17._0;
						return {
							ctor: '_Tuple2',
							_0: _p18 + 1,
							_1: {
								ctor: '::',
								_0: A2(_elm_community$graph$Graph$Node, _p18, lbl),
								_1: _p17._1
							}
						};
					}),
				{
					ctor: '_Tuple2',
					_0: 0,
					_1: {ctor: '[]'}
				},
				labels));
		return A2(_elm_community$graph$Graph$fromNodesAndEdges, nodes, edges);
	});
var _elm_community$graph$Graph$symmetricClosure = function (edgeMerger) {
	var orderedEdgeMerger = F4(
		function (from, to, outgoing, incoming) {
			return (_elm_lang$core$Native_Utils.cmp(from, to) < 1) ? A4(edgeMerger, from, to, outgoing, incoming) : A4(edgeMerger, to, from, incoming, outgoing);
		});
	var updateContext = F2(
		function (nodeId, ctx) {
			var edges = A3(
				_elm_community$intdict$IntDict$uniteWith,
				orderedEdgeMerger(nodeId),
				ctx.outgoing,
				ctx.incoming);
			return _elm_lang$core$Native_Utils.update(
				ctx,
				{outgoing: edges, incoming: edges});
		});
	return function (_p19) {
		return _elm_community$graph$Graph$Graph(
			A2(
				_elm_community$intdict$IntDict$map,
				updateContext,
				_elm_community$graph$Graph$unGraph(_p19)));
	};
};
var _elm_community$graph$Graph$reverseEdges = function () {
	var updateContext = F2(
		function (nodeId, ctx) {
			return _elm_lang$core$Native_Utils.update(
				ctx,
				{outgoing: ctx.incoming, incoming: ctx.outgoing});
		});
	return function (_p20) {
		return _elm_community$graph$Graph$Graph(
			A2(
				_elm_community$intdict$IntDict$map,
				updateContext,
				_elm_community$graph$Graph$unGraph(_p20)));
	};
}();
var _elm_community$graph$Graph$Remove = function (a) {
	return {ctor: 'Remove', _0: a};
};
var _elm_community$graph$Graph$Insert = function (a) {
	return {ctor: 'Insert', _0: a};
};
var _elm_community$graph$Graph$computeEdgeDiff = F2(
	function (old, $new) {
		var collectUpdates = F3(
			function (edgeUpdate, updatedId, label) {
				var replaceUpdate = function (old) {
					var _p21 = {
						ctor: '_Tuple2',
						_0: old,
						_1: edgeUpdate(label)
					};
					if (_p21._0.ctor === 'Just') {
						if (_p21._0._0.ctor === 'Remove') {
							if (_p21._1.ctor === 'Insert') {
								var _p22 = _p21._1._0;
								return _elm_lang$core$Native_Utils.eq(_p21._0._0._0, _p22) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
									_elm_community$graph$Graph$Insert(_p22));
							} else {
								return _elm_lang$core$Native_Utils.crashCase(
									'Graph',
									{
										start: {line: 255, column: 21},
										end: {line: 269, column: 36}
									},
									_p21)('Graph.computeEdgeDiff: Collected two removals for the same edge. This is an error in the implementation of Graph and you should file a bug report!');
							}
						} else {
							return _elm_lang$core$Native_Utils.crashCase(
								'Graph',
								{
									start: {line: 255, column: 21},
									end: {line: 269, column: 36}
								},
								_p21)('Graph.computeEdgeDiff: Collected inserts before removals. This is an error in the implementation of Graph and you should file a bug report!');
						}
					} else {
						return _elm_lang$core$Maybe$Just(_p21._1);
					}
				};
				return A2(_elm_community$intdict$IntDict$update, updatedId, replaceUpdate);
			});
		var collect = F3(
			function (edgeUpdate, adj, updates) {
				return A3(
					_elm_community$intdict$IntDict$foldl,
					collectUpdates(edgeUpdate),
					updates,
					adj);
			});
		var _p25 = {ctor: '_Tuple2', _0: old, _1: $new};
		if (_p25._0.ctor === 'Nothing') {
			if (_p25._1.ctor === 'Nothing') {
				return _elm_community$graph$Graph$emptyDiff;
			} else {
				var _p27 = _p25._1._0;
				return {
					outgoing: A3(collect, _elm_community$graph$Graph$Insert, _p27.incoming, _elm_community$intdict$IntDict$empty),
					incoming: A3(collect, _elm_community$graph$Graph$Insert, _p27.outgoing, _elm_community$intdict$IntDict$empty)
				};
			}
		} else {
			if (_p25._1.ctor === 'Nothing') {
				var _p26 = _p25._0._0;
				return {
					outgoing: A3(collect, _elm_community$graph$Graph$Remove, _p26.incoming, _elm_community$intdict$IntDict$empty),
					incoming: A3(collect, _elm_community$graph$Graph$Remove, _p26.outgoing, _elm_community$intdict$IntDict$empty)
				};
			} else {
				var _p29 = _p25._0._0;
				var _p28 = _p25._1._0;
				return _elm_lang$core$Native_Utils.eq(_p29, _p28) ? _elm_community$graph$Graph$emptyDiff : {
					outgoing: A3(
						collect,
						_elm_community$graph$Graph$Insert,
						_p28.incoming,
						A3(collect, _elm_community$graph$Graph$Remove, _p29.incoming, _elm_community$intdict$IntDict$empty)),
					incoming: A3(
						collect,
						_elm_community$graph$Graph$Insert,
						_p28.outgoing,
						A3(collect, _elm_community$graph$Graph$Remove, _p29.outgoing, _elm_community$intdict$IntDict$empty))
				};
			}
		}
	});
var _elm_community$graph$Graph$update = F2(
	function (nodeId, updater) {
		var wrappedUpdater = function (rep) {
			var filterInvalidEdges = function (ctx) {
				return _elm_community$intdict$IntDict$filter(
					F2(
						function (id, _p30) {
							return _elm_lang$core$Native_Utils.eq(id, ctx.node.id) || A2(_elm_community$intdict$IntDict$member, id, rep);
						}));
			};
			var cleanUpEdges = function (ctx) {
				return _elm_lang$core$Native_Utils.update(
					ctx,
					{
						incoming: A2(filterInvalidEdges, ctx, ctx.incoming),
						outgoing: A2(filterInvalidEdges, ctx, ctx.outgoing)
					});
			};
			var old = A2(_elm_community$intdict$IntDict$get, nodeId, rep);
			var $new = A2(
				_elm_lang$core$Maybe$map,
				cleanUpEdges,
				updater(old));
			var diff = A2(_elm_community$graph$Graph$computeEdgeDiff, old, $new);
			return A3(
				_elm_community$intdict$IntDict$update,
				nodeId,
				_elm_lang$core$Basics$always($new),
				A3(_elm_community$graph$Graph$applyEdgeDiff, nodeId, diff, rep));
		};
		return function (_p31) {
			return _elm_community$graph$Graph$Graph(
				wrappedUpdater(
					_elm_community$graph$Graph$unGraph(_p31)));
		};
	});
var _elm_community$graph$Graph$insert = F2(
	function (nodeContext, graph) {
		return A3(
			_elm_community$graph$Graph$update,
			nodeContext.node.id,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(nodeContext)),
			graph);
	});
var _elm_community$graph$Graph$inducedSubgraph = F2(
	function (nodeIds, graph) {
		var insertContextById = F2(
			function (nodeId, acc) {
				var _p32 = A2(_elm_community$graph$Graph$get, nodeId, graph);
				if (_p32.ctor === 'Just') {
					return A2(_elm_community$graph$Graph$insert, _p32._0, acc);
				} else {
					return acc;
				}
			});
		return A3(_elm_lang$core$List$foldl, insertContextById, _elm_community$graph$Graph$empty, nodeIds);
	});
var _elm_community$graph$Graph$remove = F2(
	function (nodeId, graph) {
		return A3(
			_elm_community$graph$Graph$update,
			nodeId,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			graph);
	});
var _elm_community$graph$Graph$fold = F3(
	function (f, acc, graph) {
		var go = F2(
			function (acc, graph1) {
				go:
				while (true) {
					var maybeContext = A2(
						_elm_lang$core$Maybe$andThen,
						function (id) {
							return A2(_elm_community$graph$Graph$get, id, graph);
						},
						A2(
							_elm_lang$core$Maybe$map,
							_elm_lang$core$Tuple$first,
							_elm_community$graph$Graph$nodeIdRange(graph1)));
					var _p33 = maybeContext;
					if (_p33.ctor === 'Just') {
						var _p34 = _p33._0;
						var _v11 = A2(f, _p34, acc),
							_v12 = A2(_elm_community$graph$Graph$remove, _p34.node.id, graph1);
						acc = _v11;
						graph1 = _v12;
						continue go;
					} else {
						return acc;
					}
				}
			});
		return A2(go, acc, graph);
	});
var _elm_community$graph$Graph$mapContexts = function (f) {
	return A2(
		_elm_community$graph$Graph$fold,
		function (ctx) {
			return _elm_community$graph$Graph$insert(
				f(ctx));
		},
		_elm_community$graph$Graph$empty);
};
var _elm_community$graph$Graph$mapNodes = function (f) {
	return A2(
		_elm_community$graph$Graph$fold,
		function (ctx) {
			return _elm_community$graph$Graph$insert(
				_elm_lang$core$Native_Utils.update(
					ctx,
					{
						node: {
							id: ctx.node.id,
							label: f(ctx.node.label)
						}
					}));
		},
		_elm_community$graph$Graph$empty);
};
var _elm_community$graph$Graph$mapEdges = function (f) {
	return A2(
		_elm_community$graph$Graph$fold,
		function (ctx) {
			return _elm_community$graph$Graph$insert(
				_elm_lang$core$Native_Utils.update(
					ctx,
					{
						outgoing: A2(
							_elm_community$intdict$IntDict$map,
							F2(
								function (n, e) {
									return f(e);
								}),
							ctx.outgoing),
						incoming: A2(
							_elm_community$intdict$IntDict$map,
							F2(
								function (n, e) {
									return f(e);
								}),
							ctx.incoming)
					}));
		},
		_elm_community$graph$Graph$empty);
};
var _elm_community$graph$Graph$guidedDfs = F5(
	function (selectNeighbors, visitNode, seeds, acc, graph) {
		var go = F3(
			function (seeds, acc, graph) {
				go:
				while (true) {
					var _p35 = seeds;
					if (_p35.ctor === '[]') {
						return {ctor: '_Tuple2', _0: acc, _1: graph};
					} else {
						var _p41 = _p35._1;
						var _p40 = _p35._0;
						var _p36 = A2(_elm_community$graph$Graph$get, _p40, graph);
						if (_p36.ctor === 'Nothing') {
							var _v15 = _p41,
								_v16 = acc,
								_v17 = graph;
							seeds = _v15;
							acc = _v16;
							graph = _v17;
							continue go;
						} else {
							var _p39 = _p36._0;
							var _p37 = A2(visitNode, _p39, acc);
							var accAfterDiscovery = _p37._0;
							var finishNode = _p37._1;
							var _p38 = A3(
								go,
								selectNeighbors(_p39),
								accAfterDiscovery,
								A2(_elm_community$graph$Graph$remove, _p40, graph));
							var accBeforeFinish = _p38._0;
							var graph1 = _p38._1;
							var accAfterFinish = finishNode(accBeforeFinish);
							var _v18 = _p41,
								_v19 = accAfterFinish,
								_v20 = graph1;
							seeds = _v18;
							acc = _v19;
							graph = _v20;
							continue go;
						}
					}
				}
			});
		return A3(go, seeds, acc, graph);
	});
var _elm_community$graph$Graph$dfs = F3(
	function (visitNode, acc, graph) {
		return _elm_lang$core$Tuple$first(
			A5(
				_elm_community$graph$Graph$guidedDfs,
				_elm_community$graph$Graph$alongOutgoingEdges,
				visitNode,
				_elm_community$graph$Graph$nodeIds(graph),
				acc,
				graph));
	});
var _elm_community$graph$Graph$dfsForest = F2(
	function (seeds, graph) {
		var visitNode = F2(
			function (ctx, trees) {
				return {
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: function (children) {
						return {
							ctor: '::',
							_0: A2(_elm_community$graph$Graph_Tree$inner, ctx, children),
							_1: trees
						};
					}
				};
			});
		return _elm_lang$core$List$reverse(
			_elm_lang$core$Tuple$first(
				A5(
					_elm_community$graph$Graph$guidedDfs,
					_elm_community$graph$Graph$alongOutgoingEdges,
					visitNode,
					seeds,
					{ctor: '[]'},
					graph)));
	});
var _elm_community$graph$Graph$dfsTree = F2(
	function (seed, graph) {
		var _p42 = A2(
			_elm_community$graph$Graph$dfsForest,
			{
				ctor: '::',
				_0: seed,
				_1: {ctor: '[]'}
			},
			graph);
		if (_p42.ctor === '[]') {
			return _elm_community$graph$Graph_Tree$empty;
		} else {
			if (_p42._1.ctor === '[]') {
				return _p42._0;
			} else {
				return _elm_lang$core$Native_Utils.crashCase(
					'Graph',
					{
						start: {line: 953, column: 5},
						end: {line: 961, column: 126}
					},
					_p42)('dfsTree: There can\'t be more than one DFS tree. This invariant is violated, please report this bug.');
			}
		}
	});
var _elm_community$graph$Graph$stronglyConnectedComponents = function (graph) {
	var timestamps = A3(
		_elm_community$graph$Graph$dfs,
		_elm_community$graph$Graph$onFinish(
			function (_p44) {
				return F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(
					function (_) {
						return _.id;
					}(
						function (_) {
							return _.node;
						}(_p44)));
			}),
		{ctor: '[]'},
		graph);
	var forest = A2(
		_elm_community$graph$Graph$dfsForest,
		timestamps,
		_elm_community$graph$Graph$reverseEdges(graph));
	var components = A2(
		_elm_lang$core$List$map,
		function (_p45) {
			return _elm_community$graph$Graph$reverseEdges(
				A3(
					_elm_lang$core$List$foldr,
					_elm_community$graph$Graph$insert,
					_elm_community$graph$Graph$empty,
					_elm_community$graph$Graph_Tree$preOrderList(_p45)));
		},
		forest);
	return components;
};
var _elm_community$graph$Graph$topologicalSort = function (graph) {
	var unwrapSingleNodeGraph = function (g) {
		var _p46 = _elm_community$graph$Graph$nodeIdRange(g);
		if (_p46.ctor === 'Nothing') {
			return _elm_lang$core$Native_Utils.crashCase(
				'Graph',
				{
					start: {line: 1198, column: 13},
					end: {line: 1208, column: 32}
				},
				_p46)('Invariant hurt in Graph.topologicalSort: No strongly connected component should be empty');
		} else {
			var _p48 = A2(_elm_community$graph$Graph$get, _p46._0._0, g);
			if (_p48.ctor === 'Nothing') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Graph',
					{
						start: {line: 1203, column: 21},
						end: {line: 1208, column: 32}
					},
					_p48)('Invariant hurt in Graph.topologicalSort: nodeId in nodeIdRange of the strongly connected component should be present in the original graph');
			} else {
				return _p48._0;
			}
		}
	};
	var scc = _elm_community$graph$Graph$stronglyConnectedComponents(graph);
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(scc),
		_elm_community$graph$Graph$size(graph)) ? _elm_lang$core$Result$Ok(
		A2(_elm_lang$core$List$map, unwrapSingleNodeGraph, scc)) : _elm_lang$core$Result$Err(scc);
};
var _elm_community$graph$Graph$guidedBfs = F5(
	function (selectNeighbors, visitNode, seeds, acc, graph) {
		var enqueueMany = F4(
			function (distance, parentPath, nodeIds, queue) {
				return A3(
					_elm_lang$core$List$foldl,
					_avh4$elm_fifo$Fifo$insert,
					queue,
					A2(
						_elm_lang$core$List$map,
						function (id) {
							return {ctor: '_Tuple3', _0: id, _1: parentPath, _2: distance};
						},
						nodeIds));
			});
		var go = F3(
			function (seeds, acc, graph) {
				go:
				while (true) {
					var _p50 = _avh4$elm_fifo$Fifo$remove(seeds);
					if (_p50._0.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: acc, _1: graph};
					} else {
						var _p55 = _p50._1;
						var _p54 = _p50._0._0._0;
						var _p53 = _p50._0._0._2;
						var _p51 = A2(_elm_community$graph$Graph$get, _p54, graph);
						if (_p51.ctor === 'Nothing') {
							var _v26 = _p55,
								_v27 = acc,
								_v28 = graph;
							seeds = _v26;
							acc = _v27;
							graph = _v28;
							continue go;
						} else {
							var _p52 = _p51._0;
							var path = {ctor: '::', _0: _p52, _1: _p50._0._0._1};
							var accAfterVisit = A3(visitNode, path, _p53, acc);
							var seeds2 = A4(
								enqueueMany,
								_p53 + 1,
								path,
								selectNeighbors(_p52),
								_p55);
							var _v29 = seeds2,
								_v30 = accAfterVisit,
								_v31 = A2(_elm_community$graph$Graph$remove, _p54, graph);
							seeds = _v29;
							acc = _v30;
							graph = _v31;
							continue go;
						}
					}
				}
			});
		return A3(
			go,
			A4(
				enqueueMany,
				0,
				{ctor: '[]'},
				seeds,
				_avh4$elm_fifo$Fifo$empty),
			acc,
			graph);
	});
var _elm_community$graph$Graph$bfs = F3(
	function (visitNode, acc, graph) {
		bfs:
		while (true) {
			var _p56 = _elm_community$graph$Graph$nodeIdRange(graph);
			if (_p56.ctor === 'Nothing') {
				return acc;
			} else {
				var _p57 = A5(
					_elm_community$graph$Graph$guidedBfs,
					_elm_community$graph$Graph$alongOutgoingEdges,
					visitNode,
					{
						ctor: '::',
						_0: _p56._0._0,
						_1: {ctor: '[]'}
					},
					acc,
					graph);
				var finalAcc = _p57._0;
				var restgraph1 = _p57._1;
				var _v33 = visitNode,
					_v34 = finalAcc,
					_v35 = restgraph1;
				visitNode = _v33;
				acc = _v34;
				graph = _v35;
				continue bfs;
			}
		}
	});
var _elm_community$graph$Graph$heightLevels = function (graph) {
	var subtract = F2(
		function (a, b) {
			return b - a;
		});
	var decrementAndNoteSources = F3(
		function (id, _p59, _p58) {
			var _p60 = _p58;
			var _p64 = _p60._0;
			var indegreesDec = A3(
				_elm_community$intdict$IntDict$update,
				id,
				_elm_lang$core$Maybe$map(
					subtract(1)),
				_p60._1);
			var _p61 = A2(_elm_community$intdict$IntDict$get, id, indegreesDec);
			if ((_p61.ctor === 'Just') && (_p61._0 === 0)) {
				var _p62 = A2(_elm_community$graph$Graph$get, id, graph);
				if (_p62.ctor === 'Just') {
					return {
						ctor: '_Tuple2',
						_0: {ctor: '::', _0: _p62._0, _1: _p64},
						_1: indegreesDec
					};
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'Graph',
						{
							start: {line: 1150, column: 21},
							end: {line: 1155, column: 157}
						},
						_p62)('Graph.heightLevels: Could not get a node of a graph which should be there by invariants. Please file a bug report!');
				}
			} else {
				return {ctor: '_Tuple2', _0: _p64, _1: indegreesDec};
			}
		});
	var decrementIndegrees = F3(
		function (source, nextLevel, indegrees) {
			return A3(
				_elm_community$intdict$IntDict$foldl,
				decrementAndNoteSources,
				{ctor: '_Tuple2', _0: nextLevel, _1: indegrees},
				source.outgoing);
		});
	var go = F4(
		function (currentLevel, nextLevel, indegrees, graph) {
			var _p65 = {ctor: '_Tuple2', _0: currentLevel, _1: nextLevel};
			if (_p65._0.ctor === '[]') {
				if (_p65._1.ctor === '[]') {
					return {
						ctor: '::',
						_0: {ctor: '[]'},
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: {ctor: '[]'},
						_1: A4(
							go,
							nextLevel,
							{ctor: '[]'},
							indegrees,
							graph)
					};
				}
			} else {
				var _p69 = _p65._0._0;
				var _p66 = A3(decrementIndegrees, _p69, nextLevel, indegrees);
				var nextLevel1 = _p66._0;
				var indegrees1 = _p66._1;
				var _p67 = A4(
					go,
					_p65._0._1,
					nextLevel1,
					indegrees1,
					A2(_elm_community$graph$Graph$remove, _p69.node.id, graph));
				if (_p67.ctor === '[]') {
					return _elm_lang$core$Native_Utils.crashCase(
						'Graph',
						{
							start: {line: 1176, column: 21},
							end: {line: 1181, column: 56}
						},
						_p67)('Graph.heightLevels: Reached a branch which is impossible by invariants. Please file a bug report!');
				} else {
					return {
						ctor: '::',
						_0: {ctor: '::', _0: _p69, _1: _p67._0},
						_1: _p67._1
					};
				}
			}
		});
	var countIndegrees = A2(
		_elm_community$graph$Graph$fold,
		function (ctx) {
			return A2(
				_elm_community$intdict$IntDict$insert,
				ctx.node.id,
				_elm_community$intdict$IntDict$size(ctx.incoming));
		},
		_elm_community$intdict$IntDict$empty);
	var sources = A3(
		_elm_community$graph$Graph$fold,
		F2(
			function (ctx, acc) {
				return _elm_community$intdict$IntDict$isEmpty(ctx.incoming) ? {ctor: '::', _0: ctx, _1: acc} : acc;
			}),
		{ctor: '[]'},
		graph);
	return A4(
		go,
		sources,
		{ctor: '[]'},
		countIndegrees(graph),
		graph);
};

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p0 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p0._0.ctor === '[]') {
			return true;
		} else {
			if (_p0._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p0._0._1, _p0._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v11 = _p21._0._1,
					_v12 = tail,
					_v13 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v11;
				list = _v12;
				accu = _v13;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v24_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v25 = _p37._0._1,
							_v26 = _p37._1._1,
							_v27 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v25;
						l2 = _v26;
						acc = _v27;
						continue interweaveHelp;
					} else {
						break _v24_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v24_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v32 = _p43._1;
				ll = _v32;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (i) {
				return A2(_elm_community$list_extra$List_Extra$splitAt, i, list);
			},
			A2(_elm_community$list_extra$List_Extra$findIndex, predicate, list));
	});
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v41 = predicate,
						_v42 = _p61._1;
					predicate = _v41;
					list = _v42;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v44 = f,
						_v45 = existing,
						_v46 = _p66;
					f = _v44;
					existing = _v45;
					remaining = _v46;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v48 = predicate,
						_v49 = _p67._1;
					predicate = _v48;
					list = _v49;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p68 = list;
				if (_p68.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p69 = _p68._0;
					if (predicate(_p69)) {
						var _v51 = {ctor: '::', _0: _p69, _1: memo},
							_v52 = _p68._1;
						memo = _v51;
						list = _v52;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v59 = index2,
						_v60 = index1,
						_v61 = l;
					index1 = _v59;
					index2 = _v60;
					l = _v61;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _elm_community$maybe_extra$Maybe_Extra$foldrValues = F2(
	function (item, list) {
		var _p0 = item;
		if (_p0.ctor === 'Nothing') {
			return list;
		} else {
			return {ctor: '::', _0: _p0._0, _1: list};
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$values = A2(
	_elm_lang$core$List$foldr,
	_elm_community$maybe_extra$Maybe_Extra$foldrValues,
	{ctor: '[]'});
var _elm_community$maybe_extra$Maybe_Extra$filter = F2(
	function (f, m) {
		var _p1 = A2(_elm_lang$core$Maybe$map, f, m);
		if ((_p1.ctor === 'Just') && (_p1._0 === true)) {
			return m;
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$traverseArray = function (f) {
	var step = F2(
		function (e, acc) {
			var _p2 = f(e);
			if (_p2.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$Array$push(_p2._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$Array$foldl,
		step,
		_elm_lang$core$Maybe$Just(_elm_lang$core$Array$empty));
};
var _elm_community$maybe_extra$Maybe_Extra$combineArray = _elm_community$maybe_extra$Maybe_Extra$traverseArray(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$traverse = function (f) {
	var step = F2(
		function (e, acc) {
			var _p3 = f(e);
			if (_p3.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(_p3._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$List$foldr,
		step,
		_elm_lang$core$Maybe$Just(
			{ctor: '[]'}));
};
var _elm_community$maybe_extra$Maybe_Extra$combine = _elm_community$maybe_extra$Maybe_Extra$traverse(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$toArray = function (m) {
	var _p4 = m;
	if (_p4.ctor === 'Nothing') {
		return _elm_lang$core$Array$empty;
	} else {
		return A2(_elm_lang$core$Array$repeat, 1, _p4._0);
	}
};
var _elm_community$maybe_extra$Maybe_Extra$toList = function (m) {
	var _p5 = m;
	if (_p5.ctor === 'Nothing') {
		return {ctor: '[]'};
	} else {
		return {
			ctor: '::',
			_0: _p5._0,
			_1: {ctor: '[]'}
		};
	}
};
var _elm_community$maybe_extra$Maybe_Extra$orElse = F2(
	function (ma, mb) {
		var _p6 = mb;
		if (_p6.ctor === 'Nothing') {
			return ma;
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orElseLazy = F2(
	function (fma, mb) {
		var _p7 = mb;
		if (_p7.ctor === 'Nothing') {
			return fma(
				{ctor: '_Tuple0'});
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orLazy = F2(
	function (ma, fmb) {
		var _p8 = ma;
		if (_p8.ctor === 'Nothing') {
			return fmb(
				{ctor: '_Tuple0'});
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$or = F2(
	function (ma, mb) {
		var _p9 = ma;
		if (_p9.ctor === 'Nothing') {
			return mb;
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$prev = _elm_lang$core$Maybe$map2(_elm_lang$core$Basics$always);
var _elm_community$maybe_extra$Maybe_Extra$next = _elm_lang$core$Maybe$map2(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));
var _elm_community$maybe_extra$Maybe_Extra$andMap = _elm_lang$core$Maybe$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _elm_community$maybe_extra$Maybe_Extra$unpack = F3(
	function (d, f, m) {
		var _p10 = m;
		if (_p10.ctor === 'Nothing') {
			return d(
				{ctor: '_Tuple0'});
		} else {
			return f(_p10._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$unwrap = F3(
	function (d, f, m) {
		var _p11 = m;
		if (_p11.ctor === 'Nothing') {
			return d;
		} else {
			return f(_p11._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$isJust = function (m) {
	var _p12 = m;
	if (_p12.ctor === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$isNothing = function (m) {
	var _p13 = m;
	if (_p13.ctor === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$join = function (mx) {
	var _p14 = mx;
	if (_p14.ctor === 'Just') {
		return _p14._0;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_community$maybe_extra$Maybe_Extra_ops = _elm_community$maybe_extra$Maybe_Extra_ops || {};
_elm_community$maybe_extra$Maybe_Extra_ops['?'] = F2(
	function (mx, x) {
		return A2(_elm_lang$core$Maybe$withDefault, x, mx);
	});

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var normHue = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, normHue, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(normHue, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(normHue, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

var _elm_lang$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: window.innerWidth,
		height: window.innerHeight
	}));
});

return {
	size: size
};

}();
var _elm_lang$window$Window_ops = _elm_lang$window$Window_ops || {};
_elm_lang$window$Window_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$window$Window$onSelfMsg = F3(
	function (router, dimensions, state) {
		var _p1 = state;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(dimensions));
			};
			return A2(
				_elm_lang$window$Window_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p1._0.subs)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$window$Window$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
var _elm_lang$window$Window$size = _elm_lang$window$Native_Window.size;
var _elm_lang$window$Window$width = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.width;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$height = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.height;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$onEffects = F3(
	function (router, newSubs, oldState) {
		var _p4 = {ctor: '_Tuple2', _0: oldState, _1: newSubs};
		if (_p4._0.ctor === 'Nothing') {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return _elm_lang$core$Task$succeed(
							_elm_lang$core$Maybe$Just(
								{subs: newSubs, pid: pid}));
					},
					_elm_lang$core$Process$spawn(
						A3(
							_elm_lang$dom$Dom_LowLevel$onWindow,
							'resize',
							_elm_lang$core$Json_Decode$succeed(
								{ctor: '_Tuple0'}),
							function (_p5) {
								return A2(
									_elm_lang$core$Task$andThen,
									_elm_lang$core$Platform$sendToSelf(router),
									_elm_lang$window$Window$size);
							})));
			}
		} else {
			if (_p4._1.ctor === '[]') {
				return A2(
					_elm_lang$window$Window_ops['&>'],
					_elm_lang$core$Process$kill(_p4._0._0.pid),
					_elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing));
			} else {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Maybe$Just(
						{subs: newSubs, pid: _p4._0._0.pid}));
			}
		}
	});
var _elm_lang$window$Window$subscription = _elm_lang$core$Native_Platform.leaf('Window');
var _elm_lang$window$Window$Size = F2(
	function (a, b) {
		return {width: a, height: b};
	});
var _elm_lang$window$Window$MySub = function (a) {
	return {ctor: 'MySub', _0: a};
};
var _elm_lang$window$Window$resizes = function (tagger) {
	return _elm_lang$window$Window$subscription(
		_elm_lang$window$Window$MySub(tagger));
};
var _elm_lang$window$Window$subMap = F2(
	function (func, _p6) {
		var _p7 = _p6;
		return _elm_lang$window$Window$MySub(
			function (_p8) {
				return func(
					_p7._0(_p8));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Window'] = {pkg: 'elm-lang/window', init: _elm_lang$window$Window$init, onEffects: _elm_lang$window$Window$onEffects, onSelfMsg: _elm_lang$window$Window$onSelfMsg, tag: 'sub', subMap: _elm_lang$window$Window$subMap};

var _fredcy$elm_parseint$ParseInt$charFromInt = function (i) {
	return (_elm_lang$core$Native_Utils.cmp(i, 10) < 0) ? _elm_lang$core$Char$fromCode(
		i + _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('0'))) : ((_elm_lang$core$Native_Utils.cmp(i, 36) < 0) ? _elm_lang$core$Char$fromCode(
		(i - 10) + _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('A'))) : _elm_lang$core$Native_Utils.crash(
		'ParseInt',
		{
			start: {line: 158, column: 9},
			end: {line: 158, column: 20}
		})(
		_elm_lang$core$Basics$toString(i)));
};
var _fredcy$elm_parseint$ParseInt$toRadixUnsafe = F2(
	function (radix, i) {
		return (_elm_lang$core$Native_Utils.cmp(i, radix) < 0) ? _elm_lang$core$String$fromChar(
			_fredcy$elm_parseint$ParseInt$charFromInt(i)) : A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_fredcy$elm_parseint$ParseInt$toRadixUnsafe, radix, (i / radix) | 0),
			_elm_lang$core$String$fromChar(
				_fredcy$elm_parseint$ParseInt$charFromInt(
					A2(_elm_lang$core$Basics_ops['%'], i, radix))));
	});
var _fredcy$elm_parseint$ParseInt$toOct = _fredcy$elm_parseint$ParseInt$toRadixUnsafe(8);
var _fredcy$elm_parseint$ParseInt$toHex = _fredcy$elm_parseint$ParseInt$toRadixUnsafe(16);
var _fredcy$elm_parseint$ParseInt$isBetween = F3(
	function (lower, upper, c) {
		var ci = _elm_lang$core$Char$toCode(c);
		return (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$Char$toCode(lower),
			ci) < 1) && (_elm_lang$core$Native_Utils.cmp(
			ci,
			_elm_lang$core$Char$toCode(upper)) < 1);
	});
var _fredcy$elm_parseint$ParseInt$charOffset = F2(
	function (basis, c) {
		return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(basis);
	});
var _fredcy$elm_parseint$ParseInt$InvalidRadix = function (a) {
	return {ctor: 'InvalidRadix', _0: a};
};
var _fredcy$elm_parseint$ParseInt$toRadix = F2(
	function (radix, i) {
		return ((_elm_lang$core$Native_Utils.cmp(2, radix) < 1) && (_elm_lang$core$Native_Utils.cmp(radix, 36) < 1)) ? ((_elm_lang$core$Native_Utils.cmp(i, 0) < 0) ? _elm_lang$core$Result$Ok(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'-',
				A2(_fredcy$elm_parseint$ParseInt$toRadixUnsafe, radix, 0 - i))) : _elm_lang$core$Result$Ok(
			A2(_fredcy$elm_parseint$ParseInt$toRadixUnsafe, radix, i))) : _elm_lang$core$Result$Err(
			_fredcy$elm_parseint$ParseInt$InvalidRadix(radix));
	});
var _fredcy$elm_parseint$ParseInt$OutOfRange = function (a) {
	return {ctor: 'OutOfRange', _0: a};
};
var _fredcy$elm_parseint$ParseInt$InvalidChar = function (a) {
	return {ctor: 'InvalidChar', _0: a};
};
var _fredcy$elm_parseint$ParseInt$intFromChar = F2(
	function (radix, c) {
		var validInt = function (i) {
			return (_elm_lang$core$Native_Utils.cmp(i, radix) < 0) ? _elm_lang$core$Result$Ok(i) : _elm_lang$core$Result$Err(
				_fredcy$elm_parseint$ParseInt$OutOfRange(c));
		};
		var toInt = A3(
			_fredcy$elm_parseint$ParseInt$isBetween,
			_elm_lang$core$Native_Utils.chr('0'),
			_elm_lang$core$Native_Utils.chr('9'),
			c) ? _elm_lang$core$Result$Ok(
			A2(
				_fredcy$elm_parseint$ParseInt$charOffset,
				_elm_lang$core$Native_Utils.chr('0'),
				c)) : (A3(
			_fredcy$elm_parseint$ParseInt$isBetween,
			_elm_lang$core$Native_Utils.chr('a'),
			_elm_lang$core$Native_Utils.chr('z'),
			c) ? _elm_lang$core$Result$Ok(
			10 + A2(
				_fredcy$elm_parseint$ParseInt$charOffset,
				_elm_lang$core$Native_Utils.chr('a'),
				c)) : (A3(
			_fredcy$elm_parseint$ParseInt$isBetween,
			_elm_lang$core$Native_Utils.chr('A'),
			_elm_lang$core$Native_Utils.chr('Z'),
			c) ? _elm_lang$core$Result$Ok(
			10 + A2(
				_fredcy$elm_parseint$ParseInt$charOffset,
				_elm_lang$core$Native_Utils.chr('A'),
				c)) : _elm_lang$core$Result$Err(
			_fredcy$elm_parseint$ParseInt$InvalidChar(c))));
		return A2(_elm_lang$core$Result$andThen, validInt, toInt);
	});
var _fredcy$elm_parseint$ParseInt$parseIntR = F2(
	function (radix, rstring) {
		var _p0 = _elm_lang$core$String$uncons(rstring);
		if (_p0.ctor === 'Nothing') {
			return _elm_lang$core$Result$Ok(0);
		} else {
			return A2(
				_elm_lang$core$Result$andThen,
				function (ci) {
					return A2(
						_elm_lang$core$Result$andThen,
						function (ri) {
							return _elm_lang$core$Result$Ok(ci + (ri * radix));
						},
						A2(_fredcy$elm_parseint$ParseInt$parseIntR, radix, _p0._0._1));
				},
				A2(_fredcy$elm_parseint$ParseInt$intFromChar, radix, _p0._0._0));
		}
	});
var _fredcy$elm_parseint$ParseInt$parseIntRadix = F2(
	function (radix, string) {
		return ((_elm_lang$core$Native_Utils.cmp(2, radix) < 1) && (_elm_lang$core$Native_Utils.cmp(radix, 36) < 1)) ? A2(
			_fredcy$elm_parseint$ParseInt$parseIntR,
			radix,
			_elm_lang$core$String$reverse(string)) : _elm_lang$core$Result$Err(
			_fredcy$elm_parseint$ParseInt$InvalidRadix(radix));
	});
var _fredcy$elm_parseint$ParseInt$parseInt = _fredcy$elm_parseint$ParseInt$parseIntRadix(10);
var _fredcy$elm_parseint$ParseInt$parseIntOct = _fredcy$elm_parseint$ParseInt$parseIntRadix(8);
var _fredcy$elm_parseint$ParseInt$parseIntHex = _fredcy$elm_parseint$ParseInt$parseIntRadix(16);

var _eskimoblood$elm_color_extra$Color_Convert$xyzToColor = function (_p0) {
	var _p1 = _p0;
	var c = function (ch) {
		var ch_ = (_elm_lang$core$Native_Utils.cmp(ch, 3.1308e-3) > 0) ? ((1.055 * Math.pow(ch, 1 / 2.4)) - 5.5e-2) : (12.92 * ch);
		return _elm_lang$core$Basics$round(
			A3(_elm_lang$core$Basics$clamp, 0, 255, ch_ * 255));
	};
	var z_ = _p1.z / 100;
	var y_ = _p1.y / 100;
	var x_ = _p1.x / 100;
	var r = ((x_ * 3.2404542) + (y_ * -1.5371385)) + (z_ * -0.4986);
	var g = ((x_ * -0.969266) + (y_ * 1.8760108)) + (z_ * 4.1556e-2);
	var b = ((x_ * 5.56434e-2) + (y_ * -0.2040259)) + (z_ * 1.0572252);
	return A3(
		_elm_lang$core$Color$rgb,
		c(r),
		c(g),
		c(b));
};
var _eskimoblood$elm_color_extra$Color_Convert$labToXyz = function (_p2) {
	var _p3 = _p2;
	var y = (_p3.l + 16) / 116;
	var c = function (ch) {
		var ch_ = (ch * ch) * ch;
		return (_elm_lang$core$Native_Utils.cmp(ch_, 8.856e-3) > 0) ? ch_ : ((ch - (16 / 116)) / 7.787);
	};
	return {
		y: c(y) * 100,
		x: c(y + (_p3.a / 500)) * 95.047,
		z: c(y - (_p3.b / 200)) * 108.883
	};
};
var _eskimoblood$elm_color_extra$Color_Convert$labToColor = function (lab) {
	return _eskimoblood$elm_color_extra$Color_Convert$xyzToColor(
		_eskimoblood$elm_color_extra$Color_Convert$labToXyz(lab));
};
var _eskimoblood$elm_color_extra$Color_Convert$xyzToLab = function (_p4) {
	var _p5 = _p4;
	var c = function (ch) {
		return (_elm_lang$core$Native_Utils.cmp(ch, 8.856e-3) > 0) ? Math.pow(ch, 1 / 3) : ((7.787 * ch) + (16 / 116));
	};
	var x_ = c(_p5.x / 95.047);
	var y_ = c(_p5.y / 100);
	var z_ = c(_p5.z / 108.883);
	return {l: (116 * y_) - 16, a: 500 * (x_ - y_), b: 200 * (y_ - z_)};
};
var _eskimoblood$elm_color_extra$Color_Convert$colorToXyz = function (cl) {
	var _p6 = _elm_lang$core$Color$toRgb(cl);
	var red = _p6.red;
	var green = _p6.green;
	var blue = _p6.blue;
	var c = function (ch) {
		var ch_ = _elm_lang$core$Basics$toFloat(ch) / 255;
		var ch__ = (_elm_lang$core$Native_Utils.cmp(ch_, 4.045e-2) > 0) ? Math.pow((ch_ + 5.5e-2) / 1.055, 2.4) : (ch_ / 12.92);
		return ch__ * 100;
	};
	var r = c(red);
	var g = c(green);
	var b = c(blue);
	return {x: ((r * 0.4124) + (g * 0.3576)) + (b * 0.1805), y: ((r * 0.2126) + (g * 0.7152)) + (b * 7.22e-2), z: ((r * 1.93e-2) + (g * 0.1192)) + (b * 0.9505)};
};
var _eskimoblood$elm_color_extra$Color_Convert$colorToLab = function (cl) {
	return _eskimoblood$elm_color_extra$Color_Convert$xyzToLab(
		_eskimoblood$elm_color_extra$Color_Convert$colorToXyz(cl));
};
var _eskimoblood$elm_color_extra$Color_Convert$toRadix = function (n) {
	var getChr = function (c) {
		return (_elm_lang$core$Native_Utils.cmp(c, 10) < 0) ? _elm_lang$core$Basics$toString(c) : _elm_lang$core$String$fromChar(
			_elm_lang$core$Char$fromCode(87 + c));
	};
	return (_elm_lang$core$Native_Utils.cmp(n, 16) < 0) ? getChr(n) : A2(
		_elm_lang$core$Basics_ops['++'],
		_eskimoblood$elm_color_extra$Color_Convert$toRadix((n / 16) | 0),
		getChr(
			A2(_elm_lang$core$Basics_ops['%'], n, 16)));
};
var _eskimoblood$elm_color_extra$Color_Convert$toHex = function (n) {
	var hex = _eskimoblood$elm_color_extra$Color_Convert$toRadix(n);
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$String$length(hex),
		1) ? A2(_elm_lang$core$Basics_ops['++'], '0', hex) : hex;
};
var _eskimoblood$elm_color_extra$Color_Convert$colorToHex = function (cl) {
	var _p7 = _elm_lang$core$Color$toRgb(cl);
	var red = _p7.red;
	var green = _p7.green;
	var blue = _p7.blue;
	var alpha = _p7.alpha;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'#',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_eskimoblood$elm_color_extra$Color_Convert$toHex(red),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_eskimoblood$elm_color_extra$Color_Convert$toHex(green),
				_eskimoblood$elm_color_extra$Color_Convert$toHex(blue))));
};
var _eskimoblood$elm_color_extra$Color_Convert$hexToColor = function (c) {
	var r = _elm_lang$core$List$head(
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.submatches;
			},
			A3(
				_elm_lang$core$Regex$find,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$'),
				_elm_lang$core$String$toLower(c))));
	var _p8 = r;
	if (_p8.ctor === 'Just') {
		var v = A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$core$Basics$identity,
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Result$toMaybe,
				A2(
					_elm_lang$core$List$map,
					_fredcy$elm_parseint$ParseInt$parseIntHex,
					A2(_elm_lang$core$List$filterMap, _elm_lang$core$Basics$identity, _p8._0))));
		var _p9 = v;
		if ((((_p9.ctor === '::') && (_p9._1.ctor === '::')) && (_p9._1._1.ctor === '::')) && (_p9._1._1._1.ctor === '[]')) {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$Color$rgb, _p9._0, _p9._1._0, _p9._1._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _eskimoblood$elm_color_extra$Color_Convert$cssColorString = F2(
	function (kind, values) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			kind,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$String$join, ', ', values),
					')')));
	});
var _eskimoblood$elm_color_extra$Color_Convert$toPercentString = function (h) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(
			_elm_lang$core$Basics$round(h * 100)),
		'%');
};
var _eskimoblood$elm_color_extra$Color_Convert$hueToString = function (h) {
	return _elm_lang$core$Basics$toString(
		_elm_lang$core$Basics$round((h * 180) / _elm_lang$core$Basics$pi));
};
var _eskimoblood$elm_color_extra$Color_Convert$colorToCssHsla = function (cl) {
	var _p10 = _elm_lang$core$Color$toHsl(cl);
	var hue = _p10.hue;
	var saturation = _p10.saturation;
	var lightness = _p10.lightness;
	var alpha = _p10.alpha;
	return A2(
		_eskimoblood$elm_color_extra$Color_Convert$cssColorString,
		'hsla',
		{
			ctor: '::',
			_0: _eskimoblood$elm_color_extra$Color_Convert$hueToString(hue),
			_1: {
				ctor: '::',
				_0: _eskimoblood$elm_color_extra$Color_Convert$toPercentString(saturation),
				_1: {
					ctor: '::',
					_0: _eskimoblood$elm_color_extra$Color_Convert$toPercentString(lightness),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(alpha),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _eskimoblood$elm_color_extra$Color_Convert$colorToCssHsl = function (cl) {
	var _p11 = _elm_lang$core$Color$toHsl(cl);
	var hue = _p11.hue;
	var saturation = _p11.saturation;
	var lightness = _p11.lightness;
	var alpha = _p11.alpha;
	return A2(
		_eskimoblood$elm_color_extra$Color_Convert$cssColorString,
		'hsl',
		{
			ctor: '::',
			_0: _eskimoblood$elm_color_extra$Color_Convert$hueToString(hue),
			_1: {
				ctor: '::',
				_0: _eskimoblood$elm_color_extra$Color_Convert$toPercentString(saturation),
				_1: {
					ctor: '::',
					_0: _eskimoblood$elm_color_extra$Color_Convert$toPercentString(lightness),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _eskimoblood$elm_color_extra$Color_Convert$colorToCssRgba = function (cl) {
	var _p12 = _elm_lang$core$Color$toRgb(cl);
	var red = _p12.red;
	var green = _p12.green;
	var blue = _p12.blue;
	var alpha = _p12.alpha;
	return A2(
		_eskimoblood$elm_color_extra$Color_Convert$cssColorString,
		'rgba',
		{
			ctor: '::',
			_0: _elm_lang$core$Basics$toString(red),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(green),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(blue),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(alpha),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _eskimoblood$elm_color_extra$Color_Convert$colorToCssRgb = function (cl) {
	var _p13 = _elm_lang$core$Color$toRgb(cl);
	var red = _p13.red;
	var green = _p13.green;
	var blue = _p13.blue;
	var alpha = _p13.alpha;
	return A2(
		_eskimoblood$elm_color_extra$Color_Convert$cssColorString,
		'rgb',
		{
			ctor: '::',
			_0: _elm_lang$core$Basics$toString(red),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(green),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(blue),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _eskimoblood$elm_color_extra$Color_Convert$XYZ = F3(
	function (a, b, c) {
		return {x: a, y: b, z: c};
	});
var _eskimoblood$elm_color_extra$Color_Convert$Lab = F3(
	function (a, b, c) {
		return {l: a, a: b, b: c};
	});

var _halfzebra$elm_aframe$AFrame$entity = _elm_lang$html$Html$node('a-entity');
var _halfzebra$elm_aframe$AFrame$scene = _elm_lang$html$Html$node('a-scene');

var _halfzebra$elm_aframe$AFrame_Primitives$assetItem = _elm_lang$html$Html$node('a-asset-item');
var _halfzebra$elm_aframe$AFrame_Primitives$assets = _elm_lang$html$Html$node('a-assets');
var _halfzebra$elm_aframe$AFrame_Primitives$videosphere = _elm_lang$html$Html$node('a-videosphere');
var _halfzebra$elm_aframe$AFrame_Primitives$video = _elm_lang$html$Html$node('a-video');
var _halfzebra$elm_aframe$AFrame_Primitives$triangle = _elm_lang$html$Html$node('a-triangle');
var _halfzebra$elm_aframe$AFrame_Primitives$torus = _elm_lang$html$Html$node('a-torus');
var _halfzebra$elm_aframe$AFrame_Primitives$torusKnot = _elm_lang$html$Html$node('a-torus-knot');
var _halfzebra$elm_aframe$AFrame_Primitives$text = _elm_lang$html$Html$node('a-text');
var _halfzebra$elm_aframe$AFrame_Primitives$tetrahedron = _elm_lang$html$Html$node('a-tetrahedron');
var _halfzebra$elm_aframe$AFrame_Primitives$sphere = _elm_lang$html$Html$node('a-sphere');
var _halfzebra$elm_aframe$AFrame_Primitives$sound = _elm_lang$html$Html$node('a-sound');
var _halfzebra$elm_aframe$AFrame_Primitives$sky = _elm_lang$html$Html$node('a-sky');
var _halfzebra$elm_aframe$AFrame_Primitives$ring = _elm_lang$html$Html$node('a-ring');
var _halfzebra$elm_aframe$AFrame_Primitives$plane = _elm_lang$html$Html$node('a-plane');
var _halfzebra$elm_aframe$AFrame_Primitives$octahedron = _elm_lang$html$Html$node('a-octahedron');
var _halfzebra$elm_aframe$AFrame_Primitives$objModel = _elm_lang$html$Html$node('a-obj-model');
var _halfzebra$elm_aframe$AFrame_Primitives$link = _elm_lang$html$Html$node('a-link');
var _halfzebra$elm_aframe$AFrame_Primitives$image = _elm_lang$html$Html$node('a-image');
var _halfzebra$elm_aframe$AFrame_Primitives$icosahedron = _elm_lang$html$Html$node('a-icosahedron');
var _halfzebra$elm_aframe$AFrame_Primitives$gltfModel = _elm_lang$html$Html$node('a-gltf-model');
var _halfzebra$elm_aframe$AFrame_Primitives$dodecahedron = _elm_lang$html$Html$node('a-dodecahedron');
var _halfzebra$elm_aframe$AFrame_Primitives$cylinder = _elm_lang$html$Html$node('a-cylinder');
var _halfzebra$elm_aframe$AFrame_Primitives$curvedimage = _elm_lang$html$Html$node('a-curvedimage');
var _halfzebra$elm_aframe$AFrame_Primitives$cursor = _elm_lang$html$Html$node('a-cursor');
var _halfzebra$elm_aframe$AFrame_Primitives$cone = _elm_lang$html$Html$node('a-cone');
var _halfzebra$elm_aframe$AFrame_Primitives$colladaModel = _elm_lang$html$Html$node('a-collada-model');
var _halfzebra$elm_aframe$AFrame_Primitives$circle = _elm_lang$html$Html$node('a-circle');
var _halfzebra$elm_aframe$AFrame_Primitives$box = _elm_lang$html$Html$node('a-box');

var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$vrModeUi = function (enabled) {
	var value = function () {
		var _p0 = enabled;
		if (_p0 === true) {
			return 'true';
		} else {
			return 'false';
		}
	}();
	var attribstring = A2(_elm_lang$core$Basics_ops['++'], 'enabled: ', value);
	return A2(_elm_lang$html$Html_Attributes$attribute, 'vm-mode-ui', attribstring);
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$type_ = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'type',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$intensity = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'intensity',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$groundColor = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'ground-color',
		_eskimoblood$elm_color_extra$Color_Convert$colorToHex(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$exponent = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'exponent',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$distance = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'distance',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$decay = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'decay',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$angle = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'angle',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$segmentsRadial = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'segments-radial',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$depth = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'depth',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$rotation = F3(
	function (x, y, z) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rotation',
			_elm_lang$core$String$concat(
				A2(
					_elm_lang$core$List$intersperse,
					' ',
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Basics$toString,
						{
							ctor: '::',
							_0: x,
							_1: {
								ctor: '::',
								_0: y,
								_1: {
									ctor: '::',
									_0: z,
									_1: {ctor: '[]'}
								}
							}
						}))));
	});
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$scale = F3(
	function (x, y, z) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'scale',
			_elm_lang$core$String$concat(
				A2(
					_elm_lang$core$List$intersperse,
					' ',
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Basics$toString,
						{
							ctor: '::',
							_0: x,
							_1: {
								ctor: '::',
								_0: y,
								_1: {
									ctor: '::',
									_0: z,
									_1: {ctor: '[]'}
								}
							}
						}))));
	});
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$position = F3(
	function (x, y, z) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'position',
			_elm_lang$core$String$concat(
				A2(
					_elm_lang$core$List$intersperse,
					' ',
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Basics$toString,
						{
							ctor: '::',
							_0: x,
							_1: {
								ctor: '::',
								_0: y,
								_1: {
									ctor: '::',
									_0: z,
									_1: {ctor: '[]'}
								}
							}
						}))));
	});
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$radiusBottom = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'radius-bottom',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$radiusTop = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'radius-top',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$radius = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'radius',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$transparent = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'transparent',
		_elm_lang$core$String$toLower(
			_elm_lang$core$Basics$toString(value)));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$translate = F3(
	function (x, y, z) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'translate',
			_elm_lang$core$String$concat(
				A2(
					_elm_lang$core$List$intersperse,
					' ',
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Basics$toString,
						{
							ctor: '::',
							_0: x,
							_1: {
								ctor: '::',
								_0: y,
								_1: {
									ctor: '::',
									_0: z,
									_1: {ctor: '[]'}
								}
							}
						}))));
	});
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$roughness = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'roughness',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$opacity = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'opacity',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'src', value);
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$shader = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'shader', value);
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$metalness = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'metalness',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Attributes$color = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'color',
		_eskimoblood$elm_color_extra$Color_Convert$colorToHex(value));
};

var _halfzebra$elm_aframe$AFrame_Primitives_Camera$wasdControlsEnabled = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'wasd-controls-enabled',
		_elm_lang$core$String$toLower(
			_elm_lang$core$Basics$toString(value)));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Camera$near = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'near',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Camera$lookControlsEnabled = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'look-controls-enabled',
		_elm_lang$core$String$toLower(
			_elm_lang$core$Basics$toString(value)));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Camera$fov = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'fov',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Camera$far = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'far',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Camera$camera = _elm_lang$html$Html$node('a-camera');

var _halfzebra$elm_aframe$AFrame_Primitives_Cursor$raycaster = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'raycaster',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Cursor$timeout = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'timeout',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Cursor$maxDistance = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'max-distance',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Cursor$fuse = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'fuse',
		_elm_lang$core$String$toLower(
			_elm_lang$core$Basics$toString(value)));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Cursor$cursor = _elm_lang$html$Html$node('a-cursor');

var _halfzebra$elm_aframe$AFrame_Primitives_Light$intensity = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'intensity',
		_elm_lang$core$Basics$toString(value));
};
var _halfzebra$elm_aframe$AFrame_Primitives_Light$type_ = function (light) {
	var lightType = function () {
		var _p0 = light;
		switch (_p0.ctor) {
			case 'Ambient':
				return 'ambient';
			case 'Directional':
				return 'directional';
			case 'Hemisphere':
				return 'hemisphere';
			case 'Point':
				return 'point';
			default:
				return 'spot';
		}
	}();
	return A2(_elm_lang$html$Html_Attributes$attribute, 'type', lightType);
};
var _halfzebra$elm_aframe$AFrame_Primitives_Light$light = _elm_lang$html$Html$node('a-light');
var _halfzebra$elm_aframe$AFrame_Primitives_Light$Spot = {ctor: 'Spot'};
var _halfzebra$elm_aframe$AFrame_Primitives_Light$Point = {ctor: 'Point'};
var _halfzebra$elm_aframe$AFrame_Primitives_Light$Hemisphere = {ctor: 'Hemisphere'};
var _halfzebra$elm_aframe$AFrame_Primitives_Light$Directional = {ctor: 'Directional'};
var _halfzebra$elm_aframe$AFrame_Primitives_Light$Ambient = {ctor: 'Ambient'};

var _mdgriffith$style_elements$Style_Internal_Model$StyleSheet = F3(
	function (a, b, c) {
		return {style: a, variations: b, css: c};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Reset = function (a) {
	return {ctor: 'Reset', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Import = function (a) {
	return {ctor: 'Import', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$RawStyle = F2(
	function (a, b) {
		return {ctor: 'RawStyle', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Style = F2(
	function (a, b) {
		return {ctor: 'Style', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Transitions = function (a) {
	return {ctor: 'Transitions', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$TextColor = function (a) {
	return {ctor: 'TextColor', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$SelectionColor = function (a) {
	return {ctor: 'SelectionColor', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Visibility = function (a) {
	return {ctor: 'Visibility', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Filters = function (a) {
	return {ctor: 'Filters', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Transform = function (a) {
	return {ctor: 'Transform', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Shadows = function (a) {
	return {ctor: 'Shadows', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Background = function (a) {
	return {ctor: 'Background', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Layout = function (a) {
	return {ctor: 'Layout', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$FontFamily = function (a) {
	return {ctor: 'FontFamily', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Font = F2(
	function (a, b) {
		return {ctor: 'Font', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Position = function (a) {
	return {ctor: 'Position', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PseudoElement = F2(
	function (a, b) {
		return {ctor: 'PseudoElement', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$MediaQuery = F2(
	function (a, b) {
		return {ctor: 'MediaQuery', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Child = F2(
	function (a, b) {
		return {ctor: 'Child', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Variation = F2(
	function (a, b) {
		return {ctor: 'Variation', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Exact = F2(
	function (a, b) {
		return {ctor: 'Exact', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$mapPropClass = F2(
	function (fn, prop) {
		var _p0 = prop;
		switch (_p0.ctor) {
			case 'Child':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Child,
					fn(_p0._0),
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p0._1));
			case 'Variation':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Variation,
					_p0._0,
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p0._1));
			case 'Exact':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, _p0._0, _p0._1);
			case 'Position':
				return _mdgriffith$style_elements$Style_Internal_Model$Position(_p0._0);
			case 'Font':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$Font, _p0._0, _p0._1);
			case 'Layout':
				return _mdgriffith$style_elements$Style_Internal_Model$Layout(_p0._0);
			case 'Background':
				return _mdgriffith$style_elements$Style_Internal_Model$Background(_p0._0);
			case 'MediaQuery':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$MediaQuery,
					_p0._0,
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p0._1));
			case 'PseudoElement':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$PseudoElement,
					_p0._0,
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p0._1));
			case 'Shadows':
				return _mdgriffith$style_elements$Style_Internal_Model$Shadows(_p0._0);
			case 'Transform':
				return _mdgriffith$style_elements$Style_Internal_Model$Transform(_p0._0);
			case 'Filters':
				return _mdgriffith$style_elements$Style_Internal_Model$Filters(_p0._0);
			case 'Visibility':
				return _mdgriffith$style_elements$Style_Internal_Model$Visibility(_p0._0);
			case 'TextColor':
				return _mdgriffith$style_elements$Style_Internal_Model$TextColor(_p0._0);
			case 'Transitions':
				return _mdgriffith$style_elements$Style_Internal_Model$Transitions(_p0._0);
			case 'SelectionColor':
				return _mdgriffith$style_elements$Style_Internal_Model$SelectionColor(_p0._0);
			default:
				return _mdgriffith$style_elements$Style_Internal_Model$FontFamily(_p0._0);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar = F3(
	function (fn, fnVar, prop) {
		var _p1 = prop;
		switch (_p1.ctor) {
			case 'Child':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Child,
					fn(_p1._0),
					A2(
						_elm_lang$core$List$map,
						A2(_mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar, fn, fnVar),
						_p1._1));
			case 'Variation':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Variation,
					fnVar(_p1._0),
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p1._1));
			case 'Exact':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, _p1._0, _p1._1);
			case 'Position':
				return _mdgriffith$style_elements$Style_Internal_Model$Position(_p1._0);
			case 'Font':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$Font, _p1._0, _p1._1);
			case 'Layout':
				return _mdgriffith$style_elements$Style_Internal_Model$Layout(_p1._0);
			case 'Background':
				return _mdgriffith$style_elements$Style_Internal_Model$Background(_p1._0);
			case 'MediaQuery':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$MediaQuery,
					_p1._0,
					A2(
						_elm_lang$core$List$map,
						A2(_mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar, fn, fnVar),
						_p1._1));
			case 'PseudoElement':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$PseudoElement,
					_p1._0,
					A2(
						_elm_lang$core$List$map,
						A2(_mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar, fn, fnVar),
						_p1._1));
			case 'Shadows':
				return _mdgriffith$style_elements$Style_Internal_Model$Shadows(_p1._0);
			case 'Transform':
				return _mdgriffith$style_elements$Style_Internal_Model$Transform(_p1._0);
			case 'Filters':
				return _mdgriffith$style_elements$Style_Internal_Model$Filters(_p1._0);
			case 'Visibility':
				return _mdgriffith$style_elements$Style_Internal_Model$Visibility(_p1._0);
			case 'TextColor':
				return _mdgriffith$style_elements$Style_Internal_Model$TextColor(_p1._0);
			case 'Transitions':
				return _mdgriffith$style_elements$Style_Internal_Model$Transitions(_p1._0);
			case 'SelectionColor':
				return _mdgriffith$style_elements$Style_Internal_Model$SelectionColor(_p1._0);
			default:
				return _mdgriffith$style_elements$Style_Internal_Model$FontFamily(_p1._0);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Model$mapClassAndVar = F3(
	function (fn, fnVariation, style) {
		var _p2 = style;
		switch (_p2.ctor) {
			case 'Style':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Style,
					fn(_p2._0),
					A2(
						_elm_lang$core$List$map,
						A2(_mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar, fn, fnVariation),
						_p2._1));
			case 'Import':
				return _mdgriffith$style_elements$Style_Internal_Model$Import(_p2._0);
			case 'RawStyle':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$RawStyle, _p2._0, _p2._1);
			default:
				return _mdgriffith$style_elements$Style_Internal_Model$Reset(_p2._0);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Model$ImportFont = F2(
	function (a, b) {
		return {ctor: 'ImportFont', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$FontName = function (a) {
	return {ctor: 'FontName', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Monospace = {ctor: 'Monospace'};
var _mdgriffith$style_elements$Style_Internal_Model$Fantasy = {ctor: 'Fantasy'};
var _mdgriffith$style_elements$Style_Internal_Model$Cursive = {ctor: 'Cursive'};
var _mdgriffith$style_elements$Style_Internal_Model$SansSerif = {ctor: 'SansSerif'};
var _mdgriffith$style_elements$Style_Internal_Model$Serif = {ctor: 'Serif'};
var _mdgriffith$style_elements$Style_Internal_Model$BackgroundSize = function (a) {
	return {ctor: 'BackgroundSize', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$BackgroundHeight = function (a) {
	return {ctor: 'BackgroundHeight', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$BackgroundWidth = function (a) {
	return {ctor: 'BackgroundWidth', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Cover = {ctor: 'Cover'};
var _mdgriffith$style_elements$Style_Internal_Model$Contain = {ctor: 'Contain'};
var _mdgriffith$style_elements$Style_Internal_Model$Transition = function (a) {
	return {ctor: 'Transition', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Opacity = function (a) {
	return {ctor: 'Opacity', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Invisible = {ctor: 'Invisible'};
var _mdgriffith$style_elements$Style_Internal_Model$Hidden = {ctor: 'Hidden'};
var _mdgriffith$style_elements$Style_Internal_Model$Float = function (a) {
	return {ctor: 'Float', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Inline = {ctor: 'Inline'};
var _mdgriffith$style_elements$Style_Internal_Model$ZIndex = function (a) {
	return {ctor: 'ZIndex', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PosBottom = function (a) {
	return {ctor: 'PosBottom', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PosTop = function (a) {
	return {ctor: 'PosTop', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PosRight = function (a) {
	return {ctor: 'PosRight', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PosLeft = function (a) {
	return {ctor: 'PosLeft', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$RelativeTo = function (a) {
	return {ctor: 'RelativeTo', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Parent = {ctor: 'Parent'};
var _mdgriffith$style_elements$Style_Internal_Model$Current = {ctor: 'Current'};
var _mdgriffith$style_elements$Style_Internal_Model$Screen = {ctor: 'Screen'};
var _mdgriffith$style_elements$Style_Internal_Model$FloatTopRight = {ctor: 'FloatTopRight'};
var _mdgriffith$style_elements$Style_Internal_Model$FloatTopLeft = {ctor: 'FloatTopLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$FloatRight = {ctor: 'FloatRight'};
var _mdgriffith$style_elements$Style_Internal_Model$FloatLeft = {ctor: 'FloatLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$BoxProp = F2(
	function (a, b) {
		return {ctor: 'BoxProp', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Grid = F2(
	function (a, b) {
		return {ctor: 'Grid', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$FlexLayout = F2(
	function (a, b) {
		return {ctor: 'FlexLayout', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$TextLayout = function (a) {
	return {ctor: 'TextLayout', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Vert = function (a) {
	return {ctor: 'Vert', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Horz = function (a) {
	return {ctor: 'Horz', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Wrap = function (a) {
	return {ctor: 'Wrap', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$GridGap = F2(
	function (a, b) {
		return {ctor: 'GridGap', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$GridV = function (a) {
	return {ctor: 'GridV', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$GridH = function (a) {
	return {ctor: 'GridH', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$NamedGridTemplate = function (a) {
	return {ctor: 'NamedGridTemplate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$GridTemplate = function (a) {
	return {ctor: 'GridTemplate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$GridPosition = function (a) {
	return {ctor: 'GridPosition', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Named = F2(
	function (a, b) {
		return {ctor: 'Named', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$SpanJust = function (a) {
	return {ctor: 'SpanJust', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$SpanAll = {ctor: 'SpanAll'};
var _mdgriffith$style_elements$Style_Internal_Model$BackgroundLinearGradient = F2(
	function (a, b) {
		return {ctor: 'BackgroundLinearGradient', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$BackgroundElement = F2(
	function (a, b) {
		return {ctor: 'BackgroundElement', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$BackgroundImage = function (a) {
	return {ctor: 'BackgroundImage', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$ToAngle = function (a) {
	return {ctor: 'ToAngle', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$ToBottomLeft = {ctor: 'ToBottomLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$ToTopLeft = {ctor: 'ToTopLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$ToLeft = {ctor: 'ToLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$ToBottomRight = {ctor: 'ToBottomRight'};
var _mdgriffith$style_elements$Style_Internal_Model$ToTopRight = {ctor: 'ToTopRight'};
var _mdgriffith$style_elements$Style_Internal_Model$ToRight = {ctor: 'ToRight'};
var _mdgriffith$style_elements$Style_Internal_Model$ToDown = {ctor: 'ToDown'};
var _mdgriffith$style_elements$Style_Internal_Model$ToUp = {ctor: 'ToUp'};
var _mdgriffith$style_elements$Style_Internal_Model$PxStep = F2(
	function (a, b) {
		return {ctor: 'PxStep', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$PercentStep = F2(
	function (a, b) {
		return {ctor: 'PercentStep', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$ColorStep = function (a) {
	return {ctor: 'ColorStep', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$ShadowModel = function (a) {
	return {ctor: 'ShadowModel', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$DropShadow = function (a) {
	return {ctor: 'DropShadow', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Sepia = function (a) {
	return {ctor: 'Sepia', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Saturate = function (a) {
	return {ctor: 'Saturate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$OpacityFilter = function (a) {
	return {ctor: 'OpacityFilter', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Invert = function (a) {
	return {ctor: 'Invert', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$HueRotate = function (a) {
	return {ctor: 'HueRotate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Grayscale = function (a) {
	return {ctor: 'Grayscale', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Contrast = function (a) {
	return {ctor: 'Contrast', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Brightness = function (a) {
	return {ctor: 'Brightness', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Blur = function (a) {
	return {ctor: 'Blur', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$FilterUrl = function (a) {
	return {ctor: 'FilterUrl', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Scale = F3(
	function (a, b, c) {
		return {ctor: 'Scale', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Style_Internal_Model$RotateAround = F4(
	function (a, b, c, d) {
		return {ctor: 'RotateAround', _0: a, _1: b, _2: c, _3: d};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Rotate = function (a) {
	return {ctor: 'Rotate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Translate = F3(
	function (a, b, c) {
		return {ctor: 'Translate', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Style_Internal_Model$NoRepeat = {ctor: 'NoRepeat'};
var _mdgriffith$style_elements$Style_Internal_Model$Round = {ctor: 'Round'};
var _mdgriffith$style_elements$Style_Internal_Model$Space = {ctor: 'Space'};
var _mdgriffith$style_elements$Style_Internal_Model$Repeat = {ctor: 'Repeat'};
var _mdgriffith$style_elements$Style_Internal_Model$RepeatY = {ctor: 'RepeatY'};
var _mdgriffith$style_elements$Style_Internal_Model$RepeatX = {ctor: 'RepeatX'};
var _mdgriffith$style_elements$Style_Internal_Model$GoLeft = {ctor: 'GoLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$Down = {ctor: 'Down'};
var _mdgriffith$style_elements$Style_Internal_Model$GoRight = {ctor: 'GoRight'};
var _mdgriffith$style_elements$Style_Internal_Model$Up = {ctor: 'Up'};
var _mdgriffith$style_elements$Style_Internal_Model$Other = function (a) {
	return {ctor: 'Other', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$JustifyAll = {ctor: 'JustifyAll'};
var _mdgriffith$style_elements$Style_Internal_Model$Justify = {ctor: 'Justify'};
var _mdgriffith$style_elements$Style_Internal_Model$Center = {ctor: 'Center'};
var _mdgriffith$style_elements$Style_Internal_Model$Bottom = {ctor: 'Bottom'};
var _mdgriffith$style_elements$Style_Internal_Model$Top = {ctor: 'Top'};
var _mdgriffith$style_elements$Style_Internal_Model$Right = {ctor: 'Right'};
var _mdgriffith$style_elements$Style_Internal_Model$Left = {ctor: 'Left'};
var _mdgriffith$style_elements$Style_Internal_Model$Calc = F2(
	function (a, b) {
		return {ctor: 'Calc', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Fill = function (a) {
	return {ctor: 'Fill', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Auto = {ctor: 'Auto'};
var _mdgriffith$style_elements$Style_Internal_Model$Percent = function (a) {
	return {ctor: 'Percent', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Px = function (a) {
	return {ctor: 'Px', _0: a};
};

var _mdgriffith$style_elements$Element_Internal_Model$name = function (el) {
	var _p0 = el;
	switch (_p0.ctor) {
		case 'Empty':
			return 'empty';
		case 'Spacer':
			return 'spacer';
		case 'Text':
			return 'text';
		case 'Element':
			return 'element';
		case 'Layout':
			return 'layout';
		default:
			return 'html';
	}
};
var _mdgriffith$style_elements$Element_Internal_Model$Raw = function (a) {
	return {ctor: 'Raw', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Layout = function (a) {
	return {ctor: 'Layout', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Element = function (a) {
	return {ctor: 'Element', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Text = F2(
	function (a, b) {
		return {ctor: 'Text', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Internal_Model$Spacer = function (a) {
	return {ctor: 'Spacer', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Empty = {ctor: 'Empty'};
var _mdgriffith$style_elements$Element_Internal_Model$Keyed = function (a) {
	return {ctor: 'Keyed', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$adjust = F3(
	function (fn, parent, el) {
		var maybeOnEmptyList = function (list) {
			return _elm_lang$core$List$isEmpty(list) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(list);
		};
		var merge = F2(
			function (el, current) {
				var _p1 = el;
				if (_p1.ctor === 'Nothing') {
					return current;
				} else {
					var _p2 = current;
					if (_p2.ctor === 'Nothing') {
						return el;
					} else {
						return _elm_lang$core$Maybe$Just(
							A2(_elm_lang$core$Basics_ops['++'], _p1._0, _p2._0));
					}
				}
			});
		var _p3 = el;
		switch (_p3.ctor) {
			case 'Element':
				var adjustAndMerge = F2(
					function (el, _p4) {
						var _p5 = _p4;
						var _p9 = _p5._1;
						var _p8 = _p5._0;
						var _p6 = A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, fn, _elm_lang$core$Maybe$Nothing, el);
						var adjusted = _p6._0;
						var data = _p6._1;
						var _p7 = data;
						if (_p7.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: adjusted, _1: _p8},
								_1: _p9
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: adjusted, _1: _p8},
								_1: A2(_elm_lang$core$Basics_ops['++'], _p7._0, _p9)
							};
						}
					});
				var _p10 = function () {
					var _p11 = _p3._0.absolutelyPositioned;
					if (_p11.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing};
					} else {
						return function (_p12) {
							var _p13 = _p12;
							return {
								ctor: '_Tuple2',
								_0: maybeOnEmptyList(_p13._0),
								_1: maybeOnEmptyList(_p13._1)
							};
						}(
							A3(
								_elm_lang$core$List$foldr,
								adjustAndMerge,
								{
									ctor: '_Tuple2',
									_0: {ctor: '[]'},
									_1: {ctor: '[]'}
								},
								_p11._0));
					}
				}();
				var adjustedOthers = _p10._0;
				var otherChildrenData = _p10._1;
				var _p14 = A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, fn, _elm_lang$core$Maybe$Nothing, _p3._0.child);
				var adjustedChild = _p14._0;
				var childData = _p14._1;
				var _p15 = A2(
					fn,
					parent,
					_mdgriffith$style_elements$Element_Internal_Model$Element(
						_elm_lang$core$Native_Utils.update(
							_p3._0,
							{child: adjustedChild, absolutelyPositioned: adjustedOthers})));
				var adjustedEl = _p15._0;
				var elData = _p15._1;
				return {
					ctor: '_Tuple2',
					_0: adjustedEl,
					_1: A3(
						_elm_lang$core$List$foldr,
						merge,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: childData,
							_1: {
								ctor: '::',
								_0: otherChildrenData,
								_1: {
									ctor: '::',
									_0: elData,
									_1: {ctor: '[]'}
								}
							}
						})
				};
			case 'Layout':
				var _p40 = _p3._0.layout;
				var adjustAndMergeKeyed = F3(
					function (usingParent, _p17, _p16) {
						var _p18 = _p17;
						var _p24 = _p18._0;
						var _p19 = _p16;
						var _p23 = _p19._1;
						var _p22 = _p19._0;
						var _p20 = A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, fn, usingParent, _p18._1);
						var adjusted = _p20._0;
						var data = _p20._1;
						var _p21 = data;
						if (_p21.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _p24, _1: adjusted},
									_1: _p22
								},
								_1: _p23
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _p24, _1: adjusted},
									_1: _p22
								},
								_1: A2(_elm_lang$core$Basics_ops['++'], _p21._0, _p23)
							};
						}
					});
				var adjustAndMerge = F3(
					function (usingParent, el, _p25) {
						var _p26 = _p25;
						var _p30 = _p26._1;
						var _p29 = _p26._0;
						var _p27 = A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, fn, usingParent, el);
						var adjusted = _p27._0;
						var data = _p27._1;
						var _p28 = data;
						if (_p28.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: adjusted, _1: _p29},
								_1: _p30
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: adjusted, _1: _p29},
								_1: A2(_elm_lang$core$Basics_ops['++'], _p28._0, _p30)
							};
						}
					});
				var _p31 = function () {
					var _p32 = _p3._0.children;
					if (_p32.ctor === 'Normal') {
						var _p33 = A3(
							_elm_lang$core$List$foldr,
							adjustAndMerge(
								_elm_lang$core$Maybe$Just(_p40)),
							{
								ctor: '_Tuple2',
								_0: {ctor: '[]'},
								_1: {ctor: '[]'}
							},
							_p32._0);
						var adjusted = _p33._0;
						var data = _p33._1;
						return {
							ctor: '_Tuple2',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Normal(adjusted),
							_1: maybeOnEmptyList(data)
						};
					} else {
						var _p34 = A3(
							_elm_lang$core$List$foldr,
							adjustAndMergeKeyed(
								_elm_lang$core$Maybe$Just(_p40)),
							{
								ctor: '_Tuple2',
								_0: {ctor: '[]'},
								_1: {ctor: '[]'}
							},
							_p32._0);
						var adjusted = _p34._0;
						var data = _p34._1;
						return {
							ctor: '_Tuple2',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Keyed(adjusted),
							_1: maybeOnEmptyList(data)
						};
					}
				}();
				var adjustedChildren = _p31._0;
				var childrenData = _p31._1;
				var _p35 = function () {
					var _p36 = _p3._0.absolutelyPositioned;
					if (_p36.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing};
					} else {
						return function (_p37) {
							var _p38 = _p37;
							return {
								ctor: '_Tuple2',
								_0: maybeOnEmptyList(_p38._0),
								_1: maybeOnEmptyList(_p38._1)
							};
						}(
							A3(
								_elm_lang$core$List$foldr,
								adjustAndMerge(_elm_lang$core$Maybe$Nothing),
								{
									ctor: '_Tuple2',
									_0: {ctor: '[]'},
									_1: {ctor: '[]'}
								},
								_p36._0));
					}
				}();
				var adjustedOthers = _p35._0;
				var otherChildrenData = _p35._1;
				var _p39 = A2(
					fn,
					parent,
					_mdgriffith$style_elements$Element_Internal_Model$Layout(
						_elm_lang$core$Native_Utils.update(
							_p3._0,
							{children: adjustedChildren, absolutelyPositioned: adjustedOthers})));
				var adjustedLayout = _p39._0;
				var layoutData = _p39._1;
				return {
					ctor: '_Tuple2',
					_0: adjustedLayout,
					_1: A3(
						_elm_lang$core$List$foldr,
						merge,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: layoutData,
							_1: {
								ctor: '::',
								_0: childrenData,
								_1: {
									ctor: '::',
									_0: otherChildrenData,
									_1: {ctor: '[]'}
								}
							}
						})
				};
			default:
				return A2(fn, _elm_lang$core$Maybe$Nothing, el);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Model$mapChildren = F2(
	function (fn, children) {
		var _p41 = children;
		if (_p41.ctor === 'Normal') {
			return _mdgriffith$style_elements$Element_Internal_Model$Normal(
				A2(_elm_lang$core$List$map, fn, _p41._0));
		} else {
			return _mdgriffith$style_elements$Element_Internal_Model$Keyed(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Tuple$mapSecond(fn),
					_p41._0));
		}
	});
var _mdgriffith$style_elements$Element_Internal_Model$OnGrid = function (a) {
	return {ctor: 'OnGrid', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$NamedOnGrid = function (a) {
	return {ctor: 'NamedOnGrid', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Overflow = function (a) {
	return {ctor: 'Overflow', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Shrink = function (a) {
	return {ctor: 'Shrink', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$PointerEvents = function (a) {
	return {ctor: 'PointerEvents', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$GridCoords = function (a) {
	return {ctor: 'GridCoords', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$GridArea = function (a) {
	return {ctor: 'GridArea', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Attr = function (a) {
	return {ctor: 'Attr', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$InputEvent = function (a) {
	return {ctor: 'InputEvent', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Event = function (a) {
	return {ctor: 'Event', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$PhantomPadding = function (a) {
	return {ctor: 'PhantomPadding', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Padding = F4(
	function (a, b, c, d) {
		return {ctor: 'Padding', _0: a, _1: b, _2: c, _3: d};
	});
var _mdgriffith$style_elements$Element_Internal_Model$Expand = {ctor: 'Expand'};
var _mdgriffith$style_elements$Element_Internal_Model$Margin = function (a) {
	return {ctor: 'Margin', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Spacing = F2(
	function (a, b) {
		return {ctor: 'Spacing', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Internal_Model$Opacity = function (a) {
	return {ctor: 'Opacity', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Hidden = {ctor: 'Hidden'};
var _mdgriffith$style_elements$Element_Internal_Model$PositionFrame = function (a) {
	return {ctor: 'PositionFrame', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Position = F3(
	function (a, b, c) {
		return {ctor: 'Position', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Element_Internal_Model$VAlign = function (a) {
	return {ctor: 'VAlign', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$HAlign = function (a) {
	return {ctor: 'HAlign', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Inline = {ctor: 'Inline'};
var _mdgriffith$style_elements$Element_Internal_Model$Width = function (a) {
	return {ctor: 'Width', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Height = function (a) {
	return {ctor: 'Height', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Vary = F2(
	function (a, b) {
		return {ctor: 'Vary', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Internal_Model$mapAttr = F2(
	function (fn, attr) {
		var _p42 = attr;
		switch (_p42.ctor) {
			case 'Event':
				return _mdgriffith$style_elements$Element_Internal_Model$Event(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p42._0));
			case 'InputEvent':
				return _mdgriffith$style_elements$Element_Internal_Model$InputEvent(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p42._0));
			case 'Attr':
				return _mdgriffith$style_elements$Element_Internal_Model$Attr(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p42._0));
			case 'Vary':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Vary, _p42._0, _p42._1);
			case 'Height':
				return _mdgriffith$style_elements$Element_Internal_Model$Height(_p42._0);
			case 'Width':
				return _mdgriffith$style_elements$Element_Internal_Model$Width(_p42._0);
			case 'Inline':
				return _mdgriffith$style_elements$Element_Internal_Model$Inline;
			case 'HAlign':
				return _mdgriffith$style_elements$Element_Internal_Model$HAlign(_p42._0);
			case 'VAlign':
				return _mdgriffith$style_elements$Element_Internal_Model$VAlign(_p42._0);
			case 'Position':
				return A3(_mdgriffith$style_elements$Element_Internal_Model$Position, _p42._0, _p42._1, _p42._2);
			case 'PositionFrame':
				return _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_p42._0);
			case 'Hidden':
				return _mdgriffith$style_elements$Element_Internal_Model$Hidden;
			case 'Opacity':
				return _mdgriffith$style_elements$Element_Internal_Model$Opacity(_p42._0);
			case 'Spacing':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, _p42._0, _p42._1);
			case 'Margin':
				return _mdgriffith$style_elements$Element_Internal_Model$Margin(_p42._0);
			case 'Expand':
				return _mdgriffith$style_elements$Element_Internal_Model$Expand;
			case 'Padding':
				return A4(_mdgriffith$style_elements$Element_Internal_Model$Padding, _p42._0, _p42._1, _p42._2, _p42._3);
			case 'PhantomPadding':
				return _mdgriffith$style_elements$Element_Internal_Model$PhantomPadding(_p42._0);
			case 'GridArea':
				return _mdgriffith$style_elements$Element_Internal_Model$GridArea(_p42._0);
			case 'GridCoords':
				return _mdgriffith$style_elements$Element_Internal_Model$GridCoords(_p42._0);
			case 'PointerEvents':
				return _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(_p42._0);
			case 'Shrink':
				return _mdgriffith$style_elements$Element_Internal_Model$Shrink(_p42._0);
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Overflow(_p42._0);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Model$mapMsg = F2(
	function (fn, el) {
		var _p43 = el;
		switch (_p43.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p43._0);
			case 'Text':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p43._0, _p43._1);
			case 'Element':
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p43._0,
						{
							attrs: A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Element_Internal_Model$mapAttr(fn),
								_p43._0.attrs),
							child: A2(_mdgriffith$style_elements$Element_Internal_Model$mapMsg, fn, _p43._0.child),
							absolutelyPositioned: A2(
								_elm_lang$core$Maybe$map,
								_elm_lang$core$List$map(
									function (child) {
										return A2(_mdgriffith$style_elements$Element_Internal_Model$mapMsg, fn, child);
									}),
								_p43._0.absolutelyPositioned)
						}));
			case 'Layout':
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p43._0,
						{
							attrs: A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Element_Internal_Model$mapAttr(fn),
								_p43._0.attrs),
							children: A2(
								_mdgriffith$style_elements$Element_Internal_Model$mapChildren,
								_mdgriffith$style_elements$Element_Internal_Model$mapMsg(fn),
								_p43._0.children),
							absolutelyPositioned: A2(
								_elm_lang$core$Maybe$map,
								_elm_lang$core$List$map(
									function (child) {
										return A2(_mdgriffith$style_elements$Element_Internal_Model$mapMsg, fn, child);
									}),
								_p43._0.absolutelyPositioned)
						}));
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(
					A2(_elm_lang$html$Html$map, fn, _p43._0));
		}
	});
var _mdgriffith$style_elements$Element_Internal_Model$AllAxis = {ctor: 'AllAxis'};
var _mdgriffith$style_elements$Element_Internal_Model$YAxis = {ctor: 'YAxis'};
var _mdgriffith$style_elements$Element_Internal_Model$XAxis = {ctor: 'XAxis'};
var _mdgriffith$style_elements$Element_Internal_Model$Sub = {ctor: 'Sub'};
var _mdgriffith$style_elements$Element_Internal_Model$Super = {ctor: 'Super'};
var _mdgriffith$style_elements$Element_Internal_Model$Strike = {ctor: 'Strike'};
var _mdgriffith$style_elements$Element_Internal_Model$Underline = {ctor: 'Underline'};
var _mdgriffith$style_elements$Element_Internal_Model$Italic = {ctor: 'Italic'};
var _mdgriffith$style_elements$Element_Internal_Model$Bold = {ctor: 'Bold'};
var _mdgriffith$style_elements$Element_Internal_Model$RawText = {ctor: 'RawText'};
var _mdgriffith$style_elements$Element_Internal_Model$NoDecoration = {ctor: 'NoDecoration'};
var _mdgriffith$style_elements$Element_Internal_Model$Nearby = function (a) {
	return {ctor: 'Nearby', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Absolute = function (a) {
	return {ctor: 'Absolute', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Relative = {ctor: 'Relative'};
var _mdgriffith$style_elements$Element_Internal_Model$Screen = {ctor: 'Screen'};
var _mdgriffith$style_elements$Element_Internal_Model$BottomLeft = {ctor: 'BottomLeft'};
var _mdgriffith$style_elements$Element_Internal_Model$TopLeft = {ctor: 'TopLeft'};
var _mdgriffith$style_elements$Element_Internal_Model$Within = {ctor: 'Within'};
var _mdgriffith$style_elements$Element_Internal_Model$OnRight = {ctor: 'OnRight'};
var _mdgriffith$style_elements$Element_Internal_Model$OnLeft = {ctor: 'OnLeft'};
var _mdgriffith$style_elements$Element_Internal_Model$Above = {ctor: 'Above'};
var _mdgriffith$style_elements$Element_Internal_Model$Below = {ctor: 'Below'};
var _mdgriffith$style_elements$Element_Internal_Model$Justify = {ctor: 'Justify'};
var _mdgriffith$style_elements$Element_Internal_Model$Center = {ctor: 'Center'};
var _mdgriffith$style_elements$Element_Internal_Model$Right = {ctor: 'Right'};
var _mdgriffith$style_elements$Element_Internal_Model$Left = {ctor: 'Left'};
var _mdgriffith$style_elements$Element_Internal_Model$VerticalJustify = {ctor: 'VerticalJustify'};
var _mdgriffith$style_elements$Element_Internal_Model$VerticalCenter = {ctor: 'VerticalCenter'};
var _mdgriffith$style_elements$Element_Internal_Model$Bottom = {ctor: 'Bottom'};
var _mdgriffith$style_elements$Element_Internal_Model$Top = {ctor: 'Top'};

var _mdgriffith$style_elements$Element_Internal_Modify$getChild = function (el) {
	var _p0 = el;
	switch (_p0.ctor) {
		case 'Empty':
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
		case 'Spacer':
			return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p0._0);
		case 'Raw':
			return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p0._0);
		case 'Layout':
			return el;
		case 'Element':
			return _p0._0.child;
		default:
			return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p0._0, _p0._1);
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$removeContent = function (el) {
	var _p1 = el;
	switch (_p1.ctor) {
		case 'Empty':
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
		case 'Spacer':
			return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p1._0);
		case 'Raw':
			return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p1._0);
		case 'Layout':
			return _mdgriffith$style_elements$Element_Internal_Model$Layout(
				_elm_lang$core$Native_Utils.update(
					_p1._0,
					{
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{ctor: '[]'}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}));
		case 'Element':
			return _mdgriffith$style_elements$Element_Internal_Model$Element(
				_elm_lang$core$Native_Utils.update(
					_p1._0,
					{child: _mdgriffith$style_elements$Element_Internal_Model$Empty, absolutelyPositioned: _elm_lang$core$Maybe$Nothing}));
		default:
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$removeStyle = function (el) {
	var _p2 = el;
	switch (_p2.ctor) {
		case 'Empty':
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
		case 'Spacer':
			return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p2._0);
		case 'Raw':
			return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p2._0);
		case 'Layout':
			return _mdgriffith$style_elements$Element_Internal_Model$Layout(
				_elm_lang$core$Native_Utils.update(
					_p2._0,
					{style: _elm_lang$core$Maybe$Nothing}));
		case 'Element':
			return _mdgriffith$style_elements$Element_Internal_Model$Element(
				_elm_lang$core$Native_Utils.update(
					_p2._0,
					{style: _elm_lang$core$Maybe$Nothing}));
		default:
			return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p2._0, _p2._1);
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$getStyle = function (el) {
	var _p3 = el;
	switch (_p3.ctor) {
		case 'Empty':
			return _elm_lang$core$Maybe$Nothing;
		case 'Raw':
			return _elm_lang$core$Maybe$Nothing;
		case 'Spacer':
			return _elm_lang$core$Maybe$Nothing;
		case 'Layout':
			return _p3._0.style;
		case 'Element':
			return _p3._0.style;
		default:
			return _elm_lang$core$Maybe$Nothing;
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$getAttrs = function (el) {
	var _p4 = el;
	switch (_p4.ctor) {
		case 'Empty':
			return {ctor: '[]'};
		case 'Spacer':
			return {ctor: '[]'};
		case 'Raw':
			return {ctor: '[]'};
		case 'Layout':
			return _p4._0.attrs;
		case 'Element':
			return _p4._0.attrs;
		default:
			return {ctor: '[]'};
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$addChild = F2(
	function (parent, el) {
		var _p5 = parent;
		switch (_p5.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {ctor: '[]'},
						child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
						absolutelyPositioned: _elm_lang$core$Maybe$Just(
							{
								ctor: '::',
								_0: el,
								_1: {ctor: '[]'}
							})
					});
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p5._0);
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p5._0);
			case 'Layout':
				var _p7 = _p5._0;
				var _p6 = _p5._0.absolutelyPositioned;
				if (_p6.ctor === 'Nothing') {
					return _mdgriffith$style_elements$Element_Internal_Model$Layout(
						_elm_lang$core$Native_Utils.update(
							_p7,
							{
								absolutelyPositioned: _elm_lang$core$Maybe$Just(
									{
										ctor: '::',
										_0: el,
										_1: {ctor: '[]'}
									})
							}));
				} else {
					return _mdgriffith$style_elements$Element_Internal_Model$Layout(
						_elm_lang$core$Native_Utils.update(
							_p7,
							{
								absolutelyPositioned: _elm_lang$core$Maybe$Just(
									{ctor: '::', _0: el, _1: _p6._0})
							}));
				}
			case 'Element':
				var _p9 = _p5._0;
				var _p8 = _p5._0.absolutelyPositioned;
				if (_p8.ctor === 'Nothing') {
					return _mdgriffith$style_elements$Element_Internal_Model$Element(
						_elm_lang$core$Native_Utils.update(
							_p9,
							{
								absolutelyPositioned: _elm_lang$core$Maybe$Just(
									{
										ctor: '::',
										_0: el,
										_1: {ctor: '[]'}
									})
							}));
				} else {
					return _mdgriffith$style_elements$Element_Internal_Model$Element(
						_elm_lang$core$Native_Utils.update(
							_p9,
							{
								absolutelyPositioned: _elm_lang$core$Maybe$Just(
									{ctor: '::', _0: el, _1: _p8._0})
							}));
				}
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {ctor: '[]'},
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p5._0, _p5._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Just(
							{
								ctor: '::',
								_0: el,
								_1: {ctor: '[]'}
							})
					});
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$removeAllAttrs = function (el) {
	var _p10 = el;
	switch (_p10.ctor) {
		case 'Empty':
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
		case 'Spacer':
			return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p10._0);
		case 'Raw':
			return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p10._0);
		case 'Layout':
			return _mdgriffith$style_elements$Element_Internal_Model$Layout(
				_elm_lang$core$Native_Utils.update(
					_p10._0,
					{
						attrs: {ctor: '[]'}
					}));
		case 'Element':
			return _mdgriffith$style_elements$Element_Internal_Model$Element(
				_elm_lang$core$Native_Utils.update(
					_p10._0,
					{
						attrs: {ctor: '[]'}
					}));
		default:
			return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p10._0, _p10._1);
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$removeAttrs = F2(
	function (props, el) {
		var match = function (p) {
			return !A2(_elm_lang$core$List$member, p, props);
		};
		var _p11 = el;
		switch (_p11.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p11._0);
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p11._0);
			case 'Layout':
				var _p12 = _p11._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p12,
						{
							attrs: A2(_elm_lang$core$List$filter, match, _p12.attrs)
						}));
			case 'Element':
				var _p13 = _p11._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p13,
						{
							attrs: A2(_elm_lang$core$List$filter, match, _p13.attrs)
						}));
			default:
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p11._0, _p11._1);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$setAttrs = F2(
	function (props, el) {
		var _p14 = el;
		switch (_p14.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p14._0);
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p14._0);
			case 'Layout':
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p14._0,
						{attrs: props}));
			case 'Element':
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p14._0,
						{attrs: props}));
			default:
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p14._0, _p14._1);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$addAttrList = F2(
	function (props, el) {
		var _p15 = el;
		switch (_p15.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p15._0);
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p15._0);
			case 'Layout':
				var _p16 = _p15._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p16,
						{
							attrs: A2(_elm_lang$core$Basics_ops['++'], props, _p16.attrs)
						}));
			case 'Element':
				var _p17 = _p15._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p17,
						{
							attrs: A2(_elm_lang$core$Basics_ops['++'], props, _p17.attrs)
						}));
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: props,
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p15._0, _p15._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$addAttrPriority = F2(
	function (prop, el) {
		var _p18 = el;
		switch (_p18.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p18._0);
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p18._0);
			case 'Layout':
				var _p19 = _p18._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p19,
						{
							attrs: A2(
								_elm_lang$core$Basics_ops['++'],
								_p19.attrs,
								{
									ctor: '::',
									_0: prop,
									_1: {ctor: '[]'}
								})
						}));
			case 'Element':
				var _p20 = _p18._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p20,
						{
							attrs: A2(
								_elm_lang$core$Basics_ops['++'],
								_p20.attrs,
								{
									ctor: '::',
									_0: prop,
									_1: {ctor: '[]'}
								})
						}));
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {
							ctor: '::',
							_0: prop,
							_1: {ctor: '[]'}
						},
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p18._0, _p18._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$addAttr = F2(
	function (prop, el) {
		var _p21 = el;
		switch (_p21.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p21._0);
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p21._0);
			case 'Layout':
				var _p22 = _p21._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p22,
						{
							attrs: {ctor: '::', _0: prop, _1: _p22.attrs}
						}));
			case 'Element':
				var _p23 = _p21._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p23,
						{
							attrs: {ctor: '::', _0: prop, _1: _p23.attrs}
						}));
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {
							ctor: '::',
							_0: prop,
							_1: {ctor: '[]'}
						},
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p21._0, _p21._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$addAttrToNonText = F2(
	function (prop, el) {
		var _p24 = el;
		switch (_p24.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p24._0);
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p24._0);
			case 'Layout':
				var _p25 = _p24._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p25,
						{
							attrs: {ctor: '::', _0: prop, _1: _p25.attrs}
						}));
			case 'Element':
				var _p26 = _p24._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p26,
						{
							attrs: {ctor: '::', _0: prop, _1: _p26.attrs}
						}));
			default:
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p24._0, _p24._1);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$makeInline = function (el) {
	var _p27 = el;
	switch (_p27.ctor) {
		case 'Empty':
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
		case 'Raw':
			return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p27._0);
		case 'Spacer':
			return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p27._0);
		case 'Layout':
			var _p28 = _p27._0;
			return _mdgriffith$style_elements$Element_Internal_Model$Layout(
				_elm_lang$core$Native_Utils.update(
					_p28,
					{
						attrs: {ctor: '::', _0: _mdgriffith$style_elements$Element_Internal_Model$Inline, _1: _p28.attrs}
					}));
		case 'Element':
			var _p29 = _p27._0;
			return _mdgriffith$style_elements$Element_Internal_Model$Element(
				_elm_lang$core$Native_Utils.update(
					_p29,
					{
						attrs: {ctor: '::', _0: _mdgriffith$style_elements$Element_Internal_Model$Inline, _1: _p29.attrs},
						child: _mdgriffith$style_elements$Element_Internal_Modify$makeInline(_p29.child)
					}));
		default:
			return A2(
				_mdgriffith$style_elements$Element_Internal_Model$Text,
				_elm_lang$core$Native_Utils.update(
					_p27._0,
					{inline: true}),
				_p27._1);
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$setNode = F2(
	function (node, el) {
		var _p30 = el;
		switch (_p30.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p30._0);
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p30._0);
			case 'Layout':
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p30._0,
						{node: node}));
			case 'Element':
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p30._0,
						{node: node}));
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: node,
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {ctor: '[]'},
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p30._0, _p30._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$wrapHtml = function (el) {
	var _p31 = el;
	if (_p31.ctor === 'Raw') {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Nothing,
				attrs: {ctor: '[]'},
				child: _mdgriffith$style_elements$Element_Internal_Model$Raw(_p31._0),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	} else {
		return _p31;
	}
};

var _mdgriffith$style_elements$Style_Internal_Batchable$toList = function (batchables) {
	var flatten = function (batch) {
		var _p0 = batch;
		switch (_p0.ctor) {
			case 'One':
				return {
					ctor: '::',
					_0: _p0._0,
					_1: {ctor: '[]'}
				};
			case 'Many':
				return _p0._0;
			default:
				return _mdgriffith$style_elements$Style_Internal_Batchable$toList(_p0._0);
		}
	};
	return A2(_elm_lang$core$List$concatMap, flatten, batchables);
};
var _mdgriffith$style_elements$Style_Internal_Batchable$Batch = function (a) {
	return {ctor: 'Batch', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Batchable$batch = _mdgriffith$style_elements$Style_Internal_Batchable$Batch;
var _mdgriffith$style_elements$Style_Internal_Batchable$Many = function (a) {
	return {ctor: 'Many', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Batchable$many = _mdgriffith$style_elements$Style_Internal_Batchable$Many;
var _mdgriffith$style_elements$Style_Internal_Batchable$One = function (a) {
	return {ctor: 'One', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Batchable$one = _mdgriffith$style_elements$Style_Internal_Batchable$One;
var _mdgriffith$style_elements$Style_Internal_Batchable$map = F2(
	function (fn, batchable) {
		var _p1 = batchable;
		switch (_p1.ctor) {
			case 'One':
				return _mdgriffith$style_elements$Style_Internal_Batchable$One(
					fn(_p1._0));
			case 'Many':
				return _mdgriffith$style_elements$Style_Internal_Batchable$Many(
					A2(_elm_lang$core$List$map, fn, _p1._0));
			default:
				return _mdgriffith$style_elements$Style_Internal_Batchable$Batch(
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Batchable$map(fn),
						_p1._0));
		}
	});

var _mdgriffith$style_elements$Style_Internal_Find$variation = F3(
	function ($class, variation, elements) {
		var find = function (el) {
			var _p0 = el;
			if (_p0.ctor === 'Variation') {
				return (_elm_lang$core$Native_Utils.eq($class, _p0._0) && _elm_lang$core$Native_Utils.eq(_p0._1, variation)) ? _elm_lang$core$Maybe$Just(_p0._2) : _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var found = _elm_lang$core$List$head(
			A2(_elm_lang$core$List$filterMap, find, elements));
		var _p1 = found;
		if (_p1.ctor === 'Nothing') {
			return A2(
				_elm_lang$core$Debug$log,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'No ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(variation),
						A2(
							_elm_lang$core$Basics_ops['++'],
							' variation  present for ',
							_elm_lang$core$Basics$toString($class)))),
				'');
		} else {
			return _p1._0;
		}
	});
var _mdgriffith$style_elements$Style_Internal_Find$style = F2(
	function ($class, elements) {
		var find = function (el) {
			var _p2 = el;
			if (_p2.ctor === 'Style') {
				return _elm_lang$core$Native_Utils.eq(_p2._0, $class) ? _elm_lang$core$Maybe$Just(_p2._1) : _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var found = _elm_lang$core$List$head(
			A2(_elm_lang$core$List$filterMap, find, elements));
		var _p3 = found;
		if (_p3.ctor === 'Nothing') {
			return A2(
				_elm_lang$core$Debug$log,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'No style present for ',
					_elm_lang$core$Basics$toString($class)),
				'');
		} else {
			return _p3._0;
		}
	});
var _mdgriffith$style_elements$Style_Internal_Find$Variation = F3(
	function (a, b, c) {
		return {ctor: 'Variation', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Style_Internal_Find$toVariation = F3(
	function ($var, newName, element) {
		var _p4 = element;
		if (_p4.ctor === 'Style') {
			return A3(_mdgriffith$style_elements$Style_Internal_Find$Variation, _p4._0, $var, newName);
		} else {
			return A3(_mdgriffith$style_elements$Style_Internal_Find$Variation, _p4._0, $var, newName);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Find$Style = F2(
	function (a, b) {
		return {ctor: 'Style', _0: a, _1: b};
	});

var _mdgriffith$style_elements$Style_Internal_Selector$getFindable = function (find) {
	getFindable:
	while (true) {
		var _p0 = find;
		switch (_p0.ctor) {
			case 'Select':
				return {
					ctor: '::',
					_0: _p0._1,
					_1: {ctor: '[]'}
				};
			case 'SelectChild':
				var _v1 = _p0._0;
				find = _v1;
				continue getFindable;
			case 'Stack':
				return A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					A2(
						_elm_lang$core$Maybe$map,
						function (x) {
							return {
								ctor: '::',
								_0: x,
								_1: {ctor: '[]'}
							};
						},
						_elm_lang$core$List$head(
							_elm_lang$core$List$reverse(
								A2(_elm_lang$core$List$concatMap, _mdgriffith$style_elements$Style_Internal_Selector$getFindable, _p0._0)))));
			default:
				return {ctor: '[]'};
		}
	}
};
var _mdgriffith$style_elements$Style_Internal_Selector$render = F2(
	function (maybeGuard, selector) {
		var spacer = function (sel) {
			var _p1 = sel;
			if (_p1.ctor === 'Pseudo') {
				return '';
			} else {
				return ' ';
			}
		};
		var renderAndSpace = F2(
			function (i, sel) {
				return _elm_lang$core$Native_Utils.eq(i, 0) ? A2(_mdgriffith$style_elements$Style_Internal_Selector$render, maybeGuard, sel) : A2(
					_elm_lang$core$Basics_ops['++'],
					spacer(sel),
					A2(_mdgriffith$style_elements$Style_Internal_Selector$render, maybeGuard, sel));
			});
		var guard = function (str) {
			var _p2 = maybeGuard;
			if (_p2.ctor === 'Nothing') {
				return str;
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					str,
					A2(_elm_lang$core$Basics_ops['++'], '--', _p2._0));
			}
		};
		var _p3 = selector;
		switch (_p3.ctor) {
			case 'Select':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'.style-elements .',
					guard(_p3._0));
			case 'SelectChild':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'> ',
					A2(_mdgriffith$style_elements$Style_Internal_Selector$render, maybeGuard, _p3._0));
			case 'Free':
				return _p3._0;
			case 'Pseudo':
				return _p3._0;
			default:
				return _elm_lang$core$String$concat(
					A2(_elm_lang$core$List$indexedMap, renderAndSpace, _p3._0));
		}
	});
var _mdgriffith$style_elements$Style_Internal_Selector$topName = function (selector) {
	topName:
	while (true) {
		var _p4 = selector;
		switch (_p4.ctor) {
			case 'Select':
				return _p4._0;
			case 'SelectChild':
				var _v6 = _p4._0;
				selector = _v6;
				continue topName;
			case 'Stack':
				return A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						_elm_lang$core$List$reverse(
							A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Selector$topName, _p4._0))));
			default:
				return '';
		}
	}
};
var _mdgriffith$style_elements$Style_Internal_Selector$uncapitalize = function (str) {
	var tail = A2(_elm_lang$core$String$dropLeft, 1, str);
	var head = _elm_lang$core$String$toLower(
		A2(_elm_lang$core$String$left, 1, str));
	return A2(_elm_lang$core$Basics_ops['++'], head, tail);
};
var _mdgriffith$style_elements$Style_Internal_Selector$formatName = function (x) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[\\s+]'),
		function (_p5) {
			return '-';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('[A-Z0-9]+'),
			function (_p6) {
				var _p7 = _p6;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$String$toLower(_p7.match));
			},
			A4(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
				function (_p8) {
					return '';
				},
				_mdgriffith$style_elements$Style_Internal_Selector$uncapitalize(
					_elm_lang$core$Basics$toString(x)))));
};
var _mdgriffith$style_elements$Style_Internal_Selector$Stack = function (a) {
	return {ctor: 'Stack', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Selector$Free = function (a) {
	return {ctor: 'Free', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Selector$free = function (str) {
	return _mdgriffith$style_elements$Style_Internal_Selector$Free(str);
};
var _mdgriffith$style_elements$Style_Internal_Selector$SelectChild = function (a) {
	return {ctor: 'SelectChild', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Selector$child = F2(
	function (parent, selector) {
		return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
			{
				ctor: '::',
				_0: parent,
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Style_Internal_Selector$SelectChild(selector),
					_1: {ctor: '[]'}
				}
			});
	});
var _mdgriffith$style_elements$Style_Internal_Selector$Pseudo = function (a) {
	return {ctor: 'Pseudo', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Selector$Select = F2(
	function (a, b) {
		return {ctor: 'Select', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Selector$guard = F2(
	function (guard, selector) {
		var addGuard = function (str) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				str,
				A2(_elm_lang$core$Basics_ops['++'], '__', guard));
		};
		var onFindable = function (findable) {
			var _p9 = findable;
			if (_p9.ctor === 'Style') {
				return A2(
					_mdgriffith$style_elements$Style_Internal_Find$Style,
					_p9._0,
					addGuard(_p9._1));
			} else {
				return A3(
					_mdgriffith$style_elements$Style_Internal_Find$Variation,
					_p9._0,
					_p9._1,
					addGuard(_p9._2));
			}
		};
		var onSelector = function (sel) {
			var _p10 = sel;
			switch (_p10.ctor) {
				case 'Select':
					return A2(
						_mdgriffith$style_elements$Style_Internal_Selector$Select,
						addGuard(_p10._0),
						onFindable(_p10._1));
				case 'SelectChild':
					return _mdgriffith$style_elements$Style_Internal_Selector$SelectChild(
						onSelector(_p10._0));
				case 'Stack':
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
						A2(_elm_lang$core$List$map, onSelector, _p10._0));
				default:
					return _p10;
			}
		};
		return onSelector(selector);
	});
var _mdgriffith$style_elements$Style_Internal_Selector$select = function ($class) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Selector$Select,
		_mdgriffith$style_elements$Style_Internal_Selector$formatName($class),
		A2(
			_mdgriffith$style_elements$Style_Internal_Find$Style,
			$class,
			_mdgriffith$style_elements$Style_Internal_Selector$formatName($class)));
};
var _mdgriffith$style_elements$Style_Internal_Selector$variant = F2(
	function (sel, $var) {
		var _p11 = sel;
		switch (_p11.ctor) {
			case 'Pseudo':
				return _mdgriffith$style_elements$Style_Internal_Selector$Pseudo(_p11._0);
			case 'Select':
				var _p12 = _p11._0;
				return A2(
					_mdgriffith$style_elements$Style_Internal_Selector$Select,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p12,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'-',
							_mdgriffith$style_elements$Style_Internal_Selector$formatName($var))),
					A3(
						_mdgriffith$style_elements$Style_Internal_Find$toVariation,
						$var,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p12,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'-',
								_mdgriffith$style_elements$Style_Internal_Selector$formatName($var))),
						_p11._1));
			case 'SelectChild':
				return _mdgriffith$style_elements$Style_Internal_Selector$SelectChild(
					A2(_mdgriffith$style_elements$Style_Internal_Selector$variant, _p11._0, $var));
			case 'Free':
				return _mdgriffith$style_elements$Style_Internal_Selector$Free(_p11._0);
			default:
				var _p14 = _p11._0;
				var init = _elm_lang$core$List$reverse(
					A2(
						_elm_lang$core$List$drop,
						1,
						_elm_lang$core$List$reverse(_p14)));
				var lastElem = _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(_p14));
				var _p13 = lastElem;
				if (_p13.ctor === 'Nothing') {
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(_p14);
				} else {
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
						A2(
							_elm_lang$core$Basics_ops['++'],
							init,
							{
								ctor: '::',
								_0: A2(_mdgriffith$style_elements$Style_Internal_Selector$variant, _p13._0, $var),
								_1: {ctor: '[]'}
							}));
				}
		}
	});
var _mdgriffith$style_elements$Style_Internal_Selector$pseudo = F2(
	function (psu, sel) {
		var _p15 = sel;
		switch (_p15.ctor) {
			case 'Pseudo':
				return _mdgriffith$style_elements$Style_Internal_Selector$Pseudo(
					A2(_elm_lang$core$Basics_ops['++'], _p15._0, psu));
			case 'Select':
				return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
					{
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Style_Internal_Selector$Select, _p15._0, _p15._1),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Internal_Selector$Pseudo(psu),
							_1: {ctor: '[]'}
						}
					});
			case 'SelectChild':
				return _mdgriffith$style_elements$Style_Internal_Selector$SelectChild(
					A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, psu, _p15._0));
			case 'Free':
				return _mdgriffith$style_elements$Style_Internal_Selector$Free(_p15._0);
			default:
				var _p17 = _p15._0;
				var init = _elm_lang$core$List$reverse(
					A2(
						_elm_lang$core$List$drop,
						1,
						_elm_lang$core$List$reverse(_p17)));
				var lastElem = _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(_p17));
				var _p16 = lastElem;
				if (_p16.ctor === 'Nothing') {
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(_p17);
				} else {
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
						A2(
							_elm_lang$core$Basics_ops['++'],
							init,
							{
								ctor: '::',
								_0: A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, psu, _p16._0),
								_1: {ctor: '[]'}
							}));
				}
		}
	});

var _mdgriffith$style_elements$Style_Internal_Render_Css$prop = F2(
	function (i, _p0) {
		var _p1 = _p0;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_elm_lang$core$String$repeat, i, ' '),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p1._0,
				A2(
					_elm_lang$core$Basics_ops['++'],
					': ',
					A2(_elm_lang$core$Basics_ops['++'], _p1._1, ';'))));
	});
var _mdgriffith$style_elements$Style_Internal_Render_Css$brace = F2(
	function (i, str) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			' {\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				str,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\n',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$String$repeat, i, ' '),
						'}'))));
	});

var _mdgriffith$style_elements$Style_Internal_Intermediate$asFindable = function (intermediate) {
	var findableProp = function (prop) {
		var _p0 = prop;
		switch (_p0.ctor) {
			case 'SubClass':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$asFindable(_p0._0);
			case 'PropsAndSub':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$asFindable(_p0._1);
			default:
				return {ctor: '[]'};
		}
	};
	var _p1 = intermediate;
	if (_p1.ctor === 'Class') {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_mdgriffith$style_elements$Style_Internal_Selector$getFindable(_p1._0.selector),
			A2(_elm_lang$core$List$concatMap, findableProp, _p1._0.props));
	} else {
		return {ctor: '[]'};
	}
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$render = function (renderable) {
	var _p2 = renderable;
	switch (_p2.ctor) {
		case 'RenderableClass':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_p2._0,
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_mdgriffith$style_elements$Style_Internal_Render_Css$brace,
						0,
						A2(
							_elm_lang$core$String$join,
							'\n',
							A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Style_Internal_Render_Css$prop(2),
								_p2._1))),
					'\n'));
		case 'RenderableMedia':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_p2._0,
				A2(
					_mdgriffith$style_elements$Style_Internal_Render_Css$brace,
					0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'  ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p2._1,
							A2(
								_mdgriffith$style_elements$Style_Internal_Render_Css$brace,
								2,
								A2(
									_elm_lang$core$String$join,
									'\n',
									A2(
										_elm_lang$core$List$map,
										_mdgriffith$style_elements$Style_Internal_Render_Css$prop(4),
										_p2._2)))))));
		default:
			return _p2._0;
	}
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$hash = function (value) {
	return _elm_lang$core$Basics$toString(
		A2(_Skinney$murmur3$Murmur3$hashString, 8675309, value));
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$calculateGuard = function ($class) {
	var propToString = function (_p3) {
		var _p4 = _p3;
		return A2(_elm_lang$core$Basics_ops['++'], _p4._0, _p4._1);
	};
	var asString = function (prop) {
		var _p5 = prop;
		switch (_p5.ctor) {
			case 'Props':
				return _elm_lang$core$String$concat(
					A2(_elm_lang$core$List$map, propToString, _p5._0));
			case 'SubClass':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$calculateGuard(_p5._0);
			case 'PropsAndSub':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$String$concat(
						A2(_elm_lang$core$List$map, propToString, _p5._0)),
					_mdgriffith$style_elements$Style_Internal_Intermediate$calculateGuard(_p5._1));
			default:
				return '';
		}
	};
	var _p6 = $class;
	switch (_p6.ctor) {
		case 'Class':
			return _elm_lang$core$String$concat(
				A2(_elm_lang$core$List$map, asString, _p6._0.props));
		case 'Media':
			return _elm_lang$core$String$concat(
				A2(_elm_lang$core$List$map, asString, _p6._0.props));
		default:
			return '';
	}
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Free = function (a) {
	return {ctor: 'Free', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Media = function (a) {
	return {ctor: 'Media', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Class = function (a) {
	return {ctor: 'Class', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Animation = {ctor: 'Animation'};
var _mdgriffith$style_elements$Style_Internal_Intermediate$PropsAndSub = F2(
	function (a, b) {
		return {ctor: 'PropsAndSub', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass = function (a) {
	return {ctor: 'SubClass', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$applyGuard = F2(
	function (guard, $class) {
		var guardProp = function (prop) {
			var _p7 = prop;
			if (_p7.ctor === 'SubClass') {
				return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
					A2(_mdgriffith$style_elements$Style_Internal_Intermediate$applyGuard, guard, _p7._0));
			} else {
				return _p7;
			}
		};
		var _p8 = $class;
		switch (_p8.ctor) {
			case 'Class':
				var _p9 = _p8._0;
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Class(
					{
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$guard, guard, _p9.selector),
						props: A2(_elm_lang$core$List$map, guardProp, _p9.props)
					});
			case 'Media':
				var _p10 = _p8._0;
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Media(
					{
						query: _p10.query,
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$guard, guard, _p10.selector),
						props: A2(_elm_lang$core$List$map, guardProp, _p10.props)
					});
			default:
				return _p8;
		}
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$guard = function ($class) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Intermediate$applyGuard,
		_mdgriffith$style_elements$Style_Internal_Intermediate$hash(
			_mdgriffith$style_elements$Style_Internal_Intermediate$calculateGuard($class)),
		$class);
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$asMediaQuery = F2(
	function (query, prop) {
		var classAsMediaQuery = function (cls) {
			var _p11 = cls;
			if (_p11.ctor === 'Class') {
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Media(
					{query: query, selector: _p11._0.selector, props: _p11._0.props});
			} else {
				return _p11;
			}
		};
		var _p12 = prop;
		switch (_p12.ctor) {
			case 'SubClass':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
					classAsMediaQuery(_p12._0));
			case 'PropsAndSub':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Intermediate$PropsAndSub,
					_p12._0,
					classAsMediaQuery(_p12._1));
			default:
				return _p12;
		}
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$Props = function (a) {
	return {ctor: 'Props', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$props = _mdgriffith$style_elements$Style_Internal_Intermediate$Props;
var _mdgriffith$style_elements$Style_Internal_Intermediate$RenderableFree = function (a) {
	return {ctor: 'RenderableFree', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$RenderableMedia = F3(
	function (a, b, c) {
		return {ctor: 'RenderableMedia', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$RenderableClass = F2(
	function (a, b) {
		return {ctor: 'RenderableClass', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable = function (cls) {
	var renderableProps = F2(
		function (prop, _p13) {
			var _p14 = _p13;
			var _p17 = _p14._1;
			var _p16 = _p14._0;
			var _p15 = prop;
			switch (_p15.ctor) {
				case 'Props':
					return {
						ctor: '_Tuple2',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p16, _p15._0),
						_1: _p17
					};
				case 'SubClass':
					return {
						ctor: '_Tuple2',
						_0: _p16,
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_p17,
							_mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable(_p15._0))
					};
				case 'PropsAndSub':
					return {
						ctor: '_Tuple2',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p16, _p15._0),
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_p17,
							_mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable(_p15._1))
					};
				default:
					return {ctor: '_Tuple2', _0: _p16, _1: _p17};
			}
		});
	var _p18 = cls;
	switch (_p18.ctor) {
		case 'Class':
			var _p19 = A3(
				_elm_lang$core$List$foldl,
				renderableProps,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'}
				},
				_p18._0.props);
			var rendered = _p19._0;
			var subelements = _p19._1;
			return {
				ctor: '::',
				_0: A2(
					_mdgriffith$style_elements$Style_Internal_Intermediate$RenderableClass,
					A2(_mdgriffith$style_elements$Style_Internal_Selector$render, _elm_lang$core$Maybe$Nothing, _p18._0.selector),
					rendered),
				_1: subelements
			};
		case 'Media':
			var _p20 = A3(
				_elm_lang$core$List$foldl,
				renderableProps,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'}
				},
				_p18._0.props);
			var rendered = _p20._0;
			var subelements = _p20._1;
			return {
				ctor: '::',
				_0: A3(
					_mdgriffith$style_elements$Style_Internal_Intermediate$RenderableMedia,
					_p18._0.query,
					A2(_mdgriffith$style_elements$Style_Internal_Selector$render, _elm_lang$core$Maybe$Nothing, _p18._0.selector),
					rendered),
				_1: subelements
			};
		default:
			return {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Internal_Intermediate$RenderableFree(_p18._0),
				_1: {ctor: '[]'}
			};
	}
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$raw = function (cls) {
	var topName = function () {
		var _p21 = cls;
		switch (_p21.ctor) {
			case 'Class':
				return _mdgriffith$style_elements$Style_Internal_Selector$topName(_p21._0.selector);
			case 'Media':
				return _mdgriffith$style_elements$Style_Internal_Selector$topName(_p21._0.selector);
			default:
				return '';
		}
	}();
	return {
		ctor: '_Tuple2',
		_0: topName,
		_1: A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				_mdgriffith$style_elements$Style_Internal_Intermediate$render,
				_mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable(cls)))
	};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Rendered = function (a) {
	return {ctor: 'Rendered', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$finalize = function (intermediates) {
	var finalizeCss = function (cls) {
		return A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				_mdgriffith$style_elements$Style_Internal_Intermediate$render,
				_mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable(cls)));
	};
	return _mdgriffith$style_elements$Style_Internal_Intermediate$Rendered(
		{
			css: A2(
				_elm_lang$core$String$join,
				'\n',
				A2(_elm_lang$core$List$map, finalizeCss, intermediates)),
			findable: A2(_elm_lang$core$List$concatMap, _mdgriffith$style_elements$Style_Internal_Intermediate$asFindable, intermediates)
		});
};

var _mdgriffith$style_elements$Style_Internal_Render_Value$typeface = function (families) {
	var renderFont = function (font) {
		var _p0 = font;
		switch (_p0.ctor) {
			case 'Serif':
				return 'serif';
			case 'SansSerif':
				return 'sans-serif';
			case 'Cursive':
				return 'cursive';
			case 'Fantasy':
				return 'fantasy';
			case 'Monospace':
				return 'monospace';
			case 'FontName':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'\"',
					A2(_elm_lang$core$Basics_ops['++'], _p0._0, '\"'));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'\"',
					A2(_elm_lang$core$Basics_ops['++'], _p0._0, '\"'));
		}
	};
	return A2(
		_elm_lang$core$String$join,
		', ',
		A2(_elm_lang$core$List$map, renderFont, families));
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$gridPosition = function (_p1) {
	var _p2 = _p1;
	var _p7 = _p2._0.width;
	var _p6 = _p2._0.height;
	var _p3 = _p2._0.start;
	var x = _p3._0;
	var y = _p3._1;
	var _p4 = {ctor: '_Tuple2', _0: y + 1, _1: (y + 1) + _p6};
	var rowStart = _p4._0;
	var rowEnd = _p4._1;
	var _p5 = {ctor: '_Tuple2', _0: x + 1, _1: (x + 1) + _p7};
	var colStart = _p5._0;
	var colEnd = _p5._1;
	return (_elm_lang$core$Native_Utils.eq(_p7, 0) || _elm_lang$core$Native_Utils.eq(_p6, 0)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
		A2(
			_elm_lang$core$String$join,
			' / ',
			{
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(rowStart),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(colStart),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(rowEnd),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(colEnd),
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$color = function (color) {
	var _p8 = _elm_lang$core$Color$toRgb(color);
	var red = _p8.red;
	var green = _p8.green;
	var blue = _p8.blue;
	var alpha = _p8.alpha;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		A2(
			_elm_lang$core$Basics_ops['++'],
			'rgba(',
			_elm_lang$core$Basics$toString(red)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$Basics_ops['++'],
				',',
				_elm_lang$core$Basics$toString(green)),
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Basics_ops['++'],
					',',
					_elm_lang$core$Basics$toString(blue)),
				A2(
					_elm_lang$core$Basics_ops['++'],
					',',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(alpha),
						')')))));
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$shadow = function (_p9) {
	var _p10 = _p9;
	var _p11 = _p10._0;
	return A2(
		_elm_lang$core$String$join,
		' ',
		A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$core$Basics$identity,
			{
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.eq(_p11.kind, 'inset') ? _elm_lang$core$Maybe$Just('inset') : _elm_lang$core$Maybe$Nothing,
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Maybe$Just(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Tuple$first(_p11.offset)),
							'px')),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Maybe$Just(
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									_elm_lang$core$Tuple$second(_p11.offset)),
								'px')),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p11.blur),
									'px')),
							_1: {
								ctor: '::',
								_0: (_elm_lang$core$Native_Utils.eq(_p11.kind, 'text') || _elm_lang$core$Native_Utils.eq(_p11.kind, 'drop')) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p11.size),
										'px')),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Maybe$Just(
										_mdgriffith$style_elements$Style_Internal_Render_Value$color(_p11.color)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}));
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength = F2(
	function (len, adjustment) {
		var _p12 = len;
		switch (_p12.ctor) {
			case 'Px':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p12._0),
					'px');
			case 'Percent':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'calc(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p12._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'% - ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(adjustment),
								'px)'))));
			case 'Auto':
				return 'auto';
			case 'Fill':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'calc(100% - ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(adjustment),
						'px)'));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'calc(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p12._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'% + ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p12._1),
								'px)'))));
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render_Value$length = function (l) {
	var _p13 = l;
	switch (_p13.ctor) {
		case 'Px':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p13._0),
				'px');
		case 'Percent':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p13._0),
				'%');
		case 'Auto':
			return 'auto';
		case 'Fill':
			return '100%';
		default:
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'calc(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p13._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'% + ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p13._1),
							'px)'))));
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$box = function (_p14) {
	var _p15 = _p14;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(_p15._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'px ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p15._1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'px ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p15._2),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p15._3),
								'px')))))));
};

var _mdgriffith$style_elements$Style_Internal_Render_Property$flexbox = F2(
	function (dir, el) {
		var _p0 = el;
		switch (_p0.ctor) {
			case 'Wrap':
				return _p0._0 ? {ctor: '_Tuple2', _0: 'flex-wrap', _1: 'wrap'} : {ctor: '_Tuple2', _0: 'flex-wrap', _1: 'nowrap'};
			case 'Horz':
				var _p6 = _p0._0;
				var _p1 = dir;
				switch (_p1.ctor) {
					case 'GoRight':
						var _p2 = _p6;
						switch (_p2.ctor) {
							case 'Other':
								if (_p2._0.ctor === 'Left') {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
							default:
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
						}
					case 'GoLeft':
						var _p3 = _p6;
						switch (_p3.ctor) {
							case 'Other':
								if (_p3._0.ctor === 'Left') {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-end'};
								} else {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-start'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
							default:
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
						}
					case 'Down':
						var _p4 = _p6;
						switch (_p4.ctor) {
							case 'Other':
								if (_p4._0.ctor === 'Left') {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
					default:
						var _p5 = _p6;
						switch (_p5.ctor) {
							case 'Other':
								if (_p5._0.ctor === 'Left') {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
				}
			default:
				var _p12 = _p0._0;
				var _p7 = dir;
				switch (_p7.ctor) {
					case 'GoRight':
						var _p8 = _p12;
						switch (_p8.ctor) {
							case 'Other':
								if (_p8._0.ctor === 'Top') {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
					case 'GoLeft':
						var _p9 = _p12;
						switch (_p9.ctor) {
							case 'Other':
								if (_p9._0.ctor === 'Top') {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
					case 'Down':
						var _p10 = _p12;
						switch (_p10.ctor) {
							case 'Other':
								if (_p10._0.ctor === 'Top') {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
					default:
						var _p11 = _p12;
						switch (_p11.ctor) {
							case 'Other':
								if (_p11._0.ctor === 'Top') {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-end'};
								} else {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-start'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
				}
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render_Property$transition = function (_p13) {
	var _p14 = _p13;
	var formatTrans = function (prop) {
		return A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: prop,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p14._0.duration * _elm_lang$core$Time$millisecond),
						'ms'),
					_1: {
						ctor: '::',
						_0: _p14._0.easing,
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p14._0.delay * _elm_lang$core$Time$millisecond),
								'ms'),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	};
	return A2(
		_elm_lang$core$String$join,
		', ',
		A2(_elm_lang$core$List$map, formatTrans, _p14._0.props));
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$direction = function (dir) {
	var _p15 = dir;
	switch (_p15.ctor) {
		case 'GoRight':
			return {ctor: '_Tuple2', _0: 'flex-direction', _1: 'row'};
		case 'GoLeft':
			return {ctor: '_Tuple2', _0: 'flex-direction', _1: 'row-reverse'};
		case 'Down':
			return {ctor: '_Tuple2', _0: 'flex-direction', _1: 'column'};
		default:
			return {ctor: '_Tuple2', _0: 'flex-direction', _1: 'column-reverse'};
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$gridAlignment = function (align) {
	var _p16 = align;
	switch (_p16.ctor) {
		case 'GridGap':
			return {
				ctor: '_Tuple2',
				_0: 'grid-gap',
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p16._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'px ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p16._1),
							'px')))
			};
		case 'GridH':
			var _p17 = _p16._0;
			switch (_p17.ctor) {
				case 'Other':
					if (_p17._0.ctor === 'Left') {
						return {ctor: '_Tuple2', _0: 'justify-content', _1: 'start'};
					} else {
						return {ctor: '_Tuple2', _0: 'justify-content', _1: 'end'};
					}
				case 'Center':
					return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
				case 'Justify':
					return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
				default:
					return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
			}
		default:
			var _p18 = _p16._0;
			switch (_p18.ctor) {
				case 'Other':
					if (_p18._0.ctor === 'Top') {
						return {ctor: '_Tuple2', _0: 'align-content', _1: 'start'};
					} else {
						return {ctor: '_Tuple2', _0: 'align-content', _1: 'end'};
					}
				case 'Center':
					return {ctor: '_Tuple2', _0: 'align-content', _1: 'center'};
				case 'Justify':
					return {ctor: '_Tuple2', _0: 'align-content', _1: 'space-between'};
				default:
					return {ctor: '_Tuple2', _0: 'align-content', _1: 'space-between'};
			}
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$layout = F2(
	function (inline, lay) {
		var _p19 = lay;
		switch (_p19.ctor) {
			case 'TextLayout':
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'display',
						_1: inline ? 'inline-block' : 'block'
					},
					_1: {ctor: '[]'}
				};
			case 'FlexLayout':
				var _p20 = _p19._0;
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'display',
						_1: inline ? 'inline-flex' : 'flex'
					},
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Render_Property$direction(_p20),
						_1: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Render_Property$flexbox(_p20),
							_p19._1)
					}
				};
			default:
				if (_p19._0.ctor === 'NamedGridTemplate') {
					var _p31 = _p19._0._0.rows;
					var _p30 = _p19._0._0.columns;
					var areaSpan = function (_p21) {
						var _p22 = _p21;
						var name = function () {
							var _p23 = _p22._1;
							if (_p23.ctor === 'Nothing') {
								return '.';
							} else {
								return _p23._0;
							}
						}();
						var _p24 = _p22._0;
						if (_p24.ctor === 'SpanAll') {
							return A2(
								_elm_lang$core$List$repeat,
								_elm_lang$core$List$length(_p30),
								name);
						} else {
							return A2(_elm_lang$core$List$repeat, _p24._0, name);
						}
					};
					var areasInRow = function (areas) {
						var areaStrs = A2(_elm_lang$core$List$concatMap, areaSpan, areas);
						var quote = function (str) {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'\"',
								A2(_elm_lang$core$Basics_ops['++'], str, '\"'));
						};
						if (_elm_lang$core$Native_Utils.cmp(
							_elm_lang$core$List$length(areaStrs),
							_elm_lang$core$List$length(_p30)) > 0) {
							var _p25 = A2(
								_elm_lang$core$Basics_ops['++'],
								A2(_elm_lang$core$Debug$log, 'style-elements', 'Named grid row ('),
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(areas),
									') is too big for this grid!'));
							return quote(
								A2(_elm_lang$core$String$join, ' ', areaStrs));
						} else {
							if (_elm_lang$core$Native_Utils.cmp(
								_elm_lang$core$List$length(areaStrs),
								_elm_lang$core$List$length(_p30)) < 0) {
								var _p26 = A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_elm_lang$core$Debug$log, 'style-elements', 'Named grid row ('),
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(areas),
										') doesn\'t have enough names to fit this grid!'));
								return quote(
									A2(_elm_lang$core$String$join, ' ', areaStrs));
							} else {
								return quote(
									A2(_elm_lang$core$String$join, ' ', areaStrs));
							}
						}
					};
					var alignment = A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Property$gridAlignment, _p19._1);
					var renderLen = function (len) {
						var _p27 = len;
						switch (_p27.ctor) {
							case 'Px':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p27._0),
									'px');
							case 'Percent':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p27._0),
									'%');
							case 'Auto':
								return 'auto';
							case 'Fill':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p27._0),
									'fr');
							default:
								return A2(
									_elm_lang$core$Basics_ops['++'],
									'calc(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p27._0),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'% + ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p27._1),
												'px)'))));
						}
					};
					var grid = inline ? {ctor: '_Tuple2', _0: 'display', _1: 'inline-grid'} : {ctor: '_Tuple2', _0: 'display', _1: 'grid'};
					return {
						ctor: '::',
						_0: grid,
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'grid-template-rows',
								_1: A2(
									_elm_lang$core$String$join,
									' ',
									A2(
										_elm_lang$core$List$map,
										function (_p28) {
											return renderLen(
												_elm_lang$core$Tuple$first(_p28));
										},
										_p31))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'grid-template-columns',
									_1: A2(
										_elm_lang$core$String$join,
										' ',
										A2(_elm_lang$core$List$map, renderLen, _p30))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'grid-template-areas',
										_1: A2(
											_elm_lang$core$String$join,
											'\n',
											A2(
												_elm_lang$core$List$map,
												function (_p29) {
													return areasInRow(
														_elm_lang$core$Tuple$second(_p29));
												},
												_p31))
									},
									_1: alignment
								}
							}
						}
					};
				} else {
					var alignment = A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Property$gridAlignment, _p19._1);
					var renderLen = function (len) {
						var _p32 = len;
						switch (_p32.ctor) {
							case 'Px':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p32._0),
									'px');
							case 'Percent':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p32._0),
									'%');
							case 'Auto':
								return 'auto';
							case 'Fill':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p32._0),
									'fr');
							default:
								return A2(
									_elm_lang$core$Basics_ops['++'],
									'calc(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p32._0),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'% + ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p32._1),
												'px)'))));
						}
					};
					var grid = inline ? {ctor: '_Tuple2', _0: 'display', _1: 'inline-grid'} : {ctor: '_Tuple2', _0: 'display', _1: 'grid'};
					return {
						ctor: '::',
						_0: grid,
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'grid-template-rows',
								_1: A2(
									_elm_lang$core$String$join,
									' ',
									A2(_elm_lang$core$List$map, renderLen, _p19._0._0.rows))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'grid-template-columns',
									_1: A2(
										_elm_lang$core$String$join,
										' ',
										A2(_elm_lang$core$List$map, renderLen, _p19._0._0.columns))
								},
								_1: alignment
							}
						}
					};
				}
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render_Property$background = function (prop) {
	var renderStep = function (step) {
		var _p33 = step;
		switch (_p33.ctor) {
			case 'ColorStep':
				return _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p33._0);
			case 'PercentStep':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$style_elements$Style_Internal_Render_Value$color(_p33._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p33._1),
							'%')));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$style_elements$Style_Internal_Render_Value$color(_p33._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p33._1),
							'px')));
		}
	};
	var directionName = function (dir) {
		var _p34 = dir;
		switch (_p34.ctor) {
			case 'ToUp':
				return 'to top';
			case 'ToDown':
				return 'to bottomn';
			case 'ToRight':
				return 'to right';
			case 'ToTopRight':
				return 'to top right';
			case 'ToBottomRight':
				return 'to bottom right';
			case 'ToLeft':
				return 'to left';
			case 'ToTopLeft':
				return 'to top left';
			case 'ToBottomLeft':
				return 'to bottom left';
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p34._0),
					'rad');
		}
	};
	var _p35 = prop;
	switch (_p35.ctor) {
		case 'BackgroundElement':
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _p35._0, _1: _p35._1},
				_1: {ctor: '[]'}
			};
		case 'BackgroundImage':
			var _p38 = _p35._0.position;
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'background-image',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'url(',
						A2(_elm_lang$core$Basics_ops['++'], _p35._0.src, ')'))
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'background-position',
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Tuple$first(_p38)),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'px ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$Tuple$second(_p38)),
									'px')))
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'background-repeat',
							_1: function () {
								var _p36 = _p35._0.repeat;
								switch (_p36.ctor) {
									case 'RepeatX':
										return 'repeat-x';
									case 'RepeatY':
										return 'repeat-y';
									case 'Repeat':
										return 'repeat';
									case 'Space':
										return 'space';
									case 'Round':
										return 'round';
									default:
										return 'no-repeat';
								}
							}()
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'background-size',
								_1: function () {
									var _p37 = _p35._0.size;
									switch (_p37.ctor) {
										case 'Contain':
											return 'container';
										case 'Cover':
											return 'cover';
										case 'BackgroundWidth':
											return A2(
												_elm_lang$core$Basics_ops['++'],
												_mdgriffith$style_elements$Style_Internal_Render_Value$length(_p37._0),
												' auto');
										case 'BackgroundHeight':
											return A2(
												_elm_lang$core$Basics_ops['++'],
												'auto ',
												_mdgriffith$style_elements$Style_Internal_Render_Value$length(_p37._0));
										default:
											return A2(
												_elm_lang$core$Basics_ops['++'],
												_mdgriffith$style_elements$Style_Internal_Render_Value$length(_p37._0.width),
												A2(
													_elm_lang$core$Basics_ops['++'],
													' ',
													_mdgriffith$style_elements$Style_Internal_Render_Value$length(_p37._0.height)));
									}
								}()
							},
							_1: {ctor: '[]'}
						}
					}
				}
			};
		default:
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'background-image',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'linear-gradient(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$String$join,
								', ',
								{
									ctor: '::',
									_0: directionName(_p35._0),
									_1: A2(_elm_lang$core$List$map, renderStep, _p35._1)
								}),
							')'))
				},
				_1: {ctor: '[]'}
			};
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$position = function (posEls) {
	var renderPos = function (pos) {
		var _p39 = pos;
		switch (_p39.ctor) {
			case 'RelativeTo':
				switch (_p39._0.ctor) {
					case 'Screen':
						return {ctor: '_Tuple2', _0: 'position', _1: 'fixed'};
					case 'Parent':
						return {ctor: '_Tuple2', _0: 'position', _1: 'absolute'};
					default:
						return {ctor: '_Tuple2', _0: 'position', _1: 'relative'};
				}
			case 'PosLeft':
				return {
					ctor: '_Tuple2',
					_0: 'left',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p39._0),
						'px')
				};
			case 'PosRight':
				return {
					ctor: '_Tuple2',
					_0: 'right',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p39._0),
						'px')
				};
			case 'PosTop':
				return {
					ctor: '_Tuple2',
					_0: 'top',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p39._0),
						'px')
				};
			case 'PosBottom':
				return {
					ctor: '_Tuple2',
					_0: 'bottom',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p39._0),
						'px')
				};
			case 'ZIndex':
				return {
					ctor: '_Tuple2',
					_0: 'z-index',
					_1: _elm_lang$core$Basics$toString(_p39._0)
				};
			case 'Inline':
				return {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'};
			default:
				switch (_p39._0.ctor) {
					case 'FloatLeft':
						return {ctor: '_Tuple2', _0: 'float', _1: 'left'};
					case 'FloatRight':
						return {ctor: '_Tuple2', _0: 'float', _1: 'right'};
					case 'FloatTopLeft':
						return {ctor: '_Tuple2', _0: 'float', _1: 'left'};
					default:
						return {ctor: '_Tuple2', _0: 'float', _1: 'right'};
				}
		}
	};
	return A2(_elm_lang$core$List$map, renderPos, posEls);
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$transformations = function (transforms) {
	var transformToString = function (transform) {
		var _p40 = transform;
		switch (_p40.ctor) {
			case 'Translate':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'translate3d(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p40._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px, ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p40._1),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'px, ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p40._2),
										'px)'))))));
			case 'RotateAround':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'rotate3d(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p40._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							',',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p40._1),
								A2(
									_elm_lang$core$Basics_ops['++'],
									',',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p40._2),
										A2(
											_elm_lang$core$Basics_ops['++'],
											',',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p40._3),
												'rad)'))))))));
			case 'Rotate':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'rotate(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p40._0),
						'rad)'));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'scale3d(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p40._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							', ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p40._1),
								A2(
									_elm_lang$core$Basics_ops['++'],
									', ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p40._2),
										')'))))));
		}
	};
	var transformString = A2(
		_elm_lang$core$String$join,
		' ',
		A2(_elm_lang$core$List$map, transformToString, transforms));
	var renderedTransforms = (_elm_lang$core$Native_Utils.cmp(
		_elm_lang$core$String$length(transformString),
		0) > 0) ? {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'transform', _1: transformString},
		_1: {ctor: '[]'}
	} : {ctor: '[]'};
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(transforms),
		0) ? {ctor: '[]'} : renderedTransforms;
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$box = function (_p41) {
	var _p42 = _p41;
	return {ctor: '_Tuple2', _0: _p42._0, _1: _p42._1};
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$shadow = function (shadows) {
	var _p43 = A2(
		_elm_lang$core$List$partition,
		function (_p44) {
			var _p45 = _p44;
			return _elm_lang$core$Native_Utils.eq(_p45._0.kind, 'text');
		},
		shadows);
	var text = _p43._0;
	var box = _p43._1;
	var renderedBox = A2(
		_elm_lang$core$String$join,
		', ',
		A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Value$shadow, box));
	var renderedText = A2(
		_elm_lang$core$String$join,
		', ',
		A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Value$shadow, text));
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		{
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.eq(renderedBox, '') ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
				{ctor: '_Tuple2', _0: 'box-shadow', _1: renderedBox}),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.eq(renderedText, '') ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: 'text-shadow', _1: renderedText}),
				_1: {ctor: '[]'}
			}
		});
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$filters = function (filters) {
	var filterName = function (filtr) {
		var _p46 = filtr;
		switch (_p46.ctor) {
			case 'FilterUrl':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'url(',
					A2(_elm_lang$core$Basics_ops['++'], _p46._0, ')'));
			case 'Blur':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'blur(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p46._0),
						'px)'));
			case 'Brightness':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'brightness(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p46._0),
						'%)'));
			case 'Contrast':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'contrast(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p46._0),
						'%)'));
			case 'Grayscale':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'grayscale(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p46._0),
						'%)'));
			case 'HueRotate':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'hueRotate(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p46._0),
						'deg)'));
			case 'Invert':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'invert(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p46._0),
						'%)'));
			case 'OpacityFilter':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'opacity(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p46._0),
						'%)'));
			case 'Saturate':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'saturate(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p46._0),
						'%)'));
			case 'Sepia':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'sepia(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p46._0),
						'%)'));
			default:
				var _p47 = _p46._0;
				var shadowModel = _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
					{kind: 'drop', offset: _p47.offset, size: _p47.size, blur: _p47.blur, color: _p47.color});
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'drop-shadow(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_mdgriffith$style_elements$Style_Internal_Render_Value$shadow(shadowModel),
						')'));
		}
	};
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(filters),
		0) ? {ctor: '[]'} : {
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'filter',
			_1: A2(
				_elm_lang$core$String$join,
				' ',
				A2(_elm_lang$core$List$map, filterName, filters))
		},
		_1: {ctor: '[]'}
	};
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$flexHeight = function (l) {
	var _p48 = l;
	switch (_p48.ctor) {
		case 'Px':
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'height',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p48._0),
						'px')
				},
				_1: {ctor: '[]'}
			};
		case 'Percent':
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'height',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p48._0),
						'%')
				},
				_1: {ctor: '[]'}
			};
		case 'Auto':
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'height', _1: 'auto'},
				_1: {ctor: '[]'}
			};
		case 'Fill':
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'flex-grow',
					_1: _elm_lang$core$Basics$toString(_p48._0)
				},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'flex-basis', _1: '0'},
					_1: {ctor: '[]'}
				}
			};
		default:
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'height',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'calc(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p48._0),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'% + ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p48._1),
									'px)'))))
				},
				_1: {ctor: '[]'}
			};
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$flexWidth = F2(
	function (len, adjustment) {
		var _p49 = len;
		switch (_p49.ctor) {
			case 'Px':
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'width',
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p49._0),
							'px')
					},
					_1: {ctor: '[]'}
				};
			case 'Percent':
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'width',
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							'calc(',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p49._0),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'% - ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(adjustment),
										'px)'))))
					},
					_1: {ctor: '[]'}
				};
			case 'Auto':
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'width', _1: 'auto'},
					_1: {ctor: '[]'}
				};
			case 'Fill':
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'flex-grow',
						_1: _elm_lang$core$Basics$toString(_p49._0)
					},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'flex-basis', _1: '0'},
						_1: {ctor: '[]'}
					}
				};
			default:
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'width',
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							'calc(',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p49._0),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'% + ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p49._1),
										'px)'))))
					},
					_1: {ctor: '[]'}
				};
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render_Property$visibility = function (vis) {
	var _p50 = vis;
	switch (_p50.ctor) {
		case 'Hidden':
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'display', _1: 'none'},
				_1: {ctor: '[]'}
			};
		case 'Invisible':
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'visibility', _1: 'hidden'},
				_1: {ctor: '[]'}
			};
		default:
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'opacity',
					_1: _elm_lang$core$Basics$toString(_p50._0)
				},
				_1: {ctor: '[]'}
			};
	}
};

var _mdgriffith$style_elements$Style_Internal_Render$renderVariationProp = F2(
	function (parentClass, prop) {
		var _p0 = prop;
		switch (_p0.ctor) {
			case 'Child':
				return _elm_lang$core$Maybe$Nothing;
			case 'Variation':
				return _elm_lang$core$Maybe$Nothing;
			case 'PseudoElement':
				return function (_p1) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
							_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p1)));
				}(
					{
						selector: A2(
							_elm_lang$core$Debug$log,
							'rendering variation pseudo',
							A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, _p0._0, parentClass)),
						props: A2(
							_elm_lang$core$List$filterMap,
							_mdgriffith$style_elements$Style_Internal_Render$renderVariationProp(parentClass),
							_p0._1)
					});
			case 'MediaQuery':
				var _p3 = _p0._0;
				return function (_p2) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
							_mdgriffith$style_elements$Style_Internal_Intermediate$Media(_p2)));
				}(
					{
						query: A2(_elm_lang$core$Basics_ops['++'], '@media ', _p3),
						selector: parentClass,
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Intermediate$asMediaQuery(_p3),
							A2(
								_elm_lang$core$List$filterMap,
								_mdgriffith$style_elements$Style_Internal_Render$renderVariationProp(parentClass),
								_p0._1))
					});
			case 'Exact':
				return function (_p4) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p4));
				}(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p0._0, _1: _p0._1},
						_1: {ctor: '[]'}
					});
			case 'Visibility':
				return function (_p5) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p5));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$visibility(_p0._0));
			case 'Position':
				return function (_p6) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p6));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$position(_p0._0));
			case 'Font':
				return function (_p7) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p7));
				}(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p0._0, _1: _p0._1},
						_1: {ctor: '[]'}
					});
			case 'FontFamily':
				return function (_p8) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p8));
				}(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'font-family',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$typeface(_p0._0)
						},
						_1: {ctor: '[]'}
					});
			case 'Layout':
				return function (_p9) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p9));
				}(
					A2(_mdgriffith$style_elements$Style_Internal_Render_Property$layout, false, _p0._0));
			case 'Background':
				return function (_p10) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p10));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$background(_p0._0));
			case 'Shadows':
				return function (_p11) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p11));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$shadow(_p0._0));
			case 'Transform':
				return function (_p12) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p12));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$transformations(_p0._0));
			case 'Filters':
				return function (_p13) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p13));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$filters(_p0._0));
			case 'TextColor':
				return function (_p14) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p14));
				}(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'color',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p0._0)
						},
						_1: {ctor: '[]'}
					});
			case 'SelectionColor':
				return function (_p15) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
							_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p15)));
				}(
					{
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, '::selection', parentClass),
						props: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Internal_Intermediate$props(
								{
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'background-color',
										_1: _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p0._0)
									},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					});
			default:
				return _elm_lang$core$Maybe$Just(
					_mdgriffith$style_elements$Style_Internal_Intermediate$props(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'transition',
								_1: A2(
									_elm_lang$core$String$join,
									', ',
									A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Property$transition, _p0._0))
							},
							_1: {ctor: '[]'}
						}));
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render$renderProp = F2(
	function (parentClass, prop) {
		var _p16 = prop;
		switch (_p16.ctor) {
			case 'Child':
				return function (_p17) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p17));
				}(
					{
						selector: A2(
							_mdgriffith$style_elements$Style_Internal_Selector$child,
							parentClass,
							_mdgriffith$style_elements$Style_Internal_Selector$select(_p16._0)),
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Render$renderProp(parentClass),
							_p16._1)
					});
			case 'Variation':
				var selectVariation = A2(_mdgriffith$style_elements$Style_Internal_Selector$variant, parentClass, _p16._0);
				return function (_p18) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p18));
				}(
					{
						selector: selectVariation,
						props: A2(
							_elm_lang$core$List$filterMap,
							_mdgriffith$style_elements$Style_Internal_Render$renderVariationProp(selectVariation),
							_p16._1)
					});
			case 'PseudoElement':
				return function (_p19) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p19));
				}(
					{
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, _p16._0, parentClass),
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Render$renderProp(parentClass),
							_p16._1)
					});
			case 'MediaQuery':
				var _p21 = _p16._0;
				return function (_p20) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Media(_p20));
				}(
					{
						query: A2(_elm_lang$core$Basics_ops['++'], '@media ', _p21),
						selector: parentClass,
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Intermediate$asMediaQuery(_p21),
							A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Style_Internal_Render$renderProp(parentClass),
								_p16._1))
					});
			case 'Exact':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p16._0, _1: _p16._1},
						_1: {ctor: '[]'}
					});
			case 'Visibility':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$visibility(_p16._0));
			case 'Position':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$position(_p16._0));
			case 'Font':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p16._0, _1: _p16._1},
						_1: {ctor: '[]'}
					});
			case 'Layout':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					A2(_mdgriffith$style_elements$Style_Internal_Render_Property$layout, false, _p16._0));
			case 'Background':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$background(_p16._0));
			case 'Shadows':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$shadow(_p16._0));
			case 'Transform':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$transformations(_p16._0));
			case 'Filters':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$filters(_p16._0));
			case 'SelectionColor':
				return function (_p22) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p22));
				}(
					{
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, '::selection', parentClass),
						props: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Internal_Intermediate$props(
								{
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'background-color',
										_1: _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p16._0)
									},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					});
			case 'TextColor':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'color',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p16._0)
						},
						_1: {ctor: '[]'}
					});
			case 'Transitions':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'transition',
							_1: A2(
								_elm_lang$core$String$join,
								', ',
								A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Property$transition, _p16._0))
						},
						_1: {ctor: '[]'}
					});
			default:
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'font-family',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$typeface(_p16._0)
						},
						_1: {ctor: '[]'}
					});
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render$preprocess = function (style) {
	var _p23 = style;
	if (_p23.ctor === 'Style') {
		var mergeShadowsAndFilters = function (props) {
			var combine = function (_p24) {
				var _p25 = _p24;
				return {
					ctor: '::',
					_0: _mdgriffith$style_elements$Style_Internal_Model$Filters(_p25.filters),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Model$Shadows(_p25.shadows),
						_1: _p25.others
					}
				};
			};
			var gather = F2(
				function (prop, existing) {
					var _p26 = prop;
					switch (_p26.ctor) {
						case 'Filters':
							return _elm_lang$core$Native_Utils.update(
								existing,
								{
									filters: A2(_elm_lang$core$Basics_ops['++'], _p26._0, existing.filters)
								});
						case 'Shadows':
							return _elm_lang$core$Native_Utils.update(
								existing,
								{
									shadows: A2(_elm_lang$core$Basics_ops['++'], _p26._0, existing.shadows)
								});
						default:
							return _elm_lang$core$Native_Utils.update(
								existing,
								{
									others: {ctor: '::', _0: prop, _1: existing.others}
								});
					}
				});
			return combine(
				A3(
					_elm_lang$core$List$foldr,
					gather,
					{
						filters: {ctor: '[]'},
						shadows: {ctor: '[]'},
						others: {ctor: '[]'}
					},
					props));
		};
		var mergeTransforms = function (props) {
			var applyTransforms = function (_p27) {
				var _p28 = _p27;
				var _p29 = _p28._1;
				var transformations = A2(
					_elm_lang$core$List$filterMap,
					_elm_lang$core$Basics$identity,
					{
						ctor: '::',
						_0: _p28._0.translate,
						_1: {
							ctor: '::',
							_0: _p28._0.rotate,
							_1: {
								ctor: '::',
								_0: _p28._0.scale,
								_1: {ctor: '[]'}
							}
						}
					});
				return _elm_lang$core$List$isEmpty(transformations) ? _p29 : {
					ctor: '::',
					_0: _mdgriffith$style_elements$Style_Internal_Model$Transform(transformations),
					_1: _p29
				};
			};
			var setIfNothing = F2(
				function (x, maybeX) {
					var _p30 = maybeX;
					if (_p30.ctor === 'Nothing') {
						return _elm_lang$core$Maybe$Just(x);
					} else {
						return _p30;
					}
				});
			var gatherTransformStack = F2(
				function (transformation, gathered) {
					var _p31 = transformation;
					switch (_p31.ctor) {
						case 'Translate':
							return _elm_lang$core$Native_Utils.update(
								gathered,
								{
									translate: A2(
										setIfNothing,
										A3(_mdgriffith$style_elements$Style_Internal_Model$Translate, _p31._0, _p31._1, _p31._2),
										gathered.translate)
								});
						case 'Rotate':
							return _elm_lang$core$Native_Utils.update(
								gathered,
								{
									rotate: A2(
										setIfNothing,
										_mdgriffith$style_elements$Style_Internal_Model$Rotate(_p31._0),
										gathered.rotate)
								});
						case 'RotateAround':
							return _elm_lang$core$Native_Utils.update(
								gathered,
								{
									rotate: A2(
										setIfNothing,
										A4(_mdgriffith$style_elements$Style_Internal_Model$RotateAround, _p31._0, _p31._1, _p31._2, _p31._3),
										gathered.rotate)
								});
						default:
							return _elm_lang$core$Native_Utils.update(
								gathered,
								{
									scale: A2(
										setIfNothing,
										A3(_mdgriffith$style_elements$Style_Internal_Model$Scale, _p31._0, _p31._1, _p31._2),
										gathered.scale)
								});
					}
				});
			var gatherTransforms = F2(
				function (prop, _p32) {
					var _p33 = _p32;
					var _p36 = _p33._0;
					var _p35 = _p33._1;
					var _p34 = prop;
					if (_p34.ctor === 'Transform') {
						return {
							ctor: '_Tuple2',
							_0: A3(_elm_lang$core$List$foldr, gatherTransformStack, _p36, _p34._0),
							_1: _p35
						};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _p36,
							_1: {ctor: '::', _0: prop, _1: _p35}
						};
					}
				});
			return applyTransforms(
				A3(
					_elm_lang$core$List$foldr,
					gatherTransforms,
					{
						ctor: '_Tuple2',
						_0: {rotate: _elm_lang$core$Maybe$Nothing, scale: _elm_lang$core$Maybe$Nothing, translate: _elm_lang$core$Maybe$Nothing},
						_1: {ctor: '[]'}
					},
					props));
		};
		var dropShadow = function (_p37) {
			var _p38 = _p37;
			return _elm_lang$core$Native_Utils.eq(_p38._0.kind, 'drop');
		};
		var overridePrevious = F2(
			function (overridable, props) {
				var eliminatePrevious = F2(
					function (prop, _p39) {
						var _p40 = _p39;
						var _p42 = _p40._1;
						var _p41 = _p40._0;
						return (overridable(prop) && _p42) ? {ctor: '_Tuple2', _0: _p41, _1: _p42} : ((overridable(prop) && (!_p42)) ? {
							ctor: '_Tuple2',
							_0: {ctor: '::', _0: prop, _1: _p41},
							_1: true
						} : {
							ctor: '_Tuple2',
							_0: {ctor: '::', _0: prop, _1: _p41},
							_1: _p42
						});
					});
				return _elm_lang$core$Tuple$first(
					A3(
						_elm_lang$core$List$foldr,
						eliminatePrevious,
						{
							ctor: '_Tuple2',
							_0: {ctor: '[]'},
							_1: false
						},
						props));
			});
		var prioritize = F2(
			function (isPriority, props) {
				var _p43 = A2(_elm_lang$core$List$partition, isPriority, props);
				var high = _p43._0;
				var low = _p43._1;
				return A2(_elm_lang$core$Basics_ops['++'], low, high);
			});
		var shadows = function (prop) {
			var _p44 = prop;
			if (_p44.ctor === 'Shadows') {
				return true;
			} else {
				return false;
			}
		};
		var visible = function (prop) {
			var _p45 = prop;
			if (_p45.ctor === 'Visibility') {
				return true;
			} else {
				return false;
			}
		};
		var processed = mergeTransforms(
			mergeShadowsAndFilters(
				A2(
					overridePrevious,
					shadows,
					A2(
						prioritize,
						shadows,
						A2(
							overridePrevious,
							visible,
							A2(prioritize, visible, _p23._1))))));
		return A2(_mdgriffith$style_elements$Style_Internal_Model$Style, _p23._0, processed);
	} else {
		return style;
	}
};
var _mdgriffith$style_elements$Style_Internal_Render$reorderImportAddReset = F2(
	function (reset, styles) {
		var reorder = F2(
			function (style, _p46) {
				var _p47 = _p46;
				var _p50 = _p47._1;
				var _p49 = _p47._0;
				var _p48 = style;
				if (_p48.ctor === 'Import') {
					return {
						ctor: '_Tuple2',
						_0: {ctor: '::', _0: style, _1: _p49},
						_1: _p50
					};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _p49,
						_1: {ctor: '::', _0: style, _1: _p50}
					};
				}
			});
		var _p51 = A3(
			_elm_lang$core$List$foldr,
			reorder,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			styles);
		var imports = _p51._0;
		var allStyles = _p51._1;
		var getFontStyle = function (style) {
			var _p52 = style;
			if (_p52.ctor === 'Style') {
				var forFont = function (prop) {
					var _p53 = prop;
					if (_p53.ctor === 'FontFamily') {
						var forImport = function (font) {
							var _p54 = font;
							if (_p54.ctor === 'ImportFont') {
								return _elm_lang$core$Maybe$Just(_p54._1);
							} else {
								return _elm_lang$core$Maybe$Nothing;
							}
						};
						return A2(_elm_lang$core$List$filterMap, forImport, _p53._0);
					} else {
						return {ctor: '[]'};
					}
				};
				return A2(_elm_lang$core$List$concatMap, forFont, _p52._1);
			} else {
				return {ctor: '[]'};
			}
		};
		var importedFonts = A2(
			_elm_lang$core$List$map,
			function (uri) {
				return _mdgriffith$style_elements$Style_Internal_Model$Import(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'url(\'',
						A2(_elm_lang$core$Basics_ops['++'], uri, '\')')));
			},
			function (_p55) {
				return _elm_lang$core$Set$toList(
					_elm_lang$core$Set$fromList(_p55));
			}(
				A2(_elm_lang$core$List$concatMap, getFontStyle, styles)));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			imports,
			A2(
				_elm_lang$core$Basics_ops['++'],
				importedFonts,
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Model$Reset(reset),
						_1: {ctor: '[]'}
					},
					allStyles)));
	});
var _mdgriffith$style_elements$Style_Internal_Render$spacing = function (box) {
	var name = function () {
		var _p56 = box;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'spacing-',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p56._0),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'-',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p56._1),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'-',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p56._2),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'-',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p56._3),
										' > *:not(.nospacing)'))))))));
	}();
	return function (cls) {
		return {
			ctor: '_Tuple2',
			_0: name,
			_1: A2(
				_elm_lang$core$Basics_ops['++'],
				'.',
				A2(_elm_lang$core$Basics_ops['++'], name, cls))
		};
	}(
		A2(
			_mdgriffith$style_elements$Style_Internal_Render_Css$brace,
			0,
			A2(
				_mdgriffith$style_elements$Style_Internal_Render_Css$prop,
				2,
				{
					ctor: '_Tuple2',
					_0: 'margin',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$box(box)
				})));
};
var _mdgriffith$style_elements$Style_Internal_Render$class = F2(
	function (name, props) {
		var renderedProps = A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				_mdgriffith$style_elements$Style_Internal_Render_Css$prop(2),
				props));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'.',
			A2(
				_elm_lang$core$Basics_ops['++'],
				name,
				A2(_mdgriffith$style_elements$Style_Internal_Render_Css$brace, 0, renderedProps)));
	});
var _mdgriffith$style_elements$Style_Internal_Render$renderStyle = F2(
	function (guarded, style) {
		var _p57 = style;
		switch (_p57.ctor) {
			case 'Reset':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Free(_p57._0);
			case 'Import':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Free(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'@import ',
						A2(_elm_lang$core$Basics_ops['++'], _p57._0, ';')));
			case 'RawStyle':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Free(
					A2(_mdgriffith$style_elements$Style_Internal_Render$class, _p57._0, _p57._1));
			default:
				var guard = function (i) {
					return guarded ? _mdgriffith$style_elements$Style_Internal_Intermediate$guard(i) : i;
				};
				var selector = _mdgriffith$style_elements$Style_Internal_Selector$select(_p57._0);
				var inter = _mdgriffith$style_elements$Style_Internal_Intermediate$Class(
					{
						selector: selector,
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Render$renderProp(selector),
							_p57._1)
					});
				return guard(inter);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render$stylesheet = F3(
	function (reset, guard, batched) {
		return _mdgriffith$style_elements$Style_Internal_Intermediate$finalize(
			A2(
				_elm_lang$core$List$map,
				function (_p58) {
					return A2(
						_mdgriffith$style_elements$Style_Internal_Render$renderStyle,
						guard,
						_mdgriffith$style_elements$Style_Internal_Render$preprocess(_p58));
				},
				A2(
					_mdgriffith$style_elements$Style_Internal_Render$reorderImportAddReset,
					reset,
					_mdgriffith$style_elements$Style_Internal_Batchable$toList(batched))));
	});
var _mdgriffith$style_elements$Style_Internal_Render$unbatchedStylesheet = F2(
	function (guard, styles) {
		return _mdgriffith$style_elements$Style_Internal_Intermediate$finalize(
			A2(
				_elm_lang$core$List$map,
				function (_p59) {
					return A2(
						_mdgriffith$style_elements$Style_Internal_Render$renderStyle,
						guard,
						_mdgriffith$style_elements$Style_Internal_Render$preprocess(_p59));
				},
				styles));
	});
var _mdgriffith$style_elements$Style_Internal_Render$single = F2(
	function (guard, style) {
		return function (_p60) {
			return _mdgriffith$style_elements$Style_Internal_Intermediate$raw(
				A2(
					_mdgriffith$style_elements$Style_Internal_Render$renderStyle,
					guard,
					_mdgriffith$style_elements$Style_Internal_Render$preprocess(_p60)));
		}(style);
	});

var _mdgriffith$style_elements$Style$prepareSheet = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._0.findable;
	var variations = F2(
		function ($class, vs) {
			var varys = A2(
				_elm_lang$core$List$map,
				function (cls) {
					return {ctor: '_Tuple2', _0: cls, _1: true};
				},
				A2(
					_elm_lang$core$List$map,
					function (_p2) {
						return function (vary) {
							return A3(_mdgriffith$style_elements$Style_Internal_Find$variation, $class, vary, _p3);
						}(
							_elm_lang$core$Tuple$first(_p2));
					},
					A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, vs)));
			var parent = A2(_mdgriffith$style_elements$Style_Internal_Find$style, $class, _p3);
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: parent, _1: true},
				_1: varys
			};
		});
	return {
		style: function ($class) {
			return A2(_mdgriffith$style_elements$Style_Internal_Find$style, $class, _p3);
		},
		variations: F2(
			function ($class, varys) {
				return A2(variations, $class, varys);
			}),
		css: _p1._0.css
	};
};
var _mdgriffith$style_elements$Style$pseudo = F2(
	function (psu, props) {
		return A2(
			_mdgriffith$style_elements$Style_Internal_Model$PseudoElement,
			A2(_elm_lang$core$Basics_ops['++'], ':', psu),
			props);
	});
var _mdgriffith$style_elements$Style$checked = function (props) {
	return A2(_mdgriffith$style_elements$Style_Internal_Model$PseudoElement, ':checked', props);
};
var _mdgriffith$style_elements$Style$focus = function (props) {
	return A2(_mdgriffith$style_elements$Style_Internal_Model$PseudoElement, ':focus', props);
};
var _mdgriffith$style_elements$Style$hover = function (props) {
	return A2(_mdgriffith$style_elements$Style_Internal_Model$PseudoElement, ':hover', props);
};
var _mdgriffith$style_elements$Style$scale = F3(
	function (x, y, z) {
		return _mdgriffith$style_elements$Style_Internal_Model$Transform(
			{
				ctor: '::',
				_0: A3(_mdgriffith$style_elements$Style_Internal_Model$Scale, x, y, z),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style$translate = F3(
	function (x, y, z) {
		return _mdgriffith$style_elements$Style_Internal_Model$Transform(
			{
				ctor: '::',
				_0: A3(_mdgriffith$style_elements$Style_Internal_Model$Translate, x, y, z),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style$rotateAround = F2(
	function (_p4, angle) {
		var _p5 = _p4;
		return _mdgriffith$style_elements$Style_Internal_Model$Transform(
			{
				ctor: '::',
				_0: A4(_mdgriffith$style_elements$Style_Internal_Model$RotateAround, _p5._0, _p5._1, _p5._2, angle),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style$rotate = function (a) {
	return _mdgriffith$style_elements$Style_Internal_Model$Transform(
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Internal_Model$Rotate(a),
			_1: {ctor: '[]'}
		});
};
var _mdgriffith$style_elements$Style$origin = F3(
	function (x, y, z) {
		return A2(
			_mdgriffith$style_elements$Style_Internal_Model$Exact,
			'transform-origin',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(x),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'px  ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(y),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(z),
								'px'))))));
	});
var _mdgriffith$style_elements$Style$paddingBottomHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding-bottom',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$paddingTopHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding-top',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$paddingRightHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding-right',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$paddingLeftHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding-left',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$paddingHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$cursor = function (name) {
	return A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'cursor', name);
};
var _mdgriffith$style_elements$Style$opacity = function (o) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'opacity',
		_elm_lang$core$Basics$toString(o));
};
var _mdgriffith$style_elements$Style$prop = F2(
	function (name, val) {
		return A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, name, val);
	});
var _mdgriffith$style_elements$Style$variation = F2(
	function (variation, props) {
		return A2(_mdgriffith$style_elements$Style_Internal_Model$Variation, variation, props);
	});
var _mdgriffith$style_elements$Style$style = F2(
	function (cls, props) {
		return _mdgriffith$style_elements$Style_Internal_Batchable$one(
			A2(
				_mdgriffith$style_elements$Style_Internal_Model$Style,
				cls,
				{
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Style$prop, 'border-style', 'solid'),
					_1: props
				}));
	});
var _mdgriffith$style_elements$Style$importCss = function (str) {
	return _mdgriffith$style_elements$Style_Internal_Batchable$one(
		_mdgriffith$style_elements$Style_Internal_Model$Import(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\"',
				A2(_elm_lang$core$Basics_ops['++'], str, '\"'))));
};
var _mdgriffith$style_elements$Style$importUrl = function (url) {
	return _mdgriffith$style_elements$Style_Internal_Batchable$one(
		_mdgriffith$style_elements$Style_Internal_Model$Import(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'url(\"',
				A2(_elm_lang$core$Basics_ops['++'], url, '\")'))));
};
var _mdgriffith$style_elements$Style$Unguarded = {ctor: 'Unguarded'};
var _mdgriffith$style_elements$Style$unguarded = _mdgriffith$style_elements$Style$Unguarded;
var _mdgriffith$style_elements$Style$styleSheetWith = F2(
	function (options, styles) {
		var unguarded = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Style$Unguarded),
			options);
		return _mdgriffith$style_elements$Style$prepareSheet(
			A3(_mdgriffith$style_elements$Style_Internal_Render$stylesheet, '', !unguarded, styles));
	});
var _mdgriffith$style_elements$Style$styleSheet = function (styles) {
	return A2(
		_mdgriffith$style_elements$Style$styleSheetWith,
		{ctor: '[]'},
		styles);
};

var _mdgriffith$style_elements$Element_Attributes$toAttr = _mdgriffith$style_elements$Element_Internal_Model$Attr;
var _mdgriffith$style_elements$Element_Attributes$language = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$lang(str));
};
var _mdgriffith$style_elements$Element_Attributes$id = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$id(str));
};
var _mdgriffith$style_elements$Element_Attributes$class = function (cls) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$class(cls));
};
var _mdgriffith$style_elements$Element_Attributes$map = F2(
	function (fn, attr) {
		var _p0 = attr;
		switch (_p0.ctor) {
			case 'Attr':
				return _mdgriffith$style_elements$Element_Internal_Model$Attr(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p0._0));
			case 'Vary':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Vary, _p0._0, _p0._1);
			case 'Height':
				return _mdgriffith$style_elements$Element_Internal_Model$Height(_p0._0);
			case 'Width':
				return _mdgriffith$style_elements$Element_Internal_Model$Width(_p0._0);
			case 'Inline':
				return _mdgriffith$style_elements$Element_Internal_Model$Inline;
			case 'Hidden':
				return _mdgriffith$style_elements$Element_Internal_Model$Hidden;
			case 'PositionFrame':
				return _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_p0._0);
			case 'Opacity':
				return _mdgriffith$style_elements$Element_Internal_Model$Opacity(_p0._0);
			case 'Expand':
				return _mdgriffith$style_elements$Element_Internal_Model$Expand;
			case 'Padding':
				return A4(_mdgriffith$style_elements$Element_Internal_Model$Padding, _p0._0, _p0._1, _p0._2, _p0._3);
			case 'PhantomPadding':
				return _mdgriffith$style_elements$Element_Internal_Model$PhantomPadding(_p0._0);
			case 'Margin':
				return _mdgriffith$style_elements$Element_Internal_Model$Margin(_p0._0);
			case 'GridArea':
				return _mdgriffith$style_elements$Element_Internal_Model$GridArea(_p0._0);
			case 'GridCoords':
				return _mdgriffith$style_elements$Element_Internal_Model$GridCoords(_p0._0);
			case 'PointerEvents':
				return _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(_p0._0);
			case 'Event':
				return _mdgriffith$style_elements$Element_Internal_Model$Event(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p0._0));
			case 'InputEvent':
				return _mdgriffith$style_elements$Element_Internal_Model$InputEvent(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p0._0));
			case 'Position':
				return A3(_mdgriffith$style_elements$Element_Internal_Model$Position, _p0._0, _p0._1, _p0._2);
			case 'Spacing':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, _p0._0, _p0._1);
			case 'VAlign':
				return _mdgriffith$style_elements$Element_Internal_Model$VAlign(_p0._0);
			case 'HAlign':
				return _mdgriffith$style_elements$Element_Internal_Model$HAlign(_p0._0);
			case 'Shrink':
				return _mdgriffith$style_elements$Element_Internal_Model$Shrink(_p0._0);
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Overflow(_p0._0);
		}
	});
var _mdgriffith$style_elements$Element_Attributes$attribute = F2(
	function (name, val) {
		return _mdgriffith$style_elements$Element_Internal_Model$Attr(
			A2(_elm_lang$html$Html_Attributes$attribute, name, val));
	});
var _mdgriffith$style_elements$Element_Attributes$property = F2(
	function (str, val) {
		return _mdgriffith$style_elements$Element_Internal_Model$Attr(
			A2(_elm_lang$html$Html_Attributes$property, str, val));
	});
var _mdgriffith$style_elements$Element_Attributes$inlineStyle = function (_p1) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$virtual_dom$VirtualDom$style(_p1));
};
var _mdgriffith$style_elements$Element_Attributes$classList = function (_p2) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$classList(_p2));
};
var _mdgriffith$style_elements$Element_Attributes$clipY = _mdgriffith$style_elements$Element_Internal_Model$Attr(
	_elm_lang$virtual_dom$VirtualDom$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'overflow-y', _1: 'hidden'},
			_1: {ctor: '[]'}
		}));
var _mdgriffith$style_elements$Element_Attributes$clipX = _mdgriffith$style_elements$Element_Internal_Model$Attr(
	_elm_lang$virtual_dom$VirtualDom$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'overflow-x', _1: 'hidden'},
			_1: {ctor: '[]'}
		}));
var _mdgriffith$style_elements$Element_Attributes$clip = _mdgriffith$style_elements$Element_Internal_Model$Attr(
	_elm_lang$virtual_dom$VirtualDom$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'hidden'},
			_1: {ctor: '[]'}
		}));
var _mdgriffith$style_elements$Element_Attributes$xScrollbar = _mdgriffith$style_elements$Element_Internal_Model$Overflow(_mdgriffith$style_elements$Element_Internal_Model$XAxis);
var _mdgriffith$style_elements$Element_Attributes$yScrollbar = _mdgriffith$style_elements$Element_Internal_Model$Overflow(_mdgriffith$style_elements$Element_Internal_Model$YAxis);
var _mdgriffith$style_elements$Element_Attributes$scrollbars = _mdgriffith$style_elements$Element_Internal_Model$Overflow(_mdgriffith$style_elements$Element_Internal_Model$AllAxis);
var _mdgriffith$style_elements$Element_Attributes$hidden = _mdgriffith$style_elements$Element_Internal_Model$Hidden;
var _mdgriffith$style_elements$Element_Attributes$paddingBottom = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$paddingTop = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$paddingRight = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$paddingLeft = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(x));
};
var _mdgriffith$style_elements$Element_Attributes$paddingXY = F2(
	function (x, y) {
		return A4(
			_mdgriffith$style_elements$Element_Internal_Model$Padding,
			_elm_lang$core$Maybe$Just(y),
			_elm_lang$core$Maybe$Just(x),
			_elm_lang$core$Maybe$Just(y),
			_elm_lang$core$Maybe$Just(x));
	});
var _mdgriffith$style_elements$Element_Attributes$padding = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Just(x));
};
var _mdgriffith$style_elements$Element_Attributes$spacingXY = _mdgriffith$style_elements$Element_Internal_Model$Spacing;
var _mdgriffith$style_elements$Element_Attributes$spacing = function (x) {
	return A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, x, x);
};
var _mdgriffith$style_elements$Element_Attributes$vary = _mdgriffith$style_elements$Element_Internal_Model$Vary;
var _mdgriffith$style_elements$Element_Attributes$percent = _mdgriffith$style_elements$Style_Internal_Model$Percent;
var _mdgriffith$style_elements$Element_Attributes$fillPortion = function (_p3) {
	return _mdgriffith$style_elements$Style_Internal_Model$Fill(
		_elm_lang$core$Basics$toFloat(_p3));
};
var _mdgriffith$style_elements$Element_Attributes$fill = _mdgriffith$style_elements$Style_Internal_Model$Fill(1);
var _mdgriffith$style_elements$Element_Attributes$content = _mdgriffith$style_elements$Style_Internal_Model$Auto;
var _mdgriffith$style_elements$Element_Attributes$px = _mdgriffith$style_elements$Style_Internal_Model$Px;
var _mdgriffith$style_elements$Element_Attributes$height = _mdgriffith$style_elements$Element_Internal_Model$Height;
var _mdgriffith$style_elements$Element_Attributes$maxHeight = function (len) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'max-height',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(len)
				},
				_1: {ctor: '[]'}
			}));
};
var _mdgriffith$style_elements$Element_Attributes$minHeight = function (len) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'min-height',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(len)
				},
				_1: {ctor: '[]'}
			}));
};
var _mdgriffith$style_elements$Element_Attributes$maxWidth = function (len) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'max-width',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(len)
				},
				_1: {ctor: '[]'}
			}));
};
var _mdgriffith$style_elements$Element_Attributes$minWidth = function (len) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'min-width',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(len)
				},
				_1: {ctor: '[]'}
			}));
};
var _mdgriffith$style_elements$Element_Attributes$width = _mdgriffith$style_elements$Element_Internal_Model$Width;
var _mdgriffith$style_elements$Element_Attributes$moveLeft = function (x) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Just(
			_elm_lang$core$Basics$negate(x)),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$moveRight = function (x) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$moveDown = function (y) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(y),
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$moveUp = function (y) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(
			_elm_lang$core$Basics$negate(y)),
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$alignRight = _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Right);
var _mdgriffith$style_elements$Element_Attributes$alignLeft = _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Left);
var _mdgriffith$style_elements$Element_Attributes$alignBottom = _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom);
var _mdgriffith$style_elements$Element_Attributes$alignTop = _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Top);
var _mdgriffith$style_elements$Element_Attributes$spread = _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Justify);
var _mdgriffith$style_elements$Element_Attributes$verticalSpread = _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$VerticalJustify);
var _mdgriffith$style_elements$Element_Attributes$verticalCenter = _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$VerticalCenter);
var _mdgriffith$style_elements$Element_Attributes$center = _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Center);

var _mdgriffith$style_elements$Element_Internal_Adjustments$spacingToMargin = function (attrs) {
	var spaceToMarg = function (a) {
		var _p0 = a;
		if (_p0.ctor === 'Spacing') {
			var _p2 = _p0._1;
			var _p1 = _p0._0;
			return _mdgriffith$style_elements$Element_Internal_Model$Margin(
				{ctor: '_Tuple4', _0: _p2, _1: _p1, _2: _p2, _3: _p1});
		} else {
			return _p0;
		}
	};
	return A2(_elm_lang$core$List$map, spaceToMarg, attrs);
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$defaultPadding = F2(
	function (_p4, _p3) {
		var _p5 = _p4;
		var _p6 = _p3;
		return {
			ctor: '_Tuple4',
			_0: A2(_elm_lang$core$Maybe$withDefault, _p6._0, _p5._0),
			_1: A2(_elm_lang$core$Maybe$withDefault, _p6._1, _p5._1),
			_2: A2(_elm_lang$core$Maybe$withDefault, _p6._2, _p5._2),
			_3: A2(_elm_lang$core$Maybe$withDefault, _p6._3, _p5._3)
		};
	});
var _mdgriffith$style_elements$Element_Internal_Adjustments$hoistFixedScreenElements = function (el) {
	var elementIsOnScreen = function (attrs) {
		return A2(
			_elm_lang$core$List$any,
			function (attr) {
				return _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Screen));
			},
			attrs);
	};
	var _p7 = el;
	switch (_p7.ctor) {
		case 'Element':
			return elementIsOnScreen(_p7._0.attrs) ? {
				ctor: '_Tuple2',
				_0: _mdgriffith$style_elements$Element_Internal_Model$Empty,
				_1: _elm_lang$core$Maybe$Just(
					{
						ctor: '::',
						_0: el,
						_1: {ctor: '[]'}
					})
			} : {ctor: '_Tuple2', _0: el, _1: _elm_lang$core$Maybe$Nothing};
		case 'Layout':
			return elementIsOnScreen(_p7._0.attrs) ? {
				ctor: '_Tuple2',
				_0: _mdgriffith$style_elements$Element_Internal_Model$Empty,
				_1: _elm_lang$core$Maybe$Just(
					{
						ctor: '::',
						_0: el,
						_1: {ctor: '[]'}
					})
			} : {ctor: '_Tuple2', _0: el, _1: _elm_lang$core$Maybe$Nothing};
		default:
			return {ctor: '_Tuple2', _0: el, _1: _elm_lang$core$Maybe$Nothing};
	}
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$tagIntermediates = false;
var _mdgriffith$style_elements$Element_Internal_Adjustments$tag = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Adjustments$tagIntermediates ? _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$class(str)) : _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$class(''));
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing = function (elm) {
	var _p8 = elm;
	if (_p8.ctor === 'Layout') {
		var _p25 = _p8._0.layout;
		var _p24 = _p8._0.attrs;
		var forPadding = function (posAttr) {
			var _p9 = posAttr;
			if (_p9.ctor === 'Padding') {
				return _elm_lang$core$Maybe$Just(
					A2(
						_mdgriffith$style_elements$Element_Internal_Adjustments$defaultPadding,
						{ctor: '_Tuple4', _0: _p9._0, _1: _p9._1, _2: _p9._2, _3: _p9._3},
						{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0}));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var forSpacing = function (posAttr) {
			var _p10 = posAttr;
			if (_p10.ctor === 'Spacing') {
				var _p12 = _p10._1;
				var _p11 = _p10._0;
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple4', _0: _p12, _1: _p11, _2: _p12, _3: _p11});
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var padding = _elm_lang$core$List$head(
			_elm_lang$core$List$reverse(
				A2(_elm_lang$core$List$filterMap, forPadding, _p24)));
		var spacing = _elm_lang$core$List$head(
			_elm_lang$core$List$reverse(
				A2(_elm_lang$core$List$filterMap, forSpacing, _p24)));
		var hasSpacing = function () {
			var _p13 = spacing;
			if (_p13.ctor === 'Nothing') {
				return false;
			} else {
				return true;
			}
		}();
		var _p14 = A2(
			_elm_lang$core$List$partition,
			function (attr) {
				return _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Center)) || _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$VerticalCenter));
			},
			_p24);
		var centeredProps = _p14._0;
		var others = _p14._1;
		var _p15 = _p25;
		if (_p15.ctor === 'FlexLayout') {
			if (hasSpacing) {
				var phantomPadding = _mdgriffith$style_elements$Element_Internal_Model$PhantomPadding(
					A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
						padding));
				var _p16 = function () {
					var _p17 = spacing;
					if (_p17.ctor === 'Nothing') {
						return {
							ctor: '_Tuple3',
							_0: {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
							_1: A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, 0, 0),
							_2: 0
						};
					} else {
						var _p20 = _p17._0._1;
						var _p19 = _p17._0._3;
						var _p18 = _p17._0._2;
						return {
							ctor: '_Tuple3',
							_0: {ctor: '_Tuple4', _0: -1 * _p17._0._0, _1: -1 * _p20, _2: -1 * _p18, _3: -1 * _p19},
							_1: A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, _p20, _p18),
							_2: (_p20 + _p19) / 2
						};
					}
				}();
				var negativeMargin = _p16._0;
				var spacingAttr = _p16._1;
				var totalHSpacing = _p16._2;
				var forAlignment = function (attr) {
					var _p21 = attr;
					switch (_p21.ctor) {
						case 'HAlign':
							return true;
						case 'VAlign':
							return true;
						default:
							return false;
					}
				};
				var _p22 = A2(_elm_lang$core$List$partition, forAlignment, _p24);
				var aligned = _p22._0;
				var unaligned = _p22._1;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: _p8._0.node,
						style: _p8._0.style,
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('counter-spacing-container'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
								_1: unaligned
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Layout(
									{
										node: 'div',
										style: _elm_lang$core$Maybe$Nothing,
										layout: _p25,
										attrs: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('counter-spacing'),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
												_1: {
													ctor: '::',
													_0: phantomPadding,
													_1: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Internal_Model$Margin(negativeMargin),
														_1: {
															ctor: '::',
															_0: spacingAttr,
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
																	A2(_mdgriffith$style_elements$Style_Internal_Model$Calc, 100, totalHSpacing)),
																_1: {
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Element_Internal_Model$Shrink(1),
																	_1: aligned
																}
															}
														}
													}
												}
											}
										},
										children: function () {
											var _p23 = _p8._0.children;
											if (_p23.ctor === 'Normal') {
												return _mdgriffith$style_elements$Element_Internal_Model$Normal(
													A2(
														_elm_lang$core$List$map,
														_mdgriffith$style_elements$Element_Internal_Modify$addAttr(
															_mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true)),
														_p23._0));
											} else {
												return _mdgriffith$style_elements$Element_Internal_Model$Keyed(
													A2(
														_elm_lang$core$List$map,
														_elm_lang$core$Tuple$mapSecond(
															_mdgriffith$style_elements$Element_Internal_Modify$addAttr(
																_mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true))),
														_p23._0));
											}
										}(),
										absolutelyPositioned: _elm_lang$core$Maybe$Nothing
									}),
								_1: {ctor: '[]'}
							}),
						absolutelyPositioned: _p8._0.absolutelyPositioned
					});
			} else {
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p8._0,
						{
							attrs: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
								_1: _p24
							}
						}));
			}
		} else {
			return elm;
		}
	} else {
		return elm;
	}
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$positionNearby = F2(
	function (parent, elm) {
		var setPosition = F3(
			function (nearbyPosition, _p26, el) {
				var _p27 = _p26;
				var _p37 = _p27._1;
				var _p36 = _p27._0;
				var nearbyAlignment = function () {
					var _p28 = nearbyPosition;
					_v13_4:
					do {
						if ((_p28.ctor === 'Just') && (_p28._0.ctor === 'Nearby')) {
							switch (_p28._0._0.ctor) {
								case 'Above':
									return {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Top),
										_1: {ctor: '[]'}
									};
								case 'Below':
									return {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom),
										_1: {ctor: '[]'}
									};
								case 'OnRight':
									return {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Right),
										_1: {ctor: '[]'}
									};
								case 'OnLeft':
									return {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Left),
										_1: {ctor: '[]'}
									};
								default:
									break _v13_4;
							}
						} else {
							break _v13_4;
						}
					} while(false);
					return {ctor: '[]'};
				}();
				var isLayout = function () {
					var _p29 = elm;
					if (_p29.ctor === 'Layout') {
						return true;
					} else {
						return false;
					}
				}();
				var framed = function () {
					var _p30 = nearbyPosition;
					if (_p30.ctor === 'Nothing') {
						return false;
					} else {
						return true;
					}
				}();
				var forHeight = function (prop) {
					var _p31 = prop;
					if (_p31.ctor === 'Height') {
						return true;
					} else {
						return false;
					}
				};
				var height = _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(
						A2(_elm_lang$core$List$filter, forHeight, _p37)));
				var forWidth = function (prop) {
					var _p32 = prop;
					if (_p32.ctor === 'Width') {
						return true;
					} else {
						return false;
					}
				};
				var width = _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(
						A2(_elm_lang$core$List$filter, forWidth, _p37)));
				var addWidthHeight = function (attrs) {
					var _p33 = {ctor: '_Tuple2', _0: width, _1: height};
					if (_p33._0.ctor === 'Nothing') {
						if (_p33._1.ctor === 'Nothing') {
							return attrs;
						} else {
							return {ctor: '::', _0: _p33._1._0, _1: attrs};
						}
					} else {
						if (_p33._1.ctor === 'Just') {
							return {
								ctor: '::',
								_0: _p33._0._0,
								_1: {ctor: '::', _0: _p33._1._0, _1: attrs}
							};
						} else {
							return {ctor: '::', _0: _p33._0._0, _1: attrs};
						}
					}
				};
				var adjustWidthHeight = function (elem) {
					var adjustHeight = function (element) {
						var _p34 = height;
						if (_p34.ctor === 'Nothing') {
							return element;
						} else {
							if ((_p34._0.ctor === 'Height') && (_p34._0._0.ctor === 'Percent')) {
								return A2(
									_mdgriffith$style_elements$Element_Internal_Modify$addAttrPriority,
									_mdgriffith$style_elements$Element_Internal_Model$Width(
										_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
									element);
							} else {
								return element;
							}
						}
					};
					var adjustWidth = function (element) {
						var _p35 = width;
						if (_p35.ctor === 'Nothing') {
							return element;
						} else {
							if ((_p35._0.ctor === 'Width') && (_p35._0._0.ctor === 'Percent')) {
								return A2(
									_mdgriffith$style_elements$Element_Internal_Modify$addAttrPriority,
									_mdgriffith$style_elements$Element_Internal_Model$Width(
										_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
									element);
							} else {
								return element;
							}
						}
					};
					return adjustHeight(
						adjustWidth(elem));
				};
				return (_elm_lang$core$Native_Utils.eq(
					nearbyPosition,
					_elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Above))) || _elm_lang$core$Native_Utils.eq(
					nearbyPosition,
					_elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Below)))) ? _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('above-below-intermediate-parent'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
										_mdgriffith$style_elements$Style_Internal_Model$Px(0)),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
											_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
												_mdgriffith$style_elements$Element_Internal_Model$Absolute(
													_elm_lang$core$Native_Utils.eq(
														nearbyPosition,
														_elm_lang$core$Maybe$Just(
															_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Above))) ? _mdgriffith$style_elements$Element_Internal_Model$TopLeft : _mdgriffith$style_elements$Element_Internal_Model$BottomLeft)),
											_1: {
												ctor: '::',
												_0: A3(
													_mdgriffith$style_elements$Element_Internal_Model$Position,
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Nothing),
												_1: isLayout ? nearbyAlignment : A2(_elm_lang$core$Basics_ops['++'], nearbyAlignment, _p36)
											}
										}
									}
								}
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
									{
										node: 'div',
										style: _elm_lang$core$Maybe$Nothing,
										attrs: function () {
											var addWidth = function (attrs) {
												return isLayout ? {
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
														_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
													_1: attrs
												} : attrs;
											};
											return addWidth(
												{
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('above-below-intermediate'),
													_1: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
														_1: {
															ctor: '::',
															_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
																_mdgriffith$style_elements$Element_Internal_Model$Absolute(
																	_elm_lang$core$Native_Utils.eq(
																		nearbyPosition,
																		_elm_lang$core$Maybe$Just(
																			_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Above))) ? _mdgriffith$style_elements$Element_Internal_Model$BottomLeft : _mdgriffith$style_elements$Element_Internal_Model$TopLeft)),
															_1: {
																ctor: '::',
																_0: A3(
																	_mdgriffith$style_elements$Element_Internal_Model$Position,
																	_elm_lang$core$Maybe$Nothing,
																	_elm_lang$core$Maybe$Just(0),
																	_elm_lang$core$Maybe$Nothing),
																_1: {
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												});
										}(),
										child: _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(
											A2(
												_mdgriffith$style_elements$Element_Internal_Modify$setAttrs,
												{
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
													_1: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
															_mdgriffith$style_elements$Element_Internal_Model$Absolute(_mdgriffith$style_elements$Element_Internal_Model$TopLeft)),
														_1: {
															ctor: '::',
															_0: A3(
																_mdgriffith$style_elements$Element_Internal_Model$Position,
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Nothing),
															_1: _p37
														}
													}
												},
												el)),
										absolutelyPositioned: _elm_lang$core$Maybe$Nothing
									}),
								_1: {ctor: '[]'}
							}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}) : (framed ? _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('nearby-intermediate-parent'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
										_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
											_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
												_mdgriffith$style_elements$Element_Internal_Model$Absolute(_mdgriffith$style_elements$Element_Internal_Model$TopLeft)),
											_1: {
												ctor: '::',
												_0: A3(
													_mdgriffith$style_elements$Element_Internal_Model$Position,
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Nothing),
												_1: isLayout ? nearbyAlignment : A2(_elm_lang$core$Basics_ops['++'], nearbyAlignment, _p36)
											}
										}
									}
								}
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
									{
										node: 'div',
										style: _elm_lang$core$Maybe$Nothing,
										attrs: addWidthHeight(
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Relative),
													_1: {
														ctor: '::',
														_0: A3(
															_mdgriffith$style_elements$Element_Internal_Model$Position,
															_elm_lang$core$Maybe$Just(0),
															_elm_lang$core$Maybe$Just(0),
															_elm_lang$core$Maybe$Nothing),
														_1: {
															ctor: '::',
															_0: A4(
																_mdgriffith$style_elements$Element_Internal_Model$Padding,
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0)),
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('nearby-intermediate'),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}),
										child: _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(
											adjustWidthHeight(
												A2(
													_mdgriffith$style_elements$Element_Internal_Modify$addAttrList,
													{
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
														_1: {
															ctor: '::',
															_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
																_mdgriffith$style_elements$Element_Internal_Model$Absolute(_mdgriffith$style_elements$Element_Internal_Model$TopLeft)),
															_1: {
																ctor: '::',
																_0: A3(
																	_mdgriffith$style_elements$Element_Internal_Model$Position,
																	_elm_lang$core$Maybe$Just(0),
																	_elm_lang$core$Maybe$Just(0),
																	_elm_lang$core$Maybe$Nothing),
																_1: {ctor: '[]'}
															}
														}
													},
													el))),
										absolutelyPositioned: _elm_lang$core$Maybe$Nothing
									}),
								_1: {ctor: '[]'}
							}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}) : ((!_elm_lang$core$List$isEmpty(_p36)) ? _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('nearby-aligned-intermediate-parent'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
										_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
											_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Relative),
											_1: {
												ctor: '::',
												_0: A3(
													_mdgriffith$style_elements$Element_Internal_Model$Position,
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Nothing),
												_1: isLayout ? nearbyAlignment : A2(_elm_lang$core$Basics_ops['++'], nearbyAlignment, _p36)
											}
										}
									}
								}
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
									{
										node: 'div',
										style: _elm_lang$core$Maybe$Nothing,
										attrs: addWidthHeight(
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Relative),
													_1: {
														ctor: '::',
														_0: A3(
															_mdgriffith$style_elements$Element_Internal_Model$Position,
															_elm_lang$core$Maybe$Just(0),
															_elm_lang$core$Maybe$Just(0),
															_elm_lang$core$Maybe$Nothing),
														_1: {
															ctor: '::',
															_0: A4(
																_mdgriffith$style_elements$Element_Internal_Model$Padding,
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0)),
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('nearby-aligned-intermediate'),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}),
										child: _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(
											adjustWidthHeight(
												A2(
													_mdgriffith$style_elements$Element_Internal_Modify$addAttrList,
													{
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
														_1: {
															ctor: '::',
															_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Relative),
															_1: {
																ctor: '::',
																_0: A3(
																	_mdgriffith$style_elements$Element_Internal_Model$Position,
																	_elm_lang$core$Maybe$Just(0),
																	_elm_lang$core$Maybe$Just(0),
																	_elm_lang$core$Maybe$Nothing),
																_1: {ctor: '[]'}
															}
														}
													},
													el))),
										absolutelyPositioned: _elm_lang$core$Maybe$Nothing
									}),
								_1: {ctor: '[]'}
							}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}) : _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(elm)));
			});
		var forAlignment = function (attr) {
			var _p38 = attr;
			switch (_p38.ctor) {
				case 'HAlign':
					return true;
				case 'VAlign':
					return true;
				default:
					return false;
			}
		};
		var separateAlignment = function (attrs) {
			return A2(_elm_lang$core$List$partition, forAlignment, attrs);
		};
		var _p39 = elm;
		switch (_p39.ctor) {
			case 'Element':
				var _p43 = _p39._0.attrs;
				var isFrame = function (attr) {
					var _p40 = attr;
					if (_p40.ctor === 'PositionFrame') {
						return _elm_lang$core$Maybe$Just(_p40._0);
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				};
				var frame = _elm_lang$core$List$head(
					A2(_elm_lang$core$List$filterMap, isFrame, _p43));
				var _p41 = separateAlignment(_p43);
				var aligned = _p41._0;
				var unaligned = _p41._1;
				var _p42 = parent;
				if (_p42.ctor === 'Nothing') {
					return A3(
						setPosition,
						frame,
						{ctor: '_Tuple2', _0: aligned, _1: unaligned},
						elm);
				} else {
					return elm;
				}
			case 'Layout':
				var _p47 = _p39._0.attrs;
				var isFrame = function (attr) {
					var _p44 = attr;
					if (_p44.ctor === 'PositionFrame') {
						return _elm_lang$core$Maybe$Just(_p44._0);
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				};
				var frame = _elm_lang$core$List$head(
					A2(_elm_lang$core$List$filterMap, isFrame, _p47));
				var _p45 = separateAlignment(_p47);
				var aligned = _p45._0;
				var unaligned = _p45._1;
				var _p46 = parent;
				if (_p46.ctor === 'Nothing') {
					return A3(
						setPosition,
						frame,
						{ctor: '_Tuple2', _0: aligned, _1: unaligned},
						elm);
				} else {
					return _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(elm);
				}
			default:
				return _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(elm);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Adjustments$centerTextLayout = function (elm) {
	var _p48 = elm;
	if (_p48.ctor === 'Layout') {
		var _p49 = A2(
			_elm_lang$core$List$partition,
			function (attr) {
				return _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Center)) || _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$VerticalCenter));
			},
			_p48._0.attrs);
		var centeredProps = _p49._0;
		var others = _p49._1;
		var _p50 = _p48._0.layout;
		if (_p50.ctor === 'TextLayout') {
			return (!_elm_lang$core$List$isEmpty(centeredProps)) ? _mdgriffith$style_elements$Element_Internal_Model$Layout(
				{
					node: 'div',
					style: _elm_lang$core$Maybe$Nothing,
					layout: A2(
						_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
						_mdgriffith$style_elements$Style_Internal_Model$GoRight,
						{ctor: '[]'}),
					attrs: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('center-text'),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
							_1: centeredProps
						}
					},
					children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Layout(
								_elm_lang$core$Native_Utils.update(
									_p48._0,
									{
										attrs: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
											_1: others
										}
									})),
							_1: {ctor: '[]'}
						}),
					absolutelyPositioned: _elm_lang$core$Maybe$Nothing
				}) : elm;
		} else {
			return elm;
		}
	} else {
		return elm;
	}
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$apply = function (root) {
	var stack = F2(
		function (parent, el) {
			return function (_p51) {
				return _mdgriffith$style_elements$Element_Internal_Adjustments$hoistFixedScreenElements(
					A2(
						_mdgriffith$style_elements$Element_Internal_Adjustments$positionNearby,
						parent,
						_mdgriffith$style_elements$Element_Internal_Adjustments$centerTextLayout(_p51)));
			}(el);
		});
	return A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, stack, _elm_lang$core$Maybe$Nothing, root);
};

var _mdgriffith$style_elements$Element_Internal_Render$renderPadding = function (_p0) {
	var _p1 = _p0;
	var format = F2(
		function (name, x) {
			return {
				ctor: '_Tuple2',
				_0: name,
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(x),
					'px')
			};
		});
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Maybe$map,
				format('padding-top'),
				_p1._0),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Maybe$map,
					format('padding-bottom'),
					_p1._2),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Maybe$map,
						format('padding-left'),
						_p1._3),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Maybe$map,
							format('padding-right'),
							_p1._1),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _mdgriffith$style_elements$Element_Internal_Render$flexboxVerticalIndividualAlignment = F2(
	function (direction, alignment) {
		var _p2 = direction;
		switch (_p2.ctor) {
			case 'GoRight':
				var _p3 = alignment;
				switch (_p3.ctor) {
					case 'Top':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-start'});
					case 'Bottom':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-end'});
					case 'VerticalCenter':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
					default:
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
				}
			case 'GoLeft':
				var _p4 = alignment;
				switch (_p4.ctor) {
					case 'Top':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-start'});
					case 'Bottom':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-end'});
					case 'VerticalCenter':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
					default:
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
				}
			case 'Down':
				var _p5 = alignment;
				switch (_p5.ctor) {
					case 'Top':
						return _elm_lang$core$Maybe$Nothing;
					case 'Bottom':
						return _elm_lang$core$Maybe$Nothing;
					case 'VerticalCenter':
						return _elm_lang$core$Maybe$Nothing;
					default:
						return _elm_lang$core$Maybe$Nothing;
				}
			default:
				var _p6 = alignment;
				switch (_p6.ctor) {
					case 'Top':
						return _elm_lang$core$Maybe$Nothing;
					case 'Bottom':
						return _elm_lang$core$Maybe$Nothing;
					case 'VerticalCenter':
						return _elm_lang$core$Maybe$Nothing;
					default:
						return _elm_lang$core$Maybe$Nothing;
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$flexboxHorizontalIndividualAlignment = F2(
	function (direction, alignment) {
		var _p7 = direction;
		switch (_p7.ctor) {
			case 'GoRight':
				var _p8 = alignment;
				switch (_p8.ctor) {
					case 'Left':
						return _elm_lang$core$Maybe$Nothing;
					case 'Right':
						return _elm_lang$core$Maybe$Nothing;
					case 'Center':
						return _elm_lang$core$Maybe$Nothing;
					default:
						return _elm_lang$core$Maybe$Nothing;
				}
			case 'GoLeft':
				var _p9 = alignment;
				switch (_p9.ctor) {
					case 'Left':
						return _elm_lang$core$Maybe$Nothing;
					case 'Right':
						return _elm_lang$core$Maybe$Nothing;
					case 'Center':
						return _elm_lang$core$Maybe$Nothing;
					default:
						return _elm_lang$core$Maybe$Nothing;
				}
			case 'Down':
				var _p10 = alignment;
				switch (_p10.ctor) {
					case 'Left':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-start'});
					case 'Right':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-end'});
					case 'Center':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
					default:
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'stretch'});
				}
			default:
				var _p11 = alignment;
				switch (_p11.ctor) {
					case 'Left':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-start'});
					case 'Right':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-end'});
					case 'Center':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
					default:
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'stretch'});
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$alignLayout = F3(
	function (maybeHorizontal, maybeVertical, layout) {
		var alignGridVertical = function (align) {
			var _p12 = align;
			switch (_p12.ctor) {
				case 'Top':
					return _mdgriffith$style_elements$Style_Internal_Model$GridV(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Top));
				case 'Bottom':
					return _mdgriffith$style_elements$Style_Internal_Model$GridV(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Bottom));
				case 'VerticalCenter':
					return _mdgriffith$style_elements$Style_Internal_Model$GridV(_mdgriffith$style_elements$Style_Internal_Model$Center);
				default:
					return _mdgriffith$style_elements$Style_Internal_Model$GridV(_mdgriffith$style_elements$Style_Internal_Model$Justify);
			}
		};
		var alignGridHorizontal = function (align) {
			var _p13 = align;
			switch (_p13.ctor) {
				case 'Left':
					return _mdgriffith$style_elements$Style_Internal_Model$GridH(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Left));
				case 'Right':
					return _mdgriffith$style_elements$Style_Internal_Model$GridH(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Right));
				case 'Center':
					return _mdgriffith$style_elements$Style_Internal_Model$GridH(_mdgriffith$style_elements$Style_Internal_Model$Center);
				default:
					return _mdgriffith$style_elements$Style_Internal_Model$GridH(_mdgriffith$style_elements$Style_Internal_Model$Justify);
			}
		};
		var alignFlexboxVertical = function (align) {
			var _p14 = align;
			switch (_p14.ctor) {
				case 'Top':
					return _mdgriffith$style_elements$Style_Internal_Model$Vert(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Top));
				case 'Bottom':
					return _mdgriffith$style_elements$Style_Internal_Model$Vert(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Bottom));
				case 'VerticalCenter':
					return _mdgriffith$style_elements$Style_Internal_Model$Vert(_mdgriffith$style_elements$Style_Internal_Model$Center);
				default:
					return _mdgriffith$style_elements$Style_Internal_Model$Vert(_mdgriffith$style_elements$Style_Internal_Model$Justify);
			}
		};
		var alignFlexboxHorizontal = function (align) {
			var _p15 = align;
			switch (_p15.ctor) {
				case 'Left':
					return _mdgriffith$style_elements$Style_Internal_Model$Horz(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Left));
				case 'Right':
					return _mdgriffith$style_elements$Style_Internal_Model$Horz(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Right));
				case 'Center':
					return _mdgriffith$style_elements$Style_Internal_Model$Horz(_mdgriffith$style_elements$Style_Internal_Model$Center);
				default:
					return _mdgriffith$style_elements$Style_Internal_Model$Horz(_mdgriffith$style_elements$Style_Internal_Model$Justify);
			}
		};
		var _p16 = layout;
		switch (_p16.ctor) {
			case 'TextLayout':
				return _mdgriffith$style_elements$Style_Internal_Model$TextLayout(_p16._0);
			case 'FlexLayout':
				var _p19 = _p16._1;
				var _p18 = _p16._0;
				var _p17 = {ctor: '_Tuple2', _0: maybeHorizontal, _1: maybeVertical};
				if (_p17._0.ctor === 'Nothing') {
					if (_p17._1.ctor === 'Nothing') {
						return A2(_mdgriffith$style_elements$Style_Internal_Model$FlexLayout, _p18, _p19);
					} else {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_p18,
							{
								ctor: '::',
								_0: alignFlexboxVertical(_p17._1._0),
								_1: _p19
							});
					}
				} else {
					if (_p17._1.ctor === 'Nothing') {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_p18,
							{
								ctor: '::',
								_0: alignFlexboxHorizontal(_p17._0._0),
								_1: _p19
							});
					} else {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_p18,
							{
								ctor: '::',
								_0: alignFlexboxHorizontal(_p17._0._0),
								_1: {
									ctor: '::',
									_0: alignFlexboxVertical(_p17._1._0),
									_1: _p19
								}
							});
					}
				}
			default:
				var _p22 = _p16._0;
				var _p21 = _p16._1;
				var _p20 = {ctor: '_Tuple2', _0: maybeHorizontal, _1: maybeVertical};
				if (_p20._0.ctor === 'Nothing') {
					if (_p20._1.ctor === 'Nothing') {
						return A2(_mdgriffith$style_elements$Style_Internal_Model$Grid, _p22, _p21);
					} else {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$Grid,
							_p22,
							{
								ctor: '::',
								_0: alignGridVertical(_p20._1._0),
								_1: _p21
							});
					}
				} else {
					if (_p20._1.ctor === 'Nothing') {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$Grid,
							_p22,
							{
								ctor: '::',
								_0: alignGridHorizontal(_p20._0._0),
								_1: _p21
							});
					} else {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$Grid,
							_p22,
							{
								ctor: '::',
								_0: alignGridHorizontal(_p20._0._0),
								_1: {
									ctor: '::',
									_0: alignGridVertical(_p20._1._0),
									_1: _p21
								}
							});
					}
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$makePositionable = F2(
	function (attr, pos) {
		var _p23 = attr;
		switch (_p23.ctor) {
			case 'Overflow':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						overflow: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Shrink':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						shrink: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Inline':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{inline: true});
			case 'Expand':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{expand: true});
			case 'Vary':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						variations: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: _p23._0, _1: _p23._1},
							_1: pos.variations
						}
					});
			case 'Height':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						height: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Width':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						width: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Position':
				var _p24 = pos.positioned;
				var currentX = _p24._0;
				var currentY = _p24._1;
				var currentZ = _p24._2;
				var newX = function () {
					var _p25 = _p23._0;
					if (_p25.ctor === 'Nothing') {
						return currentX;
					} else {
						return _elm_lang$core$Maybe$Just(_p25._0);
					}
				}();
				var newY = function () {
					var _p26 = _p23._1;
					if (_p26.ctor === 'Nothing') {
						return currentY;
					} else {
						return _elm_lang$core$Maybe$Just(_p26._0);
					}
				}();
				var newZ = function () {
					var _p27 = _p23._2;
					if (_p27.ctor === 'Nothing') {
						return currentZ;
					} else {
						return _elm_lang$core$Maybe$Just(_p27._0);
					}
				}();
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						positioned: {ctor: '_Tuple3', _0: newX, _1: newY, _2: newZ}
					});
			case 'PositionFrame':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						frame: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'HAlign':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						horizontal: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'VAlign':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						vertical: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Spacing':
				return pos;
			case 'Margin':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						margin: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'PhantomPadding':
				return pos;
			case 'Padding':
				var _p28 = pos.padding;
				var currentTop = _p28._0;
				var currentRight = _p28._1;
				var currentBottom = _p28._2;
				var currentLeft = _p28._3;
				var newTop = function () {
					var _p29 = _p23._0;
					if (_p29.ctor === 'Nothing') {
						return currentTop;
					} else {
						return _elm_lang$core$Maybe$Just(_p29._0);
					}
				}();
				var newRight = function () {
					var _p30 = _p23._1;
					if (_p30.ctor === 'Nothing') {
						return currentRight;
					} else {
						return _elm_lang$core$Maybe$Just(_p30._0);
					}
				}();
				var newBottom = function () {
					var _p31 = _p23._2;
					if (_p31.ctor === 'Nothing') {
						return currentBottom;
					} else {
						return _elm_lang$core$Maybe$Just(_p31._0);
					}
				}();
				var newLeft = function () {
					var _p32 = _p23._3;
					if (_p32.ctor === 'Nothing') {
						return currentLeft;
					} else {
						return _elm_lang$core$Maybe$Just(_p32._0);
					}
				}();
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						padding: {ctor: '_Tuple4', _0: newTop, _1: newRight, _2: newBottom, _3: newLeft}
					});
			case 'Hidden':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{hidden: true});
			case 'Opacity':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						opacity: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Event':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						attrs: {ctor: '::', _0: _p23._0, _1: pos.attrs}
					});
			case 'InputEvent':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						attrs: {ctor: '::', _0: _p23._0, _1: pos.attrs}
					});
			case 'Attr':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						attrs: {ctor: '::', _0: _p23._0, _1: pos.attrs}
					});
			case 'PointerEvents':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						pointerevents: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'GridArea':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						gridPosition: _elm_lang$core$Maybe$Just(_p23._0)
					});
			default:
				var _p33 = _mdgriffith$style_elements$Style_Internal_Render_Value$gridPosition(_p23._0);
				if (_p33.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.update(
						pos,
						{hidden: true});
				} else {
					return _elm_lang$core$Native_Utils.update(
						pos,
						{
							gridPosition: _elm_lang$core$Maybe$Just(_p33._0)
						});
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$emptyPositionable = {
	inline: false,
	horizontal: _elm_lang$core$Maybe$Nothing,
	vertical: _elm_lang$core$Maybe$Nothing,
	frame: _elm_lang$core$Maybe$Nothing,
	expand: false,
	hidden: false,
	width: _elm_lang$core$Maybe$Nothing,
	height: _elm_lang$core$Maybe$Nothing,
	positioned: {ctor: '_Tuple3', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing},
	margin: _elm_lang$core$Maybe$Nothing,
	padding: {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _elm_lang$core$Maybe$Nothing},
	variations: {ctor: '[]'},
	opacity: _elm_lang$core$Maybe$Nothing,
	gridPosition: _elm_lang$core$Maybe$Nothing,
	pointerevents: _elm_lang$core$Maybe$Nothing,
	attrs: {ctor: '[]'},
	shrink: _elm_lang$core$Maybe$Nothing,
	overflow: _elm_lang$core$Maybe$Nothing
};
var _mdgriffith$style_elements$Element_Internal_Render$gather = function (attrs) {
	return A3(_elm_lang$core$List$foldl, _mdgriffith$style_elements$Element_Internal_Render$makePositionable, _mdgriffith$style_elements$Element_Internal_Render$emptyPositionable, attrs);
};
var _mdgriffith$style_elements$Element_Internal_Render$defaultPadding = F2(
	function (_p35, _p34) {
		var _p36 = _p35;
		var _p37 = _p34;
		return {
			ctor: '_Tuple4',
			_0: A2(_elm_lang$core$Maybe$withDefault, _p37._0, _p36._0),
			_1: A2(_elm_lang$core$Maybe$withDefault, _p37._1, _p36._1),
			_2: A2(_elm_lang$core$Maybe$withDefault, _p37._2, _p36._2),
			_3: A2(_elm_lang$core$Maybe$withDefault, _p37._3, _p36._3)
		};
	});
var _mdgriffith$style_elements$Element_Internal_Render$calcPosition = F2(
	function (frame, _p38) {
		var _p39 = _p38;
		var _p46 = _p39._1;
		var _p45 = _p39._0;
		var z = A2(_elm_lang$core$Maybe$withDefault, 0, _p39._2);
		var y = A2(_elm_lang$core$Maybe$withDefault, 0, _p46);
		var x = A2(_elm_lang$core$Maybe$withDefault, 0, _p45);
		var _p40 = frame;
		switch (_p40.ctor) {
			case 'Relative':
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'left',
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(x),
								'px')
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'top',
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(y),
									'px')
							},
							_1: {ctor: '[]'}
						}
					}
				};
			case 'Screen':
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'position', _1: 'fixed'},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'left',
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(x),
								'px')
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'top',
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(y),
									'px')
							},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1000'},
								_1: {ctor: '[]'}
							}
						}
					}
				};
			case 'Absolute':
				if (_p40._0.ctor === 'TopLeft') {
					return A2(
						_elm_lang$core$List$filterMap,
						_elm_lang$core$Basics$identity,
						{
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple2', _0: 'position', _1: 'absolute'}),
							_1: {
								ctor: '::',
								_0: function () {
									var _p41 = _p45;
									if (_p41.ctor === 'Just') {
										return _elm_lang$core$Maybe$Just(
											{
												ctor: '_Tuple2',
												_0: 'left',
												_1: A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(_p41._0),
													'px')
											});
									} else {
										return _elm_lang$core$Maybe$Nothing;
									}
								}(),
								_1: {
									ctor: '::',
									_0: function () {
										var _p42 = _p46;
										if (_p42.ctor === 'Just') {
											return _elm_lang$core$Maybe$Just(
												{
													ctor: '_Tuple2',
													_0: 'top',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(_p42._0),
														'px')
												});
										} else {
											return _elm_lang$core$Maybe$Nothing;
										}
									}(),
									_1: {ctor: '[]'}
								}
							}
						});
				} else {
					return A2(
						_elm_lang$core$List$filterMap,
						_elm_lang$core$Basics$identity,
						{
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple2', _0: 'position', _1: 'absolute'}),
							_1: {
								ctor: '::',
								_0: function () {
									var _p43 = _p45;
									if (_p43.ctor === 'Just') {
										return _elm_lang$core$Maybe$Just(
											{
												ctor: '_Tuple2',
												_0: 'left',
												_1: A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(_p43._0),
													'px')
											});
									} else {
										return _elm_lang$core$Maybe$Nothing;
									}
								}(),
								_1: {
									ctor: '::',
									_0: function () {
										var _p44 = _p46;
										if (_p44.ctor === 'Just') {
											return _elm_lang$core$Maybe$Just(
												{
													ctor: '_Tuple2',
													_0: 'bottom',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(_p44._0),
														'px')
												});
										} else {
											return _elm_lang$core$Maybe$Nothing;
										}
									}(),
									_1: {ctor: '[]'}
								}
							}
						});
				}
			default:
				switch (_p40._0.ctor) {
					case 'Within':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'top',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(y),
										'px')
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'left',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
					case 'Above':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'top',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(y),
										'px')
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'left',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
					case 'Below':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'top',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										'calc(100% + ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(y),
											'px)'))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'left',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
					case 'OnLeft':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'right',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										'calc(100% - ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px)'))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'top',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(y),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
					default:
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'left',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										'calc(100% + ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px)'))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'top',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(y),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$spacingToMargin = function (attrs) {
	var spaceToMarg = function (a) {
		var _p47 = a;
		if (_p47.ctor === 'Spacing') {
			var _p49 = _p47._1;
			var _p48 = _p47._0;
			return _mdgriffith$style_elements$Element_Internal_Model$Margin(
				{ctor: '_Tuple4', _0: _p49, _1: _p48, _2: _p49, _3: _p48});
		} else {
			return _p47;
		}
	};
	return A2(_elm_lang$core$List$map, spaceToMarg, attrs);
};
var _mdgriffith$style_elements$Element_Internal_Render$withFocus = '\n\n.style-elements button.button-focus:focus {\n   outline: none;\n   box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n   border-color: rgba(155,203,255,1.0);\n}\n\n.style-elements textarea:focus, .style-elements input:focus {\n   outline: none;\n   box-shadow: 0 0 2px 2px rgba(155,203,255,1.0);\n   border-color: rgba(155,203,255,1.0);\n}\n.style-elements input[type=\'checkbox\'] {\n    border-radius: 3px;\n}\n.style-elements input[type=\'radio\'] {\n    border-radius: 7px;\n}\n.style-elements input[type=\'radio\']:focus {\n    border-radius: 7px;\n    box-shadow: 0 0 4px 4px rgba(155,203,255,1.0);\n}\n\n.style-elements select.focus-override:focus, .style-elements input.focus-override:focus {\n    outline: none;\n    box-shadow: none;\n    border-color:transparent;\n}\n.style-elements input.focus-override:focus ~ .alt-icon {\n    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n    border-color: rgba(155,203,255,1.0);\n}\n.style-elements select.focus-override:focus ~ .alt-icon {\n    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\n    border-color: rgba(155,203,255,1.0);\n}\n.style-elements .arrows {\n    display:block;\n    position: relative;\n    height: 10px;\n    width: 10px;\n}\n/*\n.style-elements .arrows::after {\n    content: \" \";\n    position:absolute;\n    top:-2px;\n    left:0;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid black;\n}\n*/\n\n.style-elements .arrows::before {\n    content: \" \";\n    position:absolute;\n    top:2px;\n    left:0;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid black;\n}\n\n\n';
var _mdgriffith$style_elements$Element_Internal_Render$qualifiedNormalize = A2(_elm_lang$core$Basics_ops['++'], 'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;padding:0;border:0}body{margin:0}.style-elements article,.style-elements aside,.style-elements footer,.style-elements header,.style-elements nav,.style-elements section{display:block}.style-elements h1{font-size:1em;margin:0}.style-elements figcaption,.style-elements figure,.style-elements main{display:block}.style-elements figure{margin:1em 40px}.style-elements hr{box-sizing:content-box;height:0;overflow:visible}.style-elements pre{font-family:monospace, monospace;font-size:1em}.style-elements a{background-color:transparent;-webkit-text-decoration-skip:objects}.style-elements abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}.style-elements b,.style-elements strong{font-weight:inherit}.style-elements b,.style-elements strong{font-weight:bolder}.style-elements code,.style-elements kbd,.style-elements samp{font-family:monospace, monospace;font-size:1em}.style-elements dfn{font-style:italic}.style-elements mark{background-color:#ff0;color:#000}.style-elements small{font-size:80%}.style-elements audio,.style-elements video{display:inline-block}.style-elements audio:not([controls]){display:none;height:0}.style-elements img{border-style:none}.style-elements svg:not(:root){overflow:hidden}.style-elements button,.style-elements input,.style-elements optgroup,.style-elements select,.style-elements textarea{font-family:sans-serif;font-size:100%;margin:0}.style-elements button,.style-elements input{overflow:visible}.style-elements button,.style-elements select{text-transform:none}.style-elements button,.style-elements html [type=\"button\"],.style-elements [type=\"reset\"],.style-elements [type=\"submit\"]{-webkit-appearance:button}.style-elements [type=\"button\"]::-moz-focus-inner,.style-elements [type=\"reset\"]::-moz-focus-inner,.style-elements [type=\"submit\"]::-moz-focus-inner,.style-elements button::-moz-focus-inner{border-style:none;padding:0}.style-elements [type=\"button\"]:-moz-focusring,.style-elements [type=\"reset\"]:-moz-focusring,.style-elements [type=\"submit\"]:-moz-focusring,.style-elements button:-moz-focusring{outline:1px dotted ButtonText}.style-elements fieldset{padding:0.35em 0.75em 0.625em}.style-elements legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.style-elements progress{display:inline-block;vertical-align:baseline}.style-elements textarea{overflow:auto}.style-elements [type=\"checkbox\"],.style-elements [type=\"radio\"]{box-sizing:border-box;padding:0}.style-elements [type=\"number\"]::-webkit-inner-spin-button,.style-elements [type=\"number\"]::-webkit-outer-spin-button{height:auto}.style-elements [type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}.style-elements [type=\"search\"]::-webkit-search-cancel-button,.style-elements [type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}.style-elements::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.style-elements details,.style-elements menu{display:block}.style-elements summary{display:list-item}.style-elements canvas{display:inline-block}.style-elements template{display:none}.style-elements [hidden]{display:none}.style-elements a{text-decoration:none}.style-elements input,.style-elements textarea{border:0}.style-elements .clearfix:after{content:\"\";display:table;clear:both}.style-elements a,.style-elements abbr,.style-elements acronym,.style-elements address,.style-elements applet,.style-elements article,.style-elements aside,.style-elements audio,.style-elements b,.style-elements big,.style-elements blockquote,.style-elements canvas,.style-elements caption,.style-elements center,.style-elements cite,.style-elements code,.style-elements dd,.style-elements del,.style-elements details,.style-elements dfn,.style-elements div,.style-elements dl,.style-elements dt,.style-elements em,.style-elements embed,.style-elements fieldset,.style-elements figcaption,.style-elements figure,.style-elements footer,.style-elements form,.style-elements h1,.style-elements h2,.style-elements h3,.style-elements h4,.style-elements h5,.style-elements h6,.style-elements header,.style-elements hgroup,.style-elements hr,.style-elements i,.style-elements iframe,.style-elements img,.style-elements ins,.style-elements kbd,.style-elements label,.style-elements legend,.style-elements li,.style-elements mark,.style-elements menu,.style-elements nav,.style-elements object,.style-elements ol,.style-elements output,.style-elements p,.style-elements pre,.style-elements q,.style-elements ruby,.style-elements s,.style-elements samp,.style-elements section,.style-elements small,.style-elements span,.style-elements strike,.style-elements strong,.style-elements sub,.style-elements summary,.style-elements sup,.style-elements table,.style-elements tbody,.style-elements td,.style-elements tfoot,.style-elements th,.style-elements thead,.style-elements time,.style-elements tr,.style-elements tt,.style-elements u,.style-elements ul,.style-elements var,.style-elements video{margin:0;padding:0;border:0;font-size:100%;font:inherit;box-sizing:border-box}.style-elements{margin:0;padding:0;border:0;font-size:100%;font:inherit;line-height:1}.style-elements em.el{font-style:italic}.style-elements strong.el{font-weight:bold}.style-elements strike.el{text-decoration:line-through}.style-elements u.el{text-decoration:underline}.style-elements sub.el,.style-elements sup.el{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.style-elements sub.el{bottom:-0.25em}.style-elements sup.el{top:-0.5em}', _mdgriffith$style_elements$Element_Internal_Render$withFocus);
var _mdgriffith$style_elements$Element_Internal_Render$normalizeFull = function (_p50) {
	return A2(_elm_lang$core$Basics_ops['++'], 'html,body{width:100%;height:100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;}', _mdgriffith$style_elements$Element_Internal_Render$qualifiedNormalize);
};
var _mdgriffith$style_elements$Element_Internal_Render$embed = F2(
	function (full, stylesheet) {
		return A3(
			_elm_lang$html$Html$node,
			'style',
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					full ? A2(
						_elm_lang$core$Basics_ops['++'],
						_mdgriffith$style_elements$Element_Internal_Render$normalizeFull(
							{ctor: '_Tuple0'}),
						stylesheet.css) : A2(_elm_lang$core$Basics_ops['++'], _mdgriffith$style_elements$Element_Internal_Render$qualifiedNormalize, stylesheet.css)),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Element_Internal_Render$normalize = A2(_elm_lang$core$Basics_ops['++'], 'html,body{width:100%;height:100%;}.style-elements-root{width:100%;height:100%;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,hr{margin:0;padding:0;border:0;font-size:100%;font:inherit}html{line-height:1;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}em{font-style:italic}strong{font-weight:bold}a{text-decoration:none}input,textarea{border:0}.clearfix:after{content:\"\";display:table;clear:both}', _mdgriffith$style_elements$Element_Internal_Render$withFocus);
var _mdgriffith$style_elements$Element_Internal_Render$Parent = F3(
	function (a, b, c) {
		return {parentSpecifiedSpacing: a, layout: b, parentPadding: c};
	});
var _mdgriffith$style_elements$Element_Internal_Render$Positionable = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return {inline: a, horizontal: b, vertical: c, frame: d, expand: e, hidden: f, width: g, height: h, positioned: i, margin: j, padding: k, variations: l, opacity: m, gridPosition: n, pointerevents: o, attrs: p, shrink: q, overflow: r};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast = {ctor: 'FirstAndLast'};
var _mdgriffith$style_elements$Element_Internal_Render$Last = {ctor: 'Last'};
var _mdgriffith$style_elements$Element_Internal_Render$Middle = function (a) {
	return {ctor: 'Middle', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Render$First = {ctor: 'First'};
var _mdgriffith$style_elements$Element_Internal_Render$detectOrder = F2(
	function (list, i) {
		var len = _elm_lang$core$List$length(list);
		return (_elm_lang$core$Native_Utils.eq(i, 0) && _elm_lang$core$Native_Utils.eq(len, 1)) ? _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast : (_elm_lang$core$Native_Utils.eq(i, 0) ? _mdgriffith$style_elements$Element_Internal_Render$First : (_elm_lang$core$Native_Utils.eq(i, len - 1) ? _mdgriffith$style_elements$Element_Internal_Render$Last : _mdgriffith$style_elements$Element_Internal_Render$Middle(i)));
	});
var _mdgriffith$style_elements$Element_Internal_Render$LayoutElement = function (a) {
	return {ctor: 'LayoutElement', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Render$Single = {ctor: 'Single'};
var _mdgriffith$style_elements$Element_Internal_Render$renderAttributes = F6(
	function (elType, order, maybeElemID, parent, stylesheet, elem) {
		var attributes = function () {
			var _p51 = maybeElemID;
			if (_p51.ctor === 'Nothing') {
				return elem.attrs;
			} else {
				var _p52 = _p51._0;
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(elem.variations),
					0) > 0) ? {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						A2(stylesheet.variations, _p52, elem.variations)),
					_1: elem.attrs
				} : {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class(
						stylesheet.style(_p52)),
					_1: elem.attrs
				};
			}
		}();
		var defaults = {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'box-sizing', _1: 'border-box'},
			_1: {ctor: '[]'}
		};
		var adjustspacing = function (_p53) {
			var _p54 = _p53;
			var _p63 = _p54._0;
			var _p62 = _p54._1;
			var _p61 = _p54._3;
			var _p60 = _p54._2;
			var onScreen = function () {
				var _p55 = elem.frame;
				if ((_p55.ctor === 'Just') && (_p55._0.ctor === 'Screen')) {
					return true;
				} else {
					return false;
				}
			}();
			var halved = {ctor: '_Tuple4', _0: _p63 / 2, _1: _p62 / 2, _2: _p60 / 2, _3: _p61 / 2};
			if (onScreen) {
				return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
			} else {
				var _p56 = parent;
				if (_p56.ctor === 'Nothing') {
					return {ctor: '_Tuple4', _0: _p63, _1: _p62, _2: _p60, _3: _p61};
				} else {
					var _p57 = _p56._0.layout;
					if (_p57.ctor === 'TextLayout') {
						var _p58 = elem.horizontal;
						if (_p58.ctor === 'Nothing') {
							return (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0} : (elem.inline ? {ctor: '_Tuple4', _0: 0, _1: _p62, _2: 0, _3: 0} : {ctor: '_Tuple4', _0: 0, _1: 0, _2: _p60, _3: 0});
						} else {
							if ((!elem.inline) && _elm_lang$core$Native_Utils.eq(elem.frame, _elm_lang$core$Maybe$Nothing)) {
								var _p59 = _p58._0;
								switch (_p59.ctor) {
									case 'Left':
										return _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) ? {ctor: '_Tuple4', _0: 0, _1: _p62, _2: _p60, _3: 0} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast) ? {ctor: '_Tuple4', _0: 0, _1: _p62, _2: 0, _3: 0} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) ? {ctor: '_Tuple4', _0: 0, _1: _p62, _2: 0, _3: 0} : {ctor: '_Tuple4', _0: 0, _1: _p62, _2: _p60, _3: 0}));
									case 'Right':
										return _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: _p60, _3: _p61} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: _p61} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: _p61} : {ctor: '_Tuple4', _0: 0, _1: 0, _2: _p60, _3: _p61}));
									default:
										return (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0} : {ctor: '_Tuple4', _0: 0, _1: 0, _2: _p60, _3: 0};
								}
							} else {
								return {ctor: '_Tuple4', _0: _p63, _1: _p62, _2: _p60, _3: _p61};
							}
						}
					} else {
						return halved;
					}
				}
			}
		};
		var spacing = function (attrs) {
			var _p64 = elem.margin;
			if (_p64.ctor === 'Nothing') {
				return attrs;
			} else {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'margin',
						_1: _mdgriffith$style_elements$Style_Internal_Render_Value$box(
							adjustspacing(_p64._0))
					},
					_1: attrs
				};
			}
		};
		var gridPos = function (attrs) {
			var _p65 = elem.gridPosition;
			if (_p65.ctor === 'Nothing') {
				return attrs;
			} else {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'grid-area', _1: _p65._0},
					_1: attrs
				};
			}
		};
		var padding = function (attrs) {
			var paddings = _mdgriffith$style_elements$Element_Internal_Render$renderPadding(elem.padding);
			return (_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$List$length(paddings),
				0) > 0) ? A2(_elm_lang$core$Basics_ops['++'], paddings, attrs) : attrs;
		};
		var opacity = function (attrs) {
			var _p66 = elem.opacity;
			if (_p66.ctor === 'Nothing') {
				return attrs;
			} else {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'opacity',
						_1: _elm_lang$core$Basics$toString(_p66._0)
					},
					_1: attrs
				};
			}
		};
		var height = function (attrs) {
			var _p67 = elem.height;
			if (_p67.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p72 = _p67._0;
				var _p68 = parent;
				if (_p68.ctor === 'Just') {
					var hundredPercentOrFill = function (x) {
						var _p69 = x;
						switch (_p69.ctor) {
							case 'Percent':
								return _elm_lang$core$Native_Utils.eq(_p69._0, 100);
							case 'Fill':
								return true;
							case 'Calc':
								return _elm_lang$core$Native_Utils.eq(_p69._0, 100);
							default:
								return false;
						}
					};
					var _p70 = A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
						_p68._0.parentSpecifiedSpacing);
					var topPad = _p70._0;
					var bottomPad = _p70._2;
					var paddingAdjustment = (topPad + bottomPad) / 2;
					var _p71 = _p68._0.layout;
					if (_p71.ctor === 'FlexLayout') {
						switch (_p71._0.ctor) {
							case 'Down':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_mdgriffith$style_elements$Style_Internal_Render_Property$flexHeight(_p72),
									attrs);
							case 'Up':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_mdgriffith$style_elements$Style_Internal_Render_Property$flexHeight(_p72),
									attrs);
							case 'GoRight':
								return hundredPercentOrFill(_p72) ? {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'height', _1: 'auto'},
									_1: attrs
								} : {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'height',
										_1: A2(_mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength, _p72, paddingAdjustment)
									},
									_1: attrs
								};
							default:
								return hundredPercentOrFill(_p72) ? {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'height', _1: 'auto'},
									_1: attrs
								} : {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'height',
										_1: A2(_mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength, _p72, paddingAdjustment)
									},
									_1: attrs
								};
						}
					} else {
						return {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'height',
								_1: A2(_mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength, _p72, paddingAdjustment)
							},
							_1: attrs
						};
					}
				} else {
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'height',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(_p72)
						},
						_1: attrs
					};
				}
			}
		};
		var width = function (attrs) {
			var _p73 = elem.width;
			if (_p73.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p77 = _p73._0;
				var _p74 = parent;
				if (_p74.ctor === 'Just') {
					var _p75 = A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
						_p74._0.parentSpecifiedSpacing);
					var rightPad = _p75._1;
					var leftPad = _p75._3;
					var paddingAdjustment = (rightPad + leftPad) / 2;
					var _p76 = _p74._0.layout;
					_v52_2:
					do {
						if (_p76.ctor === 'FlexLayout') {
							switch (_p76._0.ctor) {
								case 'GoRight':
									return A2(
										_elm_lang$core$Basics_ops['++'],
										A2(_mdgriffith$style_elements$Style_Internal_Render_Property$flexWidth, _p77, paddingAdjustment),
										attrs);
								case 'GoLeft':
									return A2(
										_elm_lang$core$Basics_ops['++'],
										A2(_mdgriffith$style_elements$Style_Internal_Render_Property$flexWidth, _p77, paddingAdjustment),
										attrs);
								default:
									break _v52_2;
							}
						} else {
							break _v52_2;
						}
					} while(false);
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'width',
							_1: A2(_mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength, _p77, paddingAdjustment)
						},
						_1: attrs
					};
				} else {
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'width',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(_p77)
						},
						_1: attrs
					};
				}
			}
		};
		var shrink = function (attrs) {
			var _p78 = elem.shrink;
			if (_p78.ctor === 'Just') {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'flex-shrink',
						_1: _elm_lang$core$Basics$toString(_p78._0)
					},
					_1: attrs
				};
			} else {
				var _p79 = parent;
				if (_p79.ctor === 'Nothing') {
					return attrs;
				} else {
					var horizontalOverflow = function () {
						var _p80 = elem.overflow;
						if (_p80.ctor === 'Just') {
							switch (_p80._0.ctor) {
								case 'XAxis':
									return true;
								case 'YAxis':
									return false;
								default:
									return true;
							}
						} else {
							return false;
						}
					}();
					var verticalOverflow = function () {
						var _p81 = elem.overflow;
						if (_p81.ctor === 'Just') {
							switch (_p81._0.ctor) {
								case 'XAxis':
									return false;
								case 'YAxis':
									return true;
								default:
									return true;
							}
						} else {
							return false;
						}
					}();
					var isVertical = function (dir) {
						var _p82 = dir;
						switch (_p82.ctor) {
							case 'Up':
								return true;
							case 'Down':
								return true;
							default:
								return false;
						}
					};
					var isHorizontal = function (dir) {
						var _p83 = dir;
						switch (_p83.ctor) {
							case 'GoRight':
								return true;
							case 'GoLeft':
								return true;
							default:
								return false;
						}
					};
					var isPx = function (x) {
						var _p84 = x;
						if ((_p84.ctor === 'Just') && (_p84._0.ctor === 'Px')) {
							return true;
						} else {
							return false;
						}
					};
					var isPercent = function (x) {
						var _p85 = x;
						if ((_p85.ctor === 'Just') && (_p85._0.ctor === 'Percent')) {
							return true;
						} else {
							return false;
						}
					};
					var _p86 = _p79._0.layout;
					if (_p86.ctor === 'FlexLayout') {
						var _p88 = _p86._0;
						if (isHorizontal(_p88) && isPx(elem.width)) {
							return {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
								_1: attrs
							};
						} else {
							if (isHorizontal(_p88) && isPercent(elem.width)) {
								return {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
									_1: attrs
								};
							} else {
								if (isHorizontal(_p88) && (!_elm_lang$core$Native_Utils.eq(elem.width, _elm_lang$core$Maybe$Nothing))) {
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
										_1: attrs
									};
								} else {
									if (isHorizontal(_p88) && horizontalOverflow) {
										return {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
											_1: attrs
										};
									} else {
										if (isVertical(_p88) && isPx(elem.height)) {
											return {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
												_1: attrs
											};
										} else {
											if (isVertical(_p88) && isPercent(elem.height)) {
												return {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
													_1: attrs
												};
											} else {
												if (isVertical(_p88) && (!_elm_lang$core$Native_Utils.eq(elem.height, _elm_lang$core$Maybe$Nothing))) {
													return {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
														_1: attrs
													};
												} else {
													if (isVertical(_p88) && verticalOverflow) {
														return {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
															_1: attrs
														};
													} else {
														if (isHorizontal(_p88) && _elm_lang$core$Native_Utils.eq(elem.width, _elm_lang$core$Maybe$Nothing)) {
															return {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
																_1: attrs
															};
														} else {
															if (isVertical(_p88) && _elm_lang$core$Native_Utils.eq(elem.height, _elm_lang$core$Maybe$Nothing)) {
																var _p87 = elType;
																if (_p87.ctor === 'Single') {
																	return {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
																		_1: attrs
																	};
																} else {
																	return {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
																		_1: attrs
																	};
																}
															} else {
																return {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
																	_1: attrs
																};
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					} else {
						return attrs;
					}
				}
			}
		};
		var overflow = function (attrs) {
			var _p89 = elem.overflow;
			if (_p89.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p90 = _p89._0;
				switch (_p90.ctor) {
					case 'XAxis':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'overflow-x', _1: 'auto'},
							_1: attrs
						};
					case 'YAxis':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'overflow-y', _1: 'auto'},
							_1: attrs
						};
					default:
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'auto'},
							_1: attrs
						};
				}
			}
		};
		var horizontal = function (attrs) {
			var _p91 = elem.horizontal;
			if (_p91.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p99 = _p91._0;
				if (elem.inline && _elm_lang$core$Native_Utils.eq(elType, _mdgriffith$style_elements$Element_Internal_Render$Single)) {
					var _p92 = _p99;
					switch (_p92.ctor) {
						case 'Left':
							return {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
									_1: attrs
								}
							};
						case 'Right':
							return {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'float', _1: 'right'},
									_1: attrs
								}
							};
						case 'Center':
							return attrs;
						default:
							return attrs;
					}
				} else {
					if (elem.inline) {
						return attrs;
					} else {
						if (!_elm_lang$core$Native_Utils.eq(elem.frame, _elm_lang$core$Maybe$Nothing)) {
							var _p93 = _p99;
							switch (_p93.ctor) {
								case 'Left':
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'left', _1: '0'},
										_1: attrs
									};
								case 'Right':
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'right', _1: '0'},
										_1: attrs
									};
								case 'Center':
									return attrs;
								default:
									return attrs;
							}
						} else {
							var _p94 = elType;
							if (_p94.ctor === 'LayoutElement') {
								return attrs;
							} else {
								var _p95 = parent;
								if (_p95.ctor === 'Nothing') {
									return attrs;
								} else {
									var _p96 = _p95._0.layout;
									switch (_p96.ctor) {
										case 'TextLayout':
											var _p97 = _p99;
											switch (_p97.ctor) {
												case 'Left':
													return {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
															_1: attrs
														}
													};
												case 'Right':
													return {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'float', _1: 'right'},
															_1: attrs
														}
													};
												case 'Center':
													return attrs;
												default:
													return attrs;
											}
										case 'FlexLayout':
											var _p98 = A2(_mdgriffith$style_elements$Element_Internal_Render$flexboxHorizontalIndividualAlignment, _p96._0, _p99);
											if (_p98.ctor === 'Nothing') {
												return attrs;
											} else {
												return {ctor: '::', _0: _p98._0, _1: attrs};
											}
										default:
											return attrs;
									}
								}
							}
						}
					}
				}
			}
		};
		var vertical = function (attrs) {
			var _p100 = elem.vertical;
			if (_p100.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p105 = _p100._0;
				if (elem.inline && _elm_lang$core$Native_Utils.eq(elType, _mdgriffith$style_elements$Element_Internal_Render$Single)) {
					return attrs;
				} else {
					if (elem.inline) {
						return attrs;
					} else {
						if (!_elm_lang$core$Native_Utils.eq(elem.frame, _elm_lang$core$Maybe$Nothing)) {
							var _p101 = _p105;
							switch (_p101.ctor) {
								case 'Top':
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'top', _1: '0'},
										_1: attrs
									};
								case 'Bottom':
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'bottom', _1: '0'},
										_1: attrs
									};
								case 'VerticalCenter':
									return attrs;
								default:
									return attrs;
							}
						} else {
							var _p102 = parent;
							if (_p102.ctor === 'Nothing') {
								return attrs;
							} else {
								var _p103 = _p102._0.layout;
								if (_p103.ctor === 'FlexLayout') {
									var _p104 = A2(_mdgriffith$style_elements$Element_Internal_Render$flexboxVerticalIndividualAlignment, _p103._0, _p105);
									if (_p104.ctor === 'Nothing') {
										return attrs;
									} else {
										return {ctor: '::', _0: _p104._0, _1: attrs};
									}
								} else {
									return attrs;
								}
							}
						}
					}
				}
			}
		};
		var passthrough = function (attrs) {
			var _p106 = elem.pointerevents;
			if (_p106.ctor === 'Nothing') {
				return attrs;
			} else {
				if (_p106._0 === false) {
					return {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'pointer-events', _1: 'none'},
						_1: attrs
					};
				} else {
					return {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'pointer-events', _1: 'auto'},
						_1: attrs
					};
				}
			}
		};
		var position = function (attrs) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_mdgriffith$style_elements$Element_Internal_Render$calcPosition,
					A2(_elm_lang$core$Maybe$withDefault, _mdgriffith$style_elements$Element_Internal_Model$Relative, elem.frame),
					elem.positioned),
				attrs);
		};
		var layout = function (attrs) {
			var _p107 = elType;
			if (_p107.ctor === 'Single') {
				return elem.inline ? {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline'},
					_1: attrs
				} : {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
					_1: attrs
				};
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_mdgriffith$style_elements$Style_Internal_Render_Property$layout,
						elem.inline,
						A3(_mdgriffith$style_elements$Element_Internal_Render$alignLayout, elem.horizontal, elem.vertical, _p107._0)),
					attrs);
			}
		};
		if (elem.hidden) {
			return {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'display', _1: 'none'},
						_1: {ctor: '[]'}
					}),
				_1: attributes
			};
		} else {
			if (elem.expand) {
				var expandedProps = function () {
					var _p108 = parent;
					if (_p108.ctor === 'Nothing') {
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'width', _1: '100%'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'height', _1: '100%'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
									_1: {ctor: '[]'}
								}
							}
						};
					} else {
						var _p115 = _p108._0.parentPadding;
						var _p109 = _p108._0.layout;
						switch (_p109.ctor) {
							case 'TextLayout':
								var borders = _elm_lang$core$List$concat(
									{
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) ? {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'border-top-right-radius', _1: '0'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'border-top-left-radius', _1: '0'},
												_1: {ctor: '[]'}
											}
										} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) ? {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'border-bottom-right-radius', _1: '0'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'border-bottom-left-radius', _1: '0'},
												_1: {ctor: '[]'}
											}
										} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast) ? {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'border-top-right-radius', _1: '0'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'border-top-left-radius', _1: '0'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'border-bottom-right-radius', _1: '0'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'border-bottom-left-radius', _1: '0'},
														_1: {ctor: '[]'}
													}
												}
											}
										} : {ctor: '[]'})),
										_1: {ctor: '[]'}
									});
								var _p110 = _p115;
								var top = _p110._0;
								var right = _p110._1;
								var bottom = _p110._2;
								var left = _p110._3;
								return A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'width',
											_1: A2(
												_elm_lang$core$Basics_ops['++'],
												'calc(100% + ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(right + left),
													'px'))
										},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'margin-left',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(-1 * left),
														'px')
												},
												_1: {
													ctor: '::',
													_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
														ctor: '_Tuple2',
														_0: 'margin-top',
														_1: A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(-1 * top),
															'px')
													} : {ctor: '_Tuple2', _0: 'margin-top', _1: '0'},
													_1: {
														ctor: '::',
														_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
															ctor: '_Tuple2',
															_0: 'margin-bottom',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString(-1 * bottom),
																'px')
														} : {ctor: '_Tuple2', _0: 'margin-bottom', _1: '0'},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'padding',
																_1: _mdgriffith$style_elements$Style_Internal_Render_Value$box(
																	A2(_mdgriffith$style_elements$Element_Internal_Render$defaultPadding, elem.padding, _p115))
															},
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									},
									borders);
							case 'FlexLayout':
								var _p111 = function () {
									var _p112 = _p108._0.parentSpecifiedSpacing;
									if (_p112.ctor === 'Nothing') {
										return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
									} else {
										return _p112._0;
									}
								}();
								var parentSpaceTop = _p111._0;
								var parentSpaceRight = _p111._1;
								var parentSpaceBottom = _p111._2;
								var parentSpaceLeft = _p111._3;
								var _p113 = _p115;
								var top = _p113._0;
								var right = _p113._1;
								var bottom = _p113._2;
								var left = _p113._3;
								var _p114 = _p109._0;
								switch (_p114.ctor) {
									case 'GoRight':
										return width(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'height',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														'calc(100% + ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString((top + bottom) - ((parentSpaceTop + parentSpaceBottom) / 2)),
															'px'))
												},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'margin-top',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString((-1 * top) + (parentSpaceTop / 2)),
																'px')
														},
														_1: {
															ctor: '::',
															_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																ctor: '_Tuple2',
																_0: 'margin-left',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(-1 * left),
																	'px')
															} : {
																ctor: '_Tuple2',
																_0: 'margin-left',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(parentSpaceLeft / 2),
																	'px')
															},
															_1: {
																ctor: '::',
																_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																	ctor: '_Tuple2',
																	_0: 'margin-right',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(-1 * right),
																		'px')
																} : {
																	ctor: '_Tuple2',
																	_0: 'margin-right',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(parentSpaceRight / 2),
																		'px')
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											});
									case 'GoLeft':
										return width(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'height',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														'calc(100% + ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString((top + bottom) - ((parentSpaceTop + parentSpaceBottom) / 2)),
															'px'))
												},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'margin-top',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString((-1 * top) + (parentSpaceTop / 2)),
																'px')
														},
														_1: {
															ctor: '::',
															_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																ctor: '_Tuple2',
																_0: 'margin-right',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(-1 * right),
																	'px')
															} : {
																ctor: '_Tuple2',
																_0: 'margin-right',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(parentSpaceRight / 2),
																	'px')
															},
															_1: {
																ctor: '::',
																_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																	ctor: '_Tuple2',
																	_0: 'margin-left',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(-1 * left),
																		'px')
																} : {
																	ctor: '_Tuple2',
																	_0: 'margin-left',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(parentSpaceLeft / 2),
																		'px')
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											});
									case 'Up':
										return height(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'width',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														'calc(100% + ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString((left + right) - ((parentSpaceLeft + parentSpaceRight) / 2)),
															'px'))
												},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'margin-left',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString((-1 * left) + (parentSpaceLeft / 2)),
																'px')
														},
														_1: {
															ctor: '::',
															_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																ctor: '_Tuple2',
																_0: 'margin-bottom',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(-1 * top),
																	'px')
															} : {
																ctor: '_Tuple2',
																_0: 'margin-bottom',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(parentSpaceBottom / 2),
																	'px')
															},
															_1: {
																ctor: '::',
																_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																	ctor: '_Tuple2',
																	_0: 'margin-top',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(-1 * bottom),
																		'px')
																} : {
																	ctor: '_Tuple2',
																	_0: 'margin-top',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(parentSpaceTop / 2),
																		'px')
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											});
									default:
										return height(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'width',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														'calc(100% + ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString((left + right) - ((parentSpaceLeft + parentSpaceRight) / 2)),
															'px'))
												},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'margin-left',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString((-1 * left) + (parentSpaceLeft / 2)),
																'px')
														},
														_1: {
															ctor: '::',
															_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																ctor: '_Tuple2',
																_0: 'margin-top',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(-1 * top),
																	'px')
															} : {
																ctor: '_Tuple2',
																_0: 'margin-top',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(parentSpaceTop / 2),
																	'px')
															},
															_1: {
																ctor: '::',
																_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																	ctor: '_Tuple2',
																	_0: 'margin-bottom',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(-1 * bottom),
																		'px')
																} : {
																	ctor: '_Tuple2',
																	_0: 'margin-bottom',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(parentSpaceBottom / 2),
																		'px')
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											});
								}
							default:
								return {ctor: '[]'};
						}
					}
				}();
				return {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						A2(
							_elm_lang$core$Basics_ops['++'],
							defaults,
							function (_p116) {
								return passthrough(
									gridPos(
										layout(
											spacing(
												opacity(
													shrink(
														padding(
															position(
																overflow(_p116)))))))));
							}(expandedProps))),
					_1: attributes
				};
			} else {
				return {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						function (_p117) {
							return passthrough(
								gridPos(
									layout(
										spacing(
											opacity(
												shrink(
													width(
														height(
															padding(
																horizontal(
																	vertical(
																		position(
																			overflow(_p117)))))))))))));
						}(defaults)),
					_1: attributes
				};
			}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$renderElement = F4(
	function (parent, stylesheet, order, elm) {
		var _p118 = elm;
		switch (_p118.ctor) {
			case 'Empty':
				return _elm_lang$html$Html$text('');
			case 'Raw':
				return _p118._0;
			case 'Spacer':
				var _p122 = _p118._0;
				var forSpacing = function (posAttr) {
					var _p119 = posAttr;
					if (_p119.ctor === 'Spacing') {
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: _p119._0, _1: _p119._1});
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				};
				var _p120 = function () {
					var _p121 = parent;
					if (_p121.ctor === 'Just') {
						return A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
							_p121._0.parentSpecifiedSpacing);
					} else {
						return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
					}
				}();
				var spacingX = _p120._0;
				var spacingY = _p120._1;
				var inline = {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'width',
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p122 * spacingX),
							'px')
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'height',
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p122 * spacingY),
								'px')
						},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'visibility', _1: 'hidden'},
							_1: {ctor: '[]'}
						}
					}
				};
				return A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(inline),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'});
			case 'Text':
				var _p124 = _p118._1;
				var attrs = _p118._0.inline ? _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline'},
						_1: {ctor: '[]'}
					}) : _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'white-space', _1: 'pre'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'text-overflow', _1: 'ellipsis'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'hidden'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
									_1: {ctor: '[]'}
								}
							}
						}
					});
				var _p123 = _p118._0.decoration;
				switch (_p123.ctor) {
					case 'NoDecoration':
						return A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('el'),
								_1: {
									ctor: '::',
									_0: attrs,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p124),
								_1: {ctor: '[]'}
							});
					case 'RawText':
						return _elm_lang$html$Html$text(_p124);
					case 'Bold':
						return A2(
							_elm_lang$html$Html$strong,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('el'),
								_1: {
									ctor: '::',
									_0: attrs,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p124),
								_1: {ctor: '[]'}
							});
					case 'Italic':
						return A2(
							_elm_lang$html$Html$em,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('el'),
								_1: {
									ctor: '::',
									_0: attrs,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p124),
								_1: {ctor: '[]'}
							});
					case 'Underline':
						return A2(
							_elm_lang$html$Html$u,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('el'),
								_1: {
									ctor: '::',
									_0: attrs,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p124),
								_1: {ctor: '[]'}
							});
					case 'Strike':
						return A2(
							_elm_lang$html$Html$s,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('el'),
								_1: {
									ctor: '::',
									_0: attrs,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p124),
								_1: {ctor: '[]'}
							});
					case 'Super':
						return A2(
							_elm_lang$html$Html$sup,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('el'),
								_1: {
									ctor: '::',
									_0: attrs,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p124),
								_1: {ctor: '[]'}
							});
					default:
						return A2(
							_elm_lang$html$Html$sub,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('el'),
								_1: {
									ctor: '::',
									_0: attrs,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p124),
								_1: {ctor: '[]'}
							});
				}
			case 'Element':
				var _p135 = _p118._0.child;
				var _p134 = _p118._0.attrs;
				var parentTextLayout = function (layout) {
					var _p125 = layout;
					if (_p125.ctor === 'TextLayout') {
						return true;
					} else {
						return false;
					}
				};
				var attributes = function () {
					var _p126 = parent;
					if (_p126.ctor === 'Nothing') {
						return _mdgriffith$style_elements$Element_Internal_Render$spacingToMargin(_p134);
					} else {
						var _p132 = _p126._0;
						var _p127 = _p132.parentSpecifiedSpacing;
						if (_p127.ctor === 'Nothing') {
							return (parentTextLayout(_p132.layout) || A2(
								_elm_lang$core$List$any,
								F2(
									function (x, y) {
										return _elm_lang$core$Native_Utils.eq(x, y);
									})(_mdgriffith$style_elements$Element_Internal_Model$Inline),
								_p134)) ? _mdgriffith$style_elements$Element_Internal_Render$spacingToMargin(_p134) : _p134;
						} else {
							var _p131 = _p127._0._0;
							var _p130 = _p127._0._1;
							var _p129 = _p127._0._3;
							var _p128 = _p127._0._2;
							return (parentTextLayout(_p132.layout) || A2(
								_elm_lang$core$List$any,
								F2(
									function (x, y) {
										return _elm_lang$core$Native_Utils.eq(x, y);
									})(_mdgriffith$style_elements$Element_Internal_Model$Inline),
								_p134)) ? {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Margin(
									{ctor: '_Tuple4', _0: _p131, _1: _p130, _2: _p128, _3: _p129}),
								_1: _mdgriffith$style_elements$Element_Internal_Render$spacingToMargin(_p134)
							} : {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Margin(
									{ctor: '_Tuple4', _0: _p131, _1: _p130, _2: _p128, _3: _p129}),
								_1: _p134
							};
						}
					}
				}();
				var htmlAttrs = A6(
					_mdgriffith$style_elements$Element_Internal_Render$renderAttributes,
					_mdgriffith$style_elements$Element_Internal_Render$Single,
					order,
					_p118._0.style,
					parent,
					stylesheet,
					_mdgriffith$style_elements$Element_Internal_Render$gather(attributes));
				var childHtml = function () {
					var _p133 = _p118._0.absolutelyPositioned;
					if (_p133.ctor === 'Nothing') {
						return {
							ctor: '::',
							_0: A4(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast, _p135),
							_1: {ctor: '[]'}
						};
					} else {
						return A2(
							_elm_lang$core$List$map,
							A3(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast),
							{ctor: '::', _0: _p135, _1: _p133._0});
					}
				}();
				return A3(_elm_lang$html$Html$node, _p118._0.node, htmlAttrs, childHtml);
			default:
				var _p157 = _p118._0.node;
				var _p156 = _p118._0.layout;
				var _p155 = _p118._0.attrs;
				var isFlexbox = function (layout) {
					var _p136 = layout;
					if (_p136.ctor === 'FlexLayout') {
						return true;
					} else {
						return false;
					}
				};
				var adjacentFlexboxCorrection = function (htmlNode) {
					var _p137 = parent;
					if (_p137.ctor === 'Nothing') {
						return htmlNode;
					} else {
						return (isFlexbox(_p137._0.layout) && isFlexbox(_p156)) ? htmlNode : htmlNode;
					}
				};
				var findSpacing = function (posAttr) {
					var _p138 = posAttr;
					if (_p138.ctor === 'Spacing') {
						var _p140 = _p138._1;
						var _p139 = _p138._0;
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple4', _0: _p140, _1: _p139, _2: _p140, _3: _p139});
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				};
				var forSpacing = function (_p141) {
					return function (x) {
						return !_elm_lang$core$Native_Utils.eq(x, _elm_lang$core$Maybe$Nothing);
					}(
						findSpacing(_p141));
				};
				var _p142 = A2(_elm_lang$core$List$partition, forSpacing, _p155);
				var spacing = _p142._0;
				var forPadding = function (posAttr) {
					var _p143 = posAttr;
					switch (_p143.ctor) {
						case 'Padding':
							return _elm_lang$core$Maybe$Just(
								A2(
									_mdgriffith$style_elements$Element_Internal_Render$defaultPadding,
									{ctor: '_Tuple4', _0: _p143._0, _1: _p143._1, _2: _p143._2, _3: _p143._3},
									{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0}));
						case 'PhantomPadding':
							return _elm_lang$core$Maybe$Just(_p143._0);
						default:
							return _elm_lang$core$Maybe$Nothing;
					}
				};
				var clearfix = function (attrs) {
					var _p144 = _p156;
					if (_p144.ctor === 'TextLayout') {
						return _p144._0 ? {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('clearfix'),
							_1: attrs
						} : attrs;
					} else {
						return attrs;
					}
				};
				var attributes = function () {
					var _p145 = parent;
					if (_p145.ctor === 'Nothing') {
						return _p155;
					} else {
						var _p146 = _p145._0.parentSpecifiedSpacing;
						if (_p146.ctor === 'Nothing') {
							return _p155;
						} else {
							return {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Margin(_p146._0),
								_1: _p155
							};
						}
					}
				}();
				var padding = function () {
					var _p147 = _elm_lang$core$List$head(
						A2(_elm_lang$core$List$filterMap, forPadding, attributes));
					if (_p147.ctor === 'Nothing') {
						return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
					} else {
						return _p147._0;
					}
				}();
				var inherit = {
					parentSpecifiedSpacing: _elm_lang$core$List$head(
						A2(_elm_lang$core$List$filterMap, findSpacing, _p155)),
					layout: _p156,
					parentPadding: padding
				};
				var htmlAttrs = clearfix(
					A6(
						_mdgriffith$style_elements$Element_Internal_Render$renderAttributes,
						_mdgriffith$style_elements$Element_Internal_Render$LayoutElement(_p156),
						order,
						_p118._0.style,
						parent,
						stylesheet,
						_mdgriffith$style_elements$Element_Internal_Render$gather(attributes)));
				var _p148 = A2(
					_elm_lang$core$List$partition,
					function (attr) {
						return _elm_lang$core$Native_Utils.eq(
							attr,
							_mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Center)) || _elm_lang$core$Native_Utils.eq(
							attr,
							_mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$VerticalCenter));
					},
					_p155);
				var centeredProps = _p148._0;
				var others = _p148._1;
				var _p149 = _p118._0.children;
				if (_p149.ctor === 'Normal') {
					var _p151 = _p149._0;
					var childHtml = A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, child) {
								return A4(
									_mdgriffith$style_elements$Element_Internal_Render$renderElement,
									_elm_lang$core$Maybe$Just(inherit),
									stylesheet,
									A2(_mdgriffith$style_elements$Element_Internal_Render$detectOrder, _p151, i),
									child);
							}),
						_p151);
					var allChildren = function () {
						var _p150 = _p118._0.absolutelyPositioned;
						if (_p150.ctor === 'Nothing') {
							return childHtml;
						} else {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								childHtml,
								A2(
									_elm_lang$core$List$map,
									A3(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast),
									_p150._0));
						}
					}();
					return adjacentFlexboxCorrection(
						A3(_elm_lang$html$Html$node, _p157, htmlAttrs, allChildren));
				} else {
					var _p154 = _p149._0;
					var childHtml = A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, _p152) {
								var _p153 = _p152;
								return {
									ctor: '_Tuple2',
									_0: _p153._0,
									_1: A4(
										_mdgriffith$style_elements$Element_Internal_Render$renderElement,
										_elm_lang$core$Maybe$Just(inherit),
										stylesheet,
										A2(_mdgriffith$style_elements$Element_Internal_Render$detectOrder, _p154, i),
										_p153._1)
								};
							}),
						_p154);
					return adjacentFlexboxCorrection(
						A3(_elm_lang$html$Html_Keyed$node, _p157, htmlAttrs, childHtml));
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$render = F2(
	function (stylesheet, elm) {
		var _p158 = _mdgriffith$style_elements$Element_Internal_Adjustments$apply(elm);
		var adjusted = _p158._0;
		var onScreen = _p158._1;
		var fixedScreenElements = function () {
			var _p159 = onScreen;
			if (_p159.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				return A2(
					_elm_lang$core$List$map,
					A3(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast),
					_p159._0);
			}
		}();
		return {
			ctor: '::',
			_0: A4(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast, adjusted),
			_1: fixedScreenElements
		};
	});
var _mdgriffith$style_elements$Element_Internal_Render$viewport = F2(
	function (stylesheet, elm) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('style-elements'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'width', _1: '100%'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'height', _1: '100%'},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Element_Internal_Render$embed, true, stylesheet),
				_1: A2(_mdgriffith$style_elements$Element_Internal_Render$render, stylesheet, elm)
			});
	});
var _mdgriffith$style_elements$Element_Internal_Render$root = F2(
	function (stylesheet, elm) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('style-elements'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Element_Internal_Render$embed, false, stylesheet),
				_1: A2(_mdgriffith$style_elements$Element_Internal_Render$render, stylesheet, elm)
			});
	});

var _mdgriffith$style_elements$Element$mainContent = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'main',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$height(_mdgriffith$style_elements$Element_Attributes$fill),
						_1: {
							ctor: '::',
							_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'main'),
							_1: attrs
						}
					}
				},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$sidebar = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'aside',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$Down,
					{ctor: '[]'}),
				attrs: {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'complementary'),
					_1: attrs
				},
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$footer = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'footer',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'contentinfo'),
						_1: attrs
					}
				},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$header = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'header',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'banner'),
						_1: attrs
					}
				},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$navigationColumn = F3(
	function (style, attrs, _p0) {
		var _p1 = _p0;
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'nav',
				style: _elm_lang$core$Maybe$Nothing,
				attrs: {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'navigation'),
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-label', _p1.name),
						_1: {ctor: '[]'}
					}
				},
				child: _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'ul',
						style: _elm_lang$core$Maybe$Just(style),
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$Down,
							{ctor: '[]'}),
						attrs: attrs,
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Element_Internal_Modify$setNode('li'),
								_p1.options)),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$navigation = F3(
	function (style, attrs, _p2) {
		var _p3 = _p2;
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'nav',
				style: _elm_lang$core$Maybe$Nothing,
				attrs: {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'navigation'),
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-label', _p3.name),
						_1: {ctor: '[]'}
					}
				},
				child: _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'ul',
						style: _elm_lang$core$Maybe$Just(style),
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: attrs,
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Element_Internal_Modify$setNode('li'),
								_p3.options)),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$search = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'search'),
						_1: attrs
					}
				},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$map = _mdgriffith$style_elements$Element_Internal_Model$mapMsg;
var _mdgriffith$style_elements$Element$responsive = F3(
	function (a, _p5, _p4) {
		var _p6 = _p5;
		var _p11 = _p6._0;
		var _p10 = _p6._1;
		var _p7 = _p4;
		var _p9 = _p7._0;
		var _p8 = _p7._1;
		if (_elm_lang$core$Native_Utils.cmp(a, _p11) < 1) {
			return _p9;
		} else {
			if (_elm_lang$core$Native_Utils.cmp(a, _p10) > -1) {
				return _p8;
			} else {
				var deltaA = (a - _p11) / (_p10 - _p11);
				return (deltaA * (_p8 - _p9)) + _p9;
			}
		}
	});
var _mdgriffith$style_elements$Element$classifyDevice = function (_p12) {
	var _p13 = _p12;
	var _p15 = _p13.width;
	var _p14 = _p13.height;
	return {
		width: _p15,
		height: _p14,
		phone: _elm_lang$core$Native_Utils.cmp(_p15, 600) < 1,
		tablet: (_elm_lang$core$Native_Utils.cmp(_p15, 600) > 0) && (_elm_lang$core$Native_Utils.cmp(_p15, 1200) < 1),
		desktop: (_elm_lang$core$Native_Utils.cmp(_p15, 1200) > 0) && (_elm_lang$core$Native_Utils.cmp(_p15, 1800) < 1),
		bigDesktop: _elm_lang$core$Native_Utils.cmp(_p15, 1800) > 0,
		portrait: _elm_lang$core$Native_Utils.cmp(_p15, _p14) < 0
	};
};
var _mdgriffith$style_elements$Element$embedStylesheet = function (sheet) {
	return A2(_mdgriffith$style_elements$Element_Internal_Render$embed, false, sheet);
};
var _mdgriffith$style_elements$Element$toHtml = F2(
	function (stylesheet, el) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			A2(_mdgriffith$style_elements$Element_Internal_Render$render, stylesheet, el));
	});
var _mdgriffith$style_elements$Element$viewport = _mdgriffith$style_elements$Element_Internal_Render$viewport;
var _mdgriffith$style_elements$Element$layout = _mdgriffith$style_elements$Element_Internal_Render$root;
var _mdgriffith$style_elements$Element$onLeft = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$removeAttrs,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Right),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Left),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
							_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
								_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$OnLeft)),
							_mdgriffith$style_elements$Element_Internal_Modify$wrapHtml(el))));
			});
		return A3(_elm_lang$core$List$foldr, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$onRight = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$removeAttrs,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Right),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Left),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
							_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
								_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$OnRight)),
							_mdgriffith$style_elements$Element_Internal_Modify$wrapHtml(el))));
			});
		return A3(_elm_lang$core$List$foldr, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$below = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$removeAttrs,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Top),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
							_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
								_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Below)),
							_mdgriffith$style_elements$Element_Internal_Modify$wrapHtml(el))));
			});
		return A3(_elm_lang$core$List$foldr, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$above = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$removeAttrs,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Top),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
							_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
								_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Above)),
							_mdgriffith$style_elements$Element_Internal_Modify$wrapHtml(el))));
			});
		return A3(_elm_lang$core$List$foldr, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$within = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
						_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
							_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Within)),
						_mdgriffith$style_elements$Element_Internal_Modify$wrapHtml(el)));
			});
		return A3(_elm_lang$core$List$foldr, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$downloadAs = F2(
	function (_p16, el) {
		var _p17 = _p16;
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'a',
				style: _elm_lang$core$Maybe$Nothing,
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$href(_p17.src)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
							_elm_lang$html$Html_Attributes$rel('noopener noreferrer')),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
								_elm_lang$html$Html_Attributes$download(true)),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
									_elm_lang$html$Html_Attributes$downloadAs(_p17.filename)),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				child: el,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$download = F2(
	function (src, el) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'a',
				style: _elm_lang$core$Maybe$Nothing,
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$href(src)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
							_elm_lang$html$Html_Attributes$rel('noopener noreferrer')),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
								_elm_lang$html$Html_Attributes$download(true)),
							_1: {ctor: '[]'}
						}
					}
				},
				child: el,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$newTab = F2(
	function (src, el) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'a',
				style: _elm_lang$core$Maybe$Nothing,
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$href(src)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
							_elm_lang$html$Html_Attributes$rel('noopener noreferrer')),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
								_elm_lang$html$Html_Attributes$target('_blank')),
							_1: {ctor: '[]'}
						}
					}
				},
				child: el,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$link = F2(
	function (src, el) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'a',
				style: _elm_lang$core$Maybe$Nothing,
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$href(src)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
							_elm_lang$html$Html_Attributes$rel('noopener noreferrer')),
						_1: {ctor: '[]'}
					}
				},
				child: el,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$spanAll = function (name) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Named,
		_mdgriffith$style_elements$Style_Internal_Model$SpanAll,
		_elm_lang$core$Maybe$Just(name));
};
var _mdgriffith$style_elements$Element$span = F2(
	function (i, name) {
		return A2(
			_mdgriffith$style_elements$Style_Internal_Model$Named,
			_mdgriffith$style_elements$Style_Internal_Model$SpanJust(i),
			_elm_lang$core$Maybe$Just(name));
	});
var _mdgriffith$style_elements$Element$named = F2(
	function (name, el) {
		return _mdgriffith$style_elements$Element_Internal_Model$NamedOnGrid(
			A2(
				_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
				_mdgriffith$style_elements$Element_Internal_Model$GridArea(name),
				el));
	});
var _mdgriffith$style_elements$Element$cell = function (box) {
	var coords = {start: box.start, width: box.width, height: box.height};
	return _mdgriffith$style_elements$Element_Internal_Model$OnGrid(
		A2(
			_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
			_mdgriffith$style_elements$Element_Internal_Model$GridCoords(
				_mdgriffith$style_elements$Style_Internal_Model$GridPosition(coords)),
			box.content));
};
var _mdgriffith$style_elements$Element$namedGrid = F3(
	function (style, attrs, config) {
		var forSpacing = function (attr) {
			var _p18 = attr;
			if (_p18.ctor === 'Spacing') {
				return true;
			} else {
				return false;
			}
		};
		var _p19 = A2(_elm_lang$core$List$partition, forSpacing, attrs);
		var spacing = _p19._0;
		var notSpacingAttrs = _p19._1;
		var gridAttributes = function () {
			var _p20 = _elm_lang$core$List$head(
				_elm_lang$core$List$reverse(spacing));
			if (_p20.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				if (_p20._0.ctor === 'Spacing') {
					return {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Style_Internal_Model$GridGap, _p20._0._0, _p20._0._1),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}();
		var prepare = function (el) {
			return _mdgriffith$style_elements$Element_Internal_Model$Normal(
				A2(
					_elm_lang$core$List$map,
					function (_p21) {
						var _p22 = _p21;
						return _p22._0;
					},
					el));
		};
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$Grid,
					_mdgriffith$style_elements$Style_Internal_Model$NamedGridTemplate(
						{rows: config.rows, columns: config.columns}),
					gridAttributes),
				attrs: notSpacingAttrs,
				children: prepare(config.cells),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$grid = F3(
	function (style, attrs, config) {
		var forSpacing = function (attr) {
			var _p23 = attr;
			if (_p23.ctor === 'Spacing') {
				return true;
			} else {
				return false;
			}
		};
		var _p24 = A2(_elm_lang$core$List$partition, forSpacing, attrs);
		var spacing = _p24._0;
		var notSpacingAttrs = _p24._1;
		var gridAttributes = function () {
			var _p25 = _elm_lang$core$List$head(
				_elm_lang$core$List$reverse(spacing));
			if (_p25.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				if (_p25._0.ctor === 'Spacing') {
					return {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Style_Internal_Model$GridGap, _p25._0._0, _p25._0._1),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}();
		var prepare = function (el) {
			return _mdgriffith$style_elements$Element_Internal_Model$Normal(
				A2(
					_elm_lang$core$List$map,
					function (_p26) {
						var _p27 = _p26;
						return _p27._0;
					},
					el));
		};
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$Grid,
					_mdgriffith$style_elements$Style_Internal_Model$GridTemplate(
						{rows: config.rows, columns: config.columns}),
					gridAttributes),
				attrs: notSpacingAttrs,
				children: prepare(config.cells),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$table = F3(
	function (style, attrs, rows) {
		var children = _elm_lang$core$List$concat(
			A2(
				_elm_lang$core$List$indexedMap,
				F2(
					function (row, columns) {
						return A2(
							_elm_lang$core$List$indexedMap,
							F2(
								function (col, content) {
									return _mdgriffith$style_elements$Element$cell(
										{
											start: {ctor: '_Tuple2', _0: row, _1: col},
											width: 1,
											height: 1,
											content: content
										});
								}),
							columns);
					}),
				rows));
		return A3(
			_mdgriffith$style_elements$Element$grid,
			style,
			attrs,
			{
				columns: {ctor: '[]'},
				rows: {ctor: '[]'},
				cells: children
			});
	});
var _mdgriffith$style_elements$Element$wrappedColumn = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$Down,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Model$Wrap(true),
						_1: {ctor: '[]'}
					}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$wrappedRow = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$GoRight,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Model$Wrap(true),
						_1: {ctor: '[]'}
					}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$column = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$Down,
					{ctor: '[]'}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$row = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$GoRight,
					{ctor: '[]'}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$paragraph = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'p',
				style: _elm_lang$core$Maybe$Just(style),
				layout: _mdgriffith$style_elements$Style_Internal_Model$TextLayout(false),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
					A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Element_Internal_Modify$makeInline, children)),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$textLayout = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: _mdgriffith$style_elements$Style_Internal_Model$TextLayout(true),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$full = F3(
	function (elem, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(elem),
				attrs: {ctor: '::', _0: _mdgriffith$style_elements$Element_Internal_Model$Expand, _1: attrs},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$h6 = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'h6',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$h5 = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'h5',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$h4 = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'h4',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$h3 = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'h3',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$h2 = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'h2',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$h1 = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'h1',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$button = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'button',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$class('button-focus'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$toAttr(
								_elm_lang$html$Html_Attributes$tabindex(0)),
							_1: attrs
						}
					}
				},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$node = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Modify$setNode(str);
};
var _mdgriffith$style_elements$Element$html = _mdgriffith$style_elements$Element_Internal_Model$Raw;
var _mdgriffith$style_elements$Element$spacer = _mdgriffith$style_elements$Element_Internal_Model$Spacer;
var _mdgriffith$style_elements$Element$circle = F4(
	function (radius, style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'border-radius',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(radius),
										'px')
								},
								_1: {ctor: '[]'}
							})),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
							_mdgriffith$style_elements$Style_Internal_Model$Px(2 * radius)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
								_mdgriffith$style_elements$Style_Internal_Model$Px(2 * radius)),
							_1: attrs
						}
					}
				},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$aside = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'aside',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$article = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'article',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$section = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'section',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$el = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$bulleted = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'ul',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$Down,
					{ctor: '[]'}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
					A2(
						_elm_lang$core$List$map,
						function (_p28) {
							return A2(
								_mdgriffith$style_elements$Element_Internal_Modify$setNode,
								'li',
								A2(
									_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
									_mdgriffith$style_elements$Element_Attributes$inlineStyle(
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'display', _1: 'list-item'},
											_1: {ctor: '[]'}
										}),
									_p28));
						},
						children)),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$numbered = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'ol',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$Down,
					{ctor: '[]'}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
					A2(
						_elm_lang$core$List$map,
						function (_p29) {
							return A2(
								_mdgriffith$style_elements$Element_Internal_Modify$setNode,
								'li',
								A2(
									_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
									_mdgriffith$style_elements$Element_Attributes$inlineStyle(
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'display', _1: 'list-item'},
											_1: {ctor: '[]'}
										}),
									_p29));
						},
						children)),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$super = _mdgriffith$style_elements$Element_Internal_Model$Text(
	{decoration: _mdgriffith$style_elements$Element_Internal_Model$Super, inline: false});
var _mdgriffith$style_elements$Element$sub = _mdgriffith$style_elements$Element_Internal_Model$Text(
	{decoration: _mdgriffith$style_elements$Element_Internal_Model$Sub, inline: false});
var _mdgriffith$style_elements$Element$underline = _mdgriffith$style_elements$Element_Internal_Model$Text(
	{decoration: _mdgriffith$style_elements$Element_Internal_Model$Underline, inline: false});
var _mdgriffith$style_elements$Element$strike = _mdgriffith$style_elements$Element_Internal_Model$Text(
	{decoration: _mdgriffith$style_elements$Element_Internal_Model$Strike, inline: false});
var _mdgriffith$style_elements$Element$italic = _mdgriffith$style_elements$Element_Internal_Model$Text(
	{decoration: _mdgriffith$style_elements$Element_Internal_Model$Italic, inline: false});
var _mdgriffith$style_elements$Element$bold = _mdgriffith$style_elements$Element_Internal_Model$Text(
	{decoration: _mdgriffith$style_elements$Element_Internal_Model$Bold, inline: false});
var _mdgriffith$style_elements$Element$text = _mdgriffith$style_elements$Element_Internal_Model$Text(
	{decoration: _mdgriffith$style_elements$Element_Internal_Model$NoDecoration, inline: false});
var _mdgriffith$style_elements$Element$subheading = F3(
	function (style, attrs, str) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'p',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: _mdgriffith$style_elements$Element$text(str),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$empty = _mdgriffith$style_elements$Element_Internal_Model$Empty;
var _mdgriffith$style_elements$Element$image = F3(
	function (style, attrs, _p30) {
		var _p31 = _p30;
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'img',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$src(_p31.src)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
							_elm_lang$html$Html_Attributes$alt(_p31.caption)),
						_1: attrs
					}
				},
				child: _mdgriffith$style_elements$Element$empty,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$decorativeImage = F3(
	function (style, attrs, _p32) {
		var _p33 = _p32;
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'img',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$src(_p33.src)),
					_1: attrs
				},
				child: _mdgriffith$style_elements$Element$empty,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$hairline = function (style) {
	return _mdgriffith$style_elements$Element_Internal_Model$Element(
		{
			node: 'hr',
			style: _elm_lang$core$Maybe$Just(style),
			attrs: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
					_mdgriffith$style_elements$Style_Internal_Model$Px(1)),
				_1: {ctor: '[]'}
			},
			child: _mdgriffith$style_elements$Element$empty,
			absolutelyPositioned: _elm_lang$core$Maybe$Nothing
		});
};
var _mdgriffith$style_elements$Element$when = F2(
	function (bool, elm) {
		return bool ? elm : _mdgriffith$style_elements$Element$empty;
	});
var _mdgriffith$style_elements$Element$whenJust = F2(
	function (maybe, view) {
		var _p34 = maybe;
		if (_p34.ctor === 'Nothing') {
			return _mdgriffith$style_elements$Element$empty;
		} else {
			return view(_p34._0);
		}
	});
var _mdgriffith$style_elements$Element$screen = function (el) {
	return A2(
		_mdgriffith$style_elements$Element$within,
		{
			ctor: '::',
			_0: el,
			_1: {ctor: '[]'}
		},
		_mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Nothing,
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Screen),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
							A2(_mdgriffith$style_elements$Style_Internal_Model$Calc, 100, 0)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
								A2(_mdgriffith$style_elements$Style_Internal_Model$Calc, 100, 0)),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				child: _mdgriffith$style_elements$Element$empty,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			}));
};
var _mdgriffith$style_elements$Element$modal = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element$screen(
			_mdgriffith$style_elements$Element_Internal_Model$Element(
				{
					node: 'div',
					style: _elm_lang$core$Maybe$Just(style),
					attrs: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'alertdialog'),
						_1: {
							ctor: '::',
							_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-modal', 'true'),
							_1: attrs
						}
					},
					child: child,
					absolutelyPositioned: _elm_lang$core$Maybe$Nothing
				}));
	});
var _mdgriffith$style_elements$Element$Grid = F3(
	function (a, b, c) {
		return {rows: a, columns: b, cells: c};
	});
var _mdgriffith$style_elements$Element$NamedGrid = F3(
	function (a, b, c) {
		return {rows: a, columns: b, cells: c};
	});
var _mdgriffith$style_elements$Element$GridPosition = F4(
	function (a, b, c, d) {
		return {start: a, width: b, height: c, content: d};
	});
var _mdgriffith$style_elements$Element$Device = F7(
	function (a, b, c, d, e, f, g) {
		return {width: a, height: b, phone: c, tablet: d, desktop: e, bigDesktop: f, portrait: g};
	});

var _mdgriffith$style_elements$Element_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _mdgriffith$style_elements$Element_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _mdgriffith$style_elements$Element_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _mdgriffith$style_elements$Element_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _mdgriffith$style_elements$Element_Events$onWithOptions = F3(
	function (event, options, decode) {
		return _mdgriffith$style_elements$Element_Internal_Model$Event(
			A3(_elm_lang$html$Html_Events$onWithOptions, event, options, decode));
	});
var _mdgriffith$style_elements$Element_Events$on = F2(
	function (event, decode) {
		return _mdgriffith$style_elements$Element_Internal_Model$Event(
			A2(_elm_lang$html$Html_Events$on, event, decode));
	});
var _mdgriffith$style_elements$Element_Events$onFocus = function (_p0) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onFocus(_p0));
};
var _mdgriffith$style_elements$Element_Events$onBlur = function (_p1) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onBlur(_p1));
};
var _mdgriffith$style_elements$Element_Events$onSubmit = function (_p2) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onSubmit(_p2));
};
var _mdgriffith$style_elements$Element_Events$onCheck = function (_p3) {
	return _mdgriffith$style_elements$Element_Internal_Model$InputEvent(
		_elm_lang$html$Html_Events$onCheck(_p3));
};
var _mdgriffith$style_elements$Element_Events$onInput = function (_p4) {
	return _mdgriffith$style_elements$Element_Internal_Model$InputEvent(
		_elm_lang$html$Html_Events$onInput(_p4));
};
var _mdgriffith$style_elements$Element_Events$onMouseOut = function (_p5) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseOut(_p5));
};
var _mdgriffith$style_elements$Element_Events$onMouseOver = function (_p6) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseOver(_p6));
};
var _mdgriffith$style_elements$Element_Events$onMouseLeave = function (_p7) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseLeave(_p7));
};
var _mdgriffith$style_elements$Element_Events$onMouseEnter = function (_p8) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseEnter(_p8));
};
var _mdgriffith$style_elements$Element_Events$onMouseUp = function (_p9) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseUp(_p9));
};
var _mdgriffith$style_elements$Element_Events$onMouseDown = function (_p10) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseDown(_p10));
};
var _mdgriffith$style_elements$Element_Events$onDoubleClick = function (_p11) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onDoubleClick(_p11));
};
var _mdgriffith$style_elements$Element_Events$onClick = function (_p12) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onClick(_p12));
};
var _mdgriffith$style_elements$Element_Events$event = _mdgriffith$style_elements$Element_Internal_Model$Event;
var _mdgriffith$style_elements$Element_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _mdgriffith$style_elements$Element_Input$onFocusIn = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focusin',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _mdgriffith$style_elements$Element_Input$onFocusOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focusout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _mdgriffith$style_elements$Element_Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _p0 = lookup(code);
		if (_p0.ctor === 'Nothing') {
			return _elm_lang$core$Json_Decode$fail('No key matched');
		} else {
			return _elm_lang$core$Json_Decode$succeed(_p0._0);
		}
	};
	var isKey = A2(
		_elm_lang$core$Json_Decode$andThen,
		decode,
		A2(_elm_lang$core$Json_Decode$field, 'which', _elm_lang$core$Json_Decode$int));
	return A2(_mdgriffith$style_elements$Element_Events$on, 'keydown', isKey);
};
var _mdgriffith$style_elements$Element_Input$onKey = F2(
	function (desiredCode, msg) {
		var decode = function (code) {
			return _elm_lang$core$Native_Utils.eq(code, desiredCode) ? _elm_lang$core$Json_Decode$succeed(msg) : _elm_lang$core$Json_Decode$fail('Not the enter key');
		};
		var isKey = A2(
			_elm_lang$core$Json_Decode$andThen,
			decode,
			A2(_elm_lang$core$Json_Decode$field, 'which', _elm_lang$core$Json_Decode$int));
		return A2(_mdgriffith$style_elements$Element_Events$on, 'keydown', isKey);
	});
var _mdgriffith$style_elements$Element_Input$space = 32;
var _mdgriffith$style_elements$Element_Input$downArrow = 40;
var _mdgriffith$style_elements$Element_Input$upArrow = 38;
var _mdgriffith$style_elements$Element_Input$backspace = 46;
var _mdgriffith$style_elements$Element_Input$delete = 8;
var _mdgriffith$style_elements$Element_Input$tab = 9;
var _mdgriffith$style_elements$Element_Input$enter = 13;
var _mdgriffith$style_elements$Element_Input$onDown = function (msg) {
	return A2(_mdgriffith$style_elements$Element_Input$onKey, 40, msg);
};
var _mdgriffith$style_elements$Element_Input$onUp = function (msg) {
	return A2(_mdgriffith$style_elements$Element_Input$onKey, 38, msg);
};
var _mdgriffith$style_elements$Element_Input$onSpace = function (msg) {
	return A2(_mdgriffith$style_elements$Element_Input$onKey, 32, msg);
};
var _mdgriffith$style_elements$Element_Input$onEnter = function (msg) {
	return A2(_mdgriffith$style_elements$Element_Input$onKey, 13, msg);
};
var _mdgriffith$style_elements$Element_Input$defaultPadding = F2(
	function (_p2, _p1) {
		var _p3 = _p2;
		var _p4 = _p1;
		return {
			ctor: '_Tuple4',
			_0: A2(_elm_lang$core$Maybe$withDefault, _p4._0, _p3._0),
			_1: A2(_elm_lang$core$Maybe$withDefault, _p4._1, _p3._1),
			_2: A2(_elm_lang$core$Maybe$withDefault, _p4._2, _p3._2),
			_3: A2(_elm_lang$core$Maybe$withDefault, _p4._3, _p3._3)
		};
	});
var _mdgriffith$style_elements$Element_Input$selected = function (select) {
	var _p5 = select;
	if (_p5.ctor === 'Autocomplete') {
		return _p5._0.selected;
	} else {
		return _p5._0.selected;
	}
};
var _mdgriffith$style_elements$Element_Input$arrows = _mdgriffith$style_elements$Element_Internal_Model$Element(
	{
		node: 'div',
		style: _elm_lang$core$Maybe$Nothing,
		attrs: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$class('arrows'),
			_1: {ctor: '[]'}
		},
		child: _mdgriffith$style_elements$Element$empty,
		absolutelyPositioned: _elm_lang$core$Maybe$Nothing
	});
var _mdgriffith$style_elements$Element_Input$optionToString = _mdgriffith$style_elements$Style_Internal_Selector$formatName;
var _mdgriffith$style_elements$Element_Input$getOptionValue = function (opt) {
	var _p6 = opt;
	if (_p6.ctor === 'Choice') {
		return _p6._0;
	} else {
		return _p6._0;
	}
};
var _mdgriffith$style_elements$Element_Input$hidden = _mdgriffith$style_elements$Element_Attributes$inlineStyle(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'position', _1: 'absolute'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'opacity', _1: '0'},
			_1: {ctor: '[]'}
		}
	});
var _mdgriffith$style_elements$Element_Input$autofocusAttr = function (_p7) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$autofocus(_p7));
};
var _mdgriffith$style_elements$Element_Input$autofillAttr = _mdgriffith$style_elements$Element_Attributes$attribute('autocomplete');
var _mdgriffith$style_elements$Element_Input$readonlyAttr = function (_p8) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$readonly(_p8));
};
var _mdgriffith$style_elements$Element_Input$spellcheckAttr = function (_p9) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$spellcheck(_p9));
};
var _mdgriffith$style_elements$Element_Input$addOptionsAsAttrs = F2(
	function (options, attrs) {
		var renderOption = F2(
			function (option, attrs) {
				var _p10 = option;
				switch (_p10.ctor) {
					case 'FocusOnLoad':
						return {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$autofocusAttr(true),
							_1: attrs
						};
					case 'SpellCheck':
						return {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$spellcheckAttr(true),
							_1: attrs
						};
					case 'AutoFill':
						return {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$autofillAttr(_p10._0),
							_1: attrs
						};
					case 'Disabled':
						return attrs;
					default:
						return attrs;
				}
			});
		return A3(_elm_lang$core$List$foldr, renderOption, attrs, options);
	});
var _mdgriffith$style_elements$Element_Input$disabledAttr = function (_p11) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$disabled(_p11));
};
var _mdgriffith$style_elements$Element_Input$tabindex = function (_p12) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$tabindex(_p12));
};
var _mdgriffith$style_elements$Element_Input$valueAttr = function (_p13) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$value(_p13));
};
var _mdgriffith$style_elements$Element_Input$name = function (_p14) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$name(_p14));
};
var _mdgriffith$style_elements$Element_Input$selectedAttr = function (_p15) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$selected(_p15));
};
var _mdgriffith$style_elements$Element_Input$checked = function (_p16) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$checked(_p16));
};
var _mdgriffith$style_elements$Element_Input$type_ = function (_p17) {
	return _mdgriffith$style_elements$Element_Attributes$toAttr(
		_elm_lang$html$Html_Attributes$type_(_p17));
};
var _mdgriffith$style_elements$Element_Input$pointer = _mdgriffith$style_elements$Element_Attributes$inlineStyle(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
		_1: {ctor: '[]'}
	});
var _mdgriffith$style_elements$Element_Input$radioHelper = F4(
	function (orientation, style, attrs, config) {
		var isSelected = function (val) {
			var _p18 = config.selection;
			if (_p18.ctor === 'Single') {
				var _p20 = _p18._0;
				var isSelected = _elm_lang$core$Native_Utils.eq(
					_elm_lang$core$Maybe$Just(val),
					_p20.selected);
				return isSelected ? {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Input$checked(true),
					_1: {ctor: '[]'}
				} : {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Input$checked(false),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Events$onCheck(
							function (_p19) {
								return _p20.onChange(val);
							}),
						_1: {ctor: '[]'}
					}
				};
			} else {
				var _p23 = _p18._0;
				var isSelected = A2(_elm_lang$core$List$member, val, _p23.selected);
				return {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Input$checked(isSelected),
					_1: {
						ctor: '::',
						_0: isSelected ? _mdgriffith$style_elements$Element_Events$onCheck(
							function (_p21) {
								return _p23.onChange(
									A2(
										_elm_lang$core$List$filter,
										function (item) {
											return !_elm_lang$core$Native_Utils.eq(item, val);
										},
										_p23.selected));
							}) : _mdgriffith$style_elements$Element_Events$onCheck(
							function (_p22) {
								return _p23.onChange(
									{ctor: '::', _0: val, _1: _p23.selected});
							}),
						_1: {ctor: '[]'}
					}
				};
			}
		};
		var withDisabled = function (attrs) {
			return config.disabled ? {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Input$disabledAttr(true),
				_1: attrs
			} : {ctor: '::', _0: _mdgriffith$style_elements$Element_Input$pointer, _1: attrs};
		};
		var addSelection = F2(
			function (val, attrs) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					attrs,
					isSelected(val));
			});
		var valueIsSelected = function (val) {
			var _p24 = config.selection;
			if (_p24.ctor === 'Single') {
				return _elm_lang$core$Native_Utils.eq(
					_elm_lang$core$Maybe$Just(val),
					_p24._0.selected);
			} else {
				return A2(_elm_lang$core$List$member, val, _p24._0.selected);
			}
		};
		var group = A2(
			_elm_lang$core$String$join,
			'-',
			A2(
				_elm_lang$core$List$map,
				function (_p25) {
					return _mdgriffith$style_elements$Element_Input$optionToString(
						_mdgriffith$style_elements$Element_Input$getOptionValue(_p25));
				},
				config.choices));
		var renderOption = function (option) {
			var _p26 = option;
			if (_p26.ctor === 'Choice') {
				var _p29 = _p26._0;
				var _p28 = _p26._1;
				var literalLabel = _mdgriffith$style_elements$Element_Internal_Modify$removeStyle(
					_mdgriffith$style_elements$Element_Internal_Modify$removeAllAttrs(
						_mdgriffith$style_elements$Element_Internal_Modify$getChild(_p28)));
				var input = _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'input',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: function (_p27) {
							return withDisabled(
								A2(addSelection, _p29, _p27));
						}(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Input$type_('radio'),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Input$name(group),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Input$valueAttr(
											_mdgriffith$style_elements$Element_Input$optionToString(_p29)),
										_1: {ctor: '[]'}
									}
								}
							}),
						child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'label',
						style: _mdgriffith$style_elements$Element_Internal_Modify$getStyle(_p28),
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: config.disabled ? {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$spacing(5),
							_1: _mdgriffith$style_elements$Element_Internal_Modify$getAttrs(_p28)
						} : {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$pointer,
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$spacing(5),
								_1: _mdgriffith$style_elements$Element_Internal_Modify$getAttrs(_p28)
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: input,
								_1: {
									ctor: '::',
									_0: literalLabel,
									_1: {ctor: '[]'}
								}
							}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
			} else {
				var _p31 = _p26._0;
				var hiddenInput = _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'input',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: function (_p30) {
							return withDisabled(
								A2(addSelection, _p31, _p30));
						}(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Input$type_('radio'),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Input$hidden,
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Input$name(group),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Input$valueAttr(
												_mdgriffith$style_elements$Element_Input$optionToString(_p31)),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Attributes$toAttr(
													_elm_lang$html$Html_Attributes$class('focus-override')),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}),
						child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
				var viewed = _p26._1(
					valueIsSelected(_p31));
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'label',
						style: _mdgriffith$style_elements$Element_Internal_Modify$getStyle(viewed),
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: config.disabled ? {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$spacing(5),
							_1: _mdgriffith$style_elements$Element_Internal_Modify$getAttrs(viewed)
						} : {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$pointer,
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$spacing(5),
								_1: _mdgriffith$style_elements$Element_Internal_Modify$getAttrs(viewed)
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: hiddenInput,
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Internal_Modify$removeStyle(
										A2(
											_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
											_mdgriffith$style_elements$Element_Attributes$toAttr(
												_elm_lang$html$Html_Attributes$class('alt-icon')),
											_mdgriffith$style_elements$Element_Internal_Modify$removeAllAttrs(viewed))),
									_1: {ctor: '[]'}
								}
							}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
			}
		};
		var _p32 = orientation;
		if (_p32.ctor === 'Horizontal') {
			return A3(
				_mdgriffith$style_elements$Element$row,
				style,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$spacing(10),
					_1: attrs
				},
				A2(_elm_lang$core$List$map, renderOption, config.choices));
		} else {
			return A3(
				_mdgriffith$style_elements$Element$column,
				style,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$spacing(10),
					_1: attrs
				},
				A2(_elm_lang$core$List$map, renderOption, config.choices));
		}
	});
var _mdgriffith$style_elements$Element_Input$Checkbox = F4(
	function (a, b, c, d) {
		return {onChange: a, label: b, checked: c, options: d};
	});
var _mdgriffith$style_elements$Element_Input$StyledCheckbox = F5(
	function (a, b, c, d, e) {
		return {onChange: a, label: b, checked: c, options: d, icon: e};
	});
var _mdgriffith$style_elements$Element_Input$Text = F4(
	function (a, b, c, d) {
		return {onChange: a, value: b, label: c, options: d};
	});
var _mdgriffith$style_elements$Element_Input$LabelIntermediate = F6(
	function (a, b, c, d, e, f) {
		return {style: a, attrs: b, label: c, error: d, isDisabled: e, input: f};
	});
var _mdgriffith$style_elements$Element_Input$Radio = F5(
	function (a, b, c, d, e) {
		return {onChange: a, choices: b, selected: c, label: d, options: e};
	});
var _mdgriffith$style_elements$Element_Input$MasterRadio = F5(
	function (a, b, c, d, e) {
		return {selection: a, choices: b, label: c, disabled: d, errors: e};
	});
var _mdgriffith$style_elements$Element_Input$SelectMenuValues = F7(
	function (a, b, c, d, e, f, g) {
		return {max: a, menu: b, label: c, options: d, onUpdate: e, isOpen: f, selected: g};
	});
var _mdgriffith$style_elements$Element_Input$SearchMenu = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {max: a, menu: b, label: c, options: d, query: e, selected: f, focus: g, onUpdate: h, isOpen: i};
	});
var _mdgriffith$style_elements$Element_Input$Select = F5(
	function (a, b, c, d, e) {
		return {$with: a, max: b, menu: c, label: d, options: e};
	});
var _mdgriffith$style_elements$Element_Input$TextArea = {ctor: 'TextArea'};
var _mdgriffith$style_elements$Element_Input$Email = {ctor: 'Email'};
var _mdgriffith$style_elements$Element_Input$Password = {ctor: 'Password'};
var _mdgriffith$style_elements$Element_Input$Search = {ctor: 'Search'};
var _mdgriffith$style_elements$Element_Input$Plain = {ctor: 'Plain'};
var _mdgriffith$style_elements$Element_Input$SpellCheck = {ctor: 'SpellCheck'};
var _mdgriffith$style_elements$Element_Input$allowSpellcheck = _mdgriffith$style_elements$Element_Input$SpellCheck;
var _mdgriffith$style_elements$Element_Input$AutoFill = function (a) {
	return {ctor: 'AutoFill', _0: a};
};
var _mdgriffith$style_elements$Element_Input$autofill = _mdgriffith$style_elements$Element_Input$AutoFill;
var _mdgriffith$style_elements$Element_Input$autofillSection = function (section) {
	return _mdgriffith$style_elements$Element_Input$AutoFill(
		A2(_elm_lang$core$Basics_ops['++'], 'section-', section));
};
var _mdgriffith$style_elements$Element_Input$FocusOnLoad = {ctor: 'FocusOnLoad'};
var _mdgriffith$style_elements$Element_Input$focusOnLoad = _mdgriffith$style_elements$Element_Input$FocusOnLoad;
var _mdgriffith$style_elements$Element_Input$Disabled = {ctor: 'Disabled'};
var _mdgriffith$style_elements$Element_Input$disabled = _mdgriffith$style_elements$Element_Input$Disabled;
var _mdgriffith$style_elements$Element_Input$ErrorOpt = function (a) {
	return {ctor: 'ErrorOpt', _0: a};
};
var _mdgriffith$style_elements$Element_Input$ErrorAbove = function (a) {
	return {ctor: 'ErrorAbove', _0: a};
};
var _mdgriffith$style_elements$Element_Input$errorAbove = function (el) {
	return _mdgriffith$style_elements$Element_Input$ErrorOpt(
		_mdgriffith$style_elements$Element_Input$ErrorAbove(
			A2(
				_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
				A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-live', 'assertive'),
				el)));
};
var _mdgriffith$style_elements$Element_Input$ErrorBelow = function (a) {
	return {ctor: 'ErrorBelow', _0: a};
};
var _mdgriffith$style_elements$Element_Input$errorBelow = function (el) {
	return _mdgriffith$style_elements$Element_Input$ErrorOpt(
		_mdgriffith$style_elements$Element_Input$ErrorBelow(
			A2(
				_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
				A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-live', 'assertive'),
				el)));
};
var _mdgriffith$style_elements$Element_Input$PlaceHolder = F2(
	function (a, b) {
		return {ctor: 'PlaceHolder', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Input$placeholder = function (_p33) {
	var _p34 = _p33;
	var _p36 = _p34.text;
	var _p35 = _p34.label;
	if (_p35.ctor === 'PlaceHolder') {
		return A2(_mdgriffith$style_elements$Element_Input$PlaceHolder, _p36, _p35._1);
	} else {
		return A2(_mdgriffith$style_elements$Element_Input$PlaceHolder, _p36, _p35);
	}
};
var _mdgriffith$style_elements$Element_Input$HiddenLabel = function (a) {
	return {ctor: 'HiddenLabel', _0: a};
};
var _mdgriffith$style_elements$Element_Input$hiddenLabel = _mdgriffith$style_elements$Element_Input$HiddenLabel;
var _mdgriffith$style_elements$Element_Input$LabelOnLeft = function (a) {
	return {ctor: 'LabelOnLeft', _0: a};
};
var _mdgriffith$style_elements$Element_Input$labelLeft = _mdgriffith$style_elements$Element_Input$LabelOnLeft;
var _mdgriffith$style_elements$Element_Input$LabelOnRight = function (a) {
	return {ctor: 'LabelOnRight', _0: a};
};
var _mdgriffith$style_elements$Element_Input$labelRight = _mdgriffith$style_elements$Element_Input$LabelOnRight;
var _mdgriffith$style_elements$Element_Input$LabelAbove = function (a) {
	return {ctor: 'LabelAbove', _0: a};
};
var _mdgriffith$style_elements$Element_Input$labelAbove = _mdgriffith$style_elements$Element_Input$LabelAbove;
var _mdgriffith$style_elements$Element_Input$labelBelow = _mdgriffith$style_elements$Element_Input$LabelAbove;
var _mdgriffith$style_elements$Element_Input$LabelBelow = function (a) {
	return {ctor: 'LabelBelow', _0: a};
};
var _mdgriffith$style_elements$Element_Input$ErrorAboveBelow = F2(
	function (a, b) {
		return {ctor: 'ErrorAboveBelow', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Input$ErrorAllAbove = function (a) {
	return {ctor: 'ErrorAllAbove', _0: a};
};
var _mdgriffith$style_elements$Element_Input$ErrorAllBelow = function (a) {
	return {ctor: 'ErrorAllBelow', _0: a};
};
var _mdgriffith$style_elements$Element_Input$applyLabel = F7(
	function (style, attrs, label, errors, isDisabled, hasPointer, input) {
		applyLabel:
		while (true) {
			var orientedErrors = A3(
				_elm_lang$core$List$foldl,
				F2(
					function (currentError, oriented) {
						var _p37 = oriented;
						if (_p37.ctor === 'Nothing') {
							return _elm_lang$core$Maybe$Just(
								function () {
									var _p38 = currentError;
									if (_p38.ctor === 'ErrorAbove') {
										return _mdgriffith$style_elements$Element_Input$ErrorAllAbove(
											{
												ctor: '::',
												_0: _p38._0,
												_1: {ctor: '[]'}
											});
									} else {
										return _mdgriffith$style_elements$Element_Input$ErrorAllBelow(
											{
												ctor: '::',
												_0: _p38._0,
												_1: {ctor: '[]'}
											});
									}
								}());
						} else {
							return _elm_lang$core$Maybe$Just(
								function () {
									var _p39 = _p37._0;
									switch (_p39.ctor) {
										case 'ErrorAllAbove':
											var _p41 = _p39._0;
											var _p40 = currentError;
											if (_p40.ctor === 'ErrorAbove') {
												return _mdgriffith$style_elements$Element_Input$ErrorAllAbove(
													{ctor: '::', _0: _p40._0, _1: _p41});
											} else {
												return A2(
													_mdgriffith$style_elements$Element_Input$ErrorAboveBelow,
													{
														ctor: '::',
														_0: _p40._0,
														_1: {ctor: '[]'}
													},
													_p41);
											}
										case 'ErrorAllBelow':
											var _p43 = _p39._0;
											var _p42 = currentError;
											if (_p42.ctor === 'ErrorAbove') {
												return A2(
													_mdgriffith$style_elements$Element_Input$ErrorAboveBelow,
													{
														ctor: '::',
														_0: _p42._0,
														_1: {ctor: '[]'}
													},
													_p43);
											} else {
												return _mdgriffith$style_elements$Element_Input$ErrorAllBelow(
													{ctor: '::', _0: _p42._0, _1: _p43});
											}
										default:
											var _p46 = _p39._1;
											var _p45 = _p39._0;
											var _p44 = currentError;
											if (_p44.ctor === 'ErrorAbove') {
												return A2(
													_mdgriffith$style_elements$Element_Input$ErrorAboveBelow,
													{ctor: '::', _0: _p44._0, _1: _p45},
													_p46);
											} else {
												return A2(
													_mdgriffith$style_elements$Element_Input$ErrorAboveBelow,
													_p45,
													{ctor: '::', _0: _p44._0, _1: _p46});
											}
									}
								}());
						}
					}),
				_elm_lang$core$Maybe$Nothing,
				errors);
			var labelContainer = F2(
				function (direction, children) {
					return _mdgriffith$style_elements$Element_Internal_Model$Layout(
						{
							node: 'label',
							style: style,
							layout: A2(
								_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
								direction,
								{ctor: '[]'}),
							attrs: hasPointer ? {ctor: '::', _0: _mdgriffith$style_elements$Element_Input$pointer, _1: attrs} : attrs,
							children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
							absolutelyPositioned: _elm_lang$core$Maybe$Nothing
						});
				});
			var forSpacing = function (attr) {
				var _p47 = attr;
				if (_p47.ctor === 'Spacing') {
					return _elm_lang$core$Maybe$Just(attr);
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			};
			var spacing = A2(
				_elm_lang$core$Maybe$withDefault,
				A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, 0, 0),
				_elm_lang$core$List$head(
					_elm_lang$core$List$reverse(
						A2(_elm_lang$core$List$filterMap, forSpacing, attrs))));
			var orient = F2(
				function (direction, children) {
					return _mdgriffith$style_elements$Element_Internal_Model$Layout(
						{
							node: 'div',
							style: _elm_lang$core$Maybe$Nothing,
							layout: A2(
								_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
								direction,
								{ctor: '[]'}),
							attrs: hasPointer ? {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Input$pointer,
								_1: {
									ctor: '::',
									_0: spacing,
									_1: {ctor: '[]'}
								}
							} : {
								ctor: '::',
								_0: spacing,
								_1: {ctor: '[]'}
							},
							children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
							absolutelyPositioned: _elm_lang$core$Maybe$Nothing
						});
				});
			var _p48 = label;
			switch (_p48.ctor) {
				case 'PlaceHolder':
					var _v20 = style,
						_v21 = attrs,
						_v22 = _p48._1,
						_v23 = errors,
						_v24 = isDisabled,
						_v25 = hasPointer,
						_v26 = input;
					style = _v20;
					attrs = _v21;
					label = _v22;
					errors = _v23;
					isDisabled = _v24;
					hasPointer = _v25;
					input = _v26;
					continue applyLabel;
				case 'HiddenLabel':
					return _mdgriffith$style_elements$Element_Internal_Model$Layout(
						{
							node: 'label',
							style: style,
							layout: A2(
								_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
								_mdgriffith$style_elements$Style_Internal_Model$Down,
								{ctor: '[]'}),
							attrs: hasPointer ? {ctor: '::', _0: _mdgriffith$style_elements$Element_Input$pointer, _1: attrs} : attrs,
							children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
								A2(
									_elm_lang$core$List$map,
									_mdgriffith$style_elements$Element_Internal_Modify$addAttr(
										A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'title', _p48._0)),
									input)),
							absolutelyPositioned: _elm_lang$core$Maybe$Nothing
						});
				case 'LabelAbove':
					var _p50 = _p48._0;
					var _p49 = orientedErrors;
					if (_p49.ctor === 'Nothing') {
						return A2(
							labelContainer,
							_mdgriffith$style_elements$Style_Internal_Model$Down,
							{ctor: '::', _0: _p50, _1: input});
					} else {
						switch (_p49._0.ctor) {
							case 'ErrorAllAbove':
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									{
										ctor: '::',
										_0: A2(
											orient,
											_mdgriffith$style_elements$Style_Internal_Model$GoRight,
											{ctor: '::', _0: _p50, _1: _p49._0._0}),
										_1: input
									});
							case 'ErrorAllBelow':
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									{
										ctor: '::',
										_0: _p50,
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											input,
											{
												ctor: '::',
												_0: A2(orient, _mdgriffith$style_elements$Style_Internal_Model$GoRight, _p49._0._0),
												_1: {ctor: '[]'}
											})
									});
							default:
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									{
										ctor: '::',
										_0: A2(
											orient,
											_mdgriffith$style_elements$Style_Internal_Model$GoRight,
											{ctor: '::', _0: _p50, _1: _p49._0._0}),
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											input,
											{
												ctor: '::',
												_0: A2(orient, _mdgriffith$style_elements$Style_Internal_Model$GoRight, _p49._0._1),
												_1: {ctor: '[]'}
											})
									});
						}
					}
				case 'LabelBelow':
					var _p52 = _p48._0;
					var _p51 = orientedErrors;
					if (_p51.ctor === 'Nothing') {
						return A2(
							labelContainer,
							_mdgriffith$style_elements$Style_Internal_Model$Down,
							A2(
								_elm_lang$core$Basics_ops['++'],
								input,
								{
									ctor: '::',
									_0: _p52,
									_1: {ctor: '[]'}
								}));
					} else {
						switch (_p51._0.ctor) {
							case 'ErrorAllAbove':
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									{
										ctor: '::',
										_0: A2(orient, _mdgriffith$style_elements$Style_Internal_Model$GoRight, _p51._0._0),
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											input,
											{
												ctor: '::',
												_0: _p52,
												_1: {ctor: '[]'}
											})
									});
							case 'ErrorAllBelow':
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									A2(
										_elm_lang$core$Basics_ops['++'],
										input,
										{
											ctor: '::',
											_0: A2(
												orient,
												_mdgriffith$style_elements$Style_Internal_Model$GoRight,
												{ctor: '::', _0: _p52, _1: _p51._0._0}),
											_1: {ctor: '[]'}
										}));
							default:
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									{
										ctor: '::',
										_0: A2(orient, _mdgriffith$style_elements$Style_Internal_Model$GoRight, _p51._0._0),
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											input,
											{
												ctor: '::',
												_0: A2(
													orient,
													_mdgriffith$style_elements$Style_Internal_Model$GoRight,
													{ctor: '::', _0: _p52, _1: _p51._0._1}),
												_1: {ctor: '[]'}
											})
									});
						}
					}
				case 'LabelOnRight':
					var _p54 = _p48._0;
					var _p53 = orientedErrors;
					if (_p53.ctor === 'Nothing') {
						return A2(
							labelContainer,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							A2(
								_elm_lang$core$Basics_ops['++'],
								input,
								{
									ctor: '::',
									_0: _p54,
									_1: {ctor: '[]'}
								}));
					} else {
						switch (_p53._0.ctor) {
							case 'ErrorAllAbove':
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p53._0._0,
										{
											ctor: '::',
											_0: A2(
												orient,
												_mdgriffith$style_elements$Style_Internal_Model$GoRight,
												A2(
													_elm_lang$core$Basics_ops['++'],
													input,
													{
														ctor: '::',
														_0: _p54,
														_1: {ctor: '[]'}
													})),
											_1: {ctor: '[]'}
										}));
							case 'ErrorAllBelow':
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									{
										ctor: '::',
										_0: A2(
											orient,
											_mdgriffith$style_elements$Style_Internal_Model$GoRight,
											A2(
												_elm_lang$core$Basics_ops['++'],
												input,
												{
													ctor: '::',
													_0: _p54,
													_1: {ctor: '[]'}
												})),
										_1: _p53._0._0
									});
							default:
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p53._0._0,
										A2(
											_elm_lang$core$Basics_ops['++'],
											{
												ctor: '::',
												_0: A2(
													orient,
													_mdgriffith$style_elements$Style_Internal_Model$GoRight,
													A2(
														_elm_lang$core$Basics_ops['++'],
														input,
														{
															ctor: '::',
															_0: _p54,
															_1: {ctor: '[]'}
														})),
												_1: {ctor: '[]'}
											},
											_p53._0._1)));
						}
					}
				default:
					var _p56 = _p48._0;
					var _p55 = orientedErrors;
					if (_p55.ctor === 'Nothing') {
						return A2(
							labelContainer,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '::', _0: _p56, _1: input});
					} else {
						switch (_p55._0.ctor) {
							case 'ErrorAllAbove':
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p55._0._0,
										{
											ctor: '::',
											_0: A2(
												orient,
												_mdgriffith$style_elements$Style_Internal_Model$GoRight,
												{ctor: '::', _0: _p56, _1: input}),
											_1: {ctor: '[]'}
										}));
							case 'ErrorAllBelow':
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									{
										ctor: '::',
										_0: A2(
											orient,
											_mdgriffith$style_elements$Style_Internal_Model$GoRight,
											{ctor: '::', _0: _p56, _1: input}),
										_1: _p55._0._0
									});
							default:
								return A2(
									labelContainer,
									_mdgriffith$style_elements$Style_Internal_Model$Down,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p55._0._0,
										A2(
											_elm_lang$core$Basics_ops['++'],
											{
												ctor: '::',
												_0: A2(
													orient,
													_mdgriffith$style_elements$Style_Internal_Model$GoRight,
													{ctor: '::', _0: _p56, _1: input}),
												_1: {ctor: '[]'}
											},
											_p55._0._1)));
						}
					}
			}
		}
	});
var _mdgriffith$style_elements$Element_Input$checkbox = F3(
	function (style, attrs, input) {
		var isDisabled = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Element_Input$Disabled),
			input.options);
		var forErrors = function (opt) {
			var _p57 = opt;
			if (_p57.ctor === 'ErrorOpt') {
				return _elm_lang$core$Maybe$Just(_p57._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var errs = A2(_elm_lang$core$List$filterMap, forErrors, input.options);
		var withError = function (attrs) {
			return (!_elm_lang$core$List$isEmpty(errs)) ? {
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-invalid', 'true'),
				_1: attrs
			} : attrs;
		};
		var withDisabled = function (attrs) {
			return isDisabled ? {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$class('disabled-input'),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Input$disabledAttr(true),
					_1: attrs
				}
			} : {ctor: '::', _0: _mdgriffith$style_elements$Element_Input$pointer, _1: attrs};
		};
		var inputElem = {
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
				{
					node: 'input',
					style: _elm_lang$core$Maybe$Nothing,
					attrs: function (_p58) {
						return A2(
							_mdgriffith$style_elements$Element_Input$addOptionsAsAttrs,
							input.options,
							withError(
								withDisabled(_p58)));
					}(
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$type_('checkbox'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Input$checked(input.checked),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Events$onCheck(input.onChange),
									_1: {ctor: '[]'}
								}
							}
						}),
					child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
					absolutelyPositioned: _elm_lang$core$Maybe$Nothing
				}),
			_1: {ctor: '[]'}
		};
		return A7(
			_mdgriffith$style_elements$Element_Input$applyLabel,
			_elm_lang$core$Maybe$Nothing,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$spacing(5),
				_1: {ctor: '::', _0: _mdgriffith$style_elements$Element_Attributes$verticalCenter, _1: attrs}
			},
			_mdgriffith$style_elements$Element_Input$LabelOnRight(input.label),
			errs,
			isDisabled,
			true,
			inputElem);
	});
var _mdgriffith$style_elements$Element_Input$styledCheckbox = F3(
	function (style, attrs, input) {
		var isDisabled = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Element_Input$Disabled),
			input.options);
		var forErrors = function (opt) {
			var _p59 = opt;
			if (_p59.ctor === 'ErrorOpt') {
				return _elm_lang$core$Maybe$Just(_p59._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var errs = A2(_elm_lang$core$List$filterMap, forErrors, input.options);
		var withError = function (attrs) {
			return (!_elm_lang$core$List$isEmpty(errs)) ? {
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-invalid', 'true'),
				_1: attrs
			} : attrs;
		};
		var withDisabled = function (attrs) {
			return isDisabled ? {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$class('disabled-input'),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Input$disabledAttr(true),
					_1: attrs
				}
			} : {ctor: '::', _0: _mdgriffith$style_elements$Element_Input$pointer, _1: attrs};
		};
		var inputElem = {
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
				{
					node: 'input',
					style: _elm_lang$core$Maybe$Nothing,
					attrs: function (_p60) {
						return A2(
							_mdgriffith$style_elements$Element_Input$addOptionsAsAttrs,
							input.options,
							withError(
								withDisabled(_p60)));
					}(
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$type_('checkbox'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Input$checked(input.checked),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Events$onCheck(input.onChange),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Input$hidden,
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Attributes$toAttr(
												_elm_lang$html$Html_Attributes$class('focus-override')),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
					absolutelyPositioned: _elm_lang$core$Maybe$Nothing
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
					_mdgriffith$style_elements$Element_Attributes$toAttr(
						_elm_lang$html$Html_Attributes$class('alt-icon')),
					input.icon(input.checked)),
				_1: {ctor: '[]'}
			}
		};
		return A7(
			_mdgriffith$style_elements$Element_Input$applyLabel,
			_elm_lang$core$Maybe$Nothing,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$spacing(5),
				_1: {ctor: '::', _0: _mdgriffith$style_elements$Element_Attributes$verticalCenter, _1: attrs}
			},
			_mdgriffith$style_elements$Element_Input$LabelOnRight(input.label),
			errs,
			isDisabled,
			true,
			inputElem);
	});
var _mdgriffith$style_elements$Element_Input$textHelper = F5(
	function (kind, addedOptions, style, attrs, input) {
		var kindAsText = function () {
			var _p61 = kind;
			switch (_p61.ctor) {
				case 'Plain':
					return 'text';
				case 'Search':
					return 'search';
				case 'Password':
					return 'password';
				case 'Email':
					return 'email';
				default:
					return 'text';
			}
		}();
		var forErrors = function (opt) {
			var _p62 = opt;
			if (_p62.ctor === 'ErrorOpt') {
				return _elm_lang$core$Maybe$Just(_p62._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var withPlaceholder = function (attrs) {
			var _p63 = input.label;
			if (_p63.ctor === 'PlaceHolder') {
				return {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$toAttr(
						_elm_lang$html$Html_Attributes$placeholder(_p63._0)),
					_1: attrs
				};
			} else {
				return attrs;
			}
		};
		var forSpacing = function (attr) {
			var _p64 = attr;
			if (_p64.ctor === 'Spacing') {
				return _elm_lang$core$Maybe$Just(attr);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var spacing = A2(
			_elm_lang$core$Maybe$withDefault,
			A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, 7, 7),
			_elm_lang$core$List$head(
				_elm_lang$core$List$reverse(
					A2(_elm_lang$core$List$filterMap, forSpacing, attrs))));
		var combineFill = F2(
			function (opt, _p65) {
				var _p66 = _p65;
				var _p71 = _p66._0;
				var _p70 = _p66._1;
				var _p67 = opt;
				if (_p67.ctor === 'AutoFill') {
					var _p69 = _p67._0;
					var _p68 = _p70;
					if (_p68.ctor === 'Nothing') {
						return {
							ctor: '_Tuple2',
							_0: _p71,
							_1: _elm_lang$core$Maybe$Just(
								{
									ctor: '::',
									_0: _p69,
									_1: {ctor: '[]'}
								})
						};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _p71,
							_1: _elm_lang$core$Maybe$Just(
								{ctor: '::', _0: _p69, _1: _p68._0})
						};
					}
				} else {
					return {
						ctor: '_Tuple2',
						_0: {ctor: '::', _0: opt, _1: _p71},
						_1: _p70
					};
				}
			});
		var options = function (_p72) {
			var _p73 = _p72;
			var _p75 = _p73._0;
			var _p74 = _p73._1;
			if (_p74.ctor === 'Nothing') {
				return _p75;
			} else {
				return {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Input$AutoFill(
						A2(_elm_lang$core$String$join, ' ', _p74._0)),
					_1: _p75
				};
			}
		}(
			A3(
				_elm_lang$core$List$foldr,
				combineFill,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: _elm_lang$core$Maybe$Nothing
				},
				A2(_elm_lang$core$Basics_ops['++'], addedOptions, input.options)));
		var withDisabled = function (attrs) {
			return A2(
				_elm_lang$core$List$any,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(_mdgriffith$style_elements$Element_Input$Disabled),
				options) ? {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$class('disabled-input'),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Input$disabledAttr(true),
					_1: attrs
				}
			} : attrs;
		};
		var withReadonly = function (attrs) {
			return A2(
				_elm_lang$core$List$any,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(_mdgriffith$style_elements$Element_Input$Disabled),
				options) ? {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$class('disabled-input'),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Input$readonlyAttr(true),
					_1: attrs
				}
			} : attrs;
		};
		var errors = A2(_elm_lang$core$List$filterMap, forErrors, options);
		var withError = function (attrs) {
			return (!_elm_lang$core$List$isEmpty(errors)) ? {
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-invalid', 'true'),
				_1: attrs
			} : attrs;
		};
		var isDisabled = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Element_Input$Disabled),
			options);
		var withAutofocus = function (attrs) {
			return A2(
				_elm_lang$core$List$any,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(_mdgriffith$style_elements$Element_Input$FocusOnLoad),
				options) ? {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Input$autofocusAttr(true),
				_1: attrs
			} : attrs;
		};
		var inputElem = function () {
			var _p76 = kind;
			if (_p76.ctor === 'TextArea') {
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'textarea',
						style: _elm_lang$core$Maybe$Just(style),
						attrs: function (_p77) {
							return A2(
								_mdgriffith$style_elements$Element_Input$addOptionsAsAttrs,
								options,
								withError(
									withReadonly(
										withPlaceholder(_p77))));
						}(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'resize', _1: 'none'},
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Events$onInput(input.onChange),
									_1: attrs
								}
							}),
						child: A2(
							_mdgriffith$style_elements$Element_Internal_Model$Text,
							{decoration: _mdgriffith$style_elements$Element_Internal_Model$RawText, inline: false},
							input.value),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
			} else {
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'input',
						style: _elm_lang$core$Maybe$Just(style),
						attrs: function (_p78) {
							return A2(
								_mdgriffith$style_elements$Element_Input$addOptionsAsAttrs,
								options,
								withError(
									withDisabled(
										withPlaceholder(_p78))));
						}(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Input$type_(kindAsText),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Events$onInput(input.onChange),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Input$valueAttr(input.value),
										_1: attrs
									}
								}
							}),
						child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
			}
		}();
		return A7(
			_mdgriffith$style_elements$Element_Input$applyLabel,
			_elm_lang$core$Maybe$Nothing,
			{
				ctor: '::',
				_0: spacing,
				_1: {ctor: '[]'}
			},
			input.label,
			errors,
			isDisabled,
			false,
			{
				ctor: '::',
				_0: inputElem,
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Element_Input$text = A2(
	_mdgriffith$style_elements$Element_Input$textHelper,
	_mdgriffith$style_elements$Element_Input$Plain,
	{ctor: '[]'});
var _mdgriffith$style_elements$Element_Input$search = A2(
	_mdgriffith$style_elements$Element_Input$textHelper,
	_mdgriffith$style_elements$Element_Input$Search,
	{ctor: '[]'});
var _mdgriffith$style_elements$Element_Input$newPassword = A2(
	_mdgriffith$style_elements$Element_Input$textHelper,
	_mdgriffith$style_elements$Element_Input$Password,
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Element_Input$AutoFill('new-password'),
		_1: {ctor: '[]'}
	});
var _mdgriffith$style_elements$Element_Input$currentPassword = A2(
	_mdgriffith$style_elements$Element_Input$textHelper,
	_mdgriffith$style_elements$Element_Input$Password,
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Element_Input$AutoFill('current-password'),
		_1: {ctor: '[]'}
	});
var _mdgriffith$style_elements$Element_Input$username = A2(
	_mdgriffith$style_elements$Element_Input$textHelper,
	_mdgriffith$style_elements$Element_Input$Plain,
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Element_Input$AutoFill('username'),
		_1: {ctor: '[]'}
	});
var _mdgriffith$style_elements$Element_Input$email = A2(
	_mdgriffith$style_elements$Element_Input$textHelper,
	_mdgriffith$style_elements$Element_Input$Email,
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Element_Input$AutoFill('email'),
		_1: {ctor: '[]'}
	});
var _mdgriffith$style_elements$Element_Input$multiline = A2(
	_mdgriffith$style_elements$Element_Input$textHelper,
	_mdgriffith$style_elements$Element_Input$TextArea,
	{ctor: '[]'});
var _mdgriffith$style_elements$Element_Input$ChoiceWith = F2(
	function (a, b) {
		return {ctor: 'ChoiceWith', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Input$styledChoice = _mdgriffith$style_elements$Element_Input$ChoiceWith;
var _mdgriffith$style_elements$Element_Input$Choice = F2(
	function (a, b) {
		return {ctor: 'Choice', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Input$choice = _mdgriffith$style_elements$Element_Input$Choice;
var _mdgriffith$style_elements$Element_Input$Multi = function (a) {
	return {ctor: 'Multi', _0: a};
};
var _mdgriffith$style_elements$Element_Input$Single = function (a) {
	return {ctor: 'Single', _0: a};
};
var _mdgriffith$style_elements$Element_Input$Vertical = {ctor: 'Vertical'};
var _mdgriffith$style_elements$Element_Input$radio = F3(
	function (style, attrs, input) {
		var isDisabled = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Element_Input$Disabled),
			input.options);
		var forErrors = function (opt) {
			var _p79 = opt;
			if (_p79.ctor === 'ErrorOpt') {
				return _elm_lang$core$Maybe$Just(_p79._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var errs = A2(_elm_lang$core$List$filterMap, forErrors, input.options);
		var inputElem = A4(
			_mdgriffith$style_elements$Element_Input$radioHelper,
			_mdgriffith$style_elements$Element_Input$Vertical,
			style,
			attrs,
			{
				selection: _mdgriffith$style_elements$Element_Input$Single(
					{selected: input.selected, onChange: input.onChange}),
				choices: input.choices,
				label: input.label,
				disabled: isDisabled,
				errors: errs
			});
		return A7(
			_mdgriffith$style_elements$Element_Input$applyLabel,
			_elm_lang$core$Maybe$Nothing,
			{ctor: '[]'},
			input.label,
			errs,
			isDisabled,
			!isDisabled,
			{
				ctor: '::',
				_0: inputElem,
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Element_Input$Horizontal = {ctor: 'Horizontal'};
var _mdgriffith$style_elements$Element_Input$radioRow = F3(
	function (style, attrs, config) {
		var isDisabled = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Element_Input$Disabled),
			config.options);
		var forErrors = function (opt) {
			var _p80 = opt;
			if (_p80.ctor === 'ErrorOpt') {
				return _elm_lang$core$Maybe$Just(_p80._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var errs = A2(_elm_lang$core$List$filterMap, forErrors, config.options);
		var input = A4(
			_mdgriffith$style_elements$Element_Input$radioHelper,
			_mdgriffith$style_elements$Element_Input$Horizontal,
			style,
			attrs,
			{
				selection: _mdgriffith$style_elements$Element_Input$Single(
					{selected: config.selected, onChange: config.onChange}),
				choices: config.choices,
				label: config.label,
				disabled: isDisabled,
				errors: errs
			});
		return A7(
			_mdgriffith$style_elements$Element_Input$applyLabel,
			_elm_lang$core$Maybe$Nothing,
			{ctor: '[]'},
			config.label,
			errs,
			isDisabled,
			!isDisabled,
			{
				ctor: '::',
				_0: input,
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Element_Input$MenuDown = F3(
	function (a, b, c) {
		return {ctor: 'MenuDown', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Element_Input$menu = _mdgriffith$style_elements$Element_Input$MenuDown;
var _mdgriffith$style_elements$Element_Input$MenuUp = F3(
	function (a, b, c) {
		return {ctor: 'MenuUp', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Element_Input$menuAbove = _mdgriffith$style_elements$Element_Input$MenuUp;
var _mdgriffith$style_elements$Element_Input$SelectMenu = function (a) {
	return {ctor: 'SelectMenu', _0: a};
};
var _mdgriffith$style_elements$Element_Input$dropMenu = F2(
	function (selected, onUpdate) {
		return _mdgriffith$style_elements$Element_Input$SelectMenu(
			{selected: selected, onUpdate: onUpdate, isOpen: false});
	});
var _mdgriffith$style_elements$Element_Input$Autocomplete = function (a) {
	return {ctor: 'Autocomplete', _0: a};
};
var _mdgriffith$style_elements$Element_Input$autocomplete = F2(
	function (selected, onUpdate) {
		return _mdgriffith$style_elements$Element_Input$Autocomplete(
			{query: '', selected: selected, focus: selected, onUpdate: onUpdate, isOpen: false});
	});
var _mdgriffith$style_elements$Element_Input$updateSelection = F2(
	function (msg, select) {
		var _p81 = msg;
		switch (_p81.ctor) {
			case 'OpenMenu':
				var _p82 = select;
				if (_p82.ctor === 'Autocomplete') {
					return _mdgriffith$style_elements$Element_Input$Autocomplete(
						_elm_lang$core$Native_Utils.update(
							_p82._0,
							{isOpen: true}));
				} else {
					return _mdgriffith$style_elements$Element_Input$SelectMenu(
						_elm_lang$core$Native_Utils.update(
							_p82._0,
							{isOpen: true}));
				}
			case 'CloseMenu':
				var _p83 = select;
				if (_p83.ctor === 'Autocomplete') {
					return _mdgriffith$style_elements$Element_Input$Autocomplete(
						_elm_lang$core$Native_Utils.update(
							_p83._0,
							{isOpen: false}));
				} else {
					return _mdgriffith$style_elements$Element_Input$SelectMenu(
						_elm_lang$core$Native_Utils.update(
							_p83._0,
							{isOpen: false}));
				}
			case 'SetQuery':
				var _p86 = _p81._0;
				var _p84 = select;
				if (_p84.ctor === 'Autocomplete') {
					var _p85 = _p84._0;
					return _mdgriffith$style_elements$Element_Input$Autocomplete(
						_elm_lang$core$Native_Utils.update(
							_p85,
							{
								query: _p86,
								isOpen: true,
								selected: _elm_lang$core$Native_Utils.eq(_p86, '') ? _p85.selected : _elm_lang$core$Maybe$Nothing
							}));
				} else {
					return _mdgriffith$style_elements$Element_Input$SelectMenu(_p84._0);
				}
			case 'SetFocus':
				var _p87 = select;
				if (_p87.ctor === 'Autocomplete') {
					return _mdgriffith$style_elements$Element_Input$Autocomplete(
						_elm_lang$core$Native_Utils.update(
							_p87._0,
							{focus: _p81._0}));
				} else {
					return _mdgriffith$style_elements$Element_Input$SelectMenu(_p87._0);
				}
			case 'SelectValue':
				var _p89 = _p81._0;
				var _p88 = select;
				if (_p88.ctor === 'Autocomplete') {
					return _mdgriffith$style_elements$Element_Input$Autocomplete(
						_elm_lang$core$Native_Utils.update(
							_p88._0,
							{selected: _p89, query: ''}));
				} else {
					return _mdgriffith$style_elements$Element_Input$SelectMenu(
						_elm_lang$core$Native_Utils.update(
							_p88._0,
							{selected: _p89}));
				}
			case 'SelectFocused':
				var _p90 = select;
				if (_p90.ctor === 'Autocomplete') {
					var _p91 = _p90._0;
					return _mdgriffith$style_elements$Element_Input$Autocomplete(
						_elm_lang$core$Native_Utils.update(
							_p91,
							{selected: _p91.focus, query: ''}));
				} else {
					return _mdgriffith$style_elements$Element_Input$SelectMenu(_p90._0);
				}
			case 'Clear':
				var _p92 = select;
				if (_p92.ctor === 'Autocomplete') {
					return _mdgriffith$style_elements$Element_Input$Autocomplete(
						_elm_lang$core$Native_Utils.update(
							_p92._0,
							{query: '', isOpen: true, selected: _elm_lang$core$Maybe$Nothing, focus: _elm_lang$core$Maybe$Nothing}));
				} else {
					return _mdgriffith$style_elements$Element_Input$SelectMenu(
						_elm_lang$core$Native_Utils.update(
							_p92._0,
							{selected: _elm_lang$core$Maybe$Nothing}));
				}
			default:
				return A3(_elm_lang$core$List$foldl, _mdgriffith$style_elements$Element_Input$updateSelection, select, _p81._0);
		}
	});
var _mdgriffith$style_elements$Element_Input$Batch = function (a) {
	return {ctor: 'Batch', _0: a};
};
var _mdgriffith$style_elements$Element_Input$Clear = {ctor: 'Clear'};
var _mdgriffith$style_elements$Element_Input$SelectFocused = {ctor: 'SelectFocused'};
var _mdgriffith$style_elements$Element_Input$SelectValue = function (a) {
	return {ctor: 'SelectValue', _0: a};
};
var _mdgriffith$style_elements$Element_Input$SetFocus = function (a) {
	return {ctor: 'SetFocus', _0: a};
};
var _mdgriffith$style_elements$Element_Input$SetQuery = function (a) {
	return {ctor: 'SetQuery', _0: a};
};
var _mdgriffith$style_elements$Element_Input$CloseMenu = {ctor: 'CloseMenu'};
var _mdgriffith$style_elements$Element_Input$OpenMenu = {ctor: 'OpenMenu'};
var _mdgriffith$style_elements$Element_Input$selectMenu = F3(
	function (style, attrs, input) {
		var isDisabled = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Element_Input$Disabled),
			input.options);
		var forErrors = function (opt) {
			var _p93 = opt;
			if (_p93.ctor === 'ErrorOpt') {
				return _elm_lang$core$Maybe$Just(_p93._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var errors = A2(_elm_lang$core$List$filterMap, forErrors, input.options);
		var forSpacing = function (attr) {
			var _p94 = attr;
			if (_p94.ctor === 'Spacing') {
				return true;
			} else {
				return false;
			}
		};
		var _p95 = A2(_elm_lang$core$List$partition, forSpacing, attrs);
		var attrsWithSpacing = _p95._0;
		var attrsWithoutSpacing = _p95._1;
		var forPadding = function (attr) {
			var _p96 = attr;
			if (_p96.ctor === 'Padding') {
				return true;
			} else {
				return false;
			}
		};
		var parentPadding = A2(_elm_lang$core$List$filter, forPadding, attrs);
		var renderOption = function (option) {
			var _p97 = option;
			if (_p97.ctor === 'Choice') {
				var _p98 = _p97._0;
				var isSelected = _elm_lang$core$Native_Utils.eq(
					_elm_lang$core$Maybe$Just(_p98),
					input.selected) ? A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'true'),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'background-color', _1: 'rgba(0,0,0,0.03)'},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					},
					parentPadding) : A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'false'),
						_1: {ctor: '[]'}
					},
					parentPadding);
				var additional = isDisabled ? {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Expand,
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menuitemradio'),
						_1: isSelected
					}
				} : {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Events$onClick(
						input.onUpdate(
							_mdgriffith$style_elements$Element_Input$Batch(
								{
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Input$CloseMenu,
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Input$SelectValue(
											_elm_lang$core$Maybe$Just(_p98)),
										_1: {ctor: '[]'}
									}
								}))),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Expand,
						_1: {
							ctor: '::',
							_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menuitemradio'),
							_1: isSelected
						}
					}
				};
				return A2(_mdgriffith$style_elements$Element_Internal_Modify$addAttrList, additional, _p97._1);
			} else {
				var _p99 = _p97._0;
				var isSelected = _elm_lang$core$Native_Utils.eq(
					_elm_lang$core$Maybe$Just(_p99),
					input.selected) ? A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'true'),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'background-color', _1: 'rgba(0,0,0,0.03)'},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					},
					parentPadding) : A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'false'),
						_1: {ctor: '[]'}
					},
					parentPadding);
				var additional = isDisabled ? {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Expand,
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menuitemradio'),
						_1: isSelected
					}
				} : {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Events$onClick(
						input.onUpdate(
							_mdgriffith$style_elements$Element_Input$Batch(
								{
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Input$CloseMenu,
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Input$SelectValue(
											_elm_lang$core$Maybe$Just(_p99)),
										_1: {ctor: '[]'}
									}
								}))),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Expand,
						_1: {
							ctor: '::',
							_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menuitemradio'),
							_1: isSelected
						}
					}
				};
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addAttrList,
					additional,
					_p97._1(
						_elm_lang$core$Native_Utils.eq(
							_elm_lang$core$Maybe$Just(_p99),
							input.selected)));
			}
		};
		var getSelectedLabel = F2(
			function (selected, option) {
				if (_elm_lang$core$Native_Utils.eq(
					_mdgriffith$style_elements$Element_Input$getOptionValue(option),
					selected)) {
					var _p100 = option;
					if (_p100.ctor === 'Choice') {
						return _elm_lang$core$Maybe$Just(_p100._1);
					} else {
						return _elm_lang$core$Maybe$Just(
							_p100._1(true));
					}
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			});
		var placeholderText = function () {
			var _p101 = input.label;
			if (_p101.ctor === 'PlaceHolder') {
				return _mdgriffith$style_elements$Element$text(_p101._0);
			} else {
				return _mdgriffith$style_elements$Element$text(' - ');
			}
		}();
		var _p102 = function () {
			var _p103 = input.menu;
			if (_p103.ctor === 'MenuUp') {
				return {ctor: '_Tuple4', _0: true, _1: _p103._0, _2: _p103._1, _3: _p103._2};
			} else {
				return {ctor: '_Tuple4', _0: false, _1: _p103._0, _2: _p103._1, _3: _p103._2};
			}
		}();
		var menuAbove = _p102._0;
		var menuStyle = _p102._1;
		var menuAttrs = _p102._2;
		var options = _p102._3;
		var selectedText = function () {
			var _p104 = input.selected;
			if (_p104.ctor === 'Nothing') {
				return placeholderText;
			} else {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					placeholderText,
					_elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$filterMap,
							getSelectedLabel(_p104._0),
							options)));
			}
		}();
		var bar = _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$GoRight,
					{ctor: '[]'}),
				attrs: isDisabled ? {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$spread,
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
							_1: attrsWithoutSpacing
						}
					}
				} : ((input.isOpen && (!_elm_lang$core$Native_Utils.eq(input.selected, _elm_lang$core$Maybe$Nothing))) ? {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Events$onClick(
						input.onUpdate(_mdgriffith$style_elements$Element_Input$CloseMenu)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Input$pointer,
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$spread,
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
									_1: attrsWithoutSpacing
								}
							}
						}
					}
				} : (((!input.isOpen) && (!_elm_lang$core$Native_Utils.eq(input.selected, _elm_lang$core$Maybe$Nothing))) ? {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Events$onClick(
						input.onUpdate(_mdgriffith$style_elements$Element_Input$OpenMenu)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Input$pointer,
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$spread,
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
									_1: attrsWithoutSpacing
								}
							}
						}
					}
				} : {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Input$pointer,
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$spread,
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
								_1: attrsWithoutSpacing
							}
						}
					}
				})),
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
					{
						ctor: '::',
						_0: selectedText,
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$arrows,
							_1: {ctor: '[]'}
						}
					}),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
		var cursor = A3(
			_elm_lang$core$List$foldl,
			F2(
				function (option, cache) {
					var last = _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Element_Input$getOptionValue(option));
					var first = function () {
						var _p105 = cache.first;
						if (_p105.ctor === 'Nothing') {
							return _elm_lang$core$Maybe$Just(
								_mdgriffith$style_elements$Element_Input$getOptionValue(option));
						} else {
							return cache.first;
						}
					}();
					var currentIsSelected = function () {
						var _p106 = cache.selected;
						if (_p106.ctor === 'Nothing') {
							return false;
						} else {
							return _elm_lang$core$Native_Utils.eq(
								_mdgriffith$style_elements$Element_Input$getOptionValue(option),
								_p106._0);
						}
					}();
					var found = (!cache.found) ? currentIsSelected : cache.found;
					var prev = (currentIsSelected && _elm_lang$core$Native_Utils.eq(cache.prev, _elm_lang$core$Maybe$Nothing)) ? cache.last : cache.prev;
					var next = (cache.found && _elm_lang$core$Native_Utils.eq(cache.next, _elm_lang$core$Maybe$Nothing)) ? _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Element_Input$getOptionValue(option)) : cache.next;
					return _elm_lang$core$Native_Utils.update(
						cache,
						{next: next, found: found, prev: prev, first: first, last: last});
				}),
			{selected: input.selected, found: false, prev: _elm_lang$core$Maybe$Nothing, next: _elm_lang$core$Maybe$Nothing, first: _elm_lang$core$Maybe$Nothing, last: _elm_lang$core$Maybe$Nothing},
			options);
		var _p107 = _elm_lang$core$Native_Utils.eq(cursor.found, false) ? {next: cursor.first, prev: cursor.first} : ((_elm_lang$core$Native_Utils.eq(cursor.next, _elm_lang$core$Maybe$Nothing) && (!_elm_lang$core$Native_Utils.eq(cursor.prev, _elm_lang$core$Maybe$Nothing))) ? {next: cursor.first, prev: cursor.prev} : ((_elm_lang$core$Native_Utils.eq(cursor.prev, _elm_lang$core$Maybe$Nothing) && (!_elm_lang$core$Native_Utils.eq(cursor.next, _elm_lang$core$Maybe$Nothing))) ? {next: cursor.next, prev: cursor.last} : {next: cursor.next, prev: cursor.prev}));
		var next = _p107.next;
		var prev = _p107.prev;
		var fullElement = A2(
			menuAbove ? _mdgriffith$style_elements$Element$above : _mdgriffith$style_elements$Element$below,
			(input.isOpen && (!isDisabled)) ? {
				ctor: '::',
				_0: A3(
					_mdgriffith$style_elements$Element$column,
					menuStyle,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'z-index', _1: '20'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'background-color', _1: 'white'},
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$pointer,
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
								_1: menuAttrs
							}
						}
					},
					A2(_elm_lang$core$List$map, renderOption, options)),
				_1: {ctor: '[]'}
			} : {ctor: '[]'},
			_mdgriffith$style_elements$Element_Internal_Model$Element(
				{
					node: 'div',
					style: _elm_lang$core$Maybe$Nothing,
					attrs: A2(
						_elm_lang$core$List$filterMap,
						_elm_lang$core$Basics$identity,
						{
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								_mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill)),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Maybe$Just(
									A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menu')),
								_1: {
									ctor: '::',
									_0: (!isDisabled) ? _elm_lang$core$Maybe$Just(
										_mdgriffith$style_elements$Element_Input$tabindex(0)) : _elm_lang$core$Maybe$Nothing,
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Maybe$Just(
											_mdgriffith$style_elements$Element_Attributes$inlineStyle(
												{
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'z-index', _1: '20'},
													_1: {ctor: '[]'}
												})),
										_1: {
											ctor: '::',
											_0: isDisabled ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
												_mdgriffith$style_elements$Element_Attributes$toAttr(
													_mdgriffith$style_elements$Element_Input$onFocusOut(
														input.onUpdate(_mdgriffith$style_elements$Element_Input$CloseMenu)))),
											_1: {
												ctor: '::',
												_0: isDisabled ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
													_mdgriffith$style_elements$Element_Attributes$toAttr(
														_mdgriffith$style_elements$Element_Input$onFocusIn(
															input.onUpdate(_mdgriffith$style_elements$Element_Input$OpenMenu)))),
												_1: {
													ctor: '::',
													_0: isDisabled ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
														_mdgriffith$style_elements$Element_Input$onKeyLookup(
															function (key) {
																return _elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$enter) ? _elm_lang$core$Maybe$Just(
																	input.onUpdate(
																		input.isOpen ? _mdgriffith$style_elements$Element_Input$CloseMenu : _mdgriffith$style_elements$Element_Input$OpenMenu)) : ((_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$downArrow) && (!input.isOpen)) ? _elm_lang$core$Maybe$Just(
																	input.onUpdate(_mdgriffith$style_elements$Element_Input$OpenMenu)) : ((_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$downArrow) && input.isOpen) ? A2(
																	_elm_lang$core$Maybe$map,
																	function (x) {
																		return input.onUpdate(
																			_mdgriffith$style_elements$Element_Input$SelectValue(
																				_elm_lang$core$Maybe$Just(x)));
																	},
																	next) : ((_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$upArrow) && (!input.isOpen)) ? _elm_lang$core$Maybe$Just(
																	input.onUpdate(_mdgriffith$style_elements$Element_Input$OpenMenu)) : ((_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$upArrow) && input.isOpen) ? A2(
																	_elm_lang$core$Maybe$map,
																	function (x) {
																		return input.onUpdate(
																			_mdgriffith$style_elements$Element_Input$SelectValue(
																				_elm_lang$core$Maybe$Just(x)));
																	},
																	prev) : _elm_lang$core$Maybe$Nothing))));
															})),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}),
					child: bar,
					absolutelyPositioned: _elm_lang$core$Maybe$Nothing
				}));
		return A7(
			_mdgriffith$style_elements$Element_Input$applyLabel,
			_elm_lang$core$Maybe$Nothing,
			attrsWithSpacing,
			input.label,
			errors,
			isDisabled,
			!isDisabled,
			{
				ctor: '::',
				_0: fullElement,
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Element_Input$searchSelect = F3(
	function (style, attrs, input) {
		var matchesQuery = F2(
			function (query, opt) {
				return _elm_lang$core$Native_Utils.eq(query, '') ? true : A2(
					_elm_lang$core$String$startsWith,
					function (_p108) {
						return _elm_lang$core$String$toLower(
							_elm_lang$core$String$trimLeft(_p108));
					}(query),
					_elm_lang$core$String$toLower(
						_elm_lang$core$String$trimLeft(
							_elm_lang$core$Basics$toString(opt))));
			});
		var forSpacing = function (attr) {
			var _p109 = attr;
			if (_p109.ctor === 'Spacing') {
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: _p109._0, _1: _p109._1});
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var _p110 = A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: 0, _1: 0},
			_elm_lang$core$List$head(
				A2(_elm_lang$core$List$filterMap, forSpacing, attrs)));
		var xSpacing = _p110._0;
		var ySpacing = _p110._1;
		var forPadding = function (attr) {
			var _p111 = attr;
			if (_p111.ctor === 'Padding') {
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple4', _0: _p111._0, _1: _p111._1, _2: _p111._2, _3: _p111._3});
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var _p112 = A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
			A2(
				_elm_lang$core$Maybe$map,
				A2(
					_elm_lang$core$Basics$flip,
					_mdgriffith$style_elements$Element_Input$defaultPadding,
					{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0}),
				_elm_lang$core$List$head(
					A2(_elm_lang$core$List$filterMap, forPadding, attrs))));
		var ppTop = _p112._0;
		var ppRight = _p112._1;
		var ppBottom = _p112._2;
		var ppLeft = _p112._3;
		var parentPadding = A4(
			_mdgriffith$style_elements$Element_Internal_Model$Padding,
			_elm_lang$core$Maybe$Just(ppTop),
			_elm_lang$core$Maybe$Just(ppRight),
			_elm_lang$core$Maybe$Just(ppBottom),
			_elm_lang$core$Maybe$Just(ppLeft));
		var onlySpacing = function (attr) {
			var _p113 = attr;
			if (_p113.ctor === 'Spacing') {
				return true;
			} else {
				return false;
			}
		};
		var _p114 = A2(_elm_lang$core$List$partition, onlySpacing, attrs);
		var attrsWithSpacing = _p114._0;
		var attrsWithoutSpacing = _p114._1;
		var getSelectedLabel = F2(
			function (selected, option) {
				if (_elm_lang$core$Native_Utils.eq(
					_mdgriffith$style_elements$Element_Input$getOptionValue(option),
					selected)) {
					var _p115 = option;
					if (_p115.ctor === 'Choice') {
						return _elm_lang$core$Maybe$Just(_p115._1);
					} else {
						return _elm_lang$core$Maybe$Just(
							_p115._1(true));
					}
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			});
		var placeholderText = function () {
			var _p116 = input.selected;
			if (_p116.ctor === 'Nothing') {
				var _p117 = input.label;
				if (_p117.ctor === 'PlaceHolder') {
					return _p117._0;
				} else {
					return 'Search...';
				}
			} else {
				return '';
			}
		}();
		var _p118 = function () {
			var _p119 = input.menu;
			if (_p119.ctor === 'MenuUp') {
				return {ctor: '_Tuple4', _0: true, _1: _p119._0, _2: _p119._1, _3: _p119._2};
			} else {
				return {ctor: '_Tuple4', _0: false, _1: _p119._0, _2: _p119._1, _3: _p119._2};
			}
		}();
		var menuAbove = _p118._0;
		var menuStyle = _p118._1;
		var menuAttrs = _p118._2;
		var options = _p118._3;
		var cursor = A3(
			_elm_lang$core$List$foldl,
			F2(
				function (option, cache) {
					var last = _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Element_Input$getOptionValue(option));
					var first = function () {
						var _p120 = cache.first;
						if (_p120.ctor === 'Nothing') {
							return _elm_lang$core$Maybe$Just(
								_mdgriffith$style_elements$Element_Input$getOptionValue(option));
						} else {
							return cache.first;
						}
					}();
					var currentIsSelected = function () {
						var _p121 = cache.selected;
						if (_p121.ctor === 'Nothing') {
							return false;
						} else {
							return _elm_lang$core$Native_Utils.eq(
								_mdgriffith$style_elements$Element_Input$getOptionValue(option),
								_p121._0);
						}
					}();
					var found = (!cache.found) ? currentIsSelected : cache.found;
					var prev = (currentIsSelected && _elm_lang$core$Native_Utils.eq(cache.prev, _elm_lang$core$Maybe$Nothing)) ? cache.last : cache.prev;
					var next = (cache.found && _elm_lang$core$Native_Utils.eq(cache.next, _elm_lang$core$Maybe$Nothing)) ? _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Element_Input$getOptionValue(option)) : cache.next;
					return _elm_lang$core$Native_Utils.update(
						cache,
						{next: next, found: found, prev: prev, first: first, last: last});
				}),
			{selected: input.focus, found: false, prev: _elm_lang$core$Maybe$Nothing, next: _elm_lang$core$Maybe$Nothing, first: _elm_lang$core$Maybe$Nothing, last: _elm_lang$core$Maybe$Nothing},
			A2(
				_elm_lang$core$List$filter,
				matchesQuery(input.query),
				options));
		var _p122 = _elm_lang$core$Native_Utils.eq(cursor.found, false) ? {next: cursor.first, prev: cursor.first} : ((_elm_lang$core$Native_Utils.eq(cursor.next, _elm_lang$core$Maybe$Nothing) && (!_elm_lang$core$Native_Utils.eq(cursor.prev, _elm_lang$core$Maybe$Nothing))) ? {next: cursor.first, prev: cursor.prev} : ((_elm_lang$core$Native_Utils.eq(cursor.prev, _elm_lang$core$Maybe$Nothing) && (!_elm_lang$core$Native_Utils.eq(cursor.next, _elm_lang$core$Maybe$Nothing))) ? {next: cursor.next, prev: cursor.last} : {next: cursor.next, prev: cursor.prev}));
		var next = _p122.next;
		var prev = _p122.prev;
		var getFocus = function (query) {
			return _elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filter,
					matchesQuery(query),
					A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Element_Input$getOptionValue, options)));
		};
		var isDisabled = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Element_Input$Disabled),
			input.options);
		var renderOption = function (option) {
			var _p123 = option;
			if (_p123.ctor === 'Choice') {
				var _p124 = _p123._0;
				var isSelected = _elm_lang$core$Native_Utils.eq(
					_elm_lang$core$Maybe$Just(_p124),
					input.selected) ? {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'true'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'background-color', _1: 'rgba(0,0,0,0.05)'},
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: parentPadding,
							_1: {ctor: '[]'}
						}
					}
				} : (_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$Maybe$Just(_p124),
					input.focus) ? {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'false'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'background-color', _1: 'rgba(0,0,0,0.03)'},
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: parentPadding,
							_1: {ctor: '[]'}
						}
					}
				} : {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'false'),
					_1: {
						ctor: '::',
						_0: parentPadding,
						_1: {ctor: '[]'}
					}
				});
				var additional = isDisabled ? {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Expand,
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menuitemradio'),
						_1: isSelected
					}
				} : {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Events$onMouseEnter(
						input.onUpdate(
							_mdgriffith$style_elements$Element_Input$SetFocus(
								_elm_lang$core$Maybe$Just(_p124)))),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Events$onClick(
							input.onUpdate(
								_mdgriffith$style_elements$Element_Input$Batch(
									{
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Input$SetFocus(
											_elm_lang$core$Maybe$Just(_p124)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Input$SelectFocused,
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Input$CloseMenu,
												_1: {ctor: '[]'}
											}
										}
									}))),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Expand,
							_1: {
								ctor: '::',
								_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menuitemradio'),
								_1: isSelected
							}
						}
					}
				};
				return A2(_mdgriffith$style_elements$Element_Internal_Modify$addAttrList, additional, _p123._1);
			} else {
				var _p125 = _p123._0;
				var isSelected = _elm_lang$core$Native_Utils.eq(
					_elm_lang$core$Maybe$Just(_p125),
					input.selected) ? {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'true'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'background-color', _1: 'rgba(0,0,0,0.05)'},
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: parentPadding,
							_1: {ctor: '[]'}
						}
					}
				} : (_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$Maybe$Just(_p125),
					input.focus) ? {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'false'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'background-color', _1: 'rgba(0,0,0,0.03)'},
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: parentPadding,
							_1: {ctor: '[]'}
						}
					}
				} : {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'aria-selected', 'false'),
					_1: {
						ctor: '::',
						_0: parentPadding,
						_1: {ctor: '[]'}
					}
				});
				var additional = isDisabled ? {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Expand,
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menuitemradio'),
						_1: isSelected
					}
				} : {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Events$onMouseEnter(
						input.onUpdate(
							_mdgriffith$style_elements$Element_Input$SetFocus(
								_elm_lang$core$Maybe$Just(_p125)))),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Events$onClick(
							input.onUpdate(
								_mdgriffith$style_elements$Element_Input$Batch(
									{
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Input$SetFocus(
											_elm_lang$core$Maybe$Just(_p125)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Input$SelectFocused,
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Input$CloseMenu,
												_1: {ctor: '[]'}
											}
										}
									}))),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Expand,
							_1: {
								ctor: '::',
								_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menuitemradio'),
								_1: isSelected
							}
						}
					}
				};
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addAttrList,
					additional,
					_p123._1(
						_elm_lang$core$Native_Utils.eq(
							_elm_lang$core$Maybe$Just(_p125),
							input.selected)));
			}
		};
		var matches = A2(
			_elm_lang$core$List$map,
			renderOption,
			A2(
				_elm_lang$core$List$take,
				input.max,
				A2(
					_elm_lang$core$List$filter,
					function (_p126) {
						return A2(
							matchesQuery,
							input.query,
							_mdgriffith$style_elements$Element_Input$getOptionValue(_p126));
					},
					options)));
		var fullElement = A2(
			menuAbove ? _mdgriffith$style_elements$Element$above : _mdgriffith$style_elements$Element$below,
			(input.isOpen && ((!_elm_lang$core$List$isEmpty(matches)) && ((!isDisabled) && _elm_lang$core$Native_Utils.eq(input.selected, _elm_lang$core$Maybe$Nothing)))) ? {
				ctor: '::',
				_0: A3(
					_mdgriffith$style_elements$Element$column,
					menuStyle,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'z-index', _1: '20'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'background-color', _1: 'white'},
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Input$pointer,
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
								_1: menuAttrs
							}
						}
					},
					matches),
				_1: {ctor: '[]'}
			} : {ctor: '[]'},
			_mdgriffith$style_elements$Element_Internal_Model$Element(
				{
					node: 'div',
					style: _elm_lang$core$Maybe$Nothing,
					attrs: A2(
						_elm_lang$core$List$filterMap,
						_elm_lang$core$Basics$identity,
						{
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								_mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill)),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Maybe$Just(
									_mdgriffith$style_elements$Element_Attributes$inlineStyle(
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'z-index', _1: '20'},
											_1: {ctor: '[]'}
										})),
								_1: {
									ctor: '::',
									_0: isDisabled ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
										_mdgriffith$style_elements$Element_Input$onKeyLookup(
											function (key) {
												return ((_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$delete) || _elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$backspace)) && (!_elm_lang$core$Native_Utils.eq(input.selected, _elm_lang$core$Maybe$Nothing))) ? _elm_lang$core$Maybe$Just(
													input.onUpdate(_mdgriffith$style_elements$Element_Input$Clear)) : (_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$tab) ? _elm_lang$core$Maybe$Just(
													input.onUpdate(_mdgriffith$style_elements$Element_Input$SelectFocused)) : (_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$enter) ? (input.isOpen ? _elm_lang$core$Maybe$Just(
													input.onUpdate(
														_mdgriffith$style_elements$Element_Input$Batch(
															{
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Input$CloseMenu,
																_1: {
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Element_Input$SelectFocused,
																	_1: {ctor: '[]'}
																}
															}))) : _elm_lang$core$Maybe$Just(
													input.onUpdate(_mdgriffith$style_elements$Element_Input$OpenMenu))) : ((_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$downArrow) && (!input.isOpen)) ? _elm_lang$core$Maybe$Just(
													input.onUpdate(_mdgriffith$style_elements$Element_Input$OpenMenu)) : ((_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$downArrow) && input.isOpen) ? A2(
													_elm_lang$core$Maybe$map,
													function (_p127) {
														return input.onUpdate(
															_mdgriffith$style_elements$Element_Input$SetFocus(
																_elm_lang$core$Maybe$Just(_p127)));
													},
													next) : ((_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$upArrow) && (!input.isOpen)) ? _elm_lang$core$Maybe$Just(
													input.onUpdate(_mdgriffith$style_elements$Element_Input$OpenMenu)) : ((_elm_lang$core$Native_Utils.eq(key, _mdgriffith$style_elements$Element_Input$upArrow) && input.isOpen) ? A2(
													_elm_lang$core$Maybe$map,
													function (_p128) {
														return input.onUpdate(
															_mdgriffith$style_elements$Element_Input$SetFocus(
																_elm_lang$core$Maybe$Just(_p128)));
													},
													prev) : _elm_lang$core$Maybe$Nothing))))));
											})),
									_1: {ctor: '[]'}
								}
							}
						}),
					child: _mdgriffith$style_elements$Element_Internal_Model$Layout(
						{
							node: 'div',
							style: _elm_lang$core$Maybe$Nothing,
							layout: A2(
								_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
								_mdgriffith$style_elements$Style_Internal_Model$GoRight,
								{ctor: '[]'}),
							attrs: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'text'},
										_1: {ctor: '[]'}
									}),
								_1: attrsWithoutSpacing
							},
							children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
								{
									ctor: '::',
									_0: function () {
										var _p129 = input.selected;
										if (_p129.ctor === 'Nothing') {
											return _mdgriffith$style_elements$Element$text('');
										} else {
											return A2(
												_elm_lang$core$Maybe$withDefault,
												_mdgriffith$style_elements$Element$text(''),
												_elm_lang$core$List$head(
													A2(
														_elm_lang$core$List$map,
														function (opt) {
															var _p130 = opt;
															if (_p130.ctor === 'Choice') {
																return _p130._1;
															} else {
																return _p130._1(true);
															}
														},
														A2(
															_elm_lang$core$List$filter,
															function (opt) {
																return _elm_lang$core$Native_Utils.eq(
																	_p129._0,
																	_mdgriffith$style_elements$Element_Input$getOptionValue(opt));
															},
															options))));
										}
									}(),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
											{
												node: 'input',
												style: _elm_lang$core$Maybe$Nothing,
												attrs: A2(
													_elm_lang$core$List$filterMap,
													_elm_lang$core$Basics$identity,
													{
														ctor: '::',
														_0: _elm_lang$core$Maybe$Just(
															_mdgriffith$style_elements$Element_Attributes$toAttr(
																_elm_lang$html$Html_Attributes$placeholder(placeholderText))),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Maybe$Just(
																_mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill)),
															_1: {
																ctor: '::',
																_0: isDisabled ? _elm_lang$core$Maybe$Just(
																	_mdgriffith$style_elements$Element_Input$disabledAttr(true)) : _elm_lang$core$Maybe$Nothing,
																_1: {
																	ctor: '::',
																	_0: isDisabled ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
																		_mdgriffith$style_elements$Element_Attributes$toAttr(
																			_mdgriffith$style_elements$Element_Input$onFocusOut(
																				input.onUpdate(
																					_mdgriffith$style_elements$Element_Input$Batch(
																						{
																							ctor: '::',
																							_0: _mdgriffith$style_elements$Element_Input$SelectFocused,
																							_1: {
																								ctor: '::',
																								_0: _mdgriffith$style_elements$Element_Input$CloseMenu,
																								_1: {ctor: '[]'}
																							}
																						}))))),
																	_1: {
																		ctor: '::',
																		_0: isDisabled ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
																			_mdgriffith$style_elements$Element_Attributes$toAttr(
																				_mdgriffith$style_elements$Element_Input$onFocusIn(
																					input.onUpdate(_mdgriffith$style_elements$Element_Input$OpenMenu)))),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$core$Maybe$Just(
																				A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'role', 'menu')),
																			_1: {
																				ctor: '::',
																				_0: _elm_lang$core$Maybe$Just(
																					_mdgriffith$style_elements$Element_Input$type_('text')),
																				_1: {
																					ctor: '::',
																					_0: _elm_lang$core$Maybe$Just(
																						_mdgriffith$style_elements$Element_Attributes$toAttr(
																							_elm_lang$html$Html_Attributes$class('focus-override'))),
																					_1: {
																						ctor: '::',
																						_0: isDisabled ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
																							_mdgriffith$style_elements$Element_Events$onInput(
																								function (q) {
																									return input.onUpdate(
																										_mdgriffith$style_elements$Element_Input$Batch(
																											{
																												ctor: '::',
																												_0: _mdgriffith$style_elements$Element_Input$SetQuery(q),
																												_1: {
																													ctor: '::',
																													_0: _mdgriffith$style_elements$Element_Input$SetFocus(
																														getFocus(q)),
																													_1: {ctor: '[]'}
																												}
																											}));
																								})),
																						_1: {
																							ctor: '::',
																							_0: _elm_lang$core$Maybe$Just(
																								_mdgriffith$style_elements$Element_Input$valueAttr(input.query)),
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}),
												child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
												absolutelyPositioned: _elm_lang$core$Maybe$Nothing
											}),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
												{
													node: 'div',
													style: _elm_lang$core$Maybe$Just(style),
													attrs: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Attributes$width(
															A2(_mdgriffith$style_elements$Style_Internal_Model$Calc, 100, 0)),
														_1: {
															ctor: '::',
															_0: _mdgriffith$style_elements$Element_Attributes$toAttr(
																_elm_lang$html$Html_Attributes$class('alt-icon')),
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
																	{
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'height', _1: '100%'},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: 'position', _1: 'absolute'},
																			_1: {
																				ctor: '::',
																				_0: {ctor: '_Tuple2', _0: 'top', _1: '0'},
																				_1: {
																					ctor: '::',
																					_0: {ctor: '_Tuple2', _0: 'left', _1: '0'},
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}),
																_1: {ctor: '[]'}
															}
														}
													},
													child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
													absolutelyPositioned: _elm_lang$core$Maybe$Nothing
												}),
											_1: {ctor: '[]'}
										}
									}
								}),
							absolutelyPositioned: _elm_lang$core$Maybe$Nothing
						}),
					absolutelyPositioned: _elm_lang$core$Maybe$Nothing
				}));
		var forErrors = function (opt) {
			var _p131 = opt;
			if (_p131.ctor === 'ErrorOpt') {
				return _elm_lang$core$Maybe$Just(_p131._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var errors = A2(_elm_lang$core$List$filterMap, forErrors, input.options);
		return A7(
			_mdgriffith$style_elements$Element_Input$applyLabel,
			_elm_lang$core$Maybe$Nothing,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'auto'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				},
				attrsWithSpacing),
			input.label,
			errors,
			isDisabled,
			false,
			{
				ctor: '::',
				_0: fullElement,
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Element_Input$select = F3(
	function (style, attrs, input) {
		var _p132 = input.$with;
		if (_p132.ctor === 'Autocomplete') {
			var _p133 = _p132._0;
			return A3(
				_mdgriffith$style_elements$Element_Input$searchSelect,
				style,
				attrs,
				{max: input.max, menu: input.menu, label: input.label, options: input.options, onUpdate: _p133.onUpdate, isOpen: _p133.isOpen, selected: _p133.selected, query: _p133.query, focus: _p133.focus});
		} else {
			var _p134 = _p132._0;
			return A3(
				_mdgriffith$style_elements$Element_Input$selectMenu,
				style,
				attrs,
				{max: input.max, menu: input.menu, label: input.label, options: input.options, onUpdate: _p134.onUpdate, isOpen: _p134.isOpen, selected: _p134.selected});
		}
	});

var _mdgriffith$style_elements$Style_Border$roundBottomLeft = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-bottom-left-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$roundBottomRight = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-bottom-right-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$roundTopRight = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-top-right-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$roundTopLeft = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-top-left-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$rounded = function (box) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(box),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$dotted = A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'border-style', 'dotted');
var _mdgriffith$style_elements$Style_Border$dashed = A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'border-style', 'dashed');
var _mdgriffith$style_elements$Style_Border$solid = A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'border-style', 'solid');
var _mdgriffith$style_elements$Style_Border$none = A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'border-width', '0');
var _mdgriffith$style_elements$Style_Border$bottom = function (l) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-bottom-width',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(l),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$top = function (l) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-top-width',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(l),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$right = function (l) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-right-width',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(l),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$left = function (l) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-left-width',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(l),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$all = function (v) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-width',
		_mdgriffith$style_elements$Style_Internal_Render_Value$box(
			{ctor: '_Tuple4', _0: v, _1: v, _2: v, _3: v}));
};

var _mdgriffith$style_elements$Style_Color$placeholder = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$PseudoElement,
		'::placeholder',
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Internal_Model$TextColor(clr),
			_1: {
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'opacity', '1'),
				_1: {ctor: '[]'}
			}
		});
};
var _mdgriffith$style_elements$Style_Color$selection = function (clr) {
	return _mdgriffith$style_elements$Style_Internal_Model$SelectionColor(clr);
};
var _mdgriffith$style_elements$Style_Color$decoration = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'text-decoration-color',
		_mdgriffith$style_elements$Style_Internal_Render_Value$color(clr));
};
var _mdgriffith$style_elements$Style_Color$cursor = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'cursor-color',
		_mdgriffith$style_elements$Style_Internal_Render_Value$color(clr));
};
var _mdgriffith$style_elements$Style_Color$border = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-color',
		_mdgriffith$style_elements$Style_Internal_Render_Value$color(clr));
};
var _mdgriffith$style_elements$Style_Color$background = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'background-color',
		_mdgriffith$style_elements$Style_Internal_Render_Value$color(clr));
};
var _mdgriffith$style_elements$Style_Color$text = _mdgriffith$style_elements$Style_Internal_Model$TextColor;

var _mdgriffith$style_elements$Style_Font$lowercase = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-transform', 'lowercase');
var _mdgriffith$style_elements$Style_Font$capitalize = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-transform', 'capitalize');
var _mdgriffith$style_elements$Style_Font$uppercase = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-transform', 'uppercase');
var _mdgriffith$style_elements$Style_Font$weight = function (fontWeight) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'font-weight',
		_elm_lang$core$Basics$toString(fontWeight));
};
var _mdgriffith$style_elements$Style_Font$light = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'font-weight', '300');
var _mdgriffith$style_elements$Style_Font$bold = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'font-weight', '700');
var _mdgriffith$style_elements$Style_Font$italic = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'font-style', 'italic');
var _mdgriffith$style_elements$Style_Font$strike = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-decoration', 'line-through');
var _mdgriffith$style_elements$Style_Font$underline = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-decoration', 'underline');
var _mdgriffith$style_elements$Style_Font$justifyAll = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'justify-all');
var _mdgriffith$style_elements$Style_Font$justify = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'justify');
var _mdgriffith$style_elements$Style_Font$center = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'center');
var _mdgriffith$style_elements$Style_Font$alignRight = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'right');
var _mdgriffith$style_elements$Style_Font$alignLeft = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'left');
var _mdgriffith$style_elements$Style_Font$wordSpacing = function (offset) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'word-spacing',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(offset),
			'px'));
};
var _mdgriffith$style_elements$Style_Font$letterSpacing = function (offset) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'letter-spacing',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(offset),
			'px'));
};
var _mdgriffith$style_elements$Style_Font$lineHeight = function (height) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'line-height',
		_elm_lang$core$Basics$toString(height));
};
var _mdgriffith$style_elements$Style_Font$size = function (size) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'font-size',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(size),
			'px'));
};
var _mdgriffith$style_elements$Style_Font$importUrl = function (_p0) {
	var _p1 = _p0;
	return A2(_mdgriffith$style_elements$Style_Internal_Model$ImportFont, _p1.name, _p1.url);
};
var _mdgriffith$style_elements$Style_Font$font = _mdgriffith$style_elements$Style_Internal_Model$FontName;
var _mdgriffith$style_elements$Style_Font$monospace = _mdgriffith$style_elements$Style_Internal_Model$Monospace;
var _mdgriffith$style_elements$Style_Font$fantasy = _mdgriffith$style_elements$Style_Internal_Model$Fantasy;
var _mdgriffith$style_elements$Style_Font$cursive = _mdgriffith$style_elements$Style_Internal_Model$Cursive;
var _mdgriffith$style_elements$Style_Font$sansSerif = _mdgriffith$style_elements$Style_Internal_Model$SansSerif;
var _mdgriffith$style_elements$Style_Font$serif = _mdgriffith$style_elements$Style_Internal_Model$Serif;
var _mdgriffith$style_elements$Style_Font$typeface = function (families) {
	return _mdgriffith$style_elements$Style_Internal_Model$FontFamily(families);
};

var _mdgriffith$style_elements$Style_Scale$shrink = F3(
	function (ratio, i, size) {
		shrink:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(i, 0) < 1) {
				return size;
			} else {
				var _v0 = ratio,
					_v1 = i - 1,
					_v2 = size / ratio;
				ratio = _v0;
				i = _v1;
				size = _v2;
				continue shrink;
			}
		}
	});
var _mdgriffith$style_elements$Style_Scale$grow = F3(
	function (ratio, i, size) {
		grow:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(i, 0) < 1) {
				return size;
			} else {
				var _v3 = ratio,
					_v4 = i - 1,
					_v5 = size * ratio;
				ratio = _v3;
				i = _v4;
				size = _v5;
				continue grow;
			}
		}
	});
var _mdgriffith$style_elements$Style_Scale$resize = F3(
	function (normal, ratio, scale) {
		return (_elm_lang$core$Native_Utils.eq(scale, 0) || _elm_lang$core$Native_Utils.eq(scale, 1)) ? normal : ((_elm_lang$core$Native_Utils.cmp(scale, 0) < 0) ? A3(_mdgriffith$style_elements$Style_Scale$shrink, ratio, scale * -1, normal) : A3(_mdgriffith$style_elements$Style_Scale$grow, ratio, scale - 1, normal));
	});
var _mdgriffith$style_elements$Style_Scale$roundedModular = F2(
	function (normal, ratio) {
		return function (_p0) {
			return _elm_lang$core$Basics$toFloat(
				_elm_lang$core$Basics$round(
					A3(_mdgriffith$style_elements$Style_Scale$resize, normal, ratio, _p0)));
		};
	});
var _mdgriffith$style_elements$Style_Scale$modular = F3(
	function (normal, ratio, fontScale) {
		return A3(_mdgriffith$style_elements$Style_Scale$resize, normal, ratio, fontScale);
	});

var _mdgriffith$style_elements$Style_Shadow$drop = function (_p0) {
	var _p1 = _p0;
	return _mdgriffith$style_elements$Style_Internal_Model$Filters(
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Internal_Model$DropShadow(
				{offset: _p1.offset, size: 0, blur: _p1.blur, color: _p1.color}),
			_1: {ctor: '[]'}
		});
};
var _mdgriffith$style_elements$Style_Shadow$text = function (_p2) {
	var _p3 = _p2;
	return _mdgriffith$style_elements$Style_Internal_Model$Shadows(
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
				{kind: 'text', offset: _p3.offset, size: 0, blur: _p3.blur, color: _p3.color}),
			_1: {ctor: '[]'}
		});
};
var _mdgriffith$style_elements$Style_Shadow$inset = function (_p4) {
	var _p5 = _p4;
	return _mdgriffith$style_elements$Style_Internal_Model$Shadows(
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
				{kind: 'inset', offset: _p5.offset, size: _p5.size, blur: _p5.blur, color: _p5.color}),
			_1: {ctor: '[]'}
		});
};
var _mdgriffith$style_elements$Style_Shadow$boxHelper = function (_p6) {
	var _p7 = _p6;
	return _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
		{kind: 'box', offset: _p7.offset, size: _p7.size, blur: _p7.blur, color: _p7.color});
};
var _mdgriffith$style_elements$Style_Shadow$box = function (shadow) {
	return _mdgriffith$style_elements$Style_Internal_Model$Shadows(
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$boxHelper(shadow),
			_1: {ctor: '[]'}
		});
};
var _mdgriffith$style_elements$Style_Shadow$deep = _mdgriffith$style_elements$Style_Shadow$box(
	{
		color: A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.2),
		offset: {ctor: '_Tuple2', _0: 0, _1: 14},
		blur: 20,
		size: -12
	});
var _mdgriffith$style_elements$Style_Shadow$simple = _mdgriffith$style_elements$Style_Internal_Model$Shadows(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$boxHelper(
			{
				color: A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.5),
				offset: {ctor: '_Tuple2', _0: 0, _1: 29},
				blur: 32,
				size: -20
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$boxHelper(
				{
					color: A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.25),
					offset: {ctor: '_Tuple2', _0: 0, _1: 4},
					blur: 11,
					size: -3
				}),
			_1: {ctor: '[]'}
		}
	});
var _mdgriffith$style_elements$Style_Shadow$textGlow = F2(
	function (color, size) {
		return _mdgriffith$style_elements$Style_Internal_Model$Shadows(
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
					{
						kind: 'text',
						offset: {ctor: '_Tuple2', _0: 0, _1: 0},
						size: size,
						blur: size * 2,
						color: color
					}),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style_Shadow$innerGlow = F2(
	function (color, size) {
		return _mdgriffith$style_elements$Style_Internal_Model$Shadows(
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
					{
						kind: 'inset',
						offset: {ctor: '_Tuple2', _0: 0, _1: 0},
						size: size,
						blur: size * 2,
						color: color
					}),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style_Shadow$glow = F2(
	function (color, size) {
		return _mdgriffith$style_elements$Style_Internal_Model$Shadows(
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
					{
						kind: 'box',
						offset: {ctor: '_Tuple2', _0: 0, _1: 0},
						size: size,
						blur: size * 2,
						color: color
					}),
				_1: {ctor: '[]'}
			});
	});

var _opensolid$geometry$OpenSolid_Geometry_Types$Vector2d = function (a) {
	return {ctor: 'Vector2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d = function (a) {
	return {ctor: 'Vector3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Direction2d = function (a) {
	return {ctor: 'Direction2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Direction3d = function (a) {
	return {ctor: 'Direction3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Point2d = function (a) {
	return {ctor: 'Point2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Point3d = function (a) {
	return {ctor: 'Point3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Axis2d = function (a) {
	return {ctor: 'Axis2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Axis3d = function (a) {
	return {ctor: 'Axis3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Plane3d = function (a) {
	return {ctor: 'Plane3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Frame2d = function (a) {
	return {ctor: 'Frame2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Frame3d = function (a) {
	return {ctor: 'Frame3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$SketchPlane3d = function (a) {
	return {ctor: 'SketchPlane3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$LineSegment2d = function (a) {
	return {ctor: 'LineSegment2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$LineSegment3d = function (a) {
	return {ctor: 'LineSegment3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Triangle2d = function (a) {
	return {ctor: 'Triangle2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Triangle3d = function (a) {
	return {ctor: 'Triangle3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$BoundingBox2d = function (a) {
	return {ctor: 'BoundingBox2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$BoundingBox3d = function (a) {
	return {ctor: 'BoundingBox3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Polyline2d = function (a) {
	return {ctor: 'Polyline2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Polyline3d = function (a) {
	return {ctor: 'Polyline3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Polygon2d = function (a) {
	return {ctor: 'Polygon2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Circle2d = function (a) {
	return {ctor: 'Circle2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Circle3d = function (a) {
	return {ctor: 'Circle3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Arc2d = function (a) {
	return {ctor: 'Arc2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$Arc3d = function (a) {
	return {ctor: 'Arc3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$QuadraticSpline2d = function (a) {
	return {ctor: 'QuadraticSpline2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$QuadraticSpline3d = function (a) {
	return {ctor: 'QuadraticSpline3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$CubicSpline2d = function (a) {
	return {ctor: 'CubicSpline2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Types$CubicSpline3d = function (a) {
	return {ctor: 'CubicSpline3d', _0: a};
};

var _opensolid$geometry$OpenSolid_Scalar$interpolateFrom = F3(
	function (start, end, parameter) {
		return (_elm_lang$core$Native_Utils.cmp(parameter, 0.5) < 1) ? (start + (parameter * (end - start))) : (end + ((1 - parameter) * (start - end)));
	});
var _opensolid$geometry$OpenSolid_Scalar$equalWithin = F3(
	function (tolerance, firstValue, secondValue) {
		return _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$Basics$abs(secondValue - firstValue),
			tolerance) < 1;
	});

var _opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$yDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.yDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$xDirection = function (_p2) {
	var _p3 = _p2;
	return _p3._0.xDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$originPoint = function (_p4) {
	var _p5 = _p4;
	return _p5._0.originPoint;
};

var _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};

var _opensolid$geometry$OpenSolid_Bootstrap_Axis3d$direction = function (_p0) {
	var _p1 = _p0;
	return _p1._0.direction;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Axis3d$originPoint = function (_p2) {
	var _p3 = _p2;
	return _p3._0.originPoint;
};

var _opensolid$geometry$OpenSolid_Bootstrap_Plane3d$normalDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.normalDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Plane3d$originPoint = function (_p2) {
	var _p3 = _p2;
	return _p3._0.originPoint;
};

var _opensolid$geometry$OpenSolid_Bootstrap_Frame3d$zDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.zDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Frame3d$yDirection = function (_p2) {
	var _p3 = _p2;
	return _p3._0.yDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Frame3d$xDirection = function (_p4) {
	var _p5 = _p4;
	return _p5._0.xDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Frame3d$originPoint = function (_p6) {
	var _p7 = _p6;
	return _p7._0.originPoint;
};

var _opensolid$geometry$OpenSolid_Vector3d$mirrorAcross = function (plane) {
	var _p0 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
		_opensolid$geometry$OpenSolid_Bootstrap_Plane3d$normalDirection(plane));
	var dx = _p0._0;
	var dy = _p0._1;
	var dz = _p0._2;
	var a = 1 - ((2 * dx) * dx);
	var b = 1 - ((2 * dy) * dy);
	var c = 1 - ((2 * dz) * dz);
	var d = (-2 * dy) * dz;
	var e = (-2 * dx) * dz;
	var f = (-2 * dx) * dy;
	return function (_p1) {
		var _p2 = _p1;
		var _p5 = _p2._0._2;
		var _p4 = _p2._0._1;
		var _p3 = _p2._0._0;
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
			{ctor: '_Tuple3', _0: ((a * _p3) + (f * _p4)) + (e * _p5), _1: ((f * _p3) + (b * _p4)) + (d * _p5), _2: ((e * _p3) + (d * _p4)) + (c * _p5)});
	};
};
var _opensolid$geometry$OpenSolid_Vector3d$rotateAround = F2(
	function (axis, angle) {
		var halfAngle = 0.5 * angle;
		var sinHalfAngle = _elm_lang$core$Basics$sin(halfAngle);
		var w = _elm_lang$core$Basics$cos(halfAngle);
		var _p6 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_Axis3d$direction(axis));
		var dx = _p6._0;
		var dy = _p6._1;
		var dz = _p6._2;
		var x = dx * sinHalfAngle;
		var wx = w * x;
		var xx = x * x;
		var y = dy * sinHalfAngle;
		var wy = w * y;
		var xy = x * y;
		var yy = y * y;
		var a22 = 1 - (2 * (xx + yy));
		var z = dz * sinHalfAngle;
		var wz = w * z;
		var a10 = 2 * (xy + wz);
		var a01 = 2 * (xy - wz);
		var xz = x * z;
		var a20 = 2 * (xz - wy);
		var a02 = 2 * (xz + wy);
		var yz = y * z;
		var a21 = 2 * (yz + wx);
		var a12 = 2 * (yz - wx);
		var zz = z * z;
		var a00 = 1 - (2 * (yy + zz));
		var a11 = 1 - (2 * (xx + zz));
		return function (_p7) {
			var _p8 = _p7;
			var _p11 = _p8._0._2;
			var _p10 = _p8._0._1;
			var _p9 = _p8._0._0;
			return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
				{ctor: '_Tuple3', _0: ((a00 * _p9) + (a01 * _p10)) + (a02 * _p11), _1: ((a10 * _p9) + (a11 * _p10)) + (a12 * _p11), _2: ((a20 * _p9) + (a21 * _p10)) + (a22 * _p11)});
		};
	});
var _opensolid$geometry$OpenSolid_Vector3d$zComponent = function (_p12) {
	var _p13 = _p12;
	return _p13._0._2;
};
var _opensolid$geometry$OpenSolid_Vector3d$yComponent = function (_p14) {
	var _p15 = _p14;
	return _p15._0._1;
};
var _opensolid$geometry$OpenSolid_Vector3d$xComponent = function (_p16) {
	var _p17 = _p16;
	return _p17._0._0;
};
var _opensolid$geometry$OpenSolid_Vector3d$components = function (_p18) {
	var _p19 = _p18;
	return _p19._0;
};
var _opensolid$geometry$OpenSolid_Vector3d$componentIn = F2(
	function (direction, vector) {
		var _p20 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
		var vx = _p20._0;
		var vy = _p20._1;
		var vz = _p20._2;
		var _p21 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(direction);
		var dx = _p21._0;
		var dy = _p21._1;
		var dz = _p21._2;
		return ((vx * dx) + (vy * dy)) + (vz * dz);
	});
var _opensolid$geometry$OpenSolid_Vector3d$relativeTo = F2(
	function (frame, vector) {
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
			{
				ctor: '_Tuple3',
				_0: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$xDirection(frame),
					vector),
				_1: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$yDirection(frame),
					vector),
				_2: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$zDirection(frame),
					vector)
			});
	});
var _opensolid$geometry$OpenSolid_Vector3d$projectInto = F2(
	function (sketchPlane, vector) {
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector2d(
			{
				ctor: '_Tuple2',
				_0: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$xDirection(sketchPlane),
					vector),
				_1: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$yDirection(sketchPlane),
					vector)
			});
	});
var _opensolid$geometry$OpenSolid_Vector3d$squaredLength = function (vector) {
	var _p22 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
	var x = _p22._0;
	var y = _p22._1;
	var z = _p22._2;
	return ((x * x) + (y * y)) + (z * z);
};
var _opensolid$geometry$OpenSolid_Vector3d$length = function (vector) {
	return _elm_lang$core$Basics$sqrt(
		_opensolid$geometry$OpenSolid_Vector3d$squaredLength(vector));
};
var _opensolid$geometry$OpenSolid_Vector3d$sum = F2(
	function (firstVector, secondVector) {
		var _p23 = _opensolid$geometry$OpenSolid_Vector3d$components(secondVector);
		var x2 = _p23._0;
		var y2 = _p23._1;
		var z2 = _p23._2;
		var _p24 = _opensolid$geometry$OpenSolid_Vector3d$components(firstVector);
		var x1 = _p24._0;
		var y1 = _p24._1;
		var z1 = _p24._2;
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
			{ctor: '_Tuple3', _0: x1 + x2, _1: y1 + y2, _2: z1 + z2});
	});
var _opensolid$geometry$OpenSolid_Vector3d$difference = F2(
	function (firstVector, secondVector) {
		var _p25 = _opensolid$geometry$OpenSolid_Vector3d$components(secondVector);
		var x2 = _p25._0;
		var y2 = _p25._1;
		var z2 = _p25._2;
		var _p26 = _opensolid$geometry$OpenSolid_Vector3d$components(firstVector);
		var x1 = _p26._0;
		var y1 = _p26._1;
		var z1 = _p26._2;
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
			{ctor: '_Tuple3', _0: x1 - x2, _1: y1 - y2, _2: z1 - z2});
	});
var _opensolid$geometry$OpenSolid_Vector3d$equalWithin = F3(
	function (tolerance, firstVector, secondVector) {
		return _elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_Vector3d$squaredLength(
				A2(_opensolid$geometry$OpenSolid_Vector3d$difference, firstVector, secondVector)),
			tolerance * tolerance) < 1;
	});
var _opensolid$geometry$OpenSolid_Vector3d$dotProduct = F2(
	function (firstVector, secondVector) {
		var _p27 = _opensolid$geometry$OpenSolid_Vector3d$components(secondVector);
		var x2 = _p27._0;
		var y2 = _p27._1;
		var z2 = _p27._2;
		var _p28 = _opensolid$geometry$OpenSolid_Vector3d$components(firstVector);
		var x1 = _p28._0;
		var y1 = _p28._1;
		var z1 = _p28._2;
		return ((x1 * x2) + (y1 * y2)) + (z1 * z2);
	});
var _opensolid$geometry$OpenSolid_Vector3d$crossProduct = F2(
	function (firstVector, secondVector) {
		var _p29 = _opensolid$geometry$OpenSolid_Vector3d$components(secondVector);
		var x2 = _p29._0;
		var y2 = _p29._1;
		var z2 = _p29._2;
		var _p30 = _opensolid$geometry$OpenSolid_Vector3d$components(firstVector);
		var x1 = _p30._0;
		var y1 = _p30._1;
		var z1 = _p30._2;
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
			{ctor: '_Tuple3', _0: (y1 * z2) - (z1 * y2), _1: (z1 * x2) - (x1 * z2), _2: (x1 * y2) - (y1 * x2)});
	});
var _opensolid$geometry$OpenSolid_Vector3d$flip = function (vector) {
	var _p31 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
	var x = _p31._0;
	var y = _p31._1;
	var z = _p31._2;
	return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
		{ctor: '_Tuple3', _0: 0 - x, _1: 0 - y, _2: 0 - z});
};
var _opensolid$geometry$OpenSolid_Vector3d$scaleBy = F2(
	function (scale, vector) {
		var _p32 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
		var x = _p32._0;
		var y = _p32._1;
		var z = _p32._2;
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
			{ctor: '_Tuple3', _0: x * scale, _1: y * scale, _2: z * scale});
	});
var _opensolid$geometry$OpenSolid_Vector3d$lengthAndDirection = function (vector) {
	var vectorLength = _opensolid$geometry$OpenSolid_Vector3d$length(vector);
	if (_elm_lang$core$Native_Utils.eq(vectorLength, 0.0)) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var normalizedVector = A2(_opensolid$geometry$OpenSolid_Vector3d$scaleBy, 1 / vectorLength, vector);
		var vectorDirection = _opensolid$geometry$OpenSolid_Geometry_Types$Direction3d(
			_opensolid$geometry$OpenSolid_Vector3d$components(normalizedVector));
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: vectorLength, _1: vectorDirection});
	}
};
var _opensolid$geometry$OpenSolid_Vector3d$placeIn = F2(
	function (frame, vector) {
		var _p33 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
		var x = _p33._0;
		var y = _p33._1;
		var z = _p33._2;
		var _p34 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$zDirection(frame));
		var x3 = _p34._0;
		var y3 = _p34._1;
		var z3 = _p34._2;
		var _p35 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$yDirection(frame));
		var x2 = _p35._0;
		var y2 = _p35._1;
		var z2 = _p35._2;
		var _p36 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$xDirection(frame));
		var x1 = _p36._0;
		var y1 = _p36._1;
		var z1 = _p36._2;
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
			{ctor: '_Tuple3', _0: ((x1 * x) + (x2 * y)) + (x3 * z), _1: ((y1 * x) + (y2 * y)) + (y3 * z), _2: ((z1 * x) + (z2 * y)) + (z3 * z)});
	});
var _opensolid$geometry$OpenSolid_Vector3d$interpolateFrom = F3(
	function (v1, v2, t) {
		var _p37 = _opensolid$geometry$OpenSolid_Vector3d$components(v2);
		var x2 = _p37._0;
		var y2 = _p37._1;
		var z2 = _p37._2;
		var _p38 = _opensolid$geometry$OpenSolid_Vector3d$components(v1);
		var x1 = _p38._0;
		var y1 = _p38._1;
		var z1 = _p38._2;
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
			{
				ctor: '_Tuple3',
				_0: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, x1, x2, t),
				_1: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, y1, y2, t),
				_2: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, z1, z2, t)
			});
	});
var _opensolid$geometry$OpenSolid_Vector3d$perpendicularTo = function (vector) {
	var _p39 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
	var x = _p39._0;
	var y = _p39._1;
	var z = _p39._2;
	var absX = _elm_lang$core$Basics$abs(x);
	var absY = _elm_lang$core$Basics$abs(y);
	var absZ = _elm_lang$core$Basics$abs(z);
	return (_elm_lang$core$Native_Utils.cmp(absX, absY) < 1) ? ((_elm_lang$core$Native_Utils.cmp(absX, absZ) < 1) ? _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
		{ctor: '_Tuple3', _0: 0, _1: 0 - z, _2: y}) : _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
		{ctor: '_Tuple3', _0: 0 - y, _1: x, _2: 0})) : ((_elm_lang$core$Native_Utils.cmp(absY, absZ) < 1) ? _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
		{ctor: '_Tuple3', _0: z, _1: 0, _2: 0 - x}) : _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
		{ctor: '_Tuple3', _0: 0 - y, _1: x, _2: 0}));
};
var _opensolid$geometry$OpenSolid_Vector3d$in_ = F2(
	function (direction, length) {
		var _p40 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(direction);
		var dx = _p40._0;
		var dy = _p40._1;
		var dz = _p40._2;
		return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
			{ctor: '_Tuple3', _0: length * dx, _1: length * dy, _2: length * dz});
	});
var _opensolid$geometry$OpenSolid_Vector3d$projectionIn = F2(
	function (direction, vector) {
		return A2(
			_opensolid$geometry$OpenSolid_Vector3d$in_,
			direction,
			A2(_opensolid$geometry$OpenSolid_Vector3d$componentIn, direction, vector));
	});
var _opensolid$geometry$OpenSolid_Vector3d$projectOnto = F2(
	function (plane, vector) {
		return A2(
			_opensolid$geometry$OpenSolid_Vector3d$difference,
			vector,
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$projectionIn,
				_opensolid$geometry$OpenSolid_Bootstrap_Plane3d$normalDirection(plane),
				vector));
	});
var _opensolid$geometry$OpenSolid_Vector3d$zero = _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
	{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0});
var _opensolid$geometry$OpenSolid_Vector3d$direction = function (vector) {
	if (_elm_lang$core$Native_Utils.eq(vector, _opensolid$geometry$OpenSolid_Vector3d$zero)) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var normalizedVector = A2(
			_opensolid$geometry$OpenSolid_Vector3d$scaleBy,
			1 / _opensolid$geometry$OpenSolid_Vector3d$length(vector),
			vector);
		return _elm_lang$core$Maybe$Just(
			_opensolid$geometry$OpenSolid_Geometry_Types$Direction3d(
				_opensolid$geometry$OpenSolid_Vector3d$components(normalizedVector)));
	}
};
var _opensolid$geometry$OpenSolid_Vector3d$orthonormalize = function (_p41) {
	var _p42 = _p41;
	var _p44 = _p42._2;
	var _p43 = _p42._1;
	return A2(
		_elm_lang$core$Maybe$andThen,
		function (xDirection) {
			var xProjection = A2(_opensolid$geometry$OpenSolid_Vector3d$projectionIn, xDirection, _p43);
			var yVector = A2(_opensolid$geometry$OpenSolid_Vector3d$difference, _p43, xProjection);
			return A2(
				_elm_lang$core$Maybe$andThen,
				function (yDirection) {
					var xProjection = A2(_opensolid$geometry$OpenSolid_Vector3d$projectionIn, xDirection, _p44);
					var yzVector = A2(_opensolid$geometry$OpenSolid_Vector3d$difference, _p44, xProjection);
					var yProjection = A2(_opensolid$geometry$OpenSolid_Vector3d$projectionIn, yDirection, yzVector);
					var zVector = A2(_opensolid$geometry$OpenSolid_Vector3d$difference, yzVector, yProjection);
					return A2(
						_elm_lang$core$Maybe$map,
						function (zDirection) {
							return {ctor: '_Tuple3', _0: xDirection, _1: yDirection, _2: zDirection};
						},
						_opensolid$geometry$OpenSolid_Vector3d$direction(zVector));
				},
				_opensolid$geometry$OpenSolid_Vector3d$direction(yVector));
		},
		_opensolid$geometry$OpenSolid_Vector3d$direction(_p42._0));
};

var _user$project$Graph_Extra$isolatedNodeContext = function (node) {
	return {node: node, incoming: _elm_community$intdict$IntDict$empty, outgoing: _elm_community$intdict$IntDict$empty};
};
var _user$project$Graph_Extra$insertNode = F2(
	function (node, graph) {
		return A2(
			_elm_community$graph$Graph$insert,
			_user$project$Graph_Extra$isolatedNodeContext(node),
			graph);
	});
var _user$project$Graph_Extra$updateEdges = F2(
	function (updater, graph) {
		return A2(
			_elm_community$graph$Graph$fromNodesAndEdges,
			_elm_community$graph$Graph$nodes(graph),
			updater(
				_elm_community$graph$Graph$edges(graph)));
	});
var _user$project$Graph_Extra$removeEdge = F2(
	function (from, to) {
		return _user$project$Graph_Extra$updateEdges(
			_elm_lang$core$List$filter(
				function (e) {
					return (!_elm_lang$core$Native_Utils.eq(e.from, from)) || (!_elm_lang$core$Native_Utils.eq(e.to, to));
				}));
	});
var _user$project$Graph_Extra$updateNodes = F2(
	function (updater, graph) {
		return A2(
			_elm_community$graph$Graph$fromNodesAndEdges,
			updater(
				_elm_community$graph$Graph$nodes(graph)),
			_elm_community$graph$Graph$edges(graph));
	});
var _user$project$Graph_Extra$updateNode = F2(
	function (id, updater) {
		return _user$project$Graph_Extra$updateNodes(
			_elm_lang$core$List$map(
				function (n) {
					return _elm_lang$core$Native_Utils.eq(n.id, id) ? updater(n) : n;
				}));
	});
var _user$project$Graph_Extra$edgeEqualsFromTo = F3(
	function (from, to, edge) {
		return _elm_lang$core$Native_Utils.eq(edge.from, from) && _elm_lang$core$Native_Utils.eq(edge.to, to);
	});
var _user$project$Graph_Extra$edgeEquals = function (edge) {
	return A2(_user$project$Graph_Extra$edgeEqualsFromTo, edge.from, edge.to);
};
var _user$project$Graph_Extra$insertEdge = F2(
	function (newEdge, graph) {
		var alreadyExists = A2(
			_elm_lang$core$Debug$log,
			'edge already exists?',
			_elm_community$maybe_extra$Maybe_Extra$isJust(
				A2(
					_elm_community$list_extra$List_Extra$find,
					_user$project$Graph_Extra$edgeEquals(newEdge),
					_elm_community$graph$Graph$edges(graph))));
		var newEdges = alreadyExists ? {ctor: '[]'} : {
			ctor: '::',
			_0: newEdge,
			_1: {ctor: '[]'}
		};
		return A2(
			_elm_community$graph$Graph$fromNodesAndEdges,
			_elm_community$graph$Graph$nodes(graph),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_community$graph$Graph$edges(graph),
				newEdges));
	});
var _user$project$Graph_Extra$updateEdgeFrom = F2(
	function (newFrom, edge) {
		return function (_p0) {
			return A2(
				_user$project$Graph_Extra$insertEdge,
				_elm_lang$core$Native_Utils.update(
					edge,
					{from: newFrom}),
				A3(_user$project$Graph_Extra$removeEdge, edge.from, edge.to, _p0));
		};
	});
var _user$project$Graph_Extra$updateEdgeTo = F2(
	function (newTo, edge) {
		return function (_p1) {
			return A2(
				_user$project$Graph_Extra$insertEdge,
				_elm_lang$core$Native_Utils.update(
					edge,
					{to: newTo}),
				A3(_user$project$Graph_Extra$removeEdge, edge.from, edge.to, _p1));
		};
	});
var _user$project$Graph_Extra$updateEdgeFromTo = F3(
	function (newFrom, newTo, edge) {
		return function (_p2) {
			return A2(
				_user$project$Graph_Extra$insertEdge,
				_elm_lang$core$Native_Utils.update(
					edge,
					{from: newFrom, to: newTo}),
				A3(_user$project$Graph_Extra$removeEdge, edge.from, edge.to, _p2));
		};
	});
var _user$project$Graph_Extra$updateEdge = F3(
	function (from, to, updater) {
		return _user$project$Graph_Extra$updateEdges(
			_elm_lang$core$List$map(
				function (e) {
					return A3(_user$project$Graph_Extra$edgeEqualsFromTo, from, to, e) ? updater(e) : e;
				}));
	});
var _user$project$Graph_Extra$neighborCount = F2(
	function (graph, node) {
		var adjCount = function (_p3) {
			return _elm_lang$core$List$length(
				_elm_community$intdict$IntDict$keys(_p3));
		};
		return A2(
			_elm_lang$core$Debug$log,
			'neighborcount',
			A2(
				_elm_lang$core$Maybe$withDefault,
				0,
				A2(
					_elm_lang$core$Maybe$map,
					function (_p4) {
						var _p5 = _p4;
						return adjCount(_p5.incoming) + adjCount(_p5.outgoing);
					},
					A2(_elm_community$graph$Graph$get, node.id, graph))));
	});
var _user$project$Graph_Extra$getNode = function (nodeId) {
	return function (_p6) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (_) {
				return _.node;
			},
			A2(_elm_community$graph$Graph$get, nodeId, _p6));
	};
};
var _user$project$Graph_Extra$getEdgesTo = function (id) {
	return function (_p7) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p8) {
				return A2(
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						}),
					id,
					function (_) {
						return _.to;
					}(_p8));
			},
			_elm_community$graph$Graph$edges(_p7));
	};
};
var _user$project$Graph_Extra$getEdge = F2(
	function (from, to) {
		return function (_p9) {
			return A2(
				_elm_community$list_extra$List_Extra$find,
				A2(_user$project$Graph_Extra$edgeEqualsFromTo, from, to),
				_elm_community$graph$Graph$edges(_p9));
		};
	});
var _user$project$Graph_Extra$availableEdges = function (graph) {
	return A2(
		_elm_lang$core$List$filter,
		function (pair) {
			return _elm_lang$core$Native_Utils.eq(
				A3(_elm_lang$core$Basics$uncurry, _user$project$Graph_Extra$getEdge, pair, graph),
				_elm_lang$core$Maybe$Nothing);
		},
		A3(
			_elm_community$list_extra$List_Extra$lift2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_elm_community$graph$Graph$nodeIds(graph),
			_elm_community$graph$Graph$nodeIds(graph)));
};

var _user$project$Types$hexToColorSafe = function (_p0) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_elm_lang$core$Color$black,
		_eskimoblood$elm_color_extra$Color_Convert$hexToColor(_p0));
};
var _user$project$Types$decodeVec3 = A4(
	_elm_lang$core$Json_Decode$map3,
	F3(
		function (x, y, z) {
			return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
				{ctor: '_Tuple3', _0: x, _1: y, _2: z});
		}),
	A2(_elm_lang$core$Json_Decode$field, 'x', _elm_lang$core$Json_Decode$float),
	A2(_elm_lang$core$Json_Decode$field, 'y', _elm_lang$core$Json_Decode$float),
	A2(_elm_lang$core$Json_Decode$field, 'z', _elm_lang$core$Json_Decode$float));
var _user$project$Types_ops = _user$project$Types_ops || {};
_user$project$Types_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});
var _user$project$Types$encodeEntity = function (label) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: A2(
				_user$project$Types_ops['=>'],
				'color',
				_elm_lang$core$Json_Encode$string(
					_eskimoblood$elm_color_extra$Color_Convert$colorToHex(label.color))),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$Types_ops['=>'],
					'opacity',
					_elm_lang$core$Json_Encode$float(label.opacity)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Types_ops['=>'],
						'shape',
						_elm_lang$core$Json_Encode$string(
							_elm_lang$core$Basics$toString(label.shape))),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Types$encodeNode = function (node) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: A2(
				_user$project$Types_ops['=>'],
				'id',
				_elm_lang$core$Json_Encode$int(node.id)),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$Types_ops['=>'],
					'label',
					_user$project$Types$encodeEntity(node.label)),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Types$encodeVec3 = function (vec) {
	var _p1 = _opensolid$geometry$OpenSolid_Vector3d$components(vec);
	var x = _p1._0;
	var y = _p1._1;
	var z = _p1._2;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: A2(
				_user$project$Types_ops['=>'],
				'x',
				_elm_lang$core$Json_Encode$float(x)),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$Types_ops['=>'],
					'y',
					_elm_lang$core$Json_Encode$float(y)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Types_ops['=>'],
						'z',
						_elm_lang$core$Json_Encode$float(z)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Types$encodeTransformation = function (trans) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: A2(
				_user$project$Types_ops['=>'],
				'translation',
				_user$project$Types$encodeVec3(trans.translation)),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$Types_ops['=>'],
					'scale',
					_user$project$Types$encodeVec3(trans.scale)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Types_ops['=>'],
						'rotation',
						_user$project$Types$encodeVec3(trans.rotation)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Types$encodeEdge = function (edge) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: A2(
				_user$project$Types_ops['=>'],
				'from',
				_elm_lang$core$Json_Encode$int(edge.from)),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$Types_ops['=>'],
					'to',
					_elm_lang$core$Json_Encode$int(edge.to)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Types_ops['=>'],
						'label',
						_user$project$Types$encodeTransformation(edge.label.data)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Types$encodeGraph = function (graph) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: A2(
				_user$project$Types_ops['=>'],
				'nodes',
				_elm_lang$core$Json_Encode$list(
					A2(
						_elm_lang$core$List$map,
						_user$project$Types$encodeNode,
						_elm_community$graph$Graph$nodes(graph)))),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$Types_ops['=>'],
					'edges',
					_elm_lang$core$Json_Encode$list(
						A2(
							_elm_lang$core$List$map,
							_user$project$Types$encodeEdge,
							_elm_community$graph$Graph$edges(graph)))),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Types$graphToJson = function (_p2) {
	return A2(
		_elm_lang$core$Json_Encode$encode,
		0,
		_user$project$Types$encodeGraph(_p2));
};
var _user$project$Types$modelLensGraph = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.graph;
	},
	F2(
		function (g, m) {
			return _elm_lang$core$Native_Utils.update(
				m,
				{graph: g});
		}));
var _user$project$Types$transformationLensTranslation = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.translation;
	},
	F2(
		function (tl, tf) {
			return _elm_lang$core$Native_Utils.update(
				tf,
				{translation: tl});
		}));
var _user$project$Types$transformationLensRotation = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.rotation;
	},
	F2(
		function (r, t) {
			return _elm_lang$core$Native_Utils.update(
				t,
				{rotation: r});
		}));
var _user$project$Types$transformationLensScale = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.scale;
	},
	F2(
		function (s, t) {
			return _elm_lang$core$Native_Utils.update(
				t,
				{scale: s});
		}));
var _user$project$Types$aniTransformationLensTransformation = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.data;
	},
	F2(
		function (d, at) {
			return _elm_lang$core$Native_Utils.update(
				at,
				{data: d});
		}));
var _user$project$Types$edgeLensAniTransformation = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.label;
	},
	F2(
		function (at, e) {
			return _elm_lang$core$Native_Utils.update(
				e,
				{label: at});
		}));
var _user$project$Types$edgeLensScale = A3(
	_elm_lang$core$Basics$flip,
	_arturopala$elm_monocle$Monocle_Lens$compose,
	_user$project$Types$transformationLensScale,
	A2(_arturopala$elm_monocle$Monocle_Lens$compose, _user$project$Types$edgeLensAniTransformation, _user$project$Types$aniTransformationLensTransformation));
var _user$project$Types$edgeLensRotation = A3(
	_elm_lang$core$Basics$flip,
	_arturopala$elm_monocle$Monocle_Lens$compose,
	_user$project$Types$transformationLensRotation,
	A2(_arturopala$elm_monocle$Monocle_Lens$compose, _user$project$Types$edgeLensAniTransformation, _user$project$Types$aniTransformationLensTransformation));
var _user$project$Types$edgeLensTranslation = A3(
	_elm_lang$core$Basics$flip,
	_arturopala$elm_monocle$Monocle_Lens$compose,
	_user$project$Types$transformationLensTranslation,
	A2(_arturopala$elm_monocle$Monocle_Lens$compose, _user$project$Types$edgeLensAniTransformation, _user$project$Types$aniTransformationLensTransformation));
var _user$project$Types$elementLensShape = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.shape;
	},
	F2(
		function (s, e) {
			return _elm_lang$core$Native_Utils.update(
				e,
				{shape: s});
		}));
var _user$project$Types$elementLensOpacity = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.opacity;
	},
	F2(
		function (o, e) {
			return _elm_lang$core$Native_Utils.update(
				e,
				{opacity: o});
		}));
var _user$project$Types$elementLensColor = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.color;
	},
	F2(
		function (c, e) {
			return _elm_lang$core$Native_Utils.update(
				e,
				{color: c});
		}));
var _user$project$Types$nodeLensEntity = A2(
	_arturopala$elm_monocle$Monocle_Lens$Lens,
	function (_) {
		return _.label;
	},
	F2(
		function (l, n) {
			return _elm_lang$core$Native_Utils.update(
				n,
				{label: l});
		}));
var _user$project$Types$nodeLensColor = A2(_arturopala$elm_monocle$Monocle_Lens$compose, _user$project$Types$nodeLensEntity, _user$project$Types$elementLensColor);
var _user$project$Types$nodeLensOpacity = A2(_arturopala$elm_monocle$Monocle_Lens$compose, _user$project$Types$nodeLensEntity, _user$project$Types$elementLensOpacity);
var _user$project$Types$nodeLensShape = A2(_arturopala$elm_monocle$Monocle_Lens$compose, _user$project$Types$nodeLensEntity, _user$project$Types$elementLensShape);
var _user$project$Types$vector3dZero = _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
	{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0});
var _user$project$Types$emptyTransformation = {
	translation: _user$project$Types$vector3dZero,
	scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
		{ctor: '_Tuple3', _0: 1, _1: 1, _2: 1}),
	rotation: _user$project$Types$vector3dZero
};
var _user$project$Types$fakeTransformation = {
	data: _user$project$Types$emptyTransformation,
	isAnimating: false,
	animate: function (_p3) {
		return _elm_lang$core$Basics$identity;
	}
};
var _user$project$Types$noAnimation = function (data) {
	return {
		data: data,
		isAnimating: false,
		animate: function (_p4) {
			return _elm_lang$core$Basics$identity;
		}
	};
};
var _user$project$Types_ops = _user$project$Types_ops || {};
_user$project$Types_ops['%%'] = F2(
	function (small, big) {
		return _elm_lang$core$Basics$toFloat(
			A2(
				_elm_lang$core$Basics_ops['%'],
				_elm_lang$core$Basics$round(small),
				_elm_lang$core$Basics$round(big)));
	});
var _user$project$Types$vec3Set_ = F2(
	function (tupleMap, new_) {
		return function (_p5) {
			return _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
				A2(
					tupleMap,
					function (_p6) {
						return new_;
					},
					_opensolid$geometry$OpenSolid_Vector3d$components(_p5)));
		};
	});
var _user$project$Types$vec3SetX = _user$project$Types$vec3Set_(_Fresheyeball$elm_tuple_extra$Tuple3$mapFirst);
var _user$project$Types$vec3SetY = _user$project$Types$vec3Set_(_Fresheyeball$elm_tuple_extra$Tuple3$mapSecond);
var _user$project$Types$vec3SetZ = _user$project$Types$vec3Set_(_Fresheyeball$elm_tuple_extra$Tuple3$mapThird);
var _user$project$Types$vec3Set = function (xyorz) {
	var _p7 = xyorz;
	switch (_p7.ctor) {
		case 'X':
			return _user$project$Types$vec3SetX;
		case 'Y':
			return _user$project$Types$vec3SetY;
		default:
			return _user$project$Types$vec3SetZ;
	}
};
var _user$project$Types$Entity = F3(
	function (a, b, c) {
		return {shape: a, color: b, opacity: c};
	});
var _user$project$Types$Transformation = F3(
	function (a, b, c) {
		return {translation: a, scale: b, rotation: c};
	});
var _user$project$Types$transformationDecoder = A4(
	_elm_lang$core$Json_Decode$map3,
	_user$project$Types$Transformation,
	A2(_elm_lang$core$Json_Decode$field, 'translation', _user$project$Types$decodeVec3),
	A2(_elm_lang$core$Json_Decode$field, 'scale', _user$project$Types$decodeVec3),
	A2(_elm_lang$core$Json_Decode$field, 'rotation', _user$project$Types$decodeVec3));
var _user$project$Types$edgeDecoder = A4(
	_elm_lang$core$Json_Decode$map3,
	_elm_community$graph$Graph$Edge,
	A2(_elm_lang$core$Json_Decode$field, 'from', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'to', _elm_lang$core$Json_Decode$int),
	A2(
		_elm_lang$core$Json_Decode$field,
		'label',
		A2(_elm_lang$core$Json_Decode$map, _user$project$Types$noAnimation, _user$project$Types$transformationDecoder)));
var _user$project$Types$Animated = F3(
	function (a, b, c) {
		return {data: a, animate: b, isAnimating: c};
	});
var _user$project$Types$Model = F6(
	function (a, b, c, d, e, f) {
		return {time: a, graph: b, examples: c, rootId: d, editing: e, menuHover: f};
	});
var _user$project$Types$TransformUtils = F4(
	function (a, b, c, d) {
		return {edgeLens: a, min: b, max: c, step: d};
	});
var _user$project$Types$transformUtils = function (attribute) {
	var _p8 = attribute;
	switch (_p8.ctor) {
		case 'Translation':
			return A4(_user$project$Types$TransformUtils, _user$project$Types$edgeLensTranslation, -4, 4, 0.1);
		case 'Scale':
			return A4(_user$project$Types$TransformUtils, _user$project$Types$edgeLensScale, 0, 2, 1.0e-2);
		default:
			return A4(_user$project$Types$TransformUtils, _user$project$Types$edgeLensRotation, 0, 360, 1);
	}
};
var _user$project$Types$AlmostGraph = F2(
	function (a, b) {
		return {nodes: a, edges: b};
	});
var _user$project$Types$Cylinder = {ctor: 'Cylinder'};
var _user$project$Types$Sphere = {ctor: 'Sphere'};
var _user$project$Types$Box = {ctor: 'Box'};
var _user$project$Types$entityDecoder = A4(
	_elm_lang$core$Json_Decode$map3,
	_user$project$Types$Entity,
	A2(
		_elm_lang$core$Json_Decode$field,
		'shape',
		A2(
			_elm_lang$core$Json_Decode$map,
			function (_p9) {
				return _user$project$Types$Box;
			},
			_elm_lang$core$Json_Decode$string)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'color',
		A2(_elm_lang$core$Json_Decode$map, _user$project$Types$hexToColorSafe, _elm_lang$core$Json_Decode$string)),
	A2(_elm_lang$core$Json_Decode$field, 'opacity', _elm_lang$core$Json_Decode$float));
var _user$project$Types$nodeDecoder = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_community$graph$Graph$Node,
	A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'label', _user$project$Types$entityDecoder));
var _user$project$Types$graphDecoder = A3(
	_elm_lang$core$Json_Decode$map2,
	_user$project$Types$AlmostGraph,
	A2(
		_elm_lang$core$Json_Decode$field,
		'nodes',
		_elm_lang$core$Json_Decode$list(_user$project$Types$nodeDecoder)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'edges',
		_elm_lang$core$Json_Decode$list(_user$project$Types$edgeDecoder)));
var _user$project$Types$decodeGraph = function (_p10) {
	return A2(
		_elm_lang$core$Result$map,
		function (_p11) {
			var _p12 = _p11;
			return A2(_elm_community$graph$Graph$fromNodesAndEdges, _p12.nodes, _p12.edges);
		},
		A2(_elm_lang$core$Json_Decode$decodeString, _user$project$Types$graphDecoder, _p10));
};
var _user$project$Types$Edge = F2(
	function (a, b) {
		return {ctor: 'Edge', _0: a, _1: b};
	});
var _user$project$Types$Node = function (a) {
	return {ctor: 'Node', _0: a};
};
var _user$project$Types$EditEdgeMenu = {ctor: 'EditEdgeMenu'};
var _user$project$Types$NewEdgeMenu = {ctor: 'NewEdgeMenu'};
var _user$project$Types$NewNodeMenu = {ctor: 'NewNodeMenu'};
var _user$project$Types$ExamplesMenu = {ctor: 'ExamplesMenu'};
var _user$project$Types$NoMenu = {ctor: 'NoMenu'};
var _user$project$Types$Toggle = {ctor: 'Toggle'};
var _user$project$Types$Hide = {ctor: 'Hide'};
var _user$project$Types$Show = {ctor: 'Show'};
var _user$project$Types$NoOp = {ctor: 'NoOp'};
var _user$project$Types$ChangeMenuHover = F2(
	function (a, b) {
		return {ctor: 'ChangeMenuHover', _0: a, _1: b};
	});
var _user$project$Types$Load = function (a) {
	return {ctor: 'Load', _0: a};
};
var _user$project$Types$Save = {ctor: 'Save'};
var _user$project$Types$EdgeFromTo = F4(
	function (a, b, c, d) {
		return {ctor: 'EdgeFromTo', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Types$ChangeTransformation = F5(
	function (a, b, c, d, e) {
		return {ctor: 'ChangeTransformation', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _user$project$Types$ChangeOpacity = F2(
	function (a, b) {
		return {ctor: 'ChangeOpacity', _0: a, _1: b};
	});
var _user$project$Types$ChangeColor = F2(
	function (a, b) {
		return {ctor: 'ChangeColor', _0: a, _1: b};
	});
var _user$project$Types$NewEdge = F2(
	function (a, b) {
		return {ctor: 'NewEdge', _0: a, _1: b};
	});
var _user$project$Types$NewNode = function (a) {
	return {ctor: 'NewNode', _0: a};
};
var _user$project$Types$Delete = function (a) {
	return {ctor: 'Delete', _0: a};
};
var _user$project$Types$Edit = function (a) {
	return {ctor: 'Edit', _0: a};
};
var _user$project$Types$Click = function (a) {
	return {ctor: 'Click', _0: a};
};
var _user$project$Types$TimeUpdate = function (a) {
	return {ctor: 'TimeUpdate', _0: a};
};
var _user$project$Types$ZoomOut = {ctor: 'ZoomOut'};
var _user$project$Types$ZoomIn = {ctor: 'ZoomIn'};
var _user$project$Types$Rotation = {ctor: 'Rotation'};
var _user$project$Types$Scale = {ctor: 'Scale'};
var _user$project$Types$Translation = {ctor: 'Translation'};
var _user$project$Types$Z = {ctor: 'Z'};
var _user$project$Types$Y = {ctor: 'Y'};
var _user$project$Types$X = {ctor: 'X'};

var _user$project$Worlds$percentOfDuration = F3(
	function (duration, ease, time) {
		return ease(
			A2(_user$project$Types_ops['%%'], time, duration) / duration);
	});
var _user$project$Worlds$graph0 = A2(
	_elm_community$graph$Graph$fromNodesAndEdges,
	{
		ctor: '::',
		_0: A2(
			_elm_community$graph$Graph$Node,
			0,
			{
				shape: _user$project$Types$Box,
				color: A3(_elm_lang$core$Color$rgb, 0, 90, 180),
				opacity: 0.75
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_community$graph$Graph$Node,
				1,
				{
					shape: _user$project$Types$Box,
					color: A3(_elm_lang$core$Color$rgb, 0, 150, 100),
					opacity: 0.5
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_community$graph$Graph$Node,
					2,
					{
						shape: _user$project$Types$Box,
						color: A3(_elm_lang$core$Color$rgb, 250, 200, 0),
						opacity: 0.8
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_community$graph$Graph$Node,
						3,
						{
							shape: _user$project$Types$Box,
							color: A3(_elm_lang$core$Color$rgb, 80, 200, 100),
							opacity: 0.9
						}),
					_1: {ctor: '[]'}
				}
			}
		}
	},
	{
		ctor: '::',
		_0: A3(
			_elm_community$graph$Graph$Edge,
			0,
			1,
			{
				data: {
					translation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
						{ctor: '_Tuple3', _0: 2, _1: -3.5, _2: 2}),
					scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
						{ctor: '_Tuple3', _0: 2.5, _1: 2.5, _2: 1.5}),
					rotation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
						{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0})
				},
				isAnimating: true,
				animate: F2(
					function (time, trans) {
						var percent = A3(_user$project$Worlds$percentOfDuration, 12000, _elm_community$easing_functions$Ease$inOutCubic, time);
						var newScaleComps = A2(
							_Fresheyeball$elm_tuple_extra$Tuple3$mapFirst,
							function (_p0) {
								return A2(
									F2(
										function (x, y) {
											return x + y;
										}),
									1.5,
									A2(
										F2(
											function (x, y) {
												return x * y;
											}),
										percent,
										_p0));
							},
							_opensolid$geometry$OpenSolid_Vector3d$components(trans.scale));
						return _elm_lang$core$Native_Utils.update(
							trans,
							{
								scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(newScaleComps)
							});
					})
			}),
		_1: {
			ctor: '::',
			_0: A3(
				_elm_community$graph$Graph$Edge,
				2,
				2,
				{
					data: {
						translation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
							{ctor: '_Tuple3', _0: -3, _1: -0.5, _2: -4}),
						scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
							{ctor: '_Tuple3', _0: 1.4, _1: 3, _2: 0.5}),
						rotation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
							{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0})
					},
					isAnimating: true,
					animate: F2(
						function (time, trans) {
							var percent = A3(_user$project$Worlds$percentOfDuration, 1000, _elm_community$easing_functions$Ease$inOutExpo, time);
							var angle = percent * 360;
							var newScaleComps = A2(
								_Fresheyeball$elm_tuple_extra$Tuple3$mapSecond,
								function (_p1) {
									return A2(
										F2(
											function (x, y) {
												return x + y;
											}),
										1,
										A2(
											F2(
												function (x, y) {
													return x * y;
												}),
											percent * 1,
											_p1));
								},
								_opensolid$geometry$OpenSolid_Vector3d$components(trans.scale));
							return _elm_lang$core$Native_Utils.update(
								trans,
								{
									scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(newScaleComps)
								});
						})
				}),
			_1: {
				ctor: '::',
				_0: A3(
					_elm_community$graph$Graph$Edge,
					2,
					0,
					{
						data: {
							translation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
								{ctor: '_Tuple3', _0: 1, _1: -5, _2: 1}),
							scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
								{ctor: '_Tuple3', _0: 2.6, _1: 1, _2: 2}),
							rotation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
								{ctor: '_Tuple3', _0: 0, _1: 30, _2: 0})
						},
						isAnimating: false,
						animate: function (_p2) {
							return _elm_lang$core$Basics$identity;
						}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_elm_community$graph$Graph$Edge,
						1,
						2,
						{
							data: {
								translation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
									{ctor: '_Tuple3', _0: 0.5, _1: -3.5, _2: 2}),
								scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
									{ctor: '_Tuple3', _0: 0.1, _1: 3.5, _2: 1}),
								rotation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
									{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0})
							},
							isAnimating: false,
							animate: F2(
								function (time, trans) {
									var percent = A3(_user$project$Worlds$percentOfDuration, 16000, _elm_community$easing_functions$Ease$inOutCubic, time);
									var angle = percent * 360;
									var newRotationComps = A2(
										_Fresheyeball$elm_tuple_extra$Tuple3$mapSecond,
										A2(
											_elm_lang$core$Basics$flip,
											F2(
												function (x, y) {
													return x - y;
												}),
											angle),
										_opensolid$geometry$OpenSolid_Vector3d$components(trans.rotation));
									return _elm_lang$core$Native_Utils.update(
										trans,
										{
											rotation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(newRotationComps)
										});
								})
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_community$graph$Graph$Edge,
							2,
							3,
							{
								data: {
									translation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
										{ctor: '_Tuple3', _0: 3, _1: -2, _2: 1}),
									scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
										{ctor: '_Tuple3', _0: 2.6, _1: 4, _2: 2}),
									rotation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
										{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0})
								},
								isAnimating: false,
								animate: function (_p3) {
									return _elm_lang$core$Basics$identity;
								}
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_elm_community$graph$Graph$Edge,
								3,
								1,
								{
									data: {
										translation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
											{ctor: '_Tuple3', _0: 0, _1: -3, _2: 1}),
										scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
											{ctor: '_Tuple3', _0: 0.6, _1: 0.5, _2: 2}),
										rotation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
											{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0})
									},
									isAnimating: false,
									animate: function (_p4) {
										return _elm_lang$core$Basics$identity;
									}
								}),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	});
var _user$project$Worlds$graph1 = A2(
	_elm_community$graph$Graph$fromNodesAndEdges,
	{
		ctor: '::',
		_0: A2(
			_elm_community$graph$Graph$Node,
			0,
			{
				shape: _user$project$Types$Box,
				color: A3(_elm_lang$core$Color$rgb, 0, 90, 180),
				opacity: 0.15
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_community$graph$Graph$Node,
				1,
				{
					shape: _user$project$Types$Box,
					color: A3(_elm_lang$core$Color$rgb, 0, 150, 100),
					opacity: 0.25
				}),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: A3(
			_elm_community$graph$Graph$Edge,
			0,
			1,
			_user$project$Types$noAnimation(
				{
					translation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
						{ctor: '_Tuple3', _0: 2, _1: -0.5, _2: 0}),
					scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
						{ctor: '_Tuple3', _0: 0.5, _1: 0.25, _2: 1}),
					rotation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
						{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0})
				})),
		_1: {
			ctor: '::',
			_0: A3(
				_elm_community$graph$Graph$Edge,
				1,
				0,
				_user$project$Types$noAnimation(
					{
						translation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
							{ctor: '_Tuple3', _0: 0, _1: -0.5, _2: 1}),
						scale: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
							{ctor: '_Tuple3', _0: 0.6, _1: 1, _2: 0.2}),
						rotation: _opensolid$geometry$OpenSolid_Geometry_Types$Vector3d(
							{ctor: '_Tuple3', _0: 0, _1: 30, _2: 0})
					})),
			_1: {ctor: '[]'}
		}
	});
var _user$project$Worlds$jsonExamples = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: A2(_user$project$Types_ops['=>'], 'Simple', '{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#005ab4\",\"opacity\":0.82,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#009664\",\"opacity\":0.55,\"shape\":\"Box\"}}],\"edges\":[{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.5,\"z\":1},\"scale\":{\"x\":0.6,\"y\":1,\"z\":0.2},\"rotation\":{\"x\":0,\"y\":30,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":-1.5,\"y\":0.1,\"z\":-0.2},\"scale\":{\"x\":1.14,\"y\":0.94,\"z\":1.9},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}'),
		_1: {
			ctor: '::',
			_0: A2(_user$project$Types_ops['=>'], 'Wavy Thing', '{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#008040\",\"opacity\":0.24,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#e6e6e6\",\"opacity\":0.22,\"shape\":\"Box\"}},{\"id\":2,\"label\":{\"color\":\"#008080\",\"opacity\":0.6,\"shape\":\"Box\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":1,\"z\":0},\"scale\":{\"x\":1,\"y\":1.34,\"z\":1.08},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.2,\"z\":0.2},\"scale\":{\"x\":0.6,\"y\":1,\"z\":0.48},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":2.4,\"y\":-1,\"z\":-1.6},\"scale\":{\"x\":0.5,\"y\":1.09,\"z\":0.31},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":-0.1,\"y\":-0.1,\"z\":0.4},\"scale\":{\"x\":1.14,\"y\":0.67,\"z\":1.13},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}'),
			_1: {
				ctor: '::',
				_0: A2(_user$project$Types_ops['=>'], 'Sea Shell', '{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#00964e\",\"opacity\":0.53,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#ff8000\",\"opacity\":0.17,\"shape\":\"Box\"}},{\"id\":2,\"label\":{\"color\":\"#00ff80\",\"opacity\":0.17,\"shape\":\"Box\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.1,\"z\":0},\"scale\":{\"x\":0.68,\"y\":1.32,\"z\":0.78},\"rotation\":{\"x\":91,\"y\":301,\"z\":286}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":0.2,\"z\":0.2},\"scale\":{\"x\":0.6,\"y\":1,\"z\":0.48},\"rotation\":{\"x\":360,\"y\":360,\"z\":360}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":0.6,\"y\":0.2,\"z\":0.1},\"scale\":{\"x\":1.33,\"y\":1.48,\"z\":0.45},\"rotation\":{\"x\":255,\"y\":184,\"z\":166}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":0,\"y\":-0.1,\"z\":0.4},\"scale\":{\"x\":1.45,\"y\":0.69,\"z\":0.9},\"rotation\":{\"x\":0,\"y\":0,\"z\":346}}}]}'),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Types_ops['=>'], 'Gathering', '{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#1d1f4d\",\"opacity\":0.24,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#e6e6e6\",\"opacity\":0.22,\"shape\":\"Box\"}},{\"id\":2,\"label\":{\"color\":\"#d35ac4\",\"opacity\":0.6,\"shape\":\"Box\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":1,\"z\":0},\"scale\":{\"x\":1,\"y\":1.18,\"z\":1.08},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":1.2,\"z\":-0.9},\"scale\":{\"x\":0.47,\"y\":0.66,\"z\":0.8},\"rotation\":{\"x\":0,\"y\":0,\"z\":179}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":2.4,\"y\":-1,\"z\":-1.6},\"scale\":{\"x\":0.47,\"y\":1.09,\"z\":0.8},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":0,\"y\":0.9,\"z\":0.7},\"scale\":{\"x\":1.24,\"y\":0.67,\"z\":1.13},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}'),
					_1: {
						ctor: '::',
						_0: A2(_user$project$Types_ops['=>'], 'Maybe Duck Tower', '{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#434f80\",\"opacity\":0.8,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#7d740f\",\"opacity\":0.45,\"shape\":\"Box\"}},{\"id\":2,\"label\":{\"color\":\"#008080\",\"opacity\":0.6,\"shape\":\"Box\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":0.6,\"z\":-0.1},\"scale\":{\"x\":1,\"y\":1.34,\"z\":1.08},\"rotation\":{\"x\":0,\"y\":349,\"z\":0}}},{\"from\":1,\"to\":1,\"label\":{\"translation\":{\"x\":0.4,\"y\":-0.6,\"z\":0.7},\"scale\":{\"x\":0.85,\"y\":0.6,\"z\":1.15},\"rotation\":{\"x\":0,\"y\":263,\"z\":0}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.2,\"z\":0.2},\"scale\":{\"x\":0.6,\"y\":1.09,\"z\":0.48},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":2.4,\"y\":-1.4,\"z\":-1.6},\"scale\":{\"x\":1.12,\"y\":0.5,\"z\":1.34},\"rotation\":{\"x\":0,\"y\":311,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":-0.4,\"y\":2.8,\"z\":0.4},\"scale\":{\"x\":0.96,\"y\":1.5,\"z\":0.66},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}'),
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});

var _user$project$MyStyles$noShadow = {
	offset: {ctor: '_Tuple2', _0: 0, _1: 0},
	size: 0,
	blur: 0,
	color: _elm_lang$core$Color$black
};
var _user$project$MyStyles$deleteRed = A3(_elm_lang$core$Color$rgb, 220, 100, 150);
var _user$project$MyStyles$babyElectric = A3(_elm_lang$core$Color$rgb, 180, 220, 255);
var _user$project$MyStyles$scaled = A2(_mdgriffith$style_elements$Style_Scale$modular, 16, 1.05);
var _user$project$MyStyles_ops = _user$project$MyStyles_ops || {};
_user$project$MyStyles_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});
var _user$project$MyStyles$zIndex = function (n) {
	return {
		ctor: '::',
		_0: A2(
			_user$project$MyStyles_ops['=>'],
			'z-index',
			_elm_lang$core$Basics$toString(n)),
		_1: {ctor: '[]'}
	};
};
var _user$project$MyStyles$wasdOverlay = {
	ctor: '::',
	_0: A2(_user$project$MyStyles_ops['=>'], 'z-index', '10'),
	_1: {
		ctor: '::',
		_0: A2(_user$project$MyStyles_ops['=>'], 'font-size', '20px'),
		_1: {
			ctor: '::',
			_0: A2(_user$project$MyStyles_ops['=>'], 'font-weight', '200'),
			_1: {
				ctor: '::',
				_0: A2(_user$project$MyStyles_ops['=>'], 'font-family', '\"Courier New\", Courier, monospace'),
				_1: {
					ctor: '::',
					_0: A2(_user$project$MyStyles_ops['=>'], 'color', 'white'),
					_1: {ctor: '[]'}
				}
			}
		}
	}
};
var _user$project$MyStyles$colorPicker = {
	ctor: '::',
	_0: A2(_user$project$MyStyles_ops['=>'], 'width', '100%'),
	_1: {ctor: '[]'}
};
var _user$project$MyStyles$opacitySlider = function (color) {
	return {
		ctor: '::',
		_0: A2(
			_user$project$MyStyles_ops['=>'],
			'background',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'linear-gradient(to right, rgba(0,0,0,0), ',
				_eskimoblood$elm_color_extra$Color_Convert$colorToCssRgba(color))),
		_1: {ctor: '[]'}
	};
};
var _user$project$MyStyles$slider = {
	ctor: '::',
	_0: A2(_user$project$MyStyles_ops['=>'], 'width', '100%'),
	_1: {
		ctor: '::',
		_0: A2(_user$project$MyStyles_ops['=>'], '-webkit-appearance', 'none'),
		_1: {
			ctor: '::',
			_0: A2(_user$project$MyStyles_ops['=>'], 'height', '4px'),
			_1: {ctor: '[]'}
		}
	}
};
var _user$project$MyStyles$WasdOverlay = {ctor: 'WasdOverlay'};
var _user$project$MyStyles$PropertyLabel = {ctor: 'PropertyLabel'};
var _user$project$MyStyles$DropdownItem = {ctor: 'DropdownItem'};
var _user$project$MyStyles$Dropdown = {ctor: 'Dropdown'};
var _user$project$MyStyles$NewButton = {ctor: 'NewButton'};
var _user$project$MyStyles$DeleteButton = {ctor: 'DeleteButton'};
var _user$project$MyStyles$Hairline = {ctor: 'Hairline'};
var _user$project$MyStyles$Badge = {ctor: 'Badge'};
var _user$project$MyStyles$NavLink = {ctor: 'NavLink'};
var _user$project$MyStyles$Nav = {ctor: 'Nav'};
var _user$project$MyStyles$Header = {ctor: 'Header'};
var _user$project$MyStyles$SelectorItem = {ctor: 'SelectorItem'};
var _user$project$MyStyles$Sidebar = {ctor: 'Sidebar'};
var _user$project$MyStyles$Main = {ctor: 'Main'};
var _user$project$MyStyles$None = {ctor: 'None'};
var _user$project$MyStyles$Title = {ctor: 'Title'};
var _user$project$MyStyles$NavMenu = {ctor: 'NavMenu'};
var _user$project$MyStyles$Selected = {ctor: 'Selected'};
var _user$project$MyStyles$stylesheet = _mdgriffith$style_elements$Style$styleSheet(
	{
		ctor: '::',
		_0: A2(
			_mdgriffith$style_elements$Style$style,
			_user$project$MyStyles$None,
			{ctor: '[]'}),
		_1: {
			ctor: '::',
			_0: A2(
				_mdgriffith$style_elements$Style$style,
				_user$project$MyStyles$Main,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Style_Font$typeface(
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Font$font('Gill Sans'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Style_Font$font('Trebuchet MS'),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Style_Font$font('helvetica'),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Style_Font$font('sans-serif'),
										_1: {ctor: '[]'}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Font$light,
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Color$text(_elm_lang$core$Color$lightCharcoal),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Style$cursor('default'),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Style$focus(
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_mdgriffith$style_elements$Style$style,
					_user$project$MyStyles$Sidebar,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Color$background(_elm_lang$core$Color$lightGrey),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Shadow$box(
								{
									offset: {ctor: '_Tuple2', _0: 10, _1: 0},
									blur: 30,
									size: -25,
									color: _elm_lang$core$Color$black
								}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_mdgriffith$style_elements$Style$style,
						_user$project$MyStyles$SelectorItem,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Color$background(_elm_lang$core$Color$lightGrey),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Style$hover(
									{
										ctor: '::',
										_0: _mdgriffith$style_elements$Style_Color$background(_elm_lang$core$Color$grey),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_mdgriffith$style_elements$Style$variation,
										_user$project$MyStyles$Selected,
										{
											ctor: '::',
											_0: _mdgriffith$style_elements$Style_Color$background(
												_elm_lang$core$Color$greyscale(0.7)),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Style$hover(
													{
														ctor: '::',
														_0: _mdgriffith$style_elements$Style_Color$background(
															_elm_lang$core$Color$greyscale(0.7)),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Style$cursor('pointer'),
										_1: {ctor: '[]'}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_mdgriffith$style_elements$Style$style,
							_user$project$MyStyles$Badge,
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Style_Border$rounded(2),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Style_Shadow$simple,
									_1: {
										ctor: '::',
										_0: A2(
											_mdgriffith$style_elements$Style$pseudo,
											'active',
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Style_Color$background(_elm_lang$core$Color$lightCharcoal),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Style_Shadow$box(_user$project$MyStyles$noShadow),
													_1: {ctor: '[]'}
												}
											}),
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_mdgriffith$style_elements$Style$style,
								_user$project$MyStyles$Header,
								{
									ctor: '::',
									_0: _mdgriffith$style_elements$Style_Font$size(
										_user$project$MyStyles$scaled(3)),
									_1: {
										ctor: '::',
										_0: A2(
											_mdgriffith$style_elements$Style$variation,
											_user$project$MyStyles$Title,
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Style_Font$size(
													_user$project$MyStyles$scaled(10)),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_mdgriffith$style_elements$Style$style,
									_user$project$MyStyles$Nav,
									{
										ctor: '::',
										_0: _mdgriffith$style_elements$Style_Font$alignRight,
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Style_Color$background(
												_elm_lang$core$Color$greyscale(0.75)),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Style_Color$text(_elm_lang$core$Color$white),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_mdgriffith$style_elements$Style$style,
										_user$project$MyStyles$NavLink,
										{
											ctor: '::',
											_0: _mdgriffith$style_elements$Style_Font$alignRight,
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Style_Color$text(_elm_lang$core$Color$lightGrey),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Style$cursor('pointer'),
													_1: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Style$hover(
															{
																ctor: '::',
																_0: _mdgriffith$style_elements$Style_Color$background(
																	_elm_lang$core$Color$greyscale(0.7)),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_mdgriffith$style_elements$Style$style,
											_user$project$MyStyles$Hairline,
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Style_Color$border(
													A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.1)),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Style_Border$bottom(1),
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_mdgriffith$style_elements$Style$style,
												_user$project$MyStyles$DeleteButton,
												{
													ctor: '::',
													_0: _mdgriffith$style_elements$Style_Border$rounded(2),
													_1: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Style_Border$all(0),
														_1: {
															ctor: '::',
															_0: _mdgriffith$style_elements$Style_Color$background(
																_elm_lang$core$Color$greyscale(0.2)),
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Style_Color$text(_user$project$MyStyles$deleteRed),
																_1: {
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Style_Shadow$deep,
																	_1: {
																		ctor: '::',
																		_0: _mdgriffith$style_elements$Style$hover(
																			{
																				ctor: '::',
																				_0: _mdgriffith$style_elements$Style_Color$background(
																					_elm_lang$core$Color$greyscale(0.25)),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_mdgriffith$style_elements$Style$pseudo,
																				'active',
																				{
																					ctor: '::',
																					_0: _mdgriffith$style_elements$Style_Shadow$box(_user$project$MyStyles$noShadow),
																					_1: {
																						ctor: '::',
																						_0: _mdgriffith$style_elements$Style_Color$background(
																							_elm_lang$core$Color$greyscale(0.3)),
																						_1: {ctor: '[]'}
																					}
																				}),
																			_1: {
																				ctor: '::',
																				_0: _mdgriffith$style_elements$Style_Font$typeface(
																					{
																						ctor: '::',
																						_0: _mdgriffith$style_elements$Style_Font$font('Gill Sans'),
																						_1: {
																							ctor: '::',
																							_0: _mdgriffith$style_elements$Style_Font$font('Trebuchet MS'),
																							_1: {
																								ctor: '::',
																								_0: _mdgriffith$style_elements$Style_Font$font('helvetica'),
																								_1: {
																									ctor: '::',
																									_0: _mdgriffith$style_elements$Style_Font$font('sans-serif'),
																									_1: {ctor: '[]'}
																								}
																							}
																						}
																					}),
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_mdgriffith$style_elements$Style$style,
													_user$project$MyStyles$NewButton,
													{
														ctor: '::',
														_0: _mdgriffith$style_elements$Style_Border$rounded(2),
														_1: {
															ctor: '::',
															_0: _mdgriffith$style_elements$Style_Shadow$simple,
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Style_Border$all(0),
																_1: {
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Style_Color$text(_elm_lang$core$Color$white),
																	_1: {
																		ctor: '::',
																		_0: _mdgriffith$style_elements$Style_Color$background(
																			_elm_lang$core$Color$greyscale(0.2)),
																		_1: {
																			ctor: '::',
																			_0: _mdgriffith$style_elements$Style$hover(
																				{
																					ctor: '::',
																					_0: _mdgriffith$style_elements$Style_Color$background(
																						_elm_lang$core$Color$greyscale(0.25)),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_mdgriffith$style_elements$Style$pseudo,
																					'active',
																					{
																						ctor: '::',
																						_0: _mdgriffith$style_elements$Style_Color$background(
																							_elm_lang$core$Color$greyscale(0.3)),
																						_1: {
																							ctor: '::',
																							_0: _mdgriffith$style_elements$Style_Shadow$box(_user$project$MyStyles$noShadow),
																							_1: {ctor: '[]'}
																						}
																					}),
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_mdgriffith$style_elements$Style$style,
														_user$project$MyStyles$Dropdown,
														{
															ctor: '::',
															_0: _mdgriffith$style_elements$Style_Color$background(
																_elm_lang$core$Color$greyscale(0.75)),
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Style_Shadow$deep,
																_1: {
																	ctor: '::',
																	_0: A2(_mdgriffith$style_elements$Style$prop, 'z-index', '100'),
																	_1: {ctor: '[]'}
																}
															}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_mdgriffith$style_elements$Style$style,
															_user$project$MyStyles$DropdownItem,
															{
																ctor: '::',
																_0: _mdgriffith$style_elements$Style_Color$text(_elm_lang$core$Color$lightGrey),
																_1: {
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Style_Color$background(
																		_elm_lang$core$Color$greyscale(0.7)),
																	_1: {
																		ctor: '::',
																		_0: _mdgriffith$style_elements$Style$hover(
																			{
																				ctor: '::',
																				_0: _mdgriffith$style_elements$Style_Color$background(
																					_elm_lang$core$Color$greyscale(0.65)),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_mdgriffith$style_elements$Style$variation,
																				_user$project$MyStyles$NavMenu,
																				{
																					ctor: '::',
																					_0: _mdgriffith$style_elements$Style_Color$background(
																						_elm_lang$core$Color$greyscale(0.7)),
																					_1: {
																						ctor: '::',
																						_0: _mdgriffith$style_elements$Style$hover(
																							{
																								ctor: '::',
																								_0: _mdgriffith$style_elements$Style_Color$background(
																									_elm_lang$core$Color$greyscale(0.65)),
																								_1: {ctor: '[]'}
																							}),
																						_1: {ctor: '[]'}
																					}
																				}),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_mdgriffith$style_elements$Style$style,
																_user$project$MyStyles$PropertyLabel,
																{
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Style_Font$weight(400),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_mdgriffith$style_elements$Style$style,
																	_user$project$MyStyles$WasdOverlay,
																	{
																		ctor: '::',
																		_0: _mdgriffith$style_elements$Style_Font$size(
																			_user$project$MyStyles$scaled(3)),
																		_1: {
																			ctor: '::',
																			_0: _mdgriffith$style_elements$Style_Font$weight(300),
																			_1: {
																				ctor: '::',
																				_0: _mdgriffith$style_elements$Style_Font$typeface(
																					{
																						ctor: '::',
																						_0: _mdgriffith$style_elements$Style_Font$font('Courier New'),
																						_1: {
																							ctor: '::',
																							_0: _mdgriffith$style_elements$Style_Font$font('Courier'),
																							_1: {
																								ctor: '::',
																								_0: _mdgriffith$style_elements$Style_Font$font('monospace'),
																								_1: {ctor: '[]'}
																							}
																						}
																					}),
																				_1: {
																					ctor: '::',
																					_0: _mdgriffith$style_elements$Style_Color$text(_elm_lang$core$Color$white),
																					_1: {
																						ctor: '::',
																						_0: A2(_mdgriffith$style_elements$Style$prop, 'z-index', '10'),
																						_1: {ctor: '[]'}
																					}
																				}
																			}
																		}
																	}),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});

var _user$project$View$uncurry3 = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return A3(func, _p1._0, _p1._1, _p1._2);
	});
var _user$project$View$alphaChar = function (id) {
	return A3(
		_elm_community$maybe_extra$Maybe_Extra$unwrap,
		'Z',
		_elm_lang$core$String$fromChar,
		A2(
			_elm_lang$core$Array$get,
			id,
			_elm_lang$core$Array$fromList(
				_elm_lang$core$String$toList('abcdefghijklmnopqrstuvwxyz'))));
};
var _user$project$View$backgroundColor = A3(_elm_lang$core$Color$rgb, 100, 120, 160);
var _user$project$View$viewSaveButton = A3(
	_mdgriffith$style_elements$Element$button,
	_user$project$MyStyles$NewButton,
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Element_Events$onClick(_user$project$Types$Save),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$alignBottom,
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$center,
				_1: {ctor: '[]'}
			}
		}
	},
	_mdgriffith$style_elements$Element$text('Save'));
var _user$project$View$viewEntity = F3(
	function (model, ancestors, nodeCtx) {
		var viewChild = (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(ancestors),
			10) < 0) ? A2(
			_user$project$View$viewEntity,
			model,
			{ctor: '::', _0: nodeCtx.node.id, _1: ancestors}) : function (_p2) {
			return A2(
				_halfzebra$elm_aframe$AFrame_Primitives$box,
				{
					ctor: '::',
					_0: _halfzebra$elm_aframe$AFrame_Primitives_Attributes$width(0),
					_1: {
						ctor: '::',
						_0: _halfzebra$elm_aframe$AFrame_Primitives_Attributes$height(0),
						_1: {ctor: '[]'}
					}
				},
				{ctor: '[]'});
		};
		var children = _elm_community$maybe_extra$Maybe_Extra$values(
			A2(
				_elm_lang$core$List$map,
				A2(_elm_lang$core$Basics$flip, _elm_community$graph$Graph$get, model.graph),
				_elm_community$intdict$IntDict$keys(nodeCtx.outgoing)));
		var t = A2(
			_elm_lang$core$Maybe$withDefault,
			_user$project$Types$emptyTransformation,
			A2(
				_elm_lang$core$Maybe$andThen,
				function (parentId) {
					return A2(
						_elm_lang$core$Maybe$map,
						function (at) {
							return (at.isAnimating ? at.animate(model.time) : _elm_lang$core$Basics$identity)(at.data);
						},
						A2(
							_elm_lang$core$Maybe$map,
							function (_) {
								return _.label;
							},
							A3(_user$project$Graph_Extra$getEdge, parentId, nodeCtx.node.id, model.graph)));
				},
				_elm_lang$core$List$head(ancestors)));
		var entity = nodeCtx.node.label;
		var lamp = function (yTranslation) {
			return A2(
				_halfzebra$elm_aframe$AFrame_Primitives_Light$light,
				{
					ctor: '::',
					_0: A3(_halfzebra$elm_aframe$AFrame_Primitives_Attributes$position, 0, yTranslation, 0),
					_1: {
						ctor: '::',
						_0: _halfzebra$elm_aframe$AFrame_Primitives_Light$type_(_halfzebra$elm_aframe$AFrame_Primitives_Light$Point),
						_1: {
							ctor: '::',
							_0: _halfzebra$elm_aframe$AFrame_Primitives_Attributes$color(entity.color),
							_1: {
								ctor: '::',
								_0: _halfzebra$elm_aframe$AFrame_Primitives_Light$intensity(0.3),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				{ctor: '[]'});
		};
		return A2(
			_halfzebra$elm_aframe$AFrame_Primitives$sphere,
			{
				ctor: '::',
				_0: A2(
					_user$project$View$uncurry3,
					_halfzebra$elm_aframe$AFrame_Primitives_Attributes$position,
					_opensolid$geometry$OpenSolid_Vector3d$components(t.translation)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$View$uncurry3,
						_halfzebra$elm_aframe$AFrame_Primitives_Attributes$scale,
						_opensolid$geometry$OpenSolid_Vector3d$components(t.scale)),
					_1: {
						ctor: '::',
						_0: A2(
							_user$project$View$uncurry3,
							_halfzebra$elm_aframe$AFrame_Primitives_Attributes$rotation,
							_opensolid$geometry$OpenSolid_Vector3d$components(t.rotation)),
						_1: {
							ctor: '::',
							_0: _halfzebra$elm_aframe$AFrame_Primitives_Attributes$color(entity.color),
							_1: {
								ctor: '::',
								_0: _halfzebra$elm_aframe$AFrame_Primitives_Attributes$opacity(entity.opacity),
								_1: {
									ctor: '::',
									_0: _halfzebra$elm_aframe$AFrame_Primitives_Attributes$shader('flat'),
									_1: {
										ctor: '::',
										_0: _halfzebra$elm_aframe$AFrame_Primitives_Attributes$height(1),
										_1: {
											ctor: '::',
											_0: _halfzebra$elm_aframe$AFrame_Primitives_Attributes$width(1),
											_1: {
												ctor: '::',
												_0: _halfzebra$elm_aframe$AFrame_Primitives_Attributes$depth(1),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(
														_user$project$Types$Click(nodeCtx.node.id)),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			A2(_elm_lang$core$List$map, viewChild, children));
	});
var _user$project$View$viewScene = function (model) {
	var rootEntityView = A2(
		_elm_lang$core$Maybe$map,
		function (e) {
			return A2(
				_halfzebra$elm_aframe$AFrame_Primitives$box,
				{
					ctor: '::',
					_0: A3(_halfzebra$elm_aframe$AFrame_Primitives_Attributes$scale, 1, 1, 1),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: e,
					_1: {ctor: '[]'}
				});
		},
		A2(
			_elm_lang$core$Maybe$map,
			A2(
				_user$project$View$viewEntity,
				model,
				{ctor: '[]'}),
			A2(_elm_community$graph$Graph$get, model.rootId, model.graph)));
	return A2(
		_halfzebra$elm_aframe$AFrame$scene,
		{
			ctor: '::',
			_0: A2(_elm_lang$html$Html_Attributes$attribute, 'embedded', 'true'),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html_Attributes$attribute,
					'fog',
					A2(
						_elm_lang$core$Basics_ops['++'],
						'type: linear; density: 0.05; color: ',
						_eskimoblood$elm_color_extra$Color_Convert$colorToHex(_user$project$View$backgroundColor))),
				_1: {ctor: '[]'}
			}
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_community$maybe_extra$Maybe_Extra$toList(rootEntityView),
			{
				ctor: '::',
				_0: A2(
					_halfzebra$elm_aframe$AFrame_Primitives$sky,
					{ctor: '[]'},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_halfzebra$elm_aframe$AFrame_Primitives_Light$light,
						{
							ctor: '::',
							_0: _halfzebra$elm_aframe$AFrame_Primitives_Light$type_(_halfzebra$elm_aframe$AFrame_Primitives_Light$Ambient),
							_1: {
								ctor: '::',
								_0: A3(_halfzebra$elm_aframe$AFrame_Primitives_Attributes$position, 20, 100, 0),
								_1: {ctor: '[]'}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(
							_halfzebra$elm_aframe$AFrame_Primitives_Light$light,
							{
								ctor: '::',
								_0: _halfzebra$elm_aframe$AFrame_Primitives_Light$type_(_halfzebra$elm_aframe$AFrame_Primitives_Light$Directional),
								_1: {
									ctor: '::',
									_0: A3(_halfzebra$elm_aframe$AFrame_Primitives_Attributes$position, 200, 200, 200),
									_1: {ctor: '[]'}
								}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_halfzebra$elm_aframe$AFrame_Primitives_Camera$camera,
								{
									ctor: '::',
									_0: A3(_halfzebra$elm_aframe$AFrame_Primitives_Attributes$position, 0, 0, 10),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};
var _user$project$View$viewSceneContainer = function (model) {
	return A3(
		_mdgriffith$style_elements$Element$row,
		_user$project$MyStyles$None,
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$height(_mdgriffith$style_elements$Element_Attributes$fill),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element$html(
				_user$project$View$viewScene(model)),
			_1: {
				ctor: '::',
				_0: A3(
					_mdgriffith$style_elements$Element$row,
					_user$project$MyStyles$WasdOverlay,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$alignBottom,
						_1: {
							ctor: '::',
							_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 20, 10),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$width(
									_mdgriffith$style_elements$Element_Attributes$percent(100)),
								_1: {ctor: '[]'}
							}
						}
					},
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element$text('w↑ a← s↓ d→'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$View$viewNodeBadge = F4(
	function (model, node, size, attrs) {
		return A3(
			_mdgriffith$style_elements$Element$el,
			_user$project$MyStyles$Badge,
			A2(
				_elm_lang$core$Basics_ops['++'],
				attrs,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'backgroundColor',
								_1: _eskimoblood$elm_color_extra$Color_Convert$colorToHex(node.label.color)
							},
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$padding(4),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$width(
								_mdgriffith$style_elements$Element_Attributes$px(size)),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$height(
									_mdgriffith$style_elements$Element_Attributes$px(size)),
								_1: {ctor: '[]'}
							}
						}
					}
				}),
			_mdgriffith$style_elements$Element$html(
				A2(
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'color',
									_1: _eskimoblood$elm_color_extra$Color_Convert$colorToHex(_elm_lang$core$Color$white)
								},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							_user$project$View$alphaChar(node.id)),
						_1: {ctor: '[]'}
					})));
	});
var _user$project$View$viewEdgeBadge = F2(
	function (model, edge) {
		var getNode = A2(_elm_lang$core$Basics$flip, _user$project$Graph_Extra$getNode, model.graph);
		var _p3 = {
			ctor: '_Tuple2',
			_0: getNode(edge.from),
			_1: getNode(edge.to)
		};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return A2(
				_mdgriffith$style_elements$Element$within,
				{
					ctor: '::',
					_0: A4(
						_user$project$View$viewNodeBadge,
						model,
						_p3._1._0,
						25,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$alignRight,
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$alignBottom,
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				},
				A4(
					_user$project$View$viewNodeBadge,
					model,
					_p3._0._0,
					45,
					{ctor: '[]'}));
		} else {
			return _mdgriffith$style_elements$Element$empty;
		}
	});
var _user$project$View$viewEdgeSelector = F2(
	function (model, edge) {
		return A3(
			_mdgriffith$style_elements$Element$row,
			_user$project$MyStyles$SelectorItem,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$padding(10),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Events$onClick(
						_user$project$Types$Edit(
							A2(_user$project$Types$Edge, edge.from, edge.to))),
					_1: {
						ctor: '::',
						_0: A2(
							_mdgriffith$style_elements$Element_Attributes$vary,
							_user$project$MyStyles$Selected,
							_elm_lang$core$Native_Utils.eq(
								model.editing,
								_elm_lang$core$Maybe$Just(
									A2(_user$project$Types$Edge, edge.from, edge.to)))),
						_1: {ctor: '[]'}
					}
				}
			},
			{
				ctor: '::',
				_0: A2(_user$project$View$viewEdgeBadge, model, edge),
				_1: {ctor: '[]'}
			});
	});
var _user$project$View$viewNodeSelector = F2(
	function (model, node) {
		return A3(
			_mdgriffith$style_elements$Element$el,
			_user$project$MyStyles$SelectorItem,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Events$onClick(
					_user$project$Types$Edit(
						_user$project$Types$Node(node.id))),
				_1: {
					ctor: '::',
					_0: A2(
						_mdgriffith$style_elements$Element_Attributes$vary,
						_user$project$MyStyles$Selected,
						_elm_lang$core$Native_Utils.eq(
							model.editing,
							_elm_lang$core$Maybe$Just(
								_user$project$Types$Node(node.id)))),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$padding(10),
						_1: {ctor: '[]'}
					}
				}
			},
			A4(
				_user$project$View$viewNodeBadge,
				model,
				node,
				40,
				{ctor: '[]'}));
	});
var _user$project$View$hideUnless = function (shouldShow) {
	return shouldShow ? A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'class', '') : _mdgriffith$style_elements$Element_Attributes$hidden;
};
var _user$project$View$viewExamplesMenu = function (model) {
	var exampleRow = function (title) {
		return A3(
			_mdgriffith$style_elements$Element$row,
			_user$project$MyStyles$DropdownItem,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$padding(10),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$alignLeft,
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Events$onClick(
							_user$project$Types$Load(title)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Events$onMouseEnter(
								A2(_user$project$Types$ChangeMenuHover, _user$project$Types$Show, _user$project$Types$ExamplesMenu)),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Events$onMouseLeave(
									A2(_user$project$Types$ChangeMenuHover, _user$project$Types$Hide, _user$project$Types$ExamplesMenu)),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element$text(title),
				_1: {ctor: '[]'}
			});
	};
	return A3(
		_mdgriffith$style_elements$Element$el,
		_user$project$MyStyles$Dropdown,
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$width(
				_mdgriffith$style_elements$Element_Attributes$px(200)),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$alignRight,
				_1: {
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$vary, _user$project$MyStyles$NavMenu, true),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
							_user$project$MyStyles$zIndex(10)),
						_1: {
							ctor: '::',
							_0: _user$project$View$hideUnless(
								_elm_lang$core$Native_Utils.eq(model.menuHover, _user$project$Types$ExamplesMenu)),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		},
		A3(
			_mdgriffith$style_elements$Element$column,
			_user$project$MyStyles$None,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$width(
					_mdgriffith$style_elements$Element_Attributes$percent(100)),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$List$map,
				exampleRow,
				_elm_lang$core$Dict$keys(model.examples))));
};
var _user$project$View$viewSelectionSidebar = function (model) {
	var _p4 = A2(
		_elm_lang$core$Maybe$withDefault,
		{ctor: '_Tuple2', _0: 0, _1: 0},
		_elm_community$graph$Graph$nodeIdRange(model.graph));
	var maxId = _p4._1;
	var newButton = F3(
		function (size, menuType, msg) {
			return A3(
				_mdgriffith$style_elements$Element$el,
				_user$project$MyStyles$SelectorItem,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$padding(10),
					_1: {
						ctor: '::',
						_0: A2(
							_mdgriffith$style_elements$Element_Attributes$vary,
							_user$project$MyStyles$Selected,
							_elm_lang$core$Native_Utils.eq(model.menuHover, menuType)),
						_1: {ctor: '[]'}
					}
				},
				A3(
					_mdgriffith$style_elements$Element$button,
					_user$project$MyStyles$NewButton,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Events$onClick(msg),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$width(
								_mdgriffith$style_elements$Element_Attributes$px(size)),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$height(
									_mdgriffith$style_elements$Element_Attributes$px(size)),
								_1: {ctor: '[]'}
							}
						}
					},
					_mdgriffith$style_elements$Element$text('+')));
		});
	var viewBadgeSelectors = F4(
		function (model, getItems, viewItems, stuffAfterBadges) {
			return A3(
				_mdgriffith$style_elements$Element$column,
				_user$project$MyStyles$None,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$padding(0),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$spacing(0),
						_1: {ctor: '[]'}
					}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$map,
						viewItems(model),
						getItems(model.graph)),
					stuffAfterBadges));
		});
	return A3(
		_mdgriffith$style_elements$Element$sidebar,
		_user$project$MyStyles$Sidebar,
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$height(
				_mdgriffith$style_elements$Element_Attributes$percent(100)),
			_1: {
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 6, 20),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$spacing(6),
					_1: {ctor: '[]'}
				}
			}
		},
		{
			ctor: '::',
			_0: A3(
				_mdgriffith$style_elements$Element$row,
				_user$project$MyStyles$None,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$spacing(10),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A4(
						viewBadgeSelectors,
						model,
						_elm_community$graph$Graph$nodes,
						_user$project$View$viewNodeSelector,
						{
							ctor: '::',
							_0: A2(
								_mdgriffith$style_elements$Element$below,
								{
									ctor: '::',
									_0: A3(
										_mdgriffith$style_elements$Element$el,
										_user$project$MyStyles$Dropdown,
										{
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Attributes$height(
												_mdgriffith$style_elements$Element_Attributes$px(200)),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
													_user$project$MyStyles$zIndex(10)),
												_1: {
													ctor: '::',
													_0: _user$project$View$hideUnless(
														_elm_lang$core$Native_Utils.eq(model.menuHover, _user$project$Types$NewNodeMenu)),
													_1: {ctor: '[]'}
												}
											}
										},
										A3(
											_mdgriffith$style_elements$Element$row,
											_user$project$MyStyles$None,
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Attributes$width(
													_mdgriffith$style_elements$Element_Attributes$percent(100)),
												_1: {ctor: '[]'}
											},
											A2(
												_elm_lang$core$List$map,
												function (n) {
													return A3(
														_mdgriffith$style_elements$Element$column,
														_user$project$MyStyles$DropdownItem,
														{
															ctor: '::',
															_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 16, 8),
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Events$onClick(
																	_user$project$Types$NewNode(n.id)),
																_1: {ctor: '[]'}
															}
														},
														{
															ctor: '::',
															_0: A3(
																_mdgriffith$style_elements$Element$el,
																_user$project$MyStyles$None,
																{
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Element_Attributes$paddingBottom(4),
																	_1: {ctor: '[]'}
																},
																_mdgriffith$style_elements$Element$text('from')),
															_1: {
																ctor: '::',
																_0: A4(
																	_user$project$View$viewNodeBadge,
																	model,
																	n,
																	30,
																	{ctor: '[]'}),
																_1: {ctor: '[]'}
															}
														});
												},
												_elm_community$graph$Graph$nodes(model.graph)))),
									_1: {ctor: '[]'}
								},
								A3(
									newButton,
									40,
									_user$project$Types$NewNodeMenu,
									A2(_user$project$Types$ChangeMenuHover, _user$project$Types$Toggle, _user$project$Types$NewNodeMenu))),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A4(
							viewBadgeSelectors,
							model,
							function (_p5) {
								return _elm_lang$core$List$reverse(
									_elm_community$graph$Graph$edges(_p5));
							},
							_user$project$View$viewEdgeSelector,
							{
								ctor: '::',
								_0: A2(
									_mdgriffith$style_elements$Element$below,
									{
										ctor: '::',
										_0: A3(
											_mdgriffith$style_elements$Element$el,
											_user$project$MyStyles$Dropdown,
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Attributes$height(
													_mdgriffith$style_elements$Element_Attributes$px(200)),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
														_user$project$MyStyles$zIndex(10)),
													_1: {
														ctor: '::',
														_0: _user$project$View$hideUnless(
															_elm_lang$core$Native_Utils.eq(model.menuHover, _user$project$Types$NewEdgeMenu)),
														_1: {ctor: '[]'}
													}
												}
											},
											A3(
												_mdgriffith$style_elements$Element$row,
												_user$project$MyStyles$None,
												{
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Attributes$width(
														_mdgriffith$style_elements$Element_Attributes$percent(100)),
													_1: {ctor: '[]'}
												},
												A2(
													_elm_lang$core$List$map,
													function (_p6) {
														var _p7 = _p6;
														var _p9 = _p7._1;
														var _p8 = _p7._0;
														return A3(
															_mdgriffith$style_elements$Element$column,
															_user$project$MyStyles$DropdownItem,
															{
																ctor: '::',
																_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 16, 8),
																_1: {
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Element_Events$onClick(
																		A2(_user$project$Types$NewEdge, _p8, _p9)),
																	_1: {ctor: '[]'}
																}
															},
															{
																ctor: '::',
																_0: A3(
																	_mdgriffith$style_elements$Element$el,
																	_user$project$MyStyles$None,
																	{
																		ctor: '::',
																		_0: _mdgriffith$style_elements$Element_Attributes$paddingBottom(4),
																		_1: {ctor: '[]'}
																	},
																	_mdgriffith$style_elements$Element$text('')),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_user$project$View$viewEdgeBadge,
																		model,
																		A3(_elm_community$graph$Graph$Edge, _p8, _p9, _user$project$Types$emptyTransformation)),
																	_1: {ctor: '[]'}
																}
															});
													},
													_user$project$Graph_Extra$availableEdges(model.graph)))),
										_1: {ctor: '[]'}
									},
									A3(
										newButton,
										45,
										_user$project$Types$NewEdgeMenu,
										A2(_user$project$Types$ChangeMenuHover, _user$project$Types$Toggle, _user$project$Types$NewEdgeMenu))),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$View$viewTransformationSliders = F3(
	function (model, edge, transformAttribute) {
		var createMsg = function (xyorz) {
			return function (_p10) {
				return A2(
					_elm_lang$core$Result$withDefault,
					_user$project$Types$NoOp,
					A2(
						_elm_lang$core$Result$map,
						A4(_user$project$Types$ChangeTransformation, transformAttribute, xyorz, edge.from, edge.to),
						_elm_lang$core$String$toFloat(_p10)));
			};
		};
		var utils = _user$project$Types$transformUtils(transformAttribute);
		var currentValue = function (vec3Get) {
			return vec3Get(
				utils.edgeLens.get(edge));
		};
		var slider = F2(
			function (msgPartial, vec3Get) {
				return _mdgriffith$style_elements$Element$html(
					A2(
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$type_('range'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$min(
									_elm_lang$core$Basics$toString(utils.min)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$max(
										_elm_lang$core$Basics$toString(utils.max)),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$step(
											_elm_lang$core$Basics$toString(utils.step)),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onInput(msgPartial),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$value(
													_elm_lang$core$Basics$toString(
														currentValue(vec3Get))),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$style(
														{
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '6x'},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'margin-right', _1: '6x'},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: '-webkit-appearance', _1: 'none'},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: '-webkit-slider-thumb', _1: 'none'},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: 'height', _1: '2px'},
																			_1: {
																				ctor: '::',
																				_0: {ctor: '_Tuple2', _0: 'width', _1: '150px'},
																				_1: {
																					ctor: '::',
																					_0: {ctor: '_Tuple2', _0: 'background', _1: '#ccc'},
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						},
						{ctor: '[]'}));
			});
		var labeledSlider = F3(
			function (labelStr, msgPartial, vec3Get) {
				return A3(
					_mdgriffith$style_elements$Element$row,
					_user$project$MyStyles$None,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$paddingLeft(10),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$width(
								_mdgriffith$style_elements$Element_Attributes$percent(100)),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element$text(labelStr),
						_1: {
							ctor: '::',
							_0: A3(
								_mdgriffith$style_elements$Element$column,
								_user$project$MyStyles$None,
								{
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
									_1: {
										ctor: '::',
										_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 5, 0),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: A2(slider, msgPartial, vec3Get),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element$text(
									_elm_lang$core$Basics$toString(
										currentValue(vec3Get))),
								_1: {ctor: '[]'}
							}
						}
					});
			});
		return A3(
			_mdgriffith$style_elements$Element$column,
			_user$project$MyStyles$None,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$spacing(5),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A3(
					labeledSlider,
					'X: ',
					createMsg(_user$project$Types$X),
					_opensolid$geometry$OpenSolid_Vector3d$xComponent),
				_1: {
					ctor: '::',
					_0: A3(
						labeledSlider,
						'Y: ',
						createMsg(_user$project$Types$Y),
						_opensolid$geometry$OpenSolid_Vector3d$yComponent),
					_1: {
						ctor: '::',
						_0: A3(
							labeledSlider,
							'Z: ',
							createMsg(_user$project$Types$Z),
							_opensolid$geometry$OpenSolid_Vector3d$zComponent),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$View$msgFromString = F3(
	function (convertString, constructMsg, str) {
		return A2(
			_elm_lang$core$Result$withDefault,
			_user$project$Types$NoOp,
			A2(
				_elm_lang$core$Result$map,
				constructMsg,
				convertString(str)));
	});
var _user$project$View$viewEdgeDetail = F2(
	function (model, edge) {
		var dropdownChoice = function (node) {
			return A2(
				_elm_lang$html$Html$option,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$value(
						_elm_lang$core$Basics$toString(node.id)),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_mdgriffith$style_elements$Element$toHtml,
						_user$project$MyStyles$stylesheet,
						A4(
							_user$project$View$viewNodeBadge,
							model,
							node,
							20,
							{ctor: '[]'})),
					_1: {ctor: '[]'}
				});
		};
		var dropdown = F3(
			function (labelStr, selectedVal, msgConstructor) {
				return A3(
					_mdgriffith$style_elements$Element$row,
					_user$project$MyStyles$None,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A3(
							_mdgriffith$style_elements$Element$el,
							_user$project$MyStyles$None,
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$paddingRight(4),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
									_1: {ctor: '[]'}
								}
							},
							_mdgriffith$style_elements$Element$text(labelStr)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element$html(
								A2(
									_elm_lang$html$Html$select,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$value(
											_elm_lang$core$Basics$toString(selectedVal)),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onInput(
												A2(_user$project$View$msgFromString, _elm_lang$core$String$toInt, msgConstructor)),
											_1: {ctor: '[]'}
										}
									},
									A2(
										_elm_lang$core$List$map,
										dropdownChoice,
										_elm_community$graph$Graph$nodes(model.graph)))),
							_1: {ctor: '[]'}
						}
					});
			});
		var fromToNodes = function () {
			var _p11 = {
				ctor: '_Tuple2',
				_0: A2(_elm_community$graph$Graph$get, edge.from, model.graph),
				_1: A2(_elm_community$graph$Graph$get, edge.to, model.graph)
			};
			if (((_p11.ctor === '_Tuple2') && (_p11._0.ctor === 'Just')) && (_p11._1.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: _p11._0._0.node, _1: _p11._1._0.node});
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}();
		var description = A3(
			_elm_community$maybe_extra$Maybe_Extra$unwrap,
			_mdgriffith$style_elements$Element$empty,
			function (_p12) {
				var _p13 = _p12;
				return A3(
					_mdgriffith$style_elements$Element$row,
					_user$project$MyStyles$None,
					{
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 20, 30),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$spacing(8),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$alignLeft,
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$alignBottom,
									_1: {ctor: '[]'}
								}
							}
						}
					},
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element$text('Each'),
						_1: {
							ctor: '::',
							_0: A4(
								_user$project$View$viewNodeBadge,
								model,
								_p13._0,
								25,
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element$text('spawns a new'),
								_1: {
									ctor: '::',
									_0: A4(
										_user$project$View$viewNodeBadge,
										model,
										_p13._1,
										25,
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}
							}
						}
					});
			},
			fromToNodes);
		var dropdownMenu = A2(
			_mdgriffith$style_elements$Element$below,
			{
				ctor: '::',
				_0: A3(
					_mdgriffith$style_elements$Element$el,
					_user$project$MyStyles$Dropdown,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$inlineStyle(
							_user$project$MyStyles$zIndex(10)),
						_1: {
							ctor: '::',
							_0: _user$project$View$hideUnless(
								_elm_lang$core$Native_Utils.eq(model.menuHover, _user$project$Types$EditEdgeMenu)),
							_1: {ctor: '[]'}
						}
					},
					A3(
						_mdgriffith$style_elements$Element$row,
						_user$project$MyStyles$None,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$width(
								_mdgriffith$style_elements$Element_Attributes$percent(100)),
							_1: {ctor: '[]'}
						},
						A2(
							_elm_lang$core$List$map,
							function (_p14) {
								var _p15 = _p14;
								var _p17 = _p15._1;
								var _p16 = _p15._0;
								return A3(
									_mdgriffith$style_elements$Element$column,
									_user$project$MyStyles$DropdownItem,
									{
										ctor: '::',
										_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 16, 8),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Events$onClick(
												A4(_user$project$Types$EdgeFromTo, edge.from, edge.to, _p16, _p17)),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Attributes$center,
												_1: {ctor: '[]'}
											}
										}
									},
									{
										ctor: '::',
										_0: A3(
											_mdgriffith$style_elements$Element$el,
											_user$project$MyStyles$None,
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Attributes$paddingBottom(4),
												_1: {ctor: '[]'}
											},
											_mdgriffith$style_elements$Element$text('Change to')),
										_1: {
											ctor: '::',
											_0: A2(
												_user$project$View$viewEdgeBadge,
												model,
												A3(_elm_community$graph$Graph$Edge, _p16, _p17, _user$project$Types$emptyTransformation)),
											_1: {ctor: '[]'}
										}
									});
							},
							_user$project$Graph_Extra$availableEdges(model.graph)))),
				_1: {ctor: '[]'}
			},
			A3(
				_mdgriffith$style_elements$Element$el,
				_user$project$MyStyles$SelectorItem,
				{
					ctor: '::',
					_0: A2(
						_mdgriffith$style_elements$Element_Attributes$vary,
						_user$project$MyStyles$Selected,
						_elm_lang$core$Native_Utils.eq(model.menuHover, _user$project$Types$EditEdgeMenu)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Events$onMouseDown(
							A2(_user$project$Types$ChangeMenuHover, _user$project$Types$Toggle, _user$project$Types$EditEdgeMenu)),
						_1: {ctor: '[]'}
					}
				},
				description));
		var sliderTriplet = F3(
			function (label1, label2, transformAttribute) {
				return A3(
					_mdgriffith$style_elements$Element$column,
					_user$project$MyStyles$None,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$spacing(10),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A3(
							_mdgriffith$style_elements$Element$row,
							_user$project$MyStyles$None,
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$spacing(5),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: A3(
									_mdgriffith$style_elements$Element$el,
									_user$project$MyStyles$None,
									{ctor: '[]'},
									_mdgriffith$style_elements$Element$text(label1)),
								_1: {
									ctor: '::',
									_0: A2(
										_mdgriffith$style_elements$Element$whenJust,
										fromToNodes,
										function (_p18) {
											var _p19 = _p18;
											return A4(
												_user$project$View$viewNodeBadge,
												model,
												_p19._1,
												25,
												{ctor: '[]'});
										}),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element$text(label2),
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: A3(_user$project$View$viewTransformationSliders, model, edge, transformAttribute),
							_1: {ctor: '[]'}
						}
					});
			});
		return A3(
			_mdgriffith$style_elements$Element$column,
			_user$project$MyStyles$None,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: dropdownMenu,
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element$hairline(_user$project$MyStyles$Hairline),
					_1: {
						ctor: '::',
						_0: A3(
							_mdgriffith$style_elements$Element$column,
							_user$project$MyStyles$None,
							{
								ctor: '::',
								_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 20, 6),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$spacing(20),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Attributes$paddingTop(20),
										_1: {ctor: '[]'}
									}
								}
							},
							{
								ctor: '::',
								_0: A3(sliderTriplet, 'Move', 'along axis:', _user$project$Types$Translation),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element$hairline(_user$project$MyStyles$Hairline),
									_1: {
										ctor: '::',
										_0: A3(sliderTriplet, 'Resize', 'along axis:', _user$project$Types$Scale),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element$hairline(_user$project$MyStyles$Hairline),
											_1: {
												ctor: '::',
												_0: A3(sliderTriplet, 'Rotate', 'around axis:', _user$project$Types$Rotation),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Element$hairline(_user$project$MyStyles$Hairline),
													_1: {
														ctor: '::',
														_0: A3(
															_mdgriffith$style_elements$Element$button,
															_user$project$MyStyles$DeleteButton,
															{
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Attributes$height(
																	_mdgriffith$style_elements$Element_Attributes$px(50)),
																_1: {
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Element_Attributes$width(
																		_mdgriffith$style_elements$Element_Attributes$px(100)),
																	_1: {
																		ctor: '::',
																		_0: _mdgriffith$style_elements$Element_Events$onClick(
																			_user$project$Types$Delete(
																				A2(_user$project$Types$Edge, edge.from, edge.to))),
																		_1: {ctor: '[]'}
																	}
																}
															},
															_mdgriffith$style_elements$Element$text('Delete')),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$View$viewNodeDetail = F2(
	function (model, node) {
		var createMsg = function (msgConstructor) {
			return function (_p20) {
				return A2(
					_elm_lang$core$Result$withDefault,
					_user$project$Types$NoOp,
					A2(
						_elm_lang$core$Result$map,
						msgConstructor(node.id),
						_elm_lang$core$String$toFloat(_p20)));
			};
		};
		var opacitySlider = _mdgriffith$style_elements$Element$html(
			A2(
				_elm_lang$html$Html$input,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$type_('range'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$value(
							_elm_lang$core$Basics$toString(node.label.opacity)),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$min('0'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$max('1'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$step('0.01'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onInput(
											createMsg(_user$project$Types$ChangeOpacity)),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$style(
												A2(
													_elm_lang$core$Basics_ops['++'],
													_user$project$MyStyles$slider,
													_user$project$MyStyles$opacitySlider(node.label.color))),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				},
				{ctor: '[]'}));
		var colorPicker = _mdgriffith$style_elements$Element$html(
			A2(
				_elm_lang$html$Html$input,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$type_('color'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$value(
							_eskimoblood$elm_color_extra$Color_Convert$colorToHex(node.label.color)),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onInput(
								_user$project$Types$ChangeColor(node.id)),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(_user$project$MyStyles$colorPicker),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				{ctor: '[]'}));
		return A3(
			_mdgriffith$style_elements$Element$column,
			_user$project$MyStyles$None,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$spacing(20),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$padding(20),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A3(
					_mdgriffith$style_elements$Element$column,
					_user$project$MyStyles$None,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A3(
							_mdgriffith$style_elements$Element$row,
							_user$project$MyStyles$None,
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$paddingBottom(5),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element$text('Color: '),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: colorPicker,
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_mdgriffith$style_elements$Element$column,
						_user$project$MyStyles$None,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A3(
								_mdgriffith$style_elements$Element$row,
								_user$project$MyStyles$None,
								{
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$paddingBottom(5),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _mdgriffith$style_elements$Element$text('Opacity: '),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: opacitySlider,
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element$hairline(_user$project$MyStyles$Hairline),
						_1: {
							ctor: '::',
							_0: A3(
								_mdgriffith$style_elements$Element$button,
								_user$project$MyStyles$DeleteButton,
								{
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$height(
										_mdgriffith$style_elements$Element_Attributes$px(50)),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Attributes$width(
											_mdgriffith$style_elements$Element_Attributes$px(100)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Events$onClick(
												_user$project$Types$Delete(
													_user$project$Types$Node(node.id))),
											_1: {ctor: '[]'}
										}
									}
								},
								_mdgriffith$style_elements$Element$text('Delete')),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _user$project$View$viewDetailSidebar = function (model) {
	var showDetails = F2(
		function (getGraphData, viewDetailContent) {
			return A2(
				_mdgriffith$style_elements$Element$whenJust,
				getGraphData(model.graph),
				function (detailData) {
					return A3(
						_mdgriffith$style_elements$Element$sidebar,
						_user$project$MyStyles$Sidebar,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$height(
								_mdgriffith$style_elements$Element_Attributes$percent(100)),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$minWidth(
									_mdgriffith$style_elements$Element_Attributes$px(280)),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: viewDetailContent(detailData),
							_1: {ctor: '[]'}
						});
				});
		});
	var _p21 = model.editing;
	if (_p21.ctor === 'Nothing') {
		return _mdgriffith$style_elements$Element$empty;
	} else {
		if (_p21._0.ctor === 'Node') {
			return A2(
				showDetails,
				_user$project$Graph_Extra$getNode(_p21._0._0),
				_user$project$View$viewNodeDetail(model));
		} else {
			return A2(
				showDetails,
				A2(_user$project$Graph_Extra$getEdge, _p21._0._0, _p21._0._1),
				_user$project$View$viewEdgeDetail(model));
		}
	}
};
var _user$project$View$viewNavbar = function (model) {
	var navlink = F3(
		function (text, href, attrs) {
			return A3(
				_mdgriffith$style_elements$Element$el,
				_user$project$MyStyles$NavLink,
				attrs,
				A2(
					_mdgriffith$style_elements$Element$link,
					href,
					A3(
						_mdgriffith$style_elements$Element$el,
						_user$project$MyStyles$NavLink,
						{
							ctor: '::',
							_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 10, 24),
							_1: {ctor: '[]'}
						},
						_mdgriffith$style_elements$Element$text(text))));
		});
	return A3(
		_mdgriffith$style_elements$Element$row,
		_user$project$MyStyles$Nav,
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$spread,
			_1: {
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Element_Attributes$paddingXY, 20, 0),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
					_1: {ctor: '[]'}
				}
			}
		},
		{
			ctor: '::',
			_0: A3(
				_mdgriffith$style_elements$Element$el,
				_user$project$MyStyles$Header,
				{
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Element_Attributes$vary, _user$project$MyStyles$Title, true),
					_1: {ctor: '[]'}
				},
				_mdgriffith$style_elements$Element$text('Graft3D')),
			_1: {
				ctor: '::',
				_0: A3(
					_mdgriffith$style_elements$Element$navigation,
					_user$project$MyStyles$None,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$padding(0),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$spacing(0),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
								_1: {ctor: '[]'}
							}
						}
					},
					{
						name: 'Graft 3D',
						options: {
							ctor: '::',
							_0: A2(
								_mdgriffith$style_elements$Element$below,
								{
									ctor: '::',
									_0: _user$project$View$viewExamplesMenu(model),
									_1: {ctor: '[]'}
								},
								A3(
									navlink,
									'Examples',
									'#',
									{
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Events$onMouseEnter(
											A2(_user$project$Types$ChangeMenuHover, _user$project$Types$Show, _user$project$Types$ExamplesMenu)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Events$onMouseLeave(
												A2(_user$project$Types$ChangeMenuHover, _user$project$Types$Hide, _user$project$Types$ExamplesMenu)),
											_1: {ctor: '[]'}
										}
									})),
							_1: {
								ctor: '::',
								_0: A3(
									navlink,
									'Graft2D',
									'https://jesseilev.github.io/graft',
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A3(
										navlink,
										'Github',
										'https://github.com/jesseilev/graft3d',
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$View$root = function (model) {
	return A2(
		_mdgriffith$style_elements$Element$viewport,
		_user$project$MyStyles$stylesheet,
		A3(
			_mdgriffith$style_elements$Element$column,
			_user$project$MyStyles$Main,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$height(_mdgriffith$style_elements$Element_Attributes$fill),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$View$viewNavbar(model),
				_1: {
					ctor: '::',
					_0: A3(
						_mdgriffith$style_elements$Element$row,
						_user$project$MyStyles$None,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$width(_mdgriffith$style_elements$Element_Attributes$fill),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$height(_mdgriffith$style_elements$Element_Attributes$fill),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _user$project$View$viewSelectionSidebar(model),
							_1: {
								ctor: '::',
								_0: _user$project$View$viewDetailSidebar(model),
								_1: {
									ctor: '::',
									_0: _user$project$View$viewSceneContainer(model),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			}));
};

var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$none;
};
var _user$project$Main$toggleAnimation = F2(
	function (id, graph) {
		var _p0 = _elm_lang$core$List$head(
			A2(_user$project$Graph_Extra$getEdgesTo, id, graph));
		if (_p0.ctor === 'Nothing') {
			return graph;
		} else {
			var _p1 = _p0._0;
			var updater = function (e) {
				var oldLabel = e.label;
				return _elm_lang$core$Native_Utils.update(
					e,
					{
						label: _elm_lang$core$Native_Utils.update(
							oldLabel,
							{isAnimating: !e.label.isAnimating})
					});
			};
			return A4(_user$project$Graph_Extra$updateEdge, _p1.from, _p1.to, updater, graph);
		}
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		update:
		while (true) {
			var _p2 = msg;
			switch (_p2.ctor) {
				case 'TimeUpdate':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{time: model.time + _p2._0}),
						{ctor: '[]'});
				case 'Click':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								graph: A2(_user$project$Main$toggleAnimation, _p2._0, model.graph)
							}),
						{ctor: '[]'});
				case 'Edit':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								editing: _elm_lang$core$Maybe$Just(_p2._0)
							}),
						{ctor: '[]'});
				case 'Delete':
					var graphUpdater = function () {
						var _p3 = _p2._0;
						if (_p3.ctor === 'Node') {
							return _elm_community$graph$Graph$remove(_p3._0);
						} else {
							return A2(_user$project$Graph_Extra$removeEdge, _p3._0, _p3._1);
						}
					}();
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								graph: graphUpdater(model.graph)
							}),
						{ctor: '[]'});
				case 'NewNode':
					var nextId = A2(
						_elm_lang$core$Maybe$withDefault,
						0,
						A2(
							_elm_lang$core$Maybe$map,
							function (_p4) {
								return A2(
									F2(
										function (x, y) {
											return x + y;
										}),
									1,
									_elm_lang$core$Tuple$second(_p4));
							},
							_elm_community$graph$Graph$nodeIdRange(model.graph)));
					var entity = {
						color: _elm_lang$core$Color$greyscale(0.5),
						opacity: 0.5,
						shape: _user$project$Types$Box
					};
					var node = {id: nextId, label: entity};
					var newModel = _elm_lang$core$Native_Utils.update(
						model,
						{
							graph: A2(_user$project$Graph_Extra$insertNode, node, model.graph)
						});
					var _v3 = A2(_user$project$Types$NewEdge, _p2._0, nextId),
						_v4 = newModel;
					msg = _v3;
					model = _v4;
					continue update;
				case 'NewEdge':
					var _p7 = _p2._1;
					var _p6 = _p2._0;
					var transformation = {
						data: _user$project$Types$emptyTransformation,
						isAnimating: false,
						animate: function (_p5) {
							return _elm_lang$core$Basics$identity;
						}
					};
					var edge = {from: _p6, to: _p7, label: transformation};
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								graph: A2(_user$project$Graph_Extra$insertEdge, edge, model.graph),
								editing: _elm_lang$core$Maybe$Just(
									A2(_user$project$Types$Edge, _p6, _p7)),
								menuHover: _user$project$Types$NoMenu
							}),
						{ctor: '[]'});
				case 'ChangeColor':
					var nodeUpdater = A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Basics$identity,
						A2(
							_elm_lang$core$Maybe$map,
							_user$project$Types$nodeLensColor.set,
							_eskimoblood$elm_color_extra$Color_Convert$hexToColor(_p2._1)));
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								graph: A3(_user$project$Graph_Extra$updateNode, _p2._0, nodeUpdater, model.graph)
							}),
						{ctor: '[]'});
				case 'ChangeOpacity':
					var nodeUpdater = _user$project$Types$nodeLensOpacity.set(_p2._1);
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								graph: A3(_user$project$Graph_Extra$updateNode, _p2._0, nodeUpdater, model.graph)
							}),
						{ctor: '[]'});
				case 'ChangeTransformation':
					var lens = function (_) {
						return _.edgeLens;
					}(
						_user$project$Types$transformUtils(_p2._0));
					var modifier = A2(_user$project$Types$vec3Set, _p2._1, _p2._4);
					var edgeUpdater = A2(_arturopala$elm_monocle$Monocle_Lens$modify, lens, modifier);
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								graph: A4(_user$project$Graph_Extra$updateEdge, _p2._2, _p2._3, edgeUpdater, model.graph)
							}),
						{ctor: '[]'});
				case 'EdgeFromTo':
					var _p9 = _p2._3;
					var _p8 = _p2._2;
					var newGraph = A2(
						_elm_lang$core$Maybe$withDefault,
						model.graph,
						A2(
							_elm_lang$core$Maybe$map,
							function (e) {
								return A4(_user$project$Graph_Extra$updateEdgeFromTo, _p8, _p9, e, model.graph);
							},
							A3(_user$project$Graph_Extra$getEdge, _p2._0, _p2._1, model.graph)));
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								graph: newGraph,
								editing: _elm_lang$core$Maybe$Just(
									A2(_user$project$Types$Edge, _p8, _p9))
							}),
						{ctor: '[]'});
				case 'Save':
					var json = A2(
						_elm_lang$core$Debug$log,
						'json',
						_user$project$Types$graphToJson(model.graph));
					var _v5 = _user$project$Types$NoOp,
						_v6 = model;
					msg = _v5;
					model = _v6;
					continue update;
				case 'Load':
					var newGraph = A2(
						_elm_lang$core$Maybe$withDefault,
						model.graph,
						A2(_elm_lang$core$Dict$get, _p2._0, model.examples));
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{graph: newGraph}),
						{ctor: '[]'});
				case 'ChangeMenuHover':
					var _p11 = _p2._1;
					var answer = function () {
						var _p10 = _p2._0;
						switch (_p10.ctor) {
							case 'Show':
								return _p11;
							case 'Hide':
								return _user$project$Types$NoMenu;
							default:
								return _elm_lang$core$Native_Utils.eq(model.menuHover, _p11) ? _user$project$Types$NoMenu : _p11;
						}
					}();
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{menuHover: answer}),
						{ctor: '[]'});
				default:
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
			}
		}
	});
var _user$project$Main$removeNothings = F3(
	function (name, maybeGraph, dict) {
		var _p12 = maybeGraph;
		if (_p12.ctor === 'Nothing') {
			return dict;
		} else {
			return A3(_elm_lang$core$Dict$insert, name, _p12._0, dict);
		}
	});
var _user$project$Main$model = {
	time: 0,
	rootId: 0,
	graph: _user$project$Worlds$graph1,
	examples: A3(
		_elm_lang$core$Dict$foldr,
		_user$project$Main$removeNothings,
		_elm_lang$core$Dict$empty,
		A2(
			_elm_lang$core$Dict$map,
			function (_p13) {
				return function (_p14) {
					return _elm_lang$core$Result$toMaybe(
						_user$project$Types$decodeGraph(_p14));
				};
			},
			_user$project$Worlds$jsonExamples)),
	editing: _elm_lang$core$Maybe$Just(
		A2(_user$project$Types$Edge, 0, 1)),
	menuHover: _user$project$Types$NoMenu
};
var _user$project$Main$main = _elm_lang$html$Html$program(
	{
		init: A2(
			_user$project$Main$update,
			_user$project$Types$Load('Simple'),
			_user$project$Main$model),
		view: _user$project$View$root,
		update: _user$project$Main$update,
		subscriptions: _user$project$Main$subscriptions
	})();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

