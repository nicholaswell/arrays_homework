var wrapperEl = document.body.querySelector(".wrapper")

var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

for(var i = 0; i < warriors.length; i++){
    var el = document.createElement("div")
    var nameEl = document.createElement("h2")
    var damageEl = document.createElement("h4")
    var healthEl = document.createElement("h4")
    if(warriors[i].health >= 10){
        if(warriors[i].damage >= 2){
            if(warriors[i].warrior === true){
                    if((warriors[i].name).includes("a") || (warriors[i].name).includes("A")){
                        nameEl.innerHTML="Name: " + (warriors[i].name).fontcolor("red")
                    } else {
                        nameEl.innerHTML = "Name: " + warriors[i].name
                    }
                        damageEl.innerHTML = "Damage: " + warriors[i].damage
                        healthEl.innerHTML = "Health: " + warriors[i].health

                        el.appendChild(nameEl)
                        el.appendChild(damageEl)
                        el.appendChild(healthEl)
                        wrapperEl.appendChild(el)

                }
            }
        }





}
