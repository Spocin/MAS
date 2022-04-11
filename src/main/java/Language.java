import java.util.List;

public class Language {

    public static List<String> acceptedLanguageCodes = List.of("POL","GER","ENG");

    private String name;
    private String code;

    public Language (String name, String code) {
        this.name = name;
        this.code = code;
    }
}
