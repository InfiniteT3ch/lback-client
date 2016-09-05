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
var base_delete_1 = require('./base/base.delete');
var BackupDeleteComponent = (function (_super) {
    __extends(BackupDeleteComponent, _super);
    function BackupDeleteComponent(client, router, route, dialogRef) {
        _super.call(this, client, router, {
            "type": "delbackup",
            "args": {
                "id": route.params['backupId']
            }
        }, function (response) {
            if (!response.error) {
                router.navigate(['/backups']);
            }
            else {
                dialogRef.open(response.message);
            }
        });
        this.client = client;
        this.router = router;
        this.route = route;
    }
    BackupDeleteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-backup-delete',
            templateUrl: 'backup-delete.component.html',
            styleUrls: ['backup-delete.component.css']
        })
    ], BackupDeleteComponent);
    return BackupDeleteComponent;
})(base_delete_1.BaseDeleteComponent);
exports.BackupDeleteComponent = BackupDeleteComponent;
