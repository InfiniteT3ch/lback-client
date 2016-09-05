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
var base_model_1 = require('./base.model');
var BackupCreateComponent = (function (_super) {
    __extends(BackupCreateComponent, _super);
    function BackupCreateComponent(client, lib, router, dialogRef) {
        _super.call(this, client, router, { "type": "dobackup",
            "args": this.values }, function () {
            var lib = this.lib;
            client.send({
                "type": "dobackup",
                "args": this.values
            }, function (response) {
                if (!response.error) {
                    dialogRef.open(lib.getMessage('BACKUP_CREATED'));
                    router.navigate(['/backups']);
                }
                else {
                    dialogRef.open(response.message);
                }
            });
        });
        this.client = client;
        this.lib = lib;
        this.router = router;
    }
    BackupCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-backup-create',
            templateUrl: 'backup-create.component.html',
            styleUrls: ['backup-create.component.css']
        })
    ], BackupCreateComponent);
    return BackupCreateComponent;
})(base_model_1.BaseModelComponent);
exports.BackupCreateComponent = BackupCreateComponent;
