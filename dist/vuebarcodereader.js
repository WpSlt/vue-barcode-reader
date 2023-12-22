import { openBlock as or, createElementBlock as fr, defineComponent as Ir, withDirectives as Sr, createElementVNode as Je, vShow as mr, pushScopeId as Or, popScopeId as Tr } from "vue";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var br = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, e) {
  r.__proto__ = e;
} || function(r, e) {
  for (var t in e)
    e.hasOwnProperty(t) && (r[t] = e[t]);
};
function Dr(r, e) {
  br(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function Nr(r, e) {
  var t = Object.setPrototypeOf;
  t ? t(r, e) : r.__proto__ = e;
}
function Rr(r, e) {
  e === void 0 && (e = r.constructor);
  var t = Error.captureStackTrace;
  t && t(r, e);
}
var Pr = function(r) {
  Dr(e, r);
  function e(t) {
    var n = this.constructor, i = r.call(this, t) || this;
    return Object.defineProperty(i, "name", {
      value: n.name,
      enumerable: !1
    }), Nr(i, n.prototype), Rr(i), i;
  }
  return e;
}(Error), Mr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), fe = (
  /** @class */
  function(r) {
    Mr(e, r);
    function e(t) {
      t === void 0 && (t = void 0);
      var n = r.call(this, t) || this;
      return n.message = t, n;
    }
    return e.prototype.getKind = function() {
      var t = this.constructor;
      return t.kind;
    }, e.kind = "Exception", e;
  }(Pr)
), Br = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), pe = (
  /** @class */
  function(r) {
    Br(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "ArgumentException", e;
  }(fe)
), Fr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), D = (
  /** @class */
  function(r) {
    Fr(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "IllegalArgumentException", e;
  }(fe)
), Lr = (
  /** @class */
  function() {
    function r(e) {
      if (this.binarizer = e, e === null)
        throw new D("Binarizer must be non-null.");
    }
    return r.prototype.getWidth = function() {
      return this.binarizer.getWidth();
    }, r.prototype.getHeight = function() {
      return this.binarizer.getHeight();
    }, r.prototype.getBlackRow = function(e, t) {
      return this.binarizer.getBlackRow(e, t);
    }, r.prototype.getBlackMatrix = function() {
      return (this.matrix === null || this.matrix === void 0) && (this.matrix = this.binarizer.getBlackMatrix()), this.matrix;
    }, r.prototype.isCropSupported = function() {
      return this.binarizer.getLuminanceSource().isCropSupported();
    }, r.prototype.crop = function(e, t, n, i) {
      var a = this.binarizer.getLuminanceSource().crop(e, t, n, i);
      return new r(this.binarizer.createBinarizer(a));
    }, r.prototype.isRotateSupported = function() {
      return this.binarizer.getLuminanceSource().isRotateSupported();
    }, r.prototype.rotateCounterClockwise = function() {
      var e = this.binarizer.getLuminanceSource().rotateCounterClockwise();
      return new r(this.binarizer.createBinarizer(e));
    }, r.prototype.rotateCounterClockwise45 = function() {
      var e = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
      return new r(this.binarizer.createBinarizer(e));
    }, r.prototype.toString = function() {
      try {
        return this.getBlackMatrix().toString();
      } catch {
        return "";
      }
    }, r;
  }()
), kr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), re = (
  /** @class */
  function(r) {
    kr(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.getChecksumInstance = function() {
      return new e();
    }, e.kind = "ChecksumException", e;
  }(fe)
), Ur = (
  /** @class */
  function() {
    function r(e) {
      this.source = e;
    }
    return r.prototype.getLuminanceSource = function() {
      return this.source;
    }, r.prototype.getWidth = function() {
      return this.source.getWidth();
    }, r.prototype.getHeight = function() {
      return this.source.getHeight();
    }, r;
  }()
), W = (
  /** @class */
  function() {
    function r() {
    }
    return r.arraycopy = function(e, t, n, i, a) {
      for (; a--; )
        n[i++] = e[t++];
    }, r.currentTimeMillis = function() {
      return Date.now();
    }, r;
  }()
), Vr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ot = (
  /** @class */
  function(r) {
    Vr(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "IndexOutOfBoundsException", e;
  }(fe)
), Hr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Mt = (
  /** @class */
  function(r) {
    Hr(e, r);
    function e(t, n) {
      t === void 0 && (t = void 0), n === void 0 && (n = void 0);
      var i = r.call(this, n) || this;
      return i.index = t, i.message = n, i;
    }
    return e.kind = "ArrayIndexOutOfBoundsException", e;
  }(Ot)
), Gr = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ce = (
  /** @class */
  function() {
    function r() {
    }
    return r.fill = function(e, t) {
      for (var n = 0, i = e.length; n < i; n++)
        e[n] = t;
    }, r.fillWithin = function(e, t, n, i) {
      r.rangeCheck(e.length, t, n);
      for (var a = t; a < n; a++)
        e[a] = i;
    }, r.rangeCheck = function(e, t, n) {
      if (t > n)
        throw new D("fromIndex(" + t + ") > toIndex(" + n + ")");
      if (t < 0)
        throw new Mt(t);
      if (n > e)
        throw new Mt(n);
    }, r.asList = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      return e;
    }, r.create = function(e, t, n) {
      var i = Array.from({ length: e });
      return i.map(function(a) {
        return Array.from({ length: t }).fill(n);
      });
    }, r.createInt32Array = function(e, t, n) {
      var i = Array.from({ length: e });
      return i.map(function(a) {
        return Int32Array.from({ length: t }).fill(n);
      });
    }, r.equals = function(e, t) {
      if (!e || !t || !e.length || !t.length || e.length !== t.length)
        return !1;
      for (var n = 0, i = e.length; n < i; n++)
        if (e[n] !== t[n])
          return !1;
      return !0;
    }, r.hashCode = function(e) {
      var t, n;
      if (e === null)
        return 0;
      var i = 1;
      try {
        for (var a = Gr(e), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          i = 31 * i + f;
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return i;
    }, r.fillUint8Array = function(e, t) {
      for (var n = 0; n !== e.length; n++)
        e[n] = t;
    }, r.copyOf = function(e, t) {
      return e.slice(0, t);
    }, r.copyOfUint8Array = function(e, t) {
      if (e.length <= t) {
        var n = new Uint8Array(t);
        return n.set(e), n;
      }
      return e.slice(0, t);
    }, r.copyOfRange = function(e, t, n) {
      var i = n - t, a = new Int32Array(i);
      return W.arraycopy(e, t, a, 0, i), a;
    }, r.binarySearch = function(e, t, n) {
      n === void 0 && (n = r.numberComparator);
      for (var i = 0, a = e.length - 1; i <= a; ) {
        var o = a + i >> 1, f = n(t, e[o]);
        if (f > 0)
          i = o + 1;
        else if (f < 0)
          a = o - 1;
        else
          return o;
      }
      return -i - 1;
    }, r.numberComparator = function(e, t) {
      return e - t;
    }, r;
  }()
), M = (
  /** @class */
  function() {
    function r() {
    }
    return r.numberOfTrailingZeros = function(e) {
      var t;
      if (e === 0)
        return 32;
      var n = 31;
      return t = e << 16, t !== 0 && (n -= 16, e = t), t = e << 8, t !== 0 && (n -= 8, e = t), t = e << 4, t !== 0 && (n -= 4, e = t), t = e << 2, t !== 0 && (n -= 2, e = t), n - (e << 1 >>> 31);
    }, r.numberOfLeadingZeros = function(e) {
      if (e === 0)
        return 32;
      var t = 1;
      return e >>> 16 || (t += 16, e <<= 16), e >>> 24 || (t += 8, e <<= 8), e >>> 28 || (t += 4, e <<= 4), e >>> 30 || (t += 2, e <<= 2), t -= e >>> 31, t;
    }, r.toHexString = function(e) {
      return e.toString(16);
    }, r.toBinaryString = function(e) {
      return String(parseInt(String(e), 2));
    }, r.bitCount = function(e) {
      return e = e - (e >>> 1 & 1431655765), e = (e & 858993459) + (e >>> 2 & 858993459), e = e + (e >>> 4) & 252645135, e = e + (e >>> 8), e = e + (e >>> 16), e & 63;
    }, r.truncDivision = function(e, t) {
      return Math.trunc(e / t);
    }, r.parseInt = function(e, t) {
      return t === void 0 && (t = void 0), parseInt(e, t);
    }, r.MIN_VALUE_32_BITS = -2147483648, r.MAX_VALUE = Number.MAX_SAFE_INTEGER, r;
  }()
), ee = (
  /** @class */
  function() {
    function r(e, t) {
      e === void 0 ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = e, t == null ? this.bits = r.makeArray(e) : this.bits = t);
    }
    return r.prototype.getSize = function() {
      return this.size;
    }, r.prototype.getSizeInBytes = function() {
      return Math.floor((this.size + 7) / 8);
    }, r.prototype.ensureCapacity = function(e) {
      if (e > this.bits.length * 32) {
        var t = r.makeArray(e);
        W.arraycopy(this.bits, 0, t, 0, this.bits.length), this.bits = t;
      }
    }, r.prototype.get = function(e) {
      return (this.bits[Math.floor(e / 32)] & 1 << (e & 31)) !== 0;
    }, r.prototype.set = function(e) {
      this.bits[Math.floor(e / 32)] |= 1 << (e & 31);
    }, r.prototype.flip = function(e) {
      this.bits[Math.floor(e / 32)] ^= 1 << (e & 31);
    }, r.prototype.getNextSet = function(e) {
      var t = this.size;
      if (e >= t)
        return t;
      var n = this.bits, i = Math.floor(e / 32), a = n[i];
      a &= ~((1 << (e & 31)) - 1);
      for (var o = n.length; a === 0; ) {
        if (++i === o)
          return t;
        a = n[i];
      }
      var f = i * 32 + M.numberOfTrailingZeros(a);
      return f > t ? t : f;
    }, r.prototype.getNextUnset = function(e) {
      var t = this.size;
      if (e >= t)
        return t;
      var n = this.bits, i = Math.floor(e / 32), a = ~n[i];
      a &= ~((1 << (e & 31)) - 1);
      for (var o = n.length; a === 0; ) {
        if (++i === o)
          return t;
        a = ~n[i];
      }
      var f = i * 32 + M.numberOfTrailingZeros(a);
      return f > t ? t : f;
    }, r.prototype.setBulk = function(e, t) {
      this.bits[Math.floor(e / 32)] = t;
    }, r.prototype.setRange = function(e, t) {
      if (t < e || e < 0 || t > this.size)
        throw new D();
      if (t !== e) {
        t--;
        for (var n = Math.floor(e / 32), i = Math.floor(t / 32), a = this.bits, o = n; o <= i; o++) {
          var f = o > n ? 0 : e & 31, u = o < i ? 31 : t & 31, s = (2 << u) - (1 << f);
          a[o] |= s;
        }
      }
    }, r.prototype.clear = function() {
      for (var e = this.bits.length, t = this.bits, n = 0; n < e; n++)
        t[n] = 0;
    }, r.prototype.isRange = function(e, t, n) {
      if (t < e || e < 0 || t > this.size)
        throw new D();
      if (t === e)
        return !0;
      t--;
      for (var i = Math.floor(e / 32), a = Math.floor(t / 32), o = this.bits, f = i; f <= a; f++) {
        var u = f > i ? 0 : e & 31, s = f < a ? 31 : t & 31, c = (2 << s) - (1 << u) & 4294967295;
        if ((o[f] & c) !== (n ? c : 0))
          return !1;
      }
      return !0;
    }, r.prototype.appendBit = function(e) {
      this.ensureCapacity(this.size + 1), e && (this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 31)), this.size++;
    }, r.prototype.appendBits = function(e, t) {
      if (t < 0 || t > 32)
        throw new D("Num bits must be between 0 and 32");
      this.ensureCapacity(this.size + t);
      for (var n = t; n > 0; n--)
        this.appendBit((e >> n - 1 & 1) === 1);
    }, r.prototype.appendBitArray = function(e) {
      var t = e.size;
      this.ensureCapacity(this.size + t);
      for (var n = 0; n < t; n++)
        this.appendBit(e.get(n));
    }, r.prototype.xor = function(e) {
      if (this.size !== e.size)
        throw new D("Sizes don't match");
      for (var t = this.bits, n = 0, i = t.length; n < i; n++)
        t[n] ^= e.bits[n];
    }, r.prototype.toBytes = function(e, t, n, i) {
      for (var a = 0; a < i; a++) {
        for (var o = 0, f = 0; f < 8; f++)
          this.get(e) && (o |= 1 << 7 - f), e++;
        t[n + a] = /*(byte)*/
        o;
      }
    }, r.prototype.getBitArray = function() {
      return this.bits;
    }, r.prototype.reverse = function() {
      for (var e = new Int32Array(this.bits.length), t = Math.floor((this.size - 1) / 32), n = t + 1, i = this.bits, a = 0; a < n; a++) {
        var o = i[a];
        o = o >> 1 & 1431655765 | (o & 1431655765) << 1, o = o >> 2 & 858993459 | (o & 858993459) << 2, o = o >> 4 & 252645135 | (o & 252645135) << 4, o = o >> 8 & 16711935 | (o & 16711935) << 8, o = o >> 16 & 65535 | (o & 65535) << 16, e[t - a] = /*(int)*/
        o;
      }
      if (this.size !== n * 32) {
        for (var f = n * 32 - this.size, u = e[0] >>> f, a = 1; a < n; a++) {
          var s = e[a];
          u |= s << 32 - f, e[a - 1] = u, u = s >>> f;
        }
        e[n - 1] = u;
      }
      this.bits = e;
    }, r.makeArray = function(e) {
      return new Int32Array(Math.floor((e + 31) / 32));
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.size === t.size && ce.equals(this.bits, t.bits);
    }, r.prototype.hashCode = function() {
      return 31 * this.size + ce.hashCode(this.bits);
    }, r.prototype.toString = function() {
      for (var e = "", t = 0, n = this.size; t < n; t++)
        t & 7 || (e += " "), e += this.get(t) ? "X" : ".";
      return e;
    }, r.prototype.clone = function() {
      return new r(this.size, this.bits.slice());
    }, r;
  }()
), vt;
(function(r) {
  r[r.OTHER = 0] = "OTHER", r[r.PURE_BARCODE = 1] = "PURE_BARCODE", r[r.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", r[r.TRY_HARDER = 3] = "TRY_HARDER", r[r.CHARACTER_SET = 4] = "CHARACTER_SET", r[r.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", r[r.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", r[r.ASSUME_GS1 = 7] = "ASSUME_GS1", r[r.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", r[r.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", r[r.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS";
})(vt || (vt = {}));
const j = vt;
var Xr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), m = (
  /** @class */
  function(r) {
    Xr(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.getFormatInstance = function() {
      return new e();
    }, e.kind = "FormatException", e;
  }(fe)
), Wr = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, V;
(function(r) {
  r[r.Cp437 = 0] = "Cp437", r[r.ISO8859_1 = 1] = "ISO8859_1", r[r.ISO8859_2 = 2] = "ISO8859_2", r[r.ISO8859_3 = 3] = "ISO8859_3", r[r.ISO8859_4 = 4] = "ISO8859_4", r[r.ISO8859_5 = 5] = "ISO8859_5", r[r.ISO8859_6 = 6] = "ISO8859_6", r[r.ISO8859_7 = 7] = "ISO8859_7", r[r.ISO8859_8 = 8] = "ISO8859_8", r[r.ISO8859_9 = 9] = "ISO8859_9", r[r.ISO8859_10 = 10] = "ISO8859_10", r[r.ISO8859_11 = 11] = "ISO8859_11", r[r.ISO8859_13 = 12] = "ISO8859_13", r[r.ISO8859_14 = 13] = "ISO8859_14", r[r.ISO8859_15 = 14] = "ISO8859_15", r[r.ISO8859_16 = 15] = "ISO8859_16", r[r.SJIS = 16] = "SJIS", r[r.Cp1250 = 17] = "Cp1250", r[r.Cp1251 = 18] = "Cp1251", r[r.Cp1252 = 19] = "Cp1252", r[r.Cp1256 = 20] = "Cp1256", r[r.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", r[r.UTF8 = 22] = "UTF8", r[r.ASCII = 23] = "ASCII", r[r.Big5 = 24] = "Big5", r[r.GB18030 = 25] = "GB18030", r[r.EUC_KR = 26] = "EUC_KR";
})(V || (V = {}));
var Q = (
  /** @class */
  function() {
    function r(e, t, n) {
      for (var i, a, o = [], f = 3; f < arguments.length; f++)
        o[f - 3] = arguments[f];
      this.valueIdentifier = e, this.name = n, typeof t == "number" ? this.values = Int32Array.from([t]) : this.values = t, this.otherEncodingNames = o, r.VALUE_IDENTIFIER_TO_ECI.set(e, this), r.NAME_TO_ECI.set(n, this);
      for (var u = this.values, s = 0, c = u.length; s !== c; s++) {
        var h = u[s];
        r.VALUES_TO_ECI.set(h, this);
      }
      try {
        for (var d = Wr(o), l = d.next(); !l.done; l = d.next()) {
          var v = l.value;
          r.NAME_TO_ECI.set(v, this);
        }
      } catch (p) {
        i = { error: p };
      } finally {
        try {
          l && !l.done && (a = d.return) && a.call(d);
        } finally {
          if (i)
            throw i.error;
        }
      }
    }
    return r.prototype.getValueIdentifier = function() {
      return this.valueIdentifier;
    }, r.prototype.getName = function() {
      return this.name;
    }, r.prototype.getValue = function() {
      return this.values[0];
    }, r.getCharacterSetECIByValue = function(e) {
      if (e < 0 || e >= 900)
        throw new m("incorect value");
      var t = r.VALUES_TO_ECI.get(e);
      if (t === void 0)
        throw new m("incorect value");
      return t;
    }, r.getCharacterSetECIByName = function(e) {
      var t = r.NAME_TO_ECI.get(e);
      if (t === void 0)
        throw new m("incorect value");
      return t;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.getName() === t.getName();
    }, r.VALUE_IDENTIFIER_TO_ECI = /* @__PURE__ */ new Map(), r.VALUES_TO_ECI = /* @__PURE__ */ new Map(), r.NAME_TO_ECI = /* @__PURE__ */ new Map(), r.Cp437 = new r(V.Cp437, Int32Array.from([0, 2]), "Cp437"), r.ISO8859_1 = new r(V.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), r.ISO8859_2 = new r(V.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), r.ISO8859_3 = new r(V.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), r.ISO8859_4 = new r(V.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), r.ISO8859_5 = new r(V.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), r.ISO8859_6 = new r(V.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), r.ISO8859_7 = new r(V.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), r.ISO8859_8 = new r(V.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), r.ISO8859_9 = new r(V.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), r.ISO8859_10 = new r(V.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), r.ISO8859_11 = new r(V.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), r.ISO8859_13 = new r(V.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), r.ISO8859_14 = new r(V.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), r.ISO8859_15 = new r(V.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), r.ISO8859_16 = new r(V.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), r.SJIS = new r(V.SJIS, 20, "SJIS", "Shift_JIS"), r.Cp1250 = new r(V.Cp1250, 21, "Cp1250", "windows-1250"), r.Cp1251 = new r(V.Cp1251, 22, "Cp1251", "windows-1251"), r.Cp1252 = new r(V.Cp1252, 23, "Cp1252", "windows-1252"), r.Cp1256 = new r(V.Cp1256, 24, "Cp1256", "windows-1256"), r.UnicodeBigUnmarked = new r(V.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), r.UTF8 = new r(V.UTF8, 26, "UTF8", "UTF-8"), r.ASCII = new r(V.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), r.Big5 = new r(V.Big5, 28, "Big5"), r.GB18030 = new r(V.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), r.EUC_KR = new r(V.EUC_KR, 30, "EUC_KR", "EUC-KR"), r;
  }()
), zr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ke = (
  /** @class */
  function(r) {
    zr(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "UnsupportedOperationException", e;
  }(fe)
), _e = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e, t) {
      var n = this.encodingName(t);
      return this.customDecoder ? this.customDecoder(e, n) : typeof TextDecoder > "u" || this.shouldDecodeOnFallback(n) ? this.decodeFallback(e, n) : new TextDecoder(n).decode(e);
    }, r.shouldDecodeOnFallback = function(e) {
      return !r.isBrowser() && e === "ISO-8859-1";
    }, r.encode = function(e, t) {
      var n = this.encodingName(t);
      return this.customEncoder ? this.customEncoder(e, n) : typeof TextEncoder > "u" ? this.encodeFallback(e) : new TextEncoder().encode(e);
    }, r.isBrowser = function() {
      return typeof window < "u" && {}.toString.call(window) === "[object Window]";
    }, r.encodingName = function(e) {
      return typeof e == "string" ? e : e.getName();
    }, r.encodingCharacterSet = function(e) {
      return e instanceof Q ? e : Q.getCharacterSetECIByName(e);
    }, r.decodeFallback = function(e, t) {
      var n = this.encodingCharacterSet(t);
      if (r.isDecodeFallbackSupported(n)) {
        for (var i = "", a = 0, o = e.length; a < o; a++) {
          var f = e[a].toString(16);
          f.length < 2 && (f = "0" + f), i += "%" + f;
        }
        return decodeURIComponent(i);
      }
      if (n.equals(Q.UnicodeBigUnmarked))
        return String.fromCharCode.apply(null, new Uint16Array(e.buffer));
      throw new Ke("Encoding " + this.encodingName(t) + " not supported by fallback.");
    }, r.isDecodeFallbackSupported = function(e) {
      return e.equals(Q.UTF8) || e.equals(Q.ISO8859_1) || e.equals(Q.ASCII);
    }, r.encodeFallback = function(e) {
      for (var t = btoa(unescape(encodeURIComponent(e))), n = t.split(""), i = [], a = 0; a < n.length; a++)
        i.push(n[a].charCodeAt(0));
      return new Uint8Array(i);
    }, r;
  }()
), X = (
  /** @class */
  function() {
    function r() {
    }
    return r.castAsNonUtf8Char = function(e, t) {
      t === void 0 && (t = null);
      var n = t ? t.getName() : this.ISO88591;
      return _e.decode(new Uint8Array([e]), n);
    }, r.guessEncoding = function(e, t) {
      if (t != null && t.get(j.CHARACTER_SET) !== void 0)
        return t.get(j.CHARACTER_SET).toString();
      for (var n = e.length, i = !0, a = !0, o = !0, f = 0, u = 0, s = 0, c = 0, h = 0, d = 0, l = 0, v = 0, p = 0, y = 0, _ = 0, g = e.length > 3 && e[0] === /*(byte) */
      239 && e[1] === /*(byte) */
      187 && e[2] === /*(byte) */
      191, w = 0; w < n && (i || a || o); w++) {
        var E = e[w] & 255;
        o && (f > 0 ? E & 128 ? f-- : o = !1 : E & 128 && (E & 64 ? (f++, E & 32 ? (f++, E & 16 ? (f++, E & 8 ? o = !1 : c++) : s++) : u++) : o = !1)), i && (E > 127 && E < 160 ? i = !1 : E > 159 && (E < 192 || E === 215 || E === 247) && _++), a && (h > 0 ? E < 64 || E === 127 || E > 252 ? a = !1 : h-- : E === 128 || E === 160 || E > 239 ? a = !1 : E > 160 && E < 224 ? (d++, v = 0, l++, l > p && (p = l)) : E > 127 ? (h++, l = 0, v++, v > y && (y = v)) : (l = 0, v = 0));
      }
      return o && f > 0 && (o = !1), a && h > 0 && (a = !1), o && (g || u + s + c > 0) ? r.UTF8 : a && (r.ASSUME_SHIFT_JIS || p >= 3 || y >= 3) ? r.SHIFT_JIS : i && a ? p === 2 && d === 2 || _ * 10 >= n ? r.SHIFT_JIS : r.ISO88591 : i ? r.ISO88591 : a ? r.SHIFT_JIS : o ? r.UTF8 : r.PLATFORM_DEFAULT_ENCODING;
    }, r.format = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var i = -1;
      function a(f, u, s, c, h, d) {
        if (f === "%%")
          return "%";
        if (t[++i] !== void 0) {
          f = c ? parseInt(c.substr(1)) : void 0;
          var l = h ? parseInt(h.substr(1)) : void 0, v;
          switch (d) {
            case "s":
              v = t[i];
              break;
            case "c":
              v = t[i][0];
              break;
            case "f":
              v = parseFloat(t[i]).toFixed(f);
              break;
            case "p":
              v = parseFloat(t[i]).toPrecision(f);
              break;
            case "e":
              v = parseFloat(t[i]).toExponential(f);
              break;
            case "x":
              v = parseInt(t[i]).toString(l || 16);
              break;
            case "d":
              v = parseFloat(parseInt(t[i], l || 10).toPrecision(f)).toFixed(0);
              break;
          }
          v = typeof v == "object" ? JSON.stringify(v) : (+v).toString(l);
          for (var p = parseInt(s), y = s && s[0] + "" == "0" ? "0" : " "; v.length < p; )
            v = u !== void 0 ? v + y : y + v;
          return v;
        }
      }
      var o = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
      return e.replace(o, a);
    }, r.getBytes = function(e, t) {
      return _e.encode(e, t);
    }, r.getCharCode = function(e, t) {
      return t === void 0 && (t = 0), e.charCodeAt(t);
    }, r.getCharAt = function(e) {
      return String.fromCharCode(e);
    }, r.SHIFT_JIS = Q.SJIS.getName(), r.GB2312 = "GB2312", r.ISO88591 = Q.ISO8859_1.getName(), r.EUC_JP = "EUC_JP", r.UTF8 = Q.UTF8.getName(), r.PLATFORM_DEFAULT_ENCODING = r.UTF8, r.ASSUME_SHIFT_JIS = !1, r;
  }()
), G = (
  /** @class */
  function() {
    function r(e) {
      e === void 0 && (e = ""), this.value = e;
    }
    return r.prototype.enableDecoding = function(e) {
      return this.encoding = e, this;
    }, r.prototype.append = function(e) {
      return typeof e == "string" ? this.value += e.toString() : this.encoding ? this.value += X.castAsNonUtf8Char(e, this.encoding) : this.value += String.fromCharCode(e), this;
    }, r.prototype.appendChars = function(e, t, n) {
      for (var i = t; t < t + n; i++)
        this.append(e[i]);
      return this;
    }, r.prototype.length = function() {
      return this.value.length;
    }, r.prototype.charAt = function(e) {
      return this.value.charAt(e);
    }, r.prototype.deleteCharAt = function(e) {
      this.value = this.value.substr(0, e) + this.value.substring(e + 1);
    }, r.prototype.setCharAt = function(e, t) {
      this.value = this.value.substr(0, e) + t + this.value.substr(e + 1);
    }, r.prototype.substring = function(e, t) {
      return this.value.substring(e, t);
    }, r.prototype.setLengthToZero = function() {
      this.value = "";
    }, r.prototype.toString = function() {
      return this.value;
    }, r.prototype.insert = function(e, t) {
      this.value = this.value.substr(0, e) + t + this.value.substr(e + t.length);
    }, r;
  }()
), Ae = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      if (this.width = e, this.height = t, this.rowSize = n, this.bits = i, t == null && (t = e), this.height = t, e < 1 || t < 1)
        throw new D("Both dimensions must be greater than 0");
      n == null && (n = Math.floor((e + 31) / 32)), this.rowSize = n, i == null && (this.bits = new Int32Array(this.rowSize * this.height));
    }
    return r.parseFromBooleanArray = function(e) {
      for (var t = e.length, n = e[0].length, i = new r(n, t), a = 0; a < t; a++)
        for (var o = e[a], f = 0; f < n; f++)
          o[f] && i.set(f, a);
      return i;
    }, r.parseFromString = function(e, t, n) {
      if (e === null)
        throw new D("stringRepresentation cannot be null");
      for (var i = new Array(e.length), a = 0, o = 0, f = -1, u = 0, s = 0; s < e.length; )
        if (e.charAt(s) === `
` || e.charAt(s) === "\r") {
          if (a > o) {
            if (f === -1)
              f = a - o;
            else if (a - o !== f)
              throw new D("row lengths do not match");
            o = a, u++;
          }
          s++;
        } else if (e.substring(s, s + t.length) === t)
          s += t.length, i[a] = !0, a++;
        else if (e.substring(s, s + n.length) === n)
          s += n.length, i[a] = !1, a++;
        else
          throw new D("illegal character encountered: " + e.substring(s));
      if (a > o) {
        if (f === -1)
          f = a - o;
        else if (a - o !== f)
          throw new D("row lengths do not match");
        u++;
      }
      for (var c = new r(f, u), h = 0; h < a; h++)
        i[h] && c.set(Math.floor(h % f), Math.floor(h / f));
      return c;
    }, r.prototype.get = function(e, t) {
      var n = t * this.rowSize + Math.floor(e / 32);
      return (this.bits[n] >>> (e & 31) & 1) !== 0;
    }, r.prototype.set = function(e, t) {
      var n = t * this.rowSize + Math.floor(e / 32);
      this.bits[n] |= 1 << (e & 31) & 4294967295;
    }, r.prototype.unset = function(e, t) {
      var n = t * this.rowSize + Math.floor(e / 32);
      this.bits[n] &= ~(1 << (e & 31) & 4294967295);
    }, r.prototype.flip = function(e, t) {
      var n = t * this.rowSize + Math.floor(e / 32);
      this.bits[n] ^= 1 << (e & 31) & 4294967295;
    }, r.prototype.xor = function(e) {
      if (this.width !== e.getWidth() || this.height !== e.getHeight() || this.rowSize !== e.getRowSize())
        throw new D("input matrix dimensions do not match");
      for (var t = new ee(Math.floor(this.width / 32) + 1), n = this.rowSize, i = this.bits, a = 0, o = this.height; a < o; a++)
        for (var f = a * n, u = e.getRow(a, t).getBitArray(), s = 0; s < n; s++)
          i[f + s] ^= u[s];
    }, r.prototype.clear = function() {
      for (var e = this.bits, t = e.length, n = 0; n < t; n++)
        e[n] = 0;
    }, r.prototype.setRegion = function(e, t, n, i) {
      if (t < 0 || e < 0)
        throw new D("Left and top must be nonnegative");
      if (i < 1 || n < 1)
        throw new D("Height and width must be at least 1");
      var a = e + n, o = t + i;
      if (o > this.height || a > this.width)
        throw new D("The region must fit inside the matrix");
      for (var f = this.rowSize, u = this.bits, s = t; s < o; s++)
        for (var c = s * f, h = e; h < a; h++)
          u[c + Math.floor(h / 32)] |= 1 << (h & 31) & 4294967295;
    }, r.prototype.getRow = function(e, t) {
      t == null || t.getSize() < this.width ? t = new ee(this.width) : t.clear();
      for (var n = this.rowSize, i = this.bits, a = e * n, o = 0; o < n; o++)
        t.setBulk(o * 32, i[a + o]);
      return t;
    }, r.prototype.setRow = function(e, t) {
      W.arraycopy(t.getBitArray(), 0, this.bits, e * this.rowSize, this.rowSize);
    }, r.prototype.rotate180 = function() {
      for (var e = this.getWidth(), t = this.getHeight(), n = new ee(e), i = new ee(e), a = 0, o = Math.floor((t + 1) / 2); a < o; a++)
        n = this.getRow(a, n), i = this.getRow(t - 1 - a, i), n.reverse(), i.reverse(), this.setRow(a, i), this.setRow(t - 1 - a, n);
    }, r.prototype.getEnclosingRectangle = function() {
      for (var e = this.width, t = this.height, n = this.rowSize, i = this.bits, a = e, o = t, f = -1, u = -1, s = 0; s < t; s++)
        for (var c = 0; c < n; c++) {
          var h = i[s * n + c];
          if (h !== 0) {
            if (s < o && (o = s), s > u && (u = s), c * 32 < a) {
              for (var d = 0; !(h << 31 - d & 4294967295); )
                d++;
              c * 32 + d < a && (a = c * 32 + d);
            }
            if (c * 32 + 31 > f) {
              for (var d = 31; !(h >>> d); )
                d--;
              c * 32 + d > f && (f = c * 32 + d);
            }
          }
        }
      return f < a || u < o ? null : Int32Array.from([a, o, f - a + 1, u - o + 1]);
    }, r.prototype.getTopLeftOnBit = function() {
      for (var e = this.rowSize, t = this.bits, n = 0; n < t.length && t[n] === 0; )
        n++;
      if (n === t.length)
        return null;
      for (var i = n / e, a = n % e * 32, o = t[n], f = 0; !(o << 31 - f & 4294967295); )
        f++;
      return a += f, Int32Array.from([a, i]);
    }, r.prototype.getBottomRightOnBit = function() {
      for (var e = this.rowSize, t = this.bits, n = t.length - 1; n >= 0 && t[n] === 0; )
        n--;
      if (n < 0)
        return null;
      for (var i = Math.floor(n / e), a = Math.floor(n % e) * 32, o = t[n], f = 31; !(o >>> f); )
        f--;
      return a += f, Int32Array.from([a, i]);
    }, r.prototype.getWidth = function() {
      return this.width;
    }, r.prototype.getHeight = function() {
      return this.height;
    }, r.prototype.getRowSize = function() {
      return this.rowSize;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.width === t.width && this.height === t.height && this.rowSize === t.rowSize && ce.equals(this.bits, t.bits);
    }, r.prototype.hashCode = function() {
      var e = this.width;
      return e = 31 * e + this.width, e = 31 * e + this.height, e = 31 * e + this.rowSize, e = 31 * e + ce.hashCode(this.bits), e;
    }, r.prototype.toString = function(e, t, n) {
      return e === void 0 && (e = "X "), t === void 0 && (t = "  "), n === void 0 && (n = `
`), this.buildToString(e, t, n);
    }, r.prototype.buildToString = function(e, t, n) {
      for (var i = new G(), a = 0, o = this.height; a < o; a++) {
        for (var f = 0, u = this.width; f < u; f++)
          i.append(this.get(f, a) ? e : t);
        i.append(n);
      }
      return i.toString();
    }, r.prototype.clone = function() {
      return new r(this.width, this.height, this.rowSize, this.bits.slice());
    }, r;
  }()
), Yr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), C = (
  /** @class */
  function(r) {
    Yr(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.getNotFoundInstance = function() {
      return new e();
    }, e.kind = "NotFoundException", e;
  }(fe)
), Zr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), jr = (
  /** @class */
  function(r) {
    Zr(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.luminances = e.EMPTY, n.buckets = new Int32Array(e.LUMINANCE_BUCKETS), n;
    }
    return e.prototype.getBlackRow = function(t, n) {
      var i = this.getLuminanceSource(), a = i.getWidth();
      n == null || n.getSize() < a ? n = new ee(a) : n.clear(), this.initArrays(a);
      for (var o = i.getRow(t, this.luminances), f = this.buckets, u = 0; u < a; u++)
        f[(o[u] & 255) >> e.LUMINANCE_SHIFT]++;
      var s = e.estimateBlackPoint(f);
      if (a < 3)
        for (var u = 0; u < a; u++)
          (o[u] & 255) < s && n.set(u);
      else
        for (var c = o[0] & 255, h = o[1] & 255, u = 1; u < a - 1; u++) {
          var d = o[u + 1] & 255;
          (h * 4 - c - d) / 2 < s && n.set(u), c = h, h = d;
        }
      return n;
    }, e.prototype.getBlackMatrix = function() {
      var t = this.getLuminanceSource(), n = t.getWidth(), i = t.getHeight(), a = new Ae(n, i);
      this.initArrays(n);
      for (var o = this.buckets, f = 1; f < 5; f++)
        for (var u = Math.floor(i * f / 5), s = t.getRow(u, this.luminances), c = Math.floor(n * 4 / 5), h = Math.floor(n / 5); h < c; h++) {
          var d = s[h] & 255;
          o[d >> e.LUMINANCE_SHIFT]++;
        }
      for (var l = e.estimateBlackPoint(o), v = t.getMatrix(), f = 0; f < i; f++)
        for (var p = f * n, h = 0; h < n; h++) {
          var d = v[p + h] & 255;
          d < l && a.set(h, f);
        }
      return a;
    }, e.prototype.createBinarizer = function(t) {
      return new e(t);
    }, e.prototype.initArrays = function(t) {
      this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
      for (var n = this.buckets, i = 0; i < e.LUMINANCE_BUCKETS; i++)
        n[i] = 0;
    }, e.estimateBlackPoint = function(t) {
      for (var n = t.length, i = 0, a = 0, o = 0, f = 0; f < n; f++)
        t[f] > o && (a = f, o = t[f]), t[f] > i && (i = t[f]);
      for (var u = 0, s = 0, f = 0; f < n; f++) {
        var c = f - a, h = t[f] * c * c;
        h > s && (u = f, s = h);
      }
      if (a > u) {
        var d = a;
        a = u, u = d;
      }
      if (u - a <= n / 16)
        throw new C();
      for (var l = u - 1, v = -1, f = u - 1; f > a; f--) {
        var p = f - a, h = p * p * (u - f) * (i - t[f]);
        h > v && (l = f, v = h);
      }
      return l << e.LUMINANCE_SHIFT;
    }, e.LUMINANCE_BITS = 5, e.LUMINANCE_SHIFT = 8 - e.LUMINANCE_BITS, e.LUMINANCE_BUCKETS = 1 << e.LUMINANCE_BITS, e.EMPTY = Uint8ClampedArray.from([0]), e;
  }(Ur)
), $r = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Kr = (
  /** @class */
  function(r) {
    $r(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.matrix = null, n;
    }
    return e.prototype.getBlackMatrix = function() {
      if (this.matrix !== null)
        return this.matrix;
      var t = this.getLuminanceSource(), n = t.getWidth(), i = t.getHeight();
      if (n >= e.MINIMUM_DIMENSION && i >= e.MINIMUM_DIMENSION) {
        var a = t.getMatrix(), o = n >> e.BLOCK_SIZE_POWER;
        n & e.BLOCK_SIZE_MASK && o++;
        var f = i >> e.BLOCK_SIZE_POWER;
        i & e.BLOCK_SIZE_MASK && f++;
        var u = e.calculateBlackPoints(a, o, f, n, i), s = new Ae(n, i);
        e.calculateThresholdForBlock(a, o, f, n, i, u, s), this.matrix = s;
      } else
        this.matrix = r.prototype.getBlackMatrix.call(this);
      return this.matrix;
    }, e.prototype.createBinarizer = function(t) {
      return new e(t);
    }, e.calculateThresholdForBlock = function(t, n, i, a, o, f, u) {
      for (var s = o - e.BLOCK_SIZE, c = a - e.BLOCK_SIZE, h = 0; h < i; h++) {
        var d = h << e.BLOCK_SIZE_POWER;
        d > s && (d = s);
        for (var l = e.cap(h, 2, i - 3), v = 0; v < n; v++) {
          var p = v << e.BLOCK_SIZE_POWER;
          p > c && (p = c);
          for (var y = e.cap(v, 2, n - 3), _ = 0, g = -2; g <= 2; g++) {
            var w = f[l + g];
            _ += w[y - 2] + w[y - 1] + w[y] + w[y + 1] + w[y + 2];
          }
          var E = _ / 25;
          e.thresholdBlock(t, p, d, E, a, u);
        }
      }
    }, e.cap = function(t, n, i) {
      return t < n ? n : t > i ? i : t;
    }, e.thresholdBlock = function(t, n, i, a, o, f) {
      for (var u = 0, s = i * o + n; u < e.BLOCK_SIZE; u++, s += o)
        for (var c = 0; c < e.BLOCK_SIZE; c++)
          (t[s + c] & 255) <= a && f.set(n + c, i + u);
    }, e.calculateBlackPoints = function(t, n, i, a, o) {
      for (var f = o - e.BLOCK_SIZE, u = a - e.BLOCK_SIZE, s = new Array(i), c = 0; c < i; c++) {
        s[c] = new Int32Array(n);
        var h = c << e.BLOCK_SIZE_POWER;
        h > f && (h = f);
        for (var d = 0; d < n; d++) {
          var l = d << e.BLOCK_SIZE_POWER;
          l > u && (l = u);
          for (var v = 0, p = 255, y = 0, _ = 0, g = h * a + l; _ < e.BLOCK_SIZE; _++, g += a) {
            for (var w = 0; w < e.BLOCK_SIZE; w++) {
              var E = t[g + w] & 255;
              v += E, E < p && (p = E), E > y && (y = E);
            }
            if (y - p > e.MIN_DYNAMIC_RANGE)
              for (_++, g += a; _ < e.BLOCK_SIZE; _++, g += a)
                for (var w = 0; w < e.BLOCK_SIZE; w++)
                  v += t[g + w] & 255;
          }
          var I = v >> e.BLOCK_SIZE_POWER * 2;
          if (y - p <= e.MIN_DYNAMIC_RANGE && (I = p / 2, c > 0 && d > 0)) {
            var S = (s[c - 1][d] + 2 * s[c][d - 1] + s[c - 1][d - 1]) / 4;
            p < S && (I = S);
          }
          s[c][d] = I;
        }
      }
      return s;
    }, e.BLOCK_SIZE_POWER = 3, e.BLOCK_SIZE = 1 << e.BLOCK_SIZE_POWER, e.BLOCK_SIZE_MASK = e.BLOCK_SIZE - 1, e.MINIMUM_DIMENSION = e.BLOCK_SIZE * 5, e.MIN_DYNAMIC_RANGE = 24, e;
  }(jr)
), rt = (
  /** @class */
  function() {
    function r(e, t) {
      this.width = e, this.height = t;
    }
    return r.prototype.getWidth = function() {
      return this.width;
    }, r.prototype.getHeight = function() {
      return this.height;
    }, r.prototype.isCropSupported = function() {
      return !1;
    }, r.prototype.crop = function(e, t, n, i) {
      throw new Ke("This luminance source does not support cropping.");
    }, r.prototype.isRotateSupported = function() {
      return !1;
    }, r.prototype.rotateCounterClockwise = function() {
      throw new Ke("This luminance source does not support rotation by 90 degrees.");
    }, r.prototype.rotateCounterClockwise45 = function() {
      throw new Ke("This luminance source does not support rotation by 45 degrees.");
    }, r.prototype.toString = function() {
      for (var e = new Uint8ClampedArray(this.width), t = new G(), n = 0; n < this.height; n++) {
        for (var i = this.getRow(n, e), a = 0; a < this.width; a++) {
          var o = i[a] & 255, f = void 0;
          o < 64 ? f = "#" : o < 128 ? f = "+" : o < 192 ? f = "." : f = " ", t.append(f);
        }
        t.append(`
`);
      }
      return t.toString();
    }, r;
  }()
), qr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Tt = (
  /** @class */
  function(r) {
    qr(e, r);
    function e(t) {
      var n = r.call(this, t.getWidth(), t.getHeight()) || this;
      return n.delegate = t, n;
    }
    return e.prototype.getRow = function(t, n) {
      for (var i = this.delegate.getRow(t, n), a = this.getWidth(), o = 0; o < a; o++)
        i[o] = /*(byte)*/
        255 - (i[o] & 255);
      return i;
    }, e.prototype.getMatrix = function() {
      for (var t = this.delegate.getMatrix(), n = this.getWidth() * this.getHeight(), i = new Uint8ClampedArray(n), a = 0; a < n; a++)
        i[a] = /*(byte)*/
        255 - (t[a] & 255);
      return i;
    }, e.prototype.isCropSupported = function() {
      return this.delegate.isCropSupported();
    }, e.prototype.crop = function(t, n, i, a) {
      return new e(this.delegate.crop(t, n, i, a));
    }, e.prototype.isRotateSupported = function() {
      return this.delegate.isRotateSupported();
    }, e.prototype.invert = function() {
      return this.delegate;
    }, e.prototype.rotateCounterClockwise = function() {
      return new e(this.delegate.rotateCounterClockwise());
    }, e.prototype.rotateCounterClockwise45 = function() {
      return new e(this.delegate.rotateCounterClockwise45());
    }, e;
  }(rt)
), Qr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Jr = (
  /** @class */
  function(r) {
    Qr(e, r);
    function e(t) {
      var n = r.call(this, t.width, t.height) || this;
      return n.canvas = t, n.tempCanvasElement = null, n.buffer = e.makeBufferFromCanvasImageData(t), n;
    }
    return e.makeBufferFromCanvasImageData = function(t) {
      var n = t.getContext("2d").getImageData(0, 0, t.width, t.height);
      return e.toGrayscaleBuffer(n.data, t.width, t.height);
    }, e.toGrayscaleBuffer = function(t, n, i) {
      for (var a = new Uint8ClampedArray(n * i), o = 0, f = 0, u = t.length; o < u; o += 4, f++) {
        var s = void 0, c = t[o + 3];
        if (c === 0)
          s = 255;
        else {
          var h = t[o], d = t[o + 1], l = t[o + 2];
          s = 306 * h + 601 * d + 117 * l + 512 >> 10;
        }
        a[f] = s;
      }
      return a;
    }, e.prototype.getRow = function(t, n) {
      if (t < 0 || t >= this.getHeight())
        throw new D("Requested row is outside the image: " + t);
      var i = this.getWidth(), a = t * i;
      return n === null ? n = this.buffer.slice(a, a + i) : (n.length < i && (n = new Uint8ClampedArray(i)), n.set(this.buffer.slice(a, a + i))), n;
    }, e.prototype.getMatrix = function() {
      return this.buffer;
    }, e.prototype.isCropSupported = function() {
      return !0;
    }, e.prototype.crop = function(t, n, i, a) {
      return r.prototype.crop.call(this, t, n, i, a), this;
    }, e.prototype.isRotateSupported = function() {
      return !0;
    }, e.prototype.rotateCounterClockwise = function() {
      return this.rotate(-90), this;
    }, e.prototype.rotateCounterClockwise45 = function() {
      return this.rotate(-45), this;
    }, e.prototype.getTempCanvasElement = function() {
      if (this.tempCanvasElement === null) {
        var t = this.canvas.ownerDocument.createElement("canvas");
        t.width = this.canvas.width, t.height = this.canvas.height, this.tempCanvasElement = t;
      }
      return this.tempCanvasElement;
    }, e.prototype.rotate = function(t) {
      var n = this.getTempCanvasElement(), i = n.getContext("2d"), a = t * e.DEGREE_TO_RADIANS, o = this.canvas.width, f = this.canvas.height, u = Math.ceil(Math.abs(Math.cos(a)) * o + Math.abs(Math.sin(a)) * f), s = Math.ceil(Math.abs(Math.sin(a)) * o + Math.abs(Math.cos(a)) * f);
      return n.width = u, n.height = s, i.translate(u / 2, s / 2), i.rotate(a), i.drawImage(this.canvas, o / -2, f / -2), this.buffer = e.makeBufferFromCanvasImageData(n), this;
    }, e.prototype.invert = function() {
      return new Tt(this);
    }, e.DEGREE_TO_RADIANS = Math.PI / 180, e;
  }(rt)
), en = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.deviceId = e, this.label = t, this.kind = "videoinput", this.groupId = n || void 0;
    }
    return r.prototype.toJSON = function() {
      return {
        kind: this.kind,
        groupId: this.groupId,
        deviceId: this.deviceId,
        label: this.label
      };
    }, r;
  }()
), ae = function(r, e, t, n) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function f(c) {
      try {
        s(n.next(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      try {
        s(n.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function s(c) {
      c.done ? a(c.value) : i(c.value).then(f, u);
    }
    s((n = n.apply(r, e || [])).next());
  });
}, oe = function(r, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function f(s) {
    return function(c) {
      return u([s, c]);
    };
  }
  function u(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (n = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done)
          return a;
        switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
          case 0:
          case 1:
            a = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = s;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(s);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = e.call(r, t);
      } catch (c) {
        s = [6, c], i = 0;
      } finally {
        n = a = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, tn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Fe = (
  /** @class */
  function() {
    function r(e, t, n) {
      t === void 0 && (t = 500), this.reader = e, this.timeBetweenScansMillis = t, this._hints = n, this._stopContinuousDecode = !1, this._stopAsyncDecode = !1, this._timeBetweenDecodingAttempts = 0;
    }
    return Object.defineProperty(r.prototype, "hasNavigator", {
      /**
       * If navigator is present.
       */
      get: function() {
        return typeof navigator < "u";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "isMediaDevicesSuported", {
      /**
       * If mediaDevices under navigator is supported.
       */
      get: function() {
        return this.hasNavigator && !!navigator.mediaDevices;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "canEnumerateDevices", {
      /**
       * If enumerateDevices under navigator is supported.
       */
      get: function() {
        return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "timeBetweenDecodingAttempts", {
      /** Time between two decoding tries in milli seconds. */
      get: function() {
        return this._timeBetweenDecodingAttempts;
      },
      /**
       * Change the time span the decoder waits between two decoding tries.
       *
       * @param {number} millis Time between two decoding tries in milli seconds.
       */
      set: function(e) {
        this._timeBetweenDecodingAttempts = e < 0 ? 0 : e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "hints", {
      /**
       * Sets the hints.
       */
      get: function() {
        return this._hints;
      },
      /**
       * Sets the hints.
       */
      set: function(e) {
        this._hints = e || null;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.listVideoInputDevices = function() {
      return ae(this, void 0, void 0, function() {
        var e, t, n, i, a, o, f, u, s, c, h, d;
        return oe(this, function(l) {
          switch (l.label) {
            case 0:
              if (!this.hasNavigator)
                throw new Error("Can't enumerate devices, navigator is not present.");
              if (!this.canEnumerateDevices)
                throw new Error("Can't enumerate devices, method not supported.");
              return [4, navigator.mediaDevices.enumerateDevices()];
            case 1:
              e = l.sent(), t = [];
              try {
                for (n = tn(e), i = n.next(); !i.done; i = n.next())
                  a = i.value, o = a.kind === "video" ? "videoinput" : a.kind, o === "videoinput" && (f = a.deviceId || a.id, u = a.label || "Video device " + (t.length + 1), s = a.groupId, c = { deviceId: f, label: u, kind: o, groupId: s }, t.push(c));
              } catch (v) {
                h = { error: v };
              } finally {
                try {
                  i && !i.done && (d = n.return) && d.call(n);
                } finally {
                  if (h)
                    throw h.error;
                }
              }
              return [2, t];
          }
        });
      });
    }, r.prototype.getVideoInputDevices = function() {
      return ae(this, void 0, void 0, function() {
        var e;
        return oe(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.listVideoInputDevices()];
            case 1:
              return e = t.sent(), [2, e.map(function(n) {
                return new en(n.deviceId, n.label);
              })];
          }
        });
      });
    }, r.prototype.findDeviceById = function(e) {
      return ae(this, void 0, void 0, function() {
        var t;
        return oe(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.listVideoInputDevices()];
            case 1:
              return t = n.sent(), t ? [2, t.find(function(i) {
                return i.deviceId === e;
              })] : [2, null];
          }
        });
      });
    }, r.prototype.decodeFromInputVideoDevice = function(e, t) {
      return ae(this, void 0, void 0, function() {
        return oe(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.decodeOnceFromVideoDevice(e, t)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }, r.prototype.decodeOnceFromVideoDevice = function(e, t) {
      return ae(this, void 0, void 0, function() {
        var n, i;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              return this.reset(), e ? n = { deviceId: { exact: e } } : n = { facingMode: "environment" }, i = { video: n }, [4, this.decodeOnceFromConstraints(i, t)];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, r.prototype.decodeOnceFromConstraints = function(e, t) {
      return ae(this, void 0, void 0, function() {
        var n;
        return oe(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, navigator.mediaDevices.getUserMedia(e)];
            case 1:
              return n = i.sent(), [4, this.decodeOnceFromStream(n, t)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, r.prototype.decodeOnceFromStream = function(e, t) {
      return ae(this, void 0, void 0, function() {
        var n, i;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              return this.reset(), [4, this.attachStreamToVideo(e, t)];
            case 1:
              return n = a.sent(), [4, this.decodeOnce(n)];
            case 2:
              return i = a.sent(), [2, i];
          }
        });
      });
    }, r.prototype.decodeFromInputVideoDeviceContinuously = function(e, t, n) {
      return ae(this, void 0, void 0, function() {
        return oe(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.decodeFromVideoDevice(e, t, n)];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    }, r.prototype.decodeFromVideoDevice = function(e, t, n) {
      return ae(this, void 0, void 0, function() {
        var i, a;
        return oe(this, function(o) {
          switch (o.label) {
            case 0:
              return e ? i = { deviceId: { exact: e } } : i = { facingMode: "environment" }, a = { video: i }, [4, this.decodeFromConstraints(a, t, n)];
            case 1:
              return [2, o.sent()];
          }
        });
      });
    }, r.prototype.decodeFromConstraints = function(e, t, n) {
      return ae(this, void 0, void 0, function() {
        var i;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, navigator.mediaDevices.getUserMedia(e)];
            case 1:
              return i = a.sent(), [4, this.decodeFromStream(i, t, n)];
            case 2:
              return [2, a.sent()];
          }
        });
      });
    }, r.prototype.decodeFromStream = function(e, t, n) {
      return ae(this, void 0, void 0, function() {
        var i;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              return this.reset(), [4, this.attachStreamToVideo(e, t)];
            case 1:
              return i = a.sent(), [4, this.decodeContinuously(i, n)];
            case 2:
              return [2, a.sent()];
          }
        });
      });
    }, r.prototype.stopAsyncDecode = function() {
      this._stopAsyncDecode = !0;
    }, r.prototype.stopContinuousDecode = function() {
      this._stopContinuousDecode = !0;
    }, r.prototype.attachStreamToVideo = function(e, t) {
      return ae(this, void 0, void 0, function() {
        var n;
        return oe(this, function(i) {
          switch (i.label) {
            case 0:
              return n = this.prepareVideoElement(t), this.addVideoSource(n, e), this.videoElement = n, this.stream = e, [4, this.playVideoOnLoadAsync(n)];
            case 1:
              return i.sent(), [2, n];
          }
        });
      });
    }, r.prototype.playVideoOnLoadAsync = function(e) {
      var t = this;
      return new Promise(function(n, i) {
        return t.playVideoOnLoad(e, function() {
          return n();
        });
      });
    }, r.prototype.playVideoOnLoad = function(e, t) {
      var n = this;
      this.videoEndedListener = function() {
        return n.stopStreams();
      }, this.videoCanPlayListener = function() {
        return n.tryPlayVideo(e);
      }, e.addEventListener("ended", this.videoEndedListener), e.addEventListener("canplay", this.videoCanPlayListener), e.addEventListener("playing", t), this.tryPlayVideo(e);
    }, r.prototype.isVideoPlaying = function(e) {
      return e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2;
    }, r.prototype.tryPlayVideo = function(e) {
      return ae(this, void 0, void 0, function() {
        return oe(this, function(t) {
          switch (t.label) {
            case 0:
              if (this.isVideoPlaying(e))
                return console.warn("Trying to play video that is already playing."), [
                  2
                  /*return*/
                ];
              t.label = 1;
            case 1:
              return t.trys.push([1, 3, , 4]), [4, e.play()];
            case 2:
              return t.sent(), [3, 4];
            case 3:
              return t.sent(), console.warn("It was not possible to play the video."), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getMediaElement = function(e, t) {
      var n = document.getElementById(e);
      if (!n)
        throw new pe("element with id '" + e + "' not found");
      if (n.nodeName.toLowerCase() !== t.toLowerCase())
        throw new pe("element with id '" + e + "' must be an " + t + " element");
      return n;
    }, r.prototype.decodeFromImage = function(e, t) {
      if (!e && !t)
        throw new pe("either imageElement with a src set or an url must be provided");
      return t && !e ? this.decodeFromImageUrl(t) : this.decodeFromImageElement(e);
    }, r.prototype.decodeFromVideo = function(e, t) {
      if (!e && !t)
        throw new pe("Either an element with a src set or an URL must be provided");
      return t && !e ? this.decodeFromVideoUrl(t) : this.decodeFromVideoElement(e);
    }, r.prototype.decodeFromVideoContinuously = function(e, t, n) {
      if (e === void 0 && t === void 0)
        throw new pe("Either an element with a src set or an URL must be provided");
      return t && !e ? this.decodeFromVideoUrlContinuously(t, n) : this.decodeFromVideoElementContinuously(e, n);
    }, r.prototype.decodeFromImageElement = function(e) {
      if (!e)
        throw new pe("An image element must be provided.");
      this.reset();
      var t = this.prepareImageElement(e);
      this.imageElement = t;
      var n;
      return this.isImageLoaded(t) ? n = this.decodeOnce(t, !1, !0) : n = this._decodeOnLoadImage(t), n;
    }, r.prototype.decodeFromVideoElement = function(e) {
      var t = this._decodeFromVideoElementSetup(e);
      return this._decodeOnLoadVideo(t);
    }, r.prototype.decodeFromVideoElementContinuously = function(e, t) {
      var n = this._decodeFromVideoElementSetup(e);
      return this._decodeOnLoadVideoContinuously(n, t);
    }, r.prototype._decodeFromVideoElementSetup = function(e) {
      if (!e)
        throw new pe("A video element must be provided.");
      this.reset();
      var t = this.prepareVideoElement(e);
      return this.videoElement = t, t;
    }, r.prototype.decodeFromImageUrl = function(e) {
      if (!e)
        throw new pe("An URL must be provided.");
      this.reset();
      var t = this.prepareImageElement();
      this.imageElement = t;
      var n = this._decodeOnLoadImage(t);
      return t.src = e, n;
    }, r.prototype.decodeFromVideoUrl = function(e) {
      if (!e)
        throw new pe("An URL must be provided.");
      this.reset();
      var t = this.prepareVideoElement(), n = this.decodeFromVideoElement(t);
      return t.src = e, n;
    }, r.prototype.decodeFromVideoUrlContinuously = function(e, t) {
      if (!e)
        throw new pe("An URL must be provided.");
      this.reset();
      var n = this.prepareVideoElement(), i = this.decodeFromVideoElementContinuously(n, t);
      return n.src = e, i;
    }, r.prototype._decodeOnLoadImage = function(e) {
      var t = this;
      return new Promise(function(n, i) {
        t.imageLoadedListener = function() {
          return t.decodeOnce(e, !1, !0).then(n, i);
        }, e.addEventListener("load", t.imageLoadedListener);
      });
    }, r.prototype._decodeOnLoadVideo = function(e) {
      return ae(this, void 0, void 0, function() {
        return oe(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.playVideoOnLoadAsync(e)];
            case 1:
              return t.sent(), [4, this.decodeOnce(e)];
            case 2:
              return [2, t.sent()];
          }
        });
      });
    }, r.prototype._decodeOnLoadVideoContinuously = function(e, t) {
      return ae(this, void 0, void 0, function() {
        return oe(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.playVideoOnLoadAsync(e)];
            case 1:
              return n.sent(), this.decodeContinuously(e, t), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.isImageLoaded = function(e) {
      return !(!e.complete || e.naturalWidth === 0);
    }, r.prototype.prepareImageElement = function(e) {
      var t;
      return typeof e > "u" && (t = document.createElement("img"), t.width = 200, t.height = 200), typeof e == "string" && (t = this.getMediaElement(e, "img")), e instanceof HTMLImageElement && (t = e), t;
    }, r.prototype.prepareVideoElement = function(e) {
      var t;
      return !e && typeof document < "u" && (t = document.createElement("video"), t.width = 200, t.height = 200), typeof e == "string" && (t = this.getMediaElement(e, "video")), e instanceof HTMLVideoElement && (t = e), t.setAttribute("autoplay", "true"), t.setAttribute("muted", "true"), t.setAttribute("playsinline", "true"), t;
    }, r.prototype.decodeOnce = function(e, t, n) {
      var i = this;
      t === void 0 && (t = !0), n === void 0 && (n = !0), this._stopAsyncDecode = !1;
      var a = function(o, f) {
        if (i._stopAsyncDecode) {
          f(new C("Video stream has ended before any code could be detected.")), i._stopAsyncDecode = void 0;
          return;
        }
        try {
          var u = i.decode(e);
          o(u);
        } catch (d) {
          var s = t && d instanceof C, c = d instanceof re || d instanceof m, h = c && n;
          if (s || h)
            return setTimeout(a, i._timeBetweenDecodingAttempts, o, f);
          f(d);
        }
      };
      return new Promise(function(o, f) {
        return a(o, f);
      });
    }, r.prototype.decodeContinuously = function(e, t) {
      var n = this;
      this._stopContinuousDecode = !1;
      var i = function() {
        if (n._stopContinuousDecode) {
          n._stopContinuousDecode = void 0;
          return;
        }
        try {
          var a = n.decode(e);
          t(a, null), setTimeout(i, n.timeBetweenScansMillis);
        } catch (u) {
          t(null, u);
          var o = u instanceof re || u instanceof m, f = u instanceof C;
          (o || f) && setTimeout(i, n._timeBetweenDecodingAttempts);
        }
      };
      i();
    }, r.prototype.decode = function(e) {
      var t = this.createBinaryBitmap(e);
      return this.decodeBitmap(t);
    }, r.prototype._isHTMLVideoElement = function(e) {
      var t = e;
      return t.videoWidth !== 0;
    }, r.prototype.createBinaryBitmap = function(e) {
      this.getCaptureCanvasContext(e), this._isHTMLVideoElement(e) ? this.drawFrameOnCanvas(e) : this.drawImageOnCanvas(e);
      var t = this.getCaptureCanvas(e), n = new Jr(t), i = new Kr(n);
      return new Lr(i);
    }, r.prototype.getCaptureCanvasContext = function(e) {
      if (!this.captureCanvasContext) {
        var t = this.getCaptureCanvas(e), n = t.getContext("2d");
        this.captureCanvasContext = n;
      }
      return this.captureCanvasContext;
    }, r.prototype.getCaptureCanvas = function(e) {
      if (!this.captureCanvas) {
        var t = this.createCaptureCanvas(e);
        this.captureCanvas = t;
      }
      return this.captureCanvas;
    }, r.prototype.drawFrameOnCanvas = function(e, t, n) {
      t === void 0 && (t = { sx: 0, sy: 0, sWidth: e.videoWidth, sHeight: e.videoHeight, dx: 0, dy: 0, dWidth: e.videoWidth, dHeight: e.videoHeight }), n === void 0 && (n = this.captureCanvasContext), n.drawImage(e, t.sx, t.sy, t.sWidth, t.sHeight, t.dx, t.dy, t.dWidth, t.dHeight);
    }, r.prototype.drawImageOnCanvas = function(e, t, n) {
      t === void 0 && (t = { sx: 0, sy: 0, sWidth: e.naturalWidth, sHeight: e.naturalHeight, dx: 0, dy: 0, dWidth: e.naturalWidth, dHeight: e.naturalHeight }), n === void 0 && (n = this.captureCanvasContext), n.drawImage(e, t.sx, t.sy, t.sWidth, t.sHeight, t.dx, t.dy, t.dWidth, t.dHeight);
    }, r.prototype.decodeBitmap = function(e) {
      return this.reader.decode(e, this._hints);
    }, r.prototype.createCaptureCanvas = function(e) {
      if (typeof document > "u")
        return this._destroyCaptureCanvas(), null;
      var t = document.createElement("canvas"), n, i;
      return typeof e < "u" && (e instanceof HTMLVideoElement ? (n = e.videoWidth, i = e.videoHeight) : e instanceof HTMLImageElement && (n = e.naturalWidth || e.width, i = e.naturalHeight || e.height)), t.style.width = n + "px", t.style.height = i + "px", t.width = n, t.height = i, t;
    }, r.prototype.stopStreams = function() {
      this.stream && (this.stream.getVideoTracks().forEach(function(e) {
        return e.stop();
      }), this.stream = void 0), this._stopAsyncDecode === !1 && this.stopAsyncDecode(), this._stopContinuousDecode === !1 && this.stopContinuousDecode();
    }, r.prototype.reset = function() {
      this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
    }, r.prototype._destroyVideoElement = function() {
      this.videoElement && (typeof this.videoEndedListener < "u" && this.videoElement.removeEventListener("ended", this.videoEndedListener), typeof this.videoPlayingEventListener < "u" && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), typeof this.videoCanPlayListener < "u" && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0);
    }, r.prototype._destroyImageElement = function() {
      this.imageElement && (this.imageLoadedListener !== void 0 && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0);
    }, r.prototype._destroyCaptureCanvas = function() {
      this.captureCanvasContext = void 0, this.captureCanvas = void 0;
    }, r.prototype.addVideoSource = function(e, t) {
      try {
        e.srcObject = t;
      } catch {
        e.src = URL.createObjectURL(t);
      }
    }, r.prototype.cleanVideoSource = function(e) {
      try {
        e.srcObject = null;
      } catch {
        e.src = "";
      }
      this.videoElement.removeAttribute("src");
    }, r;
  }()
), he = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o) {
      n === void 0 && (n = t == null ? 0 : 8 * t.length), o === void 0 && (o = W.currentTimeMillis()), this.text = e, this.rawBytes = t, this.numBits = n, this.resultPoints = i, this.format = a, this.timestamp = o, this.text = e, this.rawBytes = t, n == null ? this.numBits = t == null ? 0 : 8 * t.length : this.numBits = n, this.resultPoints = i, this.format = a, this.resultMetadata = null, o == null ? this.timestamp = W.currentTimeMillis() : this.timestamp = o;
    }
    return r.prototype.getText = function() {
      return this.text;
    }, r.prototype.getRawBytes = function() {
      return this.rawBytes;
    }, r.prototype.getNumBits = function() {
      return this.numBits;
    }, r.prototype.getResultPoints = function() {
      return this.resultPoints;
    }, r.prototype.getBarcodeFormat = function() {
      return this.format;
    }, r.prototype.getResultMetadata = function() {
      return this.resultMetadata;
    }, r.prototype.putMetadata = function(e, t) {
      this.resultMetadata === null && (this.resultMetadata = /* @__PURE__ */ new Map()), this.resultMetadata.set(e, t);
    }, r.prototype.putAllMetadata = function(e) {
      e !== null && (this.resultMetadata === null ? this.resultMetadata = e : this.resultMetadata = new Map(e));
    }, r.prototype.addResultPoints = function(e) {
      var t = this.resultPoints;
      if (t === null)
        this.resultPoints = e;
      else if (e !== null && e.length > 0) {
        var n = new Array(t.length + e.length);
        W.arraycopy(t, 0, n, 0, t.length), W.arraycopy(e, 0, n, t.length, e.length), this.resultPoints = n;
      }
    }, r.prototype.getTimestamp = function() {
      return this.timestamp;
    }, r.prototype.toString = function() {
      return this.text;
    }, r;
  }()
), xt;
(function(r) {
  r[r.AZTEC = 0] = "AZTEC", r[r.CODABAR = 1] = "CODABAR", r[r.CODE_39 = 2] = "CODE_39", r[r.CODE_93 = 3] = "CODE_93", r[r.CODE_128 = 4] = "CODE_128", r[r.DATA_MATRIX = 5] = "DATA_MATRIX", r[r.EAN_8 = 6] = "EAN_8", r[r.EAN_13 = 7] = "EAN_13", r[r.ITF = 8] = "ITF", r[r.MAXICODE = 9] = "MAXICODE", r[r.PDF_417 = 10] = "PDF_417", r[r.QR_CODE = 11] = "QR_CODE", r[r.RSS_14 = 12] = "RSS_14", r[r.RSS_EXPANDED = 13] = "RSS_EXPANDED", r[r.UPC_A = 14] = "UPC_A", r[r.UPC_E = 15] = "UPC_E", r[r.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
})(xt || (xt = {}));
const R = xt;
var pt;
(function(r) {
  r[r.OTHER = 0] = "OTHER", r[r.ORIENTATION = 1] = "ORIENTATION", r[r.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", r[r.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", r[r.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", r[r.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", r[r.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", r[r.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", r[r.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", r[r.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", r[r.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY";
})(pt || (pt = {}));
const ne = pt;
var nt = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o) {
      a === void 0 && (a = -1), o === void 0 && (o = -1), this.rawBytes = e, this.text = t, this.byteSegments = n, this.ecLevel = i, this.structuredAppendSequenceNumber = a, this.structuredAppendParity = o, this.numBits = e == null ? 0 : 8 * e.length;
    }
    return r.prototype.getRawBytes = function() {
      return this.rawBytes;
    }, r.prototype.getNumBits = function() {
      return this.numBits;
    }, r.prototype.setNumBits = function(e) {
      this.numBits = e;
    }, r.prototype.getText = function() {
      return this.text;
    }, r.prototype.getByteSegments = function() {
      return this.byteSegments;
    }, r.prototype.getECLevel = function() {
      return this.ecLevel;
    }, r.prototype.getErrorsCorrected = function() {
      return this.errorsCorrected;
    }, r.prototype.setErrorsCorrected = function(e) {
      this.errorsCorrected = e;
    }, r.prototype.getErasures = function() {
      return this.erasures;
    }, r.prototype.setErasures = function(e) {
      this.erasures = e;
    }, r.prototype.getOther = function() {
      return this.other;
    }, r.prototype.setOther = function(e) {
      this.other = e;
    }, r.prototype.hasStructuredAppend = function() {
      return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
    }, r.prototype.getStructuredAppendParity = function() {
      return this.structuredAppendParity;
    }, r.prototype.getStructuredAppendSequenceNumber = function() {
      return this.structuredAppendSequenceNumber;
    }, r;
  }()
), Ve = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.exp = function(e) {
      return this.expTable[e];
    }, r.prototype.log = function(e) {
      if (e === 0)
        throw new D();
      return this.logTable[e];
    }, r.addOrSubtract = function(e, t) {
      return e ^ t;
    }, r;
  }()
), Se = (
  /** @class */
  function() {
    function r(e, t) {
      if (t.length === 0)
        throw new D();
      this.field = e;
      var n = t.length;
      if (n > 1 && t[0] === 0) {
        for (var i = 1; i < n && t[i] === 0; )
          i++;
        i === n ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(n - i), W.arraycopy(t, i, this.coefficients, 0, this.coefficients.length));
      } else
        this.coefficients = t;
    }
    return r.prototype.getCoefficients = function() {
      return this.coefficients;
    }, r.prototype.getDegree = function() {
      return this.coefficients.length - 1;
    }, r.prototype.isZero = function() {
      return this.coefficients[0] === 0;
    }, r.prototype.getCoefficient = function(e) {
      return this.coefficients[this.coefficients.length - 1 - e];
    }, r.prototype.evaluateAt = function(e) {
      if (e === 0)
        return this.getCoefficient(0);
      var t = this.coefficients, n;
      if (e === 1) {
        n = 0;
        for (var i = 0, a = t.length; i !== a; i++) {
          var o = t[i];
          n = Ve.addOrSubtract(n, o);
        }
        return n;
      }
      n = t[0];
      for (var f = t.length, u = this.field, i = 1; i < f; i++)
        n = Ve.addOrSubtract(u.multiply(e, n), t[i]);
      return n;
    }, r.prototype.addOrSubtract = function(e) {
      if (!this.field.equals(e.field))
        throw new D("GenericGFPolys do not have same GenericGF field");
      if (this.isZero())
        return e;
      if (e.isZero())
        return this;
      var t = this.coefficients, n = e.coefficients;
      if (t.length > n.length) {
        var i = t;
        t = n, n = i;
      }
      var a = new Int32Array(n.length), o = n.length - t.length;
      W.arraycopy(n, 0, a, 0, o);
      for (var f = o; f < n.length; f++)
        a[f] = Ve.addOrSubtract(t[f - o], n[f]);
      return new r(this.field, a);
    }, r.prototype.multiply = function(e) {
      if (!this.field.equals(e.field))
        throw new D("GenericGFPolys do not have same GenericGF field");
      if (this.isZero() || e.isZero())
        return this.field.getZero();
      for (var t = this.coefficients, n = t.length, i = e.coefficients, a = i.length, o = new Int32Array(n + a - 1), f = this.field, u = 0; u < n; u++)
        for (var s = t[u], c = 0; c < a; c++)
          o[u + c] = Ve.addOrSubtract(o[u + c], f.multiply(s, i[c]));
      return new r(f, o);
    }, r.prototype.multiplyScalar = function(e) {
      if (e === 0)
        return this.field.getZero();
      if (e === 1)
        return this;
      for (var t = this.coefficients.length, n = this.field, i = new Int32Array(t), a = this.coefficients, o = 0; o < t; o++)
        i[o] = n.multiply(a[o], e);
      return new r(n, i);
    }, r.prototype.multiplyByMonomial = function(e, t) {
      if (e < 0)
        throw new D();
      if (t === 0)
        return this.field.getZero();
      for (var n = this.coefficients, i = n.length, a = new Int32Array(i + e), o = this.field, f = 0; f < i; f++)
        a[f] = o.multiply(n[f], t);
      return new r(o, a);
    }, r.prototype.divide = function(e) {
      if (!this.field.equals(e.field))
        throw new D("GenericGFPolys do not have same GenericGF field");
      if (e.isZero())
        throw new D("Divide by 0");
      for (var t = this.field, n = t.getZero(), i = this, a = e.getCoefficient(e.getDegree()), o = t.inverse(a); i.getDegree() >= e.getDegree() && !i.isZero(); ) {
        var f = i.getDegree() - e.getDegree(), u = t.multiply(i.getCoefficient(i.getDegree()), o), s = e.multiplyByMonomial(f, u), c = t.buildMonomial(f, u);
        n = n.addOrSubtract(c), i = i.addOrSubtract(s);
      }
      return [n, i];
    }, r.prototype.toString = function() {
      for (var e = "", t = this.getDegree(); t >= 0; t--) {
        var n = this.getCoefficient(t);
        if (n !== 0) {
          if (n < 0 ? (e += " - ", n = -n) : e.length > 0 && (e += " + "), t === 0 || n !== 1) {
            var i = this.field.log(n);
            i === 0 ? e += "1" : i === 1 ? e += "a" : (e += "a^", e += i);
          }
          t !== 0 && (t === 1 ? e += "x" : (e += "x^", e += t));
        }
      }
      return e;
    }, r;
  }()
), rn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ur = (
  /** @class */
  function(r) {
    rn(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "ArithmeticException", e;
  }(fe)
), nn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), se = (
  /** @class */
  function(r) {
    nn(e, r);
    function e(t, n, i) {
      var a = r.call(this) || this;
      a.primitive = t, a.size = n, a.generatorBase = i;
      for (var o = new Int32Array(n), f = 1, u = 0; u < n; u++)
        o[u] = f, f *= 2, f >= n && (f ^= t, f &= n - 1);
      a.expTable = o;
      for (var s = new Int32Array(n), u = 0; u < n - 1; u++)
        s[o[u]] = u;
      return a.logTable = s, a.zero = new Se(a, Int32Array.from([0])), a.one = new Se(a, Int32Array.from([1])), a;
    }
    return e.prototype.getZero = function() {
      return this.zero;
    }, e.prototype.getOne = function() {
      return this.one;
    }, e.prototype.buildMonomial = function(t, n) {
      if (t < 0)
        throw new D();
      if (n === 0)
        return this.zero;
      var i = new Int32Array(t + 1);
      return i[0] = n, new Se(this, i);
    }, e.prototype.inverse = function(t) {
      if (t === 0)
        throw new ur();
      return this.expTable[this.size - this.logTable[t] - 1];
    }, e.prototype.multiply = function(t, n) {
      return t === 0 || n === 0 ? 0 : this.expTable[(this.logTable[t] + this.logTable[n]) % (this.size - 1)];
    }, e.prototype.getSize = function() {
      return this.size;
    }, e.prototype.getGeneratorBase = function() {
      return this.generatorBase;
    }, e.prototype.toString = function() {
      return "GF(0x" + M.toHexString(this.primitive) + "," + this.size + ")";
    }, e.prototype.equals = function(t) {
      return t === this;
    }, e.AZTEC_DATA_12 = new e(4201, 4096, 1), e.AZTEC_DATA_10 = new e(1033, 1024, 1), e.AZTEC_DATA_6 = new e(67, 64, 1), e.AZTEC_PARAM = new e(19, 16, 1), e.QR_CODE_FIELD_256 = new e(285, 256, 0), e.DATA_MATRIX_FIELD_256 = new e(301, 256, 1), e.AZTEC_DATA_8 = e.DATA_MATRIX_FIELD_256, e.MAXICODE_FIELD_64 = e.AZTEC_DATA_6, e;
  }(Ve)
), an = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ze = (
  /** @class */
  function(r) {
    an(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "ReedSolomonException", e;
  }(fe)
), on = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), We = (
  /** @class */
  function(r) {
    on(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "IllegalStateException", e;
  }(fe)
), it = (
  /** @class */
  function() {
    function r(e) {
      this.field = e;
    }
    return r.prototype.decode = function(e, t) {
      for (var n = this.field, i = new Se(n, e), a = new Int32Array(t), o = !0, f = 0; f < t; f++) {
        var u = i.evaluateAt(n.exp(f + n.getGeneratorBase()));
        a[a.length - 1 - f] = u, u !== 0 && (o = !1);
      }
      if (!o)
        for (var s = new Se(n, a), c = this.runEuclideanAlgorithm(n.buildMonomial(t, 1), s, t), h = c[0], d = c[1], l = this.findErrorLocations(h), v = this.findErrorMagnitudes(d, l), f = 0; f < l.length; f++) {
          var p = e.length - 1 - n.log(l[f]);
          if (p < 0)
            throw new ze("Bad error location");
          e[p] = se.addOrSubtract(e[p], v[f]);
        }
    }, r.prototype.runEuclideanAlgorithm = function(e, t, n) {
      if (e.getDegree() < t.getDegree()) {
        var i = e;
        e = t, t = i;
      }
      for (var a = this.field, o = e, f = t, u = a.getZero(), s = a.getOne(); f.getDegree() >= (n / 2 | 0); ) {
        var c = o, h = u;
        if (o = f, u = s, o.isZero())
          throw new ze("r_{i-1} was zero");
        f = c;
        for (var d = a.getZero(), l = o.getCoefficient(o.getDegree()), v = a.inverse(l); f.getDegree() >= o.getDegree() && !f.isZero(); ) {
          var p = f.getDegree() - o.getDegree(), y = a.multiply(f.getCoefficient(f.getDegree()), v);
          d = d.addOrSubtract(a.buildMonomial(p, y)), f = f.addOrSubtract(o.multiplyByMonomial(p, y));
        }
        if (s = d.multiply(u).addOrSubtract(h), f.getDegree() >= o.getDegree())
          throw new We("Division algorithm failed to reduce polynomial?");
      }
      var _ = s.getCoefficient(0);
      if (_ === 0)
        throw new ze("sigmaTilde(0) was zero");
      var g = a.inverse(_), w = s.multiplyScalar(g), E = f.multiplyScalar(g);
      return [w, E];
    }, r.prototype.findErrorLocations = function(e) {
      var t = e.getDegree();
      if (t === 1)
        return Int32Array.from([e.getCoefficient(1)]);
      for (var n = new Int32Array(t), i = 0, a = this.field, o = 1; o < a.getSize() && i < t; o++)
        e.evaluateAt(o) === 0 && (n[i] = a.inverse(o), i++);
      if (i !== t)
        throw new ze("Error locator degree does not match number of roots");
      return n;
    }, r.prototype.findErrorMagnitudes = function(e, t) {
      for (var n = t.length, i = new Int32Array(n), a = this.field, o = 0; o < n; o++) {
        for (var f = a.inverse(t[o]), u = 1, s = 0; s < n; s++)
          if (o !== s) {
            var c = a.multiply(t[s], f), h = c & 1 ? c & -2 : c | 1;
            u = a.multiply(u, h);
          }
        i[o] = a.multiply(e.evaluateAt(f), a.inverse(u)), a.getGeneratorBase() !== 0 && (i[o] = a.multiply(i[o], f));
      }
      return i;
    }, r;
  }()
), te;
(function(r) {
  r[r.UPPER = 0] = "UPPER", r[r.LOWER = 1] = "LOWER", r[r.MIXED = 2] = "MIXED", r[r.DIGIT = 3] = "DIGIT", r[r.PUNCT = 4] = "PUNCT", r[r.BINARY = 5] = "BINARY";
})(te || (te = {}));
var Bt = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e) {
      this.ddata = e;
      var t = e.getBits(), n = this.extractBits(t), i = this.correctBits(n), a = r.convertBoolArrayToByteArray(i), o = r.getEncodedData(i), f = new nt(a, o, null, null);
      return f.setNumBits(i.length), f;
    }, r.highLevelDecode = function(e) {
      return this.getEncodedData(e);
    }, r.getEncodedData = function(e) {
      for (var t = e.length, n = te.UPPER, i = te.UPPER, a = "", o = 0; o < t; )
        if (i === te.BINARY) {
          if (t - o < 5)
            break;
          var f = r.readCode(e, o, 5);
          if (o += 5, f === 0) {
            if (t - o < 11)
              break;
            f = r.readCode(e, o, 11) + 31, o += 11;
          }
          for (var u = 0; u < f; u++) {
            if (t - o < 8) {
              o = t;
              break;
            }
            var s = r.readCode(e, o, 8);
            a += /*(char)*/
            X.castAsNonUtf8Char(s), o += 8;
          }
          i = n;
        } else {
          var c = i === te.DIGIT ? 4 : 5;
          if (t - o < c)
            break;
          var s = r.readCode(e, o, c);
          o += c;
          var h = r.getCharacter(i, s);
          h.startsWith("CTRL_") ? (n = i, i = r.getTable(h.charAt(5)), h.charAt(6) === "L" && (n = i)) : (a += h, i = n);
        }
      return a;
    }, r.getTable = function(e) {
      switch (e) {
        case "L":
          return te.LOWER;
        case "P":
          return te.PUNCT;
        case "M":
          return te.MIXED;
        case "D":
          return te.DIGIT;
        case "B":
          return te.BINARY;
        case "U":
        default:
          return te.UPPER;
      }
    }, r.getCharacter = function(e, t) {
      switch (e) {
        case te.UPPER:
          return r.UPPER_TABLE[t];
        case te.LOWER:
          return r.LOWER_TABLE[t];
        case te.MIXED:
          return r.MIXED_TABLE[t];
        case te.PUNCT:
          return r.PUNCT_TABLE[t];
        case te.DIGIT:
          return r.DIGIT_TABLE[t];
        default:
          throw new We("Bad table");
      }
    }, r.prototype.correctBits = function(e) {
      var t, n;
      this.ddata.getNbLayers() <= 2 ? (n = 6, t = se.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (n = 8, t = se.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (n = 10, t = se.AZTEC_DATA_10) : (n = 12, t = se.AZTEC_DATA_12);
      var i = this.ddata.getNbDatablocks(), a = e.length / n;
      if (a < i)
        throw new m();
      for (var o = e.length % n, f = new Int32Array(a), u = 0; u < a; u++, o += n)
        f[u] = r.readCode(e, o, n);
      try {
        var s = new it(t);
        s.decode(f, a - i);
      } catch (y) {
        throw new m(y);
      }
      for (var c = (1 << n) - 1, h = 0, u = 0; u < i; u++) {
        var d = f[u];
        if (d === 0 || d === c)
          throw new m();
        (d === 1 || d === c - 1) && h++;
      }
      for (var l = new Array(i * n - h), v = 0, u = 0; u < i; u++) {
        var d = f[u];
        if (d === 1 || d === c - 1)
          l.fill(d > 1, v, v + n - 1), v += n - 1;
        else
          for (var p = n - 1; p >= 0; --p)
            l[v++] = (d & 1 << p) !== 0;
      }
      return l;
    }, r.prototype.extractBits = function(e) {
      var t = this.ddata.isCompact(), n = this.ddata.getNbLayers(), i = (t ? 11 : 14) + n * 4, a = new Int32Array(i), o = new Array(this.totalBitsInLayer(n, t));
      if (t)
        for (var f = 0; f < a.length; f++)
          a[f] = f;
      else
        for (var u = i + 1 + 2 * M.truncDivision(M.truncDivision(i, 2) - 1, 15), s = i / 2, c = M.truncDivision(u, 2), f = 0; f < s; f++) {
          var h = f + M.truncDivision(f, 15);
          a[s - f - 1] = c - h - 1, a[s + f] = c + h + 1;
        }
      for (var f = 0, d = 0; f < n; f++) {
        for (var l = (n - f) * 4 + (t ? 9 : 12), v = f * 2, p = i - 1 - v, y = 0; y < l; y++)
          for (var _ = y * 2, g = 0; g < 2; g++)
            o[d + _ + g] = e.get(a[v + g], a[v + y]), o[d + 2 * l + _ + g] = e.get(a[v + y], a[p - g]), o[d + 4 * l + _ + g] = e.get(a[p - g], a[p - y]), o[d + 6 * l + _ + g] = e.get(a[p - y], a[v + g]);
        d += l * 8;
      }
      return o;
    }, r.readCode = function(e, t, n) {
      for (var i = 0, a = t; a < t + n; a++)
        i <<= 1, e[a] && (i |= 1);
      return i;
    }, r.readByte = function(e, t) {
      var n = e.length - t;
      return n >= 8 ? r.readCode(e, t, 8) : r.readCode(e, t, n) << 8 - n;
    }, r.convertBoolArrayToByteArray = function(e) {
      for (var t = new Uint8Array((e.length + 7) / 8), n = 0; n < t.length; n++)
        t[n] = r.readByte(e, 8 * n);
      return t;
    }, r.prototype.totalBitsInLayer = function(e, t) {
      return ((t ? 88 : 112) + 16 * e) * e;
    }, r.UPPER_TABLE = [
      "CTRL_PS",
      " ",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "CTRL_LL",
      "CTRL_ML",
      "CTRL_DL",
      "CTRL_BS"
    ], r.LOWER_TABLE = [
      "CTRL_PS",
      " ",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "CTRL_US",
      "CTRL_ML",
      "CTRL_DL",
      "CTRL_BS"
    ], r.MIXED_TABLE = [
      // Module parse failed: Octal literal in strict mode (50:29)
      // so number string were scaped
      "CTRL_PS",
      " ",
      "\\1",
      "\\2",
      "\\3",
      "\\4",
      "\\5",
      "\\6",
      "\\7",
      "\b",
      "	",
      `
`,
      "\\13",
      "\f",
      "\r",
      "\\33",
      "\\34",
      "\\35",
      "\\36",
      "\\37",
      "@",
      "\\",
      "^",
      "_",
      "`",
      "|",
      "~",
      "\\177",
      "CTRL_LL",
      "CTRL_UL",
      "CTRL_PL",
      "CTRL_BS"
    ], r.PUNCT_TABLE = [
      "",
      "\r",
      `\r
`,
      ". ",
      ", ",
      ": ",
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "[",
      "]",
      "{",
      "}",
      "CTRL_UL"
    ], r.DIGIT_TABLE = [
      "CTRL_PS",
      " ",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ",",
      ".",
      "CTRL_UL",
      "CTRL_US"
    ], r;
  }()
), L = (
  /** @class */
  function() {
    function r() {
    }
    return r.round = function(e) {
      return e === NaN ? 0 : e <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : e >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : (
        /*(int) */
        e + (e < 0 ? -0.5 : 0.5) | 0
      );
    }, r.distance = function(e, t, n, i) {
      var a = e - n, o = t - i;
      return (
        /*(float) */
        Math.sqrt(a * a + o * o)
      );
    }, r.sum = function(e) {
      for (var t = 0, n = 0, i = e.length; n !== i; n++) {
        var a = e[n];
        t += a;
      }
      return t;
    }, r;
  }()
), gt = (
  /** @class */
  function() {
    function r() {
    }
    return r.floatToIntBits = function(e) {
      return e;
    }, r.MAX_VALUE = Number.MAX_SAFE_INTEGER, r;
  }()
), T = (
  /** @class */
  function() {
    function r(e, t) {
      this.x = e, this.y = t;
    }
    return r.prototype.getX = function() {
      return this.x;
    }, r.prototype.getY = function() {
      return this.y;
    }, r.prototype.equals = function(e) {
      if (e instanceof r) {
        var t = e;
        return this.x === t.x && this.y === t.y;
      }
      return !1;
    }, r.prototype.hashCode = function() {
      return 31 * gt.floatToIntBits(this.x) + gt.floatToIntBits(this.y);
    }, r.prototype.toString = function() {
      return "(" + this.x + "," + this.y + ")";
    }, r.orderBestPatterns = function(e) {
      var t = this.distance(e[0], e[1]), n = this.distance(e[1], e[2]), i = this.distance(e[0], e[2]), a, o, f;
      if (n >= t && n >= i ? (o = e[0], a = e[1], f = e[2]) : i >= n && i >= t ? (o = e[1], a = e[0], f = e[2]) : (o = e[2], a = e[0], f = e[1]), this.crossProductZ(a, o, f) < 0) {
        var u = a;
        a = f, f = u;
      }
      e[0] = a, e[1] = o, e[2] = f;
    }, r.distance = function(e, t) {
      return L.distance(e.x, e.y, t.x, t.y);
    }, r.crossProductZ = function(e, t, n) {
      var i = t.x, a = t.y;
      return (n.x - i) * (e.y - a) - (n.y - a) * (e.x - i);
    }, r;
  }()
), bt = (
  /** @class */
  function() {
    function r(e, t) {
      this.bits = e, this.points = t;
    }
    return r.prototype.getBits = function() {
      return this.bits;
    }, r.prototype.getPoints = function() {
      return this.points;
    }, r;
  }()
), fn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), un = (
  /** @class */
  function(r) {
    fn(e, r);
    function e(t, n, i, a, o) {
      var f = r.call(this, t, n) || this;
      return f.compact = i, f.nbDatablocks = a, f.nbLayers = o, f;
    }
    return e.prototype.getNbLayers = function() {
      return this.nbLayers;
    }, e.prototype.getNbDatablocks = function() {
      return this.nbDatablocks;
    }, e.prototype.isCompact = function() {
      return this.compact;
    }, e;
  }(bt)
), yt = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.image = e, this.height = e.getHeight(), this.width = e.getWidth(), t == null && (t = r.INIT_SIZE), n == null && (n = e.getWidth() / 2 | 0), i == null && (i = e.getHeight() / 2 | 0);
      var a = t / 2 | 0;
      if (this.leftInit = n - a, this.rightInit = n + a, this.upInit = i - a, this.downInit = i + a, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width)
        throw new C();
    }
    return r.prototype.detect = function() {
      for (var e = this.leftInit, t = this.rightInit, n = this.upInit, i = this.downInit, a = !1, o = !0, f = !1, u = !1, s = !1, c = !1, h = !1, d = this.width, l = this.height; o; ) {
        o = !1;
        for (var v = !0; (v || !u) && t < d; )
          v = this.containsBlackPoint(n, i, t, !1), v ? (t++, o = !0, u = !0) : u || t++;
        if (t >= d) {
          a = !0;
          break;
        }
        for (var p = !0; (p || !s) && i < l; )
          p = this.containsBlackPoint(e, t, i, !0), p ? (i++, o = !0, s = !0) : s || i++;
        if (i >= l) {
          a = !0;
          break;
        }
        for (var y = !0; (y || !c) && e >= 0; )
          y = this.containsBlackPoint(n, i, e, !1), y ? (e--, o = !0, c = !0) : c || e--;
        if (e < 0) {
          a = !0;
          break;
        }
        for (var _ = !0; (_ || !h) && n >= 0; )
          _ = this.containsBlackPoint(e, t, n, !0), _ ? (n--, o = !0, h = !0) : h || n--;
        if (n < 0) {
          a = !0;
          break;
        }
        o && (f = !0);
      }
      if (!a && f) {
        for (var g = t - e, w = null, E = 1; w === null && E < g; E++)
          w = this.getBlackPointOnSegment(e, i - E, e + E, i);
        if (w == null)
          throw new C();
        for (var I = null, E = 1; I === null && E < g; E++)
          I = this.getBlackPointOnSegment(e, n + E, e + E, n);
        if (I == null)
          throw new C();
        for (var S = null, E = 1; S === null && E < g; E++)
          S = this.getBlackPointOnSegment(t, n + E, t - E, n);
        if (S == null)
          throw new C();
        for (var O = null, E = 1; O === null && E < g; E++)
          O = this.getBlackPointOnSegment(t, i - E, t - E, i);
        if (O == null)
          throw new C();
        return this.centerEdges(O, w, S, I);
      } else
        throw new C();
    }, r.prototype.getBlackPointOnSegment = function(e, t, n, i) {
      for (var a = L.round(L.distance(e, t, n, i)), o = (n - e) / a, f = (i - t) / a, u = this.image, s = 0; s < a; s++) {
        var c = L.round(e + s * o), h = L.round(t + s * f);
        if (u.get(c, h))
          return new T(c, h);
      }
      return null;
    }, r.prototype.centerEdges = function(e, t, n, i) {
      var a = e.getX(), o = e.getY(), f = t.getX(), u = t.getY(), s = n.getX(), c = n.getY(), h = i.getX(), d = i.getY(), l = r.CORR;
      return a < this.width / 2 ? [
        new T(h - l, d + l),
        new T(f + l, u + l),
        new T(s - l, c - l),
        new T(a + l, o - l)
      ] : [
        new T(h + l, d + l),
        new T(f + l, u - l),
        new T(s - l, c + l),
        new T(a - l, o - l)
      ];
    }, r.prototype.containsBlackPoint = function(e, t, n, i) {
      var a = this.image;
      if (i) {
        for (var o = e; o <= t; o++)
          if (a.get(o, n))
            return !0;
      } else
        for (var f = e; f <= t; f++)
          if (a.get(n, f))
            return !0;
      return !1;
    }, r.INIT_SIZE = 10, r.CORR = 1, r;
  }()
), Ft = (
  /** @class */
  function() {
    function r() {
    }
    return r.checkAndNudgePoints = function(e, t) {
      for (var n = e.getWidth(), i = e.getHeight(), a = !0, o = 0; o < t.length && a; o += 2) {
        var f = Math.floor(t[o]), u = Math.floor(t[o + 1]);
        if (f < -1 || f > n || u < -1 || u > i)
          throw new C();
        a = !1, f === -1 ? (t[o] = 0, a = !0) : f === n && (t[o] = n - 1, a = !0), u === -1 ? (t[o + 1] = 0, a = !0) : u === i && (t[o + 1] = i - 1, a = !0);
      }
      a = !0;
      for (var o = t.length - 2; o >= 0 && a; o -= 2) {
        var f = Math.floor(t[o]), u = Math.floor(t[o + 1]);
        if (f < -1 || f > n || u < -1 || u > i)
          throw new C();
        a = !1, f === -1 ? (t[o] = 0, a = !0) : f === n && (t[o] = n - 1, a = !0), u === -1 ? (t[o + 1] = 0, a = !0) : u === i && (t[o + 1] = i - 1, a = !0);
      }
    }, r;
  }()
), sr = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o, f, u, s) {
      this.a11 = e, this.a21 = t, this.a31 = n, this.a12 = i, this.a22 = a, this.a32 = o, this.a13 = f, this.a23 = u, this.a33 = s;
    }
    return r.quadrilateralToQuadrilateral = function(e, t, n, i, a, o, f, u, s, c, h, d, l, v, p, y) {
      var _ = r.quadrilateralToSquare(e, t, n, i, a, o, f, u), g = r.squareToQuadrilateral(s, c, h, d, l, v, p, y);
      return g.times(_);
    }, r.prototype.transformPoints = function(e) {
      for (var t = e.length, n = this.a11, i = this.a12, a = this.a13, o = this.a21, f = this.a22, u = this.a23, s = this.a31, c = this.a32, h = this.a33, d = 0; d < t; d += 2) {
        var l = e[d], v = e[d + 1], p = a * l + u * v + h;
        e[d] = (n * l + o * v + s) / p, e[d + 1] = (i * l + f * v + c) / p;
      }
    }, r.prototype.transformPointsWithValues = function(e, t) {
      for (var n = this.a11, i = this.a12, a = this.a13, o = this.a21, f = this.a22, u = this.a23, s = this.a31, c = this.a32, h = this.a33, d = e.length, l = 0; l < d; l++) {
        var v = e[l], p = t[l], y = a * v + u * p + h;
        e[l] = (n * v + o * p + s) / y, t[l] = (i * v + f * p + c) / y;
      }
    }, r.squareToQuadrilateral = function(e, t, n, i, a, o, f, u) {
      var s = e - n + a - f, c = t - i + o - u;
      if (s === 0 && c === 0)
        return new r(n - e, a - n, e, i - t, o - i, t, 0, 0, 1);
      var h = n - a, d = f - a, l = i - o, v = u - o, p = h * v - d * l, y = (s * v - d * c) / p, _ = (h * c - s * l) / p;
      return new r(n - e + y * n, f - e + _ * f, e, i - t + y * i, u - t + _ * u, t, y, _, 1);
    }, r.quadrilateralToSquare = function(e, t, n, i, a, o, f, u) {
      return r.squareToQuadrilateral(e, t, n, i, a, o, f, u).buildAdjoint();
    }, r.prototype.buildAdjoint = function() {
      return new r(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
    }, r.prototype.times = function(e) {
      return new r(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13, this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23, this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33, this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13, this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23, this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33, this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13, this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23, this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33);
    }, r;
  }()
), sn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), cn = (
  /** @class */
  function(r) {
    sn(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.sampleGrid = function(t, n, i, a, o, f, u, s, c, h, d, l, v, p, y, _, g, w, E) {
      var I = sr.quadrilateralToQuadrilateral(a, o, f, u, s, c, h, d, l, v, p, y, _, g, w, E);
      return this.sampleGridWithTransform(t, n, i, I);
    }, e.prototype.sampleGridWithTransform = function(t, n, i, a) {
      if (n <= 0 || i <= 0)
        throw new C();
      for (var o = new Ae(n, i), f = new Float32Array(2 * n), u = 0; u < i; u++) {
        for (var s = f.length, c = u + 0.5, h = 0; h < s; h += 2)
          f[h] = h / 2 + 0.5, f[h + 1] = c;
        a.transformPoints(f), Ft.checkAndNudgePoints(t, f);
        try {
          for (var h = 0; h < s; h += 2)
            t.get(Math.floor(f[h]), Math.floor(f[h + 1])) && o.set(h / 2, u);
        } catch {
          throw new C();
        }
      }
      return o;
    }, e;
  }(Ft)
), Dt = (
  /** @class */
  function() {
    function r() {
    }
    return r.setGridSampler = function(e) {
      r.gridSampler = e;
    }, r.getInstance = function() {
      return r.gridSampler;
    }, r.gridSampler = new cn(), r;
  }()
), ue = (
  /** @class */
  function() {
    function r(e, t) {
      this.x = e, this.y = t;
    }
    return r.prototype.toResultPoint = function() {
      return new T(this.getX(), this.getY());
    }, r.prototype.getX = function() {
      return this.x;
    }, r.prototype.getY = function() {
      return this.y;
    }, r;
  }()
), hn = (
  /** @class */
  function() {
    function r(e) {
      this.EXPECTED_CORNER_BITS = new Int32Array([
        3808,
        476,
        2107,
        1799
      ]), this.image = e;
    }
    return r.prototype.detect = function() {
      return this.detectMirror(!1);
    }, r.prototype.detectMirror = function(e) {
      var t = this.getMatrixCenter(), n = this.getBullsEyeCorners(t);
      if (e) {
        var i = n[0];
        n[0] = n[2], n[2] = i;
      }
      this.extractParameters(n);
      var a = this.sampleGrid(this.image, n[this.shift % 4], n[(this.shift + 1) % 4], n[(this.shift + 2) % 4], n[(this.shift + 3) % 4]), o = this.getMatrixCornerPoints(n);
      return new un(a, o, this.compact, this.nbDataBlocks, this.nbLayers);
    }, r.prototype.extractParameters = function(e) {
      if (!this.isValidPoint(e[0]) || !this.isValidPoint(e[1]) || !this.isValidPoint(e[2]) || !this.isValidPoint(e[3]))
        throw new C();
      var t = 2 * this.nbCenterLayers, n = new Int32Array([
        this.sampleLine(e[0], e[1], t),
        this.sampleLine(e[1], e[2], t),
        this.sampleLine(e[2], e[3], t),
        this.sampleLine(e[3], e[0], t)
        // Top
      ]);
      this.shift = this.getRotation(n, t);
      for (var i = 0, a = 0; a < 4; a++) {
        var o = n[(this.shift + a) % 4];
        this.compact ? (i <<= 7, i += o >> 1 & 127) : (i <<= 10, i += (o >> 2 & 992) + (o >> 1 & 31));
      }
      var f = this.getCorrectedParameterData(i, this.compact);
      this.compact ? (this.nbLayers = (f >> 6) + 1, this.nbDataBlocks = (f & 63) + 1) : (this.nbLayers = (f >> 11) + 1, this.nbDataBlocks = (f & 2047) + 1);
    }, r.prototype.getRotation = function(e, t) {
      var n = 0;
      e.forEach(function(a, o, f) {
        var u = (a >> t - 2 << 1) + (a & 1);
        n = (n << 3) + u;
      }), n = ((n & 1) << 11) + (n >> 1);
      for (var i = 0; i < 4; i++)
        if (M.bitCount(n ^ this.EXPECTED_CORNER_BITS[i]) <= 2)
          return i;
      throw new C();
    }, r.prototype.getCorrectedParameterData = function(e, t) {
      var n, i;
      t ? (n = 7, i = 2) : (n = 10, i = 4);
      for (var a = n - i, o = new Int32Array(n), f = n - 1; f >= 0; --f)
        o[f] = e & 15, e >>= 4;
      try {
        var u = new it(se.AZTEC_PARAM);
        u.decode(o, a);
      } catch {
        throw new C();
      }
      for (var s = 0, f = 0; f < i; f++)
        s = (s << 4) + o[f];
      return s;
    }, r.prototype.getBullsEyeCorners = function(e) {
      var t = e, n = e, i = e, a = e, o = !0;
      for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
        var f = this.getFirstDifferent(t, o, 1, -1), u = this.getFirstDifferent(n, o, 1, 1), s = this.getFirstDifferent(i, o, -1, 1), c = this.getFirstDifferent(a, o, -1, -1);
        if (this.nbCenterLayers > 2) {
          var h = this.distancePoint(c, f) * this.nbCenterLayers / (this.distancePoint(a, t) * (this.nbCenterLayers + 2));
          if (h < 0.75 || h > 1.25 || !this.isWhiteOrBlackRectangle(f, u, s, c))
            break;
        }
        t = f, n = u, i = s, a = c, o = !o;
      }
      if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7)
        throw new C();
      this.compact = this.nbCenterLayers === 5;
      var d = new T(t.getX() + 0.5, t.getY() - 0.5), l = new T(n.getX() + 0.5, n.getY() + 0.5), v = new T(i.getX() - 0.5, i.getY() + 0.5), p = new T(a.getX() - 0.5, a.getY() - 0.5);
      return this.expandSquare([d, l, v, p], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
    }, r.prototype.getMatrixCenter = function() {
      var e, t, n, i;
      try {
        var a = new yt(this.image).detect();
        e = a[0], t = a[1], n = a[2], i = a[3];
      } catch {
        var o = this.image.getWidth() / 2, f = this.image.getHeight() / 2;
        e = this.getFirstDifferent(new ue(o + 7, f - 7), !1, 1, -1).toResultPoint(), t = this.getFirstDifferent(new ue(o + 7, f + 7), !1, 1, 1).toResultPoint(), n = this.getFirstDifferent(new ue(o - 7, f + 7), !1, -1, 1).toResultPoint(), i = this.getFirstDifferent(new ue(o - 7, f - 7), !1, -1, -1).toResultPoint();
      }
      var u = L.round((e.getX() + i.getX() + t.getX() + n.getX()) / 4), s = L.round((e.getY() + i.getY() + t.getY() + n.getY()) / 4);
      try {
        var a = new yt(this.image, 15, u, s).detect();
        e = a[0], t = a[1], n = a[2], i = a[3];
      } catch {
        e = this.getFirstDifferent(new ue(u + 7, s - 7), !1, 1, -1).toResultPoint(), t = this.getFirstDifferent(new ue(u + 7, s + 7), !1, 1, 1).toResultPoint(), n = this.getFirstDifferent(new ue(u - 7, s + 7), !1, -1, 1).toResultPoint(), i = this.getFirstDifferent(new ue(u - 7, s - 7), !1, -1, -1).toResultPoint();
      }
      return u = L.round((e.getX() + i.getX() + t.getX() + n.getX()) / 4), s = L.round((e.getY() + i.getY() + t.getY() + n.getY()) / 4), new ue(u, s);
    }, r.prototype.getMatrixCornerPoints = function(e) {
      return this.expandSquare(e, 2 * this.nbCenterLayers, this.getDimension());
    }, r.prototype.sampleGrid = function(e, t, n, i, a) {
      var o = Dt.getInstance(), f = this.getDimension(), u = f / 2 - this.nbCenterLayers, s = f / 2 + this.nbCenterLayers;
      return o.sampleGrid(
        e,
        f,
        f,
        u,
        u,
        // topleft
        s,
        u,
        // topright
        s,
        s,
        // bottomright
        u,
        s,
        // bottomleft
        t.getX(),
        t.getY(),
        n.getX(),
        n.getY(),
        i.getX(),
        i.getY(),
        a.getX(),
        a.getY()
      );
    }, r.prototype.sampleLine = function(e, t, n) {
      for (var i = 0, a = this.distanceResultPoint(e, t), o = a / n, f = e.getX(), u = e.getY(), s = o * (t.getX() - e.getX()) / a, c = o * (t.getY() - e.getY()) / a, h = 0; h < n; h++)
        this.image.get(L.round(f + h * s), L.round(u + h * c)) && (i |= 1 << n - h - 1);
      return i;
    }, r.prototype.isWhiteOrBlackRectangle = function(e, t, n, i) {
      var a = 3;
      e = new ue(e.getX() - a, e.getY() + a), t = new ue(t.getX() - a, t.getY() - a), n = new ue(n.getX() + a, n.getY() - a), i = new ue(i.getX() + a, i.getY() + a);
      var o = this.getColor(i, e);
      if (o === 0)
        return !1;
      var f = this.getColor(e, t);
      return f !== o || (f = this.getColor(t, n), f !== o) ? !1 : (f = this.getColor(n, i), f === o);
    }, r.prototype.getColor = function(e, t) {
      for (var n = this.distancePoint(e, t), i = (t.getX() - e.getX()) / n, a = (t.getY() - e.getY()) / n, o = 0, f = e.getX(), u = e.getY(), s = this.image.get(e.getX(), e.getY()), c = Math.ceil(n), h = 0; h < c; h++)
        f += i, u += a, this.image.get(L.round(f), L.round(u)) !== s && o++;
      var d = o / n;
      return d > 0.1 && d < 0.9 ? 0 : d <= 0.1 === s ? 1 : -1;
    }, r.prototype.getFirstDifferent = function(e, t, n, i) {
      for (var a = e.getX() + n, o = e.getY() + i; this.isValid(a, o) && this.image.get(a, o) === t; )
        a += n, o += i;
      for (a -= n, o -= i; this.isValid(a, o) && this.image.get(a, o) === t; )
        a += n;
      for (a -= n; this.isValid(a, o) && this.image.get(a, o) === t; )
        o += i;
      return o -= i, new ue(a, o);
    }, r.prototype.expandSquare = function(e, t, n) {
      var i = n / (2 * t), a = e[0].getX() - e[2].getX(), o = e[0].getY() - e[2].getY(), f = (e[0].getX() + e[2].getX()) / 2, u = (e[0].getY() + e[2].getY()) / 2, s = new T(f + i * a, u + i * o), c = new T(f - i * a, u - i * o);
      a = e[1].getX() - e[3].getX(), o = e[1].getY() - e[3].getY(), f = (e[1].getX() + e[3].getX()) / 2, u = (e[1].getY() + e[3].getY()) / 2;
      var h = new T(f + i * a, u + i * o), d = new T(f - i * a, u - i * o), l = [s, h, c, d];
      return l;
    }, r.prototype.isValid = function(e, t) {
      return e >= 0 && e < this.image.getWidth() && t > 0 && t < this.image.getHeight();
    }, r.prototype.isValidPoint = function(e) {
      var t = L.round(e.getX()), n = L.round(e.getY());
      return this.isValid(t, n);
    }, r.prototype.distancePoint = function(e, t) {
      return L.distance(e.getX(), e.getY(), t.getX(), t.getY());
    }, r.prototype.distanceResultPoint = function(e, t) {
      return L.distance(e.getX(), e.getY(), t.getX(), t.getY());
    }, r.prototype.getDimension = function() {
      return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (M.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
    }, r;
  }()
), _t = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e, t) {
      t === void 0 && (t = null);
      var n = null, i = new hn(e.getBlackMatrix()), a = null, o = null;
      try {
        var f = i.detectMirror(!1);
        a = f.getPoints(), this.reportFoundResultPoints(t, a), o = new Bt().decode(f);
      } catch (h) {
        n = h;
      }
      if (o == null)
        try {
          var f = i.detectMirror(!0);
          a = f.getPoints(), this.reportFoundResultPoints(t, a), o = new Bt().decode(f);
        } catch (h) {
          throw n ?? h;
        }
      var u = new he(o.getText(), o.getRawBytes(), o.getNumBits(), a, R.AZTEC, W.currentTimeMillis()), s = o.getByteSegments();
      s != null && u.putMetadata(ne.BYTE_SEGMENTS, s);
      var c = o.getECLevel();
      return c != null && u.putMetadata(ne.ERROR_CORRECTION_LEVEL, c), u;
    }, r.prototype.reportFoundResultPoints = function(e, t) {
      if (e != null) {
        var n = e.get(j.NEED_RESULT_POINT_CALLBACK);
        n != null && t.forEach(function(i, a, o) {
          n.foundPossibleResultPoint(i);
        });
      }
    }, r.prototype.reset = function() {
    }, r;
  }()
), ln = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  ln(e, r);
  function e(t) {
    return t === void 0 && (t = 500), r.call(this, new _t(), t) || this;
  }
  return e;
})(Fe);
var ie = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e, t) {
      try {
        return this.doDecode(e, t);
      } catch {
        var n = t && t.get(j.TRY_HARDER) === !0;
        if (n && e.isRotateSupported()) {
          var i = e.rotateCounterClockwise(), a = this.doDecode(i, t), o = a.getResultMetadata(), f = 270;
          o !== null && o.get(ne.ORIENTATION) === !0 && (f = f + o.get(ne.ORIENTATION) % 360), a.putMetadata(ne.ORIENTATION, f);
          var u = a.getResultPoints();
          if (u !== null)
            for (var s = i.getHeight(), c = 0; c < u.length; c++)
              u[c] = new T(s - u[c].getY() - 1, u[c].getX());
          return a;
        } else
          throw new C();
      }
    }, r.prototype.reset = function() {
    }, r.prototype.doDecode = function(e, t) {
      var n = e.getWidth(), i = e.getHeight(), a = new ee(n), o = t && t.get(j.TRY_HARDER) === !0, f = Math.max(1, i >> (o ? 8 : 5)), u;
      o ? u = i : u = 15;
      for (var s = Math.trunc(i / 2), c = 0; c < u; c++) {
        var h = Math.trunc((c + 1) / 2), d = (c & 1) === 0, l = s + f * (d ? h : -h);
        if (l < 0 || l >= i)
          break;
        try {
          a = e.getBlackRow(l, a);
        } catch {
          continue;
        }
        for (var v = function(g) {
          if (g === 1 && (a.reverse(), t && t.get(j.NEED_RESULT_POINT_CALLBACK) === !0)) {
            var w = /* @__PURE__ */ new Map();
            t.forEach(function(S, O) {
              return w.set(O, S);
            }), w.delete(j.NEED_RESULT_POINT_CALLBACK), t = w;
          }
          try {
            var E = p.decodeRow(l, a, t);
            if (g === 1) {
              E.putMetadata(ne.ORIENTATION, 180);
              var I = E.getResultPoints();
              I !== null && (I[0] = new T(n - I[0].getX() - 1, I[0].getY()), I[1] = new T(n - I[1].getX() - 1, I[1].getY()));
            }
            return { value: E };
          } catch {
          }
        }, p = this, y = 0; y < 2; y++) {
          var _ = v(y);
          if (typeof _ == "object")
            return _.value;
        }
      }
      throw new C();
    }, r.recordPattern = function(e, t, n) {
      for (var i = n.length, a = 0; a < i; a++)
        n[a] = 0;
      var o = e.getSize();
      if (t >= o)
        throw new C();
      for (var f = !e.get(t), u = 0, s = t; s < o; ) {
        if (e.get(s) !== f)
          n[u]++;
        else {
          if (++u === i)
            break;
          n[u] = 1, f = !f;
        }
        s++;
      }
      if (!(u === i || u === i - 1 && s === o))
        throw new C();
    }, r.recordPatternInReverse = function(e, t, n) {
      for (var i = n.length, a = e.get(t); t > 0 && i >= 0; )
        e.get(--t) !== a && (i--, a = !a);
      if (i >= 0)
        throw new C();
      r.recordPattern(e, t + 1, n);
    }, r.patternMatchVariance = function(e, t, n) {
      for (var i = e.length, a = 0, o = 0, f = 0; f < i; f++)
        a += e[f], o += t[f];
      if (a < o)
        return Number.POSITIVE_INFINITY;
      var u = a / o;
      n *= u;
      for (var s = 0, c = 0; c < i; c++) {
        var h = e[c], d = t[c] * u, l = h > d ? h - d : d - h;
        if (l > n)
          return Number.POSITIVE_INFINITY;
        s += l;
      }
      return s / a;
    }, r;
  }()
), dn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Lt = (
  /** @class */
  function(r) {
    dn(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.findStartPattern = function(t) {
      for (var n = t.getSize(), i = t.getNextSet(0), a = 0, o = Int32Array.from([0, 0, 0, 0, 0, 0]), f = i, u = !1, s = 6, c = i; c < n; c++)
        if (t.get(c) !== u)
          o[a]++;
        else {
          if (a === s - 1) {
            for (var h = e.MAX_AVG_VARIANCE, d = -1, l = e.CODE_START_A; l <= e.CODE_START_C; l++) {
              var v = ie.patternMatchVariance(o, e.CODE_PATTERNS[l], e.MAX_INDIVIDUAL_VARIANCE);
              v < h && (h = v, d = l);
            }
            if (d >= 0 && t.isRange(Math.max(0, f - (c - f) / 2), f, !1))
              return Int32Array.from([f, c, d]);
            f += o[0] + o[1], o = o.slice(2, o.length - 1), o[a - 1] = 0, o[a] = 0, a--;
          } else
            a++;
          o[a] = 1, u = !u;
        }
      throw new C();
    }, e.decodeCode = function(t, n, i) {
      ie.recordPattern(t, i, n);
      for (var a = e.MAX_AVG_VARIANCE, o = -1, f = 0; f < e.CODE_PATTERNS.length; f++) {
        var u = e.CODE_PATTERNS[f], s = this.patternMatchVariance(n, u, e.MAX_INDIVIDUAL_VARIANCE);
        s < a && (a = s, o = f);
      }
      if (o >= 0)
        return o;
      throw new C();
    }, e.prototype.decodeRow = function(t, n, i) {
      var a = i && i.get(j.ASSUME_GS1) === !0, o = e.findStartPattern(n), f = o[2], u = 0, s = new Uint8Array(20);
      s[u++] = f;
      var c;
      switch (f) {
        case e.CODE_START_A:
          c = e.CODE_CODE_A;
          break;
        case e.CODE_START_B:
          c = e.CODE_CODE_B;
          break;
        case e.CODE_START_C:
          c = e.CODE_CODE_C;
          break;
        default:
          throw new m();
      }
      for (var h = !1, d = !1, l = "", v = o[0], p = o[1], y = Int32Array.from([0, 0, 0, 0, 0, 0]), _ = 0, g = 0, w = f, E = 0, I = !0, S = !1, O = !1; !h; ) {
        var b = d;
        switch (d = !1, _ = g, g = e.decodeCode(n, y, p), s[u++] = g, g !== e.CODE_STOP && (I = !0), g !== e.CODE_STOP && (E++, w += E * g), v = p, p += y.reduce(function(ot, ft) {
          return ot + ft;
        }, 0), g) {
          case e.CODE_START_A:
          case e.CODE_START_B:
          case e.CODE_START_C:
            throw new m();
        }
        switch (c) {
          case e.CODE_CODE_A:
            if (g < 64)
              O === S ? l += String.fromCharCode(32 + g) : l += String.fromCharCode(32 + g + 128), O = !1;
            else if (g < 96)
              O === S ? l += String.fromCharCode(g - 64) : l += String.fromCharCode(g + 64), O = !1;
            else
              switch (g !== e.CODE_STOP && (I = !1), g) {
                case e.CODE_FNC_1:
                  a && (l.length === 0 ? l += "]C1" : l += "");
                  break;
                case e.CODE_FNC_2:
                case e.CODE_FNC_3:
                  break;
                case e.CODE_FNC_4_A:
                  !S && O ? (S = !0, O = !1) : S && O ? (S = !1, O = !1) : O = !0;
                  break;
                case e.CODE_SHIFT:
                  d = !0, c = e.CODE_CODE_B;
                  break;
                case e.CODE_CODE_B:
                  c = e.CODE_CODE_B;
                  break;
                case e.CODE_CODE_C:
                  c = e.CODE_CODE_C;
                  break;
                case e.CODE_STOP:
                  h = !0;
                  break;
              }
            break;
          case e.CODE_CODE_B:
            if (g < 96)
              O === S ? l += String.fromCharCode(32 + g) : l += String.fromCharCode(32 + g + 128), O = !1;
            else
              switch (g !== e.CODE_STOP && (I = !1), g) {
                case e.CODE_FNC_1:
                  a && (l.length === 0 ? l += "]C1" : l += "");
                  break;
                case e.CODE_FNC_2:
                case e.CODE_FNC_3:
                  break;
                case e.CODE_FNC_4_B:
                  !S && O ? (S = !0, O = !1) : S && O ? (S = !1, O = !1) : O = !0;
                  break;
                case e.CODE_SHIFT:
                  d = !0, c = e.CODE_CODE_A;
                  break;
                case e.CODE_CODE_A:
                  c = e.CODE_CODE_A;
                  break;
                case e.CODE_CODE_C:
                  c = e.CODE_CODE_C;
                  break;
                case e.CODE_STOP:
                  h = !0;
                  break;
              }
            break;
          case e.CODE_CODE_C:
            if (g < 100)
              g < 10 && (l += "0"), l += g;
            else
              switch (g !== e.CODE_STOP && (I = !1), g) {
                case e.CODE_FNC_1:
                  a && (l.length === 0 ? l += "]C1" : l += "");
                  break;
                case e.CODE_CODE_A:
                  c = e.CODE_CODE_A;
                  break;
                case e.CODE_CODE_B:
                  c = e.CODE_CODE_B;
                  break;
                case e.CODE_STOP:
                  h = !0;
                  break;
              }
            break;
        }
        b && (c = c === e.CODE_CODE_A ? e.CODE_CODE_B : e.CODE_CODE_A);
      }
      var P = p - v;
      if (p = n.getNextUnset(p), !n.isRange(p, Math.min(n.getSize(), p + (p - v) / 2), !1))
        throw new C();
      if (w -= E * _, w % 103 !== _)
        throw new re();
      var N = l.length;
      if (N === 0)
        throw new C();
      N > 0 && I && (c === e.CODE_CODE_C ? l = l.substring(0, N - 2) : l = l.substring(0, N - 1));
      for (var $ = (o[1] + o[0]) / 2, B = v + P / 2, Z = s.length, le = new Uint8Array(Z), we = 0; we < Z; we++)
        le[we] = s[we];
      var at = [new T($, t), new T(B, t)];
      return new he(l, le, 0, at, R.CODE_128, (/* @__PURE__ */ new Date()).getTime());
    }, e.CODE_PATTERNS = [
      Int32Array.from([2, 1, 2, 2, 2, 2]),
      Int32Array.from([2, 2, 2, 1, 2, 2]),
      Int32Array.from([2, 2, 2, 2, 2, 1]),
      Int32Array.from([1, 2, 1, 2, 2, 3]),
      Int32Array.from([1, 2, 1, 3, 2, 2]),
      Int32Array.from([1, 3, 1, 2, 2, 2]),
      Int32Array.from([1, 2, 2, 2, 1, 3]),
      Int32Array.from([1, 2, 2, 3, 1, 2]),
      Int32Array.from([1, 3, 2, 2, 1, 2]),
      Int32Array.from([2, 2, 1, 2, 1, 3]),
      Int32Array.from([2, 2, 1, 3, 1, 2]),
      Int32Array.from([2, 3, 1, 2, 1, 2]),
      Int32Array.from([1, 1, 2, 2, 3, 2]),
      Int32Array.from([1, 2, 2, 1, 3, 2]),
      Int32Array.from([1, 2, 2, 2, 3, 1]),
      Int32Array.from([1, 1, 3, 2, 2, 2]),
      Int32Array.from([1, 2, 3, 1, 2, 2]),
      Int32Array.from([1, 2, 3, 2, 2, 1]),
      Int32Array.from([2, 2, 3, 2, 1, 1]),
      Int32Array.from([2, 2, 1, 1, 3, 2]),
      Int32Array.from([2, 2, 1, 2, 3, 1]),
      Int32Array.from([2, 1, 3, 2, 1, 2]),
      Int32Array.from([2, 2, 3, 1, 1, 2]),
      Int32Array.from([3, 1, 2, 1, 3, 1]),
      Int32Array.from([3, 1, 1, 2, 2, 2]),
      Int32Array.from([3, 2, 1, 1, 2, 2]),
      Int32Array.from([3, 2, 1, 2, 2, 1]),
      Int32Array.from([3, 1, 2, 2, 1, 2]),
      Int32Array.from([3, 2, 2, 1, 1, 2]),
      Int32Array.from([3, 2, 2, 2, 1, 1]),
      Int32Array.from([2, 1, 2, 1, 2, 3]),
      Int32Array.from([2, 1, 2, 3, 2, 1]),
      Int32Array.from([2, 3, 2, 1, 2, 1]),
      Int32Array.from([1, 1, 1, 3, 2, 3]),
      Int32Array.from([1, 3, 1, 1, 2, 3]),
      Int32Array.from([1, 3, 1, 3, 2, 1]),
      Int32Array.from([1, 1, 2, 3, 1, 3]),
      Int32Array.from([1, 3, 2, 1, 1, 3]),
      Int32Array.from([1, 3, 2, 3, 1, 1]),
      Int32Array.from([2, 1, 1, 3, 1, 3]),
      Int32Array.from([2, 3, 1, 1, 1, 3]),
      Int32Array.from([2, 3, 1, 3, 1, 1]),
      Int32Array.from([1, 1, 2, 1, 3, 3]),
      Int32Array.from([1, 1, 2, 3, 3, 1]),
      Int32Array.from([1, 3, 2, 1, 3, 1]),
      Int32Array.from([1, 1, 3, 1, 2, 3]),
      Int32Array.from([1, 1, 3, 3, 2, 1]),
      Int32Array.from([1, 3, 3, 1, 2, 1]),
      Int32Array.from([3, 1, 3, 1, 2, 1]),
      Int32Array.from([2, 1, 1, 3, 3, 1]),
      Int32Array.from([2, 3, 1, 1, 3, 1]),
      Int32Array.from([2, 1, 3, 1, 1, 3]),
      Int32Array.from([2, 1, 3, 3, 1, 1]),
      Int32Array.from([2, 1, 3, 1, 3, 1]),
      Int32Array.from([3, 1, 1, 1, 2, 3]),
      Int32Array.from([3, 1, 1, 3, 2, 1]),
      Int32Array.from([3, 3, 1, 1, 2, 1]),
      Int32Array.from([3, 1, 2, 1, 1, 3]),
      Int32Array.from([3, 1, 2, 3, 1, 1]),
      Int32Array.from([3, 3, 2, 1, 1, 1]),
      Int32Array.from([3, 1, 4, 1, 1, 1]),
      Int32Array.from([2, 2, 1, 4, 1, 1]),
      Int32Array.from([4, 3, 1, 1, 1, 1]),
      Int32Array.from([1, 1, 1, 2, 2, 4]),
      Int32Array.from([1, 1, 1, 4, 2, 2]),
      Int32Array.from([1, 2, 1, 1, 2, 4]),
      Int32Array.from([1, 2, 1, 4, 2, 1]),
      Int32Array.from([1, 4, 1, 1, 2, 2]),
      Int32Array.from([1, 4, 1, 2, 2, 1]),
      Int32Array.from([1, 1, 2, 2, 1, 4]),
      Int32Array.from([1, 1, 2, 4, 1, 2]),
      Int32Array.from([1, 2, 2, 1, 1, 4]),
      Int32Array.from([1, 2, 2, 4, 1, 1]),
      Int32Array.from([1, 4, 2, 1, 1, 2]),
      Int32Array.from([1, 4, 2, 2, 1, 1]),
      Int32Array.from([2, 4, 1, 2, 1, 1]),
      Int32Array.from([2, 2, 1, 1, 1, 4]),
      Int32Array.from([4, 1, 3, 1, 1, 1]),
      Int32Array.from([2, 4, 1, 1, 1, 2]),
      Int32Array.from([1, 3, 4, 1, 1, 1]),
      Int32Array.from([1, 1, 1, 2, 4, 2]),
      Int32Array.from([1, 2, 1, 1, 4, 2]),
      Int32Array.from([1, 2, 1, 2, 4, 1]),
      Int32Array.from([1, 1, 4, 2, 1, 2]),
      Int32Array.from([1, 2, 4, 1, 1, 2]),
      Int32Array.from([1, 2, 4, 2, 1, 1]),
      Int32Array.from([4, 1, 1, 2, 1, 2]),
      Int32Array.from([4, 2, 1, 1, 1, 2]),
      Int32Array.from([4, 2, 1, 2, 1, 1]),
      Int32Array.from([2, 1, 2, 1, 4, 1]),
      Int32Array.from([2, 1, 4, 1, 2, 1]),
      Int32Array.from([4, 1, 2, 1, 2, 1]),
      Int32Array.from([1, 1, 1, 1, 4, 3]),
      Int32Array.from([1, 1, 1, 3, 4, 1]),
      Int32Array.from([1, 3, 1, 1, 4, 1]),
      Int32Array.from([1, 1, 4, 1, 1, 3]),
      Int32Array.from([1, 1, 4, 3, 1, 1]),
      Int32Array.from([4, 1, 1, 1, 1, 3]),
      Int32Array.from([4, 1, 1, 3, 1, 1]),
      Int32Array.from([1, 1, 3, 1, 4, 1]),
      Int32Array.from([1, 1, 4, 1, 3, 1]),
      Int32Array.from([3, 1, 1, 1, 4, 1]),
      Int32Array.from([4, 1, 1, 1, 3, 1]),
      Int32Array.from([2, 1, 1, 4, 1, 2]),
      Int32Array.from([2, 1, 1, 2, 1, 4]),
      Int32Array.from([2, 1, 1, 2, 3, 2]),
      Int32Array.from([2, 3, 3, 1, 1, 1, 2])
    ], e.MAX_AVG_VARIANCE = 0.25, e.MAX_INDIVIDUAL_VARIANCE = 0.7, e.CODE_SHIFT = 98, e.CODE_CODE_C = 99, e.CODE_CODE_B = 100, e.CODE_CODE_A = 101, e.CODE_FNC_1 = 102, e.CODE_FNC_2 = 97, e.CODE_FNC_3 = 96, e.CODE_FNC_4_A = 101, e.CODE_FNC_4_B = 100, e.CODE_START_A = 103, e.CODE_START_B = 104, e.CODE_START_C = 105, e.CODE_STOP = 106, e;
  }(ie)
), vn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ut = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, kt = (
  /** @class */
  function(r) {
    vn(e, r);
    function e(t, n) {
      t === void 0 && (t = !1), n === void 0 && (n = !1);
      var i = r.call(this) || this;
      return i.usingCheckDigit = t, i.extendedMode = n, i.decodeRowResult = "", i.counters = new Int32Array(9), i;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a, o, f, u, s = this.counters;
      s.fill(0), this.decodeRowResult = "";
      var c = e.findAsteriskPattern(n, s), h = n.getNextSet(c[1]), d = n.getSize(), l, v;
      do {
        e.recordPattern(n, h, s);
        var p = e.toNarrowWidePattern(s);
        if (p < 0)
          throw new C();
        l = e.patternToChar(p), this.decodeRowResult += l, v = h;
        try {
          for (var y = (a = void 0, ut(s)), _ = y.next(); !_.done; _ = y.next()) {
            var g = _.value;
            h += g;
          }
        } catch (Z) {
          a = { error: Z };
        } finally {
          try {
            _ && !_.done && (o = y.return) && o.call(y);
          } finally {
            if (a)
              throw a.error;
          }
        }
        h = n.getNextSet(h);
      } while (l !== "*");
      this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
      var w = 0;
      try {
        for (var E = ut(s), I = E.next(); !I.done; I = E.next()) {
          var g = I.value;
          w += g;
        }
      } catch (Z) {
        f = { error: Z };
      } finally {
        try {
          I && !I.done && (u = E.return) && u.call(E);
        } finally {
          if (f)
            throw f.error;
        }
      }
      var S = h - v - w;
      if (h !== d && S * 2 < w)
        throw new C();
      if (this.usingCheckDigit) {
        for (var O = this.decodeRowResult.length - 1, b = 0, P = 0; P < O; P++)
          b += e.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(P));
        if (this.decodeRowResult.charAt(O) !== e.ALPHABET_STRING.charAt(b % 43))
          throw new re();
        this.decodeRowResult = this.decodeRowResult.substring(0, O);
      }
      if (this.decodeRowResult.length === 0)
        throw new C();
      var N;
      this.extendedMode ? N = e.decodeExtended(this.decodeRowResult) : N = this.decodeRowResult;
      var $ = (c[1] + c[0]) / 2, B = v + w / 2;
      return new he(N, null, 0, [new T($, t), new T(B, t)], R.CODE_39, (/* @__PURE__ */ new Date()).getTime());
    }, e.findAsteriskPattern = function(t, n) {
      for (var i = t.getSize(), a = t.getNextSet(0), o = 0, f = a, u = !1, s = n.length, c = a; c < i; c++)
        if (t.get(c) !== u)
          n[o]++;
        else {
          if (o === s - 1) {
            if (this.toNarrowWidePattern(n) === e.ASTERISK_ENCODING && t.isRange(Math.max(0, f - Math.floor((c - f) / 2)), f, !1))
              return [f, c];
            f += n[0] + n[1], n.copyWithin(0, 2, 2 + o - 1), n[o - 1] = 0, n[o] = 0, o--;
          } else
            o++;
          n[o] = 1, u = !u;
        }
      throw new C();
    }, e.toNarrowWidePattern = function(t) {
      var n, i, a = t.length, o = 0, f;
      do {
        var u = 2147483647;
        try {
          for (var s = (n = void 0, ut(t)), c = s.next(); !c.done; c = s.next()) {
            var h = c.value;
            h < u && h > o && (u = h);
          }
        } catch (p) {
          n = { error: p };
        } finally {
          try {
            c && !c.done && (i = s.return) && i.call(s);
          } finally {
            if (n)
              throw n.error;
          }
        }
        o = u, f = 0;
        for (var d = 0, l = 0, v = 0; v < a; v++) {
          var h = t[v];
          h > o && (l |= 1 << a - 1 - v, f++, d += h);
        }
        if (f === 3) {
          for (var v = 0; v < a && f > 0; v++) {
            var h = t[v];
            if (h > o && (f--, h * 2 >= d))
              return -1;
          }
          return l;
        }
      } while (f > 3);
      return -1;
    }, e.patternToChar = function(t) {
      for (var n = 0; n < e.CHARACTER_ENCODINGS.length; n++)
        if (e.CHARACTER_ENCODINGS[n] === t)
          return e.ALPHABET_STRING.charAt(n);
      if (t === e.ASTERISK_ENCODING)
        return "*";
      throw new C();
    }, e.decodeExtended = function(t) {
      for (var n = t.length, i = "", a = 0; a < n; a++) {
        var o = t.charAt(a);
        if (o === "+" || o === "$" || o === "%" || o === "/") {
          var f = t.charAt(a + 1), u = "\0";
          switch (o) {
            case "+":
              if (f >= "A" && f <= "Z")
                u = String.fromCharCode(f.charCodeAt(0) + 32);
              else
                throw new m();
              break;
            case "$":
              if (f >= "A" && f <= "Z")
                u = String.fromCharCode(f.charCodeAt(0) - 64);
              else
                throw new m();
              break;
            case "%":
              if (f >= "A" && f <= "E")
                u = String.fromCharCode(f.charCodeAt(0) - 38);
              else if (f >= "F" && f <= "J")
                u = String.fromCharCode(f.charCodeAt(0) - 11);
              else if (f >= "K" && f <= "O")
                u = String.fromCharCode(f.charCodeAt(0) + 16);
              else if (f >= "P" && f <= "T")
                u = String.fromCharCode(f.charCodeAt(0) + 43);
              else if (f === "U")
                u = "\0";
              else if (f === "V")
                u = "@";
              else if (f === "W")
                u = "`";
              else if (f === "X" || f === "Y" || f === "Z")
                u = "";
              else
                throw new m();
              break;
            case "/":
              if (f >= "A" && f <= "O")
                u = String.fromCharCode(f.charCodeAt(0) - 32);
              else if (f === "Z")
                u = ":";
              else
                throw new m();
              break;
          }
          i += u, a++;
        } else
          i += o;
      }
      return i;
    }, e.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", e.CHARACTER_ENCODINGS = [
      52,
      289,
      97,
      352,
      49,
      304,
      112,
      37,
      292,
      100,
      265,
      73,
      328,
      25,
      280,
      88,
      13,
      268,
      76,
      28,
      259,
      67,
      322,
      19,
      274,
      82,
      7,
      262,
      70,
      22,
      385,
      193,
      448,
      145,
      400,
      208,
      133,
      388,
      196,
      168,
      162,
      138,
      42
      // /-%
    ], e.ASTERISK_ENCODING = 148, e;
  }(ie)
), xn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), pn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ut = (
  /** @class */
  function(r) {
    xn(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.narrowLineWidth = -1, t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a, o, f = this.decodeStart(n), u = this.decodeEnd(n), s = new G();
      e.decodeMiddle(n, f[1], u[0], s);
      var c = s.toString(), h = null;
      i != null && (h = i.get(j.ALLOWED_LENGTHS)), h == null && (h = e.DEFAULT_ALLOWED_LENGTHS);
      var d = c.length, l = !1, v = 0;
      try {
        for (var p = pn(h), y = p.next(); !y.done; y = p.next()) {
          var _ = y.value;
          if (d === _) {
            l = !0;
            break;
          }
          _ > v && (v = _);
        }
      } catch (E) {
        a = { error: E };
      } finally {
        try {
          y && !y.done && (o = p.return) && o.call(p);
        } finally {
          if (a)
            throw a.error;
        }
      }
      if (!l && d > v && (l = !0), !l)
        throw new m();
      var g = [new T(f[1], t), new T(u[0], t)], w = new he(
        c,
        null,
        // no natural byte representation for these barcodes
        0,
        g,
        R.ITF,
        (/* @__PURE__ */ new Date()).getTime()
      );
      return w;
    }, e.decodeMiddle = function(t, n, i, a) {
      var o = new Int32Array(10), f = new Int32Array(5), u = new Int32Array(5);
      for (o.fill(0), f.fill(0), u.fill(0); n < i; ) {
        ie.recordPattern(t, n, o);
        for (var s = 0; s < 5; s++) {
          var c = 2 * s;
          f[s] = o[c], u[s] = o[c + 1];
        }
        var h = e.decodeDigit(f);
        a.append(h.toString()), h = this.decodeDigit(u), a.append(h.toString()), o.forEach(function(d) {
          n += d;
        });
      }
    }, e.prototype.decodeStart = function(t) {
      var n = e.skipWhiteSpace(t), i = e.findGuardPattern(t, n, e.START_PATTERN);
      return this.narrowLineWidth = (i[1] - i[0]) / 4, this.validateQuietZone(t, i[0]), i;
    }, e.prototype.validateQuietZone = function(t, n) {
      var i = this.narrowLineWidth * 10;
      i = i < n ? i : n;
      for (var a = n - 1; i > 0 && a >= 0 && !t.get(a); a--)
        i--;
      if (i !== 0)
        throw new C();
    }, e.skipWhiteSpace = function(t) {
      var n = t.getSize(), i = t.getNextSet(0);
      if (i === n)
        throw new C();
      return i;
    }, e.prototype.decodeEnd = function(t) {
      t.reverse();
      try {
        var n = e.skipWhiteSpace(t), i = void 0;
        try {
          i = e.findGuardPattern(t, n, e.END_PATTERN_REVERSED[0]);
        } catch (o) {
          o instanceof C && (i = e.findGuardPattern(t, n, e.END_PATTERN_REVERSED[1]));
        }
        this.validateQuietZone(t, i[0]);
        var a = i[0];
        return i[0] = t.getSize() - i[1], i[1] = t.getSize() - a, i;
      } finally {
        t.reverse();
      }
    }, e.findGuardPattern = function(t, n, i) {
      var a = i.length, o = new Int32Array(a), f = t.getSize(), u = !1, s = 0, c = n;
      o.fill(0);
      for (var h = n; h < f; h++)
        if (t.get(h) !== u)
          o[s]++;
        else {
          if (s === a - 1) {
            if (ie.patternMatchVariance(o, i, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE)
              return [c, h];
            c += o[0] + o[1], W.arraycopy(o, 2, o, 0, s - 1), o[s - 1] = 0, o[s] = 0, s--;
          } else
            s++;
          o[s] = 1, u = !u;
        }
      throw new C();
    }, e.decodeDigit = function(t) {
      for (var n = e.MAX_AVG_VARIANCE, i = -1, a = e.PATTERNS.length, o = 0; o < a; o++) {
        var f = e.PATTERNS[o], u = ie.patternMatchVariance(t, f, e.MAX_INDIVIDUAL_VARIANCE);
        u < n ? (n = u, i = o) : u === n && (i = -1);
      }
      if (i >= 0)
        return i % 10;
      throw new C();
    }, e.PATTERNS = [
      Int32Array.from([1, 1, 2, 2, 1]),
      Int32Array.from([2, 1, 1, 1, 2]),
      Int32Array.from([1, 2, 1, 1, 2]),
      Int32Array.from([2, 2, 1, 1, 1]),
      Int32Array.from([1, 1, 2, 1, 2]),
      Int32Array.from([2, 1, 2, 1, 1]),
      Int32Array.from([1, 2, 2, 1, 1]),
      Int32Array.from([1, 1, 1, 2, 2]),
      Int32Array.from([2, 1, 1, 2, 1]),
      Int32Array.from([1, 2, 1, 2, 1]),
      Int32Array.from([1, 1, 3, 3, 1]),
      Int32Array.from([3, 1, 1, 1, 3]),
      Int32Array.from([1, 3, 1, 1, 3]),
      Int32Array.from([3, 3, 1, 1, 1]),
      Int32Array.from([1, 1, 3, 1, 3]),
      Int32Array.from([3, 1, 3, 1, 1]),
      Int32Array.from([1, 3, 3, 1, 1]),
      Int32Array.from([1, 1, 1, 3, 3]),
      Int32Array.from([3, 1, 1, 3, 1]),
      Int32Array.from([1, 3, 1, 3, 1])
      // 9
    ], e.MAX_AVG_VARIANCE = 0.38, e.MAX_INDIVIDUAL_VARIANCE = 0.5, e.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], e.START_PATTERN = Int32Array.from([1, 1, 1, 1]), e.END_PATTERN_REVERSED = [
      Int32Array.from([1, 1, 2]),
      Int32Array.from([1, 1, 3])
      // 3x
    ], e;
  }(ie)
), gn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Be = (
  /** @class */
  function(r) {
    gn(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.decodeRowStringBuffer = "", t;
    }
    return e.findStartGuardPattern = function(t) {
      for (var n = !1, i, a = 0, o = Int32Array.from([0, 0, 0]); !n; ) {
        o = Int32Array.from([0, 0, 0]), i = e.findGuardPattern(t, a, !1, this.START_END_PATTERN, o);
        var f = i[0];
        a = i[1];
        var u = f - (a - f);
        u >= 0 && (n = t.isRange(u, f, !1));
      }
      return i;
    }, e.checkChecksum = function(t) {
      return e.checkStandardUPCEANChecksum(t);
    }, e.checkStandardUPCEANChecksum = function(t) {
      var n = t.length;
      if (n === 0)
        return !1;
      var i = parseInt(t.charAt(n - 1), 10);
      return e.getStandardUPCEANChecksum(t.substring(0, n - 1)) === i;
    }, e.getStandardUPCEANChecksum = function(t) {
      for (var n = t.length, i = 0, a = n - 1; a >= 0; a -= 2) {
        var o = t.charAt(a).charCodeAt(0) - 48;
        if (o < 0 || o > 9)
          throw new m();
        i += o;
      }
      i *= 3;
      for (var a = n - 2; a >= 0; a -= 2) {
        var o = t.charAt(a).charCodeAt(0) - 48;
        if (o < 0 || o > 9)
          throw new m();
        i += o;
      }
      return (1e3 - i) % 10;
    }, e.decodeEnd = function(t, n) {
      return e.findGuardPattern(t, n, !1, e.START_END_PATTERN, new Int32Array(e.START_END_PATTERN.length).fill(0));
    }, e.findGuardPatternWithoutCounters = function(t, n, i, a) {
      return this.findGuardPattern(t, n, i, a, new Int32Array(a.length));
    }, e.findGuardPattern = function(t, n, i, a, o) {
      var f = t.getSize();
      n = i ? t.getNextUnset(n) : t.getNextSet(n);
      for (var u = 0, s = n, c = a.length, h = i, d = n; d < f; d++)
        if (t.get(d) !== h)
          o[u]++;
        else {
          if (u === c - 1) {
            if (ie.patternMatchVariance(o, a, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE)
              return Int32Array.from([s, d]);
            s += o[0] + o[1];
            for (var l = o.slice(2, o.length - 1), v = 0; v < u - 1; v++)
              o[v] = l[v];
            o[u - 1] = 0, o[u] = 0, u--;
          } else
            u++;
          o[u] = 1, h = !h;
        }
      throw new C();
    }, e.decodeDigit = function(t, n, i, a) {
      this.recordPattern(t, i, n);
      for (var o = this.MAX_AVG_VARIANCE, f = -1, u = a.length, s = 0; s < u; s++) {
        var c = a[s], h = ie.patternMatchVariance(n, c, e.MAX_INDIVIDUAL_VARIANCE);
        h < o && (o = h, f = s);
      }
      if (f >= 0)
        return f;
      throw new C();
    }, e.MAX_AVG_VARIANCE = 0.48, e.MAX_INDIVIDUAL_VARIANCE = 0.7, e.START_END_PATTERN = Int32Array.from([1, 1, 1]), e.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), e.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), e.L_PATTERNS = [
      Int32Array.from([3, 2, 1, 1]),
      Int32Array.from([2, 2, 2, 1]),
      Int32Array.from([2, 1, 2, 2]),
      Int32Array.from([1, 4, 1, 1]),
      Int32Array.from([1, 1, 3, 2]),
      Int32Array.from([1, 2, 3, 1]),
      Int32Array.from([1, 1, 1, 4]),
      Int32Array.from([1, 3, 1, 2]),
      Int32Array.from([1, 2, 1, 3]),
      Int32Array.from([3, 1, 1, 2])
    ], e;
  }(ie)
), yn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, _n = (
  /** @class */
  function() {
    function r() {
      this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
    }
    return r.prototype.decodeRow = function(e, t, n) {
      var i = this.decodeRowStringBuffer, a = this.decodeMiddle(t, n, i), o = i.toString(), f = r.parseExtensionString(o), u = [
        new T((n[0] + n[1]) / 2, e),
        new T(a, e)
      ], s = new he(o, null, 0, u, R.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
      return f != null && s.putAllMetadata(f), s;
    }, r.prototype.decodeMiddle = function(e, t, n) {
      var i, a, o = this.decodeMiddleCounters;
      o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 0;
      for (var f = e.getSize(), u = t[1], s = 0, c = 0; c < 5 && u < f; c++) {
        var h = Be.decodeDigit(e, o, u, Be.L_AND_G_PATTERNS);
        n += String.fromCharCode(48 + h % 10);
        try {
          for (var d = (i = void 0, yn(o)), l = d.next(); !l.done; l = d.next()) {
            var v = l.value;
            u += v;
          }
        } catch (y) {
          i = { error: y };
        } finally {
          try {
            l && !l.done && (a = d.return) && a.call(d);
          } finally {
            if (i)
              throw i.error;
          }
        }
        h >= 10 && (s |= 1 << 4 - c), c !== 4 && (u = e.getNextSet(u), u = e.getNextUnset(u));
      }
      if (n.length !== 5)
        throw new C();
      var p = this.determineCheckDigit(s);
      if (r.extensionChecksum(n.toString()) !== p)
        throw new C();
      return u;
    }, r.extensionChecksum = function(e) {
      for (var t = e.length, n = 0, i = t - 2; i >= 0; i -= 2)
        n += e.charAt(i).charCodeAt(0) - 48;
      n *= 3;
      for (var i = t - 1; i >= 0; i -= 2)
        n += e.charAt(i).charCodeAt(0) - 48;
      return n *= 3, n % 10;
    }, r.prototype.determineCheckDigit = function(e) {
      for (var t = 0; t < 10; t++)
        if (e === this.CHECK_DIGIT_ENCODINGS[t])
          return t;
      throw new C();
    }, r.parseExtensionString = function(e) {
      if (e.length !== 5)
        return null;
      var t = r.parseExtension5String(e);
      return t == null ? null : /* @__PURE__ */ new Map([[ne.SUGGESTED_PRICE, t]]);
    }, r.parseExtension5String = function(e) {
      var t;
      switch (e.charAt(0)) {
        case "0":
          t = "£";
          break;
        case "5":
          t = "$";
          break;
        case "9":
          switch (e) {
            case "90000":
              return null;
            case "99991":
              return "0.00";
            case "99990":
              return "Used";
          }
          t = "";
          break;
        default:
          t = "";
          break;
      }
      var n = parseInt(e.substring(1)), i = (n / 100).toString(), a = n % 100, o = a < 10 ? "0" + a : a.toString();
      return t + i + "." + o;
    }, r;
  }()
), An = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, wn = (
  /** @class */
  function() {
    function r() {
      this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
    }
    return r.prototype.decodeRow = function(e, t, n) {
      var i = this.decodeRowStringBuffer, a = this.decodeMiddle(t, n, i), o = i.toString(), f = r.parseExtensionString(o), u = [
        new T((n[0] + n[1]) / 2, e),
        new T(a, e)
      ], s = new he(o, null, 0, u, R.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
      return f != null && s.putAllMetadata(f), s;
    }, r.prototype.decodeMiddle = function(e, t, n) {
      var i, a, o = this.decodeMiddleCounters;
      o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 0;
      for (var f = e.getSize(), u = t[1], s = 0, c = 0; c < 2 && u < f; c++) {
        var h = Be.decodeDigit(e, o, u, Be.L_AND_G_PATTERNS);
        n += String.fromCharCode(48 + h % 10);
        try {
          for (var d = (i = void 0, An(o)), l = d.next(); !l.done; l = d.next()) {
            var v = l.value;
            u += v;
          }
        } catch (p) {
          i = { error: p };
        } finally {
          try {
            l && !l.done && (a = d.return) && a.call(d);
          } finally {
            if (i)
              throw i.error;
          }
        }
        h >= 10 && (s |= 1 << 1 - c), c !== 1 && (u = e.getNextSet(u), u = e.getNextUnset(u));
      }
      if (n.length !== 2)
        throw new C();
      if (parseInt(n.toString()) % 4 !== s)
        throw new C();
      return u;
    }, r.parseExtensionString = function(e) {
      return e.length !== 2 ? null : /* @__PURE__ */ new Map([[ne.ISSUE_NUMBER, parseInt(e)]]);
    }, r;
  }()
), En = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeRow = function(e, t, n) {
      var i = Be.findGuardPattern(t, n, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
      try {
        var a = new _n();
        return a.decodeRow(e, t, i);
      } catch {
        var o = new wn();
        return o.decodeRow(e, t, i);
      }
    }, r.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]), r;
  }()
), Cn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), q = (
  /** @class */
  function(r) {
    Cn(e, r);
    function e() {
      var t = r.call(this) || this;
      t.decodeRowStringBuffer = "", e.L_AND_G_PATTERNS = e.L_PATTERNS.map(function(f) {
        return Int32Array.from(f);
      });
      for (var n = 10; n < 20; n++) {
        for (var i = e.L_PATTERNS[n - 10], a = new Int32Array(i.length), o = 0; o < i.length; o++)
          a[o] = i[i.length - o - 1];
        e.L_AND_G_PATTERNS[n] = a;
      }
      return t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a = e.findStartGuardPattern(n), o = i == null ? null : i.get(j.NEED_RESULT_POINT_CALLBACK);
      if (o != null) {
        var f = new T((a[0] + a[1]) / 2, t);
        o.foundPossibleResultPoint(f);
      }
      var u = this.decodeMiddle(n, a, this.decodeRowStringBuffer), s = u.rowOffset, c = u.resultString;
      if (o != null) {
        var h = new T(s, t);
        o.foundPossibleResultPoint(h);
      }
      var d = e.decodeEnd(n, s);
      if (o != null) {
        var l = new T((d[0] + d[1]) / 2, t);
        o.foundPossibleResultPoint(l);
      }
      var v = d[1], p = v + (v - d[0]);
      if (p >= n.getSize() || !n.isRange(v, p, !1))
        throw new C();
      var y = c.toString();
      if (y.length < 8)
        throw new m();
      if (!e.checkChecksum(y))
        throw new re();
      var _ = (a[1] + a[0]) / 2, g = (d[1] + d[0]) / 2, w = this.getBarcodeFormat(), E = [new T(_, t), new T(g, t)], I = new he(y, null, 0, E, w, (/* @__PURE__ */ new Date()).getTime()), S = 0;
      try {
        var O = En.decodeRow(t, n, d[1]);
        I.putMetadata(ne.UPC_EAN_EXTENSION, O.getText()), I.putAllMetadata(O.getResultMetadata()), I.addResultPoints(O.getResultPoints()), S = O.getText().length;
      } catch {
      }
      var b = i == null ? null : i.get(j.ALLOWED_EAN_EXTENSIONS);
      if (b != null) {
        var P = !1;
        for (var N in b)
          if (S.toString() === N) {
            P = !0;
            break;
          }
        if (!P)
          throw new C();
      }
      return w === R.EAN_13 || R.UPC_A, I;
    }, e.checkChecksum = function(t) {
      return e.checkStandardUPCEANChecksum(t);
    }, e.checkStandardUPCEANChecksum = function(t) {
      var n = t.length;
      if (n === 0)
        return !1;
      var i = parseInt(t.charAt(n - 1), 10);
      return e.getStandardUPCEANChecksum(t.substring(0, n - 1)) === i;
    }, e.getStandardUPCEANChecksum = function(t) {
      for (var n = t.length, i = 0, a = n - 1; a >= 0; a -= 2) {
        var o = t.charAt(a).charCodeAt(0) - 48;
        if (o < 0 || o > 9)
          throw new m();
        i += o;
      }
      i *= 3;
      for (var a = n - 2; a >= 0; a -= 2) {
        var o = t.charAt(a).charCodeAt(0) - 48;
        if (o < 0 || o > 9)
          throw new m();
        i += o;
      }
      return (1e3 - i) % 10;
    }, e.decodeEnd = function(t, n) {
      return e.findGuardPattern(t, n, !1, e.START_END_PATTERN, new Int32Array(e.START_END_PATTERN.length).fill(0));
    }, e;
  }(Be)
), In = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Vt = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, At = (
  /** @class */
  function(r) {
    In(e, r);
    function e() {
      var t = r.call(this) || this;
      return t.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), t;
    }
    return e.prototype.decodeMiddle = function(t, n, i) {
      var a, o, f, u, s = this.decodeMiddleCounters;
      s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0;
      for (var c = t.getSize(), h = n[1], d = 0, l = 0; l < 6 && h < c; l++) {
        var v = q.decodeDigit(t, s, h, q.L_AND_G_PATTERNS);
        i += String.fromCharCode(48 + v % 10);
        try {
          for (var p = (a = void 0, Vt(s)), y = p.next(); !y.done; y = p.next()) {
            var _ = y.value;
            h += _;
          }
        } catch (I) {
          a = { error: I };
        } finally {
          try {
            y && !y.done && (o = p.return) && o.call(p);
          } finally {
            if (a)
              throw a.error;
          }
        }
        v >= 10 && (d |= 1 << 5 - l);
      }
      i = e.determineFirstDigit(i, d);
      var g = q.findGuardPattern(t, h, !0, q.MIDDLE_PATTERN, new Int32Array(q.MIDDLE_PATTERN.length).fill(0));
      h = g[1];
      for (var l = 0; l < 6 && h < c; l++) {
        var v = q.decodeDigit(t, s, h, q.L_PATTERNS);
        i += String.fromCharCode(48 + v);
        try {
          for (var w = (f = void 0, Vt(s)), E = w.next(); !E.done; E = w.next()) {
            var _ = E.value;
            h += _;
          }
        } catch (O) {
          f = { error: O };
        } finally {
          try {
            E && !E.done && (u = w.return) && u.call(w);
          } finally {
            if (f)
              throw f.error;
          }
        }
      }
      return { rowOffset: h, resultString: i };
    }, e.prototype.getBarcodeFormat = function() {
      return R.EAN_13;
    }, e.determineFirstDigit = function(t, n) {
      for (var i = 0; i < 10; i++)
        if (n === this.FIRST_DIGIT_ENCODINGS[i])
          return t = String.fromCharCode(48 + i) + t, t;
      throw new C();
    }, e.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], e;
  }(q)
), Sn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ht = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Gt = (
  /** @class */
  function(r) {
    Sn(e, r);
    function e() {
      var t = r.call(this) || this;
      return t.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), t;
    }
    return e.prototype.decodeMiddle = function(t, n, i) {
      var a, o, f, u, s = this.decodeMiddleCounters;
      s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0;
      for (var c = t.getSize(), h = n[1], d = 0; d < 4 && h < c; d++) {
        var l = q.decodeDigit(t, s, h, q.L_PATTERNS);
        i += String.fromCharCode(48 + l);
        try {
          for (var v = (a = void 0, Ht(s)), p = v.next(); !p.done; p = v.next()) {
            var y = p.value;
            h += y;
          }
        } catch (E) {
          a = { error: E };
        } finally {
          try {
            p && !p.done && (o = v.return) && o.call(v);
          } finally {
            if (a)
              throw a.error;
          }
        }
      }
      var _ = q.findGuardPattern(t, h, !0, q.MIDDLE_PATTERN, new Int32Array(q.MIDDLE_PATTERN.length).fill(0));
      h = _[1];
      for (var d = 0; d < 4 && h < c; d++) {
        var l = q.decodeDigit(t, s, h, q.L_PATTERNS);
        i += String.fromCharCode(48 + l);
        try {
          for (var g = (f = void 0, Ht(s)), w = g.next(); !w.done; w = g.next()) {
            var y = w.value;
            h += y;
          }
        } catch (S) {
          f = { error: S };
        } finally {
          try {
            w && !w.done && (u = g.return) && u.call(g);
          } finally {
            if (f)
              throw f.error;
          }
        }
      }
      return { rowOffset: h, resultString: i };
    }, e.prototype.getBarcodeFormat = function() {
      return R.EAN_8;
    }, e;
  }(q)
), mn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Xt = (
  /** @class */
  function(r) {
    mn(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.ean13Reader = new At(), t;
    }
    return e.prototype.getBarcodeFormat = function() {
      return R.UPC_A;
    }, e.prototype.decode = function(t, n) {
      return this.maybeReturnResult(this.ean13Reader.decode(t));
    }, e.prototype.decodeRow = function(t, n, i) {
      return this.maybeReturnResult(this.ean13Reader.decodeRow(t, n, i));
    }, e.prototype.decodeMiddle = function(t, n, i) {
      return this.ean13Reader.decodeMiddle(t, n, i);
    }, e.prototype.maybeReturnResult = function(t) {
      var n = t.getText();
      if (n.charAt(0) === "0") {
        var i = new he(n.substring(1), null, null, t.getResultPoints(), R.UPC_A);
        return t.getResultMetadata() != null && i.putAllMetadata(t.getResultMetadata()), i;
      } else
        throw new C();
    }, e.prototype.reset = function() {
      this.ean13Reader.reset();
    }, e;
  }(q)
), On = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Tn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Wt = (
  /** @class */
  function(r) {
    On(e, r);
    function e() {
      var t = r.call(this) || this;
      return t.decodeMiddleCounters = new Int32Array(4), t;
    }
    return e.prototype.decodeMiddle = function(t, n, i) {
      var a, o, f = this.decodeMiddleCounters.map(function(y) {
        return y;
      });
      f[0] = 0, f[1] = 0, f[2] = 0, f[3] = 0;
      for (var u = t.getSize(), s = n[1], c = 0, h = 0; h < 6 && s < u; h++) {
        var d = e.decodeDigit(t, f, s, e.L_AND_G_PATTERNS);
        i += String.fromCharCode(48 + d % 10);
        try {
          for (var l = (a = void 0, Tn(f)), v = l.next(); !v.done; v = l.next()) {
            var p = v.value;
            s += p;
          }
        } catch (y) {
          a = { error: y };
        } finally {
          try {
            v && !v.done && (o = l.return) && o.call(l);
          } finally {
            if (a)
              throw a.error;
          }
        }
        d >= 10 && (c |= 1 << 5 - h);
      }
      return e.determineNumSysAndCheckDigit(new G(i), c), s;
    }, e.prototype.decodeEnd = function(t, n) {
      return e.findGuardPatternWithoutCounters(t, n, !0, e.MIDDLE_END_PATTERN);
    }, e.prototype.checkChecksum = function(t) {
      return q.checkChecksum(e.convertUPCEtoUPCA(t));
    }, e.determineNumSysAndCheckDigit = function(t, n) {
      for (var i = 0; i <= 1; i++)
        for (var a = 0; a < 10; a++)
          if (n === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[i][a]) {
            t.insert(
              0,
              /*(char)*/
              "0" + i
            ), t.append(
              /*(char)*/
              "0" + a
            );
            return;
          }
      throw C.getNotFoundInstance();
    }, e.prototype.getBarcodeFormat = function() {
      return R.UPC_E;
    }, e.convertUPCEtoUPCA = function(t) {
      var n = t.slice(1, 7).split("").map(function(o) {
        return o.charCodeAt(0);
      }), i = new G(
        /*12*/
      );
      i.append(t.charAt(0));
      var a = n[5];
      switch (a) {
        case 0:
        case 1:
        case 2:
          i.appendChars(n, 0, 2), i.append(a), i.append("0000"), i.appendChars(n, 2, 3);
          break;
        case 3:
          i.appendChars(n, 0, 3), i.append("00000"), i.appendChars(n, 3, 2);
          break;
        case 4:
          i.appendChars(n, 0, 4), i.append("00000"), i.append(n[4]);
          break;
        default:
          i.appendChars(n, 0, 5), i.append("0000"), i.append(a);
          break;
      }
      return t.length >= 8 && i.append(t.charAt(7)), i.toString();
    }, e.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), e.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
      Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
      Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])
    ], e;
  }(q)
), bn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), zt = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, st = (
  /** @class */
  function(r) {
    bn(e, r);
    function e(t) {
      var n = r.call(this) || this, i = t == null ? null : t.get(j.POSSIBLE_FORMATS), a = [];
      return i != null && (i.indexOf(R.EAN_13) > -1 && a.push(new At()), i.indexOf(R.UPC_A) > -1 && a.push(new Xt()), i.indexOf(R.EAN_8) > -1 && a.push(new Gt()), i.indexOf(R.UPC_E) > -1 && a.push(new Wt())), a.length === 0 && (a.push(new At()), a.push(new Xt()), a.push(new Gt()), a.push(new Wt())), n.readers = a, n;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a, o;
      try {
        for (var f = zt(this.readers), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          try {
            var c = s.decodeRow(t, n, i), h = c.getBarcodeFormat() === R.EAN_13 && c.getText().charAt(0) === "0", d = i == null ? null : i.get(j.POSSIBLE_FORMATS), l = d == null || d.includes(R.UPC_A);
            if (h && l) {
              var v = c.getRawBytes(), p = new he(c.getText().substring(1), v, v ? v.length : null, c.getResultPoints(), R.UPC_A);
              return p.putAllMetadata(c.getResultMetadata()), p;
            }
            return c;
          } catch {
          }
        }
      } catch (y) {
        a = { error: y };
      } finally {
        try {
          u && !u.done && (o = f.return) && o.call(f);
        } finally {
          if (a)
            throw a.error;
        }
      }
      throw new C();
    }, e.prototype.reset = function() {
      var t, n;
      try {
        for (var i = zt(this.readers), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o.reset();
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e;
  }(ie)
), Dn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Nn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, be = (
  /** @class */
  function(r) {
    Dn(e, r);
    function e() {
      var t = r.call(this) || this;
      return t.decodeFinderCounters = new Int32Array(4), t.dataCharacterCounters = new Int32Array(8), t.oddRoundingErrors = new Array(4), t.evenRoundingErrors = new Array(4), t.oddCounts = new Array(t.dataCharacterCounters.length / 2), t.evenCounts = new Array(t.dataCharacterCounters.length / 2), t;
    }
    return e.prototype.getDecodeFinderCounters = function() {
      return this.decodeFinderCounters;
    }, e.prototype.getDataCharacterCounters = function() {
      return this.dataCharacterCounters;
    }, e.prototype.getOddRoundingErrors = function() {
      return this.oddRoundingErrors;
    }, e.prototype.getEvenRoundingErrors = function() {
      return this.evenRoundingErrors;
    }, e.prototype.getOddCounts = function() {
      return this.oddCounts;
    }, e.prototype.getEvenCounts = function() {
      return this.evenCounts;
    }, e.prototype.parseFinderValue = function(t, n) {
      for (var i = 0; i < n.length; i++)
        if (ie.patternMatchVariance(t, n[i], e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE)
          return i;
      throw new C();
    }, e.count = function(t) {
      return L.sum(new Int32Array(t));
    }, e.increment = function(t, n) {
      for (var i = 0, a = n[0], o = 1; o < t.length; o++)
        n[o] > a && (a = n[o], i = o);
      t[i]++;
    }, e.decrement = function(t, n) {
      for (var i = 0, a = n[0], o = 1; o < t.length; o++)
        n[o] < a && (a = n[o], i = o);
      t[i]--;
    }, e.isFinderPattern = function(t) {
      var n, i, a = t[0] + t[1], o = a + t[2] + t[3], f = a / o;
      if (f >= e.MIN_FINDER_PATTERN_RATIO && f <= e.MAX_FINDER_PATTERN_RATIO) {
        var u = Number.MAX_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER;
        try {
          for (var c = Nn(t), h = c.next(); !h.done; h = c.next()) {
            var d = h.value;
            d > s && (s = d), d < u && (u = d);
          }
        } catch (l) {
          n = { error: l };
        } finally {
          try {
            h && !h.done && (i = c.return) && i.call(c);
          } finally {
            if (n)
              throw n.error;
          }
        }
        return s < 10 * u;
      }
      return !1;
    }, e.MAX_AVG_VARIANCE = 0.2, e.MAX_INDIVIDUAL_VARIANCE = 0.45, e.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, e.MAX_FINDER_PATTERN_RATIO = 12.5 / 14, e;
  }(ie)
), et = (
  /** @class */
  function() {
    function r(e, t) {
      this.value = e, this.checksumPortion = t;
    }
    return r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getChecksumPortion = function() {
      return this.checksumPortion;
    }, r.prototype.toString = function() {
      return this.value + "(" + this.checksumPortion + ")";
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.value === t.value && this.checksumPortion === t.checksumPortion;
    }, r.prototype.hashCode = function() {
      return this.value ^ this.checksumPortion;
    }, r;
  }()
), cr = (
  /** @class */
  function() {
    function r(e, t, n, i, a) {
      this.value = e, this.startEnd = t, this.value = e, this.startEnd = t, this.resultPoints = new Array(), this.resultPoints.push(new T(n, a)), this.resultPoints.push(new T(i, a));
    }
    return r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getStartEnd = function() {
      return this.startEnd;
    }, r.prototype.getResultPoints = function() {
      return this.resultPoints;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.value === t.value;
    }, r.prototype.hashCode = function() {
      return this.value;
    }, r;
  }()
), Rn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Pe = (
  /** @class */
  function() {
    function r() {
    }
    return r.getRSSvalue = function(e, t, n) {
      var i, a, o = 0;
      try {
        for (var f = Rn(e), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          o += s;
        }
      } catch (g) {
        i = { error: g };
      } finally {
        try {
          u && !u.done && (a = f.return) && a.call(f);
        } finally {
          if (i)
            throw i.error;
        }
      }
      for (var c = 0, h = 0, d = e.length, l = 0; l < d - 1; l++) {
        var v = void 0;
        for (v = 1, h |= 1 << l; v < e[l]; v++, h &= ~(1 << l)) {
          var p = r.combins(o - v - 1, d - l - 2);
          if (n && h === 0 && o - v - (d - l - 1) >= d - l - 1 && (p -= r.combins(o - v - (d - l), d - l - 2)), d - l - 1 > 1) {
            for (var y = 0, _ = o - v - (d - l - 2); _ > t; _--)
              y += r.combins(o - v - _ - 1, d - l - 3);
            p -= y * (d - 1 - l);
          } else
            o - v > t && p--;
          c += p;
        }
        o -= v;
      }
      return c;
    }, r.combins = function(e, t) {
      var n, i;
      e - t > t ? (i = t, n = e - t) : (i = e - t, n = t);
      for (var a = 1, o = 1, f = e; f > n; f--)
        a *= f, o <= i && (a /= o, o++);
      for (; o <= i; )
        a /= o, o++;
      return a;
    }, r;
  }()
), Pn = (
  /** @class */
  function() {
    function r() {
    }
    return r.buildBitArray = function(e) {
      var t = e.length * 2 - 1;
      e[e.length - 1].getRightChar() == null && (t -= 1);
      for (var n = 12 * t, i = new ee(n), a = 0, o = e[0], f = o.getRightChar().getValue(), u = 11; u >= 0; --u)
        f & 1 << u && i.set(a), a++;
      for (var u = 1; u < e.length; ++u) {
        for (var s = e[u], c = s.getLeftChar().getValue(), h = 11; h >= 0; --h)
          c & 1 << h && i.set(a), a++;
        if (s.getRightChar() != null)
          for (var d = s.getRightChar().getValue(), h = 11; h >= 0; --h)
            d & 1 << h && i.set(a), a++;
      }
      return i;
    }, r;
  }()
), Oe = (
  /** @class */
  function() {
    function r(e, t) {
      t ? this.decodedInformation = null : (this.finished = e, this.decodedInformation = t);
    }
    return r.prototype.getDecodedInformation = function() {
      return this.decodedInformation;
    }, r.prototype.isFinished = function() {
      return this.finished;
    }, r;
  }()
), Nt = (
  /** @class */
  function() {
    function r(e) {
      this.newPosition = e;
    }
    return r.prototype.getNewPosition = function() {
      return this.newPosition;
    }, r;
  }()
), Mn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), xe = (
  /** @class */
  function(r) {
    Mn(e, r);
    function e(t, n) {
      var i = r.call(this, t) || this;
      return i.value = n, i;
    }
    return e.prototype.getValue = function() {
      return this.value;
    }, e.prototype.isFNC1 = function() {
      return this.value === e.FNC1;
    }, e.FNC1 = "$", e;
  }(Nt)
), Bn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Te = (
  /** @class */
  function(r) {
    Bn(e, r);
    function e(t, n, i) {
      var a = r.call(this, t) || this;
      return i ? (a.remaining = !0, a.remainingValue = a.remainingValue) : (a.remaining = !1, a.remainingValue = 0), a.newString = n, a;
    }
    return e.prototype.getNewString = function() {
      return this.newString;
    }, e.prototype.isRemaining = function() {
      return this.remaining;
    }, e.prototype.getRemainingValue = function() {
      return this.remainingValue;
    }, e;
  }(Nt)
), Fn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Re = (
  /** @class */
  function(r) {
    Fn(e, r);
    function e(t, n, i) {
      var a = r.call(this, t) || this;
      if (n < 0 || n > 10 || i < 0 || i > 10)
        throw new m();
      return a.firstDigit = n, a.secondDigit = i, a;
    }
    return e.prototype.getFirstDigit = function() {
      return this.firstDigit;
    }, e.prototype.getSecondDigit = function() {
      return this.secondDigit;
    }, e.prototype.getValue = function() {
      return this.firstDigit * 10 + this.secondDigit;
    }, e.prototype.isFirstDigitFNC1 = function() {
      return this.firstDigit === e.FNC1;
    }, e.prototype.isSecondDigitFNC1 = function() {
      return this.secondDigit === e.FNC1;
    }, e.prototype.isAnyFNC1 = function() {
      return this.firstDigit === e.FNC1 || this.secondDigit === e.FNC1;
    }, e.FNC1 = 10, e;
  }(Nt)
), Ye = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ln = (
  /** @class */
  function() {
    function r() {
    }
    return r.parseFieldsInGeneralPurpose = function(e) {
      var t, n, i, a, o, f, u, s;
      if (!e)
        return null;
      if (e.length < 2)
        throw new C();
      var c = e.substring(0, 2);
      try {
        for (var h = Ye(r.TWO_DIGIT_DATA_LENGTH), d = h.next(); !d.done; d = h.next()) {
          var l = d.value;
          if (l[0] === c)
            return l[1] === r.VARIABLE_LENGTH ? r.processVariableAI(2, l[2], e) : r.processFixedAI(2, l[1], e);
        }
      } catch (S) {
        t = { error: S };
      } finally {
        try {
          d && !d.done && (n = h.return) && n.call(h);
        } finally {
          if (t)
            throw t.error;
        }
      }
      if (e.length < 3)
        throw new C();
      var v = e.substring(0, 3);
      try {
        for (var p = Ye(r.THREE_DIGIT_DATA_LENGTH), y = p.next(); !y.done; y = p.next()) {
          var l = y.value;
          if (l[0] === v)
            return l[1] === r.VARIABLE_LENGTH ? r.processVariableAI(3, l[2], e) : r.processFixedAI(3, l[1], e);
        }
      } catch (S) {
        i = { error: S };
      } finally {
        try {
          y && !y.done && (a = p.return) && a.call(p);
        } finally {
          if (i)
            throw i.error;
        }
      }
      try {
        for (var _ = Ye(r.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), g = _.next(); !g.done; g = _.next()) {
          var l = g.value;
          if (l[0] === v)
            return l[1] === r.VARIABLE_LENGTH ? r.processVariableAI(4, l[2], e) : r.processFixedAI(4, l[1], e);
        }
      } catch (S) {
        o = { error: S };
      } finally {
        try {
          g && !g.done && (f = _.return) && f.call(_);
        } finally {
          if (o)
            throw o.error;
        }
      }
      if (e.length < 4)
        throw new C();
      var w = e.substring(0, 4);
      try {
        for (var E = Ye(r.FOUR_DIGIT_DATA_LENGTH), I = E.next(); !I.done; I = E.next()) {
          var l = I.value;
          if (l[0] === w)
            return l[1] === r.VARIABLE_LENGTH ? r.processVariableAI(4, l[2], e) : r.processFixedAI(4, l[1], e);
        }
      } catch (S) {
        u = { error: S };
      } finally {
        try {
          I && !I.done && (s = E.return) && s.call(E);
        } finally {
          if (u)
            throw u.error;
        }
      }
      throw new C();
    }, r.processFixedAI = function(e, t, n) {
      if (n.length < e)
        throw new C();
      var i = n.substring(0, e);
      if (n.length < e + t)
        throw new C();
      var a = n.substring(e, e + t), o = n.substring(e + t), f = "(" + i + ")" + a, u = r.parseFieldsInGeneralPurpose(o);
      return u == null ? f : f + u;
    }, r.processVariableAI = function(e, t, n) {
      var i = n.substring(0, e), a;
      n.length < e + t ? a = n.length : a = e + t;
      var o = n.substring(e, a), f = n.substring(a), u = "(" + i + ")" + o, s = r.parseFieldsInGeneralPurpose(f);
      return s == null ? u : u + s;
    }, r.VARIABLE_LENGTH = [], r.TWO_DIGIT_DATA_LENGTH = [
      ["00", 18],
      ["01", 14],
      ["02", 14],
      ["10", r.VARIABLE_LENGTH, 20],
      ["11", 6],
      ["12", 6],
      ["13", 6],
      ["15", 6],
      ["17", 6],
      ["20", 2],
      ["21", r.VARIABLE_LENGTH, 20],
      ["22", r.VARIABLE_LENGTH, 29],
      ["30", r.VARIABLE_LENGTH, 8],
      ["37", r.VARIABLE_LENGTH, 8],
      // internal company codes
      ["90", r.VARIABLE_LENGTH, 30],
      ["91", r.VARIABLE_LENGTH, 30],
      ["92", r.VARIABLE_LENGTH, 30],
      ["93", r.VARIABLE_LENGTH, 30],
      ["94", r.VARIABLE_LENGTH, 30],
      ["95", r.VARIABLE_LENGTH, 30],
      ["96", r.VARIABLE_LENGTH, 30],
      ["97", r.VARIABLE_LENGTH, 3],
      ["98", r.VARIABLE_LENGTH, 30],
      ["99", r.VARIABLE_LENGTH, 30]
    ], r.THREE_DIGIT_DATA_LENGTH = [
      // Same format as above
      ["240", r.VARIABLE_LENGTH, 30],
      ["241", r.VARIABLE_LENGTH, 30],
      ["242", r.VARIABLE_LENGTH, 6],
      ["250", r.VARIABLE_LENGTH, 30],
      ["251", r.VARIABLE_LENGTH, 30],
      ["253", r.VARIABLE_LENGTH, 17],
      ["254", r.VARIABLE_LENGTH, 20],
      ["400", r.VARIABLE_LENGTH, 30],
      ["401", r.VARIABLE_LENGTH, 30],
      ["402", 17],
      ["403", r.VARIABLE_LENGTH, 30],
      ["410", 13],
      ["411", 13],
      ["412", 13],
      ["413", 13],
      ["414", 13],
      ["420", r.VARIABLE_LENGTH, 20],
      ["421", r.VARIABLE_LENGTH, 15],
      ["422", 3],
      ["423", r.VARIABLE_LENGTH, 15],
      ["424", 3],
      ["425", 3],
      ["426", 3]
    ], r.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
      // Same format as above
      ["310", 6],
      ["311", 6],
      ["312", 6],
      ["313", 6],
      ["314", 6],
      ["315", 6],
      ["316", 6],
      ["320", 6],
      ["321", 6],
      ["322", 6],
      ["323", 6],
      ["324", 6],
      ["325", 6],
      ["326", 6],
      ["327", 6],
      ["328", 6],
      ["329", 6],
      ["330", 6],
      ["331", 6],
      ["332", 6],
      ["333", 6],
      ["334", 6],
      ["335", 6],
      ["336", 6],
      ["340", 6],
      ["341", 6],
      ["342", 6],
      ["343", 6],
      ["344", 6],
      ["345", 6],
      ["346", 6],
      ["347", 6],
      ["348", 6],
      ["349", 6],
      ["350", 6],
      ["351", 6],
      ["352", 6],
      ["353", 6],
      ["354", 6],
      ["355", 6],
      ["356", 6],
      ["357", 6],
      ["360", 6],
      ["361", 6],
      ["362", 6],
      ["363", 6],
      ["364", 6],
      ["365", 6],
      ["366", 6],
      ["367", 6],
      ["368", 6],
      ["369", 6],
      ["390", r.VARIABLE_LENGTH, 15],
      ["391", r.VARIABLE_LENGTH, 18],
      ["392", r.VARIABLE_LENGTH, 15],
      ["393", r.VARIABLE_LENGTH, 18],
      ["703", r.VARIABLE_LENGTH, 30]
    ], r.FOUR_DIGIT_DATA_LENGTH = [
      // Same format as above
      ["7001", 13],
      ["7002", r.VARIABLE_LENGTH, 30],
      ["7003", 10],
      ["8001", 14],
      ["8002", r.VARIABLE_LENGTH, 20],
      ["8003", r.VARIABLE_LENGTH, 30],
      ["8004", r.VARIABLE_LENGTH, 30],
      ["8005", 6],
      ["8006", 18],
      ["8007", r.VARIABLE_LENGTH, 30],
      ["8008", r.VARIABLE_LENGTH, 12],
      ["8018", 18],
      ["8020", r.VARIABLE_LENGTH, 25],
      ["8100", 6],
      ["8101", 10],
      ["8102", 2],
      ["8110", r.VARIABLE_LENGTH, 70],
      ["8200", r.VARIABLE_LENGTH, 70]
    ], r;
  }()
), qe = (
  /** @class */
  function() {
    function r(e) {
      this.buffer = new G(), this.information = e;
    }
    return r.prototype.decodeAllCodes = function(e, t) {
      var n = t, i = null;
      do {
        var a = this.decodeGeneralPurposeField(n, i), o = Ln.parseFieldsInGeneralPurpose(a.getNewString());
        if (o != null && e.append(o), a.isRemaining() ? i = "" + a.getRemainingValue() : i = null, n === a.getNewPosition())
          break;
        n = a.getNewPosition();
      } while (!0);
      return e.toString();
    }, r.prototype.isStillNumeric = function(e) {
      if (e + 7 > this.information.getSize())
        return e + 4 <= this.information.getSize();
      for (var t = e; t < e + 3; ++t)
        if (this.information.get(t))
          return !0;
      return this.information.get(e + 3);
    }, r.prototype.decodeNumeric = function(e) {
      if (e + 7 > this.information.getSize()) {
        var t = this.extractNumericValueFromBitArray(e, 4);
        return t === 0 ? new Re(this.information.getSize(), Re.FNC1, Re.FNC1) : new Re(this.information.getSize(), t - 1, Re.FNC1);
      }
      var n = this.extractNumericValueFromBitArray(e, 7), i = (n - 8) / 11, a = (n - 8) % 11;
      return new Re(e + 7, i, a);
    }, r.prototype.extractNumericValueFromBitArray = function(e, t) {
      return r.extractNumericValueFromBitArray(this.information, e, t);
    }, r.extractNumericValueFromBitArray = function(e, t, n) {
      for (var i = 0, a = 0; a < n; ++a)
        e.get(t + a) && (i |= 1 << n - a - 1);
      return i;
    }, r.prototype.decodeGeneralPurposeField = function(e, t) {
      this.buffer.setLengthToZero(), t != null && this.buffer.append(t), this.current.setPosition(e);
      var n = this.parseBlocks();
      return n != null && n.isRemaining() ? new Te(this.current.getPosition(), this.buffer.toString(), n.getRemainingValue()) : new Te(this.current.getPosition(), this.buffer.toString());
    }, r.prototype.parseBlocks = function() {
      var e, t;
      do {
        var n = this.current.getPosition();
        this.current.isAlpha() ? (t = this.parseAlphaBlock(), e = t.isFinished()) : this.current.isIsoIec646() ? (t = this.parseIsoIec646Block(), e = t.isFinished()) : (t = this.parseNumericBlock(), e = t.isFinished());
        var i = n !== this.current.getPosition();
        if (!i && !e)
          break;
      } while (!e);
      return t.getDecodedInformation();
    }, r.prototype.parseNumericBlock = function() {
      for (; this.isStillNumeric(this.current.getPosition()); ) {
        var e = this.decodeNumeric(this.current.getPosition());
        if (this.current.setPosition(e.getNewPosition()), e.isFirstDigitFNC1()) {
          var t = void 0;
          return e.isSecondDigitFNC1() ? t = new Te(this.current.getPosition(), this.buffer.toString()) : t = new Te(this.current.getPosition(), this.buffer.toString(), e.getSecondDigit()), new Oe(!0, t);
        }
        if (this.buffer.append(e.getFirstDigit()), e.isSecondDigitFNC1()) {
          var t = new Te(this.current.getPosition(), this.buffer.toString());
          return new Oe(!0, t);
        }
        this.buffer.append(e.getSecondDigit());
      }
      return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Oe(!1);
    }, r.prototype.parseIsoIec646Block = function() {
      for (; this.isStillIsoIec646(this.current.getPosition()); ) {
        var e = this.decodeIsoIec646(this.current.getPosition());
        if (this.current.setPosition(e.getNewPosition()), e.isFNC1()) {
          var t = new Te(this.current.getPosition(), this.buffer.toString());
          return new Oe(!0, t);
        }
        this.buffer.append(e.getValue());
      }
      return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Oe(!1);
    }, r.prototype.parseAlphaBlock = function() {
      for (; this.isStillAlpha(this.current.getPosition()); ) {
        var e = this.decodeAlphanumeric(this.current.getPosition());
        if (this.current.setPosition(e.getNewPosition()), e.isFNC1()) {
          var t = new Te(this.current.getPosition(), this.buffer.toString());
          return new Oe(!0, t);
        }
        this.buffer.append(e.getValue());
      }
      return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Oe(!1);
    }, r.prototype.isStillIsoIec646 = function(e) {
      if (e + 5 > this.information.getSize())
        return !1;
      var t = this.extractNumericValueFromBitArray(e, 5);
      if (t >= 5 && t < 16)
        return !0;
      if (e + 7 > this.information.getSize())
        return !1;
      var n = this.extractNumericValueFromBitArray(e, 7);
      if (n >= 64 && n < 116)
        return !0;
      if (e + 8 > this.information.getSize())
        return !1;
      var i = this.extractNumericValueFromBitArray(e, 8);
      return i >= 232 && i < 253;
    }, r.prototype.decodeIsoIec646 = function(e) {
      var t = this.extractNumericValueFromBitArray(e, 5);
      if (t === 15)
        return new xe(e + 5, xe.FNC1);
      if (t >= 5 && t < 15)
        return new xe(e + 5, "0" + (t - 5));
      var n = this.extractNumericValueFromBitArray(e, 7);
      if (n >= 64 && n < 90)
        return new xe(e + 7, "" + (n + 1));
      if (n >= 90 && n < 116)
        return new xe(e + 7, "" + (n + 7));
      var i = this.extractNumericValueFromBitArray(e, 8), a;
      switch (i) {
        case 232:
          a = "!";
          break;
        case 233:
          a = '"';
          break;
        case 234:
          a = "%";
          break;
        case 235:
          a = "&";
          break;
        case 236:
          a = "'";
          break;
        case 237:
          a = "(";
          break;
        case 238:
          a = ")";
          break;
        case 239:
          a = "*";
          break;
        case 240:
          a = "+";
          break;
        case 241:
          a = ",";
          break;
        case 242:
          a = "-";
          break;
        case 243:
          a = ".";
          break;
        case 244:
          a = "/";
          break;
        case 245:
          a = ":";
          break;
        case 246:
          a = ";";
          break;
        case 247:
          a = "<";
          break;
        case 248:
          a = "=";
          break;
        case 249:
          a = ">";
          break;
        case 250:
          a = "?";
          break;
        case 251:
          a = "_";
          break;
        case 252:
          a = " ";
          break;
        default:
          throw new m();
      }
      return new xe(e + 8, a);
    }, r.prototype.isStillAlpha = function(e) {
      if (e + 5 > this.information.getSize())
        return !1;
      var t = this.extractNumericValueFromBitArray(e, 5);
      if (t >= 5 && t < 16)
        return !0;
      if (e + 6 > this.information.getSize())
        return !1;
      var n = this.extractNumericValueFromBitArray(e, 6);
      return n >= 16 && n < 63;
    }, r.prototype.decodeAlphanumeric = function(e) {
      var t = this.extractNumericValueFromBitArray(e, 5);
      if (t === 15)
        return new xe(e + 5, xe.FNC1);
      if (t >= 5 && t < 15)
        return new xe(e + 5, "0" + (t - 5));
      var n = this.extractNumericValueFromBitArray(e, 6);
      if (n >= 32 && n < 58)
        return new xe(e + 6, "" + (n + 33));
      var i;
      switch (n) {
        case 58:
          i = "*";
          break;
        case 59:
          i = ",";
          break;
        case 60:
          i = "-";
          break;
        case 61:
          i = ".";
          break;
        case 62:
          i = "/";
          break;
        default:
          throw new We("Decoding invalid alphanumeric value: " + n);
      }
      return new xe(e + 6, i);
    }, r.prototype.isAlphaTo646ToAlphaLatch = function(e) {
      if (e + 1 > this.information.getSize())
        return !1;
      for (var t = 0; t < 5 && t + e < this.information.getSize(); ++t)
        if (t === 2) {
          if (!this.information.get(e + 2))
            return !1;
        } else if (this.information.get(e + t))
          return !1;
      return !0;
    }, r.prototype.isAlphaOr646ToNumericLatch = function(e) {
      if (e + 3 > this.information.getSize())
        return !1;
      for (var t = e; t < e + 3; ++t)
        if (this.information.get(t))
          return !1;
      return !0;
    }, r.prototype.isNumericToAlphaNumericLatch = function(e) {
      if (e + 1 > this.information.getSize())
        return !1;
      for (var t = 0; t < 4 && t + e < this.information.getSize(); ++t)
        if (this.information.get(e + t))
          return !1;
      return !0;
    }, r;
  }()
), hr = (
  /** @class */
  function() {
    function r(e) {
      this.information = e, this.generalDecoder = new qe(e);
    }
    return r.prototype.getInformation = function() {
      return this.information;
    }, r.prototype.getGeneralDecoder = function() {
      return this.generalDecoder;
    }, r;
  }()
), kn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ge = (
  /** @class */
  function(r) {
    kn(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.encodeCompressedGtin = function(t, n) {
      t.append("(01)");
      var i = t.length();
      t.append("9"), this.encodeCompressedGtinWithoutAI(t, n, i);
    }, e.prototype.encodeCompressedGtinWithoutAI = function(t, n, i) {
      for (var a = 0; a < 4; ++a) {
        var o = this.getGeneralDecoder().extractNumericValueFromBitArray(n + 10 * a, 10);
        o / 100 === 0 && t.append("0"), o / 10 === 0 && t.append("0"), t.append(o);
      }
      e.appendCheckDigit(t, i);
    }, e.appendCheckDigit = function(t, n) {
      for (var i = 0, a = 0; a < 13; a++) {
        var o = t.charAt(a + n).charCodeAt(0) - 48;
        i += a & 1 ? o : 3 * o;
      }
      i = 10 - i % 10, i === 10 && (i = 0), t.append(i);
    }, e.GTIN_SIZE = 40, e;
  }(hr)
), Un = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Vn = (
  /** @class */
  function(r) {
    Un(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      var t = new G();
      t.append("(01)");
      var n = t.length(), i = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE, 4);
      return t.append(i), this.encodeCompressedGtinWithoutAI(t, e.HEADER_SIZE + 4, n), this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE + 44);
    }, e.HEADER_SIZE = 4, e;
  }(ge)
), Hn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Gn = (
  /** @class */
  function(r) {
    Hn(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      var t = new G();
      return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE);
    }, e.HEADER_SIZE = 5, e;
  }(hr)
), Xn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Qe = (
  /** @class */
  function(r) {
    Xn(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.encodeCompressedWeight = function(t, n, i) {
      var a = this.getGeneralDecoder().extractNumericValueFromBitArray(n, i);
      this.addWeightCode(t, a);
      for (var o = this.checkWeight(a), f = 1e5, u = 0; u < 5; ++u)
        o / f === 0 && t.append("0"), f /= 10;
      t.append(o);
    }, e;
  }(ge)
), Wn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), lr = (
  /** @class */
  function(r) {
    Wn(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      if (this.getInformation().getSize() != e.HEADER_SIZE + Qe.GTIN_SIZE + e.WEIGHT_SIZE)
        throw new C();
      var t = new G();
      return this.encodeCompressedGtin(t, e.HEADER_SIZE), this.encodeCompressedWeight(t, e.HEADER_SIZE + Qe.GTIN_SIZE, e.WEIGHT_SIZE), t.toString();
    }, e.HEADER_SIZE = 5, e.WEIGHT_SIZE = 15, e;
  }(Qe)
), zn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Yn = (
  /** @class */
  function(r) {
    zn(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.addWeightCode = function(t, n) {
      t.append("(3103)");
    }, e.prototype.checkWeight = function(t) {
      return t;
    }, e;
  }(lr)
), Zn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), jn = (
  /** @class */
  function(r) {
    Zn(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.addWeightCode = function(t, n) {
      n < 1e4 ? t.append("(3202)") : t.append("(3203)");
    }, e.prototype.checkWeight = function(t) {
      return t < 1e4 ? t : t - 1e4;
    }, e;
  }(lr)
), $n = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Kn = (
  /** @class */
  function(r) {
    $n(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      if (this.getInformation().getSize() < e.HEADER_SIZE + ge.GTIN_SIZE)
        throw new C();
      var t = new G();
      this.encodeCompressedGtin(t, e.HEADER_SIZE);
      var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + ge.GTIN_SIZE, e.LAST_DIGIT_SIZE);
      t.append("(392"), t.append(n), t.append(")");
      var i = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + ge.GTIN_SIZE + e.LAST_DIGIT_SIZE, null);
      return t.append(i.getNewString()), t.toString();
    }, e.HEADER_SIZE = 8, e.LAST_DIGIT_SIZE = 2, e;
  }(ge)
), qn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Qn = (
  /** @class */
  function(r) {
    qn(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      if (this.getInformation().getSize() < e.HEADER_SIZE + ge.GTIN_SIZE)
        throw new C();
      var t = new G();
      this.encodeCompressedGtin(t, e.HEADER_SIZE);
      var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + ge.GTIN_SIZE, e.LAST_DIGIT_SIZE);
      t.append("(393"), t.append(n), t.append(")");
      var i = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + ge.GTIN_SIZE + e.LAST_DIGIT_SIZE, e.FIRST_THREE_DIGITS_SIZE);
      i / 100 == 0 && t.append("0"), i / 10 == 0 && t.append("0"), t.append(i);
      var a = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + ge.GTIN_SIZE + e.LAST_DIGIT_SIZE + e.FIRST_THREE_DIGITS_SIZE, null);
      return t.append(a.getNewString()), t.toString();
    }, e.HEADER_SIZE = 8, e.LAST_DIGIT_SIZE = 2, e.FIRST_THREE_DIGITS_SIZE = 10, e;
  }(ge)
), Jn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ee = (
  /** @class */
  function(r) {
    Jn(e, r);
    function e(t, n, i) {
      var a = r.call(this, t) || this;
      return a.dateCode = i, a.firstAIdigits = n, a;
    }
    return e.prototype.parseInformation = function() {
      if (this.getInformation().getSize() != e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE + e.DATE_SIZE)
        throw new C();
      var t = new G();
      return this.encodeCompressedGtin(t, e.HEADER_SIZE), this.encodeCompressedWeight(t, e.HEADER_SIZE + e.GTIN_SIZE, e.WEIGHT_SIZE), this.encodeCompressedDate(t, e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE), t.toString();
    }, e.prototype.encodeCompressedDate = function(t, n) {
      var i = this.getGeneralDecoder().extractNumericValueFromBitArray(n, e.DATE_SIZE);
      if (i != 38400) {
        t.append("("), t.append(this.dateCode), t.append(")");
        var a = i % 32;
        i /= 32;
        var o = i % 12 + 1;
        i /= 12;
        var f = i;
        f / 10 == 0 && t.append("0"), t.append(f), o / 10 == 0 && t.append("0"), t.append(o), a / 10 == 0 && t.append("0"), t.append(a);
      }
    }, e.prototype.addWeightCode = function(t, n) {
      t.append("("), t.append(this.firstAIdigits), t.append(n / 1e5), t.append(")");
    }, e.prototype.checkWeight = function(t) {
      return t % 1e5;
    }, e.HEADER_SIZE = 8, e.WEIGHT_SIZE = 20, e.DATE_SIZE = 16, e;
  }(Qe)
);
function ei(r) {
  try {
    if (r.get(1))
      return new Vn(r);
    if (!r.get(2))
      return new Gn(r);
    var e = qe.extractNumericValueFromBitArray(r, 1, 4);
    switch (e) {
      case 4:
        return new Yn(r);
      case 5:
        return new jn(r);
    }
    var t = qe.extractNumericValueFromBitArray(r, 1, 5);
    switch (t) {
      case 12:
        return new Kn(r);
      case 13:
        return new Qn(r);
    }
    var n = qe.extractNumericValueFromBitArray(r, 1, 7);
    switch (n) {
      case 56:
        return new Ee(r, "310", "11");
      case 57:
        return new Ee(r, "320", "11");
      case 58:
        return new Ee(r, "310", "13");
      case 59:
        return new Ee(r, "320", "13");
      case 60:
        return new Ee(r, "310", "15");
      case 61:
        return new Ee(r, "320", "15");
      case 62:
        return new Ee(r, "310", "17");
      case 63:
        return new Ee(r, "320", "17");
    }
  } catch (i) {
    throw console.log(i), new We("unknown decoder: " + r);
  }
}
var Yt = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.leftchar = e, this.rightchar = t, this.finderpattern = n, this.maybeLast = i;
    }
    return r.prototype.mayBeLast = function() {
      return this.maybeLast;
    }, r.prototype.getLeftChar = function() {
      return this.leftchar;
    }, r.prototype.getRightChar = function() {
      return this.rightchar;
    }, r.prototype.getFinderPattern = function() {
      return this.finderpattern;
    }, r.prototype.mustBeLast = function() {
      return this.rightchar == null;
    }, r.prototype.toString = function() {
      return "[ " + this.leftchar + ", " + this.rightchar + " : " + (this.finderpattern == null ? "null" : this.finderpattern.getValue()) + " ]";
    }, r.equals = function(e, t) {
      return e instanceof r ? r.equalsOrNull(e.leftchar, t.leftchar) && r.equalsOrNull(e.rightchar, t.rightchar) && r.equalsOrNull(e.finderpattern, t.finderpattern) : !1;
    }, r.equalsOrNull = function(e, t) {
      return e === null ? t === null : r.equals(e, t);
    }, r.prototype.hashCode = function() {
      var e = this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
      return e;
    }, r;
  }()
), ti = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.pairs = e, this.rowNumber = t, this.wasReversed = n;
    }
    return r.prototype.getPairs = function() {
      return this.pairs;
    }, r.prototype.getRowNumber = function() {
      return this.rowNumber;
    }, r.prototype.isReversed = function() {
      return this.wasReversed;
    }, r.prototype.isEquivalent = function(e) {
      return this.checkEqualitity(this, e);
    }, r.prototype.toString = function() {
      return "{ " + this.pairs + " }";
    }, r.prototype.equals = function(e, t) {
      return e instanceof r ? this.checkEqualitity(e, t) && e.wasReversed === t.wasReversed : !1;
    }, r.prototype.checkEqualitity = function(e, t) {
      if (!(!e || !t)) {
        var n;
        return e.forEach(function(i, a) {
          t.forEach(function(o) {
            i.getLeftChar().getValue() === o.getLeftChar().getValue() && i.getRightChar().getValue() === o.getRightChar().getValue() && i.getFinderPatter().getValue() === o.getFinderPatter().getValue() && (n = !0);
          });
        }), n;
      }
    }, r;
  }()
), ri = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ce = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ni = (
  /** @class */
  function(r) {
    ri(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.pairs = new Array(e.MAX_PAIRS), t.rows = new Array(), t.startEnd = [2], t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      this.pairs.length = 0, this.startFromEven = !1;
      try {
        return e.constructResult(this.decodeRow2pairs(t, n));
      } catch {
      }
      return this.pairs.length = 0, this.startFromEven = !0, e.constructResult(this.decodeRow2pairs(t, n));
    }, e.prototype.reset = function() {
      this.pairs.length = 0, this.rows.length = 0;
    }, e.prototype.decodeRow2pairs = function(t, n) {
      for (var i = !1; !i; )
        try {
          this.pairs.push(this.retrieveNextPair(n, this.pairs, t));
        } catch (f) {
          if (f instanceof C) {
            if (!this.pairs.length)
              throw new C();
            i = !0;
          }
        }
      if (this.checkChecksum())
        return this.pairs;
      var a;
      if (this.rows.length ? a = !0 : a = !1, this.storeRow(t, !1), a) {
        var o = this.checkRowsBoolean(!1);
        if (o != null || (o = this.checkRowsBoolean(!0), o != null))
          return o;
      }
      throw new C();
    }, e.prototype.checkRowsBoolean = function(t) {
      if (this.rows.length > 25)
        return this.rows.length = 0, null;
      this.pairs.length = 0, t && (this.rows = this.rows.reverse());
      var n = null;
      try {
        n = this.checkRows(new Array(), 0);
      } catch (i) {
        console.log(i);
      }
      return t && (this.rows = this.rows.reverse()), n;
    }, e.prototype.checkRows = function(t, n) {
      for (var i, a, o = n; o < this.rows.length; o++) {
        var f = this.rows[o];
        this.pairs.length = 0;
        try {
          for (var u = (i = void 0, Ce(t)), s = u.next(); !s.done; s = u.next()) {
            var c = s.value;
            this.pairs.push(c.getPairs());
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            s && !s.done && (a = u.return) && a.call(u);
          } finally {
            if (i)
              throw i.error;
          }
        }
        if (this.pairs.push(f.getPairs()), !!e.isValidSequence(this.pairs)) {
          if (this.checkChecksum())
            return this.pairs;
          var h = new Array(t);
          h.push(f);
          try {
            return this.checkRows(h, o + 1);
          } catch (d) {
            console.log(d);
          }
        }
      }
      throw new C();
    }, e.isValidSequence = function(t) {
      var n, i;
      try {
        for (var a = Ce(e.FINDER_PATTERN_SEQUENCES), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          if (!(t.length > f.length)) {
            for (var u = !0, s = 0; s < t.length; s++)
              if (t[s].getFinderPattern().getValue() != f[s]) {
                u = !1;
                break;
              }
            if (u)
              return !0;
          }
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          o && !o.done && (i = a.return) && i.call(a);
        } finally {
          if (n)
            throw n.error;
        }
      }
      return !1;
    }, e.prototype.storeRow = function(t, n) {
      for (var i = 0, a = !1, o = !1; i < this.rows.length; ) {
        var f = this.rows[i];
        if (f.getRowNumber() > t) {
          o = f.isEquivalent(this.pairs);
          break;
        }
        a = f.isEquivalent(this.pairs), i++;
      }
      o || a || e.isPartialRow(this.pairs, this.rows) || (this.rows.push(i, new ti(this.pairs, t, n)), this.removePartialRows(this.pairs, this.rows));
    }, e.prototype.removePartialRows = function(t, n) {
      var i, a, o, f, u, s;
      try {
        for (var c = Ce(n), h = c.next(); !h.done; h = c.next()) {
          var d = h.value;
          if (d.getPairs().length !== t.length) {
            var l = !0;
            try {
              for (var v = (o = void 0, Ce(d.getPairs())), p = v.next(); !p.done; p = v.next()) {
                var y = p.value, _ = !1;
                try {
                  for (var g = (u = void 0, Ce(t)), w = g.next(); !w.done; w = g.next()) {
                    var E = w.value;
                    if (Yt.equals(y, E)) {
                      _ = !0;
                      break;
                    }
                  }
                } catch (I) {
                  u = { error: I };
                } finally {
                  try {
                    w && !w.done && (s = g.return) && s.call(g);
                  } finally {
                    if (u)
                      throw u.error;
                  }
                }
                _ || (l = !1);
              }
            } catch (I) {
              o = { error: I };
            } finally {
              try {
                p && !p.done && (f = v.return) && f.call(v);
              } finally {
                if (o)
                  throw o.error;
              }
            }
          }
        }
      } catch (I) {
        i = { error: I };
      } finally {
        try {
          h && !h.done && (a = c.return) && a.call(c);
        } finally {
          if (i)
            throw i.error;
        }
      }
    }, e.isPartialRow = function(t, n) {
      var i, a, o, f, u, s;
      try {
        for (var c = Ce(n), h = c.next(); !h.done; h = c.next()) {
          var d = h.value, l = !0;
          try {
            for (var v = (o = void 0, Ce(t)), p = v.next(); !p.done; p = v.next()) {
              var y = p.value, _ = !1;
              try {
                for (var g = (u = void 0, Ce(d.getPairs())), w = g.next(); !w.done; w = g.next()) {
                  var E = w.value;
                  if (y.equals(E)) {
                    _ = !0;
                    break;
                  }
                }
              } catch (I) {
                u = { error: I };
              } finally {
                try {
                  w && !w.done && (s = g.return) && s.call(g);
                } finally {
                  if (u)
                    throw u.error;
                }
              }
              if (!_) {
                l = !1;
                break;
              }
            }
          } catch (I) {
            o = { error: I };
          } finally {
            try {
              p && !p.done && (f = v.return) && f.call(v);
            } finally {
              if (o)
                throw o.error;
            }
          }
          if (l)
            return !0;
        }
      } catch (I) {
        i = { error: I };
      } finally {
        try {
          h && !h.done && (a = c.return) && a.call(c);
        } finally {
          if (i)
            throw i.error;
        }
      }
      return !1;
    }, e.prototype.getRows = function() {
      return this.rows;
    }, e.constructResult = function(t) {
      var n = Pn.buildBitArray(t), i = ei(n), a = i.parseInformation(), o = t[0].getFinderPattern().getResultPoints(), f = t[t.length - 1].getFinderPattern().getResultPoints(), u = [o[0], o[1], f[0], f[1]];
      return new he(a, null, null, u, R.RSS_EXPANDED, null);
    }, e.prototype.checkChecksum = function() {
      var t = this.pairs.get(0), n = t.getLeftChar(), i = t.getRightChar();
      if (i == null)
        return !1;
      for (var a = i.getChecksumPortion(), o = 2, f = 1; f < this.pairs.size(); ++f) {
        var u = this.pairs.get(f);
        a += u.getLeftChar().getChecksumPortion(), o++;
        var s = u.getRightChar();
        s != null && (a += s.getChecksumPortion(), o++);
      }
      a %= 211;
      var c = 211 * (o - 4) + a;
      return c == n.getValue();
    }, e.getNextSecondBar = function(t, n) {
      var i;
      return t.get(n) ? (i = t.getNextUnset(n), i = t.getNextSet(i)) : (i = t.getNextSet(n), i = t.getNextUnset(i)), i;
    }, e.prototype.retrieveNextPair = function(t, n, i) {
      var a = n.length % 2 == 0;
      this.startFromEven && (a = !a);
      var o, f = !0, u = -1;
      do
        this.findNextPair(t, n, u), o = this.parseFoundFinderPattern(t, i, a), o == null ? u = e.getNextSecondBar(t, this.startEnd[0]) : f = !1;
      while (f);
      var s = this.decodeDataCharacter(t, o, a, !0);
      if (!this.isEmptyPair(n) && n[n.length - 1].mustBeLast())
        throw new C();
      var c;
      try {
        c = this.decodeDataCharacter(t, o, a, !1);
      } catch (h) {
        c = null, console.log(h);
      }
      return new Yt(s, c, o, !0);
    }, e.prototype.isEmptyPair = function(t) {
      return t.length === 0;
    }, e.prototype.findNextPair = function(t, n, i) {
      var a = this.getDecodeFinderCounters();
      a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0;
      var o = t.getSize(), f;
      if (i >= 0)
        f = i;
      else if (this.isEmptyPair(n))
        f = 0;
      else {
        var u = n[n.length - 1];
        f = u.getFinderPattern().getStartEnd()[1];
      }
      var s = n.length % 2 != 0;
      this.startFromEven && (s = !s);
      for (var c = !1; f < o && (c = !t.get(f), !!c); )
        f++;
      for (var h = 0, d = f, l = f; l < o; l++)
        if (t.get(l) != c)
          a[h]++;
        else {
          if (h == 3) {
            if (s && e.reverseCounters(a), e.isFinderPattern(a)) {
              this.startEnd[0] = d, this.startEnd[1] = l;
              return;
            }
            s && e.reverseCounters(a), d += a[0] + a[1], a[0] = a[2], a[1] = a[3], a[2] = 0, a[3] = 0, h--;
          } else
            h++;
          a[h] = 1, c = !c;
        }
      throw new C();
    }, e.reverseCounters = function(t) {
      for (var n = t.length, i = 0; i < n / 2; ++i) {
        var a = t[i];
        t[i] = t[n - i - 1], t[n - i - 1] = a;
      }
    }, e.prototype.parseFoundFinderPattern = function(t, n, i) {
      var a, o, f;
      if (i) {
        for (var u = this.startEnd[0] - 1; u >= 0 && !t.get(u); )
          u--;
        u++, a = this.startEnd[0] - u, o = u, f = this.startEnd[1];
      } else
        o = this.startEnd[0], f = t.getNextUnset(this.startEnd[1] + 1), a = f - this.startEnd[1];
      var s = this.getDecodeFinderCounters();
      W.arraycopy(s, 0, s, 1, s.length - 1), s[0] = a;
      var c;
      try {
        c = this.parseFinderValue(s, e.FINDER_PATTERNS);
      } catch {
        return null;
      }
      return new cr(c, [o, f], o, f, n);
    }, e.prototype.decodeDataCharacter = function(t, n, i, a) {
      for (var o = this.getDataCharacterCounters(), f = 0; f < o.length; f++)
        o[f] = 0;
      if (a)
        e.recordPatternInReverse(t, n.getStartEnd()[0], o);
      else {
        e.recordPattern(t, n.getStartEnd()[1], o);
        for (var u = 0, s = o.length - 1; u < s; u++, s--) {
          var c = o[u];
          o[u] = o[s], o[s] = c;
        }
      }
      var h = 17, d = L.sum(new Int32Array(o)) / h, l = (n.getStartEnd()[1] - n.getStartEnd()[0]) / 15;
      if (Math.abs(d - l) / l > 0.3)
        throw new C();
      for (var v = this.getOddCounts(), p = this.getEvenCounts(), y = this.getOddRoundingErrors(), _ = this.getEvenRoundingErrors(), u = 0; u < o.length; u++) {
        var g = 1 * o[u] / d, w = g + 0.5;
        if (w < 1) {
          if (g < 0.3)
            throw new C();
          w = 1;
        } else if (w > 8) {
          if (g > 8.7)
            throw new C();
          w = 8;
        }
        var E = u / 2;
        u & 1 ? (p[E] = w, _[E] = g - w) : (v[E] = w, y[E] = g - w);
      }
      this.adjustOddEvenCounts(h);
      for (var I = 4 * n.getValue() + (i ? 0 : 2) + (a ? 0 : 1) - 1, S = 0, O = 0, u = v.length - 1; u >= 0; u--) {
        if (e.isNotA1left(n, i, a)) {
          var b = e.WEIGHTS[I][2 * u];
          O += v[u] * b;
        }
        S += v[u];
      }
      for (var P = 0, u = p.length - 1; u >= 0; u--)
        if (e.isNotA1left(n, i, a)) {
          var b = e.WEIGHTS[I][2 * u + 1];
          P += p[u] * b;
        }
      var N = O + P;
      if (S & 1 || S > 13 || S < 4)
        throw new C();
      var $ = (13 - S) / 2, B = e.SYMBOL_WIDEST[$], Z = 9 - B, le = Pe.getRSSvalue(v, B, !0), we = Pe.getRSSvalue(p, Z, !1), at = e.EVEN_TOTAL_SUBSET[$], ot = e.GSUM[$], ft = le * at + we + ot;
      return new et(ft, N);
    }, e.isNotA1left = function(t, n, i) {
      return !(t.getValue() == 0 && n && i);
    }, e.prototype.adjustOddEvenCounts = function(t) {
      var n = L.sum(new Int32Array(this.getOddCounts())), i = L.sum(new Int32Array(this.getEvenCounts())), a = !1, o = !1;
      n > 13 ? o = !0 : n < 4 && (a = !0);
      var f = !1, u = !1;
      i > 13 ? u = !0 : i < 4 && (f = !0);
      var s = n + i - t, c = (n & 1) == 1, h = (i & 1) == 0;
      if (s == 1)
        if (c) {
          if (h)
            throw new C();
          o = !0;
        } else {
          if (!h)
            throw new C();
          u = !0;
        }
      else if (s == -1)
        if (c) {
          if (h)
            throw new C();
          a = !0;
        } else {
          if (!h)
            throw new C();
          f = !0;
        }
      else if (s == 0) {
        if (c) {
          if (!h)
            throw new C();
          n < i ? (a = !0, u = !0) : (o = !0, f = !0);
        } else if (h)
          throw new C();
      } else
        throw new C();
      if (a) {
        if (o)
          throw new C();
        e.increment(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if (o && e.decrement(this.getOddCounts(), this.getOddRoundingErrors()), f) {
        if (u)
          throw new C();
        e.increment(this.getEvenCounts(), this.getOddRoundingErrors());
      }
      u && e.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
    }, e.SYMBOL_WIDEST = [7, 5, 4, 3, 1], e.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], e.GSUM = [0, 348, 1388, 2948, 3988], e.FINDER_PATTERNS = [
      Int32Array.from([1, 8, 4, 1]),
      Int32Array.from([3, 6, 4, 1]),
      Int32Array.from([3, 4, 6, 1]),
      Int32Array.from([3, 2, 8, 1]),
      Int32Array.from([2, 6, 5, 1]),
      Int32Array.from([2, 2, 9, 1])
      // F
    ], e.WEIGHTS = [
      [1, 3, 9, 27, 81, 32, 96, 77],
      [20, 60, 180, 118, 143, 7, 21, 63],
      [189, 145, 13, 39, 117, 140, 209, 205],
      [193, 157, 49, 147, 19, 57, 171, 91],
      [62, 186, 136, 197, 169, 85, 44, 132],
      [185, 133, 188, 142, 4, 12, 36, 108],
      [113, 128, 173, 97, 80, 29, 87, 50],
      [150, 28, 84, 41, 123, 158, 52, 156],
      [46, 138, 203, 187, 139, 206, 196, 166],
      [76, 17, 51, 153, 37, 111, 122, 155],
      [43, 129, 176, 106, 107, 110, 119, 146],
      [16, 48, 144, 10, 30, 90, 59, 177],
      [109, 116, 137, 200, 178, 112, 125, 164],
      [70, 210, 208, 202, 184, 130, 179, 115],
      [134, 191, 151, 31, 93, 68, 204, 190],
      [148, 22, 66, 198, 172, 94, 71, 2],
      [6, 18, 54, 162, 64, 192, 154, 40],
      [120, 149, 25, 75, 14, 42, 126, 167],
      [79, 26, 78, 23, 69, 207, 199, 175],
      [103, 98, 83, 38, 114, 131, 182, 124],
      [161, 61, 183, 127, 170, 88, 53, 159],
      [55, 165, 73, 8, 24, 72, 5, 15],
      [45, 135, 194, 160, 58, 174, 100, 89]
    ], e.FINDER_PAT_A = 0, e.FINDER_PAT_B = 1, e.FINDER_PAT_C = 2, e.FINDER_PAT_D = 3, e.FINDER_PAT_E = 4, e.FINDER_PAT_F = 5, e.FINDER_PATTERN_SEQUENCES = [
      [e.FINDER_PAT_A, e.FINDER_PAT_A],
      [e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B],
      [e.FINDER_PAT_A, e.FINDER_PAT_C, e.FINDER_PAT_B, e.FINDER_PAT_D],
      [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_C],
      [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_D, e.FINDER_PAT_F],
      [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F],
      [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_D],
      [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_E],
      [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F],
      [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_D, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F]
    ], e.MAX_PAIRS = 11, e;
  }(be)
), ii = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ai = (
  /** @class */
  function(r) {
    ii(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n) || this;
      return a.count = 0, a.finderPattern = i, a;
    }
    return e.prototype.getFinderPattern = function() {
      return this.finderPattern;
    }, e.prototype.getCount = function() {
      return this.count;
    }, e.prototype.incrementCount = function() {
      this.count++;
    }, e;
  }(et)
), oi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ct = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Zt = (
  /** @class */
  function(r) {
    oi(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.possibleLeftPairs = [], t.possibleRightPairs = [], t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a, o, f, u, s = this.decodePair(n, !1, t, i);
      e.addOrTally(this.possibleLeftPairs, s), n.reverse();
      var c = this.decodePair(n, !0, t, i);
      e.addOrTally(this.possibleRightPairs, c), n.reverse();
      try {
        for (var h = ct(this.possibleLeftPairs), d = h.next(); !d.done; d = h.next()) {
          var l = d.value;
          if (l.getCount() > 1)
            try {
              for (var v = (f = void 0, ct(this.possibleRightPairs)), p = v.next(); !p.done; p = v.next()) {
                var y = p.value;
                if (y.getCount() > 1 && e.checkChecksum(l, y))
                  return e.constructResult(l, y);
              }
            } catch (_) {
              f = { error: _ };
            } finally {
              try {
                p && !p.done && (u = v.return) && u.call(v);
              } finally {
                if (f)
                  throw f.error;
              }
            }
        }
      } catch (_) {
        a = { error: _ };
      } finally {
        try {
          d && !d.done && (o = h.return) && o.call(h);
        } finally {
          if (a)
            throw a.error;
        }
      }
      throw new C();
    }, e.addOrTally = function(t, n) {
      var i, a;
      if (n != null) {
        var o = !1;
        try {
          for (var f = ct(t), u = f.next(); !u.done; u = f.next()) {
            var s = u.value;
            if (s.getValue() === n.getValue()) {
              s.incrementCount(), o = !0;
              break;
            }
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            u && !u.done && (a = f.return) && a.call(f);
          } finally {
            if (i)
              throw i.error;
          }
        }
        o || t.push(n);
      }
    }, e.prototype.reset = function() {
      this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0;
    }, e.constructResult = function(t, n) {
      for (var i = 4537077 * t.getValue() + n.getValue(), a = new String(i).toString(), o = new G(), f = 13 - a.length; f > 0; f--)
        o.append("0");
      o.append(a);
      for (var u = 0, f = 0; f < 13; f++) {
        var s = o.charAt(f).charCodeAt(0) - 48;
        u += f & 1 ? s : 3 * s;
      }
      u = 10 - u % 10, u === 10 && (u = 0), o.append(u.toString());
      var c = t.getFinderPattern().getResultPoints(), h = n.getFinderPattern().getResultPoints();
      return new he(o.toString(), null, 0, [c[0], c[1], h[0], h[1]], R.RSS_14, (/* @__PURE__ */ new Date()).getTime());
    }, e.checkChecksum = function(t, n) {
      var i = (t.getChecksumPortion() + 16 * n.getChecksumPortion()) % 79, a = 9 * t.getFinderPattern().getValue() + n.getFinderPattern().getValue();
      return a > 72 && a--, a > 8 && a--, i === a;
    }, e.prototype.decodePair = function(t, n, i, a) {
      try {
        var o = this.findFinderPattern(t, n), f = this.parseFoundFinderPattern(t, i, n, o), u = a == null ? null : a.get(j.NEED_RESULT_POINT_CALLBACK);
        if (u != null) {
          var s = (o[0] + o[1]) / 2;
          n && (s = t.getSize() - 1 - s), u.foundPossibleResultPoint(new T(s, i));
        }
        var c = this.decodeDataCharacter(t, f, !0), h = this.decodeDataCharacter(t, f, !1);
        return new ai(1597 * c.getValue() + h.getValue(), c.getChecksumPortion() + 4 * h.getChecksumPortion(), f);
      } catch {
        return null;
      }
    }, e.prototype.decodeDataCharacter = function(t, n, i) {
      for (var a = this.getDataCharacterCounters(), o = 0; o < a.length; o++)
        a[o] = 0;
      if (i)
        ie.recordPatternInReverse(t, n.getStartEnd()[0], a);
      else {
        ie.recordPattern(t, n.getStartEnd()[1] + 1, a);
        for (var f = 0, u = a.length - 1; f < u; f++, u--) {
          var s = a[f];
          a[f] = a[u], a[u] = s;
        }
      }
      for (var c = i ? 16 : 15, h = L.sum(new Int32Array(a)) / c, d = this.getOddCounts(), l = this.getEvenCounts(), v = this.getOddRoundingErrors(), p = this.getEvenRoundingErrors(), f = 0; f < a.length; f++) {
        var y = a[f] / h, _ = Math.floor(y + 0.5);
        _ < 1 ? _ = 1 : _ > 8 && (_ = 8);
        var g = Math.floor(f / 2);
        f & 1 ? (l[g] = _, p[g] = y - _) : (d[g] = _, v[g] = y - _);
      }
      this.adjustOddEvenCounts(i, c);
      for (var w = 0, E = 0, f = d.length - 1; f >= 0; f--)
        E *= 9, E += d[f], w += d[f];
      for (var I = 0, S = 0, f = l.length - 1; f >= 0; f--)
        I *= 9, I += l[f], S += l[f];
      var O = E + 3 * I;
      if (i) {
        if (w & 1 || w > 12 || w < 4)
          throw new C();
        var b = (12 - w) / 2, P = e.OUTSIDE_ODD_WIDEST[b], N = 9 - P, $ = Pe.getRSSvalue(d, P, !1), B = Pe.getRSSvalue(l, N, !0), Z = e.OUTSIDE_EVEN_TOTAL_SUBSET[b], le = e.OUTSIDE_GSUM[b];
        return new et($ * Z + B + le, O);
      } else {
        if (S & 1 || S > 10 || S < 4)
          throw new C();
        var b = (10 - S) / 2, P = e.INSIDE_ODD_WIDEST[b], N = 9 - P, $ = Pe.getRSSvalue(d, P, !0), B = Pe.getRSSvalue(l, N, !1), we = e.INSIDE_ODD_TOTAL_SUBSET[b], le = e.INSIDE_GSUM[b];
        return new et(B * we + $ + le, O);
      }
    }, e.prototype.findFinderPattern = function(t, n) {
      var i = this.getDecodeFinderCounters();
      i[0] = 0, i[1] = 0, i[2] = 0, i[3] = 0;
      for (var a = t.getSize(), o = !1, f = 0; f < a && (o = !t.get(f), n !== o); )
        f++;
      for (var u = 0, s = f, c = f; c < a; c++)
        if (t.get(c) !== o)
          i[u]++;
        else {
          if (u === 3) {
            if (be.isFinderPattern(i))
              return [s, c];
            s += i[0] + i[1], i[0] = i[2], i[1] = i[3], i[2] = 0, i[3] = 0, u--;
          } else
            u++;
          i[u] = 1, o = !o;
        }
      throw new C();
    }, e.prototype.parseFoundFinderPattern = function(t, n, i, a) {
      for (var o = t.get(a[0]), f = a[0] - 1; f >= 0 && o !== t.get(f); )
        f--;
      f++;
      var u = a[0] - f, s = this.getDecodeFinderCounters(), c = new Int32Array(s.length);
      W.arraycopy(s, 0, c, 1, s.length - 1), c[0] = u;
      var h = this.parseFinderValue(c, e.FINDER_PATTERNS), d = f, l = a[1];
      return i && (d = t.getSize() - 1 - d, l = t.getSize() - 1 - l), new cr(h, [f, a[1]], d, l, n);
    }, e.prototype.adjustOddEvenCounts = function(t, n) {
      var i = L.sum(new Int32Array(this.getOddCounts())), a = L.sum(new Int32Array(this.getEvenCounts())), o = !1, f = !1, u = !1, s = !1;
      t ? (i > 12 ? f = !0 : i < 4 && (o = !0), a > 12 ? s = !0 : a < 4 && (u = !0)) : (i > 11 ? f = !0 : i < 5 && (o = !0), a > 10 ? s = !0 : a < 4 && (u = !0));
      var c = i + a - n, h = (i & 1) === (t ? 1 : 0), d = (a & 1) === 1;
      if (c === 1)
        if (h) {
          if (d)
            throw new C();
          f = !0;
        } else {
          if (!d)
            throw new C();
          s = !0;
        }
      else if (c === -1)
        if (h) {
          if (d)
            throw new C();
          o = !0;
        } else {
          if (!d)
            throw new C();
          u = !0;
        }
      else if (c === 0) {
        if (h) {
          if (!d)
            throw new C();
          i < a ? (o = !0, s = !0) : (f = !0, u = !0);
        } else if (d)
          throw new C();
      } else
        throw new C();
      if (o) {
        if (f)
          throw new C();
        be.increment(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if (f && be.decrement(this.getOddCounts(), this.getOddRoundingErrors()), u) {
        if (s)
          throw new C();
        be.increment(this.getEvenCounts(), this.getOddRoundingErrors());
      }
      s && be.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
    }, e.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], e.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], e.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], e.INSIDE_GSUM = [0, 336, 1036, 1516], e.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], e.INSIDE_ODD_WIDEST = [2, 4, 6, 8], e.FINDER_PATTERNS = [
      Int32Array.from([3, 8, 2, 1]),
      Int32Array.from([3, 5, 5, 1]),
      Int32Array.from([3, 3, 7, 1]),
      Int32Array.from([3, 1, 9, 1]),
      Int32Array.from([2, 7, 4, 1]),
      Int32Array.from([2, 5, 6, 1]),
      Int32Array.from([2, 3, 8, 1]),
      Int32Array.from([1, 5, 7, 1]),
      Int32Array.from([1, 3, 9, 1])
    ], e;
  }(be)
), fi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), He = (
  /** @class */
  function(r) {
    fi(e, r);
    function e(t) {
      var n = r.call(this) || this;
      n.readers = [];
      var i = t ? t.get(j.POSSIBLE_FORMATS) : null, a = t && t.get(j.ASSUME_CODE_39_CHECK_DIGIT) !== void 0;
      return i && ((i.includes(R.EAN_13) || i.includes(R.UPC_A) || i.includes(R.EAN_8) || i.includes(R.UPC_E)) && n.readers.push(new st(t)), i.includes(R.CODE_39) && n.readers.push(new kt(a)), i.includes(R.CODE_128) && n.readers.push(new Lt()), i.includes(R.ITF) && n.readers.push(new Ut()), i.includes(R.RSS_14) && n.readers.push(new Zt()), i.includes(R.RSS_EXPANDED) && (console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk."), n.readers.push(new ni()))), n.readers.length === 0 && (n.readers.push(new st(t)), n.readers.push(new kt()), n.readers.push(new st(t)), n.readers.push(new Lt()), n.readers.push(new Ut()), n.readers.push(new Zt())), n;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      for (var a = 0; a < this.readers.length; a++)
        try {
          return this.readers[a].decodeRow(t, n, i);
        } catch {
        }
      throw new C();
    }, e.prototype.reset = function() {
      this.readers.forEach(function(t) {
        return t.reset();
      });
    }, e;
  }(ie)
), ui = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  ui(e, r);
  function e(t, n) {
    return t === void 0 && (t = 500), r.call(this, new He(n), t, n) || this;
  }
  return e;
})(Fe);
var jt = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, U = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.ecCodewords = e, this.ecBlocks = [t], n && this.ecBlocks.push(n);
    }
    return r.prototype.getECCodewords = function() {
      return this.ecCodewords;
    }, r.prototype.getECBlocks = function() {
      return this.ecBlocks;
    }, r;
  }()
), k = (
  /** @class */
  function() {
    function r(e, t) {
      this.count = e, this.dataCodewords = t;
    }
    return r.prototype.getCount = function() {
      return this.count;
    }, r.prototype.getDataCodewords = function() {
      return this.dataCodewords;
    }, r;
  }()
), si = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o) {
      var f, u;
      this.versionNumber = e, this.symbolSizeRows = t, this.symbolSizeColumns = n, this.dataRegionSizeRows = i, this.dataRegionSizeColumns = a, this.ecBlocks = o;
      var s = 0, c = o.getECCodewords(), h = o.getECBlocks();
      try {
        for (var d = jt(h), l = d.next(); !l.done; l = d.next()) {
          var v = l.value;
          s += v.getCount() * (v.getDataCodewords() + c);
        }
      } catch (p) {
        f = { error: p };
      } finally {
        try {
          l && !l.done && (u = d.return) && u.call(d);
        } finally {
          if (f)
            throw f.error;
        }
      }
      this.totalCodewords = s;
    }
    return r.prototype.getVersionNumber = function() {
      return this.versionNumber;
    }, r.prototype.getSymbolSizeRows = function() {
      return this.symbolSizeRows;
    }, r.prototype.getSymbolSizeColumns = function() {
      return this.symbolSizeColumns;
    }, r.prototype.getDataRegionSizeRows = function() {
      return this.dataRegionSizeRows;
    }, r.prototype.getDataRegionSizeColumns = function() {
      return this.dataRegionSizeColumns;
    }, r.prototype.getTotalCodewords = function() {
      return this.totalCodewords;
    }, r.prototype.getECBlocks = function() {
      return this.ecBlocks;
    }, r.getVersionForDimensions = function(e, t) {
      var n, i;
      if (e & 1 || t & 1)
        throw new m();
      try {
        for (var a = jt(r.VERSIONS), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          if (f.symbolSizeRows === e && f.symbolSizeColumns === t)
            return f;
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          o && !o.done && (i = a.return) && i.call(a);
        } finally {
          if (n)
            throw n.error;
        }
      }
      throw new m();
    }, r.prototype.toString = function() {
      return "" + this.versionNumber;
    }, r.buildVersions = function() {
      return [
        new r(1, 10, 10, 8, 8, new U(5, new k(1, 3))),
        new r(2, 12, 12, 10, 10, new U(7, new k(1, 5))),
        new r(3, 14, 14, 12, 12, new U(10, new k(1, 8))),
        new r(4, 16, 16, 14, 14, new U(12, new k(1, 12))),
        new r(5, 18, 18, 16, 16, new U(14, new k(1, 18))),
        new r(6, 20, 20, 18, 18, new U(18, new k(1, 22))),
        new r(7, 22, 22, 20, 20, new U(20, new k(1, 30))),
        new r(8, 24, 24, 22, 22, new U(24, new k(1, 36))),
        new r(9, 26, 26, 24, 24, new U(28, new k(1, 44))),
        new r(10, 32, 32, 14, 14, new U(36, new k(1, 62))),
        new r(11, 36, 36, 16, 16, new U(42, new k(1, 86))),
        new r(12, 40, 40, 18, 18, new U(48, new k(1, 114))),
        new r(13, 44, 44, 20, 20, new U(56, new k(1, 144))),
        new r(14, 48, 48, 22, 22, new U(68, new k(1, 174))),
        new r(15, 52, 52, 24, 24, new U(42, new k(2, 102))),
        new r(16, 64, 64, 14, 14, new U(56, new k(2, 140))),
        new r(17, 72, 72, 16, 16, new U(36, new k(4, 92))),
        new r(18, 80, 80, 18, 18, new U(48, new k(4, 114))),
        new r(19, 88, 88, 20, 20, new U(56, new k(4, 144))),
        new r(20, 96, 96, 22, 22, new U(68, new k(4, 174))),
        new r(21, 104, 104, 24, 24, new U(56, new k(6, 136))),
        new r(22, 120, 120, 18, 18, new U(68, new k(6, 175))),
        new r(23, 132, 132, 20, 20, new U(62, new k(8, 163))),
        new r(24, 144, 144, 22, 22, new U(62, new k(8, 156), new k(2, 155))),
        new r(25, 8, 18, 6, 16, new U(7, new k(1, 5))),
        new r(26, 8, 32, 6, 14, new U(11, new k(1, 10))),
        new r(27, 12, 26, 10, 24, new U(14, new k(1, 16))),
        new r(28, 12, 36, 10, 16, new U(18, new k(1, 22))),
        new r(29, 16, 36, 14, 16, new U(24, new k(1, 32))),
        new r(30, 16, 48, 14, 22, new U(28, new k(1, 49)))
      ];
    }, r.VERSIONS = r.buildVersions(), r;
  }()
), ci = (
  /** @class */
  function() {
    function r(e) {
      var t = e.getHeight();
      if (t < 8 || t > 144 || t & 1)
        throw new m();
      this.version = r.readVersion(e), this.mappingBitMatrix = this.extractDataRegion(e), this.readMappingMatrix = new Ae(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
    }
    return r.prototype.getVersion = function() {
      return this.version;
    }, r.readVersion = function(e) {
      var t = e.getHeight(), n = e.getWidth();
      return si.getVersionForDimensions(t, n);
    }, r.prototype.readCodewords = function() {
      var e = new Int8Array(this.version.getTotalCodewords()), t = 0, n = 4, i = 0, a = this.mappingBitMatrix.getHeight(), o = this.mappingBitMatrix.getWidth(), f = !1, u = !1, s = !1, c = !1;
      do
        if (n === a && i === 0 && !f)
          e[t++] = this.readCorner1(a, o) & 255, n -= 2, i += 2, f = !0;
        else if (n === a - 2 && i === 0 && o & 3 && !u)
          e[t++] = this.readCorner2(a, o) & 255, n -= 2, i += 2, u = !0;
        else if (n === a + 4 && i === 2 && !(o & 7) && !s)
          e[t++] = this.readCorner3(a, o) & 255, n -= 2, i += 2, s = !0;
        else if (n === a - 2 && i === 0 && (o & 7) === 4 && !c)
          e[t++] = this.readCorner4(a, o) & 255, n -= 2, i += 2, c = !0;
        else {
          do
            n < a && i >= 0 && !this.readMappingMatrix.get(i, n) && (e[t++] = this.readUtah(n, i, a, o) & 255), n -= 2, i += 2;
          while (n >= 0 && i < o);
          n += 1, i += 3;
          do
            n >= 0 && i < o && !this.readMappingMatrix.get(i, n) && (e[t++] = this.readUtah(n, i, a, o) & 255), n += 2, i -= 2;
          while (n < a && i >= 0);
          n += 3, i += 1;
        }
      while (n < a || i < o);
      if (t !== this.version.getTotalCodewords())
        throw new m();
      return e;
    }, r.prototype.readModule = function(e, t, n, i) {
      return e < 0 && (e += n, t += 4 - (n + 4 & 7)), t < 0 && (t += i, e += 4 - (i + 4 & 7)), this.readMappingMatrix.set(t, e), this.mappingBitMatrix.get(t, e);
    }, r.prototype.readUtah = function(e, t, n, i) {
      var a = 0;
      return this.readModule(e - 2, t - 2, n, i) && (a |= 1), a <<= 1, this.readModule(e - 2, t - 1, n, i) && (a |= 1), a <<= 1, this.readModule(e - 1, t - 2, n, i) && (a |= 1), a <<= 1, this.readModule(e - 1, t - 1, n, i) && (a |= 1), a <<= 1, this.readModule(e - 1, t, n, i) && (a |= 1), a <<= 1, this.readModule(e, t - 2, n, i) && (a |= 1), a <<= 1, this.readModule(e, t - 1, n, i) && (a |= 1), a <<= 1, this.readModule(e, t, n, i) && (a |= 1), a;
    }, r.prototype.readCorner1 = function(e, t) {
      var n = 0;
      return this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 1, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(2, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(3, t - 1, e, t) && (n |= 1), n;
    }, r.prototype.readCorner2 = function(e, t) {
      var n = 0;
      return this.readModule(e - 3, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 2, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 4, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 3, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n;
    }, r.prototype.readCorner3 = function(e, t) {
      var n = 0;
      return this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 3, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 3, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n;
    }, r.prototype.readCorner4 = function(e, t) {
      var n = 0;
      return this.readModule(e - 3, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 2, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(2, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(3, t - 1, e, t) && (n |= 1), n;
    }, r.prototype.extractDataRegion = function(e) {
      var t = this.version.getSymbolSizeRows(), n = this.version.getSymbolSizeColumns();
      if (e.getHeight() !== t)
        throw new D("Dimension of bitMatrix must match the version size");
      for (var i = this.version.getDataRegionSizeRows(), a = this.version.getDataRegionSizeColumns(), o = t / i | 0, f = n / a | 0, u = o * i, s = f * a, c = new Ae(s, u), h = 0; h < o; ++h)
        for (var d = h * i, l = 0; l < f; ++l)
          for (var v = l * a, p = 0; p < i; ++p)
            for (var y = h * (i + 2) + 1 + p, _ = d + p, g = 0; g < a; ++g) {
              var w = l * (a + 2) + 1 + g;
              if (e.get(w, y)) {
                var E = v + g;
                c.set(E, _);
              }
            }
      return c;
    }, r;
  }()
), $t = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, hi = (
  /** @class */
  function() {
    function r(e, t) {
      this.numDataCodewords = e, this.codewords = t;
    }
    return r.getDataBlocks = function(e, t) {
      var n, i, a, o, f = t.getECBlocks(), u = 0, s = f.getECBlocks();
      try {
        for (var c = $t(s), h = c.next(); !h.done; h = c.next()) {
          var d = h.value;
          u += d.getCount();
        }
      } catch (le) {
        n = { error: le };
      } finally {
        try {
          h && !h.done && (i = c.return) && i.call(c);
        } finally {
          if (n)
            throw n.error;
        }
      }
      var l = new Array(u), v = 0;
      try {
        for (var p = $t(s), y = p.next(); !y.done; y = p.next())
          for (var d = y.value, _ = 0; _ < d.getCount(); _++) {
            var g = d.getDataCodewords(), w = f.getECCodewords() + g;
            l[v++] = new r(g, new Uint8Array(w));
          }
      } catch (le) {
        a = { error: le };
      } finally {
        try {
          y && !y.done && (o = p.return) && o.call(p);
        } finally {
          if (a)
            throw a.error;
        }
      }
      for (var E = l[0].codewords.length, I = E - f.getECCodewords(), S = I - 1, O = 0, _ = 0; _ < S; _++)
        for (var b = 0; b < v; b++)
          l[b].codewords[_] = e[O++];
      for (var P = t.getVersionNumber() === 24, N = P ? 8 : v, b = 0; b < N; b++)
        l[b].codewords[I - 1] = e[O++];
      for (var $ = l[0].codewords.length, _ = I; _ < $; _++)
        for (var b = 0; b < v; b++) {
          var B = P ? (b + 8) % v : b, Z = P && B > 7 ? _ - 1 : _;
          l[B].codewords[Z] = e[O++];
        }
      if (O !== e.length)
        throw new D();
      return l;
    }, r.prototype.getNumDataCodewords = function() {
      return this.numDataCodewords;
    }, r.prototype.getCodewords = function() {
      return this.codewords;
    }, r;
  }()
), dr = (
  /** @class */
  function() {
    function r(e) {
      this.bytes = e, this.byteOffset = 0, this.bitOffset = 0;
    }
    return r.prototype.getBitOffset = function() {
      return this.bitOffset;
    }, r.prototype.getByteOffset = function() {
      return this.byteOffset;
    }, r.prototype.readBits = function(e) {
      if (e < 1 || e > 32 || e > this.available())
        throw new D("" + e);
      var t = 0, n = this.bitOffset, i = this.byteOffset, a = this.bytes;
      if (n > 0) {
        var o = 8 - n, f = e < o ? e : o, u = o - f, s = 255 >> 8 - f << u;
        t = (a[i] & s) >> u, e -= f, n += f, n === 8 && (n = 0, i++);
      }
      if (e > 0) {
        for (; e >= 8; )
          t = t << 8 | a[i] & 255, i++, e -= 8;
        if (e > 0) {
          var u = 8 - e, s = 255 >> u << u;
          t = t << e | (a[i] & s) >> u, n += e;
        }
      }
      return this.bitOffset = n, this.byteOffset = i, t;
    }, r.prototype.available = function() {
      return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    }, r;
  }()
), K;
(function(r) {
  r[r.PAD_ENCODE = 0] = "PAD_ENCODE", r[r.ASCII_ENCODE = 1] = "ASCII_ENCODE", r[r.C40_ENCODE = 2] = "C40_ENCODE", r[r.TEXT_ENCODE = 3] = "TEXT_ENCODE", r[r.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", r[r.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", r[r.BASE256_ENCODE = 6] = "BASE256_ENCODE";
})(K || (K = {}));
var li = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e) {
      var t = new dr(e), n = new G(), i = new G(), a = new Array(), o = K.ASCII_ENCODE;
      do
        if (o === K.ASCII_ENCODE)
          o = this.decodeAsciiSegment(t, n, i);
        else {
          switch (o) {
            case K.C40_ENCODE:
              this.decodeC40Segment(t, n);
              break;
            case K.TEXT_ENCODE:
              this.decodeTextSegment(t, n);
              break;
            case K.ANSIX12_ENCODE:
              this.decodeAnsiX12Segment(t, n);
              break;
            case K.EDIFACT_ENCODE:
              this.decodeEdifactSegment(t, n);
              break;
            case K.BASE256_ENCODE:
              this.decodeBase256Segment(t, n, a);
              break;
            default:
              throw new m();
          }
          o = K.ASCII_ENCODE;
        }
      while (o !== K.PAD_ENCODE && t.available() > 0);
      return i.length() > 0 && n.append(i.toString()), new nt(e, n.toString(), a.length === 0 ? null : a, null);
    }, r.decodeAsciiSegment = function(e, t, n) {
      var i = !1;
      do {
        var a = e.readBits(8);
        if (a === 0)
          throw new m();
        if (a <= 128)
          return i && (a += 128), t.append(String.fromCharCode(a - 1)), K.ASCII_ENCODE;
        if (a === 129)
          return K.PAD_ENCODE;
        if (a <= 229) {
          var o = a - 130;
          o < 10 && t.append("0"), t.append("" + o);
        } else
          switch (a) {
            case 230:
              return K.C40_ENCODE;
            case 231:
              return K.BASE256_ENCODE;
            case 232:
              t.append("");
              break;
            case 233:
            case 234:
              break;
            case 235:
              i = !0;
              break;
            case 236:
              t.append("[)>05"), n.insert(0, "");
              break;
            case 237:
              t.append("[)>06"), n.insert(0, "");
              break;
            case 238:
              return K.ANSIX12_ENCODE;
            case 239:
              return K.TEXT_ENCODE;
            case 240:
              return K.EDIFACT_ENCODE;
            case 241:
              break;
            default:
              if (a !== 254 || e.available() !== 0)
                throw new m();
              break;
          }
      } while (e.available() > 0);
      return K.ASCII_ENCODE;
    }, r.decodeC40Segment = function(e, t) {
      var n = !1, i = [], a = 0;
      do {
        if (e.available() === 8)
          return;
        var o = e.readBits(8);
        if (o === 254)
          return;
        this.parseTwoBytes(o, e.readBits(8), i);
        for (var f = 0; f < 3; f++) {
          var u = i[f];
          switch (a) {
            case 0:
              if (u < 3)
                a = u + 1;
              else if (u < this.C40_BASIC_SET_CHARS.length) {
                var s = this.C40_BASIC_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s);
              } else
                throw new m();
              break;
            case 1:
              n ? (t.append(String.fromCharCode(u + 128)), n = !1) : t.append(String.fromCharCode(u)), a = 0;
              break;
            case 2:
              if (u < this.C40_SHIFT2_SET_CHARS.length) {
                var s = this.C40_SHIFT2_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s);
              } else
                switch (u) {
                  case 27:
                    t.append("");
                    break;
                  case 30:
                    n = !0;
                    break;
                  default:
                    throw new m();
                }
              a = 0;
              break;
            case 3:
              n ? (t.append(String.fromCharCode(u + 224)), n = !1) : t.append(String.fromCharCode(u + 96)), a = 0;
              break;
            default:
              throw new m();
          }
        }
      } while (e.available() > 0);
    }, r.decodeTextSegment = function(e, t) {
      var n = !1, i = [], a = 0;
      do {
        if (e.available() === 8)
          return;
        var o = e.readBits(8);
        if (o === 254)
          return;
        this.parseTwoBytes(o, e.readBits(8), i);
        for (var f = 0; f < 3; f++) {
          var u = i[f];
          switch (a) {
            case 0:
              if (u < 3)
                a = u + 1;
              else if (u < this.TEXT_BASIC_SET_CHARS.length) {
                var s = this.TEXT_BASIC_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s);
              } else
                throw new m();
              break;
            case 1:
              n ? (t.append(String.fromCharCode(u + 128)), n = !1) : t.append(String.fromCharCode(u)), a = 0;
              break;
            case 2:
              if (u < this.TEXT_SHIFT2_SET_CHARS.length) {
                var s = this.TEXT_SHIFT2_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s);
              } else
                switch (u) {
                  case 27:
                    t.append("");
                    break;
                  case 30:
                    n = !0;
                    break;
                  default:
                    throw new m();
                }
              a = 0;
              break;
            case 3:
              if (u < this.TEXT_SHIFT3_SET_CHARS.length) {
                var s = this.TEXT_SHIFT3_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s), a = 0;
              } else
                throw new m();
              break;
            default:
              throw new m();
          }
        }
      } while (e.available() > 0);
    }, r.decodeAnsiX12Segment = function(e, t) {
      var n = [];
      do {
        if (e.available() === 8)
          return;
        var i = e.readBits(8);
        if (i === 254)
          return;
        this.parseTwoBytes(i, e.readBits(8), n);
        for (var a = 0; a < 3; a++) {
          var o = n[a];
          switch (o) {
            case 0:
              t.append("\r");
              break;
            case 1:
              t.append("*");
              break;
            case 2:
              t.append(">");
              break;
            case 3:
              t.append(" ");
              break;
            default:
              if (o < 14)
                t.append(String.fromCharCode(o + 44));
              else if (o < 40)
                t.append(String.fromCharCode(o + 51));
              else
                throw new m();
              break;
          }
        }
      } while (e.available() > 0);
    }, r.parseTwoBytes = function(e, t, n) {
      var i = (e << 8) + t - 1, a = Math.floor(i / 1600);
      n[0] = a, i -= a * 1600, a = Math.floor(i / 40), n[1] = a, n[2] = i - a * 40;
    }, r.decodeEdifactSegment = function(e, t) {
      do {
        if (e.available() <= 16)
          return;
        for (var n = 0; n < 4; n++) {
          var i = e.readBits(6);
          if (i === 31) {
            var a = 8 - e.getBitOffset();
            a !== 8 && e.readBits(a);
            return;
          }
          i & 32 || (i |= 64), t.append(String.fromCharCode(i));
        }
      } while (e.available() > 0);
    }, r.decodeBase256Segment = function(e, t, n) {
      var i = 1 + e.getByteOffset(), a = this.unrandomize255State(e.readBits(8), i++), o;
      if (a === 0 ? o = e.available() / 8 | 0 : a < 250 ? o = a : o = 250 * (a - 249) + this.unrandomize255State(e.readBits(8), i++), o < 0)
        throw new m();
      for (var f = new Uint8Array(o), u = 0; u < o; u++) {
        if (e.available() < 8)
          throw new m();
        f[u] = this.unrandomize255State(e.readBits(8), i++);
      }
      n.push(f);
      try {
        t.append(_e.decode(f, X.ISO88591));
      } catch (s) {
        throw new We("Platform does not support required encoding: " + s.message);
      }
    }, r.unrandomize255State = function(e, t) {
      var n = 149 * t % 255 + 1, i = e - n;
      return i >= 0 ? i : i + 256;
    }, r.C40_BASIC_SET_CHARS = [
      "*",
      "*",
      "*",
      " ",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ], r.C40_SHIFT2_SET_CHARS = [
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "_"
    ], r.TEXT_BASIC_SET_CHARS = [
      "*",
      "*",
      "*",
      " ",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ], r.TEXT_SHIFT2_SET_CHARS = r.C40_SHIFT2_SET_CHARS, r.TEXT_SHIFT3_SET_CHARS = [
      "`",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "{",
      "|",
      "}",
      "~",
      ""
    ], r;
  }()
), di = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, vi = (
  /** @class */
  function() {
    function r() {
      this.rsDecoder = new it(se.DATA_MATRIX_FIELD_256);
    }
    return r.prototype.decode = function(e) {
      var t, n, i = new ci(e), a = i.getVersion(), o = i.readCodewords(), f = hi.getDataBlocks(o, a), u = 0;
      try {
        for (var s = di(f), c = s.next(); !c.done; c = s.next()) {
          var h = c.value;
          u += h.getNumDataCodewords();
        }
      } catch (w) {
        t = { error: w };
      } finally {
        try {
          c && !c.done && (n = s.return) && n.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      for (var d = new Uint8Array(u), l = f.length, v = 0; v < l; v++) {
        var p = f[v], y = p.getCodewords(), _ = p.getNumDataCodewords();
        this.correctErrors(y, _);
        for (var g = 0; g < _; g++)
          d[g * l + v] = y[g];
      }
      return li.decode(d);
    }, r.prototype.correctErrors = function(e, t) {
      var n = new Int32Array(e);
      try {
        this.rsDecoder.decode(n, e.length - t);
      } catch {
        throw new re();
      }
      for (var i = 0; i < t; i++)
        e[i] = n[i];
    }, r;
  }()
), xi = (
  /** @class */
  function() {
    function r(e) {
      this.image = e, this.rectangleDetector = new yt(this.image);
    }
    return r.prototype.detect = function() {
      var e = this.rectangleDetector.detect(), t = this.detectSolid1(e);
      if (t = this.detectSolid2(t), t[3] = this.correctTopRight(t), !t[3])
        throw new C();
      t = this.shiftToModuleCenter(t);
      var n = t[0], i = t[1], a = t[2], o = t[3], f = this.transitionsBetween(n, o) + 1, u = this.transitionsBetween(a, o) + 1;
      (f & 1) === 1 && (f += 1), (u & 1) === 1 && (u += 1), 4 * f < 7 * u && 4 * u < 7 * f && (f = u = Math.max(f, u));
      var s = r.sampleGrid(this.image, n, i, a, o, f, u);
      return new bt(s, [n, i, a, o]);
    }, r.shiftPoint = function(e, t, n) {
      var i = (t.getX() - e.getX()) / (n + 1), a = (t.getY() - e.getY()) / (n + 1);
      return new T(e.getX() + i, e.getY() + a);
    }, r.moveAway = function(e, t, n) {
      var i = e.getX(), a = e.getY();
      return i < t ? i -= 1 : i += 1, a < n ? a -= 1 : a += 1, new T(i, a);
    }, r.prototype.detectSolid1 = function(e) {
      var t = e[0], n = e[1], i = e[3], a = e[2], o = this.transitionsBetween(t, n), f = this.transitionsBetween(n, i), u = this.transitionsBetween(i, a), s = this.transitionsBetween(a, t), c = o, h = [a, t, n, i];
      return c > f && (c = f, h[0] = t, h[1] = n, h[2] = i, h[3] = a), c > u && (c = u, h[0] = n, h[1] = i, h[2] = a, h[3] = t), c > s && (h[0] = i, h[1] = a, h[2] = t, h[3] = n), h;
    }, r.prototype.detectSolid2 = function(e) {
      var t = e[0], n = e[1], i = e[2], a = e[3], o = this.transitionsBetween(t, a), f = r.shiftPoint(n, i, (o + 1) * 4), u = r.shiftPoint(i, n, (o + 1) * 4), s = this.transitionsBetween(f, t), c = this.transitionsBetween(u, a);
      return s < c ? (e[0] = t, e[1] = n, e[2] = i, e[3] = a) : (e[0] = n, e[1] = i, e[2] = a, e[3] = t), e;
    }, r.prototype.correctTopRight = function(e) {
      var t = e[0], n = e[1], i = e[2], a = e[3], o = this.transitionsBetween(t, a), f = this.transitionsBetween(n, a), u = r.shiftPoint(t, n, (f + 1) * 4), s = r.shiftPoint(i, n, (o + 1) * 4);
      o = this.transitionsBetween(u, a), f = this.transitionsBetween(s, a);
      var c = new T(a.getX() + (i.getX() - n.getX()) / (o + 1), a.getY() + (i.getY() - n.getY()) / (o + 1)), h = new T(a.getX() + (t.getX() - n.getX()) / (f + 1), a.getY() + (t.getY() - n.getY()) / (f + 1));
      if (!this.isValid(c))
        return this.isValid(h) ? h : null;
      if (!this.isValid(h))
        return c;
      var d = this.transitionsBetween(u, c) + this.transitionsBetween(s, c), l = this.transitionsBetween(u, h) + this.transitionsBetween(s, h);
      return d > l ? c : h;
    }, r.prototype.shiftToModuleCenter = function(e) {
      var t = e[0], n = e[1], i = e[2], a = e[3], o = this.transitionsBetween(t, a) + 1, f = this.transitionsBetween(i, a) + 1, u = r.shiftPoint(t, n, f * 4), s = r.shiftPoint(i, n, o * 4);
      o = this.transitionsBetween(u, a) + 1, f = this.transitionsBetween(s, a) + 1, (o & 1) === 1 && (o += 1), (f & 1) === 1 && (f += 1);
      var c = (t.getX() + n.getX() + i.getX() + a.getX()) / 4, h = (t.getY() + n.getY() + i.getY() + a.getY()) / 4;
      t = r.moveAway(t, c, h), n = r.moveAway(n, c, h), i = r.moveAway(i, c, h), a = r.moveAway(a, c, h);
      var d, l;
      return u = r.shiftPoint(t, n, f * 4), u = r.shiftPoint(u, a, o * 4), d = r.shiftPoint(n, t, f * 4), d = r.shiftPoint(d, i, o * 4), s = r.shiftPoint(i, a, f * 4), s = r.shiftPoint(s, n, o * 4), l = r.shiftPoint(a, i, f * 4), l = r.shiftPoint(l, t, o * 4), [u, d, s, l];
    }, r.prototype.isValid = function(e) {
      return e.getX() >= 0 && e.getX() < this.image.getWidth() && e.getY() > 0 && e.getY() < this.image.getHeight();
    }, r.sampleGrid = function(e, t, n, i, a, o, f) {
      var u = Dt.getInstance();
      return u.sampleGrid(e, o, f, 0.5, 0.5, o - 0.5, 0.5, o - 0.5, f - 0.5, 0.5, f - 0.5, t.getX(), t.getY(), a.getX(), a.getY(), i.getX(), i.getY(), n.getX(), n.getY());
    }, r.prototype.transitionsBetween = function(e, t) {
      var n = Math.trunc(e.getX()), i = Math.trunc(e.getY()), a = Math.trunc(t.getX()), o = Math.trunc(t.getY()), f = Math.abs(o - i) > Math.abs(a - n);
      if (f) {
        var u = n;
        n = i, i = u, u = a, a = o, o = u;
      }
      for (var s = Math.abs(a - n), c = Math.abs(o - i), h = -s / 2, d = i < o ? 1 : -1, l = n < a ? 1 : -1, v = 0, p = this.image.get(f ? i : n, f ? n : i), y = n, _ = i; y !== a; y += l) {
        var g = this.image.get(f ? _ : y, f ? y : _);
        if (g !== p && (v++, p = g), h += c, h > 0) {
          if (_ === o)
            break;
          _ += d, h -= s;
        }
      }
      return v;
    }, r;
  }()
), wt = (
  /** @class */
  function() {
    function r() {
      this.decoder = new vi();
    }
    return r.prototype.decode = function(e, t) {
      t === void 0 && (t = null);
      var n, i;
      if (t != null && t.has(j.PURE_BARCODE)) {
        var a = r.extractPureBits(e.getBlackMatrix());
        n = this.decoder.decode(a), i = r.NO_POINTS;
      } else {
        var o = new xi(e.getBlackMatrix()).detect();
        n = this.decoder.decode(o.getBits()), i = o.getPoints();
      }
      var f = n.getRawBytes(), u = new he(n.getText(), f, 8 * f.length, i, R.DATA_MATRIX, W.currentTimeMillis()), s = n.getByteSegments();
      s != null && u.putMetadata(ne.BYTE_SEGMENTS, s);
      var c = n.getECLevel();
      return c != null && u.putMetadata(ne.ERROR_CORRECTION_LEVEL, c), u;
    }, r.prototype.reset = function() {
    }, r.extractPureBits = function(e) {
      var t = e.getTopLeftOnBit(), n = e.getBottomRightOnBit();
      if (t == null || n == null)
        throw new C();
      var i = this.moduleSize(t, e), a = t[1], o = n[1], f = t[0], u = n[0], s = (u - f + 1) / i, c = (o - a + 1) / i;
      if (s <= 0 || c <= 0)
        throw new C();
      var h = i / 2;
      a += h, f += h;
      for (var d = new Ae(s, c), l = 0; l < c; l++)
        for (var v = a + l * i, p = 0; p < s; p++)
          e.get(f + p * i, v) && d.set(p, l);
      return d;
    }, r.moduleSize = function(e, t) {
      for (var n = t.getWidth(), i = e[0], a = e[1]; i < n && t.get(i, a); )
        i++;
      if (i === n)
        throw new C();
      var o = i - e[0];
      if (o === 0)
        throw new C();
      return o;
    }, r.NO_POINTS = [], r;
  }()
), pi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  pi(e, r);
  function e(t) {
    return t === void 0 && (t = 500), r.call(this, new wt(), t) || this;
  }
  return e;
})(Fe);
var Me;
(function(r) {
  r[r.L = 0] = "L", r[r.M = 1] = "M", r[r.Q = 2] = "Q", r[r.H = 3] = "H";
})(Me || (Me = {}));
var gi = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.value = e, this.stringValue = t, this.bits = n, r.FOR_BITS.set(n, this), r.FOR_VALUE.set(e, this);
    }
    return r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getBits = function() {
      return this.bits;
    }, r.fromString = function(e) {
      switch (e) {
        case "L":
          return r.L;
        case "M":
          return r.M;
        case "Q":
          return r.Q;
        case "H":
          return r.H;
        default:
          throw new pe(e + "not available");
      }
    }, r.prototype.toString = function() {
      return this.stringValue;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.value === t.value;
    }, r.forBits = function(e) {
      if (e < 0 || e >= r.FOR_BITS.size)
        throw new D();
      return r.FOR_BITS.get(e);
    }, r.FOR_BITS = /* @__PURE__ */ new Map(), r.FOR_VALUE = /* @__PURE__ */ new Map(), r.L = new r(Me.L, "L", 1), r.M = new r(Me.M, "M", 0), r.Q = new r(Me.Q, "Q", 3), r.H = new r(Me.H, "H", 2), r;
  }()
), yi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, vr = (
  /** @class */
  function() {
    function r(e) {
      this.errorCorrectionLevel = gi.forBits(e >> 3 & 3), this.dataMask = /*(byte) */
      e & 7;
    }
    return r.numBitsDiffering = function(e, t) {
      return M.bitCount(e ^ t);
    }, r.decodeFormatInformation = function(e, t) {
      var n = r.doDecodeFormatInformation(e, t);
      return n !== null ? n : r.doDecodeFormatInformation(e ^ r.FORMAT_INFO_MASK_QR, t ^ r.FORMAT_INFO_MASK_QR);
    }, r.doDecodeFormatInformation = function(e, t) {
      var n, i, a = Number.MAX_SAFE_INTEGER, o = 0;
      try {
        for (var f = yi(r.FORMAT_INFO_DECODE_LOOKUP), u = f.next(); !u.done; u = f.next()) {
          var s = u.value, c = s[0];
          if (c === e || c === t)
            return new r(s[1]);
          var h = r.numBitsDiffering(e, c);
          h < a && (o = s[1], a = h), e !== t && (h = r.numBitsDiffering(t, c), h < a && (o = s[1], a = h));
        }
      } catch (d) {
        n = { error: d };
      } finally {
        try {
          u && !u.done && (i = f.return) && i.call(f);
        } finally {
          if (n)
            throw n.error;
        }
      }
      return a <= 3 ? new r(o) : null;
    }, r.prototype.getErrorCorrectionLevel = function() {
      return this.errorCorrectionLevel;
    }, r.prototype.getDataMask = function() {
      return this.dataMask;
    }, r.prototype.hashCode = function() {
      return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.errorCorrectionLevel === t.errorCorrectionLevel && this.dataMask === t.dataMask;
    }, r.FORMAT_INFO_MASK_QR = 21522, r.FORMAT_INFO_DECODE_LOOKUP = [
      Int32Array.from([21522, 0]),
      Int32Array.from([20773, 1]),
      Int32Array.from([24188, 2]),
      Int32Array.from([23371, 3]),
      Int32Array.from([17913, 4]),
      Int32Array.from([16590, 5]),
      Int32Array.from([20375, 6]),
      Int32Array.from([19104, 7]),
      Int32Array.from([30660, 8]),
      Int32Array.from([29427, 9]),
      Int32Array.from([32170, 10]),
      Int32Array.from([30877, 11]),
      Int32Array.from([26159, 12]),
      Int32Array.from([25368, 13]),
      Int32Array.from([27713, 14]),
      Int32Array.from([26998, 15]),
      Int32Array.from([5769, 16]),
      Int32Array.from([5054, 17]),
      Int32Array.from([7399, 18]),
      Int32Array.from([6608, 19]),
      Int32Array.from([1890, 20]),
      Int32Array.from([597, 21]),
      Int32Array.from([3340, 22]),
      Int32Array.from([2107, 23]),
      Int32Array.from([13663, 24]),
      Int32Array.from([12392, 25]),
      Int32Array.from([16177, 26]),
      Int32Array.from([14854, 27]),
      Int32Array.from([9396, 28]),
      Int32Array.from([8579, 29]),
      Int32Array.from([11994, 30]),
      Int32Array.from([11245, 31])
    ], r;
  }()
), _i = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, A = (
  /** @class */
  function() {
    function r(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      this.ecCodewordsPerBlock = e, this.ecBlocks = t;
    }
    return r.prototype.getECCodewordsPerBlock = function() {
      return this.ecCodewordsPerBlock;
    }, r.prototype.getNumBlocks = function() {
      var e, t, n = 0, i = this.ecBlocks;
      try {
        for (var a = _i(i), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          n += f.getCount();
        }
      } catch (u) {
        e = { error: u };
      } finally {
        try {
          o && !o.done && (t = a.return) && t.call(a);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return n;
    }, r.prototype.getTotalECCodewords = function() {
      return this.ecCodewordsPerBlock * this.getNumBlocks();
    }, r.prototype.getECBlocks = function() {
      return this.ecBlocks;
    }, r;
  }()
), x = (
  /** @class */
  function() {
    function r(e, t) {
      this.count = e, this.dataCodewords = t;
    }
    return r.prototype.getCount = function() {
      return this.count;
    }, r.prototype.getDataCodewords = function() {
      return this.dataCodewords;
    }, r;
  }()
), Ai = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ne = (
  /** @class */
  function() {
    function r(e, t) {
      for (var n, i, a = [], o = 2; o < arguments.length; o++)
        a[o - 2] = arguments[o];
      this.versionNumber = e, this.alignmentPatternCenters = t, this.ecBlocks = a;
      var f = 0, u = a[0].getECCodewordsPerBlock(), s = a[0].getECBlocks();
      try {
        for (var c = Ai(s), h = c.next(); !h.done; h = c.next()) {
          var d = h.value;
          f += d.getCount() * (d.getDataCodewords() + u);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          h && !h.done && (i = c.return) && i.call(c);
        } finally {
          if (n)
            throw n.error;
        }
      }
      this.totalCodewords = f;
    }
    return r.prototype.getVersionNumber = function() {
      return this.versionNumber;
    }, r.prototype.getAlignmentPatternCenters = function() {
      return this.alignmentPatternCenters;
    }, r.prototype.getTotalCodewords = function() {
      return this.totalCodewords;
    }, r.prototype.getDimensionForVersion = function() {
      return 17 + 4 * this.versionNumber;
    }, r.prototype.getECBlocksForLevel = function(e) {
      return this.ecBlocks[e.getValue()];
    }, r.getProvisionalVersionForDimension = function(e) {
      if (e % 4 !== 1)
        throw new m();
      try {
        return this.getVersionForNumber((e - 17) / 4);
      } catch {
        throw new m();
      }
    }, r.getVersionForNumber = function(e) {
      if (e < 1 || e > 40)
        throw new D();
      return r.VERSIONS[e - 1];
    }, r.decodeVersionInformation = function(e) {
      for (var t = Number.MAX_SAFE_INTEGER, n = 0, i = 0; i < r.VERSION_DECODE_INFO.length; i++) {
        var a = r.VERSION_DECODE_INFO[i];
        if (a === e)
          return r.getVersionForNumber(i + 7);
        var o = vr.numBitsDiffering(e, a);
        o < t && (n = i + 7, t = o);
      }
      return t <= 3 ? r.getVersionForNumber(n) : null;
    }, r.prototype.buildFunctionPattern = function() {
      var e = this.getDimensionForVersion(), t = new Ae(e);
      t.setRegion(0, 0, 9, 9), t.setRegion(e - 8, 0, 8, 9), t.setRegion(0, e - 8, 9, 8);
      for (var n = this.alignmentPatternCenters.length, i = 0; i < n; i++)
        for (var a = this.alignmentPatternCenters[i] - 2, o = 0; o < n; o++)
          i === 0 && (o === 0 || o === n - 1) || i === n - 1 && o === 0 || t.setRegion(this.alignmentPatternCenters[o] - 2, a, 5, 5);
      return t.setRegion(6, 9, 1, e - 17), t.setRegion(9, 6, e - 17, 1), this.versionNumber > 6 && (t.setRegion(e - 11, 0, 3, 6), t.setRegion(0, e - 11, 6, 3)), t;
    }, r.prototype.toString = function() {
      return "" + this.versionNumber;
    }, r.VERSION_DECODE_INFO = Int32Array.from([
      31892,
      34236,
      39577,
      42195,
      48118,
      51042,
      55367,
      58893,
      63784,
      68472,
      70749,
      76311,
      79154,
      84390,
      87683,
      92361,
      96236,
      102084,
      102881,
      110507,
      110734,
      117786,
      119615,
      126325,
      127568,
      133589,
      136944,
      141498,
      145311,
      150283,
      152622,
      158308,
      161089,
      167017
    ]), r.VERSIONS = [
      new r(1, new Int32Array(0), new A(7, new x(1, 19)), new A(10, new x(1, 16)), new A(13, new x(1, 13)), new A(17, new x(1, 9))),
      new r(2, Int32Array.from([6, 18]), new A(10, new x(1, 34)), new A(16, new x(1, 28)), new A(22, new x(1, 22)), new A(28, new x(1, 16))),
      new r(3, Int32Array.from([6, 22]), new A(15, new x(1, 55)), new A(26, new x(1, 44)), new A(18, new x(2, 17)), new A(22, new x(2, 13))),
      new r(4, Int32Array.from([6, 26]), new A(20, new x(1, 80)), new A(18, new x(2, 32)), new A(26, new x(2, 24)), new A(16, new x(4, 9))),
      new r(5, Int32Array.from([6, 30]), new A(26, new x(1, 108)), new A(24, new x(2, 43)), new A(18, new x(2, 15), new x(2, 16)), new A(22, new x(2, 11), new x(2, 12))),
      new r(6, Int32Array.from([6, 34]), new A(18, new x(2, 68)), new A(16, new x(4, 27)), new A(24, new x(4, 19)), new A(28, new x(4, 15))),
      new r(7, Int32Array.from([6, 22, 38]), new A(20, new x(2, 78)), new A(18, new x(4, 31)), new A(18, new x(2, 14), new x(4, 15)), new A(26, new x(4, 13), new x(1, 14))),
      new r(8, Int32Array.from([6, 24, 42]), new A(24, new x(2, 97)), new A(22, new x(2, 38), new x(2, 39)), new A(22, new x(4, 18), new x(2, 19)), new A(26, new x(4, 14), new x(2, 15))),
      new r(9, Int32Array.from([6, 26, 46]), new A(30, new x(2, 116)), new A(22, new x(3, 36), new x(2, 37)), new A(20, new x(4, 16), new x(4, 17)), new A(24, new x(4, 12), new x(4, 13))),
      new r(10, Int32Array.from([6, 28, 50]), new A(18, new x(2, 68), new x(2, 69)), new A(26, new x(4, 43), new x(1, 44)), new A(24, new x(6, 19), new x(2, 20)), new A(28, new x(6, 15), new x(2, 16))),
      new r(11, Int32Array.from([6, 30, 54]), new A(20, new x(4, 81)), new A(30, new x(1, 50), new x(4, 51)), new A(28, new x(4, 22), new x(4, 23)), new A(24, new x(3, 12), new x(8, 13))),
      new r(12, Int32Array.from([6, 32, 58]), new A(24, new x(2, 92), new x(2, 93)), new A(22, new x(6, 36), new x(2, 37)), new A(26, new x(4, 20), new x(6, 21)), new A(28, new x(7, 14), new x(4, 15))),
      new r(13, Int32Array.from([6, 34, 62]), new A(26, new x(4, 107)), new A(22, new x(8, 37), new x(1, 38)), new A(24, new x(8, 20), new x(4, 21)), new A(22, new x(12, 11), new x(4, 12))),
      new r(14, Int32Array.from([6, 26, 46, 66]), new A(30, new x(3, 115), new x(1, 116)), new A(24, new x(4, 40), new x(5, 41)), new A(20, new x(11, 16), new x(5, 17)), new A(24, new x(11, 12), new x(5, 13))),
      new r(15, Int32Array.from([6, 26, 48, 70]), new A(22, new x(5, 87), new x(1, 88)), new A(24, new x(5, 41), new x(5, 42)), new A(30, new x(5, 24), new x(7, 25)), new A(24, new x(11, 12), new x(7, 13))),
      new r(16, Int32Array.from([6, 26, 50, 74]), new A(24, new x(5, 98), new x(1, 99)), new A(28, new x(7, 45), new x(3, 46)), new A(24, new x(15, 19), new x(2, 20)), new A(30, new x(3, 15), new x(13, 16))),
      new r(17, Int32Array.from([6, 30, 54, 78]), new A(28, new x(1, 107), new x(5, 108)), new A(28, new x(10, 46), new x(1, 47)), new A(28, new x(1, 22), new x(15, 23)), new A(28, new x(2, 14), new x(17, 15))),
      new r(18, Int32Array.from([6, 30, 56, 82]), new A(30, new x(5, 120), new x(1, 121)), new A(26, new x(9, 43), new x(4, 44)), new A(28, new x(17, 22), new x(1, 23)), new A(28, new x(2, 14), new x(19, 15))),
      new r(19, Int32Array.from([6, 30, 58, 86]), new A(28, new x(3, 113), new x(4, 114)), new A(26, new x(3, 44), new x(11, 45)), new A(26, new x(17, 21), new x(4, 22)), new A(26, new x(9, 13), new x(16, 14))),
      new r(20, Int32Array.from([6, 34, 62, 90]), new A(28, new x(3, 107), new x(5, 108)), new A(26, new x(3, 41), new x(13, 42)), new A(30, new x(15, 24), new x(5, 25)), new A(28, new x(15, 15), new x(10, 16))),
      new r(21, Int32Array.from([6, 28, 50, 72, 94]), new A(28, new x(4, 116), new x(4, 117)), new A(26, new x(17, 42)), new A(28, new x(17, 22), new x(6, 23)), new A(30, new x(19, 16), new x(6, 17))),
      new r(22, Int32Array.from([6, 26, 50, 74, 98]), new A(28, new x(2, 111), new x(7, 112)), new A(28, new x(17, 46)), new A(30, new x(7, 24), new x(16, 25)), new A(24, new x(34, 13))),
      new r(23, Int32Array.from([6, 30, 54, 78, 102]), new A(30, new x(4, 121), new x(5, 122)), new A(28, new x(4, 47), new x(14, 48)), new A(30, new x(11, 24), new x(14, 25)), new A(30, new x(16, 15), new x(14, 16))),
      new r(24, Int32Array.from([6, 28, 54, 80, 106]), new A(30, new x(6, 117), new x(4, 118)), new A(28, new x(6, 45), new x(14, 46)), new A(30, new x(11, 24), new x(16, 25)), new A(30, new x(30, 16), new x(2, 17))),
      new r(25, Int32Array.from([6, 32, 58, 84, 110]), new A(26, new x(8, 106), new x(4, 107)), new A(28, new x(8, 47), new x(13, 48)), new A(30, new x(7, 24), new x(22, 25)), new A(30, new x(22, 15), new x(13, 16))),
      new r(26, Int32Array.from([6, 30, 58, 86, 114]), new A(28, new x(10, 114), new x(2, 115)), new A(28, new x(19, 46), new x(4, 47)), new A(28, new x(28, 22), new x(6, 23)), new A(30, new x(33, 16), new x(4, 17))),
      new r(27, Int32Array.from([6, 34, 62, 90, 118]), new A(30, new x(8, 122), new x(4, 123)), new A(28, new x(22, 45), new x(3, 46)), new A(30, new x(8, 23), new x(26, 24)), new A(30, new x(12, 15), new x(28, 16))),
      new r(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new A(30, new x(3, 117), new x(10, 118)), new A(28, new x(3, 45), new x(23, 46)), new A(30, new x(4, 24), new x(31, 25)), new A(30, new x(11, 15), new x(31, 16))),
      new r(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new A(30, new x(7, 116), new x(7, 117)), new A(28, new x(21, 45), new x(7, 46)), new A(30, new x(1, 23), new x(37, 24)), new A(30, new x(19, 15), new x(26, 16))),
      new r(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new A(30, new x(5, 115), new x(10, 116)), new A(28, new x(19, 47), new x(10, 48)), new A(30, new x(15, 24), new x(25, 25)), new A(30, new x(23, 15), new x(25, 16))),
      new r(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new A(30, new x(13, 115), new x(3, 116)), new A(28, new x(2, 46), new x(29, 47)), new A(30, new x(42, 24), new x(1, 25)), new A(30, new x(23, 15), new x(28, 16))),
      new r(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new A(30, new x(17, 115)), new A(28, new x(10, 46), new x(23, 47)), new A(30, new x(10, 24), new x(35, 25)), new A(30, new x(19, 15), new x(35, 16))),
      new r(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new A(30, new x(17, 115), new x(1, 116)), new A(28, new x(14, 46), new x(21, 47)), new A(30, new x(29, 24), new x(19, 25)), new A(30, new x(11, 15), new x(46, 16))),
      new r(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new A(30, new x(13, 115), new x(6, 116)), new A(28, new x(14, 46), new x(23, 47)), new A(30, new x(44, 24), new x(7, 25)), new A(30, new x(59, 16), new x(1, 17))),
      new r(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new A(30, new x(12, 121), new x(7, 122)), new A(28, new x(12, 47), new x(26, 48)), new A(30, new x(39, 24), new x(14, 25)), new A(30, new x(22, 15), new x(41, 16))),
      new r(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new A(30, new x(6, 121), new x(14, 122)), new A(28, new x(6, 47), new x(34, 48)), new A(30, new x(46, 24), new x(10, 25)), new A(30, new x(2, 15), new x(64, 16))),
      new r(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new A(30, new x(17, 122), new x(4, 123)), new A(28, new x(29, 46), new x(14, 47)), new A(30, new x(49, 24), new x(10, 25)), new A(30, new x(24, 15), new x(46, 16))),
      new r(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new A(30, new x(4, 122), new x(18, 123)), new A(28, new x(13, 46), new x(32, 47)), new A(30, new x(48, 24), new x(14, 25)), new A(30, new x(42, 15), new x(32, 16))),
      new r(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new A(30, new x(20, 117), new x(4, 118)), new A(28, new x(40, 47), new x(7, 48)), new A(30, new x(43, 24), new x(22, 25)), new A(30, new x(10, 15), new x(67, 16))),
      new r(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new A(30, new x(19, 118), new x(6, 119)), new A(28, new x(18, 47), new x(31, 48)), new A(30, new x(34, 24), new x(34, 25)), new A(30, new x(20, 15), new x(61, 16)))
    ], r;
  }()
), J;
(function(r) {
  r[r.DATA_MASK_000 = 0] = "DATA_MASK_000", r[r.DATA_MASK_001 = 1] = "DATA_MASK_001", r[r.DATA_MASK_010 = 2] = "DATA_MASK_010", r[r.DATA_MASK_011 = 3] = "DATA_MASK_011", r[r.DATA_MASK_100 = 4] = "DATA_MASK_100", r[r.DATA_MASK_101 = 5] = "DATA_MASK_101", r[r.DATA_MASK_110 = 6] = "DATA_MASK_110", r[r.DATA_MASK_111 = 7] = "DATA_MASK_111";
})(J || (J = {}));
var Kt = (
  /** @class */
  function() {
    function r(e, t) {
      this.value = e, this.isMasked = t;
    }
    return r.prototype.unmaskBitMatrix = function(e, t) {
      for (var n = 0; n < t; n++)
        for (var i = 0; i < t; i++)
          this.isMasked(n, i) && e.flip(i, n);
    }, r.values = /* @__PURE__ */ new Map([
      /**
       * 000: mask bits for which (x + y) mod 2 == 0
       */
      [J.DATA_MASK_000, new r(J.DATA_MASK_000, function(e, t) {
        return (e + t & 1) === 0;
      })],
      /**
       * 001: mask bits for which x mod 2 == 0
       */
      [J.DATA_MASK_001, new r(J.DATA_MASK_001, function(e, t) {
        return (e & 1) === 0;
      })],
      /**
       * 010: mask bits for which y mod 3 == 0
       */
      [J.DATA_MASK_010, new r(J.DATA_MASK_010, function(e, t) {
        return t % 3 === 0;
      })],
      /**
       * 011: mask bits for which (x + y) mod 3 == 0
       */
      [J.DATA_MASK_011, new r(J.DATA_MASK_011, function(e, t) {
        return (e + t) % 3 === 0;
      })],
      /**
       * 100: mask bits for which (x/2 + y/3) mod 2 == 0
       */
      [J.DATA_MASK_100, new r(J.DATA_MASK_100, function(e, t) {
        return (Math.floor(e / 2) + Math.floor(t / 3) & 1) === 0;
      })],
      /**
       * 101: mask bits for which xy mod 2 + xy mod 3 == 0
       * equivalently, such that xy mod 6 == 0
       */
      [J.DATA_MASK_101, new r(J.DATA_MASK_101, function(e, t) {
        return e * t % 6 === 0;
      })],
      /**
       * 110: mask bits for which (xy mod 2 + xy mod 3) mod 2 == 0
       * equivalently, such that xy mod 6 < 3
       */
      [J.DATA_MASK_110, new r(J.DATA_MASK_110, function(e, t) {
        return e * t % 6 < 3;
      })],
      /**
       * 111: mask bits for which ((x+y)mod 2 + xy mod 3) mod 2 == 0
       * equivalently, such that (x + y + xy mod 3) mod 2 == 0
       */
      [J.DATA_MASK_111, new r(J.DATA_MASK_111, function(e, t) {
        return (e + t + e * t % 3 & 1) === 0;
      })]
    ]), r;
  }()
), wi = (
  /** @class */
  function() {
    function r(e) {
      var t = e.getHeight();
      if (t < 21 || (t & 3) !== 1)
        throw new m();
      this.bitMatrix = e;
    }
    return r.prototype.readFormatInformation = function() {
      if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== void 0)
        return this.parsedFormatInfo;
      for (var e = 0, t = 0; t < 6; t++)
        e = this.copyBit(t, 8, e);
      e = this.copyBit(7, 8, e), e = this.copyBit(8, 8, e), e = this.copyBit(8, 7, e);
      for (var n = 5; n >= 0; n--)
        e = this.copyBit(8, n, e);
      for (var i = this.bitMatrix.getHeight(), a = 0, o = i - 7, n = i - 1; n >= o; n--)
        a = this.copyBit(8, n, a);
      for (var t = i - 8; t < i; t++)
        a = this.copyBit(t, 8, a);
      if (this.parsedFormatInfo = vr.decodeFormatInformation(e, a), this.parsedFormatInfo !== null)
        return this.parsedFormatInfo;
      throw new m();
    }, r.prototype.readVersion = function() {
      if (this.parsedVersion !== null && this.parsedVersion !== void 0)
        return this.parsedVersion;
      var e = this.bitMatrix.getHeight(), t = Math.floor((e - 17) / 4);
      if (t <= 6)
        return Ne.getVersionForNumber(t);
      for (var n = 0, i = e - 11, a = 5; a >= 0; a--)
        for (var o = e - 9; o >= i; o--)
          n = this.copyBit(o, a, n);
      var f = Ne.decodeVersionInformation(n);
      if (f !== null && f.getDimensionForVersion() === e)
        return this.parsedVersion = f, f;
      n = 0;
      for (var o = 5; o >= 0; o--)
        for (var a = e - 9; a >= i; a--)
          n = this.copyBit(o, a, n);
      if (f = Ne.decodeVersionInformation(n), f !== null && f.getDimensionForVersion() === e)
        return this.parsedVersion = f, f;
      throw new m();
    }, r.prototype.copyBit = function(e, t, n) {
      var i = this.isMirror ? this.bitMatrix.get(t, e) : this.bitMatrix.get(e, t);
      return i ? n << 1 | 1 : n << 1;
    }, r.prototype.readCodewords = function() {
      var e = this.readFormatInformation(), t = this.readVersion(), n = Kt.values.get(e.getDataMask()), i = this.bitMatrix.getHeight();
      n.unmaskBitMatrix(this.bitMatrix, i);
      for (var a = t.buildFunctionPattern(), o = !0, f = new Uint8Array(t.getTotalCodewords()), u = 0, s = 0, c = 0, h = i - 1; h > 0; h -= 2) {
        h === 6 && h--;
        for (var d = 0; d < i; d++)
          for (var l = o ? i - 1 - d : d, v = 0; v < 2; v++)
            a.get(h - v, l) || (c++, s <<= 1, this.bitMatrix.get(h - v, l) && (s |= 1), c === 8 && (f[u++] = /*(byte) */
            s, c = 0, s = 0));
        o = !o;
      }
      if (u !== t.getTotalCodewords())
        throw new m();
      return f;
    }, r.prototype.remask = function() {
      if (this.parsedFormatInfo !== null) {
        var e = Kt.values[this.parsedFormatInfo.getDataMask()], t = this.bitMatrix.getHeight();
        e.unmaskBitMatrix(this.bitMatrix, t);
      }
    }, r.prototype.setMirror = function(e) {
      this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = e;
    }, r.prototype.mirror = function() {
      for (var e = this.bitMatrix, t = 0, n = e.getWidth(); t < n; t++)
        for (var i = t + 1, a = e.getHeight(); i < a; i++)
          e.get(t, i) !== e.get(i, t) && (e.flip(i, t), e.flip(t, i));
    }, r;
  }()
), qt = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ei = (
  /** @class */
  function() {
    function r(e, t) {
      this.numDataCodewords = e, this.codewords = t;
    }
    return r.getDataBlocks = function(e, t, n) {
      var i, a, o, f;
      if (e.length !== t.getTotalCodewords())
        throw new D();
      var u = t.getECBlocksForLevel(n), s = 0, c = u.getECBlocks();
      try {
        for (var h = qt(c), d = h.next(); !d.done; d = h.next()) {
          var l = d.value;
          s += l.getCount();
        }
      } catch (Z) {
        i = { error: Z };
      } finally {
        try {
          d && !d.done && (a = h.return) && a.call(h);
        } finally {
          if (i)
            throw i.error;
        }
      }
      var v = new Array(s), p = 0;
      try {
        for (var y = qt(c), _ = y.next(); !_.done; _ = y.next())
          for (var l = _.value, g = 0; g < l.getCount(); g++) {
            var w = l.getDataCodewords(), E = u.getECCodewordsPerBlock() + w;
            v[p++] = new r(w, new Uint8Array(E));
          }
      } catch (Z) {
        o = { error: Z };
      } finally {
        try {
          _ && !_.done && (f = y.return) && f.call(y);
        } finally {
          if (o)
            throw o.error;
        }
      }
      for (var I = v[0].codewords.length, S = v.length - 1; S >= 0; ) {
        var O = v[S].codewords.length;
        if (O === I)
          break;
        S--;
      }
      S++;
      for (var b = I - u.getECCodewordsPerBlock(), P = 0, g = 0; g < b; g++)
        for (var N = 0; N < p; N++)
          v[N].codewords[g] = e[P++];
      for (var N = S; N < p; N++)
        v[N].codewords[b] = e[P++];
      for (var $ = v[0].codewords.length, g = b; g < $; g++)
        for (var N = 0; N < p; N++) {
          var B = N < S ? g : g + 1;
          v[N].codewords[B] = e[P++];
        }
      return v;
    }, r.prototype.getNumDataCodewords = function() {
      return this.numDataCodewords;
    }, r.prototype.getCodewords = function() {
      return this.codewords;
    }, r;
  }()
), de;
(function(r) {
  r[r.TERMINATOR = 0] = "TERMINATOR", r[r.NUMERIC = 1] = "NUMERIC", r[r.ALPHANUMERIC = 2] = "ALPHANUMERIC", r[r.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", r[r.BYTE = 4] = "BYTE", r[r.ECI = 5] = "ECI", r[r.KANJI = 6] = "KANJI", r[r.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", r[r.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", r[r.HANZI = 9] = "HANZI";
})(de || (de = {}));
var Y = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.value = e, this.stringValue = t, this.characterCountBitsForVersions = n, this.bits = i, r.FOR_BITS.set(i, this), r.FOR_VALUE.set(e, this);
    }
    return r.forBits = function(e) {
      var t = r.FOR_BITS.get(e);
      if (t === void 0)
        throw new D();
      return t;
    }, r.prototype.getCharacterCountBits = function(e) {
      var t = e.getVersionNumber(), n;
      return t <= 9 ? n = 0 : t <= 26 ? n = 1 : n = 2, this.characterCountBitsForVersions[n];
    }, r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getBits = function() {
      return this.bits;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.value === t.value;
    }, r.prototype.toString = function() {
      return this.stringValue;
    }, r.FOR_BITS = /* @__PURE__ */ new Map(), r.FOR_VALUE = /* @__PURE__ */ new Map(), r.TERMINATOR = new r(de.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), r.NUMERIC = new r(de.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), r.ALPHANUMERIC = new r(de.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), r.STRUCTURED_APPEND = new r(de.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), r.BYTE = new r(de.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), r.ECI = new r(de.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), r.KANJI = new r(de.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), r.FNC1_FIRST_POSITION = new r(de.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), r.FNC1_SECOND_POSITION = new r(de.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), r.HANZI = new r(de.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13), r;
  }()
), Ci = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e, t, n, i) {
      var a = new dr(e), o = new G(), f = new Array(), u = -1, s = -1;
      try {
        var c = null, h = !1, d = void 0;
        do {
          if (a.available() < 4)
            d = Y.TERMINATOR;
          else {
            var l = a.readBits(4);
            d = Y.forBits(l);
          }
          switch (d) {
            case Y.TERMINATOR:
              break;
            case Y.FNC1_FIRST_POSITION:
            case Y.FNC1_SECOND_POSITION:
              h = !0;
              break;
            case Y.STRUCTURED_APPEND:
              if (a.available() < 16)
                throw new m();
              u = a.readBits(8), s = a.readBits(8);
              break;
            case Y.ECI:
              var v = r.parseECIValue(a);
              if (c = Q.getCharacterSetECIByValue(v), c === null)
                throw new m();
              break;
            case Y.HANZI:
              var p = a.readBits(4), y = a.readBits(d.getCharacterCountBits(t));
              p === r.GB2312_SUBSET && r.decodeHanziSegment(a, o, y);
              break;
            default:
              var _ = a.readBits(d.getCharacterCountBits(t));
              switch (d) {
                case Y.NUMERIC:
                  r.decodeNumericSegment(a, o, _);
                  break;
                case Y.ALPHANUMERIC:
                  r.decodeAlphanumericSegment(a, o, _, h);
                  break;
                case Y.BYTE:
                  r.decodeByteSegment(a, o, _, c, f, i);
                  break;
                case Y.KANJI:
                  r.decodeKanjiSegment(a, o, _);
                  break;
                default:
                  throw new m();
              }
              break;
          }
        } while (d !== Y.TERMINATOR);
      } catch {
        throw new m();
      }
      return new nt(e, o.toString(), f.length === 0 ? null : f, n === null ? null : n.toString(), u, s);
    }, r.decodeHanziSegment = function(e, t, n) {
      if (n * 13 > e.available())
        throw new m();
      for (var i = new Uint8Array(2 * n), a = 0; n > 0; ) {
        var o = e.readBits(13), f = o / 96 << 8 & 4294967295 | o % 96;
        f < 959 ? f += 41377 : f += 42657, i[a] = /*(byte) */
        f >> 8 & 255, i[a + 1] = /*(byte) */
        f & 255, a += 2, n--;
      }
      try {
        t.append(_e.decode(i, X.GB2312));
      } catch (u) {
        throw new m(u);
      }
    }, r.decodeKanjiSegment = function(e, t, n) {
      if (n * 13 > e.available())
        throw new m();
      for (var i = new Uint8Array(2 * n), a = 0; n > 0; ) {
        var o = e.readBits(13), f = o / 192 << 8 & 4294967295 | o % 192;
        f < 7936 ? f += 33088 : f += 49472, i[a] = /*(byte) */
        f >> 8, i[a + 1] = /*(byte) */
        f, a += 2, n--;
      }
      try {
        t.append(_e.decode(i, X.SHIFT_JIS));
      } catch (u) {
        throw new m(u);
      }
    }, r.decodeByteSegment = function(e, t, n, i, a, o) {
      if (8 * n > e.available())
        throw new m();
      for (var f = new Uint8Array(n), u = 0; u < n; u++)
        f[u] = /*(byte) */
        e.readBits(8);
      var s;
      i === null ? s = X.guessEncoding(f, o) : s = i.getName();
      try {
        t.append(_e.decode(f, s));
      } catch (c) {
        throw new m(c);
      }
      a.push(f);
    }, r.toAlphaNumericChar = function(e) {
      if (e >= r.ALPHANUMERIC_CHARS.length)
        throw new m();
      return r.ALPHANUMERIC_CHARS[e];
    }, r.decodeAlphanumericSegment = function(e, t, n, i) {
      for (var a = t.length(); n > 1; ) {
        if (e.available() < 11)
          throw new m();
        var o = e.readBits(11);
        t.append(r.toAlphaNumericChar(Math.floor(o / 45))), t.append(r.toAlphaNumericChar(o % 45)), n -= 2;
      }
      if (n === 1) {
        if (e.available() < 6)
          throw new m();
        t.append(r.toAlphaNumericChar(e.readBits(6)));
      }
      if (i)
        for (var f = a; f < t.length(); f++)
          t.charAt(f) === "%" && (f < t.length() - 1 && t.charAt(f + 1) === "%" ? t.deleteCharAt(f + 1) : t.setCharAt(f, ""));
    }, r.decodeNumericSegment = function(e, t, n) {
      for (; n >= 3; ) {
        if (e.available() < 10)
          throw new m();
        var i = e.readBits(10);
        if (i >= 1e3)
          throw new m();
        t.append(r.toAlphaNumericChar(Math.floor(i / 100))), t.append(r.toAlphaNumericChar(Math.floor(i / 10) % 10)), t.append(r.toAlphaNumericChar(i % 10)), n -= 3;
      }
      if (n === 2) {
        if (e.available() < 7)
          throw new m();
        var a = e.readBits(7);
        if (a >= 100)
          throw new m();
        t.append(r.toAlphaNumericChar(Math.floor(a / 10))), t.append(r.toAlphaNumericChar(a % 10));
      } else if (n === 1) {
        if (e.available() < 4)
          throw new m();
        var o = e.readBits(4);
        if (o >= 10)
          throw new m();
        t.append(r.toAlphaNumericChar(o));
      }
    }, r.parseECIValue = function(e) {
      var t = e.readBits(8);
      if (!(t & 128))
        return t & 127;
      if ((t & 192) === 128) {
        var n = e.readBits(8);
        return (t & 63) << 8 & 4294967295 | n;
      }
      if ((t & 224) === 192) {
        var i = e.readBits(16);
        return (t & 31) << 16 & 4294967295 | i;
      }
      throw new m();
    }, r.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", r.GB2312_SUBSET = 1, r;
  }()
), xr = (
  /** @class */
  function() {
    function r(e) {
      this.mirrored = e;
    }
    return r.prototype.isMirrored = function() {
      return this.mirrored;
    }, r.prototype.applyMirroredCorrection = function(e) {
      if (!(!this.mirrored || e === null || e.length < 3)) {
        var t = e[0];
        e[0] = e[2], e[2] = t;
      }
    }, r;
  }()
), Qt = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ii = (
  /** @class */
  function() {
    function r() {
      this.rsDecoder = new it(se.QR_CODE_FIELD_256);
    }
    return r.prototype.decodeBooleanArray = function(e, t) {
      return this.decodeBitMatrix(Ae.parseFromBooleanArray(e), t);
    }, r.prototype.decodeBitMatrix = function(e, t) {
      var n = new wi(e), i = null;
      try {
        return this.decodeBitMatrixParser(n, t);
      } catch (o) {
        i = o;
      }
      try {
        n.remask(), n.setMirror(!0), n.readVersion(), n.readFormatInformation(), n.mirror();
        var a = this.decodeBitMatrixParser(n, t);
        return a.setOther(new xr(!0)), a;
      } catch (o) {
        throw i !== null ? i : o;
      }
    }, r.prototype.decodeBitMatrixParser = function(e, t) {
      var n, i, a, o, f = e.readVersion(), u = e.readFormatInformation().getErrorCorrectionLevel(), s = e.readCodewords(), c = Ei.getDataBlocks(s, f, u), h = 0;
      try {
        for (var d = Qt(c), l = d.next(); !l.done; l = d.next()) {
          var v = l.value;
          h += v.getNumDataCodewords();
        }
      } catch (S) {
        n = { error: S };
      } finally {
        try {
          l && !l.done && (i = d.return) && i.call(d);
        } finally {
          if (n)
            throw n.error;
        }
      }
      var p = new Uint8Array(h), y = 0;
      try {
        for (var _ = Qt(c), g = _.next(); !g.done; g = _.next()) {
          var v = g.value, w = v.getCodewords(), E = v.getNumDataCodewords();
          this.correctErrors(w, E);
          for (var I = 0; I < E; I++)
            p[y++] = w[I];
        }
      } catch (S) {
        a = { error: S };
      } finally {
        try {
          g && !g.done && (o = _.return) && o.call(_);
        } finally {
          if (a)
            throw a.error;
        }
      }
      return Ci.decode(p, f, u, t);
    }, r.prototype.correctErrors = function(e, t) {
      var n = new Int32Array(e);
      try {
        this.rsDecoder.decode(n, e.length - t);
      } catch {
        throw new re();
      }
      for (var i = 0; i < t; i++)
        e[i] = /*(byte) */
        n[i];
    }, r;
  }()
), Si = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), mi = (
  /** @class */
  function(r) {
    Si(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n) || this;
      return a.estimatedModuleSize = i, a;
    }
    return e.prototype.aboutEquals = function(t, n, i) {
      if (Math.abs(n - this.getY()) <= t && Math.abs(i - this.getX()) <= t) {
        var a = Math.abs(t - this.estimatedModuleSize);
        return a <= 1 || a <= this.estimatedModuleSize;
      }
      return !1;
    }, e.prototype.combineEstimate = function(t, n, i) {
      var a = (this.getX() + n) / 2, o = (this.getY() + t) / 2, f = (this.estimatedModuleSize + i) / 2;
      return new e(a, o, f);
    }, e;
  }(T)
), Oi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ti = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o, f) {
      this.image = e, this.startX = t, this.startY = n, this.width = i, this.height = a, this.moduleSize = o, this.resultPointCallback = f, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3);
    }
    return r.prototype.find = function() {
      for (var e = this.startX, t = this.height, n = this.width, i = e + n, a = this.startY + t / 2, o = new Int32Array(3), f = this.image, u = 0; u < t; u++) {
        var s = a + (u & 1 ? -Math.floor((u + 1) / 2) : Math.floor((u + 1) / 2));
        o[0] = 0, o[1] = 0, o[2] = 0;
        for (var c = e; c < i && !f.get(c, s); )
          c++;
        for (var h = 0; c < i; ) {
          if (f.get(c, s))
            if (h === 1)
              o[1]++;
            else if (h === 2) {
              if (this.foundPatternCross(o)) {
                var d = this.handlePossibleCenter(o, s, c);
                if (d !== null)
                  return d;
              }
              o[0] = o[2], o[1] = 1, o[2] = 0, h = 1;
            } else
              o[++h]++;
          else
            h === 1 && h++, o[h]++;
          c++;
        }
        if (this.foundPatternCross(o)) {
          var d = this.handlePossibleCenter(o, s, i);
          if (d !== null)
            return d;
        }
      }
      if (this.possibleCenters.length !== 0)
        return this.possibleCenters[0];
      throw new C();
    }, r.centerFromEnd = function(e, t) {
      return t - e[2] - e[1] / 2;
    }, r.prototype.foundPatternCross = function(e) {
      for (var t = this.moduleSize, n = t / 2, i = 0; i < 3; i++)
        if (Math.abs(t - e[i]) >= n)
          return !1;
      return !0;
    }, r.prototype.crossCheckVertical = function(e, t, n, i) {
      var a = this.image, o = a.getHeight(), f = this.crossCheckStateCount;
      f[0] = 0, f[1] = 0, f[2] = 0;
      for (var u = e; u >= 0 && a.get(t, u) && f[1] <= n; )
        f[1]++, u--;
      if (u < 0 || f[1] > n)
        return NaN;
      for (; u >= 0 && !a.get(t, u) && f[0] <= n; )
        f[0]++, u--;
      if (f[0] > n)
        return NaN;
      for (u = e + 1; u < o && a.get(t, u) && f[1] <= n; )
        f[1]++, u++;
      if (u === o || f[1] > n)
        return NaN;
      for (; u < o && !a.get(t, u) && f[2] <= n; )
        f[2]++, u++;
      if (f[2] > n)
        return NaN;
      var s = f[0] + f[1] + f[2];
      return 5 * Math.abs(s - i) >= 2 * i ? NaN : this.foundPatternCross(f) ? r.centerFromEnd(f, u) : NaN;
    }, r.prototype.handlePossibleCenter = function(e, t, n) {
      var i, a, o = e[0] + e[1] + e[2], f = r.centerFromEnd(e, n), u = this.crossCheckVertical(
        t,
        /*(int) */
        f,
        2 * e[1],
        o
      );
      if (!isNaN(u)) {
        var s = (e[0] + e[1] + e[2]) / 3;
        try {
          for (var c = Oi(this.possibleCenters), h = c.next(); !h.done; h = c.next()) {
            var d = h.value;
            if (d.aboutEquals(s, u, f))
              return d.combineEstimate(u, f, s);
          }
        } catch (v) {
          i = { error: v };
        } finally {
          try {
            h && !h.done && (a = c.return) && a.call(c);
          } finally {
            if (i)
              throw i.error;
          }
        }
        var l = new mi(f, u, s);
        this.possibleCenters.push(l), this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(l);
      }
      return null;
    }, r;
  }()
), bi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Di = (
  /** @class */
  function(r) {
    bi(e, r);
    function e(t, n, i, a) {
      var o = r.call(this, t, n) || this;
      return o.estimatedModuleSize = i, o.count = a, a === void 0 && (o.count = 1), o;
    }
    return e.prototype.getEstimatedModuleSize = function() {
      return this.estimatedModuleSize;
    }, e.prototype.getCount = function() {
      return this.count;
    }, e.prototype.aboutEquals = function(t, n, i) {
      if (Math.abs(n - this.getY()) <= t && Math.abs(i - this.getX()) <= t) {
        var a = Math.abs(t - this.estimatedModuleSize);
        return a <= 1 || a <= this.estimatedModuleSize;
      }
      return !1;
    }, e.prototype.combineEstimate = function(t, n, i) {
      var a = this.count + 1, o = (this.count * this.getX() + n) / a, f = (this.count * this.getY() + t) / a, u = (this.count * this.estimatedModuleSize + i) / a;
      return new e(o, f, u, a);
    }, e;
  }(T)
), Ni = (
  /** @class */
  function() {
    function r(e) {
      this.bottomLeft = e[0], this.topLeft = e[1], this.topRight = e[2];
    }
    return r.prototype.getBottomLeft = function() {
      return this.bottomLeft;
    }, r.prototype.getTopLeft = function() {
      return this.topLeft;
    }, r.prototype.getTopRight = function() {
      return this.topRight;
    }, r;
  }()
), Le = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ri = (
  /** @class */
  function() {
    function r(e, t) {
      this.image = e, this.resultPointCallback = t, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = t;
    }
    return r.prototype.getImage = function() {
      return this.image;
    }, r.prototype.getPossibleCenters = function() {
      return this.possibleCenters;
    }, r.prototype.find = function(e) {
      var t = e != null && e.get(j.TRY_HARDER) !== void 0, n = e != null && e.get(j.PURE_BARCODE) !== void 0, i = this.image, a = i.getHeight(), o = i.getWidth(), f = Math.floor(3 * a / (4 * r.MAX_MODULES));
      (f < r.MIN_SKIP || t) && (f = r.MIN_SKIP);
      for (var u = !1, s = new Int32Array(5), c = f - 1; c < a && !u; c += f) {
        s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0;
        for (var h = 0, d = 0; d < o; d++)
          if (i.get(d, c))
            (h & 1) === 1 && h++, s[h]++;
          else if (h & 1)
            s[h]++;
          else if (h === 4)
            if (r.foundPatternCross(s)) {
              var l = this.handlePossibleCenter(s, c, d, n);
              if (l === !0)
                if (f = 2, this.hasSkipped === !0)
                  u = this.haveMultiplyConfirmedCenters();
                else {
                  var v = this.findRowSkip();
                  v > s[2] && (c += v - s[2] - f, d = o - 1);
                }
              else {
                s[0] = s[2], s[1] = s[3], s[2] = s[4], s[3] = 1, s[4] = 0, h = 3;
                continue;
              }
              h = 0, s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0;
            } else
              s[0] = s[2], s[1] = s[3], s[2] = s[4], s[3] = 1, s[4] = 0, h = 3;
          else
            s[++h]++;
        if (r.foundPatternCross(s)) {
          var l = this.handlePossibleCenter(s, c, o, n);
          l === !0 && (f = s[0], this.hasSkipped && (u = this.haveMultiplyConfirmedCenters()));
        }
      }
      var p = this.selectBestPatterns();
      return T.orderBestPatterns(p), new Ni(p);
    }, r.centerFromEnd = function(e, t) {
      return t - e[4] - e[3] - e[2] / 2;
    }, r.foundPatternCross = function(e) {
      for (var t = 0, n = 0; n < 5; n++) {
        var i = e[n];
        if (i === 0)
          return !1;
        t += i;
      }
      if (t < 7)
        return !1;
      var a = t / 7, o = a / 2;
      return Math.abs(a - e[0]) < o && Math.abs(a - e[1]) < o && Math.abs(3 * a - e[2]) < 3 * o && Math.abs(a - e[3]) < o && Math.abs(a - e[4]) < o;
    }, r.prototype.getCrossCheckStateCount = function() {
      var e = this.crossCheckStateCount;
      return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e;
    }, r.prototype.crossCheckDiagonal = function(e, t, n, i) {
      for (var a = this.getCrossCheckStateCount(), o = 0, f = this.image; e >= o && t >= o && f.get(t - o, e - o); )
        a[2]++, o++;
      if (e < o || t < o)
        return !1;
      for (; e >= o && t >= o && !f.get(t - o, e - o) && a[1] <= n; )
        a[1]++, o++;
      if (e < o || t < o || a[1] > n)
        return !1;
      for (; e >= o && t >= o && f.get(t - o, e - o) && a[0] <= n; )
        a[0]++, o++;
      if (a[0] > n)
        return !1;
      var u = f.getHeight(), s = f.getWidth();
      for (o = 1; e + o < u && t + o < s && f.get(t + o, e + o); )
        a[2]++, o++;
      if (e + o >= u || t + o >= s)
        return !1;
      for (; e + o < u && t + o < s && !f.get(t + o, e + o) && a[3] < n; )
        a[3]++, o++;
      if (e + o >= u || t + o >= s || a[3] >= n)
        return !1;
      for (; e + o < u && t + o < s && f.get(t + o, e + o) && a[4] < n; )
        a[4]++, o++;
      if (a[4] >= n)
        return !1;
      var c = a[0] + a[1] + a[2] + a[3] + a[4];
      return Math.abs(c - i) < 2 * i && r.foundPatternCross(a);
    }, r.prototype.crossCheckVertical = function(e, t, n, i) {
      for (var a = this.image, o = a.getHeight(), f = this.getCrossCheckStateCount(), u = e; u >= 0 && a.get(t, u); )
        f[2]++, u--;
      if (u < 0)
        return NaN;
      for (; u >= 0 && !a.get(t, u) && f[1] <= n; )
        f[1]++, u--;
      if (u < 0 || f[1] > n)
        return NaN;
      for (; u >= 0 && a.get(t, u) && f[0] <= n; )
        f[0]++, u--;
      if (f[0] > n)
        return NaN;
      for (u = e + 1; u < o && a.get(t, u); )
        f[2]++, u++;
      if (u === o)
        return NaN;
      for (; u < o && !a.get(t, u) && f[3] < n; )
        f[3]++, u++;
      if (u === o || f[3] >= n)
        return NaN;
      for (; u < o && a.get(t, u) && f[4] < n; )
        f[4]++, u++;
      if (f[4] >= n)
        return NaN;
      var s = f[0] + f[1] + f[2] + f[3] + f[4];
      return 5 * Math.abs(s - i) >= 2 * i ? NaN : r.foundPatternCross(f) ? r.centerFromEnd(f, u) : NaN;
    }, r.prototype.crossCheckHorizontal = function(e, t, n, i) {
      for (var a = this.image, o = a.getWidth(), f = this.getCrossCheckStateCount(), u = e; u >= 0 && a.get(u, t); )
        f[2]++, u--;
      if (u < 0)
        return NaN;
      for (; u >= 0 && !a.get(u, t) && f[1] <= n; )
        f[1]++, u--;
      if (u < 0 || f[1] > n)
        return NaN;
      for (; u >= 0 && a.get(u, t) && f[0] <= n; )
        f[0]++, u--;
      if (f[0] > n)
        return NaN;
      for (u = e + 1; u < o && a.get(u, t); )
        f[2]++, u++;
      if (u === o)
        return NaN;
      for (; u < o && !a.get(u, t) && f[3] < n; )
        f[3]++, u++;
      if (u === o || f[3] >= n)
        return NaN;
      for (; u < o && a.get(u, t) && f[4] < n; )
        f[4]++, u++;
      if (f[4] >= n)
        return NaN;
      var s = f[0] + f[1] + f[2] + f[3] + f[4];
      return 5 * Math.abs(s - i) >= i ? NaN : r.foundPatternCross(f) ? r.centerFromEnd(f, u) : NaN;
    }, r.prototype.handlePossibleCenter = function(e, t, n, i) {
      var a = e[0] + e[1] + e[2] + e[3] + e[4], o = r.centerFromEnd(e, n), f = this.crossCheckVertical(
        t,
        /*(int) */
        Math.floor(o),
        e[2],
        a
      );
      if (!isNaN(f) && (o = this.crossCheckHorizontal(
        /*(int) */
        Math.floor(o),
        /*(int) */
        Math.floor(f),
        e[2],
        a
      ), !isNaN(o) && (!i || this.crossCheckDiagonal(
        /*(int) */
        Math.floor(f),
        /*(int) */
        Math.floor(o),
        e[2],
        a
      )))) {
        for (var u = a / 7, s = !1, c = this.possibleCenters, h = 0, d = c.length; h < d; h++) {
          var l = c[h];
          if (l.aboutEquals(u, f, o)) {
            c[h] = l.combineEstimate(f, o, u), s = !0;
            break;
          }
        }
        if (!s) {
          var v = new Di(o, f, u);
          c.push(v), this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(v);
        }
        return !0;
      }
      return !1;
    }, r.prototype.findRowSkip = function() {
      var e, t, n = this.possibleCenters.length;
      if (n <= 1)
        return 0;
      var i = null;
      try {
        for (var a = Le(this.possibleCenters), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          if (f.getCount() >= r.CENTER_QUORUM)
            if (i == null)
              i = f;
            else
              return this.hasSkipped = !0, /*(int) */
              Math.floor((Math.abs(i.getX() - f.getX()) - Math.abs(i.getY() - f.getY())) / 2);
        }
      } catch (u) {
        e = { error: u };
      } finally {
        try {
          o && !o.done && (t = a.return) && t.call(a);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return 0;
    }, r.prototype.haveMultiplyConfirmedCenters = function() {
      var e, t, n, i, a = 0, o = 0, f = this.possibleCenters.length;
      try {
        for (var u = Le(this.possibleCenters), s = u.next(); !s.done; s = u.next()) {
          var c = s.value;
          c.getCount() >= r.CENTER_QUORUM && (a++, o += c.getEstimatedModuleSize());
        }
      } catch (p) {
        e = { error: p };
      } finally {
        try {
          s && !s.done && (t = u.return) && t.call(u);
        } finally {
          if (e)
            throw e.error;
        }
      }
      if (a < 3)
        return !1;
      var h = o / f, d = 0;
      try {
        for (var l = Le(this.possibleCenters), v = l.next(); !v.done; v = l.next()) {
          var c = v.value;
          d += Math.abs(c.getEstimatedModuleSize() - h);
        }
      } catch (p) {
        n = { error: p };
      } finally {
        try {
          v && !v.done && (i = l.return) && i.call(l);
        } finally {
          if (n)
            throw n.error;
        }
      }
      return d <= 0.05 * o;
    }, r.prototype.selectBestPatterns = function() {
      var e, t, n, i, a = this.possibleCenters.length;
      if (a < 3)
        throw new C();
      var o = this.possibleCenters, f;
      if (a > 3) {
        var u = 0, s = 0;
        try {
          for (var c = Le(this.possibleCenters), h = c.next(); !h.done; h = c.next()) {
            var d = h.value, l = d.getEstimatedModuleSize();
            u += l, s += l * l;
          }
        } catch (I) {
          e = { error: I };
        } finally {
          try {
            h && !h.done && (t = c.return) && t.call(c);
          } finally {
            if (e)
              throw e.error;
          }
        }
        f = u / a;
        var v = Math.sqrt(s / a - f * f);
        o.sort(
          /**
           * <p>Orders by furthest from average</p>
           */
          // FurthestFromAverageComparator implements Comparator<FinderPattern>
          function(I, S) {
            var O = Math.abs(S.getEstimatedModuleSize() - f), b = Math.abs(I.getEstimatedModuleSize() - f);
            return O < b ? -1 : O > b ? 1 : 0;
          }
        );
        for (var p = Math.max(0.2 * f, v), y = 0; y < o.length && o.length > 3; y++) {
          var _ = o[y];
          Math.abs(_.getEstimatedModuleSize() - f) > p && (o.splice(y, 1), y--);
        }
      }
      if (o.length > 3) {
        var u = 0;
        try {
          for (var g = Le(o), w = g.next(); !w.done; w = g.next()) {
            var E = w.value;
            u += E.getEstimatedModuleSize();
          }
        } catch (S) {
          n = { error: S };
        } finally {
          try {
            w && !w.done && (i = g.return) && i.call(g);
          } finally {
            if (n)
              throw n.error;
          }
        }
        f = u / o.length, o.sort(
          /**
           * <p>Orders by {@link FinderPattern#getCount()}, descending.</p>
           */
          // CenterComparator implements Comparator<FinderPattern>
          function(S, O) {
            if (O.getCount() === S.getCount()) {
              var b = Math.abs(O.getEstimatedModuleSize() - f), P = Math.abs(S.getEstimatedModuleSize() - f);
              return b < P ? 1 : b > P ? -1 : 0;
            } else
              return O.getCount() - S.getCount();
          }
        ), o.splice(3);
      }
      return [
        o[0],
        o[1],
        o[2]
      ];
    }, r.CENTER_QUORUM = 2, r.MIN_SKIP = 3, r.MAX_MODULES = 57, r;
  }()
), Pi = (
  /** @class */
  function() {
    function r(e) {
      this.image = e;
    }
    return r.prototype.getImage = function() {
      return this.image;
    }, r.prototype.getResultPointCallback = function() {
      return this.resultPointCallback;
    }, r.prototype.detect = function(e) {
      this.resultPointCallback = e == null ? null : (
        /*(ResultPointCallback) */
        e.get(j.NEED_RESULT_POINT_CALLBACK)
      );
      var t = new Ri(this.image, this.resultPointCallback), n = t.find(e);
      return this.processFinderPatternInfo(n);
    }, r.prototype.processFinderPatternInfo = function(e) {
      var t = e.getTopLeft(), n = e.getTopRight(), i = e.getBottomLeft(), a = this.calculateModuleSize(t, n, i);
      if (a < 1)
        throw new C("No pattern found in proccess finder.");
      var o = r.computeDimension(t, n, i, a), f = Ne.getProvisionalVersionForDimension(o), u = f.getDimensionForVersion() - 7, s = null;
      if (f.getAlignmentPatternCenters().length > 0)
        for (var c = n.getX() - t.getX() + i.getX(), h = n.getY() - t.getY() + i.getY(), d = 1 - 3 / u, l = (
          /*(int) */
          Math.floor(t.getX() + d * (c - t.getX()))
        ), v = (
          /*(int) */
          Math.floor(t.getY() + d * (h - t.getY()))
        ), p = 4; p <= 16; p <<= 1)
          try {
            s = this.findAlignmentInRegion(a, l, v, p);
            break;
          } catch (w) {
            if (!(w instanceof C))
              throw w;
          }
      var y = r.createTransform(t, n, i, s, o), _ = r.sampleGrid(this.image, y, o), g;
      return s === null ? g = [i, t, n] : g = [i, t, n, s], new bt(_, g);
    }, r.createTransform = function(e, t, n, i, a) {
      var o = a - 3.5, f, u, s, c;
      return i !== null ? (f = i.getX(), u = i.getY(), s = o - 3, c = s) : (f = t.getX() - e.getX() + n.getX(), u = t.getY() - e.getY() + n.getY(), s = o, c = o), sr.quadrilateralToQuadrilateral(3.5, 3.5, o, 3.5, s, c, 3.5, o, e.getX(), e.getY(), t.getX(), t.getY(), f, u, n.getX(), n.getY());
    }, r.sampleGrid = function(e, t, n) {
      var i = Dt.getInstance();
      return i.sampleGridWithTransform(e, n, n, t);
    }, r.computeDimension = function(e, t, n, i) {
      var a = L.round(T.distance(e, t) / i), o = L.round(T.distance(e, n) / i), f = Math.floor((a + o) / 2) + 7;
      switch (f & 3) {
        case 0:
          f++;
          break;
        case 2:
          f--;
          break;
        case 3:
          throw new C("Dimensions could be not found.");
      }
      return f;
    }, r.prototype.calculateModuleSize = function(e, t, n) {
      return (this.calculateModuleSizeOneWay(e, t) + this.calculateModuleSizeOneWay(e, n)) / 2;
    }, r.prototype.calculateModuleSizeOneWay = function(e, t) {
      var n = this.sizeOfBlackWhiteBlackRunBothWays(
        /*(int) */
        Math.floor(e.getX()),
        /*(int) */
        Math.floor(e.getY()),
        /*(int) */
        Math.floor(t.getX()),
        /*(int) */
        Math.floor(t.getY())
      ), i = this.sizeOfBlackWhiteBlackRunBothWays(
        /*(int) */
        Math.floor(t.getX()),
        /*(int) */
        Math.floor(t.getY()),
        /*(int) */
        Math.floor(e.getX()),
        /*(int) */
        Math.floor(e.getY())
      );
      return isNaN(n) ? i / 7 : isNaN(i) ? n / 7 : (n + i) / 14;
    }, r.prototype.sizeOfBlackWhiteBlackRunBothWays = function(e, t, n, i) {
      var a = this.sizeOfBlackWhiteBlackRun(e, t, n, i), o = 1, f = e - (n - e);
      f < 0 ? (o = e / /*(float) */
      (e - f), f = 0) : f >= this.image.getWidth() && (o = (this.image.getWidth() - 1 - e) / /*(float) */
      (f - e), f = this.image.getWidth() - 1);
      var u = (
        /*(int) */
        Math.floor(t - (i - t) * o)
      );
      return o = 1, u < 0 ? (o = t / /*(float) */
      (t - u), u = 0) : u >= this.image.getHeight() && (o = (this.image.getHeight() - 1 - t) / /*(float) */
      (u - t), u = this.image.getHeight() - 1), f = /*(int) */
      Math.floor(e + (f - e) * o), a += this.sizeOfBlackWhiteBlackRun(e, t, f, u), a - 1;
    }, r.prototype.sizeOfBlackWhiteBlackRun = function(e, t, n, i) {
      var a = Math.abs(i - t) > Math.abs(n - e);
      if (a) {
        var o = e;
        e = t, t = o, o = n, n = i, i = o;
      }
      for (var f = Math.abs(n - e), u = Math.abs(i - t), s = -f / 2, c = e < n ? 1 : -1, h = t < i ? 1 : -1, d = 0, l = n + c, v = e, p = t; v !== l; v += c) {
        var y = a ? p : v, _ = a ? v : p;
        if (d === 1 === this.image.get(y, _)) {
          if (d === 2)
            return L.distance(v, p, e, t);
          d++;
        }
        if (s += u, s > 0) {
          if (p === i)
            break;
          p += h, s -= f;
        }
      }
      return d === 2 ? L.distance(n + c, i, e, t) : NaN;
    }, r.prototype.findAlignmentInRegion = function(e, t, n, i) {
      var a = (
        /*(int) */
        Math.floor(i * e)
      ), o = Math.max(0, t - a), f = Math.min(this.image.getWidth() - 1, t + a);
      if (f - o < e * 3)
        throw new C("Alignment top exceeds estimated module size.");
      var u = Math.max(0, n - a), s = Math.min(this.image.getHeight() - 1, n + a);
      if (s - u < e * 3)
        throw new C("Alignment bottom exceeds estimated module size.");
      var c = new Ti(this.image, o, u, f - o, s - u, e, this.resultPointCallback);
      return c.find();
    }, r;
  }()
), Et = (
  /** @class */
  function() {
    function r() {
      this.decoder = new Ii();
    }
    return r.prototype.getDecoder = function() {
      return this.decoder;
    }, r.prototype.decode = function(e, t) {
      var n, i;
      if (t != null && t.get(j.PURE_BARCODE) !== void 0) {
        var a = r.extractPureBits(e.getBlackMatrix());
        n = this.decoder.decodeBitMatrix(a, t), i = r.NO_POINTS;
      } else {
        var o = new Pi(e.getBlackMatrix()).detect(t);
        n = this.decoder.decodeBitMatrix(o.getBits(), t), i = o.getPoints();
      }
      n.getOther() instanceof xr && n.getOther().applyMirroredCorrection(i);
      var f = new he(n.getText(), n.getRawBytes(), void 0, i, R.QR_CODE, void 0), u = n.getByteSegments();
      u !== null && f.putMetadata(ne.BYTE_SEGMENTS, u);
      var s = n.getECLevel();
      return s !== null && f.putMetadata(ne.ERROR_CORRECTION_LEVEL, s), n.hasStructuredAppend() && (f.putMetadata(ne.STRUCTURED_APPEND_SEQUENCE, n.getStructuredAppendSequenceNumber()), f.putMetadata(ne.STRUCTURED_APPEND_PARITY, n.getStructuredAppendParity())), f;
    }, r.prototype.reset = function() {
    }, r.extractPureBits = function(e) {
      var t = e.getTopLeftOnBit(), n = e.getBottomRightOnBit();
      if (t === null || n === null)
        throw new C();
      var i = this.moduleSize(t, e), a = t[1], o = n[1], f = t[0], u = n[0];
      if (f >= u || a >= o)
        throw new C();
      if (o - a !== u - f && (u = f + (o - a), u >= e.getWidth()))
        throw new C();
      var s = Math.round((u - f + 1) / i), c = Math.round((o - a + 1) / i);
      if (s <= 0 || c <= 0)
        throw new C();
      if (c !== s)
        throw new C();
      var h = (
        /*(int) */
        Math.floor(i / 2)
      );
      a += h, f += h;
      var d = f + /*(int) */
      Math.floor((s - 1) * i) - u;
      if (d > 0) {
        if (d > h)
          throw new C();
        f -= d;
      }
      var l = a + /*(int) */
      Math.floor((c - 1) * i) - o;
      if (l > 0) {
        if (l > h)
          throw new C();
        a -= l;
      }
      for (var v = new Ae(s, c), p = 0; p < c; p++)
        for (var y = a + /*(int) */
        Math.floor(p * i), _ = 0; _ < s; _++)
          e.get(f + /*(int) */
          Math.floor(_ * i), y) && v.set(_, p);
      return v;
    }, r.moduleSize = function(e, t) {
      for (var n = t.getHeight(), i = t.getWidth(), a = e[0], o = e[1], f = !0, u = 0; a < i && o < n; ) {
        if (f !== t.get(a, o)) {
          if (++u === 5)
            break;
          f = !f;
        }
        a++, o++;
      }
      if (a === i || o === n)
        throw new C();
      return (a - e[0]) / 7;
    }, r.NO_POINTS = new Array(), r;
  }()
), Mi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, F = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.PDF417Common = function() {
    }, r.getBitCountSum = function(e) {
      return L.sum(e);
    }, r.toIntArray = function(e) {
      var t, n;
      if (e == null || !e.length)
        return r.EMPTY_INT_ARRAY;
      var i = new Int32Array(e.length), a = 0;
      try {
        for (var o = Mi(e), f = o.next(); !f.done; f = o.next()) {
          var u = f.value;
          i[a++] = u;
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          f && !f.done && (n = o.return) && n.call(o);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return i;
    }, r.getCodeword = function(e) {
      var t = ce.binarySearch(r.SYMBOL_TABLE, e & 262143);
      return t < 0 ? -1 : (r.CODEWORD_TABLE[t] - 1) % r.NUMBER_OF_CODEWORDS;
    }, r.NUMBER_OF_CODEWORDS = 929, r.MAX_CODEWORDS_IN_BARCODE = r.NUMBER_OF_CODEWORDS - 1, r.MIN_ROWS_IN_BARCODE = 3, r.MAX_ROWS_IN_BARCODE = 90, r.MODULES_IN_CODEWORD = 17, r.MODULES_IN_STOP_PATTERN = 18, r.BARS_IN_MODULE = 8, r.EMPTY_INT_ARRAY = new Int32Array([]), r.SYMBOL_TABLE = Int32Array.from([
      66142,
      66170,
      66206,
      66236,
      66290,
      66292,
      66350,
      66382,
      66396,
      66454,
      66470,
      66476,
      66594,
      66600,
      66614,
      66626,
      66628,
      66632,
      66640,
      66654,
      66662,
      66668,
      66682,
      66690,
      66718,
      66720,
      66748,
      66758,
      66776,
      66798,
      66802,
      66804,
      66820,
      66824,
      66832,
      66846,
      66848,
      66876,
      66880,
      66936,
      66950,
      66956,
      66968,
      66992,
      67006,
      67022,
      67036,
      67042,
      67044,
      67048,
      67062,
      67118,
      67150,
      67164,
      67214,
      67228,
      67256,
      67294,
      67322,
      67350,
      67366,
      67372,
      67398,
      67404,
      67416,
      67438,
      67474,
      67476,
      67490,
      67492,
      67496,
      67510,
      67618,
      67624,
      67650,
      67656,
      67664,
      67678,
      67686,
      67692,
      67706,
      67714,
      67716,
      67728,
      67742,
      67744,
      67772,
      67782,
      67788,
      67800,
      67822,
      67826,
      67828,
      67842,
      67848,
      67870,
      67872,
      67900,
      67904,
      67960,
      67974,
      67992,
      68016,
      68030,
      68046,
      68060,
      68066,
      68068,
      68072,
      68086,
      68104,
      68112,
      68126,
      68128,
      68156,
      68160,
      68216,
      68336,
      68358,
      68364,
      68376,
      68400,
      68414,
      68448,
      68476,
      68494,
      68508,
      68536,
      68546,
      68548,
      68552,
      68560,
      68574,
      68582,
      68588,
      68654,
      68686,
      68700,
      68706,
      68708,
      68712,
      68726,
      68750,
      68764,
      68792,
      68802,
      68804,
      68808,
      68816,
      68830,
      68838,
      68844,
      68858,
      68878,
      68892,
      68920,
      68976,
      68990,
      68994,
      68996,
      69e3,
      69008,
      69022,
      69024,
      69052,
      69062,
      69068,
      69080,
      69102,
      69106,
      69108,
      69142,
      69158,
      69164,
      69190,
      69208,
      69230,
      69254,
      69260,
      69272,
      69296,
      69310,
      69326,
      69340,
      69386,
      69394,
      69396,
      69410,
      69416,
      69430,
      69442,
      69444,
      69448,
      69456,
      69470,
      69478,
      69484,
      69554,
      69556,
      69666,
      69672,
      69698,
      69704,
      69712,
      69726,
      69754,
      69762,
      69764,
      69776,
      69790,
      69792,
      69820,
      69830,
      69836,
      69848,
      69870,
      69874,
      69876,
      69890,
      69918,
      69920,
      69948,
      69952,
      70008,
      70022,
      70040,
      70064,
      70078,
      70094,
      70108,
      70114,
      70116,
      70120,
      70134,
      70152,
      70174,
      70176,
      70264,
      70384,
      70412,
      70448,
      70462,
      70496,
      70524,
      70542,
      70556,
      70584,
      70594,
      70600,
      70608,
      70622,
      70630,
      70636,
      70664,
      70672,
      70686,
      70688,
      70716,
      70720,
      70776,
      70896,
      71136,
      71180,
      71192,
      71216,
      71230,
      71264,
      71292,
      71360,
      71416,
      71452,
      71480,
      71536,
      71550,
      71554,
      71556,
      71560,
      71568,
      71582,
      71584,
      71612,
      71622,
      71628,
      71640,
      71662,
      71726,
      71732,
      71758,
      71772,
      71778,
      71780,
      71784,
      71798,
      71822,
      71836,
      71864,
      71874,
      71880,
      71888,
      71902,
      71910,
      71916,
      71930,
      71950,
      71964,
      71992,
      72048,
      72062,
      72066,
      72068,
      72080,
      72094,
      72096,
      72124,
      72134,
      72140,
      72152,
      72174,
      72178,
      72180,
      72206,
      72220,
      72248,
      72304,
      72318,
      72416,
      72444,
      72456,
      72464,
      72478,
      72480,
      72508,
      72512,
      72568,
      72588,
      72600,
      72624,
      72638,
      72654,
      72668,
      72674,
      72676,
      72680,
      72694,
      72726,
      72742,
      72748,
      72774,
      72780,
      72792,
      72814,
      72838,
      72856,
      72880,
      72894,
      72910,
      72924,
      72930,
      72932,
      72936,
      72950,
      72966,
      72972,
      72984,
      73008,
      73022,
      73056,
      73084,
      73102,
      73116,
      73144,
      73156,
      73160,
      73168,
      73182,
      73190,
      73196,
      73210,
      73226,
      73234,
      73236,
      73250,
      73252,
      73256,
      73270,
      73282,
      73284,
      73296,
      73310,
      73318,
      73324,
      73346,
      73348,
      73352,
      73360,
      73374,
      73376,
      73404,
      73414,
      73420,
      73432,
      73454,
      73498,
      73518,
      73522,
      73524,
      73550,
      73564,
      73570,
      73572,
      73576,
      73590,
      73800,
      73822,
      73858,
      73860,
      73872,
      73886,
      73888,
      73916,
      73944,
      73970,
      73972,
      73992,
      74014,
      74016,
      74044,
      74048,
      74104,
      74118,
      74136,
      74160,
      74174,
      74210,
      74212,
      74216,
      74230,
      74244,
      74256,
      74270,
      74272,
      74360,
      74480,
      74502,
      74508,
      74544,
      74558,
      74592,
      74620,
      74638,
      74652,
      74680,
      74690,
      74696,
      74704,
      74726,
      74732,
      74782,
      74784,
      74812,
      74992,
      75232,
      75288,
      75326,
      75360,
      75388,
      75456,
      75512,
      75576,
      75632,
      75646,
      75650,
      75652,
      75664,
      75678,
      75680,
      75708,
      75718,
      75724,
      75736,
      75758,
      75808,
      75836,
      75840,
      75896,
      76016,
      76256,
      76736,
      76824,
      76848,
      76862,
      76896,
      76924,
      76992,
      77048,
      77296,
      77340,
      77368,
      77424,
      77438,
      77536,
      77564,
      77572,
      77576,
      77584,
      77600,
      77628,
      77632,
      77688,
      77702,
      77708,
      77720,
      77744,
      77758,
      77774,
      77788,
      77870,
      77902,
      77916,
      77922,
      77928,
      77966,
      77980,
      78008,
      78018,
      78024,
      78032,
      78046,
      78060,
      78074,
      78094,
      78136,
      78192,
      78206,
      78210,
      78212,
      78224,
      78238,
      78240,
      78268,
      78278,
      78284,
      78296,
      78322,
      78324,
      78350,
      78364,
      78448,
      78462,
      78560,
      78588,
      78600,
      78622,
      78624,
      78652,
      78656,
      78712,
      78726,
      78744,
      78768,
      78782,
      78798,
      78812,
      78818,
      78820,
      78824,
      78838,
      78862,
      78876,
      78904,
      78960,
      78974,
      79072,
      79100,
      79296,
      79352,
      79368,
      79376,
      79390,
      79392,
      79420,
      79424,
      79480,
      79600,
      79628,
      79640,
      79664,
      79678,
      79712,
      79740,
      79772,
      79800,
      79810,
      79812,
      79816,
      79824,
      79838,
      79846,
      79852,
      79894,
      79910,
      79916,
      79942,
      79948,
      79960,
      79982,
      79988,
      80006,
      80024,
      80048,
      80062,
      80078,
      80092,
      80098,
      80100,
      80104,
      80134,
      80140,
      80176,
      80190,
      80224,
      80252,
      80270,
      80284,
      80312,
      80328,
      80336,
      80350,
      80358,
      80364,
      80378,
      80390,
      80396,
      80408,
      80432,
      80446,
      80480,
      80508,
      80576,
      80632,
      80654,
      80668,
      80696,
      80752,
      80766,
      80776,
      80784,
      80798,
      80800,
      80828,
      80844,
      80856,
      80878,
      80882,
      80884,
      80914,
      80916,
      80930,
      80932,
      80936,
      80950,
      80962,
      80968,
      80976,
      80990,
      80998,
      81004,
      81026,
      81028,
      81040,
      81054,
      81056,
      81084,
      81094,
      81100,
      81112,
      81134,
      81154,
      81156,
      81160,
      81168,
      81182,
      81184,
      81212,
      81216,
      81272,
      81286,
      81292,
      81304,
      81328,
      81342,
      81358,
      81372,
      81380,
      81384,
      81398,
      81434,
      81454,
      81458,
      81460,
      81486,
      81500,
      81506,
      81508,
      81512,
      81526,
      81550,
      81564,
      81592,
      81602,
      81604,
      81608,
      81616,
      81630,
      81638,
      81644,
      81702,
      81708,
      81722,
      81734,
      81740,
      81752,
      81774,
      81778,
      81780,
      82050,
      82078,
      82080,
      82108,
      82180,
      82184,
      82192,
      82206,
      82208,
      82236,
      82240,
      82296,
      82316,
      82328,
      82352,
      82366,
      82402,
      82404,
      82408,
      82440,
      82448,
      82462,
      82464,
      82492,
      82496,
      82552,
      82672,
      82694,
      82700,
      82712,
      82736,
      82750,
      82784,
      82812,
      82830,
      82882,
      82884,
      82888,
      82896,
      82918,
      82924,
      82952,
      82960,
      82974,
      82976,
      83004,
      83008,
      83064,
      83184,
      83424,
      83468,
      83480,
      83504,
      83518,
      83552,
      83580,
      83648,
      83704,
      83740,
      83768,
      83824,
      83838,
      83842,
      83844,
      83848,
      83856,
      83872,
      83900,
      83910,
      83916,
      83928,
      83950,
      83984,
      84e3,
      84028,
      84032,
      84088,
      84208,
      84448,
      84928,
      85040,
      85054,
      85088,
      85116,
      85184,
      85240,
      85488,
      85560,
      85616,
      85630,
      85728,
      85756,
      85764,
      85768,
      85776,
      85790,
      85792,
      85820,
      85824,
      85880,
      85894,
      85900,
      85912,
      85936,
      85966,
      85980,
      86048,
      86080,
      86136,
      86256,
      86496,
      86976,
      88160,
      88188,
      88256,
      88312,
      88560,
      89056,
      89200,
      89214,
      89312,
      89340,
      89536,
      89592,
      89608,
      89616,
      89632,
      89664,
      89720,
      89840,
      89868,
      89880,
      89904,
      89952,
      89980,
      89998,
      90012,
      90040,
      90190,
      90204,
      90254,
      90268,
      90296,
      90306,
      90308,
      90312,
      90334,
      90382,
      90396,
      90424,
      90480,
      90494,
      90500,
      90504,
      90512,
      90526,
      90528,
      90556,
      90566,
      90572,
      90584,
      90610,
      90612,
      90638,
      90652,
      90680,
      90736,
      90750,
      90848,
      90876,
      90884,
      90888,
      90896,
      90910,
      90912,
      90940,
      90944,
      91e3,
      91014,
      91020,
      91032,
      91056,
      91070,
      91086,
      91100,
      91106,
      91108,
      91112,
      91126,
      91150,
      91164,
      91192,
      91248,
      91262,
      91360,
      91388,
      91584,
      91640,
      91664,
      91678,
      91680,
      91708,
      91712,
      91768,
      91888,
      91928,
      91952,
      91966,
      92e3,
      92028,
      92046,
      92060,
      92088,
      92098,
      92100,
      92104,
      92112,
      92126,
      92134,
      92140,
      92188,
      92216,
      92272,
      92384,
      92412,
      92608,
      92664,
      93168,
      93200,
      93214,
      93216,
      93244,
      93248,
      93304,
      93424,
      93664,
      93720,
      93744,
      93758,
      93792,
      93820,
      93888,
      93944,
      93980,
      94008,
      94064,
      94078,
      94084,
      94088,
      94096,
      94110,
      94112,
      94140,
      94150,
      94156,
      94168,
      94246,
      94252,
      94278,
      94284,
      94296,
      94318,
      94342,
      94348,
      94360,
      94384,
      94398,
      94414,
      94428,
      94440,
      94470,
      94476,
      94488,
      94512,
      94526,
      94560,
      94588,
      94606,
      94620,
      94648,
      94658,
      94660,
      94664,
      94672,
      94686,
      94694,
      94700,
      94714,
      94726,
      94732,
      94744,
      94768,
      94782,
      94816,
      94844,
      94912,
      94968,
      94990,
      95004,
      95032,
      95088,
      95102,
      95112,
      95120,
      95134,
      95136,
      95164,
      95180,
      95192,
      95214,
      95218,
      95220,
      95244,
      95256,
      95280,
      95294,
      95328,
      95356,
      95424,
      95480,
      95728,
      95758,
      95772,
      95800,
      95856,
      95870,
      95968,
      95996,
      96008,
      96016,
      96030,
      96032,
      96060,
      96064,
      96120,
      96152,
      96176,
      96190,
      96220,
      96226,
      96228,
      96232,
      96290,
      96292,
      96296,
      96310,
      96322,
      96324,
      96328,
      96336,
      96350,
      96358,
      96364,
      96386,
      96388,
      96392,
      96400,
      96414,
      96416,
      96444,
      96454,
      96460,
      96472,
      96494,
      96498,
      96500,
      96514,
      96516,
      96520,
      96528,
      96542,
      96544,
      96572,
      96576,
      96632,
      96646,
      96652,
      96664,
      96688,
      96702,
      96718,
      96732,
      96738,
      96740,
      96744,
      96758,
      96772,
      96776,
      96784,
      96798,
      96800,
      96828,
      96832,
      96888,
      97008,
      97030,
      97036,
      97048,
      97072,
      97086,
      97120,
      97148,
      97166,
      97180,
      97208,
      97220,
      97224,
      97232,
      97246,
      97254,
      97260,
      97326,
      97330,
      97332,
      97358,
      97372,
      97378,
      97380,
      97384,
      97398,
      97422,
      97436,
      97464,
      97474,
      97476,
      97480,
      97488,
      97502,
      97510,
      97516,
      97550,
      97564,
      97592,
      97648,
      97666,
      97668,
      97672,
      97680,
      97694,
      97696,
      97724,
      97734,
      97740,
      97752,
      97774,
      97830,
      97836,
      97850,
      97862,
      97868,
      97880,
      97902,
      97906,
      97908,
      97926,
      97932,
      97944,
      97968,
      97998,
      98012,
      98018,
      98020,
      98024,
      98038,
      98618,
      98674,
      98676,
      98838,
      98854,
      98874,
      98892,
      98904,
      98926,
      98930,
      98932,
      98968,
      99006,
      99042,
      99044,
      99048,
      99062,
      99166,
      99194,
      99246,
      99286,
      99350,
      99366,
      99372,
      99386,
      99398,
      99416,
      99438,
      99442,
      99444,
      99462,
      99504,
      99518,
      99534,
      99548,
      99554,
      99556,
      99560,
      99574,
      99590,
      99596,
      99608,
      99632,
      99646,
      99680,
      99708,
      99726,
      99740,
      99768,
      99778,
      99780,
      99784,
      99792,
      99806,
      99814,
      99820,
      99834,
      99858,
      99860,
      99874,
      99880,
      99894,
      99906,
      99920,
      99934,
      99962,
      99970,
      99972,
      99976,
      99984,
      99998,
      1e5,
      100028,
      100038,
      100044,
      100056,
      100078,
      100082,
      100084,
      100142,
      100174,
      100188,
      100246,
      100262,
      100268,
      100306,
      100308,
      100390,
      100396,
      100410,
      100422,
      100428,
      100440,
      100462,
      100466,
      100468,
      100486,
      100504,
      100528,
      100542,
      100558,
      100572,
      100578,
      100580,
      100584,
      100598,
      100620,
      100656,
      100670,
      100704,
      100732,
      100750,
      100792,
      100802,
      100808,
      100816,
      100830,
      100838,
      100844,
      100858,
      100888,
      100912,
      100926,
      100960,
      100988,
      101056,
      101112,
      101148,
      101176,
      101232,
      101246,
      101250,
      101252,
      101256,
      101264,
      101278,
      101280,
      101308,
      101318,
      101324,
      101336,
      101358,
      101362,
      101364,
      101410,
      101412,
      101416,
      101430,
      101442,
      101448,
      101456,
      101470,
      101478,
      101498,
      101506,
      101508,
      101520,
      101534,
      101536,
      101564,
      101580,
      101618,
      101620,
      101636,
      101640,
      101648,
      101662,
      101664,
      101692,
      101696,
      101752,
      101766,
      101784,
      101838,
      101858,
      101860,
      101864,
      101934,
      101938,
      101940,
      101966,
      101980,
      101986,
      101988,
      101992,
      102030,
      102044,
      102072,
      102082,
      102084,
      102088,
      102096,
      102138,
      102166,
      102182,
      102188,
      102214,
      102220,
      102232,
      102254,
      102282,
      102290,
      102292,
      102306,
      102308,
      102312,
      102326,
      102444,
      102458,
      102470,
      102476,
      102488,
      102514,
      102516,
      102534,
      102552,
      102576,
      102590,
      102606,
      102620,
      102626,
      102632,
      102646,
      102662,
      102668,
      102704,
      102718,
      102752,
      102780,
      102798,
      102812,
      102840,
      102850,
      102856,
      102864,
      102878,
      102886,
      102892,
      102906,
      102936,
      102974,
      103008,
      103036,
      103104,
      103160,
      103224,
      103280,
      103294,
      103298,
      103300,
      103312,
      103326,
      103328,
      103356,
      103366,
      103372,
      103384,
      103406,
      103410,
      103412,
      103472,
      103486,
      103520,
      103548,
      103616,
      103672,
      103920,
      103992,
      104048,
      104062,
      104160,
      104188,
      104194,
      104196,
      104200,
      104208,
      104224,
      104252,
      104256,
      104312,
      104326,
      104332,
      104344,
      104368,
      104382,
      104398,
      104412,
      104418,
      104420,
      104424,
      104482,
      104484,
      104514,
      104520,
      104528,
      104542,
      104550,
      104570,
      104578,
      104580,
      104592,
      104606,
      104608,
      104636,
      104652,
      104690,
      104692,
      104706,
      104712,
      104734,
      104736,
      104764,
      104768,
      104824,
      104838,
      104856,
      104910,
      104930,
      104932,
      104936,
      104968,
      104976,
      104990,
      104992,
      105020,
      105024,
      105080,
      105200,
      105240,
      105278,
      105312,
      105372,
      105410,
      105412,
      105416,
      105424,
      105446,
      105518,
      105524,
      105550,
      105564,
      105570,
      105572,
      105576,
      105614,
      105628,
      105656,
      105666,
      105672,
      105680,
      105702,
      105722,
      105742,
      105756,
      105784,
      105840,
      105854,
      105858,
      105860,
      105864,
      105872,
      105888,
      105932,
      105970,
      105972,
      106006,
      106022,
      106028,
      106054,
      106060,
      106072,
      106100,
      106118,
      106124,
      106136,
      106160,
      106174,
      106190,
      106210,
      106212,
      106216,
      106250,
      106258,
      106260,
      106274,
      106276,
      106280,
      106306,
      106308,
      106312,
      106320,
      106334,
      106348,
      106394,
      106414,
      106418,
      106420,
      106566,
      106572,
      106610,
      106612,
      106630,
      106636,
      106648,
      106672,
      106686,
      106722,
      106724,
      106728,
      106742,
      106758,
      106764,
      106776,
      106800,
      106814,
      106848,
      106876,
      106894,
      106908,
      106936,
      106946,
      106948,
      106952,
      106960,
      106974,
      106982,
      106988,
      107032,
      107056,
      107070,
      107104,
      107132,
      107200,
      107256,
      107292,
      107320,
      107376,
      107390,
      107394,
      107396,
      107400,
      107408,
      107422,
      107424,
      107452,
      107462,
      107468,
      107480,
      107502,
      107506,
      107508,
      107544,
      107568,
      107582,
      107616,
      107644,
      107712,
      107768,
      108016,
      108060,
      108088,
      108144,
      108158,
      108256,
      108284,
      108290,
      108292,
      108296,
      108304,
      108318,
      108320,
      108348,
      108352,
      108408,
      108422,
      108428,
      108440,
      108464,
      108478,
      108494,
      108508,
      108514,
      108516,
      108520,
      108592,
      108640,
      108668,
      108736,
      108792,
      109040,
      109536,
      109680,
      109694,
      109792,
      109820,
      110016,
      110072,
      110084,
      110088,
      110096,
      110112,
      110140,
      110144,
      110200,
      110320,
      110342,
      110348,
      110360,
      110384,
      110398,
      110432,
      110460,
      110478,
      110492,
      110520,
      110532,
      110536,
      110544,
      110558,
      110658,
      110686,
      110714,
      110722,
      110724,
      110728,
      110736,
      110750,
      110752,
      110780,
      110796,
      110834,
      110836,
      110850,
      110852,
      110856,
      110864,
      110878,
      110880,
      110908,
      110912,
      110968,
      110982,
      111e3,
      111054,
      111074,
      111076,
      111080,
      111108,
      111112,
      111120,
      111134,
      111136,
      111164,
      111168,
      111224,
      111344,
      111372,
      111422,
      111456,
      111516,
      111554,
      111556,
      111560,
      111568,
      111590,
      111632,
      111646,
      111648,
      111676,
      111680,
      111736,
      111856,
      112096,
      112152,
      112224,
      112252,
      112320,
      112440,
      112514,
      112516,
      112520,
      112528,
      112542,
      112544,
      112588,
      112686,
      112718,
      112732,
      112782,
      112796,
      112824,
      112834,
      112836,
      112840,
      112848,
      112870,
      112890,
      112910,
      112924,
      112952,
      113008,
      113022,
      113026,
      113028,
      113032,
      113040,
      113054,
      113056,
      113100,
      113138,
      113140,
      113166,
      113180,
      113208,
      113264,
      113278,
      113376,
      113404,
      113416,
      113424,
      113440,
      113468,
      113472,
      113560,
      113614,
      113634,
      113636,
      113640,
      113686,
      113702,
      113708,
      113734,
      113740,
      113752,
      113778,
      113780,
      113798,
      113804,
      113816,
      113840,
      113854,
      113870,
      113890,
      113892,
      113896,
      113926,
      113932,
      113944,
      113968,
      113982,
      114016,
      114044,
      114076,
      114114,
      114116,
      114120,
      114128,
      114150,
      114170,
      114194,
      114196,
      114210,
      114212,
      114216,
      114242,
      114244,
      114248,
      114256,
      114270,
      114278,
      114306,
      114308,
      114312,
      114320,
      114334,
      114336,
      114364,
      114380,
      114420,
      114458,
      114478,
      114482,
      114484,
      114510,
      114524,
      114530,
      114532,
      114536,
      114842,
      114866,
      114868,
      114970,
      114994,
      114996,
      115042,
      115044,
      115048,
      115062,
      115130,
      115226,
      115250,
      115252,
      115278,
      115292,
      115298,
      115300,
      115304,
      115318,
      115342,
      115394,
      115396,
      115400,
      115408,
      115422,
      115430,
      115436,
      115450,
      115478,
      115494,
      115514,
      115526,
      115532,
      115570,
      115572,
      115738,
      115758,
      115762,
      115764,
      115790,
      115804,
      115810,
      115812,
      115816,
      115830,
      115854,
      115868,
      115896,
      115906,
      115912,
      115920,
      115934,
      115942,
      115948,
      115962,
      115996,
      116024,
      116080,
      116094,
      116098,
      116100,
      116104,
      116112,
      116126,
      116128,
      116156,
      116166,
      116172,
      116184,
      116206,
      116210,
      116212,
      116246,
      116262,
      116268,
      116282,
      116294,
      116300,
      116312,
      116334,
      116338,
      116340,
      116358,
      116364,
      116376,
      116400,
      116414,
      116430,
      116444,
      116450,
      116452,
      116456,
      116498,
      116500,
      116514,
      116520,
      116534,
      116546,
      116548,
      116552,
      116560,
      116574,
      116582,
      116588,
      116602,
      116654,
      116694,
      116714,
      116762,
      116782,
      116786,
      116788,
      116814,
      116828,
      116834,
      116836,
      116840,
      116854,
      116878,
      116892,
      116920,
      116930,
      116936,
      116944,
      116958,
      116966,
      116972,
      116986,
      117006,
      117048,
      117104,
      117118,
      117122,
      117124,
      117136,
      117150,
      117152,
      117180,
      117190,
      117196,
      117208,
      117230,
      117234,
      117236,
      117304,
      117360,
      117374,
      117472,
      117500,
      117506,
      117508,
      117512,
      117520,
      117536,
      117564,
      117568,
      117624,
      117638,
      117644,
      117656,
      117680,
      117694,
      117710,
      117724,
      117730,
      117732,
      117736,
      117750,
      117782,
      117798,
      117804,
      117818,
      117830,
      117848,
      117874,
      117876,
      117894,
      117936,
      117950,
      117966,
      117986,
      117988,
      117992,
      118022,
      118028,
      118040,
      118064,
      118078,
      118112,
      118140,
      118172,
      118210,
      118212,
      118216,
      118224,
      118238,
      118246,
      118266,
      118306,
      118312,
      118338,
      118352,
      118366,
      118374,
      118394,
      118402,
      118404,
      118408,
      118416,
      118430,
      118432,
      118460,
      118476,
      118514,
      118516,
      118574,
      118578,
      118580,
      118606,
      118620,
      118626,
      118628,
      118632,
      118678,
      118694,
      118700,
      118730,
      118738,
      118740,
      118830,
      118834,
      118836,
      118862,
      118876,
      118882,
      118884,
      118888,
      118902,
      118926,
      118940,
      118968,
      118978,
      118980,
      118984,
      118992,
      119006,
      119014,
      119020,
      119034,
      119068,
      119096,
      119152,
      119166,
      119170,
      119172,
      119176,
      119184,
      119198,
      119200,
      119228,
      119238,
      119244,
      119256,
      119278,
      119282,
      119284,
      119324,
      119352,
      119408,
      119422,
      119520,
      119548,
      119554,
      119556,
      119560,
      119568,
      119582,
      119584,
      119612,
      119616,
      119672,
      119686,
      119692,
      119704,
      119728,
      119742,
      119758,
      119772,
      119778,
      119780,
      119784,
      119798,
      119920,
      119934,
      120032,
      120060,
      120256,
      120312,
      120324,
      120328,
      120336,
      120352,
      120384,
      120440,
      120560,
      120582,
      120588,
      120600,
      120624,
      120638,
      120672,
      120700,
      120718,
      120732,
      120760,
      120770,
      120772,
      120776,
      120784,
      120798,
      120806,
      120812,
      120870,
      120876,
      120890,
      120902,
      120908,
      120920,
      120946,
      120948,
      120966,
      120972,
      120984,
      121008,
      121022,
      121038,
      121058,
      121060,
      121064,
      121078,
      121100,
      121112,
      121136,
      121150,
      121184,
      121212,
      121244,
      121282,
      121284,
      121288,
      121296,
      121318,
      121338,
      121356,
      121368,
      121392,
      121406,
      121440,
      121468,
      121536,
      121592,
      121656,
      121730,
      121732,
      121736,
      121744,
      121758,
      121760,
      121804,
      121842,
      121844,
      121890,
      121922,
      121924,
      121928,
      121936,
      121950,
      121958,
      121978,
      121986,
      121988,
      121992,
      122e3,
      122014,
      122016,
      122044,
      122060,
      122098,
      122100,
      122116,
      122120,
      122128,
      122142,
      122144,
      122172,
      122176,
      122232,
      122246,
      122264,
      122318,
      122338,
      122340,
      122344,
      122414,
      122418,
      122420,
      122446,
      122460,
      122466,
      122468,
      122472,
      122510,
      122524,
      122552,
      122562,
      122564,
      122568,
      122576,
      122598,
      122618,
      122646,
      122662,
      122668,
      122694,
      122700,
      122712,
      122738,
      122740,
      122762,
      122770,
      122772,
      122786,
      122788,
      122792,
      123018,
      123026,
      123028,
      123042,
      123044,
      123048,
      123062,
      123098,
      123146,
      123154,
      123156,
      123170,
      123172,
      123176,
      123190,
      123202,
      123204,
      123208,
      123216,
      123238,
      123244,
      123258,
      123290,
      123314,
      123316,
      123402,
      123410,
      123412,
      123426,
      123428,
      123432,
      123446,
      123458,
      123464,
      123472,
      123486,
      123494,
      123500,
      123514,
      123522,
      123524,
      123528,
      123536,
      123552,
      123580,
      123590,
      123596,
      123608,
      123630,
      123634,
      123636,
      123674,
      123698,
      123700,
      123740,
      123746,
      123748,
      123752,
      123834,
      123914,
      123922,
      123924,
      123938,
      123944,
      123958,
      123970,
      123976,
      123984,
      123998,
      124006,
      124012,
      124026,
      124034,
      124036,
      124048,
      124062,
      124064,
      124092,
      124102,
      124108,
      124120,
      124142,
      124146,
      124148,
      124162,
      124164,
      124168,
      124176,
      124190,
      124192,
      124220,
      124224,
      124280,
      124294,
      124300,
      124312,
      124336,
      124350,
      124366,
      124380,
      124386,
      124388,
      124392,
      124406,
      124442,
      124462,
      124466,
      124468,
      124494,
      124508,
      124514,
      124520,
      124558,
      124572,
      124600,
      124610,
      124612,
      124616,
      124624,
      124646,
      124666,
      124694,
      124710,
      124716,
      124730,
      124742,
      124748,
      124760,
      124786,
      124788,
      124818,
      124820,
      124834,
      124836,
      124840,
      124854,
      124946,
      124948,
      124962,
      124964,
      124968,
      124982,
      124994,
      124996,
      125e3,
      125008,
      125022,
      125030,
      125036,
      125050,
      125058,
      125060,
      125064,
      125072,
      125086,
      125088,
      125116,
      125126,
      125132,
      125144,
      125166,
      125170,
      125172,
      125186,
      125188,
      125192,
      125200,
      125216,
      125244,
      125248,
      125304,
      125318,
      125324,
      125336,
      125360,
      125374,
      125390,
      125404,
      125410,
      125412,
      125416,
      125430,
      125444,
      125448,
      125456,
      125472,
      125504,
      125560,
      125680,
      125702,
      125708,
      125720,
      125744,
      125758,
      125792,
      125820,
      125838,
      125852,
      125880,
      125890,
      125892,
      125896,
      125904,
      125918,
      125926,
      125932,
      125978,
      125998,
      126002,
      126004,
      126030,
      126044,
      126050,
      126052,
      126056,
      126094,
      126108,
      126136,
      126146,
      126148,
      126152,
      126160,
      126182,
      126202,
      126222,
      126236,
      126264,
      126320,
      126334,
      126338,
      126340,
      126344,
      126352,
      126366,
      126368,
      126412,
      126450,
      126452,
      126486,
      126502,
      126508,
      126522,
      126534,
      126540,
      126552,
      126574,
      126578,
      126580,
      126598,
      126604,
      126616,
      126640,
      126654,
      126670,
      126684,
      126690,
      126692,
      126696,
      126738,
      126754,
      126756,
      126760,
      126774,
      126786,
      126788,
      126792,
      126800,
      126814,
      126822,
      126828,
      126842,
      126894,
      126898,
      126900,
      126934,
      127126,
      127142,
      127148,
      127162,
      127178,
      127186,
      127188,
      127254,
      127270,
      127276,
      127290,
      127302,
      127308,
      127320,
      127342,
      127346,
      127348,
      127370,
      127378,
      127380,
      127394,
      127396,
      127400,
      127450,
      127510,
      127526,
      127532,
      127546,
      127558,
      127576,
      127598,
      127602,
      127604,
      127622,
      127628,
      127640,
      127664,
      127678,
      127694,
      127708,
      127714,
      127716,
      127720,
      127734,
      127754,
      127762,
      127764,
      127778,
      127784,
      127810,
      127812,
      127816,
      127824,
      127838,
      127846,
      127866,
      127898,
      127918,
      127922,
      127924,
      128022,
      128038,
      128044,
      128058,
      128070,
      128076,
      128088,
      128110,
      128114,
      128116,
      128134,
      128140,
      128152,
      128176,
      128190,
      128206,
      128220,
      128226,
      128228,
      128232,
      128246,
      128262,
      128268,
      128280,
      128304,
      128318,
      128352,
      128380,
      128398,
      128412,
      128440,
      128450,
      128452,
      128456,
      128464,
      128478,
      128486,
      128492,
      128506,
      128522,
      128530,
      128532,
      128546,
      128548,
      128552,
      128566,
      128578,
      128580,
      128584,
      128592,
      128606,
      128614,
      128634,
      128642,
      128644,
      128648,
      128656,
      128670,
      128672,
      128700,
      128716,
      128754,
      128756,
      128794,
      128814,
      128818,
      128820,
      128846,
      128860,
      128866,
      128868,
      128872,
      128886,
      128918,
      128934,
      128940,
      128954,
      128978,
      128980,
      129178,
      129198,
      129202,
      129204,
      129238,
      129258,
      129306,
      129326,
      129330,
      129332,
      129358,
      129372,
      129378,
      129380,
      129384,
      129398,
      129430,
      129446,
      129452,
      129466,
      129482,
      129490,
      129492,
      129562,
      129582,
      129586,
      129588,
      129614,
      129628,
      129634,
      129636,
      129640,
      129654,
      129678,
      129692,
      129720,
      129730,
      129732,
      129736,
      129744,
      129758,
      129766,
      129772,
      129814,
      129830,
      129836,
      129850,
      129862,
      129868,
      129880,
      129902,
      129906,
      129908,
      129930,
      129938,
      129940,
      129954,
      129956,
      129960,
      129974,
      130010
    ]), r.CODEWORD_TABLE = Int32Array.from([
      2627,
      1819,
      2622,
      2621,
      1813,
      1812,
      2729,
      2724,
      2723,
      2779,
      2774,
      2773,
      902,
      896,
      908,
      868,
      865,
      861,
      859,
      2511,
      873,
      871,
      1780,
      835,
      2493,
      825,
      2491,
      842,
      837,
      844,
      1764,
      1762,
      811,
      810,
      809,
      2483,
      807,
      2482,
      806,
      2480,
      815,
      814,
      813,
      812,
      2484,
      817,
      816,
      1745,
      1744,
      1742,
      1746,
      2655,
      2637,
      2635,
      2626,
      2625,
      2623,
      2628,
      1820,
      2752,
      2739,
      2737,
      2728,
      2727,
      2725,
      2730,
      2785,
      2783,
      2778,
      2777,
      2775,
      2780,
      787,
      781,
      747,
      739,
      736,
      2413,
      754,
      752,
      1719,
      692,
      689,
      681,
      2371,
      678,
      2369,
      700,
      697,
      694,
      703,
      1688,
      1686,
      642,
      638,
      2343,
      631,
      2341,
      627,
      2338,
      651,
      646,
      643,
      2345,
      654,
      652,
      1652,
      1650,
      1647,
      1654,
      601,
      599,
      2322,
      596,
      2321,
      594,
      2319,
      2317,
      611,
      610,
      608,
      606,
      2324,
      603,
      2323,
      615,
      614,
      612,
      1617,
      1616,
      1614,
      1612,
      616,
      1619,
      1618,
      2575,
      2538,
      2536,
      905,
      901,
      898,
      909,
      2509,
      2507,
      2504,
      870,
      867,
      864,
      860,
      2512,
      875,
      872,
      1781,
      2490,
      2489,
      2487,
      2485,
      1748,
      836,
      834,
      832,
      830,
      2494,
      827,
      2492,
      843,
      841,
      839,
      845,
      1765,
      1763,
      2701,
      2676,
      2674,
      2653,
      2648,
      2656,
      2634,
      2633,
      2631,
      2629,
      1821,
      2638,
      2636,
      2770,
      2763,
      2761,
      2750,
      2745,
      2753,
      2736,
      2735,
      2733,
      2731,
      1848,
      2740,
      2738,
      2786,
      2784,
      591,
      588,
      576,
      569,
      566,
      2296,
      1590,
      537,
      534,
      526,
      2276,
      522,
      2274,
      545,
      542,
      539,
      548,
      1572,
      1570,
      481,
      2245,
      466,
      2242,
      462,
      2239,
      492,
      485,
      482,
      2249,
      496,
      494,
      1534,
      1531,
      1528,
      1538,
      413,
      2196,
      406,
      2191,
      2188,
      425,
      419,
      2202,
      415,
      2199,
      432,
      430,
      427,
      1472,
      1467,
      1464,
      433,
      1476,
      1474,
      368,
      367,
      2160,
      365,
      2159,
      362,
      2157,
      2155,
      2152,
      378,
      377,
      375,
      2166,
      372,
      2165,
      369,
      2162,
      383,
      381,
      379,
      2168,
      1419,
      1418,
      1416,
      1414,
      385,
      1411,
      384,
      1423,
      1422,
      1420,
      1424,
      2461,
      802,
      2441,
      2439,
      790,
      786,
      783,
      794,
      2409,
      2406,
      2403,
      750,
      742,
      738,
      2414,
      756,
      753,
      1720,
      2367,
      2365,
      2362,
      2359,
      1663,
      693,
      691,
      684,
      2373,
      680,
      2370,
      702,
      699,
      696,
      704,
      1690,
      1687,
      2337,
      2336,
      2334,
      2332,
      1624,
      2329,
      1622,
      640,
      637,
      2344,
      634,
      2342,
      630,
      2340,
      650,
      648,
      645,
      2346,
      655,
      653,
      1653,
      1651,
      1649,
      1655,
      2612,
      2597,
      2595,
      2571,
      2568,
      2565,
      2576,
      2534,
      2529,
      2526,
      1787,
      2540,
      2537,
      907,
      904,
      900,
      910,
      2503,
      2502,
      2500,
      2498,
      1768,
      2495,
      1767,
      2510,
      2508,
      2506,
      869,
      866,
      863,
      2513,
      876,
      874,
      1782,
      2720,
      2713,
      2711,
      2697,
      2694,
      2691,
      2702,
      2672,
      2670,
      2664,
      1828,
      2678,
      2675,
      2647,
      2646,
      2644,
      2642,
      1823,
      2639,
      1822,
      2654,
      2652,
      2650,
      2657,
      2771,
      1855,
      2765,
      2762,
      1850,
      1849,
      2751,
      2749,
      2747,
      2754,
      353,
      2148,
      344,
      342,
      336,
      2142,
      332,
      2140,
      345,
      1375,
      1373,
      306,
      2130,
      299,
      2128,
      295,
      2125,
      319,
      314,
      311,
      2132,
      1354,
      1352,
      1349,
      1356,
      262,
      257,
      2101,
      253,
      2096,
      2093,
      274,
      273,
      267,
      2107,
      263,
      2104,
      280,
      278,
      275,
      1316,
      1311,
      1308,
      1320,
      1318,
      2052,
      202,
      2050,
      2044,
      2040,
      219,
      2063,
      212,
      2060,
      208,
      2055,
      224,
      221,
      2066,
      1260,
      1258,
      1252,
      231,
      1248,
      229,
      1266,
      1264,
      1261,
      1268,
      155,
      1998,
      153,
      1996,
      1994,
      1991,
      1988,
      165,
      164,
      2007,
      162,
      2006,
      159,
      2003,
      2e3,
      172,
      171,
      169,
      2012,
      166,
      2010,
      1186,
      1184,
      1182,
      1179,
      175,
      1176,
      173,
      1192,
      1191,
      1189,
      1187,
      176,
      1194,
      1193,
      2313,
      2307,
      2305,
      592,
      589,
      2294,
      2292,
      2289,
      578,
      572,
      568,
      2297,
      580,
      1591,
      2272,
      2267,
      2264,
      1547,
      538,
      536,
      529,
      2278,
      525,
      2275,
      547,
      544,
      541,
      1574,
      1571,
      2237,
      2235,
      2229,
      1493,
      2225,
      1489,
      478,
      2247,
      470,
      2244,
      465,
      2241,
      493,
      488,
      484,
      2250,
      498,
      495,
      1536,
      1533,
      1530,
      1539,
      2187,
      2186,
      2184,
      2182,
      1432,
      2179,
      1430,
      2176,
      1427,
      414,
      412,
      2197,
      409,
      2195,
      405,
      2193,
      2190,
      426,
      424,
      421,
      2203,
      418,
      2201,
      431,
      429,
      1473,
      1471,
      1469,
      1466,
      434,
      1477,
      1475,
      2478,
      2472,
      2470,
      2459,
      2457,
      2454,
      2462,
      803,
      2437,
      2432,
      2429,
      1726,
      2443,
      2440,
      792,
      789,
      785,
      2401,
      2399,
      2393,
      1702,
      2389,
      1699,
      2411,
      2408,
      2405,
      745,
      741,
      2415,
      758,
      755,
      1721,
      2358,
      2357,
      2355,
      2353,
      1661,
      2350,
      1660,
      2347,
      1657,
      2368,
      2366,
      2364,
      2361,
      1666,
      690,
      687,
      2374,
      683,
      2372,
      701,
      698,
      705,
      1691,
      1689,
      2619,
      2617,
      2610,
      2608,
      2605,
      2613,
      2593,
      2588,
      2585,
      1803,
      2599,
      2596,
      2563,
      2561,
      2555,
      1797,
      2551,
      1795,
      2573,
      2570,
      2567,
      2577,
      2525,
      2524,
      2522,
      2520,
      1786,
      2517,
      1785,
      2514,
      1783,
      2535,
      2533,
      2531,
      2528,
      1788,
      2541,
      2539,
      906,
      903,
      911,
      2721,
      1844,
      2715,
      2712,
      1838,
      1836,
      2699,
      2696,
      2693,
      2703,
      1827,
      1826,
      1824,
      2673,
      2671,
      2669,
      2666,
      1829,
      2679,
      2677,
      1858,
      1857,
      2772,
      1854,
      1853,
      1851,
      1856,
      2766,
      2764,
      143,
      1987,
      139,
      1986,
      135,
      133,
      131,
      1984,
      128,
      1983,
      125,
      1981,
      138,
      137,
      136,
      1985,
      1133,
      1132,
      1130,
      112,
      110,
      1974,
      107,
      1973,
      104,
      1971,
      1969,
      122,
      121,
      119,
      117,
      1977,
      114,
      1976,
      124,
      1115,
      1114,
      1112,
      1110,
      1117,
      1116,
      84,
      83,
      1953,
      81,
      1952,
      78,
      1950,
      1948,
      1945,
      94,
      93,
      91,
      1959,
      88,
      1958,
      85,
      1955,
      99,
      97,
      95,
      1961,
      1086,
      1085,
      1083,
      1081,
      1078,
      100,
      1090,
      1089,
      1087,
      1091,
      49,
      47,
      1917,
      44,
      1915,
      1913,
      1910,
      1907,
      59,
      1926,
      56,
      1925,
      53,
      1922,
      1919,
      66,
      64,
      1931,
      61,
      1929,
      1042,
      1040,
      1038,
      71,
      1035,
      70,
      1032,
      68,
      1048,
      1047,
      1045,
      1043,
      1050,
      1049,
      12,
      10,
      1869,
      1867,
      1864,
      1861,
      21,
      1880,
      19,
      1877,
      1874,
      1871,
      28,
      1888,
      25,
      1886,
      22,
      1883,
      982,
      980,
      977,
      974,
      32,
      30,
      991,
      989,
      987,
      984,
      34,
      995,
      994,
      992,
      2151,
      2150,
      2147,
      2146,
      2144,
      356,
      355,
      354,
      2149,
      2139,
      2138,
      2136,
      2134,
      1359,
      343,
      341,
      338,
      2143,
      335,
      2141,
      348,
      347,
      346,
      1376,
      1374,
      2124,
      2123,
      2121,
      2119,
      1326,
      2116,
      1324,
      310,
      308,
      305,
      2131,
      302,
      2129,
      298,
      2127,
      320,
      318,
      316,
      313,
      2133,
      322,
      321,
      1355,
      1353,
      1351,
      1357,
      2092,
      2091,
      2089,
      2087,
      1276,
      2084,
      1274,
      2081,
      1271,
      259,
      2102,
      256,
      2100,
      252,
      2098,
      2095,
      272,
      269,
      2108,
      266,
      2106,
      281,
      279,
      277,
      1317,
      1315,
      1313,
      1310,
      282,
      1321,
      1319,
      2039,
      2037,
      2035,
      2032,
      1203,
      2029,
      1200,
      1197,
      207,
      2053,
      205,
      2051,
      201,
      2049,
      2046,
      2043,
      220,
      218,
      2064,
      215,
      2062,
      211,
      2059,
      228,
      226,
      223,
      2069,
      1259,
      1257,
      1254,
      232,
      1251,
      230,
      1267,
      1265,
      1263,
      2316,
      2315,
      2312,
      2311,
      2309,
      2314,
      2304,
      2303,
      2301,
      2299,
      1593,
      2308,
      2306,
      590,
      2288,
      2287,
      2285,
      2283,
      1578,
      2280,
      1577,
      2295,
      2293,
      2291,
      579,
      577,
      574,
      571,
      2298,
      582,
      581,
      1592,
      2263,
      2262,
      2260,
      2258,
      1545,
      2255,
      1544,
      2252,
      1541,
      2273,
      2271,
      2269,
      2266,
      1550,
      535,
      532,
      2279,
      528,
      2277,
      546,
      543,
      549,
      1575,
      1573,
      2224,
      2222,
      2220,
      1486,
      2217,
      1485,
      2214,
      1482,
      1479,
      2238,
      2236,
      2234,
      2231,
      1496,
      2228,
      1492,
      480,
      477,
      2248,
      473,
      2246,
      469,
      2243,
      490,
      487,
      2251,
      497,
      1537,
      1535,
      1532,
      2477,
      2476,
      2474,
      2479,
      2469,
      2468,
      2466,
      2464,
      1730,
      2473,
      2471,
      2453,
      2452,
      2450,
      2448,
      1729,
      2445,
      1728,
      2460,
      2458,
      2456,
      2463,
      805,
      804,
      2428,
      2427,
      2425,
      2423,
      1725,
      2420,
      1724,
      2417,
      1722,
      2438,
      2436,
      2434,
      2431,
      1727,
      2444,
      2442,
      793,
      791,
      788,
      795,
      2388,
      2386,
      2384,
      1697,
      2381,
      1696,
      2378,
      1694,
      1692,
      2402,
      2400,
      2398,
      2395,
      1703,
      2392,
      1701,
      2412,
      2410,
      2407,
      751,
      748,
      744,
      2416,
      759,
      757,
      1807,
      2620,
      2618,
      1806,
      1805,
      2611,
      2609,
      2607,
      2614,
      1802,
      1801,
      1799,
      2594,
      2592,
      2590,
      2587,
      1804,
      2600,
      2598,
      1794,
      1793,
      1791,
      1789,
      2564,
      2562,
      2560,
      2557,
      1798,
      2554,
      1796,
      2574,
      2572,
      2569,
      2578,
      1847,
      1846,
      2722,
      1843,
      1842,
      1840,
      1845,
      2716,
      2714,
      1835,
      1834,
      1832,
      1830,
      1839,
      1837,
      2700,
      2698,
      2695,
      2704,
      1817,
      1811,
      1810,
      897,
      862,
      1777,
      829,
      826,
      838,
      1760,
      1758,
      808,
      2481,
      1741,
      1740,
      1738,
      1743,
      2624,
      1818,
      2726,
      2776,
      782,
      740,
      737,
      1715,
      686,
      679,
      695,
      1682,
      1680,
      639,
      628,
      2339,
      647,
      644,
      1645,
      1643,
      1640,
      1648,
      602,
      600,
      597,
      595,
      2320,
      593,
      2318,
      609,
      607,
      604,
      1611,
      1610,
      1608,
      1606,
      613,
      1615,
      1613,
      2328,
      926,
      924,
      892,
      886,
      899,
      857,
      850,
      2505,
      1778,
      824,
      823,
      821,
      819,
      2488,
      818,
      2486,
      833,
      831,
      828,
      840,
      1761,
      1759,
      2649,
      2632,
      2630,
      2746,
      2734,
      2732,
      2782,
      2781,
      570,
      567,
      1587,
      531,
      527,
      523,
      540,
      1566,
      1564,
      476,
      467,
      463,
      2240,
      486,
      483,
      1524,
      1521,
      1518,
      1529,
      411,
      403,
      2192,
      399,
      2189,
      423,
      416,
      1462,
      1457,
      1454,
      428,
      1468,
      1465,
      2210,
      366,
      363,
      2158,
      360,
      2156,
      357,
      2153,
      376,
      373,
      370,
      2163,
      1410,
      1409,
      1407,
      1405,
      382,
      1402,
      380,
      1417,
      1415,
      1412,
      1421,
      2175,
      2174,
      777,
      774,
      771,
      784,
      732,
      725,
      722,
      2404,
      743,
      1716,
      676,
      674,
      668,
      2363,
      665,
      2360,
      685,
      1684,
      1681,
      626,
      624,
      622,
      2335,
      620,
      2333,
      617,
      2330,
      641,
      635,
      649,
      1646,
      1644,
      1642,
      2566,
      928,
      925,
      2530,
      2527,
      894,
      891,
      888,
      2501,
      2499,
      2496,
      858,
      856,
      854,
      851,
      1779,
      2692,
      2668,
      2665,
      2645,
      2643,
      2640,
      2651,
      2768,
      2759,
      2757,
      2744,
      2743,
      2741,
      2748,
      352,
      1382,
      340,
      337,
      333,
      1371,
      1369,
      307,
      300,
      296,
      2126,
      315,
      312,
      1347,
      1342,
      1350,
      261,
      258,
      250,
      2097,
      246,
      2094,
      271,
      268,
      264,
      1306,
      1301,
      1298,
      276,
      1312,
      1309,
      2115,
      203,
      2048,
      195,
      2045,
      191,
      2041,
      213,
      209,
      2056,
      1246,
      1244,
      1238,
      225,
      1234,
      222,
      1256,
      1253,
      1249,
      1262,
      2080,
      2079,
      154,
      1997,
      150,
      1995,
      147,
      1992,
      1989,
      163,
      160,
      2004,
      156,
      2001,
      1175,
      1174,
      1172,
      1170,
      1167,
      170,
      1164,
      167,
      1185,
      1183,
      1180,
      1177,
      174,
      1190,
      1188,
      2025,
      2024,
      2022,
      587,
      586,
      564,
      559,
      556,
      2290,
      573,
      1588,
      520,
      518,
      512,
      2268,
      508,
      2265,
      530,
      1568,
      1565,
      461,
      457,
      2233,
      450,
      2230,
      446,
      2226,
      479,
      471,
      489,
      1526,
      1523,
      1520,
      397,
      395,
      2185,
      392,
      2183,
      389,
      2180,
      2177,
      410,
      2194,
      402,
      422,
      1463,
      1461,
      1459,
      1456,
      1470,
      2455,
      799,
      2433,
      2430,
      779,
      776,
      773,
      2397,
      2394,
      2390,
      734,
      728,
      724,
      746,
      1717,
      2356,
      2354,
      2351,
      2348,
      1658,
      677,
      675,
      673,
      670,
      667,
      688,
      1685,
      1683,
      2606,
      2589,
      2586,
      2559,
      2556,
      2552,
      927,
      2523,
      2521,
      2518,
      2515,
      1784,
      2532,
      895,
      893,
      890,
      2718,
      2709,
      2707,
      2689,
      2687,
      2684,
      2663,
      2662,
      2660,
      2658,
      1825,
      2667,
      2769,
      1852,
      2760,
      2758,
      142,
      141,
      1139,
      1138,
      134,
      132,
      129,
      126,
      1982,
      1129,
      1128,
      1126,
      1131,
      113,
      111,
      108,
      105,
      1972,
      101,
      1970,
      120,
      118,
      115,
      1109,
      1108,
      1106,
      1104,
      123,
      1113,
      1111,
      82,
      79,
      1951,
      75,
      1949,
      72,
      1946,
      92,
      89,
      86,
      1956,
      1077,
      1076,
      1074,
      1072,
      98,
      1069,
      96,
      1084,
      1082,
      1079,
      1088,
      1968,
      1967,
      48,
      45,
      1916,
      42,
      1914,
      39,
      1911,
      1908,
      60,
      57,
      54,
      1923,
      50,
      1920,
      1031,
      1030,
      1028,
      1026,
      67,
      1023,
      65,
      1020,
      62,
      1041,
      1039,
      1036,
      1033,
      69,
      1046,
      1044,
      1944,
      1943,
      1941,
      11,
      9,
      1868,
      7,
      1865,
      1862,
      1859,
      20,
      1878,
      16,
      1875,
      13,
      1872,
      970,
      968,
      966,
      963,
      29,
      960,
      26,
      23,
      983,
      981,
      978,
      975,
      33,
      971,
      31,
      990,
      988,
      985,
      1906,
      1904,
      1902,
      993,
      351,
      2145,
      1383,
      331,
      330,
      328,
      326,
      2137,
      323,
      2135,
      339,
      1372,
      1370,
      294,
      293,
      291,
      289,
      2122,
      286,
      2120,
      283,
      2117,
      309,
      303,
      317,
      1348,
      1346,
      1344,
      245,
      244,
      242,
      2090,
      239,
      2088,
      236,
      2085,
      2082,
      260,
      2099,
      249,
      270,
      1307,
      1305,
      1303,
      1300,
      1314,
      189,
      2038,
      186,
      2036,
      183,
      2033,
      2030,
      2026,
      206,
      198,
      2047,
      194,
      216,
      1247,
      1245,
      1243,
      1240,
      227,
      1237,
      1255,
      2310,
      2302,
      2300,
      2286,
      2284,
      2281,
      565,
      563,
      561,
      558,
      575,
      1589,
      2261,
      2259,
      2256,
      2253,
      1542,
      521,
      519,
      517,
      514,
      2270,
      511,
      533,
      1569,
      1567,
      2223,
      2221,
      2218,
      2215,
      1483,
      2211,
      1480,
      459,
      456,
      453,
      2232,
      449,
      474,
      491,
      1527,
      1525,
      1522,
      2475,
      2467,
      2465,
      2451,
      2449,
      2446,
      801,
      800,
      2426,
      2424,
      2421,
      2418,
      1723,
      2435,
      780,
      778,
      775,
      2387,
      2385,
      2382,
      2379,
      1695,
      2375,
      1693,
      2396,
      735,
      733,
      730,
      727,
      749,
      1718,
      2616,
      2615,
      2604,
      2603,
      2601,
      2584,
      2583,
      2581,
      2579,
      1800,
      2591,
      2550,
      2549,
      2547,
      2545,
      1792,
      2542,
      1790,
      2558,
      929,
      2719,
      1841,
      2710,
      2708,
      1833,
      1831,
      2690,
      2688,
      2686,
      1815,
      1809,
      1808,
      1774,
      1756,
      1754,
      1737,
      1736,
      1734,
      1739,
      1816,
      1711,
      1676,
      1674,
      633,
      629,
      1638,
      1636,
      1633,
      1641,
      598,
      1605,
      1604,
      1602,
      1600,
      605,
      1609,
      1607,
      2327,
      887,
      853,
      1775,
      822,
      820,
      1757,
      1755,
      1584,
      524,
      1560,
      1558,
      468,
      464,
      1514,
      1511,
      1508,
      1519,
      408,
      404,
      400,
      1452,
      1447,
      1444,
      417,
      1458,
      1455,
      2208,
      364,
      361,
      358,
      2154,
      1401,
      1400,
      1398,
      1396,
      374,
      1393,
      371,
      1408,
      1406,
      1403,
      1413,
      2173,
      2172,
      772,
      726,
      723,
      1712,
      672,
      669,
      666,
      682,
      1678,
      1675,
      625,
      623,
      621,
      618,
      2331,
      636,
      632,
      1639,
      1637,
      1635,
      920,
      918,
      884,
      880,
      889,
      849,
      848,
      847,
      846,
      2497,
      855,
      852,
      1776,
      2641,
      2742,
      2787,
      1380,
      334,
      1367,
      1365,
      301,
      297,
      1340,
      1338,
      1335,
      1343,
      255,
      251,
      247,
      1296,
      1291,
      1288,
      265,
      1302,
      1299,
      2113,
      204,
      196,
      192,
      2042,
      1232,
      1230,
      1224,
      214,
      1220,
      210,
      1242,
      1239,
      1235,
      1250,
      2077,
      2075,
      151,
      148,
      1993,
      144,
      1990,
      1163,
      1162,
      1160,
      1158,
      1155,
      161,
      1152,
      157,
      1173,
      1171,
      1168,
      1165,
      168,
      1181,
      1178,
      2021,
      2020,
      2018,
      2023,
      585,
      560,
      557,
      1585,
      516,
      509,
      1562,
      1559,
      458,
      447,
      2227,
      472,
      1516,
      1513,
      1510,
      398,
      396,
      393,
      390,
      2181,
      386,
      2178,
      407,
      1453,
      1451,
      1449,
      1446,
      420,
      1460,
      2209,
      769,
      764,
      720,
      712,
      2391,
      729,
      1713,
      664,
      663,
      661,
      659,
      2352,
      656,
      2349,
      671,
      1679,
      1677,
      2553,
      922,
      919,
      2519,
      2516,
      885,
      883,
      881,
      2685,
      2661,
      2659,
      2767,
      2756,
      2755,
      140,
      1137,
      1136,
      130,
      127,
      1125,
      1124,
      1122,
      1127,
      109,
      106,
      102,
      1103,
      1102,
      1100,
      1098,
      116,
      1107,
      1105,
      1980,
      80,
      76,
      73,
      1947,
      1068,
      1067,
      1065,
      1063,
      90,
      1060,
      87,
      1075,
      1073,
      1070,
      1080,
      1966,
      1965,
      46,
      43,
      40,
      1912,
      36,
      1909,
      1019,
      1018,
      1016,
      1014,
      58,
      1011,
      55,
      1008,
      51,
      1029,
      1027,
      1024,
      1021,
      63,
      1037,
      1034,
      1940,
      1939,
      1937,
      1942,
      8,
      1866,
      4,
      1863,
      1,
      1860,
      956,
      954,
      952,
      949,
      946,
      17,
      14,
      969,
      967,
      964,
      961,
      27,
      957,
      24,
      979,
      976,
      972,
      1901,
      1900,
      1898,
      1896,
      986,
      1905,
      1903,
      350,
      349,
      1381,
      329,
      327,
      324,
      1368,
      1366,
      292,
      290,
      287,
      284,
      2118,
      304,
      1341,
      1339,
      1337,
      1345,
      243,
      240,
      237,
      2086,
      233,
      2083,
      254,
      1297,
      1295,
      1293,
      1290,
      1304,
      2114,
      190,
      187,
      184,
      2034,
      180,
      2031,
      177,
      2027,
      199,
      1233,
      1231,
      1229,
      1226,
      217,
      1223,
      1241,
      2078,
      2076,
      584,
      555,
      554,
      552,
      550,
      2282,
      562,
      1586,
      507,
      506,
      504,
      502,
      2257,
      499,
      2254,
      515,
      1563,
      1561,
      445,
      443,
      441,
      2219,
      438,
      2216,
      435,
      2212,
      460,
      454,
      475,
      1517,
      1515,
      1512,
      2447,
      798,
      797,
      2422,
      2419,
      770,
      768,
      766,
      2383,
      2380,
      2376,
      721,
      719,
      717,
      714,
      731,
      1714,
      2602,
      2582,
      2580,
      2548,
      2546,
      2543,
      923,
      921,
      2717,
      2706,
      2705,
      2683,
      2682,
      2680,
      1771,
      1752,
      1750,
      1733,
      1732,
      1731,
      1735,
      1814,
      1707,
      1670,
      1668,
      1631,
      1629,
      1626,
      1634,
      1599,
      1598,
      1596,
      1594,
      1603,
      1601,
      2326,
      1772,
      1753,
      1751,
      1581,
      1554,
      1552,
      1504,
      1501,
      1498,
      1509,
      1442,
      1437,
      1434,
      401,
      1448,
      1445,
      2206,
      1392,
      1391,
      1389,
      1387,
      1384,
      359,
      1399,
      1397,
      1394,
      1404,
      2171,
      2170,
      1708,
      1672,
      1669,
      619,
      1632,
      1630,
      1628,
      1773,
      1378,
      1363,
      1361,
      1333,
      1328,
      1336,
      1286,
      1281,
      1278,
      248,
      1292,
      1289,
      2111,
      1218,
      1216,
      1210,
      197,
      1206,
      193,
      1228,
      1225,
      1221,
      1236,
      2073,
      2071,
      1151,
      1150,
      1148,
      1146,
      152,
      1143,
      149,
      1140,
      145,
      1161,
      1159,
      1156,
      1153,
      158,
      1169,
      1166,
      2017,
      2016,
      2014,
      2019,
      1582,
      510,
      1556,
      1553,
      452,
      448,
      1506,
      1500,
      394,
      391,
      387,
      1443,
      1441,
      1439,
      1436,
      1450,
      2207,
      765,
      716,
      713,
      1709,
      662,
      660,
      657,
      1673,
      1671,
      916,
      914,
      879,
      878,
      877,
      882,
      1135,
      1134,
      1121,
      1120,
      1118,
      1123,
      1097,
      1096,
      1094,
      1092,
      103,
      1101,
      1099,
      1979,
      1059,
      1058,
      1056,
      1054,
      77,
      1051,
      74,
      1066,
      1064,
      1061,
      1071,
      1964,
      1963,
      1007,
      1006,
      1004,
      1002,
      999,
      41,
      996,
      37,
      1017,
      1015,
      1012,
      1009,
      52,
      1025,
      1022,
      1936,
      1935,
      1933,
      1938,
      942,
      940,
      938,
      935,
      932,
      5,
      2,
      955,
      953,
      950,
      947,
      18,
      943,
      15,
      965,
      962,
      958,
      1895,
      1894,
      1892,
      1890,
      973,
      1899,
      1897,
      1379,
      325,
      1364,
      1362,
      288,
      285,
      1334,
      1332,
      1330,
      241,
      238,
      234,
      1287,
      1285,
      1283,
      1280,
      1294,
      2112,
      188,
      185,
      181,
      178,
      2028,
      1219,
      1217,
      1215,
      1212,
      200,
      1209,
      1227,
      2074,
      2072,
      583,
      553,
      551,
      1583,
      505,
      503,
      500,
      513,
      1557,
      1555,
      444,
      442,
      439,
      436,
      2213,
      455,
      451,
      1507,
      1505,
      1502,
      796,
      763,
      762,
      760,
      767,
      711,
      710,
      708,
      706,
      2377,
      718,
      715,
      1710,
      2544,
      917,
      915,
      2681,
      1627,
      1597,
      1595,
      2325,
      1769,
      1749,
      1747,
      1499,
      1438,
      1435,
      2204,
      1390,
      1388,
      1385,
      1395,
      2169,
      2167,
      1704,
      1665,
      1662,
      1625,
      1623,
      1620,
      1770,
      1329,
      1282,
      1279,
      2109,
      1214,
      1207,
      1222,
      2068,
      2065,
      1149,
      1147,
      1144,
      1141,
      146,
      1157,
      1154,
      2013,
      2011,
      2008,
      2015,
      1579,
      1549,
      1546,
      1495,
      1487,
      1433,
      1431,
      1428,
      1425,
      388,
      1440,
      2205,
      1705,
      658,
      1667,
      1664,
      1119,
      1095,
      1093,
      1978,
      1057,
      1055,
      1052,
      1062,
      1962,
      1960,
      1005,
      1003,
      1e3,
      997,
      38,
      1013,
      1010,
      1932,
      1930,
      1927,
      1934,
      941,
      939,
      936,
      933,
      6,
      930,
      3,
      951,
      948,
      944,
      1889,
      1887,
      1884,
      1881,
      959,
      1893,
      1891,
      35,
      1377,
      1360,
      1358,
      1327,
      1325,
      1322,
      1331,
      1277,
      1275,
      1272,
      1269,
      235,
      1284,
      2110,
      1205,
      1204,
      1201,
      1198,
      182,
      1195,
      179,
      1213,
      2070,
      2067,
      1580,
      501,
      1551,
      1548,
      440,
      437,
      1497,
      1494,
      1490,
      1503,
      761,
      709,
      707,
      1706,
      913,
      912,
      2198,
      1386,
      2164,
      2161,
      1621,
      1766,
      2103,
      1208,
      2058,
      2054,
      1145,
      1142,
      2005,
      2002,
      1999,
      2009,
      1488,
      1429,
      1426,
      2200,
      1698,
      1659,
      1656,
      1975,
      1053,
      1957,
      1954,
      1001,
      998,
      1924,
      1921,
      1918,
      1928,
      937,
      934,
      931,
      1879,
      1876,
      1873,
      1870,
      945,
      1885,
      1882,
      1323,
      1273,
      1270,
      2105,
      1202,
      1199,
      1196,
      1211,
      2061,
      2057,
      1576,
      1543,
      1540,
      1484,
      1481,
      1478,
      1491,
      1700
    ]), r;
  }()
), Bi = (
  /** @class */
  function() {
    function r(e, t) {
      this.bits = e, this.points = t;
    }
    return r.prototype.getBits = function() {
      return this.bits;
    }, r.prototype.getPoints = function() {
      return this.points;
    }, r;
  }()
), Fi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Li = (
  /** @class */
  function() {
    function r() {
    }
    return r.detectMultiple = function(e, t, n) {
      var i = e.getBlackMatrix(), a = r.detect(n, i);
      return a.length || (i = i.clone(), i.rotate180(), a = r.detect(n, i)), new Bi(i, a);
    }, r.detect = function(e, t) {
      for (var n, i, a = new Array(), o = 0, f = 0, u = !1; o < t.getHeight(); ) {
        var s = r.findVertices(t, o, f);
        if (s[0] == null && s[3] == null) {
          if (!u)
            break;
          u = !1, f = 0;
          try {
            for (var c = (n = void 0, Fi(a)), h = c.next(); !h.done; h = c.next()) {
              var d = h.value;
              d[1] != null && (o = Math.trunc(Math.max(o, d[1].getY()))), d[3] != null && (o = Math.max(o, Math.trunc(d[3].getY())));
            }
          } catch (l) {
            n = { error: l };
          } finally {
            try {
              h && !h.done && (i = c.return) && i.call(c);
            } finally {
              if (n)
                throw n.error;
            }
          }
          o += r.ROW_STEP;
          continue;
        }
        if (u = !0, a.push(s), !e)
          break;
        s[2] != null ? (f = Math.trunc(s[2].getX()), o = Math.trunc(s[2].getY())) : (f = Math.trunc(s[4].getX()), o = Math.trunc(s[4].getY()));
      }
      return a;
    }, r.findVertices = function(e, t, n) {
      var i = e.getHeight(), a = e.getWidth(), o = new Array(8);
      return r.copyToResult(o, r.findRowsWithPattern(e, i, a, t, n, r.START_PATTERN), r.INDEXES_START_PATTERN), o[4] != null && (n = Math.trunc(o[4].getX()), t = Math.trunc(o[4].getY())), r.copyToResult(o, r.findRowsWithPattern(e, i, a, t, n, r.STOP_PATTERN), r.INDEXES_STOP_PATTERN), o;
    }, r.copyToResult = function(e, t, n) {
      for (var i = 0; i < n.length; i++)
        e[n[i]] = t[i];
    }, r.findRowsWithPattern = function(e, t, n, i, a, o) {
      for (var f = new Array(4), u = !1, s = new Int32Array(o.length); i < t; i += r.ROW_STEP) {
        var c = r.findGuardPattern(e, a, i, n, !1, o, s);
        if (c != null) {
          for (; i > 0; ) {
            var h = r.findGuardPattern(e, a, --i, n, !1, o, s);
            if (h != null)
              c = h;
            else {
              i++;
              break;
            }
          }
          f[0] = new T(c[0], i), f[1] = new T(c[1], i), u = !0;
          break;
        }
      }
      var d = i + 1;
      if (u) {
        for (var l = 0, h = Int32Array.from([Math.trunc(f[0].getX()), Math.trunc(f[1].getX())]); d < t; d++) {
          var c = r.findGuardPattern(e, h[0], d, n, !1, o, s);
          if (c != null && Math.abs(h[0] - c[0]) < r.MAX_PATTERN_DRIFT && Math.abs(h[1] - c[1]) < r.MAX_PATTERN_DRIFT)
            h = c, l = 0;
          else {
            if (l > r.SKIPPED_ROW_COUNT_MAX)
              break;
            l++;
          }
        }
        d -= l + 1, f[2] = new T(h[0], d), f[3] = new T(h[1], d);
      }
      return d - i < r.BARCODE_MIN_HEIGHT && ce.fill(f, null), f;
    }, r.findGuardPattern = function(e, t, n, i, a, o, f) {
      ce.fillWithin(f, 0, f.length, 0);
      for (var u = t, s = 0; e.get(u, n) && u > 0 && s++ < r.MAX_PIXEL_DRIFT; )
        u--;
      for (var c = u, h = 0, d = o.length, l = a; c < i; c++) {
        var v = e.get(c, n);
        if (v !== l)
          f[h]++;
        else {
          if (h === d - 1) {
            if (r.patternMatchVariance(f, o, r.MAX_INDIVIDUAL_VARIANCE) < r.MAX_AVG_VARIANCE)
              return new Int32Array([u, c]);
            u += f[0] + f[1], W.arraycopy(f, 2, f, 0, h - 1), f[h - 1] = 0, f[h] = 0, h--;
          } else
            h++;
          f[h] = 1, l = !l;
        }
      }
      return h === d - 1 && r.patternMatchVariance(f, o, r.MAX_INDIVIDUAL_VARIANCE) < r.MAX_AVG_VARIANCE ? new Int32Array([u, c - 1]) : null;
    }, r.patternMatchVariance = function(e, t, n) {
      for (var i = e.length, a = 0, o = 0, f = 0; f < i; f++)
        a += e[f], o += t[f];
      if (a < o)
        return (
          /*Float.POSITIVE_INFINITY*/
          1 / 0
        );
      var u = a / o;
      n *= u;
      for (var s = 0, c = 0; c < i; c++) {
        var h = e[c], d = t[c] * u, l = h > d ? h - d : d - h;
        if (l > n)
          return (
            /*Float.POSITIVE_INFINITY*/
            1 / 0
          );
        s += l;
      }
      return s / a;
    }, r.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), r.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), r.MAX_AVG_VARIANCE = 0.42, r.MAX_INDIVIDUAL_VARIANCE = 0.8, r.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), r.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), r.MAX_PIXEL_DRIFT = 3, r.MAX_PATTERN_DRIFT = 5, r.SKIPPED_ROW_COUNT_MAX = 25, r.ROW_STEP = 5, r.BARCODE_MIN_HEIGHT = 10, r;
  }()
), ki = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, De = (
  /** @class */
  function() {
    function r(e, t) {
      if (t.length === 0)
        throw new D();
      this.field = e;
      var n = (
        /*int*/
        t.length
      );
      if (n > 1 && t[0] === 0) {
        for (var i = (
          /*int*/
          1
        ); i < n && t[i] === 0; )
          i++;
        i === n ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(n - i), W.arraycopy(t, i, this.coefficients, 0, this.coefficients.length));
      } else
        this.coefficients = t;
    }
    return r.prototype.getCoefficients = function() {
      return this.coefficients;
    }, r.prototype.getDegree = function() {
      return this.coefficients.length - 1;
    }, r.prototype.isZero = function() {
      return this.coefficients[0] === 0;
    }, r.prototype.getCoefficient = function(e) {
      return this.coefficients[this.coefficients.length - 1 - e];
    }, r.prototype.evaluateAt = function(e) {
      var t, n;
      if (e === 0)
        return this.getCoefficient(0);
      if (e === 1) {
        var i = (
          /*int*/
          0
        );
        try {
          for (var a = ki(this.coefficients), o = a.next(); !o.done; o = a.next()) {
            var f = o.value;
            i = this.field.add(i, f);
          }
        } catch (h) {
          t = { error: h };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (t)
              throw t.error;
          }
        }
        return i;
      }
      for (var u = (
        /*int*/
        this.coefficients[0]
      ), s = (
        /*int*/
        this.coefficients.length
      ), c = 1; c < s; c++)
        u = this.field.add(this.field.multiply(e, u), this.coefficients[c]);
      return u;
    }, r.prototype.add = function(e) {
      if (!this.field.equals(e.field))
        throw new D("ModulusPolys do not have same ModulusGF field");
      if (this.isZero())
        return e;
      if (e.isZero())
        return this;
      var t = this.coefficients, n = e.coefficients;
      if (t.length > n.length) {
        var i = t;
        t = n, n = i;
      }
      var a = new Int32Array(n.length), o = (
        /*int*/
        n.length - t.length
      );
      W.arraycopy(n, 0, a, 0, o);
      for (var f = o; f < n.length; f++)
        a[f] = this.field.add(t[f - o], n[f]);
      return new r(this.field, a);
    }, r.prototype.subtract = function(e) {
      if (!this.field.equals(e.field))
        throw new D("ModulusPolys do not have same ModulusGF field");
      return e.isZero() ? this : this.add(e.negative());
    }, r.prototype.multiply = function(e) {
      return e instanceof r ? this.multiplyOther(e) : this.multiplyScalar(e);
    }, r.prototype.multiplyOther = function(e) {
      if (!this.field.equals(e.field))
        throw new D("ModulusPolys do not have same ModulusGF field");
      if (this.isZero() || e.isZero())
        return new r(this.field, new Int32Array([0]));
      for (var t = this.coefficients, n = (
        /*int*/
        t.length
      ), i = e.coefficients, a = (
        /*int*/
        i.length
      ), o = new Int32Array(n + a - 1), f = 0; f < n; f++)
        for (var u = (
          /*int*/
          t[f]
        ), s = 0; s < a; s++)
          o[f + s] = this.field.add(o[f + s], this.field.multiply(u, i[s]));
      return new r(this.field, o);
    }, r.prototype.negative = function() {
      for (var e = (
        /*int*/
        this.coefficients.length
      ), t = new Int32Array(e), n = 0; n < e; n++)
        t[n] = this.field.subtract(0, this.coefficients[n]);
      return new r(this.field, t);
    }, r.prototype.multiplyScalar = function(e) {
      if (e === 0)
        return new r(this.field, new Int32Array([0]));
      if (e === 1)
        return this;
      for (var t = (
        /*int*/
        this.coefficients.length
      ), n = new Int32Array(t), i = 0; i < t; i++)
        n[i] = this.field.multiply(this.coefficients[i], e);
      return new r(this.field, n);
    }, r.prototype.multiplyByMonomial = function(e, t) {
      if (e < 0)
        throw new D();
      if (t === 0)
        return new r(this.field, new Int32Array([0]));
      for (var n = (
        /*int*/
        this.coefficients.length
      ), i = new Int32Array(n + e), a = 0; a < n; a++)
        i[a] = this.field.multiply(this.coefficients[a], t);
      return new r(this.field, i);
    }, r.prototype.toString = function() {
      for (var e = new G(
        /*8 * this.getDegree()*/
      ), t = this.getDegree(); t >= 0; t--) {
        var n = (
          /*int*/
          this.getCoefficient(t)
        );
        n !== 0 && (n < 0 ? (e.append(" - "), n = -n) : e.length() > 0 && e.append(" + "), (t === 0 || n !== 1) && e.append(n), t !== 0 && (t === 1 ? e.append("x") : (e.append("x^"), e.append(t))));
      }
      return e.toString();
    }, r;
  }()
), Ui = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.add = function(e, t) {
      return (e + t) % this.modulus;
    }, r.prototype.subtract = function(e, t) {
      return (this.modulus + e - t) % this.modulus;
    }, r.prototype.exp = function(e) {
      return this.expTable[e];
    }, r.prototype.log = function(e) {
      if (e === 0)
        throw new D();
      return this.logTable[e];
    }, r.prototype.inverse = function(e) {
      if (e === 0)
        throw new ur();
      return this.expTable[this.modulus - this.logTable[e] - 1];
    }, r.prototype.multiply = function(e, t) {
      return e === 0 || t === 0 ? 0 : this.expTable[(this.logTable[e] + this.logTable[t]) % (this.modulus - 1)];
    }, r.prototype.getSize = function() {
      return this.modulus;
    }, r.prototype.equals = function(e) {
      return e === this;
    }, r;
  }()
), Vi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Hi = (
  /** @class */
  function(r) {
    Vi(e, r);
    function e(t, n) {
      var i = r.call(this) || this;
      i.modulus = t, i.expTable = new Int32Array(t), i.logTable = new Int32Array(t);
      for (var a = (
        /*int*/
        1
      ), o = 0; o < t; o++)
        i.expTable[o] = a, a = a * n % t;
      for (var o = 0; o < t - 1; o++)
        i.logTable[i.expTable[o]] = o;
      return i.zero = new De(i, new Int32Array([0])), i.one = new De(i, new Int32Array([1])), i;
    }
    return e.prototype.getZero = function() {
      return this.zero;
    }, e.prototype.getOne = function() {
      return this.one;
    }, e.prototype.buildMonomial = function(t, n) {
      if (t < 0)
        throw new D();
      if (n === 0)
        return this.zero;
      var i = new Int32Array(t + 1);
      return i[0] = n, new De(this, i);
    }, e.PDF417_GF = new e(F.NUMBER_OF_CODEWORDS, 3), e;
  }(Ui)
), Gi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Xi = (
  /** @class */
  function() {
    function r() {
      this.field = Hi.PDF417_GF;
    }
    return r.prototype.decode = function(e, t, n) {
      for (var i, a, o = new De(this.field, e), f = new Int32Array(t), u = !1, s = t; s > 0; s--) {
        var c = o.evaluateAt(this.field.exp(s));
        f[t - s] = c, c !== 0 && (u = !0);
      }
      if (!u)
        return 0;
      var h = this.field.getOne();
      if (n != null)
        try {
          for (var d = Gi(n), l = d.next(); !l.done; l = d.next()) {
            var v = l.value, p = this.field.exp(e.length - 1 - v), y = new De(this.field, new Int32Array([this.field.subtract(0, p), 1]));
            h = h.multiply(y);
          }
        } catch (b) {
          i = { error: b };
        } finally {
          try {
            l && !l.done && (a = d.return) && a.call(d);
          } finally {
            if (i)
              throw i.error;
          }
        }
      for (var _ = new De(this.field, f), g = this.runEuclideanAlgorithm(this.field.buildMonomial(t, 1), _, t), w = g[0], E = g[1], I = this.findErrorLocations(w), S = this.findErrorMagnitudes(E, w, I), s = 0; s < I.length; s++) {
        var O = e.length - 1 - this.field.log(I[s]);
        if (O < 0)
          throw re.getChecksumInstance();
        e[O] = this.field.subtract(e[O], S[s]);
      }
      return I.length;
    }, r.prototype.runEuclideanAlgorithm = function(e, t, n) {
      if (e.getDegree() < t.getDegree()) {
        var i = e;
        e = t, t = i;
      }
      for (var a = e, o = t, f = this.field.getZero(), u = this.field.getOne(); o.getDegree() >= Math.round(n / 2); ) {
        var s = a, c = f;
        if (a = o, f = u, a.isZero())
          throw re.getChecksumInstance();
        o = s;
        for (var h = this.field.getZero(), d = a.getCoefficient(a.getDegree()), l = this.field.inverse(d); o.getDegree() >= a.getDegree() && !o.isZero(); ) {
          var v = o.getDegree() - a.getDegree(), p = this.field.multiply(o.getCoefficient(o.getDegree()), l);
          h = h.add(this.field.buildMonomial(v, p)), o = o.subtract(a.multiplyByMonomial(v, p));
        }
        u = h.multiply(f).subtract(c).negative();
      }
      var y = u.getCoefficient(0);
      if (y === 0)
        throw re.getChecksumInstance();
      var _ = this.field.inverse(y), g = u.multiply(_), w = o.multiply(_);
      return [g, w];
    }, r.prototype.findErrorLocations = function(e) {
      for (var t = e.getDegree(), n = new Int32Array(t), i = 0, a = 1; a < this.field.getSize() && i < t; a++)
        e.evaluateAt(a) === 0 && (n[i] = this.field.inverse(a), i++);
      if (i !== t)
        throw re.getChecksumInstance();
      return n;
    }, r.prototype.findErrorMagnitudes = function(e, t, n) {
      for (var i = t.getDegree(), a = new Int32Array(i), o = 1; o <= i; o++)
        a[i - o] = this.field.multiply(o, t.getCoefficient(o));
      for (var f = new De(this.field, a), u = n.length, s = new Int32Array(u), o = 0; o < u; o++) {
        var c = this.field.inverse(n[o]), h = this.field.subtract(0, e.evaluateAt(c)), d = this.field.inverse(f.evaluateAt(c));
        s[o] = this.field.multiply(h, d);
      }
      return s;
    }, r;
  }()
), Ct = (
  /** @class */
  function() {
    function r(e, t, n, i, a) {
      e instanceof r ? this.constructor_2(e) : this.constructor_1(e, t, n, i, a);
    }
    return r.prototype.constructor_1 = function(e, t, n, i, a) {
      var o = t == null || n == null, f = i == null || a == null;
      if (o && f)
        throw new C();
      o ? (t = new T(0, i.getY()), n = new T(0, a.getY())) : f && (i = new T(e.getWidth() - 1, t.getY()), a = new T(e.getWidth() - 1, n.getY())), this.image = e, this.topLeft = t, this.bottomLeft = n, this.topRight = i, this.bottomRight = a, this.minX = Math.trunc(Math.min(t.getX(), n.getX())), this.maxX = Math.trunc(Math.max(i.getX(), a.getX())), this.minY = Math.trunc(Math.min(t.getY(), i.getY())), this.maxY = Math.trunc(Math.max(n.getY(), a.getY()));
    }, r.prototype.constructor_2 = function(e) {
      this.image = e.image, this.topLeft = e.getTopLeft(), this.bottomLeft = e.getBottomLeft(), this.topRight = e.getTopRight(), this.bottomRight = e.getBottomRight(), this.minX = e.getMinX(), this.maxX = e.getMaxX(), this.minY = e.getMinY(), this.maxY = e.getMaxY();
    }, r.merge = function(e, t) {
      return e == null ? t : t == null ? e : new r(e.image, e.topLeft, e.bottomLeft, t.topRight, t.bottomRight);
    }, r.prototype.addMissingRows = function(e, t, n) {
      var i = this.topLeft, a = this.bottomLeft, o = this.topRight, f = this.bottomRight;
      if (e > 0) {
        var u = n ? this.topLeft : this.topRight, s = Math.trunc(u.getY() - e);
        s < 0 && (s = 0);
        var c = new T(u.getX(), s);
        n ? i = c : o = c;
      }
      if (t > 0) {
        var h = n ? this.bottomLeft : this.bottomRight, d = Math.trunc(h.getY() + t);
        d >= this.image.getHeight() && (d = this.image.getHeight() - 1);
        var l = new T(h.getX(), d);
        n ? a = l : f = l;
      }
      return new r(this.image, i, a, o, f);
    }, r.prototype.getMinX = function() {
      return this.minX;
    }, r.prototype.getMaxX = function() {
      return this.maxX;
    }, r.prototype.getMinY = function() {
      return this.minY;
    }, r.prototype.getMaxY = function() {
      return this.maxY;
    }, r.prototype.getTopLeft = function() {
      return this.topLeft;
    }, r.prototype.getTopRight = function() {
      return this.topRight;
    }, r.prototype.getBottomLeft = function() {
      return this.bottomLeft;
    }, r.prototype.getBottomRight = function() {
      return this.bottomRight;
    }, r;
  }()
), Wi = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.columnCount = e, this.errorCorrectionLevel = i, this.rowCountUpperPart = t, this.rowCountLowerPart = n, this.rowCount = t + n;
    }
    return r.prototype.getColumnCount = function() {
      return this.columnCount;
    }, r.prototype.getErrorCorrectionLevel = function() {
      return this.errorCorrectionLevel;
    }, r.prototype.getRowCount = function() {
      return this.rowCount;
    }, r.prototype.getRowCountUpperPart = function() {
      return this.rowCountUpperPart;
    }, r.prototype.getRowCountLowerPart = function() {
      return this.rowCountLowerPart;
    }, r;
  }()
), Rt = (
  /** @class */
  function() {
    function r() {
      this.buffer = "";
    }
    return r.form = function(e, t) {
      var n = -1;
      function i(o, f, u, s, c, h) {
        if (o === "%%")
          return "%";
        if (t[++n] !== void 0) {
          o = s ? parseInt(s.substr(1)) : void 0;
          var d = c ? parseInt(c.substr(1)) : void 0, l;
          switch (h) {
            case "s":
              l = t[n];
              break;
            case "c":
              l = t[n][0];
              break;
            case "f":
              l = parseFloat(t[n]).toFixed(o);
              break;
            case "p":
              l = parseFloat(t[n]).toPrecision(o);
              break;
            case "e":
              l = parseFloat(t[n]).toExponential(o);
              break;
            case "x":
              l = parseInt(t[n]).toString(d || 16);
              break;
            case "d":
              l = parseFloat(parseInt(t[n], d || 10).toPrecision(o)).toFixed(0);
              break;
          }
          l = typeof l == "object" ? JSON.stringify(l) : (+l).toString(d);
          for (var v = parseInt(u), p = u && u[0] + "" == "0" ? "0" : " "; l.length < v; )
            l = f !== void 0 ? l + p : p + l;
          return l;
        }
      }
      var a = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
      return e.replace(a, i);
    }, r.prototype.format = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      this.buffer += r.form(e, t);
    }, r.prototype.toString = function() {
      return this.buffer;
    }, r;
  }()
), zi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, pr = (
  /** @class */
  function() {
    function r(e) {
      this.boundingBox = new Ct(e), this.codewords = new Array(e.getMaxY() - e.getMinY() + 1);
    }
    return r.prototype.getCodewordNearby = function(e) {
      var t = this.getCodeword(e);
      if (t != null)
        return t;
      for (var n = 1; n < r.MAX_NEARBY_DISTANCE; n++) {
        var i = this.imageRowToCodewordIndex(e) - n;
        if (i >= 0 && (t = this.codewords[i], t != null) || (i = this.imageRowToCodewordIndex(e) + n, i < this.codewords.length && (t = this.codewords[i], t != null)))
          return t;
      }
      return null;
    }, r.prototype.imageRowToCodewordIndex = function(e) {
      return e - this.boundingBox.getMinY();
    }, r.prototype.setCodeword = function(e, t) {
      this.codewords[this.imageRowToCodewordIndex(e)] = t;
    }, r.prototype.getCodeword = function(e) {
      return this.codewords[this.imageRowToCodewordIndex(e)];
    }, r.prototype.getBoundingBox = function() {
      return this.boundingBox;
    }, r.prototype.getCodewords = function() {
      return this.codewords;
    }, r.prototype.toString = function() {
      var e, t, n = new Rt(), i = 0;
      try {
        for (var a = zi(this.codewords), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          if (f == null) {
            n.format("%3d:    |   %n", i++);
            continue;
          }
          n.format("%3d: %3d|%3d%n", i++, f.getRowNumber(), f.getValue());
        }
      } catch (u) {
        e = { error: u };
      } finally {
        try {
          o && !o.done && (t = a.return) && t.call(a);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return n.toString();
    }, r.MAX_NEARBY_DISTANCE = 5, r;
  }()
), Yi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Zi = function(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var n = t.call(r), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (f) {
    o = { error: f };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}, Ge = (
  /** @class */
  function() {
    function r() {
      this.values = /* @__PURE__ */ new Map();
    }
    return r.prototype.setValue = function(e) {
      e = Math.trunc(e);
      var t = this.values.get(e);
      t == null && (t = 0), t++, this.values.set(e, t);
    }, r.prototype.getValue = function() {
      var e, t, n = -1, i = new Array(), a = function(h, d) {
        var l = {
          getKey: function() {
            return h;
          },
          getValue: function() {
            return d;
          }
        };
        l.getValue() > n ? (n = l.getValue(), i = [], i.push(l.getKey())) : l.getValue() === n && i.push(l.getKey());
      };
      try {
        for (var o = Yi(this.values.entries()), f = o.next(); !f.done; f = o.next()) {
          var u = Zi(f.value, 2), s = u[0], c = u[1];
          a(s, c);
        }
      } catch (h) {
        e = { error: h };
      } finally {
        try {
          f && !f.done && (t = o.return) && t.call(o);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return F.toIntArray(i);
    }, r.prototype.getConfidence = function(e) {
      return this.values.get(e);
    }, r;
  }()
), ji = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ht = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Jt = (
  /** @class */
  function(r) {
    ji(e, r);
    function e(t, n) {
      var i = r.call(this, t) || this;
      return i._isLeft = n, i;
    }
    return e.prototype.setRowNumbers = function() {
      var t, n;
      try {
        for (var i = ht(this.getCodewords()), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o != null && o.setRowNumberAsRowIndicatorColumn();
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.adjustCompleteIndicatorColumnRowNumbers = function(t) {
      var n = this.getCodewords();
      this.setRowNumbers(), this.removeIncorrectCodewords(n, t);
      for (var i = this.getBoundingBox(), a = this._isLeft ? i.getTopLeft() : i.getTopRight(), o = this._isLeft ? i.getBottomLeft() : i.getBottomRight(), f = this.imageRowToCodewordIndex(Math.trunc(a.getY())), u = this.imageRowToCodewordIndex(Math.trunc(o.getY())), s = -1, c = 1, h = 0, d = f; d < u; d++)
        if (n[d] != null) {
          var l = n[d], v = l.getRowNumber() - s;
          if (v === 0)
            h++;
          else if (v === 1)
            c = Math.max(c, h), h = 1, s = l.getRowNumber();
          else if (v < 0 || l.getRowNumber() >= t.getRowCount() || v > d)
            n[d] = null;
          else {
            var p = void 0;
            c > 2 ? p = (c - 2) * v : p = v;
            for (var y = p >= d, _ = 1; _ <= p && !y; _++)
              y = n[d - _] != null;
            y ? n[d] = null : (s = l.getRowNumber(), h = 1);
          }
        }
    }, e.prototype.getRowHeights = function() {
      var t, n, i = this.getBarcodeMetadata();
      if (i == null)
        return null;
      this.adjustIncompleteIndicatorColumnRowNumbers(i);
      var a = new Int32Array(i.getRowCount());
      try {
        for (var o = ht(this.getCodewords()), f = o.next(); !f.done; f = o.next()) {
          var u = f.value;
          if (u != null) {
            var s = u.getRowNumber();
            if (s >= a.length)
              continue;
            a[s]++;
          }
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          f && !f.done && (n = o.return) && n.call(o);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return a;
    }, e.prototype.adjustIncompleteIndicatorColumnRowNumbers = function(t) {
      for (var n = this.getBoundingBox(), i = this._isLeft ? n.getTopLeft() : n.getTopRight(), a = this._isLeft ? n.getBottomLeft() : n.getBottomRight(), o = this.imageRowToCodewordIndex(Math.trunc(i.getY())), f = this.imageRowToCodewordIndex(Math.trunc(a.getY())), u = this.getCodewords(), s = -1, c = o; c < f; c++)
        if (u[c] != null) {
          var h = u[c];
          h.setRowNumberAsRowIndicatorColumn();
          var d = h.getRowNumber() - s;
          d === 0 || (d === 1 ? s = h.getRowNumber() : h.getRowNumber() >= t.getRowCount() ? u[c] = null : s = h.getRowNumber());
        }
    }, e.prototype.getBarcodeMetadata = function() {
      var t, n, i = this.getCodewords(), a = new Ge(), o = new Ge(), f = new Ge(), u = new Ge();
      try {
        for (var s = ht(i), c = s.next(); !c.done; c = s.next()) {
          var h = c.value;
          if (h != null) {
            h.setRowNumberAsRowIndicatorColumn();
            var d = h.getValue() % 30, l = h.getRowNumber();
            switch (this._isLeft || (l += 2), l % 3) {
              case 0:
                o.setValue(d * 3 + 1);
                break;
              case 1:
                u.setValue(d / 3), f.setValue(d % 3);
                break;
              case 2:
                a.setValue(d + 1);
                break;
            }
          }
        }
      } catch (p) {
        t = { error: p };
      } finally {
        try {
          c && !c.done && (n = s.return) && n.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      if (a.getValue().length === 0 || o.getValue().length === 0 || f.getValue().length === 0 || u.getValue().length === 0 || a.getValue()[0] < 1 || o.getValue()[0] + f.getValue()[0] < F.MIN_ROWS_IN_BARCODE || o.getValue()[0] + f.getValue()[0] > F.MAX_ROWS_IN_BARCODE)
        return null;
      var v = new Wi(a.getValue()[0], o.getValue()[0], f.getValue()[0], u.getValue()[0]);
      return this.removeIncorrectCodewords(i, v), v;
    }, e.prototype.removeIncorrectCodewords = function(t, n) {
      for (var i = 0; i < t.length; i++) {
        var a = t[i];
        if (t[i] != null) {
          var o = a.getValue() % 30, f = a.getRowNumber();
          if (f > n.getRowCount()) {
            t[i] = null;
            continue;
          }
          switch (this._isLeft || (f += 2), f % 3) {
            case 0:
              o * 3 + 1 !== n.getRowCountUpperPart() && (t[i] = null);
              break;
            case 1:
              (Math.trunc(o / 3) !== n.getErrorCorrectionLevel() || o % 3 !== n.getRowCountLowerPart()) && (t[i] = null);
              break;
            case 2:
              o + 1 !== n.getColumnCount() && (t[i] = null);
              break;
          }
        }
      }
    }, e.prototype.isLeft = function() {
      return this._isLeft;
    }, e.prototype.toString = function() {
      return "IsLeft: " + this._isLeft + `
` + r.prototype.toString.call(this);
    }, e;
  }(pr)
), $i = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ki = (
  /** @class */
  function() {
    function r(e, t) {
      this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = e, this.barcodeColumnCount = e.getColumnCount(), this.boundingBox = t, this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
    }
    return r.prototype.getDetectionResultColumns = function() {
      this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
      var e = F.MAX_CODEWORDS_IN_BARCODE, t;
      do
        t = e, e = this.adjustRowNumbersAndGetCount();
      while (e > 0 && e < t);
      return this.detectionResultColumns;
    }, r.prototype.adjustIndicatorColumnRowNumbers = function(e) {
      e != null && e.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
    }, r.prototype.adjustRowNumbersAndGetCount = function() {
      var e = this.adjustRowNumbersByRow();
      if (e === 0)
        return 0;
      for (var t = 1; t < this.barcodeColumnCount + 1; t++)
        for (var n = this.detectionResultColumns[t].getCodewords(), i = 0; i < n.length; i++)
          n[i] != null && (n[i].hasValidRowNumber() || this.adjustRowNumbers(t, i, n));
      return e;
    }, r.prototype.adjustRowNumbersByRow = function() {
      this.adjustRowNumbersFromBothRI();
      var e = this.adjustRowNumbersFromLRI();
      return e + this.adjustRowNumbersFromRRI();
    }, r.prototype.adjustRowNumbersFromBothRI = function() {
      if (!(this.detectionResultColumns[0] == null || this.detectionResultColumns[this.barcodeColumnCount + 1] == null)) {
        for (var e = this.detectionResultColumns[0].getCodewords(), t = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n = 0; n < e.length; n++)
          if (e[n] != null && t[n] != null && e[n].getRowNumber() === t[n].getRowNumber())
            for (var i = 1; i <= this.barcodeColumnCount; i++) {
              var a = this.detectionResultColumns[i].getCodewords()[n];
              a != null && (a.setRowNumber(e[n].getRowNumber()), a.hasValidRowNumber() || (this.detectionResultColumns[i].getCodewords()[n] = null));
            }
      }
    }, r.prototype.adjustRowNumbersFromRRI = function() {
      if (this.detectionResultColumns[this.barcodeColumnCount + 1] == null)
        return 0;
      for (var e = 0, t = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n = 0; n < t.length; n++)
        if (t[n] != null)
          for (var i = t[n].getRowNumber(), a = 0, o = this.barcodeColumnCount + 1; o > 0 && a < this.ADJUST_ROW_NUMBER_SKIP; o--) {
            var f = this.detectionResultColumns[o].getCodewords()[n];
            f != null && (a = r.adjustRowNumberIfValid(i, a, f), f.hasValidRowNumber() || e++);
          }
      return e;
    }, r.prototype.adjustRowNumbersFromLRI = function() {
      if (this.detectionResultColumns[0] == null)
        return 0;
      for (var e = 0, t = this.detectionResultColumns[0].getCodewords(), n = 0; n < t.length; n++)
        if (t[n] != null)
          for (var i = t[n].getRowNumber(), a = 0, o = 1; o < this.barcodeColumnCount + 1 && a < this.ADJUST_ROW_NUMBER_SKIP; o++) {
            var f = this.detectionResultColumns[o].getCodewords()[n];
            f != null && (a = r.adjustRowNumberIfValid(i, a, f), f.hasValidRowNumber() || e++);
          }
      return e;
    }, r.adjustRowNumberIfValid = function(e, t, n) {
      return n == null || n.hasValidRowNumber() || (n.isValidRowNumber(e) ? (n.setRowNumber(e), t = 0) : ++t), t;
    }, r.prototype.adjustRowNumbers = function(e, t, n) {
      var i, a;
      if (this.detectionResultColumns[e - 1] != null) {
        var o = n[t], f = this.detectionResultColumns[e - 1].getCodewords(), u = f;
        this.detectionResultColumns[e + 1] != null && (u = this.detectionResultColumns[e + 1].getCodewords());
        var s = new Array(14);
        s[2] = f[t], s[3] = u[t], t > 0 && (s[0] = n[t - 1], s[4] = f[t - 1], s[5] = u[t - 1]), t > 1 && (s[8] = n[t - 2], s[10] = f[t - 2], s[11] = u[t - 2]), t < n.length - 1 && (s[1] = n[t + 1], s[6] = f[t + 1], s[7] = u[t + 1]), t < n.length - 2 && (s[9] = n[t + 2], s[12] = f[t + 2], s[13] = u[t + 2]);
        try {
          for (var c = $i(s), h = c.next(); !h.done; h = c.next()) {
            var d = h.value;
            if (r.adjustRowNumber(o, d))
              return;
          }
        } catch (l) {
          i = { error: l };
        } finally {
          try {
            h && !h.done && (a = c.return) && a.call(c);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    }, r.adjustRowNumber = function(e, t) {
      return t == null ? !1 : t.hasValidRowNumber() && t.getBucket() === e.getBucket() ? (e.setRowNumber(t.getRowNumber()), !0) : !1;
    }, r.prototype.getBarcodeColumnCount = function() {
      return this.barcodeColumnCount;
    }, r.prototype.getBarcodeRowCount = function() {
      return this.barcodeMetadata.getRowCount();
    }, r.prototype.getBarcodeECLevel = function() {
      return this.barcodeMetadata.getErrorCorrectionLevel();
    }, r.prototype.setBoundingBox = function(e) {
      this.boundingBox = e;
    }, r.prototype.getBoundingBox = function() {
      return this.boundingBox;
    }, r.prototype.setDetectionResultColumn = function(e, t) {
      this.detectionResultColumns[e] = t;
    }, r.prototype.getDetectionResultColumn = function(e) {
      return this.detectionResultColumns[e];
    }, r.prototype.toString = function() {
      var e = this.detectionResultColumns[0];
      e == null && (e = this.detectionResultColumns[this.barcodeColumnCount + 1]);
      for (var t = new Rt(), n = 0; n < e.getCodewords().length; n++) {
        t.format("CW %3d:", n);
        for (var i = 0; i < this.barcodeColumnCount + 2; i++) {
          if (this.detectionResultColumns[i] == null) {
            t.format("    |   ");
            continue;
          }
          var a = this.detectionResultColumns[i].getCodewords()[n];
          if (a == null) {
            t.format("    |   ");
            continue;
          }
          t.format(" %3d|%3d", a.getRowNumber(), a.getValue());
        }
        t.format("%n");
      }
      return t.toString();
    }, r;
  }()
), qi = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.rowNumber = r.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(e), this.endX = Math.trunc(t), this.bucket = Math.trunc(n), this.value = Math.trunc(i);
    }
    return r.prototype.hasValidRowNumber = function() {
      return this.isValidRowNumber(this.rowNumber);
    }, r.prototype.isValidRowNumber = function(e) {
      return e !== r.BARCODE_ROW_UNKNOWN && this.bucket === e % 3 * 3;
    }, r.prototype.setRowNumberAsRowIndicatorColumn = function() {
      this.rowNumber = Math.trunc(Math.trunc(this.value / 30) * 3 + Math.trunc(this.bucket / 3));
    }, r.prototype.getWidth = function() {
      return this.endX - this.startX;
    }, r.prototype.getStartX = function() {
      return this.startX;
    }, r.prototype.getEndX = function() {
      return this.endX;
    }, r.prototype.getBucket = function() {
      return this.bucket;
    }, r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getRowNumber = function() {
      return this.rowNumber;
    }, r.prototype.setRowNumber = function(e) {
      this.rowNumber = e;
    }, r.prototype.toString = function() {
      return this.rowNumber + "|" + this.value;
    }, r.BARCODE_ROW_UNKNOWN = -1, r;
  }()
), Qi = (
  /** @class */
  function() {
    function r() {
    }
    return r.initialize = function() {
      for (var e = 0; e < F.SYMBOL_TABLE.length; e++)
        for (var t = F.SYMBOL_TABLE[e], n = t & 1, i = 0; i < F.BARS_IN_MODULE; i++) {
          for (var a = 0; (t & 1) === n; )
            a += 1, t >>= 1;
          n = t & 1, r.RATIOS_TABLE[e] || (r.RATIOS_TABLE[e] = new Array(F.BARS_IN_MODULE)), r.RATIOS_TABLE[e][F.BARS_IN_MODULE - i - 1] = Math.fround(a / F.MODULES_IN_CODEWORD);
        }
      this.bSymbolTableReady = !0;
    }, r.getDecodedValue = function(e) {
      var t = r.getDecodedCodewordValue(r.sampleBitCounts(e));
      return t !== -1 ? t : r.getClosestDecodedValue(e);
    }, r.sampleBitCounts = function(e) {
      for (var t = L.sum(e), n = new Int32Array(F.BARS_IN_MODULE), i = 0, a = 0, o = 0; o < F.MODULES_IN_CODEWORD; o++) {
        var f = t / (2 * F.MODULES_IN_CODEWORD) + o * t / F.MODULES_IN_CODEWORD;
        a + e[i] <= f && (a += e[i], i++), n[i]++;
      }
      return n;
    }, r.getDecodedCodewordValue = function(e) {
      var t = r.getBitValue(e);
      return F.getCodeword(t) === -1 ? -1 : t;
    }, r.getBitValue = function(e) {
      for (var t = (
        /*long*/
        0
      ), n = 0; n < e.length; n++)
        for (var i = 0; i < e[n]; i++)
          t = t << 1 | (n % 2 === 0 ? 1 : 0);
      return Math.trunc(t);
    }, r.getClosestDecodedValue = function(e) {
      var t = L.sum(e), n = new Array(F.BARS_IN_MODULE);
      if (t > 1)
        for (var i = 0; i < n.length; i++)
          n[i] = Math.fround(e[i] / t);
      var a = gt.MAX_VALUE, o = -1;
      this.bSymbolTableReady || r.initialize();
      for (var f = 0; f < r.RATIOS_TABLE.length; f++) {
        for (var u = 0, s = r.RATIOS_TABLE[f], c = 0; c < F.BARS_IN_MODULE; c++) {
          var h = Math.fround(s[c] - n[c]);
          if (u += Math.fround(h * h), u >= a)
            break;
        }
        u < a && (a = u, o = F.SYMBOL_TABLE[f]);
      }
      return o;
    }, r.bSymbolTableReady = !1, r.RATIOS_TABLE = new Array(F.SYMBOL_TABLE.length).map(function(e) {
      return new Array(F.BARS_IN_MODULE);
    }), r;
  }()
), Ji = (
  /** @class */
  function() {
    function r() {
      this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1;
    }
    return r.prototype.getSegmentIndex = function() {
      return this.segmentIndex;
    }, r.prototype.setSegmentIndex = function(e) {
      this.segmentIndex = e;
    }, r.prototype.getFileId = function() {
      return this.fileId;
    }, r.prototype.setFileId = function(e) {
      this.fileId = e;
    }, r.prototype.getOptionalData = function() {
      return this.optionalData;
    }, r.prototype.setOptionalData = function(e) {
      this.optionalData = e;
    }, r.prototype.isLastSegment = function() {
      return this.lastSegment;
    }, r.prototype.setLastSegment = function(e) {
      this.lastSegment = e;
    }, r.prototype.getSegmentCount = function() {
      return this.segmentCount;
    }, r.prototype.setSegmentCount = function(e) {
      this.segmentCount = e;
    }, r.prototype.getSender = function() {
      return this.sender || null;
    }, r.prototype.setSender = function(e) {
      this.sender = e;
    }, r.prototype.getAddressee = function() {
      return this.addressee || null;
    }, r.prototype.setAddressee = function(e) {
      this.addressee = e;
    }, r.prototype.getFileName = function() {
      return this.fileName;
    }, r.prototype.setFileName = function(e) {
      this.fileName = e;
    }, r.prototype.getFileSize = function() {
      return this.fileSize;
    }, r.prototype.setFileSize = function(e) {
      this.fileSize = e;
    }, r.prototype.getChecksum = function() {
      return this.checksum;
    }, r.prototype.setChecksum = function(e) {
      this.checksum = e;
    }, r.prototype.getTimestamp = function() {
      return this.timestamp;
    }, r.prototype.setTimestamp = function(e) {
      this.timestamp = e;
    }, r;
  }()
), er = (
  /** @class */
  function() {
    function r() {
    }
    return r.parseLong = function(e, t) {
      return t === void 0 && (t = void 0), parseInt(e, t);
    }, r;
  }()
), ea = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ta = (
  /** @class */
  function(r) {
    ea(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "NullPointerException", e;
  }(fe)
), ra = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.writeBytes = function(e) {
      this.writeBytesOffset(e, 0, e.length);
    }, r.prototype.writeBytesOffset = function(e, t, n) {
      if (e == null)
        throw new ta();
      if (t < 0 || t > e.length || n < 0 || t + n > e.length || t + n < 0)
        throw new Ot();
      if (n === 0)
        return;
      for (var i = 0; i < n; i++)
        this.write(e[t + i]);
    }, r.prototype.flush = function() {
    }, r.prototype.close = function() {
    }, r;
  }()
), na = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ia = (
  /** @class */
  function(r) {
    na(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e;
  }(fe)
), aa = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), oa = (
  /** @class */
  function(r) {
    aa(e, r);
    function e(t) {
      t === void 0 && (t = 32);
      var n = r.call(this) || this;
      if (n.count = 0, t < 0)
        throw new D("Negative initial size: " + t);
      return n.buf = new Uint8Array(t), n;
    }
    return e.prototype.ensureCapacity = function(t) {
      t - this.buf.length > 0 && this.grow(t);
    }, e.prototype.grow = function(t) {
      var n = this.buf.length, i = n << 1;
      if (i - t < 0 && (i = t), i < 0) {
        if (t < 0)
          throw new ia();
        i = M.MAX_VALUE;
      }
      this.buf = ce.copyOfUint8Array(this.buf, i);
    }, e.prototype.write = function(t) {
      this.ensureCapacity(this.count + 1), this.buf[this.count] = /*(byte)*/
      t, this.count += 1;
    }, e.prototype.writeBytesOffset = function(t, n, i) {
      if (n < 0 || n > t.length || i < 0 || n + i - t.length > 0)
        throw new Ot();
      this.ensureCapacity(this.count + i), W.arraycopy(t, n, this.buf, this.count, i), this.count += i;
    }, e.prototype.writeTo = function(t) {
      t.writeBytesOffset(this.buf, 0, this.count);
    }, e.prototype.reset = function() {
      this.count = 0;
    }, e.prototype.toByteArray = function() {
      return ce.copyOfUint8Array(this.buf, this.count);
    }, e.prototype.size = function() {
      return this.count;
    }, e.prototype.toString = function(t) {
      return t ? typeof t == "string" ? this.toString_string(t) : this.toString_number(t) : this.toString_void();
    }, e.prototype.toString_void = function() {
      return new String(
        this.buf
        /*, 0, this.count*/
      ).toString();
    }, e.prototype.toString_string = function(t) {
      return new String(
        this.buf
        /*, 0, this.count, charsetName*/
      ).toString();
    }, e.prototype.toString_number = function(t) {
      return new String(
        this.buf
        /*, hibyte, 0, this.count*/
      ).toString();
    }, e.prototype.close = function() {
    }, e;
  }(ra)
), H;
(function(r) {
  r[r.ALPHA = 0] = "ALPHA", r[r.LOWER = 1] = "LOWER", r[r.MIXED = 2] = "MIXED", r[r.PUNCT = 3] = "PUNCT", r[r.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", r[r.PUNCT_SHIFT = 5] = "PUNCT_SHIFT";
})(H || (H = {}));
function gr() {
  if (typeof window < "u")
    return window.BigInt || null;
  if (typeof global < "u")
    return global.BigInt || null;
  if (typeof self < "u")
    return self.BigInt || null;
  throw new Error("Can't search globals for BigInt!");
}
var Ze;
function Ie(r) {
  if (typeof Ze > "u" && (Ze = gr()), Ze === null)
    throw new Error("BigInt is not supported!");
  return Ze(r);
}
function fa() {
  var r = [];
  r[0] = Ie(1);
  var e = Ie(900);
  r[1] = e;
  for (var t = 2; t < 16; t++)
    r[t] = r[t - 1] * e;
  return r;
}
var ua = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e, t) {
      var n = new G(""), i = Q.ISO8859_1;
      n.enableDecoding(i);
      for (var a = 1, o = e[a++], f = new Ji(); a < e[0]; ) {
        switch (o) {
          case r.TEXT_COMPACTION_MODE_LATCH:
            a = r.textCompaction(e, a, n);
            break;
          case r.BYTE_COMPACTION_MODE_LATCH:
          case r.BYTE_COMPACTION_MODE_LATCH_6:
            a = r.byteCompaction(o, e, i, a, n);
            break;
          case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            n.append(
              /*(char)*/
              e[a++]
            );
            break;
          case r.NUMERIC_COMPACTION_MODE_LATCH:
            a = r.numericCompaction(e, a, n);
            break;
          case r.ECI_CHARSET:
            Q.getCharacterSetECIByValue(e[a++]);
            break;
          case r.ECI_GENERAL_PURPOSE:
            a += 2;
            break;
          case r.ECI_USER_DEFINED:
            a++;
            break;
          case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            a = r.decodeMacroBlock(e, a, f);
            break;
          case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case r.MACRO_PDF417_TERMINATOR:
            throw new m();
          default:
            a--, a = r.textCompaction(e, a, n);
            break;
        }
        if (a < e.length)
          o = e[a++];
        else
          throw m.getFormatInstance();
      }
      if (n.length() === 0)
        throw m.getFormatInstance();
      var u = new nt(null, n.toString(), null, t);
      return u.setOther(f), u;
    }, r.decodeMacroBlock = function(e, t, n) {
      if (t + r.NUMBER_OF_SEQUENCE_CODEWORDS > e[0])
        throw m.getFormatInstance();
      for (var i = new Int32Array(r.NUMBER_OF_SEQUENCE_CODEWORDS), a = 0; a < r.NUMBER_OF_SEQUENCE_CODEWORDS; a++, t++)
        i[a] = e[t];
      n.setSegmentIndex(M.parseInt(r.decodeBase900toBase10(i, r.NUMBER_OF_SEQUENCE_CODEWORDS)));
      var o = new G();
      t = r.textCompaction(e, t, o), n.setFileId(o.toString());
      var f = -1;
      for (e[t] === r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (f = t + 1); t < e[0]; )
        switch (e[t]) {
          case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            switch (t++, e[t]) {
              case r.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                var u = new G();
                t = r.textCompaction(e, t + 1, u), n.setFileName(u.toString());
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                var s = new G();
                t = r.textCompaction(e, t + 1, s), n.setSender(s.toString());
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                var c = new G();
                t = r.textCompaction(e, t + 1, c), n.setAddressee(c.toString());
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                var h = new G();
                t = r.numericCompaction(e, t + 1, h), n.setSegmentCount(M.parseInt(h.toString()));
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                var d = new G();
                t = r.numericCompaction(e, t + 1, d), n.setTimestamp(er.parseLong(d.toString()));
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                var l = new G();
                t = r.numericCompaction(e, t + 1, l), n.setChecksum(M.parseInt(l.toString()));
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                var v = new G();
                t = r.numericCompaction(e, t + 1, v), n.setFileSize(er.parseLong(v.toString()));
                break;
              default:
                throw m.getFormatInstance();
            }
            break;
          case r.MACRO_PDF417_TERMINATOR:
            t++, n.setLastSegment(!0);
            break;
          default:
            throw m.getFormatInstance();
        }
      if (f !== -1) {
        var p = t - f;
        n.isLastSegment() && p--, n.setOptionalData(ce.copyOfRange(e, f, f + p));
      }
      return t;
    }, r.textCompaction = function(e, t, n) {
      for (var i = new Int32Array((e[0] - t) * 2), a = new Int32Array((e[0] - t) * 2), o = 0, f = !1; t < e[0] && !f; ) {
        var u = e[t++];
        if (u < r.TEXT_COMPACTION_MODE_LATCH)
          i[o] = u / 30, i[o + 1] = u % 30, o += 2;
        else
          switch (u) {
            case r.TEXT_COMPACTION_MODE_LATCH:
              i[o++] = r.TEXT_COMPACTION_MODE_LATCH;
              break;
            case r.BYTE_COMPACTION_MODE_LATCH:
            case r.BYTE_COMPACTION_MODE_LATCH_6:
            case r.NUMERIC_COMPACTION_MODE_LATCH:
            case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case r.MACRO_PDF417_TERMINATOR:
              t--, f = !0;
              break;
            case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              i[o] = r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, u = e[t++], a[o] = u, o++;
              break;
          }
      }
      return r.decodeTextCompaction(i, a, o, n), t;
    }, r.decodeTextCompaction = function(e, t, n, i) {
      for (var a = H.ALPHA, o = H.ALPHA, f = 0; f < n; ) {
        var u = e[f], s = (
          /*char*/
          ""
        );
        switch (a) {
          case H.ALPHA:
            if (u < 26)
              s = /*(char)('A' + subModeCh) */
              String.fromCharCode(65 + u);
            else
              switch (u) {
                case 26:
                  s = " ";
                  break;
                case r.LL:
                  a = H.LOWER;
                  break;
                case r.ML:
                  a = H.MIXED;
                  break;
                case r.PS:
                  o = a, a = H.PUNCT_SHIFT;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = H.ALPHA;
                  break;
              }
            break;
          case H.LOWER:
            if (u < 26)
              s = /*(char)('a' + subModeCh)*/
              String.fromCharCode(97 + u);
            else
              switch (u) {
                case 26:
                  s = " ";
                  break;
                case r.AS:
                  o = a, a = H.ALPHA_SHIFT;
                  break;
                case r.ML:
                  a = H.MIXED;
                  break;
                case r.PS:
                  o = a, a = H.PUNCT_SHIFT;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = H.ALPHA;
                  break;
              }
            break;
          case H.MIXED:
            if (u < r.PL)
              s = r.MIXED_CHARS[u];
            else
              switch (u) {
                case r.PL:
                  a = H.PUNCT;
                  break;
                case 26:
                  s = " ";
                  break;
                case r.LL:
                  a = H.LOWER;
                  break;
                case r.AL:
                  a = H.ALPHA;
                  break;
                case r.PS:
                  o = a, a = H.PUNCT_SHIFT;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = H.ALPHA;
                  break;
              }
            break;
          case H.PUNCT:
            if (u < r.PAL)
              s = r.PUNCT_CHARS[u];
            else
              switch (u) {
                case r.PAL:
                  a = H.ALPHA;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = H.ALPHA;
                  break;
              }
            break;
          case H.ALPHA_SHIFT:
            if (a = o, u < 26)
              s = /*(char)('A' + subModeCh)*/
              String.fromCharCode(65 + u);
            else
              switch (u) {
                case 26:
                  s = " ";
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = H.ALPHA;
                  break;
              }
            break;
          case H.PUNCT_SHIFT:
            if (a = o, u < r.PAL)
              s = r.PUNCT_CHARS[u];
            else
              switch (u) {
                case r.PAL:
                  a = H.ALPHA;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = H.ALPHA;
                  break;
              }
            break;
        }
        s !== "" && i.append(s), f++;
      }
    }, r.byteCompaction = function(e, t, n, i, a) {
      var o = new oa(), f = 0, u = (
        /*long*/
        0
      ), s = !1;
      switch (e) {
        case r.BYTE_COMPACTION_MODE_LATCH:
          for (var c = new Int32Array(6), h = t[i++]; i < t[0] && !s; )
            switch (c[f++] = h, u = 900 * u + h, h = t[i++], h) {
              case r.TEXT_COMPACTION_MODE_LATCH:
              case r.BYTE_COMPACTION_MODE_LATCH:
              case r.NUMERIC_COMPACTION_MODE_LATCH:
              case r.BYTE_COMPACTION_MODE_LATCH_6:
              case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case r.MACRO_PDF417_TERMINATOR:
                i--, s = !0;
                break;
              default:
                if (f % 5 === 0 && f > 0) {
                  for (var d = 0; d < 6; ++d)
                    o.write(
                      /*(byte)*/
                      Number(Ie(u) >> Ie(8 * (5 - d)))
                    );
                  u = 0, f = 0;
                }
                break;
            }
          i === t[0] && h < r.TEXT_COMPACTION_MODE_LATCH && (c[f++] = h);
          for (var l = 0; l < f; l++)
            o.write(
              /*(byte)*/
              c[l]
            );
          break;
        case r.BYTE_COMPACTION_MODE_LATCH_6:
          for (; i < t[0] && !s; ) {
            var v = t[i++];
            if (v < r.TEXT_COMPACTION_MODE_LATCH)
              f++, u = 900 * u + v;
            else
              switch (v) {
                case r.TEXT_COMPACTION_MODE_LATCH:
                case r.BYTE_COMPACTION_MODE_LATCH:
                case r.NUMERIC_COMPACTION_MODE_LATCH:
                case r.BYTE_COMPACTION_MODE_LATCH_6:
                case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case r.MACRO_PDF417_TERMINATOR:
                  i--, s = !0;
                  break;
              }
            if (f % 5 === 0 && f > 0) {
              for (var d = 0; d < 6; ++d)
                o.write(
                  /*(byte)*/
                  Number(Ie(u) >> Ie(8 * (5 - d)))
                );
              u = 0, f = 0;
            }
          }
          break;
      }
      return a.append(_e.decode(o.toByteArray(), n)), i;
    }, r.numericCompaction = function(e, t, n) {
      for (var i = 0, a = !1, o = new Int32Array(r.MAX_NUMERIC_CODEWORDS); t < e[0] && !a; ) {
        var f = e[t++];
        if (t === e[0] && (a = !0), f < r.TEXT_COMPACTION_MODE_LATCH)
          o[i] = f, i++;
        else
          switch (f) {
            case r.TEXT_COMPACTION_MODE_LATCH:
            case r.BYTE_COMPACTION_MODE_LATCH:
            case r.BYTE_COMPACTION_MODE_LATCH_6:
            case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case r.MACRO_PDF417_TERMINATOR:
              t--, a = !0;
              break;
          }
        (i % r.MAX_NUMERIC_CODEWORDS === 0 || f === r.NUMERIC_COMPACTION_MODE_LATCH || a) && i > 0 && (n.append(r.decodeBase900toBase10(o, i)), i = 0);
      }
      return t;
    }, r.decodeBase900toBase10 = function(e, t) {
      for (var n = Ie(0), i = 0; i < t; i++)
        n += r.EXP900[t - i - 1] * Ie(e[i]);
      var a = n.toString();
      if (a.charAt(0) !== "1")
        throw new m();
      return a.substring(1);
    }, r.TEXT_COMPACTION_MODE_LATCH = 900, r.BYTE_COMPACTION_MODE_LATCH = 901, r.NUMERIC_COMPACTION_MODE_LATCH = 902, r.BYTE_COMPACTION_MODE_LATCH_6 = 924, r.ECI_USER_DEFINED = 925, r.ECI_GENERAL_PURPOSE = 926, r.ECI_CHARSET = 927, r.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, r.MACRO_PDF417_TERMINATOR = 922, r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, r.MAX_NUMERIC_CODEWORDS = 15, r.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, r.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, r.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, r.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, r.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, r.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, r.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, r.PL = 25, r.LL = 27, r.AS = 27, r.ML = 28, r.AL = 28, r.PS = 29, r.PAL = 29, r.PUNCT_CHARS = `;<>@[\\]_\`~!\r	,:
-.$/"|*()?{}'`, r.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^", r.EXP900 = gr() ? fa() : [], r.NUMBER_OF_SEQUENCE_CODEWORDS = 2, r;
  }()
), ke = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, sa = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e, t, n, i, a, o, f) {
      for (var u = new Ct(e, t, n, i, a), s = null, c = null, h, d = !0; ; d = !1) {
        if (t != null && (s = r.getRowIndicatorColumn(e, u, t, !0, o, f)), i != null && (c = r.getRowIndicatorColumn(e, u, i, !1, o, f)), h = r.merge(s, c), h == null)
          throw C.getNotFoundInstance();
        var l = h.getBoundingBox();
        if (d && l != null && (l.getMinY() < u.getMinY() || l.getMaxY() > u.getMaxY()))
          u = l;
        else
          break;
      }
      h.setBoundingBox(u);
      var v = h.getBarcodeColumnCount() + 1;
      h.setDetectionResultColumn(0, s), h.setDetectionResultColumn(v, c);
      for (var p = s != null, y = 1; y <= v; y++) {
        var _ = p ? y : v - y;
        if (h.getDetectionResultColumn(_) === /* null */
        void 0) {
          var g = void 0;
          _ === 0 || _ === v ? g = new Jt(u, _ === 0) : g = new pr(u), h.setDetectionResultColumn(_, g);
          for (var w = -1, E = w, I = u.getMinY(); I <= u.getMaxY(); I++) {
            if (w = r.getStartColumn(h, _, I, p), w < 0 || w > u.getMaxX()) {
              if (E === -1)
                continue;
              w = E;
            }
            var S = r.detectCodeword(e, u.getMinX(), u.getMaxX(), p, w, I, o, f);
            S != null && (g.setCodeword(I, S), E = w, o = Math.min(o, S.getWidth()), f = Math.max(f, S.getWidth()));
          }
        }
      }
      return r.createDecoderResult(h);
    }, r.merge = function(e, t) {
      if (e == null && t == null)
        return null;
      var n = r.getBarcodeMetadata(e, t);
      if (n == null)
        return null;
      var i = Ct.merge(r.adjustBoundingBox(e), r.adjustBoundingBox(t));
      return new Ki(n, i);
    }, r.adjustBoundingBox = function(e) {
      var t, n;
      if (e == null)
        return null;
      var i = e.getRowHeights();
      if (i == null)
        return null;
      var a = r.getMax(i), o = 0;
      try {
        for (var f = ke(i), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          if (o += a - s, s > 0)
            break;
        }
      } catch (l) {
        t = { error: l };
      } finally {
        try {
          u && !u.done && (n = f.return) && n.call(f);
        } finally {
          if (t)
            throw t.error;
        }
      }
      for (var c = e.getCodewords(), h = 0; o > 0 && c[h] == null; h++)
        o--;
      for (var d = 0, h = i.length - 1; h >= 0 && (d += a - i[h], !(i[h] > 0)); h--)
        ;
      for (var h = c.length - 1; d > 0 && c[h] == null; h--)
        d--;
      return e.getBoundingBox().addMissingRows(o, d, e.isLeft());
    }, r.getMax = function(e) {
      var t, n, i = -1;
      try {
        for (var a = ke(e), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          i = Math.max(i, f);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return i;
    }, r.getBarcodeMetadata = function(e, t) {
      var n;
      if (e == null || (n = e.getBarcodeMetadata()) == null)
        return t == null ? null : t.getBarcodeMetadata();
      var i;
      return t == null || (i = t.getBarcodeMetadata()) == null ? n : n.getColumnCount() !== i.getColumnCount() && n.getErrorCorrectionLevel() !== i.getErrorCorrectionLevel() && n.getRowCount() !== i.getRowCount() ? null : n;
    }, r.getRowIndicatorColumn = function(e, t, n, i, a, o) {
      for (var f = new Jt(t, i), u = 0; u < 2; u++)
        for (var s = u === 0 ? 1 : -1, c = Math.trunc(Math.trunc(n.getX())), h = Math.trunc(Math.trunc(n.getY())); h <= t.getMaxY() && h >= t.getMinY(); h += s) {
          var d = r.detectCodeword(e, 0, e.getWidth(), i, c, h, a, o);
          d != null && (f.setCodeword(h, d), i ? c = d.getStartX() : c = d.getEndX());
        }
      return f;
    }, r.adjustCodewordCount = function(e, t) {
      var n = t[0][1], i = n.getValue(), a = e.getBarcodeColumnCount() * e.getBarcodeRowCount() - r.getNumberOfECCodeWords(e.getBarcodeECLevel());
      if (i.length === 0) {
        if (a < 1 || a > F.MAX_CODEWORDS_IN_BARCODE)
          throw C.getNotFoundInstance();
        n.setValue(a);
      } else
        i[0] !== a && n.setValue(a);
    }, r.createDecoderResult = function(e) {
      var t = r.createBarcodeMatrix(e);
      r.adjustCodewordCount(e, t);
      for (var n = new Array(), i = new Int32Array(e.getBarcodeRowCount() * e.getBarcodeColumnCount()), a = (
        /*List<int[]>*/
        []
      ), o = (
        /*Collection<Integer>*/
        new Array()
      ), f = 0; f < e.getBarcodeRowCount(); f++)
        for (var u = 0; u < e.getBarcodeColumnCount(); u++) {
          var s = t[f][u + 1].getValue(), c = f * e.getBarcodeColumnCount() + u;
          s.length === 0 ? n.push(c) : s.length === 1 ? i[c] = s[0] : (o.push(c), a.push(s));
        }
      for (var h = new Array(a.length), d = 0; d < h.length; d++)
        h[d] = a[d];
      return r.createDecoderResultFromAmbiguousValues(e.getBarcodeECLevel(), i, F.toIntArray(n), F.toIntArray(o), h);
    }, r.createDecoderResultFromAmbiguousValues = function(e, t, n, i, a) {
      for (var o = new Int32Array(i.length), f = 100; f-- > 0; ) {
        for (var u = 0; u < o.length; u++)
          t[i[u]] = a[u][o[u]];
        try {
          return r.decodeCodewords(t, e, n);
        } catch (c) {
          var s = c instanceof re;
          if (!s)
            throw c;
        }
        if (o.length === 0)
          throw re.getChecksumInstance();
        for (var u = 0; u < o.length; u++)
          if (o[u] < a[u].length - 1) {
            o[u]++;
            break;
          } else if (o[u] = 0, u === o.length - 1)
            throw re.getChecksumInstance();
      }
      throw re.getChecksumInstance();
    }, r.createBarcodeMatrix = function(e) {
      for (var t, n, i, a, o = Array.from({ length: e.getBarcodeRowCount() }, function() {
        return new Array(e.getBarcodeColumnCount() + 2);
      }), f = 0; f < o.length; f++)
        for (var u = 0; u < o[f].length; u++)
          o[f][u] = new Ge();
      var s = 0;
      try {
        for (var c = ke(e.getDetectionResultColumns()), h = c.next(); !h.done; h = c.next()) {
          var d = h.value;
          if (d != null)
            try {
              for (var l = (i = void 0, ke(d.getCodewords())), v = l.next(); !v.done; v = l.next()) {
                var p = v.value;
                if (p != null) {
                  var y = p.getRowNumber();
                  if (y >= 0) {
                    if (y >= o.length)
                      continue;
                    o[y][s].setValue(p.getValue());
                  }
                }
              }
            } catch (_) {
              i = { error: _ };
            } finally {
              try {
                v && !v.done && (a = l.return) && a.call(l);
              } finally {
                if (i)
                  throw i.error;
              }
            }
          s++;
        }
      } catch (_) {
        t = { error: _ };
      } finally {
        try {
          h && !h.done && (n = c.return) && n.call(c);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return o;
    }, r.isValidBarcodeColumn = function(e, t) {
      return t >= 0 && t <= e.getBarcodeColumnCount() + 1;
    }, r.getStartColumn = function(e, t, n, i) {
      var a, o, f = i ? 1 : -1, u = null;
      if (r.isValidBarcodeColumn(e, t - f) && (u = e.getDetectionResultColumn(t - f).getCodeword(n)), u != null)
        return i ? u.getEndX() : u.getStartX();
      if (u = e.getDetectionResultColumn(t).getCodewordNearby(n), u != null)
        return i ? u.getStartX() : u.getEndX();
      if (r.isValidBarcodeColumn(e, t - f) && (u = e.getDetectionResultColumn(t - f).getCodewordNearby(n)), u != null)
        return i ? u.getEndX() : u.getStartX();
      for (var s = 0; r.isValidBarcodeColumn(e, t - f); ) {
        t -= f;
        try {
          for (var c = (a = void 0, ke(e.getDetectionResultColumn(t).getCodewords())), h = c.next(); !h.done; h = c.next()) {
            var d = h.value;
            if (d != null)
              return (i ? d.getEndX() : d.getStartX()) + f * s * (d.getEndX() - d.getStartX());
          }
        } catch (l) {
          a = { error: l };
        } finally {
          try {
            h && !h.done && (o = c.return) && o.call(c);
          } finally {
            if (a)
              throw a.error;
          }
        }
        s++;
      }
      return i ? e.getBoundingBox().getMinX() : e.getBoundingBox().getMaxX();
    }, r.detectCodeword = function(e, t, n, i, a, o, f, u) {
      a = r.adjustCodewordStartColumn(e, t, n, i, a, o);
      var s = r.getModuleBitCount(e, t, n, i, a, o);
      if (s == null)
        return null;
      var c, h = L.sum(s);
      if (i)
        c = a + h;
      else {
        for (var d = 0; d < s.length / 2; d++) {
          var l = s[d];
          s[d] = s[s.length - 1 - d], s[s.length - 1 - d] = l;
        }
        c = a, a = c - h;
      }
      if (!r.checkCodewordSkew(h, f, u))
        return null;
      var v = Qi.getDecodedValue(s), p = F.getCodeword(v);
      return p === -1 ? null : new qi(a, c, r.getCodewordBucketNumber(v), p);
    }, r.getModuleBitCount = function(e, t, n, i, a, o) {
      for (var f = a, u = new Int32Array(8), s = 0, c = i ? 1 : -1, h = i; (i ? f < n : f >= t) && s < u.length; )
        e.get(f, o) === h ? (u[s]++, f += c) : (s++, h = !h);
      return s === u.length || f === (i ? n : t) && s === u.length - 1 ? u : null;
    }, r.getNumberOfECCodeWords = function(e) {
      return 2 << e;
    }, r.adjustCodewordStartColumn = function(e, t, n, i, a, o) {
      for (var f = a, u = i ? -1 : 1, s = 0; s < 2; s++) {
        for (; (i ? f >= t : f < n) && i === e.get(f, o); ) {
          if (Math.abs(a - f) > r.CODEWORD_SKEW_SIZE)
            return a;
          f += u;
        }
        u = -u, i = !i;
      }
      return f;
    }, r.checkCodewordSkew = function(e, t, n) {
      return t - r.CODEWORD_SKEW_SIZE <= e && e <= n + r.CODEWORD_SKEW_SIZE;
    }, r.decodeCodewords = function(e, t, n) {
      if (e.length === 0)
        throw m.getFormatInstance();
      var i = 1 << t + 1, a = r.correctErrors(e, n, i);
      r.verifyCodewordCount(e, i);
      var o = ua.decode(e, "" + t);
      return o.setErrorsCorrected(a), o.setErasures(n.length), o;
    }, r.correctErrors = function(e, t, n) {
      if (t != null && t.length > n / 2 + r.MAX_ERRORS || n < 0 || n > r.MAX_EC_CODEWORDS)
        throw re.getChecksumInstance();
      return r.errorCorrection.decode(e, n, t);
    }, r.verifyCodewordCount = function(e, t) {
      if (e.length < 4)
        throw m.getFormatInstance();
      var n = e[0];
      if (n > e.length)
        throw m.getFormatInstance();
      if (n === 0)
        if (t < e.length)
          e[0] = e.length - t;
        else
          throw m.getFormatInstance();
    }, r.getBitCountForCodeword = function(e) {
      for (var t = new Int32Array(8), n = 0, i = t.length - 1; !((e & 1) !== n && (n = e & 1, i--, i < 0)); )
        t[i]++, e >>= 1;
      return t;
    }, r.getCodewordBucketNumber = function(e) {
      return e instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(e) : this.getCodewordBucketNumber_number(e);
    }, r.getCodewordBucketNumber_number = function(e) {
      return r.getCodewordBucketNumber(r.getBitCountForCodeword(e));
    }, r.getCodewordBucketNumber_Int32Array = function(e) {
      return (e[0] - e[2] + e[4] - e[6] + 9) % 9;
    }, r.toString = function(e) {
      for (var t = new Rt(), n = 0; n < e.length; n++) {
        t.format("Row %2d: ", n);
        for (var i = 0; i < e[n].length; i++) {
          var a = e[n][i];
          a.getValue().length === 0 ? t.format("        ", null) : t.format("%4d(%2d)", a.getValue()[0], a.getConfidence(a.getValue()[0]));
        }
        t.format("%n");
      }
      return t.toString();
    }, r.CODEWORD_SKEW_SIZE = 2, r.MAX_ERRORS = 3, r.MAX_EC_CODEWORDS = 512, r.errorCorrection = new Xi(), r;
  }()
), ca = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, It = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e, t) {
      t === void 0 && (t = null);
      var n = r.decode(e, t, !1);
      if (n == null || n.length === 0 || n[0] == null)
        throw C.getNotFoundInstance();
      return n[0];
    }, r.prototype.decodeMultiple = function(e, t) {
      t === void 0 && (t = null);
      try {
        return r.decode(e, t, !0);
      } catch (n) {
        throw n instanceof m || n instanceof re ? C.getNotFoundInstance() : n;
      }
    }, r.decode = function(e, t, n) {
      var i, a, o = new Array(), f = Li.detectMultiple(e, t, n);
      try {
        for (var u = ca(f.getPoints()), s = u.next(); !s.done; s = u.next()) {
          var c = s.value, h = sa.decode(f.getBits(), c[4], c[5], c[6], c[7], r.getMinCodewordWidth(c), r.getMaxCodewordWidth(c)), d = new he(h.getText(), h.getRawBytes(), void 0, c, R.PDF_417);
          d.putMetadata(ne.ERROR_CORRECTION_LEVEL, h.getECLevel());
          var l = h.getOther();
          l != null && d.putMetadata(ne.PDF417_EXTRA_METADATA, l), o.push(d);
        }
      } catch (v) {
        i = { error: v };
      } finally {
        try {
          s && !s.done && (a = u.return) && a.call(u);
        } finally {
          if (i)
            throw i.error;
        }
      }
      return o.map(function(v) {
        return v;
      });
    }, r.getMaxWidth = function(e, t) {
      return e == null || t == null ? 0 : Math.trunc(Math.abs(e.getX() - t.getX()));
    }, r.getMinWidth = function(e, t) {
      return e == null || t == null ? M.MAX_VALUE : Math.trunc(Math.abs(e.getX() - t.getX()));
    }, r.getMaxCodewordWidth = function(e) {
      return Math.floor(Math.max(Math.max(r.getMaxWidth(e[0], e[4]), r.getMaxWidth(e[6], e[2]) * F.MODULES_IN_CODEWORD / F.MODULES_IN_STOP_PATTERN), Math.max(r.getMaxWidth(e[1], e[5]), r.getMaxWidth(e[7], e[3]) * F.MODULES_IN_CODEWORD / F.MODULES_IN_STOP_PATTERN)));
    }, r.getMinCodewordWidth = function(e) {
      return Math.floor(Math.min(Math.min(r.getMinWidth(e[0], e[4]), r.getMinWidth(e[6], e[2]) * F.MODULES_IN_CODEWORD / F.MODULES_IN_STOP_PATTERN), Math.min(r.getMinWidth(e[1], e[5]), r.getMinWidth(e[7], e[3]) * F.MODULES_IN_CODEWORD / F.MODULES_IN_STOP_PATTERN)));
    }, r.prototype.reset = function() {
    }, r;
  }()
), ha = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), tr = (
  /** @class */
  function(r) {
    ha(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "ReaderException", e;
  }(fe)
), rr = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, la = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e, t) {
      return this.setHints(t), this.decodeInternal(e);
    }, r.prototype.decodeWithState = function(e) {
      return (this.readers === null || this.readers === void 0) && this.setHints(null), this.decodeInternal(e);
    }, r.prototype.setHints = function(e) {
      this.hints = e;
      var t = e != null && e.get(j.TRY_HARDER) !== void 0, n = e == null ? null : e.get(j.POSSIBLE_FORMATS), i = new Array();
      if (n != null) {
        var a = n.some(function(o) {
          return o === R.UPC_A || o === R.UPC_E || o === R.EAN_13 || o === R.EAN_8 || o === R.CODABAR || o === R.CODE_39 || o === R.CODE_93 || o === R.CODE_128 || o === R.ITF || o === R.RSS_14 || o === R.RSS_EXPANDED;
        });
        a && !t && i.push(new He(e)), n.includes(R.QR_CODE) && i.push(new Et()), n.includes(R.DATA_MATRIX) && i.push(new wt()), n.includes(R.AZTEC) && i.push(new _t()), n.includes(R.PDF_417) && i.push(new It()), a && t && i.push(new He(e));
      }
      i.length === 0 && (t || i.push(new He(e)), i.push(new Et()), i.push(new wt()), i.push(new _t()), i.push(new It()), t && i.push(new He(e))), this.readers = i;
    }, r.prototype.reset = function() {
      var e, t;
      if (this.readers !== null)
        try {
          for (var n = rr(this.readers), i = n.next(); !i.done; i = n.next()) {
            var a = i.value;
            a.reset();
          }
        } catch (o) {
          e = { error: o };
        } finally {
          try {
            i && !i.done && (t = n.return) && t.call(n);
          } finally {
            if (e)
              throw e.error;
          }
        }
    }, r.prototype.decodeInternal = function(e) {
      var t, n;
      if (this.readers === null)
        throw new tr("No readers where selected, nothing can be read.");
      try {
        for (var i = rr(this.readers), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          try {
            return o.decode(e, this.hints);
          } catch (f) {
            if (f instanceof tr)
              continue;
          }
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
      throw new C("No MultiFormat Readers were able to detect the code.");
    }, r;
  }()
), da = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), yr = (
  /** @class */
  function(r) {
    da(e, r);
    function e(t, n) {
      t === void 0 && (t = null), n === void 0 && (n = 500);
      var i = this, a = new la();
      return a.setHints(t), i = r.call(this, a, n) || this, i;
    }
    return e.prototype.decodeBitmap = function(t) {
      return this.reader.decodeWithState(t);
    }, e;
  }(Fe)
), va = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  va(e, r);
  function e(t) {
    return t === void 0 && (t = 500), r.call(this, new It(), t) || this;
  }
  return e;
})(Fe);
var xa = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  xa(e, r);
  function e(t) {
    return t === void 0 && (t = 500), r.call(this, new Et(), t) || this;
  }
  return e;
})(Fe);
var St;
(function(r) {
  r[r.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", r[r.CHARACTER_SET = 1] = "CHARACTER_SET", r[r.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", r[r.MIN_SIZE = 3] = "MIN_SIZE", r[r.MAX_SIZE = 4] = "MAX_SIZE", r[r.MARGIN = 5] = "MARGIN", r[r.PDF417_COMPACT = 6] = "PDF417_COMPACT", r[r.PDF417_COMPACTION = 7] = "PDF417_COMPACTION", r[r.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS", r[r.AZTEC_LAYERS = 9] = "AZTEC_LAYERS", r[r.QR_VERSION = 10] = "QR_VERSION";
})(St || (St = {}));
const je = St;
var _r = (
  /** @class */
  function() {
    function r(e) {
      this.field = e, this.cachedGenerators = [], this.cachedGenerators.push(new Se(e, Int32Array.from([1])));
    }
    return r.prototype.buildGenerator = function(e) {
      var t = this.cachedGenerators;
      if (e >= t.length)
        for (var n = t[t.length - 1], i = this.field, a = t.length; a <= e; a++) {
          var o = n.multiply(new Se(i, Int32Array.from([1, i.exp(a - 1 + i.getGeneratorBase())])));
          t.push(o), n = o;
        }
      return t[e];
    }, r.prototype.encode = function(e, t) {
      if (t === 0)
        throw new D("No error correction bytes");
      var n = e.length - t;
      if (n <= 0)
        throw new D("No data bytes provided");
      var i = this.buildGenerator(t), a = new Int32Array(n);
      W.arraycopy(e, 0, a, 0, n);
      var o = new Se(this.field, a);
      o = o.multiplyByMonomial(t, 1);
      for (var f = o.divide(i)[1], u = f.getCoefficients(), s = t - u.length, c = 0; c < s; c++)
        e[n + c] = 0;
      W.arraycopy(u, 0, e, n + s, u.length);
    }, r;
  }()
), Xe = (
  /** @class */
  function() {
    function r() {
    }
    return r.applyMaskPenaltyRule1 = function(e) {
      return r.applyMaskPenaltyRule1Internal(e, !0) + r.applyMaskPenaltyRule1Internal(e, !1);
    }, r.applyMaskPenaltyRule2 = function(e) {
      for (var t = 0, n = e.getArray(), i = e.getWidth(), a = e.getHeight(), o = 0; o < a - 1; o++)
        for (var f = n[o], u = 0; u < i - 1; u++) {
          var s = f[u];
          s === f[u + 1] && s === n[o + 1][u] && s === n[o + 1][u + 1] && t++;
        }
      return r.N2 * t;
    }, r.applyMaskPenaltyRule3 = function(e) {
      for (var t = 0, n = e.getArray(), i = e.getWidth(), a = e.getHeight(), o = 0; o < a; o++)
        for (var f = 0; f < i; f++) {
          var u = n[o];
          f + 6 < i && u[f] === 1 && u[f + 1] === 0 && u[f + 2] === 1 && u[f + 3] === 1 && u[f + 4] === 1 && u[f + 5] === 0 && u[f + 6] === 1 && (r.isWhiteHorizontal(u, f - 4, f) || r.isWhiteHorizontal(u, f + 7, f + 11)) && t++, o + 6 < a && n[o][f] === 1 && n[o + 1][f] === 0 && n[o + 2][f] === 1 && n[o + 3][f] === 1 && n[o + 4][f] === 1 && n[o + 5][f] === 0 && n[o + 6][f] === 1 && (r.isWhiteVertical(n, f, o - 4, o) || r.isWhiteVertical(n, f, o + 7, o + 11)) && t++;
        }
      return t * r.N3;
    }, r.isWhiteHorizontal = function(e, t, n) {
      t = Math.max(t, 0), n = Math.min(n, e.length);
      for (var i = t; i < n; i++)
        if (e[i] === 1)
          return !1;
      return !0;
    }, r.isWhiteVertical = function(e, t, n, i) {
      n = Math.max(n, 0), i = Math.min(i, e.length);
      for (var a = n; a < i; a++)
        if (e[a][t] === 1)
          return !1;
      return !0;
    }, r.applyMaskPenaltyRule4 = function(e) {
      for (var t = 0, n = e.getArray(), i = e.getWidth(), a = e.getHeight(), o = 0; o < a; o++)
        for (var f = n[o], u = 0; u < i; u++)
          f[u] === 1 && t++;
      var s = e.getHeight() * e.getWidth(), c = Math.floor(Math.abs(t * 2 - s) * 10 / s);
      return c * r.N4;
    }, r.getDataMaskBit = function(e, t, n) {
      var i, a;
      switch (e) {
        case 0:
          i = n + t & 1;
          break;
        case 1:
          i = n & 1;
          break;
        case 2:
          i = t % 3;
          break;
        case 3:
          i = (n + t) % 3;
          break;
        case 4:
          i = Math.floor(n / 2) + Math.floor(t / 3) & 1;
          break;
        case 5:
          a = n * t, i = (a & 1) + a % 3;
          break;
        case 6:
          a = n * t, i = (a & 1) + a % 3 & 1;
          break;
        case 7:
          a = n * t, i = a % 3 + (n + t & 1) & 1;
          break;
        default:
          throw new D("Invalid mask pattern: " + e);
      }
      return i === 0;
    }, r.applyMaskPenaltyRule1Internal = function(e, t) {
      for (var n = 0, i = t ? e.getHeight() : e.getWidth(), a = t ? e.getWidth() : e.getHeight(), o = e.getArray(), f = 0; f < i; f++) {
        for (var u = 0, s = -1, c = 0; c < a; c++) {
          var h = t ? o[f][c] : o[c][f];
          h === s ? u++ : (u >= 5 && (n += r.N1 + (u - 5)), u = 1, s = h);
        }
        u >= 5 && (n += r.N1 + (u - 5));
      }
      return n;
    }, r.N1 = 3, r.N2 = 3, r.N3 = 40, r.N4 = 10, r;
  }()
), pa = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ga = (
  /** @class */
  function() {
    function r(e, t) {
      this.width = e, this.height = t;
      for (var n = new Array(t), i = 0; i !== t; i++)
        n[i] = new Uint8Array(e);
      this.bytes = n;
    }
    return r.prototype.getHeight = function() {
      return this.height;
    }, r.prototype.getWidth = function() {
      return this.width;
    }, r.prototype.get = function(e, t) {
      return this.bytes[t][e];
    }, r.prototype.getArray = function() {
      return this.bytes;
    }, r.prototype.setNumber = function(e, t, n) {
      this.bytes[t][e] = n;
    }, r.prototype.setBoolean = function(e, t, n) {
      this.bytes[t][e] = /*(byte) */
      n ? 1 : 0;
    }, r.prototype.clear = function(e) {
      var t, n;
      try {
        for (var i = pa(this.bytes), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          ce.fill(o, e);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      if (this.width !== t.width || this.height !== t.height)
        return !1;
      for (var n = 0, i = this.height; n < i; ++n)
        for (var a = this.bytes[n], o = t.bytes[n], f = 0, u = this.width; f < u; ++f)
          if (a[f] !== o[f])
            return !1;
      return !0;
    }, r.prototype.toString = function() {
      for (var e = new G(), t = 0, n = this.height; t < n; ++t) {
        for (var i = this.bytes[t], a = 0, o = this.width; a < o; ++a)
          switch (i[a]) {
            case 0:
              e.append(" 0");
              break;
            case 1:
              e.append(" 1");
              break;
            default:
              e.append("  ");
              break;
          }
        e.append(`
`);
      }
      return e.toString();
    }, r;
  }()
), mt = (
  /** @class */
  function() {
    function r() {
      this.maskPattern = -1;
    }
    return r.prototype.getMode = function() {
      return this.mode;
    }, r.prototype.getECLevel = function() {
      return this.ecLevel;
    }, r.prototype.getVersion = function() {
      return this.version;
    }, r.prototype.getMaskPattern = function() {
      return this.maskPattern;
    }, r.prototype.getMatrix = function() {
      return this.matrix;
    }, r.prototype.toString = function() {
      var e = new G();
      return e.append(`<<
`), e.append(" mode: "), e.append(this.mode ? this.mode.toString() : "null"), e.append(`
 ecLevel: `), e.append(this.ecLevel ? this.ecLevel.toString() : "null"), e.append(`
 version: `), e.append(this.version ? this.version.toString() : "null"), e.append(`
 maskPattern: `), e.append(this.maskPattern.toString()), this.matrix ? (e.append(`
 matrix:
`), e.append(this.matrix.toString())) : e.append(`
 matrix: null
`), e.append(`>>
`), e.toString();
    }, r.prototype.setMode = function(e) {
      this.mode = e;
    }, r.prototype.setECLevel = function(e) {
      this.ecLevel = e;
    }, r.prototype.setVersion = function(e) {
      this.version = e;
    }, r.prototype.setMaskPattern = function(e) {
      this.maskPattern = e;
    }, r.prototype.setMatrix = function(e) {
      this.matrix = e;
    }, r.isValidMaskPattern = function(e) {
      return e >= 0 && e < r.NUM_MASK_PATTERNS;
    }, r.NUM_MASK_PATTERNS = 8, r;
  }()
), ya = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), z = (
  /** @class */
  function(r) {
    ya(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "WriterException", e;
  }(fe)
), nr = (
  /** @class */
  function() {
    function r() {
    }
    return r.clearMatrix = function(e) {
      e.clear(
        /*(byte) */
        /*-1*/
        255
      );
    }, r.buildMatrix = function(e, t, n, i, a) {
      r.clearMatrix(a), r.embedBasicPatterns(n, a), r.embedTypeInfo(t, i, a), r.maybeEmbedVersionInfo(n, a), r.embedDataBits(e, i, a);
    }, r.embedBasicPatterns = function(e, t) {
      r.embedPositionDetectionPatternsAndSeparators(t), r.embedDarkDotAtLeftBottomCorner(t), r.maybeEmbedPositionAdjustmentPatterns(e, t), r.embedTimingPatterns(t);
    }, r.embedTypeInfo = function(e, t, n) {
      var i = new ee();
      r.makeTypeInfoBits(e, t, i);
      for (var a = 0, o = i.getSize(); a < o; ++a) {
        var f = i.get(i.getSize() - 1 - a), u = r.TYPE_INFO_COORDINATES[a], s = u[0], c = u[1];
        if (n.setBoolean(s, c, f), a < 8) {
          var h = n.getWidth() - a - 1, d = 8;
          n.setBoolean(h, d, f);
        } else {
          var h = 8, d = n.getHeight() - 7 + (a - 8);
          n.setBoolean(h, d, f);
        }
      }
    }, r.maybeEmbedVersionInfo = function(e, t) {
      if (!(e.getVersionNumber() < 7)) {
        var n = new ee();
        r.makeVersionInfoBits(e, n);
        for (var i = 6 * 3 - 1, a = 0; a < 6; ++a)
          for (var o = 0; o < 3; ++o) {
            var f = n.get(i);
            i--, t.setBoolean(a, t.getHeight() - 11 + o, f), t.setBoolean(t.getHeight() - 11 + o, a, f);
          }
      }
    }, r.embedDataBits = function(e, t, n) {
      for (var i = 0, a = -1, o = n.getWidth() - 1, f = n.getHeight() - 1; o > 0; ) {
        for (o === 6 && (o -= 1); f >= 0 && f < n.getHeight(); ) {
          for (var u = 0; u < 2; ++u) {
            var s = o - u;
            if (r.isEmpty(n.get(s, f))) {
              var c = void 0;
              i < e.getSize() ? (c = e.get(i), ++i) : c = !1, t !== 255 && Xe.getDataMaskBit(t, s, f) && (c = !c), n.setBoolean(s, f, c);
            }
          }
          f += a;
        }
        a = -a, f += a, o -= 2;
      }
      if (i !== e.getSize())
        throw new z("Not all bits consumed: " + i + "/" + e.getSize());
    }, r.findMSBSet = function(e) {
      return 32 - M.numberOfLeadingZeros(e);
    }, r.calculateBCHCode = function(e, t) {
      if (t === 0)
        throw new D("0 polynomial");
      var n = r.findMSBSet(t);
      for (e <<= n - 1; r.findMSBSet(e) >= n; )
        e ^= t << r.findMSBSet(e) - n;
      return e;
    }, r.makeTypeInfoBits = function(e, t, n) {
      if (!mt.isValidMaskPattern(t))
        throw new z("Invalid mask pattern");
      var i = e.getBits() << 3 | t;
      n.appendBits(i, 5);
      var a = r.calculateBCHCode(i, r.TYPE_INFO_POLY);
      n.appendBits(a, 10);
      var o = new ee();
      if (o.appendBits(r.TYPE_INFO_MASK_PATTERN, 15), n.xor(o), n.getSize() !== 15)
        throw new z("should not happen but we got: " + n.getSize());
    }, r.makeVersionInfoBits = function(e, t) {
      t.appendBits(e.getVersionNumber(), 6);
      var n = r.calculateBCHCode(e.getVersionNumber(), r.VERSION_INFO_POLY);
      if (t.appendBits(n, 12), t.getSize() !== 18)
        throw new z("should not happen but we got: " + t.getSize());
    }, r.isEmpty = function(e) {
      return e === 255;
    }, r.embedTimingPatterns = function(e) {
      for (var t = 8; t < e.getWidth() - 8; ++t) {
        var n = (t + 1) % 2;
        r.isEmpty(e.get(t, 6)) && e.setNumber(t, 6, n), r.isEmpty(e.get(6, t)) && e.setNumber(6, t, n);
      }
    }, r.embedDarkDotAtLeftBottomCorner = function(e) {
      if (e.get(8, e.getHeight() - 8) === 0)
        throw new z();
      e.setNumber(8, e.getHeight() - 8, 1);
    }, r.embedHorizontalSeparationPattern = function(e, t, n) {
      for (var i = 0; i < 8; ++i) {
        if (!r.isEmpty(n.get(e + i, t)))
          throw new z();
        n.setNumber(e + i, t, 0);
      }
    }, r.embedVerticalSeparationPattern = function(e, t, n) {
      for (var i = 0; i < 7; ++i) {
        if (!r.isEmpty(n.get(e, t + i)))
          throw new z();
        n.setNumber(e, t + i, 0);
      }
    }, r.embedPositionAdjustmentPattern = function(e, t, n) {
      for (var i = 0; i < 5; ++i)
        for (var a = r.POSITION_ADJUSTMENT_PATTERN[i], o = 0; o < 5; ++o)
          n.setNumber(e + o, t + i, a[o]);
    }, r.embedPositionDetectionPattern = function(e, t, n) {
      for (var i = 0; i < 7; ++i)
        for (var a = r.POSITION_DETECTION_PATTERN[i], o = 0; o < 7; ++o)
          n.setNumber(e + o, t + i, a[o]);
    }, r.embedPositionDetectionPatternsAndSeparators = function(e) {
      var t = r.POSITION_DETECTION_PATTERN[0].length;
      r.embedPositionDetectionPattern(0, 0, e), r.embedPositionDetectionPattern(e.getWidth() - t, 0, e), r.embedPositionDetectionPattern(0, e.getWidth() - t, e);
      var n = 8;
      r.embedHorizontalSeparationPattern(0, n - 1, e), r.embedHorizontalSeparationPattern(e.getWidth() - n, n - 1, e), r.embedHorizontalSeparationPattern(0, e.getWidth() - n, e);
      var i = 7;
      r.embedVerticalSeparationPattern(i, 0, e), r.embedVerticalSeparationPattern(e.getHeight() - i - 1, 0, e), r.embedVerticalSeparationPattern(i, e.getHeight() - i, e);
    }, r.maybeEmbedPositionAdjustmentPatterns = function(e, t) {
      if (!(e.getVersionNumber() < 2))
        for (var n = e.getVersionNumber() - 1, i = r.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[n], a = 0, o = i.length; a !== o; a++) {
          var f = i[a];
          if (f >= 0)
            for (var u = 0; u !== o; u++) {
              var s = i[u];
              s >= 0 && r.isEmpty(t.get(s, f)) && r.embedPositionAdjustmentPattern(s - 2, f - 2, t);
            }
        }
    }, r.POSITION_DETECTION_PATTERN = Array.from([
      Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
      Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
      Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
      Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
      Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
      Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
      Int32Array.from([1, 1, 1, 1, 1, 1, 1])
    ]), r.POSITION_ADJUSTMENT_PATTERN = Array.from([
      Int32Array.from([1, 1, 1, 1, 1]),
      Int32Array.from([1, 0, 0, 0, 1]),
      Int32Array.from([1, 0, 1, 0, 1]),
      Int32Array.from([1, 0, 0, 0, 1]),
      Int32Array.from([1, 1, 1, 1, 1])
    ]), r.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
      Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
      Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
      Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
      Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
      Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
      Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
      Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
      Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
      Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
      Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
      Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
      Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
      Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
      Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
      Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
      Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
      Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
      Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
      Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
      Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
      Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
      Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
      Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
      Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
      Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
      Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
      Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
      Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
      Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
      Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
      Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
      Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
      Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
      Int32Array.from([6, 30, 58, 86, 114, 142, 170])
    ]), r.TYPE_INFO_COORDINATES = Array.from([
      Int32Array.from([8, 0]),
      Int32Array.from([8, 1]),
      Int32Array.from([8, 2]),
      Int32Array.from([8, 3]),
      Int32Array.from([8, 4]),
      Int32Array.from([8, 5]),
      Int32Array.from([8, 7]),
      Int32Array.from([8, 8]),
      Int32Array.from([7, 8]),
      Int32Array.from([5, 8]),
      Int32Array.from([4, 8]),
      Int32Array.from([3, 8]),
      Int32Array.from([2, 8]),
      Int32Array.from([1, 8]),
      Int32Array.from([0, 8])
    ]), r.VERSION_INFO_POLY = 7973, r.TYPE_INFO_POLY = 1335, r.TYPE_INFO_MASK_PATTERN = 21522, r;
  }()
), _a = (
  /** @class */
  function() {
    function r(e, t) {
      this.dataBytes = e, this.errorCorrectionBytes = t;
    }
    return r.prototype.getDataBytes = function() {
      return this.dataBytes;
    }, r.prototype.getErrorCorrectionBytes = function() {
      return this.errorCorrectionBytes;
    }, r;
  }()
), ir = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
(function() {
  function r() {
  }
  return r.calculateMaskPenalty = function(e) {
    return Xe.applyMaskPenaltyRule1(e) + Xe.applyMaskPenaltyRule2(e) + Xe.applyMaskPenaltyRule3(e) + Xe.applyMaskPenaltyRule4(e);
  }, r.encode = function(e, t, n) {
    n === void 0 && (n = null);
    var i = r.DEFAULT_BYTE_MODE_ENCODING, a = n !== null && n.get(je.CHARACTER_SET) !== void 0;
    a && (i = n.get(je.CHARACTER_SET).toString());
    var o = this.chooseMode(e, i), f = new ee();
    if (o === Y.BYTE && (a || r.DEFAULT_BYTE_MODE_ENCODING !== i)) {
      var u = Q.getCharacterSetECIByName(i);
      u !== void 0 && this.appendECI(u, f);
    }
    this.appendModeInfo(o, f);
    var s = new ee();
    this.appendBytes(e, o, s, i);
    var c;
    if (n !== null && n.get(je.QR_VERSION) !== void 0) {
      var h = Number.parseInt(n.get(je.QR_VERSION).toString(), 10);
      c = Ne.getVersionForNumber(h);
      var d = this.calculateBitsNeeded(o, f, s, c);
      if (!this.willFit(d, c, t))
        throw new z("Data too big for requested version");
    } else
      c = this.recommendVersion(t, o, f, s);
    var l = new ee();
    l.appendBitArray(f);
    var v = o === Y.BYTE ? s.getSizeInBytes() : e.length;
    this.appendLengthInfo(v, c, o, l), l.appendBitArray(s);
    var p = c.getECBlocksForLevel(t), y = c.getTotalCodewords() - p.getTotalECCodewords();
    this.terminateBits(y, l);
    var _ = this.interleaveWithECBytes(l, c.getTotalCodewords(), y, p.getNumBlocks()), g = new mt();
    g.setECLevel(t), g.setMode(o), g.setVersion(c);
    var w = c.getDimensionForVersion(), E = new ga(w, w), I = this.chooseMaskPattern(_, t, c, E);
    return g.setMaskPattern(I), nr.buildMatrix(_, t, c, I, E), g.setMatrix(E), g;
  }, r.recommendVersion = function(e, t, n, i) {
    var a = this.calculateBitsNeeded(t, n, i, Ne.getVersionForNumber(1)), o = this.chooseVersion(a, e), f = this.calculateBitsNeeded(t, n, i, o);
    return this.chooseVersion(f, e);
  }, r.calculateBitsNeeded = function(e, t, n, i) {
    return t.getSize() + e.getCharacterCountBits(i) + n.getSize();
  }, r.getAlphanumericCode = function(e) {
    return e < r.ALPHANUMERIC_TABLE.length ? r.ALPHANUMERIC_TABLE[e] : -1;
  }, r.chooseMode = function(e, t) {
    if (t === void 0 && (t = null), Q.SJIS.getName() === t && this.isOnlyDoubleByteKanji(e))
      return Y.KANJI;
    for (var n = !1, i = !1, a = 0, o = e.length; a < o; ++a) {
      var f = e.charAt(a);
      if (r.isDigit(f))
        n = !0;
      else if (this.getAlphanumericCode(f.charCodeAt(0)) !== -1)
        i = !0;
      else
        return Y.BYTE;
    }
    return i ? Y.ALPHANUMERIC : n ? Y.NUMERIC : Y.BYTE;
  }, r.isOnlyDoubleByteKanji = function(e) {
    var t;
    try {
      t = _e.encode(e, Q.SJIS);
    } catch {
      return !1;
    }
    var n = t.length;
    if (n % 2 !== 0)
      return !1;
    for (var i = 0; i < n; i += 2) {
      var a = t[i] & 255;
      if ((a < 129 || a > 159) && (a < 224 || a > 235))
        return !1;
    }
    return !0;
  }, r.chooseMaskPattern = function(e, t, n, i) {
    for (var a = Number.MAX_SAFE_INTEGER, o = -1, f = 0; f < mt.NUM_MASK_PATTERNS; f++) {
      nr.buildMatrix(e, t, n, f, i);
      var u = this.calculateMaskPenalty(i);
      u < a && (a = u, o = f);
    }
    return o;
  }, r.chooseVersion = function(e, t) {
    for (var n = 1; n <= 40; n++) {
      var i = Ne.getVersionForNumber(n);
      if (r.willFit(e, i, t))
        return i;
    }
    throw new z("Data too big");
  }, r.willFit = function(e, t, n) {
    var i = t.getTotalCodewords(), a = t.getECBlocksForLevel(n), o = a.getTotalECCodewords(), f = i - o, u = (e + 7) / 8;
    return f >= u;
  }, r.terminateBits = function(e, t) {
    var n = e * 8;
    if (t.getSize() > n)
      throw new z("data bits cannot fit in the QR Code" + t.getSize() + " > " + n);
    for (var i = 0; i < 4 && t.getSize() < n; ++i)
      t.appendBit(!1);
    var a = t.getSize() & 7;
    if (a > 0)
      for (var i = a; i < 8; i++)
        t.appendBit(!1);
    for (var o = e - t.getSizeInBytes(), i = 0; i < o; ++i)
      t.appendBits(i & 1 ? 17 : 236, 8);
    if (t.getSize() !== n)
      throw new z("Bits size does not equal capacity");
  }, r.getNumDataBytesAndNumECBytesForBlockID = function(e, t, n, i, a, o) {
    if (i >= n)
      throw new z("Block ID too large");
    var f = e % n, u = n - f, s = Math.floor(e / n), c = s + 1, h = Math.floor(t / n), d = h + 1, l = s - h, v = c - d;
    if (l !== v)
      throw new z("EC bytes mismatch");
    if (n !== u + f)
      throw new z("RS blocks mismatch");
    if (e !== (h + l) * u + (d + v) * f)
      throw new z("Total bytes mismatch");
    i < u ? (a[0] = h, o[0] = l) : (a[0] = d, o[0] = v);
  }, r.interleaveWithECBytes = function(e, t, n, i) {
    var a, o, f, u;
    if (e.getSizeInBytes() !== n)
      throw new z("Number of bits and data bytes does not match");
    for (var s = 0, c = 0, h = 0, d = new Array(), l = 0; l < i; ++l) {
      var v = new Int32Array(1), p = new Int32Array(1);
      r.getNumDataBytesAndNumECBytesForBlockID(t, n, i, l, v, p);
      var y = v[0], _ = new Uint8Array(y);
      e.toBytes(8 * s, _, 0, y);
      var g = r.generateECBytes(_, p[0]);
      d.push(new _a(_, g)), c = Math.max(c, y), h = Math.max(h, g.length), s += v[0];
    }
    if (n !== s)
      throw new z("Data bytes does not match offset");
    for (var w = new ee(), l = 0; l < c; ++l)
      try {
        for (var E = (a = void 0, ir(d)), I = E.next(); !I.done; I = E.next()) {
          var S = I.value, _ = S.getDataBytes();
          l < _.length && w.appendBits(_[l], 8);
        }
      } catch (N) {
        a = { error: N };
      } finally {
        try {
          I && !I.done && (o = E.return) && o.call(E);
        } finally {
          if (a)
            throw a.error;
        }
      }
    for (var l = 0; l < h; ++l)
      try {
        for (var O = (f = void 0, ir(d)), b = O.next(); !b.done; b = O.next()) {
          var S = b.value, g = S.getErrorCorrectionBytes();
          l < g.length && w.appendBits(g[l], 8);
        }
      } catch (N) {
        f = { error: N };
      } finally {
        try {
          b && !b.done && (u = O.return) && u.call(O);
        } finally {
          if (f)
            throw f.error;
        }
      }
    if (t !== w.getSizeInBytes())
      throw new z("Interleaving error: " + t + " and " + w.getSizeInBytes() + " differ.");
    return w;
  }, r.generateECBytes = function(e, t) {
    for (var n = e.length, i = new Int32Array(n + t), a = 0; a < n; a++)
      i[a] = e[a] & 255;
    new _r(se.QR_CODE_FIELD_256).encode(i, t);
    for (var o = new Uint8Array(t), a = 0; a < t; a++)
      o[a] = /*(byte) */
      i[n + a];
    return o;
  }, r.appendModeInfo = function(e, t) {
    t.appendBits(e.getBits(), 4);
  }, r.appendLengthInfo = function(e, t, n, i) {
    var a = n.getCharacterCountBits(t);
    if (e >= 1 << a)
      throw new z(e + " is bigger than " + ((1 << a) - 1));
    i.appendBits(e, a);
  }, r.appendBytes = function(e, t, n, i) {
    switch (t) {
      case Y.NUMERIC:
        r.appendNumericBytes(e, n);
        break;
      case Y.ALPHANUMERIC:
        r.appendAlphanumericBytes(e, n);
        break;
      case Y.BYTE:
        r.append8BitBytes(e, n, i);
        break;
      case Y.KANJI:
        r.appendKanjiBytes(e, n);
        break;
      default:
        throw new z("Invalid mode: " + t);
    }
  }, r.getDigit = function(e) {
    return e.charCodeAt(0) - 48;
  }, r.isDigit = function(e) {
    var t = r.getDigit(e);
    return t >= 0 && t <= 9;
  }, r.appendNumericBytes = function(e, t) {
    for (var n = e.length, i = 0; i < n; ) {
      var a = r.getDigit(e.charAt(i));
      if (i + 2 < n) {
        var o = r.getDigit(e.charAt(i + 1)), f = r.getDigit(e.charAt(i + 2));
        t.appendBits(a * 100 + o * 10 + f, 10), i += 3;
      } else if (i + 1 < n) {
        var o = r.getDigit(e.charAt(i + 1));
        t.appendBits(a * 10 + o, 7), i += 2;
      } else
        t.appendBits(a, 4), i++;
    }
  }, r.appendAlphanumericBytes = function(e, t) {
    for (var n = e.length, i = 0; i < n; ) {
      var a = r.getAlphanumericCode(e.charCodeAt(i));
      if (a === -1)
        throw new z();
      if (i + 1 < n) {
        var o = r.getAlphanumericCode(e.charCodeAt(i + 1));
        if (o === -1)
          throw new z();
        t.appendBits(a * 45 + o, 11), i += 2;
      } else
        t.appendBits(a, 6), i++;
    }
  }, r.append8BitBytes = function(e, t, n) {
    var i;
    try {
      i = _e.encode(e, n);
    } catch (u) {
      throw new z(u);
    }
    for (var a = 0, o = i.length; a !== o; a++) {
      var f = i[a];
      t.appendBits(f, 8);
    }
  }, r.appendKanjiBytes = function(e, t) {
    var n;
    try {
      n = _e.encode(e, Q.SJIS);
    } catch (h) {
      throw new z(h);
    }
    for (var i = n.length, a = 0; a < i; a += 2) {
      var o = n[a] & 255, f = n[a + 1] & 255, u = o << 8 & 4294967295 | f, s = -1;
      if (u >= 33088 && u <= 40956 ? s = u - 33088 : u >= 57408 && u <= 60351 && (s = u - 49472), s === -1)
        throw new z("Invalid byte sequence");
      var c = (s >> 8) * 192 + (s & 255);
      t.appendBits(c, 13);
    }
  }, r.appendECI = function(e, t) {
    t.appendBits(Y.ECI.getBits(), 4), t.appendBits(e.getValue(), 8);
  }, r.ALPHANUMERIC_TABLE = Int32Array.from([
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    36,
    -1,
    -1,
    -1,
    37,
    38,
    -1,
    -1,
    -1,
    -1,
    39,
    40,
    -1,
    41,
    42,
    43,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    44,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    -1,
    -1,
    -1,
    -1,
    -1
  ]), r.DEFAULT_BYTE_MODE_ENCODING = Q.UTF8.getName(), r;
})();
var Aa = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  Aa(e, r);
  function e(t, n, i, a, o, f, u, s) {
    var c = r.call(this, f, u) || this;
    if (c.yuvData = t, c.dataWidth = n, c.dataHeight = i, c.left = a, c.top = o, a + f > n || o + u > i)
      throw new D("Crop rectangle does not fit within image data.");
    return s && c.reverseHorizontal(f, u), c;
  }
  return e.prototype.getRow = function(t, n) {
    if (t < 0 || t >= this.getHeight())
      throw new D("Requested row is outside the image: " + t);
    var i = this.getWidth();
    (n == null || n.length < i) && (n = new Uint8ClampedArray(i));
    var a = (t + this.top) * this.dataWidth + this.left;
    return W.arraycopy(this.yuvData, a, n, 0, i), n;
  }, e.prototype.getMatrix = function() {
    var t = this.getWidth(), n = this.getHeight();
    if (t === this.dataWidth && n === this.dataHeight)
      return this.yuvData;
    var i = t * n, a = new Uint8ClampedArray(i), o = this.top * this.dataWidth + this.left;
    if (t === this.dataWidth)
      return W.arraycopy(this.yuvData, o, a, 0, i), a;
    for (var f = 0; f < n; f++) {
      var u = f * t;
      W.arraycopy(this.yuvData, o, a, u, t), o += this.dataWidth;
    }
    return a;
  }, e.prototype.isCropSupported = function() {
    return !0;
  }, e.prototype.crop = function(t, n, i, a) {
    return new e(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + n, i, a, !1);
  }, e.prototype.renderThumbnail = function() {
    for (var t = this.getWidth() / e.THUMBNAIL_SCALE_FACTOR, n = this.getHeight() / e.THUMBNAIL_SCALE_FACTOR, i = new Int32Array(t * n), a = this.yuvData, o = this.top * this.dataWidth + this.left, f = 0; f < n; f++) {
      for (var u = f * t, s = 0; s < t; s++) {
        var c = a[o + s * e.THUMBNAIL_SCALE_FACTOR] & 255;
        i[u + s] = 4278190080 | c * 65793;
      }
      o += this.dataWidth * e.THUMBNAIL_SCALE_FACTOR;
    }
    return i;
  }, e.prototype.getThumbnailWidth = function() {
    return this.getWidth() / e.THUMBNAIL_SCALE_FACTOR;
  }, e.prototype.getThumbnailHeight = function() {
    return this.getHeight() / e.THUMBNAIL_SCALE_FACTOR;
  }, e.prototype.reverseHorizontal = function(t, n) {
    for (var i = this.yuvData, a = 0, o = this.top * this.dataWidth + this.left; a < n; a++, o += this.dataWidth)
      for (var f = o + t / 2, u = o, s = o + t - 1; u < f; u++, s--) {
        var c = i[u];
        i[u] = i[s], i[s] = c;
      }
  }, e.prototype.invert = function() {
    return new Tt(this);
  }, e.THUMBNAIL_SCALE_FACTOR = 2, e;
})(rt);
var wa = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  wa(e, r);
  function e(t, n, i, a, o, f, u) {
    var s = r.call(this, n, i) || this;
    if (s.dataWidth = a, s.dataHeight = o, s.left = f, s.top = u, t.BYTES_PER_ELEMENT === 4) {
      for (var c = n * i, h = new Uint8ClampedArray(c), d = 0; d < c; d++) {
        var l = t[d], v = l >> 16 & 255, p = l >> 7 & 510, y = l & 255;
        h[d] = /*(byte) */
        (v + p + y) / 4 & 255;
      }
      s.luminances = h;
    } else
      s.luminances = t;
    if (a === void 0 && (s.dataWidth = n), o === void 0 && (s.dataHeight = i), f === void 0 && (s.left = 0), u === void 0 && (s.top = 0), s.left + n > s.dataWidth || s.top + i > s.dataHeight)
      throw new D("Crop rectangle does not fit within image data.");
    return s;
  }
  return e.prototype.getRow = function(t, n) {
    if (t < 0 || t >= this.getHeight())
      throw new D("Requested row is outside the image: " + t);
    var i = this.getWidth();
    (n == null || n.length < i) && (n = new Uint8ClampedArray(i));
    var a = (t + this.top) * this.dataWidth + this.left;
    return W.arraycopy(this.luminances, a, n, 0, i), n;
  }, e.prototype.getMatrix = function() {
    var t = this.getWidth(), n = this.getHeight();
    if (t === this.dataWidth && n === this.dataHeight)
      return this.luminances;
    var i = t * n, a = new Uint8ClampedArray(i), o = this.top * this.dataWidth + this.left;
    if (t === this.dataWidth)
      return W.arraycopy(this.luminances, o, a, 0, i), a;
    for (var f = 0; f < n; f++) {
      var u = f * t;
      W.arraycopy(this.luminances, o, a, u, t), o += this.dataWidth;
    }
    return a;
  }, e.prototype.isCropSupported = function() {
    return !0;
  }, e.prototype.crop = function(t, n, i, a) {
    return new e(this.luminances, i, a, this.dataWidth, this.dataHeight, this.left + t, this.top + n);
  }, e.prototype.invert = function() {
    return new Tt(this);
  }, e;
})(rt);
var Ea = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  Ea(e, r);
  function e() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return e.forName = function(t) {
    return this.getCharacterSetECIByName(t);
  }, e;
})(Q);
(function() {
  function r() {
  }
  return r.ISO_8859_1 = Q.ISO8859_1, r;
})();
var Ca = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.isCompact = function() {
      return this.compact;
    }, r.prototype.setCompact = function(e) {
      this.compact = e;
    }, r.prototype.getSize = function() {
      return this.size;
    }, r.prototype.setSize = function(e) {
      this.size = e;
    }, r.prototype.getLayers = function() {
      return this.layers;
    }, r.prototype.setLayers = function(e) {
      this.layers = e;
    }, r.prototype.getCodeWords = function() {
      return this.codeWords;
    }, r.prototype.setCodeWords = function(e) {
      this.codeWords = e;
    }, r.prototype.getMatrix = function() {
      return this.matrix;
    }, r.prototype.setMatrix = function(e) {
      this.matrix = e;
    }, r;
  }()
), ar = (
  /** @class */
  function() {
    function r() {
    }
    return r.singletonList = function(e) {
      return [e];
    }, r.min = function(e, t) {
      return e.sort(t)[0];
    }, r;
  }()
), Ia = (
  /** @class */
  function() {
    function r(e) {
      this.previous = e;
    }
    return r.prototype.getPrevious = function() {
      return this.previous;
    }, r;
  }()
), Sa = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Pt = (
  /** @class */
  function(r) {
    Sa(e, r);
    function e(t, n, i) {
      var a = r.call(this, t) || this;
      return a.value = n, a.bitCount = i, a;
    }
    return e.prototype.appendTo = function(t, n) {
      t.appendBits(this.value, this.bitCount);
    }, e.prototype.add = function(t, n) {
      return new e(this, t, n);
    }, e.prototype.addBinaryShift = function(t, n) {
      return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new e(this, t, n);
    }, e.prototype.toString = function() {
      var t = this.value & (1 << this.bitCount) - 1;
      return t |= 1 << this.bitCount, "<" + M.toBinaryString(t | 1 << this.bitCount).substring(1) + ">";
    }, e;
  }(Ia)
), ma = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Oa = (
  /** @class */
  function(r) {
    ma(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, 0, 0) || this;
      return a.binaryShiftStart = n, a.binaryShiftByteCount = i, a;
    }
    return e.prototype.appendTo = function(t, n) {
      for (var i = 0; i < this.binaryShiftByteCount; i++)
        (i === 0 || i === 31 && this.binaryShiftByteCount <= 62) && (t.appendBits(31, 5), this.binaryShiftByteCount > 62 ? t.appendBits(this.binaryShiftByteCount - 31, 16) : i === 0 ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : t.appendBits(this.binaryShiftByteCount - 31, 5)), t.appendBits(n[this.binaryShiftStart + i], 8);
    }, e.prototype.addBinaryShift = function(t, n) {
      return new e(this, t, n);
    }, e.prototype.toString = function() {
      return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
    }, e;
  }(Pt)
);
function Ta(r, e, t) {
  return new Oa(r, e, t);
}
function Ue(r, e, t) {
  return new Pt(r, e, t);
}
var ba = [
  "UPPER",
  "LOWER",
  "DIGIT",
  "MIXED",
  "PUNCT"
], me = 0, tt = 1, ve = 2, Ar = 3, ye = 4, Da = new Pt(null, 0, 0), lt = [
  Int32Array.from([
    0,
    (5 << 16) + 28,
    (5 << 16) + 30,
    (5 << 16) + 29,
    656318
    // UPPER -> MIXED -> PUNCT
  ]),
  Int32Array.from([
    (9 << 16) + 480 + 14,
    0,
    (5 << 16) + 30,
    (5 << 16) + 29,
    656318
    // LOWER -> MIXED -> PUNCT
  ]),
  Int32Array.from([
    (4 << 16) + 14,
    (9 << 16) + 448 + 28,
    0,
    (9 << 16) + 448 + 29,
    932798
    // DIGIT -> UPPER -> MIXED -> PUNCT
  ]),
  Int32Array.from([
    (5 << 16) + 29,
    (5 << 16) + 28,
    656318,
    0,
    (5 << 16) + 30
    // MIXED -> PUNCT
  ]),
  Int32Array.from([
    (5 << 16) + 31,
    656380,
    656382,
    656381,
    0
  ])
], Na = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function Ra(r) {
  var e, t;
  try {
    for (var n = Na(r), i = n.next(); !i.done; i = n.next()) {
      var a = i.value;
      ce.fill(a, -1);
    }
  } catch (o) {
    e = { error: o };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return r[me][ye] = 0, r[tt][ye] = 0, r[tt][me] = 28, r[Ar][ye] = 0, r[ve][ye] = 0, r[ve][me] = 15, r;
}
var wr = Ra(ce.createInt32Array(6, 6)), Pa = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ma = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.token = e, this.mode = t, this.binaryShiftByteCount = n, this.bitCount = i;
    }
    return r.prototype.getMode = function() {
      return this.mode;
    }, r.prototype.getToken = function() {
      return this.token;
    }, r.prototype.getBinaryShiftByteCount = function() {
      return this.binaryShiftByteCount;
    }, r.prototype.getBitCount = function() {
      return this.bitCount;
    }, r.prototype.latchAndAppend = function(e, t) {
      var n = this.bitCount, i = this.token;
      if (e !== this.mode) {
        var a = lt[this.mode][e];
        i = Ue(i, a & 65535, a >> 16), n += a >> 16;
      }
      var o = e === ve ? 4 : 5;
      return i = Ue(i, t, o), new r(i, e, 0, n + o);
    }, r.prototype.shiftAndAppend = function(e, t) {
      var n = this.token, i = this.mode === ve ? 4 : 5;
      return n = Ue(n, wr[this.mode][e], i), n = Ue(n, t, 5), new r(n, this.mode, 0, this.bitCount + i + 5);
    }, r.prototype.addBinaryShiftChar = function(e) {
      var t = this.token, n = this.mode, i = this.bitCount;
      if (this.mode === ye || this.mode === ve) {
        var a = lt[n][me];
        t = Ue(t, a & 65535, a >> 16), i += a >> 16, n = me;
      }
      var o = this.binaryShiftByteCount === 0 || this.binaryShiftByteCount === 31 ? 18 : this.binaryShiftByteCount === 62 ? 9 : 8, f = new r(t, n, this.binaryShiftByteCount + 1, i + o);
      return f.binaryShiftByteCount === 2078 && (f = f.endBinaryShift(e + 1)), f;
    }, r.prototype.endBinaryShift = function(e) {
      if (this.binaryShiftByteCount === 0)
        return this;
      var t = this.token;
      return t = Ta(t, e - this.binaryShiftByteCount, this.binaryShiftByteCount), new r(t, this.mode, 0, this.bitCount);
    }, r.prototype.isBetterThanOrEqualTo = function(e) {
      var t = this.bitCount + (lt[this.mode][e.mode] >> 16);
      return this.binaryShiftByteCount < e.binaryShiftByteCount ? t += r.calculateBinaryShiftCost(e) - r.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > e.binaryShiftByteCount && e.binaryShiftByteCount > 0 && (t += 10), t <= e.bitCount;
    }, r.prototype.toBitArray = function(e) {
      for (var t, n, i = [], a = this.endBinaryShift(e.length).token; a !== null; a = a.getPrevious())
        i.unshift(a);
      var o = new ee();
      try {
        for (var f = Pa(i), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          s.appendTo(o, e);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          u && !u.done && (n = f.return) && n.call(f);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return o;
    }, r.prototype.toString = function() {
      return X.format("%s bits=%d bytes=%d", ba[this.mode], this.bitCount, this.binaryShiftByteCount);
    }, r.calculateBinaryShiftCost = function(e) {
      return e.binaryShiftByteCount > 62 ? 21 : e.binaryShiftByteCount > 31 ? 20 : e.binaryShiftByteCount > 0 ? 10 : 0;
    }, r.INITIAL_STATE = new r(Da, me, 0, 0), r;
  }()
);
function Ba(r) {
  var e = X.getCharCode(" "), t = X.getCharCode("."), n = X.getCharCode(",");
  r[me][e] = 1;
  for (var i = X.getCharCode("Z"), a = X.getCharCode("A"), o = a; o <= i; o++)
    r[me][o] = o - a + 2;
  r[tt][e] = 1;
  for (var f = X.getCharCode("z"), u = X.getCharCode("a"), o = u; o <= f; o++)
    r[tt][o] = o - u + 2;
  r[ve][e] = 1;
  for (var s = X.getCharCode("9"), c = X.getCharCode("0"), o = c; o <= s; o++)
    r[ve][o] = o - c + 2;
  r[ve][n] = 12, r[ve][t] = 13;
  for (var h = [
    "\0",
    " ",
    "",
    "",
    "",
    "",
    "",
    "",
    "\x07",
    "\b",
    "	",
    `
`,
    "\v",
    "\f",
    "\r",
    "\x1B",
    "",
    "",
    "",
    "",
    "@",
    "\\",
    "^",
    "_",
    "`",
    "|",
    "~",
    ""
  ], d = 0; d < h.length; d++)
    r[Ar][X.getCharCode(h[d])] = d;
  for (var l = [
    "\0",
    "\r",
    "\0",
    "\0",
    "\0",
    "\0",
    "!",
    "'",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "[",
    "]",
    "{",
    "}"
  ], d = 0; d < l.length; d++)
    X.getCharCode(l[d]) > 0 && (r[ye][X.getCharCode(l[d])] = d);
  return r;
}
var dt = Ba(ce.createInt32Array(5, 256)), $e = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Fa = (
  /** @class */
  function() {
    function r(e) {
      this.text = e;
    }
    return r.prototype.encode = function() {
      for (var e = X.getCharCode(" "), t = X.getCharCode(`
`), n = ar.singletonList(Ma.INITIAL_STATE), i = 0; i < this.text.length; i++) {
        var a = void 0, o = i + 1 < this.text.length ? this.text[i + 1] : 0;
        switch (this.text[i]) {
          case X.getCharCode("\r"):
            a = o === t ? 2 : 0;
            break;
          case X.getCharCode("."):
            a = o === e ? 3 : 0;
            break;
          case X.getCharCode(","):
            a = o === e ? 4 : 0;
            break;
          case X.getCharCode(":"):
            a = o === e ? 5 : 0;
            break;
          default:
            a = 0;
        }
        a > 0 ? (n = r.updateStateListForPair(n, i, a), i++) : n = this.updateStateListForChar(n, i);
      }
      var f = ar.min(n, function(u, s) {
        return u.getBitCount() - s.getBitCount();
      });
      return f.toBitArray(this.text);
    }, r.prototype.updateStateListForChar = function(e, t) {
      var n, i, a = [];
      try {
        for (var o = $e(e), f = o.next(); !f.done; f = o.next()) {
          var u = f.value;
          this.updateStateForChar(u, t, a);
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          f && !f.done && (i = o.return) && i.call(o);
        } finally {
          if (n)
            throw n.error;
        }
      }
      return r.simplifyStates(a);
    }, r.prototype.updateStateForChar = function(e, t, n) {
      for (var i = this.text[t] & 255, a = dt[e.getMode()][i] > 0, o = null, f = 0; f <= ye; f++) {
        var u = dt[f][i];
        if (u > 0) {
          if (o == null && (o = e.endBinaryShift(t)), !a || f === e.getMode() || f === ve) {
            var s = o.latchAndAppend(f, u);
            n.push(s);
          }
          if (!a && wr[e.getMode()][f] >= 0) {
            var c = o.shiftAndAppend(f, u);
            n.push(c);
          }
        }
      }
      if (e.getBinaryShiftByteCount() > 0 || dt[e.getMode()][i] === 0) {
        var h = e.addBinaryShiftChar(t);
        n.push(h);
      }
    }, r.updateStateListForPair = function(e, t, n) {
      var i, a, o = [];
      try {
        for (var f = $e(e), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          this.updateStateForPair(s, t, n, o);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          u && !u.done && (a = f.return) && a.call(f);
        } finally {
          if (i)
            throw i.error;
        }
      }
      return this.simplifyStates(o);
    }, r.updateStateForPair = function(e, t, n, i) {
      var a = e.endBinaryShift(t);
      if (i.push(a.latchAndAppend(ye, n)), e.getMode() !== ye && i.push(a.shiftAndAppend(ye, n)), n === 3 || n === 4) {
        var o = a.latchAndAppend(ve, 16 - n).latchAndAppend(ve, 1);
        i.push(o);
      }
      if (e.getBinaryShiftByteCount() > 0) {
        var f = e.addBinaryShiftChar(t).addBinaryShiftChar(t + 1);
        i.push(f);
      }
    }, r.simplifyStates = function(e) {
      var t, n, i, a, o = [];
      try {
        for (var f = $e(e), u = f.next(); !u.done; u = f.next()) {
          var s = u.value, c = !0, h = function(y) {
            if (y.isBetterThanOrEqualTo(s))
              return c = !1, "break";
            s.isBetterThanOrEqualTo(y) && (o = o.filter(function(_) {
              return _ !== y;
            }));
          };
          try {
            for (var d = (i = void 0, $e(o)), l = d.next(); !l.done; l = d.next()) {
              var v = l.value, p = h(v);
              if (p === "break")
                break;
            }
          } catch (y) {
            i = { error: y };
          } finally {
            try {
              l && !l.done && (a = d.return) && a.call(d);
            } finally {
              if (i)
                throw i.error;
            }
          }
          c && o.push(s);
        }
      } catch (y) {
        t = { error: y };
      } finally {
        try {
          u && !u.done && (n = f.return) && n.call(f);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return o;
    }, r;
  }()
), La = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
(function() {
  function r() {
  }
  return r.encodeBytes = function(e) {
    return r.encode(e, r.DEFAULT_EC_PERCENT, r.DEFAULT_AZTEC_LAYERS);
  }, r.encode = function(e, t, n) {
    var i = new Fa(e).encode(), a = M.truncDivision(i.getSize() * t, 100) + 11, o = i.getSize() + a, f, u, s, c, h;
    if (n !== r.DEFAULT_AZTEC_LAYERS) {
      if (f = n < 0, u = Math.abs(n), u > (f ? r.MAX_NB_BITS_COMPACT : r.MAX_NB_BITS))
        throw new D(X.format("Illegal value %s for layers", n));
      s = r.totalBitsInLayer(u, f), c = r.WORD_SIZE[u];
      var d = s - s % c;
      if (h = r.stuffBits(i, c), h.getSize() + a > d)
        throw new D("Data to large for user specified layer");
      if (f && h.getSize() > c * 64)
        throw new D("Data to large for user specified layer");
    } else {
      c = 0, h = null;
      for (var l = 0; ; l++) {
        if (l > r.MAX_NB_BITS)
          throw new D("Data too large for an Aztec code");
        if (f = l <= 3, u = f ? l + 1 : l, s = r.totalBitsInLayer(u, f), !(o > s)) {
          (h == null || c !== r.WORD_SIZE[u]) && (c = r.WORD_SIZE[u], h = r.stuffBits(i, c));
          var d = s - s % c;
          if (!(f && h.getSize() > c * 64) && h.getSize() + a <= d)
            break;
        }
      }
    }
    var v = r.generateCheckWords(h, s, c), p = h.getSize() / c, y = r.generateModeMessage(f, u, p), _ = (f ? 11 : 14) + u * 4, g = new Int32Array(_), w;
    if (f) {
      w = _;
      for (var l = 0; l < g.length; l++)
        g[l] = l;
    } else {
      w = _ + 1 + 2 * M.truncDivision(M.truncDivision(_, 2) - 1, 15);
      for (var E = M.truncDivision(_, 2), I = M.truncDivision(w, 2), l = 0; l < E; l++) {
        var S = l + M.truncDivision(l, 15);
        g[E - l - 1] = I - S - 1, g[E + l] = I + S + 1;
      }
    }
    for (var O = new Ae(w), l = 0, b = 0; l < u; l++) {
      for (var P = (u - l) * 4 + (f ? 9 : 12), N = 0; N < P; N++)
        for (var $ = N * 2, B = 0; B < 2; B++)
          v.get(b + $ + B) && O.set(g[l * 2 + B], g[l * 2 + N]), v.get(b + P * 2 + $ + B) && O.set(g[l * 2 + N], g[_ - 1 - l * 2 - B]), v.get(b + P * 4 + $ + B) && O.set(g[_ - 1 - l * 2 - B], g[_ - 1 - l * 2 - N]), v.get(b + P * 6 + $ + B) && O.set(g[_ - 1 - l * 2 - N], g[l * 2 + B]);
      b += P * 8;
    }
    if (r.drawModeMessage(O, f, w, y), f)
      r.drawBullsEye(O, M.truncDivision(w, 2), 5);
    else {
      r.drawBullsEye(O, M.truncDivision(w, 2), 7);
      for (var l = 0, N = 0; l < M.truncDivision(_, 2) - 1; l += 15, N += 16)
        for (var B = M.truncDivision(w, 2) & 1; B < w; B += 2)
          O.set(M.truncDivision(w, 2) - N, B), O.set(M.truncDivision(w, 2) + N, B), O.set(B, M.truncDivision(w, 2) - N), O.set(B, M.truncDivision(w, 2) + N);
    }
    var Z = new Ca();
    return Z.setCompact(f), Z.setSize(w), Z.setLayers(u), Z.setCodeWords(p), Z.setMatrix(O), Z;
  }, r.drawBullsEye = function(e, t, n) {
    for (var i = 0; i < n; i += 2)
      for (var a = t - i; a <= t + i; a++)
        e.set(a, t - i), e.set(a, t + i), e.set(t - i, a), e.set(t + i, a);
    e.set(t - n, t - n), e.set(t - n + 1, t - n), e.set(t - n, t - n + 1), e.set(t + n, t - n), e.set(t + n, t - n + 1), e.set(t + n, t + n - 1);
  }, r.generateModeMessage = function(e, t, n) {
    var i = new ee();
    return e ? (i.appendBits(t - 1, 2), i.appendBits(n - 1, 6), i = r.generateCheckWords(i, 28, 4)) : (i.appendBits(t - 1, 5), i.appendBits(n - 1, 11), i = r.generateCheckWords(i, 40, 4)), i;
  }, r.drawModeMessage = function(e, t, n, i) {
    var a = M.truncDivision(n, 2);
    if (t)
      for (var o = 0; o < 7; o++) {
        var f = a - 3 + o;
        i.get(o) && e.set(f, a - 5), i.get(o + 7) && e.set(a + 5, f), i.get(20 - o) && e.set(f, a + 5), i.get(27 - o) && e.set(a - 5, f);
      }
    else
      for (var o = 0; o < 10; o++) {
        var f = a - 5 + o + M.truncDivision(o, 5);
        i.get(o) && e.set(f, a - 7), i.get(o + 10) && e.set(a + 7, f), i.get(29 - o) && e.set(f, a + 7), i.get(39 - o) && e.set(a - 7, f);
      }
  }, r.generateCheckWords = function(e, t, n) {
    var i, a, o = e.getSize() / n, f = new _r(r.getGF(n)), u = M.truncDivision(t, n), s = r.bitsToWords(e, n, u);
    f.encode(s, u - o);
    var c = t % n, h = new ee();
    h.appendBits(0, c);
    try {
      for (var d = La(Array.from(s)), l = d.next(); !l.done; l = d.next()) {
        var v = l.value;
        h.appendBits(v, n);
      }
    } catch (p) {
      i = { error: p };
    } finally {
      try {
        l && !l.done && (a = d.return) && a.call(d);
      } finally {
        if (i)
          throw i.error;
      }
    }
    return h;
  }, r.bitsToWords = function(e, t, n) {
    var i = new Int32Array(n), a, o;
    for (a = 0, o = e.getSize() / t; a < o; a++) {
      for (var f = 0, u = 0; u < t; u++)
        f |= e.get(a * t + u) ? 1 << t - u - 1 : 0;
      i[a] = f;
    }
    return i;
  }, r.getGF = function(e) {
    switch (e) {
      case 4:
        return se.AZTEC_PARAM;
      case 6:
        return se.AZTEC_DATA_6;
      case 8:
        return se.AZTEC_DATA_8;
      case 10:
        return se.AZTEC_DATA_10;
      case 12:
        return se.AZTEC_DATA_12;
      default:
        throw new D("Unsupported word size " + e);
    }
  }, r.stuffBits = function(e, t) {
    for (var n = new ee(), i = e.getSize(), a = (1 << t) - 2, o = 0; o < i; o += t) {
      for (var f = 0, u = 0; u < t; u++)
        (o + u >= i || e.get(o + u)) && (f |= 1 << t - 1 - u);
      (f & a) === a ? (n.appendBits(f & a, t), o--) : f & a ? n.appendBits(f, t) : (n.appendBits(f | 1, t), o--);
    }
    return n;
  }, r.totalBitsInLayer = function(e, t) {
    return ((t ? 88 : 112) + 16 * e) * e;
  }, r.DEFAULT_EC_PERCENT = 33, r.DEFAULT_AZTEC_LAYERS = 0, r.MAX_NB_BITS = 32, r.MAX_NB_BITS_COMPACT = 4, r.WORD_SIZE = Int32Array.from([
    4,
    6,
    6,
    8,
    8,
    8,
    8,
    8,
    8,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12
  ]), r;
})();
const Er = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [n, i] of e)
    t[n] = i;
  return t;
}, ka = {
  name: "image-barcode-reader",
  data() {
    return {
      codeReader: new yr()
    };
  },
  methods: {
    onChangeInput(r) {
      const e = r.target.files || r.dataTransfer.files;
      if (!e.length)
        return;
      const t = new FileReader();
      t.onload = this.processFile, t.readAsDataURL(e[0]);
    },
    processFile(r) {
      this.$el.innerHTML += `<img id="image" src="${r.target.result}" alt=""/>`, this.codeReader.decodeFromImage("image").then((e) => {
        this.$emit("decode", e.text), this.$emit("result", e);
      }).catch((e) => this.$emit("error", e));
    }
  }
};
function Ua(r, e, t, n, i, a) {
  return or(), fr("input", {
    onChange: e[0] || (e[0] = (...o) => a.onChangeInput && a.onChangeInput(...o)),
    type: "file",
    name: "image",
    accept: "image/*",
    capture: "environment"
  }, null, 32);
}
const Va = /* @__PURE__ */ Er(ka, [["render", Ua]]), Ha = Ir({
  name: "stream-barcode-reader",
  data() {
    return {
      isLoading: !0,
      codeReader: new yr(),
      isMediaStreamAPISupported: navigator && navigator.mediaDevices && "enumerateDevices" in navigator.mediaDevices
    };
  },
  mounted() {
    if (!this.isMediaStreamAPISupported)
      throw new fe("Media Stream API is not supported");
    this.start(), this.$refs.scanner.oncanplay = (r) => {
      this.isLoading = !1, this.$emit("loaded");
    };
  },
  beforeUnmount() {
    this.codeReader.reset();
  },
  methods: {
    start() {
      this.codeReader.decodeFromVideoDevice(void 0, this.$refs.scanner, (r, e) => {
        r && (this.$emit("decode", r.text), this.$emit("result", r));
      });
    }
  }
}), Cr = (r) => (Or("data-v-ce735550"), r = r(), Tr(), r), Ga = { class: "scanner-container" }, Xa = {
  poster: "data:image/gif,AAAA",
  ref: "scanner"
}, Wa = /* @__PURE__ */ Cr(() => /* @__PURE__ */ Je("div", { class: "overlay-element" }, null, -1)), za = /* @__PURE__ */ Cr(() => /* @__PURE__ */ Je("div", { class: "laser" }, null, -1));
function Ya(r, e, t, n, i, a) {
  return or(), fr("div", Ga, [
    Sr(Je("div", null, [
      Je("video", Xa, null, 512),
      Wa,
      za
    ], 512), [
      [mr, !r.isLoading]
    ])
  ]);
}
const Za = /* @__PURE__ */ Er(Ha, [["render", Ya], ["__scopeId", "data-v-ce735550"]]), $a = {
  ImageBarcodeReader: Va,
  StreamBarcodeReader: Za
};
export {
  $a as default
};
