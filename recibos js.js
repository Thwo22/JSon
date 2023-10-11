   //versao Js do Json "recibos"
   
   const recibo = [
           {
                "cliente": "Thiago",
                "data": "02/09/23",
                "atendido": true,
                "produto": "Amd Ryzen 5 2600",
                "valor": "R$ 259,00",
                "histórico": ["2x8G ram", "SSD 500G"],
                "compra efetuada": true
            }
        
            ,{
                "cliente": "Heloá",
                "data": "07/09/23",
                "atendido": true,
                "produto": "Monitor Samsung 24P 140Hz",
                "valor": "R$ 514,00",
                "histórico": ["monitor LG 27P 240Hz", "monitor Asus 27p 140Hv"],
                "compra efetuada": true
            }
        
            ,{
                "cliente": "Simone",
                "data": "16/08/23",
                "atendido": true,
                "produto": "Notebook Samsung",
                "valor": "R$ 1080,99",
                "histórico": ["Notebook Positivo"],
                "compra efetuada": true
            }
        
            ,{
                "cliente": "José",
                "data": "09/04/23",
                "atendido": true,
                "produto": "Gabinete Mancer Narok",
                "valor": "R$ 199,99",
                "histórico": null,
                "compra efetuada": true
            }
        
           ,{
                "cliente": "Marcela",
                "data": "22/01/23",
                "atendido": true,
                "produto": "Xiomi Redmi Note 7",
                "valor": "R$ 887,00",
                "histórico": ["Samsung A52", "Motorola 32"],
                "compra efetuada": true
            }
        
           , {
                "cliente": "Pedro",
                "data": "01/10/23",
                "atendido": true,
                "produto": "Nintendo Ds",
                "valor": "R$ 250,00",
                "histórico": ["Nintendo WII", "Game Cube"],
                "compra efetuada": false
            }
        
            ,{
                "cliente": "Isabelly",
                "data": "14/04/23",
                "atendido": true,
                "produto": "Samsung A32",
                "valor": "R$ 1.559,99",
                "histórico": ["Samsung A14"],
                "compra efetuada": true
            }
        
            ,{
                "cliente": "Gustavo",
                "data": "18/06/23",
                "atendido": null,
                "produto": "intel 3 2100",
                "valor": "R$ 59,00",
                "histórico": ["mouse razer"],
                "compra efetuada": null
            }
        ]

    //conversão de json

    const reciboData = JSON.stringify(recibo);

    console.log(reciboData);