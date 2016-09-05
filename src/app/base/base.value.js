var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseValueComponent = (function (_super) {
    __extends(BaseValueComponent, _super);
    function BaseValueComponent(client, router, args, callback) {
        _super.call(this, client, router);
        this.client = client;
        this.router = router;
        this.args = args;
        this.callback = callback;
        this.values = {};
    }
    BaseValueComponent.prototype.post = function () {
        this.client.send(this.args, this.callback);
    };
    return BaseValueComponent;
})(BaseComponent);
exports.BaseValueComponent = BaseValueComponent;
