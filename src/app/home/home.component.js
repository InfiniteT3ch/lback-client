var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent(lback, lib, router) {
        this.lback = lback;
        this.lib = lib;
        this.router = router;
        this.settings = {
            "backups": {
                "amount": 0,
                "size": 1000
            },
            "restores": {
                "amount": 0,
                "size": 1000
            },
            "users": {
                "amount": 0,
                "size": 1000
            }
        };
        this.data = {
            "backups": [],
            "restores": [],
            "users": []
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var that = this;
        this.lback.checkConnected(function () {
            that.router.navigate("/login");
        }, function () {
            this.load();
        });
    };
    HomeComponent.prototype.load = function () {
        var that = this;
        this.lback.send({
            "type": "listbackups",
            "args": this.settings['backups']
        }, function (response) {
            that.data.backups = response.data;
        });
        this.lback.send({
            "type": "listrestores",
            "args": this.settings['restores']
        }, function (response) {
            that.data.restores = response.data;
        });
        this.lback.send({
            "type": "listusers",
            "args": this.settings['users']
        }, function (response) {
            that.data.users = response.data;
        });
    };
    HomeComponent.prototype.gotoPage = function (settings, page) {
        settings['page'] = page;
        this.load();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
