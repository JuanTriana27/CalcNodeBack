import Operacion from '../models/Operacion.js';

export const operarService = async (expresion) => {
    if (!expresion || typeof expresion !== 'string') {
        throw new Error("Debe enviar una expresión válida");
    }

    // Permitir solo números, operadores básicos y espacios
    const regex = /^[0-9+\-*/().\s]+$/;

    if (!regex.test(expresion)) {
        throw new Error("Expresión inválida");
    }

    let resultado;

    try {
        // Evaluar respetando precedencia matemática
        resultado = Function(`"use strict"; return (${expresion})`)();
    } catch (e) {
        throw new Error("No se pudo evaluar la expresión");
    }

    // Guardar en DB
    await Operacion.create({
        tipo: 'expresion',
        expresion,
        resultado
    });

    return resultado;
};
