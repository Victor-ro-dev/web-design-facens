

function fazer_grafico() {
    const target = `https://datausa.io/api/data?drilldowns=Nation&measures=Population`;

    fetch(target)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Erro ao buscar dados');
        })
        .then(dados => {

            const anos = dados.data.map(dado => dado.Year);
            const populacao = dados.data.map(dado => dado.Population);

            // Configuração do gráfico
            let dados_grafico = {};
            for (let i = 0; i < anos.length; i++) {
                dados_grafico[anos[i]] = populacao[i];
            }

            // Opções de cores
            let options = {
                colour: {
                    "2014": "rgba(255, 99, 132, 0.6)",  
                    "2015": "rgba(255, 159, 64, 0.6)",  
                    "2016": "rgba(255, 205, 86, 0.6)", 
                    "2017": "rgba(54, 162, 235, 0.6)",   
                    "2018": "rgba(75, 192, 192, 0.6)",   
                    "2019": "rgba(153, 102, 255, 0.6)",  
                    "2020": "rgba(54, 162, 235, 0.6)",   
                    "2021": "rgba(255, 206, 86, 0.6)",   
                    "2022": "rgba(75, 192, 192, 0.6)"     
                }
            };

            let grafico = new Plot.Bar("grafico", dados_grafico, options);
        })
        .catch(error => console.error(error));
}







