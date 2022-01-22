
function myFunction() {
    if (x.matches) {
        setTimeout(() => {
            alert("Play this game in computer for bettered comfort..")
        }, 30000);
    }

}
var x = window.matchMedia("(max-width: 800px)");
myFunction(x); // Call listener function at run time