var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var RestoreBoxComponent = (function () {
    function RestoreBoxComponent(client) {
        this.client = client;
        this.restore = {};
        this.progress = {};
    }
    RestoreBoxComponent.prototype.ngOnInit = function () {
        var that = this;
        that.client.send({
            "type": "streamrestore",
            "args": {
                "restoreId": this.restore.id
            }
        }, function (response) {
            that.progress = response.data;
        });
    };
    __decorate([
        core_1.Input()
    ], RestoreBoxComponent.prototype, "restore");
    RestoreBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-restore-box',
            templateUrl: 'restore-box.component.html',
            styleUrls: ['restore-box.component.css']
        })
    ], RestoreBoxComponent);
    return RestoreBoxComponent;
})();
exports.RestoreBoxComponent = RestoreBoxComponent;