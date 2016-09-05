var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var RestoreComponent = (function (_super) {
    __extends(RestoreComponent, _super);
    function RestoreComponent(client, lib, router, route) {
        _super.call(this, client, router, {
            "type": "getrestore",
            "args": {
                "id": route.params['restoreId']
            }
        });
        this.client = client;
        this.lib = lib;
        this.router = router;
        this.route = route;
    }
    RestoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-restore',
            templateUrl: 'restore.component.html',
            styleUrls: ['restore.component.css']
        })
    ], RestoreComponent);
    return RestoreComponent;
})(BaseValueComponent);
exports.RestoreComponent = RestoreComponent;
