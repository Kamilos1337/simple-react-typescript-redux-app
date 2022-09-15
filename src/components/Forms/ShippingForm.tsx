import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Box, TextField } from '@mui/material'

interface ShippingProps {
  setIsSubmit: (isSubmit: boolean) => void
  values: {}
  setValues: (values: {}) => void
}

interface ErrorProps {
  [key: string]: string
}

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  min-height: 95vh;
`
const StyledInput = styled(TextField)`
  && {
    margin: 15px;
    border: 1px solid white;
    background: white;
    border-radius: 5px;
    font-weight: bold;

    width: 100%;
    @media (min-width: 1300px) {
      min-width: 400px;
    }
  }
`

const InputsContainer = styled.div`
  display: flex;
`

export const ShippingForm: React.FC<ShippingProps> = ({
  setIsSubmit,
  values,
  setValues
}) => {
  const [errors, setErrors] = React.useState<ErrorProps>({})
  const validate: (name: string, value: string) => string = (name, value) => {
    const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    switch (name) {
      case 'phone':
        return regexPhone.test(value) && value.length < 13
          ? ''
          : 'Provide correct phone number! Example: +48 555 444 333'
      case 'email':
        return regexEmail.test(value) && value.length < 30
          ? ''
          : 'Provide correct email address!'
      default:
        return value.length > 5 && value.length < 30
          ? ''
          : 'The field must be beetween 6 to 30 letters!'
    }
  }

  useEffect(() => {
    const inputs: number = document.querySelectorAll('input').length
    let correct = 0
    for (let x: number = 0; x < Object.keys(errors).length; x++) {
      const entry = Object.keys(errors)
      if (errors[entry[x]] === '') correct++
    }
    correct === inputs ? setIsSubmit(false) : setIsSubmit(true)
  }, [errors])

  const handleChange: (event: any) => void = (event) => {
    const name: string = event.target.name
    const error: string = validate(event.target.name, event.target.value)
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
    setErrors({
      ...errors,
      [name + 'Error']: error
    })
  }

  return (
    <FormContainer>
      <Box component="form" autoComplete="off">
        <InputsContainer>
          <StyledInput
            onChange={(e: {}) => handleChange(e)}
            variant="filled"
            required
            error={errors.nameError?.length > 0}
            label="Name"
            helperText={errors.nameError}
            name="name"
          />
          <StyledInput
            onChange={(e: {}) => handleChange(e)}
            id="text"
            variant="filled"
            required
            error={errors.surnameError?.length > 0}
            label="Surname"
            helperText={errors.surnameError}
            name="surname"
          />
        </InputsContainer>
        <InputsContainer>
          <StyledInput
            onChange={(e: {}) => handleChange(e)}
            variant="filled"
            required
            label="Phone Number"
            error={errors.phoneError?.length > 0}
            helperText={errors.phoneError}
            name="phone"
          />
        </InputsContainer>
        <InputsContainer>
          <StyledInput
            onChange={(e: {}) => handleChange(e)}
            variant="filled"
            required
            error={errors.emailError?.length > 0}
            helperText={errors.emailError}
            label="Email"
            name="email"
          />
        </InputsContainer>
        <InputsContainer>
          <StyledInput
            onChange={(e: {}) => handleChange(e)}
            variant="filled"
            required
            label="Date of birth"
            error={errors.dateError?.length > 0}
            helperText={errors.dateError}
            name="date"
          />
        </InputsContainer>
        <InputsContainer>
          <StyledInput
            onChange={(e: {}) => handleChange(e)}
            variant="filled"
            required
            label="Address"
            error={errors.addressError?.length > 0}
            helperText={errors.addressError}
            name="address"
          />
        </InputsContainer>
        <InputsContainer>
          <StyledInput
            onChange={(e: {}) => handleChange(e)}
            variant="filled"
            required
            label="City"
            error={errors.cityError?.length > 0}
            helperText={errors.cityError}
            name="city"
          />
        </InputsContainer>
        <InputsContainer>
          <StyledInput
            onChange={(e: {}) => handleChange(e)}
            variant="filled"
            required
            label="State"
            error={errors.stateError?.length > 0}
            helperText={errors.stateError}
            name="state"
          />
          <StyledInput
            onChange={(e: {}) => handleChange(e)}
            variant="filled"
            required
            type="number"
            label="Zip Code"
            error={errors.codeError?.length > 0}
            helperText={errors.codeError}
            name="code"
          />
        </InputsContainer>
      </Box>
    </FormContainer>
  )
}
