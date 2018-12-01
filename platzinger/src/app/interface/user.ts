export interface User{

    // Requerido 
    nick: string;
    sub_nick?: string;
    // Opcional
    age?: number;
    friend?: boolean;
    idu: any;
}