const defaultState = {
    knife: false
};

let state = {};
Object.assign(state, defaultState);

function restart() {
    state = {};
    Object.assign(state, defaultState);
    return 'start';
}

export default {
    'start': {
        text: `Cuando abris tus ojos cansados, ves un cuarto tenue que tiene
        dos puertos, un <b>grande</b>, y un <b>pequeño</b>`,
        options: {
            'grande': 'smallRoom',
            'pequeño': 'bigRoom'
        }
    },
    'smallRoom': {
        text: () => (state.knife
//        ? `<b>Entras</b> por la puerta.`
        ? `<b>Sales</b> por donde viniste, o <b>continúas?`
        : `Caminas por la puerta grande a una cuarto extrañamente pequeña.
        En el suelo, ves un cuchillo oxidado. ¿Lo <b>recoges</b> para defenderte o <b>dejas?</b>.`),
        options: () => (state.knife
        ? {
                'sales': 'start',
                'continúas': 'lose1'
        }
        : {
                'recoges': 'smallRoomKnife',
                'dejas': 'smallRoomNoKnife'
        })
    },
    'smallRoomKnife': {
        text: () => {
            state.knife = true
            return `¿Recoges el cuchillo, <b>sales</b> por donde viniste, o <b>continúas?</b>`;
        },
        options: {
            'sales': 'start',
            'continúas': 'lose1'
        }
    },
    'smallRoomNoKnife': {
        text: `¿No ecoges el cuchillo, <b>sales</b> por donde viniste, o <b>continúas?</b>`,
        options: {
                'sales': 'start',
                'continúas': 'win'
        }
    },
    'roomAfterSmall': {
        text: () => (state.knife
        ? `die`
        : `survive`
        ),
        options: {}
    },
    'bigRoom': {
        text: `Entras a una cuarto grande, al menos en comparación de tu entorno claustrofóbico.
        En la pared, ves pinturas primitivas, pero son muy pequeñas y no tienes tus lentes. 
        ¿Vas a la puerta de la <b>izquierda</b>, o la <b>derecha</b>?`,
        options: {
            'izquierda': 'lose2',
            'derecha': 'lose3'
        }
    },
    'lose1': {
        text: `Cuando entras la cuarto, escuchas un fuerta "BAM". Las paredes
        se derrumban sobre tú. Tu cuchillo es Juego inútil y estás machacado.
        Juego terminado, escribe <b>reinciar</b> para jugar otra vez.`,
        options: {
            'reinciar': restart
        }
    },
    'lose2': {
        text: `Entras por la puerta izquierda a una cuarto desnuda.
        Caminas más lejo, pero aún no pasa nada.
        De repente, sientes una cuerda a tu pie. ¡Un cuerda de trampa!
        Con un clic mecánico, la habitación se llena de agua y te ahogas.
        Juego terminado, escribe <b>reinciar</b> para jugar otra vez.`,
        options: {
            'reinciar': restart
        }
    },
    'lose3': {
        text: `La puerta derecha está cubierta de vides, pero tiras los lejos de la puerta.
        Cuando finalmente abres la puerta y entras, el suelo es de papel y rasaga debajo 
        de tus pies. Mientras tu caes, piensas la decisión que la puerta derecha, hasta que 
        chocas el fondo. Juego terminado, escribe <b>reinciar</b> para jugar otra vez.`,
        options: {
            'reinciar': restart
        }
    },
    'win': {
        text: `Cuando entras por la puerta, ves el interior de un ascensor. 
        Entras más en la ascensor, y la puerta se cierra perfectamente detrás de tu. 
        Sientes un aceleración leve, y ves rocas móviles afuera de la ventana. 
        Por fin, las puertas se abren y caminas bajo en sol cegador. 
        Si queres probar un final otra, escribe <b>reinciar</b>.`,
        options: {
            'reinciar': restart
        }
    }
};
