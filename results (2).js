const formData = JSON.parse(localStorage.getItem("formData"));
console.log(formData);

const getPersonType = (dob) => {
  let date = dob.split("-");
  date.shift();
  date = date.join("-");
  if (date >= "03-21" && date <= "04-20") {
    return "aries";
  } else if (date >= "04-21" && date <= "05-21") {
    return "taurus";
  } else if (date >= "05-22" && date <= "06-21") {
    return "gemini";
  } else if (date >= "06-22" && date <= "07-22") {
    return "cancer";
  } else if (date >= "07-23" && date <= "08-21") {
    return "leo";
  } else if (date >= "08-22" && date <= "09-23") {
    return "virgo";
  } else if (date >= "09-24" && date <= "10-23") {
    return "libra";
  } else if (date >= "10-24" && date <= "11-22") {
    return "scorpio";
  } else if (date >= "11-23" && date <= "12-22") {
    return "sagittarius ";
  } else if (date >= "01-21" && date <= "02-19") {
    return "aquarius";
  } else if (date >= "02-20" && date <= "03-20") {
    return "pisces ";
  } else {
    return "capricorn ";
  }
};

const typeImagesMap = {
  aries: "https://cdn-icons-png.flaticon.com/512/1885/1885453.png",
  taurus: "https://cdn-icons-png.flaticon.com/512/1885/1885453.png",
  gemini: "https://cdn-icons-png.flaticon.com/512/1885/1885453.png",
  cancer: "https://cdn-icons-png.flaticon.com/512/1885/1885453.png",
  leo: "https://cdn-icons-png.flaticon.com/512/1885/1885453.png",
  libra: "https://cdn-icons-png.flaticon.com/512/1885/1885453.png",
  scorpio: "https://cdn-icons-png.flaticon.com/512/1885/1885453.png",
  virgo: "https://cdn-icons-png.flaticon.com/512/3184/3184944.png",
  sagittarius: "https://cdn-icons-png.flaticon.com/512/3184/3184944.png",
  aquarius: "https://cdn-icons-png.flaticon.com/512/3184/3184944.png",
  pisces: "https://cdn-icons-png.flaticon.com/512/3184/3184944.png",
  capricorn: "https://cdn-icons-png.flaticon.com/512/3184/3184944.png",
};

const typeCharacteristicsMap = {
  aries: {
    strength: ["Courageous", "confident", "determined", "passionate", "energetic"],
    weakness: ["Impatient, short-tempered, impulsive"],
    inWorkplace: ["Aries are the first of the zodiac, therefore, they have a desire to be first at everything and are natural born leaders who are fiercely competitive. In the workplace, they are often gamechangers and are a great force. However, it can be important for this sun sign to remember to be patient and to not overstep boundaries."],
  },
  taurus: {
    strength: ["Patient, reliable, responsible, practical"],
    weakness: ["Stubborn, possessive, greedy"],
    inWorkplace: ["People born under this sun sign are often known as “the rock of the workplace”. They value their security and stability and are known for being dependable and reliable in the workplace. You can typically count on a Taurus to be unfazed by potential emotional turmoil that may easily cloud other’s vision."],
  },
  gemini: {
    strength: ["Curious, adaptable, versatile, intellectual"],
    weakness: ["Inconsistent, indecisive, superficial"],
    inWorkplace: ["Geminis have been known to be “the most delightful to work with”. This sun sign is ruled by Mercury, so they value communication. The symbol of Gemini is the “twins”, which can make them seem “superficial” at times as they may act different in different surroundings. However, it’s important to keep in mind that this sign is very adaptable to its surroundings and can vibe with anyone."],
  },
  cancer: {
    strength: ["Loyal, sympathetic, persuasive, imaginative"],
    weakness: ["Manipulative, pessimistic, clingy"],
    inWorkplace: ["Cancers are very much in tune with their own emotions, as well as other’s emotions which can make them a very caring co-worker. The symbol for Cancer is a crab, which reflects how Cancers can sometimes be very guarded (like how a crab’s shell provides protection) which makes it hard to let their true personality shine through."],
  },
  leo: {
    strength: ["Generous, humorous, cheerful, creative"],
    weakness: ["Arrogant, bossy, inflexible"],
    inWorkplace: ["Leos are often known as the “king of the office jungle” as their symbol is the lion. Leos thrive on the energy of others and have the ability to bring their own enthusiasm to the workplace. Leos are ruled by the Sun, so they are the center of their own universe which can make it quite easy to bruise a Leo’s ego."],
  },
  libra: {
    strength: ["Cooperative, fair-minded, diplomatic, easygoing"],
    weakness: ["Avoids confrontations, indecisive, holds a grudge"],
    inWorkplace: ["The symbol for Libra is the scales and because of this, Libras value justice and balance. They are often known as the “unifying force of justice” in the workplace as they are usually unbothered by others and are known to be unbiased and very fair. However, at times, a Libra’s confidence in their judgment can be overpowering and can end up clouding their judgment"],
  },
    scorpio: {
    strength: ["Brave, passionate, resourceful, determined"],
    weakness: ["Jealous, secretive, distrusting"],
    inWorkplace: ["Just like a scorpion (the symbol for this sun sign) Scorpios are the people at work that you don’t want to mess with. However, on the plus side, they can accomplish anything due to their drive, determination, passion, and their resourcefulness."],
  },
  virgo: {
    strength: ["Analytical, hardworking, practical, diligent"],
    weakness: ["Shy, overly critical of self and others, perfectionist"],
    inWorkplace: [
      "Virgos are known as the “diligent, silent soldiers” in the workplace. They are intelligent, however they typically over-think, over-worry, and over-work themselves. In addition, Virgos can sometimes come off as very critical of others",
    ],
  },
  sagittarius: {
    strength: ["Generous, idealistic, optimistic, straightforward"],
    weakness: ["Impatient, careless, irresponsible"],
    inWorkplace: ["Sagittarians have been known to be a “ray of sunshine in a windowless office”. They are often very optimistic and adventurous. However, there are times when this sun sign takes things too far and can get caught up pursuing a good time."],
  },
  aquarius: {
    strength: ["Independent, humanitarian, original, progressive"],
    weakness: ["Avoids emotional expression, temperamental, uncompromising"],
    inWorkplace: ["Aquarians are known as one of the most “good-natured of the bunch”. Due to their independence and originality, they often isolate themselves and they have sometimes been known to set double standards."],
  },
  pisces: {
    strength: ["Compassionate, artistic, gentle, wise, intuitive"],
    weakness: ["Overly trusting, fearful, desire to escape reality"],
    inWorkplace: ["Pisces are the “babies” of the zodiac signs and are often a “mix” of all zodiac signs. This makes Pisces very intuitive of others which can them more aware of how other people are feeling. Like Cancer, this makes for a very caring and emotionally intelligent co-worker."],
  },
  capricorn: {
    strength: ["Responsible, disciplined, practical, careful"],
    weakness: ["Pessimistic, know-it-all, unforgiving"],
    inWorkplace: ["Capricorns are often very efficient and helpful in the workplace. You can count on them to be responsible and practical. Capricorns value stability and order which is often reflected in their work. At times, Capricorns may come off as a know-it-all, however they just might actually know it all."],
  },
};

const recommendationMap = {
  aries: {
    aries: ["Strong compatibility exists between Aries and Aries.", 
    "Relating to one another quite well because having many things in common.",
    "As they share lots of common traits, they can connect with each other very well"],
    taurus: [
      "It can occasionally be rather stressful for an Aries coworker to work with a Taurus.",
      "Tauruses won't budge from their course, so anticipate being slowed down and having to spend more time with your Taurus coworker.",
    ],
    gemini: ["Business compatibility between Gemini and Aries is practically excellent.", 
    "The air sign's sharp brain and untamed imagination allow him to burst with original ideas almost constantly."],
    cancer: ["Cancer and Aries business compatibility can be described as successful, as they work well together as business partners and their alliance is marked by effective interchangeability",
     "While Aries is determined and purposeful, Cancer frequently restrains him, frequently rescuing him from rash decisions and actions, much like water does with a flaming flame"],
    leo: ["Leo and Aries' excellent compatibility in work and business contributes to the achievement of excellent results and profits", "Together, they form a successful, highly organised, and effective team: these two are self-sufficient and do not require assistance. They understand how to set and achieve goals."],
    libra: ["Workplace harmony between Aries and Libra is an interdependent partnership between the two signs as suggested by Aries-Libra professional compatibility.", 
    "The most effective working partnership is formed in a party, with Aries as the leader and Libra as the follower. Both get what they want in these positions"],
    scorpio: ["Aries and Scorpio  have enigmatic and palpable chemistry and seem to be a perfect match for each other. A Scorpio woman never comes in the way of his work and always starts afresh.", ""],
    virgo: ["Aries Men: Aries men are a doer that is driven to complete any task he is assigned. He leads very well and follows with no enviousness or dispute. Working in a team is not a problem for them as they can work out issues without taking any help.",
     "Virgo Women: Virgo Women are sincere and severe toward their work, but they require someone to push them and encourage them. They possess extraordinary communication skills and very well know how to set personal boundaries. They seek perfection in everything they do, and they are born to be the best.",
    "Together – As mentioned previously, both of them utterly excel in their careers. They both value hard work and have ambitious drives that rival many other signs. Regardless of their dynamic specifics, they will work flawlessly together as a team."],
    sagittarius: ["Due to their diverse interests, Aries and Sagittarius make a wonderful match.", 
    "Both partners in this turbulent and exciting relationship are always looking for new experiences."],
    aquarius: ["Aquarius and Aries' business compatibility is high as they make a very creative and efficient duo.", "They both are independent but competitive signs. Conflicts can also arise if Aquarius appears too ignorant or detached to the Aries partner or the Ram appears to be too domineering to the Water Bearer. But if they communicate well and smooth out the rough edges, they can make a good alliance."],
    pisces: ["Their Aries-Pisces work compatibility is successful as long as they collaborate.", "The cooperation of fire and water during the working process allows for the achievement of good outcomes.",
    "They feel more at ease around one another because of the support they provide for one another."],
    capricorn: ["Despite the above, the Aries and Capricorn work compatibility can be favorable.",
    "Working in pairs, two fire signs can achieve excellent results by mutually complementing each other.",
   "Both partners are hardworking and very hardy. If equality is established in their pair, then the union is more than successful"],
  },
  taurus: {
    aries: ["It can occasionally be rather stressful for an Aries coworker to work with a Taurus.", "Tauruses won't budge from their course, so anticipate being slowed down and having to spend more time with your Taurus coworker."],
    taurus: ["There is a lot of common between the Taurus male and Taurus female because Venus is their ruling planet.", "They serve as the epitome of the most working, willing to make a variety of sacrifices for one another in order to maintain their relationship."],
    gemini: ["Taurus and Gemini have an above-average level of work compatibility.", "This pair's Gemini is excellent at playing the role of ideological mastermind; they bring a lot of new ideas and can work quickly. Taurus, who is well-suited to the job of leader and organiser, follows to verify that they have completed it to the end and in accordance with all the rules."],
    cancer: ["Taurus and Cancer have a lower than average compatibility at work, but it is still possible if both partners are sympathetic to the other's less desirable characteristics.", "Taurus ponders for an extended period of time and moves slowly, which may annoy the more active Cancer. If partners learn to be condescending toward one another's faults, their working alliance can be quite successful."],
    leo: ['Problems might occur when Taurus leans against the…ncer feels offended and withdraws into his shell.', 'They must settle all current disputes and stay at … is formed in order to prevent similar scenarios.'],
    libra: ['A limited number of places of contact between peop…rate ambitions allow them to create working ties.', 'Taurus, unlike Leo, enjoys a comfortable life, but…ry in the beginning of the year is not worthwhile'],
    scorpio: ["Scorpio and Taurus work well together, but their styles of doing business and business behaviour are diametrically opposed.", "Their pairing may be successful in situations where a diligent Taurus serves as a subordinate and Scorpio serves as a boss."],
    virgo: [" Taurus Virgo professional compatibility is aided by their meticulousness and scrupulousness", "Because of both of their obstinacy, they can sometimes clash. But, in most cases, such issues are promptly settled through business discussions."],
    sagittarius: ["Surprisingly, the Taurus and Sagittarius business compatibility has a good chance of success. Both signs appreciate crisp bills and are adept at obtaining them.", 
    "They can successfully complement one another through their disparate character traits, thereby advancing their common cause to excellent results. "],
    aquarius: ["Even with very little in common, both the signs have a strong desire to succeed, which makes the Aquarius and Taurus business compatibility high. ",
     "They have powerful personalities, and once they work out their differences, the dynamics of the Aquarius and Taurus business compatibility can be wonderful."],
    pisces: ["Both are capable of supporting a partner and are quick to lend assistance when the other is ill. And these types of relationships work best between identical-sex representatives of these zodiac signs."],
    capricorn: ["Capricorn and Taurus share a lot of qualities that are enough to run any business or task successfully. They are down to earth, logical, disciplined, and have high standards.", "Their hardworking personalities help them stick together until the end of any assignment. They are practical and don’t face problems caused by another partner’s overindulgence or greed."],
  },
  gemini: {
    aries: ["Aries and Gemini make a great team at work. ", " Gemini supports Aries' audacious ideas, while Aries promptly acknowledges Gemini's adaptability and intelligence."],
    taurus: ["If Gemini and Taurus have a similar, and most significantly, beneficial aim, then their professional compatibility will be effective.", "Taurus is a realistic sign that takes its time, is prone to considering all the options, and tends to work slowly and methodically. Gemini have spontaneous behavior and are not always well-informed; they frequently make mistakes as a result of their limited vision."],
    gemini: ["Since they will have a lot in common, this is thought to be a favorable pairing.", "Both will lead fulfilling lives, be autonomous, and never grow tired of one another's companionship."],
    cancer: ["They are unlikely to share common interests, and most likely, even the companies in which they are employed will be quite dissimilar. ", "Gemini enjoy active vacations, travelling to new places, visiting noisy places, and attending parties. Cancer is all foreign"],
    leo: ["Geminis in the workplace also strive for championships and frequently prefer to work alone due to their aversion to team dynamics. As a result, they will need to develop the ability to negotiate and assign roles in order to coexist in a business tandem."],
    libra: ["Libra and Gemini compatibility in work dwells well together. They communicate perfectly well with one another and collaborate effectively in areas that require a creative approach."],
    scorpio: ["Scorpio and Gemini compatibility is low in the workplace. Gemini is an imaginative sign. They are restless, frequently fly in the clouds, despise routine work, and prefer to work alone.", "Scorpio will be enraged by such collusion at work. He used to do everything meticulously according to plan, thoroughly researching each project."],
    virgo: ["Gemini and Virgo friendship compatibility is improbable. A couple of interesting conversations may occur between them, but the matter is unlikely to progress further. "],
    sagittarius: ["In an ideal world, the air sign is generally worried about creating contacts and associations with partners. Correspondence is essential to him/her."],
    aquarius: ["Due to the great mental connection, Aquarius and Gemini business compatibility is good. Gemini finds the visionary spirit of the Aquarius very attractive as it appreciates good ideas and interesting concepts."],
    pisces: ["Gemini and Pisces have a low level of compatibility at work. Two of these indicators in a single case will have no discernible effect. Gemini may generate excellent ideas, but they will be unable to implement them."],
    capricorn: ["The individual approaches of Capricorn and Gemini are totally different, so to make their business work, they will have to find a common goal and work towards it together. "],
  },
  cancer: {
    aries: ["Once they realize they are on the same side, Aries and Cancer make an excellent team.", "While Aries is out there seeking attention, Cancer is quietly maintaining the back end."],
    taurus: ["Problems might occur when Taurus leans against the horns and Cancer feels offended and withdraws into his shell.", "They must settle all current disputes and stay at the negotiation table until a truce is formed in order to prevent similar scenarios."],
    gemini: ["They are unlikely to share common interests, and most likely, even the companies in which they are employed will be quite dissimilar. ", "Gemini enjoy active vacations, travelling to new places, visiting noisy places, and attending parties. Cancer is all foreign"],
    cancer: ["The first sign of the zodiac will earn money, possess superhuman productivity and stamina, and despise laziness and profanity. ", "Thus, workplace compatibility between Cancer and Cancer can be extremely beneficial and result in positive outcomes: mutual gain would be provided by the business union. "],
    leo: ["Cancer is largely unconcerned with his position — what matters is that he enjoys his work. Due to his creative abilities, he is capable of advancing very interesting ideas and proposing novel solutions to complex problems. "],
    libra: ["Cancer and Libra compatibility at work is considered successful, as both signs experience a sense of calm in the presence of the other. ", "This type of team possesses tremendous creative potential while also possessing highly developed intellectual abilities."],
    scorpio: ["Scorpio and Cancer compatibility at work is helpful: the signs impart impeccably and cooperate to carry each errand to an obvious end result and get an outcome. "],
    virgo: ["Due to the mutual blend of their opposing qualities, the signs of water and earth get along well. A sign of the earth does not feed bread; however, it should be looked after and monitored. "],
    sagittarius: [" Cancer and Sagittarius' compatibility at work leaves a lot to be desired. The fire sign is a high-energy individual who strives to be first on the career ladder."],
    aquarius: ["Aquarius and Cancer business compatibility is an alliance of the two opposite ends of the spectrum. Aquarius follows an unconventional approach while Cancer follows an emotional approach. "],
    pisces: [" Pisces and Cancer business compatibility will be good. Cancer initiates new projects and Pisces is energised by their partner’s plans. Both signs are sympathetic and tolerant."],
    capricorn: ["Cancer and Capricorn are located on opposite sides of the Zodiac wheel, which means that they're often pulling in different directions in their careers.", "Capricorn natives tend to be very serious about their work, preferring to save money and take the safe path with higher-ups."],
  },
  leo: {
    aries: ["Both signs are passionate and dynami, with a healthy spirit of competiton thrown in.", "Both signs can be impatient and proud, and Aries may be bothered by Leo's pride, but their alliance is always interesting."],
    taurus: ["A limited number of places of contact between people with disparate ambitions allow them to create working ties.", "Taurus, unlike Leo, enjoys a comfortable life, but luxury in the beginning of the year is not worthwhile."],
    gemini: [" The compatibility of Gemini and Leo at business, however, is not entirely evident. This is a result of Leo's drive to take charge in every situation."],
    cancer: ["Cancer and Leo have an above-average level of compatibility at work precisely because their internal structures are so dissimilar. The first was used to command and dispose of enemies, frequently occupying key positions. "],
    leo: ["They will be supportive, loving, and caring toward each other. They will be able to understand each other's feelings and mood. Together they will make a great pair and fully cooperate with each other. This sign combination indicates an exciting and long lasting relationship."],
    libra: ["Libra and Leo compatibility in love is great. Air attracts a strong image of a potential partner. He, in turn, is immediately struck by the Libra's grace and sociability. "],
    scorpio: ["Scorpio and Leo compatibility at work will benefit them only if they recognise their equality and devote all their energy to achieving a common goal that benefits both of them. "],
    virgo: ["The proper Virgo does not enjoy being in the spotlight and would rather have a more restful and useful rest. Additionally, she is quite critical — he will not hesitate to express his opinion to his comrade. Such blatant vanity will not be tolerated by Leo."],
    sagittarius: ["The compatibility of Leo and Sagittarius at work is excellent, and the signs of fire achieve success in their chosen fields. Leo is a natural organiser and a creator of effective tactics and strategies."],
    aquarius: ["Aquarius makes sure that the task is carried out smoothly till the end and motivates their Leo partner. The energetic Leo makes sure that all the co-workers reach their full potential while working."],
    pisces: [" In the Pisces and Leo business compatibility, both the signs will gain a new work dimension brought in by the other partner. Pisces is a quiet sign that is happy to lend a helping hand and support others."],
    capricorn: ["The goat wants understated elegance whereas, the Lion enjoys glamour. Capricorn believes in saving obsessively, but Leo loves spending lavishly."],
  },
  libra: {
    aries: ["Libra can work intellectually with the action and energy of Aries.", "Aries action's oritented approach to projects may conflict with Libra's more intellectual approach. "],
    taurus: ["The compatibility between Libra and Taurus at work is quite strong since industriousness is a key term in their professional partnership.", "Their cooperation will provide fruitful outcomes for both of them."],
    gemini: ["Workplace compatibility between Libra and Gemini thrives. They interact successfully in areas that call for a creative approach and communicate perfectly well with one another."],
    cancer: ["Cancer's compatibility with Virgo in friendship will be excellent, provided the Moon's wards do not go overboard in their desire to patronise. Then they will easily discover shared goals and interests, and they will certainly avoid boredom."],
    leo: ["The proper Virgo does not enjoy being in the spotlight and would rather have a more restful and useful rest. Additionally, she is quite critical — he will not hesitate to express his opinion to his comrade. Such blatant vanity will not be tolerated by Leo."],
    libra: ["When it is the case with a Virgo supervisor and a Libra employee, the Virgo and Libra business compatibility works perfectly well. The Virgo boss is one of the best at motivating everyone to perform at their best, both individually and as a team."],
    scorpio: ["Virgo and Scorpio's excellent compatibility at work enables them to reach unprecedented heights in business. Both signs possess discernment and foresight."],
    virgo: ["Successful compatibility between Virgo and Virgo compatibility at work delivers positive outcomes. They are defined by tenacity, perseverance, and the capacity for good planning"],
    sagittarius: ["Virgo and Sagittarius compatibility in business is also difficult, yet achievable. A common purpose should be the primary objective of successful cooperation."],
    aquarius: ["The sign of the earthly elements usually falls into despair or even depression due to its monotonous life, so it is very suitable for a couple who helps their optimism to cope with their negative conditions."],
    pisces: ["The downside of their partnership is that the Neptune and Jupiter wards will be irritated by the partner's compassion, obsessive accuracy, and notations. In addition, there will be missing  the feelings and vitality that come with them. "],
    capricorn: ["This friendship is frequently accompanied with communication as well as cooperative activities."],
  },
  scorpio: {
    aries: ["Aries and Scorpio get along well, especially if they meet at work or through friends.", "Scorpio natives like to make adjustments for someone they love, while Aries natives are a touch more fussy about their values and routines, making them the ideal match."],
    taurus: ["Their divergent character traits allow them to create engaging partnerships where partners encourage one another. "],
    gemini: ["Scorpio and Gemini At work, compatibility is not an option. An inventive sign is Gemini. They dislike normal work, frequently fly in the sky, are restless, and would rather work alone."],
    cancer: ["Cancer and Scorpio compatibility at work is beneficial: the signs communicate perfectly and work together to bring each task to a logical conclusion and obtain a result. "],
    leo: ["Leo and Scorpio compatibility at work will benefit them only if they recognise their equality and devote all their energy to achieving a common goal that benefits both of them. "],
    libra: ["Scorpio and Libra's excellent compatibility at work enables them to reach unprecedented heights in business. Both signs possess discernment and foresight. "],
    scorpio: ["Scorpio and Scorpio compatibility at work has the potential to be extremely productive. They are excellent strategists"],
    virgo: ["In work companionship, Virgo and Capricorn have a great compatibility. They will be able to identify mutual interests and exciting endeavours more quickly if they share a similar worldview."],
    sagittarius: ["As mentioned previously, the compatibility between Libra and Sagittarius is inextricably linked to Neptune, and the test of trust is one of the most significant experiences this relationship provides. "],
    aquarius: ["The air sign's ambiguity, its fluctuating thoughts and deeds, will irritate the steadfast Capricorn, who is accustomed to acting directly and decisively. "],
    pisces: ["The Goat and Scorpion can learn a great deal from each other, but they also have a lot of differences to work upon."],
    capricorn: [" Capricorn is ruled by Saturn, which is all about hard work, ambition, diligence, and responsibility, and Scorpio is ruled by Mars and Pluto that represents courage, aggression, sexual energy, renewal, and rebirth. "],
  },
  virgo: {
    aries: ["People born in Virgo and Aries have quite different personalities.If they can both get their anger issues under control, they could be an excellent match when it comes to compatibility. "],
    taurus: ["Both Taurus and Virgo are precise and scrupulous by nature, which helps with their professional compatibility.They sometimes argue because they are both so stubborn. However, these problems are typically quickly resolved through corporate negotiations."],
    gemini: ["It is unlikely that Gemini and Virgo would get along well as friends. They might have a few intriguing discussions,"],
    cancer: ["Cancer's compatibility with Virgo in friendship will be excellent, provided the Moon's wards do not go overboard in their desire to patronise. Then they will easily discover shared goals and interests, and they will certainly avoid boredom."],
    leo: ["The proper Virgo does not enjoy being in the spotlight and would rather have a more restful and useful rest. Additionally, she is quite critical — he will not hesitate to express his opinion to his comrade. Such blatant vanity will not be tolerated by Leo."],
    libra: ["When it is the case with a Virgo supervisor and a Libra employee, the Virgo and Libra business compatibility works perfectly well. The Virgo boss is one of the best at motivating everyone to perform at their best, both individually and as a team."],
    scorpio: ["Virgo and Scorpio's excellent compatibility at work enables them to reach unprecedented heights in business. Both signs possess discernment and foresight."],
    virgo: ["Successful compatibility between Virgo and Virgo compatibility at work delivers positive outcomes. They are defined by tenacity, perseverance, and the capacity for good planning. "],
    sagittarius: ["Virgo and Sagittarius compatibility in business is also difficult, yet achievable. A common purpose should be the primary objective of successful cooperation. "],
    aquarius: ["The sign of the earthly elements usually falls into despair or even depression due to its monotonous life, so it is very suitable for a couple who helps their optimism to cope with their negative conditions."],
    pisces: ["The downside of their partnership is that the Neptune and Jupiter wards will be irritated by the partner's compassion, obsessive accuracy, and notations. In addition, there will be missing  the feelings and vitality that come with them. "],
    capricorn: ["In work companionship, Virgo and Capricorn have a great compatibility. They will be able to identify mutual interests and exciting endeavours more quickly if they share a similar worldview."],
  },
  sagittarius: {
    aries: ["Due to their diverse interests, Aries and Sagittarius make a wonderful match.", "Both partners in this turbulent and exciting relationship are always looking for new experiences"],
    taurus: ["Freedom-loving Sagittarius thrives on communication and is constantly surrounded by people and energy, which can make Taurus envious and cause bitterness and misunderstanding."],
    gemini: ["In an ideal environment, the air sign is typically concerned with making connections and partnerships. For him or her, communication is crucial. The fire sign is concerned with both personal and professional fulfillment."],
    cancer: ["The professional compatibility of Cancer and Sagittarius is less than ideal. The fire sign indicates a driven individual that aspires to rise to the top of their field."],
    leo: ["The compatibility of Leo and Sagittarius at work is excellent, and the signs of fire achieve success in their chosen fields. Leo is a natural organiser and a creator of effective tactics and strategies."],
    libra: ["Libra will sense the shift as soon as they begin their search for something new and will become frustrated by their inability to create oneness with a partner they adore."],
    scorpio: ["Scorpio and Sagittarius compatibility at work is fair. The first is an exceptional strategist and planner. His objectives are clear, his actions are precise, and his results are excellent."],
    virgo: ["Virgo and Sagittarius compatibility in business is also difficult, yet achievable. A common purpose should be the primary objective of successful cooperation."],
    sagittarius: ["Sagittarius and Sagittarius compatibility in the workplace is extremely successful. Two imaginative and aspirational individuals are capable of realising such enormous ideas that others may have dismissed as fantasy or even impossible. "],
    aquarius: ["The partnership can be competitive but is free from constraints. They can communicate really well, which makes them good associates and even better friends."],
    pisces: ["They both benefit from each other’s wisdom, and this is the best aspect of Pisces and Sagittarius business compatibility. They provide each other with the quality their partner is missing."],
    capricorn: ["Capricorn and Sagittarius are opposites and might think that they cannot work together due to their differences."],
  },
  aquarius: {
    aries: ["They will have a deep understanding of one another, which will contribute to the health of their relationship."],
    taurus: ["Due to their strong personalities, the dynamics of the Aquarius and Taurus business compatibility can be fantastic after their conflicts have been resolved."],
    gemini: ["together they can make an excellent team that will achieve excellent results. To work them best on equal terms  in the role of partners, in order to avoid possible envy and competition. "],
    cancer: ["Cancer needs their work to be emotionally fulfilling, and thrives when they are helping others. On the other hand, Aquarius necessitates a career that requires them to use their intellect, preferring to solve complex problems and propel the human race forward. "],
    leo: ["Leo and Aquarius compatibility in work and in business is somewhat poor. Partnerships with hired colleagues on an equal footing will be unproductive."],
    libra: ["Libra and Aquarius compatibility at work and in business can be extremely beneficial, as both think creatively and approach any business creatively."],
    scorpio: ["Scorpio and Aquarius are both Fixed Signs, which means Scorpio and Aquarius compatibility is very low."],
    virgo: ["Aquarius and Virgo business compatibility can go both ways; either they bring out the best in each other or the worst. "],
    sagittarius: ["The Aquarius and Sagittarius business compatibility calls for a highly inventive and original match. The partnership can be competitive but is free from constraints. "],
    aquarius: ["Aquarius and Aquarius business compatibility is about bringing change in the society along with growing their own business. They are hard-working and work the best under pressure. "],
    pisces: ["A Pisces woman often loses focus, and it is hard for her to stick to one task without wandering off. While an Aquarius man could help her with this, he often will not think to."],
    capricorn: ["There can be conflicts between them at times due to their different approaches, but with proper communication, they can resolve issues and make an unbeatable team. Capricorn and Aquarius compatibility can be an enriching and enlightening experience for the alliance."],
  },
  pisces: {
    aries: ["A relationship between an Aries man and a Pisces woman can be difficult and filled with ups and downs. "],
    taurus: ["Taurus and Pisces compatibility at work can be beneficial in areas that require creativity and planning. Pisces creative is more developed, and as a result, they are capable of coming up with brilliant ideas."],
    gemini: ["On the one hand, they coexist harmoniously; their working partnership is stable and productive"],
    cancer: ["Cancer and Pisces compatibility is expressed in two ways in the work of astrologers. On the one hand, they coexist harmoniously; their working partnership is stable and productive; they support one another and have no desire to compete."],
    leo: ["The best aspect of Pisces and Leo business compatibility is that they gain a lot of perspective from each other while working together"],
    libra: ["Pisces and Libra business compatibility makes for a good alliance. These signs bring out the best in each other while working together on a project."],
    scorpio: ["Scorpio and Pisces compatibility in the form of partnership in any business can prove to be highly successful as both the signs have a lot in common."],
    virgo: ["The work compatibility between Virgo and Pisces is too fragile due to distinct temperaments. On the one hand, water requires someone who is more solid and robust to provide it with support and useful guidance."],
    sagittarius: ["Pisces and Sagittarius business compatibility is a case of dream fulfilment. They have a contrasting mindset, but when they work together on a project, they can satisfy each other’s philosophical cravings and make a happy alliance."],
    aquarius: [" Aquarius and Pisces business compatibility will be a blend of creativity and compassion. Be it together or individually, these two will be idealistic."],
    pisces: [" They will do much better if they are in a team with another sign; in such a situation, both of them will provide brilliant and insightful ideas and get things done."],
    capricorn: ["Some difficulties may arise in this bond if the Capricorn is not considerate towards the sensitive Pisces’ feelings, or if the Fish is all over the place with its emotions, which irritates the Goat. "],
  },
  capricorn: {
    aries: ["Capricorn and Aries can enhance each other's abilities, aspirations, and need for freedom."],
    taurus: ["Taurus and Capricorn have several attributes in common that are sufficient to carry out any work or business successfully."],
    gemini: ["Gemini is a changeable sign and Capricorn is a Cardinal sign, therefore the twins are an adaptor and the goat is an initiator. "],
    cancer: ["Sometimes Cancer can dream and for a while forget about work, but the partner will gently return it to the ground, reminding of the importance of their common goal."],
    leo: ["Both the Goat and the Lion are extremely hard working but have very different expectations and needs. Capricorn wants fortune, while Leo seeks fame."],
    libra: ["Libra and Capricorn compatibility is deemed good in the workplace due to their successful complementarity: everyone is strong in the area where a colleague is struggling."],
    scorpio: ["This duo can make great business partners, but it takes them a lot of time to open up to each other and feel comfortable in one another’s company. But once they start to trust their partner, this alliance can be strong and secure. "],
    virgo: ["In the workplace, Virgo and Capricorn compatibility is two folded. On the one hand, two dedicated pragmatists can produce extraordinary results."],
    sagittarius: ["Capricorn and Sagittarius are opposites and might think that they cannot work together due to their differences. But once they start working on a project together, they realise that they can actually pull off a business partnership in the long run."],
    aquarius: ["When you put Capricorn and Aquarius on a project, they bring out the best in each other. Capricorn follows a sensible and more cautious approach, while the Aquarius has a visionary and unquenchable approach."],
    pisces: ["The Goat is a born leader and doesn’t mesh well with bossy people. Pisces will happily follow the lead of the Capricorn without questioning it. Their personalities will fit together beautifully and make good business compatibility."],
    capricorn: ["When two Capricorns work together on a project, they tune like a fine instrument. They are well-coordinated, organised, goal-oriented, and make a strong team together. Two Goats on a team means double the energy, ambition, and tenacity."],
  },
};
const scoreMap = {
  aries: {
    aries: 9,
    taurus: 8,
    gemini: 6,
    cancer: 4,
    leo: 9,
    libra: 6,
    scorpio: 4,
    virgo: 6,
    sagittarius: 9,
    aquarius: 6,
    pisces: 8,
    capricorn: 5,
  },
  taurus: {
    aries: 4,
    taurus: 9,
    gemini: 3,
    cancer: 6,
    leo: 4,
    libra: 5,
    scorpio: 7,
    virgo: 10,
    sagittarius: 8,
    aquarius: 8,
    pisces: 6,
    capricorn: 10,
  },
  gemini: {
    aries: 7,
    taurus: 3,
    gemini: 9,
    cancer: 8,
    leo: 7,
    libra: 10,
    scorpio: 5,
    virgo: 8,
    sagittarius: 7,
    aquarius: 10,
    pisces: 8,
    capricorn: 4,
  },
  cancer: {
    aries: 8,
    taurus: 6,
    gemini: 3,
    cancer: 9,
    leo: 3,
    libra: 4,
    scorpio: 9,
    virgo: 7,
    sagittarius: 3,
    aquarius: 3,
    pisces: 10,
    capricorn: 7,
  },
  leo: {
    aries: 9,
    taurus: 5,
    gemini: 6,
    cancer: 4,
    leo: 10,
    libra: 6,
    scorpio: 8,
    virgo: 5,
    sagittarius: 10,
    aquarius: 6,
    pisces: 6,
    capricorn: 6,
  },
  libra: {
    aries: 7,
    taurus: 4,
    gemini: 10,
    cancer: 5,
    leo: 7,
    libra: 10,
    scorpio: 8,
    virgo: 5,
    sagittarius: 7,
    aquarius: 4,
    pisces: 9,
    capricorn: 4,
  },
  scorpio: {
    aries: 3,
    taurus: 4,
    gemini: 5,
    cancer: 10,
    leo: 5,
    libra: 4,
    scorpio: 9,
    virgo: 6,
    sagittarius: 3,
    aquarius: 8,
    pisces: 9,
    capricorn: 6,
  },
  virgo: {
    aries: 5,
    taurus: 9,
    gemini: 4,
    cancer: 6,
    leo: 5,
    libra: 8,
    scorpio: 7,
    virgo: 9,
    sagittarius: 5,
    aquarius: 5,
    pisces: 4,
    capricorn: 10,
  },
  sagittarius: {
    aries: 10,
    taurus: 3,
    gemini: 7,
    cancer: 3,
    leo: 9,
    libra: 7,
    scorpio: 3,
    virgo: 4,
    sagittarius: 9,
    aquarius: 7,
    pisces: 5,
    capricorn: 8,
  },
  aquarius: {
    aries: 6,
    taurus: 3,
    gemini: 10,
    cancer: 3,
    leo: 4,
    libra: 9,
    scorpio: 5,
    virgo: 3,
    sagittarius: 6,
    aquarius: 10,
    pisces: 3,
    capricorn: 5,
  },
  pisces: {
    aries: 4,
    taurus: 7,
    gemini: 3,
    cancer: 10,
    leo: 3,
    libra: 5,
    scorpio: 10,
    virgo: 7,
    sagittarius: 4,
    aquarius: 3,
    pisces: 9,
    capricorn: 7,
  },
  capricorn: {
    aries: 8,
    taurus: 10,
    gemini: 8,
    cancer: 7,
    leo: 8,
    libra: 8,
    scorpio: 7,
    virgo: 10,
    sagittarius: 8,
    aquarius: 4,
    pisces: 6,
    capricorn: 9,
  },
};

const genderIconMap = {
  male: '<i class="fas fa-mars"></i>',
  female: '<i class="fas fa-venus"></i>',
};

const type1 = getPersonType(formData.dob1);
console.log(type1)
const type2 = getPersonType(formData.dob2);

const name1El = document.getElementById("name1");
const name2El = document.getElementById("name2");
const type2El = document.getElementById("type2");
const type1El = document.getElementById("type1");

const strength1El = document.getElementById("strength1");
const weakness1El = document.getElementById("weakness1");
const inworkplace1El = document.getElementById("inworkplace1");
const strength2El = document.getElementById("strength2");
const weakness2El = document.getElementById("weakness2");
const inworkplace2El = document.getElementById("inworkplace2");
const scoreEl = document.getElementById("score");
const recommendationsEl = document.getElementById("recommendations");

name1El.innerText = `About ${formData.name1}`;
name2El.innerText = `About ${formData.name2}`;

type1El.innerHTML = `
    ${genderIconMap[formData.gender1]} <img src="${typeImagesMap[type1]}"/>
`;

type2El.innerHTML = `
    ${genderIconMap[formData.gender2]} <img src="${typeImagesMap[type2]}"/>
`;

const characteristic1 = typeCharacteristicsMap[type1];
const characteristic2 = typeCharacteristicsMap[type2];
console.log(characteristic1)

const recomendations = recommendationMap[type1][type2];
const score = scoreMap[type1][type2];

for (let strength of characteristic1.strength) {
  strength1El.innerHTML += `<div class="point">
    <i class="far fa-star"></i></i> ${strength}
</div>`;
}
for (let weakness of characteristic1.weakness) {
  weakness1El.innerHTML += `<div class="point">
    <i class="far fa-star"></i></i> ${weakness}
</div>`;
}

for (let inworkplace of characteristic1.inWorkplace) {
  inworkplace1El.innerHTML += `<div class="point">
    <i class="far fa-star"></i></i> ${inworkplace}
</div>`;
}

for (let strength of characteristic2.strength) {
  strength2El.innerHTML += `<div class="point">
    <i class="far fa-star"></i></i> ${strength}
</div>`;
}
for (let weakness of characteristic2.weakness) {
  weakness2El.innerHTML += `<div class="point">
    <i class="far fa-star"></i></i> ${weakness}
</div>`;
}

for (let inworkplace of characteristic2.inWorkplace) {
  inworkplace2El.innerHTML += `<div class="point">
    <i class="far fa-star"></i></i> ${inworkplace}
</div>`;
}

const getScoreColor = (s) => {
  if (s < 5) return "red";
  else if (s <= 7) return "orange";
  else return "green";
};
scoreEl.classList.add(getScoreColor(Number(score)));
scoreEl.innerText = `${formData.name1} and ${formData.name2} match ${
  score
}/10`;

for (let rec of recomendations) {
  recommendationsEl.innerHTML += `<div class="point">
    <i class="far fa-star"></i></i> ${rec}
</div>
    `;
}
