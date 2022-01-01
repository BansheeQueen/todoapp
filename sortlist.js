class Sorter {
    constructor() {
        this.optionBtns = [...document.querySelectorAll('.options')];
        this.clearBtn = document.querySelector('.clearing');
        this.liList = [];
        this.filteredList = [];
        this.checkboxes = [];
        this.crosses = [];
        this.completed = [];

    }

//Getters
getOptionList() {
    return this.optionBtns;
}

getCheckboxes() {
    return this.checkboxes;
}
// Methods
loadCheckboxes() {
    this.checkboxes = [...document.querySelectorAll('li input[type="checkbox"]')];

}

addCheckboxesAttr() {
    for(let i = 0; i < this.checkboxes.length; i++) {
       this.checkboxes[i].setAttribute('data', `checkbox-${i}`);
    }
}

saveCheckboxes() {
    for(let i = 0; i < this.checkboxes.length; i++) {
        localStorage.setItem(this.checkboxes[i].getAttribute('data'), this.checkboxes[i].checked);
    }
}

rememberCheckboxes() {
    this.loadCheckboxes();
    this.addCheckboxesAttr();
        for(let i = 0; i < this.checkboxes.length; i++) {
        this.checkboxes[i].checked = JSON.parse(localStorage.getItem(this.checkboxes[i].getAttribute('data')));
    }
    
}

checkChecked() {
this.loadCheckboxes();
this.checkboxes.forEach((checkbox) => {
    if(checkbox.checked) {
        checkbox.parentNode.classList.remove('active');
        checkbox.parentNode.classList.add('completed');
    } else {checkbox.parentNode.classList.add('active');
    checkbox.parentNode.classList.remove('completed');}
})}


filterAll() {

    if(this.getOptionList()[0].classList.contains('current')) {
        this.crosses = [...document.querySelectorAll('span.cross')]
        this.crosses.forEach((cross) => {
            cross.style.visibility = "initial";
        })
        this.filteredList = this.liList.filter((li) => {return li} );
        this.filter();
    }
}

filterActive() {

    if(this.getOptionList()[1].classList.contains('current')) { 
        this.crosses = [...document.querySelectorAll('span.cross')]
        this.crosses.forEach((cross) => {
            cross.style.visibility = "hidden";
        })
        this.filteredList = this.liList.filter((li) => {return li.classList.contains('active');});
        this.filter();
    }
}

filterCompleted() {
    if(this.getOptionList()[2].classList.contains('current')) { 
        this.crosses = [...document.querySelectorAll('span.cross')]
        this.crosses.forEach((cross) => {
            cross.style.visibility = "hidden";
        })
        this.filteredList = this.liList.filter((li) => {return li.classList.contains('completed');});
        this.filter();
    }
}

filter() {
    this.liList.forEach((li) => {
        li.style.display = "none";
        this.filteredList.forEach((filteredLi) => {
        if(li.textContent === filteredLi.textContent) {
            li.style.display = "block";
        } 
    })
     })
}

filterOptions(clicked) {
    this.liList = [...document.querySelectorAll('li')];
    this.getOptionList().forEach((option) => {
        if(option.classList.contains('current')) {
        option.classList.remove('current');
    }})
    clicked.classList.add('current');
    this.filterAll();
    this.filterActive();
    this.filterCompleted();


    }

loadActive() {
    this.active = [...document.querySelectorAll('li.active')];
    return this.active;

}}