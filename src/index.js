document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    buildToDo(e.target[0].value)
  })
});

function buildToDo(todo){
  let p = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.getElementById('tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}