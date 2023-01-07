import { Routes, Route } from "react-router-dom";
import Student from "./pages/student";
import moment from "moment";

moment.defineLocale("ar", {
  months: [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
  shortMonths: [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
  weekdays: [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ],
  shortWeekdays: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  meridiem: (hour: number, minute: number, isLowercase: boolean) => {
    if (hour < 12) {
      return "ص";
    } else {
      return "م";
    }
  },
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<Student />} />
      <Route
        path="*"
        element={
          <div className="h-screen flex items-center justify-center text-white font-bold text-2xl">
            الصفحة غير موجودة 😔
          </div>
        }
      />
    </Routes>
  );
}
const Home = () => (
  <div className="text-white text-3xl flex items-center justify-center h-screen text-center px-5">
    <h1>
      لرؤية انجاز الطالب الرجاء ادخل من الرابط الذي يحتوي على الرقم المميز 👍
      <br />
      <br />
      <hr />
      <br />
      <br />
      مثلا : https://qimm-academy.vercel.app/123456789
    </h1>
  </div>
);

export default App;
