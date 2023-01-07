import { bindClauseToPoint } from "./../logic/bind_clause_to_point";
import pocketbaseEs from "pocketbase";
import { Points, Student } from "../entities/student";
const url = import.meta.env.VITE_API_ROUTE;
const pb = new pocketbaseEs(url);
pb.autoCancellation(false);
export class StudentRepo {
  async get({ id }: { id?: string }): Promise<any> {
    if (!id) {
      throw new Error("id is required");
    }

    const record = await pb.collection("students").getOne(id, {
      expand: "points(student)",
    });
    console.log({ record });

    let points: Points[] = [];
    try {
      const teams = await pb.collection("teams").getList(1, 50, {});
      const teamID = teams.items.find((team: any) => {
        return team.students.includes(id);
      });
      const teamPoints = await pb.collection("team_points").getList(1, 50, {
        filter: `team="${teamID!.id}"`,
      });

      const teamItems = teamPoints.items.map((item: any) => {
        return {
          id: item.id,
          created: item.created,
          collectionId: item.collectionId,
          source: "team",
          clauses: item.clauses,
        };
      });

      points.push(...teamItems);
    } catch (e) {
      console.log(e);
    }

    const studentPoints = record.expand["points(student)"];

    if (studentPoints != null) {
      let studentPointsArr = studentPoints.map((point: any) => {
        // format created at to show in this format: 2021 dec,12 12:00, tran

        return new Points({
          clauses: point.clauses,
          collectionId: point.collectionId,
          id: point.id,
          source: "student",
          created: point.created,
        });
      });
      points.push(...studentPointsArr);
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
    console.log({ student });

    return student;
  }
}
