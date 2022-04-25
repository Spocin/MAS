import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;

public class Account implements Serializable {

    public static ArrayList<Account> accounts = new ArrayList<>();

    private final LocalDateTime creationTime;
    private final Person person;

    public Account (Person person) {
        this.person = person;
        this.creationTime = LocalDateTime.now();
    }

    /*Getters*/
    public LocalDateTime getCreationTime() {
        return creationTime;
    }

    public Person getPerson() {
        return person;
    }

    @Override
    public String toString() {
        return "Account{" +
                "creationTime=" + creationTime +
                ", person=" + person +
                '}';
    }
}
