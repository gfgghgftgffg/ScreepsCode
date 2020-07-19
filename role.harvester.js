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
            let sourceTaker = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter:(st) => st.structureType == STRUCTURE_SPAWN || (st.structureType == STRUCTURE_EXTENSION && st.store.getFreeCapacity(RESOURCE_ENERGY))
            });
            if(creep.transfer(sourceTaker, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sourceTaker);
            }
                
        }

    }

};