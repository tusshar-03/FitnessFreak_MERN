import React from "react";
const Menucard = ({ Cards }) => {
  return (
    <>
      <div className="mainContainer" data-aos="">
        {Cards.map((curElem) => {
          // Destructuring done.
          const { id, name, image, description } = curElem;
          // console.log(image);
          return (
            <>
              <div className="card" key={id}>
                <div className="imgbox">
                  <img src={image} />
                </div>

                <div className="content">
                  <h2 className="firstLetter">{name}</h2>
                  <p className="firstLetter">
                    {description}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Menucard;
