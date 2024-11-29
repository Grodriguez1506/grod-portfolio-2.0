'use strict'

window.addEventListener('load', function(){
    var firstName = this.document.querySelector('#first_name');
    var secondName = this.document.querySelector('#second_name');
    var lastName = this.document.querySelector('#last_name');
    var second_lastName = this.document.querySelector('#second_last_name');
    var logo = this.document.querySelector('#icon img');
    var review = this.document.querySelector('#review');
    var containerSwitch = this.document.querySelector('#switch_container');
    var darkModeSwitch = this.document.querySelector('#dark_switch');
    var svg_icon = this.document.getElementsByClassName('svg_icon');
    var body = this.document.querySelector('body')
    var skillsCard = this.document.querySelector('.skills');
    var skillsImages = this.document.querySelectorAll('.skills img');

    function activarDarkMode(){
        darkModeSwitch.classList.remove('restablecer_switch');
        darkModeSwitch.classList.add('desplazar_switch');
        body.classList.add('dark_mode');
    };
    
    function activarLightMode(){
        darkModeSwitch.classList.remove('desplazar_switch');
        darkModeSwitch.classList.add('restablecer_switch');
        body.classList.remove('dark_mode');
    };

    containerSwitch.addEventListener('click', function(){
        var index;
        
        for(index in svg_icon){

            if(svg_icon[index].nodeType === 1){
                var color_icon_atribute = svg_icon[index].getAttribute('fill');
                if (color_icon_atribute == '#5f6368'){
                    svg_icon[index].setAttribute('fill','white');
                }else{
                    svg_icon[index].setAttribute('fill','#5f6368');
                };
            }
        };
        
        if(darkModeSwitch.className == 'restablecer_switch'){
            activarDarkMode();
        }else{
            activarLightMode();
        };

        var rutaLogo = logo.getAttribute('src');
        if(rutaLogo == './images/LOGO.png'){
            logo.setAttribute('src','./images/LOGO_DARK_MODE.png')
        }else{
            logo.setAttribute('src','./images/LOGO.png')
        };
        
    });

    window.addEventListener('scroll',function(){
        var scroll = window.scrollY;

        firstName.style.transform = 'translateY('+scroll*-3+'px)';
        secondName.style.transform = 'translateY('+scroll*3+'px)';
        lastName.style.transform = 'translateX('+scroll*7+'px)';
        second_lastName.style.transform = 'translateX('+scroll*-12+'px)';
        review.style.transform = 'translateY('+scroll*1.4+'px)'

        if(scroll == 0){
            logo.style.opacity = '1';
        }else{
            logo.style.opacity = '0';
        };

        console.log(scroll);

        if (scroll >= 460){
            skillsCard.style.transform = 'translateX(0px)';
            var index;
            for (index in skillsImages){
                skillsImages[index].style.opacity = 1;
            };
        } else if(scroll <= 460){
            skillsCard.style.transform = 'translateX(-2000px)';
            var index;
            for (index in skillsImages){
                skillsImages[index].style.opacity = 1;
            };
        }
        

    });



});

