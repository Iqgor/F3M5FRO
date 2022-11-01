const toBeClonedSection = document.getElementById("js--toBeCloned")
console.log(toBeClonedSection)

fetch("/data/trelli.json").then(
    function (response) {
        return response.json()
        /*conectie maken met het json bestand*/
    }
).then(
    function (data) {
        const main = document.querySelector('main')
        let toBeAddedSection = document.createElement("section")
        toBeAddedSection.classList.add("tasks")
        main.appendChild(toBeAddedSection)
        /*Het bord toevoegen aan de main */

        let toBeAddedHeader = document.createElement("header")
        toBeAddedHeader.classList.add("tasks__header")
        toBeAddedSection.appendChild(toBeAddedHeader)
        /*De header toevoegen aan de Section*/

        let toBeAddedH2  =document.createElement("h2")
        toBeAddedH2.classList.add("tasks__h2")
        toBeAddedH2.innerText = data.title
        toBeAddedHeader.appendChild(toBeAddedH2)
        /*De h2 toevoegen aan de header*/

        let toBeAddedWrapper = document.createElement("div")
        toBeAddedWrapper.classList.add("tasks__headerWrapper")
        toBeAddedHeader.appendChild(toBeAddedWrapper)
        /*Wrapper toevoegen aan header*/
        
        let toBeAddedNumber = document.createElement("div")
        toBeAddedNumber.classList.add("tasks__number")
        toBeAddedNumber.innerText = data.activity.length
        toBeAddedHeader.appendChild(toBeAddedNumber)
        /*Number toevoegen aan de header en data aan toevoegen */
        
        let toBeAddedButton = document.createElement("button")
        toBeAddedButton.classList.add("tasks__edit")
        toBeAddedButton.innerText = "..."
        toBeAddedHeader.appendChild(toBeAddedButton)
        /*Edit butten toevoegen aan de header*/



        let toBeAddedUl = document.createElement("ul")
        toBeAddedUl.classList.add("tasks__list")
        toBeAddedSection.appendChild(toBeAddedUl)
        /*De ul toevoegen aan de ul*/

        for(let i = 0 ; i < data.activity.length; i++){
            let toBeAddedLi = document.createElement("li")
            toBeAddedLi.classList.add("tasks__listItem")
            toBeAddedUl.appendChild(toBeAddedLi) 
            /*De li toevoegen aan de Ul's*/
            let toBeAddedLabel = document.createElement("label")

            toBeAddedLabel.classList.add("tasks__label")
            toBeAddedLabel.classList.add("tasks__label--" + data.activity[i].color)
            toBeAddedLabel.innerText = data.activity[i].label
            
            

            let toBeAddedDes = document.createElement("p")

            toBeAddedDes.innerText = data.activity[i].description

            toBeAddedLi.appendChild(toBeAddedLabel)
            toBeAddedLi.appendChild(toBeAddedDes)
            /*Data toevegen aan de li's*/
        }
    }
)

