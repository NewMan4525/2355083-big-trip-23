//accept argument data for then markup (data)

export const eventDotTemplate = (data) => (`
<li class="trip-events__item">
  <div class="event">
    <details class="visually-hidden" value="${data.id}"></details>
    <time class="event__date" datetime="${data.date.datetime}">${data.date.month} ${data.date.date}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="${data.icon.src}" alt="${data.icon.alt}">
    </div>
    <h3 class="event__title">${data.title}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${data.start.datetime}">${data.start.text}</time>
        —
        <time class="event__end-time" datetime="${data.finish.datetime}">${data.finish.text}</time>
      </p>
      <p class="event__duration">${data.duration}</p>
    </div>
    <p class="event__price">
      ${data.currency}<span class="event__price-value">${data.price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${data.offers.map((item) => (`

        <li class="event__offer">
          <span class="event__offer-title">${item.title}</span>
          +${data.currency}
          <span class="event__offer-price">${item.price}</span>
        </li>

      `)).join('')}
    </ul>
    <button class="${data.favBtnClassList}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
`);
