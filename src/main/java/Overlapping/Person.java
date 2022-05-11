package Overlapping;

import java.time.LocalDate;
import java.util.EnumSet;

enum PersonType {Person, Employee, Student, Pensioner};

public class Person {
    private String firstName;
    private String lastName;
    private LocalDate birthDate;

    private boolean medicalTest;
    private int number;

    private EnumSet<PersonType> peronKind = EnumSet.of(PersonType.Person);

    public boolean hasMedicalTest() throws Exception {
        if (peronKind.contains(PersonType.Employee)) {
            return medicalTest;
        }
        throw new Exception("This peron is not an employee!");
    }
}
