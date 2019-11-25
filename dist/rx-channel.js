"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var RxChannel = /** @class */ (function () {
    function RxChannel(channel) {
        this.channel = channel;
    }
    Object.defineProperty(RxChannel.prototype, "originChannel", {
        get: function () {
            return this.channel;
        },
        enumerable: true,
        configurable: true
    });
    RxChannel.prototype.join = function (timeout) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.channel.join(timeout)
                .receive('ok', function (response) { return observer.next(response); })
                .receive('error', function (error) { return observer.error(error); });
        });
    };
    RxChannel.prototype.leave = function (timeout) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.channel.leave(timeout)
                .receive('ok', function (response) { return observer.next(response); })
                .receive('error', function (error) { return observer.error(error); });
        });
    };
    RxChannel.prototype.push = function (eventName, payload, timeout) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.channel.push(eventName, payload, timeout)
                .receive('ok', function (response) { return observer.next(response); })
                .receive('error', function (error) { return observer.error(error); });
        });
    };
    RxChannel.prototype.on$ = function (eventName) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.channel.on(eventName, function (response) {
                observer.next(response);
            });
        });
    };
    RxChannel.prototype.onError$ = function () {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.channel.onError(function (error) {
                observer.next(error);
            });
        });
    };
    RxChannel.prototype.off = function (eventName, ref) {
        this.channel.off(eventName, ref);
    };
    return RxChannel;
}());
exports.RxChannel = RxChannel;
