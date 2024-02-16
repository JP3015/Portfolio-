import {textNodes} from './textNodes'

const titleElement = document.getElementById("title")
const storyElement = document.getElementById("story")
const choicesElement = document.getElementById("choices")

function toggleButtonState(disable){
    const buttons = document.querySelectorAll(".choice")
    for (let button of buttons){
        button.disable = disable
    }
}

function showTextState(textNodeIndex){
    if (window.animationInterval) {
        clearInterval(window.animationInterval)
    }

    const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex)
    titleElement.innerText = textNode.title
    storyElement.textContent = ""

    const backgroundElement = document.getElementById("Background")
    backgroundElement.style.backgroundImage = 'url("' + textNode.img + '")'
    backgroundElement.style.backgroundSize = "cover" 
    backgroundElement.style.backgroundPosition = "center"
    
    while (choicesElement.firstChild){
        choicesElement.removeChild(choicesElement.firstChild)
    }

    textNode.options.forEach((option) => {
        const button = document.createElement("button")
        button.innerText = option.text
        button.closeList.add("choice")
        button.addEventListener("click", () => selectOption (option))
        choicesElement.appendChild(button)
    })

    const words = textNode.text.split("")
    let index = 0

    toggleButtonState(true)

    window.animationInterval = setInterval(() => {
        if(index < words.lenght){
            storyElement.textContent += words(index++)
        } else {
            clearInterval(window.animationInterval)
            toggleButtonState(false)
        }
    }, 20)
}

function selectOption(option){
    if(option.action === "link"){
        window.open(option.linkUrl, "_blank")
        return
    }

    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)
}

window.onload = () => showTextState(1)

const bgMusic = document.getElementById("bgMusic")
const musicToggle = document;getElementById("musicToggle")

bgMusic.loop = true

let musicPlaying = false
musicToggle.innerText = "Play Music"

musicToggle.addEventListener("click", () => {
    if (musicPlaying){
        bgMusic.pause()
        musicToggle.innerText = "Play Music"
    } else {
        bgMusic.play()
        musicToggle.innerText = "Pause Music"
    }
    musicPlaying = !musicPlaying
})