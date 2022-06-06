package Constraints.Bag;

public class FilmActor {
    private Actor actor;
    private Film film;
    private double appearanceFee;

    public FilmActor(Actor actor, Film film, double appearanceFee) {
        this.actor = actor;
        this.film = film;
        this.appearanceFee = appearanceFee;
    }
}
