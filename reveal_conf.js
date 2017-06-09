filename = location.pathname.substring(1)
filename = filename.substring(0,filename.indexOf('.'))

selector = document.querySelector('section'); 
selector.dataset.markdown = filename + '.md';
document.title = filename;
// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  // Optional reveal.js plugins
  dependencies: [
    { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true },
    { src: 'reveal.js/plugin/notes/notes.js', async: true }
  ]
});
