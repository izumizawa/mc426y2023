export async function getCEPData(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
        return {}
    }
}