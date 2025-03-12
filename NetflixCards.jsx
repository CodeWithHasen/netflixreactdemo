export default function NetflixCards() {
  const cardData = [
    { img: "/images/nf-card1.PNG", title: "Enjoy on your TV", description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." },
    { img: "/images/nf-card2.PNG", title: "Download your shows to watch offline", description: "Save your favourites easily and always have something to watch." },
    { img: "/images/nf-card3.PNG", title: "Watch everywhere", description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV." },
    { img: "/images/nf-card4.PNG", title: "Create profiles for kids", description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership." }
  ];

  return (
    <div className="cards-container position-relative">
      <h3 className="text-start text-white w-100 ms-3 mb-3">More reasons to join</h3>
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        {cardData.map((card, index) => (
          <div key={index} className="card bg-dark text-white p-3 d-flex flex-column justify-content-between" style={{ width: "275px", height: "225px" }}>
            <h5 className="card-title text-center">{card.title}</h5>
            <p className="card-text text-center flex-grow-1">{card.description}</p>            <div className="text-end">
              <img src={card.img} className="img-fluid" alt={card.title} style={{ width: "50px", height: "50px" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
