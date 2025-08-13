javascript: /*ImageRotate*/ ((d, s) => {
    if (/^image/.test(document.contentType)) {
        (s = document.images[0].style).transform = `rotate(${parseInt((s.transform||"rotate(0deg)").match(/d+/)) + d}deg)`
    } else alert("Not viewing an image.")
})(90)
