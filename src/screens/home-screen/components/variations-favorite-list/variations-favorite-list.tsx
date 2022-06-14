import React, { useContext, useEffect, useState } from 'react'
import { VariationsFavoriteContext } from '../../favorite-context'
import { Card, Input, List, Typography } from 'antd'
import VariationsFavoriteButton from '../variations-favorite-button/variations-favorite-button'
import { IVariation } from '../../../../interfaces/variations'

interface props {}

const VariationsFavoriteList: React.FC<props> = () => {
  const [value, setValue] = useState<string>('')
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  const { favVariations } = useContext(VariationsFavoriteContext)
  const [filteredVariations, setFilteredVariations] = useState<IVariation[]>([])

  useEffect(() => {
    setFilteredVariations(favVariations)
  }, [favVariations])

  useEffect(() => {
    if (value.length) {
      setFilteredVariations(
        favVariations
          .filter((el) => el.name.toLowerCase().includes(value.toLowerCase()))
          .sort(
            (a, b) =>
              a.name.toLowerCase().indexOf(value.toLowerCase()) -
              b.name.toLowerCase().indexOf(value.toLowerCase()),
          ),
      )
    } else {
      setFilteredVariations(favVariations)
    }
  }, [value, favVariations])

  return (
    <Card
      title={<Input.Search onChange={handleValueChange} value={value} placeholder={'Фильтрация'} />}
    >
      <List
        dataSource={filteredVariations}
        renderItem={(item) => (
          <List.Item extra={<VariationsFavoriteButton v={item} />}>
            <Typography.Text>{item.name}</Typography.Text>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default VariationsFavoriteList
