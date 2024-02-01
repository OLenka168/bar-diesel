import { YMaps, Map } from '@pbe/react-yandex-maps';

function Contacts() {
    return(
        <div>
            <div className='contacts'>
            <div>
                <h1>Контакты</h1>
            </div>
            <div> 
                <h3>Москва, ул. Лесная, д.20с1</h3>
            </div>
            <div className='contact'>
                <h3>+7 (965) 371-47-31</h3>
            </div>
            <div className='contact'>
                <h3>Местонахождение</h3>
            </div>
            <YMaps>
                <Map defaultState={{ center: [55.780627, 37.592138], zoom: 19 }} />
            </YMaps>
            </div>
        </div>
    )
}

export default Contacts;