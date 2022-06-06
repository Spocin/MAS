package Constraints;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

public class Group {
    private int groupNumber;
    private Set<Student> groupRepresentatives;
    private List<Student> studentsInGroupOrderedByGPA = new ArrayList<>() {
        @Override
        public boolean add(Student student) {
            super.add(student);
            Collections.sort(studentsInGroupOrderedByGPA);
            return true;
        }
    };

    public Group (int groupNumber) {
        this.groupNumber = groupNumber;
    }

    public void addStudentToGroup (Student student) throws Exception {
        if (studentsInGroupOrderedByGPA.contains(student)) {
            throw new Exception("This student is already assigned to this group");
        }
        studentsInGroupOrderedByGPA.add(student);
    }

    public void setGroupRepresentative (Student student) throws Exception {
        if (!studentsInGroupOrderedByGPA.contains(student)) {
            throw new Exception("Cant set this student as a representative because he is not assigned to this group");
        }
        if (groupRepresentatives.contains(student)) {
            throw new Exception("This student is already an representative");
        }
        this.groupRepresentatives.add(student);
    }
}
