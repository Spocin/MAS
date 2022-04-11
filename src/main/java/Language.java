import java.io.Serializable;
import java.util.List;

public class Language implements Serializable {

    public static List<String> acceptedLanguageCodes = List.of("POL","GER","ENG");

    private String code;

    public Language (String code) {
        this.code = code;
    }
}
