export default {
  required: ({label, value}) => `${label} is required`,
  email: ({label, value}) => `${label} is invalid.`,
  confirmed: ({label, value}) => `${label} does not match the confirmation field.`,
  default: ({label, value}) => `This field is invalid.`
}
