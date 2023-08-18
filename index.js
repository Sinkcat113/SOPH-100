let sequence = document.querySelector(".sequence")
let sequence2 = document.querySelector(".sequence2")
let sequence3 = document.querySelector(".sequence3")




let txtWaveOsc1 = document.querySelector("#txtWaveOsc1")
let txtNumNotesOsc1 = document.querySelector("#txtNumNotesOsc1")
let txtFreqCeilingOsc1 = document.querySelector("#txtFreqCeilingOsc1")
let txtOsc1Rate = document.querySelector("#txtOsc1Rate")
let txtOsc1Life = document.querySelector("#txtOsc1Life")


let txtWaveOsc2 = document.querySelector("#txtWaveOsc2")
let txtNumNotesOsc2 = document.querySelector("#txtNumNotesOsc2")
let txtFreqCeilingOsc2 = document.querySelector("#txtFreqCeilingOsc2")
let txtOsc2Rate = document.querySelector("#txtOsc2Rate")
let txtOsc2Life = document.querySelector("#txtOsc2Life")


let txtWaveOsc3 = document.querySelector("#txtWaveOsc3")
let txtNumNotesOsc3 = document.querySelector("#txtNumNotesOsc3")
let txtFreqCeilingOsc3 = document.querySelector("#txtFreqCeilingOsc3")
let txtOsc2Rate3 = document.querySelector("#txtOsc3Rate")
let txtOsc3Life = document.querySelector("#txtOsc3Life")




var hertz = 50
var waveOsc1 = "triangle"
var waveOsc2 = "sawtooth"
var waveOsc3 = "square"

txtWaveOsc1.value = waveOsc1
txtWaveOsc2.value = waveOsc2
txtWaveOsc3.value = waveOsc3

var seqNumOsc1 = 50
var seqNumOsc2 = 50
var seqNumOsc3 = 50

txtNumNotesOsc1.value = seqNumOsc1
txtNumNotesOsc2.value = seqNumOsc2
txtNumNotesOsc3.value = seqNumOsc3

var oscCeilingOsc1 = 700
var oscCeilingOsc2 = 1000
var oscCeilingOsc3 = 1200

txtFreqCeilingOsc1.value = oscCeilingOsc1
txtFreqCeilingOsc2.value = oscCeilingOsc2
txtFreqCeilingOsc3.value = oscCeilingOsc3

var osc1Rate = 40
var osc2Rate = 40
var osc3Rate = 40

txtOsc1Rate.value = osc1Rate
txtOsc2Rate.value = osc2Rate
txtOsc3Rate.value = osc3Rate

var osc1Life = 150
var osc2Life = 180
var osc3Life = 110

txtOsc1Life.value = osc1Life
txtOsc2Life.value = osc2Life
txtOsc3Life.value = osc3Life

var waveTableOne = setInterval(() => {
    sequence.innerHTML = ""
    for (let i = 0; i < seqNumOsc1; i++) {
        if (i == Math.floor(Math.random() * oscCeilingOsc1)) {
            hertz = Math.floor(Math.random() * 700)

            const ctx = new (window.AudioContext)()

            const osc = ctx.createOscillator()
            osc.type = waveOsc1
            osc.frequency.setValueAtTime(hertz, ctx.currentTime)
            osc.connect(ctx.destination)
            osc.start()


            setTimeout(() => {
                osc.stop()
            }, osc1Life)
        
            const object = document.createElement("object")
            object.style.width = "20px"
            object.style.height = "20px"
            object.style.backgroundColor = "orange"
            object.style.margin = "4px"
            object.style.borderRadius = "50px"
            object.style.transition = "0.05s"
            object.style.boxShadow = "5px 5px 60px orange"
            sequence.appendChild(object)
        } else {
            const object = document.createElement("object")
            object.style.width = "20px"
            object.style.height = "20px"
            object.style.backgroundColor = "pink"
            object.style.margin = "4px"
            object.style.borderRadius = "50px"
            object.style.transition = "0.05s"
            sequence.appendChild(object)
        }
    }
}, osc1Rate)

var waveTableTwo = setInterval(() => {
    sequence2.innerHTML = ""
    for (let i = 0; i < seqNumOsc2; i++) {
        if (i == Math.floor(Math.random() * oscCeilingOsc2)) {
            hertz = Math.floor(Math.random() * 1000)

            const ctx = new (window.AudioContext)()

            const osc = ctx.createOscillator()
            osc.type = waveOsc2
            osc.frequency.setValueAtTime(hertz, ctx.currentTime)
            osc.connect(ctx.destination)
            osc.start()


            setTimeout(() => {
                osc.stop()
            }, osc2Life)
        
            const object = document.createElement("object")
            object.style.width = "20px"
            object.style.height = "20px"
            object.style.backgroundColor = "orange"
            object.style.margin = "4px"
            object.style.borderRadius = "50px"
            object.style.transition = "0.05s"
            object.style.boxShadow = "5px 5px 60px orange"
            sequence2.appendChild(object)
        } else {
            const object = document.createElement("object")
            object.style.width = "20px"
            object.style.height = "20px"
            object.style.backgroundColor = "pink"
            object.style.margin = "4px"
            object.style.borderRadius = "50px"
            object.style.transition = "0.05s"
            sequence2.appendChild(object)
        }
    }
}, osc2Rate)

var waveTableThree = setInterval(() => {
    sequence3.innerHTML = ""
    for (let i = 0; i < seqNumOsc3; i++) {
        if (i == Math.floor(Math.random() * oscCeilingOsc3)) {
            hertz = Math.floor(Math.random() * 1200)

            const ctx = new (window.AudioContext)()

            const osc = ctx.createOscillator()
            osc.type = waveOsc3
            osc.frequency.setValueAtTime(hertz, ctx.currentTime)
            osc.connect(ctx.destination)
            osc.start()

            setTimeout(() => {
                osc.stop()
            }, osc3Life)
        
            const object = document.createElement("object")
            object.style.width = "20px"
            object.style.height = "20px"
            object.style.backgroundColor = "orange"
            object.style.margin = "4px"
            object.style.borderRadius = "50px"
            object.style.transition = "0.05s"
            object.style.boxShadow = "5px 5px 60px orange"
            sequence3.appendChild(object)
        } else {
            const object = document.createElement("object")
            object.style.width = "20px"
            object.style.height = "20px"
            object.style.backgroundColor = "pink"
            object.style.margin = "4px"
            object.style.borderRadius = "50px"
            object.style.transition = "0.05s"
            sequence3.appendChild(object)
        }
    }
}, osc3Rate)




txtOsc1Rate.onchange = () => {
    if (!txtOsc1Rate.value < 10) {
        osc1Rate = txtOsc1Rate.value
    }
}


txtWaveOsc1.onchange = () => {
    waveOsc1 = txtWaveOsc1.value
}

txtNumNotesOsc1.onchange = () => {
    seqNumOsc1 = txtNumNotesOsc1.value
}

txtFreqCeilingOsc1.onchange = () => {
    oscCeilingOsc1 = txtFreqCeilingOsc1.value
}

txtOsc1Life.onchange = () => {
    if (!txtOsc1Life.value < 20) {
        osc1Life = txtOsc1Life.value
    }
}





txtOsc2Rate.onchange = () => {
    if (!txtOsc2Rate.value < 10) {
        osc2Rate = txtOsc2Rate.value
    }
}


txtWaveOsc2.onchange = () => {
    waveOsc2 = txtWaveOsc2.value
}

txtNumNotesOsc2.onchange = () => {
    seqNumOsc2 = txtNumNotesOsc2.value
}

txtFreqCeilingOsc2.onchange = () => {
    oscCeilingOsc2 = txtFreqCeilingOsc2.value
}

txtOsc2Life.onchange = () => {
    if (!txtOsc2Life.value < 20) {
        osc2Life = txtOsc2Life.value
    }
}




txtOsc3Rate.onchange = () => {
    if (!txtOsc3Rate.value < 10) {
        osc3Rate = txtOsc3Rate.value
    }
}


txtWaveOsc3.onchange = () => {
    waveOsc3 = txtWaveOsc3.value
}

txtNumNotesOsc3.onchange = () => {
    seqNumOsc3 = txtNumNotesOsc3.value
}

txtFreqCeilingOsc3.onchange = () => {
    oscCeilingOsc3 = txtFreqCeilingOsc3.value
}

txtOsc3Life.onchange = () => {
    if (!txtOsc3Life.value < 20) {
        osc3Life = txtOsc3Life.value
    }
}