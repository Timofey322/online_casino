import React from 'react';
import styles from './controlledform.css';
import { useState } from 'react';

export function ControlledForm() {
    const [formVisible, setFormVisible] = useState(true);
    const hideForm = () => {
      setFormVisible(false);
  }
  const showForm = () => {
    setFormVisible(true);
}
  return (
    <div className={styles.module}>
      {formVisible && (
      <div>
        <p className={styles.module__title}>Сообщение в свободной форме</p>  
        <form className={styles.module__registration} method="POST">
                  <input className={styles.input} type="text"  required name="name" placeholder="Ваше имя"/>
                  <input className={styles.input} type="text"  required name="company" placeholder="Компания"/>
                  <input className={styles.input} type="tel"  required name="telephone" placeholder="Телефон"/>
                  <input className={styles.input} type="email"  required name="e-mail" placeholder="Электронная почта"/>
                  <textarea className={styles.textarea} name="message"  placeholder="Напишите текст обращения"></textarea>
                  <button className={styles.question_btn} onClick={hideForm}>?</button>
                  <label htmlFor="myfile" className={styles.input_file}>
                    <input type="file" name="file"/>		
                    <span>или прикрепите файл</span>
                  </label>
                  <div className={styles.basement}>
                      <label className={styles.checkbox} >
                        <input className={styles.checkbox__input} type="checkbox"  required/>
                        <span className={styles.checkbox__checkmark}></span>
                        <span className={styles.checkbox__body}>Согласен на обработку моих <div>персональных данных</div></span>
                      </label>
                      <button className={styles.submit_btn} type="submit">Отправить</button>
                  </div>
        </form>
        </div>
       )}
      {!formVisible && (
        <div className={styles.flex_center}>
          <p className={styles.question_title}>Что написать в сообщении или файле?</p>
          <ol className={styles.question_list}>
            <li className={styles.question_item}>
              <p className={styles.question_item__question}>Чем вы занимаетесь?</p>
              <p className={styles.question_item__content}>Расскажите о своей компании.<br/>Как работаете, на чем зарабатываете?<br/>Кто ваши конкуренты?<br/>Чем вы от них отличаетесь?</p>
            </li>
            <li className={styles.question_item}>
              <p className={styles.question_item__question}>В чем ваша задача?</p>
              <p className={styles.question_item__content}>Чего хотите достичь в ближайшем будущем?<br/>Что вам мешает?</p>
            </li>
            <li className={styles.question_item}>
              <p className={styles.question_item__question}>Каким вы видите решение задачи?</p>
              <p className={styles.question_item__content}>Как планируете достичь своих целей?<br/>Какие решения пробовали раньше?</p>
            </li>
            <li className={styles.question_item}>
              <p className={styles.question_item__question}>Какие у вас ожидания от результата?</p>
              <p className={styles.question_item__content}>В каком виде вы хотите видеть решение вашей задачи?<br/>В какой срок?<br/>Почему он важен? На что это должно быть похоже?</p>
            </li>
            <li className={styles.question_item}>
              <p className={styles.question_item__question}>Сколько денег планируете потратить?</p>
              <p className={styles.question_item__content}>Каков ваш бюджет?<br/>Почему вы готовы потратить именно такую сумму?</p>
            </li>
          </ol>
          <button className={styles.back_btn} onClick={showForm}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <g clip-path="url(#clip0_151_189)">
                <path d="M16.8 14.2V21.6L20.4 21.9C27.8 22.6 33.5 25.6 37.1 29.4C33 28 27.8 27.3 21 27L16.8 26.8V33.9L7.00003 24.1L16.8 14.2ZM19.7 6C19.5434 5.99115 19.3872 6.02342 19.2468 6.09358C19.1065 6.16375 18.9869 6.26938 18.9 6.4L2.40003 23.1C2.15406 23.375 2.01807 23.731 2.01807 24.1C2.01807 24.469 2.15406 24.825 2.40003 25.1L18.9 41.6C18.9869 41.7306 19.1065 41.8362 19.2468 41.9064C19.3872 41.9766 19.5434 42.0088 19.7 42C19.8578 41.9874 20.0116 41.9437 20.1524 41.8714C20.2932 41.7992 20.4183 41.6998 20.5206 41.5789C20.6228 41.4581 20.7002 41.3182 20.7481 41.1674C20.7961 41.0165 20.8137 40.8577 20.8 40.7V31C36.5 31.7 41.9 34.8 44.3 40.2C44.7 41 45.1 41.3 45.4 41.3C45.7 41.3 46 40.9 46 40.3C45.8 29.8 36 19.4 20.8 17.9V7.3C20.8137 7.1423 20.7961 6.98346 20.7481 6.83261C20.7002 6.68176 20.6228 6.54189 20.5206 6.42106C20.4183 6.30022 20.2932 6.20081 20.1524 6.12855C20.0116 6.05628 19.8578 6.01259 19.7 6Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_151_189">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p>Вернуться к заполнению</p>
          </button>
        </div>
      )}
      </div>
  );
}
