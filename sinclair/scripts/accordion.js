// Requires jQuery
(function () {
  var OFFSET = 20; // gap above the heading

  function getPanel(btn) {
    return btn.nextElementSibling;
  }

  function scrollToHeading(btn) {
    var heading = btn.querySelector('h3') || btn; // <h3> inside the button, fallback to the button
    var y = $(heading).offset().top - OFFSET;

    var max = $(document).height() - $(window).height();
    if (max < 0) max = 0;
    y = Math.max(0, Math.min(y, max));

    $('html, body').stop(true, true).animate({ scrollTop: y }, 400);
  }

  $('.accordion').on('click', function () {
    var btn = this;
    var panel = getPanel(btn);
    var isOpen = btn.classList.contains('active');

    // Close all others
    $('.accordion').each(function () {
      if (this !== btn) {
        this.classList.remove('active');
        getPanel(this).style.maxHeight = null;
      }
    });

    if (isOpen) {
      // If already open, close it
      btn.classList.remove('active');
      panel.style.maxHeight = null;
    } else {
      // Open this one
      btn.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';

      // Scroll after layout settles
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          scrollToHeading(btn);
        });
      });

      // Align again after transition (if CSS animates max-height)
      panel.addEventListener('transitionend', function onEnd(e) {
        if (e.propertyName === 'max-height') {
          scrollToHeading(btn);
          panel.removeEventListener('transitionend', onEnd);
        }
      });
    }
  });
})();
