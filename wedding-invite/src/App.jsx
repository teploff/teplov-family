import './App.css';

export default function App() {
  return (
    <div className="wedding-root">
      <header className="wedding-header">
        <h1>Саша & Буба</h1>
        <p className="wedding-date">12 сентября 2025, Москва</p>
      </header>
      <section className="wedding-photo">
        <img src="/we.jpg" alt="Саша и Буба" />
      </section>
      <section className="wedding-info">
        <h2>Дорогие и любимые наши!</h2>
        <p>
          Мы счастливы пригласить вас разделить с нами один из самых важных дней в нашей жизни.<br/>
          <b>12 сентября 2025 года</b> мы станем семьёй, и нам очень хочется, чтобы рядом были самые близкие и дорогие сердцу люди.<br/>
          Пусть этот день запомнится нам всем как тёплый, душевный и наполненный любовью праздник!
        </p>
      </section>
      <section className="wedding-details">
        <h3>Программа дня</h3>
        <ul>
          <li>15:00 — Сбор гостей, welcome drink</li>
          <li>16:00 — Торжественная церемония</li>
          <li>17:00 — Фотосессия, лёгкий фуршет</li>
          <li>19:00 — Банкет, танцы и веселье до позднего вечера</li>
        </ul>
      </section>
      <section className="wedding-location">
        <h3>Место проведения</h3>
        <p>Ресторан европейской кухни в историческом здании XIX века "Lauren Parker",<br/>
          <a href="https://yandex.ru/maps/-/CHTs4BM9" target="_blank" rel="noopener noreferrer">Москва, ул. Станиславского 15</a>
        </p>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e2e2b1e2b1e2b1e2b1e2b1e2b1e2b1e2&amp;source=constructor&amp;ll=37.661401%2C55.744916&amp;z=16&amp;pt=37.661401%2C55.744916%2Cpm2rdm"
          width="100%" height="250" frameBorder="0" title="Карта" style={{borderRadius: '12px', marginTop: '1em'}} allowFullScreen></iframe>
      </section>
      <footer className="wedding-footer">
        <p>Если у вас возникнут вопросы — звоните или пишите нам в любое время:</p>
        <p><a href="tel:+79991234567">+7 999 123-45-67</a> | <a href="https://t.me/teploff">Telegram</a></p>
        <p className="wedding-love">С любовью, Саша и Буба</p>
      </footer>
    </div>
  );
}
