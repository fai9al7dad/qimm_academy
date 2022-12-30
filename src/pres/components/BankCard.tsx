import GoldCard from "../../assets/cards/gold_card.svg";
import SilverCard from "../../assets/cards/silver_card.svg";
import PremiumCard from "../../assets/cards/premium_card.svg";
import QimmLogo from "../../assets/qimm_academy.png";

export const BankCard = ({
  cardHolderName,
  cardNumber,
  cardBalance,
}: {
  cardHolderName: string;
  cardNumber: string;
  cardBalance: number;
}) => {
  // based on the card balance, we can determine the card type
  let cardType: string = "silverCard";
  let imgUrl = "";
  const goldCaldMin = 10000;
  const silverCardMin = 0;
  const premiumCardMin = 100000;
  if (cardBalance > premiumCardMin) {
    cardType = "premiumCard";
    imgUrl = PremiumCard;
  } else if (cardBalance > goldCaldMin && cardBalance <= premiumCardMin) {
    cardType = "goldCard";
    imgUrl = GoldCard;
  } else if (cardBalance >= silverCardMin && cardBalance <= goldCaldMin) {
    cardType = "silverCard";
    imgUrl = SilverCard;
  }

  return (
    <div
      className={`relative flex items-center justify-center text-${cardType}-text`}
    >
      <img src={imgUrl} />
      <div className="absolute z-50 w-full h-full ">
        <div className="grid grid-cols-6  h-full ">
          <div className=" flex flex-col  justify-between pr-6 2xl:pr-10 py-5 col-span-4">
            <div className="text-sm  font-bold">مصرف قمم الدولي | الذهبية</div>
            <div className="text-md font-bold">
              {
                // card number is 16 digits, we need to split it into 4 groups of 4 digits separated by a dash
                cardNumber
                  .toString()
                  .split("")
                  .map((digit, index) => {
                    if (index % 4 === 0 && index !== 0) {
                      return `-${digit}`;
                    }
                    return digit;
                  })
                  .join("")
              }
            </div>
            <div>
              <div className="text-xs">اسم حامل البطاقة:</div>
              <div className="mt-2 text-md font-bold">{cardHolderName}</div>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-between pl-7 pr-4 2xl:pl-12 pt-2 pb-5 col-span-2">
            <img src={QimmLogo} className="w-24" />
            <div>
              <div className="text-xs">الرصيد</div>
              <div className="mt-2 text-md font-bold">{cardBalance} ريال</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
