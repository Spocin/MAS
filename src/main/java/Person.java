import java.util.ArrayList;

public class Person {

    private String firstName;
    private String secondName = null;
    private String lastName;
    private String pesel;
    private String email;
    private ArrayList<Language> languages = new ArrayList<>();

    private Patient patient;
    private Doctor doctor;

    public Person (String firstName, String secondName, String lastName, String pesel, String email, Patient patient, Doctor doctor) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.pesel = pesel;
        this.email = email;
        this.patient = patient;
        this.doctor = doctor;
    }

    public Person (String firstName, String lastName, String pesel, String email, Patient patient, Doctor doctor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pesel = pesel;
        this.email = email;
        this.patient = patient;
        this.doctor = doctor;
    }
}
