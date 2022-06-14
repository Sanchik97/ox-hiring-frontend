import { LS_AUTH_TOKEN } from '../constants'
import { IPagination } from '../interfaces'

const url = process.env.REACT_APP_API_URL + '/variations?'

export function getAllVariations(pagination: IPagination) {
  return fetch(
    url +
      new URLSearchParams({
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      }),
    {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(LS_AUTH_TOKEN),
        'Content-Type': 'application/json',
      },
    },
  )
}
