import { useState } from "react";
import { useParams } from "react-router-dom";
import { StudentRepo } from "../repo/student_repo";

export const UseStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const studentRepo = new StudentRepo();

  const getStudent = async () => {
    setLoading(true);
    try {
      const student = await studentRepo.get({ id: id?.toString() });

      setStudent(student);
      setLoading(false);
    } catch (err) {
      // alert("حصل خطأ ما :'(");
      console.log(err);
      setLoading(false);
    }
  };

  return { student, loading, getStudent };
};
