import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int menuFlag = 1;
        Scanner sc = new Scanner(System.in);

        while (menuFlag != 0) {
            System.out.println(generateMainMenu());
            System.out.print("= ");
            menuFlag = sc.nextInt();
            menuLogic(menuFlag);
        }
    }

    private static String generateMainMenu() {
        StringBuilder sb = new StringBuilder();
        sb.append("=====================================\n");
        sb.append("       Welcome to the clinic         \n");
        sb.append("=====================================\n");
        sb.append(" 1. Save Changes to file             \n");
        sb.append(" 2. Create new Account               \n");
        sb.append(" 3. Display all accounts             \n");
        sb.append(" 0. Exit                             \n");

        return sb.toString();
    }

    private static void menuLogic (int menuFlag) {
        switch (menuFlag) {
            case 1 -> {

            }
            case 2 -> {
                createNewAccount();
            }

            case 3 -> {
                Account.accounts.forEach(account -> {
                    System.out.println("= " + account.toString());
                });
                System.out.println();
                System.out.println(" Press any to continue...");
                new Scanner(System.in).next();
            }

            case 0 -> {
                System.out.println("= Exiting... ");
            }
        }
    }

    private static void createNewAccount() {
        Scanner sc = new Scanner(System.in);

        System.out.println("=====================================");
        System.out.println("=        PERSONAL INFORMATION        ");

        String firstName;
        String secondsName;
        String lastName;
        String pesel;
        String email;

        System.out.print("= First name: ");
        firstName = sc.next();

        System.out.print("= Second name (E for empty): ");
        secondsName = sc.next();

        System.out.print("= Last name: ");
        lastName = sc.next();

        System.out.print("= Pesel: ");
        pesel = sc.next();

        System.out.print("= Email: ");
        email = sc.next();

        System.out.println("=====================================");
        System.out.println("=              ADDRESS               ");

        String streetName;
        int houseNumber;
        String postalCode;
        String cityName;

        System.out.print("= Street Name: ");
        streetName = sc.next();

        System.out.print("= House Number: ");
        houseNumber = sc.nextInt();

        System.out.print("= Postal Code: ");
        postalCode = sc.next();

        System.out.print("= City Name: ");
        cityName = sc.next();

        Address address = new Address(streetName,houseNumber,postalCode,cityName);

        System.out.println("=====================================");

        System.out.println("= Do you want to create account for Doctor (D) or Patient (P)?");
        System.out.print("= ");

        Person person;

        switch (sc.next()) {
            case "D" -> {
                if (secondsName.equals("E")) {
                    person = new Doctor(firstName,lastName,pesel,email,address);
                } else {
                    person = new Doctor(firstName,secondsName,lastName,pesel,email,address);
                }
            }

            case "P" -> {
                if (secondsName.equals("E")) {
                    person = new Person(firstName,lastName,pesel,email,address);
                } else {
                    person = new Person(firstName,secondsName,lastName,pesel,email,address);
                }
            }

            default -> {
                System.out.println("= Wrong input. Exiting returning to main menu... ");
                return;
            }
        }

        System.out.println("=====================================");
        System.out.println("=             LANGUAGE             ");

        System.out.println("= List of available languages: ");
        for (int i = 0; i < Language.acceptedLanguageCodes.size(); i++) {
            System.out.println("= " + i + ". " + Language.acceptedLanguageCodes.get(i));
        }

        System.out.print("= Choose your main language: ");
        person.addLanguage(sc.nextInt());

        Account.accounts.add(new Account(person));

        System.out.println("= Success!");
        System.out.println();
    }
}

