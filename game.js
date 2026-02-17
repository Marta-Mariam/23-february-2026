/* ============================================
   23 ФЕВРАЛЯ — ЦАД — "Какой ты воин ЦАД?"
   ============================================ */

const state = {
    playerName: '',
    currentQuestion: 0,
    scores: { cyber: 0, analyst: 0, justice: 0, command: 0, fortress: 0, archive: 0 }
};

const questions = [
    {
        icon: '🏰',
        text: 'Утро. Дозорный кричит: «Враги на горизонте!» Твой первый приказ?',
        left:  { label: 'Активировать кибер-щит!',              category: 'cyber' },
        right: { label: 'Всем по местам — беру командование!',   category: 'command' }
    },
    {
        icon: '📜',
        text: 'В подвале нашли тайную комнату с древними свитками!',
        left:  { label: 'Каталогизировать — каждый свиток бесценен!', category: 'archive' },
        right: { label: 'Экспертиза подлинности — вдруг подделка',    category: 'justice' }
    },
    {
        icon: '💡',
        text: 'Среди ночи вырубилось электричество во всей крепости!',
        left:  { label: 'Инструмент при мне — починю генератор!', category: 'fortress' },
        right: { label: 'Запускаю аварийный сервер с UPS',         category: 'cyber' }
    },
    {
        icon: '🗺️',
        text: 'Гонец привёз донесения из 12 крепостей. Что с ними?',
        left:  { label: 'Сведу в отчёт и найду закономерности', category: 'analyst' },
        right: { label: 'В архив строго по описи и датировке!',   category: 'archive' }
    },
    {
        icon: '⚖️',
        text: 'Два капитана спорят насмерть — кто из них прав?',
        left:  { label: 'Рассужу строго по уставу и закону',        category: 'justice' },
        right: { label: 'Изучу факты — решение на основе данных',   category: 'analyst' }
    },
    {
        icon: '🔨',
        text: 'После осады стены крепости в руинах...',
        left:  { label: 'Засучу рукава — начну восстановление!',  category: 'fortress' },
        right: { label: 'Назначу ответственных по участкам работ', category: 'command' }
    },
    {
        icon: '🔐',
        text: 'Шпионы зашифровали все донесения! Как расшифровать?',
        left:  { label: 'Напишу алгоритм расшифровки за вечер',        category: 'cyber' },
        right: { label: 'Проанализирую контекст — найду скрытый смысл', category: 'analyst' }
    },
    {
        icon: '👑',
        text: 'Найден сундук с договорами прошлых королей. Что делать?',
        left:  { label: 'Сохраню для истории — потомки оценят!',    category: 'archive' },
        right: { label: 'Проверю юридическую силу каждого договора', category: 'justice' }
    },
    {
        icon: '🎉',
        text: 'Пора организовать большой военный праздник!',
        left:  { label: 'Лично возглавлю — построю гарнизон!',        category: 'command' },
        right: { label: 'Запрограммирую шоу дронов — будет зрелище!', category: 'cyber' }
    },
    {
        icon: '🕊️',
        text: 'Война окончена. Какова твоя мирная миссия для ЦАД?',
        left:  { label: 'Оцифрую все летописи для потомков',  category: 'archive' },
        right: { label: 'Отстрою крепость лучше прежнего!',   category: 'fortress' }
    },
    {
        icon: '📊',
        text: 'Из штаба прислали гору противоречивых отчётов. Разобраться нужно к утру!',
        left:  { label: 'Построю сводную таблицу — истина в цифрах', category: 'analyst' },
        right: { label: 'Укреплю кабинет и засяду до рассвета',      category: 'fortress' }
    },
    {
        icon: '⚔️',
        text: 'Соседний гарнизон просит подмоги — у них бунт!',
        left:  { label: 'Разберусь по закону — кто прав, кто виноват', category: 'justice' },
        right: { label: 'Выдвигаюсь лично — возьму ситуацию под контроль', category: 'command' }
    },
    {
        icon: '🛰️',
        text: 'Перехвачено странное послание на неизвестном языке!',
        left:  { label: 'Подключу дешифровальную машину',             category: 'cyber' },
        right: { label: 'Сопоставлю с известными шифрами из архивов', category: 'analyst' }
    },
    {
        icon: '📣',
        text: 'Нужно поднять боевой дух гарнизона перед инспекцией!',
        left:  { label: 'Организую смотр и произнесу речь!',    category: 'command' },
        right: { label: 'Подготовлю выставку славных побед ЦАД', category: 'archive' }
    },
    {
        icon: '🔎',
        text: 'В архиве обнаружен документ с поддельной печатью!',
        left:  { label: 'Проведу юридическую экспертизу подлинности', category: 'justice' },
        right: { label: 'Починю и настрою систему охраны архива',     category: 'fortress' }
    }
];

const results = {
    cyber: {
        badge: '🤖', title: 'Кибер-Самурай из 2077 года',
        century: 'Эпоха технологий', theme: 'theme-cyber',
        description: 'Твоё оружие — код, алгоритмы и нейросети. Ты защищаешь цифровые рубежи, где каждый файрвол — крепостная стена, а каждый скрипт — верный клинок. Там, где другие видят «ошибку», ты видишь решение. Благодаря таким людям ЦАД работает уверенно каждый день!'
    },
    analyst: {
        badge: '🔮', title: 'Оракул Дельфийского Штаба',
        century: 'V век до нашей эры', theme: 'theme-analyst',
        description: 'Ты видишь то, что скрыто от остальных — паттерны, закономерности и скрытые угрозы. Подобно оракулам древности, ты предсказываешь будущее на основе фактов и цифр. Для ЦАД это редкая и очень ценная сила.'
    },
    justice: {
        badge: '⚖️', title: 'Рыцарь Кодекса Справедливости',
        century: 'XII век', theme: 'theme-justice',
        description: 'Закон — твой меч, справедливость — щит! Ни один документ не пройдёт без твоей экспертизы, ни один договор — без твоей печати. В ЦАД таких благородных рыцарей уважительно именуют Хранитель Порядка и Права!'
    },
    command: {
        badge: '👑', title: 'Полководец Великой Архивной Армии',
        century: 'XVIII век', theme: 'theme-command',
        description: 'Ты рождён командовать! Подобно Суворову, ты ведёшь за собой и побеждаешь — стратегия, тактика и мотивация команды всё в твоих руках. Такие прирождённые лидеры делают ЦАД сильнее!'
    },
    fortress: {
        badge: '🏰', title: 'Мастер-Комендант Петропавловской Крепости',
        century: 'XIX век', theme: 'theme-fortress',
        description: 'Ты — каменная опора любой цитадели! Твои золотые руки чинят всё — от кровли до водопровода. Без тебя стены рухнут, а гарнизон замёрзнет. Таких незаменимых воинов уважают, для ЦАД вы настоящая опора!'
    },
    archive: {
        badge: '📚', title: 'Хранитель Александрийской Библиотеки',
        century: 'III век до нашей эры', theme: 'theme-archive',
        description: 'Ты — хранитель мудрости веков! Каждый документ для тебя бесценен, каждый архив — храм знаний. Ты сохраняешь прошлое для будущего. В ЦАД ты — настоящий архивариус, душа и сердце всего дела!'
    }
};

const loadingMessages = [
    'Генерал-Архивариус открывает секретное досье...',
    'Сверяем с архивами всех эпох...',
    'Расшифровываем древний манускрипт...',
    'Консультируемся с оракулом Петропавловской крепости...',
    'Ваш результат почти готов...'
];

function $(id) { return document.getElementById(id); }

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
    $(id).classList.add('active');
}

function createFloatingStars() {
    var container = $('floating-stars');
    var symbols = ['★', '✦', '✧', '✵'];
    for (var i = 0; i < 18; i++) {
        var star = document.createElement('div');
        star.className = 'floating-star';
        star.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        star.style.left = Math.random() * 100 + '%';
        star.style.fontSize = (0.5 + Math.random() * 0.9) + 'rem';
        star.style.animationDuration = (9 + Math.random() * 13) + 's';
        star.style.animationDelay = (Math.random() * 12) + 's';
        container.appendChild(star);
    }
}

var startX = 0, startY = 0, currentX = 0, isDragging = false;
var SWIPE_THRESHOLD = 75;

function initSwipe() {
    var card = $('swipe-card');
    card.addEventListener('touchstart', onDragStart, { passive: true });
    document.addEventListener('touchmove', onDragMove, { passive: false });
    document.addEventListener('touchend', onDragEnd);
    card.addEventListener('mousedown', onDragStart);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
}

function getX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }
function getY(e) { return e.touches ? e.touches[0].clientY : e.clientY; }

function onDragStart(e) {
    var card = $('swipe-card');
    if (card.classList.contains('fly-left') || card.classList.contains('fly-right')) return;
    isDragging = true;
    startX = getX(e); startY = getY(e); currentX = 0;
    card.classList.add('dragging');
    card.style.transition = 'none';
}

function onDragMove(e) {
    if (!isDragging) return;
    currentX = getX(e) - startX;
    if (e.touches) {
        var dy = Math.abs(getY(e) - startY);
        if (dy > Math.abs(currentX) && Math.abs(currentX) < 20) return;
        e.preventDefault();
    }
    var card = $('swipe-card');
    card.style.transform = 'translateX(' + currentX + 'px) rotate(' + (currentX * 0.07) + 'deg)';
    var p = Math.min(Math.abs(currentX) / SWIPE_THRESHOLD, 1);
    if (currentX < -20) {
        $('overlay-left').style.opacity = p; $('overlay-right').style.opacity = 0;
    } else if (currentX > 20) {
        $('overlay-right').style.opacity = p; $('overlay-left').style.opacity = 0;
    } else {
        $('overlay-left').style.opacity = 0; $('overlay-right').style.opacity = 0;
    }
}

function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    var card = $('swipe-card');
    card.classList.remove('dragging');
    $('overlay-left').style.opacity = 0; $('overlay-right').style.opacity = 0;
    if (currentX < -SWIPE_THRESHOLD) {
        card.style.transition = ''; card.classList.add('fly-left');
        setTimeout(function() { answerQuestion('left'); }, 380);
    } else if (currentX > SWIPE_THRESHOLD) {
        card.style.transition = ''; card.classList.add('fly-right');
        setTimeout(function() { answerQuestion('right'); }, 380);
    } else {
        card.style.transition = 'transform 0.3s ease'; card.style.transform = '';
    }
}

function showQuestion(index) {
    if (index >= questions.length) { showLoadingScreen(); return; }
    var q = questions[index];
    var card = $('swipe-card');
    card.classList.remove('fly-left', 'fly-right', 'dragging', 'enter');
    card.style.transform = ''; card.style.transition = '';
    $('card-icon').textContent = q.icon;
    $('card-question').textContent = q.text;
    $('hint-left').textContent = q.left.label;
    $('hint-right').textContent = q.right.label;
    $('overlay-left').textContent = q.left.label;
    $('overlay-right').textContent = q.right.label;
    $('btn-tap-left').textContent = q.left.label;
    $('btn-tap-right').textContent = q.right.label;
    $('progress-fill').style.width = ((index / questions.length) * 100) + '%';
    $('question-counter').textContent = 'Задание ' + (index + 1) + ' из ' + questions.length;
    void card.offsetWidth;
    card.classList.add('enter');
}

// КАК РАБОТАЕТ РЕЗУЛЬТАТ:
// Каждый свайп/нажатие вызывает answerQuestion.
// Она читает category из вопроса и делает state.scores[category]++.
// После всех 10 вопросов calculateResult() ищет category с max очков.
function answerQuestion(direction) {
    var q = questions[state.currentQuestion];
    var choice = direction === 'left' ? q.left : q.right;
    state.scores[choice.category]++;
    state.currentQuestion++;
    showQuestion(state.currentQuestion);
}

function showLoadingScreen() {
    showScreen('screen-loading');
    var i = 0;
    $('loading-text').textContent = loadingMessages[0];
    var iv = setInterval(function() {
        i++;
        if (i < loadingMessages.length) {
            $('loading-text').style.opacity = 0;
            setTimeout(function() {
                $('loading-text').textContent = loadingMessages[i];
                $('loading-text').style.opacity = 1;
            }, 300);
        }
    }, 1100);
    setTimeout(function() { clearInterval(iv); showResultScreen(); }, loadingMessages.length * 1100 + 400);
}

var _lastResult = null;

function calculateResult() {
    var max = 0, winner = 'cyber';
    var cats = Object.keys(state.scores);
    for (var i = 0; i < cats.length; i++) {
        if (state.scores[cats[i]] > max) { max = state.scores[cats[i]]; winner = cats[i]; }
    }
    return results[winner];
}

function showResultScreen() {
    _lastResult = calculateResult();
    var r = _lastResult;
    var container = $('result-container');
    container.className = 'result-container ' + r.theme;
    // Также меняем фон всего экрана
    $('screen-result').className = 'screen active ' + r.theme;
    $('result-badge').textContent = r.badge;
    $('result-title').textContent = r.title;
    $('result-century').textContent = r.century;
    $('result-greeting').textContent = state.playerName + ', ты — настоящий герой!';
    $('result-description').textContent = r.description;
    showScreen('screen-result');
    $('screen-result').classList.add(r.theme);
    startConfetti();
}

var confettiFrame = null;

function startConfetti() {
    var canvas = $('confetti-canvas');
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    var ctx = canvas.getContext('2d');
    var colors = ['#d4af37','#f0d060','#ff6b6b','#6ba3ff','#4ecdc4','#fff','#ff69b4','#00ff88'];
    var particles = [];
    for (var i = 0; i < 90; i++) {
        particles.push({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height,
            w: 4 + Math.random() * 6, h: 7 + Math.random() * 8,
            c: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 3, vy: 1.5 + Math.random() * 3,
            r: Math.random() * 360, rs: (Math.random() - 0.5) * 10, op: 1
        });
    }
    var frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); frame++;
        var alive = false;
        for (var j = 0; j < particles.length; j++) {
            var p = particles[j];
            p.x += p.vx; p.y += p.vy; p.r += p.rs; p.vy += 0.025;
            if (frame > 100) p.op -= 0.012;
            if (p.op > 0 && p.y < canvas.height + 50) {
                alive = true;
                ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r * Math.PI / 180);
                ctx.globalAlpha = Math.max(0, p.op); ctx.fillStyle = p.c;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
            }
        }
        if (alive) confettiFrame = requestAnimationFrame(draw);
    }
    if (confettiFrame) cancelAnimationFrame(confettiFrame);
    draw();
}

// СОХРАНЕНИЕ КАРТИНКИ
// Рисует карточку с результатом на <canvas>, затем вызывает toBlob()
// + <a download> — браузер показывает стандартный диалог «Сохранить файл».
function saveAsImage() {
    if (!_lastResult) return;
    var r = _lastResult;
    var W = 600, H = 880;
    var canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext('2d');

    var bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#0d1b0d'); bg.addColorStop(0.5, '#1a2e1a'); bg.addColorStop(1, '#0d1b0d');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 4;
    roundRect(ctx, 14, 14, W-28, H-28, 18); ctx.stroke();
    ctx.strokeStyle = '#8b7525'; ctx.lineWidth = 1.5;
    roundRect(ctx, 26, 26, W-52, H-52, 14); ctx.stroke();

    ctx.fillStyle = '#d4af37'; ctx.font = '18px serif'; ctx.textAlign = 'center';
    ctx.fillText('★', 45, 50); ctx.fillText('★', W-45, 50);
    ctx.fillText('★', 45, H-38); ctx.fillText('★', W-45, H-38);

    ctx.fillStyle = '#d4af37'; ctx.font = 'bold 38px Georgia,serif'; ctx.textAlign = 'center';
    ctx.fillText('23 ФЕВРАЛЯ', W/2, 76);
    ctx.font = '15px Georgia,serif'; ctx.fillText('* * *', W/2, 100);
    ctx.fillStyle = '#c3b091'; ctx.font = '17px Georgia,serif';
    ctx.fillText('Центр Архивных Документов', W/2, 128);
    ctx.fillStyle = '#8b7525'; ctx.font = 'italic 13px Georgia,serif';
    ctx.fillText('Санкт-Петербург', W/2, 150);

    var cx = W/2, cy = 225, rad = 52;
    var mg = ctx.createRadialGradient(cx-8, cy-8, 4, cx, cy, rad);
    mg.addColorStop(0,'#f0d060'); mg.addColorStop(0.6,'#d4af37'); mg.addColorStop(1,'#8b6914');
    ctx.beginPath(); ctx.arc(cx, cy, rad, 0, Math.PI*2);
    ctx.fillStyle = mg; ctx.fill();
    ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 2; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, rad+10, 0, Math.PI*2);
    ctx.strokeStyle='#8b7525'; ctx.lineWidth=1.5; ctx.setLineDash([5,4]); ctx.stroke(); ctx.setLineDash([]);
    ctx.font = '44px serif'; ctx.fillStyle = '#000'; ctx.textAlign = 'center';
    ctx.fillText(r.badge, cx, cy+15);

    ctx.fillStyle = '#d4af37'; ctx.font = 'bold 22px Georgia,serif';
    var y = wrapText(ctx, r.title, W/2, 305, W-100, 28);
    ctx.fillStyle = '#8b7525'; ctx.font = 'italic 14px Georgia,serif';
    ctx.fillText(r.century, W/2, y+26);
    y = y + 50;

    ctx.strokeStyle='#8b7525'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(60,y); ctx.lineTo(W-60,y); ctx.stroke();
    ctx.fillStyle='#d4af37'; ctx.font='15px serif'; ctx.fillText('★', W/2, y+16); y += 36;

    ctx.fillStyle='#f5f0e1'; ctx.font='bold 18px Georgia,serif';
    ctx.fillText(state.playerName + ', ты — настоящий герой!', W/2, y); y += 32;

    ctx.fillStyle='#c3b091'; ctx.font='14px Georgia,serif';
    y = wrapText(ctx, r.description, W/2, y, W-90, 22) + 36;

    var sep = Math.max(y, 720);
    ctx.strokeStyle='#8b7525'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(60,sep); ctx.lineTo(W-60,sep); ctx.stroke();
    ctx.fillStyle='#d4af37'; ctx.font='bold 17px Georgia,serif';
    ctx.fillText('С Днём Защитника Отечества!', W/2, sep+36);
    ctx.fillStyle='#c3b091'; ctx.font='italic 13px Georgia,serif';
    ctx.fillText('Приказом Генерал-Архивариуса ЦАД', W/2, sep+60);
    ctx.fillStyle='#8b7525'; ctx.font='12px Georgia,serif';
    ctx.fillText('Санкт-Петербург, 23 февраля 2026', W/2, sep+80);

    canvas.toBlob(function(blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'CAD_23fevralya_' + state.playerName + '.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
    }, 'image/png');
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' '), line = '', yPos = y;
    for (var i = 0; i < words.length; i++) {
        var test = line + words[i] + ' ';
        if (ctx.measureText(test).width > maxWidth && line) {
            ctx.fillText(line.trim(), x, yPos);
            line = words[i] + ' '; yPos += lineHeight;
        } else { line = test; }
    }
    ctx.fillText(line.trim(), x, yPos);
    return yPos;
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
    ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
    ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
    ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
}

function resetGame() {
    state.currentQuestion = 0;
    state.scores = { cyber: 0, analyst: 0, justice: 0, command: 0, fortress: 0, archive: 0 };
    _lastResult = null;
    if (confettiFrame) {
        cancelAnimationFrame(confettiFrame);
        var c = $('confetti-canvas');
        c.getContext('2d').clearRect(0, 0, c.width, c.height);
    }
}

function init() {
    createFloatingStars();
    initSwipe();

    $('btn-start').addEventListener('click', function() {
        showScreen('screen-name');
        setTimeout(function() { $('player-name').focus(); }, 500);
    });

    $('player-name').addEventListener('input', function(e) {
        $('btn-name').disabled = e.target.value.trim().length === 0;
    });
    $('player-name').addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.value.trim()) $('btn-name').click();
    });

    $('btn-name').addEventListener('click', function() {
        state.playerName = $('player-name').value.trim();
        $('briefing-text').textContent =
            'Итак, ' + state.playerName + '! Генерал-Архивариус ЦАД рад приветствовать тебя! ' + 
            'Сегодня без строевого шага и суровых приказов — у нас тёплая миссия ко Дню защитника Отечества: ' +
            '«Кто ты, воин — в строю ЦАД?» ' +
            'Тебя ждут 15 "боевых" ситуаций —  ' +
            'свайпай карточку влево или вправо, или жми кнопки снизу. Вперёд, боец!';
        showScreen('screen-briefing');
    });

    $('btn-briefing').addEventListener('click', function() {
        resetGame();
        showScreen('screen-question');
        showQuestion(0);
    });

    $('btn-tap-left').addEventListener('click', function() {
        var card = $('swipe-card');
        if (card.classList.contains('fly-left') || card.classList.contains('fly-right')) return;
        card.classList.add('fly-left');
        setTimeout(function() { answerQuestion('left'); }, 380);
    });

    $('btn-tap-right').addEventListener('click', function() {
        var card = $('swipe-card');
        if (card.classList.contains('fly-left') || card.classList.contains('fly-right')) return;
        card.classList.add('fly-right');
        setTimeout(function() { answerQuestion('right'); }, 380);
    });

    $('btn-save').addEventListener('click', saveAsImage);

    $('btn-restart').addEventListener('click', function() {
        resetGame();
        showScreen('screen-name');
        $('player-name').value = '';
        $('btn-name').disabled = true;
        setTimeout(function() { $('player-name').focus(); }, 500);
    });
}

document.addEventListener('DOMContentLoaded', init);
