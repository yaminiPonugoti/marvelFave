const form = document.querySelector('#moviesForm')
var movieNames = []
function renderColor(color) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

function renderListItem(value) {
  const item = document.createElement('li')

  //const term = document.createElement('dt')
  //term.textContent = ''

  const description = document.createElement('dd')
  //console.log(movieNames)
  try {
    description.appendChild(value)
  } catch(e) {
    description.textContent += value
  }
  movieNames.push(item)
  console.log(movieNames)
  //item.appendChild(term)
  item.appendChild(description)
  return item
}

function renderList(data) {
  const list = document.createElement('dl')
  const labels = Object.keys(data)
  labels.forEach(label => {
    const item = renderListItem(data[label])
    list.appendChild(item)
  })
  return list
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const movie = {
    name: f.name.value,
  }

  const movies = document.querySelector('#movies')
  movies.appendChild(renderList(movie))

  f.reset()
  f.name.focus()
}

form.addEventListener('submit', handleSubmit)