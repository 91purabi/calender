const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
const currentMonthSpan = document.getElementById("currentMonth");
const calendarGrid = document.getElementById("calendarGrid");

let currentDate = new Date();

function updateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    currentMonthSpan.textContent = `${year}/${month + 1}`;

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    calendarGrid.innerHTML = '';

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    }

    // Calculate the number of empty cells at the beginning of the calendar
    const startDay = firstDayOfMonth.getDay();
    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day");
        calendarGrid.insertBefore(emptyCell, calendarGrid.firstChild);
    }
}

updateCalendar();

prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});
