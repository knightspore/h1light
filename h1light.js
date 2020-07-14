var heading = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
var append;
var elHTML;
var col;
var el;

function addPrefix () {
    heading.forEach(function(hX) {

        el = hX.nodeName;
    
        if (el == 'H1') {
            col = 'red';
        } else if (el == 'H2') {
            col = 'orange';
        } else if (el == 'H3') {
            col = 'yellow';
        } else if (el == 'H4') {
            col = 'lime';
        } else if (el == 'H5') {
            col = 'blue';
        } else if (el == 'H6') {
            col = 'indigo';
        }
    
        elHTML = hX.innerHTML;
        append = '<span style="color: ' + col + ';">' + el + ' > </span> ';
        hX.innerHTML = (append + elHTML);
    
        console.log(elHTML);
    });
}


