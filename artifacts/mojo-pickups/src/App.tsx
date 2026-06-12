import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Pickups from "@/pages/pickups";
import StratocasterPickups from "@/pages/pickups/stratocaster";
import TelecasterPickups from "@/pages/pickups/telecaster";
import HumbuckerPickups from "@/pages/pickups/humbucker";
import P90Pickups from "@/pages/pickups/p90";
import GoldFoilPickups from "@/pages/pickups/gold-foil";
import JazzmasterPickups from "@/pages/pickups/jazzmaster";
import CuNiFePickups from "@/pages/pickups/cunife";
import MojotronPickups from "@/pages/pickups/mojotron";
import CharlieChristianPickups from "@/pages/pickups/charlie-christian";
import DynasPickups from "@/pages/pickups/dynas";
import BassPickups from "@/pages/pickups/bass";
import LipstickPickups from "@/pages/pickups/lipstick";
import Process from "@/pages/process";
import Contact from "@/pages/contact";
import ProductPage from "@/pages/product";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pickups" component={Pickups} />
        <Route path="/pickups/stratocaster" component={StratocasterPickups} />
        <Route path="/pickups/telecaster" component={TelecasterPickups} />
        <Route path="/pickups/humbucker" component={HumbuckerPickups} />
        <Route path="/pickups/p90" component={P90Pickups} />
        <Route path="/pickups/gold-foil" component={GoldFoilPickups} />
        <Route path="/pickups/jazzmaster" component={JazzmasterPickups} />
        <Route path="/pickups/cunife" component={CuNiFePickups} />
        <Route path="/pickups/mojotron" component={MojotronPickups} />
        <Route path="/pickups/charlie-christian" component={CharlieChristianPickups} />
        <Route path="/pickups/dynas" component={DynasPickups} />
        <Route path="/pickups/bass" component={BassPickups} />
        <Route path="/pickups/lipstick" component={LipstickPickups} />
        <Route path="/pickups/:category/:product" component={ProductPage} />
        <Route path="/process" component={Process} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
