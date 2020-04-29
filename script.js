document.addEventListener('DOMContentLoaded', function(){
  chrome.tabs.query({active: true}, function(tabs) {
    let tab = tabs[0];
    let tabUrl = tab.url;
    let qhId = tabUrl.split("?id=")[1];
    if (qhId !== undefined) {
      document.querySelector('.tag__description__url').value = qhId;
      document.querySelector('.js-choice').style.visibility = "visible";
      const element = document.querySelector('.js-choice');
      const choices = new Choices(element, {
        editItems: true, maxItems: 5, removeButton: true
      });
    } else {
      document.querySelector('.js-choice').style.visibility = "hidden";
      document.querySelector('.tag__description__url').value = "Não encontrado ID do chamado";
    }
  })
})
