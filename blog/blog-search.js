function searchContent() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  var content = document.querySelector('.article-content');
  var elements = content.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');

  // Clear previous highlights
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = elements[i].innerText;
  }

  if (!input) {
    return;
  }

  // Search and highlight
  var found = false;
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.innerText.toLowerCase();
    if (text.includes(input)) {
      var regex = new RegExp(input, 'gi');
      element.innerHTML = element.innerText.replace(regex, function(match) {
        return '<span class="highlight">' + match + '</span>';
      });
      if (!found) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        found = true;
      }
    }
  }

  if (!found) {
    alert('Content not found.');
  }
}
