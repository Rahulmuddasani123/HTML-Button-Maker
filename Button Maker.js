document.getElementById('applyButton').addEventListener('click', function() {
    let customButton = document.getElementById('custom-button').style
    let bgcolor = document.getElementById('bg-color').value
    let fontcolor = document.getElementById('font-color').value
    let fontsize = document.getElementById('font-size').value
    let fontweight = document.getElementById('font-weight').value
    let padding = document.getElementById('padding').value
    let borderradius = document.getElementById('border-radius').value
    customButton.backgroundColor = bgcolor
    customButton.color = fontcolor
    customButton.fontSize = fontsize
    customButton.fontWeight = fontweight
    customButton.padding = padding
    customButton.borderRadius = borderradius




})