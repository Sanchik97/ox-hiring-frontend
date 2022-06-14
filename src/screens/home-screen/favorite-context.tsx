import React, { useState } from 'react'
import { IVariation } from '../../interfaces/variations'
import { LS_FAV_VARIATIONS } from '../../constants'

interface IVariationsFavoriteContext {
  favVariations: IVariation[]
  add: (variation: IVariation) => void
  remove: (id: number) => void
}

export const VariationsFavoriteContext = React.createContext<IVariationsFavoriteContext>({
  favVariations: [],
  add: (v: IVariation) => {},
  remove: (id: number) => {},
})

interface props {
  children?: React.ReactNode
}

export const VariationsFavoriteContextProvider: React.FC<props> = ({ children }) => {
  const [favVariations, setFavVariations] = useState<IVariation[]>(
    typeof localStorage.getItem(LS_FAV_VARIATIONS) === 'string'
      ? JSON.parse(localStorage.getItem(LS_FAV_VARIATIONS) as string)
      : [],
  )

  const add = (v: IVariation) => {
    const newFavArray = [...favVariations, v]
    setFavVariations(newFavArray)
    localStorage.setItem(LS_FAV_VARIATIONS, JSON.stringify(newFavArray))
  }
  const remove = (id: number) => {
    const filteredFavArray = favVariations.filter((entity) => entity.id !== id)
    setFavVariations(filteredFavArray)
    localStorage.setItem(LS_FAV_VARIATIONS, JSON.stringify(filteredFavArray))
  }

  return (
    <VariationsFavoriteContext.Provider value={{ favVariations, add, remove }}>
      {children}
    </VariationsFavoriteContext.Provider>
  )
}
