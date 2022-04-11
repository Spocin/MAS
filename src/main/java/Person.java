import java.util.ArrayList;
import java.util.List;

public class Person {
    private String firstName;
    private String secondName = null;
    private String lastName;
    private String pesel;
    private String email;

    private Address address;
    private List<Language> languages = new ArrayList<>();

    public Person (String firstName, String secondName, String lastName, String pesel, String email) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.pesel = pesel;
        this.email = email;
        this.address = obtainAndAddAddress();
    }

    public Person (String firstName, String lastName, String pesel, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pesel = pesel;
        this.email = email;
        this.address = obtainAndAddAddress();
    }

    private Address obtainAndAddAddress () {

        return null;
    }
}
