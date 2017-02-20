
function newImage(){
  var url = `https://raw.githubusercontent.com/jazzyjackson/coltenj.com/master/img/${myRandom(0,25)}.PNG`;
  var width = myRandom(200,800)
  var posX = myRandom(0, screen.width - width)
  var posY = myRandom(0, screen.height)
  var imgString = `<img src=${url} width=${width} style="position: absolute; left: ${posX}; top: ${posY}"/>`
  var tempNode = document.createElement('div');
  tempNode.innerHTML = imgString;
  tempNode.firstChild.addEventListener('mouseover', event => event.target.remove());
  document.body.appendChild(tempNode.firstChild);
  return "Attached something"
}

function myRandom(min,max){
	var range = max - min;
    var numString = min + Math.ceil(Math.random() * range)
    return (numString < 10) ? "0" + numString : numString;

}