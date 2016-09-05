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
var base_model_1 = require('./base/base.model');
var UserComponent = (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent(client, lib, route) {
        _super.call(this, client, router, {
            "type": "getuser",
            "args": {
                "id": route.params['userId']
            }
        });
        this.client = client;
        this.lib = lib;
        this.route = route;
    }
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-user',
            templateUrl: 'user.component.html',
            styleUrls: ['user.component.css']
        })
    ], UserComponent);
    return UserComponent;
})(base_model_1.BaseModelComponent);
exports.UserComponent = UserComponent;
