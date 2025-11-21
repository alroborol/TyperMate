document.addEventListener('DOMContentLoaded', function() {
  const blocks = document.querySelectorAll('.section-block');
  const reveal = () => {
    const trigger = window.innerHeight * 0.92;
    blocks.forEach(block => {
      const rect = block.getBoundingClientRect();
      if (rect.top < trigger) {
        block.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
});
