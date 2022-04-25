package Composition;

import java.util.ArrayList;
import java.util.List;

public class Whole {
    private String wholeName;
    private List<Part> parts = new ArrayList<>();

    public Whole (String wholeName) {
        this.wholeName = wholeName;
    }

    public Part createPart (String partName) {
        Part part = new Part(partName);
        parts.add(part);

        return part;
    }

    @Override
    public String toString() {
        return wholeName;
    }

    public class Part {
        private String partName;

        public Part(String partName) {
            this.partName = partName;
        }

        public Whole getWhole() {
            return Whole.this;
        }

        @Override
        public String toString() {
            return "Part: " + partName;
        }
    }
}


