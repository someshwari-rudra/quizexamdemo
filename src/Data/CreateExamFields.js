export const CreateExamFields = [
  {
    id: 1,
    name: "question",
    type: "text",
    inputType: "input",
    placeholder: "enter Question",
    errorMessage: "Quesition is Required..!",
    // required: true,
    options: [
      {
        id: 2,
        label: "gender",
        name: "gender",
        inputType: "radio",
        radioFileds: [
          {
            id: 3,
            name: "question",
            type: "text",
            inputType: "input",
          },
        ],
        type: "radio",
        errorMessage: "select any one option..!",
      },
    ],
  },
];
