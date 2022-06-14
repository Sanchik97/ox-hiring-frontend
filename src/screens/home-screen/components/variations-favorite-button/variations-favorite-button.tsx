import React from 'react'
import { IVariation } from '../../../../interfaces/variations'
import { VariationsFavoriteContext } from '../../favorite-context'
import { Button } from 'antd'

interface props {
  v: IVariation
}

const VariationsFavoriteButton: React.FC<props> = ({ v }) => {
  const { favVariations, add, remove } = React.useContext(VariationsFavoriteContext)

  const checkIsVariationInFavorite = () => {
    for (const favVariation of favVariations) {
      if (favVariation.id === v.id) {
        return true
      }
    }
    return false
  }

  const handleClick = () => (checkIsVariationInFavorite() ? remove(v.id) : add(v))

  return (
    <Button type={'primary'} ghost onClick={handleClick} danger={checkIsVariationInFavorite()}>
      {checkIsVariationInFavorite() ? 'Удалить из избранного' : 'Добавить в избранное'}
    </Button>
  )
}

export default React.memo(VariationsFavoriteButton)
