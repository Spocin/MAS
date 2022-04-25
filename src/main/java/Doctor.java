import java.util.ArrayList;
import java.util.List;

public class Doctor extends Person {
    private List<Appointment> appointments = new ArrayList<>();

    public static boolean canDisplayAllPatientsInfo = true;

    public Doctor(String firstName, String secondName, String lastName, String pesel, String email, Address address) {
        super(firstName, secondName, lastName, pesel, email, address);
    }

    public Doctor (String firstName, String lastName, String pesel, String email, Address address) {
        super(firstName, lastName, pesel, email, address);
    }

    public void addAppointment (Appointment appointment) {
        this.appointments.add(appointment);
    }

    @Override
    public String toString() {
        return "Doctor " + super.toString();
    }
}
