import Operacion from '../models/Operacion.js';
import { convertirANumero, validarNumero } from '../utils/number.utils.js';

// Servicio para sumar dos números y guardar la operación en la base de datos
export const sumarService = async (a, b) => {
    // Validar y convertir entradas
    const numA = convertirANumero(a);
    const numB = convertirANumero(b);

    validarNumero(numA);
    validarNumero(numB);

    // Realizar la suma
    const resultado = numA + numB;

    // Persistir en la DB
    await Operacion.create({
        tipo: 'suma',
        a: numA,
        b: numB,
        resultado
    });

    // Retornar el resultado
    return resultado;
};