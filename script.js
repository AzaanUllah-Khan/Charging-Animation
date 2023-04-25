
        var w = 1;
        function play() {
            var foo = setInterval(function () {
                if (w >= 100) {
                    cancelInterval(foo)
                }
                w = w + 1;
                document.getElementById('p').style.width = w + '%';
                document.getElementById("perc").innerHTML = w + "%"
            }, 1000);
            document.getElementById("status").style.display = "block"
        }
        function play1() {
            var foo = setInterval(function () {
                if (w >= 100) {
                    cancelInterval(foo)
                }
                w = w + 1;
                document.getElementById('p').style.width = w + '%';
                document.getElementById("perc").innerHTML = w + "%"
            }, 700);
            document.getElementById("status").style.display = "block"
        }
    