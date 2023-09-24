const calculateArea = () => {
    let lenght = document.getElementById("lenght").value;
    let area = (5 * Math.pow(lenght, 3) / 12) * (3 + Math.sqrt(5));

    document.getElementById("result").innerHTML = area;
    document.getElementById("button").style = "color: #808080";
    
}