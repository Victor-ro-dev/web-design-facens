function buscar() {
    const cep_in = document.getElementById("cep_in").value;
    const target = `https://viacep.com.br/ws/${cep_in}/json/`; // Use crases aqui
    fetch(target)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Erro ao buscar CEP');
        })
        .then(data => {
            const {
                logradouro: r,
                bairro: b,
                localidade: l,
                uf: u
            } = data;

            document.getElementById('logradouro').innerText = `Logradouro: ${r}`; // Use crases aqui
            document.getElementById('bairro').innerText = `Bairro: ${b}`; // Use crases aqui
            document.getElementById('localidade').innerText = `Cidade: ${l}/${u}`; // Use crases aqui
        })
        .catch(error => {
            console.error(error);
            alert('Erro ao buscar informações do CEP');
        });
}



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


            let dados_grafico = {};
            for (let i = 0; i < anos.length; i++) {
                dados_grafico[anos[i]] = populacao[i];
            }


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


            let novo_grafico = new Plot.Pie("grafico", dados_grafico, options);
        })
        .catch(error => console.error(error));
}


function usuario() {
    const target = `https://randomuser.me/api/`;

    fetch(target)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Erro ao buscar dados');
        })
        .then(data => {

            const {
                results: [{
                    picture: { medium: foto },
                    name: { first: nome, last: sobrenome },
                    dob: { age: idade },
                    gender: genero,
                    location: {
                        street: { number: numero, name: rua },
                        city: cidade,
                        state: estado,
                        country: pais,
                        postcode: correio
                    },
                    registered: { date: registro }
                }]
            } = data;

            document.getElementById('foto').src = foto;
            document.getElementById('nome').innerText = `${nome} ${sobrenome}`;
            document.getElementById('idade').innerText = `Idade: ${idade} anos`;
            document.getElementById('genero').innerText = `Gênero: ${genero}`;
            document.getElementById('endereco').innerText = `Endereço: ${numero} ${rua}, ${cidade}, ${estado}, ${pais} - ${correio}`;
            document.getElementById('registro').innerText = `Registro: ${new Date(registro).toLocaleDateString('pt-BR')}`;
        })
        .catch(error => console.error(error));
}




