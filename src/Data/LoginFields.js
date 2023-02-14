export const LoginFields = [
  {
    id: 1,
    name: "email",
    type: "email",
    inputType: "input",
    placeholder: "Email",
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorMessage: "Email is Required..!",
    patternError: "Enter valid Email...!",
    // required: true,
  },
  {
    id: 2,
    name: "password",
    inputType: "input",
    type: "password",
    pattern: /[a-zA-Z0-9]{6,30}/,
    autoComplete: "password",
    placeholder: "password",
    errorMessage: "password is required..!",
    patternError: "min password length is 6 and max 30",
    // required: true,
  },
];
