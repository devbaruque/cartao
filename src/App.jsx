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
        <Button link={"http://t.me/Dev404notfound"}>
        Telegram
        </Button>
        <Button link={"ttps://discord.gg/XrYvCbEEh"}>
        Discord
        </Button>
        <Button link={""}>
        GitHub
        </Button>
        <Button link={""}>
       LinkedIn
        </Button>
        <Cop />
      </Card>
  );
};

export default App
