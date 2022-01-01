// Instances
const colorChange = new ColorChanger();
const list = new TaskList();
const sortList = new Sorter();

// Local Storage
colorChange.rememberThemeColor(colorChange.getBody());
list.rememberTasksList();


// On load
sortList.checkChecked();
sortList.rememberCheckboxes();



// Event Listeners
colorChange.getBtn().addEventListener("click", () => {
    colorChange.toggleBodyClass(colorChange.getBody());
});

sortList.getOptionList().forEach((e) => {
    e.addEventListener('click', (e) => {
        sortList.filterOptions(e.currentTarget);
    })
})

sortList.getCheckboxes().forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        sortList.saveCheckboxes();
        sortList.checkChecked();
    })
})

list.getClearBtn().addEventListener('click', () => {list.clearCompleted()})

list.getTaskInput().addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
    list.addTask();
    sortList.getCheckboxes().forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            sortList.checkChecked();
        })});
        sortList.getCheckboxes().forEach((checkbox) => {
            checkbox.addEventListener('click', () => {
                sortList.saveCheckboxes();
                sortList.checkChecked();
            })
        })
    }

});




