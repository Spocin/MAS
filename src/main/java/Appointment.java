import java.time.LocalDateTime;

public class Appointment {
    private Doctor doctor;
    private Patient patient;

    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    private AppointmentStatus status;
    private LocalDateTime appointmentDateTime;
    private String description;
    private int roomNumber;

    public Appointment (LocalDateTime appointmentDateTime, String description, int roomNumber) {
        this.appointmentDateTime = appointmentDateTime;
        this.description = description;
        this.roomNumber = roomNumber;
        this.status = AppointmentStatus.BOOKED;
        this.createdAt = LocalDateTime.now();
        this.modifiedAt = LocalDateTime.now();
    }

    /*GETTERS*/
    public Doctor getDoctor() {
        return doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    /*SETTERS*/
    public void setDoctor(Doctor doctor) {
        this.modifiedAt = LocalDateTime.now();
        this.doctor = doctor;
    }

    public void setPatient(Patient patient) {
        this.modifiedAt = LocalDateTime.now();
        this.patient = patient;
    }
}
