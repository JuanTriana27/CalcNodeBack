export const convertirANumero = (valor) => {
    const numero = Number(valor);
    return numero;
};

export const validarNumero = (valor) => {
    if (Number.isNaN(valor)) {
        throw new Error('Uno de los parámetros no es un número válido.');
    }
};
