import React, { useContext, useState } from 'react'
import { Button, Card, Form, Input, message, Typography } from 'antd'
import { AuthContext } from '../../../../context/auth'
import { IAuthResponse, ILoginParams } from '../../../../interfaces'
import './auth-form.css'
import { login } from '../../../../api/auth'

interface props {}

const AuthForm: React.FC<props> = () => {
  const { handleSetToken } = useContext(AuthContext)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onSubmit = async (values: ILoginParams) => {
    setIsSubmitting(true)

    await login(values).then(async (response: Response) => {
      if (response.status === 200) {
        message.success('Вы успешно авторизовались!')
        const data: IAuthResponse = await response.json()
        handleSetToken(data.token)
      } else {
        message.error(
          `Сервер ответил с ошибкой ${response.status}, проверьте корректность веденных данных, либо обратитесь к системному администратору`,
        )
      }
    })

    setIsSubmitting(false)
  }

  return (
    <Card className={'auth-form'} title={'Авторизация'}>
      <Typography.Paragraph>
        Пожалуйста, введите свои данные, чтобы авторизоваться.
      </Typography.Paragraph>
      <Form layout={'vertical'} onFinish={onSubmit} autoComplete={'off'}>
        <Form.Item name={'_subdomain'} hidden={true} initialValue={process.env.REACT_APP_SUBDOMAIN}>
          <Input />
        </Form.Item>
        <Form.Item name={'_username'} label={'Логин'} rules={[{ required: true }]}>
          <Input placeholder={'Введите логин'} />
        </Form.Item>
        <Form.Item name={'_password'} label={'Пароль'} rules={[{ required: true }]}>
          <Input.Password placeholder={'Введите пароль'} />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType={'submit'}
            type={'primary'}
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default AuthForm
