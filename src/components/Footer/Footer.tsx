import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import style from './Footer.module.scss';
import img from './DeepPavlov.png';

type Props =  RouteComponentProps;

interface State {
  lang: 'ru' | 'en' | 'mu';
}

class Nav extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      lang: 'en',
    };
  }
  componentDidMount() {
    const { location: { pathname } } = this.props;
    if (pathname === '/') {
      this.setState({ lang: 'en' });
    } else {
      this.setState({ lang: pathname.split('/')[1] as 'ru' | 'en' | 'mu' });
    }
  }
  static getDerivedStateFromProps(props: Props) {
    const { location: { pathname } } = props;
    return { lang: pathname.split('/')[1] as 'ru' | 'en' | 'mu' };
  }

  render () {
    return (
      <footer className={style.footer}>
        {false && <div className={style.saas}>
          <p>Docker</p>
          <a
          href="http://docs.deeppavlov.ai/en/master/intro/quick_start.html#docker-images"
          rel="noopener noreferrer"
          target="_blank"
          >
            DeepPavlov Docker images reference
          </a>
        </div>}
        <div className={style.saas}>
          <p>Try Pre-Trained Models on Your Data in Cloud NLP Platform (Free & Unlimited Alpha Version)</p>
          <div>
            You can try our pre-trained models on your data via SaaS NLP platform.
            3 models are available in Alpha version:
            <ul>
              <li>Named Entity Recognition (multilingual)</li>
              <li>Sentiment Classification (RU)</li>
              <li>Context QA (multilingual, SQUAD - based)</li>
            </ul>

            <a href="http://2276.lnsigo.mipt.ru/" target="_blank" rel="noopener noreferrer">
              Get started </a>
              with pre-trained machine learning model to reveal the structure and meaning of text.
          </div>
        </div>
        <div className={style.saas}>
          <p>Fine-Tune Models for Your Specific Needs</p>
          <div>
            For your specific NLP tasks you can fine-tune DeepPavlov models on your data or we can do it for you.
            Please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfguwTOEcwBaccDMm5HSvqxsz4X3fw1T2lnI6hYf3AhcXOy0g/viewform" target="_blank" rel="noopener noreferrer">
              fill out this form </a>
            to discuss your needs with our team.
          </div>
        </div>
        <a href="https://github.com/deepmipt">
            <img src={img} alt="powered by DeepPavlov"/>
            © deepmipt on GitHub
        </a>
      </footer>
    );
  }

}

export default withRouter(Nav);
