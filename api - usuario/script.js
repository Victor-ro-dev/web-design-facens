
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




