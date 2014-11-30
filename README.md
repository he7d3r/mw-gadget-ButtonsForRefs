ButtonsForRefs
===========================
A script which adds buttons to WikiEditor's toolbar to help formatting references to books.

How it works
============
The script reads a list of book items on Wikidata from the global JavaScript variable `buttonsForRefsIds`. For each book in the list, it gets the associated data from Wikidata and formats it with the citation template used by the current wiki (e.g. "Cite book"). A new button is added to the toolbar, and allows the user to insert it in the articles with just a click.

Examples
========
```javascript
window.buttonsForRefsIds = [ 'Q18507658', 'Q18385111', 'Q15633767' ];
```