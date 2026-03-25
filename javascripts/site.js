(function () {
  var config = window.SITE_CONFIG;
  var contactKeys;

  if (!config || !config.contacts) {
    return;
  }

  contactKeys = Object.keys(config.contacts);

  contactKeys.forEach(function (key) {
    var definition = config.contacts[key];
    var nodes = document.querySelectorAll('[data-contact="' + key + '"]');

    Array.prototype.forEach.call(nodes, function (node) {
      if (node.tagName !== "A") {
        return;
      }

      node.textContent = definition.label;
      node.setAttribute("href", definition.href);

      if (key !== "email") {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "noreferrer");
      }

      if (definition.placeholder) {
        node.classList.add("is-placeholder");
        node.setAttribute("title", "Update this link in javascripts/site-config.js.");
      }
    });
  });
}());
