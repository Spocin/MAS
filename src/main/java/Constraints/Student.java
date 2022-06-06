package Constraints;

public class Student {
    public final static float maxStudentsTuitionBeforeRiotsStart = 1500;

    private float tuition;

    public Student (float tuition) throws Exception {
        setTuition(tuition);
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
}
