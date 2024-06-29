let header = document.querySelector("header")
let toggleBtn = document.querySelector(".toggle-btn")
let allBox = document.querySelectorAll(".frequently .main-box .box")

allBox.forEach((box) => {box.classList.contains("act") ? box.children[0].children[1].textContent = "-" : box.children[0].children[1].textContent = "+"})

window.onscroll = () => {

    window.scrollY > 0 ? header.classList.add("act") : header.classList.remove("act")

    document.querySelector("header nav").classList.remove("act")
    
}

toggleBtn.onclick = () => {document.querySelector("header nav").classList.toggle("act")}

allBox.forEach((box) => {

    box.addEventListener("click", () => {

        box.classList.toggle("act")

        allBox.forEach((box) => {box.classList.contains("act") ? box.children[0].children[1].textContent = "-" : box.children[0].children[1].textContent = "+"})

    })

})

document.querySelector("footer").appendChild(myInformation())

function myInformation(myInfo) {

    myInfo = document.createElement("div")
    myInfo.className = `my-info`

    let xLink = document.createElement("a")
    xLink.href = "https://twitter.com/AhmadAlhadidi95"
    xLink.target = "_blank"
    xLink.rel = "noopener noreferrer"
    xLink.title = "Visit my X"

    let xIcon = document.createElement("i")
    xIcon.className = `fa-brands fa-x-twitter`

    xLink.appendChild(xIcon)

    let myLogo = document.createElement("img")
    myLogo.src = `/images/My-sign.png`
    myLogo.alt = `My-sign`
    myLogo.title = `Ahmad Alhadidi`
    myLogo.style.width = `50px`

    let githubLink = document.createElement("a")
    githubLink.href = "https://github.com/AhmadAlhadidi95"
    githubLink.target = "_blank"
    githubLink.rel = "noopener noreferrer"
    githubLink.title = "Visit my Github"

    let githubIcon = document.createElement("i")
    githubIcon.className = `fa-brands fa-github`

    githubLink.appendChild(githubIcon)

    myInfo.append(xLink, myLogo, githubLink)

    return myInfo

}