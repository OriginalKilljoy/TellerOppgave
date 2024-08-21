let number=0

function goUp(){
    number = number+1
    document.getElementById('tall').innerHTML = number;
}

function goDown(){
    number = number -1
    document.getElementById('tall').innerHTML = number;
}