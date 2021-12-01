document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('create-task-form')
    const taskList = document.querySelector('#tasks')
    const taskData = document.querySelector('#new-task-description')

    form.addEventListener('submit', (e) => {
      const task = taskData.value;
      e.preventDefault();
      const li = document.createElement('li');
      li.innerText = task;
      const button = document.createElement('button');
      button.innerText = "x";
      li.appendChild(button);
      taskList.appendChild(li);
      taskData.value = '';
      button.addEventListener('click', (e) => {
        e.target.parentNode.remove()
      })
    })
    
});
