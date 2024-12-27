/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

type InputProps = {
  label?: string
  err?: FieldError
  icon?: any
  helperMsg?: string
  errMsg?: string
  placeholder?: string
  type?: string
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ label, err, placeholder, type, icon, helperMsg, errMsg, ...rest },
    ref) => {
    return <div>
      <div>
        <div className='flex justify-between'>
          {!!label && <label className="text-white font-bold" >{label}</label>}
          {!!icon && icon}
        </div>

        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />

        {/* {err && <FormErrorMessage
          fontWeight='bold'
          fontStyle='italic'
          fontSize='0.7rem'>{err.message}</FormErrorMessage>} */}
        {(err == null)
          ? (<p>{helperMsg}</p>)
          : (
            <p>{errMsg}
            </p>
            )}
      </div>
    </div>
  }
export const Input = forwardRef(InputBase)
