// Hash que você encontrou sniffando a rede insegura, não altere
const hashFound = "5fd9d807bf6ca41a07570f55b315f4e2ed0951fff141a197957a6b2bebf1482d"

// Não altere o código abaixo
async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
//

async function myForceBruteFunction() {
    // Exemplo de como usar a função
    // const hash = await hashString("SENHA")
		
		// Converter texto para numero:
    // const numero = Number("1")

		// Converter numero para string:
		// const numero = 10;
		// const texto = numero.toString();

    // --- Implemente seu código aqui 👇🏼 ---
    for (let i = 100000; i <=999999; i=++)
		const hash1 = await hashString("100000")
		const hash2 = await hashString("100001")
		const hash3 = await hashString("100002")

		console.log("A senha é 100000") // Exemplo de como retornar o resultado

    // --- Implemente seu código aqui 👆🏼 ---
}

myForceBruteFunction(); // Não altere