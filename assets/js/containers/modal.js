class Modal {
    constructor() {
        this.selectors = {
            body: 'js-modal',
            open: 'modal__open',
            close: 'modal__close',
            overlay: 'modal__overlay'
        }
        this.modal = null

        if (hasClass(document.getElementsByTagName('body')[0], this.selectors.body)) {
            this.open()
        }
    }

    open() {
        document.addEventListener('click', (e) => {
            e.preventDefault()

            if (hasClass(e.target, this.selectors.open)) {                
                this.modal = document.querySelector(`[data-modal='${e.target.id}']`)

                addClass(this.modal, 'active')
            
                this.close()
            }
        })
    }

    close() {
        document.addEventListener('click', (e) => {
            e.preventDefault()

            if (hasClass(e.target, this.selectors.close) || hasClass(e.target, this.selectors.overlay)) {
                removeClass(this.modal, 'active')
            }
        })
    }
}