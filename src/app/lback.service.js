var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
//import { Rx } from 'rx';
var node_uuid_1 = require('node-uuid');
var WebSocket = window.WebSocket;
var localStorage = window.localStorage;
var CLIENT_ERROR = {};
var ON_OPEN = function (args) {
    console.log("Connection was openened", args[0]);
};
var ON_CLOSE = function (args) {
    console.log("Connection was closed", args[0]);
};
var ON_MESSAGE = function (args) {
    var parsed = JSON.parse(args[1]);
    var callback = this.callbacks[parsed.request_id];
    if (callback) {
        callback(parsed);
        delete this.callbacks[parsed.request_id];
    }
};
var ON_ERROR = function (args) {
    console.log("Lback service error", args[0]);
};
var LbackService = (function () {
    function LbackService() {
        this.setConfig({
            "ws": "ws://104.237.140.121:1100"
        });
        this.setOnOpen(options['onOpen'] || ON_OPEN);
        this.setOnError(options['onError'] || ON_ERROR);
        this.setOnMessage(options['onMessage'] || ON_MESSAGE);
        this.setOnClose(options['onClose'] || ON_CLOSE);
        this.socket = new WebSocket;
        this.socket.onopen = function () {
            this.getOnOpen()(this.arguments);
        };
        this.socket.onmessage = function () {
            LbackService.prototype.onMessage.apply(this, this.arguments);
        };
        this.socket.onclose = function () {
            this.getOnClose()(this.arguments);
        };
    }
    LbackService.prototype.checkConnected = function (onDisconnected, onConnected) {
        var that = this;
        this.setOnOpen(function () {
            var info = that.getLoginInfo();
            if (info) {
                that.send({
                    "type": "authcheck",
                    "token": info.token }, function (response) {
                    if (!response.error) {
                        onConnected();
                    }
                    else {
                        onDisconnected();
                    }
                });
            }
            else {
                onDisconnected();
            }
        });
    };
    LbackService.prototype.getConfig = function () {
        return this.config;
    };
    LbackService.prototype.getOnError = function () {
        return this.onError;
    };
    LbackService.prototype.getOnOpen = function () {
        return this.onOpen;
    };
    LbackService.prototype.getOnMessage = function () {
        return this.onMessage;
    };
    LbackService.prototype.getOnClose = function () {
        return this.onClose;
    };
    LbackService.prototype.getLogin = function () {
        var item = {};
        try {
            item = JSON.parse(localStorage.getItem("LBACK_AUTH"));
        }
        catch (e) {
            return false;
        }
        return false;
    };
    LbackService.prototype.getRequestId = function () {
        return node_uuid_1.uuid.v4();
    };
    LbackService.prototype.send = function (message, callback) {
        // CLOSING or CLOSED
        if (this.socket.readyState === 3 || this.readyState === 4) {
            return this.getOnError()(CLIENT_ERROR);
        }
        var requestId = this.getRequestId();
        this.setCallback(requestId, callback);
        this.socket.send(JSON.stringify(message));
    };
    ;
    LbackService.prototype.setCallback = function (requestId, callback) {
        this.callbacks[requestId] = callback;
    };
    LbackService.prototype.setConfig = function (obj) {
        this.config = obj;
    };
    LbackService.prototype.setLogin = function (login) {
        localStorage.setItem(JSON.stringify(login));
    };
    LbackService.prototype.setOnOpen = function (fn) {
        this.onOpen = fn;
    };
    LbackService.prototype.setOnError = function (fn) {
        this.onError = fn;
    };
    LbackService.prototype.setOnMessage = function (fn) {
        this.onMessage = fn;
    };
    LbackService.prototype.setOnClose = function (fn) {
        this.onClose = fn;
    };
    ;
    LbackService = __decorate([
        core_1.Injectable()
    ], LbackService);
    return LbackService;
})();
exports.LbackService = LbackService;
