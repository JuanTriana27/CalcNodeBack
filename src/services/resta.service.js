import Operacion from '../models/Operacion.js';
import { convertirANumero, validarNumero } from '../utils/number.utils.js';

// Servicio para restar dos números y guardar la operación en la base de datos
export const restarService = async (a, b) => {
    // Validar y convertir entradas
    const numA = convertirANumero(a);
    const numB = convertirANumero(b);

    validarNumero(numA);
    validarNumero(numB);

    // Realizar la resta
    const resultado = numA - numB;

    // Persistir en la DB
    await Operacion.create({
        tipo: 'resta',
        a: numA,
        b: numB,
        resultado
    });

    // Retornar el resultado
    return resultado;
};