import java.io.Serializable;

public class Address implements Serializable {

    private String streetName;
    private int houseNumber;
    private String postalCode;
    private String cityName;

    public Address (String streetName, int houseNumber, String postalCode, String cityName) {
        this.streetName = streetName;
        this.houseNumber = houseNumber;
        this.postalCode = postalCode;
        this.cityName = cityName;
    }
}
