class Slider {
    constructor(el) {
        this.bodySelector = 'js-slider'

        if (hasClass(document.getElementsByTagName('body')[0], this.bodySelector)) {
            this.el = document.querySelector(el)

            if (this.el !== null && typeof this.el !== 'undefined') {
                this.init()
            }
        }
    }

    init() {
        this.wrapper = this.el.querySelector('.slider__wrapper')
        this.slides = this.el.querySelectorAll('.slider__slide')
        this.previous = this.el.querySelector('.slider__previous')
        this.next = this.el.querySelector('.slider__next')
        this.index = 0
        this.total = this.slides.length
        this.self = this
        this.animateLeft = null
        this.slideLeft = null

        this.handlePreviousSlide()
        this.handleNextSlide()
    }

    slideTo(slide, direction) {
        var currentSlide = this.slides[slide]
        var currentIndex = slide
        var newIndex = 0
        
        currentSlide.style.display = 'block'

        if (direction === 'prev') {
            slide == slide++
 
            if (slide > this.total - 1) {
                slide = 0
            }
        } else {
            slide == slide--

            if (slide < 0) {
                slide = this.total - 1
            }
        }

        newIndex = slide

        if (newIndex > currentIndex) {
            this.slideLeft = '100%'
            this.animateLeft = '-100%'
        } else {
            this.slideLeft = '-100%'
            this.animateLeft = '100%'
        }

        document.querySelectorAll(this.slides)[newIndex]
        
        this.slides[slide].style.display = 'none'
    }

    handlePreviousSlide() {
        var $this = this

        this.previous.addEventListener('click', () => {
            $this.index--

            if ($this.index < 0) {
                $this.index = $this.total - 1
            }

            $this.slideTo(this.index, 'prev')
        }, false)
    }

    handleNextSlide() {
        var $this = this

        this.next.addEventListener('click', () => {
            $this.index++

            if ($this.index == $this.total) {
                $this.index = 0
            }

            $this.slideTo($this.index, 'next')
        }, false)
    }
}