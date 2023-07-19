function toggleExpand(event) {
  const header = event.target;
  const content = header.nextElementSibling;

  const expandedHeaders = document.querySelectorAll('.expander-header.expander-content-expanded');
  expandedHeaders.forEach(function(expandedHeader) {
    if (expandedHeader !== header) {
      expandedHeader.classList.remove('expander-content-expanded');
      expandedHeader.nextElementSibling.style.display = 'none';
    }
  });

  if (header.classList.contains('expander-content-expanded')) {
    header.classList.remove('expander-content-expanded');
    content.style.display = 'none';
  } else {
    header.classList.add('expander-content-expanded');
    content.style.display = 'block';
  }
}
  