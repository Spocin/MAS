public class Doctor extends Person {

    public Doctor(String firstName, String secondName, String lastName, String pesel, String email, Address address) {
        super(firstName, secondName, lastName, pesel, email, address);
    }

    public Doctor (String firstName, String lastName, String pesel, String email, Address address) {
        super(firstName, lastName, pesel, email, address);
    }
}
