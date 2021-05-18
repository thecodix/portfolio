$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat alfredo.romeu<br/>" +
      "><span class='caret'>$</span> skills: python, backend development, databases, git<br/> ^100" +
      "><span class='caret'>$</span> job: software developer at Curelator<br/> ^100" +
      "><span class='caret'>$</span> hobbies: photography, sports, dancing, travelling<br/> ^300" +
      "><span class='caret'>$</span> alias: thecodix <br/>"/*
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/crearo/'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/'>linkedin</a> <a href='http://bhardwajrish.blogspot.com/'>blog</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
