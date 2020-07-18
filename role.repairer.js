var roleBuilder = require("role.builder");

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
            let brokenSiteInRoom = creep.pos.findClosestByPath(FIND_STRUCTURES,{
                filter : (bs) => (bs.hits < bs.hitsMax && bs.structureType != STRUCTURE_WALL)
            });
            
            if(brokenSiteInRoom == undefined) {
                roleBuilder.run(creep);
            }
            else {
                if(creep.repair(brokenSiteInRoom) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(brokenSiteInRoom);
                }
            }
            
                
        }

    }

};