package MultiAspectInheritance;

import java.time.LocalDate;

enum PersonType {Person, Employee, Student, Pensioner};

public class Person {
    private String firstName;
    private String lastName;
    private LocalDate birthDate;

    private boolean medicalTest;
    private int number;

    private PersonType personType;
    private Gender gender;
}
