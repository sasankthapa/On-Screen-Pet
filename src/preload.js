// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

window.addEventListener('mousemove', function ( event ) {
  let el = event.target
  if (el.classList.contains('mouse') || el.classList.contains('window-handle')) {
    browserWindow.setIgnoreMouseEvents(false)
  } else {
    browserWindow.setIgnoreMouseEvents(true, {forward: true})
    // ^ this function stops forwarding after a refresh (CTRL+R)
  }
  console.log("here")
})