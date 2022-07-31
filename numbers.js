



const dotList = document.querySelector("[role='tablist']");

const dots = dotList.querySelectorAll('button');

let dotFocus=0;

dotList.addEventListener('keydown',(e)=>{
    //console.log(e.keyCode)
    const keyDownLeft = 37;
    const keyDownRight = 39;

    if ((e.keyDode===keyDownLeft)||(e.keyCode===keyDownRight)){

        dots[dotFocus].setAttribute('tabindex',-1)
    }
    if (e.keyCode===keyDownRight){
        dotFocus++;
        if (dotFocus>=dots.length){
            dotFocus=0;
        }
    }
    if (e.keyCode===keyDownLeft){
        dotFocus--;
        if (dotFocus<0){
            dotFocus=dots.length-1;
        }
    }

    dots[dotFocus].setAttribute('tabindex',0);
    dots[dotFocus].focus();
})

dots.forEach((dot)=>{
    dot.addEventListener('click',(e)=>{
        const targetButton = e.target.parentNode;
        const targetPanel = targetButton.getAttribute('aria-controls');
        const mainPanel = document.querySelector('#main');
        const targetImage = targetButton.getAttribute('data-image');
        const tabContainer = targetButton.parentNode;
        
        tabContainer.querySelector('[aria-selected=true]').setAttribute('aria-selected',false);

        targetButton.setAttribute('aria-selected',true)

        mainPanel.querySelectorAll('[role="tabpanel"]').forEach((article)=>{
            article.setAttribute('hidden',true);
        })
        
        mainPanel.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

        mainPanel.querySelectorAll('img').forEach((image)=>{
            image.classList.add('sr-only');
        })
        mainPanel.querySelector([`#${targetImage}`]).classList.remove('sr-only');

        //console.log(mainPanel);
    })
})

