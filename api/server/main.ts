import { Meteor } from 'meteor/meteor';
import { Horoscopes, Feeds, Signs } from './collections';

Meteor.startup(() => {
  // Feeds.remove({})
 //  Horoscopes.remove({})
  if (Feeds.find({}).cursor.count() === 0) {
    // http://www.astro-service.ch/daily/rss-news-feed.html
    // Feeds.insert({
    //   name: "Astro Service",
    //   url: "http://www.astro-service.ch/RSS.asp"
    // });
    // http://www.t-online.de/leben/horoskop/id_12898094/tageshoroskop-fuer-ihr-sternzeichen-taeglich-neu-im-rss-feed.html
    Feeds.insert({
      name: "T-Online",
      language: "de",
      url: "http://horoskop.t-online.de/xml/rss2.php"
    });
    Feeds.insert({
      name: "Kostenloshoroskop",
      language: "de",
      url: "http://www.kostenlosehoroskop.de/feed/"
    });
    // http://www.rss-verzeichnis.net/index.php?seite=vorschau&LNr=2951
    /*Feeds.insert({
      name: "Horoskop Wissen",
      language: "de",
      url: "http://www.horoskop-wissen.de/rssfeed/rss_meldungen.rss"
    }); */
    // feedlist https://www.astrology.com/rss.html
    Feeds.insert({
      name: "Overview",
      language: "en",
      url: "https://www.astrology.com/us/offsite/rss/daily-horoscope.aspx"
    });
    Feeds.insert({
      name: "Extended",
      language: "en",
      url: "https://www.astrology.com/us/offsite/rss/daily-extended.aspx"
    });
    Feeds.insert({
      name: "Singles Love",
      language: "en",
      url: "https://www.astrology.com/us/offsite/rss/daily-singles.aspx"
    });
    Feeds.insert({
      name: "Couples Love",
      language: "en",
      url: "https://www.astrology.com/us/offsite/rss/daily-couples.aspx"
    });
    Feeds.insert({
      name: "Finance",
      language: "en",
      url: "https://www.astrology.com/us/offsite/rss/daily-finance.aspx"
    });
    Feeds.insert({
      name: "Career",
      language: "en",
      url: "https://www.astrology.com/us/offsite/rss/daily-work.aspx"
    });
  }

  if (Signs.find({}).cursor.count() == 0) {
    Signs.insert({ 
      name: {
        en: "Aries",
        de: "Widder"
      }
    });
    Signs.insert({ 
      name: {
        en: "Taurus",
        de: "Stier" 
      }
    });
    Signs.insert({
      name: {
        en: "Gemini",
        de: "Zwillinge"
      }
    });
    Signs.insert({ 
      name: {
        en: "Cancer",
        de: "Krebs"
      }
    });
    Signs.insert({
      name: {
        en: "Leo",
        de: "Löwe"
      }
    });
    Signs.insert({ 
      name: {
        en: "Virgo",
        de: "Jungfrau"
      }
    });
    Signs.insert({ 
      name: {
        en: "Libra",
        de: "Waage"
      }
    });
    Signs.insert({
      name: {
        en: "Scorpio",
        de: "Skorpion"
     }
    });
    Signs.insert({ 
      name: {
        en: "Sagittarius",
        de: "Schütze"
      }
    });
    Signs.insert({ 
      name: {
        en: "Capricorn",
        de: "Steinbock" 
      }
    });
    Signs.insert({
      name: {
        en: "Aquarius",
        de: "Wassermann"
      }
    });
    Signs.insert({ 
      name: {
        en: "Pisces",
        de: "Fische"
      }
    });
  }
});
