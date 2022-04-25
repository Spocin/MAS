import Enums.CredentialsEnum;

import java.time.LocalDateTime;

public class Title {

    private Doctor doctor;
    private CredentialsEnum credential;
    private LocalDateTime acquiredAt;

    public Title (CredentialsEnum credential, LocalDateTime acquiredAt) {
        this.credential = credential;
        this.acquiredAt = acquiredAt;
    }

    public CredentialsEnum getCredential() {
        return credential;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }
}


