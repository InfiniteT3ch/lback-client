function NoOp() { }
var BaseComponent = (function () {
    function BaseComponent(client, router) {
        this.client = client;
        this.router = router;
    }
    BaseComponent.prototype.gotoLogin = function () {
        var that = this;
        this.router.navigate(['/login']);
    };
    BaseComponent.prototype.gotoPage = function (page) {
        this.settings['page'] = page;
        this.load();
    };
    BaseComponent.prototype.ngOnInit = function () {
        var that = this;
        that.client.checkConnected(function () {
            that.gotoLogin();
        }, NoOp);
    };
    return BaseComponent;
})();
exports.BaseComponent = BaseComponent;
