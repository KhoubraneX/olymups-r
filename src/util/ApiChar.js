export default {
    characters : [
        {
            id: 0
            , name: { avatarName: "Achilles 1", className: "Achilles" }
            , stateInfo: { type: "Achilles", Status: "Resting", Rarity: "Common" }
            , img: { icon: "Mask group-4.png", avatar: "Achilles.png" }
            , lvlInfo: { lvl: 2, progress: { pross: 4, total: 8 } }
            , isActive: true
            , trainingInfo: {
                isTrainig: false,
                timeTrainig: { days: 0, houres: 0 },
                dateExteped : null,
                p_givenToCh: 0,
                process: 0,
                daySelect : { id: null, day: null, label: null, p_givenToCh: { start: null, end: null } }
            }
        },
        {
            id: 1
            , name: { avatarName: "Medusa 1", className: "Medusa" }
            , stateInfo: { type: "Medusa", Status: "Resting", Rarity: "Gold" }
            , img: { icon: "Mask group-3.png", avatar: "Medusa.png" }
            , lvlInfo: { lvl: 3, progress: { pross: 6, total: 16 } }
            , isActive: false
            , trainingInfo: {
                isTrainig: false,
                timeTrainig: { days: 0, houres: 0 },
                dateExteped : null,
                process: 0,
                p_givenToCh: 0,
                daySelect : { id: null, day: null, label: null, p_givenToCh: { start: null, end: null } }
            }
        },
        {
            id: 2
            , name: { avatarName: "Medusa 2", className: "Medusa" }
            , stateInfo: { type: "Medusa", Status: "Resting", Rarity: "Gold" }
            , img: { icon: "Mask group-3.png", avatar: "Medusa.png" }
            , lvlInfo: { lvl: 3, progress: { pross: 4, total: 4 } }
            , isActive: false
            , trainingInfo: {
                isTrainig: false,
                timeTrainig: { days: 0, houres: 0 },
                dateExteped : null,
                p_givenToCh: 0,
                process: 0,
                daySelect : { id: null, day: null, label: null, p_givenToCh: { start: null, end: null } }
            }
        },
        {
            id: 3
            , name: { avatarName: "Sbata", className: "Sbata" }
            , stateInfo: { type: "Sbata", Status: "Resting", Rarity: "Gold" }
            , img: { icon: "Mask group-6.png", avatar: "sbata.png" }
            , lvlInfo: { lvl: 4, progress: { pross: 6, total: 10 } }
            , isActive: false
            , trainingInfo: {
                isTrainig: false,
                timeTrainig: { days: 0, houres: 0 },
                dateExteped : null,
                p_givenToCh: 0,
                process: 0,
                daySelect : { id: null, day: null, label: null, p_givenToCh: { start: null, end: null } }
            }
        },
        {
            id: 4
            , name: { avatarName: "Zeus", className: "Zeus" }
            , stateInfo: { type: "Zeus", Status: "Resting", Rarity: "Diamond" }
            , img: { icon: "Mask group-1.png", avatar: "Zeus.png" }
            , lvlInfo: { lvl: 1, progress: { pross: 4, total: 6 } }
            , isActive: false
            , trainingInfo: {
                isTrainig: false,
                timeTrainig: { days: 0, houres: 0 },
                dateExteped : null,
                p_givenToCh: 0,
                process: 0,
                daySelect : { id: null, day: null, label: null, p_givenToCh: { start: null, end: null } }
            }
        }
    ],
    chests : [
        { name: { box: "Common Chest", class: "Common" }, img: { box: "Asset 3@4x 1.png" }, color_icon: "#9887ce" },
        { name: { box: "Uncommon Chest", class: "Uncommon" }, img: { box: "Asset 5@4x 1.png" }, color_icon: "#49a6d0" },
        { name: { box: "Rare Chest", class: "Rare" }, img: { box: "Asset 3@4x 1-1.png" }, color_icon: "#eebf20" },
        { name: { box: "Legendary Chest", class: "Legendary" }, img: { box: "Asset 3@4x 1-2.png" }, color_icon: "#47bac1" },
    ]
}

