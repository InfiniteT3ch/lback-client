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
var base_value_1 = require('./base/base.value');
function NoOp() { }
var RestoreCreateComponent = (function (_super) {
    __extends(RestoreCreateComponent, _super);
    function RestoreCreateComponent(client, lib, router, dialogRef) {
        _super.call(this, client, router, {
            "type": "dorestore",
            "args": {} }, NoOp);
        this.client = client;
        this.lib = lib;
        this.router = router;
        this.dialogRef = dialogRef;
        this.backups = [];
        this.selectedBackup = {};
    }
    RestoreCreateComponent.prototype.ngOnInit = function () {
        _super.ngOnInit.call(this);
        var client = this.client;
        var that = this;
        client.send({
            "type": "listbackups",
            "args": {
                "page": 0,
                "amount": "all"
            } }, function (response) {
            that.backups = response.data;
            that.selectedBackup = response.data[0];
        });
    };
    RestoreCreateComponent.prototype.post = function () {
        var client = this.client;
        var router = this.router;
        this.values['backupId'] = this.selectedBackup.id;
        client.send({
            "type": "dorestore",
            "args": this.values }, function (response) {
            if (!response.error) {
                dialogRef.open(response.message);
                router.navigate(['/restores']);
            }
            else {
                dialogRef.open(response.message);
            }
        });
    };
    RestoreCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-restore-create',
            templateUrl: 'restore-create.component.html',
            styleUrls: ['restore-create.component.css']
        })
    ], RestoreCreateComponent);
    return RestoreCreateComponent;
})(base_value_1.BaseValueComponent);
exports.RestoreCreateComponent = RestoreCreateComponent;
