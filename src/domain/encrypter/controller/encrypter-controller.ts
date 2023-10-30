import { Response } from "express";
import { EncrypterInput, EncrypterMethods } from "../lib/types/encrypt-types";
import { encrypt } from '../lib/functions/encrypter'; // Importe a função 'encrypt' a partir do arquivo correspondente

export function encryptController({ input, method }: EncrypterInput, res: Response) {
    if (!input || !method) {
        return res.status(400).json({ error: "Campos 'input' e 'method' são obrigatórios." });
    }

    const hashedString = encrypt(input, method as EncrypterMethods); // Chama a função 'encrypt'

    // Retorna o resultado
    res.json({ encryptedString: hashedString });
}
