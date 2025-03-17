document.addEventListener('DOMContentLoaded', () => {
    // انتخاب المان‌های مورد نیاز
    const tasks = document.querySelectorAll('.task');
    const checkboxes = document.querySelectorAll('.task-checkbox input');
    const starButtons = document.querySelectorAll('.star-btn');
    const addButton = document.querySelector('.add-btn');
    const menuItems = document.querySelectorAll('.menu li');

    // اضافه کردن رویداد برای چک‌باکس‌ها
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const task = e.target.closest('.task');
            if (e.target.checked) {
                task.classList.add('completed');
            } else {
                task.classList.remove('completed');
            }
        });
    });

    // اضافه کردن رویداد برای دکمه‌های ستاره
    starButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const icon = e.target.closest('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#FFD700';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '#888';
            }
        });
    });

    // اضافه کردن رویداد برای دکمه اضافه کردن کار جدید
    addButton.addEventListener('click', () => {
        const tasksList = document.querySelector('.tasks');
        const newTaskId = `task${tasks.length + 1}`;

        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.innerHTML = `
            <div class="task-checkbox">
                <input type="checkbox" id="${newTaskId}">
                <label for="${newTaskId}">کار جدید</label>
            </div>
            <button class="star-btn"><i class="far fa-star"></i></button>
        `;

        tasksList.appendChild(newTask);

        // اضافه کردن رویدادها به کار جدید
        const newCheckbox = newTask.querySelector('input');
        newCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                newTask.classList.add('completed');
            } else {
                newTask.classList.remove('completed');
            }
        });

        const newStarButton = newTask.querySelector('.star-btn');
        newStarButton.addEventListener('click', (e) => {
            const icon = e.target.closest('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#FFD700';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '#888';
            }
        });
    });

    // اضافه کردن رویداد برای آیتم‌های منو
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // اضافه کردن رویداد برای جستجو
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const taskLabels = document.querySelectorAll('.task-checkbox label');

        taskLabels.forEach(label => {
            const task = label.closest('.task');
            if (label.textContent.toLowerCase().includes(searchTerm)) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    });
}); 