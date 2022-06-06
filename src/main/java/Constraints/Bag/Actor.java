package Constraints.Bag;

import java.util.ArrayList;
import java.util.List;

public class Actor {
    private String firstName;
    private String secondName;
    private List<FilmActor> films = new ArrayList<>();

    public Actor (String firstName, String secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }

    public void addFilm (FilmActor film) {
        this.films.add(film);
    }
}
