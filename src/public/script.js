class Pet{
    constructor(controllerClass){
        this.character=document.querySelector(controllerClass)
    }

    moveTo(top,left){
        console.log('diddiddidi')
        this.character.style.top=top
        this.character.style.left=left
    }
}

const charPet=new Pet('.Character-Controller')

charPet.character.addEventListener('click',(e)=>{
        top=Math.floor((Math.random() * window.innerHeight)) 
        left=Math.floor((Math.random() * window.innerWidth)) 
        console.log("donut");
        const wrapper=document.getElementById("wrapper")
        wrapper.classList.add('window-handle')
        console.log(wrapper.classList)
        charPet.moveTo(`${top}px`,`${left}px`)
        /*wrapper.addEventListener('click',(e)=>{
            console.log('here')
            top=e.clientY
            left=e.clientX
            charPet.moveTo(top,left)
            wrapper.classList.remove('window-handle')
            wrapper.removeEventListener('click',this)
        })*/
    }
)
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
