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
    var pythonBar = this.document.querySelector('.python-skill');
    var djangoBar = this.document.querySelector('.django-skill');
    var javascriptBar = this.document.querySelector('.javascript-skill');
    var htmlBar = this.document.querySelector('.html-skill');
    var cssBar = this.document.querySelector('.css-skill');

    // FUNCION PARA ACTIVAR EL MODO OSCURO

    function activarDarkMode(){
        darkModeSwitch.classList.remove('restablecer_switch');
        darkModeSwitch.classList.add('desplazar_switch');
        body.classList.add('dark_mode');
    };
    
    // FUNCION PARA ACTIVAR EL MODO CLARO

    function activarLightMode(){
        darkModeSwitch.classList.remove('desplazar_switch');
        darkModeSwitch.classList.add('restablecer_switch');
        body.classList.remove('dark_mode');
    };

    // EVENTO QUE DISPARA EL MODO OSCURO / CLARO

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

    // FUNCION PARA INCREMENTAR LAS BARRAS DE PROGRESO DE LAS HABILIDADES

    function skillUp(skill, percentage){
        for(var i = 0; i <= percentage; i++){
            skill.style.width = i+'%';
        };
    };

    // FUNCION PARA DISMUNUIR LAS BARRAS DE PROGRESO DE LAS HABILIDADES

    function skillDown(skill){
        skill.style.width = '0%'
    };

    // EVENTO SCROLL MEDIANTE EL CUAL SE MUESTRAN LAS TARJETAS DEPENDIENDO DE LA UBICACION DEL SCROLL DE LA PAGINA

    window.addEventListener('scroll',function(){
        var scroll = window.scrollY;
        
        // EFECTO DE LOS NOMBRES DE LA TARJETA DE PRESENTACION, RESEÑA Y EL LOGO DEL ZORRO

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

        // EFECTO DE DESPLAZAMIENTO DE LA TARJETA DE HABILIDADES E INCREMENTO Y DECREMENTO 
        // DE LAS BARRAS DE PROGRESO DE LAS HABILIDADES

        if (scroll >= 460 && scroll < 1050){
            skillsCard.style.transform = 'translateX(0px)';
            skillsImages.forEach(image => {
                image.style.opacity = 1;
                skillUp(pythonBar, 85);
                skillUp(djangoBar, 79);
                skillUp(javascriptBar, 72);
                skillUp(htmlBar, 90);
                skillUp(cssBar, 87);
            });
        } else if(scroll <= 460){
            skillsCard.style.transform = 'translateX(-2000px)';
            skillsImages.forEach(image => {
                image.style.opacity = 0;
                skillDown(pythonBar);
                skillDown(djangoBar);
                skillDown(javascriptBar);
                skillDown(htmlBar);
                skillDown(cssBar);
            });
        } else if(scroll > 1050){
            skillsCard.style.transform = 'translateX(2000px)';
            skillsImages.forEach(image => {
                image.style.opacity = 0;
                skillDown(pythonBar);
                skillDown(djangoBar);
                skillDown(javascriptBar);
                skillDown(htmlBar);
                skillDown(cssBar);
            });
        }
        

    });

    

});

