function joiErrorHandler(errors) {
  console.log('errors => ', errors);

  errors.forEach(err => {
    const field   = err.local;
    
    switch (err.code) {
      case 'any.required':
        err.message = `${field.label} is a required field.`
        break

      case 'date.format':
        err.message = `${field.label} format must be in the shape of (YYYY-MM-DD).`
        break

      case 'number.base':
        err.message = `${field.label} must be a type of number.`
        break
      case 'number.min':
        err.message = `${field.label} must be greater than or equal to ${ field.limit.key || field.limit}.`
        break
    }
  })

  return errors;
}

module.exports = joiErrorHandler