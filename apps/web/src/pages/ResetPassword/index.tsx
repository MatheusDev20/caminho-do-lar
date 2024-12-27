/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from 'react-hook-form'
import { ResetPasswordForm } from '../../interfaces/ForgotPasswordData'
import * as S from './styles'
import React, { useState } from 'react'
import { Input } from '../../components/Form/Input'
import { UserService } from '../../services/api/users'
import { useNavigate } from 'react-router-dom'

export const ResetPassword = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm<ResetPasswordForm>()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<ResetPasswordForm> = async (data) => {
    try {
      setLoading(true)
      const { newPassword } = data
      const searchParams = new URLSearchParams(window.location.search)
      const token = searchParams.get('token')

      if (!token) {
        setLoading(false)
        throw new Error('Not authorized')
      }

      await UserService.resetPassword(newPassword, token)
      // toast({
      //   status: 'success',
      //   duration: 5000,
      //   title: 'Senha atualizada com sucesso',
      //   description: 'Redirecionando para a página de Login',
      //   isClosable: true,
      //   position: 'top-right'
      // })
      reset()
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (err) {
      throw new Error('Error reseting password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
    <div>

        {/* Title */}
        <header>Resetar Senha </header>
        {/* Form to Reset Input */}
        <S.ResetForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div gap={6}>
                <Input
                    err={errors.newPassword}
                    placeholder='Nova senha...'
                    type="text"
                    w='100%'
                    errMsg='Senha deve ter no mínimo 8 caractéres'
                    mt='1rem'
                    {...register('newPassword', {
                      required: 'Nova senha é obrigatória',
                      validate: v => v.length >= 8
                    })} />
                <Input
                    err={errors.repeatPassword}
                    placeholder='Confirme sua senha...'
                    type="text"
                    errMsg='Senhas não coincidem'
                    w='100%'
                    mt='1rem'
                    {...register('repeatPassword', {
                      required: 'Confirmação de senha é necessária',
                      validate: {
                        equal: v => v === getValues('newPassword')
                      }
                    })} />
            </d>
          </div>
          <Button
            type='submit'
            mt='6'
            bg='#02966a'
            _hover={{ bgColor: '#15a97d' }}
            size={{ base: 'sm', md: 'lg' }}>
              {loading ? <CircularProgress isIndeterminate size={5} /> : 'Resetar'}
          </Button>
        </S.ResetForm>
    </div>
  </div>
  )
}
