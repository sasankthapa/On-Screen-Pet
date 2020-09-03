class Pet{
    constructor(controllerClass){
        this.character=document.querySelector(controllerClass)
    }

    moveTo(topE,leftE){
        var {width,height}=window.getComputedStyle(this.character)
        width=parseInt(width)
        height=parseInt(height)
        this.character.style.top=`${topE-height/2}px`
        this.character.style.left=`${leftE-width/2}px`
   }
}

const wrapper=document.getElementById("wrapper")

const charPet=new Pet('.Character-Controller')

charPet.character.addEventListener('click',(e)=>{
        wrapper.classList.add('window-handle')
        //wrapper.style.cursor = "url('../assets/target.png'),auto"
        wrapper.style.cursor = "pointer"
        wrapper.style.zIndex = "99"
    }
)

wrapper.addEventListener('click',(e)=>{
    topt=e.clientY;
    left=e.clientX;
    charPet.moveTo(topt,left)
    wrapper.classList.remove('window-handle')
    wrapper.style.cursor =''
    wrapper.style.zIndex = "1"
    //wrapper.removeEventListener('click',this)
})
/*
window.addEventListener('keydown',(event)=>{
    console.log(event.key)
    const {style} = character
    console.log(style.top) 
    switch(event.key){
        case 'ArrowUp': style.top = `${parseInt(style.top) - move}px`; break;
        case 'ArrowDown': style.top = `${parseInt(style.top) + move}px`; break;
        case 'ArrowLeft': style.left = `${parseInt(style.left) - move}px`; break;
        case 'ArrowRight': style.left = `${parseInt(style.left) + move}px`; break;
    }
})
*/
