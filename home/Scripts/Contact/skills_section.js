document.addEventListener('DOMContentLoaded', function() {
    const specialBlock_1 = document.getElementById('specialBlock-1');
    const specialBlock_2 = document.getElementById('specialBlock-2');
    var skills_item_selected_icon = document.getElementById('skills-item-selected-icon');
    var skills_item_selected_description = document.getElementById('skills-item-selected-description');
    const skills_item_1 = document.getElementById('skills-item-1');
    const skills_item_2 = document.getElementById('skills-item-2');
    const skills_item_3 = document.getElementById('skills-item-3');
    const skills_item_4 = document.getElementById('skills-item-4');
    const skills_item_5 = document.getElementById('skills-item-5');
    const skills_item_6 = document.getElementById('skills-item-6');
    const skills_item_7 = document.getElementById('skills-item-7');
    const skills_item_8 = document.getElementById('skills-item-8');
    const skills_item_9 = document.getElementById('skills-item-9');
    const skills_item_10 = document.getElementById('skills-item-10');

    var indiceSelecionado_global;

    skills_item_1.addEventListener('click', () => {
 
            specialBlock_1_estilizacao();
            specialBlock_2_estilizacao();
            skills_item_selected_icon_estilizacao(1);
            skills_item_selected_description_estilizacao(1);

            desabilitarTodosOsDemais();
    }); 
    skills_item_2.addEventListener('click', () => {
 
            specialBlock_1_estilizacao();
            specialBlock_2_estilizacao();
            skills_item_selected_icon_estilizacao(2);
            skills_item_selected_description_estilizacao(2);

            desabilitarTodosOsDemais();
    });
    skills_item_3.addEventListener('click', () => {
 
        specialBlock_1_estilizacao();
        specialBlock_2_estilizacao();
        skills_item_selected_icon_estilizacao(3);
        skills_item_selected_description_estilizacao(3);

        desabilitarTodosOsDemais();
    });
    skills_item_4.addEventListener('click', () => {
 
        specialBlock_1_estilizacao();
        specialBlock_2_estilizacao();
        skills_item_selected_icon_estilizacao(4);
        skills_item_selected_description_estilizacao(4);

        desabilitarTodosOsDemais();
    });
    skills_item_5.addEventListener('click', () => {
 
        specialBlock_1_estilizacao();
        specialBlock_2_estilizacao();
        skills_item_selected_icon_estilizacao(5);
        skills_item_selected_description_estilizacao(5);

        desabilitarTodosOsDemais();
    });
    skills_item_6.addEventListener('click', () => {
 
        specialBlock_1_estilizacao();
        specialBlock_2_estilizacao();
        skills_item_selected_icon_estilizacao(6);
        skills_item_selected_description_estilizacao(6);

        desabilitarTodosOsDemais();
    });
    skills_item_7.addEventListener('click', () => {
 
        specialBlock_1_estilizacao();
        specialBlock_2_estilizacao();
        skills_item_selected_icon_estilizacao(7);
        skills_item_selected_description_estilizacao(7);

        desabilitarTodosOsDemais();
    });
    skills_item_8.addEventListener('click', () => {
 
        specialBlock_1_estilizacao();
        specialBlock_2_estilizacao();
        skills_item_selected_icon_estilizacao(8);
        skills_item_selected_description_estilizacao(8);

        desabilitarTodosOsDemais();
    });
    skills_item_9.addEventListener('click', () => {
 
        specialBlock_1_estilizacao();
        specialBlock_2_estilizacao();
        skills_item_selected_icon_estilizacao(9);
        skills_item_selected_description_estilizacao(9);

        desabilitarTodosOsDemais();
    });
    skills_item_10.addEventListener('click', () => {
 
        specialBlock_1_estilizacao();
        specialBlock_2_estilizacao();
        skills_item_selected_icon_estilizacao(10);
        skills_item_selected_description_estilizacao(10);

        desabilitarTodosOsDemais();
    });
    skills_item_selected_icon.addEventListener('click' , () => {
        reabilitarTodosOsDemais();
    })      

    function desabilitarTodosOsDemais(){
        skills_item_1.parentElement.style.display = 'none';
        skills_item_2.parentElement.style.display = 'none';
        skills_item_3.parentElement.style.display = 'none';
        skills_item_4.parentElement.style.display = 'none';
        skills_item_5.parentElement.style.display = 'none';
        skills_item_6.parentElement.style.display = 'none';
        skills_item_7.parentElement.style.display = 'none';
        skills_item_8.parentElement.style.display = 'none';
        skills_item_9.parentElement.style.display = 'none';
        skills_item_10.parentElement.style.display = 'none';
    }
    function reabilitarTodosOsDemais(){
        skills_item_1.parentElement.style.display = 'block';
        skills_item_2.parentElement.style.display = 'block';
        skills_item_3.parentElement.style.display = 'block';
        skills_item_4.parentElement.style.display = 'block';
        skills_item_5.parentElement.style.display = 'block';
        skills_item_6.parentElement.style.display = 'block';
        skills_item_7.parentElement.style.display = 'block';
        skills_item_8.parentElement.style.display = 'block';
        skills_item_9.parentElement.style.display = 'block';
        skills_item_10.parentElement.style.display = 'block';
        specialBlock_1.style.display = 'none';
        specialBlock_2.style.display = 'none';
    }
    function specialBlock_1_estilizacao(){
        specialBlock_1.style.cssText =
        `
        display: block;
        width: 4rem;
        height: 4rem;
        margin: auto 0;
        `
    }
    function specialBlock_2_estilizacao(){
        specialBlock_2.style.cssText =
        `
        display: block;
        width: 10rem;
        height: 4rem;
        margin: auto 0;
        `
    }
    function skills_item_selected_icon_estilizacao(indice_Identificacao){
        switch (indice_Identificacao) {
            case 1:
                indiceSelecionado_global = 1;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg');
                `;
            break;
            case 2:
                indiceSelecionado_global = 2;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg');
                `;
            break;
            case 3:
                indiceSelecionado_global = 3;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg');
                `;
            break;
            case 4:
                indiceSelecionado_global = 4;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                 background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg');
                `;
            break;
            case 5:
                indiceSelecionado_global = 5;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                 background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg');
                `;
            break;
            case 6:
                indiceSelecionado_global = 6;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                 background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg');
                `;
            break;
            case 7:
                indiceSelecionado_global = 7;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                 background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg');
                `;
            break;
            case 8:
                indiceSelecionado_global = 8;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                 background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg');
                `;
            break;
            case 9:
                indiceSelecionado_global = 9;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                 background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/notion/notion-original.svg');
                `;
            break;
            case 10:
                indiceSelecionado_global = 10;
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                 background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                background-image: url('https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg');
                `;
            break;             
        
            default:
                skills_item_selected_icon.style.cssText = 
                `
                background-size: 85% 85%;
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 0.25rem 0 0 0.25rem;
                `
                break;
        }
    }

    function skills_item_selected_description_estilizacao(indice_Identificacao){
        switch (indice_Identificacao) {
            case 1:
                skills_item_selected_description.style.cssText =
                `
                font-size: 0.7rem;
                `
                skills_item_selected_description.innerText = "HTML-5 \n Markup language for structuring simple" + 
                " and complex web pages";
            break;
            case 2: 
                skills_item_selected_description.style.cssText =
                `
                font-size: 0.7rem;
                `
                skills_item_selected_description.innerText = "CSS-3 \n Web styling language with cascading" + 
                " rule inheritance";                       
            break;
            case 3:
                skills_item_selected_description.style.cssText =
                `
                font-size: 0.65rem;
                `
                skills_item_selected_description.innerText = "JavaScript \n High-level language " + 
                " often applied in dynamic interactions on web pages";
            break;  
            case 4:
                skills_item_selected_description.style.cssText =
                `
                font-size: 0.7rem;
                `
                skills_item_selected_description.innerText = "GIT \n Tool for versioning" + 
                " and code maintenance";  
            break;
            case 5:
                skills_item_selected_description.style.cssText = 
                `
                font-size: 0.7rem;
                `
                skills_item_selected_description.innerText = "Azure \n Platform for managing" + 
                " and deploying cloud services";
            break; 
            case 6:  
                skills_item_selected_description.style.cssText =
                `
                font-size: 0.65rem;
                `
                skills_item_selected_description.innerText = "Java \n High-level OOP cross" + 
                "-platform language (enterprise, web, and mobile apps)";
            break;
            case 7:
                skills_item_selected_description.style.cssText =
                `
                font-size: 0.65rem;
                `
                skills_item_selected_description.innerText = "NodeJS \n Enables the use of JavaScript on both the client and" + 
                " server sides, making it easy to develop apps in a unified language";
            break;   
            case 8:
                skills_item_selected_description.style.cssText =
                `
                font-size: 0.65rem;
                `
                skills_item_selected_description.innerText = "Angular \n Powerful and modular front-end framework," + 
                " developed by Google to create interactive and scalable SPA web applications";
            break;  
            case 9:
                skills_item_selected_description.style.cssText =
                `
                font-size: 0.60rem;
                `
                skills_item_selected_description.innerText = "Notion \n Tool for personal management and streamlining" + 
                " of annotations in page template with wide compatibility and integration of services";
            break;  
            case 10:
                skills_item_selected_description.style.cssText =
                `
                font-size: 0.8rem;
                `
                skills_item_selected_description.innerText = "MySQL \n Widely Used Open Source Relational Database";
            break;
            
        
            default:
            break;
        }
    }

    skills_item_selected_icon.addEventListener('mouseover', function() {
        skills_item_selected_icon.style.cssText = 
        `
        background-size: 75% 75%;
        border-radius: 0.25rem 0 0 0.25rem;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('/home/Assets/skills-info-minimize.svg');
        cursor: pointer;
        `
      });
      // Adiciona o evento de mouseout para remover a classe "hover" quando o mouse deixa o elemento
    skills_item_selected_icon.addEventListener('mouseout', function() {
    console.log("Indice Selecionado "+indiceSelecionado_global);
        return skills_item_selected_icon_estilizacao(indiceSelecionado_global);
      });
   




 })






/*   Método mais eficaz para quando não houver hover 

    skills_item_selected_icon.style.backgroundImage = extrator_BackgroundImage_em_CSS(skills_item_1);  

    function extrator_BackgroundImage_em_CSS (elemento){
        var estiloComputadoDoCSS = window.getComputedStyle(elemento);
        var background_URL = estiloComputadoDoCSS.getPropertyValue('background-image')
        console.log(background_URL);
        return background_URL;
    }
*/