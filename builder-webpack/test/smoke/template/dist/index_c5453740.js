!function(r){function e(e){for(var t,c,a=e[0],p=e[1],l=e[2],f=0,s=[];f<a.length;f++)c=a[f],o[c]&&s.push(o[c][0]),o[c]=0;for(t in p)Object.prototype.hasOwnProperty.call(p,t)&&(r[t]=p[t]);for(i&&i(e);s.length;)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var r,e=0;e<u.length;e++){for(var n=u[e],t=!0,a=1;a<n.length;a++){var p=n[a];0!==o[p]&&(t=!1)}t&&(u.splice(e--,1),r=c(c.s=n[0]))}return r}var t={},o={4:0};var u=[];function c(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=r,c.c=t,c.d=function(r,e,n){c.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:n})},c.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},c.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return c.d(e,"a",e),e},c.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],p=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var i=p;u.push([4,1]),n()}({4:function(r,e,n){"use strict";n.r(e);var t=n(1);console.log(Object(t.a)()),document.write("Hello webpack")}});