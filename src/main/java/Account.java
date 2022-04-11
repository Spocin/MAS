import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;

public class Account implements Serializable {

    private static ArrayList<Account> accounts = new ArrayList<>();
    private final LocalDateTime creationTime;

    private Person person;

    public Account (Person person) {
        this.creationTime = LocalDateTime.now();
        this.person = person;
    }
}
