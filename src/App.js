import { useState } from "react";
import "./styles.css";

export default function App() {
  const TedTalkDb = {
    Technology: [
      {
        title: "How diversity makes teams more innovative",
        description:
          "Are diverse companies really more innovative? Rocío Lorenzo and her team surveyed 171 companies to find out -- and the answer was a clear yes. In a talk that will help you build a better, more robust company, Lorenzo dives into the data and explains how your company can start producing fresher, more creative ideas by treating diversity as a competitive advantage.",
        url:
          "https://www.ted.com/talks/rocio_lorenzo_how_diversity_makes_teams_more_innovative?referrer=playlist-how_to_innovate_for_collaboration_and_success&autoplay=true",
        img:
          "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/40a24cd9-db46-4572-a5b3-4b06561991cb/RocioLorenzo_2017S-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640"
      },
      {
        title: "Rethink to stop cyberbullying",
        description:
          "Online bullying has real-world consequences, and young software engineer Trisha Prabhu saw a way to help. She invented a tool called ReThink that does one simple, elegant thing: it asks people, before they send a hurtful message, if they really want to say that. And",
        img:
          "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/54c0cf8f-32fd-4829-ac9a-ce7ba12a763f/TrishaPrabhu_2017I-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640",
        url:
          "https://www.ted.com/talks/trisha_prabhu_rethink_to_stop_cyberbullying?referrer=playlist-a_playlist_from_srk_to_you&autoplay=true"
      },
      {
        title: "The nerd's guide to learning everything online",
        description:
          "Some of us learn best in the classroom, and some of us ... well, we don't. But we still love to learn -- we just need to find the way that works for us. In this charming, personal talk, author John Green shares the community of learning that he found in online video.",
        img:
          "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/250fb6e06aeb6cbd9735f48e5ea148143fe6140b_2880x1620.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640",
        url:
          "https://www.ted.com/talks/john_green_the_nerd_s_guide_to_learning_everything_online?referrer=playlist-staying_in_geek_out&autoplay=true"
      },
      {
        title: "Tracking our online trackers",
        img:
          "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/dc4468c73fe7f64cd6e6f6691ca8e7db16378009_800x600.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640",
        description:
          "As you surf the Web, information is being collected about you. Web tracking is not 100% evil -- personal data can make your browsing more efficient; cookies can help your favorite websites stay in business. But, says Gary Kovacs, it's your right to know what data is being collected about you. He unveils a Firefox add-",
        url:
          "https://www.ted.com/talks/gary_kovacs_tracking_our_online_trackers?referrer=playlist-what_your_data_reveals_about_y&autoplay=true"
      }
    ],
    Entertainment: [
      {
        title: "Hidden music rituals around the world",
        description: `Vincent Moon travels the world with a backpack and a camera, filming astonishing music and ritual the world rarely sees -- from a powerful Sufi ritual in Chechnya to an ayahuasca journey in Peru. He hopes his films can help people see their own cultures in a new way, to make young people say: "Whoa, my grandfather is as cool as Beyoncé." Followed by a mesmerizing performance by jazz icon Naná Vasconcelos.`,
        img:
          "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/ccdc49a1-8eb5-4e5e-b7cc-2b902811f06e/VincentMoon_2014G-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640",
        url:
          "https://www.ted.com/talks/vincent_moon_and_nana_vasconcelos_hidden_music_rituals_around_the_world?referrer=playlist-music_around_the_world&autoplay=true"
      },
      {
        title: "A musical escape into a world of light and color",
        description: `A genre unto herself, Kaki King fuses the ancient tradition of working with one's hands with digital technology, projection-mapping imagery onto her guitar in her groundbreaking multimedia work "The Neck Is a Bridge to the Body." Using her guitar's neck like a keyboard, she plays an intricate melody as she takes the audience on a musical journey of light and sound. She calls it "guitar as paintbrush."`,
        img:
          "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/f1bfe36c-741c-45b8-b444-9bff8fe3785c/KakiKing_2015W-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640",
        url:
          "https://www.ted.com/talks/kaki_king_a_musical_escape_into_a_world_of_light_and_color?referrer=playlist-music_around_the_world&autoplay=true"
      },
      {
        title: "Between music and medicine",
        description: `When Robert Gupta was caught between a career as a doctor and as a violinist, he realized his place was in the middle, with a bow in his hand and a sense of social justice in his heart. He tells a moving story of society's marginalized and the power of music therapy, which can succeed where conventional medicine fails.`,
        img:
          "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/1f82dd4305f7f4f0ef595d8ac201b367c490b6a5_1600x1200.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640",
        url:
          "https://www.ted.com/talks/robert_gupta_between_music_and_medicine?referrer=playlist-how_music_affects_us&autoplay=true"
      }
    ],
    Business: [
      {
        title: "How to build a business that lasts 100 years",
        description: `If you want to build a business that lasts, there may be no better place to look for inspiration than your own immune system. Join strategist Martin Reeves as he shares startling statistics about shrinking corporate life spans and explains how executives can apply six principles from living organisms to build resilient businesses that flourish in the face of change.`,
        img:
          "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/8e4deb30-a0f4-4816-9288-3ed186c69b89/MartinReeves_2016S-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640",
        url:
          "https://www.ted.com/talks/martin_reeves_how_to_build_a_business_that_lasts_100_years?referrer=playlist-an_essential_guide_to_start_up_success&autoplay=true"
      },
      {
        title: "Try something new for 30 days",
        description: `Is there something you've always meant to do, wanted to do, but just ... haven't? Matt Cutts suggests: Try it for 30 days. This short, lighthearted talk offers a neat way to think about setting and achieving goals.`,
        img:
          "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/424e6719-7627-40bc-ae35-1ed70a66ed2a/MattCutts_2011U-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640",
        url:
          "https://www.ted.com/talks/matt_cutts_try_something_new_for_30_days?referrer=playlist-10_guiding_principles_for_leaders&autoplay=true"
      },
      {
        title: "How to turn a group of strangers into a team",
        description: `Business school professor Amy Edmondson studies "teaming," where people come together quickly (and often temporarily) to solve new, urgent or unusual problems. Recalling stories of teamwork on the fly, such as the incredible rescue of 33 miners trapped half a mile underground in Chile in 2010, Edmondson shares the elements needed to turn a group of strangers into a quick-thinking team that can nimbly respond to challenges.`,
        img:
          "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/58997892-ff1f-4993-b47a-d6ef5c703047/AmyEdmondson_2017S-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=640",
        url:
          "https://www.ted.com/talks/amy_edmondson_how_to_turn_a_group_of_strangers_into_a_team?referrer=playlist-how_to_boost_your_team_s_productivity&autoplay=true"
      }
    ]
  };
  const categories = Object.keys(TedTalkDb);
  const [category, setCategory] = useState("Technology");
  function categoryHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginBottom: "0px"
        }}
      >
        <svg
          viewBox="0 0 68 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 lg:mr-3"
          style={{ width: "50px" }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.419 0v6.151h-6.763V24h-7.44V6.151H.453V0H21.42zm21.484 0v6.141l-12.918.01v2.946h12.918v5.73l-12.918-.009v3.03h12.918V24H22.546V0h20.357zm13.446 0c8.048 0 10.889 5.916 10.889 11.966C67.237 19.328 63.314 24 54.894 24H44.142V0h12.207zm-2.4 6.151H51.58V17.85h2.908c4.633 0 5.31-3.731 5.31-5.983 0-1.513-.474-5.715-5.85-5.715z"
            fill="#EC1015"
          ></path>
        </svg>
        &nbsp;{" "}
        <span style={{ fontSize: "1rem", color: "#b7c1d3" }}>
          Ideas worth spreading
        </span>
      </h1>
      <p style={{ marginTop: "0px" }}>
        Checkout my favorite ted talks. Select a genre to get started
      </p>
      <div>
        {categories.map((categoryLabel, index) => (
          <button
            key={index}
            onClick={() => categoryHandler(categoryLabel)}
            style={{
              padding: "0.4rem 1rem",
              cursor: "pointer",
              border: "1px solid",
              background: "#E5E7EB",
              borderRadius: "0.4rem",
              margin: "0.3rem 0.4rem",
              borderColor: `${
                category === categoryLabel ? "#a21caf" : "#000000"
              }`
            }}
          >
            {categoryLabel}
          </button>
        ))}
      </div>
        <hr style={{borderStyle: "dashed", color: "#a21caf", borderTop:"1px"}}/>
        <div>
          <ul
          style={{
            padding: "0"
          }}>
            {
              TedTalkDb[category].map(({title, description, url, img}, index) => (
                <li key={index}
                  style={{
                    border: "1px solid #d1d5db",
                    listStyle: "none",
                    borderRadius: "0.4rem",
                    padding: "0.5rem",
                    margin: "0.5rem 0rem"
              }}>
                  <a href={url}
                    target="_blank"
                    rel="no-referrer">
                    <div>
                        <img src={img}
                          style={{
                            width:"80px",
                            height: "50px",
                            objectFit: "contain",
                            borderRadius: "0.5rem"
                          }}
                          loading="lazy"
                          alt={title}
                        />
                        <h4>{title}</h4>
                        <p title={description}>
                          {`${description.substring(0,160)}...`}
                        </p>
                    </div>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  );
}
