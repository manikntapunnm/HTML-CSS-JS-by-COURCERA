(function(window) {
    var bye = new Object();
    var Word = "GoodBye";
    bye.speak = function speak(someName) {
        console.log(Word + " " + someName);
    };
    window.bye = bye;
})(window);
