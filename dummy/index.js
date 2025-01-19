const addTaskBtn = document.querySelector('.add-btn');
const taskCreationScreen = document.querySelector('.task-creation');
const backBtn = document.querySelector('.back-btn');
const taskForm = document.querySelector('.task-form');
const taskList = document.querySelector('.task-list');

// Open Task Creation Modal
addTaskBtn.addEventListener('click', () => {
  taskCreationScreen.classList.remove('hidden');
});

// Close Task Creation Modal
backBtn.addEventListener('click', () => {
  taskCreationScreen.classList.add('hidden');
});

// Add Task Functionality
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = taskForm.title.value;
  const dueDate = taskForm['due-date'].value;
  const priority = taskForm.priority.value;

  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');
  taskCard.innerHTML = `
    <div class="task-info">
      <h3>${title}</h3>
      <p>Due: ${dueDate}</p>
    </div>
    <div class="task-actions">
      <span class="priority ${priority}">${priority}</span>
      <input type="checkbox" />
    </div>
  `;

  taskList.appendChild(taskCard);
  taskForm.reset();
  taskCreationScreen.classList.add('hidden');
});
