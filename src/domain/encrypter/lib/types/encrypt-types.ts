export type EncrypterMethods = "md5" | "sha256";

export type EncrypterInput = {
    input: string;
    method?: EncrypterMethods;
}
