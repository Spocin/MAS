import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Language implements Serializable {

    public static List<String> acceptedLanguageCodes = List.of("POL","GER","ENG");

    List<Person> person = new ArrayList<>();

    private String code;

    public Language (String code) {
        this.code = code;
    }

    public void addPerson (Person person) {
        this.person.add(person);
    }
}
