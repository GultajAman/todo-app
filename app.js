const todosList = document.querySelector('.todos-list');

const todos = [
  {
    label: 'Complete online JavaScript course',
    id: '1',
    checked: false
  },
  {
    label: 'Jog around the park 3x',
    id: '2',
    checked: true
  },
  {
    label: '10 minutes meditation',
    id: '3',
    checked: false
  },
  {
    label: 'Read for 1 hour',
    id: '4',
    checked: false
  },
  {
    label: 'Pick up groceries',
    id: '5',
    checked: false
  },
  {
    label: 'Complete Todo App on Frontend Mentor',
    id: '6',
    checked: false
  }
];

todos.forEach((todo) => {
  const todoItem = `
        <li>
          <input type="checkbox" ${todo.checked ? 'checked' : ''} />
          <span class="${todo.checked ? 'checked' : ''}">${
    todo.label
  }</span>
        </li>
        `;
  todosList.insertAdjacentHTML('beforeend', todoItem);
});
