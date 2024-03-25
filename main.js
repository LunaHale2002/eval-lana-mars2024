const iconNext = document.querySelector(".icon-next");
const iconPrev = document.querySelector(".icon-prev");

let counter = 0;

function ChangeByTanya(srcNew) {
  const textImg = document.getElementById("img-tanya");
  const JohnMessage = document.querySelector(".testimonial-text");
  const JohnAuthor = document.querySelector(".testimonial-author");
  const JohnPosition = document.querySelector(".testimonial-position");
  JohnMessage.textContent = object.TanyaMessage;
  JohnAuthor.textContent = object.TanyaAuthor;
  JohnPosition.textContent = object.TanyaPosition;
};

const object = [
  {  
  JohnMessage: "Si vous souhaitez établir les meilleures bases possibles, je vous recommande de suivre ce cours. La profondeur dans laquelle les instructeurs vont est incroyable. Je me sens maintenant tellement confiant de me lancer en tant que développeur professionnel.",
  JohnAuthor: "John Tarkpor",
  JohnPosition: "Junior Front-end Developer",
  },
  {
  TanyaMessage: "La programmation m'intéressait depuis un certain temps mais je n'avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m'a permis d'obtenir le job de mes rêves.",
  TanyaAuthor: "Tanya Sinclar",
  TanyaPosition: "UX Engineer",
  },
];

iconNext.addEventListener("click", () => {
  ChangeByJohn(`public/images/image-john.jpg`)
});

iconPrev.addEventListener("click", () => {
  ChangeByTanya(`public/images/image-tanya.jpg`)
});