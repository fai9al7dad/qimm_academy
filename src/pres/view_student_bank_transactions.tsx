import { TrendingDown, TrendingUp } from "../components/icons/hero_icons";
import { Points, Student } from "../entities/student";
import { bindClauseToPoint } from "../logic/bind_clause_to_point";
export const ViewStudentBankTransactions = ({
  student,
  className,
}: {
  student: Student;
  className?: string;
}) => {
  if (!student.points)
    return (
      <div
        className={`bg-[#efefef] lg:bg-transparent min-h-[70vh] text-accent lg:text-white rounded-t-[33px] py-10 px-5 ${className}`}
      >
        لا يوجد تحويلات حتى الآن
      </div>
    );
  return (
    <div
      className={`bg-[#efefef] lg:bg-transparent min-h-[70vh] rounded-t-[33px] py-10 px-5 ${className}`}
    >
      {student.points.map((point: Points) => (
        <TransactionItem
          title={point.clauses}
          date={point.created}
          amount={bindClauseToPoint(point.clauses)}
        />
      ))}
    </div>
  );
};

const TransactionItem = ({
  title,
  date,
  amount,
}: {
  title: string;
  date: string;
  amount: number;
}) => {
  const isPositive = amount > 0;
  let amountTextClass = "";
  let amountBgClass = "";
  if (isPositive) {
    amountTextClass = "text-green-500";
    amountBgClass = "bg-green-500/20";
  } else {
    amountTextClass = "text-red-500";
    amountBgClass = "bg-red-500/20";
  }
  return (
    <div className="bg-white lg:bg-white/10 lg:text-white rounded-lg py-4 px-5 flex items-center justify-between text-accent mb-2">
      <div>
        <div className="text-sm font-bold">{title}</div>
        <div className="text-xs">{date}</div>
      </div>
      <div className={`flex items-center ${amountTextClass}`}>
        <div>
          <div className="text-sm  font-bold">
            {isPositive ? `+ ${amount}` : `- ${amount}`}
          </div>
          <div className="text-xs">ريال سعودي</div>
        </div>
        <div
          className={`p-1 rounded-md flex items-center justify-center ${amountBgClass} mr-2`}
        >
          {isPositive ? <TrendingUp /> : <TrendingDown />}
        </div>
      </div>
    </div>
  );
};
