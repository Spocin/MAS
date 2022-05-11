package DynamicInheritance;

public class Employee extends Person {
    private boolean medicalTest;
    private float salary;

    public Employee (Person prevPerson, boolean medicalTest, float salary) {
        super(prevPerson.getFirstName(), prevPerson.getLastName(), prevPerson.getBirthDate());
        this.medicalTest = medicalTest;
        this.salary = salary;
    }
}
