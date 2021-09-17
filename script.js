addEventListener('DOMContentLoaded', () => {

    const secciones = document.querySelectorAll('section');
    const menusItems = document.querySelectorAll('.option');
   
    const functionObserver = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                //efecto en la barra de navegaion para cada seccion
                const itemActual = Array.from(menusItems).find(item => item.dataset.url === entry.target.id);
                itemActual.classList.add('active');
                //animacion de porcentajes en Skills
                if(entry.target.id == 'skills'){
                    animacionPorcentaje();
                }else{
                    porcetaje0();
                }

                for(const item of menusItems){
                    if(item != itemActual){
                        item.classList.remove('active')
                    }
                } 
            }
        });
    }

    const observer = new IntersectionObserver(functionObserver, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    });

    secciones.forEach(seccion => observer.observe(seccion));

    function animacionPorcentaje(){
        const skills = document.querySelectorAll('.skill');
        skills.forEach((element)=>{
            var skill = element.firstElementChild.querySelector('circle');
            skill.style.animation = skill.classList[0] +' 1s linear forwards'
        });
    }

    function porcetaje0(){
        const skills = document.querySelectorAll('.skill');
        skills.forEach((skill)=>{
            skill.firstElementChild.querySelector('circle').style.animation = 'p0 0s linear forwards';
        });
    }

})

const listOptions = document.querySelectorAll('.option');
function activeLink() {
    listOptions.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

listOptions.forEach((item) =>
    item.addEventListener('click', activeLink));
