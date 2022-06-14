export interface ILoginParams {
  _username: string
  _password: string
  _subdomain: string
}

export interface IAuthResponse {
  token: string
  lifetime: number
  expires_at: string
}

export interface IPagination {
  page: number
  size: number
}
