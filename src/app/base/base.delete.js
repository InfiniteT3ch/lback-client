var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require('./base/base');
var BaseDeleteComponent = (function (_super) {
    __extends(BaseDeleteComponent, _super);
    function BaseDeleteComponent(client, router, args, callback) {
        _super.call(this, client, router);
        this.client = client;
        this.router = router;
        this.args = args;
        this.callback = callback;
        this.client.send(this.args, this.callback);
    }
    return BaseDeleteComponent;
})(base_1.BaseComponent);
exports.BaseDeleteComponent = BaseDeleteComponent;
