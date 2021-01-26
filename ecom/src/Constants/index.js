export const SlideUpDown = function(classnames) {
    var accords = document.querySelectorAll("."+classnames+" h4");
    [].forEach.call(accords, function(elemt) {
        elemt.innerHTML += '<span class="according-menu"></span>';
    })

    var anchors = document.getElementsByClassName(classnames);
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function() {
            var elems = document.querySelectorAll("."+classnames);
            [].forEach.call(elems, function(elemt) {
                elemt.classList.remove("active");
                var el = elemt.nextElementSibling;
                el.style.height = el.offsetHeight + 'px'
                el.style.transitionProperty = `height, margin, padding`
                el.style.transitionDuration = '500ms'
                el.offsetHeight // eslint-disable-line no-unused-expressions
                el.style.overflow = 'hidden'
                el.style.height = 0
                el.style.paddingTop = 0
                el.style.paddingBottom = 0
                el.style.marginTop = 0
                el.style.marginBottom = 0
                el.style.display = 'none'
                el.style.removeProperty('height')
                el.style.removeProperty('padding-top')
                el.style.removeProperty('padding-bottom')
                el.style.removeProperty('margin-top')
                el.style.removeProperty('margin-bottom')
                el.style.removeProperty('overflow')
                el.style.removeProperty('transition-duration')
                el.style.removeProperty('transition-property')

            });

            this.classList.add('active');
            var element = this.nextElementSibling;
            element.style.removeProperty('display')
            let display = window.getComputedStyle(element).display

            if(element.classList.contains('show')) {
                element.classList.remove('show');

                this.classList.remove("active");
                element.style.height = element.offsetHeight + 'px'
                element.style.transitionProperty = `height, margin, padding`
                element.style.transitionDuration = '500ms'
                element.offsetHeight // eslint-disable-line no-unused-expressions
                element.style.overflow = 'hidden'
                element.style.height = 0
                element.style.paddingTop = 0
                element.style.paddingBottom = 0
                element.style.marginTop = 0
                element.style.marginBottom = 0
                element.style.display = 'none'
                element.style.transitionProperty = `height, margin, padding`
                element.style.transitionDuration = '500ms'
                element.style.removeProperty('height')
                element.style.removeProperty('padding-top')
                element.style.removeProperty('padding-bottom')
                element.style.removeProperty('margin-top')
                element.style.removeProperty('margin-bottom')
                window.setTimeout(function () {
                    element.style.removeProperty('overflow')
                    element.style.removeProperty('transition-duration')
                    element.style.removeProperty('transition-property')
                }, 500)

            }else{
                element.classList.add('show');
                if (display === 'none') display = 'block'
                element.style.display = display
                let height = element.offsetHeight
                element.style.overflow = 'hidden'
                element.style.height = 0
                element.style.paddingTop = 0
                element.style.paddingBottom = 0
                element.style.marginTop = 0
                element.style.marginBottom = 0
                element.offsetHeight // eslint-disable-line no-unused-expressions
                element.style.transitionProperty = `height, margin, padding`
                element.style.transitionDuration = '500ms'
                element.style.height = height + 'px'
                element.style.removeProperty('padding-top')
                element.style.removeProperty('padding-bottom')
                element.style.removeProperty('margin-top')
                element.style.removeProperty('margin-bottom')
                window.setTimeout(function () {
                    element.style.removeProperty('height')
                    element.style.removeProperty('overflow')
                    element.style.removeProperty('transition-duration')
                    element.style.removeProperty('transition-property')
                }, 500)
            }
        }
    }

    var elems = document.querySelectorAll("."+classnames);
    [].forEach.call(elems, function(elemt) {
        let el = elemt.nextElementSibling;
        el.style = "display: none";
    });

}