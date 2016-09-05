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
var backup_component_1 = require('./backup/backup.component');
var backup_delete_component_1 = require('./backup/backup-delete.component');
var backup_create_component_1 = require('./backup/backup-create.component');
var childRoutes = [{
        "path": "/backups/:backupId", "component": backup_component_1.BackupComponent,
        "path": "/backups/:backupId/delete", "component": backup_delete_component_1.BackupDeleteComponent,
        "path": "/backups/:backupId/edit", "component": backup_create_component_1.BackupCreateComponent,
        "path": "/backups/backup", "component": backup_create_component_1.BackupCreateComponent }];
var BackupsComponent = (function (_super) {
    __extends(BackupsComponent, _super);
    function BackupsComponent(client, lib, router) {
        _super.call(this, client, router);
        this.client = client;
        this.lib = lib;
        this.router = router;
        this.settings = {
            "amount": 1000,
            "page": 0
        };
    }
    BackupsComponent.prototype.ngOnInit = function () {
        _super.ngOnInit.call(this);
        this.load();
    };
    BackupsComponent.prototype.load = function () {
        var lback = this.client;
        var that = this;
        this.client.send({
            "type": "listbackups",
            "args": this.settings }, function (data) {
            //clock all progress
            that.models = data;
        });
    };
    BackupsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-backups',
            templateUrl: 'backups.component.html',
            styleUrls: ['backups.component.css']
        }),
        NgModule({
            "imports": [RouteModule.forChild(childRoutes)]
        })
    ], BackupsComponent);
    return BackupsComponent;
})(base_models_1.BaseModelsComponent);
exports.BackupsComponent = BackupsComponent;
