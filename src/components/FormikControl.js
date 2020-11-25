import React from 'react'
import Input from "./formInputs/Input"
import Textarea from "./formInputs/Textarea"
import Select from "./formInputs/Select"
import RadioButtons from "./formInputs/RadioButtons"
import CheckboxGroup from "./formInputs/CheckboxGroup"
import DatePicker from "./formInputs/DatePicker"

function FormikControl (props) {
    const { control, ...rest } = props
    switch (control) {
      case 'input':
        return <Input {...rest} />
      case 'textarea':
        return <Textarea {...rest} />
      case 'select':
        return <Select {...rest} />
      case 'radio':
        return <RadioButtons {...rest} />
      case 'checkbox':
        return <CheckboxGroup {...rest} />
      case 'date':
        return <DatePicker {...rest} />
      default:
        return null
    }
  }

  
export default FormikControl