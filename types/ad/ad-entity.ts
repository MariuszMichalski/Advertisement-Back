
export interface NewAdEntity extends Omit<AdEntity, 'id'> {
    id?: string;
}

export interface AdEntity {
    id: string;
    name: string;
    description: string;
    url: string;
    price: number;
    lat: number;
    lon: number;
}