import React from "react";
import FeatureSection from "./ui/FeatureSection";
import users from "../public/usersLibrary.jpg";
import read from "../public/readPage.png";
import library from "../public/library.png";
import napoleon from "../public/napoleon1.png";

const Features = () => {
  return (
    <div className="pb-20">
      <FeatureSection
        img={napoleon}
        title={"Reading Now. Your digital nightstand."}
        paragraph={
          "The Reading Now tab makes it easy to get to the right page in an instant, whether you’re immersed in a single story or bouncing between books. It’s also where you’ll find personalised recommendations based on what you’ve been reading."
        }
      />

      <FeatureSection
        img={read}
        title={"Your library, your way."}
        paragraph={
          "Organise your library any way you like. With collections, every one of your books is right where you want it. Create your own collections and get to them easily at any time. You can also revisit an old favourite you’ve already read in the Finished collection."
        }
      />
      <FeatureSection
        img={library}
        title={"So many books, so much in store."}
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
