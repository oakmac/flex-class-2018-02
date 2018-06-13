
function getCurrentHash () {
  return window.location.hash
}

function byId (id) {
  return document.getElementById(id)
}

function hideAllSections () {
  $('section').hide()
}

function showSection (sectionId) {
  byId(sectionId).style.display = ''
}

const defaultRoute = '/students'

function onHashChange (evt) {
  const theHash = getCurrentHash().replace('#', '')

  hideAllSections()
  if (theHash === '/students') {
    showSection('students')
  } else if (theHash === '/dashboard') {
    showSection('dashboard')
  } else if (theHash === '/attendance') {
    showSection('attendance')
  } else {
    window.location.hash = defaultRoute
  }
}

function addEvents () {
  window.onhashchange = onHashChange
}

function init () {
  addEvents()
  onHashChange()
}

init()
