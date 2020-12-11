import React from 'react';

export class DeliveryNotice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0,
      contentHidden: 0,
      contentOpen: false
    }
    this.refButton = React.createRef();
    this.refContent = React.createRef();
    this.refText = React.createRef();
  }

  handleDropDown = () => {
    const toggler = !this.state.contentOpen;

    if (!this.state.contentOpen) {
      this.refText.current.classList.remove('delivery-notice_text--hidden');
      this.refContent.current.style.height = this.state.contentHeight + "px";
    } else {
      this.refContent.current.style.height = this.contentHeight + "px";
    }

    this.setState({
      contentOpen: toggler
    })
  };

  componentDidMount = () => {
    console.log(this.refContent.current.clientHeight);
  

    
    
    this
      .refButton
      .current
      .addEventListener('click', this.handleDropDown);
  }

  componentWillUnmount = () => {
    this
      .refButton
      .current
      .removeEventListener('click', this.handleDropDown);
  }

  render() {
    return (
      <div className="container">
        <div ref={this.refContent} className="deliver-notice_text-wrap">
          <p className="delivery-notice_text" ref={this.refText}>
            Все наши курьеры доставляют заказы в медицинских масках, одноразовых перчатках,
            а также регулярно обрабатывают руки и автомобили. Доставка день-в-день
            осуществляется по Москве и Химкам при оформлении заказа до 14:00 и при условии
            свободных мест на доставку. Ваш заказ не покидает холодильника даже в пути! Мы
            доставляем только специальным транспортом, который оборудован рефрижераторами и
            поддерживает специальную температуру в кузове.Все наши курьеры доставляют заказы
            в медицинских масках, одноразовых перчатках, а также регулярно обрабатывают руки
            и автомобили. Доставка день-в-день осуществляется по Москве и Химкам при
            оформлении заказа до 14:00 и при условии свободных мест на доставку. Ваш заказ
            не покидает холодильника даже в пути! Мы доставляем только специальным
            транспортом, который оборудован рефрижераторами и поддерживает специальную
            температуру в кузове.
          </p>
        </div>

        <button ref={this.refButton} className="delivery-notice_read-more">
          Читать больше
        </button>
      </div>
    );
  };
};