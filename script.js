let myColor;
document.getElementById('colorButton').addEventListener('input', () => {
    let myColor = document.getElementById('colorButton').value;
    //console.log(myColor)
    let main = document.getElementById('main')
    main.style.backgroundColor = myColor;
});


document.getElementById("opacityButton").addEventListener('input', () => {
    let opacity = document.getElementById("opacityButton").value;
    console.log(opacity);

    let main = document.getElementById('main')
    let rgbColor = main.style.backgroundColor;
    let regExpRange = /[0-9]+/g;
    let colorMatch = rgbColor.match(regExpRange);
    //console.log(rgbColor);
    //console.log(opacityRange);
    console.log(colorMatch);
    main.style.backgroundColor = `rgba(${colorMatch[0]}, ${colorMatch[1]}, ${colorMatch[2]}, ${opacity})`;

});

document.getElementById('sizeButton').addEventListener('input', () => {
    let sizeImage = document.getElementById('sizeButton').value;
    document.querySelector('.imageClass').style.width = sizeImage  + "%";
    console.log(`${sizeImage}%`);
})
