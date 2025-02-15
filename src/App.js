import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Wrapper from "./layout/Wrapper.js";
import Home from "./pages/Home.jsx";
import FootBall from "./pages/FootBall.jsx";
import Index from "./components/setting/Index.js";
import CricketNews from "./pages/CricketNews.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import WritePage from "./pages/WritePage.jsx";
import PrivacyPolicy from "./components/otherPages/PrivacyPolicy.js";
import TermsOfUse from "./components/otherPages/TermsOfUse.js";
import ErrorPage from "./components/otherPages/ErrorPage.js";
import AffiliateProgram from "./components/otherPages/AffiliateProgram.js";
import FootballSchedule from "./components/football/FootballSchedule.js";
import FootballEuro from "./components/football/FootballEuro.js";
import FootballEpl from "./components/football/FootballEpl.js";
import FootballSeries from "./components/football/FootballSeries.js";
import FootballUserDetail from "./components/football/FootballUserDetail.js";
import CricketResult from "./components/cricket/CricketResult.js";
import CricketSchedule from "./components/cricket/CricketSchedule.js";
import HockyMain from "./components/hocky/HockyMain.js";
import VijayHazare from "./components/cricket/VijayHazare.js";
import CricketBbl from "./components/cricket/CricketBbl.js";
import Cricket from "./components/cricket/Cricket.js";
import CricketLeague from "./components/cricket/CricketLeague.js";
import CricketSL from "./components/cricket/CricketSL.js";
import CricketWomenAsia from "./components/cricket/CricketWomenAsia.js";
import IndEng from "./components/cricket/IndEng.js";
import FootballCopaAmerica from "./components/football/FootballCopaAmerica.js";
import FootballChampions from "./components/football/FootballChampions.js";
import FootballNations from "./components/football/FootballNations.js";
import FootballLiga from "./components/football/FootballLiga.js";
import FootballLigue1 from "./components/football/FootballLigue1.js";
import FootballMls from "./components/football/FootballMls.js";
import HockyField from "./components/hocky/HockyField.js";
import HockyGames from "./components/hocky/HockyGames.js";
import HockySchdule from "./components/hocky/HockySchdule.js";
import HockyMedalTally from "./components/hocky/HockyMedalTally.js";
import HockyCountryList from "./components/hocky/HockyCountryList.js";
import HockyIndia from "./components/hocky/HockyIndia.js";
import HockyMens from "./components/hocky/HockyMens.js";
import Kabbadi from "./pages/Kabbadi.jsx";
import KabbadiLeague from "./components/kabbadi/KabbadiLeague.js";
import KabbadiSchedule from "./components/kabbadi/KabbadiSchedule.js";
import RecentSchedule from "./components/kabbadi/schedule/RecentSchedule.js";
import LiveSchedule from "./components/kabbadi/schedule/LiveSchedule.js";
import UpcomingSchedule from "./components/kabbadi/schedule/UpcomingSchedule.js";
import InternalSchedule from "./components/kabbadi/schedule/InternalSchedule.js";
import KabbadiPointTable from "./components/kabbadi/KabbadiPointTable.js";
import KabbadiRules from "./components/kabbadi/KabbadiRules.js";
import BadmintonMain from "./components/badminton/BadmintonMain.js";
import BadmintonGames from "./components/badminton/BadmintonGames.js";
import BadmintonSchedule from "./components/badminton/BadmintonSchedule.js";
import HealthFitness from "./components/otherPages/HealthFitness.js";
import Store from "./components/otherPages/Store.js";
import Events from "./components/otherPages/Events.js";
import WebStories from "./components/otherPages/WebStories.js";
import Quizzes from "./components/otherPages/Quizzes.js";
import InternalPage from "./components/otherPages/InternalPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />

          <Route path="/football" element={<FootBall />} />
          <Route path="/football/schedule" element={<FootballSchedule />} />
          <Route path="/football/euro" element={<FootballEuro />} />
          <Route path="/football/epl" element={<FootballEpl />} />
          <Route path="/football/epl/series" element={<FootballSeries />} />
          <Route path="/football/epl/userDetail" element={<FootballUserDetail />} />
          <Route path="/football/copa-america" element={<FootballCopaAmerica />} />
          <Route path="/football/champions-league" element={<FootballChampions />} />
          <Route path="/football/nations-league" element={<FootballNations />} />
          <Route path="/football/la-liga" element={<FootballLiga />} />
          <Route path="/football/ligue-1" element={<FootballLigue1 />} />
          <Route path="/football/mls" element={<FootballMls />} />

          <Route path="/cricket" element={<Cricket />} />
          <Route path="/cricket/vijay-hazare" element={<VijayHazare />} />
          <Route path="/cricket/bbl24" element={<CricketBbl />} />
          <Route path="/cricket/league" element={<CricketLeague />} />
          <Route path="/cricket/sri-lanka-vs-new-zealand" element={<CricketSL />} />
          <Route path="/cricket/womens-ashes" element={<CricketWomenAsia />} />
          <Route path="/cricket/ind-eng" element={<IndEng />} />
          <Route path="/cricket/result" element={<CricketResult />} />
          <Route path="/cricket/schedule" element={<CricketSchedule />} />

          <Route path="/hocky" element={<HockyMain />} />
          <Route path="/hocky/field-hocky" element={<HockyField />} />
          <Route path="/hocky/commonwealth-games" element={<HockyGames />} />
          <Route path="/hocky/schdule" element={<HockySchdule />} />
          <Route path="/hocky/medal-tally" element={<HockyMedalTally />} />
          <Route path="/hocky/country-list" element={<HockyCountryList />} />
          <Route path="/hocky/india-schdule" element={<HockyIndia />} />
          <Route path="/hocky/mens-hocky" element={<HockyMens />} />

          <Route path="/kabbadi" element={<Kabbadi />} />
          <Route path="/kabbadi/kabbadi-leagua" element={<KabbadiLeague />} />
          <Route path="/kabbadi/kabbadi-schedule" element={<KabbadiSchedule />}>
            <Route path="recent" element={<RecentSchedule />} />
            <Route path="live" element={<LiveSchedule />} />
            <Route path="upcoming" element={<UpcomingSchedule />} />
          </Route>
          <Route path="/kabbadi/kabbadi-schedule/schedule" element={<InternalSchedule />} />
          <Route path="/kabbadi/point-table" element={<KabbadiPointTable />} />
          <Route path="/kabbadi/rules" element={<KabbadiRules />} />


          <Route path="/badminton" element={<BadmintonMain />} />
          <Route path="/badminton/commonwealth-games" element={<BadmintonGames />} />
          <Route path="/badminton/schedule" element={<BadmintonSchedule />} />

          <Route path="/cricket-news" element={<CricketNews />} />          
          <Route path="/health-fitness" element={<HealthFitness />} />          
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/write-to-us" element={<WritePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/store" element={<Store />} />
          <Route path="/events" element={<Events />} />
          <Route path="/web-stories" element={<WebStories />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/internal-page" element={<InternalPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/settings" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
