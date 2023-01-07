export const bindClauseToPoint = (clause: string): number => {
  switch (clause) {
    case "تفاعل ايجابي":
      return 40000;
    case "الحضور المبكر":
      return 50000;
    case "الحضور":
      return 30000;
    case "تميز":
      return 5000;
    case "حضور نصف البرنامج":
      return 15000;
    case "برنامج صغير":
      return 15000;
    case "برنامج وسط":
      return 10000;
    case "برنامج كبير":
      return 15000;
    case "الحضور الكامل":
      return 50000;
    default:
      return 0;
  }
};
