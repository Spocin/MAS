package Constraints.XOR;

import java.util.ArrayList;
import java.util.List;

public class Person {
    private String firstName;
    private String lastName;
    private List<Company> worksIn = new ArrayList<>();

    public Person (String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public void addToCompany (Company company) throws Exception {
        if (company.getType() == CompanyType.PRIVATE && isFederalWorker()) {
            throw new Exception("Employee cant be private and federal worker at the same time");
        }
        this.worksIn.add(company);
    }

    private boolean isFederalWorker() {
        for (Company comp : worksIn) {
            if (comp.getType() == CompanyType.FEDERAL) {
                return true;
            }
        }
        return false;
    }
}
