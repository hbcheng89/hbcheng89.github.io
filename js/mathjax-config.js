// Configure local MathJax rendering and reveal abstracts only after typesetting.
const revealMathContent = () => {
  document.querySelectorAll('.math-pending').forEach((element) => {
    element.classList.remove('math-pending');
  });
};

window.setTimeout(revealMathContent, 4000);

window.MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
    processEscapes: false,
  },
  svg: {
    fontCache: 'global',
  },
  startup: {
    pageReady: () => MathJax.startup.defaultPageReady().then(
      revealMathContent,
      revealMathContent,
    ),
  },
};
