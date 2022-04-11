module com.example.mas {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.mas to javafx.fxml;
    exports com.example.mas;
}