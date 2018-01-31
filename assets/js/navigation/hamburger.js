class Hamburger {
    constructor() {
        this.bodySelector = 'js-hamburger'

        this.hamburger = null
        this.list = null
        this.open = false

        if (hasClass(document.getElementsByTagName('body')[0], this.bodySelector)) {
            this.hamburger = document.getElementsByClassName('hamburger')[0]
            this.list = document.getElementsByClassName('hamburger__list')[0]

            this.handleToggle()
        }
    }

    handleToggle() {
        this.hamburger.addEventListener('click', (e) => {
            e.preventDefault()

            this.toggle()
        })

        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 27 && this.open) {
                this.toggle()
            }
        })
    }

    toggle() {
        toggleClass(this.list, 'active')
        toggleClass(this.hamburger, 'active')

        this.open = !this.open
    }
}