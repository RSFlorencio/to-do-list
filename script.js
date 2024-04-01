document.addEventListener('DOMContentLoaded', function () {
    var taskInput = document.getElementById('taskInput');
    var addTaskBtn = document.getElementById('addTaskBtn');
    var taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function () {
        var taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    function createTask(taskText) {
        var taskItem = document.createElement('div');
        taskItem.classList.add('task');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        var taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            taskItem.remove();
        });

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskContent.style.textDecoration = 'line-through';
                taskList.appendChild(taskItem);
            } else {
                taskContent.style.textDecoration = 'none';
                taskList.insertBefore(taskItem, taskList.firstChild);
            }
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    }
});
