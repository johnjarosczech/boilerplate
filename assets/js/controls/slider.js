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

        this.handlePreviousSlide()
        this.handleNextSlide()
    }

    slideTo(slide, direction) {
        var currentSlide = this.slides[slide]

        currentSlide.style.left = '0px'
        currentSlide.style.display = 'block'

        if (direction === 'prev') {
            slide == slide++

            this.slides[slide].style.display = 'none'
        } else {
            slide == slide--

            this.slides[slide].style.display = 'none'
        }
    }

    handlePreviousSlide() {
        var $this = this

        this.previous.addEventListener('click', () => {
            $this.index--
            $this.next.style.display = 'block'

            if ($this.index == 0) {
                $this.index = 0
                $this.previous.style.display = 'none'
            }

            $this.slideTo(this.index, 'prev')
        }, false)
    }

    handleNextSlide() {
        var $this = this

        this.next.addEventListener('click', () => {
            $this.index++
            $this.previous.style.display = 'block'

            if ($this.index == $this.total - 1) {
                $this.index = $this.total - 1
                $this.next.style.display = 'none'
            }

            $this.slideTo($this.index, 'next')
        }, false)
    }
}