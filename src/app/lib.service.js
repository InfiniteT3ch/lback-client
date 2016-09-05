var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var LibService = (function () {
    function LibService() {
        this.setConfig({
            "PER_PG": 10
        });
    }
    LibService.prototype.getPages = function (length) {
        var config = this.getConfig();
        if (length > config.PER_PG) {
            var amount = parseInt(Math.floor(length / config.PER_PG));
            var list = [];
            for (var i = 1; i <= amount; i++) {
                list.push(i);
            }
            return list;
        }
        return [1];
    };
    LibService.prototype.getImage = function (imageName) {
    };
    LibService.prototype.getMessage = function (messageName) {
    };
    LibService.prototype.getConfig = function () {
        return this.config;
    };
    LibService.prototype.setConfig = function (config) {
        this.config = config;
    };
    LibService = __decorate([
        core_1.Injectable()
    ], LibService);
    return LibService;
})();
exports.LibService = LibService;
