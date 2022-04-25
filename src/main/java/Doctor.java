import Enums.CredentialsEnum;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Doctor extends Person {
    private List<Appointment> appointments = new ArrayList<>();
    private Map<CredentialsEnum,Title> doctorTitles = new HashMap<>();

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

    public void addTitle (Title title) throws Exception {
        if (doctorTitles.containsKey(title.getCredential())) {
            throw new Exception("Doctor already have such title");
        }

        doctorTitles.put(title.getCredential(),title);
        title.setDoctor(this);
    }

    public Title findTitleByCredential (CredentialsEnum credential) throws Exception {
        if (!doctorTitles.containsKey(credential)) {
            throw new Exception("Unable to find credentialL: " + credential);
        }

        return doctorTitles.get(credential);
    }

    @Override
    public String toString() {
        return "Doctor " + super.toString();
    }
}
