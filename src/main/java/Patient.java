public class Patient extends Person {

    public static boolean canDisplayAllPatientsInfo = false;

    public Patient(String firstName, String secondName, String lastName, String pesel, String email, Address address) {
        super(firstName, secondName, lastName, pesel, email, address);
    }

    public Patient(String firstName, String lastName, String pesel, String email, Address address) {
        super(firstName, lastName, pesel, email, address);
    }
}
