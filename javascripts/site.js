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
      var labelNode;

      if (node.tagName !== "A") {
        return;
      }

      node.setAttribute("href", definition.href);
      labelNode = node.querySelector("[data-contact-label]");

      if (labelNode) {
        labelNode.textContent = definition.label;
      }

      if (definition.ariaLabel) {
        node.setAttribute("aria-label", definition.ariaLabel);
      }

      if (key !== "email") {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "me noopener noreferrer");
      }

      if (definition.placeholder) {
        node.classList.add("is-placeholder");
        node.setAttribute("title", "Update this link in javascripts/site-config.js.");
      }
    });
  });
}());
