package Constraints;

import java.util.HashSet;
import java.util.Set;

public class Student {
    public final static float maxStudentsTuitionBeforeRiotsStart = 1500;
    public static Set<String> eski = new HashSet<>();

    private float tuition;
    private String eska;

    public Student (float tuition, String eska) throws Exception {
        setTuition(tuition);
        setEska(eska);
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

        if (eski.contains(eska)) {
            throw new Exception("Such ESKA already exists but must be unique");
        }

        this.eska = eska;
        eski.add(eska);
    }
}
