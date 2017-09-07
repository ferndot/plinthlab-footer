(function(window, undefined){
  var scriptElement = document.currentScript,
      scriptParent = scriptElement.parentNode;

  // Generate style element
  var styleElement = document.createElement('link');
  styleElement.setAttribute('rel','stylesheet');
  styleElement.setAttribute('href','https://lab.plinthlab.com/plinthlab-footer/plinthlab-footer.css');
  document.head.appendChild(styleElement);

  // Generate footer
  var footerElement = document.createElement('footer');
  footerElement.id = 'plinthlab-footer';
  footerElement.innerHTML = 'perfected by <a href="https://www.plinthlab.com/" target="_blank">plinth</a>';
  scriptParent.insertBefore(footerElement,scriptElement);
})(this);
