import { useState } from 'preact/hooks';
import { COUNTRYS, SOCIAL_LINKS, FOOTER_DIRECTORY } from '@assets/constant.js';
import style from './style.module.scss';
import twitter from "@assets/icon/twitter.svg"
import instagram from "@assets/icon/instagram.svg"
import reddit from "@assets/icon/reddit.svg"

export default function Footer() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [email, setEmail] = useState('');

  const onEmailFocus = () => {
    setEmailFocus(true);
  }

  const onEmailBlur = () => {
    setEmailFocus(false);
  }

  const onEmailChange = e => {
    const { value } = e.target;
    // console.log('subscribe', value);
    setEmail(value);
    return value;
  }

  const onEmailSubmit = () => {
    // TODO: 验证邮箱是否可用
    console.log('Submit', email);
    setEmail('');
  }

  return (
    <footer class={style.footer}>
      <section class={style.footerMain}>
        <div class={style.subscribe}>
          <p class={style.subscribeTitle}>KEEP IN TOUCH WITH XREAL</p>
          <div class={`${style.email} ${emailFocus ? style.emailFocus : ''}`}>
            <input placeholder="Email" type="text" value={email} onInput={onEmailChange} onFocus={onEmailFocus} onBlur={onEmailBlur} />
            {(emailFocus || !!email) && <button onClick={onEmailSubmit}>Subscribe</button>}
          </div>
          <ul class={style.social}>
            {
              SOCIAL_LINKS.map((item, _) => <li key={item.label}>
                <a href={item.link}>
                  <img src={`/src/assets/icon/${item.label}.svg`} alt={item.label} height="20" width="20" />
                </a>
              </li>)
            }
          </ul>
        </div>
        <div class={style.links}>
          {
            FOOTER_DIRECTORY.map((item, _) => {
              return <div class={style.linksCol} key={item.id}>
                <a class={style.linksColTitle} href={item.title.link}>{item.title.label}</a>
                <ul>
                  {
                    item.links.map((subItem, _) => <li key={subItem.label}>
                      <a class={style.linksColLink} href={subItem.link}>{subItem.label}</a>
                    </li>)
                  }
                </ul>
              </div>
            })
          }
        </div>
      </section>
      <section class={style.footerBottom}>
        <ul class={style.local}>
          {
            COUNTRYS.map((item, _) => {
              return <li key={item.code}>
                <a class={style.localLink} href={`/${item.code}`}>{item.name}</a>
              </li>
            })
          }
        </ul>
        <div class={style.divider}></div>
        <div class={style.legal}>
          <div class={style.copyright}>© XREAL, Inc. All Rights Reserved.</div>
          <div class={style.legalLinks}>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
          </div>
        </div>
      </section>
    </footer>
  );
}
