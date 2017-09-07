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
  footerElement.innerHTML = `
  <a href="https://www.plinthlab.com/" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 367.2 346" enable-background="new 0 0 367.2 346">
      <g transform="translate(40.031 -84.582)">
        <path d="M-26.5 87.6s32.5 15.1 40 30c4.5 8.9 0 30 0 30s44.6-12.8 60 0c28.6 23.9 30 72.7 30 110s-1.4 86.1-30 110c-15.4 12.8-60 0-60 0s4.5 21.1 0 30c-7.5 14.9-40 30-40 30h340s-32.5-15.1-40-30c-4.5-8.9 0-30 0-30s-44.6 12.8-60 0c-28.6-23.9-30-72.7-30-110s1.4-86.1 30-110c15.4-12.8 60 0 60 0s-4.5-21.1 0-30c7.5-14.9 40-30 40-30s-340 0-340 0z" class="st0"></path>
      </g>
    </svg>perfected by plinth
  </a>
  `;
  scriptParent.insertBefore(footerElement,scriptElement);
})(this);
