const styleTag = document.createElement("style");
styleTag.innerHTML = `
  :not(script):not(style):not(noscript):not(textarea):not(a):not(pre):not(code):not(samp):not(kbd):not(var):not(sub):not(sup) {
    color: grey;
  }
`;

document.head.appendChild(styleTag);

function boldFirst50PercentLetters() {
    const elementsToBold = ['SPAN', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    const allTextNodes = getTextNodes(document.body);
  
    allTextNodes.forEach((node) => {
      let currentNode = node.parentNode;
      while (currentNode !== document.body) {
        if (elementsToBold.includes(currentNode.tagName)) {
          const words = node.nodeValue.trim().split(/\s+/);
          const boldWords = words.map((word) => {
            const halfLength = Math.ceil(word.length / 2);
            const firstHalf = word.slice(0, halfLength);
            const secondHalf = word.slice(halfLength);
            return `<span style="font-weight: bold; color: black;">${firstHalf}</span>${secondHalf} `;
          });
  
          const span = document.createElement("span");
          span.innerHTML = boldWords.join(" ");
          node.parentNode.replaceChild(span, node);
          break; // Only process once for each text node within a target element.
        }
        currentNode = currentNode.parentNode;
      }
    });
  }
  

function getTextNodes(element) {
  const textNodes = [];

  function getTextNodesRecursive(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      textNodes.push(node);
    } else {
      node.childNodes.forEach(getTextNodesRecursive);
    }
  }

  getTextNodesRecursive(element);
  return textNodes;
}

// Call the function to apply the bold style to the first 50% of letters in words
boldFirst50PercentLetters();
