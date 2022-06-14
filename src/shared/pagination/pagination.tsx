import React from 'react'
import { Pagination as AntdPagination } from 'antd'
import { IPagination } from '../../interfaces'
import './pagination.css'

interface props {
  disabled: boolean
  pagination: IPagination
  totalCount: number
  handleChangePage: (pagination: IPagination) => void
}

const Pagination: React.FC<props> = ({ disabled, pagination, totalCount, handleChangePage }) => {
  const onChange = (page: number, size: number) => {
    handleChangePage({ page, size })
  }

  return (
    <AntdPagination
      className={'pagination'}
      pageSize={pagination.size}
      total={totalCount}
      current={pagination.page}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

export default Pagination
