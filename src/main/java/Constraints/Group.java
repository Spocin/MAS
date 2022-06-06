package Constraints;

import java.util.HashSet;
import java.util.Set;

public class Group {
    private int groupNumber;
    private Set<Student> studentsInGroup = new HashSet<>();
    private Set<Student> groupRepresentatives;

    public Group (int groupNumber) {
        this.groupNumber = groupNumber;
    }

    public void addStudentToGroup (Student student) throws Exception {
        if (studentsInGroup.contains(student)) {
            throw new Exception("This student is already assigned to this group");
        }
        this.studentsInGroup.add(student);
    }

    public void setGroupRepresentative (Student student) throws Exception {
        if (!studentsInGroup.contains(student)) {
            throw new Exception("Cant set this student as a representative because he is not assigned to this group");
        }
        if (groupRepresentatives.contains(student)) {
            throw new Exception("This student is already an representative");
        }
        this.groupRepresentatives.add(student);
    }
}
