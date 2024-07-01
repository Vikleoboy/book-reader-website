import React from "react";
import FeatureSection from "./ui/FeatureSection";
import users from "../public/usersLibrary.jpg";
import read from "../public/readPage.png";
import library from "../public/library.png";
import napoleon from "../public/napoleon1.png";

const Features = () => {
  return (
    <div className="pb-20" id="features">
      <FeatureSection
        img={napoleon}
        title={"Your digital library, curated just for you."}
        paragraph={
          "Customize and organize your digital library effortlessly with Axiom Books. Utilize collections to categorize your books exactly how you prefer—whether by genre, mood, or favorites. Create personalized collections for quick access whenever you desire, ensuring every book, including cherished favorites in your Finished collection, is conveniently at your fingertips."
        }
      />

      <FeatureSection
        img={library}
        title={"So many books, so many worlds to uncover."}
        paragraph={
          "Explore a myriad of literary realms as you swipe through captivating book covers, delve into intriguing descriptions, and consider insightful reviews. Easily curate your next reading adventure by adding your chosen books to your Want to Read list, ensuring each discovery leads to a new and exciting journey through the written word."
        }
      />
      <FeatureSection
        img={read}
        title={"Discover and Dive In: Your Gateway to a World of Books"}
        paragraph={"Swipe from book to book to see which book covers, descriptions and reviews catch your eye, then add the books you’re interested in to your Want to Read list."}
      />
      <FeatureSection
        img={users}
        title={"Search the books you own. Browse millions more."}
        paragraph={
          "Now you can find just the book you’re looking for easier and faster than ever. Search through the Book Store and your personal library at the same time. You can return to your recent searches or tap a search suggestion to discover something entirely new."
        }
      />
    </div>
  );
};

export default Features;
