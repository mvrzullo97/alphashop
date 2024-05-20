export interface IArticoli {
    codArt: string,
    descrizione: string,
    um: string,
    codStat: string,
    pzCart: number,
    pesoNetto: number,
    prezzo: number,
    idStatoArt: string,
    descStatoArt: string,
    dataCreazione: Date,
    imageUrl: string,

    iva: IIva,
    famAssort: ICategoria,
    barcode: IBarcode[]
  }
  
  export interface IIva {
    idIva: number,
    descrizione: string,
    aliquota: number
  }

  export interface ICategoria {
    id: number,
    descrizione: string
  }

  export interface IBarcode {
    barcode: string,
    idTipoArt: string
  }