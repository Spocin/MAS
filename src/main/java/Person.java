import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public abstract class Person implements Serializable {
    private String firstName;
    private String secondName = null;
    private String lastName;
    private String pesel;
    private String email;

    private Account account;
    private Address address;

    private List<Language> languages = new ArrayList<>();

    public Person (String firstName, String secondName, String lastName, String pesel, String email, Address address) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.pesel = pesel;
        this.email = email;
        this.address = address;
    }

    public Person (String firstName, String lastName, String pesel, String email, Address address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pesel = pesel;
        this.email = email;
        this.address = address;
    }

    /*GETTERS*/
    public Account getAccount() {
        return account;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPesel() {
        return pesel;
    }

    public String getEmail() {
        return email;
    }

    public Address getAddress() {
        return address;
    }

    /*SETTERS*/
    public void setAccount(Account account) {
        this.account = account;
    }

    /*METHODS*/
    public abstract String getFullInformation();

    public void addLanguage(int languageNumber) {
        Language language = new Language(Language.acceptedLanguageCodes.get(languageNumber));
        language.addPerson(this);

        this.languages.add(language);
    }

    @Override
    public String toString() {
        return "Person{" +
                "firstName='" + firstName + '\'' +
                ", secondName='" + secondName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", pesel='" + pesel + '\'' +
                ", email='" + email + '\'' +
                ", address=" + address +
                ", languages=" + languages +
                '}';
    }
}
