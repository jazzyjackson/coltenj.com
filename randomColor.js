Array.from(innertag0.shadowRoot.querySelectorAll('.trigram'), each => {
	console.log(each)
  var red = Math.random() > 0.5 ? "rgba(255,0,0,1)" : "transparent"
  var green = Math.random() > 0.5 ? "rgba(0,255,0,1)" : "transparent"
  var blue = Math.random() > 0.5 ? "rgba(0,0,255,1)" : "transparent"


  each.style.background = `radial-gradient(50px at 50px 50px,${red},${red} 99%, transparent 99%, transparent), 
                  radial-gradient(50px at 50px 100px, ${green}, ${green} 99%, transparent 99%, transparent),
                  radial-gradient(50px at 93.3px 75px, ${blue}, ${blue} 99%, transparent 99%, transparent)`

  return each;
})

var perrow = Math.ceil(innerWidth / 293.3 * 2)
var numRows = Math.ceil(innerHeight / 143.3)

var rowString = Array.from(new Array(perrow), emptystring => `<div class="trigramcontainer"><div class="trigram"></div></div>`).join('')
var bodyString = Array.from(new Array(numRows), emptystring => `<div class="row">${rowString}</div>`).join('')
