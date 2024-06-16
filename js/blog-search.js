function searchContent() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var content = document.querySelector('.article-content');
    var paragraphs = content.getElementsByTagName('p');

    // Clear previous highlights
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].innerHTML = paragraphs[i].innerText;
    }

    if (!input) {
      return;
    }

    // Search and highlight
    var found = false;
    for (var i = 0; i < paragraphs.length; i++) {
      var paragraph = paragraphs[i];
      var text = paragraph.innerText.toLowerCase();
      if (text.includes(input)) {
        var regex = new RegExp(input, 'gi');
        paragraph.innerHTML = paragraph.innerText.replace(regex, function(match) {
          return '<span class="highlight">' + match + '</span>';
        });
        if (!found) {
          paragraph.scrollIntoView({ behavior: 'smooth', block: 'center' });
          found = true;
        }
      }
    }

    if (!found) {
      alert('Content not found.');
    }
  }