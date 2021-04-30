import * as _ from 'lodash'
import 'tailwindcss/tailwind.css'

function component() {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'test1'], ' ')

  return element
}

document.body.appendChild(component())
