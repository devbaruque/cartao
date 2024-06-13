import React from 'react'
import Card from './components/Card'
import Button from './components/Button';
import Header from './components/Header';
import Cop from './components/Footer';

function App() {

  return (
      <Card>
          <Header />
        <Button link={"https://wa.me/+5516993096286"}>
        Whatsapp
        </Button>
        <Button link={"https://www.instagram.com/dev.baruque?igsh=aWk0N204b2JybHpz"}>
        Instagram
        </Button>
        <Button link={"http://t.me/Dev404notfound"}>
        Telegram
        </Button>
        <Button link={"https://discord.gg/XrYvCbEEh"}>
        Discord
        </Button>
        <Button link={"https://github.com/devbaruque"}>
        GitHub
        </Button>
        <Button link={"https://biblia-two.vercel.app/"}>
       I.A Bíblico
        </Button>
        <Cop />
      </Card>
  );
};

export default App
