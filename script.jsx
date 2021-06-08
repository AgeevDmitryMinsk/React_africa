function Animal(props) {
    let isNocturnal
    // Получаем текущий час на часах
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    // Проверяем, ночь ли сейчас
    const isNight = hours > 22 || hours < 6;
    // В зависимости от времени суток разные животные либо спят, либо бодрствуют
    const isSleeping = (isNight && !props.isNocturnal) || (!isNight && props.isNocturnal);

    return (
        <div className="animal"> {hours}:{minutes>10 ? minutes : '0'+minutes} {isNight ? 'ночь' : 'день'} {props.isNocturnal ? 'ночное' : 'дневное'} {isSleeping ? 'спит' : 'бодрствует'}

            <div className="icon">{isSleeping ? '💤' : props.icon}</div>
            <div className="info">
                <h3>{props.name}</h3>
                <span>Рост: {props.height}</span>
            </div>
        </div>
    );
}



ReactDOM.render((
    <>
        <h2>Африка</h2>
        <Animal icon="🦒" name="Жираф" height="4 метра" isNocturnal={false} />
        <Animal icon="🦔" name="Ёж" height="15 сантиметров" isNocturnal={true} />
        <Animal icon="🦨" name="Скунс" height="никто не мерял" isNocturnal={true} />
    </>
), document.querySelector('#root'));

