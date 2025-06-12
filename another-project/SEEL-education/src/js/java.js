// material ==============================================
const contentMaterial = [{
    tags: "Others",
    title: "Cooking"
  },
  {
    tags: "Language",
    title: "English language"
  },
  {
    tags: "Language",
    title: "Spanish language"
  },
  {
    tags: "General Studies",
    title: "Physics"
  },
  {
    tags: "General Studies",
    title: "Biology"
  },
  {
    tags: "Others",
    title: "Music"
  },
  {
    tags: "Tecnology",
    title: "Computers"
  },
  {
    tags: "General Studies",
    title: "Law"
  },
  {
    tags: "General Studies",
    title: "Economy"
  }
];

const contentmaterialINarea = document.getElementById("inarea");
const tagCounts = {};

contentMaterial.forEach(tago => {
  const card = document.createElement("div");
  card.classList.add("card-material");

  const tag = document.createElement("div");
  tag.classList.add("tag");

  const title = document.createElement("p");
  title.textContent = tago.title;

  if (tago.tags === "Language") {
    tag.style.backgroundColor = "#4A9BF9";
  } else if (tago.tags === "Tecnology") {
    tag.style.backgroundColor = "#FBC497";
  } else if (tago.tags === "General Studies") {
    tag.style.backgroundColor = "#F47363";
  } else {
    tag.style.backgroundColor = "#03BF97";
  }

  contentmaterialINarea.append(card);
  card.append(tag);
  card.append(title);

  tagCounts[tago.tags] = (tagCounts[tago.tags] || 0) + 1;
});

// Value Of Material ===============
const values = [{
    title: "Language"
  },
  {
    title: "Tecnology"
  },
  {
    title: "General Studies"
  },
  {
    title: "Others"
  }
]
values.forEach(val => {
  const inareaV = document.getElementById('inareaV')
  const cardval = document.createElement("div");
  cardval.classList.add("cardValue");

  const value = document.createElement('p')
  value.textContent = tagCounts[val.title] || 0;


  const titleval = document.createElement('p')
  titleval.textContent = val.title

  inareaV.append(cardval)
  cardval.append(value)
  cardval.append(titleval)

  if (val.title === "Language") {
    cardval.style.backgroundColor = "#4A9BF9";
  } else if (val.title === "Tecnology") {
    cardval.style.backgroundColor = "#FBC497";
  } else if (val.title === "General Studies") {
    cardval.style.backgroundColor = "#F47363";
  } else {
    cardval.style.backgroundColor = "#03BF97";
  }
})

// event ==============================================
const events = [{
    date: "10-12-2024",
    title: "Seminars with professional teachers",
    desc: "We are reopening the online seminar event via Google Meet with selected people, the event will be held on 10-12-2024 with the theme Learning Experiences with professionals for the future",
    img: '/another-project/SEEL-education/assets/img/host1.png'

  },
  {
    date: "9-10-2024",
    title: "Training Students Before Entering College",
    desc: "Of course we know that college is important, but around 40% of people in the world choose the wrong major and their preparation is reduced. We are creating a seminar for students who are still confused about studying, this seminar event will be held on 9-10-2024",
    img: '/another-project/SEEL-education/assets/img/host2.png'
  },
  {
    date: "10-12-2024",
    title: "How to be a good Artist or Music Producers",
    desc: "Becoming a successful artist or music producer requires a combination of talent, dedication, and strategic efforts. Here are some key tips to help you on your journey with join this session of webinar",
    img: '/another-project/SEEL-education/assets/img/host3.png'
  }
]
events.forEach(eve => {
  const eventIn = document.getElementById('eventIn')



  const card = document.createElement('div')
  card.classList.add('cardEvent')

  const events = document.createElement('div')
  events.classList.add('contentEvent')

  const date = document.createElement('div')
  date.classList.add('datearea')

  const imgStar = document.createElement('img')
  imgStar.src = '/another-project/SEEL-education/assets/img/star blue.png'

  const dateP = document.createElement('p')
  dateP.textContent = eve.date

  const descArea = document.createElement('div')
  descArea.classList.add('descEvent')

  const titleDesc = document.createElement('h1')
  titleDesc.textContent = eve.title

  const desc = document.createElement('p')
  desc.textContent = eve.desc

  const host = document.createElement('div')
  host.classList.add('imgHostEvent')

  const imgHost = document.createElement('img')
  imgHost.src = eve.img


  const btnArea = document.createElement('div')
  btnArea.classList.add('btnEventarea')

  const btnEvent = document.createElement('div')
  btnEvent.classList.add('btnEvent')

  const see = document.createElement('p')
  see.textContent = "See More"

  const imgArrow = document.createElement('img')
  imgArrow.src = '/another-project/SEEL-education/assets/img/next.png'


  eventIn.append(card)
  card.append(events)
  events.append(date)
  date.append(imgStar)
  date.append(dateP)

  events.append(descArea)
  descArea.append(titleDesc)
  descArea.append(desc)

  events.append(host)
  host.append(imgHost)
  card.append(btnArea)
  btnArea.append(btnEvent)
  btnEvent.append(see)
  btnEvent.append(imgArrow)


})

// Teacher ==============================================

const teacherone = [{
    img: "/another-project/SEEL-education/assets/img/Maria Vellmoon.png",
    name: "Maria Vellmoo",
    title: "Spanish Language"
  },
  {
    img: "/another-project/SEEL-education/assets/img/Steve Jobs.png",
    name: "Steve Jobs",
    title: "Computer"
  },
  {
    img: "/another-project/SEEL-education/assets/img/Chaa mae.png",
    name: "Chaa mae",
    title: "English Language"
  },
  {
    img: "/another-project/SEEL-education/assets/img/Jordan Teller Carter.png",
    name: "Jordan Teller Carter",
    title: "Music"
  },
  {
    img: "/another-project/SEEL-education/assets/img/Joshua Weissman.png",
    name: "Joshua Weissman",
    title: "Cooking"
  },
  {
    img: "/another-project/SEEL-education/assets/img/saul.png",
    name: "Saul GoodMan",
    title: "Law"
  },
  {
    img: "/another-project/SEEL-education/assets/img/Jordan Belfort.png",
    name: "Jordan Belfort",
    title: "Economy"
  },
  {
    img: "/another-project/SEEL-education/assets/img/Walter White.png",
    name: "Walter White",
    title: "Biology"
  }
];

teacherone.forEach(teacone => {
  const row = document.getElementById('teacherArea');
  // const row2 = document.getElementById('row2')

  const cardS = document.createElement('div');
  cardS.classList.add('teacherCard');



  const img = document.createElement('img');
  img.src = teacone.img;

  const copy = document.createElement('div');
  copy.classList.add('copy-teacher');

  const desc = document.createElement('div');
  desc.classList.add('teacher-desc');

  const name = document.createElement('h1');
  name.textContent = teacone.name;

  const title = document.createElement('p');
  title.textContent = teacone.title;

  row.appendChild(cardS);
  cardS.appendChild(img);
  cardS.appendChild(copy);
  copy.appendChild(desc);
  desc.appendChild(name);
  desc.appendChild(title);
});

                                // detail website btn
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popupOverlay = document.getElementById('popupOverlay');

openPopup.addEventListener('click', () => {
    popupOverlay.classList.remove('hidden');
    // Disable scroll saat popup muncul
    document.body.style.overflow = 'hidden';
});

closePopup.addEventListener('click', () => {
    popupOverlay.classList.add('hidden');
    // Enable scroll saat popup hilang
    document.body.style.overflow = '';
});
