package Constraints.Bag;

import java.util.ArrayList;
import java.util.List;

public class Film {
    private String title;
    private List<FilmActor> actors = new ArrayList<>();

    public Film (String title) {
        this.title = title;
    }

    public void addActor (FilmActor actor) {
        this.actors.add(actor);
    }
}
