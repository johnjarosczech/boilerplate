class Tabs {
    constructor(options) {
        this.bodySelector = 'js-tabs'

        this.navLinks = null
        this.contentContainer = null
        this.activeIndex = 0
        this.initCalled = false
        this.options = options

        if (!this.initCalled && hasClass(document.getElementsByTagName('body')[0], this.bodySelector)) {
            this.init()
        }
    }

    init() {
        this.el = document.querySelector(this.options.el)

        if (this.el !== null && typeof this.el !== 'undefined') {
            this.navLinks = this.el.querySelectorAll(this.options.navLinks)
            this.contentContainer = this.el.querySelectorAll(this.options.contentContainer)

            this.initCalled = true

            for (let i = 0; i < this.navLinks.length; i++) {
                var link = this.navLinks[i]

                this.handleClick(link, i)
            }

            if (window.location.hash && this.options.hash) {
                let hash = window.location.hash.substring(1)                

                for (let i = 0; i < this.navLinks.length; i++) {
                    if (this.navLinks[i].dataset.hash === hash) {
                        this.goToTab(i)
                    }
                }
            }
        }
    }

    handleClick(link, index) {
        var $this = this

        link.addEventListener('click', (e) => {
            e.preventDefault()

            $this.goToTab(index)
        })
    }

    goToTab(index) {
        if (index !== this.activeIndex && index >= 0 && index <= this.navLinks.length) {
            removeClass(this.navLinks[this.activeIndex], 'is-active')
            addClass(this.navLinks[index], 'is-active')
            removeClass(this.contentContainer[this.activeIndex], 'is-active')
            addClass(this.contentContainer[index], 'is-active')    
            
            if (this.options.hash) {
                window.location.hash = this.navLinks[index].dataset.hash
            }
            
            this.activeIndex = index;
        }
    }
}