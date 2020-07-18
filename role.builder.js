var roleUpgrader = require("role.upgrader");

module.exports = {
    run: function(creep) {
        if(creep.store.energy == creep.store.getCapacity())
            creep.memory['fullCarry'] = true;
        else if(creep.store.energy == 0)
            creep.memory['fullCarry'] = false;
        
        if(!creep.memory['fullCarry']) {
            let source = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE)
                creep.moveTo(source);
        }
        else {
            let constructionSiteInRoom = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            
            if(constructionSiteInRoom == undefined) {
                roleUpgrader.run(creep);
            }
            else {
                if(creep.build(constructionSiteInRoom) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSiteInRoom);
                }
            }
            
                
        }

    }

};