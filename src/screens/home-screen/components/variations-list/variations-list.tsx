import React, { useCallback, useEffect, useState } from 'react'
import { IVariation, IVariationsResponse } from '../../../../interfaces/variations'
import { getAllVariations } from '../../../../api/variations'
import { VariationsTable } from '../index'
import { IPagination } from '../../../../interfaces'
import { Pagination } from '../../../../shared'
import { Alert } from 'antd'

interface props {}

type VariationState = {
  isLoaded: boolean
  isError: boolean
  error: string
  items: IVariation[]
  totalCount: number
}

const VariationsList: React.FC<props> = () => {
  const [variationsState, setVariationsState] = useState<VariationState>({
    isError: false,
    error: '',
    isLoaded: false,
    items: [],
    totalCount: 0,
  })
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    size: 15,
  })
  const handlePaginationChange = useCallback((pagination: IPagination) => {
    setVariationsState((prevState) => ({ ...prevState, isLoaded: false }))
    setPagination(pagination)
  }, [])

  useEffect(() => {
    getAllVariations(pagination).then(async (response: Response) => {
      if (response.status === 200) {
        const data: IVariationsResponse = await response.json()
        setVariationsState((prevState) => ({
          ...prevState,
          isLoaded: true,
          isError: false,
          items: data.items,
          totalCount: data.total_count,
        }))
      } else {
        setVariationsState((prevState) => ({
          ...prevState,
          isLoaded: true,
          isError: true,
          error: 'Произошла ошибка! Попробуйте, пожалуйста, позже.',
        }))
      }
    })
  }, [pagination])

  return (
    <React.Fragment>
      {variationsState.isLoaded && variationsState.isError ? (
        <Alert type={'error'} message={variationsState.error} />
      ) : (
        <React.Fragment>
          <VariationsTable loading={!variationsState.isLoaded} data={variationsState.items} />
          <Pagination
            disabled={!variationsState.isLoaded}
            pagination={pagination}
            totalCount={variationsState.totalCount}
            handleChangePage={handlePaginationChange}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default VariationsList
