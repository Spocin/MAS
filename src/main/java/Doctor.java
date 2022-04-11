public class Doctor extends Person {

    public Doctor(String firstName, String secondName, String lastName, String pesel, String email) {
        super(firstName, secondName, lastName, pesel, email);
    }

    public Doctor (String firstName, String lastName, String pesel, String email) {
        super(firstName, lastName, pesel, email);
    }
}
