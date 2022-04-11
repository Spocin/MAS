public class Patient extends Person {

    public Patient(String firstName, String secondName, String lastName, String pesel, String email) {
        super(firstName, secondName, lastName, pesel, email);
    }

    public Patient(String firstName, String lastName, String pesel, String email) {
        super(firstName, lastName, pesel, email);
    }
}
