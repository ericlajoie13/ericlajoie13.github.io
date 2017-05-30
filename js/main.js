var lastResizeAttempt = null;
var resizeTimeout = null;

function updateImageHeights() {
  var styleId = 'image-height-styler';

  // remove if already there
  var style = document.getElementById(styleId);

  if (style) {
    style.remove();
  }

  // create new style tag
  style = document.createElement('style');
  style.id = styleId;
  style.type = 'text/css';

  // the CSS to add
  var maxHeight = document.querySelector('.main-content').getBoundingClientRect().width;
  var css = '.main-content img {' +
    '  max-height: ' + maxHeight + 'px;' +
    '}';

  // fill in the CSS in the style tag
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  // add to head
  var head = document.head || document.querySelector('head');
  head.appendChild(style);
}


function debouncedResizeHandler() {
  var now = Date.now();
  var debounceThreshold = 15;
  // enough time has passed, run callback
  if (lastResizeAttempt && now - lastResizeAttempt > debounceThreshold) {
    clearTimeout(resizeTimeout);
    resizeTimeout = null;
    lastResizeAttempt = null;

    // run callback
    console.log('running callback', now);
    updateImageHeights();

  // not enough time has passed - reset the timer
  } else {
    lastResizeAttempt = now;
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () { debouncedResizeHandler(); }, debounceThreshold);
  }
}

// run initially
updateImageHeights();

// run debounced on resize
window.addEventListener('resize', debouncedResizeHandler);
