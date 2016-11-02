$(document).ready(function () {
  var cssColorNames = ["Aqua","Black","Brown","Coral","Cyan","Grey","Indigo","Ivory","Lavender","Lime","Magenta","Maroon","Navy","Olive","Orange","Pink","Plum","Purple","Salmon","Silver","Teal","Turquoise","Violet"];
  var colorsArray = ['red', 'green', 'yellow', 'blue'];


  appendInitialColors();
  $('body').append('<button>Add</button>');
  //$('#container').append('<div id="red" class="square"></div><div id="green" class="square"></div><div id="yellow" class="square"></div><div id="blue" class="square"></div>')

  var currentColor = colorsArray[randomNumber(0, colorsArray.length-1)];
  var stringChoose = '';
  $('#title').text('Please pick the ' + currentColor + ' box!');
  $('#container').on('click', 'div', function () {

    var clickedColor = $(this).attr('id');
    if(clickedColor == currentColor) {
      alert("Nice! You picked wisely!");
      var random = randomNumber(0, colorsArray.length-1);
      currentColor = colorsArray[randomNumber(0, colorsArray.length-1)];
      stringChoose = 'Please pick the ' + currentColor + ' box!';
      $('#title').text(stringChoose);
      $('#message').empty();
    } else {
      $('#message').text('Nope! Not ' + clickedColor +'!');
    }

  });
  $('button').on('click', function(){
    if(cssColorNames.length == 0){
      alert('Sorry, no more colors!');
    } else {
    var random = randomNumber(0, cssColorNames.length-1);
    var cssColor = cssColorNames.splice(random, 1);
    //console.log(cssColor);
    //console.log(random);
    //var newColor = cssColorNames[randomNumber(0, cssColorNames.length)];
    colorsArray.push(cssColor);
    $('#container').append('<div id=' + cssColor + ' class="square"></div>');
    $('#container').children().last().css('background-color', cssColor);
    console.log(colorsArray.length, cssColorNames);
    }

  });

  function appendInitialColors(){
    for(i=0; i < colorsArray.length; i++){
    $('#container').append('<div id=' + colorsArray[i] + ' class="square"></div>');
    }
  }

  function randomNumber(min, max){
      return Math.floor(Math.random() * (1 + max - min) + min);
  }
});



//console.log(randomNumber(0, 3));
