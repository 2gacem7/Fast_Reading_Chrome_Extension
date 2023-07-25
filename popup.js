// popup.js
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("boldButton").addEventListener("click", function () {
      chrome.tabs.query({currentWindow: true, active: true, }, function (tabs) {
        const tabId = tabs[0].id;
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["content.js"],
        });
      });
    });
  });
  