import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        if (fileExists("Accounts.txt")) {
            loadAccounts();
        }

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

    private static void menuLogic (int menuFlag) throws IOException {
        switch (menuFlag) {
            case 1 -> {
                saveAccounts();
            }
            case 2 -> {
                createNewAccount();
            }

            case 3 -> {
                displayAllAccounts();
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

    private static void displayAllAccounts() {
        if (Account.accounts.isEmpty()) {
            System.out.println("=====================================");
            System.out.println("        No account to display        ");
        } else {
            Account.accounts.forEach(account -> {
                System.out.println("= " + account.toString());
            });
        }

        System.out.println();
        System.out.print(" Enter anything to continue... ");
        new Scanner(System.in).next();
    }

    private static void saveAccounts() throws IOException {
        FileOutputStream fos = new FileOutputStream("Accounts.txt");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(Account.accounts);
        oos.flush();
        oos.close();
        System.out.println("Account saved");
    }

    private static void loadAccounts () throws IOException, ClassNotFoundException {
        FileInputStream fis = new FileInputStream("Accounts.txt");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Account.accounts = (ArrayList<Account>) ois.readObject();
        ois.close();
        System.out.println("Account loaded");
    }

    private static boolean fileExists (String path) {
        return new File(path).exists();
    }
}

