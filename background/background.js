/*
chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "newtab.html";
  chrome.tabs.create({ url: "/pages/breath.html" });
});
*/

chrome.tabs.onRemoved.addListener((tabId) => {
  chrome.storage.local.get({ currentTab: null }, (st) => {
    if (st.currentTab === tabId) {
      chrome.storage.local.remove([`currentTab`]);
    }
  });
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.action == "openExtPage") {

    chrome.storage.local.get({ currentTab: null }, (st) => {
      if (st.currentTab !== null) {
        chrome.tabs.get(st.currentTab, (tab) => {
          console.log(tab);
          if (!!tab) {
            chrome.tabs.update(st.currentTab, { url: msg.value });
          } else {
            chrome.tabs.create({ url: msg.value }, (tab) => {
              chrome.storage.local.set({ currentTab: tab.id });
            });

          }
        });
      } else {
        chrome.tabs.create({ url: msg.value }, (tab) => {
          chrome.storage.local.set({ currentTab: tab.id });
        });
      }
    });
  }
});

