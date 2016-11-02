$(document).ready(function () {
  
  $('#container').append('<div id="red" class="square"></div><div id="green" class="square"></div><div id="yellow" class="square"></div><div id="blue" class="square"></div>')
  var cssColorNames = ["Aqua","Black","Blue","Brown","Coral","Cyan","Grey","Green","Indigo","Ivory","Lavender","Lime","Magenta","Maroon","Navy","Olive","Orange","Pink","Plum","Purple","Red","Salmon","Silver","Teal","Turquoise","Violet","Yellow"];
  var colorsArray = ['red', 'green', 'yellow', 'blue'];
  var currentColor = colorsArray[randomNumber(0, colorsArray.length)];
  var stringChoose = '';
  $('#title').text('Please pick the ' + currentColor + ' box!');
  $('#container').on('click', 'div', function () {
    var clickedColor = $(this).attr('id');
    if(clickedColor == currentColor) {
      alert("Nice! You picked wisely!");
      currentColor = colorsArray[randomNumber(0, 3)];
      stringChoose = 'Please pick the ' + currentColor + ' box!';
      $('#title').text(stringChoose);
      $('#message').empty();
    } else {
      $('#message').text('Nope! Not ' + clickedColor +'!');
    }

  });
});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//console.log(randomNumber(0, 3));
