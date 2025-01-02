// import React from 'react'

import SingleJobRightSide from "./SingleJobRightSide";

const SingleJobContent = () => {
  return (
    <div className="md:flex gap-12 border-b p-4 mt-10">
      <div className="w-[90%] md:w-[50%] top-56 ml-5 md:ml-24 mb-16 flex flex-col gap-5  ">
        <h1 className="font-bold text-l -mt-40">Job Description</h1>
        <p className="text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora
          odio ea fugit et repellat veniam iure temporibus consequatur
        </p>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel rem
          odit, optio nam inventore ea dolor eaque dignissimos cum culpa ab,
          exercitationem reprehenderit. Laboriosam, ad dolores. Magnam animi
          aspernatur quisquam veritatis exercitationem repellendus nam ad.
          Fugit, voluptatibus laborum. Non, voluptatum.
        </span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel rem
          odit, optio nam inventore ea dolor eaque dignissimos cum culpa ab,
          exercitationem reprehenderit. Laboriosam, ad dolores. Magnam animi
          aspernatur quisquam veritatis exercitationem repellendus nam ad.
          Fugit, voluptatibus laborum. Non, voluptatum.
        </span>
        <h1 className="font-bold text-l">Requirements</h1>
        <div className="text-neutral-600 ml-5 ">
          <ul className="list-disc ">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              tempora odio ea fugit et repellat veniam iure temporibus
              consequatur
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              tempora odio ea lorem lorem
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              tempora odio ea fugit et repellat{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              tempora odio ea fugit et repellat veniam{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              tempora odio ea fugit et repellat veniam iure{" "}
            </li>
          </ul>
        </div>
        <h1 className="font-bold text-l">Desirable:</h1>
        <div className="text-neutral-600 ml-5">
          <ul className="list-disc ">
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              mollitia commodi fugit, minus culpa dolorum.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, delectus.
            </li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <h1 className="font-bold text-l">Benefits</h1>
        <div className="text-neutral-600 ml-5">
          <ul className="list-disc ">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quasi. Lorem ipsum dolor sit amet.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quasi.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quasi. Lorem ipsum dolor sit.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quasi.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quasi.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quasi. Lorem, ipsum.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quasi.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quasi. Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quasi.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <SingleJobRightSide />
      </div>
    </div>
  );
};

export default SingleJobContent;
