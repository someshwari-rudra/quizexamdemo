import { FaClipboardList } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
// import { RiDashboardFill } from "react-icons/ri";
import { AiOutlineFundView } from "react-icons/ai";
export const teacherSidebarMenu = [
  { label: "View Students", link: "/ViewStudent", icon: BsFillPersonFill },
  { label: "Create Exam", link: "/createExam", icon: FaClipboardList },
  { label: "View Exams", link: "/ViewExams", icon: AiOutlineFundView },
  { label: "Verify Exams    ", link: "/verifyExam", icon: MdVerified },
];
