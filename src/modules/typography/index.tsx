const Typography = () => {
  return (
    <div className="bg-white rounded-xl p-[1.5%]">
      <div className="text-[1.5vw] font-bold">Paper Table Heading</div>
      <div className="text-[0.75vw] text-primary-300">
        Created Using Montserrat Font Family
      </div>
      <div className="mt-[2vw]">
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Header 1
          </span>
          <span className="flex-1 text-[3.5vw]">
            The Life of Paper Dashboard
          </span>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Header 2
          </span>
          <span className="flex-1 text-[2.75vw]">
            The Life of Paper Dashboard
          </span>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Header 3
          </span>
          <span className="flex-1 text-[2.25vw]">
            The Life of Paper Dashboard
          </span>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Header 4 py-[0.5vw]
          </span>
          <span className="flex-1 text-[1.75vw]">
            The Life of Paper Dashboard
          </span>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Header 5
          </span>
          <span className="flex-1 text-[1.6vw]">
            The Life of Paper Dashboard
          </span>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Header 6
          </span>
          <span className="flex-1 text-[1vw] font-bold">
            The Life of Paper Dashboard
          </span>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Paragraph
          </span>
          <p className="flex-1 text-[1.1vw]">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Quote
          </span>
          <div className="flex-1 text-[1.15vw] border border-theme-blue p-[1.5vw]">
            <p className="text-theme-blue mb-[2vw]">
              "I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at."
            </p>
            <span className="text-theme-blue">- NOAA</span>
          </div>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Muted Text
          </span>
          <p className="flex-1 text-[1vw] text-gray-400">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </p>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Primary Text
          </span>
          <p className="flex-1 text-[1vw] text-blue-300">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </p>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Info Text
          </span>
          <p className="flex-1 text-[1vw] text-blue-400">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </p>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Success Text
          </span>
          <p className="flex-1 text-[1vw] text-green-400">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </p>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Warning Text
          </span>
          <p className="flex-1 text-[1vw] text-orange-400">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </p>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Danger Text
          </span>
          <p className="flex-1 text-[1vw] text-red-400">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </p>
        </div>
        <div className="flex items-end mb-[0.5vw]">
          <span className="text-[1vw] text-primary-300 w-1/4 py-[0.5vw]">
            Small Tag
          </span>
          <div className="flex-1 text-[1vw]">
            <span className="text-[2.75vw]">Header with small subtitle</span>{" "}
            <br />{" "}
            <span className="text-[2.25vw]">
              Use "small" tag for the headers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
