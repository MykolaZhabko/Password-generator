//document.getElementById('password').addEventListener('keydown', checkSpase)


function generatePassword() {
    var text = document.getElementById('password').value;
    var string = text.trim().split('');
    var result = '';
    if (string.length < 10) {
        document.getElementById('warning').innerHTML = 'Error! Minimum 10 characters';
    } else {
        if (isNaN(Number(string[2]))) {
            string[2] = string[2].toUpperCase();
        } else string[2] = Number(string[2]) + 10;
        string.splice(0, 0, new Date().getSeconds());
        string.push(new Date().getMinutes());
        string.splice(6, 0, Math.floor(Math.random() * 60));
        for (var i = 0; i < string.length; i++) {
            if (string[i] == "i") {
                string[i] = "1";
            }
            result += string[i];
        }
        document.getElementById('warning').classList.add("final");
        document.getElementById('warning').innerHTML = result;
    }

    console.log(string);
}


function checkSpase() {
    var text = document.getElementById('password').value;
    document.getElementById('warning').classList.remove("final");
    document.getElementById('warning').innerHTML = "";
    text = text.trim();
    var arr = [];
    arr = text.split('');
    var counter = 10 - text.length;
    console.log(counter)
    if (counter <= 10 && counter >= 0) {
        document.getElementById('counter').innerHTML = 10 - text.length;
        //counter -= 1;
        // console.log(counter);
        if (counter == 0) {
            document.getElementById('counter').classList.add('ready');
            document.getElementById('counter').innerHTML = "OK";
            document.getElementById('counter').classList.remove('not_ready');
        } else {
            document.getElementById('counter').classList.remove('ready');
            document.getElementById('counter').classList.add('not_ready');
        }
    }
    // console.log(arr.length + 1);
    document.getElementById('password').value = text;

}