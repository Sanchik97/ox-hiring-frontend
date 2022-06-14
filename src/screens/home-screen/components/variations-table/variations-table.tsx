import React from 'react'
import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { IVariation } from '../../../../interfaces/variations'
import VariationsFavoriteButton from '../variations-favorite-button/variations-favorite-button'

interface props {
  loading: boolean
  data: IVariation[]
}

const VariationsTable: React.FC<props> = ({ loading, data }) => {
  const columns: ColumnsType<IVariation> = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id: number) => <># {id}</>,
    },
    {
      title: 'Наименование',
      dataIndex: 'name',
    },
    {
      title: 'Артикул',
      dataIndex: 'sku',
    },
    {
      title: 'Штрихкод',
      dataIndex: 'barcode',
    },
    {
      title: 'Дата изменения',
      dataIndex: 'lastUpdateTime',
    },
    {
      title: 'Действия',
      key: 'actions',
      align: 'right',
      width: 250,
      render: (record: IVariation) => <VariationsFavoriteButton v={record} />,
    },
  ]

  return (
    <Table
      rowKey={'id'}
      scroll={{ x: true }}
      pagination={false}
      dataSource={data}
      loading={loading}
      columns={columns}
    />
  )
}

export default VariationsTable
