class Pet{
    constructor(controllerClass){
        this.character=document.querySelector(controllerClass)
    }

    moveTo(top,left){
        console.log('diddiddidi',top,left)
        this.character.style.top=top
        this.character.style.left=left
    }
}
const wrapper=document.getElementById("wrapper")

const charPet=new Pet('.Character-Controller')

charPet.character.addEventListener('click',(e)=>{
        let top=Math.floor((Math.random() * window.innerHeight)) 
        let left=Math.floor((Math.random() * window.innerWidth)) 
        wrapper.classList.add('window-handle')
        charPet.moveTo(`${top}px`,`${left}px`)
    }
)

wrapper.addEventListener('click',(e)=>{
    topt=e.clientY;
    left=e.clientX;
    console.log(e)
    charPet.moveTo(`${topt}px`,`${left}px`)
    wrapper.classList.remove('window-handle')
    //wrapper.removeEventListener('click',this)
})
/*
const character=document.querySelector('.Character-Controller')

character.style.top='100px'
character.style.left='100px'
character.addEventListener('click',()=>{
    //open menu
    console.log("herere")
})

let move=100

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
