class ColorChanger {
    constructor() {
        this.colorBtn = document.querySelector('.brightness');
        this.body = document.querySelector('body');
    }
// Getters
    getBtn() {
        return this.colorBtn
    }

    getBody() {
        return this.body;
    }

//   Methods
    changeBrightnessIcon(item) {
        if(item.classList.contains('light')) {
           this.colorBtn.innerHTML = '<img src="images/icon-moon.svg" alt="Change theme">'
        } else {
            this.colorBtn.innerHTML = '<img src="images/icon-sun.svg" alt="Change theme">'
        }
    }
    
    toggleBodyClass(item) {
        if(item.classList.contains('light')) {
            item.classList.remove('light');
            localStorage.setItem('Theme', 'null');
           } else {
                item.classList.add('light');
                localStorage.setItem('Theme', 'enabled')
            }
        this.changeBrightnessIcon(item);
        }

    rememberThemeColor(item) {
        if(localStorage.getItem('Theme') === 'enabled') {
            item.classList.add('light')
        }
    }


    }
    
