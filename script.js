function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

openNav();

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

closeNav();

const Data = [
  {
    speakerName1: 'Kinyera Amos',
    description1: 'Kinyera Amos is an English actor',
    paragraph1: 'probably best known for his role as the archetypal Gestapo Officer Herr Otto Flick in the BBC hit sitcom series',
    image1: 'assets/images/kin.jpg',
    speakerName2: 'Dr. Eddie Mukooyo',
    description2: 'Board Chair',
    paragraph2: 'Content Coming soon',
    image2: 'assets/images/Dr.-Amadou-Alpha-Sall.jpg',
  },
  {
    speakerName1: 'Sudhir Ruparelia',
    description1: 'Sudhir Ruparelia is a businessman and entrepreneur in Uganda.',
    paragraph1: 'He is the Chairman and majority shareholder in the companies of the Ruparelia Group. His investments are mainly in the areas of banking, insurance, education, broadcasting, real estate, floriculture, hotels and resorts.',
    image1: 'assets/images/Dr.-Yvonne-Mburu.jpg',
    speakerName2: 'Prof. Rhoda Wanyenze',
    description2: 'Board Member',
    paragraph2: 'Dr Rhoda Wanyenze MBChB, MPH, PhD, is a Professor and Dean at Makerere University School of Public Health (MakSPH).',
    image2: 'assets/images/Dr.-Vera-Songwe..jpg',
  },
  {
    speakerName1: 'Salim S. Abdool Karim',
    description1: 'entre for the AIDS Programme of Research in South Africa, South Africa',
    paragraph1: 'He is the Chairman and majority shareholder in the companies of the Ruparelia Group. His investments are mainly in the areas of banking, insurance, education, broadcasting, real estate, floriculture, hotels and resorts.',
    image1: 'assets/images/Dr.-Ernest-Darkoh-768x1152.jpg',
    speakerName2: 'Dr. Nelson Musoba',
    description2: 'Director General UAC ,& Secretary to the Board',
    paragraph2: 'Dr. Musoba is the Director General of Uganda AIDS Commission. He is a medical doctor with more than 20 years of clinical and public health experience.',
    image2: 'assets/images/Professor-Tom-Kariuki-1532x1536.jpg',

  },
];

const speakerLists = document.getElementById('speaker-lists');

speakerLists.innerHTML = '';
Data.map((speaker) => {
  speakerLists.innerHTML = `${speakerLists.innerHTML}
<div class="main-section-2">
    <div class="speaker-image">
        <div class="sub-heading">
            <h4>${speaker.speakerName1}</h4>
            <h6>${speaker.description1}</h6>
            <p>${speaker.paragraph1}</p>
        </div>
        <img src="${speaker.image1}" class="my-image" alt="">
    </div>
    <div class="speaker-image">
        <div class="sub-heading">
            <h4>${speaker.speakerName2}</h4>
            <h6>${speaker.description2}</h6>
            <p>${speaker.paragraph2}</p>
        </div>
        <img src="${speaker.image2}" class="my-image" alt="">
    </div>
</div>`;
  return (speaker);
});
