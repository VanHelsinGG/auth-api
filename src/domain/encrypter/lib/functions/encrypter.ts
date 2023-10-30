import { EncrypterMethods } from "../types/encrypt-types";
import { Md5 } from "ts-md5";
import { sha256 } from "js-sha256";
import { StringError } from "../../../lib/types/types";

export function encrypt(input: string, method: EncrypterMethods): StringError {
    let hashedString: string;

    if(input.trim().length < 3){
        throw new Error("Input lenght must be at least 3 chars");
    }

    switch (method) {
        case "md5":
            hashedString = Md5.hashStr(input) as string;
            break;

        case "sha256":
            hashedString = sha256(input) as string;
            break;

        default:
            throw new Error("Unknown encrypt method");
    }

    return (hashedString) ? hashedString : 0;
}
