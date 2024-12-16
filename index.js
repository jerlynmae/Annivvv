// Function to display the main content
function showContent() {
    document.getElementById('intro').style.display = 'none';

    const content = document.createElement('div');
    content.id = 'content';
    content.className = 'container';

    content.innerHTML = `
        <div class="heart"></div>
        <h1 class="message">Happy Anniversary Shonget 😠 😡 😤!</h1>
        <div class="pictures">
            <img src="pic2.jpg" alt="Picture 1" class="clickable-image" onclick="openLightbox('pic2.jpg')">
            <img src="pic1.jpg" alt="Picture 2" class="clickable-image" onclick="openLightbox('pic1.jpg')">
        </div>
        <div id="lightbox" class="lightbox" onclick="closeLightbox()">
            <img id="lightbox-image" src="" alt="Zoomed Image">
        </div>
        <div class="flowers"></div>
        <div class="button_here">
            <button class="bubble-button" onclick="showMessage()">
                <i class='bx bx-right-arrow-alt'></i> DAHIL BIDA-BIDA KA PINDUTIN MO 'TO
            </button>
        </div>
    `;

    document.body.appendChild(content);

    growFlowers();
}

// Function to display the short message on the next page
function showMessage() {
    // Remove the current content
    const content = document.getElementById('content');
    if (content) {
        content.remove();
    }

    // Create the new content for the next page
    const nextPage = document.createElement('div');
    nextPage.id = 'nextPage';
    nextPage.className = 'next-page';

    nextPage.innerHTML = `
        <div class="second_page">
            <h1 class="short-message">Surprise Message for You 🎉❤️</h1>
             <div class="scrollable-content">
            <p> HELLO PO KUMAG. Una sa lahat dito na ako mag LSM. (SANA DI MO PININDOT YUNG NO :)). Lalagay ko LSM na maikli HAHAHA
            Una nagpapasalamat ako kay Lord kase binigyan niya ako ng sakit sa ulo at ikaw yun. Palagi kang sakit ng ulo sakin, palagi
            kang nag papagawa ng activity mo hayst, sumasakit ulo ko sa'yo palagi. Pero mahal kita! Hindi magbabago yun, miski ano pa
            gawin mong katarantaduhan. Mahal kita po HAHAHA. Wala kang effort niyan ng ganito sure. Pero okay lang sana po ay miski isang picture
            mo lang ngayong pasko ay ayos na po sa akin. Hindi ako maghahanap ng kung ano-anong materyal kase alam ko din na nahihirapan ka 
            sa sitwasyon ng buhay mo ngayon. Pasensya ka na ha kase may nasasabi akong hindi maganda sa'yo pero hindi ko minimean yun
            gusto ko lang ilabas sama ng loob ko sa'yo kase kahirap kapag may tinatagong sama ng loob. PAALALA KO LANG WAG NA PO MATIGAS ANG ULO
            Kapag sinabihan ka na ng isang beses ay sumunod ka na HINDI YUNG MAKAILANG SABI NA DI KA PA SUMUSUNOD. Kumain ka sa tama din okay lang
            miski di naman tamang oras kase ganon din naman ako di ako kumakain sa tamang oras pero kumakain pa din ako ng kanin (totoong pagkain be ha hindi noodles)
            2023 naalala mo sabi magpapataba be 2024 na ngayon anuena HAHAHAHA walang nagbabago sa katawan natin be, galaw-galaw oh HAHAHAHA
            Akala nga ni ermat motchi maskulado ka kase Criminology Student ka di ko na sinabing nag shift ka kase sabi mo mag Pupulis ka naman miski nag shift ka
            pero be tatanggapin ka ba sa pulis ganyan ka kaarte mo sa pagkain hayst. Mag duduty ka ng walang laman tyan kase ayaw ng ulam ahuhu
            Siayaka sa sobrang tigas ng ulo mo? lahat di mooo sinusunod. ako, si ate mo, si kuya mo si ermat mo bago-bago tayo be. Tulungan natin sarili natin
            hindi lang ako hindi lang ikaw. TAYOOO okay po? Okay na yan basta wag ka matigas ang ulo kase MABABATUKAN KITAA!!. ILOVEYOUUU MUAHH<br> <br>


            SO AYUN MEMORABLE NA!! HAHAHAHAHA
        </p>
        </div>
        </div>
    `;

    document.body.appendChild(nextPage);
}

// Function to generate growing flowers
function growFlowers() {
    const flowersContainer = document.querySelector('.flowers');
    for (let i = 0; i < 10; i++) { // Create 10 flowers
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        flower.style.animationDelay = i * 0.3 + 's'; // Staggered growth animation
        flowersContainer.appendChild(flower);
    }
}

// Function to open the lightbox with the selected image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc; // Set the image source to the clicked image's source
    lightbox.style.display = 'flex'; // Display the lightbox
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}

// Event listeners for the "Yes" and "No" buttons
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

if (yesButton && noButton) {
    yesButton.addEventListener('click', showContent);
    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('click', moveButton);
}

// Function to randomly move the "No" button
function moveButton() {
    const container = document.querySelector('.container');
    if (!container) return; // Guard clause for missing container

    const containerRect = container.getBoundingClientRect();
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const randomX = Math.random() * (containerRect.width - buttonWidth);
    const randomY = Math.random() * (containerRect.height - buttonHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}
