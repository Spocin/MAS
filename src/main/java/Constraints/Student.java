package Constraints;

import java.util.HashMap;
import java.util.Map;

public class Student implements Comparable<Student> {
    public final static float maxStudentsTuitionBeforeRiotsStart = 1500;
    public static Map<String,Student> studentsMap = new HashMap<>();

    private float tuition;
    private String eska;
    private float studiesGPA;

    public Student (float tuition, String eska) throws Exception {
        setTuition(tuition);
        setEska(eska);
        studentsMap.put(this.eska,this);
    }

    public void setTuition (float tuition) throws Exception {
        if (tuition < this.tuition) {
            throw new Exception("Students tuition cannot be decreased!!! " + tuition);
        }

        if (tuition > maxStudentsTuitionBeforeRiotsStart) {
            throw new Exception("Students tuition cannot be increased over the limit!");
        }

        this.tuition = tuition;
    }

    public void setEska (String eska) throws Exception {
        if (!eska.startsWith("s")) {
            throw new Exception("Eska must start with letter s");
        }

        if (studentsMap.containsKey(eska)) {
            throw new Exception("Such ESKA already exists but must be unique");
        }

        this.eska = eska;
    }

    @Override
    public int compareTo(Student o) {
        return Float.compare(this.studiesGPA, o.studiesGPA);
    }
}
