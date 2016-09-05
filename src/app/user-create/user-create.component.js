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
var UserCreateComponent = (function (_super) {
    __extends(UserCreateComponent, _super);
    function UserCreateComponent(client, lib, router, route, dialogRef) {
        _super.call(this, client, router, {
            "type": "adduser",
            "args": {} }, function (response) {
            if (!response.error) {
                dialogRef.open(response.message);
                router.navigate(['/users']);
            }
            else {
                dialogRef.open(response.message);
            }
        });
        this.client = client;
        this.lib = lib;
        this.router = router;
        this.route = route;
        this.dialogRef = dialogRef;
    }
    UserCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-user-create',
            templateUrl: 'user-create.component.html',
            styleUrls: ['user-create.component.css']
        })
    ], UserCreateComponent);
    return UserCreateComponent;
})(base_value_1.BaseValueComponent);
exports.UserCreateComponent = UserCreateComponent;
