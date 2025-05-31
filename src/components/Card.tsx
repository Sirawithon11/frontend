import React from "react";

export default function Card() {
  return (
    <section className="bg-gray-100 py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SingleCard
            image="https://cdn.tailgrids.com/assets/images/application/cards/card-01/image-01.jpg"
            cardTitle="50+ Best creative website themes & templates"
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus."
            buttonText="View Details"
            titleHref="/#"
            btnHref="/#"
          />
          <SingleCard
            image="https://cdn.tailgrids.com/assets/images/core-components/cards/image-01.jpg"
            cardTitle="Creative Card Component designs graphic elements"
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus."
            buttonText="View Details"
            titleHref="/#"
            btnHref="/#"
          />
          <SingleCard
            image="https://cdn.tailgrids.com/assets/images/core-components/cards/image-01.jpg"
            cardTitle="The ultimate UX and UI guide to card design"
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus."
            buttonText="View Details"
            titleHref="/#"
            btnHref="/#"
          />
        </div>
      </div>
    </section>
  );
}

type SingleCardProps = {
  image: string;
  cardTitle: string;
  cardDescription: string;
  buttonText?: string;
  titleHref?: string;
  btnHref?: string;
};

const SingleCard = ({
  image,
  cardTitle,
  cardDescription,
  buttonText,
  titleHref = "/#",
  btnHref = "/#",
}: SingleCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-2xl">
      <img src={image} alt={cardTitle} className="w-full h-52 object-cover" />
      <div className="p-8 text-center">
        <h3>
          <a
            href={titleHref}
            className="mb-4 block text-xl font-bold text-gray-900 hover:text-blue-600 transition"
          >
            {cardTitle}
          </a>
        </h3>
        <p className="mb-7 text-base text-gray-600">{cardDescription}</p>
        {buttonText && (
          <a
            href={btnHref}
            className="inline-block rounded-full border border-gray-300 px-7 py-2 text-base font-medium text-gray-700 transition hover:bg-blue-600 hover:text-white"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};
