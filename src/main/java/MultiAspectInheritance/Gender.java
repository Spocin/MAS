package MultiAspectInheritance;

public abstract class Gender {
    private Gender gender;

    public Gender (Gender gender) {
        this.gender = gender;
    }
}
