package Constraints.XOR;

enum CompanyType {
    FEDERAL,
    PRIVATE
}

public class Company {
    private String name;
    private CompanyType type;

    public Company (String name, CompanyType type) {
        this.name = name;
        this.type = type;
    }

    public CompanyType getType () {
        return this.type;
    }
}
