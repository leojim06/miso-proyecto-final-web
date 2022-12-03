
export interface ProfileBasic {
    nombres: string;
    apellidos: string;
    paisNacimiento: string;
    ciudadNacimiento: string;
    tipoIdentificacion: number;
    numeroIdentificacion: string;
    genero: string;
    fechaNacimiento: Date;
    peso: number;
    estatura: number;
    paisResidencia: string;
    ciudadResidencia: string;
}


export interface ProfileBasicForm {
    fname: string;
    flastname: string;
    tipoIdentificacionSelected: number;
    noIdentification: string;
    ciudadNacimiento: string;
    userage: Date;
    fpeso: number;
    faltura: number;
    ciudadResidencia: string;
    tipoCountrySelected: string;
    usergenderM: string;
    usergenderF: string;
    tipoCountryResidenciaSelected:string;

}

