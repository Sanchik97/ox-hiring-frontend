export interface IVariationsResponse {
  page: number
  items: IVariation[]
  total_count: number
}

export interface IVariation {
  sku: string
  supplier: string
  supplierId: number
  category: null
  id: number
  barcode: string
  name: string
  lastUpdateTime: string
  showMarket: boolean
  uploadedImages: []
  innerHitIds: null
  technicalCard: boolean
  importProperties: []
}
