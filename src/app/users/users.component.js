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
var base_models_1 = require('./base/base.models');
var router_1 = require('@angular/router');
var user_component_1 = require('./base/user/user.component');
var user_delete_component_1 = require('./base/user/user-delete.component');
var user_create_component_1 = require('./base/user/user-create.component');
var childRoutes = [
    {
        "path": "/users/:userId", "component": user_component_1.UserComponent
    },
    {
        "path": "/users/user", "component": user_create_component_1.UserCreateComponent
    },
    {
        "path": "/users/:userId/delete", "component": user_delete_component_1.UserDeleteComponent
    }
];
var UsersComponent = (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent(client, lib, router) {
        _super.call(this, client, router);
        this.client = client;
        this.lib = lib;
        this.router = router;
        this.settings = {
            "page": 0,
            "amount": 1000
        };
    }
    UsersComponent.prototype.ngOnInit = function () {
        _super.ngOnInit.call(this);
        this.load();
    };
    UsersComponent.prototype.load = function () {
        var that = this;
        that.send({
            "type": "listusers",
            "args": this.settings }, function (response) {
            that.models = models;
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-users',
            templateUrl: 'users.component.html',
            styleUrls: ['users.component.css']
        }),
        NgModule({
            "imports": [router_1.RouterModule.forChild(childRoutes)]
        })
    ], UsersComponent);
    return UsersComponent;
})(base_models_1.BaseModelsComponent);
exports.UsersComponent = UsersComponent;
