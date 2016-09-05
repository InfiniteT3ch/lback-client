var BaseModelComponent = (function () {
    function BaseModelComponent(client, router, args) {
        this.client = client;
        this.router = router;
        this.args = args;
        _super.call(this, client, router);
        var that = this;
        this.client.send(args, function (response) {
            that.model = response.data;
        });
    }
    return BaseModelComponent;
})();
