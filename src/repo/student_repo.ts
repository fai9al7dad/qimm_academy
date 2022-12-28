import { bindClauseToPoint } from "./../logic/bind_clause_to_point";
import pocketbaseEs from "pocketbase";
import { Points, Student } from "../entities/student";
const url = import.meta.env.VITE_API_ROUTE;
const pb = new pocketbaseEs(url);
pb.autoCancellation(false);
export class StudentRepo {
  async get({ id }: { id?: string }): Promise<any> {
    console.log({ url });
    if (!id) {
      throw new Error("id is required");
    }
    const record = await pb.collection("students").getOne(id, {
      expand: "points(student)",
    });

    const studentPoints = record.expand["points(student)"];
    let points;
    if (studentPoints != null) {
      points = studentPoints.map((point: any) => {
        // format created at to show in this format: 2021 dec,12 12:00, tran

        return new Points({
          clauses: point.clauses,
          collectionId: point.collectionId,
          id: point.id,
          created: point.created,
        });
      });
    }
    let student = new Student({
      avatar: record.avatar,
      id: record.id,
      name: record.name,
      cardNumber: record.card_number,

      created: record.created,
      points: points,
      totalPoints: record.totalCredit == null ? 0 : record.totalCredit,
    });

    return student;
  }
}
