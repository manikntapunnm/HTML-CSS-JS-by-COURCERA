(function(window) {
    var hello = new Object();
    var Word = "Hello";
    hello.speak = function(someName) {
        console.log(Word + " " + someName);
    };
    window.hello = hello;
})(window);
