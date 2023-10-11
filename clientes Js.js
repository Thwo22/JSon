/*Este é um execercício de Json , um formato de dados leve e de fácil leitura que é amplamente utilizado em JavaScript 
e em muitas outras linguagens de programação. Ele é usado para representar e transmitir 
dados estruturados de forma textual. Em JavaScript, um JSON é uma forma de representar 
objetos e estruturas de dados de maneira organizada e legível. */

const clientes = [

    {
        "cliente": "Thiago",
        "idade": 17,
        "genero": "Masculino",
        "ID": "000001",
        "estado": "SP",
        "Trabalhando": false,
        "detalhes profissão": {
            "profissão": null,
            "empresa": null  
        }, 
        "hobbies": ["Programar", "Desenhar", "Ler"]
    }
    
    ,{
        "cliente": "Heloá",
        "idade": 17,
        "genero": "Feminino",
        "ID": "000002",
        "estado": "SP",
        "Trabalhando": true,
        "detalhes profissão": {
            "profissão": "Prof. inglês",
            "empresa": "AAEnglish - Espaço Educacional"
        },
        "hobbies": ["Escrever", "Jogar", "Criador conteúdo Digital"]
    }
    
    ,{
        "cliente": "Simone",
        "idade": 39,
        "genero": "Feminino",
        "ID": "000003",
        "estado": "SP",
        "Trabalhando": true,
        "detalhes profissão": {
        "profissão": "Auxiliar d. Limpeza",
        "empresa": "NotreDame"
        },
        "hobbies": ["Cozinhar", "Trico", "Academia"]
    }
      ,{
            "cliente": "José",
            "idade": 19,
            "genero": "Masculino",
            "ID": "000004",
            "estado": "RN",
            "Trabalhando": false,
            "detalhes profissão": {
            "profissão": null,
            "empresa": null
          },
            "hobbies": ["Montar Hardware", "Skate" ]
        }
    
        ,{
            "cliente": "Marcela",
            "idade": 33,
            "genero": "Feminino",
            "ID": "000005",
            "estado": "RJ",
            "Trabalhando": false,
            "detalhes profissão": {
            "profissão": null,
            "empresa": null
          },
            "hobbies": ["Cartoon", "Desenvolver Jogos", "Dançar"]
        }

        ,{
            "cliente": "Pedro",
            "idade": 22,
            "genero": "Masculino",
            "ID": "000006",
            "estado": "SP",
            "Trabalhando": false,
            "detalhes profissão": {
            "profissão": null,
            "empresa": null
          },
            "hobbies": ["Academia", "Ciclismo", "inglês"]
        }

        ,{
            "cliente": "Isabelly",
            "idade": 27,
            "genero": "Feminino",
            "ID": "000007",
            "estado": "CE",
            "Trabalhando": true,
            "detalhes profissão": {
            "profissão": "corretor de imóveis",
            "empresa": "Imobiliária Astro"
          },
            "hobbies": ["Estilista", "Cozinhar", "Artes marciais"]
        }

        ,{
            "cliente": "Gustavo",
            "idade": 39,
            "genero": "Maculino",
            "ID": "000008",
            "estado": "MG",
            "Trabalhando": true,
            "detalhes profissão": {
            "profissão": "policial",
            "empresa": "Delegacia Minas Gerais 6° Divisão"
          },
            "hobbies": ["Futebol", "Artes Marciais", "Pesca"]
        }

    ]

    //conversão de json

    const clientesData = JSON.stringify(clientes);
   
    console.log(clientesData);