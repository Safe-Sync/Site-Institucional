const accordion = document.getElementById('accordion');

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var draggedItem = document.getElementById(data);
        var dropZone = ev.target.closest('.accordion-item');

        if (dropZone) {
            dropZone.querySelector('.accordion-content').appendChild(draggedItem);
        }
    }

    accordion.addEventListener('click', function (event) {
        const accordionItem = event.target.closest('.accordion-item');
        if (accordionItem) {
            accordionItem.classList.toggle('active');
        }
    });

    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var taskText = taskInput.value.trim();
        if (taskText !== "") {
            var newTask = document.createElement("div");
            newTask.className = "task";
            newTask.id = "task-" + Date.now();
            newTask.draggable = true;
            newTask.ondragstart = function (ev) {
                drag(ev);
            };
            newTask.innerText = taskText;

            var tarefasContent = document.getElementById('tarefasContent');
            tarefasContent.appendChild(newTask);
            taskInput.value = "";
        }
    }