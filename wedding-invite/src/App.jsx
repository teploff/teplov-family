import './App.css';

export default function App() {
  return (
    <div className="wedding-root">
      <header className="wedding-header">
        <h1>Саша & Саша</h1>
        <p className="wedding-date">12 сентября 2025, Москва</p>
      </header>
      <section className="wedding-photo">
        <img src="/wedding-invite/we.jpg" alt="Саша и Саша" />
      </section>
      <section className="wedding-info">
        <h2>Дорогие и любимые наши!</h2>
        <p>
          Мы счастливы пригласить вас разделить с нами один из самых важных дней в нашей жизни! 💕<br/>
          <b>12 сентября 2025 года</b> мы станем семьёй, и нам очень хочется, чтобы рядом были самые близкие и дорогие сердцу люди! ✨<br/>
          Пусть этот день запомнится нам всем как тёплый, душевный и наполненный любовью праздник! 🎉
        </p>
      </section>
      <section className="wedding-details">
        <h3>Программа дня</h3>
        <div className="program-timeline">
          <div className="program-item">
            <div className="time">15:00</div>
            <div className="event">
              <strong>Сбор гостей</strong><br/>
              <span className="location">Дворец бракосочетания №4</span>
            </div>
          </div>
          <div className="program-item">
            <div className="time">15:30</div>
            <div className="event">
              <strong>Торжественная церемония</strong><br/>
              <span className="location">Дворец бракосочетания №4</span>
            </div>
          </div>
          <div className="program-item">
            <div className="time">17:30</div>
            <div className="event">
              <strong>Банкет</strong><br/>
              <span className="location">Ресторан Lauren Parker</span>
            </div>
          </div>
        </div>
      </section>

      <section className="richard-section">
        <h3>🐕 Ремарка от вуф-организатора</h3>
        <div className="richard-quote">
          <div className="richard-photo">
            <img src="/wedding-invite/richard.jpg" alt="Ричард-корги" />
          </div>
          <div className="richard-text">
            <p className="richard-message">
              "Гав-гав! Я, Ричард, главный организатор этого торжества, 
              очень прошу: пусть невеста останется единственной королевой в белом! 
              А фуксия пусть не конфликтует с нашими свадебными оттенками! 🐕✨
              Выберите другие прекрасные цвета — я буду очень благодарен!"
            </p>
            <p className="richard-signature">— Ричард, корги-стилист</p>
            <p className="richard-note">(Обещали много заплатить, но дали только пару вкусняшек 🦴)</p>
          </div>
        </div>
      </section>

      <section className="wedding-locations">
        <h3>Места проведения</h3>
        
        <div className="location-card">
          <h4>🏛️ Дворец бракосочетания №4</h4>
          <p className="location-address">
            <a href="https://yandex.ru/maps/-/CHThq42-" target="_blank" rel="noopener noreferrer">
              Москва, ул. Бутырская 17
            </a>
          </p>
          <p className="location-description">
            Торжественная церемония бракосочетания и фотосессия
          </p>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e2e2b1e2b1e2b1e2b1e2b1e2b1e2b1e2&amp;source=constructor&amp;ll=37.583376%2C55.798301&amp;z=16&amp;pt=37.583376%2C55.798301%2Cpm2rdm"
            width="100%" height="200" frameBorder="0" title="Карта Дворца бракосочетания" 
            style={{borderRadius: '12px', marginTop: '1em'}} allowFullScreen>
          </iframe>
        </div>

        <div className="location-card">
          <h4>🍽️ Ресторан Lauren Parker</h4>
          <p className="location-address">
            <a href="https://yandex.ru/maps/-/CHTs4BM9" target="_blank" rel="noopener noreferrer">
              Москва, ул. Станиславского 15
            </a>
          </p>
          <p className="location-description">
            Ресторан европейской кухни в историческом здании XIX века
          </p>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e2e2b1e2b1e2b1e2b1e2b1e2b1e2b1e2&amp;source=constructor&amp;ll=37.661401%2C55.744916&amp;z=16&amp;pt=37.661401%2C55.744916%2Cpm2rdm"
            width="100%" height="200" frameBorder="0" title="Карта ресторана" 
            style={{borderRadius: '12px', marginTop: '1em'}} allowFullScreen>
          </iframe>
        </div>
      </section>
      <footer className="wedding-footer">
        <p>Если у вас возникнут вопросы — звоните или пишите нам в любое время:</p>
        <p><a href="tel:+79263482866">+7 926 348-28-66</a> | <a href="https://t.me/teploff">Telegram</a></p>
        <p className="wedding-love">С любовью, Саша и Саша</p>
      </footer>
    </div>
  );
}
