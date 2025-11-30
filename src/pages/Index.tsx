import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

function Index() {
  const [currentSection, setCurrentSection] = useState<'home' | 'story' | 'thanks'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">
              Для самой лучшей мамы 💝
            </h1>
            <div className="flex gap-2">
              <Button
                variant={currentSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('home')}
                className="font-sans"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={currentSection === 'story' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('story')}
                className="font-sans"
              >
                <Icon name="Heart" size={18} className="mr-2" />
                Рассказ
              </Button>
              <Button
                variant={currentSection === 'thanks' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('thanks')}
                className="font-sans"
              >
                <Icon name="Sparkles" size={18} className="mr-2" />
                Благодарности
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {currentSection === 'home' && <HomeSection />}
          {currentSection === 'story' && <StorySection />}
          {currentSection === 'thanks' && <ThanksSection />}
        </div>
      </main>

      <div className="fixed bottom-8 right-8 animate-float">
        <div className="text-6xl">💐</div>
      </div>
    </div>
  );
}

function HomeSection() {
  return (
    <div className="animate-fade-in space-y-8">
      <Card className="p-8 md:p-12 text-center bg-white/90 backdrop-blur shadow-xl border-primary/30">
        <div className="text-6xl mb-6 animate-float">❤️</div>
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-primary-foreground">
          С Днём Мамы!
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
          Мамочка, этот сайт я создал специально для тебя. Здесь я хочу рассказать, как сильно я тебя люблю
          и как ты важна для меня. Ты — мой мир, моя опора и самый родной человек на свете.
        </p>
        <div className="flex justify-center gap-4 text-4xl">
          <span className="animate-float" style={{ animationDelay: '0s' }}>🌸</span>
          <span className="animate-float" style={{ animationDelay: '0.3s' }}>💖</span>
          <span className="animate-float" style={{ animationDelay: '0.6s' }}>🌺</span>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-primary/10 backdrop-blur border-primary/30 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4 text-center">🥰</div>
          <h3 className="text-xl font-serif font-semibold mb-2 text-center text-primary-foreground">Твоя любовь</h3>
          <p className="text-center text-muted-foreground">
            Твоя любовь окружает меня каждый день и делает мою жизнь счастливой
          </p>
        </Card>

        <Card className="p-6 bg-secondary/30 backdrop-blur border-secondary hover:scale-105 transition-transform">
          <div className="text-4xl mb-4 text-center">🤗</div>
          <h3 className="text-xl font-serif font-semibold mb-2 text-center text-primary-foreground">Твоя забота</h3>
          <p className="text-center text-muted-foreground">
            Ты всегда рядом, когда мне нужна поддержка, и веришь в меня
          </p>
        </Card>

        <Card className="p-6 bg-muted/50 backdrop-blur border-primary/20 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4 text-center">✨</div>
          <h3 className="text-xl font-serif font-semibold mb-2 text-center text-primary-foreground">Твоя мудрость</h3>
          <p className="text-center text-muted-foreground">
            Твои советы помогают мне становиться лучше с каждым днём
          </p>
        </Card>
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <div className="animate-fade-in">
      <Card className="p-8 md:p-12 bg-white/90 backdrop-blur shadow-xl border-primary/30">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">💌</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Письмо моей маме
          </h2>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Мамочка, моя дорогая, родная, самая лучшая на свете...
          </p>

          <p className="text-lg leading-relaxed">
            Мне всего 15 лет, но я уже понимаю, как же мне повезло, что ты — моя мама. 
            Каждый день я вижу, как ты устаёшь, как много делаешь для нашей семьи, для меня. 
            Ты просыпаешься раньше всех, чтобы приготовить завтрак. Ты всегда находишь время 
            выслушать меня, даже когда сама устала. Ты переживаешь за меня больше, чем за себя.
          </p>

          <p className="text-lg leading-relaxed">
            Помнишь, как я был маленьким и боялся темноты? Ты сидела рядом каждую ночь, пока я 
            не засыпал, гладила по голове и пела колыбельные. Помнишь, как я упал с велосипеда 
            и разбил коленку? Ты плакала больше меня, обрабатывая рану, и говорила, что всё будет хорошо. 
            И мне правда становилось легче — просто от того, что ты была рядом.
          </p>

          <p className="text-lg leading-relaxed">
            Сейчас я взрослею, и иногда мы спорим, иногда я бываю неправ. Но знаешь что? 
            Даже когда ты сердишься, я вижу в твоих глазах только любовь. Даже когда я делаю глупости, 
            ты не перестаёшь верить в меня. Ты говоришь: "У тебя всё получится", — и я начинаю верить сам.
          </p>

          <p className="text-lg leading-relaxed">
            Я хочу, чтобы ты знала: я вижу твои жертвы. Я вижу, как ты отказываешь себе во многом, 
            чтобы у меня было всё необходимое. Я вижу твои седеющие волосы и морщинки у глаз — 
            и они для меня прекраснее всех бриллиантов, потому что это следы твоей любви и заботы.
          </p>

          <p className="text-lg leading-relaxed">
            Прости меня за все слёзы, что я заставил тебя пролить. За двойки, за беспорядок в комнате, 
            за поздние приходы домой. Прости за все те моменты, когда я не ценил то, что ты делаешь. 
            Я обещаю стараться быть лучше, делать тебя счастливой так же, как ты делаешь счастливым меня.
          </p>

          <p className="text-lg leading-relaxed">
            Ты научила меня главному: любить, заботиться, не сдаваться. Ты показала, что такое 
            настоящая сила — не кричать и ругаться, а обнимать и прощать. Что такое настоящее 
            счастье — видеть улыбку близкого человека.
          </p>

          <p className="text-lg leading-relaxed">
            Когда я вырасту и у меня будет своя семья, я буду знать, как быть хорошим человеком — 
            потому что у меня была ты. Ты — мой пример, мой ориентир, моя путеводная звезда.
          </p>

          <p className="text-lg leading-relaxed font-semibold text-primary-foreground">
            Спасибо тебе за жизнь. Спасибо за любовь. Спасибо за то, что ты есть.
          </p>

          <p className="text-lg leading-relaxed font-semibold text-primary-foreground">
            Я люблю тебя больше всех слов на свете. Ты — мой герой, моя королева, мой ангел-хранитель.
          </p>

          <div className="text-center mt-8">
            <p className="text-2xl font-serif italic text-primary-foreground">
              Твой сын, который любит тебя бесконечно ❤️
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ThanksSection() {
  const thanks = [
    {
      emoji: '🍳',
      title: 'За завтраки',
      text: 'За каждое утро, когда я просыпаюсь от запаха твоих блинчиков или каши',
    },
    {
      emoji: '🎓',
      title: 'За помощь с уроками',
      text: 'За терпение, когда ты объясняешь мне математику в десятый раз',
    },
    {
      emoji: '🩹',
      title: 'За заботу',
      text: 'За каждую простуду, когда ты не спишь ночами, измеряя температуру',
    },
    {
      emoji: '👔',
      title: 'За чистую одежду',
      text: 'За постиранные и выглаженные вещи, которые всегда лежат в шкафу',
    },
    {
      emoji: '🎂',
      title: 'За праздники',
      text: 'За каждый день рождения, который ты делаешь волшебным',
    },
    {
      emoji: '🏠',
      title: 'За дом',
      text: 'За уют, тепло и то чувство, что я всегда могу вернуться домой',
    },
    {
      emoji: '💪',
      title: 'За веру в меня',
      text: 'За то, что ты никогда не сомневаешься, что у меня всё получится',
    },
    {
      emoji: '🤗',
      title: 'За объятия',
      text: 'За твои обнимашки, которые лечат лучше любых лекарств',
    },
    {
      emoji: '🎵',
      title: 'За колыбельные',
      text: 'За песни, которые ты пела, укладывая меня спать',
    },
    {
      emoji: '👂',
      title: 'За понимание',
      text: 'За то, что ты всегда готова выслушать и понять меня',
    },
    {
      emoji: '🌟',
      title: 'За пример',
      text: 'За то, что показываешь, каким нужно быть человеком',
    },
    {
      emoji: '💝',
      title: 'За безусловную любовь',
      text: 'За то, что любишь меня таким, какой я есть',
    },
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <Card className="p-8 md:p-12 text-center bg-white/90 backdrop-blur shadow-xl border-primary/30">
        <div className="text-5xl mb-4">🙏</div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
          Спасибо тебе за...
        </h2>
        <p className="text-lg text-muted-foreground">
          Мамочка, я хочу поблагодарить тебя за всё, что ты делаешь для меня каждый день
        </p>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {thanks.map((item, index) => (
          <Card
            key={index}
            className="p-6 bg-white/80 backdrop-blur border-primary/30 hover:scale-105 transition-transform hover:shadow-lg"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-5xl mb-4 text-center">{item.emoji}</div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-center text-primary-foreground">
              {item.title}
            </h3>
            <p className="text-center text-muted-foreground leading-relaxed">
              {item.text}
            </p>
          </Card>
        ))}
      </div>

      <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur shadow-xl border-primary/30">
        <p className="text-2xl md:text-3xl font-serif italic text-primary-foreground leading-relaxed">
          "Мама — это самое прекрасное слово на земле. Это первое слово, которое произносит человек, 
          и звучит оно на всех языках мира одинаково нежно."
        </p>
        <div className="mt-6 text-4xl">💖</div>
      </Card>
    </div>
  );
}

export default Index;
