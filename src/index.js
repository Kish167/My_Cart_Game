

const app = document.querySelector('.app');

const chooseLevel = document.createElement('div');
app.appendChild(chooseLevel); 

window.application = {};

function renderLevel() {

  const box = document.createElement('div');
  box.className = 'box';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Выбери сложность';

  const level = document.createElement ('div');
  level.className = 'level';
  

  const label = document.createElement ('label');
  label.className = "label";
  label.textContent = '1';
  

  
  
  const label2 = document.createElement ('label');
  label2.className = "label";
  label2.textContent = '2';
  

  const label3 = document.createElement ('label');
  label3.className = "label";
  label3.textContent = '3';
  


  const choose = document.createElement('input');
  choose.type = "radio"
  choose.name = "level"
  choose.className = 'choose';
  choose.value = '1';
  localStorage.choose;


  const choose2 = document.createElement('input');
  choose2.type = "radio"
  choose2.name = "level"
  choose2.className = 'choose';
  choose2.value = '2';
  localStorage.choose2;

  const choose3 = document.createElement('input');
  choose3.type = "radio"
  choose3.name = "level"
  choose3.className = 'choose';
  choose3.value = '3';
  localStorage.choose3;


  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Старт'
  button.onclick = function selectLevel (){
    if(choose.checked) {
      console.log('Вы выбрали легкий уровень')
      renderEasy()
    }
    if(choose2.checked) {
      console.log('Вы выбрали средний уровень')
      renderMedium()
    }
    if(choose3.checked) {
      console.log('Вы выбрали сложный уровень')
      renderHard()
    }
  }

  chooseLevel.appendChild(box);
  box.appendChild(title);
  box.appendChild(level);
  level.appendChild(label);
  level.appendChild(label2);
  level.appendChild(label3);
  label.appendChild(choose);
  label2.appendChild(choose2);
  label3.appendChild(choose3); 
  box.appendChild(button);
}

renderLevel();

function renderEasy() {
  
  const app = document.querySelector('.app');

  
  const game = document.createElement('div');

  const timer = document.createElement('div');

  const timer_minute = document('div');
  timer_minute.textContent = '00';
  timer_minute.className = 'timer'

  const timer_seconds = document('div');
  timer_seconds.textContent = '00';
  timer_seconds.className = 'timer';





  


  app.appendChild(game);
  game.appendChild(timer);
  timer.appendChild(timer_minute);
  timer.appendChild(timer_seconds);

  

}

renderEasy()

import './style.css';