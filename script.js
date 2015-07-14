(function(){
  // Our app needs modern browser support
  if (!document.addEventListener && !document.documentElement.classList && !document.documentElement.getAttribute) return;

  var ready = function(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  var options = INSTALL_OPTIONS;

  var addStyles = function(options) {
    var styleEl = document.createElement('style');
    var styleString = '.eager-accordion { height:' + options.height + 'px }\n';
    for (var i = 0; i < options.images.length; i++) {
      styleString += '.eager-accordion ul li:nth-child(' + (i + 1) + ') { background-image: url("' + options.images[i].url + '") }\n';
    }
    styleEl.innerHTML = styleString;
    document.body.appendChild(styleEl);
  };

  var buildAccordian = function(images) {
    /*
    <div class="eager-accordion">
      <ul>
        <li>
          <div>
            <a href = "$link">
              <h2>$title</h2>
              <p>$caption</p>
            </a>
          </div>
        </li>
        <li>
          ...
        </li>
      </ul>
    </div>
    */

    var div = document.createElement('div');
    div.classList.add('eager-accordion');

    var ul = document.createElement('ul');

    for (var i = 0; i < images.length; i ++) {
      var li = document.createElement('li'),
        liDiv = document.createElement('div'),
        anchor = document.createElement('a'),
        h2 = document.createElement('h2'),
        p = document.createElement('p');

      p.appendChild(document.createTextNode(images[i].caption));
      h2.appendChild(document.createTextNode(images[i].title));

      if (images[i].linkHref) {
        anchor.setAttribute('href', images[i].linkHref);
      }

      anchor.appendChild(h2);
      anchor.appendChild(p);
      liDiv.appendChild(anchor);
      li.appendChild(liDiv);
      ul.appendChild(li);
    }

    div.appendChild(ul);
    return div;
  }

  ready(function(){
    addStyles(options);

    var eagerAppEl = Eager.createElement(options.location);
    eagerAppEl.appendChild(buildAccordian(options.images));
  });
})();
