let state = {
    knife: false
};

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
        ? `<b>Entras</b> por la puerta.`
        : `Caminas por la puerta grande a una cuarto extrañamente pequeña.
        En el suelo, ves un cuchillo oxidado. ¿Lo <b>recoges</b> para defenderte o <b>dejas?</b>.`),
        options: () => (state.knife
        ? {
                'entras': 'roomAfterSmall'
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
            'continúas': 'roomAfterSmall'
        }
    },
    'smallRoomNoKnife': {
        text: `¿No ecoges el cuchillo, <b>sales</b> por donde viniste, o <b>continúas?</b>`,
        options: {
            'sales': 'start',
            'continúas': 'roomAfterSmall'
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
            'izquierda': 'bigRoomLeft',
            'derecha': 'bigRoomRight'
        }
    },
    'bigRoomLeft': {
        text: `you go left`,
        options: {}
    },
    'bigRoomRight': {
        text: `you go right`,
        options: {}
    },
};
