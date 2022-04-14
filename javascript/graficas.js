let miCanvas = document.getElementById("MiGrafica").getContext("2d");
let miCanvas2 = document.getElementById("MiGrafica2").getContext("2d");

var chart = new Chart(miCanvas, {
    type: "bar",
    data:{
        labels:["20 de marzo","30 de marzo","10 de abril","Hoy"],
        datasets:[
            {
                label:"Grafica de envios",
                backgroundColor: [
                    "rgb(18, 108, 174)",
                    "rgb(226, 147, 0)",
                    "rgb(151, 151, 151)",
                    "rgb(0, 207, 91)"
                ],
                borderColor:"rgb(110, 255, 75)",
                data:[80,150,100,20]
            }
        ]
    }
})

var chart1 = new Chart(miCanvas2, {
    type: "bar",
    data:{
        labels:["20 de marzo","30 de marzo","10 de abril","Hoy"],
        datasets:[
            {
                label:"Grafica de retiros",
                backgroundColor:[
                    "rgb(0, 207, 91)",
                    "rgb(151, 151, 151)",
                    "rgb(226, 147, 0)",
                    "rgb(18, 108, 174)"      
                ],
                borderColor:"rgb(110, 255, 75)",
                data:[50,20,200,50]
            }
        ]
    }
})