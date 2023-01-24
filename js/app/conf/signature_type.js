/**
 * Created by exodus4d
 * static signature types
 *
 * (*) marked fields are in-game verified and
 * proofed, signature names (copy & paste from scanning window)
 */

 define([
     'i18n!'
 ], (__) => {
    'use strict';

    // signature sources
    // http://de.sistersprobe.wikia.com/wiki/EVE_Sister_Core_Scanner_Probe_Wiki

    // Combat sites ===================================================================================================

    let c1Combat = {
        1: __('Perimeter Ambush Point'),
        2: __('Perimeter Camp'),
        3: __('Phase Catalyst Node'),
        4: __('The Line')
    };

    let c2Combat = {
        1: __('Perimeter Checkpoint'),
        2: __('Perimeter Hangar'),
        3: __('The Ruins of Enclave Cohort 27'),
        4: __('Sleeper Data Sanctuary')
    };

    let c3Combat = {
        1: __('Fortification Frontier Stronghold'),
        2: __('Outpost Frontier Stronghold'),
        3: __('Solar Cell'),
        4: __('The Oruze Construct')
    };

    let c4Combat = {
        1: __('Frontier Barracks'),
        2: __('Frontier Command Post'),
        3: __('Integrated Terminus'),
        4: __('Sleeper Information Sanctum')
    };

    let c5Combat = {
        1: __('Core Garrison'), //*
        2: __('Core Stronghold'), //*
        3: __('Oruze Osobnyk'), //*
        4: __('Quarantine Area')
    };

    let c6Combat = {
        1: __('Core Citadel'), //*
        2: __('Core Bastion'), //*
        3: __('Strange Energy Readings'), //*
        4: __('The Mirror') //*
    };

    // Thera WH
    let c12Combat = {
        1: __('Epicenter'),
        2: __('Expedition Command Outpost Wreck'),
        3: __('Planetary Colonization Office Wreck'),
        4: __('Testing Facilities')
    };

    // Drifter Sentinel WH
    let c14Combat = {
        1: __('Monolith'),
        2: __('Wormhole in Rock Circle'),
        3: __('Opposing Spatial Rifts'),
        4: __('Sleeper Enclave Debris'),
        5: __('Crystal Resource')
    };

    // Drifter Barbican WH
    let c15Combat = {
        1: __('Wrecked Ships'),
        2: __('Unstable Wormhole'),
        3: __('Spatial Rift'),
        4: __('Heavily Guarded Spatial Rift'),
        5: __('Crystals')
    };

    // Drifter Vidette WH
    let c16Combat = {
        1: __('Ship Graveyard'),
        2: __('Sleeper Engineering Station'),
        3: __('Spatial Rift'),
        4: __('Sleeper Enclave in Coral Rock'),
        5: __('Crystals and Stone Circle')
    };

    // Drifter Conflux WH
    let c17Combat = {
        1: __('Monolith'),
        2: __('Caged Wormhole'),
        3: __('Rock Formation and Wormhole'),
        4: __('Particle Acceleration Array'),
        5: __('Guarded Asteroid Station')
    };

    // Drifter Redoubt WH
    let c18Combat = {
        1: __('Ship Graveyard'),
        2: __('Caged Wormhole'),
        3: __('Spatial Rift Generator'),
        4: __('Sleeper Enclave'),
        5: __('Hollow Asteroid')
    };

    // Relic sites ====================================================================================================

    // NullSec Relic sites, which can also spawn in C1, C2, C3 wormholes
    let nullRelic = {
        10: __('Ruined Angel Crystal Quarry'),
        11: __('Ruined Angel Monument Site'),
        12: __('Ruined Angel Science Outpost'),
        13: __('Ruined Angel Temple Site'),
        14: __('Ruined Blood Raider Crystal Quarry'),
        15: __('Ruined Blood Raider Monument Site'),
        16: __('Ruined Blood Raider Science Outpost'),
        17: __('Ruined Blood Raider Temple Site'),
        18: __('Ruined Guristas Crystal Quarry'),
        19: __('Ruined Guristas Monument Site'),
        20: __('Ruined Guristas Science Outpost'),
        21: __('Ruined Guristas Temple Site'),
        22: __('Ruined Sansha Crystal Quarry'),
        23: __('Ruined Sansha Monument Site'),
        24: __('Ruined Sansha Science Outpost'),
        25: __('Ruined Sansha Temple Site'),
        26: __('Ruined Serpentis Crystal Quarry'),
        27: __('Ruined Serpentis Monument Site'),
        28: __('Ruined Serpentis Science Outpost'),
        29: __('Ruined Serpentis Temple Site')
    };

    let c1Relic = Object.assign({}, nullRelic, {
        1: __('Forgotten Perimeter Coronation Platform'), //*
        2: __('Forgotten Perimeter Power Array') //*
    });

    let c2Relic = Object.assign({}, nullRelic, {
        1: __('Forgotten Perimeter Gateway'), //*
        2: __('Forgotten Perimeter Habitation Coils') //*
    });

    let c3Relic = Object.assign({}, nullRelic, {
        1: __('Forgotten Frontier Quarantine Outpost'), //*
        2: __('Forgotten Frontier Recursive Depot') //*
    });

    let c4Relic = {
        1: __('Forgotten Frontier Conversion Module'),
        2: __('Forgotten Frontier Evacuation Center')
    };

    let c5Relic = {
        1: __('Forgotten Core Data Field'),
        2: __('Forgotten Core Information Pen')
    };

    let c6Relic = {
        1: __('Forgotten Core Assembly Hall'), //*
        2: __('Forgotten Core Circuitry Disassembler') //*
    };

    // Data sites =====================================================================================================

    // NulSec Data sites, which can also spawn in C1, C2, C3 wormholes
    let nullData = {
        10: __('Abandoned Research Complex DA005'),
        11: __('Abandoned Research Complex DA015'),
        12: __('Abandoned Research Complex DC007'),
        13: __('Abandoned Research Complex DC021'),
        14: __('Abandoned Research Complex DC035'),
        15: __('Abandoned Research Complex DG003'),
        16: __('Central Angel Command Center'),
        17: __('Central Angel Data Mining Site'),
        18: __('Central Angel Sparking Transmitter'),
        19: __('Central Angel Survey Site'),
        20: __('Central Blood Raider Command Center'),
        21: __('Central Blood Raider Data Mining Site'),
        22: __('Central Blood Raider Sparking Transmitter'),
        23: __('Central Blood Raider Survey Site'),
        24: __('Central Guristas Command Center'),
        25: __('Central Guristas Data Mining Site'),
        26: __('Central Guristas Sparking Transmitter'),
        27: __('Central Guristas Survey Site'),
        28: __('Central Sansha Command Center'),
        29: __('Central Sansha Data Mining Site'),
        30: __('Central Sansha Sparking Transmitter'),
        31: __('Central Sansha Survey Site'),
        32: __('Central Serpentis Command Center'),
        33: __('Central Serpentis Data Mining Site'),
        34: __('Central Serpentis Sparking Transmitter'),
        35: __('Central Serpentis Survey Site')
    };

    let c1Data = Object.assign({}, nullData, {
        1: __('Unsecured Perimeter Amplifier'), //*
        2: __('Unsecured Perimeter Information Center') //*
    });

    let c2Data = Object.assign({}, nullData, {
        1: __('Unsecured Perimeter Comms Relay'), //*
        2: __('Unsecured Perimeter Transponder Farm') //*
    });

    let c3Data = Object.assign({}, nullData, {
        1: __('Unsecured Frontier Database'), //*
        2: __('Unsecured Frontier Receiver') //*
    });

    let c4Data = {
        1: __('Unsecured Frontier Digital Nexus'),
        2: __('Unsecured Frontier Trinary Hub')
    };

    let c5Data = {
        1: __('Unsecured Frontier Enclave Relay'),
        2: __('Unsecured Frontier Server Bank')
    };

    let c6Data = {
        1: __('Unsecured Core Backup Array'), //*
        2: __('Unsecured Core Emergence') //*
    };

    // Gas sites ======================================================================================================

    let c1Gas = {
        1: __('Barren Perimeter Reservoir'), //*
        2: __('Token Perimeter Reservoir'), //*
        3: __('Minor Perimeter Reservoir'), //*
        4: __('Sizeable Perimeter Reservoir'), //*
        5: __('Ordinary Perimeter Reservoir') //*
    };

    let c2Gas = {
        1: __('Barren Perimeter Reservoir'), //*
        2: __('Token Perimeter Reservoir'), //*
        3: __('Minor Perimeter Reservoir'), //*
        4: __('Sizeable Perimeter Reservoir'), //*
        5: __('Ordinary Perimeter Reservoir') //*
    };

    let c3Gas = {
        1: __('Barren Perimeter Reservoir'), //*
        2: __('Token Perimeter Reservoir'), //*
        3: __('Minor Perimeter Reservoir'), //*
        4: __('Sizeable Perimeter Reservoir'), //*
        5: __('Ordinary Perimeter Reservoir'), //*
        6: __('Bountiful Frontier Reservoir'), //*
        7: __('Vast Frontier Reservoir') //*
    };

    let c4Gas = {
        1: __('Barren Perimeter Reservoir'), //*
        2: __('Token Perimeter Reservoir'), //*
        3: __('Minor Perimeter Reservoir'), //*
        4: __('Sizeable Perimeter Reservoir'), //*
        5: __('Ordinary Perimeter Reservoir'), //*
        6: __('Vast Frontier Reservoir'), //*
        7: __('Bountiful Frontier Reservoir') //*
    };

    let c5Gas = {
        1: __('Barren Perimeter Reservoir'), //*
        2: __('Minor Perimeter Reservoir'), //*
        3: __('Ordinary Perimeter Reservoir'), //*
        4: __('Sizeable Perimeter Reservoir'), //*
        5: __('Token Perimeter Reservoir'), //*
        6: __('Bountiful Frontier Reservoir'), //*
        7: __('Vast Frontier Reservoir'), //*
        8: __('Instrumental Core Reservoir'), //*
        9: __('Vital Core Reservoir') //*
    };

    let c6Gas = {
        1: __('Barren Perimeter Reservoir'), //*
        2: __('Minor Perimeter Reservoir'), //*
        3: __('Ordinary Perimeter Reservoir'), //*
        4: __('Sizeable Perimeter Reservoir'), //*
        5: __('Token Perimeter Reservoir'), //*
        6: __('Bountiful Frontier Reservoir'), //*
        7: __('Vast Frontier Reservoir'), //*
        8: __('Instrumental Core Reservoir'), //*
        9: __('Vital Core Reservoir') //*
    };
    
    // Ore sites ======================================================================================================

    let c1Ore = {
        1: __('Ordinary Perimeter Deposit'), //*
        2: __('Common Perimeter Deposit'), //*
        3: __('Unexceptional Frontier Deposit'), //*
        4: __('Average Frontier Deposit'), //*
        5: __('Isolated Core Deposit'), //*
        6: __('Uncommon Core Deposit') //*
    };

    let c2Ore = {
        1: __('Ordinary Perimeter Deposit'), //*
        2: __('Common Perimeter Deposit'), //*
        3: __('Unexceptional Frontier Deposit'), //*
        4: __('Average Frontier Deposit'), //*
        5: __('Isolated Core Deposit'), //*
        6: __('Uncommon Core Deposit') //*
    };

    let c3Ore = {
        1: __('Ordinary Perimeter Deposit'), //*
        2: __('Common Perimeter Deposit'), //*
        3: __('Unexceptional Frontier Deposit'), //*
        4: __('Average Frontier Deposit'), //*
        5: __('Infrequent Core Deposit'), //*
        6: __('Unusual Core Deposit') //*
    };

    let c4Ore = {
        1: __('Ordinary Perimeter Deposit'), //*
        2: __('Common Perimeter Deposit'), //*
        3: __('Unexceptional Frontier Deposit'), //*
        4: __('Average Frontier Deposit'), //*
        5: __('Unusual Core Deposit'), //*
        6: __('Infrequent Core Deposit') //*
    };

    let c5Ore = {
        1: __('Average Frontier Deposit'), //*
        2: __('Unexceptional Frontier Deposit'), //*
        3: __('Uncommon Core Deposit'), //*
        4: __('Ordinary Perimeter Deposit'), //*
        5: __('Common Perimeter Deposit'), //*
        6: __('Exceptional Core Deposit'), //*
        7: __('Infrequent Core Deposit'), //*
        8: __('Unusual Core Deposit'), //*
        9: __('Rarified Core Deposit'), //*
        10: __('Isolated Core Deposit') //*
    };

    let c6Ore = {
        1: __('Ordinary Perimeter Deposit'), //*
        2: __('Common Perimeter Deposit'), //*
        3: __('Unexceptional Frontier Deposit'), //*
        4: __('Average Frontier Deposit'), //*
        5: __('Rarified Core Deposit') //*
    };

    let c13Ore = {
        1: __('Shattered Debris Field'),
        2: __('Shattered Ice Field')
    };

    // Wormholes ======================================================================================================

    // all k-space exits are static or K162
    let c1WH = {
        1:  __('H121 - C1'),
        2:  __('C125 - C2'),
        3:  __('O883 - C3'),
        4:  __('M609 - C4'),
        5:  __('L614 - C5'),
        6:  __('S804 - C6'),
        7:  __('N110 - H'),
        8:  __('J244 - L'),
        9:  __('Z060 - 0.0'),
        10: __('F353 - C12 Thera')
    };

    // all w-space -> w-space are statics or K162
    let c2WH = {
        1:  __('Z647 - C1'),
        2:  __('D382 - C2'),
        3:  __('O477 - C3'),
        4:  __('Y683 - C4'),
        5:  __('N062 - C5'),
        6:  __('R474 - C6'),
        7:  __('B274 - H'),
        8:  __('A239 - L'),
        9:  __('E545 - 0.0'),
        10: __('F135 - C12 Thera'),
        11: __('F216 - T Pochven')
    };

    // all k-space exits are static or K162
    let c3WH = {
        1:  __('V301 - C1'),
        2:  __('I182 - C2'),
        3:  __('N968 - C3'),
        4:  __('T405 - C4'),
        5:  __('N770 - C5'),
        6:  __('A982 - C6'),
        7:  __('D845 - H'),
        8:  __('U210 - L'),
        9:  __('K346 - 0.0'),
        10: __('F135 - C12 Thera'),
        11: __('F216 - T Pochven')
    };

    // no *wandering* w-space -> w-space
    // all holes are statics or K162
    let c4WH = {
        1:  __('P060 - C1'),
        2:  __('N766 - C2'),
        3:  __('C247 - C3'),
        4:  __('X877 - C4'),
        5:  __('H900 - C5'),
        6:  __('U574 - C6'),
        7:  __('S047 - H'),
        8:  __('N290 - L'),
        9:  __('K329 - 0.0'),
        10: __('F216 - T Pochven')
    };

    let c5WH = {
        1:  __('Y790 - C1'),
        2:  __('D364 - C2'),
        3:  __('M267 - C3'),
        4:  __('E175 - C4'),
        5:  __('H296 - C5'),
        6:  __('V753 - C6'),
        7:  __('D792 - H'),
        8:  __('C140 - L'),
        9:  __('Z142 - 0.0'),
        10: __('F216 - T Pochven')
    };

    let c6WH = {
        1:  __('Q317 - C1'),
        2:  __('G024 - C2'),
        3:  __('L477 - C3'),
        4:  __('Z457 - C4'),
        5:  __('V911 - C5'),
        6:  __('W237 - C6'),
        7:  __('B520 - H'),
        8:  __('D792 - H'),
        9:  __('C140 - L'),
        10: __('C391 - L'),
        11: __('C248 - 0.0'),
        12: __('Z142 - 0.0'),
        13: __('F216 - T Pochven')
    };

    // Shattered WH (some of them are static)
    let c13WH = {
        1: __('P060 - C1'),
        2: __('Z647 - C1'),
        3: __('D382 - C2'),
        4: __('L005 - C2'),
        5: __('N766 - C2'),
        6: __('C247 - C3'),
        7: __('M267 - C3'),
        8: __('O477 - C3'),
        9: __('X877 - C4'),
        10: __('Y683 - C4'),
        11: __('H296 - C5'),
        12: __('H900 - C5'),
        13: __('H296 - C5'),
        14: __('N062 - C5'),    // ??
        15: __('V911 - C5'),
        16: __('U574 - C6'),
        17: __('V753 - C6'),
        18: __('W237 - C6'),
        19: __('B274 - H'),
        20: __('D792 - H'),
        21: __('D845 - H'),
        22: __('N110 - H'),
        23: __('A239 - L'),
        24: __('C391 - L'),
        25: __('J244 - L'),
        26: __('U201 - L'),    // ??
        27: __('U210 - L'),
        28: __('C248 - 0.0'),
        29: __('E545 - 0.0'),
        30: __('K346 - 0.0'),
        31: __('Z060 - 0.0')
    };

    let hsWH = {
        1: __('Z971 - C1'),
        2: __('R943 - C2'),
        3: __('X702 - C3'),
        4: __('O128 - C4'),
        5: __('M555 - C5'),
        6: __('B041 - C6'),
        7: __('A641 - H'),
        8: __('R051 - L'),
        9: __('V283 - 0.0'),
        10: __('T458 - C12 Thera'),
        11: __('C729 - T Pochven')
    };

    let lsWH = {
        1: __('Z971 - C1'),
        2: __('R943 - C2'),
        3: __('X702 - C3'),
        4: __('O128 - C4'),
        5: __('N432 - C5'),
        6: __('U319 - C6'),
        7: __('B449 - H'),
        8: __('N944 - L'),
        9: __('S199 - 0.0'),
        10: __('M164 - C12 Thera'),
        11: __('C729 - T Pochven')
    };

    let nullWH = {
        1: __('Z971 - C1'),
        2: __('R943 - C2'),
        3: __('X702 - C3'),
        4: __('O128 - C4'),
        5: __('N432 - C5'),
        6: __('U319 - C6'),
        7: __('B449 - H'),
        8: __('N944 - L'),
        9: __('S199 - 0.0'),
        10: __('L031 - C12 Thera'),
        11: __('C729 - T Pochven'),
        12: __('U372 - T Pochven')
    };

    let pochWH = {
        1: __('R081 - C4'),
        2: __('X450 - 0.0')
    };

    // ================================================================================================================
    //  Signature types
    // ================================================================================================================
    
    // signature types
    return {
        1: { // system type (wh)
            1: {    // C1 (area id)
                1: c1Combat,
                2: c1Relic,
                3: c1Data,
                4: c1Gas,
                5: c1WH,
                6: c1Ore,
                7: {}    // Ghost
            },
            2: {    // C2
                1: c2Combat,
                2: c2Relic,
                3: c2Data,
                4: c2Gas,
                5: c2WH,
                6: c2Ore,
                7: {}    // Ghost
            },
            3: {    // C3
                1: c3Combat,
                2: c3Relic,
                3: c3Data,
                4: c3Gas,
                5: c3WH,
                6: c3Ore,
                7: {}    // Ghost
            },
            4: {    // C4
                1: c4Combat,
                2: c4Relic,
                3: c4Data,
                4: c4Gas,
                5: c4WH,
                6: c4Ore,
                7: {}    // Ghost
            },
            5: {    // C5
                1: c5Combat,
                2: c5Relic,
                3: c5Data,
                4: c5Gas,
                5: c5WH,
                6: c5Ore,
                7: {}    // Ghost
            },
            6: {    // C6
                1: c6Combat,
                2: c6Relic,
                3: c6Data,
                4: c6Gas,
                5: c6WH,
                6: c6Ore,
                7: {    // Ghost
                    1: 'Superior Blood Raider Covert Research Facility' //*
                }
            },
            12: {   // Thera WH
                1: c12Combat
            },
            13: {   // Shattered WH
                5: c13WH,
                6: c13Ore
            },
            14: {   // Drifter Sentinel WH
                1: c14Combat
            },
            15: {   // Drifter Barbican WH
                1: c15Combat
            },
            16: {   // Drifter Vidette WH
                1: c16Combat
            },
            17: {   // Drifter Conflux WH
                1: c17Combat
            },
            18: {   // Drifter Redoubt WH
                1: c18Combat
            }
        }, // system type (k-space)
        2: {
            30: {   // High Sec
                5: hsWH
            },
            31: {   // Low Sec
                5: lsWH
            },
            32: {   // 0.0
                5: nullWH
            },
            33: {   // Pochven
                5: pochWH
            }
        }
    };
});
