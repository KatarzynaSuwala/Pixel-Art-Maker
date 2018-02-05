// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    let inputHeight = $('#inputHeight');
    let inputWidth = $('#inputWidth');
        //alert(inputHeight.val())
    makeGrid(inputHeight.val(), inputWidth.val())
    event.preventDefault(); //żeby nie iwykonywała się standarowa akcja (wysłanie danych do serwera)
});

function makeGrid(height, width) {
    let pixelCanvas = $('#pixelCanvas');
    let colorPicker = $('#colorPicker');
    
    pixelCanvas.empty();

    for(var h = 0; h < height; h++) {
        pixelCanvas.append('<tr id="row' + h + '"/>');
        let row = $('#row' + h, pixelCanvas);
        for(var w = 0; w < width; w++) {
            row.append("<td/>");
        }
    }

    $('td', pixelCanvas).click(function(event) {
        $(event.target).css('background-color', colorPicker.val());
    });
}
