var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var BackupBoxComponent = (function () {
    function BackupBoxComponent(client, lib) {
        this.client = client;
        this.lib = lib;
    }
    BackupBoxComponent.prototype.ngOnInit = function () {
        //start polling
        var that = this;
        that.client.send({
            "type": "streambackup",
            "args": {
                "backupId": this.backup.id
            }
        }, function (response) {
            this.progress = response.data;
        });
    };
    __decorate([
        core_1.Input()
    ], BackupBoxComponent.prototype, "backup");
    BackupBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-backup-box',
            templateUrl: 'backup-box.component.html',
            styleUrls: ['backup-box.component.css']
        })
    ], BackupBoxComponent);
    return BackupBoxComponent;
})();
exports.BackupBoxComponent = BackupBoxComponent;
