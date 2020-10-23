import { applyBindings, computed, observable, observableArray } from 'knockout'

function WebmailViewModel() {
  var self = this

  // Data
  self.folders = ['Caixa de Entrada', 'Arquivados', 'Enviados', 'Spam']

  // tells which folder is selected via a observable
  self.selectedFolderId = observable()

  // methods to perform behaviours
  self.navigateToFolder = function (folder) {
    self.selectedFolderId(folder)
  }
}

applyBindings(new WebmailViewModel())
