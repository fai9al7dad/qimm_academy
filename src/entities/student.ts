// convert two interfaces to two classes

export class Points {
  clauses: string;
  collectionId: string;
  id: string;
  created: string;

  constructor({ clauses, collectionId, id, created }: Points) {
    this.clauses = clauses;
    this.collectionId = collectionId;
    this.id = id;
    this.created = created;
  }
}

export class Student {
  avatar: string;
  id: string;
  name: string;
  created: string;
  totalPoints: number;
  points: Points[];
  cardNumber: string;

  constructor({
    avatar,
    id,
    name,
    created,
    totalPoints,
    points,
    cardNumber,
  }: Student) {
    this.avatar = avatar;
    this.id = id;
    this.name = name;
    this.cardNumber = cardNumber;
    this.created = created;
    this.points = points;
    this.totalPoints = totalPoints;
  }
}
