import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Patient extends Person implements Serializable {
    private List<Appointment> appointments = new ArrayList<>();

    public static boolean canDisplayAllPatientsInfo = false;

    public Patient(String firstName, String secondName, String lastName, String pesel, String email, Address address) {
        super(firstName, secondName, lastName, pesel, email, address);
    }

    public Patient(String firstName, String lastName, String pesel, String email, Address address) {
        super(firstName, lastName, pesel, email, address);
    }

    private void addAppointment (Appointment appointment) {
        this.appointments.add(appointment);
    }

    @Override
    public String getFullInformation() {
        return "FirstName: " + super.getFirstName() + "\n" +
                "SecondName: " + super.getSecondName() + "\n" +
                "LastName: " + super.getSecondName() + "\n" +
                "Pesel: " + super.getPesel() + "\n" +
                "Email: " + super.getEmail() + "\n" +
                appointments;
    }

    @Override
    public String toString() {
        return "Patient " + super.toString();
    }
}
