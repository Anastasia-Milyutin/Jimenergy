document.querySelectorAll('.connection_btn ').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var blockOpen = document.querySelector('.block-open');
      blockOpen.style.display = 'block';
    });
  });
  document.querySelector('.open-btn-close').addEventListener('click', function() {
    var blockOpen = document.querySelector('.block-open');
    blockOpen.style.display = 'none';
  });