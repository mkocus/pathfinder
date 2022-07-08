/**
 * Created by exodus4d on 06.07.2015.
 * static system effects
 */


define([
    'i18n!'
], (__) => {

    'use strict';

    /**
     * get system effect multiplier
     * @param areaId
     * @returns {number}
     */
    let getMultiplierByAreaId = areaId => {
        let multiply = 0;
        switch(areaId){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                multiply = areaId;  // C1-C6 holes
                break;
            case 13:
                multiply = 6;       // Shattered frigate holes
                break;
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                multiply = 2;       // Drifter space
                break;
        }

        return multiply;
    };


    let magnetar = {
        1: [
            {
                effect: __('Damage'),
                value: '+30%'
            }, {
                effect: __('Missile exp. radius'),
                value: '+15%'
            }, {
                effect: __('Drone tracking'),
                value: '-15%'
            }, {
                effect: __('Targeting range'),
                value: '-15%'
            }, {
                effect: __('Tracking speed'),
                value: '-15%'
            }, {
                effect: __('Target Painter strength'),
                value: '-15%'
            }
        ],
        2: [
            {
                effect: __('Damage'),
                value: '+44%'
            }, {
                effect: __('Missile exp. radius'),
                value: '+22%'
            }, {
                effect: __('Drone tracking'),
                value: '-22%'
            }, {
                effect: __('Targeting range'),
                value: '-22%'
            }, {
                effect: __('Tracking speed'),
                value: '-22%'
            }, {
                effect: __('Target Painter strength'),
                value: '-22%'
            }
        ],
        3: [
            {
                effect: __('Damage'),
                value: '+58%'
            }, {
                effect: __('Missile exp. radius'),
                value: '+29%'
            }, {
                effect: __('Drone tracking'),
                value: '-29%'
            }, {
                effect: __('Targeting range'),
                value: '-29%'
            }, {
                effect: __('Tracking speed'),
                value: '-29%'
            }, {
                effect: __('Target Painter strength'),
                value: '-29%'
            }
        ],
        4: [
            {
                effect: __('Damage'),
                value: '+72%'
            }, {
                effect: __('Missile exp. radius'),
                value: '+36%'
            }, {
                effect: __('Drone tracking'),
                value: '-36%'
            }, {
                effect: __('Targeting range'),
                value: '-36%'
            }, {
                effect: __('Tracking speed'),
                value: '-36%'
            }, {
                effect: __('Target Painter strength'),
                value: '-36%'
            }
        ],
        5: [
            {
                effect: __('Damage'),
                value: '+86%'
            }, {
                effect: __('Missile exp. radius'),
                value: '+43%'
            }, {
                effect: __('Drone tracking'),
                value: '-43%'
            }, {
                effect: __('Targeting range'),
                value: '-43%'
            }, {
                effect: __('Tracking speed'),
                value: '-43%'
            }, {
                effect: __('Target Painter strength'),
                value: '-43%'
            }
        ],
        6: [
            {
                effect: __('Damage'),
                value: '+100%'
            }, {
                effect: __('Missile exp. radius'),
                value: '+50%'
            }, {
                effect: __('Drone tracking'),
                value: '-50%'
            }, {
                effect: __('Targeting range'),
                value: '-50%'
            }, {
                effect: __('Tracking speed'),
                value: '-50%'
            }, {
                effect: __('Target Painter strength'),
                value: '-50%'
            }
        ]
    };

    let redGiant = {
        1: [
            {
                effect: __('Heat damage'),
                value: '+15%'
            }, {
                effect: __('Overload bonus'),
                value: '+30%'
            }, {
                effect: __('Smart Bomb range'),
                value: '+30%'
            }, {
                effect: __('Smart Bomb damage'),
                value: '+30%'
            }, {
                effect: __('Bomb damage'),
                value: '+30%'
            }
        ],
        2: [
            {
                effect: __('Heat damage'),
                value: '+22%'
            }, {
                effect: __('Overload bonus'),
                value: '+44%'
            }, {
                effect: __('Smart Bomb range'),
                value: '+44%'
            }, {
                effect: __('Smart Bomb damage'),
                value: '+44%'
            }, {
                effect: __('Bomb damage'),
                value: '+44%'
            }
        ],
        3: [
            {
                effect: __('Heat damage'),
                value: '+29%'
            }, {
                effect: __('Overload bonus'),
                value: '+58%'
            }, {
                effect: __('Smart Bomb range'),
                value: '+58%'
            }, {
                effect: __('Smart Bomb damage'),
                value: '+58%'
            }, {
                effect: __('Bomb damage'),
                value: '+58%'
            }
        ],
        4: [
            {
                effect: __('Heat damage'),
                value: '+36%'
            }, {
                effect: __('Overload bonus'),
                value: '+72%'
            }, {
                effect: __('Smart Bomb range'),
                value: '+72%'
            }, {
                effect: __('Smart Bomb damage'),
                value: '+72%'
            }, {
                effect: __('Bomb damage'),
                value: '+72%'
            }
        ],
        5: [
            {
                effect: __('Heat damage'),
                value: '+43%'
            }, {
                effect: __('Overload bonus'),
                value: '+86%'
            }, {
                effect: __('Smart Bomb range'),
                value: '+86%'
            }, {
                effect: __('Smart Bomb damage'),
                value: '+86%'
            }, {
                effect: __('Bomb damage'),
                value: '+86%'
            }
        ],
        6: [
            {
                effect: __('Heat damage'),
                value: '+50%'
            }, {
                effect: __('Overload bonus'),
                value: '+100%'
            }, {
                effect: __('Smart Bomb range'),
                value: '+100%'
            }, {
                effect: __('Smart Bomb damage'),
                value: '+100%'
            }, {
                effect: __('Bomb damage'),
                value: '+100%'
            }
        ]
    };

    let pulsar = {
        1: [
            {
                effect: __('Shield HP'),
                value: '+30%'
            }, {
                effect: __('Armor resist'),
                value: '-15%'
            }, {
                effect: __('Capacitor recharge'),
                value: '-15%'
            }, {
                effect: __('Signature'),
                value: '+30%'
            }, {
                effect: __('NOS/Neut drain'),
                value: '+30%'
            }
        ],
        2: [
            {
                effect: __('Shield HP'),
                value: '+44%'
            }, {
                effect: __('Armor resist'),
                value: '-22%'
            }, {
                effect: __('Capacitor recharge'),
                value: '-22%'
            }, {
                effect: __('Signature'),
                value: '+44%'
            }, {
                effect: __('NOS/Neut drain'),
                value: '+44%'
            }
        ],
        3: [
            {
                effect: __('Shield HP'),
                value: '+58%'
            }, {
                effect: __('Armor resist'),
                value: '-29%'
            }, {
                effect: __('Capacitor recharge'),
                value: '-29%'
            }, {
                effect: __('Signature'),
                value: '+58%'
            }, {
                effect: __('NOS/Neut drain'),
                value: '+58%'
            }
        ],
        4: [
            {
                effect: __('Shield HP'),
                value: '+72%'
            }, {
                effect: __('Armor resist'),
                value: '-36%'
            }, {
                effect: __('Capacitor recharge'),
                value: '-36%'
            }, {
                effect: __('Signature'),
                value: '+72%'
            }, {
                effect: __('NOS/Neut drain'),
                value: '+72%'
            }
        ],
        5: [
            {
                effect: __('Shield HP'),
                value: '+86%'
            }, {
                effect: __('Armor resist'),
                value: '-43%'
            }, {
                effect: __('Capacitor recharge'),
                value: '-43%'
            }, {
                effect: __('Signature'),
                value: '+86%'
            }, {
                effect: __('NOS/Neut drain'),
                value: '+86%'
            }
        ],
        6: [
            {
                effect: __('Shield HP'),
                value: '+100%'
            }, {
                effect: __('Armor resist'),
                value: '-50%'
            }, {
                effect: __('Capacitor recharge'),
                value: '-50%'
            }, {
                effect: __('Signature'),
                value: '+100%'
            }, {
                effect: __('NOS/Neut drain'),
                value: '+100%'
            }
        ]
    };

    let wolfRayet = {
        1: [
            {
                effect: __('Armor HP'),
                value: '+30%'
            }, {
                effect: __('Shield resist'),
                value: '-15%'
            }, {
                effect: __('Small Weapon damage'),
                value: '+60%'
            }, {
                effect: __('Signature size'),
                value: '-15%'
            }
        ],
        2: [
            {
                effect: __('Armor HP'),
                value: '+44%'
            }, {
                effect: __('Shield resist'),
                value: '-22%'
            }, {
                effect: __('Small Weapon damage'),
                value: '+88%'
            }, {
                effect: __('Signature size'),
                value: '-22%'
            }
        ],
        3: [
            {
                effect: __('Armor HP'),
                value: '+58%'
            }, {
                effect: __('Shield resist'),
                value: '-29%'
            }, {
                effect: __('Small Weapon damage'),
                value: '+116%'
            }, {
                effect: __('Signature size'),
                value: '-29%'
            }
        ],
        4: [
            {
                effect: __('Armor HP'),
                value: '+72%'
            }, {
                effect: __('Shield resist'),
                value: '-36%'
            }, {
                effect: __('Small Weapon damage'),
                value: '+144%'
            }, {
                effect: __('Signature size'),
                value: '-36%'
            }
        ],
        5: [
            {
                effect: __('Armor HP'),
                value: '+86%'
            }, {
                effect: __('Shield resist'),
                value: '-43%'
            }, {
                effect: __('Small Weapon damage'),
                value: '+172%'
            }, {
                effect: __('Signature size'),
                value: '-43%'
            }
        ],
        6: [
            {
                effect: __('Armor HP'),
                value: '+100%'
            }, {
                effect: __('Shield resist'),
                value: '-50%'
            }, {
                effect: __('Small Weapon damage'),
                value: '+200%'
            }, {
                effect: __('Signature size'),
                value: '-50%'
            }
        ]
    };

    let cataclysmic = {
        1: [
            {
                effect: __('Local armor repair amount'),
                value: '-15%'
            }, {
                effect: __('Local shield boost amount'),
                value: '-15%'
            }, {
                effect: __('Shield transfer amount'),
                value: '+30%'
            }, {
                effect: __('Remote repair amount'),
                value: '+30%'
            }, {
                effect: __('Capacitor capacity'),
                value: '+30%'
            }, {
                effect: __('Capacitor recharge time'),
                value: '+15%'
            }, {
                effect: __('Remote Capacitor Transmitter amount'),
                value: '-15%'
            }
        ],
        2: [
            {
                effect: __('Local armor repair amount'),
                value: '-22%'
            }, {
                effect: __('Local shield boost amount'),
                value: '-22%'
            }, {
                effect: __('Shield transfer amount'),
                value: '+44%'
            }, {
                effect: __('Remote repair amount'),
                value: '+44%'
            }, {
                effect: __('Capacitor capacity'),
                value: '+44%'
            }, {
                effect: __('Capacitor recharge time'),
                value: '+22%'
            }, {
                effect: __('Remote Capacitor Transmitter amount'),
                value: '-22%'
            }
        ],
        3: [
            {
                effect: __('Local armor repair amount'),
                value: '-29%'
            }, {
                effect: __('Local shield boost amount'),
                value: '-29%'
            }, {
                effect: __('Shield transfer amount'),
                value: '+58%'
            }, {
                effect: __('Remote repair amount'),
                value: '+58%'
            }, {
                effect: __('Capacitor capacity'),
                value: '+58%'
            }, {
                effect: __('Capacitor recharge time'),
                value: '+29%'
            }, {
                effect: __('Remote Capacitor Transmitter amount'),
                value: '-29%'
            }
        ],
        4: [
            {
                effect: __('Local armor repair amount'),
                value: '-36%'
            }, {
                effect: __('Local shield boost amount'),
                value: '-36%'
            }, {
                effect: __('Shield transfer amount'),
                value: '+72%'
            }, {
                effect: __('Remote repair amount'),
                value: '+72%'
            }, {
                effect: __('Capacitor capacity'),
                value: '+72%'
            }, {
                effect: __('Capacitor recharge time'),
                value: '+36%'
            }, {
                effect: __('Remote Capacitor Transmitter amount'),
                value: '-36%'
            }
        ],
        5: [
            {
                effect: __('Local armor repair amount'),
                value: '-43%'
            }, {
                effect: __('Local shield boost amount'),
                value: '-43%'
            }, {
                effect: __('Shield transfer amount'),
                value: '+86%'
            }, {
                effect: __('Remote repair amount'),
                value: '+86%'
            }, {
                effect: __('Capacitor capacity'),
                value: '+86%'
            }, {
                effect: __('Capacitor recharge time'),
                value: '+43%'
            }, {
                effect: __('Remote Capacitor Transmitter amount'),
                value: '-43%'
            }
        ],
        6: [
            {
                effect: __('Local armor repair amount'),
                value: '-50%'
            }, {
                effect: __('Local shield boost amount'),
                value: '-50%'
            }, {
                effect: __('Shield transfer amount'),
                value: '+100%'
            }, {
                effect: __('Remote repair amount'),
                value: '+100%'
            }, {
                effect: __('Capacitor capacity'),
                value: '+100%'
            }, {
                effect: __('Capacitor recharge time'),
                value: '+50%'
            }, {
                effect: __('Remote Capacitor Transmitter amount'),
                value: '-50%'
            }
        ]
    };

    let blackHole = {
        1: [
            {
                effect: __('Missile velocity'),
                value: '+15%'
            }, {
                effect: __('Missile exp. velocity'),
                value: '+30%'
            }, {
                effect: __('Ship velocity'),
                value: '+30%'
            }, {
                effect: __('Stasis Webifier strength'),
                value: '-15%'
            }, {
                effect: __('Inertia'),
                value: '+15%'
            }, {
                effect: __('Targeting range'),
                value: '+30%'
            }
        ],
        2: [
            {
                effect: __('Missile velocity'),
                value: '+22%'
            }, {
                effect: __('Missile exp. velocity'),
                value: '+44%'
            }, {
                effect: __('Ship velocity'),
                value: '+44%'
            }, {
                effect: __('Stasis Webifier strength'),
                value: '-22%'
            }, {
                effect: __('Inertia'),
                value: '+22%'
            }, {
                effect: __('Targeting range'),
                value: '+44%'
            }
        ],
        3: [
            {
                effect: __('Missile velocity'),
                value: '+29%'
            }, {
                effect: __('Missile exp. velocity'),
                value: '+58%'
            }, {
                effect: __('Ship velocity'),
                value: '+58%'
            }, {
                effect: __('Stasis Webifier strength'),
                value: '-29%'
            }, {
                effect: __('Inertia'),
                value: '+29%'
            }, {
                effect: __('Targeting range'),
                value: '+58%'
            }
        ],
        4: [
            {
                effect: __('Missile velocity'),
                value: '+36%'
            }, {
                effect: __('Missile exp. velocity'),
                value: '+72%'
            }, {
                effect: __('Ship velocity'),
                value: '+72%'
            }, {
                effect: __('Stasis Webifier strength'),
                value: '-36%'
            }, {
                effect: __('Inertia'),
                value: '+36%'
            }, {
                effect: __('Targeting range'),
                value: '+72%'
            }
        ],
        5: [
            {
                effect: __('Missile velocity'),
                value: '+43%'
            }, {
                effect: __('Missile exp. velocity'),
                value: '+86%'
            }, {
                effect: __('Ship velocity'),
                value: '+86%'
            }, {
                effect: __('Stasis Webifier strength'),
                value: '-43%'
            }, {
                effect: __('Inertia'),
                value: '+43%'
            }, {
                effect: __('Targeting range'),
                value: '+86%'
            }
        ],
        6: [
            {
                effect: __('Missile velocity'),
                value: '+50%'
            }, {
                effect: __('Missile exp. velocity'),
                value: '+100%'
            }, {
                effect: __('Ship velocity'),
                value: '+100%'
            }, {
                effect: __('Stasis Webifier strength'),
                value: '-50%'
            }, {
                effect: __('Inertia'),
                value: '+50%'
            }, {
                effect: __('Targeting range'),
                value: '+100%'
            }
        ]
    };

    // system effects
    return {
        getMultiplierByAreaId: getMultiplierByAreaId,
        wh: {
            magnetar: {
                1: magnetar[getMultiplierByAreaId(1)],
                2: magnetar[getMultiplierByAreaId(2)],
                3: magnetar[getMultiplierByAreaId(3)],
                4: magnetar[getMultiplierByAreaId(4)],
                5: magnetar[getMultiplierByAreaId(5)],
                6: magnetar[getMultiplierByAreaId(6)],
                16: magnetar[getMultiplierByAreaId(16)]
            },
            redGiant: {
                1: redGiant[getMultiplierByAreaId(1)],
                2: redGiant[getMultiplierByAreaId(2)],
                3: redGiant[getMultiplierByAreaId(3)],
                4: redGiant[getMultiplierByAreaId(4)],
                5: redGiant[getMultiplierByAreaId(5)],
                6: redGiant[getMultiplierByAreaId(6)],
                14: redGiant[getMultiplierByAreaId(14)]
            },
            pulsar: {
                1: pulsar[getMultiplierByAreaId(1)],
                2: pulsar[getMultiplierByAreaId(2)],
                3: pulsar[getMultiplierByAreaId(3)],
                4: pulsar[getMultiplierByAreaId(4)],
                5: pulsar[getMultiplierByAreaId(5)],
                6: pulsar[getMultiplierByAreaId(6)],
                17: pulsar[getMultiplierByAreaId(17)]
            },
            wolfRayet: {
                1: wolfRayet[getMultiplierByAreaId(1)],
                2: wolfRayet[getMultiplierByAreaId(2)],
                3: wolfRayet[getMultiplierByAreaId(3)],
                4: wolfRayet[getMultiplierByAreaId(4)],
                5: wolfRayet[getMultiplierByAreaId(5)],
                6: wolfRayet[getMultiplierByAreaId(6)],
                13: wolfRayet[getMultiplierByAreaId(13)],
                18: wolfRayet[getMultiplierByAreaId(18)]
            },
            cataclysmic: {
                1: cataclysmic[getMultiplierByAreaId(1)],
                2: cataclysmic[getMultiplierByAreaId(2)],
                3: cataclysmic[getMultiplierByAreaId(3)],
                4: cataclysmic[getMultiplierByAreaId(4)],
                5: cataclysmic[getMultiplierByAreaId(5)],
                6: cataclysmic[getMultiplierByAreaId(6)],
                15: cataclysmic[getMultiplierByAreaId(15)]
            },
            blackHole: {
                1: blackHole[getMultiplierByAreaId(1)],
                2: blackHole[getMultiplierByAreaId(2)],
                3: blackHole[getMultiplierByAreaId(3)],
                4: blackHole[getMultiplierByAreaId(4)],
                5: blackHole[getMultiplierByAreaId(5)],
                6: blackHole[getMultiplierByAreaId(6)]
            }
        }
    };
});