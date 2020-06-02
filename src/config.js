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
        text: `Caminas por la puerta grande a una cuarto extrañamente pequeña.
        En el suelo, ves un cuchillo oxidado. ¿Lo <b>recoges</b> para defenderte o <b>dejas?</b>.`,
        options: {
            'recoges': 'smallRoomKnife',
            'dejas': 'smallRoomNoKnife'
        }
    },
    'smallRoomKnife': {
        text: () => {
            state.knife = true
            return `¿Recoges el cuchillo, <b>sales</b> por donde viniste, o <b>continúas?</b>`;
        },
        options: {
            'sales': 'start',
            'continúas': ''
        }
    },
    'smallRoomNoKnife': {
        text: `¿No ecoges el cuchillo, <b>sales</b> por donde viniste, o <b>continúas?</b>`,
        options: {
            'sales': 'start',
            'continúas': ''
        }
    },
    'bigRoom': {
        text: `Entras a una cuarto grande, al menos en comparación de tu entorno claustrofóbico.
        `,
        options: {}
    }
};
