export interface MenuType {
    tiposMenu: string[];
    menu: CriolloType[] | PiqueosType[] | MakisType[] | BebidasType[];
}

export interface CriolloType {
    tipo: string;
    categorias?: {
        nombre: string;
        descripcion?: string;
        platos: {
            nombre: string;
            precio?: string;
        }[];
    }[];
}

export interface PiqueosType {
    tipo: string;
    categorias: {
        nombre: string;
        descripcion: string;
        platos: {
            nombre: string;
            precio: string;
        }[];
    }[];
}

export interface MakisType {
    tipo: string;
    categorias: {
        nombre: string;
        precio: string;
        platos: {
            nombre: string;
            descripcion: string;
        }[];
    }[];
}

export interface BebidasType {
    tipo: string;
    items: {
        nombre: string;
        precio: string;
    }[];
}