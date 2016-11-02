$(document).ready(function () {
  var cssColorNames = ["Aqua","Black","Brown","Coral","Cyan","Grey","Indigo","Ivory","Lavender","Lime","Magenta","Maroon","Navy","Olive","Orange","Pink","Plum","Purple","Salmon","Silver","Teal","Turquoise","Violet"];
  var colorsArray = ['red', 'green', 'yellow', 'blue'];
  appendInitialColors();
  $('body').append('<button id="add">Add</button>');

  var currentColor = colorsArray[randomNumber(0, colorsArray.length-1)];
  var stringChoose = '';
  $('#title').text('Please pick the ' + currentColor + ' box!');


  // This is listening for a click on one of the squares. It checks to see if the class of the
  // clicked color matches the currently chosen guessing color. If it matches, alerts winning message
  // and sets current color to a randomly chosen one, resets the prompt message and empties #message
  //

  $('#container').on('click', 'div', function () {
    var clickedColor = $(this).attr('class');
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

  // This is listening for a click on the delete button. If it is hit it removes the color from color array
  // then pushes
  $('#container').on('click', 'button', function () {
    for(i=0; i <colorsArray.length; i++){
      if(colorsArray[i]==$(this).attr('class')){
        var removedColor = colorsArray.splice(i, 1);
        cssColorNames.push(removedColor);
      }
    }
    console.log(cssColorNames);
    console.log(colorsArray);
    $(this).parent().remove();
  });

  $('#add').on('click', function(){
    if(cssColorNames.length == 0){
      alert('Sorry, no more colors!');
    } else {
    var random = randomNumber(0, cssColorNames.length-1);
    var cssColor = cssColorNames.splice(random, 1);
    colorsArray.push(cssColor);
    $('#container').append('<div class="' + cssColor + '" square"><button class=' + cssColor + '>delete</button></div>');
    $('#container').find('div').last().css({'background-color': cssColor, 'width': '100px', 'height': '100px', 'display': 'inline-block', 'margin': '20px'});    //$('#container').children().last().addClass(cssColor);
    }

  });






  function appendInitialColors(){
    for(i=0; i < colorsArray.length; i++){
    $('#container').append('<div class="' + colorsArray[i] + '" square"><button class=' + colorsArray[i] + '>delete</button></div>');
    $('#container').find('div').last().css({'background-color': colorsArray[i], 'width': '100px', 'height': '100px', 'display': 'inline-block', 'margin': '20px'});
    }
  }

  function randomNumber(min, max){
      return Math.floor(Math.random() * (1 + max - min) + min);
  }
});



//console.log(randomNumber(0, 3));
