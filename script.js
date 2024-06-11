var flag = [false, false, false, false, false, false];
var list = document.querySelectorAll('li');
window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var anch = document.querySelectorAll('a');

    if (window.innerWidth <= 900 && window.scrollY > 50) {
        nav.style.backgroundColor = '#a9d2d57b';
        nav.style.backdropFilter = 'blur(5px)'
        anch.forEach((e) => {
            return e.style.color = '#080708';
        });
    } else {
        nav.style.backgroundColor = '#000267';
        anch.forEach((e) => {
            return e.style.color = '#E6E8E6';
        });
    }
    if (window.scrollY > 10 && this.window.scrollY < this.window.innerHeight) {
        for (let i = 0; i < list.length; i++) {
            if (i == 1) {
                flag[i] = true;
                list[i].style.backgroundColor = '#1C77C3';
            }
            else {
                flag[i] = false;
                list[i].style.backgroundColor = 'transparent';
            }
        }
    } else if (this.window.scrollY >= this.window.innerHeight && this.window.scrollY < 2 * this.window.innerHeight) {
        for (let i = 0; i < list.length; i++) {

            if (i == 2) {
                flag[i] = true;
                list[i].style.backgroundColor = '#1C77C3';
            }
            else {
                flag[i] = false;
                list[i].style.backgroundColor = 'transparent';
            }
        }
    } else if (this.window.scrollY >= 2 * this.window.innerHeight && this.window.scrollY < 3 * this.window.innerHeight) {
        for (let i = 0; i < list.length; i++) {
            if (i == 3) {
                flag[i] = true;
                list[i].style.backgroundColor = '#1C77C3';
            }
            else {
                flag[i] = false;
                list[i].style.backgroundColor = 'transparent';
            }
        }
    } else if (this.window.scrollY >= 3 * this.window.innerHeight) {
        for (let i = 0; i < list.length; i++) {
            if (i == 4) {
                flag[i] = true;
                list[i].style.backgroundColor = '#1C77C3';
            }
            else {
                flag[i] = false;
                list[i].style.backgroundColor = 'transparent';
            }
        }
    }
    else {
        for (let i = 0; i < list.length; i++) {
            if (i == 0) {
                flag[i] = true;
                list[i].style.backgroundColor = '#1C77C3';
            }
            else {
                flag[i] = false;
                list[i].style.backgroundColor = 'transparent';
            }
        }
    }
});
document.querySelectorAll('scroll-link').forEach((e) => {
    e.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
list.forEach((e, index) => {
    e.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#1C77C3';
    })
    e.addEventListener('mouseleave', function () {
        if (!flag[index])
            this.style.backgroundColor = 'transparent';
    })

});

var open = true;
window.addEventListener('resize', function () {
    document.querySelector('.nav-hided').style.width = '0';
    if (window.innerWidth > 900) {
        document.querySelector('nav').style.backgroundColor = '#000267';
        document.querySelectorAll('a').forEach((e) => {
            return e.style.color = '#FFFFFF';
        })
    }
    document.querySelectorAll('.nav-li').forEach((e) => {
        return e.style.color = '#080708';
    })
    open = true;

})
document.querySelector('.nav-display').addEventListener('click', function () {
    if (open) {
        document.querySelector('.nav-hided').style.width = '50%';
        open = false;
    } else {
        document.querySelector('.nav-hided').style.width = '0';
        open = true;

    }
})
window.addEventListener('scroll', () => {
    document.querySelectorAll('.nav-li').forEach((e) => {
        return e.style.color = '#080708';
    })
})