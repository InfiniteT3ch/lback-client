var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var RestoreDeleteComponent = (function () {
    function RestoreDeleteComponent(client, lib, router, route, dialogRef) {
        this.client = client;
        this.lib = lib;
        this.router = router;
        this.route = route;
        this.dialogRef = dialogRef;
        _super.call(this, client, router, {
            "type": "delrestore",
            "args": {
                "id": route.params['restoreId']
            }
        }, function (response) {
            if (!response.error) {
                router.navigate(['/restores']);
            }
            else {
                dialogRef.open(response.message);
            }
        });
    }
    RestoreDeleteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-restore-delete',
            templateUrl: 'restore-delete.component.html',
            styleUrls: ['restore-delete.component.css']
        })
    ], RestoreDeleteComponent);
    return RestoreDeleteComponent;
})();
exports.RestoreDeleteComponent = RestoreDeleteComponent;
