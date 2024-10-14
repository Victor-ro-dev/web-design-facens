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








