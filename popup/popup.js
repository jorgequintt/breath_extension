function openExtPage(url) {
   chrome.runtime.sendMessage({action: "openExtPage", value: url});
}

$(document).ready(() => {
   $('a.square-btn').on('click', (e) => {
      e.preventDefault();
      openExtPage(e.currentTarget.href);
      window.close();
   });
   $('a.pranayama-btn').on('click', (e) => {
      e.preventDefault();
      openExtPage(e.currentTarget.href);
      window.close();
   });
   $('a.ujjyi-btn').on('click', (e) => {
      e.preventDefault();
      openExtPage(e.currentTarget.href);
      window.close();
   });
});