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
var restore_component_1 = require('./restore/restore.component');
var restore_delete_component_1 = require('./restore/restore-delete.component');
var restore_create_component_1 = require('./restore/restore-create.component');
var childRoutes = [
    {
        "path": "/restores/:restoreId", "component": restore_component_1.RestoreComponent
    },
    {
        "path": "/restores/restore", "component": restore_create_component_1.RestoreCreateComponent
    },
    {
        "path": "/restores/:restoreId/delete", "component": restore_delete_component_1.RestoreDeleteComponent
    }
];
var RestoresComponent = (function (_super) {
    __extends(RestoresComponent, _super);
    function RestoresComponent(client, lib, router) {
        _super.call(this, client, router);
        this.client = client;
        this.lib = lib;
        this.settings = {
            "page": 0,
            "amount": 1000
        };
    }
    RestoresComponent.prototype.ngOnInit = function () {
        _super.ngOnInit.call(this);
        this.load();
    };
    RestoresComponent.prototype.load = function () {
        var that = this;
        that.client.send({
            "type": "listrestores",
            "args": this.settings }, function (response) {
            that.models = response.data;
        });
    };
    RestoresComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-restores',
            templateUrl: 'restores.component.html',
            styleUrls: ['restores.component.css']
        }),
        NgModule({
            "imports": [RouteModule.forChild(childRoutes)]
        })
    ], RestoresComponent);
    return RestoresComponent;
})(base_models_1.BaseModelsComponent);
exports.RestoresComponent = RestoresComponent;
