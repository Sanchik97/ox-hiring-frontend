import { ILoginParams } from '../interfaces'

const url = process.env.REACT_APP_API_URL + '/security/auth_check'

export function login(data: ILoginParams) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: Object.keys(data)
      .map((key: string) => key + '=' + data[key as keyof typeof data])
      .join('&'),
  })
}
