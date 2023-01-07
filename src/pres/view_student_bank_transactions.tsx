import {
  TrendingDown,
  TrendingUp,
  User,
  UserGroup,
} from "../components/icons/hero_icons";
import { Points, Student } from "../entities/student";
import { bindClauseToPoint } from "../logic/bind_clause_to_point";
export const ViewStudentBankTransactions = ({
  student,
  className,
}: {
  student: Student;
  className?: string;
}) => {
  if (!student.points || student.points.length === 0)
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
          key={point.id}
          title={point.clauses}
          date={point.created}
          source={point.source}
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
  source,
}: {
  title: string;
  date: string;
  amount: number;
  source: string;
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
        <div className="text-[10px] bg-neutral-100 border border-neutral-200 px-3 py-0.5 mb-0.5 rounded-sm   w-fit">
          {source === "team" ? (
            <UserGroup className={`h-3 w-3 inline-block `} />
          ) : (
            <User className={`h-3 w-3 inline-block`} />
          )}
          {/* {source === "team" ? "فريق" : "فردي"} */}
          <span></span>
        </div>
        <div className="text-sm font-bold mb-1">{title}</div>
        <div className="text-xs">
          {new Date(date).toLocaleDateString("ar-SA", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
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
