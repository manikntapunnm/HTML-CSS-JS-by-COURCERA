
(function() {
    var someNames = ["P.Manikanta", "A.Bharathi", "Ch.BharatMathaji","M.NagaSudheer" ,"Jakob labs" ,"Yash rocky" , "Prakash", "Jason makki", "Jimmy","Johnny"];
    for (var i = 0; i < someNames.length; i++) {
        var Letter1 = someNames[i].charAt(0).toLowerCase();
        if (Letter1 === 'j') {
            bye.speak(someNames[i]);
        } else {
            hello.speak(someNames[i]);
        }
    }
})();
