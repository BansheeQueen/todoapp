class TaskCounter {
    constructor() {
        this.liList = [...document.querySelectorAll('li')];
        this.counter = document.querySelector('.counter span');
    }

refreshLiList() {
    this.liList = [...document.querySelectorAll('li')];
}

countLeftItems() {
    this.refreshLiList();
    let counter = 0;
    this.liList.forEach((li)  => {
        if(!li.classList.contains('completed')) {
        counter++
        }
    });
    return counter;
}

refreshCounter() {
    this.counter.textContent =  this.countLeftItems();

}
}