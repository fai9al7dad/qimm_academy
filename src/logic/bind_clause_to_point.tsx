export const bindClauseToPoint = (clause: string): number => {
  switch (clause) {
    case "الورد القرآني":
      return 5000;
    case "الحضور المبكر":
      return 50000;
    case "الحضور":
      return 250000;
    case "العلامة الكاملة":
      return 100000;
    case "فوز في الدوري الرياضي":
      return 10000;
    case "تعادل في الدوري الرياضي":
      return 5000;
    case "ترفيهي صغير":
      return 30000;
    case "برنامج نوعي":
      return 20000;
    case "الضيافة":
      return 30000;
    case "العشاء":
      return 400000;
    case "برامج كبيرة":
      return 150000;
    default:
      return 0;
  }
};
