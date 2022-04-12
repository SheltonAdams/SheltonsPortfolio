import React from "react";

function Reviews() {
  return (
    <div className="award-container d-flex align-items-center flex-wrap justify-content-between">
      <div className="award-item">
        <ReviewItem
          year="2020"
          title="Brad Bodoh "
          text="-
Shelton was fantastic helping my family find our new home from a distance. We needed to relocate quickly due to a work relocation from Wyoming to the Southern Tier. He was great to work with and represented us well from a distance. He was extremely responsive and helpful. He pulled for us every step of the way. I have no problem recommending him."
        />
      </div>
      <div className="award-item">
        <ReviewItem
          year="2020"
          title="Missy Gee "
          text="-
          during the peak of covid Shelton went above and beyond to sell my house. The whole process was smooth and I got an offer in 3 months. Would highly recommend him to anyone buying or selling!"
        />
      </div>
      <div className="award-item">
        <ReviewItem
          year="2020"
          title="Nate Adams "
          text="-
          During Covid-19 Shelton helped us find a house right for my family and I. The process was easy and quick, Shelton was knowledgeable and professional. All in all, I would recommend Shelton if you are in the market to buy or sell your home. The process is taken seriously and efficiently.
          Thank you Shelton!"
        />
      </div>
      <div className="award-item">
        <ReviewItem
          year="2020"
          title="Michael Ryckman "
          text="-
          Shelton helped the process of buying a new home so easy. His attitude and willingness to help at all times of the day was crucial in us closing on our house in a very short time. His professionalism with other realtors shows that he is the right guy to represent future buyers in the area. Thanks Shelton!
"
        />
      </div>
    </div>
  );
}

const ReviewItem = ({ year, title, text }) => {
  return (
    <div className="single-award">
      <div className="award-year">{year}</div>
      <h6 className="award-title">
        {title}
        <span className="award-text">{text}</span>
      </h6>
    </div>
  );
};
export default Reviews;
