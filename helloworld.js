var HelloWorld = (function () {
    function HelloWorld(displayDOM) {
        this.displayDOM = displayDOM;
    }
    HelloWorld.prototype.SayHi = function (name) {
        function add(params) {
            var isReady = true;
            var total = 0;
            return params;
        }
        ;
        var hh = add('3');
        var displayText = "Hello, " + name + " " + hh;
        this.displayDOM.innerHTML = displayText;
        var idList = [1, 2, 3];
        idList.push(4);
        console.log(idList);
    };
    return HelloWorld;
}());
//# sourceMappingURL=helloworld.js.map