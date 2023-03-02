import { useSelector } from "react-redux";

export const Count = () => {
  const count = useSelector((state) => state.teacher.currentIndex + 1);
  const questionCount = "Q" + count;
  return questionCount;
};

export const GiveExamFields = [
  {
    id: 1,
    name: "subject",
    type: "text",
    inputType: "input",
    placeholder: "Enter Subject",
    errorMessage: "Subject is Required..!",
  },
  {
    id: 2,
    name: "question",
    inputType: "input",
    type: "text",
    label: <Count />,
    placeholder: "Enter Question",
    errorMessage: "Question is required..!",
  },
  {
    id: 4,
    name: "Option1",
    inputType: "input",
    type: "text",
    radioField: {
      name: "option",
      type: "radio",
      value: "Option1",
      inputType: "radio",
      // errorMessage: "Option1 is required..!",
    },
    placeholder: "Enter Option1",
    errorMessage: "Option1 is required..!",
  },
  {
    id: 5,
    name: "Option2",
    inputType: "input",
    type: "text",
    radioField: {
      name: "option",
      type: "radio",
      value: "Option2",
      inputType: "radio",
      // errorMessage: "Option1 is required..!",
    },
    placeholder: "Enter Option2",
    errorMessage: "Option2 is required..!",
  },
  {
    id: 6,
    name: "Option3",
    inputType: "input",
    type: "text",
    radioField: {
      name: "option",
      type: "radio",
      inputType: "radio",
      value: "Option3",
      // errorMessage: "Option1 is required..!",
    },
    placeholder: "Enter Option3",
    errorMessage: "Option3 is required..!",
  },
  {
    id: 7,
    name: "Option4",
    inputType: "input",
    type: "text",
    radioField: {
      name: "option",
      type: "radio",
      value: "Option4",
      inputType: "radio",
      // errorMessage: "Option1 is required..!",
    },
    placeholder: "Enter Option4",
    errorMessage: "Option4 is required..!",
  },
  {
    id: 10,
    name: "answer",
    inputType: "input",
    type: "text",
    hidden: true,
    placeholder: "Enter answer",
    errorMessage: "Answer is required..!",
  },
  {
    id: 11,
    name: "notes",
    inputType: "input",
    type: "text",
    placeholder: "Enter Note",
    errorMessage: "Note is required..!",
  },
];
