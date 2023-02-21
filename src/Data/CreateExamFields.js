import { useSelector } from "react-redux";

export const Count = () => {
 const count= useSelector((state) => state.teacher.currentIndex+1);
  const questionCount = "Q" + count
return questionCount;
};

export const CreateExamFields = [
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
    label:  <Count/> ,
    placeholder: "Enter Question",
    errorMessage: "Question is required..!",
  },
  {
    id: 3,
    inputType: "radio_input",
    errorMessage: "Please select anyone Option..!",
    option: [
      {
        id: 4,
        name: "Option1",
        type: "text",
        placeholder: "Enter Option1",
        errorMessage: "Option1 is required..!",
      },
      {
        id: 5,
        name: "Option2",
        type: "text",
        placeholder: "Enter Option2",
        errorMessage: "Option2 is required..!",
      },
      {
        id: 6,
        name: "Option3",
        type: "text",
        placeholder: "Enter Option3",
        errorMessage: "Option3 is required..!",
      },
      {
        id: 7,
        name: "Option4",
        type: "text",
        placeholder: "Enter Option4",
        errorMessage: "Option3 is required..!",
      },
    ],
  },
  {
    id: 10,
    name: "answer",
    inputType: "input",
    type: "text",
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

// const data = [
//   {
//     subjectName: "social",
//     questions: [
//       {
//         question:
//           "Who returned his knighthood after the 'Jallianwala Bagh massacre?",
//         answer: "Rabindra Nath Tagore",
//         options: [
//           "Dr. B. R. Ambedkar",
//           "Mahatma Gandhi",
//           "Bal Gangadhar Tilak",
//           "Rabindra Nath Tagore",
//         ],
//       },
//       {
//         question:
//           " Where is the dargah of Sheikh Khwaja Qutbuddin Bakhtiyar Kaki located?",
//         answer: "Delhi",
//         options: [" Ajmer", " Ajidhan", "Agra", "Delhi"],
//       },
//       {
//         question:
//           "When was the budget system introduced for the first time in India?",
//         answer: "1890",
//         options: ["1867", "1860", "1897", "1890"],
//       },
//       {
//         question: "Who is the author/writer of 'The Silent Cry'?",
//         answer: "Ruskin Bond",
//         options: [
//           "Haruki Murakami",
//           "Kenzaburo Oye",
//           "John Milton",
//           "Ruskin Bond",
//         ],
//       },
//       {
//         question: "In which sport does Sunil Chhetri represent India?",
//         answer: "Cricket",
//         options: ["Football", "Cricket", "Hawk", "Volleyball"],
//       },
//       {
//         question: "Where is Guindi National Park located?",
//         answer: "Himachal Pradesh",
//         options: [
//           "Andhra Pradesh",
//           "Telangana",
//           "Himachal Pradesh",
//           "Tamil Nadu",
//         ],
//       },
//       {
//         question: " Which Indian founded the Natal Indian Congress?",
//         answer: "Bal Gangadhar Tilak",
//         options: [
//           "Jawaharlal Nehru",
//           "Govind Ranade",
//           "Mahatma Gandhi",
//           "Bal Gangadhar Tilak",
//         ],
//       },
//       {
//         question:
//           " Which cell organelle is also called the 'powerhouse of the cell'?",
//         answer: " Plastid",
//         options: ["Lysosomes", "Mitochondria", " Golgi apparatus", " Plastid"],
//       },
//       {
//         question:
//           "Who was the President of the 19th session of the Indian National Congress?",
//         answer: "Surendranath Banerjee",
//         options: [
//           "Gopal Krishna Gokhale",
//           "Sir Henry Cotton",
//           " Lal Mohan Ghosh",
//           "Surendranath Banerjee",
//         ],
//       },
//       {
//         question:
//           " Which of the following was not built during the Tughlaq period?",
//         answer: "Tuglakabaad",
//         options: [
//           "Window Mosque",
//           "Firoj Shah Kotla",
//           "Jama Masjid",
//           "Tuglakabaad",
//         ],
//       },
//       {
//         question: "Who appoints the Chief Justice in India?",
//         answer: "President",
//         options: [
//           "Prime Minister",
//           "Vice-President",
//           "Speaker of Lok Sabha",
//           "President",
//         ],
//       },
//       {
//         question: "How many members are there in the GST council?",
//         answer: "23",
//         options: ["30", "35", "33", "23"],
//       },
//       {
//         question: "In which state is Surajkund Lake located?",
//         answer: "Delhi",
//         options: ["Haryana", "Punjab", " Bihar", "Delhi"],
//       },
//       {
//         question:
//           "On this matter was the fight between Mohammad Gauri and Prithviraj Chauhan?",
//         answer: "Battle of Buxar",
//         options: [
//           "Battle of Tarain",
//           "Battle of Khanwa",
//           "Battle of Plassey",
//           "Battle of Buxar",
//         ],
//       },
//       {
//         question: "In which state of India is Gol Gumbaz located?",
//         answer: "Karnataka",
//         options: ["Delhi", "Kerala", "Karnataka", "Maharashtra"],
//       },
//     ],
//     notes: [
//       "aaaa",
//       "aaadsd",
//       "afrte",
//       "uyrt",
//       "as",
//       "ssss",
//       "dsad",
//       "sss",
//       "sdfsf",
//       "sssstyr",
//       "aaasdfert",
//       "erwer",
//       "reter",
//       "ytutyiu",
//       "ytuyioiu",
//     ],
//   },
// ];
