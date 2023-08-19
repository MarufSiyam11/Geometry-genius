function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heigthValueText = heightField.value;
    const height = parseFloat(heigthValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area)

    // show triangle area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}
function calculateRectangleArea(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-lenght');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    const area = width * length;
    // console.log(area);

    // show the rectangle area

    const rectsngleAreaSpan =document.getElementById('rectangle-area');
    rectsngleAreaSpan.innerText = area;
}