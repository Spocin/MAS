import java.util.ArrayList;
import java.util.List;

public class Patient extends Person {
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
    public String toString() {
        return "Patient " + super.toString();
    }
}
