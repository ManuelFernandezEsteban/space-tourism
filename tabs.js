



const tabList = document.querySelector('.tab-list');
const tabs = tabList.querySelectorAll('button');
let tabFocus=0;

tabList.addEventListener('keydown',(e)=>{
    //console.log(e.keyCode)
    const keyDownLeft = 37;
    const keyDownRight = 39;

    if ((e.keyDode===keyDownLeft)||(e.keyCode===keyDownRight)){

        tabs[tabFocus].setAttribute('tabindex',-1)
    }
    if (e.keyCode===keyDownRight){
        tabFocus++;
        if (tabFocus>=tabs.length){
            tabFocus=0;
        }
    }
    if (e.keyCode===keyDownLeft){
        tabFocus--;
        if (tabFocus<0){
            tabFocus=tabs.length-1;
        }
    }

    tabs[tabFocus].setAttribute('tabindex',0);
    tabs[tabFocus].focus();
})

tabs.forEach((tab)=>{
    tab.addEventListener('click',(e)=>{
        const targetButton = e.target;
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

