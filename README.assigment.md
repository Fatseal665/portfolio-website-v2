# portfolio-website-v2
A portfolio website built in react

# Screenshots explaining deployment in static web app (Azure)

1. Har skapat en resource group och ser till stt den är vald i början på min deploy.
![Screenshot 1](<src/assets/images/Screenshot 2025-10-02 191439.png>)

2. Har namngett min deploy till "portfolio-website-v2" och valt en hosting plan som free, då detta är ett personligt projekt och inte en kommersiell webbsida.
![Screenshot 2](<src/assets/images/Screenshot 2025-10-02 191517.png>)

3. Jag har valt GitHub som source för att GitHub Actions skall fungera felfritt. Nedanför det så har jag skrivit in mitt GitHub namn och namnet på det repository och branch som ska skickas upp till molnet. 
![Screenshot 3](<src/assets/images/Screenshot 2025-10-02 191545.png>)

4. Här ser vi vad för preset vår build har och vart projektet finns i repositoryt. I detta fall upptäcker Azure att jag använder React, men jag fick ändra app location från "/" till "." då projektet är i root-mappen. Output location behövde jag inte ändra då build är standard för React.
![Screenshot 4](<src/assets/images/Screenshot 2025-10-02 191611.png>)

5. Här väljer jag GitHub-alternativet för att Azure ska kunna hämta och deploya min kod till och från mitt repository.
![Screenshot 5](<src/assets/images/Screenshot 2025-10-02 191634.png>)

6. Här väljer jag den närmsta platsen som erbjuds.
![Screenshot 6](<src/assets/images/Screenshot 2025-10-02 191703.png>)

7. Här kan jag kontrollera mina val-
![Screenshot 7](<src/assets/images/Screenshot 2025-10-02 191836.png>)

8. Websidan är uppe, men inte riktigt. Först måste jag klistra in en token från Azure i en secret på GitHub.
![Screenshit 8](<src/assets/images/Screenshot 2025-10-02 191935.png>)

9. Kopierar min deployment token.
![Screenshot 9](<src/assets/images/Screenshot 2025-10-02 192206.png>)

10. Klistrar in min token från Azure i en secret som genererades av GitHub Actions.
![Screenshot 10](<src/assets/images/Screenshot 2025-10-02 192446.png>)

11. Projektets workflow i GitHub actions fungerade och nu är min webbsida uppe på molnet!!
![Screenshot 11](<src/assets/images/Screenshot 2025-10-02 193549.png>)
