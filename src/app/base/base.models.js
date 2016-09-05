var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require('./base/base');
var BaseModelsComponent = (function (_super) {
    __extends(BaseModelsComponent, _super);
    function BaseModelsComponent(client, router) {
        _super.call(this, client, router);
        this.client = client;
        this.router = router;
    }
    BaseModelsComponent.prototype.gotoPage = function (page) {
        this.settings['page'] = page;
        this.load();
    };
    return BaseModelsComponent;
})(base_1.BaseComponent);
exports.BaseModelsComponent = BaseModelsComponent;
