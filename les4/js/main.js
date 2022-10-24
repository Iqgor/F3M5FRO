class Subs{
    constructor(nummer){
        console.log("ik word aangemaakt: " + nummer)
        this.nummer = nummer;
        this.observers = []
        console.log("mijn this.nummer is nu " + this.nummer)
    }
    updateState(newstate){
        
        this.nummer = newstate
        console.log("ik update mijn nummer")
        console.log("mijn nummer is nu : " + this.getState())
        this.notify()
    }
    getState(){
        return this.nummer
    }
    notify(){
        console.log("informing my children")
    }
    attach(observer){
        this,this.observers.push[observer]
    }
}

class Observer{
    constructor(name){
        this.name = name
    }
    update(){
        console.log(this.name + ": ik ben geupdate")
    }
}


let subsciber__1 = new Subs(2)
console.log(subsciber__1.observers)

let observer__1 = new Observer("observer 1")
subsciber__1.attach(observer__1)
console.log(subsciber__1.observers )

