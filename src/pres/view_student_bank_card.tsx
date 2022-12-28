import { Student } from "../entities/student";
import { BankCard } from "./components/BankCard";

export const ViewStudentBankCard = ({ student }: { student: Student }) => {
  return (
    <div>
      <BankCard
        cardHolderName={student.name}
        cardBalance={student.totalPoints}
        cardNumber={student.cardNumber}
      />
    </div>
  );
};
