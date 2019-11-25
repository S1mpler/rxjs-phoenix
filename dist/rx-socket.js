"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var RxSocket = /** @class */ (function () {
    function RxSocket(socket) {
        this.socket = socket;
        this.channels = new Array();
    }
    RxSocket.prototype.createChannel = function (topic, channelParams) {
        if (channelParams === void 0) { channelParams = {}; }
        console.log(topic + " works");
        return null;
        // const channelItem = this.channels.find(c => c.channelName === topic);
        // if (channelItem) { return channelItem.channel; }
        // const channel = this.socket.channel(topic, channelParams);
        // const newChannelItem = {
        //   channelName: topic,
        //   channel: new RxChannel(channel)
        // };
        // this.channels.push(newChannelItem);
        // return newChannelItem.channel;
    };
    RxSocket.prototype.removeChannel = function (topic) {
        console.log(topic + " removed");
        // const channelItem = this.channels.find(c => c.channelName === topic);
        // this.socket.remove(channelItem.channel.originChannel);
        // this.channels = this.channels.slice(this.channels.indexOf(channelItem, 1));
    };
    RxSocket.prototype.onError$ = function () {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.socket.onError(function () { observer.next(); });
        });
    };
    RxSocket.prototype.onClose$ = function () {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.socket.onClose(function () { observer.next(); });
        });
    };
    RxSocket.prototype.onMessage$ = function () {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.socket.onMessage(function () { observer.next(); });
        });
    };
    return RxSocket;
}());
exports.RxSocket = RxSocket;
