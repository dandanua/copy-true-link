browser.contextMenus.create({
  id: "copy-true-link",
  title: "Copy True Link",
  contexts: ["link"]
});

browser.contextMenus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "copy-true-link") {
    browser.tabs.sendMessage(tab.id, "")
  }
});